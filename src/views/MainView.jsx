import React from 'react';
import PersonCardComp from '../components/PersonCardComp';

const MainView = props => {
    return (
        <div>
            <h3>MainView</h3>
            <br/>
            <PersonCardComp
                firstName= "Leonardo"
                lastName= "Turtle"
                weapon= "Katana"
                maskColor= "blue"
             />
        </div>
    )
}

export default MainView;