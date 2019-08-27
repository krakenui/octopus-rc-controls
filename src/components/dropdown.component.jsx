import React from 'react';
import ReactDOM from 'react-dom';

const DEFAULT_PLACEHOLDER_STRING = 'Select...';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.parseValue(props.value, props.options) || {
                label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
                value: '',
            },
            isOpen: false,
        };

        this.mounted = true;
        this.controlElmRef = React.createRef();
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.fireChangeEvent = this.fireChangeEvent.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value) {
            var selected = this.parseValue(newProps.value, newProps.options);
            if (selected !== this.state.selected) {
                this.setState({ selected: selected });
            }
        } else {
            this.setState({
                selected: {
                    label: typeof newProps.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : newProps.placeholder,
                    value: '',
                },
            });
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
        document.addEventListener('touchend', this.handleDocumentClick, false);
    }

    componentWillUnmount() {
        this.mounted = false;
        document.removeEventListener('click', this.handleDocumentClick, false);
        document.removeEventListener('touchend', this.handleDocumentClick, false);
    }

    handleMouseDown(event) {
        if (this.props.onFocus && typeof this.props.onFocus === 'function') {
            this.props.onFocus(this.state.isOpen);
        }
        if (event.type === 'mousedown' && event.button !== 0) return;
        event.stopPropagation();
        event.preventDefault();

        if (!this.props.disabled) {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }
    }

    parseValue(value, options) {
        let option;

        if (typeof value === 'string') {
            for (var i = 0, num = options.length; i < num; i++) {
                if (options[i].type === 'group') {
                    const match = options[i].items.filter(item => item.value === value);
                    if (match.length) {
                        option = match[0];
                    }
                } else if (typeof options[i].value !== 'undefined' && options[i].value === value) {
                    option = options[i];
                }
            }
        }

        return option || value;
    }

    setValue(value, label) {
        let newState = {
            selected: {
                value,
                label,
            },
            isOpen: false,
        };
        this.fireChangeEvent(newState);
        this.setState(newState);
    }

    fireChangeEvent(newState) {
        if (newState.selected !== this.state.selected) {
            if (this.props.onChange) {
                this.props.onChange(newState.selected);
            }
            if (newState && newState.selected && this.controlElmRef.current) {
                this.controlElmRef.current.value = newState.selected.value;
            }
        }
    }

    renderOption(option) {
        let value = option.value;
        if (typeof value === 'undefined') {
            value = option.label || option;
        }
        let label = option.label || option.value || option;
        let isSelected = value === this.state.selected.value || value === this.state.selected;

        const optionClass = `nav-dropdown-option ${!!option.className ? option.className : ''} ${isSelected ? 'is-selected' : ''}`.trim();

        return (
            <div
                key={value}
                className={optionClass}
                onMouseDown={this.setValue.bind(this, value, label)}
                onClick={this.setValue.bind(this, value, label)}
                role="option"
                aria-selected={isSelected ? 'true' : 'false'}
            >
                {label}
            </div>
        );
    }

    buildMenu() {
        let { options } = this.props;
        let ops = options.map(option => {
            if (option.type === 'group') {
                let groupTitle = <div className={`nav-dropdown-title`}>{option.name}</div>;
                let _options = option.items.map(item => this.renderOption(item));

                return (
                    <div className={`nav-dropdown-group`} key={option.name} role="listbox" tabIndex="-1">
                        {groupTitle}
                        {_options}
                    </div>
                );
            } else {
                return this.renderOption(option);
            }
        });

        return ops.length ? ops : <div className={`nav-dropdown-noresults`}>No options found</div>;
    }

    handleDocumentClick(event) {
        if (this.mounted) {
            if (!ReactDOM.findDOMNode(this).contains(event.target)) {
                if (this.state.isOpen) {
                    this.setState({ isOpen: false });
                }
            }
        }
    }

    isValueSelected() {
        return typeof this.state.selected === 'string' || this.state.selected.value !== '';
    }

    render() {
        const { controlClassName, placeholderClassName, menuClassName, arrowClassName, arrowClosed, arrowOpen, className } = this.props;

        const disabledClass = this.props.disabled ? `nav-dropdown-disabled` : '';
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;

        const dropdownClass = `nav-dropdown-root ${!!className ? className : ''} ${this.state.isOpen ? 'is-open' : ''}`.trim();

        const controlClass = `nav-dropdown-control ${!!controlClassName ? controlClassName : ''} ${
            !!disabledClass ? disabledClass : ''
        }`.trim();

        const placeholderClass = `nav-dropdown-placeholder ${!!placeholderClassName ? placeholderClassName : ''} ${
            this.isValueSelected ? 'is-selected' : ''
        }`.trim();

        const menuClass = `nav-dropdown-menu ${!!menuClassName ? menuClassName : ''} `.trim();

        const arrowClass = `nav-dropdown-arrow ${!!arrowClassName ? arrowClassName : ''} `.trim();

        const value = <div className={placeholderClass}>{placeHolderValue}</div>;
        const menu = this.state.isOpen ? (
            <div className={menuClass} aria-expanded="true">
                {this.buildMenu()}
            </div>
        ) : null;

        return (
            <div className={dropdownClass}>
                <div
                    className={controlClass}
                    ref={this.controlElmRef}
                    name={this.props.name}
                    value-prop={this.props['value-prop']}
                    onMouseDown={this.handleMouseDown.bind(this)}
                    onTouchEnd={this.handleMouseDown.bind(this)}
                    aria-haspopup="listbox"
                >
                    {value}
                    <div className={`nav-dropdown-arrow-wrapper`}>
                        {arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : <span className={arrowClass} />}
                    </div>
                </div>
                {menu}
            </div>
        );
    }
}

export default Dropdown;
