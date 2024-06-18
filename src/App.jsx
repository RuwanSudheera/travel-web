import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Fotter";
import MainBanner from "./components/Banner/MainBanner";
import Packages from "./components/Products/Packages";
import Destinations from "./components/Location/Destinations";
import Attractions from "./components/Location/Attractions";
import Faqs from "./components/Shared/Faq";
import "../src/styles/Home.scss";
import "../src/styles/Base.scss";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Banner */}
      <MainBanner />
      <div className="why_choose_us_wrapper">
        <div className="left">
          <div className="item_center">
            <img src="/img/travel-and-tourism.png" alt="" width={64} />
            <p>
              Discover ideas and gather details for your upcoming adventure.
            </p>
          </div>
          <div className="item_center">
            <img src="/img/travel-and-tourism.png" alt="" width={64} />
            <p>
              Connect with a local travel specialist to design a customized
              journey just for you.
            </p>
          </div>
          <div className="item_center">
            <img src="/img/travel-and-tourism.png" alt="" width={64} />
            <p>
              Travel securely by booking with us, featuring a money-back
              guarantee and local expert guidance.
            </p>
          </div>

          {/* <h2>Why Choose Us?</h2>
          <p>
            Travel with us to experience the true essence of Sri Lanka. We offer
            authentic cultural experiences, allowing you to delve into
            traditional dance, ancient temples, and local rituals. Explore the
            charm of village life, where you can participate in daily activities
            and connect with the locals. Our farming tours take you through lush
            tea plantations, spice gardens, and paddy fields, providing hands-on
            agricultural experiences. Enjoy the pristine beaches of Sri Lanka,
            from serene coves to vibrant marine life, perfect for relaxation and
            adventure. Our comprehensive approach ensures you savor traditional
            cuisine, historical sites, and cultural festivals, offering a deep
            and enriching insight into the Sri Lankan lifestyle. Choose us for
            an unforgettable journey that immerses you in the beauty, culture,
            and warmth of Sri Lanka.
          </p> */}
        </div>
        {/* <div className="right">
          <p>Discover ideas and gather details for your upcoming adventure.</p>
          <p>
            Connect with a local travel specialist to design a customized
            journey just for you.
          </p>
          <p>
            Travel securely by booking with us, featuring a money-back guarantee
            and local expert guidance.
          </p>
        </div> */}
      </div>
      <Packages />
      <Destinations />
      <Attractions />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
