import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { IEmployees } from "../types/userTypes";

interface IAppContext {
  results: IEmployees | undefined;
  setResults: Dispatch<SetStateAction<IEmployees | undefined>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [results, setResults] = useState<IEmployees | undefined>(() => {
    const savedResults = localStorage.getItem("results");
    return savedResults ? JSON.parse(savedResults) : undefined;
  });

  useEffect(() => {
    if (results !== undefined) {
      localStorage.setItem("results", JSON.stringify(results));
    }
  }, [results]);

  return (
    <AppContext.Provider value={{ results, setResults }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
