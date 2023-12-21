import { useState } from "react";
import "./App.css";

function App() {
  const [greetingText, setGreetingText] = useState("Greeting Message");
  const [greetingInput, setGreetingInput] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => {
            setGreetingInput(e.target.value);
            value = { greetingInput };
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingText(greetingInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
