function drawScatterPlot() {
    const container = d3.select("#scatterplot");

    container.selectAll("*").remove();

    const margin = {
        top: 30,
        right: 30,
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

    d3.csv("data/Ex5_TV_energy.csv", d => {
        return {
            star: +d.star2,
            energy: +d.energy_consumpt
        };
    }).then(data => {
        data = data.filter(d => {
            return !isNaN(d.star) && !isNaN(d.energy);
        });

        const xScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.star))
            .nice()
            .range([0, chartWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.energy)])
            .nice()
            .range([chartHeight, 0]);

        chart
            .append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(xScale));

        chart
            .append("g")
            .call(d3.axisLeft(yScale));

        chart
            .selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", d => xScale(d.star))
            .attr("cy", d => yScale(d.energy))
            .attr("r", 4)
            .attr("fill", "#4f8fc7")
            .attr("opacity", 0.7);

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("x", width / 2)
            .attr("y", height - 20)
            .attr("text-anchor", "middle")
            .text("Star Rating");

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .text("Energy Consumption (kWh/year)");
    });
}