import "./App.css";
import { useState } from "react";

function App() {
  let [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  let [greetingTypeMessage, setGreetingTypeMessage] = useState("");
  function typeMessage(event) {
    setGreetingTypeMessage(event.target.value);
  }
  function handleUpdate() {
    setGreetingMessage(greetingTypeMessage);
  }

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          onChange={typeMessage}
          value={greetingTypeMessage}
          id="greeting-message"
          type="text"
        />
      </div>

      <div className="buttons">
        <button onClick={handleUpdate}>Update text</button>
      </div>
    </div>
  );
}

export default App;
