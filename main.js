
/*
// 1 Overlay has been added


//2. Create a searchable array for photos
//3. Append arrows for lightbox

*/
var $image = $('<img>');
var $overlay = $('<div id="overlay"></div>');
var $caption = $("<p></p>");
var $imageLocation;
var $search;
var $captionLibrary;


//Actually adding the Overlay
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//Determining when to Add the overlay

$(".images a").click(function(event){
  event.preventDefault(event);
  //var imageHref = $(this).attr("href");
  var imageLocation = "img/";
  imageLocation += $(this).attr("href").substr(15);
     console.log(imageLocation);
  $($image).attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
//Hide the overlay
$overlay.click(function() {
  //hide the overlay
  $overlay.hide();
});

//use each loop to iterate through the list of photos

/*$(".search-input").focus(function(){
    $(this).val('');
});
*/
//Iterate thru picture elements

$("#search").keyup(function(){

    $(".images a").each(function(images){
        if ($(this).hasClass("hide")){
            $(this).removeClass("hide");
        }
        $captionLibrary = $(this).children('img').attr("alt");
        $captionLibrary = $captionLibrary.toLowerCase();
        $search = $('#search').val();
        $search = $search.toLowerCase();
        if ($captionLibrary.indexOf($search) === -1){
            $(this).addClass("hide");
            console.log("$search");
        }
})//each

})//kepup
