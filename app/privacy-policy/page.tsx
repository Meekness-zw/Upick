import type { Metadata } from "next"
import Link from "next/link"

const sections = [
  {
    title: "Information We Collect",
    description:
      "We only collect the information we need to deliver safe and reliable logistics services. This may vary depending on whether you are a sender, recipient, driver, or business partner using Upick.",
    items: [
      "Profile data such as your name, phone number, email address, and delivery preferences when you create an account.",
      "Delivery details, including pickup and drop-off addresses, parcel descriptions, and in-app messages related to an order.",
      "Usage information like device type, app interactions, and diagnostic logs that help us maintain performance and security.",
      "Compliance and safety data such as identity verification documents when regulations require us to collect them.",
    ],
  },
  {
    title: "How We Use Your Information",
    description:
      "Your data stays within Upick and our trusted service providers so we can run the platform, comply with the law, and keep everyone safe.",
    items: [
      "Providing core logistics features such as matching orders with trusted drivers and confirming deliveries.",
      "Notifying you about order status updates, promotions that you opt into, and important changes to our services or policies.",
      "Preventing fraud, enforcing our community guidelines, and investigating safety incidents in cooperation with regulators.",
      "Aggregating anonymized analytics to improve routing, pricing, and product decisions without identifying individual users.",
    ],
  },
  {
    title: "Data Sharing & Storage",
    description:
      "We do not sell your personal information. Data is shared only with third parties who help us operate the Upick platform or when we are legally required to do so.",
    items: [
      "Delivery partners that fulfill your orders receive only the information necessary to complete that specific job.",
      "Payment processors and customer-support tools access limited data under strict contractual obligations.",
      "Government authorities may receive information when we are compelled by applicable law or need to protect someone’s safety.",
      "All data is stored on secure infrastructure with encryption in transit and at rest. Retention follows the minimum period required for operational, legal, or tax purposes.",
    ],
  },
  {
    title: "Your Rights & Choices",
    description:
      "Upick gives you control over your information no matter where you are accessing the service from.",
    items: [
      "Access, update, or correct your profile details anytime inside the app.",
      "Toggle marketing communications in your notification settings or by using the unsubscribe link in our emails.",
      "Request a copy of the data associated with your account through the contact options below.",
      "Ask us to delete your account and personal data. We will remove non-essential records while keeping the narrow data we must retain for safety, fraud prevention, or legal compliance.",
    ],
  },
]

export const metadata: Metadata = {
  title: "Privacy Policy | Upick",
  description: "Learn how Upick collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Legal</p>
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: February 11, 2026. This policy explains what data Upick collects, why we collect it,
            and how you can manage or delete your personal information when using our mobile and web products.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4 rounded-lg border bg-card/50 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="text-muted-foreground">{section.description}</p>
              <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="space-y-4 rounded-lg border bg-muted/40 p-6">
          <h2 className="text-2xl font-semibold text-foreground">Contact & Questions</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, need to access your data, or would like to file a
            complaint, please reach out. We respond to most requests within 72 hours.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <Link href="mailto:upick2281@gmail.com" className="text-primary underline">
                upick2281@gmail.com
              </Link>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <p className="text-muted-foreground">+263 779 057 234</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            You can also write to us at Sixth street &amp; Josiah Chinamano Avenue, Harare, Zimbabwe.
          </p>
        </section>
      </div>
    </main>
  )
}
