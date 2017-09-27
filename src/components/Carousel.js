import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
`

const Container = styled(Slider)`
`

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
    };
    return (
      <Slider {...settings}>
        <Photo src="/photos/1231-1.jpg" alt="" />
        <Photo src="/photos/1231-2.jpg" alt="" />
        <Photo src="/photos/1231-3.jpg" alt="" />
        <Photo src="/photos/1231-4.jpg" alt="" />
        <Photo src="/photos/1231-5.jpg" alt="" />
        <Photo src="/photos/1231-6.jpg" alt="" />
        <Photo src="/photos/1231-7.jpg" alt="" />
        <Photo src="/photos/1231-8.jpg" alt="" />
        <Photo src="/photos/1231-9.jpg" alt="" />
        <Photo src="/photos/1231-10.jpg" alt="" />
        <Photo src="/photos/1231-11.jpg" alt="" />
        <Photo src="/photos/elsewhere-1.png" alt="" />
        <Photo src="/photos/elsewhere-2.jpg" alt="" />
        <Photo src="/photos/elsewhere-3.jpg" alt="" />
        <Photo src="/photos/elsewhere-4.jpg" alt="" />
        <Photo src="/photos/elsewhere-5.jpg" alt="" />
        <Photo src="/photos/elsewhere-6.jpg" alt="" />
        <Photo src="/photos/elsewhere-7.jpg" alt="" />
        <Photo src="/photos/elsewhere-8.jpg" alt="" />
      </Slider>
    );
  }
}

export default Carousel
