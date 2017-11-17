
$(document).ready(function() {
  
      $('#searchButton').click(function() {
          getWiki();
      });
  
      $("#mySearch").keypress(function(e) {
          if (e.keyCode === 13) {
              getWiki();
          }
      });
      
      function getWiki() {
        var wikiInfo = $('#showWikiInfo');
        var searchTerm = $('#mySearch').val();
        var urlPlz = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
      
       
  
          $.ajax( /*Gets the weather info from API    */ {
              type: 'GET',
              url: urlPlz,
              dataType: 'json',

              success: function(data) {
                  console.log(data);
                  wikiInfo.html('');
                  for (var i = 0; i < data[1].length; i++) {
                      wikiInfo.prepend("<li id ='showWikiInfo'><a href=" + data[3][i] + " target=" + "blank" + "><h3>" + data[1][i] + "</h3></a><p>" + data[2][i] + "</p></li>");
                   $('#mySearch').val("");
                  }
  
              },
              error: function(errorMessage) {
                  alert("Error");
              }
  
  
  
  
          });
      };
  });




