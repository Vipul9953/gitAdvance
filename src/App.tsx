import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      learn react
      <div className={`clicks-${count}`} data-testid={`clicks-${count}`}>
        {count}
        <button onClick={() => setCount(count + 1)}>click{count}</button>
      </div>
    </div>
  );
}

export default App;
