import { Container } from "@/components/layout/Container";

type ProofFootnoteSectionProps = {
  text: string;
};

/**
 * A single understated line, not a card grid of "honest labels" — the
 * absence of proof doesn't need its own heavy section to say so.
 */
export function ProofFootnoteSection({ text }: ProofFootnoteSectionProps) {
  return (
    <div className="border-t border-hairline-faint bg-surface-alt">
      <Container className="py-6 md:py-8">
        <p className="max-w-2xl text-[13px] leading-[1.6] text-muted">{text}</p>
      </Container>
    </div>
  );
}
