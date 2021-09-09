import React from 'react'

import Cart from '~/components/Cart'
import Layout from '../layouts'

const CartPage = (location) => (
  <Layout location={location}>
    <div className="cart">
      <h1>Cart</h1>
      <Cart />
    </div>
  </Layout>
)

export default CartPage
