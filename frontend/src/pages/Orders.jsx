import { useEffect,useState } from "react";
import api from "../services/api";
import "../styles/Orders.css";

function Orders(){

const [orders,setOrders]=useState([]);


useEffect(()=>{

fetchOrders();

},[]);



const fetchOrders=async()=>{

try{

const response=await api.get(
"/orders"
);

setOrders(
response.data
);

}
catch(error){

console.log(error);

}

};



const updateStatus=async(id,status)=>{

try{

await api.put(

`/orders/${id}`,

{
status
}

);

fetchOrders();

}
catch(error){

console.log(error);

}

};



const deleteOrder=async(id)=>{

const confirmDelete=

window.confirm(
"Delete this order?"
);

if(!confirmDelete){

return;

}

try{

await api.delete(

`/orders/${id}`

);

fetchOrders();

}
catch(error){

console.log(error);

}

};



return(

<div className="orders-container">

<h1>

Customer Orders

</h1>


<div className="orders-grid">

{

orders.map(order=>(

<div
className="order-card"
key={order.order_id}
>

<h3>

Order #

{order.order_id}

</h3>


<p>

<strong>

Customer:

</strong>

{" "}

{order.fullname}

</p>


<p>

<strong>

Contact:

</strong>

{" "}

{order.contact_number}

</p>


<p>

<strong>

Email:

</strong>

{" "}

{order.email}

</p>


<p>

<strong>

Address:

</strong>

{" "}

{order.address}

</p>


<p>

<strong>

Total:

</strong>

₱{order.total_amount}

</p>



<div
className={`order-status ${order.status.toLowerCase()}`}
>

{order.status}

</div>



<select

className={`status-select ${order.status.toLowerCase()}`}

value={order.status}

onChange={(e)=>

updateStatus(

order.order_id,
e.target.value

)

}

>

<option value="Pending">

Pending

</option>

<option value="Processing">

Processing

</option>

<option value="Completed">

Completed

</option>

</select>



<button
className="delete-order"
onClick={()=>
deleteOrder(
order.order_id
)
}
>

Delete Order

</button>

</div>

))

}

</div>

</div>

);

}

export default Orders;