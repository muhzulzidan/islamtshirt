import React, { Component } from "react";
import Slider from "react-slick";

import Arrow from "../images/svg/arrow.svg"
import { useMediaQuery } from 'react-responsive'
export default class Carausels extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    
    render() {



        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 15000,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };

        // get props from parent and children from props
        const { className, children } = this.props;
        return (
            <div className={className}>
                <Slider ref={c => (this.slider = c)} { ...settings }  >
                    {children}
                </Slider>
                <div className="arrowContrainer">
                    <button className="button-prev" onClick={this.previous}>
                        <Arrow />
                    </button>
                    <button className="button-next" onClick={this.next}>
                        <Arrow />
                    </button>
                </div>
            </div>
        );
    }
}