import React from "react";

class ServiceItem extends React.Component {
  render() {
    return (
      <div className="service-item row">
        <div className="col-sm-3 image">
          <img src={this.props.srcImg} alt={this.props.title} />
        </div>
        <div className="col-sm-9 content">
          <a className="link" href={this.props.url}>
            {this.props.title}
          </a>
          <p className="description">{this.props.description}</p>
          <a className="btn btn-primary btn-more" href={this.props.url}>
            Xem chi tiết
          </a>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
