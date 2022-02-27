import { createContext, useContext } from "react";

export const ToggleContext = createContext(null);

export const ToggleProvider = ToggleContext.Provider;

export const useToggle = () => useContext(ToggleContext);
