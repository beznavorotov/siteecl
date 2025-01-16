am5.ready(function() {
    var root = am5.Root.new("mapdiv");

    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "none",
            projection: am5map.geoMercator()
        })
    );

    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            include: ["PL", "DE", "FR", "IT", "UA", "ES", "RO", "NL", "BE", "SE", "FI", "AT", "CZ", "SK", "HU", "NO", "LV", "LT", "EE", "PT"]
        })
    );

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0x007bff),
        stroke: am5.color(0xffffff)
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0xffd700)
    });

    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        var countryName = ev.target.dataItem.dataContext.name;
        document.getElementById("country-info").innerHTML =  countryName;
    });

    chart.appear(1000, 100);
});