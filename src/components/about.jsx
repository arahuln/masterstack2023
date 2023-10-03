import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>MasterStack is an event, similar to MasterChef ( the competitive cooking show) where teams of size 3 will compete against each other to get the best tech stacks ( belonging to fields like Machine Learning, Web Development and App Development ) within a limited amount of virtual currency and a limited time, each stack containing a specified set of points. After the purchase, an idea needs to be proposed using only those tech stacks. Good proposals qualify for the next round where teams will be required to come up with a prototype of what they intend to build. The final stage consists of an offline presentation where the teams will be interviewed on the built prototype</p>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
