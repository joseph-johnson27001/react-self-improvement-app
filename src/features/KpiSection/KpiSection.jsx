import { useState } from "react";
import KpiCard from "./KpiCard";
import "./KpiSection.css";

export default function KpiSection() {
  const [kpis] = useState([
    { title: "Hours Slept", value: "7.5 hrs" },
    { title: "Sleep Quality", value: "82%" },
    { title: "Steps Walked", value: "10,200" },
    { title: "Calories Burned", value: "450 kcal" },
    { title: "Calories Consumed", value: "2,100 kcal" },
    { title: "Water Intake", value: "2.3 L" },
    { title: "Weight", value: "75.4 kg" },
    { title: "Body Fat", value: "18.3%" },
    { title: "Resting Heart Rate", value: "62 bpm" },
    { title: "Meditation", value: "15 mins" },
    { title: "Exercise", value: "60 mins" },
    { title: "Mood", value: "7/10" },
    { title: "Stress Level", value: "3/10" },
    { title: "Screen Time", value: "3h 45m" },
    { title: "Wake Time", value: "6:45 AM" },
    { title: "Sleep Time", value: "11:15 PM" },
  ]);

  return (
    <section className="kpi-section">
      {kpis.map((kpi, index) => (
        <KpiCard key={index} title={kpi.title} value={kpi.value} />
      ))}
    </section>
  );
}
