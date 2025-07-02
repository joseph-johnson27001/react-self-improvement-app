import "./KpiCard.css";

export default function KpiCard({ title, value }) {
  return (
    <div className="kpi-card">
      <h3 className="kpi-title">{title}</h3>
      <p className="kpi-value">{value}</p>
    </div>
  );
}
