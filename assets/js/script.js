var currentTime = moment().format('MMMM Do YYYY');
//load the current day when the document is ready
$(document).ready(function(){
    $("#currentDay").text(currentTime);        
});

// obtain the value in textarea and send to local storage
$('.saveBtn').on('click', function() {
    // getting the value of the previous element to the saveBtn
    var value = $(this) 
    .prev()    
    .val();
     console.log(value);
    // getting the data-time attribute from the div sibling element
    var time = $(this).siblings("div").data("time")

    console.log(time);
     // save in localStorage
    localStorage.setItem(time, value);
});

// set the class depending on if the data-time has passed, is present, or future
var checkTime = function() {
    for (var i = 9; i < 18; i++) {
    
        var hour = $("[data-time="+i+"]")
        var time = moment().set("hour", i)

        if (moment().isAfter(time, "hour")) {
            $(hour).siblings("textarea").addClass("past");
        } else if (moment().isSame(time, "hour")) {
            $(hour).siblings("textarea").addClass("present");
        } else if (moment().isBefore(time, "hour")) {
            $(hour).siblings("textarea").addClass("future");
        };
    }
};

// obtaining the local storage info and adding it to the page
var loadTasks = function() {
    for (var i = 9; i < 18; i++) {
   $("[data-time="+i+"]").siblings("textarea").val(localStorage.getItem(i))
    };
};

loadTasks()

// running the check time function every 5 seconds to ensure the backgrounds update appropriately
setInterval(function() {
    checkTime();
}, 5000);