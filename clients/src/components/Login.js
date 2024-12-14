import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/login", data);
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Login Form</p>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
      />
      {errors.email && (
        <span style={{ color: "red" }}>*Email* is mandatory</span>
      )}
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
