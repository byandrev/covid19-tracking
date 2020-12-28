import '../styles/ChartData.css';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from "numeral";

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;

  for (let date in data) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[date];
  }
  return chartData;
};

const options = {
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function ChartData({ data, type, colorBG }) {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if(data) {
      let chartData = buildChartData(data, type);
      setCases(chartData);
    }
  }, [data]);

  return(
    <div className="ChartData">
      <Line
        data={{
          datasets: [{
            label: type,
            backgroundColor: colorBG,
            borderColor: colorBG,
            data: cases,
          }],
        }}
        options={options}
      />
    </div>
  );
}

export default ChartData;
