import "./happen.css";
import HappenCarsouel from "./HappenCarsouel";

const Happen = () => {
  return (
    <div className="happen__container">
      <div style={{paddingTop:"5px"}}>
        <div className="happen__wrapper">
          <div />
          <h1 style={{color: "rgb(61, 61, 61)"}}>Whats Happening</h1>
        </div>
        <HappenCarsouel />
      </div>
    </div>
  );
};

export default Happen;
