import React, { useEffect } from "react";
import * as d3 from "d3";
import UserProfile from "../UserProfile/UserProfile";
import "./BarChart.css";
import { Box } from "@mui/material";

function BarChart() {
  const [displayDate, setDisplayDate] = React.useState([])
  useEffect(() => {
    if (UserProfile.getId() !== "") {
      const data = UserProfile.getTrajets().find(
        (trajet) => trajet.cleaned_section._id.$oid === UserProfile.getSelect()
      );

      const date = data.cleaned_section.data.start_local_dt;

      setDisplayDate(
        date.day.toString().padStart(2, "0") +
        "/" +
        date.month.toString().padStart(2, "0") +
        "/" +
        date.year +
        " " +
        date.hour.toString().padStart(2, "0") +
        ":" +
        date.minute.toString().padStart(2, "0")
      )

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

      d3.select("#pgraphs")
        .selectAll("p")
        .data(dataSet)
        .enter()
        .append("p")
        .text((dt) => dt.data.idx + ": " + dt.data[filter]);

      // Create each of the bars and then set them all to have the same height(Which is the max value)
      d3.select("#BarChart")
        .selectAll("div")
        .data(dataSet)
        .enter()
        .append("div")
        .classed("bar", true)
        .style("height", `300px`);

      //Transition the bars into having a height based on their corresponding count value
      d3.select("#BarChart")
        .selectAll(".bar")
        .transition()
        .duration(1000)
        .style("height", (bar) => `${bar.data[filter] * 100}px`)
        .style("width", "300px")
        .style("margin-right", "10px")
        .delay(300); // Fix their width and margin

      let lineData = [];
      for (let i = 0; i < dataSet.length; i++) {
        lineData.push({ x: dataSet[i].data.idx, y: dataSet[i].data[filter] });
      }

      // Create our scales to map our data values(domain) to coordinate values(range)
      let xScale = d3.scaleLinear().domain([0, dataSet.length]).range([0, 500]);
      let yScale = d3.scaleLinear().domain([0, 5]).range([500, 0]); // Since the SVG y starts at the top, we are inverting the 0 and 300.

      // Generate a path with D3 based on the scaled data values
      let line = d3
        .line()
        .x((dt) => xScale(dt.x))
        .y((dt) => yScale(dt.y));

      // Generate the x and y Axis based on these scales
      let xAxis = d3.axisBottom(xScale);
      let yAxis = d3.axisLeft(yScale);

      d3.select("#LineChart")
        .selectAll("path")
        .datum(lineData) // Bind our data to the path element
        .attr(
          "d",
          d3
            .line()
            .x((dt) => xScale(dt.x)) // Set the path to our line function, but where x is the corresponding x
            .y(yScale(0))
        )
        .attr("stroke", "blue")
        .attr("fill", "none"); // Set the y to always be 0 and set stroke and fill color

      d3.select("#LineChart")
        .selectAll("path")
        .transition()
        .duration(1000) // Transition the line over 1 sec
        .attr("d", line); // Set the path to our line variable (Which corresponds the actual path of the data)

      // Append the Axis to our LineChart svg
      d3.select("#LineChart")
        .append("g")
        .style("font-size", "15px")
        .attr("transform", "translate(0, " + 500 + ")")
        .call(xAxis);

      d3.select("#LineChart")
        .append("g")
        .style("font-size", "15px")
        .attr("transform", "translate(0, 0)")
        .call(yAxis);
    }
  });

  return (
    <Box
      sx={{
        width: "50vw",
        margin: "auto",
        textAlign: "center",
        paddingTop: 2,
      }}
    > 
      {displayDate.length &&
      <div className="App">
        <h2>
          {UserProfile.getFilter()} - {displayDate}
        </h2>
        <svg id="LineChart" width={500} height={500}>
          <path />
        </svg>
      </div>
      }
    </Box>
  );
}

export default BarChart;
