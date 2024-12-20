import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";

const scanPlaques = () => {
  const router = useRouter();
  return (
    <div className="scanPlaquesPage">
      <Header backgroundColor="#C5B983" />
      <div className="introContainer">
        <h1>
          <i className="fa-solid fa-camera"></i> <br /> Scan Plaques Below
        </h1>
      </div>

      <div className="buttonsFunctCont">
        <button className="scanCamera" onClick={() => router.push("/makeScan")}>
          <i className="fa-solid fa-camera"></i> Start Scan
        </button>
        <button className="reviewScans" onClick={() => router.push("/pastScans")}>
          <i className="fa-solid fa-calendar-days"></i> Review Past Scans
        </button>
      </div>
    </div>
  );
};

export default scanPlaques;
