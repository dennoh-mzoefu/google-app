import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/Routes";
import Footer from "./Components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkTheme ? "dark" : ""}>
        <div className="min-h-screen bg-slate-100 dark:bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/80">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
