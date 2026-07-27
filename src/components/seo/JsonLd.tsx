type JsonLdProps = {
  id: string;
  data: Record<string, unknown>;
};

/** Renders a single JSON-LD script tag from trusted, internally-authored data. */
export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
