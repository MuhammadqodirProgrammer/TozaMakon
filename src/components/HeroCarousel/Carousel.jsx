import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import vector from "../../assets/images/Vector.png";

export default class Partner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      rtl: true,
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className=" my-[20px] ">
        <Slider {...settings}>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>

          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
          <div className=" w-[197px] h-[100px] bg-[#F6F7ED]  rounded-[16px]   ">
            <div className=" w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center">
              LOGO
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
