import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/barlow";

const Headerfix = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  height: 90px;
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  a {
    color: #002eff;
    text-decoration: none;
    font-family: Barlow;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
  div {
    width: 0px;
    height: 0px;
  }
  @media (max-width: 480px) {
    a {
      color: black;
    }
      div {
      width: 2px;
      height: 35px;
      background-color: #cccccc;
  }
`;

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  //maximo alto del boton
  height: 40px;
  top: 25px;
  left: 1068px;
  padding: 0 16px;
  border-radius: 24px;
  margin: 0 16px 0 0;

  &:hover {
    background-color: #f3f5ff;
  }

  &.active {
    background-color: #f3f5ff;
  }
  @media (max-width: 480px) {
    &:hover {
      background-color: white;
      font-weight: 600;
    }

    &.active {
      background-color: white;
      font-weight: 600;
      border-bottom: 2px solid black;
      height: 25px;
      border-radius: 0;
      padding: 0 11px;
    }
  }
`;

function Header() {
  return (
    <Headerfix>
      <Button to="/agregar">Formulario</Button>
      <div></div>
      <Button to="/">Lista formulario</Button>
    </Headerfix>
  );
}

export default Header;
