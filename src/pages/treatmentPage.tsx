import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TreatmentPage = () => {
  const [step, setStep] = useState<
    "start" | "stimulating" | "treatment" | "completed"
  >("start");
  const [remainingTime, setRemainingTime] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [isEmergencyPopupVisible, setEmergencyPopupVisible] = useState(false);
  const [isMovementPopupVisible, setMovementPopupVisible] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === "treatment" && !isPaused && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
        setCompletionPercentage(((10 - remainingTime + 1) / 10) * 100);
      }, 1000);
    } else if (remainingTime === 0) {
      setStep("completed");
    }
    return () => clearInterval(timer);
  }, [step, isPaused, remainingTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    if (step === "treatment") {
      const movementPopupTimer = setTimeout(() => {
        setMovementPopupVisible(true);
        setIsPaused(true);
      }, 5000);

      return () => clearTimeout(movementPopupTimer);
    }
  }, [step]);

  const handleStartTreatment = () => {
    setStep("stimulating");
    setTimeout(() => {
      setStep("treatment");
    }, 3000);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleEmergencyTurnOff = () => {
    setIsPaused(true);
    setEmergencyPopupVisible(true);
  };

  const handleEmergencyConfirm = () => {
    setEmergencyPopupVisible(false);
    router.push("/homepage");
  };

  const handleEmergencyCancel = () => {
    setEmergencyPopupVisible(false);
    setIsPaused(false);
  };

  const handleMovementPopupClose = () => {
    setMovementPopupVisible(false);
    setIsPaused(false); // Resume the timer after closing the popup
  };

  const handleBackToHomepage = () => {
    router.push("/homepage");
  };

  return (
    <div className="startTreatmentPage">
      <Header backgroundColor="#C5B983" />
      <div className="headingTreatmentContainer">
        <h1>Begin Treatment</h1>
      </div>

      {step === "start" && (
        <div className="startContainer">
          <i
            className="fa-regular fa-circle-play"
            onClick={handleStartTreatment}
          ></i>
          <button className="startButton" onClick={handleStartTreatment}>
            Turn On Treatment
          </button>
        </div>
      )}

      {step === "stimulating" && (
        <div className="stimulatingContainer">
          <p>
            Currently stimulating...
            <br />
            Please do not move.
          </p>
        </div>
      )}

      {step === "treatment" && (
        <div className="treatmentContainer">
          <div className="doNotMoveCont">
            <p>The treatment has begun</p>
          </div>
          <div className="timerContainer">
            <i className="fa-solid fa-arrow-up-right-dots"></i>
            <h2>Treatment Time: {formatTime(remainingTime)}</h2>
            <div className="completionBarContainer">
              <div
                className="completionBar"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <button className="toggleButton" onClick={handleTogglePause}>
              {isPaused ? "Continue" : "Pause"}
            </button>
          </div>
          <div className="emergencyContainer">
            <button
              className="emergencyButton"
              onClick={handleEmergencyTurnOff}
            >
              Emergency Turn Off
            </button>
          </div>
        </div>
      )}

      {step === "completed" && (
        <div className="completedContainer">
          <h2>Your treatment has been completed successfully!</h2>
          <p>Great job following through with the treatment session.</p>
          <button
            className="backToHomepageButton"
            onClick={handleBackToHomepage}
          >
            Back to Homepage
          </button>
        </div>
      )}

      {isMovementPopupVisible && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <p>Movement detected. Please do not move during treatment.</p>
            <button className="okButton" onClick={handleMovementPopupClose}>
              OK
            </button>
          </div>
        </div>
      )}

      {isEmergencyPopupVisible && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <p>Are you sure you want to turn off the device?</p>
            <div className="popupButtons">
              <button className="yesButton" onClick={handleEmergencyConfirm}>
                Yes
              </button>
              <button className="noButton" onClick={handleEmergencyCancel}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentPage;
