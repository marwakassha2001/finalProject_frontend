import React from 'react';
import Styles from "./Hero.module.css";
import img1 from "../../Assets/food-img-4.png"
import img2 from "../../Assets/control-img-4.png"
import img3 from "../../Assets/food-img-4.png"
import img4 from "../../Assets/food-img-4.png"
import img5 from "../../Assets/food-img-4.png"
import { useState, useRef , useEffect } from 'react'
import Navbar from '../../Layouts/Navbar/Navbar';
//icons
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
//slider
import { ReactRotationSlider } from "react-rotation-slider";
import 'react-rotation-slider/dist/index.css'


const Hero = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const images = [img1, img2, img3, img4,img5];


  //theme ------------------------------------------------------------------------------
  const [themeColors, setThemeColors] = useState([
    { light: '#FAC7BC', dark: '#B55D51' },
    { light: '#FFBE96', dark: '#F99456' },
    { light: '#FFEBA3', dark: '#DAB322' },
  ])
  const [themeIndex, setThemeIndex] = useState(0)
  //slider handler ----------------------------------------------------------------------
  const slider = useRef()
  const sliderHandler = ({ type }) => {
    if (type === 'next') {
        slider.current.next();
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
        slider.current.prev();
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }
};

useEffect(() => {
    const intervalId = setInterval(() => {
        sliderHandler({ type: 'next' });
    }, 4000);

    return () => clearInterval(intervalId);
}, []);


    return (
      <>
      <div className={Styles.Nav}>
        </div>
          <div className='container mx-auto relative '>
        {/* B A C K - S L I D E R */}
        <div
          style={{ backgroundColor: themeColors[themeIndex].light }}
          className='w-11/12 aspect-square rounded-full absolute top-[-700px] 2xl:top-[-900px] right-[-250px] 2xl:right-[-350px]  flex justify-center items-end overflow-hidden shadow-xl '
        >
          <div className='absolute bottom-[-350px]'>
            <ReactRotationSlider images={images} ref={slider} />
          </div>
        </div>
        {/* F R O N T - S L I D E R */}
        <div className='absolute w-[20rem] right-[180px] 2xl:right-[200px] top-[450px] 2xl:top-[500px]'>
          <div className='flex justify-center items-center'>
            {images.map((i, index) => (
              <img
                src={i}
                alt=''
                className={`w-full absolute ease-in-out duration-500 ${
                  index === imageIndex ? 'scale-100' : 'scale-0'
                }`}
              />
            ))}
          </div>
          {/* <div className='flex mx-auto ml-[-8rem] mt-20 gap-[30rem]'>
            <p onClick={() => sliderHandler({ type: 'prev' })}>
              <BsFillArrowDownCircleFill
                style={{ color: themeColors[themeIndex].dark }}
                className='text-4xl cursor-pointer hover:translate-y-1 ease-in-out duration-300 hover:scale-105 drop-shadow-md'
              />
            </p>
            <p onClick={() => sliderHandler({ type: 'next' })}>
              <BsFillArrowDownCircleFill
                style={{ color: themeColors[themeIndex].dark }}
                className='text-4xl cursor-pointer hover:translate-y-1 ease-in-out duration-300 hover:scale-105 drop-shadow-md'
              />
            </p>
          </div> */}
        </div>
        {/* L E F T - S I D E */}
        <div className='pt-52 2xl:pt-64 flex flex-col gap-6 '>
          <h1
            style={{ color: themeColors[themeIndex].dark }}
            className='text-5xl font-bold ease-in-out duration-500'
          >
            Delicious
          </h1>
          <h2 className='text-4xl opacity-75'>Quench the Hunger</h2>
          <h3 className='text-justify w-[30rem] text-xl opacity-70'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            phasellus dolor, euismod sed suscipit. Justo eu ut amet sed eget
            netus.
          </h3>

          <p
            style={{ backgroundColor: themeColors[themeIndex].dark }}
            className='mt-16 text-lg w-max px-7 py-4 rounded-[4rem] cursor-pointer text-white ease-in-out duration-500 shadow-md hover:rounded-sm'
          >
            Quench now
          </p>
        </div>
      </div>
        </>
    );
};

export default Hero;