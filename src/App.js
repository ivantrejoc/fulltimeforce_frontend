import Router from "./router";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {!(location.pathname === "/signin" || location.pathname === "/signup") && (
        <Navbar />
      )}
      <Router />
    </div>
  );
}

export default App;
