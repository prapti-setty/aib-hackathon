

$(document).ready(function() {
              $("#overlay").html(generateSampleBlob());

              $("#chart").igDoughnutChart({
                  width: "820px",
                  height: "820px",
                  innerExtent: 30,
                  title: {
                    position: "bottom",
                    text: "Share of Internet Population Growth, 2007 - 2012"
                  },
                  series:
                      [
                          {
                              name: "DepartmentSize",
                              labelMemberPath: "Label",
                              valueMemberPath: "DepartmentSize",
                              dataSource: data,
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

function printLinks(ui) {
    if (ui.slice.item.Label === "Education") {
      return ("<a class='btn btn-lg btn-primary' href='/browse'>Education Hub</a>");
    }
    else {
      return ("<a class='white-text linky-boi link-active' href='" + (ui.slice.item.onsiteResources[0].link) + "' >" + (ui.slice.item.onsiteResources[0].title) + "</a><b class='white-text'>   //   </b>"
      + "<a class='white-text linky-boi link-active' href='" + (ui.slice.item.onsiteResources[1].link) + "' >" + (ui.slice.item.onsiteResources[1].title) + "</a><b class='white-text'>   //   </b> "
      + "<a class='white-text linky-boi link-active' href='" + (ui.slice.item.onsiteResources[2].link) + "' >" + (ui.slice.item.onsiteResources[2].title) + "</a>"
      + "</p></div><hr class='white'><div class='col-12'><p><h2 class='white-text'>External Learning Resources</h2>"
      + "<a class='white-text linky-boi link-active' href='" + (ui.slice.item.externalResources[0].link) + "' >" + (ui.slice.item.externalResources[0].title) + "</a><b class='white-text'>   //   </b>"
      + "<a class='white-text linky-boi link-active' href='" + (ui.slice.item.externalResources[1].link) + "' >" + (ui.slice.item.externalResources[1].title) + "</a><b class='white-text'>   //   </b> "
      + "<a class='white-text linky-boi link-active' href='" + (ui.slice.item.externalResources[2].link) + "' >" + (ui.slice.item.externalResources[2].title) + "</a>");
    }
}

function generateInfoBlob(ui) {
  console.log(JSON.stringify(ui));
  return ("<div class='col-12' style='padding: 25px'><h1 class='white-text'>"
          + (ui.slice.item.Label)
          + "</h1></div><div class='col-12 white-text' style='max-height: 430px; overflow-y: auto;'><p>"
          + (ui.slice.item.GeneralInfo)
          + "</p></div><hr class='white'><div class='col-12'><p><h2 class='white-text'>On-site Learning Resources</h2>"
          + printLinks(ui)
          );
}

function generateSampleBlob() {
  return ("<div class='col-12' style='padding: 25px'><h1 class='white-text'>"
          + "Welcome to Culture Hub"
          + "</h1></div><div class='col-12 white-text' style='max-height: 400px; overflow-y: auto;'><p>"
          + "Culture Hub is an educational platform for refugees, migrants or any other people landing on Irish Shores for the first time. With little information about Ireland, new people in our country can often feel a sense of confusion, loss of comfort, familiarity and confidence due to their lack of knowledge about the place and their change of surroundings. Along with this huge change in their life come a lot of information that may not always be aggregated and easily accessible. To try and aid these people, we came up with the idea of creating Culture Hub, a centralized system that is easily accessible and free to use. Our service will allow for people to learn more about topics that can be very intimidating to them."
          + "</p> <p>"
          + "Culture Hub is currently divided up into 4 main focus areas that make it easy to get started in learning about Ireland. These 4 areas are as follows: History and Culture, Language, Education, Social. We plan to add in 2 more focus areas in the near future that we believe are hugely important: Job Seeking Aids, Mental Health."
          + "</p> <p>"
          + "To find out more about how you can make the most of your time on CUlture Hub, click the button below to visit our course on getting started with and using Culture Hub."
          + "</p></div><hr class='white'><div class='col-12'><p><h2 class='white-text'>On-site Learning Resources</h2>"
          + "<a class='white-text linky-boi link-active' href='#' >Linky Boi</a><b class='white-text'>   //   </b>"
          + "<a class='white-text linky-boi link-active' href='#' >Rawr I am a handy Link</a><b class='white-text'>   //   </b> "
          + "<a class='white-text linky-boi link-active' href='#'>Link Raptor</a>"
          + "</p></div><hr class='white'><div class='col-12'><p><h2 class='white-text'>External Learning Resources</h2>"
          + "<a class='white-text linky-boi link-active' href='#' >Pteradactylink</a><b class='white-text'>   //   </b>"
          + "<a class='white-text linky-boi link-active' href='#' >Tyrannysaurous Link</a><b class='white-text'>   //   </b> "
          + "<a class='white-text linky-boi link-active' href='https://www.youtube.com/watch?v=FTQbiNvZqaY' >Africa by Toto</a>");
}

const data = [
                { "DepartmentSize": 50, "Budget": 60, "Label": "History & Culture", "GeneralInfo":"The history and culture of Ireland are strongly intertwined, showing aspects of the original Gaelic’s, its rituals, superstitions and loyalties alongside memories of the land’s troubled, oppressed centuries of colonization by the English. A love of nature, family, community, and church are all important, and Irish settlements all over the world are still firmly connected to their roots in the ‘old country’.The recorded history of the Republic of Ireland begins in the 5th century, although references to even earlier tribal inhabitants were made by Roman writers including Julius Caesar, who became aware of its existence after his conquest of Britain. By the 5th century, Christianity was established on the island, and St Patrick arrived around 432 AD, firmly rooting the monastic movement. By the late medieval era, the country was a patchwork of small kingdoms often at war with each other.The outside world arrived on the island with the conquest of Britain by William of Normandy, with large chunks of land granted to Norman lords after the 1169 invasion. In areas not under their control, Gaelic culture continued to thrive, and the short-lived Gaelic Kingdom of Ireland was established in 1541. By the early 17th century, the first English attempts at colonization by Protestant settlers had succeeded, and ongoing policies were to color the future up to the late 20th century.Subjugation to England fuelled the fires of revolt during the early modern period, with Henry VIII’s English Reformation further muddied the waters. Finally, the Irish Roman Catholic population was totally excluded from power and local rebellions became the norm. From the early 17th century, brutal and largely unsuccessful methods were used to persuade Ireland’s people to convert to Protestantism, with the Plantations policy the most damaging. Protestants from Scotland and England were granted fertile lands and formed the ruling class, with Catholics disallowed from holding public office. Religious persecution became the norm, amid growing resentment and hatred of the English by Irish Catholics. Civil war broke out in 1641, resulting in a brief period of Catholic majority rule, after which the land was re-conquered by Oliver Cromwell’s armies and all Catholic Irish-owned lands confiscated. Anti-Catholic repression and struggles with the English Crown characterized the late 17th century, culminating in the Williamite War between deposed King James II of England and King William of Orange. The decisive 1690 Battle of the Boyne saw James defeated, and the Battle of Aughrim a year later smashed any hopes of Irish Catholic landowners. Harsh penal laws were reintroduced by the Protestant elite and, from 1801 to 1922, the island was ruled by London. The Great Famine during the 1840’s saw hundreds of thousands of deaths and massive Irish immigrations to the new land of America. By the latter part of the century, Home Rule was vigorously supported and finally passed in 1922 after three years of civil war between the Irish Republican Army and the British Army. The Republic of Ireland was born, but sadly, religion-based conflicts in Northern Ireland continued for decades.Modern-day culture in Ireland is divided between rural and urban populations, Catholics and Protestants, Gaelic and English-speakers and traveling and settled communities. Its heart is Celtic, with many festivals based on ancient pagan ceremonies. Memories of the troubled past influence cultural events, and the mostly Catholic land takes its hard-won religious freedom seriously. ‘Wearing of the green’, the traditional costume, is done with pride, and 40 percent of the population speak the ancient language. Legends, folk tales and beliefs in supernatural beings such as Leprechauns are commonplace, and the lucky three-leaf shamrock is a much-loved symbol. The pot of gold at the end of the rainbow originated in Irish mythology, and Halloween is a favorite holiday. Irish dance, gypsy music, great literature and links to tragic, romantic, Arthurian legends such as Tristan and Isolde are all part of Ireland’s rich and colorful cultural heritage.",
                "onsiteResources": [{"title":"Tutorials & Media", "link":"/tutorial"}, {"title":"Irish Culture Hub Wiki", "link":"/wiki"}, {"title":"Opinions", "link":"/further"}],
                "externalResources": [{"title":"Wikipedia", "link":"https://en.wikipedia.org/wiki/Ireland"}, {"title":"Irish History Online", "link":"https://www.ria.ie/research-projects/irish-history-online"}, {"title":"Failte Online", "link":"https://www.failteonline.ie/"}]},
                { "DepartmentSize": 50, "Budget": 60, "Label": "Language", "GeneralInfo":"The history of the Irish language begins with the period from the arrival of speakers of Celtic languages in Ireland to Ireland's earliest known form of Irish, Archaic Irish, which is found in Ogham inscriptions dating from the 3rd or 4th century AD.[1] After the conversion to Christianity in the 5th century, Old Irish begins to appear as glosses and other marginalia in Latin manuscripts, beginning in the 6th century. It evolved in the 10th century to Middle Irish. Early Modern Irish, otherwise known as Classical Irish, was a literary language that represented a transition between Middle and Modern Irish. It was used by writers in both Ireland and Scotland until the 17th century, in the course of which slowly but surely writers began writing in the vernacular dialects, Ulster Irish, Connacht Irish, Munster Irish and Scottish Gaelic. As the number of hereditary poets and scribes dwindled under British rule in the early 19th century, Irish became a mostly spoken tongue with little written literature appearing in the language until the Gaelic Revival of the late 19th century. The number of speakers was also declining in this period with monoglot and bilingual speakers of Irish increasingly adopting only English: while Irish never died out, by the time of the Revival it was largely confined to the less Anglicised regions of the island, which were often also the more rural and remote areas. In the 20th and 21st centuries, Irish has continued to survive in Gaeltacht regions and among a minority in other regions. It has once again come to be considered an important part of the island's culture and heritage, with efforts being made to preserve and promote it.",
                "onsiteResources": [{"title":"Learn the Language", "link":"/further"}, {"title":"Tutorials & Media", "link":"/tutorial"}, {"title":"Irish Culture Hub Language help", "link":"/wiki"}],
                "externalResources": [{"title":"Wikipedia", "link":"https://en.wikipedia.org/wiki/Ireland"}, {"title":"Irish History Online", "link":"https://www.ria.ie/research-projects/irish-history-online"}, {"title":"Failte Online", "link":"https://www.failteonline.ie/"}]},
                { "DepartmentSize": 50, "Budget": 60, "Label": "Social", "GeneralInfo":"The history and culture of Ireland are strongly intertwined, showing aspects of the original Gaelic’s, its rituals, superstitions and loyalties alongside memories of the land’s troubled, oppressed centuries of colonization by the English. A love of nature, family, community, and church are all important, and Irish settlements all over the world are still firmly connected to their roots in the ‘old country’.The recorded history of the Republic of Ireland begins in the 5th century, although references to even earlier tribal inhabitants were made by Roman writers including Julius Caesar, who became aware of its existence after his conquest of Britain. By the 5th century, Christianity was established on the island, and St Patrick arrived around 432 AD, firmly rooting the monastic movement. By the late medieval era, the country was a patchwork of small kingdoms often at war with each other.The outside world arrived on the island with the conquest of Britain by William of Normandy, with large chunks of land granted to Norman lords after the 1169 invasion. In areas not under their control, Gaelic culture continued to thrive, and the short-lived Gaelic Kingdom of Ireland was established in 1541. By the early 17th century, the first English attempts at colonization by Protestant settlers had succeeded, and ongoing policies were to color the future up to the late 20th century.Subjugation to England fuelled the fires of revolt during the early modern period, with Henry VIII’s English Reformation further muddied the waters. Finally, the Irish Roman Catholic population was totally excluded from power and local rebellions became the norm. From the early 17th century, brutal and largely unsuccessful methods were used to persuade Ireland’s people to convert to Protestantism, with the Plantations policy the most damaging. Protestants from Scotland and England were granted fertile lands and formed the ruling class, with Catholics disallowed from holding public office. Religious persecution became the norm, amid growing resentment and hatred of the English by Irish Catholics. Civil war broke out in 1641, resulting in a brief period of Catholic majority rule, after which the land was re-conquered by Oliver Cromwell’s armies and all Catholic Irish-owned lands confiscated. Anti-Catholic repression and struggles with the English Crown characterized the late 17th century, culminating in the Williamite War between deposed King James II of England and King William of Orange. The decisive 1690 Battle of the Boyne saw James defeated, and the Battle of Aughrim a year later smashed any hopes of Irish Catholic landowners. Harsh penal laws were reintroduced by the Protestant elite and, from 1801 to 1922, the island was ruled by London. The Great Famine during the 1840’s saw hundreds of thousands of deaths and massive Irish immigrations to the new land of America. By the latter part of the century, Home Rule was vigorously supported and finally passed in 1922 after three years of civil war between the Irish Republican Army and the British Army. The Republic of Ireland was born, but sadly, religion-based conflicts in Northern Ireland continued for decades.Modern-day culture in Ireland is divided between rural and urban populations, Catholics and Protestants, Gaelic and English-speakers and traveling and settled communities. Its heart is Celtic, with many festivals based on ancient pagan ceremonies. Memories of the troubled past influence cultural events, and the mostly Catholic land takes its hard-won religious freedom seriously. ‘Wearing of the green’, the traditional costume, is done with pride, and 40 percent of the population speak the ancient language. Legends, folk tales and beliefs in supernatural beings such as Leprechauns are commonplace, and the lucky three-leaf shamrock is a much-loved symbol. The pot of gold at the end of the rainbow originated in Irish mythology, and Halloween is a favorite holiday. Irish dance, gypsy music, great literature and links to tragic, romantic, Arthurian legends such as Tristan and Isolde are all part of Ireland’s rich and colorful cultural heritage.",
                "onsiteResources": [{"title":"Opinions", "link":"/further"}, {"title":"Tutorials & Media", "link":"/tutorial"}, {"title":"Irish Culture Hub Wiki", "link":"/wiki"}],
                "externalResources": [{"title":"Wikipedia", "link":"https://en.wikipedia.org/wiki/Ireland"}, {"title":"Irish History Online", "link":"https://www.ria.ie/research-projects/irish-history-online"}, {"title":"Failte Online", "link":"https://www.failteonline.ie/"}]},
                { "DepartmentSize": 50, "Budget": 60, "Label": "Education", "GeneralInfo" : "Education is compulsory for children in Ireland from the ages of 6 to 16 or until students have completed 3 years of second-level education.The Irish education system is made up of primary, second, third-level and further education. State-funded education is available at all levels, unless you choose to send your child to a private institution. Pre-school education is usually provided by privately funded childcare facilities or providers. The Early Childhood Care and Education (ECCE) Scheme provides free early childhood care and education for children of pre-school age. Some pre-school initiatives focused on children at risk are funded by the Department of Education and Skills. Children do not have to attend school until the age of 6 but children may begin school the September following their fourth birthday. The Irish primary school curriculum is child-centred.Certain children who come to live in Ireland may be exempted from learning Irish in school. Primary schools are generally privately owned by religious communities (or boards of governors) but are State-funded. Second-level education is provided by different types of post-primary schools. Second-level education consists of a 3-year junior cycle followed by a 2-year or 3-year senior cycle depending on whether an optional Transition Year is taken following the Junior Certificate examination. Students generally start the junior cycle at the age of 12. The Junior Certificate is taken after 3 years. Transition Year follows the Junior Certificate examination. This year is free from formal examinations and allows students to experience a wide range of educational inputs, including work experience. During their final 2 years in the senior cycle, students take one of 3 programmes, each leading to a State examination - the established Leaving Certificate, the Leaving Certificate Vocational Programme or the Leaving Certificate Applied. The established Leaving Certificate is the main basis upon which places in universities, institutes of technology and colleges of education are allocated. The Leaving Certificate Vocational Programme differs from the established Leaving Certificate in placing a concentration on technical subjects and including additional modules which have a vocational focus. The Leaving Certificate Applied Programme has as its primary objective the preparation of participants for adult and working life through relevant learning experiences. These aim to develop the following areas of human endeavour: spiritual, intellectual, social, emotional, aesthetic and physical. The Leaving Certificate Applied is not recognised for direct entry to third-level courses but it can enable students to take Post-Leaving Certificate courses. Third-level education is made up of a number of sectors. The university sector, the technological sector and the colleges of education are substantially funded by the State. In addition there are a number of independent private colleges. There are universities which are autonomous and self-governing. They offer degree programmes at bachelor, masters and doctorate level. The technological sector includes institutes of technology which provide programmes of education and training in areas such as business, science, engineering, linguistics and music to certificate, diploma and degree levels. The Department of Education and Skills has overall responsibility for the sector. The Technological Universities Act 2018 allows institutes of technology to apply to become a new type of higher education institution with technological university status.",
                "onsiteResources": [{"title":"Opinions", "link":"/further"}, {"title":"Tutorials & Media", "link":"/tutorial"}, {"title":"Irish Culture Hub Wiki", "link":"/wiki"}],
                "externalResources": [{"title":"Wikipedia", "link":"https://en.wikipedia.org/wiki/Ireland"}, {"title":"Irish History Online", "link":"https://www.ria.ie/research-projects/irish-history-online"}, {"title":"Failte Online", "link":"https://www.failteonline.ie/"}]}
            ];
