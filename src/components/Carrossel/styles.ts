import styled from 'styled-components';
import { mask } from '../.././assets'

export const Container = styled.div`
background-color: #333333;

.content {
    background-image: url(${mask});
}

.alice-carousel {
    padding-top: 120px;
}

.alice-carousel__dots-item:not(.__custom).__active {
    background-color: #FFF;
}

.alice-carousel__dots-item:not(.__custom) {
    width: 10px;
    height: 10px;
}

.alice-carousel__prev-btn-item, .alice-carousel__next-btn-item {
    color: #FFF;
}

`
