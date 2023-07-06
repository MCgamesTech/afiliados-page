import React from "react";
import { Container } from "./styles";
import { twitter, youtube, insta } from "../../assets"

function DestinoUnico() {
    return (
        <Container>
            <div className="content">
                <div className="links">
                    <div className="linksgroup">
                    <a className="link" href=""> <img src={insta} alt="" /> </a>
                    <div className="user"> @mcgames.bet </div>
                    </div>
                    <div className="linksgroup">
                    <a className="link" href=""> <img src={twitter} alt="" /> </a>
                    <div className="user"> @MCGamesbet </div>
                    </div>
                    <div className="linksgroup">
                    <a className="link" href=""> <img src={youtube} alt="" /> </a>
                    <div className="user"> @mcgamesbet </div>
                    </div>
                </div>
                <div className="infos">
                    <a className="link" href=""> Politica de privacidade </a>
                    <a className="link" href=""> Termos de USo </a>
                    <div> Todos os direitos preservados. <br />
                    Proibido a venda para menores de 18 anos. </div>
                </div>
            </div>
        </Container>
    );
}

export default DestinoUnico;