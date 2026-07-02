import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/Products.css";

function Products() {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    const { addToCart } = useContext(CartContext);

    useEffect(() => {

        fetchProducts();

    }, []);


    const fetchProducts = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:5000/products"
            );

            setProducts(response.data);

        }

        catch(error){

            console.log(error);

        }

    };


    const filteredProducts = products.filter(product => {

        const categoryMatch =

        selectedCategory === "All"

        ||

        product.category === selectedCategory;


        const searchMatch =

        product.rice_name
        .toLowerCase()
        .includes(
            search.toLowerCase()
        );

        return categoryMatch && searchMatch;

    });


    return (

        <div className="products-container">

            <h1 className="products-title">

                Products

            </h1>


            <div
            style={{
                display:"flex",
                justifyContent:"center",
                gap:"15px",
                marginBottom:"40px",
                flexWrap:"wrap"
            }}
            >

                {/* Search */}

                <input

                type="text"

                placeholder="Search products..."

                value={search}

                onChange={(e)=>

                setSearch(
                    e.target.value
                )

                }

                style={{

                    padding:"12px",
                    width:"300px",
                    borderRadius:"8px",
                    border:"1px solid #ccc"

                }}

                />


                {/* Category */}

                <select

                value={selectedCategory}

                onChange={(e)=>

                setSelectedCategory(
                    e.target.value
                )

                }

                style={{

                    padding:"12px",
                    width:"200px",
                    borderRadius:"8px"

                }}

                >

                    <option>All</option>
                    <option>Rice</option>
                    <option>Coffee</option>
                    <option>Plastic</option>
                    <option>Chicharon</option>
                    <option>Other</option>

                </select>

            </div>



            <div className="product-grid">

                {

                filteredProducts.map(product => (

                <div
                className="product-card"
                key={product.product_id}
                >

                    <img
                    src={product.image}
                    alt={product.rice_name}
                    />

                    <div className="product-content">

                        <h3>

                            {product.rice_name}

                        </h3>

                        <p>

                            {product.description}

                        </p>

                        <p className="price">

                            ₱{product.price}

                        </p>

                        <p className="stock">

                            Stock: {product.stock_quantity}

                        </p>


                        <button

                        className="add-btn"

                        onClick={()=>{

                            addToCart(product);

                            alert(
                                `${product.rice_name} added to cart`
                            );

                        }}

                        >

                            Add To Cart

                        </button>

                    </div>

                </div>

                ))

                }

            </div>

        </div>

    );

}

export default Products;