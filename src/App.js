import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Portfolio />
      <Stack />
      <AboutMe />
      <Footer />
      </div>
  );
}

export default App;
