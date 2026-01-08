import Stats from "../components/Stats";
import Sponsors from "../components/Sponsors";

import mansImg from "../assets/images/mans.png";
import meetingImg from "../assets/images/meeting.png";
import workInOfficeImg from "../assets/images/work_in_office.png";

import "../styles/about.css";

export default function About() {
  return (
    <>
      {/* HERO (AĞ) */}
      <section className="aboutHero">
        <div className="container aboutHero__inner">
          <h1 className="aboutHero__title">
            <span className="orange">Empowering UK</span>
            <br />
            companies in India
          </h1>

          <p className="aboutHero__sub">
            Learn more about our story and the hard-working
            <br />
            people behind the company
          </p>

          <div className="aboutHero__image">
            <img src={workInOfficeImg} alt="Working in office" />
          </div>

          <p className="aboutHero__desc">
            We help UK based companies set up or expand within the growing
            Indian market via our long-established network of Indian contacts
          </p>
        </div>
      </section>

      {/* WHAT WE CAN DO (BOZ FON) */}
      <section className="aboutContent">
        <div className="container">
          <h2 className="aboutContent__title">What we can do</h2>

          <div className="aboutContent__text">
            <p>
              Despite its various advantages India is still a very difficult
              market for an outsider to penetrate and succeed in.
            </p>

            <p>
              We help any company to build and execute on their Indian expansion
              plans through:
            </p>

            <p>
              Building a plan tailored to the Indian market and so achieve a
              faster time to market and growth.
            </p>

            <p>
              The plan is then fully supported by specific and targeted local
              introductions like Potential Market Partner, Relevant Professional
              Advisors (Legal, Finance, Sales and Marketing, IT, Real Estate),
              Local and Central Government bodies, Potential Funding Partners.
            </p>

            <p>
              Subject to agreement, we typically charge a monthly fixed
              retainer, plus all pre-approved travel and incidental costs. Plus,
              we agree commission on successful sales.
            </p>

            <p>
              The retainer and commission can both be paid in a mixture of cash
              or in an equity share.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutImagesSection">
        <div className="container">
          <div className="aboutImagesRow">
            <div className="aboutImgSmall">
              <img src={mansImg} alt="Man working" />
            </div>

            <div className="aboutImgLarge">
              <img src={meetingImg} alt="Team meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS (AĞ) */}
      <Stats />

      {/* SPONSORS (AĞ, About üçün) */}
      <Sponsors
        title="These great companies have opted to trust us"
        showDesc={false}
        showActions={false}
      />
    </>
  );
}
