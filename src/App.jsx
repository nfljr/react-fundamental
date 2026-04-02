import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App (){
  return(
    <div>
      <nav style={{marginBottom:20}}>
        <Link to="/" style={{marginRight:10}}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;