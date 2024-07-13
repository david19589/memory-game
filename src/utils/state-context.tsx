import { createContext } from "react";
import { GameItem } from "../utils/use-state-context";

export interface StateContextProps {
  theme: string;
  setTheme: (status: string) => void;
  numberOfPlayer: number;
  setNumberOfPlayer: (status: number) => void;
  gridSize: string;
  SetGridSize: (status: string) => void;
  startGame: boolean;
  setStartGame: (status: boolean) => void;
  items: GameItem[];
  setItems: (status: GameItem[]) => void;
  turn: number;
  setTurn: (status: number) => void;
  firstChoice: GameItem | null;
  setFirstChoice: (status: GameItem | null) => void;
  secondChoice: GameItem | null;
  setSecondChoice: (status: GameItem | null) => void;
  disabled: boolean;
  setDisabled: (status: boolean) => void;
  time: number;
  setTime: (status: number) => void;
}
const StateContext = createContext<StateContextProps | undefined>(undefined);

export default StateContext;
