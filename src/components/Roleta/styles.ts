import styled from 'styled-components';
import quadro from "../../assets/quadro.png";

export const Container = styled.div`
background-color: #333333;

.content {
  display: flex;
  flex-direction: column;
}

.quadros {
  display: flex;
  flex-direction: row;
  gap: 82px;
  justify-content: center;
  padding-top: 100px;
}

.quadro {
  background-image: url(${quadro});
  display: flex;
  flex-direction: column;
  width: 430px;
  align-items: center;
  height: 280px;
}

.image {
  width: 78px;
  height: 76px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;  
  padding-top: 25px;
}

.titulo {
  display: flex;
  width: 371px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-family: Outfit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.desc {
  display: flex;
  width: 371px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-family: Outfit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 20px;
}

.cassino {
  width: 100%;
  padding-top: 71px;
}

`