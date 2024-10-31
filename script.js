$(document).ready(function() {
    $("#loadMoreBtn").click(function() {
      $.ajax({
        url: "more-content.html",
        type: "GET",
        success: function(response) {
          $("#dynamicContent").html(response);
        }
      });
    });
  });
  