function drawInteractiveScatterplot(data) {
    d3.select("#scatterplot_interactive").selectAll("*").remove();

    const svg = d3.select("#scatterplot_interactive")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    xScaleS
        .domain([0, d3.max(data, d => d.star)])
        .range([0, innerWidth])
        .nice();

    yScaleS
        .domain([0, d3.max(data, d => d.energyConsumption)])
        .range([innerHeight, 0])
        .nice();

    innerChartS
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", 5)
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.6);

    const bottomAxis = d3.axisBottom(xScaleS);
    const leftAxis = d3.axisLeft(yScaleS)
        .tickFormat(d3.format(","));

    innerChartS
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    innerChartS
        .append("g")
        .call(leftAxis);

    svg
        .append("text")
        .text("Star Rating")
        .attr("x", width - 20)
        .attr("y", height - 20)
        .attr("text-anchor", "end")
        .attr("class", "axis-label");

    svg
        .append("text")
        .text("Labelled Energy Consumption (kWh/year)")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .attr("class", "axis-label");

    const legendData = ["LED", "LCD", "OLED"];

    const legend = svg
        .append("g")
        .attr("transform", `translate(${width - 140}, ${margin.top + 20})`);

    legend
        .selectAll("rect")
        .data(legendData)
        .join("rect")
        .attr("x", 0)
        .attr("y", (d, i) => i * 25)
        .attr("width", 14)
        .attr("height", 14)
        .attr("fill", d => colorScale(d));

    legend
        .selectAll("text")
        .data(legendData)
        .join("text")
        .attr("x", 25)
        .attr("y", (d, i) => i * 25 + 12)
        .text(d => d)
        .attr("fill", "#3e2f1c")
        .attr("font-size", "14px");
}