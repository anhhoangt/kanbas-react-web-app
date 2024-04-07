import React, { useState } from "react";
import * as client from "../client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { User } from "../client";

function LoginScreen() {
  // const [user, setUser] = useState({ username: "", password: "" });
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const login = async () => {
    try {
      const existingUser = await client.login(credentials);
      console.log(existingUser);
      navigate("/Kanbas/Account/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="form-control"
        placeholder="Username"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="form-control"
        placeholder="Password"
      />
      <button onClick={login} className="btn btn-primary mt-2">
        Login
      </button>
      <button className="btn btn-link mt-2 ms-3">
        <Link to="/Kanbas/Account/register"> Register</Link>
      </button>
    </div>
  );
}

export default LoginScreen;
