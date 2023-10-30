import "./App.css";

import { useCallback, useState } from "react";
import Counter from "./counter";

// incrasing the outer count would not re-render the counter compoment

function App() {
  const [count, setCount] = useState(0);
  const [icount, setIcount] = useState(0);

  const handleCallBackClick = useCallback(() => {
    setIcount(icount + 10);
  }, [icount]);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  console.log("outer rendered");

  return (
    <div>
      Count: {count}
      <button onClick={handleClickCount}>Click to increse count</button>
      innercount: {icount}
      <button onClick={handleCallBackClick}>Click to increse innercount</button>
      <Counter cb={handleCallBackClick} />
    </div>
  );
}

export default App;
