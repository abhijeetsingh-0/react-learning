import DynamicRender from "./Components/DynamicRender"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <DynamicRender />
      <Footer />
    </>
  )
}

export default App