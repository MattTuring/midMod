import React from 'react';

const Card = ({date, id, name, number, time, deleteReservation}) => {
  console.log(deleteReservation)
  return (
    <article>
    <p>{date}</p>
    <p>{name}</p>
    <p>{number}</p>
    <p>{time}</p>
    <button id={id} onClick={(event) => {deleteReservation(id); console.log(id)}}>Delete</button>
    </article>
  )
}

export default Card
