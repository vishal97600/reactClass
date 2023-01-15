import React, { useEffect, useState } from "react";
import Title from "./../../Component/Title/index";
import Login from "./../../Component/Login";
import useFetch from "../../Hook/hook";
const Home = () => {
  const [login, setLogin] = useState(false);
  const [data] = useFetch("https://dummyjson.com/products");
 
  const handleLogin = (username, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(setLogin(true));
  };
  //console.log("data", data);
  return login ? <Title title="Home" /> : <Login handleLogin={handleLogin} />;
};

export default Home;
