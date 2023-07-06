import styled from 'styled-components';
import quadro from "../../assets/quadro.png";

export const Container = styled.div`
  
  background-color: #333333;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    color: #FFFFFF;
    font-size: 54px;
    line-height: 50px;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  .quadros {
      display: flex;
      gap: 130px;
      padding-bottom: 60px;
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

  .button {
    background: #FFF;
    height: 90px;
    border-radius: 18px;
    font-weight: bold;
    width: 350px;
    margin-left: 100px;
    font-size: 25px;
    color: #000000;
  }

`
