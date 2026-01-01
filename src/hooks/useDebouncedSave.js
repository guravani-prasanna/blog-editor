import { useEffect } from "react";

export const useDebouncedSave = (value, callback, delay = 1000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, callback, delay]);
};
