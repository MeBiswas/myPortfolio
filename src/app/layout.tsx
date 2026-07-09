import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ScrollAnimations from "@/components/ScrollAnimations"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://abhipriyo-biswas-portfolio.vercel.app/"),
  title: {
    default: "Abhipriyo Biswas | Software Engineer",
    template: "%s | Abhipriyo Biswas",
  },
  description:
    "Software Engineer specializing in React JS, Node JS, Python, SQL, PostgreSQL, Apache Airflow, and ETL Pipeline Development.",
  openGraph: {
    title: "Abhipriyo Biswas | Software Engineer",
    description:
      "Portfolio showcasing projects in Software Engineering, ETL Pipelines, Data Warehousing, and Analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhipriyo Biswas | Software Engineer",
    description:
      "Portfolio showcasing projects in Software Engineering, ETL Pipelines, and Data Warehousing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0D1117] text-[#E2EAF2] min-h-screen antialiased">
        {children}
        <ScrollAnimations />
      </body>
    </html>
  )
}
