import React from 'react';
import classNames from 'classnames';
import { Menu } from 'antd';
import './sidebar.component.scss';

const SubMenu = Menu.SubMenu;

export default class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };

        this.sub = null;
        this.flatSource = [];
        if (props && props.src.length > 0) {
            this.flatSource = props.src
                .map((item, idx) => {
                    return this.flatItem(item, idx);
                })
                .reduce((acc, curr) => {
                    acc.push(...curr);

                    return acc;
                }, []);

            this.getDefaultSubmenu();
        }
    }

    getPrefixCls = () => {
        return this.props ? this.props.prefixClass : '';
    };

    flatItem(item, idx) {
        if (!item.children || item.children.length === 0) {
            return [
                {
                    sub: `sub${idx}`,
                    key: idx,
                    href: item.href,
                },
            ];
        }

        return item.children.map((i, idex) => {
            return {
                sub: `sub${idx}`,
                key: idex + '',
                href: i.href,
            };
        });
    }

    buildLeaf(key, item) {
        return (
            <Menu.Item key={key}>
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
                key={`sub${key}`}
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

    getDefaultSubmenu() {
        const sub = this.flatSource.find(s => s.href === window.location.pathname);

        if (sub) {
            this.sub = sub;
        }
    }

    render() {
        const props = this.props;
        const baseClassName = classNames('sidebar', this.getPrefixCls(), props.className);
        const menuItems = props.src;
        const _self = this;

        return (
            <div className={baseClassName} style={{ width: this.props.width }}>
                <Menu
                    defaultSelectedKeys={this.sub != null ? [this.sub.key] : ['0']}
                    defaultOpenKeys={this.sub != null ? [this.sub.sub] : ['sub0']}
                    forceSubMenuRender={true}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
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
