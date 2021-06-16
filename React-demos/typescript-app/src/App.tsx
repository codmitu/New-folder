import React, { useState } from 'react';
import { List } from "./components/List"
import './App.css';
import { AddToList } from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://static.remove.bg/remove-bg-web/2e3a8aa57bcd08605c78f95f1c4bd007b07a5100/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
      age: 36,
      note: "Some text lorem ipsum"
    }
  ]);

  return (
    <div className="App">
      <h1>People on twitter</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
