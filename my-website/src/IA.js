import React from 'react';
import './IA.css';

function IA() {
  return (
    <div className='ia'>
        <div className='ia_block'>
            <h1>Assignment #5 (Part 1)</h1>
            <ol>
                <li>
                    <h2>
                        What basic information does a typical user need to have access 
                        on first interaction with your product?
                    </h2>
                    <p>
                        On first interaction, the typical user needs to be able to immediately 
                        add their personal PlantPal measuring devices to the app. This will be done 
                        with a minimal task bar where users can enter their device's unique product code 
                        and begin tracking immediately. 
                    </p>
                </li>
                <li>
                    <h2>
                        What IA Design Principles (Dan Brown) are important for your 
                        product?
                    </h2>
                    <p>
                        Our UI follows the Principle of Choices, offering users only choices and information related 
                        to the well-being of their plants, and the ability to add/delete meters from their tracking list. 
                        Our app also follows the Principle of Disclosure, only showing minimal information about each tracker, 
                        until a specific tracker is selected to reveal more information. We follow the Principle of Exemplars, 
                        because our UI is very predictable. Lastly, our product has room for growth, because the product itself is
                         very simple, and more complex features and improvements can be added in the future.
                    </p>
                </li>
                <li>
                    <h2>
                        What structural Organizational Principle(s) make(s) the most 
                        the sense for your product?
                    </h2>
                    <p>
                        Hierarchical and Chronological makes the most sense for our product, because the menu displays all possible trackers 
                        for the user to decide from, and also orders them and gives notifications based off of timesensitive information about 
                        the plants.
                    </p>
                </li>
            </ol>
        </div>
        <div className='ia_block'>
            <h1>Assignment #5 (Part 2)</h1>
            <p>
                Following the <b>Principle of Color and Constant</b>, I completely changed the color schema of my website, to provide more contrast between the background, 
                navbar, and text-bubbles. I implemented the idea of <b>alignment</b> in my Empathy Map, aligning all of the titles with one another. Lastly, I added and even 
                changed images to give the UI page better <b>spacing</b>.
            </p>
        </div>
    </div>
  )
}

export default IA