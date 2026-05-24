function drawBarChart() {
    const container = d3.select("#barchart");

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

    d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv", d => {
        const columns = Object.keys(d);

        return {
            screenTech: d[columns[0]],
            energy: +d[columns[1]]
        };
    }).then(data => {
        data = data.filter(d => {
            return d.screenTech && !isNaN(d.energy);
        });

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.screenTech))
            .range([0, chartWidth])
            .padding(0.25);

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
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", d => xScale(d.screenTech))
            .attr("y", d => yScale(d.energy))
            .attr("width", xScale.bandwidth())
            .attr("height", d => chartHeight - yScale(d.energy))
            .attr("fill", "#6bb7a8");

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("x", width / 2)
            .attr("y", height - 20)
            .attr("text-anchor", "middle")
            .text("Screen Technology");

        svg
            .append("text")
            .attr("class", "axis-label")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .text("Mean Energy Consumption (kWh/year)");
    });
}