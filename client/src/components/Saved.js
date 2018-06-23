import React from "react";

//renders date into readable format for users
const dateRender = function(date) {
  let newDate = date.slice(0, 10);
  return newDate;
};

const Saved = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="float-right">
          <button className="btn btn-warning ">
            <a href={props.url} target="_blank">
              <i className="fas fa-external-link-alt" />
            </a>
          </button>

          <button
            className="btn btn-warning"
            onClick={() => props.handleDeleteButton(props._id)}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </span>
      </h4>
      <p>Published: {dateRender(props.date)}</p>
    </li>
  </div>
);

export default Saved;
