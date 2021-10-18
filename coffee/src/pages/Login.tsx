import React from "react";
import { signIn } from "../auth";

import { useNavigate } from "react-router-dom";

// import history from 'history'

const Login = () => {
  const navigate = useNavigate();

  const onSignIn = () => {
    signIn();
    navigate("/profile");
    // window.location.href = '/';
  };

  return (
    <div>
      <h1>Página de Login</h1>

      <button onClick={onSignIn}>Entrar</button>
    </div>
  );
};

export default Login;

// rafce - atalho
