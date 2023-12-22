import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
      </Routes>
    </Router>
  );
}

export default App;
