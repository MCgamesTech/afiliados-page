import React from "react";
import { Container } from "./styles";
import { mapa } from "../.././assets/index";
import { Button } from 'antd';


function Porque() {
  return (
    <Container>
      <div className="content">
        <div className="text">
          POR QUE DEVO SER AFILIADO DA MC GAMES? 
        </div>
        <div className="quadros">
          <div className="quadrosleft">

            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

          </div>

            <div className="quadrosright">
            
            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

            <div className="quadro">
              <img className="image" src={mapa} alt="" />
              <div className="titulo">ALCANCE INCOMPARÁVEL</div>
              <div className="desc">A BET7K é a escolha mais popular para apostas em cassinos e esportes no Brasil. Com nossa forte presença na região, você pode alcançar um número incomparável de clientes em potencial.</div>
            </div>

            </div>
          </div>

          <Button className="button" type="primary">QUERO ME AFILIAR</Button>

        </div>
    </Container>
  );
}

export default Porque;