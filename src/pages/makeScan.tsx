import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";

const makeScan = () => {
  const [isInputPopupOpen, setIsInputPopupOpen] = useState(false); 
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false); 
  const [bodyLocation, setBodyLocation] = useState(""); 

  const router = useRouter();

  const handleCameraClick = () => {
    setIsInputPopupOpen(true); 
  };

  const handleInputSubmit = () => {
    setIsInputPopupOpen(false); 
    setIsSuccessPopupOpen(true); 
  };

  // const handleGoBack = () => {
  //   setIsSuccessPopupOpen(false); 
  //   // Add any go-back logic here if needed
  // };

  const handleGoBack = () => {
    router.push("/scanPlaques"); // Navigate to /scanPlaques
  };
  
  return (
    <div className="makeScanContainer">
      <Header backgroundColor="#F5F5DC" />
      <div className="cameraContainer" style={{backgroundImage: `url(/images/scarOne.png)`}}>
        <div className="scanButtonContainer">
          <button className="makePictureButton" onClick={handleCameraClick}>
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>
      </div>

      {isInputPopupOpen && (
        <div className="popupContainer">
          <div className="popupContent">
            <h2>Enter Details</h2>
            <label>
              Body Location:
              <input
                type="text"
                value={bodyLocation}
                onChange={(e) => setBodyLocation(e.target.value)}
                placeholder="e.g., Left Arm"
              />
            </label>
            <button onClick={handleInputSubmit}>OK</button>
          </div>
        </div>
      )}

      {isSuccessPopupOpen && (
        <div className="popupContainer">
          <div className="popupContent">
            <h2>Success</h2>
            <p>Successfully uploaded to your review scans archive.</p>
            <button onClick={handleGoBack} className="goBackButton">Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default makeScan;
