import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart(){

const {

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

(

item.price*
item.quantity

),

0

);


return(

<div
style={{

padding:"40px"

}}
>

<h1>

Shopping Cart

</h1>


{

cart.length===0

?

<p>

Cart is empty

</p>

:

cart.map(item=>(

<div

key={item.product_id}

style={{

border:"1px solid #ddd",

padding:"15px",

marginBottom:"15px",

borderRadius:"10px"

}}

>

<h3>

{item.rice_name}

</h3>

<p>

₱{item.price}

</p>


<div

style={{

display:"flex",

alignItems:"center",

gap:"10px"

}}

>

<button

onClick={()=>

decreaseQuantity(

item.product_id

)

}

>

-

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


<p>

Subtotal:

₱

{(

item.price*
item.quantity

).toFixed(2)}

</p>


<button

onClick={()=>

removeProduct(

item.product_id

)

}

>

Remove

</button>

</div>

))

}


{

cart.length>0 &&

<>

<h2>

Total:

₱

{totalPrice.toFixed(2)}

</h2>


<Link to="/checkout">

<button>

Proceed to Checkout

</button>

</Link>

</>

}

</div>

);

}

export default Cart;