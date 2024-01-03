import { useState, useEffect } from "react";

// Custom hook for managing state in local storage
function useLocalStorage<T>(key: string, initialValue: T) {
  // Retrieve stored value from local storage or use initial value
  let storedValue;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    storedValue =
      JSON.parse(localStorage.getItem(key) || "null") || initialValue;
  }

  // State to hold the current value
  const [value, setValue] = useState<T>(storedValue);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Function to update the value in both state and local storage
  const updateValue = (newValue: T) => {
    setValue(newValue);
  };

  // Function to clear the value from both state and local storage
  const clearValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, updateValue, clearValue] as const;
}

export default useLocalStorage;
