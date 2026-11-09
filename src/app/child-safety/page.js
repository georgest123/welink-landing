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
            <strong className="font-medium text-white/75">Last updated:</strong> 9 November 2026
            <br />
            <strong className="font-medium text-white/75">First published:</strong> 13 June 2026
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            These standards explain how InLoop deals with child sexual abuse and exploitation (CSAE), including child sexual abuse material (CSAM). They apply to the InLoop app on iOS and Android and to our related website and services (&ldquo;InLoop&rdquo;). InLoop is provided by WELINKAPP LTD, a company registered in England and Wales (company number 16487223), trading as InLoop.
          </p>

          <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10">
            <Section title="1. Zero tolerance">
              <p>
                InLoop has zero tolerance for child sexual abuse and exploitation. This applies to everyone who uses InLoop, including event organisers and venues. It applies everywhere on InLoop, including profiles, posts, hubs, events, comments, reactions, messages and calls, and to meeting people in person through InLoop.
              </p>
            </Section>

            <Section title="2. What is not allowed">
              <p>You must not use InLoop to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>create, share, upload, request, sell, or link to child sexual abuse material, including drawn, computer-generated or AI-generated material;</li>
                <li>groom a child, or contact, message, call or arrange to meet a child for a sexual purpose;</li>
                <li>sexually extort (&ldquo;sextort&rdquo;) anyone under 18, or threaten to share sexual images of them;</li>
                <li>share sexualised images, comments or descriptions of anyone under 18;</li>
                <li>arrange, advertise or help with the trafficking or sexual exploitation of a child;</li>
                <li>lie about your age, or pretend to be someone else, to get in contact with a child; or</li>
                <li>help or encourage anyone else to do any of these things.</li>
              </ul>
              <p className="mt-4">
                Some of these behaviours are criminal offences. Our standards may prohibit conduct beyond what criminal law prohibits.
              </p>
            </Section>

            <Section title="3. Age">
              <p>
                InLoop is for adults only. You must be at least <strong className="text-white/90">18 years old</strong> to create an account or use InLoop. Under-18s may not create accounts.
              </p>
              <p>
                At sign-up we ask you to confirm that you are 18 or over (including by providing your date of birth). We do <strong className="text-white/90">not</strong> currently verify age with identity documents or other stronger age-assurance checks. If we have reason to believe an account belongs to someone under 18, we will close it. Please report any account you believe belongs to someone under 18.
              </p>
            </Section>

            <Section title="4. How to report a concern">
              <p>
                <strong className="text-white/90">In the app:</strong> you can report a post using the report option on the post.
              </p>
              <p>
                <strong className="text-white/90">Blocking:</strong> you can also use the app&apos;s blocking controls to limit what you see from someone. Blocking may not prevent every form of contact, so please also report anyone who makes you feel unsafe.
              </p>
              <p>
                <strong className="text-white/90">By email:</strong> email{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>{" "}
                with the subject &ldquo;Child safety&rdquo;. This inbox is monitored for safety reports. Please include the username, the event or hub, and what happened. Do not attach or forward sexual images of children; describe where the content is instead.
              </p>
              <p>
                <strong className="text-white/90">If someone is in immediate danger, call 999 in the UK (or your local emergency number) first.</strong>
              </p>
              <p>You can also report concerns directly to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  <strong className="text-white/90">CEOP (National Crime Agency), UK:</strong>{" "}
                  <a href="https://www.ceop.police.uk/safety-centre/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                    https://www.ceop.police.uk/safety-centre/
                  </a>
                </li>
                <li>
                  <strong className="text-white/90">Internet Watch Foundation (IWF), UK — for sexual images or videos of children online:</strong>{" "}
                  <a href="https://www.iwf.org.uk/en/uk-report/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                    https://www.iwf.org.uk/en/uk-report/
                  </a>
                </li>
                <li>
                  <strong className="text-white/90">Outside the UK:</strong> your local police or national child-protection hotline.
                </li>
              </ul>
            </Section>

            <Section title="5. What we do when we learn about CSAE or CSAM">
              <p>When we become aware of child sexual abuse material or exploitation on InLoop, we will:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
                <li>remove harmful material, or restrict access to it, where it is within our control;</li>
                <li>take proportionate action against the accounts responsible, which may include suspension or a permanent ban;</li>
                <li>take steps to protect the people affected;</li>
                <li>keep relevant information where the law requires or allows, so that it is available to the authorities; and</li>
                <li>report it to the relevant authorities as the law requires, which may include the National Crime Agency (NCA), CEOP and the police.</li>
              </ul>
              <p className="mt-4">
                We do not promise to find all harmful content ourselves. We do not claim to use automated scanning of all content. Some areas of InLoop, such as private messages, are not routinely viewed by us, so reports from users are very important.
              </p>
            </Section>

            <Section title="6. Reporting to the authorities">
              <p>
                InLoop is a UK company. We are committed to reporting child sexual exploitation and abuse content to the relevant authorities as the law requires, and we cooperate with lawful requests from law enforcement. Where the law of another country applies, we will report to the relevant authority there.
              </p>
            </Section>

            <Section title="7. Working to keep InLoop safe">
              <p>
                We review and improve our safety practices over time. We will update this page when material changes are available to users.
              </p>
            </Section>

            <Section title="8. Contact">
              <p>
                For questions about these standards, or to report a child safety concern, email{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>
                .
              </p>
              <p>
                Google Play&apos;s Child Safety Standards policy also requires a named point of contact in Play Console. That contact is held in Play Console and is not published on this page. Public reports and enquiries should use{" "}
                <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  support@inloop.uk
                </a>
                .
              </p>
            </Section>

            <Section title="9. Related documents">
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  Terms of Service:{" "}
                  <Link href="/terms" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                    https://www.inloop.uk/terms
                  </Link>
                </li>
                <li>
                  Privacy Policy:{" "}
                  <Link href="/privacy" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                    https://www.inloop.uk/privacy
                  </Link>
                </li>
              </ul>
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
