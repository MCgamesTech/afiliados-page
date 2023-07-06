import React from "react";
import { Container } from "./styles";
import { cartasSoltas } from "../.././assets/index"

function DestinoUnico() {
    return (
        <Container>
            <div className="content">
                <div className="infos">
                <p className="text">SEU DESTINO ÚNICO PARA CASSINO E APOSTAS</p>
                <p className="text2">Risus commodo viverra maecenas accumsan lacus vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                </div>
                <img className="carlinhos" src={cartasSoltas} alt="" />
            </div>
        </Container>
    );
}

export default DestinoUnico;