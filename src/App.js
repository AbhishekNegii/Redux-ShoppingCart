import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { cartActions } from "./store/cartSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.cartIsVisisble);
  const cart = useSelector((state) => state.cartItem);
  const notification = useSelector((state) => state.cart.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data..",
        })
      );
      const response = fetch(
        "https://react-http-20921-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application.json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending request failed....");
      }

      dispatch(
        cartActions.showNotification({
          status: "Success",
          title: "Success...",
          message: "sent cart data successfully..",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((err) => {
      dispatch(
        cartActions.showNotification({
          status: "erroe",
          title: "Error...",
          message: "sending cart data failed...",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.mesage}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
