var tasks = {};
var events = {};

// event function
$(".list-group").on("click", "h3", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
        $(this).replaceWith(textInput);
    //convert the textarea into a div element
    
    var taskP = $("<div>")
        .addClass("h3")
        .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
});

// jQuery sortable list group
$( function(sortable) {
    $( "#sortable" ).sortable();
  } );

// save button function
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //click event for the button
    addEventListener('click', (event) => {});

    onclick = (event) => { };

};

//date function
$( function(date) {
    $( "#datepicker" ).datepicker();
    var dateInput = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .val(date);
  $(this).replaceWith(dateInput);
  } );


//load the schedule for the first time
loadSchedule();
