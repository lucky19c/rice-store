import { useState } from "react";
import api from "../services/api";

function AddProduct() {

    const [formData, setFormData] = useState({
        rice_name:"",
        description:"",
        price:"",
        stock_quantity:"",
        image:""
    });

    const handleChange=(e)=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        api.post("/products", formData)
        .then(()=>{

            alert("Product added!");

            window.location.reload();

        })
        .catch(error=>{

            console.log(error);

        });

    };

    return(

        <div>

            <h2>Add Rice Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                name="rice_name"
                placeholder="Rice Name"
                onChange={handleChange}
                />

                <input
                name="description"
                placeholder="Description"
                onChange={handleChange}
                />

                <input
                name="price"
                placeholder="Price"
                onChange={handleChange}
                />

                <input
                name="stock_quantity"
                placeholder="Stock Quantity"
                onChange={handleChange}
                />

                <input
                name="image"
                placeholder="Image filename"
                onChange={handleChange}
                />

                <button type="submit">
                    Add Product
                </button>

            </form>

        </div>

    )

}

export default AddProduct;