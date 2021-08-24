// import React,{useState } from 'react';
//  const Countdown=()=> {
//   const [seconds, setseconds] = useState(20);
//   const [isActive, setisActive] = useState(false);

//   const toggle=() => {
//     setisActive(true);
//     if (isActive) {
//         setseconds((prev) => prev - 1);}
//     setTimeout(()=>{
//      <h1>TIME'S UP</h1>
//      setisActive(false);
//     },20000);  
//   }

//   return (
//     <div className="App">
//       <h1>{seconds}s</h1>
//       <button onClick={toggle}>Start</button>
//       {/* <button onClick={handleClick}>Pause</button> */}
//     </div>
//   );
//   }
//   export default Countdown;
  

// const Countdown=()=> {
//   const [num, setNum] = useState(10);
//   const [pause, setPause] = useState(false);
  
//   let intervalRef = useRef();
  
//   const decreaseNum = () => {if(num!==0){setNum((prev) => prev - 1);}}
//   useEffect(() => {
//     setPause(false);
//     if(num>0){
//     intervalRef.current = setInterva(decreaseNum, 1000);}

//     return () => clearInterval(intervalRef.current);
//   }, []);
  
//   const handleClick = () => {
//     if (num>0 && pause) {
//       intervalRef.current = setInterva(decreaseNum, 1000);
//     }
//     else if(num>0){
//       clearInterval(intervalRef.current);
//     }
//     setPause((prev) => !prev);
//   };
  
//   return (
//     <div>
//       <div>{num}</div>
//       <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
//     </div>
//   );
// }
// export default Countdown;
import React, {useEffect, useState } from "react";
const Countdown  = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const toggle=()=> {
    setIsActive(!isActive);
  }
  useEffect(() => {
    let interval = null;
    if (isActive && seconds<20) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    else if(isActive && seconds===20){
      setSeconds( "Time's up");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return ( 
    <div className="preview">
      <h1>{seconds}</h1>
      <button onClick={toggle}> {isActive ? 'Pause' : 'Start'}</button>
    </div>
   );
}
 
export default Countdown ;