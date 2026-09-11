---
date: "2026-09-11"
category: "Backend"
readTime: "11 min read"
title: "What Is Caching? A Backend Story About Speed, Strategy, and the Library Down the Street"
description: "Caching means keeping a copy of frequently-needed data somewhere fast and close by, instead of fetching..."
---

# What Is Caching? A Backend Story About Speed, Strategy, and the Library Down the Street

**TL;DR:** Caching means keeping a copy of frequently-needed data somewhere fast and close by, instead of fetching it from the slow, authoritative source every single time. This post walks through what caching actually is (Redis, Memcached, HTTP caching), the major strategies for reading and writing cached data, how browsers and CDNs use caching, and how a service like Cloudflare ties it all together — all through the story of a library, its front desk, and a network of branches.

---

## The Library Down the Street

Imagine a small local library. Every time a visitor wants a book, the librarian has to walk to the back stacks, search the shelves, find the book, and bring it up front. For a quiet Tuesday afternoon, that's fine. But imagine it's release day for the hottest new novel in town, and two hundred people show up asking for the exact same book, back to back.

Walking to the stacks two hundred times for the _same book_ is wasteful. A smart librarian would grab a few copies, keep them right on the front desk, and hand them out immediately to anyone who asks — no walk to the stacks required.

That front desk is a **cache**. The stacks in the back are your **database** — slower, but authoritative and complete. The librarian is your **application**, deciding when to check the desk first and when a trip to the stacks is unavoidable.

This is the entire idea behind caching in backend systems: keep the things people ask for most somewhere fast, so your "stacks" — your database, your origin server — don't have to do all the work, all the time.

[IMAGE: A friendly librarian standing between a front desk stacked with a few popular books and a long hallway leading to tall library stacks in the background]

---

## What Is Caching, Really?

At its core, caching is simple: **store a copy of data somewhere faster to access than the original source, so future requests can be served from that copy instead.**

That "somewhere faster" can take a few different forms depending on what you're building:

- **Redis** — an in-memory data store that's extremely popular for caching. Because it keeps data in RAM instead of on disk, reads and writes happen in fractions of a millisecond. Think of Redis as the front desk with a photographic memory — it can hold structured data (strings, lists, hashes, sets) and serve it back almost instantly.
- **Memcached** — a simpler, also in-memory cache, historically used for straightforward key-value caching (like "give me the value for this key, fast"). It's a bit like a front desk that only does one thing extremely well: quick lookups, no frills.
- **HTTP Caching** — caching that happens at the level of web requests themselves. Browsers and servers can agree, through HTTP headers like `Cache-Control` and `ETag`, that a resource (an image, a script, a whole page) doesn't need to be re-fetched every time — it can be reused from a stored copy until it expires or changes.

All three solve the same underlying problem — avoid unnecessary trips to the slow source — just at different layers of the system.

> **Key Takeaway:** Caching isn't one specific tool — it's a _pattern_. Redis and Memcached are in-memory caches for application data; HTTP caching applies that same idea to web resources like pages, scripts, and images.

---

## Top Caching Strategies

Once you've decided to have a front desk (a cache), you need rules for exactly _how_ the librarian uses it. Do they check the desk first, always? What happens when a new book is added to the collection — does it go straight to the desk, straight to the stacks, or both? These rules are your **caching strategies**, and they split neatly into two categories: strategies for _reading_ data and strategies for _writing_ it.

[IMAGE: A simple side-by-side diagram showing "Read Strategies" and "Write Strategies" as two labeled columns, each with small icons of an application, a cache, and a database]

### Reading Data: Cache Aside vs. Read Through

**Cache Aside (a.k.a. Lazy Loading)**

This is the most common pattern, and it puts the librarian firmly in charge:

1. A visitor asks for a book (the app requests data).
2. The librarian checks the front desk first (checks the cache).
3. If it's not there — a **cache miss** — the librarian walks to the stacks (queries the database).
4. They retrieve the book and bring it back.
5. Before handing it over, they also leave a copy on the desk, so the _next_ person who asks doesn't require a trip to the stacks.

The key detail: the application itself is responsible for checking the cache, going to the database on a miss, and then updating the cache afterward. The cache is "off to the side," only filled in as needed.

