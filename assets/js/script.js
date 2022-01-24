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

$(".saveBtn").click(function() {
    var taskText = $(this)
    .prev()
    .val();

    var index = $(this)
    .closest(".text-input")
    .index();

    task.push({
        text: taskText,
        index: index
    });
    

    localStorage.setItem("tasks", JSON.stringify(task));
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
