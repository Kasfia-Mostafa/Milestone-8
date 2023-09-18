import { LineChart as LC, Line ,XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
    },
    { id: 2, name: "Bob", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 78,
      physicsMarks: 85,
      chemistryMarks: 80,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 65,
      physicsMarks: 72,
      chemistryMarks: 68,
    },
    { id: 5, name: "Eve", mathMarks: 88, physicsMarks: 92, chemistryMarks: 86 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 75,
      physicsMarks: 80,
      chemistryMarks: 78,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 95,
      physicsMarks: 98,
      chemistryMarks: 94,
    },
    {
      id: 8,
      name: "Helen",
      mathMarks: 70,
      physicsMarks: 75,
      chemistryMarks: 72,
    },
    { id: 9, name: "Ivy", mathMarks: 84, physicsMarks: 90, chemistryMarks: 88 },
    {
      id: 10,
      name: "Jack",
      mathMarks: 91,
      physicsMarks: 87,
      chemistryMarks: 89,
    },
  ];

  return (
    <div>
      <LC width={800} height={400} data={studentData}>
        <XAxis dataKey='name'/>
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke='red' ></Line>
        <Line dataKey={'physicsMarks'} stroke='yellow'></Line>
      </LC>
    </div>
  );
};

export default LineChart;
