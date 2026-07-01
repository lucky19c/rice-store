import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {

        if(
            username === "admin" &&
            password === "admin123"
        ){

            localStorage.setItem(
                "isAdmin",
                "true"
            );

            alert(
                "Login successful"
            );

            navigate("/admin");

        }

        else{

            alert(
                "Invalid credentials"
            );

        }

    };


    return(

        <div
        style={{
            padding:"40px",
            display:"flex",
            flexDirection:"column",
            gap:"15px",
            width:"300px",
            margin:"auto"
        }}
        >

            <h1>
                Admin Login
            </h1>


            <input
            placeholder="Username"
            value={username}
            onChange={(e)=>
            setUsername(
                e.target.value
            )}
            />


            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
            setPassword(
                e.target.value
            )}
            />


            <button
            onClick={handleLogin}
            >
                Login
            </button>

        </div>

    );

}

export default Login;