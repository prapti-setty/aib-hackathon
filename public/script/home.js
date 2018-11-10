

$(document).ready(function() {


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
                              labelsPosition: "center",
                              showTooltip: true,
                              tooltipTemplate: "<h1>Sample</h1>"
                          }
                      ]
              });
              $(document).delegate("#chart", "igdoughnutchartsliceclick", function (evt, ui) {
                  // Get the options object of the doughnut chart.
                  ui.doughnut;

                  ui.item
                  // Get an object containing information about the clicked slice.
                  ui.slice;
              });

              // Initialize
              $("#chart").igDoughnutChart({
                  sliceClick: function(evt, ui) { $('#overlay').html(""); $('#overlay').append(generateInfoBlob(ui));}
              });

              $("#angleBudget").slider({
                  slide: function (event, ui) {
                      $("#chart").igDoughnutChart("option", "series", [{ name: "Budget", startAngle: ui.value }]);
                  },
                  min: 0,
                  max: 360
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

function generateInfoBlob(ui) {
  console.log(JSON.stringify(ui));
  return ("<div class='col-8' style='padding: 25px'><h1 class='white-text'>"
          + (ui.slice.item.Label)
          + "</h1></div><div class='col-12 white-text' style='max-height: 300px; overflow-y: auto;'><p>"
          + (ui.slice.item.GeneralInfo) + "</p></div>");
}

const data = [
                { "DepartmentSize": 50, "Budget": 60, "Label": "History & Culture", "GeneralInfo":"The history and culture of Ireland are strongly intertwined, showing aspects of the original Gaelic’s, its rituals, superstitions and loyalties alongside memories of the land’s troubled, oppressed centuries of colonization by the English. A love of nature, family, community, and church are all important, and Irish settlements all over the world are still firmly connected to their roots in the ‘old country’.The recorded history of the Republic of Ireland begins in the 5th century, although references to even earlier tribal inhabitants were made by Roman writers including Julius Caesar, who became aware of its existence after his conquest of Britain. By the 5th century, Christianity was established on the island, and St Patrick arrived around 432 AD, firmly rooting the monastic movement. By the late medieval era, the country was a patchwork of small kingdoms often at war with each other.The outside world arrived on the island with the conquest of Britain by William of Normandy, with large chunks of land granted to Norman lords after the 1169 invasion. In areas not under their control, Gaelic culture continued to thrive, and the short-lived Gaelic Kingdom of Ireland was established in 1541. By the early 17th century, the first English attempts at colonization by Protestant settlers had succeeded, and ongoing policies were to color the future up to the late 20th century.Subjugation to England fuelled the fires of revolt during the early modern period, with Henry VIII’s English Reformation further muddied the waters. Finally, the Irish Roman Catholic population was totally excluded from power and local rebellions became the norm. From the early 17th century, brutal and largely unsuccessful methods were used to persuade Ireland’s people to convert to Protestantism, with the Plantations policy the most damaging. Protestants from Scotland and England were granted fertile lands and formed the ruling class, with Catholics disallowed from holding public office. Religious persecution became the norm, amid growing resentment and hatred of the English by Irish Catholics. Civil war broke out in 1641, resulting in a brief period of Catholic majority rule, after which the land was re-conquered by Oliver Cromwell’s armies and all Catholic Irish-owned lands confiscated. Anti-Catholic repression and struggles with the English Crown characterized the late 17th century, culminating in the Williamite War between deposed King James II of England and King William of Orange. The decisive 1690 Battle of the Boyne saw James defeated, and the Battle of Aughrim a year later smashed any hopes of Irish Catholic landowners. Harsh penal laws were reintroduced by the Protestant elite and, from 1801 to 1922, the island was ruled by London. The Great Famine during the 1840’s saw hundreds of thousands of deaths and massive Irish immigrations to the new land of America. By the latter part of the century, Home Rule was vigorously supported and finally passed in 1922 after three years of civil war between the Irish Republican Army and the British Army. The Republic of Ireland was born, but sadly, religion-based conflicts in Northern Ireland continued for decades.Modern-day culture in Ireland is divided between rural and urban populations, Catholics and Protestants, Gaelic and English-speakers and traveling and settled communities. Its heart is Celtic, with many festivals based on ancient pagan ceremonies. Memories of the troubled past influence cultural events, and the mostly Catholic land takes its hard-won religious freedom seriously. ‘Wearing of the green’, the traditional costume, is done with pride, and 40 percent of the population speak the ancient language. Legends, folk tales and beliefs in supernatural beings such as Leprechauns are commonplace, and the lucky three-leaf shamrock is a much-loved symbol. The pot of gold at the end of the rainbow originated in Irish mythology, and Halloween is a favorite holiday. Irish dance, gypsy music, great literature and links to tragic, romantic, Arthurian legends such as Tristan and Isolde are all part of Ireland’s rich and colorful cultural heritage." },
                { "DepartmentSize": 50, "Budget": 40, "Label": "Language" },
                { "DepartmentSize": 50, "Budget": 60, "Label": "Social" },
                { "DepartmentSize": 50, "Budget": 60, "Label": "Education" }
            ];
