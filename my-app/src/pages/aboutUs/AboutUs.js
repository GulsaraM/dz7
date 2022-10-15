import React from 'react';
import About from "../../components/about/About";

function AboutUs(props) {

    const info = {
        title: "my company",
        text:"lorem bla bla bla"
    }

    return (
        <>
            <h1>About Us</h1>
            <About inform={info}/>
        </>
    );
}

export default AboutUs;