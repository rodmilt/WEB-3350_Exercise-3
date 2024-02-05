import Chart from "../Chart/Chart";

const HobbiesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const hobby of props.hobbies) {
    const hobbyMonth = hobby.date.getMonth();
    chartDataPoints[hobbyMonth].value += hobby.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default HobbiesChart;
