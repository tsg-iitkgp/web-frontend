import { useState, useEffect } from "react";
import axios from "axios";
import "./LoginScreen.css";
import Layout from "../../components/Layouts/Layout";
import host from "../../apiService";

const LoginScreen = ({ history }) => {
  document.title = "Login | TSG";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/admin");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://gymkhana.iitkgp.ac.in",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, Accept, Authorization",
      },
    };

    try {
      const { data } = await axios.post(
        `${host}/user/login`,
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("post", data.post);
      localStorage.setItem("role", data.role);

      history.push("/admin");
    } catch (error) {
      console.log(error);
      if (error.message === "Request failed with status code 403") {
        setError("* incorrect password");
      } else if (error.message === "Request failed with status code 401") {
        setError("* incorrect E-mail id");
      }
    }
  };

  return (
    <Layout>
      <div className="login-screen">
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
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
          {error && <span className="error-message">{error}</span>}
          <div className="form-button">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>

          <span className="login-screen__subtext"></span>
        </form>
      </div>
    </Layout>
  );
};

export default LoginScreen;
