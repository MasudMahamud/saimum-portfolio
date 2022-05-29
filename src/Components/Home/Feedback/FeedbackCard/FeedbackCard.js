import React from "react";
import "./FeedbackCard.css";
import img1 from "../../../../Image/client/1.jpg";
import img from "../../../../Image/client/2.jpg";
import img3 from "../../../../Image/client/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const FeedbackCard = () => {
  return (
    <div className=" swiper-container ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="client__slider position-relative rounded">
            <div class="client__identity text-center">
              <img src={img1} alt={img1} class="circle" />
              <h3 class="sub__heading">Julia S. Rodgers</h3>
              <p class="capitalize paragraph-1">Founder || CEO</p>
            </div>
            <div class="client__desc text-center">
              <p class="paragraph-2">
                <FormatQuoteIcon /> I'm honestly saying he's a good Graphic
                Designer. <br />
                Saimum always wishes you all the best.
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="client__slider position-relative rounded">
            <div class="client__identity text-center">
              <img src={img} alt={img} class="circle" />
              <h3 class="sub__heading"> Patrick Curtis</h3>
              <p class="capitalize paragraph-1">Founder || CEO</p>
            </div>
            <div class="client__desc text-center">
              <p class="paragraph-2">
                <FormatQuoteIcon /> I'm honestly saying he's a good Graphic
                Designer. <br />
                Saimum always wishes you all the best.
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="client__slider position-relative rounded">
            <div class="client__identity text-center">
              <img src={img3} alt={img3} class="circle" />
              <h3 class="sub__heading"> Hayden George</h3>
              <p class="capitalize paragraph-1">Founder || CEO</p>
            </div>
            <div class="client__desc text-center">
              <p class="paragraph-2">
                <FormatQuoteIcon /> I'm honestly saying he's a good Graphic
                Designer. <br />
                Saimum always wishes you all the best.
                <FormatQuoteIcon />
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeedbackCard;
