import img from "../../assets/images/lok.jpg";
import "./event.css";

const Event = () => {
  return (
    <div className="event__container">
      <div className="event__wrapper1">
        <h1>Events</h1>
        <p>
          Join us at any of our special events happening at St.Mutiya Muluba.
        </p>
      </div>
      <div className="event__section">
        {[1, 2, 3, 4].map((event) => (
          <div className="event__item">
            <div className="event__item__first">
              <div className="event__item__img">
                <img src={img} alt="" />
              </div>
              <div className="event__item__text">
                <h1>Batipsming</h1>
                <p>
                  Join us at any of our special events happening at St.Mutiya
                  Muluba. Join us at any of our special events happening at
                  St.Mutiya Muluba.
                </p>
              </div>
            </div>
            <div className="event__item__second">
              <h3>Jul</h3>
              <h1>22</h1>
              <h1>2022</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
