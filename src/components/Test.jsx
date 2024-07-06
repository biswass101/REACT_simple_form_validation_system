import React from 'react'
import './Test.css'
const Test = ({data}) => {
  console.log(data);
  return (
    <div className="card">
        <h1>Title: <span>{data.title}</span></h1>
        <h3>{data.des}</h3>
        <h4>Price: $<span>{data.price}</span></h4>
    </div>
  )
}

export default Test