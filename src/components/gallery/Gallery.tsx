import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./gallery.css";

import img from "../../assets/images/lok.jpg";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="gallery__container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        swipeable={true}
        partialVisible={true}
        arrows={false}
      >
        <div className="carousel__item">
          <img src={img} alt="" />
        </div>
        <div className="carousel__item">
          <img src={img} alt="" />
        </div>
        <div className="carousel__item">
          <img src={img} alt="" />
        </div>
        <div className="carousel__item">
          <img src={img} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
