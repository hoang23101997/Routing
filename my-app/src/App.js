import {Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/about" element ={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
