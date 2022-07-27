import Sermons from "../../components/sermons/Sermons";
import "./sermonPage.css";

const SermonPage = () => {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <h1>Sermons</h1>
      </div>
      <Sermons />
    </div>
  );
};

export default SermonPage;
