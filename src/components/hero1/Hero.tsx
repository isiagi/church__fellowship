import "./hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <h1 style={{maxWidth:'800px'}}>Come Let's See The Wonders of God Together</h1>
        <h3 style={{ color: "#23B8A1" }}>Every Wednesday</h3>
        <h3>At St.Matia Mulumba Church, Old Kampala</h3>
        <div>
          <button className="hero__wrapper__button__join">Join</button>
          <button className="hero__wrapper__button__give">Give</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
