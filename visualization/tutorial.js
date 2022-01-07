/* eslint-disable no-undef */

const scroller = scrollama();
//console.log(scroller);
const height = 600;
const width = 600;
const margin = { left: 50, right: 50, top: 50, bottom: 50 };

const colors = ["aquamarine", "lightblue", "green", "pink"];
const data = [50, 41, 33, 35, 23, 22, 45, 23, 34];
const newData = [5, 23, 12, 20, 50, 10, 33, 23, 42];

const figure = document.querySelector("figure");

const xScale = d3
  .scaleBand()
  .domain(data.map((d, i) => i))
  .range([margin.left, width - margin.right]);

const yScale = d3.scaleLinear().domain([0, 100]).range([height, margin.bottom]);

const svg = d3.select("svg");
const bars = svg.append("g").selectAll("bars").data(data);

bars
  .join("rect")
  .attr("class", "bar")
  .attr("width", 50)
  .attr("fill", "goldenrod")
  .attr("height", (d) => height - yScale(d))
  .attr("x", (d, i) => xScale(i))
  .attr("y", (d) => yScale(d));

svg
  .append("g")
  .attr("transform", `translate(0,${height + 5})`)
  .call(d3.axisBottom(xScale));

svg
  .append("g")
  .attr("transform", `translate(${margin.left - 5}, 0)`)
  .call(d3.axisLeft(yScale));

scroller
  .setup({
    step: ".step",
    progress: true
  })
  .onStepEnter((response) => {
    //console.log(response.index);
    figure.style.backgroundColor = colors[response.index];

    if (response.index > 2 && response.index < 4) {
      //console.log("!");
      d3.selectAll(".bar")
        .data(newData)
        .transition()
        .duration(1000)
        .attr("y", (d) => yScale(d))
        .attr("height", (d) => height - yScale(d));
    } else {
      d3.selectAll(".bar")
        .data(data)
        .transition()
        .duration(1000)
        .attr("fill", "goldenrod")
        .attr("y", (d) => yScale(d))
        .attr("height", (d) => height - yScale(d));
    }
  })
  .onStepProgress((response) => {
    //console.log(response.index + response.progress);
  })
  .onStepExit((response) => {
    //console.log(response.index);
  });
