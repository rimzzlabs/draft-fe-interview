import { Fragment, useState } from "react";

type DictResult = Record<string, string | Array<string>>;
export function InputSearchQuery() {
  let [value, setValue] = useState("");

  let result: DictResult = {};

  return (
    <Fragment>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search parameter, separated by comma (,)"
      />

      <pre>
        <code>Result: {JSON.stringify(result || {}, null, 2)}</code>
      </pre>
    </Fragment>
  );
}
