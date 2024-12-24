import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";

const CalibrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleInitiateTreatment = () => {
    window.location.href = "/treatmentPage";
  };

  const steps = [
    {
      id: 1,
      title: "Step 1",
      description:
        "Before beginning treatment, ensure the skin on your lower back is exposed and the transducer is coated in a thin layer of ultrasound gel.",
      image: "/images/stepOne.png",
    },
    {
      id: 2,
      title: "Step 2",
      description:
        "To put on the device, release the side buckle and put the vest on over your head. Then re-connect the buckle to tighten in position.",
      image: "/images/stepTwo.png",
    },
    {
      id: 3,
      title: "Step 3(a)",
      description:
        "Make sure the light on your left shoulder is beaming green.",
      image: "/images/stepThreeLeftShoulder.png",
    },
    {
      id: 4,
      title: "Step 3(b)",
      description:
        "Make sure the light on your right shoulder is beaming green.",
      image: "/images/stepThreeRightShoulder.png",
    },
    {
      id: 5,
      title: "Step 3(c)",
      description: "Make sure the light on your bellybutton is beaming green.",
      image: "/images/stepThreeBellyButton.png",
    },
    {
      id: 6,
      title: "Step 4",
      description:
        "To turn on the device, press the ON button of the power source located in the front pocket.",
      image: "/images/stepFour.png",
    },
  ];

  return (
    <div className="calibrationPageContainer">
      <Header backgroundColor="#C5B983" />
      <div className="headingCalibrationContainer">
        <h1>Device Calibration</h1>
      </div>
      <div className="subHeadingCalibration">
        <p>
          Ensure the device is calibrated and properly positioned by following
          the provided steps and visual guide before starting treatment.
        </p>
      </div>
      <div className="videoContainer">
        {" "}
        <video
          src="/images/Media1.mp4"
          controls
          className="calibrationVideo"
        ></video>
      </div>

      <div className="stepsContainer">
        {steps.map((step) => (
          <div
            key={step.id}
            className="stepContainer"
            style={{ display: currentStep === step.id ? "block" : "none" }}
          >
            <h3>
              <span>{step.title}:</span> {step.description}
            </h3>
            {step.image && (
              <Image
                src={step.image}
                alt={`${step.title} Image`}
                width={250}
                height={250}
              />
            )}
            <div className="confirmationButtonContainer">
              {currentStep < steps.length ? (
                <button className="confirmationButton" onClick={handleNextStep}>
                  Yes, Move On
                </button>
              ) : (
                <button
                  className="confirmationButton startTreatmentCalButton"
                  onClick={handleInitiateTreatment}
                >
                  Start Treatment
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalibrationPage;
