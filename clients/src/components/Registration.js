import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Registration Form</p>
      <input type="text" {...register("name")} placeholder="Name" />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
