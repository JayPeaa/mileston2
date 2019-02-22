queue()
    .defer(d3.csv, "assets/data/storeSales.csv")
    .await(makeGraphs);

function makeGraphs(error, salesData) {
    var ndx = crossfilter(salesData);

    salesData.forEach(function(d) {
        d.sales = parseFloat(d.Sales);


        show_sales_by_state(ndx);
        show_sales_by_manager(ndx);
        show_sales_by_category(ndx);
        show_sales_by_chain(ndx);
        show_sales_by_chain_line(ndx);
        show_sales_by_month(ndx);

        dc.renderAll();

    })

    function show_sales_by_state(ndx) {
        var dim = ndx.dimension(dc.pluck("State"));
        var group = dim.group();

        let barColors = d3.scale.ordinal().range(["red", "yellow", "blue", "pink"])

        dc.barChart("#chart0")
            .width(400)
            .height(300)
            .colorAccessor(function(d) {
                return d.key
            })
            .colors(barColors)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("State")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);
            



    }

    function show_sales_by_manager(ndx) {
        var dim = ndx.dimension(dc.pluck("Manager"));
        var group = dim.group();

        dc.barChart("#chart1")
            .width(400)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Manager")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }

    function show_sales_by_category(ndx) {
        var dim = ndx.dimension(dc.pluck("Category"));
        var group = dim.group();

        dc.barChart("#chart2")
            .width(400)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Category")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }

    function show_sales_by_chain(ndx) {
        var dim = ndx.dimension(dc.pluck("Chain"));
        var group = dim.group();

        dc.barChart("#chart3")
            .width(400)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Chain")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);

    }

    function show_sales_by_chain_line(ndx) {
        var dim = ndx.dimension(dc.pluck("Chain"));
        var group = dim.group();

        dc.barChart("#chart4")
            .width(400)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Chain")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);

    }







    function show_sales_by_month(ndx) {
        var dim = ndx.dimension(dc.pluck("Financial Year"));
        var group = dim.group();

        dc.barChart("#chart5")
            .width(400)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 40, left: 50 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Financial Year")
            .yAxisLabel("Sales in £'s")
            .yAxis().ticks(10);


    }
}
