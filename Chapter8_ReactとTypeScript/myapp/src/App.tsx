import React, { useEffect, useState } from "react";
import "./App.css";
import sample from "./data/sample.json";
import { ListenItems } from "./components/ListenItems";
import type { User } from "./types/user";

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(sample);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {users.map(user => (
        <ListenItems id={user.id} name={user.name} age={user.age} personalColor={user.personalColor}/>
      ))}
    </>
  );
}

export default App;
