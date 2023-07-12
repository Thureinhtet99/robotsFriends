import React from 'react'
import "./card.css"

const Card = ({id, name, username, email}) => {
  return (
    <ul className='card'>
        <div className='cardImg'>
            <img src={`https://robohash.org/${id}`} alt="" />
        </div>
        <li className='cardText'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </li>
    </ul>
  )
}

export default Card