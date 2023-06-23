import React from 'react';
import PersonCardComp from '../components/PersonCardComp';

const MainView = props => {
    return (
        <div>
            <br />
            <PersonCardComp
                firstName="Leonardo"
                lastName="Turtle"
                weapon="Katana"
                maskColor="blue"
                imgLoc = "https://i.imgur.com/q9cV36O.jpg"
            />
            <PersonCardComp
                firstName="Raphael"
                lastName="Turtle"
                weapon="Sai"
                maskColor="red"
                imgLoc = "https://i.imgur.com/EM11Hfh.jpg"
            />
            <PersonCardComp
                firstName="Michelangelo"
                lastName="Turtle"
                weapon="Nunchaku"
                maskColor="orange"
                imgLoc = "https://i.imgur.com/vCWRdmh.jpg"
            />
            <PersonCardComp
                firstName="Donatello"
                lastName="Turtle"
                weapon="Bo"
                maskColor="purple"
                imgLoc = "https://i.imgur.com/6EjAniA.jpg"
            />
        </div>
    )
}

export default MainView;