import { createPageMetadata } from "@/lib/seo";
import { SiteHeader, WallpaperBackground } from "../components/AppShell";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms for using InLoop's website, app, and related services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full text-white">
      <WallpaperBackground />
      <SiteHeader compact />

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <article className="glass-panel px-5 py-8 sm:px-8 sm:py-10">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">InLoop Terms of Service</h1>
          <p className="mt-3 text-sm text-white/60">
            <strong className="font-medium text-white/75">Last updated:</strong> November 7, 2026
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            InLoop is a trading name of WELINKAPP LTD, registered in England and Wales, company number 16487223. Registered office: 30 Coltsfoot Place, Conniburrow, Milton Keynes, England, MK14 7BP. Contact{" "}
            <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
              support@inloop.uk
            </a>{" "}
            with questions about these terms.
          </p>

          <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10">
            <Section title="1. Terms requiring approval">
              <p>
                <strong className="text-white/90">PLACEHOLDER - approved legal wording required:</strong> The product includes or advertises paid subscriptions, business billing, event tickets, Stripe checkout, and wallet passes. Approved terms are still needed for ticket liability, subscription liability, refunds, and chargebacks. These topics are intentionally not described here until approved wording is supplied.
              </p>
            </Section>

            <Section title="2. Using InLoop">
              <p>
                You must use InLoop lawfully, keep account details accurate, and protect your sign-in credentials. You are responsible for the content and information you choose to submit through the service.
              </p>
            </Section>

            <Section title="3. Acceptable conduct">
              <p>
                Do not use InLoop to harass others, impersonate people or organisations, upload unlawful or harmful content, interfere with the service, or bypass security or access controls.
              </p>
            </Section>

            <Section title="4. Safety and reporting">
              <p>
                Our child safety standards are published on the{" "}
                <a href="/child-safety" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Child Safety
                </a>{" "}
                page. Report concerns through in-app reporting tools where available or by emailing support.
              </p>
            </Section>

            <Section title="5. Privacy">
              <p>
                How we handle personal data is described in the{" "}
                <a href="/privacy" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="6. Changes">
              <p>
                We may update these terms by posting a new version on this page and changing the “Last updated” date.
              </p>
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
