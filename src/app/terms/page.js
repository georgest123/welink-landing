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
            <Section title="1. Using InLoop">
              <p>
                You must use InLoop lawfully, keep account details accurate, and protect your sign-in credentials. You are responsible for the content and information you choose to submit through the service.
              </p>
            </Section>

            <Section title="2. Acceptable conduct">
              <p>
                Do not use InLoop to harass others, impersonate people or organisations, upload unlawful or harmful content, interfere with the service, or bypass security or access controls.
              </p>
            </Section>

            <Section title="3. Tickets: who you are buying from">
              <p>
                When you buy a ticket through InLoop, you are buying it from the <strong className="text-white/90">event organiser</strong> named on the event page and at checkout. The organiser is responsible for the event and for your ticket contract. InLoop (WELINKAPP LTD, company number 16487223) provides the app and website and processes payment as the organiser&apos;s platform and agent.
              </p>
              <p>Payments are processed by our payment provider, Stripe.</p>
              <p>
                Nothing in these terms affects your statutory rights. If you have a problem with a ticket or event, contact us at{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>{" "}
                and we will help you and pass your request to the organiser where needed.
              </p>
            </Section>

            <Section title="4. Cancelling a ticket you have bought">
              <p>
                Tickets for leisure events that take place on a specific date or during a specific period are not covered by the legal 14-day &quot;cooling-off&quot; right to cancel online purchases. This means you cannot cancel such a ticket just because you have changed your mind, unless the policy below allows it.
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  <strong className="text-white/90">Standard refundable tickets:</strong> Unless the event is shown as non-refundable, you can cancel your ticket and get a full refund of the amount you paid if you cancel at least 48 hours before the event&apos;s advertised start time. If you cancel less than 48 hours before the start time, you will not normally get a refund under this policy. This does not affect your rights in section 5.
                </li>
                <li>
                  <strong className="text-white/90">Non-refundable tickets:</strong> Some organisers make their tickets non-refundable. If so, we will show this clearly on the event page and at checkout before you pay. If you buy a non-refundable ticket, you cannot cancel it for a refund under the standard refundable ticket policy, even if you cancel more than 48 hours before the event. Your rights in section 5 still apply.
                </li>
                <li>
                  <strong className="text-white/90">Free events:</strong> If you got a free ticket, there is nothing to refund. You can still cancel your place to let someone else go.
                </li>
                <li>
                  <strong className="text-white/90">Not attending:</strong> If you do not go to an event that goes ahead as advertised, you will not get a refund unless you cancelled in time under the standard refundable ticket policy or section 5 applies.
                </li>
              </ul>
            </Section>

            <Section title="5. When you are entitled to a refund whatever the ticket type">
              <p>
                You are entitled to a full refund of the amount you paid, whatever the ticket type and however close to the event, if:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>the organiser cancels the event;</li>
                <li>the organiser moves it to a different date or makes another significant change, for example the venue, the headline act or the main content, and you do not want to go to the changed event; or</li>
                <li>you are otherwise entitled to one by law, for example if the event or ticket was not as described, or the service was not provided with reasonable care and skill.</li>
              </ul>
              <p>
                If an event is cancelled or significantly changed, we or the organiser will tell you using the contact details on your account and explain how to get your refund.
              </p>
            </Section>

            <Section title="6. How refunds are paid">
              <p>Refunds go back to the payment method you used. We do not charge a fee for processing a refund.</p>
              <p>We process refunds without undue delay and within any applicable statutory deadline.</p>
              <p>
                Once a refund has been issued, your bank or card provider usually takes around 5 to 10 working days to show it on your account, and sometimes longer. This is an estimate of bank processing time only; it does not extend the time we have to issue a refund. If you cannot see a refund after this time, contact us and we will give you a reference you can give your bank.
              </p>
            </Section>

            <Section title="7. Disputes and chargebacks">
              <p>If something goes wrong, please contact us first. We can usually resolve problems more quickly than a card dispute.</p>
              <p>
                Nothing in these terms stops you from asking your bank or card provider to dispute a payment or make a chargeback, or from using any other legal right. We do not charge you any fee for doing so.
              </p>
              <p>If you get a refund from us and also through a chargeback for the same payment, we may ask you to pay back the duplicate amount.</p>
            </Section>

            <Section title="8. Our responsibility to consumers">
              <p>
                We provide the InLoop app, website and ticketing features with reasonable care and skill. The organiser is responsible for running the event and for anything that happens at it that is within the organiser&apos;s control.
              </p>
              <p>
                If we break these terms or fail to use reasonable care and skill, we are responsible for loss or damage you suffer that is a foreseeable result of that. Loss is foreseeable if it was obvious it would happen, or if both of us knew it might happen when you accepted these terms. We are not responsible for loss that is not foreseeable.
              </p>
              <p>We provide InLoop for personal, non-business use. If you use it for business purposes, the business terms apply instead.</p>
              <p>
                We do not exclude or limit our liability where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, and for breach of your legal rights as a consumer.
              </p>
            </Section>

            <Section title="9. Business subscriptions">
              <p>Your subscription renews automatically at the end of each billing period unless you cancel.</p>
              <p>You can cancel at any time. Cancellation takes effect at the end of your current paid billing period. You will keep access until then.</p>
              <p>
                We do not give refunds or credits for the unused part of a billing period when you cancel, except where we are at fault, for example where we materially fail to provide the subscribed service, or where the law requires otherwise.
              </p>
              <p>
                We will give you at least 30 days&apos; notice of any price change. If you do not want to pay the new price, you can cancel before it takes effect and you will not be charged the new price.
              </p>
            </Section>

            <Section title="10. Ticket sales by organisers">
              <p>
                You are the seller of tickets for your events and are responsible for the event, accurate event information, and honouring buyers&apos; legal rights. InLoop acts as your platform and agent to list tickets and collect payment.
              </p>
              <p>
                You must state clearly when you set up an event whether tickets are refundable. If you mark tickets as non-refundable, buyers can still get a refund if you cancel or significantly change the event or if the law gives them a right to one.
              </p>
              <p>
                When a ticket is refunded, the payment transferred to you for that ticket is reversed, and InLoop&apos;s commission on that ticket is also refunded.
              </p>
              <p>InLoop currently pays Stripe&apos;s dispute fees on ticket payments. We will tell you in writing before this changes, and any change will only apply to future events under your updated agreement.</p>
            </Section>

            <Section title="11. Liability for business customers">
              <p>We provide our services with reasonable care and skill.</p>
              <p>
                Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded by law.
              </p>
              <p>Subject to the paragraph above, we are not liable for loss of profits, revenue, business or goodwill, or for indirect or consequential loss.</p>
            </Section>

            <Section title="12. Safety and reporting">
              <p>
                Our child safety standards are published on the{" "}
                <a href="/child-safety" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Child Safety
                </a>{" "}
                page. Report concerns through in-app reporting tools where available or by emailing support.
              </p>
            </Section>

            <Section title="13. Privacy">
              <p>
                How we handle personal data is described in the{" "}
                <a href="/privacy" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="14. Changes">
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
