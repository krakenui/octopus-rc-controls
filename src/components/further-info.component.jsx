import React from 'react';

class FurtherInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="further-info">
                <div className="support">
                    <h3>Bạn cần hỗ trợ ?</h3>
                    <a href={'tel:' + this.props.phone}>{this.props.phone}</a> - <a href={this.props.email}>{this.props.email}</a>
                </div>
                <div className="contact">
                    <h3>{this.props.contactTitle}</h3>
                    <p className="brand">{this.props.companyName}</p>
                    <ul className="contact-list">
                        <li className="address">
                            <i className="fas fa-map-marker-alt" />
                            {this.props.address}
                        </li>
                        <li className="calendar">
                            <i className="fas fa-calendar-alt" />
                            {this.props.calendar}
                        </li>
                        <li className="phone">
                            <i className="fas fa-headphones" />
                            {this.props.phone}
                        </li>
                        <li className="email">
                            <i className="fas fa-envelope" />
                            <a href={'mailTo:' + this.props.email}>{this.props.email}</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FurtherInfo;
