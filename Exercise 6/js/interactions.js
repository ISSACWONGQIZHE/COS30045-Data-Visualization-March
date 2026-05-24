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