import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {

    const { cart } =
    useContext(CartContext);


    const totalItems=

    cart.reduce(

        (total,item)=>

        total+item.quantity,

        0

    );


    return (

        <header
        style={{

            background:"#2d6a4f",
            padding:"15px 30px",

            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",

            color:"white"

        }}
        >

            <h2>
                Amang & Beth Rice Store
            </h2>


            <nav
            style={{

                display:"flex",
                gap:"20px",
                alignItems:"center"

            }}
            >

                <Link
                to="/"
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                >
                    Home
                </Link>


                <Link
                to="/products"
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                >
                    Products
                </Link>


                <Link
                to="/about"
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                >
                    About
                </Link>


                <Link
                to="/contact"
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                >
                    Contact
                </Link>


                <Link
                to="/cart"
                style={{
                    color:"white",
                    textDecoration:"none",
                    fontWeight:"bold"
                }}
                >
                    Cart ({totalItems})
                </Link>


                <Link
                to="/login"
                style={{
                    background:"white",
                    color:"#2d6a4f",
                    padding:"8px 15px",
                    borderRadius:"6px",
                    textDecoration:"none",
                    fontWeight:"bold"
                }}
                >
                    Admin Login
                </Link>

            </nav>

        </header>

    );

}

export default Header;