import "../styles/footer.css";
import footerLogo from "../assets/images/Brand_India.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Company</h4>
            <a
              href="https://example.com/about"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>
            <a href="https://example.com/why" target="_blank" rel="noreferrer">
              Why Choose us
            </a>
            <a href="https://example.com/blog" target="_blank" rel="noreferrer">
              Blog
            </a>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>
            <a
              href="https://example.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://example.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms and Condition
            </a>
            <a href="/contact">Contact us</a>
          </div>
        </div>

        <div className="footer__right">
          <img className="footer__logo" src={footerLogo} alt="Brand India" />

          <p className="footer__subTitle">Subscribe to our Newsletter</p>

          <form
            className="footer__form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="email" placeholder="Enter your Email" required />
            <button className="btn btn--light" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>Brand India Limited 2022</p>
      </div>
    </footer>
  );
}
