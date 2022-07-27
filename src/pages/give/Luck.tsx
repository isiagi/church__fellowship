import img from "../../assets/images/god.jpg";
import Button from "./Give"

import "./give.css"

const Luck = () => {
  return (
    <div className="luck__container">
      <div className="about__wrapper">
        <h1>Giving</h1>
      </div>
      <div className="luck__wrapper">
        <div className="about__wrapper1">
          <h3>Support Wednesday Fellow</h3>
          <img src={img} alt="" />
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip.lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip
          </p>
          
        </div>
        <div>
            <p>Please Fill Out the form below to support</p>
          <form>
            <input type="text" name="name" placeholder="Full Name" required/>
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="number" placeholder="Number" required/>
            <input type="number" name="amount" placeholder="Amount" required/>
            <Button />
          </form>
        </div>
      </div>

      <div className="luck__wrapper">
        <div className="about__wrapper1">
          <h3>Support Wednesday Fellow</h3>
          <img src={img} alt="" />
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip.lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip
          </p>
          
        </div>
        <div>
            <p>Please Fill Out the form below to support</p>
          <form>
            <input type="text" name="name" placeholder="Full Name" required/>
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="number" placeholder="Number" required/>
            <input type="number" name="amount" placeholder="Amount" required/>
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Luck;
