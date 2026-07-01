import { useEffect, useState } from "react";
import api from "../services/api";

function Orders(){

    const [orders,setOrders] = useState([]);

    useEffect(()=>{

        fetchOrders();

    },[]);


    const fetchOrders = async()=>{

        const response =
        await api.get("/orders");

        setOrders(
            response.data
        );

    };


    return(

        <div style={{padding:"50px"}}>

            <h1>
                Customer Orders
            </h1>

            {

                orders.map(order=>(

                    <div
                    key={order.order_id}
                    style={{
                        border:"1px solid #ddd",
                        marginBottom:"20px",
                        padding:"20px",
                        borderRadius:"10px"
                    }}
                    >

                        <h3>

                            Order #

                            {order.order_id}

                        </h3>

                        <p>
                            Customer:
                            {order.fullname}
                        </p>

                        <p>
                            Contact:
                            {order.contact_number}
                        </p>

                        <p>
                            Total:
                            ₱{order.total_amount}
                        </p>

                        <p>
                            Status:
                            {order.status}
                        </p>

                    </div>

                ))

            }

        </div>
    )

}

export default Orders;