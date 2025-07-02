import KpiCard from "./KpiCard";
import "./KpiSection.css";

export default function KpiSection() {
  return (
    <section className="kpi-section">
      <KpiCard title="Hours Slept" value="7.5" />
      <KpiCard title="Steps Walked" value="10,200" />
      <KpiCard title="Meditation" value="15 mins" />
    </section>
  );
}
