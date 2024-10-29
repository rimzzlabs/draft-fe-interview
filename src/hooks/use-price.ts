import { useEffect, useState } from "react";

export function usePrice() {
  let [price, setPrice] = useState(50000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(Math.floor(Math.random() * 50000));
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return price;
}
