
// Debouncing is a programming technique used to ensure that a function is executed only once after a specified period of inactivity. 
// It is commonly applied in scenarios where an event may be triggered multiple times in quick succession, such as user
//  input events (e.g., keystrokes, mouse movements, window resizing). By using debouncing, we can optimize performance
//   by reducing the number of function calls, preventing unnecessary processing, and ensuring that the function is executed
//    only after the event has ceased for the defined delay period. This technique is particularly useful in improving the responsiveness 
//    and efficiency of web applications.
// import React, { useState,useEffect } from "react";
// export default function App() {
//     const[name,setname]= useState(" ")
//     function debouncing (e){
//         setname( e.target.value)
     
//     }
//     useEffect(()=>{
//     let stId  = setTimeout(()=>{
//                console.log("name",name)
//         },1000)
//         return ()=>{
//            clearTimeout(stId)
//        }
//     },[name])
//   return (
//       <div>
//       <input type="text" value={name} onChange={debouncing}/>
//           <div>{name}</div>
//       </div>
//   )
// }