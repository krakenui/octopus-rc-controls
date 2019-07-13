import React from 'react';
import './vertical-top-news.component.scss';

class VerticalTopNewsComponent extends React.Component {
    listNewsBuilder() {
        return this.props.src
            ? this.props.src.map((item, idx) => {
                  return (
                      <li className="item" key={idx}>
                          <a href={item.href}>
                              <div className="row">
                                  <div className="col-md-4">
                                    <img src={item.image} title={item.headLine}></img>
                                  </div>
                                  <div className="col-md-8">
                                      <p className="text">{item.headLine}</p>
                                      <p className="date">{item.lastModifiedTime}</p>
                                  </div>
                              </div>
                          </a>
                      </li>
                  );
              })
            : [];
    }

    render() {
        const lstItemTemplates = this.listNewsBuilder();

        return (
            <div className="vertical-top-menu">
                <h3 className="title">BÀI ĐĂNG MỚI</h3>
                <ul className="content">{lstItemTemplates}</ul>
            </div>
        );
    }
}

export default VerticalTopNewsComponent;
