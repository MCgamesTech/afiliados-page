import styled from 'styled-components';

export const Container = styled.div`
background-color: #333333;

.content {
  display: flex;
  flex-direction: column;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 164px 250px 75px 250px;
    gap: 15px;
}

.titulo {
    color: #FFF;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
}

.subtitulo {
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.image {
    position: relative;
}

.img {
    width: 100%;
}

.texts {
    position: absolute;
    top: 0;
    left: 0;
}

.text1 {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 17%;
    padding-left: 115px;
    padding-top: 110px;
}

.text2 {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 17%;
    padding-top: 100px;
    padding-left: 1400px;
}

.text3 {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 17%;
    padding-top: 250px;
    padding-left: 115px;
}

.titulo2 {
    color: #FFF;
    display: flex;
    flex-direction: row;
    gap: 11px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.button {
    background: #FF0000;
    height: 75px;
    border-radius: 18px;
    font-weight: bold;
    width: 350px;
    font-size: 25px;
    margin-left: 1400px;
}  

.retangulo {
    display: flex;
    justify-content: center;
    width: 679px;
    height: 196px;
    border-radius: 12px;
    border: 4px solid #B22929;
    margin: 53px 600px 75px 600px;
}

.textretangulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    padding: 30px 25px 30px 25px;
}

`
