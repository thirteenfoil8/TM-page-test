$(document).ready(function() {
    $("#aAjouter").click(function() {
        var formule = $("#ajouter").val();
        $("#Exercice").append("<p>"+ formule +"</p>");
    });
});
