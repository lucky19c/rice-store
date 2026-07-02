import "../styles/About.css";
import banner from "../assets/store.jpg";

function About(){

return(

<div className="about-container">

<h1 className="about-title">

About Us

</h1>

<p className="about-subtitle">

Serving quality rice and local products with care and dedication.

</p>


<div className="about-content">

<div className="about-image">

<img
src={banner}
alt="Amang & Beth Rice Store"
/>

</div>


<div className="about-text">

<p>

Amang & Beth Rice Store is committed to providing
high-quality rice and locally sourced products to
our customers in Lipa City and nearby areas.

</p>

<br/>

<p>

We offer carefully selected products including
rice varieties, Kapeng Barako, Chicharon,
Sugar, Munggo, and other essential goods
at affordable prices.

</p>

<br/>

<p>

Our mission is to provide customers with
fresh products, excellent service, and a
convenient shopping experience.

</p>

</div>

</div>


<div className="about-stats">

<div className="stat-card">

<h2>

200+

</h2>

<p>

Happy Customers

</p>

</div>


<div className="stat-card">

<h2>

20+

</h2>

<p>

Products

</p>

</div>


<div className="stat-card">

<h2>

20+

</h2>

<p>

Years Experience

</p>

</div>

</div>

</div>

);

}

export default About;