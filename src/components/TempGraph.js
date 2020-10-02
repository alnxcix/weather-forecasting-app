import React, { useEffect } from "react";
import moment from "moment";
import Chart from "chart.js";
let TempGraph = ({ current, hourly }) => {
  let nextHours = hourly
    .filter(({ dt }) => moment.unix(dt).isAfter(moment.unix(current.dt)))
    .slice(0, 7);
  useEffect(() => {
    new Chart(document.getElementById("chart").getContext("2d"), {
      type: "line",
      data: {
        labels: ["Now"].concat(
          nextHours.map(({ dt }) => [
            moment.unix(dt).format("hh A"),
            moment.unix(dt).format("MMM DD"),
          ])
        ),
        datasets: [
          {
            scaleFontColor: "rgba(0, 0, 0, 1)",
            label: "Temperature",
            data: [current.temp].concat(nextHours.map(({ temp }) => temp)),
            backgroundColor: ["rgba(220, 53, 69, 0.7)"],
            borderColor: Array(8).fill("rgba(0, 0, 0, 1)"),
            borderWidth: 0.5,
          },
          {
            scaleFontColor: "rgba(0, 0, 0, 1)",
            label: "Feels like",
            data: [current.feels_like].concat(
              nextHours.map(({ feels_like }) => feels_like)
            ),
            backgroundColor: ["rgba(220, 53, 69, 0.3)"],
            borderColor: Array(8).fill("rgba(0, 0, 0, 1)"),
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [
            {
              gridLines: { drawBorder: false },
              ticks: { callback: (tick) => `${tick}°C` },
            },
          ],
        },
        tooltips: { callbacks: { label: (label) => `${label.yLabel}°C` } },
      },
    });
  });
  return (
    <div className="bg-warning card h-100 w-100">
      <div className="card-body">
        <canvas id="chart" className="h-100 w-100" />
      </div>
    </div>
  );
};
export default TempGraph;
