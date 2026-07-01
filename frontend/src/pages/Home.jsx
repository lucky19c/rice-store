import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

const featuredProducts = [

{
name:"Rice",
description:"Premium quality rice carefully selected for freshness, taste, and everyday meals.",
image:"/src/assets/rice.jpg"
},

{
name:"Kapeng Barako",
description:"Rich and aromatic coffee with a bold flavor, perfect for coffee lovers.",
image:"/src/assets/kapengbarako.jpg"
},

{
name:"Sugar",
description:"Fine quality sugar perfect for sweetening drinks, desserts, and daily cooking.",
image:"/src/assets/sugar.jpg"
},

{
name:"Chicharon",
description:"Crunchy and flavorful pork snack made for satisfying every craving.",
image:"/src/assets/chicharon.jpg"
},

{
name:"Munggo",
description:"Nutritious and versatile green mung beans, perfect for soups, desserts, and everyday meals.",
image:"/src/assets/mungbeans.jpg"
},

{
name:"Pinipig",
description:"Light and crunchy flattened young rice grains, ideal for snacks, desserts, and traditional delicacies.",
image:"/src/assets/pinipig.jpg"
},
];

return(

<div>

<div
style={{
height:"500px",
backgroundImage:`url(${banner})`,
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column",
color:"white",
textAlign:"center"
}}
>

<h1
style={{
fontSize:"55px"
}}
>
Amang and Beth Rice Store
</h1>

<h3>
Quality Products • Affordable Prices • Trusted Service
</h3>

<button
onClick={() => navigate("/products")}
style={{
padding:"12px 25px",
marginTop:"20px",
fontSize:"16px",
borderRadius:"5px",
border:"none"
}}
>
Browse Products
</button>

</div>


<div
style={{
padding:"50px"
}}
>

<h2
style={{
textAlign:"center",
marginBottom:"30px"
}}
>
Featured Products
</h2>

<div
style={{
display:"flex",
justifyContent:"center",
gap:"20px",
flexWrap:"wrap"
}}
>

{
featuredProducts.map((item,index)=>(

<div
key={index}
style={{
width:"250px",
border:"1px solid gray",
borderRadius:"10px",
padding:"15px",
textAlign:"center"
}}
>

<img
src={item.image}
style={{
width:"100%",
height:"180px",
objectFit:"cover",
borderRadius:"10px"
}}
/>

<h3>{item.name}</h3>

<p>{item.description}</p>

</div>

))
}

</div>

</div>

</div>

)

}

export default Home;