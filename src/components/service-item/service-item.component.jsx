import React from 'react';
import './service-item.component.scss';

class ServiceItem extends React.Component {

    getImageLeft = () => {
        return (
            <div className="service-item">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="image">
                            <img src={this.props.srcImg} alt={this.props.title} />
                        </div>
                    </div>
                    <div className="col-sm-10 text-left">
                        <a className="link" href={this.props.url}>
                            {this.props.title}
                        </a>
                        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                        <div className="extra text-left">
                            <a className="btn btn-primary btn-more" href={this.props.url}>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    getImageRight = () => {
        return (
            <div className="service-item">
                <div className="row">
                    <div className="col-sm-9">
                        <a className="link" href={this.props.url}>
                            {this.props.title}
                        </a>
                        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                    </div>
                    <div className="col-sm-3">
                        <div className="image">
                            <img src={this.props.srcImg} alt={this.props.title} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return this.getImageLeft();
    }
}

export default ServiceItem;
