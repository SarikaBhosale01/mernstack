import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("/api/auth/login", { email, password });
  //     localStorage.setItem("token", response.data.token);
  //     navigate("/dashboard");
  //   } catch (err) {
  //     setError("Login failed. Please check your credentials.");
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/projects');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.heading}>Login</h1>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <p style={{ marginTop: "10px" }}>
  Don't have an account? <a href="/signup" style={{ color: "#007bff" }}>Signup</a>
</p>
        </form>
      </div>
    </div>
  );
};

// Styles for the Login component
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url(https://cdn.pixabay.com/photo/2017/03/16/05/45/manager-2148233_1280.jpg)", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  loginBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    backgroundImage:"url(https://cdn.pixabay.com/photo/2022/06/29/19/07/colored-7292420_1280.jpg)"
  },
  heading: {
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "20px",
  },
};

export default Login;

