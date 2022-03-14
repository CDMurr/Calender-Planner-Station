// getting the current date & day 
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
     
    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();
        
        // set up color coding of blocks based on time of day 
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
            
            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})
