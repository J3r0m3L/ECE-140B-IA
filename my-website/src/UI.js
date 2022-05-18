import React from 'react';
import './UI.css';
import ui_mockup1 from './images/UI_mockup1.jpg';
import ui_mockup2 from './images/UI_mockup2.jpg';
import ui_mockup3 from './images/UI_mockup3.jpg';
import ui_mockup4 from './images/UI_mockup4.JPG';
import ui_mockup5 from './images/UI_mockup5.JPG';
import FittsLaw1 from './images/FittsLaw1.webp';
import FittsLaw2 from './images/FittsLaw2.png';
import HicksLaw1 from './images/HicksLaw1.jpg';
import HicksLaw2 from './images/HicksLaw2.jpg';
import JacobsLaw1 from './images/JacobsLaw1.jpg';
import JacobsLaw2 from './images/JacobsLaw2.jpg';

function UI() {
  return (
    <div className='ui'>
        <div className='ui_block'>
            <h1>UI Mock-up</h1>
            <div className='ui_blockUpper'>
                <img src={ui_mockup1}/>
                <img src={ui_mockup2}/>
                <img src={ui_mockup3}/>
            </div>
            <div className='ui_blockLower'>
                <img src={ui_mockup4}/>
                <img src={ui_mockup5}/>
            </div>
        </div>
        <div className='ui_block'>
            <h1>Laws of UI Design</h1>
            <h2>Fitt's Law</h2>
            <p>
                This is a good example of Fitt's Law, which states target acquisition
                is a function of target size and distance. As seen the thermostat has improved 
                in this regard as the dial has increased in size, improving target acquisition.
            </p>
            <div className='ui_blockImage'>
                <img src={FittsLaw1}/>
                <img src={FittsLaw2}/>
            </div>
            <h2>Hick's Law</h2>
            <p>
                This is a good example of Hick's Law, which states decision making time increases
                the number/complexity of options. As seen the TV remote follows this as the number of
                buttons has drastically been reduced, decreasing decision making time. 
            </p>
            <div className='ui_blockImage'>
                <img src={HicksLaw1}/>
                <img src={HicksLaw2}/>
            </div>
            <h2>Jacob's Law</h2>
            <p>
                This is a good example of Jacob's Law, which states users want your system to work  
                the same way as the system they already know. Even though technology has improved, giving colored displays and 
                faster processing speeds, the location of buttons and the buttons themselves haven't changed.
            </p>
            <div className='ui_blockImage'>
                <img src={JacobsLaw1}/>
                <img src={JacobsLaw2}/>
            </div>
        </div>
    </div>
  )
}

export default UI