**Read Through**

In this pattern, the visitor never has to know or care whether the front desk has the book. They simply ask the librarian, and if it's not on the desk, the _desk itself_ (via a built-in assistant) walks back to the stacks, retrieves it, stores a copy, and returns it. The application just asks the cache — the cache handles the miss transparently.

The practical difference from cache aside is _where the responsibility lives_: with cache aside, your application code manages the miss. With read through, the caching layer manages it for you.

> **Key Takeaway:** Cache aside puts your application in the driver's seat on every miss. Read through delegates that responsibility to the cache itself, keeping your application code simpler.

### Writing Data: Write Around, Write Back, and Write Through

Reading is only half the story — new books get added to the library all the time, and updates need a strategy too.

**Write Around**

New data is written straight to the stacks (the database), skipping the front desk entirely. The next time someone asks for that item, it's a cache miss — the librarian fetches it from the stacks and _then_ places a copy on the desk for future visitors.

This avoids cluttering the desk with data that might never be requested again, at the cost of that first reader always experiencing a miss.

**Write Back (a.k.a. Write Behind)**

Here, the librarian writes constantly to the front desk (the cache) as changes come in, and only occasionally — in a batch, "once in a while" — carries a stack of updates back to the stacks (the database) to make them permanent.

This is fast for writes, since the desk update is instant, but it carries a risk: if something happens to the front desk before that batch update reaches the stacks, those changes could be lost.

**Write Through**

Every time something is written, it goes to _both_ the front desk and the stacks, immediately and together. The write isn't considered complete until both copies are updated.

This is safer — the cache and the database never disagree — but slightly slower for writes, since every update has to touch both places before it's confirmed.

[IMAGE: A three-panel comparison graphic showing Write Around, Write Back, and Write Through as different paths an arrow takes from "Application" to "Cache" and "Database"]

> **Key Takeaway:** Write around favors a lean cache. Write back favors write speed, at the cost of some risk. Write through favors consistency, at the cost of some speed. There's no universally "best" choice — only the right trade-off for your system.

---

## What Does a Browser Cache Do?

Your web browser keeps its own personal front desk — a small local cache of images, stylesheets, scripts, and pages you've recently visited. Think of it like a reader's own notebook of frequently-checked-out books: instead of walking to the library at all, they just flip through their notes.

That's why a webpage you've already visited often loads faster the second time — your browser doesn't need to re-download the logo, the CSS file, or the JavaScript bundle. It already has a copy, and the server told it (via HTTP caching headers) how long that copy is safe to reuse.

### What Does Clearing a Browser Cache Accomplish?

Sometimes that notebook gets outdated — a website updates its logo or fixes a bug in its script, but your browser is still confidently reusing the _old_ stored copy. Clearing your browser cache is like tearing out your old notes and forcing yourself to walk back to the library for a fresh copy of everything. It solves problems where a site looks broken, outdated, or "stuck," at the cost of briefly slower load times while everything gets re-fetched.

