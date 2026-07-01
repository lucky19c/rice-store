import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Checkout() {

    const navigate = useNavigate();

    const { cart, clearCart } =
    useContext(CartContext);

    const [customer,setCustomer]=useState({

        fullname:"",
        contact_number:"",
        email:"",
        address:""

    });


    const handleChange=(e)=>{

        setCustomer({

            ...customer,

            [e.target.name]:
            e.target.value

        });

    };


    const handleCheckout=async()=>{

        try{

            if(!cart || cart.length===0){

                alert(
                    "Cart is empty"
                );

                return;

            }

            const data={

                customer:customer,

                items:

                cart.map(item=>({

                    product_id:
                    item.product_id,

                    quantity:
                    item.quantity

                }))

            };


            console.log(
                "Sending data:",
                data
            );

            const response=

            await api.post(
                "/checkout",
                data
            );

            alert(
                "Order placed successfully!"
            );

            clearCart();

            navigate("/");

        }

        catch(error){

            console.log(
                "Checkout Error:",
                error
            );

            alert(

                error.response?.data?.error ||

                "Failed to place order"

            );

        }

    };


    return(

        <div
        style={{
            padding:"40px"
        }}
        >

            <h1>
                Checkout
            </h1>


            <input
            name="fullname"
            placeholder="Full Name"
            value={customer.fullname}
            onChange={handleChange}
            />

            <br/><br/>


            <input
            name="contact_number"
            placeholder="Contact Number"
            value={customer.contact_number}
            onChange={handleChange}
            />

            <br/><br/>


            <input
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            />

            <br/><br/>


            <textarea
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
            />

            <br/><br/>


            <button
            onClick={handleCheckout}
            >

                Place Order

            </button>

        </div>

    );

}

export default Checkout;