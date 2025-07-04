import "./MoodInput.css";

export default function MoodInput() {
  return (
    <div className="mood-input">
      <label htmlFor="mood">Enter your mood:</label>
      <input type="text" id="mood" name="mood" />
    </div>
  );
}
