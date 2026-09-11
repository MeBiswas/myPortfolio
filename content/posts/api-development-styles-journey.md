---
date: "2026-09-11"
category: "Backend"
readTime: "14 min read"
title: "API Development Styles: A Journey from Curiosity to Confidence"
description: "It's a contract: Knock like this, and I promise to respond like that..."
---

# API Development Styles: A Journey from Curiosity to Confidence

**TL;DR:** Every API is a door into your house — the way visitors ask for things without wandering through your whole home uninvited. REST, SOAP, gRPC, and GraphQL are different styles of front door. Authentication and authorization decide who gets in and what they're allowed to touch once inside. And a whole toolkit of security concepts — HTTPS, hashing, CORS, CSP, OWASP — work together to make sure only the right people get through, and that nothing valuable leaks out along the way. This post walks through all of it, one room at a time.

_Read time: ~14 minutes_

---

## The House With Many Doors

Picture a house. Not just any house — a busy one, with people constantly knocking, asking for things, dropping things off, and needing answers. Maybe it's a small business run out of a home office. Visitors show up all day: customers wanting a product, delivery drivers dropping off packages, partners asking for updates.

You can't just leave the house wide open and let everyone wander freely into every room. That's chaos, and it's dangerous. Instead, you build **doors** — specific, controlled entry points where visitors can request exactly what they need, hand over what they're allowed to hand over, and leave with exactly what they came for.

In backend development, those doors are **APIs** (Application Programming Interfaces). An API is simply an agreed-upon way for one piece of software to ask another piece of software for something — a defined door, with defined rules, instead of an open floor plan.

But not all doors are built the same way. Some are simple front doors with a doorbell. Some are heavily formal government office entrances with paperwork required. Some are private hotlines reserved for trusted partners. And once someone's _at_ the door, you still need to figure out who they are, what they're allowed to do, and how to keep the whole house safe from people who show up with bad intentions.

That's the journey of this post: we're going to walk through the different kinds of doors backend developers build, how houses check IDs and hand out access, and the security systems that keep everything — and everyone — safe.

[IMAGE: A warm illustration of a house with several different styled front doors — a simple wooden door, an ornate formal door, a sleek intercom door, and a smart digital door — each representing a different API style]

---

## What Is an API, Really?

Before we compare door styles, let's be clear about what a door actually _does_. An API defines:

- **What you can ask for** (the available "rooms" or "services" behind the door)
- **How you ask for it** (the specific knock pattern, form, or request format)
- **What you'll get back** (the response — data, confirmation, or an error explaining why you were turned away)

That's it. It's a contract: "Knock like this, and I promise to respond like that." Everything else — REST, SOAP, gRPC, GraphQL — is just a different philosophy for _how_ that contract should be designed.

> **Key Takeaway:** An API isn't magic — it's an agreed-upon set of rules for asking for something and getting a response. Every style below is just a different way of writing that agreement.

---

## The Four Ways to Build a Front Door

### REST — The Friendly Front Door

**REST (Representational State Transfer)** is the most common API style on the web today, and it's built around a simple idea: everything is a "resource" — a customer, an order, a product — and you interact with it using a small, predictable set of actions: **GET** (fetch it), **POST** (create it), **PUT/PATCH** (update it), and **DELETE** (remove it).

Think of REST as a friendly front door with a clearly labeled doorbell system. Want to see the guest list? Ring the "GET guests" bell. Want to add a guest? Ring the "POST guest" bell. The visitor doesn't need to know how the house is organized internally — they just need to know which bell to press.

```
GET /users/42        → "Show me user 42"
POST /users           → "Create a new user"
PUT /users/42          → "Update user 42"
DELETE /users/42       → "Remove user 42"
```

REST is popular because it's predictable, uses standard HTTP methods everyone already understands, and doesn't require any special tooling to use.

### SOAP — The Formal Government Office

**SOAP (Simple Object Access Protocol)** is an older, much stricter API style, still common in banking, healthcare, and other industries where formality and reliability are non-negotiable.

