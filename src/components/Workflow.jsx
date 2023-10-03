import React from "react";

export const Workflow = (props) => {
  return (
    <div id="workflow">
      <div className="container">
        <div className="section-title text-center">
          <h2>Workflow</h2>
        </div>
        <ul>
          <ol style={{
            color: "black",
            fontWeight: 600,
            fontFamily: 'Avenir Next, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '.2em',
          }}>
            1.Testing 1
          </ol>
          <li style={{
            fontSize:"1.2em",
            color: "black",
            fontWeight: 600,
            fontFamily: 'Avenir Next, sans-serif',
            textTransform: 'uppercase',
          }}>
            Testing 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium placeat provident ratione sunt, maiores fuga rerum! Eos, architecto nobis? Facere excepturi consectetur quis labore quidem, voluptates odit perferendis cupiditate!
          </li>
          <li style={{
            color: "black",
            fontWeight: 600,
            fontFamily: 'Avenir Next, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '.2em',
          }}>
            Testing 3
          </li>
          <li style={{
            color: "black",
            fontWeight: 600,
            fontFamily: 'Avenir Next, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '.2em',
          }}>
            Testing 4
          </li>
          <li style={{
            color: "black",
            fontWeight: 600,
            fontFamily: 'Avenir Next, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '.2em',
          }}>
            Testing 5
          </li>
        </ul>
      </div>
    </div>
  );
};
