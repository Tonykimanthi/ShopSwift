import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmScreensNavbar from "./components/SmScreensNavbar";
import { createContext, useState } from "react";

interface NavContextProps {
  navIsActive: boolean;
  setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const navContext = createContext<NavContextProps | null>(null);

function App() {
  const [navIsActive, setNavIsActive] = useState(false);

  return (
    <navContext.Provider value={{ navIsActive, setNavIsActive }}>
      <Router>
        <Header />
        {/* Nav for sm screens */}
        <SmScreensNavbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </navContext.Provider>
  );
}

export default App;
