function drawDonutChart() {
    const container = d3.select("#donutchart");

    container.selectAll("*").remove();

    const width = 700;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 40;

    const svg = container
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const chart = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    d3.csv("data/Ex5_TV_energy_Allsizes_byScreenType.csv", d => {
        const columns = Object.keys(d);

        return {
            screenTech: d[columns[0]],
            energy: +d[columns[1]]
        };
    }).then(data => {
        data = data.filter(d => {
            return d.screenTech && !isNaN(d.energy);
        });

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.screenTech))
            .range(d3.schemeCategory10);

        const pie = d3.pie()
            .value(d => d.energy);

        const arc = d3.arc()
            .innerRadius(radius * 0.55)
            .outerRadius(radius);

        const labelArc = d3.arc()
            .innerRadius(radius * 0.78)
            .outerRadius(radius * 0.78);

        chart
            .selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", d => color(d.data.screenTech))
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 3);

        chart
            .selectAll("text")
            .data(pie(data))
            .join("text")
            .attr("transform", d => `translate(${labelArc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .attr("font-size", "13px")
            .attr("fill", "#111111")
            .text(d => d.data.screenTech);
    });
}