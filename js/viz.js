  $(document).ready(function(){
          $('.clickBox, .clickBoxMain').hover(function(){
              $(this).css("background-color", "#a6c4fc");
              }, function(){
              $(this).css("background-color", "#3285ff");
          });
          $('.clickBox').click(function(){
              $('.clickBox, .welcome').hide();
              $('#button, #chartdiv, #chartdiv2, .clickBoxMain, .desc, .summary').fadeIn();
              $('.descTxt').text("We can see charts and statistics of zoning areas here");
          });
          $('.clickHome').click(function(){
              $('#chartdiv, #chartdiv2, .clickBoxMain, .desc, .summary, #summaryTxt, #search, #execute').hide();
              $('.welcome, .clickBox').show();
          });
          $('.summary').click(function(){
              $('#chartdiv, #chartdiv2, #summaryTxt').toggle();
          });
          $('.clickSearch').click(function(){
              $('.clickBox, .welcome, #button, #chartdiv, #chartdiv2, .summary, #summaryTxt').hide();
              $('.desc').show();
              $('.descTxt').text("We can search for individual building information. For example to see if the existing building fits into the zoning regulation. Type building name in the box below.");
              $('#search, #execute').fadeIn();
          });



         


        });