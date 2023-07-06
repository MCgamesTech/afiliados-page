import React from "react";
import { Container } from "./styles";
import carlinhos from "../../assets/carlinhos.svg";
import logo2 from "../../assets/logo2.svg";
import { Button } from 'antd';

function BemVindo() {
  return (
    <Container>
      <div className="content">
        <div className="infos">
        <img className="logo2" src={logo2} alt="" />
          <p className="text">Bem-vindo à <strong>MC GAMES! </strong> <br />
          A maior casa de apostas do Brasil! Conosco, 
          você pode ganhar muito dinheiro apenas se tornando um 
          afiliado e indicando novos jogadores.</p>
          <Button className="button" type="primary">QUERO ME AFILIAR</Button>
        </div>
        <img className="carlinhos" src={carlinhos} alt="" />
      </div>
    </Container>
  );
}

export default BemVindo;
