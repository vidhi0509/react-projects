import React, { useState } from 'react'

const Profile = (props) => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>name: {props.name}</h3>
      <h3>count: {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount+1)}>count</button>
      <h1>----------</h1>
    </div>
  )
}

export default Profile
