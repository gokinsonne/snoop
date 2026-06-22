import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Snoop Dogg Dollars",
  description: "Privacy policy for SnoopDoggDollar.org. How we collect, use, and protect your data.",
  robots: "index, follow",
  alternates: { canonical: "https://snoopdoggdollar.org/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-neutral-400">Last updated: June 22, 2025</p>
          <h2>1. Introduction</h2>
          <p>At SnoopDoggDollar.org, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Log Data:</strong> IP address, browser type, pages visited, time spent on site</li>
            <li><strong>Cookies:</strong> Used for analytics and user experience improvement</li>
            <li><strong>Contact Information:</strong> Only if you voluntarily submit a contact form</li>
          </ul>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Improve website functionality and user experience</li>
            <li>Analyze traffic and user behavior</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2>4. Third-Party Services</h2>
          <p>We use Google Analytics and Vercel Analytics for traffic analysis. These services may collect data according to their own privacy policies.</p>
          <h2>5. Affiliate Links</h2>
          <p>This website contains affiliate links to online casinos. Clicking these links may result in tracking cookies being placed by third-party casino operators. We do not control how these operators handle your data.</p>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of cookies and tracking</li>
          </ul>
          <h2>7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through our website.</p>
        </div>
      </div>
    </main>
  )
}