If REST is a friendly doorbell, SOAP is a government office that requires every request to be submitted on an official, rigidly formatted form (written in XML), following strict rules about what fields must be present. There's no room for improvisation — but in exchange, you get very strong guarantees about structure, error handling, and security, which is exactly why industries with heavy compliance requirements still rely on it.

### gRPC — The Private Hotline

**gRPC** is a newer, high-performance API style built by Google, commonly used for fast communication _between_ backend services rather than with public-facing clients.

Picture a dedicated, private phone line running directly between two trusted business partners — no dialing, no small talk, just an instant, highly efficient connection built for speed. gRPC uses a compact binary format (instead of readable text like JSON or XML) and works especially well when two systems need to talk to each other constantly and quickly, like microservices within the same company.

### GraphQL — The Personal Concierge

**GraphQL** flips the usual model on its head. Instead of separate doors for separate resources, there's a single, smart concierge at one door who can fetch _exactly_ what you ask for — no more, no less — even if that means gathering pieces from several rooms in the house at once.

With REST, you might have to knock on three different doors (get the user, then their orders, then their payment history) and receive more data than you actually need each time. With GraphQL, you describe exactly what you want in a single request, and the concierge assembles precisely that — nothing extra, nothing missing.

[IMAGE: Four small labeled doors side by side — "REST: Friendly Doorbell," "SOAP: Formal Office," "gRPC: Private Hotline," "GraphQL: Personal Concierge" — each with a simple visual icon]

> **Key Takeaway:** REST is the flexible, everyday standard. SOAP favors strict formality for high-compliance industries. gRPC favors raw speed between trusted internal systems. GraphQL favors precision, letting the visitor ask for exactly what they need in one trip.

---

## Knowing Who's Knocking: Authentication vs. Authorization

Once a door style is chosen, the house still needs two separate questions answered every time someone knocks:

- **Authentication — "Who are you?"** This is the process of verifying identity. Are you really who you claim to be?
- **Authorization — "What are you allowed to do?"** Once we know who you are, this decides which rooms you can enter and which you can't.

These get confused constantly, so here's the distinction in one line: **authentication checks your ID; authorization checks your permissions.** A guest might be _authenticated_ (we know it's really them) but still not _authorized_ to walk into the owner's private office.

[IMAGE: A guard at a door checking a visitor's ID card (authentication) with a separate sign showing "Staff Only" and "Guests Only" doors representing authorization]

> **Key Takeaway:** Authentication proves identity. Authorization decides access. A system needs both — knowing who someone is doesn't automatically mean they should be allowed everywhere.

---

## Ways to Check ID: Authentication Methods

There are several common ways a house can verify who's at the door. Each has trade-offs.

### Basic Authentication

The simplest approach: the visitor shows their username and password _every single time_ they knock, and the house checks it against its records each time.

It's easy to set up, but it means credentials are sent with every single request — like handing your ID to a stranger at every door in the house, every time, rather than checking it once. Without HTTPS protecting that exchange, it's especially risky.

### Token Authentication

Instead of showing your ID repeatedly, you show it _once_, and in exchange the house hands you a temporary swipe card — a **token**. From then on, you just flash the swipe card at each door, and the house recognizes it without needing your full ID again.

### Cookie-Based Authentication

This works like getting a stamped hand stamp at a concert entrance. Once you're checked in, the stamp is automatically checked at every gate you pass through inside the venue, without you needing to present anything extra — your browser sends the "stamp" (a cookie) automatically with each request.

### JWT (JSON Web Token)

A **JWT** is a specific, popular kind of token — think of it as a tamper-proof wristband. It's not just a random swipe card; it actually contains encoded information (who you are, what you're allowed to do, when it expires), sealed with a signature that lets the house instantly verify it hasn't been forged or altered, without even needing to look you up in a guest book again.

### OAuth

**OAuth** solves a different problem: delegated access. Imagine handing your car to a valet — you don't give them your house key or your entire set of car keys forever; you give them a limited valet key that only starts the engine and opens the door, nothing else.

