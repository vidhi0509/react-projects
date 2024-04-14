import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = (cartItems) => {
    dispatch(clearCart());
  };

  return (
    <>
      <div>
        {/* <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1> */}
        {cartItems.length==0? "" : <button
          className="flex bg-red-400 rounded-md p-2 m-5"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>}
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
