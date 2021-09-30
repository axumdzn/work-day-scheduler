var timeBlock = $(".time-block");
var message = [];
//needs the intitial function to color and add content to the page
function init() {
$("#currentDay").text(moment().format("MMM Do YYYY"));
plannerMsg = JSON.parse(localStorage.getItem("plannerMsg"));
if(plannerMsg) {message = plannerMsg};
timeBlock.each(function () {
    if(moment().format("H") > $(this).data("hour")) {
        $(this).children("textarea").addClass('past');
    }
    else if(moment().format("H") == $(this).data("hour")) {
        $(this).children("textarea").addClass('present');
    }
    else {
        $(this).children("textarea").addClass('future');
    }
    if(message[$(this).data('hour')-8]) {
        $(this).children("textarea").text(message[$(this).data('hour')-8]);
    }
})
}
// function to save information
$(".saveBtn").click(function () {
    console.log($(this).siblings('textarea').val());
    console.log($(this).parent().data('hour'));
    message[$(this).parent().data('hour')-8] = $(this).siblings('textarea').val();
    localStorage.setItem('plannerMsg', JSON.stringify(message));
})
init();