import Header from "./layouts/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SmScreensNavbar from "./components/SmScreensNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Electronics from "./pages/Electronics";
import Jewelleries from "./pages/Jewelleries";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";

interface NavContextProps {
  navIsActive: boolean;
  setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
          <Route path="/shop" Component={Shop} />
          <Route path="/electronics" Component={Electronics} />
          <Route path="/jewelleries" Component={Jewelleries} />
          <Route path="/menclothing" Component={MenClothing} />
          <Route path="/womenclothing" Component={WomenClothing} />
        </Routes>
      </Router>
    </navContext.Provider>
  );
}

export default App;
