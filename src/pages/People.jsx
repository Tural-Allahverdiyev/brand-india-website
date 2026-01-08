import { useState } from "react";
import "../styles/people.css";

import people1 from "../assets/images/people-1.png";
import people2 from "../assets/images/people-2.png";

export default function People() {
  const [openTony, setOpenTony] = useState(false);
  const [openBen, setOpenBen] = useState(false);

  return (
    <section className="peoplePage">
      <div className="container">
        <h1 className="peopleTitle">Our People</h1>

        {/* TONY & FIONA */}
        <div className="peopleRow">
          <div className="peopleImageWrap">
            <img src={people1} alt="Tony & Fiona Lloyd" />
          </div>

          <div className="peopleTextBox center">
            <h3 className="peopleName">Tony Lloyd &amp; Fiona Lloyd</h3>

            <p className="peopleText">
              Tony is an experienced global executive with over 40 years
              experience in finance and business development.
            </p>
            <p className="peopleText">
              Tony and Fiona recently lived in Mumbai for over 2 years and
              developed an extensive and varied network of contacts across India
              and the UK.
            </p>

            {openTony && (
              <p className="peopleText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                quo excepturi porro? Facilis, dolor hic odio blanditiis at,
                accusamus illo reprehenderit reiciendis esse dolores quis, optio
                commodi soluta rem sequi. Aspernatur magni necessitatibus
                magnam, blanditiis perspiciatis perferendis recusandae maiores
                accusamus molestiae nisi sapiente dolorum porro suscipit, dicta
                quibusdam tenetur? Vel placeat officiis ut nostrum dolorem, quod
                quos temporibus! Magni, perferendis?
              </p>
            )}

            <button
              className="readMoreBtn"
              onClick={() => setOpenTony(!openTony)}
            >
              {openTony ? "Read more" : "Read more"}
            </button>
          </div>
        </div>

        {/* BEN */}
        <div className="peopleRow peopleRow--reverse">
          <div className="peopleTextBox center">
            <h3 className="peopleName">Ben Rankin</h3>

            <p className="peopleText">
              Ben is an experienced business development executive with a
              demonstrated history of working in the cyber security market.
            </p>

            {openBen && (
              <p className="peopleText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                quo excepturi porro? Facilis, dolor hic odio blanditiis at,
                accusamus illo reprehenderit reiciendis esse dolores quis, optio
                commodi soluta rem sequi. Aspernatur magni necessitatibus
                magnam, blanditiis perspiciatis perferendis recusandae maiores
                accusamus molestiae nisi sapiente dolorum porro suscipit, dicta
                quibusdam tenetur? Vel placeat officiis ut nostrum dolorem, quod
                quos temporibus! Magni, perferendis?
              </p>
            )}

            <button
              className="readMoreBtn"
              onClick={() => setOpenBen(!openBen)}
            >
              {openBen ? "Read more" : "Read more"}
            </button>
          </div>

          <div className="peopleImageWrap">
            <img src={people2} alt="Ben Rankin" />
          </div>
        </div>
      </div>
    </section>
  );
}
