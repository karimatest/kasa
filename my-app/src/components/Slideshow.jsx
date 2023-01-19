import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiData from '../products.json';
import imageLeft from '../components/Images/vectorLeft.svg';
import imageRight from '../components/Images/vectorRight.svg';

function Slideshow () {
const {id}= useParams();
const foundProduct = apiData.find((product)=> product.id === id);
const pictures = foundProduct.pictures;

const [current, setCurrent] = useState(0);

const prevSlide = () =>{
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
}
const nextSlide = ()=>{
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
};


    return (
        <div className="slider">
          <button className="sliderPrev">
        <img src={imageLeft} onClick={prevSlide} alt="fleche" />
      </button>
      <button className="sliderNext">
        <img src={imageRight} onClick={nextSlide} alt="fleche" />
      </button>
      {/* Images */}
      {pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={picture}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        );
      })}
        </div>
    );
};

export default Slideshow;