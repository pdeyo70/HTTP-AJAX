import React from 'react';
import Card from './Card.js';

const CardCont = (props) => {
    return (
        <section>
        {props.friends.map((name, index) => {
            return <Card name = {name}
                            key = {index} />
        })}
        </section>
    )
}

export default CardCont