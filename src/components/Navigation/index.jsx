import React, { useContext, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Hamburger from 'hamburger-react'

import StoreContext from '~/context/StoreContext'
import Logo from '../../images/svg/logo.svg'
import Menu from '../menu/menu'
import Cart from '../../images/svg/cart.svg'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}


const Navigation = ({ siteTitle }, childMenu) => {
  const [hasItems, quantity] = useQuantity()

  const [isOpen, setIsOpen] = useState(false)
  function toggleMenu() {
    childMenu.open();
    setIsOpen(!isOpen);
  }
  return (
    <header className="header" >
      <>
        <Link to="/">
          <Logo/>
        </Link>
        
        
        <div className="burgerContainer">
          <Link to="/cart">
            {hasItems && <span>{quantity}</span>}
            <Cart />
          </Link>
          <Menu ref={el => (childMenu = el)} />
          <>
            <button className={`MenuButton ${isOpen ? "menuOpen" : null}`} onClick={() => toggleMenu()}>
              <Hamburger toggled={isOpen} />
            </button>
          </>
        </div>
      </>
    </header>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
