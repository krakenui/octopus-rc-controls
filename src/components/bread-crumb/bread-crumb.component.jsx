import React from 'react';
import './bread-crumb.component.scss';

class BreadCrumbComponent extends React.Component {
    itemsBuilder() {
        return this.props.items
            ? this.props.items.map((item, idx) => {
                  return (
                      <li className="item" key={idx}>
                          <a href={item.href}>{item.text}</a>
                      </li>
                  );
              })
            : [];
    }

    render() {
        const itemTempates = this.itemsBuilder();
        return (
            <div className="bread-cumb">
                <div className="container">{itemTempates && itemTempates.length > 0 && <ul>{itemTempates}</ul>}</div>
            </div>
        );
    }
}

export default BreadCrumbComponent;
