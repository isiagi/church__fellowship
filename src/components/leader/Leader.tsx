import img from "../../assets/images/god.jpg";
import "./leader.css";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Leader = () => {
  return (
    <div className="leader__container">
      <div className="leader__header">
        <h1>Our Leader</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip v.
        </p>
      </div>
      <div className="leader__card__grid">
        {[1, 2, 3, 4].map((num) => (
          <div className="leader__card">
            <div className="leader__card__img">
              <img src={img} alt="" />
            </div>
            <div>
              <div className="leader__card__text">
                <h1>Father James</h1>
                <p>Parish Presit</p>
              </div>
              <div>
                <AiFillFacebook
                  style={{ fontSize: "30px", color: "#23B8A1" }}
                />
                <AiFillTwitterCircle
                  style={{ fontSize: "30px", color: "#23B8A1" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leader;
