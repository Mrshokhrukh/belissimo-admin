import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    
    axios
      .post("https://bellissimo-avt2.onrender.com/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userAuthToken", JSON.stringify(res.data.result));
      })
      .catch((res) => {
        console.log(res.response.data.message);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-20 flex flex-col gap-2 max-w-[450px] mx-auto">
      <input
        type="email"
        className="border-2 border-slate-700 p-4 rounded-lg text-2xl"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={data.email || ''}
      />
      <input
        type="password"
        className="border-2 border-slate-700 p-4 rounded-lg text-2xl"
        placeholder="password"
        onChange={handleChange}
        name="password"
        value={data.password || ''}
      />
      <button className="bg-slate-500 p-4 w-[200px] rounded-xl text-blue-950 font-bold">login</button>
    </form>
  );
}

export default Login;