OAuth lets you grant a third-party app limited access to part of your account (say, letting a photo-printing service access just your photos) without ever handing over your actual password. It's the standard behind "Sign in with Google" and similar flows.

[IMAGE: A comparison graphic showing a visitor with four options — showing ID repeatedly (Basic Auth), a swipe card (Token Auth), a hand stamp (Cookie Auth), and a wristband with encoded info (JWT) — plus a separate valet key icon labeled OAuth]

> **Key Takeaway:** Basic Auth re-checks ID every time. Token and cookie-based auth issue something reusable after the first check. JWT packs identity information directly into that token. OAuth is specifically for safely letting other apps act on your behalf, without sharing your actual credentials.

---

## Locking Up the Valuables: Password Hashing

Even with good authentication, the house still needs somewhere safe to store everyone's passwords. Storing them in plain, readable text would be like keeping a notebook of everyone's house keys sitting on the front desk — if a burglar ever got in, they'd walk away with everything.

Instead, passwords are run through a **hashing algorithm** — a one-way process that scrambles them into a fixed, unreadable code. The house never actually stores your real password; it stores the scrambled version, and compares scrambled codes when you log in.

Not all hashing algorithms are equally trustworthy:

- **MD5** — an old, fast algorithm, now considered broken for password storage. Its speed is actually a weakness: attackers can guess millions of passwords per second and check them against it.
- **SHA (like SHA-256)** — stronger and more modern than MD5, but still fast enough that, on its own, it's not ideal for passwords — it was designed for general-purpose data integrity, not specifically to resist password-cracking attempts.
- **bcrypt** — purpose-built for passwords. It's deliberately _slow_, and that slowness is the whole point: it makes large-scale guessing attacks impractical, even if an attacker steals the entire password database.
- **scrypt** — similar in spirit to bcrypt, but also deliberately demanding on memory, making it even harder to crack using specialized, high-speed cracking hardware.

Think of MD5 and plain SHA as a quick padlock — fine for casual use, but crackable with modern tools. bcrypt and scrypt are more like a reinforced vault door designed specifically to slow down anyone trying to pick it, no matter how much hardware they throw at it.

[IMAGE: A side-by-side comparison of a simple padlock labeled "MD5/SHA" next to a heavy reinforced vault door labeled "bcrypt/scrypt"]

> **Key Takeaway:** Never store plain-text passwords. And not all hashing algorithms are equal — bcrypt and scrypt are purpose-built to resist cracking attempts; MD5 and plain SHA are not appropriate choices for passwords today.

---

## Sealing the Envelope: HTTPS and SSL/TLS

When a visitor sends something to your house — a form, a password, a payment detail — how it travels matters just as much as who's carrying it.

**HTTP** sends information like a postcard: readable by anyone who intercepts it along the way. **HTTPS** seals that same information inside a locked, tamper-proof envelope, so even if someone intercepts it in transit, all they see is scrambled nonsense.

That sealing is made possible by **SSL/TLS** (TLS being the modern, improved successor to SSL) — a certificate-based system that encrypts the connection between visitor and house, and also proves the house is really who it claims to be, not an impersonator running a fake storefront next door.

[IMAGE: Two side-by-side envelopes — one open and readable labeled "HTTP," one sealed and locked labeled "HTTPS"]

> **Key Takeaway:** HTTPS (powered by SSL/TLS) encrypts data in transit, protecting it from eavesdroppers, and verifies that the site you're talking to is genuinely who it claims to be.

---

## Common Break-In Techniques: OWASP Risks

Burglars don't invent new tricks every day — most break-ins follow well-known patterns. The **OWASP Top 10** (from the Open Web Application Security Project) is essentially a most-wanted list of the most common ways attackers break into web applications, updated regularly by security experts, including risks like:

- **Injection attacks** — tricking a system into running commands it shouldn't, often by sneaking malicious code into an input field (like a form).
- **Broken authentication** — weaknesses in login systems that let attackers impersonate real users.
- **Security misconfiguration** — leaving a door unlocked by accident, like default settings nobody bothered to change.
- **Sensitive data exposure** — valuables left somewhere they shouldn't be, unencrypted or too easily accessible.

