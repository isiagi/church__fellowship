import img from "../../assets/images/god.jpg";
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
        <img src={img} alt="group_photo" />
      </div>
      <div className="group_photo">
        <div></div>
      </div>
    </div>
  );
};

export default Hero2;
