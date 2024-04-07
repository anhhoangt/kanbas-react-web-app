import React, { useState } from "react";
import * as client from "../client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { User } from "../client";

function RegisterScreen() {
  // const [user, setUser] = useState({ username: "", password: "" });
  const [user, setUser] = useState<User>({
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

  const register = async () => {
    try {
      const newUser = await client.registerUser(user);
      console.log(newUser);
      navigate("/Kanbas/Account/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control"
        placeholder="Username"
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="form-control"
        placeholder="Password"
      />
      <button onClick={register} className="btn btn-primary mt-2">
        Register
      </button>
      <button className="btn btn-secondary mt-2 ms-3">
        <Link to="/Kanbas/Account/login">Login</Link>
      </button>
    </div>
  );
}

export default RegisterScreen;
