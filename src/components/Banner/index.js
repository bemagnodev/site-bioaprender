import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      navigation={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <img src={banner1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
