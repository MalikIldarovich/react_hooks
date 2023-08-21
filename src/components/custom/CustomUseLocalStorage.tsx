// Чаще всего используем в SSR движке;
import { useState, useEffect } from "react";

const CustomUseLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default CustomUseLocalStorage;

/** Имплементация:
 * useLocalStorage("todos", initialValue)
 */
