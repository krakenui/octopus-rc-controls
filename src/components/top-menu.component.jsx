import React from 'react';
import { connect } from 'react-redux';

class TopMenuComponent extends React.Component {
    constructor() {
        super();

        this.navElmRef = React.createRef();
        this.collapseChange = this.collapseChange.bind(this);
    }

    collapseChange() {
        if (this.navElmRef.current) {
            const navElm = this.navElmRef.current;

            if (navElm.className === 'top-nav') {
                navElm.className += ' responsive';
            } else {
                navElm.className = 'top-nav';
            }
        }
    }

    render() {
        const currentHref = window.location.pathname;
        const lstItemTemplates =
            this.props.children == null && this.props.menuInfo
                ? this.props.menuInfo.map((i, idx) => {
                      if (currentHref === i.href) {
                          return (
                              <a href={i.href} className="active" key={idx}>
                                  {i.text}
                              </a>
                          );
                      }

                      return (
                          <a href={i.href} key={idx}>
                              {i.text}
                          </a>
                      );
                  })
                : [];

        return (
            <div className="container">
                <div ref={this.navElmRef} className="top-nav">
                    {this.props.children == null ? lstItemTemplates : this.props.children}
                    <span className="icon" onClick={this.collapseChange}>
                        <i className="fa fa-bars" />
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const menuInfo = state.setting && state.setting.menuInfo;
    const props = {
        menuInfo,
    };

    return props;
};

export default connect(
    mapStateToProps,
    {}
)(TopMenuComponent);
