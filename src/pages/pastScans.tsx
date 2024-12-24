import CalendarScans from "@/components/CalendarScans";
import Header from "@/components/Header";
import React, { useState } from "react";

interface ScanDetail {
  image: string; 
  description: string; 
  location: string; 
  notes: string; 
}

const ScannedPlaquesHistoryPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const scanStartDate = new Date("2024-12-01");
  const today = new Date();

  const scans: Record<string, ScanDetail[]> = {
    "2024-12-15": [
      {
        image: "/images/plaqueOne.png",
        description: "Raised plaque with redness",
        location: "Left Arm",
        notes: "Monitor for potential inflammation.",
      },
      {
        image: "/images/plaqueTwo.png",
        description: "Small dry patch",
        location: "Right Knee",
        notes: "Moisturize twice daily.",
      },
    ],
    "2024-12-18": [
      {
        image: "/images/plaqueOne.png",
        description: "Flaky and peeling skin",
        location: "Lower Back",
        notes: "Consider starting topical treatment.",
      },
    ],
  };

  const getScanDetails = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];

    if (date < scanStartDate) {
      return (
        <p style={{ color: "#000", fontWeight: "bold" }}>
          Scanning started on December 1, 2024. No scans prior to this day.
        </p>
      );
    } else if (date > today) {
      return (
        <p style={{ color: "#000", fontWeight: "bold" }}>
          Future scans are yet to be recorded.
        </p>
      );
    } else {
      const scanDetails = scans[dateString] || [];

      if (scanDetails.length === 0) {
        return (
          <p style={{ color: "#000", fontWeight: "bold" }}>
            No scans recorded for this date.
          </p>
        );
      }

      return (
        <div>
          <h3>Scans for {date.toDateString()}:</h3>
          <ul>
            {scanDetails.map((scan, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  listStyle: "none",
                }}
              >
                <img
                  src={scan.image}
                  alt={scan.description}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <p>
                  <strong>Description:</strong> {scan.description}
                </p>
                <p>
                  <strong>Location:</strong> {scan.location}
                </p>
                <p>
                  <strong>Doctor&apos;s Notes:</strong> {scan.notes}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="pastScansContainer">
      <Header backgroundColor="#C5B983" />
      <div className="introPastScansContainer">
        <h1>Username&apos;s Scanned Plaques History</h1>
      </div>
      <CalendarScans
        onDateChange={setSelectedDate}
        treatmentStartDate={scanStartDate}
        today={today}
        completedTreatments={scans}
      />
      <div className="dayDetailsContainer">
        {selectedDate ? (
          getScanDetails(selectedDate)
        ) : (
          <p>Select a date to view scan details.</p>
        )}
      </div>
    </div>
  );
};

export default ScannedPlaquesHistoryPage;
