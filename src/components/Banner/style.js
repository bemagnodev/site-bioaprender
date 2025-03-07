import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 35vh;

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .swiper-slide {
    line-height: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media (max-width: 768px) {
    height: 30vh;
    object-position: left;
    height: max-content !important;
  }

  .banner-img {
    @media (min-width: 768px) {
      height: 90px;
      width: 100%;
      height: 115px;
      object-fit: cover;
      object-position: left center;
      object-position: center;
    }
  }
`;
