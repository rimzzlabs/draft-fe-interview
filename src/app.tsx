import { InputSearchQuery } from "./input-search-query";
import { InputTotalUsdt } from "./input-total-usdt";

export default function App() {
  return (
    <main className="container container-sm" style={{ paddingBottom: "10rem" }}>
      <h1 style={{ paddingTop: "1rem", textAlign: "center" }}>Hello Bitwyre</h1>

      <h2>Challenge #1</h2>
      <p>
        Given value text from input, break down string and transform it into
        Dictionary or Record of string. If the next value does not have
        key-value separated by <code>=</code> equal symbol, the value will be
        merged as array with the current value and so on.
      </p>

      <p>
        Key notes:{" "}
        <strong>
          White space is not allowed for <code>key</code>
        </strong>
      </p>

      <pre>
        <code>
          // Example input:
          name=rimzzlabs,age=17,favoriteColors=white,black,drink=coffee
        </code>
        <code>
          // Result:{" "}
          {`{ name: "rimzzlabs", 
            age: "17",
            favoriteColors: ["white", "black"],
            drink: "coffee" }`}
        </code>
      </pre>

      <InputSearchQuery />

      <h2>Challenge #2</h2>
      <p>
        Calculate total amount USDT to paid by given <code>price</code> and{" "}
        <code>quantity</code>. and display the coin amount they get after being
        deducted by fee of 0.5%
      </p>

      <pre>
        <code>// Example input: price is 50000 and quantity is 0.5</code>
        <code>// Output should be 25000 and 24875 after deducted by fee</code>
      </pre>

      <InputTotalUsdt />
    </main>
  );
}