Knowing the OWASP list isn't about memorizing every detail — it's about recognizing that most break-ins aren't creative; they're preventable, well-documented mistakes.

> **Key Takeaway:** The OWASP Top 10 is a running list of the most common ways houses actually get broken into. Most real-world breaches exploit well-known, preventable weaknesses — not exotic new techniques.

---

## Who's Allowed to Knock? CORS

**CORS (Cross-Origin Resource Sharing)** controls whether a request coming from a _different_ website is allowed to interact with your API at all.

Imagine your house has a policy: only messengers from certain approved neighboring houses are allowed to knock and request things; everyone else gets turned away at the gate, automatically, before they even reach the door. That's CORS — a browser-enforced rule where your server explicitly lists which outside websites (origins) are trusted to make requests to it.

Without CORS rules in place, browsers block cross-origin requests by default — a safety measure to stop a malicious website from quietly making requests to your API using a visitor's already-logged-in session.

[IMAGE: A gate with a guard checking a list of "approved neighboring houses" before letting a messenger through, representing CORS]

---

## Approved Delivery Services: CSP

**CSP (Content Security Policy)** works similarly to CORS but focuses on a different question: which _sources of content_ — scripts, images, fonts — is your own front-facing website allowed to load and run?

Think of it as a house policy that only accepts deliveries from a pre-approved list of couriers. If an unexpected, unapproved package shows up (like a malicious script an attacker managed to sneak onto your page), CSP tells the browser to refuse it outright, rather than letting it run just because it _looks_ like it belongs.

> **Key Takeaway:** CORS controls who's allowed to knock on your API from another website. CSP controls what kinds of content your own website is allowed to load and trust in the first place.

---

## Fortifying the Whole House: Server Security

Everything we've covered so far — API styles, authentication, hashing, HTTPS, CORS, CSP — is part of a bigger picture: **server security**, the overall practice of keeping the house itself sound, not just its individual doors.

That includes things like:

- Keeping software and dependencies up to date (patching cracks in the foundation before someone finds them)
- Limiting which ports and services are exposed to the outside world (not leaving extra doors unlocked that nobody's even using)
- Logging and monitoring activity (a security camera system, so unusual behavior doesn't go unnoticed)
- Applying the principle of least privilege — giving every person and process only the access they actually need, nothing more

No single lock, however strong, makes a house fully secure on its own. Real security comes from layering all of these practices together.

[IMAGE: An aerial view of the house showing multiple layered defenses — a fence, security cameras, locked doors, and an alarm system — representing overall server security]

---

## Bringing It All Home

We started at the front door of a busy house, and by now, we've walked through nearly every room. REST, SOAP, gRPC, and GraphQL are different philosophies for how that door should work. Authentication and authorization decide who gets in and what they can touch. Hashing keeps stored secrets safe even if a burglar gets past the front gate. HTTPS seals messages in transit. OWASP catalogs the break-in techniques to defend against. CORS and CSP control who and what your house trusts. And server security ties it all together into one coherent, layered defense.

None of this needs to feel overwhelming. Every experienced backend developer once stood exactly where you are now — curious, a little unsure which door style to pick or which auth method fits their project. The confidence comes from building things, one door at a time.

## Try It Yourself

Pick a small project you've already built, or start a new one, and try implementing one authentication method from this post — token-based auth is a great starting point. Add HTTPS if you haven't already, and try applying a bcrypt hash to any passwords you're storing. Each small addition is a real, portfolio-worthy security upgrade you can speak to confidently in an interview.

---

## What to Learn Next

This post covered a lot of ground — here's where to go deeper:

- **Rate limiting** — protecting your API from being overwhelmed by too many requests, whether malicious or accidental.
- **Input validation** — making sure the data arriving at your doors is exactly what you expect, closing off a huge share of OWASP-style attacks before they start.
- **API versioning** — designing your doors so they can evolve over time without breaking every visitor who's already using them.

You've just walked the entire house, front door to foundation. That's not a small thing — and it's exactly how real backend confidence gets built.
