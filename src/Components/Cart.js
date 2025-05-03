import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart ,removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

const handleClearCart = () => {
dispatch(clearCart(cartItems))
}
const handleremoveCart = () => {
  dispatch(removeItems(cartItems))
}


  return (
    <div className="">
      <h1 className="font-bold text-center my-5">Cart</h1>
      <div className=" flex items-center"><button
        className="font-bold text-center my-5 border border-black bg-green-300
      "
       onClick={handleClearCart}>
        Clear Cart
      </button>
      <button
        className="font-bold item-center my-5 border border-black bg-green-300 mx-5 
      "
       onClick={handleremoveCart}>
        Clear 1 Cart
      </button> </div>
      <div className="w-6/12 m-auto">
        {" "}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
