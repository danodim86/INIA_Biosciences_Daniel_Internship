import CountdownTimer from "@/components/CountdownTimer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="homePageContainer">
      <Header backgroundColor="#C5B983" />
      <div className="helloContainer">
        <p>
          Welcome, Username! <br></br>{" "}
          <span>Your next step to your healing journey starts here.</span>
        </p>
      </div>
      <CountdownTimer />
      <div className="mainFunction">
        <button
          className="startTreatmentButton"
          onClick={() => router.push("/calibrationPage")}
        >
          <i className="fa-solid fa-stethoscope"></i> <p>Start Treatment</p>
        </button>
        <button
          className="startTreatmentButton"
          onClick={() => router.push("/historyPage")}
        >
          <i className="fa-solid fa-calendar-days"></i> <p>Review my History</p>
        </button>
        <button
          className="startTreatmentButton"
          onClick={() => router.push("/scanPlaques")}
        >
          <i className="fa-solid fa-camera"></i> <p>Scan plaques</p>
        </button>
      </div>
      <div className="footerContainer">
        Have questions? Visit our <span>FAQ</span>
      </div>
    </div>
  );
};

export default Homepage;
