import MoodInput from "./MoodInput";
import MoodDisplay from "./MoodDisplay";

export default function MoodTracker() {
  return (
    <section>
      <h2>Mood Tracker</h2>
      <MoodInput />
      <MoodDisplay />
    </section>
  );
}
