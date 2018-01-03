// Random Quote Generator
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";   
var getQuote = function(data) {
  $(".quote").text(data.quoteText); 
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor +' @RonRay98';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author").text(' - ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
$("#generate").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}