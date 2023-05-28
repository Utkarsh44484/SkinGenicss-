import React, { useState } from "react";
import axios from "axios";
import howitworks from "./assets/working.svg";
import processing from "./assets/processing.gif";
import { useAuth0 } from "@auth0/auth0-react";

function Demo() {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const [selectedFile, setSelectedFile] = useState();
  // const axios = require("axios").default;
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [flag, setflag] = useState(0);
  const [flag2, setflag2] = useState(0);//for changing width of first block

  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [file, setFile] = useState();
  var [confidence, setconfidence] = useState(0);
  var [label, setlabel] = useState("");
  function SetConfidence(props) {
    setconfidence(props);
  }
  function checkUser(){
    // if(!isAuthenticated){
    //   loginWithRedirect();
       
    // }
  }
  function handleChange(e) {
    // console.log(e.target.files);
    if(!isAuthenticated){
      loginWithRedirect();
       
    }
    setflag2(1);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(true);
    setSelectedFile(e.target.files[0]);
    setData(undefined);
  }

  const sendFile = async () => {
    setflag(1);
    // alert('CALLED')
    if (image) {
      console.log(selectedFile);

      let formData = new FormData();
      formData.append("file", selectedFile);

      let res = await axios({
        method: "post",
        url: __VALUE__,
        // url: "http://localhost:8000/predict",
        data: formData,
      });

      console.log(res.data.class);
      console.log(res.data.confidence);

      if (res.status === 200) {
        console.log("res.data = ", res.data);
        console.log("data = ", data);

        setlabel(res.data.class);
        confidence = (parseFloat(res.data.confidence) * 100).toFixed(2);
        SetConfidence(confidence);

        console.log("new res.data = ", res.data);
        console.log("new data = ", data);
        console.log("new label = ", label);
        console.log("new confidence = ", confidence);
      }

      setIsloading(false);
    }
  };

  return (
    <div id="demo">
      <div className="flex justify-center font-Rowdies ">
        <h1 className=" font-Rowdies text-3xl md:text:4xl lg:text-4xl text-gray-700">
          Demo
        </h1>
      </div>

      <div className="ml-0 md:mx-auto rounded-xl mb-2 
      md:w-10/12    bg-bluedark justify-center  card flex flex-col md:flex-row mx-auto overflow-hidden items-center">
        <div data-aos="" className={flag2==1 ? " pointer-events-auto w-6/12 flex justify-center" : "pointer-events-auto flex justify-end" }>
        {/* <div data-aos="" className="w-6/12 flex justify-end"> */}

          <div className=" relative mx-auto w-full mt-14">
            {/* ...................... */}
            <h2 className=" font-mavenpro text-xl text-gray-600 font-black">
              Choose {"  "}
              <span className="   font-mavenpro text-2xl text-orange-300 font-black">
                Image
              </span>
              :
            </h2>
            <br />
            <div className=" mt-5 mb-10">
              <input
                type="file"
                onClick={checkUser}
                onChange={handleChange}
                className="  file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-gradient-to-r from-orange-400 to-yellow-400  file:text-gray-600 hover:file:cursor-pointer hover:file:opacity-80
 hover:file:text-amber-700  hover:file:bg-orange-900"
              />
            </div>
            <img
              className="mx-auto  shadow-lg rounded-lg w-10/12 md:w-8/12"
              src={file}
            />
            <div className="mx-auto">
              <button
                onClick={sendFile}
                type="button"
                className=" text-white bg-blue-500 hover:bg-blue-800 h-7 w-20  mt-5  font-medium rounded-lg text-sm   "
              >
                Predict
              </button>
              {/* <processing />  */}
            </div>

            {/* .......................... */}
          </div>
        </div>

        <div
          data-aos="fade-up-left"
          className="card-details  h-fit mx-5 md:mx-10  md:w-4/12 grid content-center my-5 sm:my-7 md:my-10"
        >
          <div className="  font-Kanit   ">
            <div
              className={
                label.length == 0 ? "h-0 w-0 opacity-0" : "justify-center md:block"
              }
            >
              <h1 className=" mx-auto  md:mx-0 font-Rowdies text-gray-700  text-2xl md:text-4xl lg:text-4xl my-3">
                <span className="italic text-blue-500">Result</span>
              </h1>

              <div className="mt-5">
                <h1 className="font-Adventpro text-lg md:text-xl">
                  Label : {label}
                </h1>

                <h1 className="font-Adventpro text-lg md:text-xl">
                  Confidence : {confidence / 100}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-32 flex justify-center">
        <img
          className="mx-auto "
          src={label.length == 0 ? (flag == 1 ? processing : "") : ""}
        ></img>
      </div>
    </div>
  );
}
export default Demo;
