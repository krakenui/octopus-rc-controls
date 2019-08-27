import React, { Component } from 'react';

class NavFixedComponent extends Component {
    render() {
        const firstLogoStyle = {
            width: this.props.logoWidth,
        };

        return (
            <div className="fix-top">
                <div className="logo" style={firstLogoStyle}>
                    {this.props.logo && <img src={this.props.logo} className="logo-img" alt={this.props.brandName} />}
                    <a className="text">{this.props.brandName}</a>
                    <button className="browse-btn btn" onClick={this.props.onToggleClick}>
                        {this.props.isToggle ? <i className="fas fa-toggle-on" /> : <i className="fas fa-toggle-off" />}
                    </button>
                </div>

                <div className="actions">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="/admin">
                                <span><i>Xin chào, </i>{this.props.loginName}!</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavFixedComponent;
