import { useState } from "react";
import axios from "axios";

function AddProduct() {

  const [riceName, setRiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Rice");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://127.0.0.1:5000/products",
        {
          rice_name: riceName,
          description: description,
          price: price,
          stock_quantity: stockQuantity,
          image: image,
          category: category
        }
      );

      alert("Product added successfully!");

      // Clear all fields after adding
      setRiceName("");
      setDescription("");
      setPrice("");
      setStockQuantity("");
      setImage("");
      setCategory("Rice");

    } catch (error) {

      console.log(error);

      alert("Error adding product");

    }

  };

  return (

    <div
      style={{
        maxWidth:"600px",
        margin:"50px auto",
        padding:"30px",
        background:"white",
        borderRadius:"15px",
        boxShadow:"0 5px 15px rgba(0,0,0,.1)"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          marginBottom:"30px"
        }}
      >
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"15px"
        }}
      >

        <input
          type="text"
          placeholder="Product Name"
          value={riceName}
          onChange={(e)=>setRiceName(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e)=>setStockQuantity(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          <option value="Rice">
            Rice
          </option>

          <option value="Coffee">
            Coffee
          </option>

          <option value="Snacks">
            Snacks
          </option>

          <option value="Beans">
            Beans
          </option>

          <option value="Others">
            Others
          </option>

        </select>

        <button
          type="submit"
          style={{
            padding:"12px",
            background:"#2E8B57",
            color:"white",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer"
          }}
        >
          Add Product
        </button>

      </form>

    </div>

  );

}

export default AddProduct;