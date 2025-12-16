import { AuthPageInfo } from "@/constants";
import { useState } from "react";

export function useForm({
  initialState,
}: {
  initialState: { [key: string]: string };
}) {
  const [formState, setFormState] = useState(initialState);
  function updateFormState(key: string, value: string) {
    setFormState((prev) => {
      prev[key] = value;
      return prev;
    });
  }

  function resetForm() {
    setFormState(initialState);
  }
  return { formState, updateFormState, resetForm };
}

export function createInitialState(info: AuthPageInfo) {
  const initialState: { [key: string]: string } = {};
  const keys = info.inputBlocks?.map((item) => item.name);
  keys?.forEach((item) => {
    initialState[item] = "";
  });
  return initialState;
}
