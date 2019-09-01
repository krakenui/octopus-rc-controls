import React, { Component } from "react";
import { connect } from "react-redux";
import TopMenuComponent from "./top-menu.component";

class HeaderComponent extends Component {
  buildSocials = () => {
    return (
      this.props.socials &&
      this.props.socials.map((i, idx) => {
        return (
          <a target="_blank" rel="noopener noreferrer" href={i.href} key={idx}>
            <i className={i.iconClassName} />
          </a>
        );
      })
    );
  };

  render() {
    return (
      <header className="top-header bg-white">
        <div className="top-head">
          <div className="container">
            <div className="clearfix">
              <div className="logo-brand float-left">
                <a href="/">
                  <div className="float-left">
                    <img
                      src={this.props.logo}
                      alt="logo"
                      className="logo-img"
                    />
                  </div>
                  <div className="brand">
                    <div className="title large-text">
                      {this.props.brandName}
                    </div>
                    <div className="slogan small-text">
                      {this.props.brandSlogan}
                    </div>
                  </div>
                </a>
              </div>

              <div className="contact float-right">
                <div className="contact-item">
                  <span className="float-left">
                    <i className="fas fa-headphones" />
                  </span>
                  <div className="content">
                    <div className="small-text">Tổng đài hỗ trợ</div>
                    <div className="medium-text">{this.props.hotline}</div>
                  </div>
                </div>
                <div className="contact-item ">
                  <span className="float-left">
                    <i className="fas fa-calendar-alt" />
                  </span>
                  <div className="content">
                    <div className="small-text">
                      Giờ khám: <span>{this.props.calendar}</span>
                    </div>
                    <div className="medium-text">
                      <a href="dat-lich-hen.html">ĐẶT LỊCH HẸN</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="float-left">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <div className="content">
                    <div className="small-text">{this.props.address}</div>
                    <div className="medium-text">
                      <a href="lien-he.html#map">XEM BẢN ĐỒ</a>
                    </div>
                  </div>
                </div>
              </div>

              {this.props.socials && (
                <div className="socials">{this.buildSocials()}</div>
              )}
              {}
            </div>
          </div>
        </div>
        <div className="top-menu">
          <TopMenuComponent />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  const contactInfo = state.user && state.user.contact;
  contactInfo.socials =
    contactInfo && contactInfo.socials && JSON.parse(contactInfo.socials);
  const props = {
    ...contactInfo
  };

  return props;
};

export default connect(
  mapStateToProps,
  {}
)(HeaderComponent);
