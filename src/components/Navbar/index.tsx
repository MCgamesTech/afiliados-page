import React from "react";
import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { Button } from 'antd';

function Navbar() {
  return (
    <Container>
      <div className="content">
        <img className="logo" src={logo} alt="" />
        <div className="cliks">
          <a className="links" href="">Área de membros</a>
          <a className="links" href="">Central de Ajuda</a>
          <Button className="button1" type="primary">LOGIN</Button>
          <Button className="button2" type="primary">REGISTRE-SE</Button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
