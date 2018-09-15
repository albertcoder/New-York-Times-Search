// Built by LucyBot. www.lucybot.com
$("#searchButton").on("click", function () {
    var searchTerm = $("#field1").val();
    var numberRecords = $("#field2").val();
    var startYear = $("#field3").val();
    var endYear = $("#field4").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "ecc3c93af1844fc6b77acdb8774371e3",
        'q': searchTerm,
        'begin_date': startYear,
        'end_date': endYear,
    });
    console.log(url);
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });

    $("#results").html(result);
    $("#results").html('<p>' + numberRecords + startYear + endYear + '</p>');

});

$("form").submit(function(){
    console.log("Submitted");
});

$("#clearButton").on("click", function () {
    searchTerm = $("#field1").val()
    numberRecords = $("#field2").val()
    startYear = $("#field3").val()
    endYear = $("#field4").val()

    $("#result").html('<h1>' + result + '</h1>');
    $("#result").html('<p>' + numberRecords + startYear + endYear + '</p>');

});