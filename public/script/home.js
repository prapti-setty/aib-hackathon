$(document).ready(function() {
  var data = [
                  { "DepartmentSize": 43, "Budget": 60, "Label": "History" },
                  { "DepartmentSize": 29, "Budget": 40, "Label": "Language" },
                  { "DepartmentSize": 50, "Budget": 60, "Label": "Social" },
                  { "DepartmentSize": 22, "Budget": 40, "Label": "" },
                  { "DepartmentSize": 13, "Budget": 60, "Label": "" },
                  { "DepartmentSize": 34, "Budget": 20, "Label": "Support" }];

              $("#chart").igDoughnutChart({
                  width: "100%",
                  height: "820px",
                  innerExtent: 20,
                  series:
                      [
                          {
                              name: "DepartmentSize",
                              labelMemberPath: "Label",
                              valueMemberPath: "DepartmentSize",
                              dataSource: data,
                              labelsPosition: "outsideEnd",
                              showTooltip: true,
                              tooltipTemplate: "<h1>Sample</h1>"
                          }
                      ]
              });
              $(document).delegate("#chart", "igdoughnutchartsliceclick", function (evt, ui) {
                  // Get the options object of the doughnut chart.
                  ui.doughnut;

                  // Get an object containing information about the clicked slice.
                  ui.slice;
              });

              // Initialize
              $("#chart").igDoughnutChart({
                  sliceClick: function(evt, ui) { console.log("MEH");}
              });

              $("#angleBudget").slider({
                  slide: function (event, ui) {
                      $("#chart").igDoughnutChart("option", "series", [{ name: "Budget", startAngle: ui.value }]);
                  },
                  min: 0,
                  max: 360
              });

              //Bind
              $(document).delegate("#chart", "igdoughnutcharttooltipshowing", function (evt, ui) {
                  // Get the options object of the doughnut chart.
                  ui.doughnut;

                  // Get the jQuery object containing the tooltip.
                  ui.element;

                  // Get the datasource item displayed in the tooltip.
                  ui.item;

                  // Get the current series.
                  ui.series;
              });

              // Initialize
              $("#chart").igDoughnutChart({
                  tooltipShowing: function(evt, ui) { console.log("WREEEGGGGHHHHH");}
              });

              $("#angleDepartmentSize").slider({
                  slide: function (event, ui) {
                      $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", startAngle: ui.value });
                  },
                  min: 0,
                  max: 360
              });

              $("#innerExtent").slider({
                  slide: function (event, ui) {
                      $("#chart").igDoughnutChart("option", "innerExtent", ui.value);
                  },
                  min: 0,
                  max: 80,
                  value: 20
              });

              $("#labelExtent").slider({
                  slide: function (event, ui) {
                      $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", labelExtent: ui.value });
                  },
                  min: 0,
                  max: 50,
                  value: 10
              });

              $("#explodedRadius").slider({
                  slide: function (event, ui) {
                      $("#chart").igPieChart("option", "explodedRadius", ui.value / 100);
                  },
                  min: 0,
                  max: 100,
                  value: 20
              });

              $("#labelPosition").change(function (e) {
                  var labelPosition = $(this).val();
                  $("#chart").igDoughnutChart("updateSeries", { name: "Budget", labelsPosition: labelPosition });
              });

              $("#labelPosition2").change(function (e) {
                  var labelPosition = $(this).val();
                  $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", labelsPosition: labelPosition });
                  $("#labelExtent").slider("option", "disabled", labelPosition != "outsideEnd");
              });
  cycle_colors();
});

const colors = ['red', 'blue', 'green'];


function cycle_colors() {
  var i = 0;
  setInterval(function(){
        var header = document.getElementById('header');
        header.setAttribute("class", colors[i]);
        i++;
        if (i > colors.length - 1) {
            i = 0;
        }
  }, 4000);
}
