
/*
// 1 Overlay has been added


//2. Create a searchable array for photos
//3. Append arrows for lightbox

*/
var $image = $('<img>');
var $overlay = $('<div id="overlay"></div>');
var $caption = $("<p></p>");
var $imageArray = $(".images li");
var $arrowLeft= $('<button id="arrowLeft"> < </button>');
var $arrowRight = $('<button id="arrowRight"> > </button>');


//Search Functionality


$("#search").keyup(function(){

    $(".images a").each(function(images){
        if ($(this).hasClass("hide")){
            $(this).removeClass("hide");
        }
        var $captionLibrary = $(this).children('img').attr("alt");
        $captionLibrary = $captionLibrary.toLowerCase();
        var $search = $('#search').val();
        $search = $search.toLowerCase();
        if ($captionLibrary.indexOf($search) === -1){
            $(this).addClass("hide");
        }
})//each
})//keyup



//Determining when to Add the overlay



$(".images li").click(function (event) {
    var current = $(this);
  $(this).addClass("current");
  event.preventDefault(event);
// 1. Getting Image Location
  var imageLocation = "img/";
  imageLocation += $(this).children("a").attr("href").substr(15);
  $($image).attr("src", imageLocation);



  //when clicking the buttons!

  $("#arrowRight").click(function() {
      var nextImage = "img/";
      var nextImage = $(".current").next().children("a").attr("href").substr(15);
      $image = $($image).attr("src", nextImage);
      debugger;
  });

  $("#arrowLeft").click(function() {
      var nextImage = "img/";
      var nextImage = $(".current").next().children("a").attr("href").substr(15);
      $image = $($image).attr("src", nextImage);
      debugger;
  });







// 2. Getting Caption Text
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);





// 3. Show Overlay
 $overlay.show();
});//end of images li click event

//Hiding the Overlay
$overlay.click(function() {
  $overlay.hide();
});

//Adding the Overlay to the DOM
$overlay.append($image);
$overlay.append($caption);
$overlay.append($arrowRight);
$overlay.append($arrowLeft);
$("body").append($overlay);

/*

What needs to be done in order to get the arrows working right:

First:

A. We need to make use of the "index()" method when calling our image to the overlay. This way we can determine:

(1) which item we are on currently
(2) Which item is behind us
(3) which item is ahead of us
(4) if we are at the end of the array of images

We then need to make use of a flag and the ++ and -- operators to go to either the next or the previous sibling element according to the index intelligence

*/
