import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Location.scss";

function Attractions() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="attraction_main_wrapper">
      <h2 className="title">
        "Sri Lanka Wonders: Essential Attractions for Every Traveler"
      </h2>
      <div className="destination_item">
        <div className="slider_round">
          <img src="/img/HistoricalSites.jpg" alt="" />
          <a href="/">
            <h3>Kandy</h3>
          </a>
        </div>
        <div className="slider_round">
          <img src="/img/HistoricalSites.jpg" alt="" />
          <a href="/">
            {" "}
            <h3>Sigiriya</h3>
          </a>
        </div>
        <div className="slider_round">
          <img src="/img/HistoricalSites.jpg" alt="" />
          <a href="/">
            {" "}
            <h3>Galle</h3>
          </a>
        </div>
        <div className="slider_round">
          <img src="/img/HistoricalSites.jpg" alt="" />
          <a href="/">
            <h3>Ella</h3>
          </a>
        </div>
      </div>
      <button className="btn button_border">See All Wonders</button>
    </div>
  );
}

export default Attractions;
