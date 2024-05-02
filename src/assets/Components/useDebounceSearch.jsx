import { useEffect, useState } from "react";

export const useDebounceSearch = (value) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const delay = 500

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
        clearTimeout(handler)
    };
  }, [value, delay]);

  return debounceValue;
};
