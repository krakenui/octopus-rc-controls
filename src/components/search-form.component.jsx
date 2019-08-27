import React from 'react';

export default class SearchFormComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            keyword: '',
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onTextChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (event.target) {
            const form = event.target;
            const formControlElms = form.querySelectorAll('[name]');
            const searchData = {};

            formControlElms.forEach(elm => {
                const valueProp = elm.getAttribute('value-prop');
                const name = elm.getAttribute('name');
                if (valueProp && name) {
                    searchData[name] = elm[valueProp];
                }
            });

            this.props.onSearchSubmit(searchData);
        }
    }

    render() {
        return (
            <div className="search-form">
                <h3 className="title">{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row full-area form-group">
                        <div className="col-sm-12">
                            <input type="text" className="text-input" name="keyword" value-prop="value" placeholder="Nhập tên bác sĩ" />
                        </div>
                    </div>

                    <div className="row filter-area form-group">{this.props.children}</div>

                    <div className="row action-area">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">
                                {this.props.searchText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
