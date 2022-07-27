import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>NotFound</h1>
      <Link to="/">Move Home</Link>
    </div>
  );
};

export default NotFound;
