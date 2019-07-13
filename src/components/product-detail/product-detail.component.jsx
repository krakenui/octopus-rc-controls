import React from 'react';
import './product-detail.component.scss';
import ProductSuggestList from '../product-suggest-list/product-suggest-list.component';

class ProductDetailComponent extends React.Component {
    constructor() {
        super();

        this.imagePreview = React.createRef();
    }

    changeImagePreview = (srcImage, altImage) => {
        this.imagePreview.current.src = srcImage;
        this.imagePreview.current.alt = altImage;
    };

    buildImages = () => {
        const { srcImages, name } = this.props;
        return srcImages
            ? srcImages.map((item, index) => {
                  return (
                      <li key={index} onClick={() => this.changeImagePreview(item, name)}>
                          <img src={item} alt={name} />
                      </li>
                  );
              })
            : [];
    };

    render() {
        return (
            <div className="product-detail">
                <div className="row product-summary">
                    <div className="col-md-4 col-sm-12 product-images">
                        <div className="row">
                            <div className="images-list col-sm-12 col-md-4">
                                <ul>{this.buildImages()}</ul>
                            </div>
                            <div className="product-image col-sm-12 col-md-8">
                                <img ref={this.imagePreview} src={this.props.srcImages && this.props.srcImages[0]} alt={this.props.name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 product-cart">
                        <div className="row">
                            <h1 className="product-name col-sm-12 display-4">{this.props.name}</h1>
                        </div>
                        <div className="row">
                            <ul className="price col-sm-12">
                                <li>
                                    {this.props.price} {this.props.currencyUnit}
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="description col-sm-12">{this.props.trailer}</div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="description col-sm-12" dangerouslySetInnerHTML={{ __html: this.props.descriptions }} />
                </div>
            </div>
        );
    }
}

export default ProductDetailComponent;
