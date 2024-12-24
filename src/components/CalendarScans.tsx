import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface ScanDetail {
  image: string;
  description: string;
  location: string;
  notes: string;
}

interface CalendarViewProps {
  onDateChange: (date: Date | null) => void;
  treatmentStartDate: Date;
  today: Date;
  completedTreatments: Record<string, ScanDetail[]>;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  onDateChange,
  treatmentStartDate,
  today,
  completedTreatments,
}) => {
  const getTileClassName = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];

    if (date < treatmentStartDate || date > today) {
      return "";
    }

    const scans = completedTreatments[dateString] || [];
    return scans.length > 0 ? "green-marked" : "";
  };

  return (
    <div className="calendarContainer">
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) {
            onDateChange(value);
          } else if (Array.isArray(value) && value.length === 2) {
            onDateChange(value[0]);
          } else {
            onDateChange(null);
          }
        }}
        tileClassName={({ date, view }) =>
          view === "month" ? getTileClassName(date) : ""
        }
      />
    </div>
  );
};

export default CalendarView;
