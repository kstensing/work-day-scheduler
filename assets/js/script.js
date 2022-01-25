var currentTime = moment().format('MMMM Do YYYY');
var task = [];


$(document).ready(function(){
    $("#currentDay").text(currentTime);        
});

$('.saveBtn').on('click', function() {
    // get nearby values using the description class you made of the text area
    var value = $(this) 
    .prev()    
    .val();
     console.log(value);
    //get the current this value of time from the div id of the parent container and set it to this variable 
    var time = $(this).siblings("div").data("time")

    console.log(time);
     // save in localStorage
    localStorage.setItem(time, value);
});


// var checkTime = function() {
//     moment(currentTime).isAfter(currentTime) {
//         $(
//     }

// }
var loadTasks = function() {
    for (var i = 9; i < 18; i++) {
//$(`[data-time=${i}]`)
   $("[data-time="+i+"]").siblings("textarea").val(localStorage.getItem(i))
    };
};

loadTasks()
