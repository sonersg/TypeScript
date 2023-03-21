import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setpeople] = React.useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://www.coinkolik.com/wp-content/uploads/2021/10/akon-.png",
      age: 36,
      note: "ok looking nigga",
    },
    {
      name: "Kobe Bryen",
      url: "https://www.kimnereli.net/wp-content/uploads/2018/08/Mahmut-Orhan.jpg",
      age: 23,
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people} />
      <AddToList people={people} setpeople={setpeople} />
    </div>
  );
}

export default App;
