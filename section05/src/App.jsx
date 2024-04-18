import './App.css'
// Header.jsx에서 .jsx확장자는 안써도됨
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


// 최상위 조상 컴포넌트 Root 컴포넌트
function App() {
  return (
    <>
      {/* Header컴포넌트는 자식컴포넌트 */}
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
