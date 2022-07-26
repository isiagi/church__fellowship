import img from "../../assets/images/god.jpg";
import Gallery from "../gallery/Gallery";
import "./hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2__container">
      <div className="hero2__wrapper1">
        <h1>Who We Are</h1>
      </div>
      <div className="hero2__wrapper">
        <div className="hero2__wrapper__inner">
          <p>
            We are a fellow community at St. Matiya Muluba and we conduct praise
            and prayers with Wednesday Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam ut ipsum eget ipsum luctus mattis molestie at
            lorem. Phasellus aliquam dignissim sapien, id lobortis nisl auctor
            ac. Sed nec scelerisque orci.
          </p>
          <p>
            We are a fellow community at St. Matiya Muluba and we conduct praise
            and prayers with Wednesday Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam ut ipsum eget ipsum luctus mattis molestie at
            lorem. Phasellus aliquam dignissim sapien, id lobortis nisl auctor
            ac. Sed nec scelerisque orci.
          </p>
        </div>
        {/* <img src={img} alt="group_photo" /> */}
      </div>
      <Gallery />
      <div className="group__flip">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <ModeStandbyOutlinedIcon style={{ fontSize: '3rem' }} /> */}
              <h4>Our Mission</h4>
            </div>
            <div className="flip-card-back">
              <p>
                To see businesses embrace technology in their day to day
                activities and business processes
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <ModeStandbyOutlinedIcon style={{ fontSize: '3rem' }} /> */}
              <h4>Our Vision</h4>
            </div>
            <div className="flip-card-back">
              <p>
                To see businesses embrace technology in their day to day
                activities and business processes
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <ModeStandbyOutlinedIcon style={{ fontSize: '3rem' }} /> */}
              <h4>Know Us More</h4>
            </div>
            <div className="flip-card-back">
              <p>
                Continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
