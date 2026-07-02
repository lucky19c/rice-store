import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout(){

const {cart,clearCart}=useContext(CartContext);
const navigate=useNavigate();

const [customer,setCustomer]=useState({

fullname:"",
email:"",
contact_number:"",
address:""

});


const handleChange=(e)=>{

setCustomer({

...customer,
[e.target.name]:
e.target.value

});

};


const total=

cart.reduce(

(sum,item)=>

sum+

(

item.price*
item.quantity

),

0

);



const placeOrder=async(e)=>{

e.preventDefault();

try{

await axios.post(

"http://127.0.0.1:5000/checkout",

{

customer,

items:cart

}

);

alert(
"Order placed successfully!"
);

clearCart();

navigate("/cart");

}
catch(error){

console.log(error);

alert(

"Order failed"

);

}

};



return(

<div className="checkout-container">

<h1 className="checkout-title">

Checkout

</h1>


<div className="checkout-card">

<form onSubmit={placeOrder}>


<input
type="text"
name="fullname"
placeholder="Full Name"
required
value={customer.fullname}
onChange={handleChange}
/>


<input
type="email"
name="email"
placeholder="Email"
required
value={customer.email}
onChange={handleChange}
/>


<input
type="text"
name="contact_number"
placeholder="Phone Number"
required
value={customer.contact_number}
onChange={handleChange}
/>


<input
type="text"
name="address"
placeholder="Address"
required
value={customer.address}
onChange={handleChange}
/>



<div className="order-summary">

<h3>

Order Summary

</h3>

{

cart.map(item=>(

<div
className="order-item"
key={item.product_id}
>

<span>

{item.rice_name}

x{item.quantity}

</span>

<span>

₱{

(

item.price*
item.quantity

).toFixed(2)

}

</span>

</div>

))

}



<div className="checkout-total">

Total:

₱{

total.toFixed(2)

}

</div>

</div>



<button
type="submit"
className="place-order-btn"
>

Place Order

</button>

</form>

</div>

</div>

);

}

export default Checkout;