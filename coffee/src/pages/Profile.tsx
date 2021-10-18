import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { signOut } from "../auth";

export default function Profile() {
  const navigate = useNavigate();

  const onSingOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <>
      <h1>
        Profile
        <br />
        <Link to="purchases">Comprar</Link>
        <br />
        <Link to="password">Alterar senha</Link>
      </h1>

      <button onClick={onSingOut}>Sair</button>

      <Outlet />
    </>
  );
}
