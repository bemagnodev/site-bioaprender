import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 45vh;

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .swiper-slide {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 110px;

    img {
      width: auto;
      height: 100%;
      object-fit: cover;
      object-position: left;
      overflow: hidden;
    }
  }

  .banner-img {
    @media (min-width: 768px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
