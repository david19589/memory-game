import { useContext } from "react";
import StateContext from "./state-context";

export interface GameItem {
  id: number;
  src?: string;
  matched: boolean;
  number?: number;
}

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
