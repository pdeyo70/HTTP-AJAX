import React from 'react';


const Card = (props) => {
    return (
        <section>
        {props.friends.map((friend) => {
            return (
            <section className='card'>
                <p className='name'>{friend.name}</p>
                <p className='age'>{friend.age}</p>
                <p className='email'>{friend.email}</p>
            </section>)
        })}
        </section>
    )
}

export default Card