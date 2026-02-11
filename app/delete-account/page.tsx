import type { Metadata } from "next"
import Link from "next/link"

const steps = [
  {
    title: "Review active orders",
    detail:
      "Open the Upick app, head to the Orders tab, and make sure no deliveries are still in progress. Completed jobs can remain on record, but active jobs must finish before deletion.",
  },
  {
    title: "Clear payout balances",
    detail:
      "Drivers and partners should ensure any available payouts have been transferred. We cannot delete payment data tied to unsettled balances.",
  },
  {
    title: "Submit the deletion request",
    detail:
      "Use the in-app account menu (Profile → Settings → Delete my account) or send us an email using the template below. We will verify your identity before processing the request.",
  },
]

const retentionItems = [
  "We permanently remove profile data, authentication tokens, saved addresses, and optional documents you uploaded.",
  "Delivery history is anonymized so the records we must keep for safety, tax, and fraud monitoring no longer reference you personally.",
  "Financial information that we are required to retain (for example, invoices already issued) is stored securely for the legally mandated period before automatic deletion.",
  "All connected devices are logged out and can no longer access Upick services.",
]

export const metadata: Metadata = {
  title: "Delete Account & Data | Upick",
  description: "Instructions for requesting account deletion or data removal from the Upick platform.",
}

export default function DeleteAccountPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Legal</p>
          <h1 className="text-4xl font-bold text-foreground">Delete Your Upick Account</h1>
          <p className="text-muted-foreground">
            You can request deletion of your Upick account and associated personal data at any time. Once verified, we
            start the deletion workflow and confirm via email when it is complete.
          </p>
          <p className="text-sm text-muted-foreground">
            Average processing time: 3 business days. We will notify you if regulations require us to retain certain
            records for a longer period.
          </p>
        </header>

        <section className="space-y-6 rounded-lg border bg-card/50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Steps to request deletion</h2>
          <ol className="space-y-4 text-muted-foreground">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-lg border bg-background/40 p-4">
                <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4 rounded-lg border bg-muted/40 p-6">
          <h2 className="text-2xl font-semibold text-foreground">Email template</h2>
          <p className="text-muted-foreground">
            If you prefer email, copy the text below and send it from the address tied to your Upick account.
          </p>
          <div className="rounded-lg border bg-background/60 p-4 font-mono text-sm text-muted-foreground">
            <p>Subject: Upick account deletion request</p>
            <p>Body:</p>
            <p>Hi Upick team,</p>
            <p>
              Please delete my Upick account and remove all personal data associated with{" "}
              {"<phone number or email>"}.
            </p>
            <p>I confirm that there are no outstanding orders or payments on my account.</p>
            <p>Thank you.</p>
          </div>
          <Link
            href="mailto:upick2281@gmail.com?subject=Upick%20account%20deletion%20request"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90"
          >
            Email the Upick team
          </Link>
        </section>

        <section className="space-y-4 rounded-lg border bg-card/50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">What gets deleted?</h2>
          <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
            {retentionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Need a copy before deletion? Email us and we will send a machine-readable export of your data before closing
            the account.
          </p>
        </section>

        <section className="space-y-4 rounded-lg border bg-muted/40 p-6">
          <h2 className="text-2xl font-semibold text-foreground">Need help?</h2>
          <p className="text-muted-foreground">
            If something looks wrong with your request or the app cannot delete the account automatically, please reach
            out so a human can finish the job.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <Link href="mailto:upick2281@gmail.com" className="text-primary underline">
                upick2281@gmail.com
              </Link>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone (Mon–Fri, 9am–5pm CAT)</p>
              <p className="text-muted-foreground">+263 779 057 234</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
