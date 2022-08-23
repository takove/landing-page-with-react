import React from "react";

export const Cards = (props) => {
  return (
    <div className="m-3" style={{width: "18rem"}}>
      <div className="card">
        <img src={props.imgSrc} className="card-img-top" alt="random image" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
