import { useState } from "react";
import "./App.css";
import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const {userList, onClickFetchUser, isLoading, isError} = useFetchUsers();

  return (
    <>
      <button onClick={onClickFetchUser}>ユーザー取得</button>

      {isError && <p style={{ color: "red" }}>エラー発生</p>}

      {isLoading ? (
        <p>ローディング中</p>
      ) : (
        userList.map((user) => (<p key={user.id}>{user.name}</p>))
      )}
    </>
  );
}

export default App;
