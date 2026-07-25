export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = ""
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black";

  const variants = {
    primary:
      "bg-portfolio-blue text-portfolio-black shadow-glow hover:bg-portfolio-softBlue",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white hover:border-portfolio-blue/50 hover:bg-portfolio-blue/10"
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}