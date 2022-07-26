import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./happen.css";

const HappenCarsouel = () => {
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
    <div style={{ margin: "0 20px", minHeight: "50vh"}}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        swipeable={true}
        partialVisible={true}
        arrows={false}
        className="tryme"
      >
        <div>
          <div className="happen__wrapper1">
            <div className="happen__card">
              <div>
                <h2>Batipsming</h2>
                <p>
                  There is something There is something There is something There
                  is something There is something There is something
                </p>
              </div>
              <div className="happen__button">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="happen__wrapper1">
          <div className="happen__card">
            <div>
              <h2>Batipsming</h2>
              <p>
                There is something There is something There is something There
                is something There is something There is something
              </p>
            </div>
            <div className="happen__button">
              <button>Read More</button>
            </div>
          </div>
        </div>

        <div className="happen__wrapper1">
          <div className="happen__card">
            <div>
              <h2>Batipsming</h2>
              <p>
                There is something There is something There is something There
                is something There is something There is something
              </p>
            </div>
            <div className="happen__button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HappenCarsouel;
