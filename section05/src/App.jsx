import './App.css';
// vite로 만들 경우 확장자를 작성하지 않아도 된다.
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from "./components/Button"

// App()은 root components
const App = () => {
  const buttonProps = {
    text:"메일",
    color:"red",
    a:1,
    b:2,
    c:3,
  }

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header/>
      </Button>
    </>
  )
}

export default App
