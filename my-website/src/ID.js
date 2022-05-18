import React from 'react';
import './ID.css';

function ID() {
  return (
    <div className='id'>
        <div className='id_block'>
            <h1>Top Features (Ranked by User Need)</h1>
            <h2>1. Small Size (Around 50 mm Width)</h2>
            <p>
                With it's compact size, the users can monitor even the smallest of plants. 
                This applies to owners of extremely small plants like succulents, Bonsai trees, and more as 
                the small size won't obstruct plant growth or negatively impact plant health. 
            </p>
            <h2>2. Long Lasting Battery Life</h2>
            <p>
                Users don't have to worry about constantly replacing the powersource. This is targeted to 
                all consumers of this product as having to not constantly replace the battery provides convience and prevents 
                unecessary bothering to the plant.
            </p>
            <h2>3. Real Time Notifications</h2>
            <p>
                This applies to all consumers in that by having real-time notifications lets users precisely monitor and maintain 
                their plant's well-being. 
            </p>
            <h2>4. Setup With a Click</h2>
            <p>
                Although this applies to all users, this is target towards non-technologically savvy individuals who want/need an 
                out-of-the-box ready product.
            </p>
            <h2>5. Customizable Shells</h2>
            <p>
                This applies to owners of many plants and many PlantPals as having customizable shells helps differentiate the different 
                measuring devices and provides better aesthetics.
            </p>
        </div>
        <div className='id_block'>
            <h1>Key Product Interactions</h1>
            <p>
                The key product interactions includes the easy set-up and the simple UI. Easy set-up follows already in place mental models, just 
                copy the code printed on the measuring device into the app and the device will start tracking. The UI for the app follows Don Norman's 
                five key principles, because the design is literally only two pages (a menu for each measuring device and one for more information for each measuring device) 
                that can be swapped easily back and forth, making our UI easy to learn, efficient, memorable, good at reducing user error, and guaranteeing user satisfaction.
            </p>
        </div>
    </div>
  )
}

export default ID