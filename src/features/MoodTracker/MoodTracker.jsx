import MoodInput from "./MoodInput";
import MoodDisplay from "./MoodDisplay";
import "./MoodTracker.css";

export default function MoodTracker() {
  return (
    <section className="mood-tracker">
      <MoodInput />
      <MoodDisplay />
    </section>
  );
}
