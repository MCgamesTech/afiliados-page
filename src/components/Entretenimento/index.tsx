import React from "react";
import { Container } from "./styles";
import { iphone, circulo } from "../../assets";
import { Button } from 'antd';

function Entretenimento() {
    return (
        <Container>
            <div className="content">
              <div className="text">
                <div className="titulo">
                    A MELHOR EM ENTRETENIMENTO
                </div>
                <div className="subtitulo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                </div>
              </div>
              <div className="image">
                <img className="img" src={iphone} alt="" />
                <div className="texts">
                    <div className="text1">
                        <div className="titulo2">
                            <img src={circulo} alt="" />
                            OPORTUNIDADE DE CRESCIMENTO
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                    </div>
                    <div className="text2">
                        <div className="titulo2">
                            <img src={circulo} alt="" />
                            PLATAFORMA SEGURA E CONFIÁVEL
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                    </div>
                    <div className="text3">
                        <div className="titulo2">
                            <img src={circulo} alt="" />
                            PATROCÍNIO E PRESENÇA NA MÍDIA
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                    </div>
                    <Button className="button" type="primary">QUERO ME AFILIAR</Button>
                </div>
              </div>
              <div className="retangulo">
                <div className="textretangulo">
                AS MELHORES PROMOÇÕES PARA SEUS JOGADORES.
                </div>
              </div>
            </div>
        </Container>
    );
}

export default Entretenimento;