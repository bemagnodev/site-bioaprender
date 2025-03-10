import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 450px;
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .swiper-slide {
    width: 100% !important;
    height: 100%;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  @media (max-width: 1800px) {
    height: 400px;
  }

  @media (max-width: 1400px) {
    height: 300px;
  }

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 110px;
  }
`;
