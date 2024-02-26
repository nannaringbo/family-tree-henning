import React, { useState } from "react";

//Displays FamilyMEmber details
function FamilyMember({ name }) {
  //state that tracks whether details should be visible or not (depending on mousehover)
  const [details, setDetails] = useState(false);
  return (
    <div>
      <h2
        className="family-member-title"
        onMouseEnter={() => {
          setDetails(true);
        }}
        onMouseLeave={() => {
          setDetails(false);
        }}
      >
        {name.Name}
      </h2>
      {details && (
        <div className="details-container">
          <p>Details</p>
          <ul className="detail-list">
            <li>Age:{name.Age}</li>
            <li>Shoesize: {name.ShoeSize}</li>
            <li>Gender: {name.Gender}</li>
            <li>
              Children: {name.Children.map((child) => child.Name).join(", ")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FamilyMember;
