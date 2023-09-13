import React, {useState, useEffect} from "react";
import ColoredMessage  from './components/ColoredMessage';


const App = () => {
    console.log("レンダリング");


    // State定義
    const [num, setNum] = useState(0);

    useEffect(() => {
        alert();
    }, [num]);
    
    const onClickButton = () => {
        // setNum(num + 1);
        // setNum(num + 1);
        // setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };

    return(
        <>
            <h1 style={{color: "red"}}>Hello React</h1>
            {/* <ColoredMessage color="blue" message="お元気ですか"/>
            <ColoredMessage color="orange" message="元気ですよ"/> */}
            <ColoredMessage color="green">私は元気ですよ!</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
    );
};

export default App;