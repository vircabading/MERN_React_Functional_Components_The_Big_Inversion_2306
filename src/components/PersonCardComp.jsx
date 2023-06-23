import React from 'react';
import "../App.css";

const PersonCardComp = props => {
    const firstName = props.firstName;
    const lastName = props.lastName;
    const weapon = props.weapon;
    const maskColor = props.maskColor;

    const personCard = {
        backgroundColor: maskColor,
        borderRadius: "25px",
        padding: "10px",
        margin: "10px",
        color: "white"
    }

    return (
        <div style={personCard} className='rflex' >
            <img src="https://placekeanu.com/150/150" className="mag10 roundBorder" />
            <div>
                <p><span className='thick'>Name:</span> {firstName} {lastName}</p>
                <p><span className='thick'>Weapon:</span> {weapon}</p>
                <p><span className='thick'>Mask Color:</span> {maskColor}</p>
            </div>
        </div>
    )
}

export default PersonCardComp;