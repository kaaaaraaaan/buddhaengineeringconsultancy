import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Welcome"
          titleText={`Main Services Of Buddha Engineering Consultancy`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>3D Design</h3>
                <p>We Do All Kinds of 3D Interior And Exterior Design</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>GHAR NAKSA</h3>
                <p>Commercial Buildings And Residential Places </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Masterplan</h3>
                <p>Park Masterplan, Housing Masterplan And Many More</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Animation</h3>
                <p>Interior Animation And Exterior Animation </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
