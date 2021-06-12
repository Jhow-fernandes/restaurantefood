import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt minus illum nisi iusto, cumque dolorum unde, mollitia, aspernatur minima a deleniti deserunt officia earum fugiat accusamus nemo veritatis asperiores.
                </p>
                <button>Saiba Mais!</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=""/>
            </div>
        </div>
    )
}

export default About
