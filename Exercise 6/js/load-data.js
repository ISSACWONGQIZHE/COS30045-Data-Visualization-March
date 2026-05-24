function loadHistogramData() {
    d3.csv("data/Ex6_TVdata.csv", d => {
        return {
            brand: d.brand,
            model: d.model,
            screenSize: +d.screenSize,
            screenTech: d.screenTech,
            energyConsumption: +d.energyConsumption,
            star: +d.star
        };
    }).then(data => {
        data = data.filter(d => {
            return !isNaN(d.energyConsumption) &&
                d.energyConsumption < 1800 &&
                d.screenTech &&
                !isNaN(d.screenSize);
        });

        console.log(data);

        currentScreenFilter = "all";
        currentSizeFilter = "all";

        filters_screen.forEach(filter => {
            filter.isActive = filter.id === "all";
        });

        filters_size.forEach(filter => {
            filter.isActive = filter.id === "all";
        });

        drawHistogram(data);
        populateFilters(data);
    }).catch(error => {
        console.error("Error loading the CSV file:", error);
    });
}