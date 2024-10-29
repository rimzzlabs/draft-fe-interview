import { Fragment } from "react/jsx-runtime";
import { usePrice } from "./hooks/use-price";

export function InputTotalUsdt() {
  let price = usePrice();

  return (
    <Fragment>
      <p>Price is {price}</p>
      <input placeholder="Write me quantity" />
    </Fragment>
  );
}
