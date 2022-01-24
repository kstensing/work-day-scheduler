var currentTime = moment().format('MMMM Do YYYY');
var task = [];


$(document).ready(function(){
    $("#currentDay").text(currentTime);        
});

// var createTask = function(taskText) {
//     var taskP = $("<p>").addClass("task")
//     .text(taskText);

//     $("#text-input").append(taskP);
// }


$('.saveBtn').on('click', function() {
    // get nearby values using the description class you made of the text area
    var value = $(this) 
    .prev()    
    .val();
     console.log(value);
    //get the current this value of time from the div id of the parent container and set it to this variable 
    var time = $(this)
    .closest("button")
        .val()
        .attr('id');

    console.log(time);
     // save in localStorage
    // localStorage.setItem(time, value);
});

// var saveTask = function() {
//     $(".saveBtn").click() 
//         localStorage.setItem("tasks", JSON.stringify(task));
//     };

// var checkTime = function() {
//     moment(currentTime).isAfter(currentTime) {
//         $(
//     }

// }
// var loadTasks = function() {
//     task = JSON.parse(localStorage.getItem("tasks"));
// }

// loadTasks()
