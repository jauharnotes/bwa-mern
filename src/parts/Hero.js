import React from "react";
import ImageHero from "assets/images/picture.png";
import ImageHero_ from "assets/images/frame.png";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import NumberFormat from "utils/NumberFormat";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container" style={{ paddingTop: 69 }}>
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-auto pr-5" style={{ width: 480 }}>
          <h1 className="text-blue fw-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 fw-light text-secondary w-75 fs-6">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>

          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="32"
                height="32"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3 text-blue">
                {NumberFormat(props.data.travelers)}{" "}
                <span className="text-secondary fw-light">travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginLeft: 20 }}>
              <img
                width="32"
                height="32"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3 text-blue">
                {NumberFormat(props.data.treasures)}{" "}
                <span className="text-secondary fw-light">treasures</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginLeft: 20 }}>
              <img
                width="32"
                height="32"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3 text-blue">
                {NumberFormat(props.data.cities)}{" "}
                <span className="text-secondary fw-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col" style={{ paddingLeft: 159 }}>
          <img
            src={ImageHero}
            alt="Room with couches"
            className="img-fluid position-absolute"
            style={{
              width: 520,
              height: 410,
              margin: "-30px 0 0 -30px",
              zIndex: 1,
            }}
          />
          <img
            src={ImageHero_}
            alt="Room with couches frame"
            className="img-fluid position-relative"
            style={{
              width: 520,
              height: 410,
              margin: "-0 -15px -15px 0",
            }}
          />
        </div>
      </div>
    </section>
  );
}
