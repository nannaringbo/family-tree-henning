import { Bar } from "@ant-design/charts";

//Component that creates a barchart, using @ant-design/charts, of the agges of all familtmembers
const BarChart = ({ allFamilyMembers }) => {
  const data = allFamilyMembers.map((member) => ({
    //map through array of all family members to isolate 'name' and 'age' data.
    name: member.Name,
    age: member.Age,
  }));

  //consiguration for the barchart from @ant-design/charts
  const config = {
    data,
    height: 400,
    xField: "age",
    yField: "name",
    seriesField: "name",
    color: [
      "rgb(156, 175, 227)",
      "rgba(190, 153, 105, 0.796)",
      "rgba(255, 187, 0, 0.897)",
      "#5e54b9a2",
      "brown",
    ],
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return (
    <div className="barchart-container">
      <h3>Here's an overview of how old your Family Members are </h3>
      <Bar {...config} />
    </div>
  );
};
export default BarChart;
