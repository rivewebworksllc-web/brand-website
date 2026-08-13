import type { Metadata } from "next";
import { ConnectForm } from "@/components/connect/ConnectForm";
import { Section } from "@/components/layout/Section";
import { isConnectDeliveryEnabled } from "@/lib/connect-availability";

export const metadata: Metadata = {
  title: "Connect",
  description: "Start a practical conversation with Rive Webworks about a website, cloud platform, AI system or an early-stage problem that still needs definition.",
  alternates: { canonical: "/connect/" },
};

export default function ConnectPage() {
  const deliveryEnabled = isConnectDeliveryEnabled();

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="connect-heading"
        className="-mt-20 bg-surface pt-36 pb-14 md:pt-44 md:pb-20"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
          <p className="text-eyebrow text-brand-maroon">Connect</p>
            <h1 id="connect-heading" className="text-h1 mt-5 max-w-[13ch] text-balance text-heading">
            Start with what you know.
          </h1>
          </div>
          <div className="border-l border-brand-maroon pl-5 lg:col-span-3 lg:mb-1">
            <p className="text-hero-lead max-w-sm text-body">
            Bring a defined project, an unresolved problem, or an early question. We can begin without a formal brief.
          </p>
          </div>
        </div>
      </Section>

      <Section
        spacing="tight"
        aria-labelledby="useful-message-heading"
        className="border-y border-hairline-faint bg-surface-alt"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-brand-maroon">A useful first message</p>
            <h2 id="useful-message-heading" className="text-h3 mt-3 max-w-xs text-heading">
              Begin with the signal you already have.
            </h2>
          </div>
          <ol className="grid gap-0 border-t border-hairline sm:grid-cols-3 lg:col-span-9">
            {["What is changing?", "What feels blocked?", "What decision comes next?"].map((prompt) => (
              <li key={prompt} className="border-b border-hairline py-5 sm:border-r sm:px-6 sm:last:border-r-0 lg:py-7">
                <p className="font-serif text-[clamp(1.55rem,2.4vw,2.15rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-heading">
                  {prompt}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        spacing="generous"
        aria-labelledby="conversation-heading"
        className="bg-surface"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-brand-maroon">The first exchange</p>
            <h2 id="conversation-heading" className="text-h2 mt-3 max-w-[12ch] text-heading">
              Bring the part you know.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-body md:text-base">
              Three details are required. Organisation and area of interest are optional context.
            </p>
            <p className="mt-8 max-w-sm border-t border-hairline pt-5 text-sm leading-[1.7] text-muted">
              A formal brief is not required. Share the problem, the decision in front of you, or the context you already have.
            </p>
          </div>
          <div className="relative lg:col-span-8 lg:pl-10">
            <div aria-hidden="true" className="absolute top-0 bottom-0 left-0 hidden w-px bg-brand-maroon lg:block" />
            <div className="border-t-2 border-brand-maroon pt-6">
              <ConnectForm deliveryEnabled={deliveryEnabled} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
