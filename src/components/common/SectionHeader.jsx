export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-portfolio-softBlue">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-portfolio-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}