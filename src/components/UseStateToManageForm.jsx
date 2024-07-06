import React, { useState } from 'react'
import FormDetails from './FormDetails'

const UseStateToManageForm = () => {
    const [formObj, setFormObj] = useState({
        fName : "",
        lName : "",
        city : "",
        gender : ""
    })
    const[isSubmitted, setIsSubmitted] = useState(false)
    const inputChange = (property, value) => {
        setFormObj(prev => ({...prev, [property] : value}))
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitted(true)
    }
  return (
    <>
        <div className="container">
            <h1 style={{textAlign : "center"}}>Complete the form</h1>
            <form onSubmit={formSubmit}>
                <input required onChange={(e) => inputChange("fName", e.target.value)} value={formObj.fName} placeholder='First Name'/><br/>
                <input required onChange={(e) => inputChange("lName", e.target.value)} value={formObj.lName} placeholder='Last Name'/><br/>
                <select required onChange={(e) => inputChange("city", e.target.value)} value={formObj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Manikgonj">Manikgonj</option>
                </select>
                <br/>
                <input required onChange={() => inputChange("gender", "Male")} checked={formObj.gender === "Male"} type='radio' name = "gender"/>Male
                <input required onChange={() => inputChange("gender", "Female")} checked={formObj.gender === "Female"} type='radio' name = "gender"/>Female
                <br/>
                <button type='submit'>Submit</button>
            </form>
            {isSubmitted ? <FormDetails data = {formObj}/> : <></>}
        </div>
    </>
  )
}

export default UseStateToManageForm