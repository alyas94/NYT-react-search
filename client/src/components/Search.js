import React from "react";

const Search = props => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-search" aria-hidden="true" /> Search
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Keyword</label>
                <input
                  onChange={props.handleTopicChange}
                  type="text"
                  className="form-control"
                  id="topic"
                  aria-describedby="emailHelp"
                  placeholder="kittens"
                />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year</label>
                <input
                  onChange={props.handleStartYearChange}
                  type="text"
                  className="form-control"
                  id="start-year"
                  placeholder="1960"
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year</label>
                <input
                  onChange={props.handleEndYearChange}
                  type="text"
                  className="form-control"
                  id="end-year"
                  placeholder="1994"
                />
              </div>
              <button
                onClick={props.handleFormSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading" />
          <div className="panel-body">{props.renderArticles()}</div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
);

export default Search;
