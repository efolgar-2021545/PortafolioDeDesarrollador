import { useCallback, useState } from "react";

const ACCESS_KEY = "erick-folgar-studio-access";
const DEMO_PASSWORD = "erick-demo";

function getStoredAccess() {
  return window.localStorage.getItem(ACCESS_KEY) === "granted";
}

export default function useProtectedAccess() {
  const [hasAccess, setHasAccess] = useState(() => getStoredAccess());

  const login = useCallback((password) => {
    /*
      Simulación frontend:
      Esta validación solo demuestra manejo de rutas protegidas en React.
      No debe usarse para proteger información real o sensible.
    */
    if (password.trim() !== DEMO_PASSWORD) {
      return {
        success: false,
        message: "Clave incorrecta. Usa la clave de demostración correcta."
      };
    }

    window.localStorage.setItem(ACCESS_KEY, "granted");
    setHasAccess(true);

    return {
      success: true,
      message: "Acceso concedido."
    };
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(ACCESS_KEY);
    setHasAccess(false);
  }, []);

  return {
    hasAccess,
    login,
    logout,
    demoPassword: DEMO_PASSWORD
  };
}