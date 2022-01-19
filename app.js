var eight = $("#8AM")
var nine = $("#9AM")
var ten = $("#10AM")
var eleven = $("#11AM")
var twelve = $("#12PM")
var one = $("#1PM")
var two = $("#2PM")
var three = $("#3PM")
var four = $("#4PM")
var five = $("#5PM")
var six = $("#6PM")
var test = $("#test")

// adds current date to the header
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// changes the color of each time block based on whether it is past, present, or future
function setColor() {
    var currentHour = moment().hours();
 
    $('.row').each(function(){
        var hour = parseInt($(this).attr('id'))
        
        if(currentHour > hour){
            $(this).children('.input').addClass('past');
        }
        else if(currentHour === hour){
            $(this).children('.input').removeClass('past');
            $(this).children('.input').addClass('present');
        }else{
            $(this).children('.input').removeClass('past');
            $(this).children('.input').removeClass('present');
            $(this).children('.input').addClass('future');
        }
    })
}
setColor()

// makes each button save text input to the local storage
$("#8button").click(function(){
    localStorage.setItem("8AM",eight.val())
    $("#8button").css("background-color","green");
})
$("#9button").click(function(){
    localStorage.setItem("9AM",nine.val())
    $("#9button").css("background-color","green");
})
$("#10button").click(function(){
    localStorage.setItem("10AM",ten.val())
    $("#10button").css("background-color","green");
})
$("#11button").click(function(){
    localStorage.setItem("11AM",eleven.val())
    $("#11button").css("background-color","green");
})
$("#12button").click(function(){
    localStorage.setItem("12PM",twelve.val())
    $("#12button").css("background-color","green");
})
$("#1button").click(function(){
    localStorage.setItem("1PM",one.val())
    $("#1button").css("background-color","green");
})
$("#2button").click(function(){
    localStorage.setItem("2PM",two.val())
    $("#2button").css("background-color","green");
})
$("#3button").click(function(){
    localStorage.setItem("3PM",three.val())
    $("#3button").css("background-color","green");
})
$("#4button").click(function(){
    localStorage.setItem("4PM",four.val())
    $("#4button").css("background-color","green");
})
$("#5button").click(function(){
    localStorage.setItem("5PM",five.val())
    $("#5button").css("background-color","green");
})
$("#6button").click(function(){
    localStorage.setItem("6PM",six.val())
    $("#6button").css("background-color","green");
})

// sets the text input to be whatever is saved in the local storage when the page refreshes
function getSavedValues () {
    if (localStorage.getItem("8AM") != eight.val()) {
        eight.val(localStorage.getItem("8AM"))
    }
    if (localStorage.getItem("9AM") != nine.val()) {
        nine.val(localStorage.getItem("9AM"))
    }
    if (localStorage.getItem("10AM") != ten.val()) {
        ten.val(localStorage.getItem("10AM"))
    }
    if (localStorage.getItem("11AM") != eleven.val()) {
        eleven.val(localStorage.getItem("11AM"))
    }
    if (localStorage.getItem("12PM") != twelve.val()) {
        twelve.val(localStorage.getItem("12PM"))
    }
    if (localStorage.getItem("1PM") != one.val()) {
        one.val(localStorage.getItem("1PM"))
    }
    if (localStorage.getItem("2PM") != two.val()) {
        two.val(localStorage.getItem("2PM"))
    }
    if (localStorage.getItem("3PM") != three.val()) {
        three.val(localStorage.getItem("3PM"))
    }
    if (localStorage.getItem("4PM") != four.val()) {
        four.val(localStorage.getItem("4PM"))
    }
    if (localStorage.getItem("5PM") != five.val()) {
        five.val(localStorage.getItem("5PM"))
    }
    if (localStorage.getItem("6PM") != six.val()) {
        six.val(localStorage.getItem("6PM"))
    }
}
getSavedValues()



 