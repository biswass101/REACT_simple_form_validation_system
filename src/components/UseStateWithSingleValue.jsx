import React, { useState } from 'react'
const UseStateWithSingleValue = () => {
  const [number, setNumer] = useState(0)
  console.log("Rendered");
  return (
    <div>
        <h1>Number: {number}</h1>
        <button onClick={() => setNumer(number + 3)}>Click!</button>
    </div>
  )
}

export default UseStateWithSingleValue