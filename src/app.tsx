import { InputSearchQuery } from "./input-search-query";
import { InputTotalUsdt } from "./input-total-usdt";
import { InputWithDebounce } from "./input-with-debounce";

export default function App() {
  return (
    <main className="container container-sm">
      <h1 style={{ paddingTop: "1rem", textAlign: "center" }}>Hello Bitwyre</h1>

      <h2>Task #1</h2>
      <p>
        Implement debounce input, if the user type too fast, the backend could
        have a problem because we sent too many API Request
      </p>
      <p>
        To address this, we simply prevent the function to wait for the user to
        idle before they sent an API Request
      </p>

      <InputWithDebounce />

      <h2>Task #2</h2>
      <p>Extract Query parameter from input</p>

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

      <h2>Task #3</h2>
      <p>
        Calculate total amount USDT to paid by given <code>price</code> and{" "}
        <code>quantity</code>
      </p>

      <InputTotalUsdt />

      <pre>
        <code>// Example input: price is 50.000 and quantity is 0.5</code>
        <code>// Output should be 25.000</code>
      </pre>
    </main>
  );
}
