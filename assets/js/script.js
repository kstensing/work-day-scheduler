var currentTime = moment().format('MMMM Do YYYY');
var task = {};


// $(document).ready(function(){
//     $("#currentDay").text(currentTime);        
// });


var createTask = function(taskInput) {
    var taskP = $("<p>")
    .addClass("task-item")
    .text(taskInput);

    taskP.append()
}

var saveTask = function() {
    $(".saveBtn").click() {
        localStorage.setItem("tasks", JSON.stringify(task));
    }
}

// var loadTask = function() {

// }

// var checkTime = function() {
//     moment(currentTime).isAfter(currentTime) {
//         $(
//     }

// }