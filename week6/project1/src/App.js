import "./App.css";
import { useRef,useState, useEffect } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  //const didMountRef = useRef(false); 

  useEffect(() => { 
    const intervalID = setInterval(() => { 
      console.log("깜빡");
    }, 1000);
    return () => { 
      console.log("클린업");
      clearInterval(intervalID); 
    };
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} /> 
      </section>b
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App;
