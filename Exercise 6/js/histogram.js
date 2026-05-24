function drawHistogram(data) {
    d3.select("#histogram").selectAll("*").remove();

    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const bins = binGenerator(data);

    const minEng = bins[0].x0;
    const maxEng = bins[bins.length - 1].x1;
    const binsMaxLength = d3.max(bins, d => d.length);

    xScale
        .domain([minEng, maxEng])
        .range([0, innerWidth]);

    yScale
        .domain([0, binsMaxLength])
        .range([innerHeight, 0])
        .nice();

    innerChart
        .selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("class", "histogram-bar")
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0)))
        .attr("height", d => innerHeight - yScale(d.length))
        .attr("fill", barColor)
        .attr("stroke", bodyBackgroundColor)
        .attr("stroke-width", 2);

    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format(","));

    const leftAxis = d3.axisLeft(yScale)
        .tickFormat(d3.format(","));

    innerChart
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    innerChart
        .append("g")
        .attr("class", "y-axis")
        .call(leftAxis);

    svg
        .append("text")
        .text("Frequency")
        .attr("x", 25)
        .attr("y", 25)
        .attr("class", "axis-label");

    svg
        .append("text")
        .text("Labelled Energy Consumption (kWh/year)")
        .attr("x", width - 20)
        .attr("y", height - 20)
        .attr("text-anchor", "end")
        .attr("class", "axis-label");
}

function updateHistogram(data) {
    const svg = d3.select("#histogram svg");
    const innerChart = svg.select("g");

    innerChart.selectAll(".no-data-message").remove();

    if (data.length === 0) {
        innerChart
            .selectAll("rect")
            .data([])
            .join("rect");

        innerChart
            .append("text")
            .attr("class", "no-data-message")
            .attr("x", innerWidth / 2)
            .attr("y", innerHeight / 2)
            .attr("text-anchor", "middle")
            .attr("fill", "#3e2f1c")
            .attr("font-size", "18px")
            .text("No data available for this filter");

        yScale
            .domain([0, 1])
            .range([innerHeight, 0])
            .nice();

        innerChart
            .select(".y-axis")
            .transition()
            .duration(500)
            .call(d3.axisLeft(yScale).tickFormat(d3.format(",")));

        return;
    }

    const updatedBins = binGenerator(data);
    const binsMaxLength = d3.max(updatedBins, d => d.length) || 1;

    yScale
        .domain([0, binsMaxLength])
        .range([innerHeight, 0])
        .nice();

    innerChart
        .selectAll("rect")
        .data(updatedBins)
        .join("rect")
        .attr("class", "histogram-bar")
        .transition()
        .duration(500)
        .ease(d3.easeCubicInOut)
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0)))
        .attr("height", d => innerHeight - yScale(d.length))
        .attr("fill", barColor)
        .attr("stroke", bodyBackgroundColor)
        .attr("stroke-width", 2);

    innerChart
        .select(".y-axis")
        .transition()
        .duration(500)
        .call(d3.axisLeft(yScale).tickFormat(d3.format(",")));
}