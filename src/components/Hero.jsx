import "../styles/hero.css";
import flag from "../assets/images/Logo_flag.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const goContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__left">
          <h1 className="hero__title">
            Get involved in of <br />
            the world’s <br />
            fastest growing <br />
            major economies
          </h1>

          <button className="hero__cta" onClick={goContact}>
            Get in touch
          </button>
        </div>

        <div className="hero__right">
          <div className="hero__imageWrap">
            <img src={flag} alt="India flag" className="hero__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
