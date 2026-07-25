import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-container flex min-h-screen items-center justify-center pt-28 text-center">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-card">
        <p className="font-mono text-sm uppercase tracking-[0.35em] text-portfolio-softBlue">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Página no encontrada
        </h1>

        <p className="mt-4 leading-8 text-portfolio-muted">
          La ruta que intentaste abrir no existe o todavía no forma parte del
          portafolio.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-portfolio-blue px-6 py-3 text-sm font-semibold text-portfolio-black transition hover:bg-portfolio-softBlue"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}