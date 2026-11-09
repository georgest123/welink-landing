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
            <strong className="font-medium text-white/75">Last updated:</strong> 9 November 2026
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
                We keep personal information only for as long as we need it for the purposes described in this notice. The period depends on why we hold it, whether the law requires us to keep it, and whether we need it for a complaint, legal claim, safety concern, regulator request or police request. A legal hold pauses deletion for the relevant records and resumes when the hold ends.
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>Account data is kept while your account is active. After a verified account deletion request, account data we control is deleted or anonymised from live systems within 30 days, except where we need to keep specific records for the reasons in this section.</li>
                <li>Profile information, photos, posts, comments, reactions, hub content and media are kept until you edit or remove them, or until account deletion. Block records may be kept in minimal form while the other account exists so blocks remain effective.</li>
                <li>Messaging and call metadata is kept until the conversation is deleted, account deletion, or 12 months after last activity, whichever is sooner. Messages and media already shared with other people may remain on their devices.</li>
                <li>Event records are kept until 12 months after the event ends, then deleted or anonymised. Event location is kept with the event record.</li>
                <li>Ticket records, QR codes and Google Wallet pass records are kept with the related transaction record. QR codes and passes are invalidated after the event. Wallet passes stored on your device remain there until you remove them.</li>
                <li>Transaction, refund, payout, dispute, contract and invoice records are kept for the applicable accounting and tax period, generally six years from the end of the financial year they relate to, and longer where HMRC rules require it or a legal hold applies.</li>
                <li>Business subscriber and organiser or venue contract records are kept for six years after the contract ends.</li>
                <li>Support requests and emails are kept for two years after the request is closed, unless a legal hold applies.</li>
                <li>Safety reports, moderation decisions, appeals and related block records are kept for two years after closure. Serious safeguarding or child-safety cases may be kept longer under legal hold where needed.</li>
                <li>Push notification tokens are kept until logout, uninstall, invalid token cleanup, or account deletion.</li>
                <li>Security and access logs for Firebase, Cloud Functions and Vercel are kept for 12 months.</li>
                <li>Backups are kept on a rolling cycle of no more than 35 days. Data removed from live systems may remain in backups until the relevant backup expires, unless a legal hold applies.</li>
              </ul>
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

            <Section title="10. Age">
              <p>
                InLoop is for users aged 18 and over. We do not knowingly collect personal information from anyone under 18. If we learn we have, we delete it.
              </p>
            </Section>

            <Section title="11. Changes">
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
