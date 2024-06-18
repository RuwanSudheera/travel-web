import "../../styles/Header.scss";

function Footer() {
  return (
    <div className="fotter_wrapper">
      <div className="fotte_inner">
        <div className="logo">
          <img src="/img/logo2x.png" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
