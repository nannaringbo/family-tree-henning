import React from "react";
import BarChart from "./components/BarChart";
import AvgShoeSize from "./components/AvgShoeSize";
import Data from "./components/Data";

class App extends React.Component {
  render() {
    const listAllFamilyMembers = []; //array of all familymembers

    return (
      <div className="App">
        <div className="personal-greeting">
          <h3>Hello Henning,</h3>
          <h1>Welcome to your personal Family Tree!</h1>
        </div>
        <Data allFamilyMembers={listAllFamilyMembers} />
        <BarChart allFamilyMembers={listAllFamilyMembers} />
        <AvgShoeSize allFamilyMembers={listAllFamilyMembers} />
      </div>
    );
  }
}
export default App;
