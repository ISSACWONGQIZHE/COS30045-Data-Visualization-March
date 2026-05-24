function getFilteredData(data) {
    let filteredData = data;

    if (currentScreenFilter !== "all") {
        filteredData = filteredData.filter(d => {
            return d.screenTech === currentScreenFilter;
        });
    }

    if (currentSizeFilter !== "all") {
        filteredData = filteredData.filter(d => {
            return d.screenSize === currentSizeFilter;
        });
    }

    return filteredData;
}

function populateFilters(data) {
    d3.select("#filters_screen")
        .selectAll(".filter-btn")
        .data(filters_screen)
        .join("button")
        .attr("class", d => {
            return `filter-btn ${d.isActive ? "active" : ""}`;
        })
        .text(d => d.label)
        .on("click", (event, d) => {
            if (!d.isActive) {
                filters_screen.forEach(filter => {
                    filter.isActive = filter.id === d.id;
                });

                currentScreenFilter = d.id;

                d3.select("#filters_screen")
                    .selectAll(".filter-btn")
                    .classed("active", filter => {
                        return filter.id === d.id;
                    });

                updateHistogram(getFilteredData(data));
            }
        });

    d3.select("#filters_size")
        .selectAll(".filter-btn")
        .data(filters_size)
        .join("button")
        .attr("class", d => {
            return `filter-btn ${d.isActive ? "active" : ""}`;
        })
        .text(d => d.label)
        .on("click", (event, d) => {
            if (!d.isActive) {
                filters_size.forEach(filter => {
                    filter.isActive = filter.id === d.id;
                });

                currentSizeFilter = d.id;

                d3.select("#filters_size")
                    .selectAll(".filter-btn")
                    .classed("active", filter => {
                        return filter.id === d.id;
                    });

                updateHistogram(getFilteredData(data));
            }
        });
}

function createTooltip() {
    const tooltip = innerChartS
        .append("g")
        .attr("class", "scatter-tooltip")
        .style("opacity", 0);

    tooltip
        .append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("fill", barColor)
        .attr("fill-opacity", 0.85);

    tooltip
        .append("text")
        .text("NA")
        .attr("x", tooltipWidth / 2)
        .attr("y", tooltipHeight / 2 + 5)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white")
        .style("font-weight", 900);
}

function handleMouseEvents() {
    innerChartS
        .selectAll("circle")
        .on("mouseenter", (event, d) => {
            d3.select(".scatter-tooltip text")
                .text(`${d.screenSize}"`);

            const cx = +event.target.getAttribute("cx");
            const cy = +event.target.getAttribute("cy");

            d3.select(".scatter-tooltip")
                .attr("transform", `translate(${cx - tooltipWidth / 2}, ${cy - tooltipHeight - 10})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", () => {
            d3.select(".scatter-tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0)
                .attr("transform", "translate(0, 500)");
        });
}