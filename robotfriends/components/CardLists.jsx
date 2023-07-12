import React from 'react'
import "./cardlist.css"
import Card from './Card'

const CardLists = ({robots}) => {
  return (
    <div className='scroll'>
        <div className='cardList'> 
        {
            robots.map( (robot, i) => {
                return(
                   <Card 
                   key={i}
                   id={robots[i].id} 
                   name={robots[i].name} 
                   username={robots[i].username} 
                   email={robots[i].email} 
                   />
                )
            })
        }
    </div>
    </div>
  )
}

export default CardLists