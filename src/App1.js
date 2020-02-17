import React, { Component } from "react";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import img1 from './images/left.png';
import img2 from  './images/right.png';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  center: {
    margin: '0 80px',
  },
  parent: {
    margin: '0 -80px',
  },
  container: {
    margin: '0 auto',
    padding: '350px',
    width: '50%',
    color: '#333',
  },
  button:{
    margin: '0 auto',
    padding: '350px',
    width: '50%',
    color: '#333',
  }
  // slider_control:{
  //   position: 'absolute',
  //   left: '50px',
  //   top: '50%',
  //   width: '50px',
  //   height: '50px',
  //   marginTop: '-25px',
  //   borderRadius: '50%',
  //   background:'255, 255, 255, 0.4',
  //   cursor: 'pointer',
  // },
}
));
const item = [
  {
    Image: "https://pixlr.com/photo/photo-shop-200108-pw.jpg"
  },
  {
    Image: "https://pixlr.com/photo/photo-shop-200108-pw.jpg"
  },
  {
    Image: "https://pixlr.com/photo/photo-shop-200108-pw.jpg"
  },
  {
    Image: "https://pixlr.com/photo/photo-shop-200108-pw.jpg"
  },
  {
    Image: "https://pixlr.com/photo/photo-shop-200108-pw.jpg"
  }
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "BLACK",left:'755px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <label htmlFor="id">
    <div >
      <img src={img1} alt="iiii" onClick={onClick} width='50px' />
    </div>
    </label>
  );
}

function App1(props) {
  const classes = useStyles();
  const settings = {
    speed: 2000,
    infinite: true,
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '-10px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={classes.container}>
      <Slider {...settings} >
        {
          item.map((items) => {
            return (
              <div >
                <div style={{ width: '90%',  overflow: 'hidden' }}>
                  <img src={items.Image} alt='hbdj' />

                </div>
              </div>
            )
          }
          )
        }
      </Slider>
    </div>
  );
}
export default App1;