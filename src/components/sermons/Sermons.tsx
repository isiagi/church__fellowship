import img from "../../assets/images/god.jpg";
import "./sermon.css";

const Sermons = () => {
  return (
    <div>
      <div>
        <h1>Sermons</h1>
        <p>
          lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet,
          consectet
        </p>
      </div>
      <div className="sermon__grid">
        <div className="sermon__col__card">
          <div className="sermon__col__img">
            <img src={img} alt="" />
          </div>
          <div className="sermon__col__text">
            <h2>Chrismas Fest</h2>
            <p>By Jean Oscars</p>
          </div>
          <div>X</div>
        </div>
        <div className="sermon__col__card">
          <div className="sermon__col__img">
            <img src={img} alt="" />
          </div>
          <div className="sermon__col__text">
            <h2>Chrismas Fest</h2>
            <p>By Jean Oscars</p>
          </div>
          <div>X</div>
        </div>
        <div className="sermon__col__card">
          <div className="sermon__col__img">
            <img src={img} alt="" />
          </div>
          <div className="sermon__col__text">
            <h2>Chrismas Fest</h2>
            <p>By Jean Oscars</p>
          </div>
          <div>X</div>
        </div>
      </div>
    </div>
  );
};

export default Sermons;
