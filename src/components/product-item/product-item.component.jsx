import React from 'react';
import './product-item.component.scss';

class ProductItemComponent extends React.Component {
    addToCartClick = () => {
        if (this.props.onClickDetail) {
            this.props.onClickDetail(this.props.id);
        }
    };

    viewDetailProductClick = () => {
        if (this.props.onClickDetail) {
            this.props.onClickDetail(this.props.id);
        }
    };

    render() {
        return (
            <div className="card product-item">
                <div className="overlay">
                    <div className="card-body actions">
                        <button className="card-link btn btn-outline-primary" onClick={this.addToCartClick}>
                            <i className="fas fa-eye" />
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <img src={this.props.srcImage} className="card-img-top" alt={this.props.name} onClick={this.viewDetailProductClick} />
                <div className="card-body pt-0 pb-0" title={this.props.name}>
                    <h5 className="card-title title" onClick={this.viewDetailProductClick}>
                        {this.props.name}
                    </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="price">
                            {this.props.price.toLocaleString()} {this.props.currencyUnit}
                        </span>{' '}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProductItemComponent;
