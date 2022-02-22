import { useContext, useState } from "react"
import CartItem from "../components/CartItem";
import { PhotosContext } from "../PhotosContext";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const {cartItems, emptyCart} = useContext(PhotosContext);
    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));

    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart();
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            {
                (cartItems.length > 0)
                ? <>
                    <p className="total-cost">Total: {totalCostDisplay}</p>
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div>
                </>
                : <p>You have no items in your cart</p>
            }
        </main>
    )
}

export default Cart;
