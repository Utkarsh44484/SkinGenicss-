import howitworks from "./assets/working.svg";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Working() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div data-aos="zoom-in-up"   data-aos-duration="3000">
      <section id="working" className="parent-section mt-32 md:mt-40 ">
        <div data-aos="fade-up" className=" rounded-xl mb-14 w-10/12 md:11/12   bg-bluedark   card flex flex-col md:flex-row mx-auto overflow-hidden items-center">
          <img
            className="my-3 h-full w-8/12 md:w-7/12 lg:w-6/12     md:p-2  mx-auto   "
            src={howitworks}
          ></img>
          <div className="card-details h-fit mx-5 md:mx-10 w-11/12 grid content-center my-5 sm:my-7 md:my-10">
            <div className="  font-Kanit   ">
            <div className="flex justify-center md:block">
            <h1 className=" mx-auto  md:mx-0 font-Rowdies text-gray-700 text-3xl sm:text-3xl md:text-4xl lg:text-4xl my-3">How it <span className='italic text-blue-500'>Works</span></h1>

            </div>
              <p className="text-gray-400   text-sm sm:text-base md:text-lg font-Adventpro">SkinGenics is a Skin-Cancer prediction application that uses CNN and Deep learning technology to calculate the probability that a skin lesions is Benign or Malignant, by comparing its appearance to thousands of other lesion images. SkinGenics has more than 96% accuracy.</p>
            </div>
            <div className="text-bluemid mt-10  ">
              <h1 className="font-semibold font-mavenpro text-gray-500 text-base sm:text-lg md:text-xl"><span className="text-xl md:text-3xl text-gray-400 ">1.</span> Upload Picture of Your <span className="italic  font-black text-amber-500">Skin Lesion.</span> </h1>
              <h1 className="font-semibold font-mavenpro text-gray-500 text-base sm:text-lg md:text-xl my-2 md:my-4"><span className="text-xl md:text-3xl text-gray-400 ">2.</span> SkinGenics  will compare it <span className="italic  font-black text-amber-500">with thousands </span>of similar mole.</h1>
              <h1 className="font-semibold font-mavenpro text-gray-500 text-base sm:text-lg md:text-xl"><span className="text-xl md:text-3xl text-gray-400 ">3.</span> SkinGenics will predict the <span className="italic  font-black text-amber-500"> class of cancer.</span></h1>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Working;
