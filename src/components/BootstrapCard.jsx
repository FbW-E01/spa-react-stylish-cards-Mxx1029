import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BSCard from 'react-bootstrap/Card';
import guineaPig3 from './scott-webb-ttCFWHrmWH4-unsplash.jpg';

function BootstrapCard() {
    return (
        <BSCard style={{width: '18rem', margin: '2rem'}}>
            <BSCard.Img variant="top" src={guineaPig3}></BSCard.Img>
            <BSCard.Body>
                <BSCard.Text className="ps-2 pt-4">
                    I am a Bootstrap card!
                </BSCard.Text>
            </BSCard.Body>
        </BSCard>
    )
}

export default BootstrapCard;