import React from 'react';
import './form-product.component.scss';

export class FormProductComponent extends React.Component {
    constructor(props) {
        super(props);
        props = { isView: false };
        this.priceInput = React.createRef();
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit} className="form-product">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="name">Tên sản phẩm</label>
                        <input type="text" className="form-control" id="name" placeholder="Tên" disabled={this.props.isView} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="price">Giá</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Giá"
                            disabled={this.props.isView}
                            ref={this.priceInput}
                            onKeyDown={this.priceKeyDown}
                            min="0"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="currecy">Đơn vị tiền tệ</label>
                        <select id="currency" className="form-control" disabled={this.props.isView}>
                            <option value="vnd">VND</option>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Tóm tắt</label>
                    <textarea className="form-control" id="summary" placeholder="Tóm tắt sản phẩm" disabled={this.props.isView} />
                </div>
                <div className="form-group">
                    <label htmlFor="imagePreview">Hình ảnh sản phẩm</label>
                    <input type="file" className="form-control" id="imagePreview" disabled={this.props.isView} />
                    <input hidden id="imageUrl" name="imageUrl" />
                    <button id="uploadImage" name="uploadImage" className="btn btn-info">
                        Upload
                    </button>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormProductComponent;
