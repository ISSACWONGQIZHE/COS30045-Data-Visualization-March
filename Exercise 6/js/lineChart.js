function drawLineChart() {
    const container = d3.select("#linechart");

    container.selectAll("*").remove();

    const margin = {
        top: 30,
        right: 40,
        bottom: 70,
        left: 80
    };

    const width = 800;
    const height = 500;

    const svg = container
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const chart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    d3.csv("data/Ex5_ARE_Spot_Prices.csv", d => {
        const columns = Object.keys(d);

        return {
            year: +d[columns[0]],
            price: +d[columns[columns.length - 1]]
        };
    }).then(data => {
        data = data.filter(d => {
            return !isNaN(d.year) && !isNaN(d.price);
        });

        const xScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.year))
            .range([0, chartWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.price)])
            .nice()
            .range([chartHeight, 0]);

        const line = d3.line()
            .x(d => xScale(d.year))
            .y(d => yScale(d.price));

        chart
            .append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

        chart
            .append("g")
            .call(d3.axisLeft(yScale));

        chart
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#d96db5")
            .attr("stroke-width", 3)
            .attr("d", line);

        chart
            .selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", d => xScale(d.year))
            .attr("cy", d => yScale(d.price))
            .attr("r", 3)
            .attr("fill", "#d96db5");

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("x", width / 2)
            .attr("y", height - 20)
            .attr("text-anchor", "middle")
            .text("Year");

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .text("Average Spot Price");
    });
}