import FamilyMember from "./FamilyMember";

//Component that takes care of all data of the Family members
const Data = ({ allFamilyMembers }) => {
  const lars = {
    Name: "Lars",
    Age: 20,
    ShoeSize: 46,
    Gender: "M",
    Children: [],
  };
  const iben = {
    Name: "Iben",
    Age: 26,
    ShoeSize: 38,
    Gender: "F",
    Children: [],
  };
  const bente = {
    Name: "Bente",
    Age: 46,
    ShoeSize: 37,
    Gender: "F",
    Children: [lars],
  };
  const viggo = {
    Name: "Viggo",
    Age: 47,
    ShoeSize: 42,
    Gender: "M",
    Children: [iben],
  };
  const henning = {
    Name: "Henning",
    Age: 65,
    ShoeSize: 44,
    Gender: "M",
    Children: [viggo, bente],
  };

  allFamilyMembers.push(henning, bente, viggo, lars, iben); //Storing the data of each family member into the array that was passed on as a prop from App.js

  return (
    <div className="family-tree-container">
      <FamilyMember name={henning} />
      <div className="first-link">
        <FamilyMember name={bente} />
        <FamilyMember name={viggo} />
      </div>
      <div className="second-link">
        <FamilyMember name={lars} />
        <FamilyMember name={iben} />
      </div>
    </div>
  );
};
export default Data;
