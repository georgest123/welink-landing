import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SiteHeader, WallpaperBackground } from "../components/AppShell";

export const metadata = createPageMetadata({
  title: "Child Safety Standards",
  description:
    "InLoop's published standards against child sexual abuse and exploitation (CSAE), and how we prevent, detect, and respond to child safety concerns.",
  path: "/child-safety",
});

export default function ChildSafetyPage() {
  return (
    <div className="relative min-h-screen w-full text-white">
      <WallpaperBackground />
      <SiteHeader compact />

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <article className="glass-panel px-5 py-8 sm:px-8 sm:py-10">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">InLoop Child Safety Standards</h1>
          <p className="mt-3 text-sm text-white/60">
            <strong className="font-medium text-white/75">Effective date:</strong> June 13, 2026
            <br />
            <strong className="font-medium text-white/75">Last updated:</strong> June 13, 2026
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            This page sets out <strong className="text-white/95">InLoop&apos;s</strong> standards against child sexual abuse and exploitation (CSAE), including child sexual abuse material (CSAM). It applies to the InLoop mobile application and related services (the &ldquo;Service&rdquo;). For questions about these standards or our child safety practices, contact{" "}
            <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
              support@inloop.uk
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10">
            <Section title="1. Our commitment">
              <p>
                InLoop has <strong className="text-white/90">zero tolerance</strong> for CSAE and CSAM. We do not allow content or conduct that sexually exploits, endangers, or harms children. We design our Service to support safe community interaction and we act promptly when child safety concerns are reported.
              </p>
            </Section>

            <Section title="2. Prohibited content and conduct">
              <p>Users must not use InLoop to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>Create, share, request, or distribute CSAM or any content that sexually exploits a minor.</li>
                <li>Groom, solicit, or attempt to contact minors for sexual purposes.</li>
                <li>Share sexualized imagery or descriptions involving anyone under 18.</li>
                <li>Facilitate trafficking, exploitation, or abuse of children.</li>
                <li>Impersonate a minor or misrepresent age to engage with minors.</li>
                <li>Use the Service in any way that violates applicable child protection laws.</li>
              </ul>
              <p className="mt-4">
                Violations may result in immediate content removal, account suspension or permanent ban, preservation of relevant records as allowed by law, and reporting to appropriate authorities.
              </p>
            </Section>

            <Section title="3. Age requirements">
              <p>
                InLoop is <strong className="text-white/90">not intended for children</strong> under the minimum age required in their region to use the Service without parental consent. We do not knowingly collect personal information from children in violation of applicable law. Accounts that appear to belong to underage users may be restricted or removed.
              </p>
            </Section>

            <Section title="4. Reporting child safety concerns in the app">
              <p>InLoop allows users to report concerns in-app, including content that may involve child safety issues:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  <strong className="text-white/90">Report a post:</strong> On the feed, open the menu (⋯) on a post and choose <strong className="text-white/90">Report post</strong>. Select the reason that best fits (for example inappropriate content, harassment, or other) and submit optional details.
                </li>
                <li>
                  <strong className="text-white/90">Block a user:</strong> From Connect or after reporting, you can block someone to stop further contact and limit their visibility to you.
                </li>
                <li>
                  <strong className="text-white/90">Privacy Center:</strong> Settings includes safety guidance and support options.
                </li>
              </ul>
              <p className="mt-4">
                Reports are reviewed by our team. Where content or accounts violate these standards, we remove content, restrict access, and take further action as needed.
              </p>
            </Section>

            <Section title="5. How we respond">
              <p>When we receive a child safety report or detect a potential violation, we may:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>Review reported content, accounts, and related metadata.</li>
                <li>Remove CSAM and other prohibited content without delay.</li>
                <li>Suspend or permanently terminate offending accounts.</li>
                <li>Preserve information as required for investigations and legal compliance.</li>
                <li>Escalate urgent matters to designated child safety contacts at InLoop.</li>
              </ul>
            </Section>

            <Section title="6. Reporting to authorities">
              <p>
                Where required by law, we report apparent CSAM and serious child exploitation to relevant regional and national authorities and organizations, which may include (depending on jurisdiction and circumstances):
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  <strong className="text-white/90">United States:</strong> National Center for Missing &amp; Exploited Children (NCMEC) via CyberTipline where applicable.
                </li>
                <li>
                  <strong className="text-white/90">United Kingdom:</strong> National Crime Agency (NCA) and/or the Internet Watch Foundation (IWF) where applicable.
                </li>
                <li>
                  <strong className="text-white/90">Other regions:</strong> Equivalent national hotlines, law enforcement, or designated reporting bodies as required by local law.
                </li>
              </ul>
              <p className="mt-4">
                We cooperate with lawful requests from authorities investigating child exploitation.
              </p>
            </Section>

            <Section title="7. Prevention and enforcement">
              <p>
                In addition to user reporting, we use a combination of community guidelines, moderation review, account enforcement, and technical measures (such as abuse prevention and integrity checks through our infrastructure providers) to reduce harm. We update our practices as laws, platform requirements, and industry standards evolve.
              </p>
            </Section>

            <Section title="8. Contact for child safety matters">
              <p>
                For child safety questions, CSAE compliance discussions, or urgent reports outside the app:
              </p>
              <p className="mt-3">
                <strong className="text-white/90">Email:</strong>{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>
              </p>
              <p className="mt-3 text-white/70">
                Please include relevant details (for example post link, username, or conversation context) so we can investigate quickly. If someone is in immediate danger, contact local emergency services first.
              </p>
            </Section>

            <Section title="9. Related policies">
              <p>
                These standards work alongside our{" "}
                <Link href="/privacy" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Privacy Policy
                </Link>{" "}
                and in-app Terms of Service. We may update this page from time to time; the &ldquo;Last updated&rdquo; date above will change when we do.
              </p>
            </Section>
          </div>

          <p className="mt-10 border-t border-white/15 pt-8 text-xs italic leading-relaxed text-white/50">
            This document is published for transparency and platform compliance. It is not legal advice.
          </p>
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
