import React from 'react';
import './Pivot.css';

function Pivot() {
  return (
    <div className='pivot'>
        <div className='pivot_block'>
            <h1>Pivot 1</h1>
            <p>
                Our first product pivot was a 'Zoom-in Pivot'. Our initial idea was doing too many things 
                at once and was not feasable to do within the time and monetary constraints. We initially proposed 
                a product that could read moisture, hummidity, light, temperature, and be powered by solar cells. We 
                realized that implementing all of these in one quarter would be too expensive and too time consuming, so 
                we decided to remove the hummidity sensor and solar cells. This enabled us to focus on the more important features 
                and drastically decrease our product price as the hummidity sensor was nearly half the cost of the original product.
            </p>
        </div>
        <div className='pivot_block'>
            <h1>Pivot 2</h1>
            <p>
                Our second pivot was a 'Value-Capture Pivot'. After our initial customer research, some patreons pointed out that our 
                product was not very sustainable as a one time purchase model. Because of this, we added customizable flags that are sold 
                separately and we added a subscription based service to access our premium features. The basic features however will remain free.
                With this sales strategy, we will earn enough revenue from the premium services to also be able to provide basic feature for everyone. 
                Lastly, we had to change the price our model. Originally, we planned to sell a pack of four for $5, but through prototyping, we realized 
                this was not sustainable as raw material costs alone was $15. We decided to set the price to around $20 per pack. 
            </p>
        </div>

    </div>
  )
}

export default Pivot