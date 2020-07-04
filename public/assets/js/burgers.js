$(function() {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        let id = this.id;
        let devour = {id:id};
        $.ajax("/api/devour", {
            type: "PUT",
            data: devour
        })
        .then(
            location.reload()
        );
    });
  });
  