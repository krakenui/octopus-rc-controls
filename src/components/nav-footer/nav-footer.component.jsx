import React from 'react';
import './nav-footer.component.scss';

class NavFooterComponent extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                <div className="copyright text-center">
                    Copyright © {new Date().getFullYear()} <a href={this.props.baseHref}>{this.props.companyName}</a>. All rights reserved.
                </div>
                <div className="powered" />
            </div>
        );
    }
}

export default NavFooterComponent;
