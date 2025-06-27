import KpiCard from "./KpiCard";

export default function KpiSection() {
  return (
    <section>
      <h2>Key Performance Indicators</h2>
      <KpiCard title="Focus" value="75%" />
      <KpiCard title="Sleep" value="8 hrs" />
      <KpiCard title="Exercise" value="30 mins" />
    </section>
  );
}
