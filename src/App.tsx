import StartGameMenu from "./components/start-game";
import GameStarted from "./components/game-started";
import { StateProvider } from "./utils/state-provider";
import { useStateContext } from "./utils/use-state-context";

function App() {
  return (
    <StateProvider>
      <MainComponent />
    </StateProvider>
  );
}

function MainComponent() {
  const { startGame } = useStateContext();

  return (
    <div>
      {!startGame && <StartGameMenu />}
      {startGame && <GameStarted />}
    </div>
  );
}

export default App;
