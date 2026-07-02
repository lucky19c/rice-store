import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Admin.css";

function Admin() {

const [products,setProducts]=useState([]);
const [previewImage,setPreviewImage]=useState(null);

const [newProduct,setNewProduct]=useState({

rice_name:"",
description:"",
price:"",
stock_quantity:"",
category:"",
image:null

});

const [editingId,setEditingId]=useState(null);

const fileInputRef=useRef(null);
const navigate=useNavigate();


useEffect(()=>{

fetchProducts();

},[]);



const fetchProducts=async()=>{

try{

const response=await axios.get(
"http://127.0.0.1:5000/products"
);

setProducts(response.data);

}
catch(error){

console.log(error);

}

};



const totalProducts=products.length;

const totalStock=products.reduce(

(total,item)=>

total+Number(item.stock_quantity),

0

);

const lowStock=products.filter(

(item)=>

Number(item.stock_quantity)<=5 &&
Number(item.stock_quantity)>0

).length;

const outOfStock=products.filter(

(item)=>

Number(item.stock_quantity)===0

).length;



const handleChange=(e)=>{

setNewProduct({

...newProduct,
[e.target.name]:e.target.value

});

};



const handleImage=(e)=>{

const file=e.target.files[0];

setNewProduct({

...newProduct,
image:file

});

if(file){

setPreviewImage(
URL.createObjectURL(file)
);

}

};



const clearForm=()=>{

setNewProduct({

rice_name:"",
description:"",
price:"",
stock_quantity:"",
category:"",
image:null

});

setPreviewImage(null);

setEditingId(null);

if(fileInputRef.current){

fileInputRef.current.value="";

}

};



const addProduct=async(e)=>{

e.preventDefault();

try{

const formData=new FormData();

formData.append(
"rice_name",
newProduct.rice_name
);

formData.append(
"description",
newProduct.description
);

formData.append(
"price",
newProduct.price
);

formData.append(
"stock_quantity",
newProduct.stock_quantity
);

formData.append(
"category",
newProduct.category
);

formData.append(
"image",
newProduct.image
);

await axios.post(

"http://127.0.0.1:5000/products",

formData,

{
headers:{
"Content-Type":
"multipart/form-data"
}
}

);

alert(
"Product Added Successfully"
);

fetchProducts();

clearForm();

}
catch(error){

console.log(error);

alert(
"Error adding product"
);

}

};



const editProduct=(product)=>{

setEditingId(
product.product_id
);

setNewProduct({

rice_name:product.rice_name,
description:product.description,
price:product.price,
stock_quantity:product.stock_quantity,
category:product.category,
image:product.image

});

setPreviewImage(
product.image
);

};



const updateProduct=async(e)=>{

e.preventDefault();

try{

await axios.put(

`http://127.0.0.1:5000/products/${editingId}`,

{

rice_name:newProduct.rice_name,
description:newProduct.description,
price:newProduct.price,
stock_quantity:newProduct.stock_quantity,
category:newProduct.category,

image:
typeof newProduct.image==="string"
?
newProduct.image
:
previewImage

}

);

alert(
"Product Updated Successfully"
);

fetchProducts();

clearForm();

}
catch(error){

console.log(error);

alert(
"Error updating product"
);

}

};



const deleteProduct=async(id)=>{

try{

const confirmDelete=window.confirm(
"Delete this product?"
);

if(!confirmDelete){

return;

}

const response=await axios.delete(

`http://127.0.0.1:5000/products/${id}`

);

console.log(
response.data
);

alert(
"Product Deleted Successfully"
);

fetchProducts();

}
catch(error){

console.log(

"Delete Error:",

error.response?.data || error

);

alert(
"Failed to delete product"
);

}

};



return(

<div className="admin-container">

<div className="admin-header">

<h1 className="admin-title">

Admin Dashboard

</h1>

<button
className="orders-btn"
onClick={()=>
navigate("/orders")
}
>

View Order History

</button>

</div>



<div className="dashboard-cards">

<div className="dashboard-card">

<h3>Products</h3>

<p>{totalProducts}</p>

</div>


<div className="dashboard-card">

<h3>Total Stock</h3>

<p>{totalStock}</p>

</div>


<div className="dashboard-card">

<h3>Low Stock</h3>

<p>{lowStock}</p>

</div>


<div className="dashboard-card">

<h3>Out of Stock</h3>

<p>{outOfStock}</p>

</div>

</div>



<form
className="admin-form"
onSubmit={
editingId
?
updateProduct
:
addProduct
}
>

<input
name="rice_name"
placeholder="Product Name"
value={newProduct.rice_name}
onChange={handleChange}
required
/>

<input
name="description"
placeholder="Description"
value={newProduct.description}
onChange={handleChange}
required
/>

<input
type="number"
name="price"
placeholder="Price"
value={newProduct.price}
onChange={handleChange}
required
/>

<input
type="number"
name="stock_quantity"
placeholder="Stock Quantity"
value={newProduct.stock_quantity}
onChange={handleChange}
required
/>

<input
name="category"
placeholder="Category"
value={newProduct.category}
onChange={handleChange}
/>



<div className="upload-container">

<label>

Upload Product Image

</label>

<input
type="file"
accept="image/*"
ref={fileInputRef}
onChange={handleImage}
/>


{

previewImage && (

<img
src={previewImage}
className="preview-image"
alt="preview"
/>

)

}

</div>



<button>

{

editingId
?
"Update Product"
:
"Add Product"

}

</button>

</form>



<div className="admin-products">

{

products.map((product)=>(

<div
className="admin-card"
key={product.product_id}
>

<img
src={product.image}
alt={product.rice_name}
/>

<h3>

{product.rice_name}

</h3>

<p>

{product.description}

</p>

<p>

₱{product.price}

</p>

<p>

Stock: {product.stock_quantity}

</p>


<div className="admin-buttons">

<button
type="button"
className="edit-btn"
onClick={()=>
editProduct(product)
}
>

Edit

</button>


<button
type="button"
className="delete-btn"
onClick={()=>
deleteProduct(
product.product_id
)
}
>

Delete

</button>

</div>

</div>

))

}

</div>

</div>

);

}

export default Admin;