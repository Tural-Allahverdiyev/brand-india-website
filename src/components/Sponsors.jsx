import "../styles/sponsors.css";

import dropbox from "../assets/images/sponsor/dropbox.png";
import github from "../assets/images/sponsor/GitHub.png";
import google from "../assets/images/sponsor/google.png";
import group from "../assets/images/sponsor/Group.png";
import hubspot from "../assets/images/sponsor/HubSpot.png";
import slack from "../assets/images/sponsor/slack.png";
import stripe from "../assets/images/sponsor/stripe.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sponsors = [
  { name: "Dropbox", img: dropbox, url: "https://www.dropbox.com" },
  { name: "GitHub", img: github, url: "https://github.com" },
  { name: "Google", img: google, url: "https://www.google.com" },
  { name: "Group", img: group, url: "https://example.com" },
  { name: "HubSpot", img: hubspot, url: "https://www.hubspot.com" },
  { name: "Slack", img: slack, url: "https://slack.com" },
  { name: "Stripe", img: stripe, url: "https://stripe.com" },
];

export default function Sponsors({
  title = (
    <>
      Meet our fantastic community <br />
      of loyal fans
    </>
  ),
  showHeading = true,
  showDesc = true,
  showActions = true,
}) {
  return (
    <section className="sponsors" aria-label="Sponsors">
      <div className="container">
        {showHeading && <h2 className="sponsors__title">{title}</h2>}

        {showDesc && (
          <p className="sponsors__desc">
            Don’t just take our word for it. See what our <br />
            customers have to say.
          </p>
        )}

        <div className="sponsors__carousel" aria-label="Sponsor carousel">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={"auto"}
            spaceBetween={80}
            allowTouchMove={true}
            className="sponsorsSwiper"
          >
            {sponsors.concat(sponsors).map((s, i) => (
              <SwiperSlide key={`${s.name}-${i}`} className="sponsorsSlide">
                <a
                  className="sponsors__item"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  aria-label={s.name}
                >
                  <img src={s.img} alt={s.name} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {showActions && (
          <div className="sponsors__actions">
            <a className="sponsors__link" href="#testimonials">
              View customer stories
            </a>

            <a className="sponsors__btn" href="#contact">
              Be partner
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
