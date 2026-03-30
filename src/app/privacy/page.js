import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — InLoop",
  description:
    "How InLoop collects, uses, stores, and shares information when you use the InLoop mobile application and related services.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen w-full text-white">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('/images/background-images/background2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <header className="sticky top-0 z-20 border-b border-white/15 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center shrink-0 hover:opacity-90 transition-opacity">
            <Image src="/images/InLoop.png" alt="InLoop" width={120} height={32} className="h-7 w-auto sm:h-8" />
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <article className="rounded-3xl border border-white/15 bg-black/35 backdrop-blur-md px-5 py-8 sm:px-8 sm:py-10 shadow-xl">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">InLoop Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/60">
            <strong className="font-medium text-white/75">Effective date:</strong> March 28, 2026
            <br />
            <strong className="font-medium text-white/75">Last updated:</strong> March 28, 2026
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            This Privacy Policy describes how <strong className="text-white/95">InLoop</strong> (“we,” “us,” or “our”) collects, uses, stores, and shares information when you use the InLoop mobile application and related services (collectively, the “Service”). It is intended to match how the Service actually works as of the date above. If you have questions, contact us at{" "}
            <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
              support@inloop.uk
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10">
          <Section title="1. Who we are">
            <p>
              The Service is operated in connection with the InLoop app. For data protection requests, use the contact email above.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <Subheading>2.1 Account and profile</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Identifiers & sign-in:</strong> Firebase Authentication user ID, and sign-in details you provide (for example <strong className="text-white/90">email and password</strong>, or <strong className="text-white/90">Sign in with Apple</strong> as offered in the app).
              </li>
              <li>
                <strong className="text-white/90">Profile:</strong> Display name, username, email, bio, profile photo URL, optional profile fields you choose to enter (such as gender, age, height, occupation, interests, mood/music entries, social links, etc., when those features are used).
              </li>
              <li>
                <strong className="text-white/90">Preferences:</strong> Settings stored on your account (for example privacy toggles, photo visibility, blocked users, wallpaper/appearance preferences stored locally on the device where applicable).
              </li>
            </ul>

            <Subheading>2.2 Content you create</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Posts and comments</strong> you publish on the feed.
              </li>
              <li>
                <strong className="text-white/90">Community hub</strong> content where you participate, per hub rules and visibility.
              </li>
              <li>
                <strong className="text-white/90">Events</strong> you create or join, including titles, descriptions, times, and location text or coordinates you attach to an event.
              </li>
              <li>
                <strong className="text-white/90">Reports</strong> you submit about content (where moderation features exist).
              </li>
            </ul>

            <Subheading>2.3 Messaging and calls</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Direct messages:</strong> Message metadata (for example conversation ID, sender/receiver IDs, timestamps) is processed to deliver chat. Where <strong className="text-white/90">end-to-end encryption (E2EE)</strong> is enabled for a thread, message <strong className="text-white/90">payloads</strong> are designed so that <strong className="text-white/90">plaintext is not readable by us</strong> in the same way as ordinary server-stored text; ciphertext and related fields may still be stored to sync devices. You should assume <strong className="text-white/90">metadata</strong> about conversations can exist on our systems.
              </li>
              <li>
                <strong className="text-white/90">Voice/video calls:</strong> Signaling and session-related data may be processed to connect calls (for example WebRTC-related data via Firebase and related infrastructure). <strong className="text-white/90">Microphone and camera</strong> access are used for live calls when you join a call; see <strong className="text-white/90">Device permissions</strong> below.
              </li>
            </ul>

            <Subheading>2.4 Location</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Events “near you”:</strong> If you turn on location for events, the app may use <strong className="text-white/90">device location</strong> to find or rank nearby events. You can control this in <strong className="text-white/90">Settings → Privacy → Location Privacy</strong> (<code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">share_location_events</code>).
              </li>
              <li>
                <strong className="text-white/90">Event creation:</strong> Organizers may pin or describe event locations; business flows may require a pinned location for verification.
              </li>
              <li>
                <strong className="text-white/90">Optional location in chat:</strong> If you choose <strong className="text-white/90">“Send live location”</strong> (or similar), you <strong className="text-white/90">share location with the recipient(s)</strong> of that conversation for that action. This is <strong className="text-white/90">not</strong> the same as “events nearby,” which is described in Location Privacy for discovery only.
              </li>
            </ul>

            <Subheading>2.5 Connections and discovery</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Friends, connections, and interactions</strong> you make in the app.
              </li>
              <li>
                <strong className="text-white/90">Bump to Connect</strong> (or similar): Nearby discovery may use <strong className="text-white/90">local network / peer-to-peer</strong> technologies (for example Multipeer Connectivity, Bonjour-style services) so devices can find each other when you use the feature. This happens <strong className="text-white/90">between devices</strong> when you actively use the feature; it is not the same as uploading your full contact list by default.
              </li>
            </ul>

            <Subheading>2.6 Payments and business features</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Stripe:</strong> When you pay for subscriptions or paid features, <strong className="text-white/90">payments are processed by Stripe</strong>. We do <strong className="text-white/90">not</strong> store your full card number on our servers; Stripe handles card data subject to{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Stripe’s privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white/90">Business accounts:</strong> Business profile, plan, and entitlement data may be stored to provide business tools (for example analytics tiers, community hubs, billing-related records as implemented).
              </li>
            </ul>

            <Subheading>2.7 Notifications</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Push notifications:</strong> We use <strong className="text-white/90">Firebase Cloud Messaging (FCM)</strong> and <strong className="text-white/90">Apple Push Notification service (APNs)</strong>. A <strong className="text-white/90">device token</strong> is associated with your account so we can deliver alerts (for example new messages, calls, or other activity you opt into).
              </li>
              <li>
                <strong className="text-white/90">In-app notification records</strong> may be stored so you can see history in the app’s notification center.
              </li>
            </ul>

            <Subheading>2.8 Security and integrity</Subheading>
            <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Firebase App Check</strong> (and related mechanisms) may be used to reduce abuse and verify that requests come from genuine app instances.
              </li>
              <li>
                <strong className="text-white/90">Operational logs and diagnostics</strong> may be generated by our hosting providers (for example Google Firebase / Google Cloud) for reliability, security, and debugging.
              </li>
            </ul>

            <Subheading>2.9 Analytics and product preferences</Subheading>
            <p>
              The app includes <strong className="text-white/90">Data Usage</strong> settings (for example <strong className="text-white/90">Analytics</strong>, <strong className="text-white/90">Personalization</strong>, <strong className="text-white/90">Data Sharing</strong> preferences) stored on your user profile. <strong className="text-white/90">Implementation note:</strong> These preferences are saved to your account; <strong className="text-white/90">whether and how</strong> each toggle limits third-party SDK analytics at runtime may evolve—Firebase and other SDKs linked in the app may still emit certain diagnostic or usage data depending on configuration. For App Store disclosures, treat <strong className="text-white/90">Firebase</strong> (and any analytics SDKs you ship) as potentially collecting <strong className="text-white/90">usage/diagnostic</strong> data unless you fully disable them in build configuration.
            </p>

            <Subheading>2.10 Local storage on your device</Subheading>
            <p>
              Cached images, offline Firestore cache, and local preferences may be stored <strong className="text-white/90">on device</strong> to improve performance (for example Firestore offline persistence).
            </p>
          </Section>

          <Section title="3. How we use information">
            <p>We use the information above to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
              <li>Provide and operate the Service (feed, messaging, events, calls, business tools).</li>
              <li>Authenticate users, sync data across devices, and secure accounts.</li>
              <li>Deliver notifications you have enabled.</li>
              <li>Process payments and manage subscriptions (via Stripe where applicable).</li>
              <li>Enforce our terms, prevent fraud and abuse, and comply with law.</li>
              <li>Improve reliability and fix bugs (including through provider diagnostics).</li>
            </ul>
          </Section>

          <Section title="4. How we share information">
            <p>
              We <strong className="text-white/90">do not sell your personal information</strong> in the conventional sense of selling lists to data brokers.
            </p>
            <p className="mt-4">We may share data with:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">Service providers</strong> who host or process data on our behalf, including <strong className="text-white/90">Google Firebase / Google Cloud</strong> (authentication, database, storage, functions, messaging, App Check, etc.), <strong className="text-white/90">Stripe</strong> (payments), and <strong className="text-white/90">Apple</strong> (Sign in with Apple, push delivery, App Store distribution). Their use of data is governed by their policies and our agreements with them.
              </li>
              <li>
                <strong className="text-white/90">Other users</strong>, according to how you use the Service (for example content you post publicly, messages you send, or location you voluntarily share in chat).
              </li>
              <li>
                <strong className="text-white/90">Authorities</strong> when required by law or to protect rights, safety, and integrity.
              </li>
            </ul>
          </Section>

          <Section title="5. International transfers">
            <p>
              Our providers may process data in the <strong className="text-white/90">United Kingdom</strong>, <strong className="text-white/90">European Economic Area</strong>, <strong className="text-white/90">United States</strong>, and <strong className="text-white/90">other countries</strong> where they operate. Where required, we rely on appropriate safeguards (such as standard contractual clauses) as offered by our processors.
            </p>
          </Section>

          <Section title="6. Retention">
            <p>
              We retain information as long as your account is active and as needed to provide the Service, comply with law, resolve disputes, and enforce agreements. Some backups or logs may persist for a limited period after deletion.
            </p>
          </Section>

          <Section title="7. Your rights and choices">
            <p>
              Depending on your location, you may have rights to <strong className="text-white/90">access</strong>, <strong className="text-white/90">correct</strong>, <strong className="text-white/90">delete</strong>, <strong className="text-white/90">export</strong>, or <strong className="text-white/90">object</strong> to certain processing.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-white/40">
              <li>
                <strong className="text-white/90">In the app:</strong> Account settings, privacy settings, blocked users, photo/location controls, notification settings, and <strong className="text-white/90">Privacy Center → Download my data</strong> (JSON export of much of your Firestore-backed account data, subject to technical limits and encryption).
              </li>
              <li>
                <strong className="text-white/90">Account deletion:</strong> Where we offer account deletion or deactivation in the app, follow those flows; deletion may take time to propagate across systems.
              </li>
            </ul>
            <p className="mt-4">
              <strong className="text-white/90">EEA/UK:</strong> You may have the right to lodge a complaint with your local supervisory authority.
            </p>
            <p className="mt-3">
              <strong className="text-white/90">California (CCPA/CPRA):</strong> California residents may have additional rights (for example to know, delete, and opt out of certain sharing). We do not “sell” personal information as defined by California law in the typical sense above; see the California section in Apple’s App Privacy questionnaire for your build.
            </p>
          </Section>

          <Section title="8. Children">
            <p>
              The Service is <strong className="text-white/90">not directed at children</strong> under the age where parental consent is required in your jurisdiction. We do not knowingly collect personal information from children in violation of applicable law.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              We use industry-standard measures appropriate to the Service. <strong className="text-white/90">No method of transmission or storage is 100% secure.</strong> E2EE in messaging reduces what we can read of message <strong className="text-white/90">contents</strong>, but you should still protect your device and account credentials.
            </p>
          </Section>

          <Section title="10. Third-party services">
            <p>
              The Service may link to third-party sites or services. Their practices are governed by <strong className="text-white/90">their</strong> policies, not this one.
            </p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version in the app (and/or on our site if applicable) and change the “Last updated” date. Continued use after notice may constitute acceptance where permitted by law.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              <strong className="text-white/90">Email:</strong>{" "}
              <a href="mailto:support@inloop.uk" className="text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                support@inloop.uk
              </a>
            </p>
          </Section>

          </div>

          <p className="mt-10 border-t border-white/15 pt-8 text-xs italic leading-relaxed text-white/50">
            This document is provided for transparency and product alignment. It is not legal advice. Have qualified counsel review your policies and App Store / Play Store disclosures for your jurisdiction.
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

function Subheading({ children }) {
  return <h3 className="mt-6 text-base font-semibold text-white/90 first:mt-0">{children}</h3>;
}
