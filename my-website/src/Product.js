import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <h1>Product Page</h1>
        <h2>who is it for</h2>
        <p>New to intermediate plant owners</p>
        <h2>what it does</h2>
        <p>
          It measures the health of the plant and notifies the plant owner
          if the plant environment could be better.
        </p>
        <h2>how it works</h2>
        <p>
          It consists of a measuring tool placed into the soil and a mobile app
          that recieves the data via Bluetooth.
        </p>
        <h2>key benefits</h2>
        <ul>
          <li>Easy to use</li>
          <li>Accurately measures key plant health factors</li>
          <li>Notifies in real time through mobile app</li>
        </ul>
    </div>
  )
}

export default Product