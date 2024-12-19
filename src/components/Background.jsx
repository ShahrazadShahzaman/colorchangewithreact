import "./Background.css";
import { useState } from "react"

 function Background() {
        const [color,setColor]=useState('white')
const handleBlack = () =>{
    setColor ('black')
}
const handleRed =()=>{
    setColor ('red')
}
return (
    <>
    <div className="colorchange" style={{backgroundColor:color}}>
    <button className="black" style={{backgroundColor:"Black"}} onClick={handleBlack}>Black</button>
    <button className="Red"style={{backgroundColor:"Red"}} onClick={handleRed}>Red</button>
    </div>
    </>
);
};
export default Background;