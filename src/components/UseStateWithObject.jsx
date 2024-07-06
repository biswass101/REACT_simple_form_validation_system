import React, { useState } from 'react'

const UseStateWithObject = () => {
    const [myObj, setMyObj] = useState({
        key1 : 'value 1',
        key2 : 'value 2', 
        key3 : 'value 3',
    })

    const change = () =>{
        setMyObj((prev) => ({...prev, key1 : "new value 1", key2 : "new value 2"}))
    }
  return (
    <div>
        <h1>{myObj.key1}</h1>
        <h1>{myObj.key2}</h1>
        <h1>{myObj.key3}</h1>
        <button onClick={change}>Change</button>
    </div>
  )
}

export default UseStateWithObject