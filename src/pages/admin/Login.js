import { useState, useEffect } from "react";
import axios from "axios";
import "./LoginScreen.css";
import Layout from "../../components/Layout";

const LoginScreen = ({ history }) => {

  document.title = "Login | TSG"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/certificate");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/certificate");
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Layout>
      <div className="login-screen">
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>

          <span className="login-screen__subtext">
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default LoginScreen;