import img from "../../assets/images/god.jpg";
import "./sermon.css";

const Sermons = () => {
  return (
    <div style={{ background: "#f6f6f6", minHeight: "100vh" }}>
      <div className="sermon__wrapper1">
        <h1>Sermons</h1>
        <p>
          lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet,
          consectet
        </p>
      </div>
      <div className="sermon__grid">
        {[1, 2, 3, 4, 5, 6].map((i, j) => (
          <div className="sermon__col__card">
            <div className="sermon__col__img">
              <img src={img} alt="" />
            </div>
            <div className="sermon__col__text">
              <h2>Chrismas Fest</h2>
              <p>By Jean Oscars</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons;
