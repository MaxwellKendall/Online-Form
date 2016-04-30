
//Global Variables

var $image = $('<img>');
var $overlay = $('<div id="overlay"></div>');
var $exit = $('<div id="exit"> x </div>');
var $caption = $("<p></p>");
var $imageArray = $(".images li");
var $arrowLeft= $('<div id="arrowLeft"> < </div>');
var $arrowRight = $('<div id="arrowRight"> > </div>');
var $currentImage;

//sticky header

$(".header").sticky({
  getWidthFrom: 'body',
  responsiveWidth: true
});


//Adding the Dynamically Created Overlay Element

$overlay.append($image);
$overlay.append($caption);
$overlay.append($arrowRight);
$overlay.append($arrowLeft);
$overlay.append($exit);
$('body').append($overlay);

//Hiding the Overlay

$exit.click(function() {
  $overlay.hide();
});

//Search Functionality

// 1. When search input element is is clicked and key comes up from entering key down:

$("#search").keyup(function(){
    // a. Go through the images
    $(".images li a").each(function(images){
        // b. Remove the class from previous searches
        if ($(this).hasClass("hide")){
            $(this).removeClass("hide");
        }
        // c. Access the Captions of all Pictures
        var $captionLibrary = $(this).children('img').attr("alt");
            // - convert them to lower case for uniformity
        $captionLibrary = $captionLibrary.toLowerCase();
        // d. Access the input of user in the search bar
        var $search = $('#search').val();
        // - convert value to lower case for uniformity
        $search = $search.toLowerCase();
        // e. Compare the caption library to the search
            //- literally, if the search variable is not equal to the index contained in
            //the other variable, then add the class to hide the element
        if ($captionLibrary.indexOf($search) === -1){
            $(this).addClass("hide");
        }
});// this is the end of the each loop
});// this is the end of the user initiated event keyup

// 2. Dynamically Creating the Light Box

    // a. When <li> element is clicked:
$(".images li").click(function (event) {

// 2.1 Remove the dynmaically added class
    // a. Cycle through each image element
    $(".images li").each(function(images){
    // b. Remove the selected class of all elements if one has it
        if ($(this).hasClass("current")){
            $(this).removeClass("current");
            }
        });// this is the end of the each function
// Creating the Light Box Cont'd:

    // b. Get the descendent "img" element from the selected <li> element
    $currentImage = $(this);
    // c. Add the class "current"
    $currentImage.addClass("current");
    // d. Prevent default click event behavior
  event.preventDefault(event);

    // e. Getting Location of bigger picture
    var imageLocation = "img/";
    imageLocation += $(this).children("a").attr("href").substr(15);
    $($image).attr("src", imageLocation);
    // f. Getting Caption Text
    var captionText = $(this).children("a").children("img").attr("alt");
    $caption.text(captionText);
    // g. Show Overlay
    $overlay.show();
});// this is the end of the click event; 2 a

// 3. Dynamically adding the arrows

    // a. When the right arrow is clicked:

  $("#arrowRight").click(function() {
        var nextImage = "img/";
        nextImage += $($currentImage).next().children("a").attr("href").substr(15);
        $image = $($image).attr("src", nextImage);
        $currentImage = $($currentImage).next();
        $($currentImage).addClass("current");
        var captionText = $($currentImage).children("a").children("img").attr("alt");
        $caption.text(captionText);
        debugger;    });

        $("#arrowLeft").click(function() {
            if ($currentImage == $imageArray[0]){
            console.log("yess!!!");
            /*
            var lastImage = $($imageArray).length;
            lastImage += - 1;
            var goToLast = "img/";
            goToLast += $($imageArray[lastImage]).children("a").attr("href").substr(15);
            $image = $($image).attr("src", goToLast);
            $currentImage = $imageArray[lastImage];
            $($currentImage).addClass("current");
            var captionText = $($currentImage).children("a").children("img").attr("alt");
            $caption.text(captionText);
            */
        } else if ($currentImage != $imageArray[0]){
            var previousImage = "img/";
            previousImage += $($currentImage).prev().children("a").attr("href").substr(15);
            $image = $($image).attr("src", previousImage);
            $currentImage = $($currentImage).prev();
            $($currentImage).addClass("current");
            var captionText = $($currentImage).children("a").children("img").attr("alt");
            $caption.text(captionText);
            }
        });

        /*
            var goToLastImage = $($imageArray[lastImage]).children("a").attr("href").substr(15);
            $image = $($image).attr("src", goToLastImage);
            $currentImage = $imageArray[lastImage];
            $($currentImage).addClass("current");
            } else {
            var previousImage = "img/";
            previousImage += $($currentImage).prev().children("a").attr("href").substr(15);
            $image = $($image).attr("src", previousImage);
            $currentImage = $($currentImage).prev();
            $($currentImage).addClass("current");
                }
            });

      */

      /*

      $("#arrowLeft").click(function() {
          var previousImage = "img/";
               previousImage += $($currentImage).prev().children("a").attr("href").substr(15);
               $image = $($image).attr("src", previousImage);
               $currentImage = $($currentImage).prev();
               $($currentImage).addClass("current");
       });

One problem I have with this code is when you are on the first image and hit previous, it does not go to the last image; conversly the same, if you are on the last image and hit next, it will not go to the first image. Here is the code I tried to make it do this for the event when the user hits the previous button on the first image:

the problem is that when i define last image, the return value is 12
when you input that into thbe array selector, it treats the value as undefined; 12 is apparently the wrong length for this array.

$("#arrowLeft").click(function() {
    //var lastImage = $($imageArray).length
    //lastImage += - 1;
    if ($currentImage === $imageArray[0]){
    console.log("yess!!!");
    var goToLastImage = $($imageArray[lastImage]).children("a").attr("href").substr(15);
    $image = $($image).attr("src", goToLastImage);
    $currentImage = $imageArray[lastImage];
    $($currentImage).addClass("current");
    } else {
    var previousImage = "img/";
    previousImage += $($currentImage).prev().children("a").attr("href").substr(15);
    $image = $($image).attr("src", previousImage);
    $currentImage = $($currentImage).prev();
    $($currentImage).addClass("current");
        }
    });
        */
