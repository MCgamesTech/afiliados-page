import React from "react";
import { Container } from "./styles";
import { cassino, mapa } from "../../assets";

function Roleta() {
    return (
        <Container>
            <div className="content">
                <div className="quadros" >
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
                <div>
                    <img className="cassino" src={cassino} alt="" />
                </div>
            </div>
        </Container>
    );
}

export default Roleta;