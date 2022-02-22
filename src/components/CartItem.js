import { useContext } from "react";
import useHover from "../hooks/useHover";
import { PhotosContext } from "../PhotosContext";
import PropTypes from "prop-types"

function CartItem({item}) {
    const {removeFromCart} = useContext(PhotosContext);
    const [hovered, ref] = useHover();

    const binClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <i 
                className={binClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            ></i>
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem