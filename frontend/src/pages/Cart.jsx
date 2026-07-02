import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart(){

const{

cart,
addToCart,
decreaseQuantity,
removeProduct

}

=

useContext(CartContext);


const totalPrice=

cart.reduce(

(total,item)=>

total+

(item.price*item.quantity),

0

);


return(

<div className="cart-container">

<h1 className="cart-title">

Shopping Cart

</h1>


{

cart.length===0

?

<div className="empty-cart">

    Your cart is empty

</div>

:

<>

{

cart.map(item=>(

<div
className="cart-card"
key={item.product_id}
>

<div className="cart-left">

<img

src={item.image}

alt={item.rice_name}

className="cart-image"

/>

<div>

<h2>

{item.rice_name}

</h2>

<p>

₱{item.price}

</p>

<p>

Subtotal:

₱{(
item.price*
item.quantity
).toFixed(2)}

</p>


<div
className="quantity-controls"
>

<button
onClick={()=>
decreaseQuantity(
item.product_id
)
}
>

−

</button>


<span>

{item.quantity}

</span>


<button
onClick={()=>
addToCart(item)
}
>

+

</button>

</div>


<button

className="remove-btn"

onClick={()=>
removeProduct(
item.product_id
)
}
>

Remove

</button>

</div>

</div>

</div>

))

}


<div className="total-box">

<h2>

Total:

₱{totalPrice.toFixed(2)}

</h2>


<Link to="/checkout">

<button
className="checkout-btn"
>

Proceed to Checkout

</button>

</Link>

</div>

</>

}

</div>

);

}

export default Cart;