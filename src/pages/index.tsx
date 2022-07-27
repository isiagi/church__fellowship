import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Event from "./events/Event";
import HomePage from "./homepage/HomePage";
import About from "./about/About";
import SermonPage from "./sermon/SermonPage";
import NotFound from "./notFound/NotFound";
import Give from "./give/Give";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<SermonPage />} />
        <Route path="/giving" element={<Give />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default index;
