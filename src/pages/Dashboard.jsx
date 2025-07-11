import MoodTracker from "../features/MoodTracker/MoodTracker";
import KpiSection from "../features/KpiSection/KpiSection";

export default function Dashboard() {
  return (
    <main className="main-container">
      <h1>Self Improvement Dashboard</h1>
      <KpiSection />
      <MoodTracker />
    </main>
  );
}
