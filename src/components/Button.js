import React,{useState} from "react";

const Button = () => {
    
    const [count, setCount] = useState(0);


    function HandleClick(){
        setCount(count+1)
    }
    
    return (
        <>
        <p>Button clicked {count} times</p>
        <button className="btn" onClick={HandleClick}>
            Click me
        </button>
        </>
    );
};
export default Button;