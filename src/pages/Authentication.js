import React from "react";
import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const AuthenticationPage = () => {
  return <AuthForm />;
};

export default AuthenticationPage;

export async function action({ request }) {
  //request for getting form data of AuthForm
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const data = await request.formData();
  // const authData = {
  //   username: data.get("username"),
  //   email: data.get("email"),
  //   password: data.get("password"),
  // };

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Include username only when mode is "signup"
  if (mode === "signup") {
    authData.username = data.get("username");
  }

  console.log(authData);
  const response = await fetch("http://localhost:3001/auth/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 401 || response.status === 400) {
    console.log(response.status);
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not authenticate user" }, { status: 500 });
  }

  const resData = await response.json();
  const access_token = resData.access_token;
  console.log(access_token);

  localStorage.setItem("access_token", access_token);

  return redirect("/");
}