[IMAGE: A simple browser window icon with a small notebook beside it, representing the browser's local cache]

---

## What Is CDN Caching?

Now imagine the local library becomes so popular that people across the entire country want to borrow its books. Rather than making everyone travel to one central building, the library opens small branch locations in cities everywhere, each stocked with copies of the most popular books.

That's a **Content Delivery Network (CDN)**: a network of servers spread across many geographic locations, each holding cached copies of your website's content — images, videos, scripts, entire pages — so visitors are served from a nearby branch instead of one distant original server.

### What Is a CDN Cache Hit?

When a visitor's nearby branch already has the content they asked for, that's a **cache hit** — the fastest possible outcome. The branch hands it over immediately, with no need to contact the original library at all.

### What Is a Cache Miss?

If the nearby branch _doesn't_ have that content yet — maybe nobody in that region has requested it before — that's a **cache miss**. The branch has to reach back to the original server, fetch the content, serve it to the visitor, and (much like our librarian) keep a copy for next time.

### Where Are CDN Caching Servers Located?

CDN providers operate data centers — often called **edge locations** or **points of presence (PoPs)** — in cities all over the world, positioned as close as possible to where real users are. The goal is simple: shrink the physical distance data has to travel, since distance is one of the biggest contributors to loading delay.

### How Long Does Cached Data Remain in a CDN Server?

This depends on the **cache expiration policy** set for that content — typically controlled through the same kind of `Cache-Control` headers used in browser caching. Some content (like a company logo that rarely changes) might be cached for days or weeks. Other content (like a live news feed) might expire in seconds, or be marked as never eligible for caching at all. The origin server, essentially, tells each branch library exactly how long its copies stay trustworthy.

[IMAGE: A world map with several small dots representing CDN edge server locations, with lines connecting a central "origin server" to nearby edge nodes serving local users]

> **Key Takeaway:** A CDN is a network of "branch libraries" for your website's content. A cache hit means a nearby branch already had what the visitor needed; a cache miss means it had to be fetched from the original source first.

---

## How Do Other Kinds of Caching Work?

Caching shows up in more places than you might expect — anywhere a slow lookup can be replaced with a fast, stored answer.

**DNS Caching**

Every time you visit a website, your computer needs to translate a domain name (like `example.com`) into an IP address — a process called a DNS lookup. Doing this fresh, every single visit, would be slow. So your browser, operating system, and network all keep a cache of recent lookups, much like a phone book you've already flipped open once and dog-eared for next time. If the answer is already cached, there's no need to ask the wider internet's DNS servers again.

**Search Engine Caching**

Search engines like Google constantly crawl and index the web, storing simplified, searchable copies of pages so that when you search for something, the engine doesn't have to visit millions of live websites in real time. It searches its own cached index instead — like a librarian who has already read and catalogued every book in the building, so they can answer your question from memory rather than pulling every book off the shelf to check.

[IMAGE: A simple flow showing a user typing a search query, arrows pointing to a "cached index" rather than directly to live websites]

---

## How Does Cloudflare Use Caching?

Cloudflare is one of the best-known examples of CDN caching in action, sitting as a layer between visitors and a website's origin server — like a nationwide branch network standing in front of one central library.

When a request comes in, Cloudflare checks whether it already has a cached copy of the requested content at the edge location nearest to that visitor. If it does (a cache hit), it serves the content immediately, without ever bothering the origin server. If it doesn't (a cache miss), it fetches the content from the origin, serves it to the visitor, and — like every caching pattern we've covered — stores a copy for next time, following whatever cache expiration rules the site owner has configured.

Beyond just serving static files faster, this caching layer also shields the origin server from sudden traffic spikes, since a large portion of requests never need to reach it at all.

> **Key Takeaway:** Cloudflare's caching layer works exactly like our library metaphor at internet scale — checking nearby copies first, falling back to the original source only when necessary, and quietly protecting that original source from being overwhelmed.

---

## Bringing It All Together

We started with a librarian trying to avoid two hundred unnecessary trips to the back stacks — and it turns out that same basic idea powers nearly every fast system on the internet. Redis and Memcached are front desks for application data. HTTP caching and browser caches are personal notebooks that skip the trip entirely. CDNs and services like Cloudflare are entire networks of branch libraries, positioned exactly where readers are, so nobody has to travel far for a copy of what they need.

The strategies differ — cache aside versus read through, write around versus write back versus write through — but the underlying question is always the same one our librarian was asking: **how do I avoid doing the same slow work twice?**

## Try It Yourself

If you've built an Express or Node.js API before, try adding a simple Redis cache in front of one of your slowest database queries. Store the result with a short expiration time, check the cache before hitting the database, and watch your response times drop. It's a small change that makes the whole idea of caching click immediately.

---

## What to Learn Next

Caching is one piece of building backends that scale gracefully. A few natural next topics:

- **Cache invalidation** — the notoriously tricky problem of knowing _when_ a cached copy has gone stale and needs to be refreshed or removed.
- **Load balancing** — distributing incoming requests across multiple servers, so no single one becomes a bottleneck.
- **Database indexing** — speeding up the trips to the "stacks" themselves, for the requests that do need to reach the database.

Caching won't solve every performance problem on its own — but it's often the single highest-impact change you can make to a slow backend, and now you know exactly why.
