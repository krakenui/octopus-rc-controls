import React from 'react';
import './contact-form.component.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false,
            FullName: '',
            Email: '',
            Phone: '',
            Caption: '',
            Content: '',
            isValidFullName: false,
            isValidEmail: false,
            isValidPhone: false,
            isValidCaption: false,
            isValidContent: false,
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const target = event.target;

        if (target) {
            let isValid = true;
            const value = target.value;

            if (!value || value.length === 0) {
                isValid = false;
            }

            this.setState({
                [target.name]: value,
                ['isValid' + target.name]: isValid,
            });
        }
    }

    render() {
        return (
            <div className="contact-form">
                <h3>Gửi thông tin liên hệ</h3>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input
                                    onChange={e => this.onInputChange(e)}
                                    value={this.state.FullName}
                                    className="form-control"
                                    maxLength="50"
                                    name="FullName"
                                />
                                {this.state.isSubmit && !this.state.isValidFullName && (
                                    <label className="error">Họ Tên là thông tin bắt buộc.</label>
                                )}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    onChange={e => this.onInputChange(e)}
                                    className="form-control"
                                    type="email"
                                    maxLength="50"
                                    name="Email"
                                    value={this.state.Email}
                                />
                                {this.state.isSubmit && !this.state.isValidEmail && (
                                    <label className="error">Email liên hệ là thông tin bắt buộc.</label>
                                )}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input
                                    onChange={e => this.onInputChange(e)}
                                    value={this.state.Phone}
                                    className="form-control"
                                    maxLength="20"
                                    name="Phone"
                                />
                                {this.state.isSubmit && !this.state.isValidPhone && (
                                    <label className="error">Số điện thoại là thông tin bắt buộc.</label>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Tiêu đề</label>
                                <input
                                    onChange={e => this.onInputChange(e)}
                                    value={this.state.Caption}
                                    className="form-control"
                                    name="Caption"
                                    maxLength="200"
                                />
                                {this.state.isSubmit && !this.state.isValidCaption && (
                                    <label className="error">Tiêu đề là thông tin bắt buộc.</label>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Nội dung liên hệ</label>
                        <textarea
                            onChange={e => this.onInputChange(e)}
                            value={this.state.Content}
                            className="form-control"
                            rows="5"
                            maxLength="2000"
                            name="Content"
                        />
                        {this.state.isSubmit && !this.state.isValidContent && (
                            <label className="error">Nội dung là thông tin bắt buộc.</label>
                        )}
                    </div>
                    <div className="form-group action">
                        <input
                            onClick={e => {
                                e.preventDefault();
                                this.setState({
                                    isSubmit: true,
                                });

                                const isValid =
                                    this.state.isValidFullName &&
                                    this.state.isValidEmail &&
                                    this.state.isValidPhone &&
                                    this.state.isValidCaption &&
                                    this.state.isValidContent;

                                const data = {
                                    fullName: this.state.FullName,
                                    email: this.state.Email,
                                    phone: this.state.Phone,
                                    caption: this.state.Caption,
                                    content: this.state.Content,
                                };

                                if (!isValid) {
                                    return;
                                }

                                this.props.onSubmit && this.props.onSubmit(e, isValid, data);
                                
                                this.setState({
                                    isSubmit: false,
                                    FullName: '',
                                    Email: '',
                                    Phone: '',
                                    Caption: '',
                                    Content: '',
                                    isValidFullName: false,
                                    isValidEmail: false,
                                    isValidPhone: false,
                                    isValidCaption: false,
                                    isValidContent: false,
                                });
                            }}
                            type="submit"
                            value="Gửi thông tin"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
