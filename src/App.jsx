import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Clock from "./pages/ClockPage";
import Task from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
      <Clock path="/clock" />
      <Task path="/task" />
    </Router>
  );
}

export default App;
