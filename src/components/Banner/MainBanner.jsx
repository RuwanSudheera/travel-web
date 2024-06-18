import "../../styles/Banner.scss";

function MainBanner() {
  return (
    <div className="main_banner_wrapper">
      <img src="/img/banner.jpg" alt="" />
      <div className="bg_layer"></div>
      <div className="banner_content_wrapper">
        <div className="content">
          <h1>"Travel Sri Lanka: Uncover the Wonders of Paradise"</h1>
          <h2>
            Discover hidden gems, exotic wildlife, and scenic beauty in Sri
            Lanka’s diverse regions.
          </h2>
          <a href="/" className="banner_button">
            Plan your trip
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
