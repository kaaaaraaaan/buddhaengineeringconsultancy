import React from "react";
import BlockTitle from "./BlockTitle";

import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import TeamMemeber1 from "../assets/images/team/team-1-1.jpg";
import TeamMemeber2 from "../assets/images/team/team-1-2.jpg";
import TeamMemeber3 from "../assets/images/team/team-1-3.jpg";
import TeamMemeber4 from "../assets/images/team/team-1-4.jpg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <img src={TeamShape1} className="team-one__bg-shape-1" alt="" />
      <img src={TeamShape2} className="team-one__bg-shape-2" alt="" />
      <div className="container">
        <BlockTitle
          textAlign="center"
          titleText={`Meet Our Professional \n Team Members`}
        />
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Swachit Wagle</h3>
                <p>3D Visualizer</p>
                <div className="team-one__image">
                  <img src={TeamMemeber1} style={{width: '161px', height: '161px'}} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Bibek Karki</h3>
                <p>Civil Engineer/Valuator</p>
                <div className="team-one__image">
                  <img src={TeamMemeber2} style={{width: '161px', height: '161px'}} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Binod Bhusal</h3>
                <p>Junior Engineer/ Valuator</p>
                <div className="team-one__image">
                  <img src={TeamMemeber3} style={{width: '161px', height: '161px'}} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
