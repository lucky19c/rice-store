import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem("isAdmin", "true");

      alert("Login successful!");

      navigate("/admin");

    } else {

      alert("Invalid username or password");

    }

  };

  return (

    <div className="admin-login-container">

      <div className="admin-login-card">

        <h1>Admin Login</h1>

        <p>
          Sign in to manage products and orders
        </p>

        <form
          className="admin-login-form"
          onSubmit={handleLogin}
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;