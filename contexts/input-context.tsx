import { createContext, useContext, useState } from "react";

interface InputContextType {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputContext = createContext<InputContextType>({
  inputValue: "",
  setInputValue: () => "",
});

export function useInputContext() {
  const context = useContext(InputContext);
  return context;
}

export function InputProvider({ children }: { children: React.ReactNode }) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
