import React from "react";

//renders date into readable format for users
const dateRender = function(date) {
  let newDate = date.slice(0, 10);
  return newDate;
};

const Results = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="float-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-primary ">
              <i className="fas fa-external-link-alt" />
            </button>
          </a>
          <button
            className="btn btn-primary"
            onClick={() => props.handleSaveButton(props._id)}
          >
            <i className="fas fa-download" />
          </button>
        </span>
      </h4>
      <p>Published: {dateRender(props.date)}</p>
    </li>
  </div>
);

export default Results;
