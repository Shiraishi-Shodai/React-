import type { Memo } from './types/memo';


type Props = {
    memos: Memo[];
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
  };

export const ViewsMemos: React.FC<Props> = ({memos, setMemos}) =>{
  const onDeleteMemo = (key: string)=> {
    setMemos(
        memos.filter((memo) => memo.key != key)
    )
  }

  console.log(memos);

  return (
    <>
    <ul>
    {
        memos.map((memo: Memo)=> (
            
            <li  key={memo.key}>
                <p>{memo.text}</p>  
                <button onClick={()=>onDeleteMemo(memo.key)}>削除</button>
            </li>
        ))
    }
    </ul>

    </>
  )
}