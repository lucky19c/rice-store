import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function Products() {

    const [products, setProducts] = useState([]);

    const { addToCart } =
    useContext(CartContext);


    useEffect(() => {

        fetchProducts();

    }, []);


    const fetchProducts = async () => {

        try {

            const response =
            await axios.get(
                "http://127.0.0.1:5000/products"
            );

            setProducts(
                response.data
            );

        }

        catch(error){

            console.log(error);

        }

    };


    return(

        <div
        style={{
            padding:"40px"
        }}
        >

            <h1>
                Products
            </h1>

            <div
            style={{

                display:"grid",
                gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",

                gap:"20px"

            }}
            >

            {

            products.map(product=>(

                <div

                key={product.product_id}

                style={{

                    border:"1px solid #ddd",
                    padding:"20px",
                    borderRadius:"10px"

                }}

                >

                    <img

                    src={product.image}

                    alt={product.rice_name}

                    style={{

                        width:"100%",
                        height:"200px",
                        objectFit:"cover"

                    }}

                    />

                    <h3>

                        {product.rice_name}

                    </h3>

                    <p>

                        {product.description}

                    </p>

                    <p>

                        Category:

                        {" "}

                        {product.category}

                    </p>

                    <p>

                        Stock:

                        {" "}

                        {product.stock_quantity}

                    </p>

                    <h3>

                        ₱{product.price}

                    </h3>


                    <button

                    onClick={()=>{

                        addToCart(product);

                        alert(

                            `${product.rice_name} added to cart`

                        );

                    }}

                    >

                        Add to Cart

                    </button>

                </div>

            ))

            }

            </div>

        </div>

    );

}

export default Products;