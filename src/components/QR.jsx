import React from "react";
import './QR.css';

export default function QR(props) {
  return (
      <div className="QR-component center">
        <img src={props.img} alt={props.alt}/>
        <div className="QR-component-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </div>
      </div>
  );
}
