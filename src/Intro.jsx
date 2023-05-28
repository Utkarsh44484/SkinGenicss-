import introimg from './assets/intro.svg'
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import background from "./assets/header-bg.svg"
function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
    return (
    <div >
{/* <img src={introimg} /> */}
<div>
        <section id="intro" className="parent-section">
          <div className="  mb-14 w-11/12   bg-bluedark   card flex flex-col md:flex-row mx-auto overflow-hidden align-center justify-center">
            <div data-aos="zoom-out-right" className="w-10/12 md:w-6/12 text-bluemid top font-Kanit  mx-auto align-center">
            <div className=" mx-auto md:8/12 lg:w-8/12   my-10 md:mt-24 md:ml-16 lg:mt-32 lg:ml-20 content-center">
           
            <h1 className='text-gray-700 font-Rowdies text-4xl md:text-4xl lg:text-5xl'> Snap  <span className='italic text-orange-300'>and Save</span>  the skin you’re in.</h1>
            {/* <br /> */}
            <h1 className='text-gray-400 font-Adventpro text-lg mt-4 md:mt-8 md:text-xl lg:text-2xl '>SkinGenics helps you to predict your skin cancer between Benign and Malignant. It integrates Deep Learning technology with your device’s camera to help you capture and analyse skin lesions. SkinGenics has more than 96% accuracy.</h1>

            </div>
                 
              </div>
          
            <div  data-aos="zoom-in-left" className="card-details   w-9/12  md:w-8/12 lg:w-7/12 grid content-center mx-auto">
              <img
              className=" h-full w-full   "
              src={introimg}
            ></img>
              
            </div>
          </div>
        </section>
      </div>

    </div>)
}
export default Intro;