import React, { useEffect, useState } from 'react';
import "./app.css"
import "./robots"
import CardLists from './components/CardLists';

const App = () => {
    const [robots, setRobots] = useState([])
    const [userinput, setUserInput] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => setRobots(json))
    },[])

    const onSearch = (e) => {
        return(
            setUserInput(e.target.value)
        )
    }

    const filteredRobots = robots.filter(robot => {
        return(
            robot.name.toLowerCase().includes(userinput.toLowerCase())
        )
    })

  return (
    <div>
        <h1 className='robotsFriends'>Robot Friends</h1>
        <div className='searchBox'>
            <input type="search" name="" id="" placeholder='Search Robots' onChange={onSearch}/>
        </div>
        <CardLists robots={filteredRobots}/>
    </div>
  )
}

export default App