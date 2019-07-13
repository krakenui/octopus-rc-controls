import React from 'react';
import './service-other.component.scss';

class ServiceOther extends React.Component {
    render() {
        return (
            <div className="service-other">
                <div className="row">
                    <div className="col-md-5">
                        <img src={props.img} />
                    </div>
                    <div className="col-md-7" dangerouslySetInnerHTML={{ __html: this.props.other }} />
                </div>
            </div>
        );
    }
}

export default ServiceOther;
