import React, { useState } from "react";

// function propsAreEqual(prevValue, nextValue) {
//   return prevValue.cb === nextValue.cb;
// }

function Counter({ cb }) {
  const [count, setCount] = useState(0);

  const handleConutClick = () => {
    setCount(count + 1);
  };

  console.log("counter re-render");
  return (
    <div>
      <button onClick={handleConutClick}>local count + </button>
      <button onClick={cb}>passed function count + </button>
    </div>
  );
}

//testing react memo for props
export default React.memo(Counter);
// export default React.memo(Counter, propsAreEqual);
