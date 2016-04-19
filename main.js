


var $image = $('<img>');
var $overlay = $('<div id="overlay"></div>');
var $caption = $("<p></p>");
var $imageLocation;
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);


$(".images a").click(function(event){
  event.preventDefault(event);
  var imageHref = $(this).attr("href");
  var imageLocation = "img/" + $(this).attr("href").substr(15);
  console.log(imageLocation);
  $($image).attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function() {
  //hide the overlay
  $overlay.hide();
});
