import './App.css';
import {useState, memo, useCallback} from "react";
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';

// メモ化は前回実行しておいた結果をキャッシュし、propsが変化する時以外の子コンポーネントの再レンダリング回数を減らす
export const App =  memo(() => {

    console.log("Appレンダリング");
    const [num, setNum] = useState(0);
    const onlickButton = () => {
        setNum((prev) => prev + 1);
    };

    // useCallbackは不要な関数の再生成を防ぐ
    // 第2引数に指定した要素が変更されたときのみ、関数が再生成される。空の配列を指定すると最初に指定した関数が使い回される
    const handleReset = useCallback(() => {
        setNum(0);
    }, []);

    return(
        <>
            <button onClick={onlickButton}>カウントアップボタン</button>
            <p>{num}</p>
            <Child1 handleReset={handleReset}/>
            <Child4 num={num}/>
        </>
    );
});