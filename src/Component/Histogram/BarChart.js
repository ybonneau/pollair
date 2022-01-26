import React, { useEffect } from "react";
import * as d3 from "d3";
import UserProfile from "../UserProfile/UserProfile";
import "./BarChart.css";

function BarChart() {
  const data = UserProfile.getTrajets().find(
    (trajet) => trajet.cleaned_section._id.$oid === UserProfile.getSelect()
  );

  const dataSet = data.locations;

  let filter;
  switch (UserProfile.getFilter()) {
    case "PM10":
      filter = "code_pm10";
      break;
    case "PM2.5":
      filter = "code_pm25";
      break;
    case "O3":
      filter = "code_o3";
      break;
    case "NO2":
      filter = "code_no2";
      break;
    case "SO2":
      filter = "code_so2";
      break;
    default:
  }

  console.log(dataSet)
  useEffect(() => {
    d3.select("#pgraphs")
      .selectAll("p")
      .data(dataSet)
      .enter()
      .append("p")
      .text(
        (dt) => dt.data.idx + ": " + dt.data[filter]
      );

    // Bar Chart:
    const getMax = 500;

    // Create each of the bars and then set them all to have the same height(Which is the max value)
    d3.select("#BarChart")
      .selectAll("div")
      .data(dataSet)
      .enter()
      .append("div")
      .classed("bar", true)
      .style("height", `${getMax}px`);

    //Transition the bars into having a height based on their corresponding count value
    d3.select("#BarChart")
      .selectAll(".bar")
      .transition()
      .duration(1000)
      .style("height", (bar) => `${bar.data[filter] * 100}px`)
      .style("width", "150px")
      .style("margin-right", "10px")
      .delay(300); // Fix their width and margin
  });

  return (
    <div className="App">
      <div id="pgraphs"></div>
      <div id="BarChart"></div>
    </div>
  );
}

export default BarChart;
