import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

// @ts-expect-error ignore this
const FEE_PERCENTAGE = 0.5; // 0.5%

export function InputTotalUsdt() {
  let [values, setValues] = useState({ price: "", qty: "" });

  let onChangeEvent = (key: keyof typeof values) => {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  let subTotal = 0;
  let coinToGet = 0;
  let coinToGetAfterFee = 0;

  return (
    <Fragment>
      <input
        value={values.price}
        placeholder="Write me price"
        onChange={onChangeEvent("price")}
      />
      <input
        value={values.qty}
        placeholder="Write me quantity"
        onChange={onChangeEvent("qty")}
      />

      <pre>
        <code>
          {`Sub total = ${subTotal} USDT\nCoin to get = ${coinToGet} $COIN\nCoin to get (after fee) = ${coinToGetAfterFee} $COIN`}
        </code>
      </pre>
    </Fragment>
  );
}
