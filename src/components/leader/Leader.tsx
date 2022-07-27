import img from '../../assets/images/god.jpg'
import "./leader.css";

const Leader = () => {
  return (
    <div className="leader__container">
      <div className="leader__header">
        <h1>Our Leader</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip v
          lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="leader__card__grid">
        <div className="leader__card">
            <div className="leader__card__img">
                <img src={img} alt="" />
            </div>
            <div className="leader__card__text">
                <h1>Father James</h1>
                <p>Parish Presit</p>
            </div>
        </div>
        <div className="leader__card">
            <div className="leader__card__img">
                <img src={img} alt="" />
            </div>
            <div className="leader__card__text">
                <h1>Father James</h1>
                <p>Parish Presit</p>
            </div>
        </div>
        <div className="leader__card">
            <div className="leader__card__img">
                <img src={img} alt="" />
            </div>
            <div className="leader__card__text">
                <h1>Father James</h1>
                <p>Parish Presit</p>
            </div>
        </div>
        <div className="leader__card">
            <div className="leader__card__img">
                <img src={img} alt="" />
            </div>
            <div className="leader__card__text">
                <h1>Father James</h1>
                <p>Parish Presit</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
