import React from 'react';
import Slider from 'react-slick';

export default class CarouselComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
            },
        };

        this.carouselElmRef = React.createRef();
    }

    componentWillMount() {
        if (this.props.settings) {
            this.setState({
                settings: this.props.settings,
            });
        }
    }

    render() {
        const itemTemplates = this.props.src
            ? this.props.src.map((item, idx) => {
                  return (
                      <div className="carousel-item" key={idx}>
                          <img src={item.image} alt={item.title} className="carousel-image"/>
                          <div className="row altText">
                              <div className="col-md-5">
                                  <h3 className="title">{item.title}</h3>
                                  <p className="text">{item.text}</p>
                              </div>
                          </div>
                          {this.props.children}
                      </div>
                  );
              })
            : [];

        return (
            <div className="carousel">
                <Slider ref={this.carouselElmRef} {...this.state.settings}>
                    {itemTemplates}
                </Slider>
            </div>
        );
    }
}
