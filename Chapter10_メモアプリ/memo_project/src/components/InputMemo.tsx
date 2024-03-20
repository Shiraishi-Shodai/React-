import React, { useState } from "react";
import type { Memo } from '../types/memo';
import { v4 as uuidv4 } from 'uuid';



function InputMemo({memos, setMemos}) {
  const [memo, setMemo] = useState("");

  const onChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setMemo(e.target.value);
  };

  const onClickButton = ()=> {
    // メモ追加
    // Generate a unique ID
    const uniqueId = uuidv4();
    const newMemo : Memo = {key: uniqueId, text: memo};
    setMemos([...memos, newMemo]);
  }

  return (
    <>
      <input
        type="text"
        name="memo"
        id="memo"
        onChange={onChangeMemo}
        value={memo}
      />
      <button onClick={onClickButton}>追加</button>
    </>
  );
}

export default InputMemo;
