import "../styles/testimonials.css";

import woman from "../assets/images/woman.png";
import office from "../assets/images/office.png";
import rating from "../assets/images/rating.png";

import quotes from "../assets/images/”.png"; // səndə fayl belə adlanıbsa saxla
import engage from "../assets/images/Engage.png";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        {/* Row 1 */}
        <div className="t-row t-row--top">
          <div className="t-woman">
            <span className="t-chip">Leila Khoury</span>
            <img className="t-img" src={woman} alt="Leila Khoury" />
          </div>

          <div className="t-quote">
            <img
              className="t-quotesIcon"
              src={quotes}
              alt=""
              aria-hidden="true"
            />
            <p className="t-quoteText">
              <strong>
                “Before 2020, we sent a few email blasts with MailChimp here and
                there, but it wasn’t a focus. Once we shifted away from
                retail-only sales to eCommerce sales, driving customer awareness
                through email became a must-have, and our ESP wasn’t cutting
                it.”
              </strong>
            </p>
            <p className="t-quoteBy">
              <strong>Leila Khoury</strong>, Director of Marketing
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="t-row t-row--mid">
          <div className="t-support">
            <h3 className="t-h3">
              Get helpful support,
              <br />
              fast. Like really fast.
            </h3>

            <p className="t-muted">
              Get 24/7 rockstar support, 365 days a year. We are always happy to
              help!
            </p>

            <ul className="t-list">
              <li>30 second average response time</li>
              <li>UK, England based support</li>
              <li>Choose between live chat or email</li>
              <li>Personable white-glove approach</li>
            </ul>
          </div>

          <div className="t-office">
            <img className="t-img" src={office} alt="Office" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="t-row t-row--bottom">
          <div className="t-rating">
            <img className="t-img" src={rating} alt="Audience growth chart" />
          </div>

          <div className="t-grow">
            <img
              className="t-engageIcon"
              src={engage}
              alt=""
              aria-hidden="true"
            />
            <h3 className="t-h3 t-h3--grow">Grow your audience</h3>

            <p className="t-muted">
              We provide companies of all sizes and stages of growth with
              practical, hands-on advice and specific local contacts to assist
              with setting up and growing in the Indian market
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
