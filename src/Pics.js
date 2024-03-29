import React, { useState, useEffect, useMemo } from 'react';


import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { fill } from "@cloudinary/url-gen/actions/resize";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Pics(){
    ////////////////// ///////////////////////////////////////////////////////////////        1er Cambio Funcionando
   /* const cld = new Cloudinary({cloud: {cloudName: 'peruviansoftwaresolutions'}});

    const imageComponents = [];

    for (let i = 1; i <= 7; i++) {
      const imageUrl = `samples/petizo/${i}`;
      const myImage = cld.image(imageUrl);

      const imageComponent = (
        <div key={i} className="px-1 w-100 h-100">
            <AdvancedImage className="py-10" cldImg={myImage} />
        </div>
    );
    imageComponents.push(imageComponent);
    }
    const myImage = cld.image('samples/petizo/1');
    const myImage2 = cld.image('samples/petizo/2');
    const myImage3 = cld.image('samples/petizo/3');
    const myImage4 = cld.image('samples/petizo/4');
    const myImage5 = cld.image('samples/petizo/5');
    myImage.resize(fill().width(250).height(250));
    myImage2.resize(fill().width(250).height(250));
    myImage3.resize(fill().width(250).height(250));
    myImage5.resize(fill().width(250).height(250));
    myImage4.resize(fill().width(250).height(250));
 
    return (
    <div>
      <Carousel>
          <AdvancedImage className="px-1" cldImg={myImage} />
          <AdvancedImage cldImg={myImage2} />
          <AdvancedImage cldImg={myImage3} />
          <AdvancedImage cldImg={myImage4} />
          <AdvancedImage cldImg={myImage5} />
      </Carousel>
    </div>

    );*/
     ////////////////// ///////////////////////////////////////////////////////////////        1er Cambio Funcionando

    /*/// ////////////////////////////////////////////////////////////////////////              2do Cambio
     var settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
      *//// ////////////////////////////////////////////////////////////////////////              2do Cambio

      const cld = useMemo(() => new Cloudinary({ cloud: { cloudName: 'peruviansoftwaresolutions' } }), []);

      const [imageComponents, setImageComponents] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
          const resizeImages = async () => {
              const images = [
                  cld.image('samples/petizo/1'),
                  cld.image('samples/petizo/2'),
                  cld.image('samples/petizo/3'),
                  cld.image('samples/petizo/4'),
                  cld.image('samples/petizo/5'),
                  cld.image('samples/petizo/6'),
                  cld.image('samples/petizo/7'),
                  cld.image('samples/petizo/8'),
                  cld.image('samples/petizo/9'),
                  cld.image('samples/petizo/10')

              ];
  
              await Promise.all(images.map(image => image.resize(fill().width(300).height(300))));
  
              const components = images.map((image, index) => (
                  <div key={index} className=" shadow-2xl hover:shadow-lg rounded-2xl ">
                      <AdvancedImage className="rounded-full" cldImg={image} />
                  </div>
              ));
  
              setImageComponents(components);
              setIsLoading(false);
          };
  
          resizeImages();
      }, [cld]);
  
      if (isLoading) {
          return <div>Loading...</div>;
      }
  
      var settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 3, // Display 3 slides at once
         
          slidesToScroll: 1,
          swipeToSlide: true, // Enable swipe to slide
          arrows: true, // Display arrow navigation
          centerMode: true, // Enable center mode
          centerPadding: "10%", // Adjust the padding to center the images
          autoplay: true, // Enable auto scroll
          autoplaySpeed: 1000, // Set auto scroll speed in milliseconds
          responsive: [
            {
              breakpoint: 768, // Apply settings for screens smaller than 768px
              settings: {
                slidesToShow: 1,
                centerPadding: "25%",
              }
            },
            {
              breakpoint: 1024, // Apply settings for screens smaller than 1024px
              settings: {
                slidesToShow: 2,
                centerPadding: "15%",
              }
            }
          ]
      };
  
      return (
        
            <Slider {...settings}>
            
                {imageComponents}
            
          
            </Slider>
        
        
      );
  }

export default Pics;


