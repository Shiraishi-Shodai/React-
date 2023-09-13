import React from "react";

const ColoredMessage = (props) => {
    const {color, children} = props;
    const contentStyle = {
        color,
        fontSize: "20px"
    };

    
    return(
        <>
            {/* <p style={contentStyle}>{props.message}</p> */}
            <p style={contentStyle}>{children}</p>
        </>
    );
};

export default ColoredMessage;