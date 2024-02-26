import React, { useState } from "react";

//Component that calculate the average shoesize for Female and Male familymembers
const AvgShoeSize = ({ allFamilyMembers }) => {
  const [isVisible, setIsVisible] = useState(false); //state variable used to control the visibility of the component

  const toggleBoxVisibility = () => {
    setIsVisible(!isVisible); // Toggles the visibility state
  };
  let sumF = 0;
  let sumM = 0;
  const femaleAges = [];
  const maleAges = [];
  const allAges = allFamilyMembers.map((member) => {
    //mapping through the array of all familymembers to divide them into Male or Female
    if (member.Gender === "F") {
      femaleAges.push(member.Age);
      sumF += member.Age;
    } else {
      maleAges.push(member.Age);
      sumM += member.Age;
    }
  });
  let avgF = sumF / femaleAges.length; //Calculate the average shoesize for females
  let avgM = sumM / maleAges.length; //Calculate the average shoesize for males

  return (
    <div className="avg-shoe-size-container">
      <button className="button" onClick={toggleBoxVisibility}>
        {isVisible ? "Close" : " Click here for Fun Fact"}
      </button>
      {isVisible && (
        <div className="avg-shoe-size-container">
          {
            <div>
              <div className="avg-shoe-size-container">
                <h3>The Average Shoesize for all female family members is:</h3>
                <p className="number">{avgF}</p>
              </div>
              <div className="avg-shoe-size-container">
                <h3>The Average Shoesize for all male family members is:</h3>
                <p className="number">{avgM}</p>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default AvgShoeSize;
