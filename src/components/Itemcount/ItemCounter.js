import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";

export default function ItemCount() {
  const [count, setCount] = useState(1);
  const stock = 10;

  const handleAddItem = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrementItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCartButton = () => {
    if (count === 1) {
      toast.success(`Has añadido ${count} item al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`Has añadido ${count} items al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Componente de presentación
  const AddButton = ({ handleOnSubmit }) => {
    return (
      <Button
        variant="primary"
        className="add-button"
        onClick={() => handleOnSubmit()}
      >
        Añadir al carrito
      </Button>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button type="button" onClick={handleDecrementItem}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={handleAddItem}>
          +
        </button>
      </div>
      <div>
        <AddButton handleOnSubmit={handleAddToCartButton} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}