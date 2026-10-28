
import { createContext, useState } from "react";

export const UserContext = createContext();

const API_URL = "http://localhost:5000";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || null
  );

  // Iniciar sesión
  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al iniciar sesión");
    }

    setToken(data.token);
    setEmail(data.email);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);

    return data;
  };

  // Registrar usuario
  const register = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al registrarse");
    }

    setToken(data.token);
    setEmail(data.email);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);

    return data;
  };

  // Cerrar sesión
  const logout = () => {
    setToken(null);
    setEmail(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Obtener perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) {
      throw new Error("Usuario no autenticado");
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al obtener perfil");
    }

    setEmail(data.email);
    localStorage.setItem("email", data.email);

    return data;
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
