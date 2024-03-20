import { useState } from 'react'
import InputMemo from './components/InputMemo'
import type { Memo } from './types/memo';
import { ViewsMemos } from './components/ViewsMemos';

import './App.css'

function App() {
  const [memos, setMemos] = useState<Memo []>([]);

  return (
    <>
      <InputMemo memos={memos} setMemos={setMemos}/>
      <ViewsMemos memos={memos} setMemos={setMemos}/>
    </>
  )
}

export default App
