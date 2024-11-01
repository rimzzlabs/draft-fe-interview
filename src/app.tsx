import { InputSearchQuery } from "./input-search-query";
import { InputTotalUsdt } from "./input-total-usdt";

export default function App() {
  return (
    <main className="container container-sm">
      <h1 style={{ paddingTop: "1rem", textAlign: "center" }}>Hello Bitwyre</h1>

      <h2>Challenge #1</h2>
      <p>
        Given value text from input, break down string and transform it into
        Dictionary or Record of string
      </p>

      <InputSearchQuery />

      <pre>
        <code>// Example input: name=foo,bar=bazz,bizz=my,bizz,become</code>
        <code>
          // Result:{" "}
          {`{
            name: "foo", 
            bar: "bazz",
            bizz: ["my", "bizz", "become"]
            }`}
        </code>
      </pre>

      <h2>Challenge #2</h2>
      <p>
        Calculate total amount USDT to paid by given <code>price</code> and{" "}
        <code>quantity</code>. and display the coin amount they get after being
        deducted by fee of 0.5%
      </p>

      <InputTotalUsdt />

      <pre>
        <code>// Example input: price is 50000 and quantity is 0.5</code>
        <code>// Output should be 25000 and 24875 after deducted by fee</code>
      </pre>
    </main>
  );
}
