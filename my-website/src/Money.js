import React from 'react';
import './Money.css';

function Money() {
  return (
    <div className='money'>
        <div className='money_block'>
            <h1>Costs:</h1>
            <p>
                Once production is scaled, we expect the raw cost of our products to be around $10 for the PCB with sensors and $15 cents for each of the flags. We hope to sell 
                sell the sensors for $20 each and the flags in 3-packs for $2. Hardware stores usually keep %60 from sales and Amazon takes around %15 from sales profit.
            </p>
        </div>
        <div className='money_block'>
            <h1>Revenue</h1>
            <p>
                Our product will be sold as a one-time purchase at hardware and online retailers including: Amazon and Lowes. Plantpal has a customized 
                flags/markers that can be purchased through the same channels. Our product comes with a free PlantPal app that reads present moisture level, temperature, 
                and light. The app will be ad-free for better user experience, and it will use the data to provide tips and tricks on how to improve plant growth based on current 
                conditions. Users can also opt into a premium subscription plan that stores this data so it can be tracked overtime. With this, our app can provide accurate instructions for 
                healthy plant growth.
            </p>
            <p>
                Based off of research we expect an on average profit of $4.90 (49%) per sensor and $0.75 (67%) per pack of flags. Assuming that 100 products are sold on the daily 
                and 50% of sales include a purchase of a flag we can expect to see around $192,000 profit in sales anually. We plan to charge $4 per month for our premium subscription plan, and 
                we can expect to see $172,000 in revenue from the subscriptions. In total this will result around $360,000 in profit annually.
            </p>
        </div>
    </div>
  )
}

export default Money;