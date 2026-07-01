import { useEffect,useState } from "react";
import axios from "axios";

function Admin(){

const [products,setProducts]=useState([]);

const [form,setForm]=useState({

rice_name:"",
description:"",
price:"",
stock_quantity:"",
image:"",
category:"Rice"

});

const [editingId,setEditingId]=useState(null);


useEffect(()=>{

fetchProducts();

},[]);


const fetchProducts=async()=>{

const response=

await axios.get(
"http://127.0.0.1:5000/products"
);

setProducts(
response.data
);

};


const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};


const handleSubmit=async()=>{

try{

if(editingId){

await axios.put(

`http://127.0.0.1:5000/products/${editingId}`,

form

);

alert(
"Updated successfully"
);

}

else{

await axios.post(

"http://127.0.0.1:5000/products",

form

);

alert(
"Added successfully"
);

}


setForm({

rice_name:"",
description:"",
price:"",
stock_quantity:"",
image:"",
category:"Rice"

});

setEditingId(null);

fetchProducts();

}

catch(error){

console.log(error);

}

};


const editProduct=(product)=>{

setEditingId(
product.product_id
);

setForm(product);

};


const deleteProduct=async(id)=>{

if(

!window.confirm(
"Delete this product?"
)

)return;

await axios.delete(

`http://127.0.0.1:5000/products/${id}`

);

fetchProducts();

};



return(

<div style={{

padding:"50px"

}}>

<h1>
Admin Panel
</h1>


<input
name="rice_name"
placeholder="Product name"
value={form.rice_name}
onChange={handleChange}
/>

<br/><br/>


<textarea
name="description"
placeholder="Description"
value={form.description}
onChange={handleChange}
/>

<br/><br/>


<input
name="price"
placeholder="Price"
value={form.price}
onChange={handleChange}
/>

<br/><br/>


<input
name="stock_quantity"
placeholder="Stock"
value={form.stock_quantity}
onChange={handleChange}
/>

<br/><br/>


<input
name="image"
placeholder="Image URL"
value={form.image}
onChange={handleChange}
/>

<br/><br/>


<select
name="category"
value={form.category}
onChange={handleChange}
>

<option>Rice</option>
<option>Coffee</option>
<option>Snacks</option>
<option>Beans</option>

</select>

<br/><br/>


<button
onClick={handleSubmit}
>

{editingId ?

"Update Product"

:

"Add Product"

}

</button>


<hr/>

<h2>
Existing Products
</h2>

{

products.map(product=>(

<div

key={product.product_id}

style={{

border:"1px solid #ccc",
padding:"15px",
marginBottom:"10px"

}}

>

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

Stock:

{product.stock_quantity}

</p>


<button

onClick={()=>

editProduct(product)

}

>

Edit

</button>


<button

onClick={()=>

deleteProduct(
product.product_id
)

}

style={{

marginLeft:"10px"

}}

>

Delete

</button>

</div>

))

}

</div>

);

}

export default Admin;