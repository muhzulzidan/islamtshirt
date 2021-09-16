import React, { useContext } from 'react'
import { Link } from 'gatsby'
import StoreContext from '../../context/StoreContext'
// import { check } from 'prettier'
// import LineItem from './LineItem'


const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  // console.log(item)
  // console.log(item.variant.price)
  const variantImage = item.variant.image ? (
    <img
      className="cart-item__image"
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
    // height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
      option => `${option.name}: ${option.value} `
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div className="lineItem" >
      {/* {console.log(item)} */}
      <div className="imageLine">
        <Link to={`/product/${item.variant.product.handle}/`}>
          {variantImage}
        </Link>
      </div>
      <div className="detailsLine">
        <h3>
          {item.title}
          {`  `}
          {item.variant.title === !'Default Title' ? item.variant.title : ''}
        </h3>
        <p>{selectedOptions}</p>
        <p>{item.quantity}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
        <div className="LineitemPrice"><p>{item.variant.price}</p></div>
    </div>
  )
}

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  { console.log(checkout)}
  // { console.log(checkout.lineItemsSubtotalPrice.amount)}

  return (
    <div className="cartContainer">
      <div className="lineItemContainer">
        {lineItems}
      </div>
      <div className="total">
        <div>
          <h2>Subtotal</h2>
          <p>$ {checkout.subtotalPrice}</p>

        </div>

        <div>
          <h2>Taxes</h2>
          <p>$ {checkout.totalTax}</p>
        </div>

        <div>
          <h2>Total</h2>
          <p>$ {checkout.totalPrice}</p>
        </div>

        <button
          className="checkout"
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </button>
      </div>
    </div>
  )
}

export default Cart
