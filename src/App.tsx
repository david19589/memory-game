import { useState } from "react";
import StartGame from "./components/start-game";

function App() {
  const [theme, setTheme] = useState(false);
  const [numberOfPlayer, setNumberOfPlayer] = useState(1);
  const [gridSize, SetGridSize] = useState(false);

  return (
    <div>
      <StartGame
        theme={theme}
        setTheme={setTheme}
        numberOfPlayer={numberOfPlayer}
        setNumberOfPlayer={setNumberOfPlayer}
        gridSize={gridSize}
        SetGridSize={SetGridSize}
      />
    </div>
  );
}

export default App;
