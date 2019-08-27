import React from 'react';

class ServiceBlock extends React.Component {
    render() {
        return (
            <div className="service-block">
                <div className="title">
                    <h2>{this.props.title}</h2>
                    <div className="gray-border" />
                    <div className="blue-border" />
                </div>
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default ServiceBlock;
