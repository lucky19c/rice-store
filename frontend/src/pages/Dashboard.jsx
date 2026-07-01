import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [data, setData] = useState({

        total_products: 0,
        total_orders: 0,
        total_customers: 0,
        total_sales: 0,
        low_stock: []

    });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const response =
            await api.get("/dashboard");

            setData(
                response.data
            );

        }

        catch(error){

            console.log(error);

        }

    };

    return (

        <div style={{padding:"50px"}}>

            <h1>
                Dashboard
            </h1>

            <hr/>

            <h2>
                Total Products:
                {data.total_products}
            </h2>

            <h2>
                Total Orders:
                {data.total_orders}
            </h2>

            <h2>
                Total Customers:
                {data.total_customers}
            </h2>

            <h2>
                Total Sales:
                ₱{data.total_sales}
            </h2>

            <hr/>

            <h2>
                Low Stock Products
            </h2>

            {

                data.low_stock.length===0 ?

                (

                    <p>
                        No low stock products
                    </p>

                )

                :

                (

                    data.low_stock.map((item,index)=>(

                        <div
                        key={index}
                        style={{
                            border:"1px solid gray",
                            padding:"10px",
                            marginBottom:"10px"
                        }}
                        >

                            <h3>
                                {item.rice_name}
                            </h3>

                            <p>
                                Stock:
                                {item.stock_quantity}
                            </p>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default Dashboard;