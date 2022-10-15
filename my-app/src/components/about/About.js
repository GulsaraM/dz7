import React from 'react';

function About(props) {
    return (
        <ul>
            <li>{props.inform.title}</li>
            <li>{props.inform.text}</li>
        </ul>
    );
}

export default About;