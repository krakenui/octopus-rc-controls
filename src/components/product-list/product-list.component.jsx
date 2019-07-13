import React from 'react';
import './product-list.component.scss';
import ProductItem from '../product-item/product-item.component';

export class ProductListComponent extends React.Component {
    render() {
        const productTemplates =
            this.props.dataSource &&
            this.props.dataSource.map((item, index) => {
                item.srcImages = JSON.parse(item.srcImages);

                return (
                    <ProductItem
                        key={index}
                        srcImage={item.srcImages && item.srcImages.length > 0 ? item.srcImages[0] : null}
                        altImage={item.name}
                        name={item.name}
                        summary={item.trailer}
                        price={item.price}
                        currencyUnit={item.currencyUnit}
                        id={item.id}
                        onClickDetail={this.props.onClickDetail}
                    />
                );
            });

        return <div className="card-columns content-product-list">{productTemplates}</div>;
    }
}

export default ProductListComponent;
