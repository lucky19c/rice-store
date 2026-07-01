import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar(){

const { cartItems } =
useContext(CartContext);

return(

<nav
style={{
display:"flex",
justifyContent:"space-between",
padding:"20px",
background:"#333",
color:"white"
}}
>

<h2>
Amang and Beth Rice Store
</h2>

<div
style={{
display:"flex",
gap:"20px"
}}
>

<Link to="/">Home</Link>

<Link to="/products">
Products
</Link>

<Link to="/about">
About
</Link>

<Link to="/contact">
Contact
</Link>

<Link to="/cart">
Cart ({cartItems.length})
</Link>

</div>

</nav>

)

}

export default Navbar;