import React from "react";
import { Container } from "./styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';  
import { retangulo } from "../../assets";
  

function Carrossel() {

    const items = [
        <div key={1}> <img src={retangulo} alt="" /> </div>,
        <div key={2}> <img src={retangulo} alt="" /> </div>,
        <div key={3}> <img src={retangulo} alt="" /> </div>,
        // Adicione mais slides conforme necessário
      ];
    
      const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
      };

    return (
        <Container>
            <div className="content">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={2000}
                    infinite
                />
            </div>
        </Container>
    );
}

export default Carrossel;