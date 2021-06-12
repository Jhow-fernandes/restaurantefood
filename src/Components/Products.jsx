import React from 'react';
import Productobox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
    return (
        <div id="products">
            <h1>ESCOLHE & APROVEITE</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorum aliquam labore, illo vero, eius temporibus qui tenetur natus eveniet, 
                esse similique aut. Quasi esse ipsum tenetur nulla est aliquid?</p>
            <div className="a-container">
                <Productobox image={pimage1} title="Luger Bueger"/>
                <Productobox image={pimage2} title="Le Pigeon Bueger"/>
                <Productobox image={pimage1} title="Luger Bueger"/>
            </div>    
        </div>
    )
}

export default Products
