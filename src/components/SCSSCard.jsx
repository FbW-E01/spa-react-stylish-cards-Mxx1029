import React from 'react';
import '../main.scss';
import guineaPig1 from './jack-catalano-6aY_0S-epZQ-unsplash.jpg';

function SCSSCard() {
    return (
        <div className="scssCard">
            {/* <div>
                
            </div> */}
            <img src={guineaPig1}/>
            <div className="line"></div>
            <p>I am SCSS.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla obcaecati neque quas blanditiis nostrum atque tempore.</p>
        </div>
    )
}

export default SCSSCard;