import React from "react";
import profile from "./assets/profile.jpg";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <img
        src={profile}
        alt="Profile picture"
        className="card-image"
        width={163}
        height={163}
      />
      <h2 className="card-title">Loa G. SOUMAHORO</h2>
      <p className="card-text">
        In my professional transition towards development, I'm involved in an
        intensive programming course at Becode. I'm learning to master various
        languages and technologies and am currently looking for a 2-3 month
        internship to put my skills into practice.
      </p>
    </div>
  );
};

export default Card;
