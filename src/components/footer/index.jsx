import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive"
import { Collapse } from 'react-collapse';

import Arrow from '../../images/svg/arrow.svg'
import Logo from '../../images/svg/logoWhite.svg'
import { Link } from 'gatsby';


import Ig from '../../images/svg/instagram.svg'
import Fb from '../../images/svg/facebook.svg'

const Buying = () => (
    <div>
        <Link to="/shop" > Shop </Link>
        <Link to="/terms-of-service" > Terms of Service </Link>
        <Link to="/privacy-policy" > Privacy Policy  </Link>
        <Link to="/refund-policy" > Refund Policy </Link>
        <Link to="/shipping-policy" > Shipping Policy </Link>
    </div>
);

const Community = () => (
    <div>
        <Link to="/blog" > Blog </Link>
        <Link to="/contact" > Contact </Link>
        <Link to="/about" > About </Link>
    </div>
);

const Social = () => (
    <div className="socialFooter">
        <a href="https://www.facebook.com/theshop.co.id/" target="_blank" rel="noopener noreferrer"> 
            <Fb className="fb" /> Facebook
        </a>
        <a href="https://www.instagram.com/islamtshirt/" target="_blank" rel="noopener noreferrer">
            <Ig className="ig"/> Instagram
        </a>
    </div>
);

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenCom, setIsOpenCom] = useState(false)
    const [isOpenSocial, setIsOpenSocial] = useState(false)
    const isTable = useMediaQuery({ query: '(min-width: 767px)' })
    return (
        <footer className="footer">
            <div className="buyingFooter">
                <div className="buttonFooter" onClick={() => { setIsOpen(!isOpen); }}>
                    <button className={`MenuButton`} >
                        BUYING
                    </button>
                    <Arrow className={isOpen ? `open` : null} />
                </div>
                <Collapse isOpened={isOpen}>
                    <Buying />
                </Collapse>
            </div>
            <div className="comFooter">
                <div className="buttonFooter" onClick={() => { setIsOpenCom(!isOpenCom); }}>
                    <button className={`MenuButton`} >
                        COMMUNITY
                    </button>
                    <Arrow className={isOpenCom ? `open` : null} />
                </div>
                <Collapse isOpened={isOpenCom}>
                    <Community />
                </Collapse>
            </div>
            <div className="socialFooter">
                <div className="buttonFooter" onClick={() => { setIsOpenSocial(!isOpenSocial); }}>
                    <button className={`MenuButton`} >
                        SOCIAL
                    </button>
                    <Arrow className={isOpenSocial ? `open` : null} />
                </div>
                <Collapse isOpened={isOpenSocial}>
                    <Social />
                </Collapse>
            </div>

            <Logo className="logoFooter" />

        </footer>
    )
}

export default Footer
