import React from 'react';

class BottomMenuComponent extends React.Component {
    constructor() {
        super();

        this.navElmRef = React.createRef();
    }

    render() {
        const lstItemTemplates = this.props.menuInfo
            ? this.props.menuInfo.map((i, idx) => (
                  <li className="item" key={idx}>
                      <a href={i.href}>
                          <i className={i.iconClassName} />
                          {i.text}
                      </a>
                  </li>
              ))
            : [];

        return (
            <ul className="bottom-menu">
                <h4>{this.props.title}</h4>
                {lstItemTemplates}
            </ul>
        );
    }
}

export default BottomMenuComponent;
