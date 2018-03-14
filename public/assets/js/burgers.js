// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
        console.log("devour button clicked");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      console.log(newDevoured);
  
      var newDevouredState = {
        devoured: newDevoured
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                window.location.reload();
            }
        );
    });
    
    $("#addBurger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("Submit Clicked");
  
      var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: "0"
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          window.location.reload();
        }
      );
    });
  });
  