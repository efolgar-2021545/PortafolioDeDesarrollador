export default function StatusDot() {
  return (
    <span className="relative flex h-3 w-3" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
    </span>
  );
}