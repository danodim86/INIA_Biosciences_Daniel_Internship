import CalendarView from "@/components/CalendarView";
import Header from "@/components/Header";
import React, { useState } from "react";

const HistoryPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const treatmentStartDate = new Date("2024-12-14");
  const today = new Date();

  const completedTreatments: Record<string, string[]> = {
    "2024-12-15": ["10:00 AM"],
    "2024-12-16": ["10:00 AM"],
    "2024-12-18": ["10:00 AM"],
  };

  const getTreatmentDetails = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];

    if (date < treatmentStartDate) {
      return (
        <p style={{ color: "#000", fontWeight: "bold" }}>
          Treatment started on December 14, 2024. No treatments prior to this
          day.
        </p>
      );
    } else if (date > today) {
      return (
        <p style={{ color: "#000", fontWeight: "bold" }}>
          Future treatments to come.
        </p>
      );
    } else {
      const allTreatments = ["10:00 AM"];
      const completed = completedTreatments[dateString] || [];

      return (
        <div>
          <h3>Treatments for {date.toDateString()}:</h3>
          <ul>
            {allTreatments.map((time) => {
              const isDone = completed.includes(time);
              return (
                <li
                  key={time}
                  style={{
                    backgroundColor: isDone ? "#b8ebc4" : "#e9aaaf",
                    color: isDone ? "#155724" : "#721c24",
                    padding: "8px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    listStyle: "none",
                  }}
                >
                  {time} - {isDone ? "Treatment Done" : "Treatment Not Done"}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="historyPageContainer">
      <Header backgroundColor="#C5B983" />
      <div className="introContainer">
        <h1>"Username" Treatment History</h1>
      </div>
      <CalendarView
        onDateChange={setSelectedDate}
        treatmentStartDate={treatmentStartDate}
        today={today}
        completedTreatments={completedTreatments}
      />
      <div className="dayDetailsContainer">
        {selectedDate ? (
          getTreatmentDetails(selectedDate)
        ) : (
          <p>Select a date to view treatments.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
