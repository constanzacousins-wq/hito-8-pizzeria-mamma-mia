
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { token, email, getProfile, logout } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const cargarPerfil = async () => {
      try {
        await getProfile();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    cargarPerfil();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!token) {
    return (
      <div className="container text-center my-5">
        <h1>Mi perfil</h1>
        <p>Debes iniciar sesión para ver tu perfil.</p>
        <button onClick={() => navigate("/login")}>
          Ir al Login
        </button>
      </div>
    );
  }

  return (
    <div className="container text-center my-5">
      <h1>Mi perfil</h1>

      {loading ? (
        <p>Cargando perfil...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <p>Email: {email}</p>
      )}

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
