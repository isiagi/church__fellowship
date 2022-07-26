import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Event from "./events/Event";
import HomePage from "./homepage/HomePage";
import About from "./about/About";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default index;
