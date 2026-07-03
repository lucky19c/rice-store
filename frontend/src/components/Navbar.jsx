import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar(){

const {cart}=useContext(CartContext);

const totalItems=

cart.reduce(

(total,item)=>

total+
item.quantity,

0

);

return(

<nav className="navbar">

<Link
to="/"
className="logo"
>

🌾 Amang & Beth

</Link>


<div className="nav-links">

<Link to="/">

Home

</Link>

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

Cart

{

totalItems>0

&&

<span className="cart-badge">

{totalItems}

</span>

}

</Link>

</div>

</nav>

);

}

export default Navbar;