import "../styles/Home.css";

import rice from "../assets/rice.jpg";
import coffee from "../assets/kapengbarako.jpg";
import chicharon from "../assets/chicharon.jpg";
import munggo from "../assets/mungbeans.jpg";
import pinipig from "../assets/pinipig.jpg";
import sugar from "../assets/sugar.jpg";

import { Link } from "react-router-dom";

function Home() {

    return (

        <>

            <div className="hero">

                <div className="hero-content">

                    <h1>
                        Amang & Beth Rice Store
                    </h1>

                    <Link to="/products">

                        <button className="shop-btn">

                            Shop Now

                        </button>

                    </Link>

                </div>

            </div>


            <section className="featured">

                <h2>

                    Featured Products

                </h2>


                <div className="feature-grid">


                    <div className="feature-card">

                        <img
                        src={rice}
                        alt="Rice"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Rice
                            </h3>

                            <p>
                                Fresh and high-quality rice varieties.
                            </p>

                        </div>

                    </div>



                    <div className="feature-card">

                        <img
                        src={coffee}
                        alt="Kapeng Barako"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Kapeng Barako
                            </h3>

                            <p>
                                Strong and aromatic local coffee.
                            </p>

                        </div>

                    </div>



                    <div className="feature-card">

                        <img
                        src={chicharon}
                        alt="Chicharon"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Chicharon
                            </h3>

                            <p>
                                Crunchy snack perfect for every meal.
                            </p>

                        </div>

                    </div>



                    <div className="feature-card">

                        <img
                        src={munggo}
                        alt="Munggo"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Munggo
                            </h3>

                            <p>
                                Nutritious green beans for soups and dishes.
                            </p>

                        </div>

                    </div>



                    <div className="feature-card">

                        <img
                        src={pinipig}
                        alt="Pinipig"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Pinipig
                            </h3>

                            <p>
                                Traditional crispy rice flakes snack.
                            </p>

                        </div>

                    </div>



                    <div className="feature-card">

                        <img
                        src={sugar}
                        alt="Sugar"
                        />

                        <div className="feature-card-content">

                            <h3>
                                Sugar
                            </h3>

                            <p>
                                Sweetener for beverages and cooking.
                            </p>

                        </div>

                    </div>


                </div>

            </section>

        </>

    );

}

export default Home;