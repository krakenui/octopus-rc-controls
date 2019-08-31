import React from "react";
import classNames from "classnames";
import "antd/dist/antd.css";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;

export default class SidebarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      selectedKeys: [],
      selectedSubs: []
    };

    this.leafKey = 1;
    this.subKey = 1;
  }

  getPrefixCls = () => {
    return this.props ? this.props.prefixClass : "";
  };

  buildLeaf(key, item) {
    return (
      <Menu.Item key={this.leafKey++}>
        <a className="item-link" href={item.href}>
          {item.icon != null && (
            <span>
              <i className={item.icon} />
            </span>
          )}
          <span className="text">{item.title}</span>
        </a>
      </Menu.Item>
    );
  }

  buildNode(key, item) {
    const _self = this;

    return (
      <SubMenu
        key={`sub${this.subKey++}`}
        title={
          <span>
            {item.icon != null && (
              <span>
                <i className={item.icon} />
              </span>
            )}
            <span className="text">{item.title}</span>
          </span>
        }
      >
        {item.children.map((child, idx) => {
          return _self.buildLeaf(idx, child);
        })}
      </SubMenu>
    );
  }

  defaultSelectedKeys = items => {
    let node = 0,
      leaf = 1;
    const flatItem = item => {
      if (item.children && item.children.length > 0) {
        node++;
        return item.children.map(i => {
          return {
            node: node,
            key: leaf++,
            href: i.href
          };
        });
      } else {
        return [
          {
            node: 0,
            key: leaf++,
            href: item.href
          }
        ];
      }
    };

    const flatSource = items
      .map((item, idx) => {
        return flatItem(item, idx);
      })
      .reduce((acc, curr) => {
        acc.push(...curr);

        return acc;
      }, []);

    const sub = flatSource.find(s => s.href === window.location.pathname);
    if (!sub) {
      return {
        node: 1,
        key: 0
      };
    }

    return sub;
  };

  firstActive = () => {
    if (this.props.src.length > 0 && this.state.selectedKeys.length === 0) {
      const { key, node } = this.defaultSelectedKeys(this.props.src);
      this.setState({
        selectedKeys: [`${key}`],
        selectedSubs: [`sub${node}`]
      });
    }
  };

  onOpenChange = e => {
    this.setState({
      selectedSubs: e
    });
  };

  render() {
    const props = this.props;
    const baseClassName = classNames(
      "sidebar",
      this.getPrefixCls(),
      props.className
    );
    const menuItems = props.src;
    const _self = this;
    this.leafKey = 1;
    this.subKey = 1;
    this.firstActive();

    return (
      <div className={baseClassName} style={{ width: this.props.width }}>
        <Menu
          ref={this.primaryRef}
          openKeys={this.state.selectedSubs}
          selectedKeys={this.state.selectedKeys}
          forceSubMenuRender={true}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
          onOpenChange={this.onOpenChange}
        >
          {menuItems.map((item, idx) => {
            if (item.children) {
              return _self.buildNode(idx, item);
            }

            return _self.buildLeaf(idx, item);
          })}
        </Menu>
      </div>
    );
  }
}
