import {memo} from "react";

const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px"
}

export const Child4 = memo(({num}) => {
    console.log("Child4レンダリング");
    return(
        <>
            <div style={style}>
                <p>Child4</p>
                <p>{num}</p>
            </div>
        </>
    );
});