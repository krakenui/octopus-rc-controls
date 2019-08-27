import React, { Component } from 'react';
import { connect } from 'react-redux';
import BottomMenuComponent from './bottom-menu.component';

class FooterComponent extends Component {
    render() {
        const socialLinks = this.props.socials
            ? this.props.socials.map((i, idx) => {
                  return (
                      <a target="_blank" rel="noopener noreferrer" href={i.href} key={idx}>
                          <i className={i.iconClassName} />
                      </a>
                  );
              })
            : [];

        const emailToLink = `mailTo:${this.props.email}`;

        return (
            <footer className="footer">
                <div className="top-sitemap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-brand float-left">
                                    <a href="/">
                                        <div className="float-left">
                                            <img src={this.props.logo} alt="logo" className="logo-img" />
                                        </div>
                                        <div className="brand">
                                            <div className="title large-text">{this.props.brandName}</div>
                                            <div className="slogan small-text">{this.props.brandSlogan}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <ul className="contact-list">
                                    <h4>Thông tin liên hệ</h4>
                                    <li className="address">
                                        <i className="fas fa-map-marker-alt" />
                                        {this.props.address}
                                    </li>
                                    <li className="address">
                                        <i className="fas fa-calendar-alt" />
                                        {this.props.calendar}
                                    </li>
                                    <li className="phone">
                                        <i className="fas fa-headphones" />
                                        {this.props.hotline}
                                    </li>
                                    <li className="email">
                                        <i className="fas fa-envelope" />
                                        <a href={emailToLink}>{this.props.email}</a>
                                    </li>
                                </ul>

                                <div className="embeded-map">
                                    <iframe src={this.props.map} title={this.props.brandName} />
                                </div>
                            </div>

                            {this.props.bottomMenuInfo && (
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <BottomMenuComponent title="Chức năng" menuInfo={this.props.bottomMenuInfo} />
                                </div>
                            )}
                            {this.props.serviceMenuInfo && (
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <BottomMenuComponent title="Dịch vụ" menuInfo={this.props.serviceMenuInfo} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bottom-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="copyright">
                                    &copy; {new Date().getFullYear()} Bản quyền thuộc về <a href="/">{this.props.brandName}</a>.
                                </div>
                            </div>

                            {socialLinks && socialLinks.length > 0 && (
                                <div className="col-sm-6">
                                    <div className="social">
                                        <span>Kết nối với chúng tôi</span>
                                        {socialLinks}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    const contactInfo = state.user && state.user.contact;
    const bottomMenuInfo = state.setting && state.setting.bottomMenuInfo;
    const serviceMenuInfo = state.setting && state.setting.serviceMenuInfo;
    const socials = contactInfo && contactInfo.socials && JSON.parse(contactInfo.socials);
    const props = {
        ...contactInfo,
        socials,
        bottomMenuInfo,
        serviceMenuInfo,
    };

    return props;
};

export default connect(
    mapStateToProps,
    {}
)(FooterComponent);
