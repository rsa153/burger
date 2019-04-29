$(function() {

//Create new burger
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger-name")
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created new Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Change state of burger to devoured
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("Changed Devour state to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Delete burger after it's been devoured
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted Burger:", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
