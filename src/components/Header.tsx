
import { Guitar } from "../types"; /// Importo los types

/// defino directamente cada cosa que esta recibiendo de acuero a los cambios anteriores y modificaciones en los types.

interface HeaderProps {
  cart: Guitar[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  emptyCart: () => void;
}

/// Exporto de una manera mas orderanada las funciones que utilizo, y la parte logica la separado de la interfaz directa del component

export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
}: HeaderProps): JSX.Element {
  const isEmpty = cart.length === 0; /// con esto se comprueba si el carrito esta vacio
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0); 
// Matengo el error de quantity, regresare cuando tenga mas idea de como mejorarlo, a pesar de que hice la declaracion de quantity

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${item.image}.jpg`}
                                alt={`Imagen de ${ item.name}`}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td className="fw-bold">${item.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total a pagar: <span className="fw-bold">${cartTotal}</span>
                    </p>
                  </>
                )}
                <button className="btn btn-dark w-100 mt-3 p-2" onClick={emptyCart}>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
