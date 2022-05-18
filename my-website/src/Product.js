import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product_block'>
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
      <div className='product_block'>
        <h1>Empathy Map (Beginning Gardening)</h1>
        <table>
          <tr>
            <th>
              <h2>Says</h2>
              <ul>
                <li>Where should I start?</li>
                <li>I want something that can walk me through the process</li>
                <li>Where do I get reliable information?</li>
              </ul>
            </th>
            <th>
              <h2>Thinks</h2>
              <ul>
                <li>Am I wasting too much time researching?</li>
                <li>My plant isn't growing, what am I missing?</li>
                <li>Maybe this isn't the best tool?</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>
              <h2>Does</h2>
              <ul>
                <li>Checks multiple websites for information</li>
                <li>Asks friends and other experience gardners for help</li>
                <li>Compares products for affordability and utility</li>
              </ul>
            </th>
            <th>
              <h2>Feels</h2>
              <ul>
                <li>Overwhelmed</li>
                <li>Unsure who to trust</li>
                <li>Anxious</li>
              </ul>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Product