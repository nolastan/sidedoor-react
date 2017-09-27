import React, { Component } from 'react'
import Slider from 'react-slick'

class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
    };
    return (
      <Slider {...settings}>
        <div><img src="/photos/1231-1.jpg" alt="" /></div>
        <div><img src="/photos/1231-2.jpg" alt="" /></div>
        <div><img src="/photos/1231-3.jpg" alt="" /></div>
        <div><img src="/photos/1231-4.jpg" alt="" /></div>
        <div><img src="/photos/1231-5.jpg" alt="" /></div>
        <div><img src="/photos/1231-6.jpg" alt="" /></div>
        <div><img src="/photos/1231-7.jpg" alt="" /></div>
        <div><img src="/photos/1231-8.jpg" alt="" /></div>
        <div><img src="/photos/1231-9.jpg" alt="" /></div>
        <div><img src="/photos/1231-10.jpg" alt="" /></div>
        <div><img src="/photos/1231-11.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-1.png" alt="" /></div>
        <div><img src="/photos/elsewhere-2.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-3.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-4.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-5.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-6.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-7.jpg" alt="" /></div>
        <div><img src="/photos/elsewhere-8.jpg" alt="" /></div>
      </Slider>
    );
  }
}

export default Carousel
