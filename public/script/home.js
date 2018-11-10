$(document).ready(function() {
  // $("#chart").igDoughnutChart({
  //   width: "100%",
  //   height: "700px",
  //   series:
  //   [{
  //       name: "Pop1990",
  //       labelMemberPath: "CountryName",
  //       valueMemberPath: "Pop1990",
  //       dataSource: data,
  //       labelsPosition: "bestFit",
  //       formatLabel: function (context) {
  //           return context.itemLabel + " (" + context.item.Pop1990 + ")";
  //       }
  //   }]
  // });


  $("#chart").igDoughnutChart({
    width: "100%",
    height: "550px",
    series:
    [{
      name: "Pop1990",
      labelMemberPath: "CountryName",
      valueMemberPath: "Pop1990",
      dataSource: data,
      labelsPosition: "bestFit",
      formatLabel: function (context) {
        return context.itemLabel + " (" + context.item.Pop1990 + ")";
      }
    }]
  });
  cycle_colors();
});

const colors = ['red', 'blue', 'green'];
const data = [
    { "CountryName": "China", "Pop1990": 1141 },
    { "CountryName": "India", "Pop1990": 849 },
    { "CountryName": "United States", "Pop1990": 250 },
    { "CountryName": "Indonesia", "Pop1990": 178 },
    { "CountryName": "Brazil", "Pop1990": 150 }
];


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
