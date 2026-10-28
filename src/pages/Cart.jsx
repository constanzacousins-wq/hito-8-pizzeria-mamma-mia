
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Enviar el carrito al backend
  const handleCheckout = async () => {
    if (!token) {
      setError("Debes iniciar sesión para comprar.");
      return;
    }

    if (cart.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    setMensaje("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/checkouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cart }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "No se pudo realizar la compra"
        );
      }

      setMensaje("¡Compra realizada con éxito! 🍕");
    } catch (error) {
      setError(
        error.message || "Error al procesar la compra"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío 🍕</p>
      ) : (
        cart.map((pizza) => (
          <div className="cart-item" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />

            <span className="cart-name">
              {pizza.name}
            </span>

            <strong>
              ${pizza.price.toLocaleString("es-CL")}
            </strong>

            <button
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              onClick={() => addToCart(pizza)}
            >
              +
            </button>
          </div>
        ))
      )}

      <h2>
        Total: ${total.toLocaleString("es-CL")}
      </h2>

      <button
        className="pay-button"
        onClick={handleCheckout}
        disabled={!token || cart.length === 0 || loading}
      >
        {loading ? "Procesando..." : "Pagar"}
      </button>

      {!token && (
        <p>Debes iniciar sesión para realizar la compra.</p>
      )}

      {mensaje && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {mensaje}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Cart;
