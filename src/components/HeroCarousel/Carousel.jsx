import  { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import vector from '../../assets/images/Vector.png'

export default class HeroCarousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
     
      };
      return (
        <div>
          <h2>Append Dots</h2>
          <Slider {...settings}>
            <div className='carousel'>
            <div className='carousel_left'>
                      <div className='name'>
                          <span></span>
                          <p>iPhone 14 Series</p>
                      </div>
                      <h2>Up to 10% off Voucher</h2>
                      <div className='shop'>
                          <Link to='/product'>Shop Now</Link>
                          <img src={vector} alt='' />
                      </div>
                  </div>
          <div className="carousel_right">
  
          </div>
            </div>
               <div className='carousel'>
            <div className='carousel_left'>
                      <div className='name'>
                          <span></span>
                          <p>iPhone 14 Series</p>
                      </div>
                      <h2>Up to 10% off Voucher</h2>
                      <div className='shop'>
                          <Link to='/product'>Shop Now</Link>
                          <img src={vector} alt='' />
                      </div>
                  </div>
          <div className="carousel_right">
  
          </div>
            </div>
    
          </Slider>
        </div>
      );
    }
  }