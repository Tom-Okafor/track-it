import { AuthPageInfo } from "@/constants";
import { useState } from "react";

export function useForm({
  initialState,
  initialErrors,
}: {
  initialState: { [key: string]: string };
  initialErrors: { [key: string]: string | null };
}) {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  function updateFormState(key: string, value: string) {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: null,
    }));
  }

  function updateErrors(key: string, value: string) {
    setErrors((prev) => ({ ...prev, [key]: value }));
  }

  function hasError() {
    const errorValues = Object.values(errors);
    const hasError = errorValues.some(Boolean);
    return hasError;
  }

  function isEmpty() {
    const inputValues = Object.values(formState);
    const isAnyInputEmpty = inputValues.some((input) => !input);
    return isAnyInputEmpty;
  }

  function resetForm() {
    setFormState(initialState);
  }
  return {
    formState,
    updateFormState,
    resetForm,
    errors,
    updateErrors,
    hasError,
    isEmpty,
  };
}

export function createInitialState(info: AuthPageInfo) {
  const initialState: { [key: string]: string } = {};
  const keys = info.inputBlocks?.map((item) => item.name);
  keys?.forEach((item) => {
    initialState[item] = "";
  });
  return initialState;
}
export function createInitialErrors(info: AuthPageInfo) {
  const errors: { [key: string]: string | null } = {};
  const keys = info.inputBlocks?.map((item) => item.name);
  keys?.forEach((item) => {
    errors[item] = null;
  });
  return errors;
}
