import React from 'react'

const Card = (props) => {
    return (
        <section className='card'>
            <section className='name'>{props.name}</section>
            <section className='age'>{props.age}</section>
            <section className='email'>{props.email}</section>
        </section>
    )
}


export default Card 