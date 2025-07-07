import MoodInput from "./MoodInput";
import MoodDisplay from "./MoodDisplay";
import "./MoodTracker.css";

export default function MoodTracker() {
  return (
    <section className="mood-tracker">
      <h2>Mood Tracker</h2>
      <MoodInput />
      <MoodDisplay />
    </section>
  );
}
