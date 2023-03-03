import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import GenericComponent from "./components/GenericComponent";
import "./index.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <Heading title="Merhaba" />
      <Section title="Different title!">This is section.</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <GenericComponent
        items={["çay", "simit", "peynir"]}
        render={(item: string) => <h3 className="gold">{item}</h3>}
      />
    </div>
  );
}

export default App;
