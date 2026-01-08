import { useMemo, useRef, useEffect, useState } from "react";
import "../styles/offices.css";

import bigBen from "../assets/images/bigben_london.png";

function mapsUrl(addr) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addr
  )}`;
}

function UkPill({ item, open, onToggle }) {
  const bodyRef = useRef(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    setH(open ? el.scrollHeight : 0);
  }, [open, item.address]);

  return (
    <div className={`pill ${open ? "pill--open" : ""}`}>
      <button className="pillHead" type="button" onClick={onToggle}>
        <span className="pillCity">{item.city}</span>
        <span className="pillIcon">{open ? "−" : "+"}</span>
      </button>

      <div className="pillBodyWrap" style={{ maxHeight: `${h}px` }}>
        <div ref={bodyRef} className="pillBody">
          <div className="pillAddr">{item.address}</div>
          <a
            className="pillMaps"
            href={mapsUrl(item.address)}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps 📍
          </a>
        </div>
      </div>
    </div>
  );
}

function IndiaCard({ title, address }) {
  return (
    <div className="indiaCard">
      <div className="indiaTitle">{title}</div>
      <div className="indiaAddr">{address}</div>
      <a
        className="pillMaps"
        href={mapsUrl(address)}
        target="_blank"
        rel="noreferrer"
      >
        Open in Google Maps 📍
      </a>
    </div>
  );
}

export default function Offices() {
  const uk = useMemo(
    () => [
      {
        id: "london",
        city: "London",
        address: "London Office Address (add exact address)",
      },
      {
        id: "cardiff",
        city: "Cardiff",
        address: "Cardiff Office Address (add exact address)",
      },
      {
        id: "edinburgh",
        city: "Edinburgh",
        address: "1 Lochrin Square, 92–98 Fountainbridge, Edinburgh, EH3 9QA",
      },
      {
        id: "west-midlands",
        city: "West Midlands",
        address: "West Midlands Office Address (add exact address)",
      },
    ],
    []
  );

  const india = useMemo(
    () => [
      {
        title: "519, Udyog Vihar Phase V",
        address: "519, Udyog Vihar Phase V, Gurugram, Haryana",
      },
      {
        title: "Sector 19, Gurugram, Haryana",
        address: "Sector 19, Gurugram, Haryana",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState("edinburgh");

  return (
    <section className="officesPage">
      <div className="container">
        {/* TOP */}
        <div className="topCenter">
          <h1 className="topTitle">
            <span className="orange">Where is the Brand India</span>
            <br />
            office located?
          </h1>
          <p className="topSub">
            Brand India Limited is a company registered in England and Wales
          </p>
        </div>

        {/* HERO */}
        <div className="heroGrid">
          <div className="heroImg">
            <img src={bigBen} alt="London Big Ben" />
          </div>

          <div className="heroText">
            <h2 className="heroH2">
              Our head office <br />
              is located in the <br />
              <span className="orange">Guiseley, Leeds,</span>
              <br />
              <span className="orange">England</span>
            </h2>
            <p className="heroP">
              Join our superstar team in automating businesses all over the
              world
            </p>
          </div>
        </div>

        {/* UK */}
        <h3 className="sectionCenter">UK Regional Offices</h3>
        <div className="pillGrid">
          {uk.map((x) => (
            <UkPill
              key={x.id}
              item={x}
              open={openId === x.id}
              onToggle={() => setOpenId((cur) => (cur === x.id ? null : x.id))}
            />
          ))}
        </div>

        {/* INDIA */}
        <h3 className="sectionCenter sectionCenter--mt">India Office</h3>
        <div className="indiaGrid">
          {india.map((x) => (
            <IndiaCard key={x.title} title={x.title} address={x.address} />
          ))}
        </div>
      </div>
    </section>
  );
}
