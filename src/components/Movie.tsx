import * as React from "react";

interface IProps {
  title: string;
  year: string;
  poster: string;
}

export default class Movie extends React.Component<IProps> {
  render() {
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.poster} className="card-img" alt={this.props.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">
                <small className="text-muted">{this.props.year  }</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
