import { useState } from "react";
import { LockKeyhole, LogIn } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import useProtectedAccess from "../hooks/useProtectedAccess.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, demoPassword } = useProtectedAccess();

  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const redirectTo = location.state?.from || "/studio";

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = login(password);

    if (!result.success) {
      setFeedback(result.message);
      return;
    }

    navigate(redirectTo, { replace: true });
  };

  return (
    <section className="section-container flex min-h-screen items-center justify-center pt-28">
      <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-card sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-softBlue shadow-glow">
          <LockKeyhole size={26} />
        </div>

        <p className="mt-7 font-mono text-sm uppercase tracking-[0.3em] text-portfolio-softBlue">
          Acceso privado
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Studio
        </h1>

        <p className="mt-4 leading-8 text-portfolio-muted">
          Ingresa la clave local para abrir la demostración privada.
        </p>

        <div className="mt-6 rounded-3xl border border-portfolio-blue/20 bg-portfolio-blue/10 p-4">
          <p className="text-sm leading-7 text-portfolio-muted">
            Clave de demostración
          </p>

          <code className="mt-2 block rounded-2xl border border-white/10 bg-portfolio-black/60 px-4 py-3 font-mono text-sm text-portfolio-softBlue">
            {demoPassword}
          </code>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Clave local
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setFeedback("");
              }}
              placeholder="Ingresa la clave"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-portfolio-blue/60 focus:ring-2 focus:ring-portfolio-blue/20"
            />
          </div>

          {feedback ? (
            <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {feedback}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-portfolio-blue px-6 py-3 text-sm font-semibold text-portfolio-black transition hover:bg-portfolio-softBlue focus:outline-none focus:ring-2 focus:ring-portfolio-softBlue focus:ring-offset-2 focus:ring-offset-portfolio-black"
          >
            <LogIn size={18} />
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}