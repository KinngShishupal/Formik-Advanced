import React from "react";
import "./TabularData.css";
import moment from "moment";
import DatePicker from "../DatePicker";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="contain">
          Attendance for the date: <DatePicker />
        </div>
      </header>
    </div>
  );
}
