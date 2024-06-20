import './App.css';
import {useState} from "react";

// vite로 만들 경우 확장자를 작성하지 않아도 된다.
// import Header from "./components/Header"
// import Main from "./components/Main"
// import Footer from "./components/Footer"
// import Button from "./components/Button"

// App()은 root components
const App = () => {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        setLight(light === "ON"? "OFF":"ON");
      }}>{light === "ON"?"끄기":"켜기"}</button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>      
    </div>
    </>
  )
}

export default App
