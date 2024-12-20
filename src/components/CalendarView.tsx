import React from "react";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 

interface CalendarViewProps {
  onDateChange: (date: Date | null) => void;
  treatmentStartDate: Date; 
  today: Date;
  completedTreatments: Record<string, string[]>; 
}



const CalendarView: React.FC<CalendarViewProps> = ({
  onDateChange,
  treatmentStartDate,
  today,
  completedTreatments,
}) => {

  const getTileClassName = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];

    if (date < treatmentStartDate) {
      return ""; 
    }

    if (date > today) {
      return ""; 
    }

    const allTreatments = ["10:00 AM"];
    const completed = completedTreatments[dateString] || [];

    if (completed.length === allTreatments.length) {
      return "green-marked";
    } else {
      return "red-marked"; 
    }
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
