import React, { Component } from 'react';

class NewsItemComponent extends Component {
    render() {
        return (
            <div className="news-item row">
                <div className="col-sm-3 image">
                    <a href={this.props.href}>
                        <img src={this.props.image} alt={this.props.title} />
                    </a>
                </div>

                <div className="col-sm-9 content">
                    <a className="title" href={this.props.href}>
                        {this.props.title}
                    </a>
                    <div className="action">
                        <span>
                            <i className="fas fa-calendar-day" />
                            {this.props.date}
                        </span>
                        <span>
                            <i className="fas fa-user-edit" />
                            {this.props.authorName}
                        </span>
                    </div>

                    <p className="description">{this.props.description}</p>

                    <a className="btn btn-primary btn-detail" href={this.props.href}>
                        Xem chi tiết
                    </a>
                </div>
            </div>
        );
    }
}

export default NewsItemComponent;
