import React from 'react';
import './top-banner.component.scss';

class TopBannerComponent extends React.Component {
    render() {
        return (
            <div className="top-banner" style={{ backgroundImage: `url(${this.props.backgroundImg})` }}>
                {this.props.children && this.props.children}
                {!this.props.children && (
                    <div className="container">
                        <h2>{this.props.bannerName}</h2>
                    </div>
                )}
            </div>
        );
    }
}

export default TopBannerComponent;
