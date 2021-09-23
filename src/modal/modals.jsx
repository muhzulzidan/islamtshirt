

import React, { PureComponent } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

// styled
import StyledModal from "./style/nModal.css.js";
import Close from "../images/svg/close.svg"

const modalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

class Modal extends PureComponent {
    constructor() {
        super()
        this.el = typeof document !== `undefined` ? document.createElement('div') : null
    };

    static defaultProps = {
        id: "",
        modalClass: "",
        // modalSize: "md"
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        modalClass: PropTypes.string,
        // modalSize: PropTypes.string
    };

    state = { fadeType: null };
    background = React.createRef();

    componentDidMount() {

        modalRoot.appendChild(this.el)

        window.addEventListener("keydown", this.onEscKeyDown, false);
        setTimeout(() => this.setState({ fadeType: "in" }), 0);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.isOpen && prevProps.isOpen) {
            this.setState({ fadeType: "out" });
        }
    }

    componentWillUnmount() {

        modalRoot.removeChild(this.el)

        window.removeEventListener("keydown", this.onEscKeyDown, false);
    }

    transitionEnd = e => {
        if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

        if (this.state.fadeType === "out") {
            this.props.onClose();
        }
    };

    onEscKeyDown = e => {
        if (e.key !== "Escape") return;
        this.setState({ fadeType: "out" });
    };

    handleClick = e => {
        e.preventDefault();
        this.setState({ fadeType: "out" });
    };

    render() {
        if (this.el) {
            return ReactDom.createPortal(
                <StyledModal
                    id={this.props.id}
                    className={`wrapper ${"size-" + this.props.modalSize} fade-${this.state.fadeType
                        } ${this.props.modalClass}`}
                    role="dialog"
                    onTransitionEnd={this.transitionEnd}
                >
                    <div className="box-dialog">
                        <div className="box-header">
                            <button onClick={this.handleClick} className="modal-icon-close">
                                <Close />
                            </button>
                        </div>
                        <div className="box-content"
                            style={{
                                paddingTop: 0,
                            }}
                        >
                            {this.props.children}

                        </div>
                    </div>
                    <div
                        role="button"
                        className={`background`}
                        tabIndex={0}
                        aria-label="CLOSE"
                        onMouseDown={this.handleClick}
                        ref={this.background}
                    />
                </StyledModal>,
                this.el
            )
        } else {
            return null
        }

    }
}

export default Modal;
