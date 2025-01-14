import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent"

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Header />
    <MainContent />
    <Footer />
    </div>
  );
}

export default App