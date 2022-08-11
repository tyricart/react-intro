import { useState } from 'react'

const ColorComp = () => {
    const [textColor, setTextColor] = useState("Teal");

    // TextColor is our Getter (a variable)
    // SetTextColor is our Setter (function) that updates textColor

    console.log("textColor -> ", textColor);

    return (
        <div className="App">
        {/* only more JSX allowed */}
        <header className="App-header">
          <h1 style={{ color: textColor }}>My favorite color is {textColor}</h1>
          <button onClick={() => setTextColor("Coral")}>Coral</button>
          <br />
          <button onClick={() => setTextColor("Purple")}>Purple</button>
          <br />
          <button onClick={() => setTextColor("Pink")}>Pink</button>
        </header>
      </div>
  
    )
}
export default ColorComp