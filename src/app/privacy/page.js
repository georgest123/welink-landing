import { createPageMetadata } from "@/lib/seo";
import { SiteHeader, WallpaperBackground } from "../components/AppShell";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How InLoop collects, uses, stores, and shares information when you use the InLoop mobile application and related services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen w-full text-white">
      <WallpaperBackground />
      <SiteHeader compact />

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <article className="glass-panel px-5 py-8 sm:px-8 sm:py-10">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">InLoop Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/60">
            <strong className="font-medium text-white/75">Last updated:</strong> November 7, 2026
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            This Privacy Policy explains how WELINKAPP LTD handles personal data for InLoop. Contact us at{" "}
            <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
              support@inloop.uk
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10">
            <Section title="1. Controller">
              <p>
                The data controller is <strong className="text-white/90">WELINKAPP LTD</strong>, registered in England and Wales, company number 16487223. InLoop is a trading name of WELINKAPP LTD. Registered office: 30 Coltsfoot Place, Conniburrow, Milton Keynes, England, MK14 7BP.
              </p>
            </Section>

            <Section title="2. Data we process">
              <p>Depending on how you use InLoop, we may process:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>Account identifiers and sign-in details handled through Firebase Authentication.</li>
                <li>Profile, app, event, business, message, media, and preference data stored in Firebase Firestore and Firebase Storage.</li>
                <li>Payment, billing, checkout, and subscription-related records handled through Stripe.</li>
                <li>Google Wallet pass data where wallet passes are issued or managed.</li>
                <li>Website, hosting, security, diagnostic, analytics, and crash information from Vercel and Firebase Analytics / Crashlytics.</li>
                <li>Support and business correspondence handled through Google Workspace.</li>
              </ul>
            </Section>

            <Section title="3. Why we process data">
              <p>We process personal data to provide and secure InLoop, authenticate users, store app content and preferences, process payments, support wallet passes, respond to support requests, operate the website, understand product performance, diagnose crashes, prevent abuse, and meet legal obligations.</p>
            </Section>

            <Section title="4. Processors and service providers">
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li><strong className="text-white/90">Google Firebase / Google Cloud:</strong> Authentication, Firestore, Storage, Analytics, Crashlytics, and cloud functions.</li>
                <li><strong className="text-white/90">Stripe:</strong> Payment processing, checkout, billing, and subscription tooling.</li>
                <li><strong className="text-white/90">Vercel:</strong> Website hosting, deployment, security, and operational logs.</li>
                <li><strong className="text-white/90">Google Workspace:</strong> Email, support, and business administration.</li>
                <li><strong className="text-white/90">Google Wallet:</strong> Wallet pass functionality where used.</li>
              </ul>
            </Section>

            <Section title="5. International transfers">
              <p>
                Data may be processed in the United Kingdom, the EEA, the United States, and other countries where our processors operate. Firebase cloud functions are configured in <strong className="text-white/90">us-central1</strong>, so relevant data may be processed in the United States. Where UK GDPR requires safeguards for restricted transfers, we rely on processor agreements and approved transfer mechanisms such as the UK International Data Transfer Addendum, the UK International Data Transfer Agreement, and/or standard contractual clauses as applicable.
              </p>
            </Section>

            <Section title="6. Cookies, local storage, and analytics on this website">
              <p>
                A headless-browser check of the live website before interaction found no cookies, empty localStorage and sessionStorage, and no third-party requests. If non-essential website cookies or analytics are added later, they should not load until appropriate consent is obtained.
              </p>
            </Section>

            <Section title="7. Retention">
              <p>
                <strong className="text-white/90">PLACEHOLDER - approved retention wording required:</strong> Specific retention periods have not been confirmed. We will update this section once approved retention periods are available for account data, app content, payments, support records, analytics, crash logs, backups, and legal records.
              </p>
            </Section>

            <Section title="8. Your UK GDPR rights">
              <p>
                Subject to conditions and exemptions, UK GDPR gives you rights to access your personal data, correct inaccurate data, erase data, restrict processing, object to processing, receive portable data, and challenge solely automated decisions where applicable. You can contact{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>{" "}
                to make a request.
              </p>
            </Section>

            <Section title="9. Complaints">
              <p>
                Please contact us first if you have a privacy concern. You also have the right to complain to the UK Information Commissioner’s Office at{" "}
                <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  ico.org.uk/make-a-complaint/
                </a>
                .
              </p>
            </Section>

            <Section title="10. Changes">
              <p>We may update this Privacy Policy by posting a new version on this page and changing the “Last updated” date.</p>
            </Section>
          </div>
        </article>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-white/95 sm:text-xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/80">{children}</div>
    </section>
  );
}
