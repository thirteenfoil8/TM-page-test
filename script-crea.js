$(document).ready(function() {
    $("#ajout-ex").click(function() {
        var formule = $("#aAjouter").val();
        $("#exercice").append("<p>"+ formule +"</p>");
    });
});
