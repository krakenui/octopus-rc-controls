import React from 'react';

export class ProductListAdminComponent extends React.Component {
    d;
    render() {
        const productTemplates =
            this.props.dataSource &&
            this.props.dataSource.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.summary}</td>
                        <td className="command-area">
                            <button className="btn btn-light" onClick={this.editProduct.bind(this, item.id)}>
                                <i className="fas fa-edit" />
                            </button>
                            <button className="btn btn-light" onClick={this.detailProduct.bind(this, item.id)}>
                                <i className="fas fa-info" />
                            </button>
                            <button className="btn btn-light" onClick={this.deleteProduct.bind(this, item.id)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </td>
                    </tr>
                );
            });
        return (
            <table className="table table-dark table-product">
                <thead>
                    <tr>
                        <th>Tên sảm phẩm</th>
                        <th>Giá</th>
                        <th>Tóm tắt</th>
                    </tr>
                </thead>
                <tbody>{productTemplates}</tbody>
            </table>
        );
    }
}

export default ProductListAdminComponent;
