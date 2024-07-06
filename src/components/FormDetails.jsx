import React from "react";

const FormDetails = ({data}) => {
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Your Details</h1>
      <ul>
        <li>First Name: {data?.fName}</li>
        <li>Last Name: {data?.lName}</li>
        <li>City: {data?.city}</li>
        <li>Gender: {data?.gender}</li>
      </ul>
    </section>
  );
};

export default FormDetails;
