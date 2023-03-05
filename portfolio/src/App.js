
import Navbar from "./Components/navbar";
// import Skills from "./Components/skills";
// import Project from "./Components/projects";
// import About from "./Components/about"
// import Allroutes from "./Components/Allroutes";
import Footer from "./Components/footer";
 import About from "./Components/about";
import Skills from "./Components/skills";
import Project from "./Components/projects";
import Contact from "./Components/contact";
import Home from "./Components/home";

// import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
   
     <Footer/>
    </div>
  );
}

export default App;
