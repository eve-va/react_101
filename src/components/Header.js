import {Link} from "react-router-dom";
import {useContext} from "react";
import { PhotosContext } from "../PhotosContext";

function Header() {
    const {cartItems} = useContext(PhotosContext);
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link> 
        </header>
    )
}

export default Header;
