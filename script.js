// Moments.js used for displaying current month/day/year at the top of the work day scheduler.
var dayMonth = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayMonth)


// Variable for each hour time block.
var hourBlock00 = document.getElementById("hour-00");
var hourBlock01 = document.getElementById("hour-01");
var hourBlock08 = document.getElementById("hour-08");
var hourBlock09 = document.getElementById("hour-09");
var hourBlock10 = document.getElementById("hour-10");
var hourBlock11 = document.getElementById("hour-11");
var hourBlock12 = document.getElementById("hour-12");
var hourBlock13 = document.getElementById("hour-13");
var hourBlock14 = document.getElementById("hour-14");
var hourBlock15 = document.getElementById("hour-15");
var hourBlock16 = document.getElementById("hour-16");
var hourBlock17 = document.getElementById("hour-17");
var hourBlock18 = document.getElementById("hour-18");


// Variables for each time block hour start (for time comparisons).
var today00Start = moment('12:00am', "hh:mma");
var today01Start = moment('1:00am', "hh:mma");
var today08Start = moment('8:00am', "hh:mma");
var today09Start = moment('9:00am', "hh:mma");
var today10Start = moment('10:00am', "hh:mma");
var today11Start = moment('11:00am', "hh:mma");
var today12Start = moment('12:00pm', "hh:mma");
var today13Start = moment('1:00pm', "hh:mma");
var today14Start = moment('2:00pm', "hh:mma");
var today15Start = moment('3:00pm', "hh:mma");
var today16Start = moment('4:00pm', "hh:mma");
var today17Start = moment('5:00pm', "hh:mma");
var today18Start = moment('6:00pm', "hh:mma");


// Variable array of all time blocks for future time block color coding "for loop" below.
var hourBlocks = [
    hourBlock00,
    hourBlock01,
    hourBlock08,
    hourBlock09,
    hourBlock10,
    hourBlock11,
    hourBlock12,
    hourBlock13,
    hourBlock14,
    hourBlock15,
    hourBlock16,
    hourBlock17,
    hourBlock18
];

// Variable array of all time block start times for time block color coding "for loop" below.
var todayStarts = [
    today00Start,
    today01Start,
    today08Start,
    today09Start,
    today10Start,
    today11Start,
    today12Start,
    today13Start,
    today14Start,
    today15Start,
    today16Start,
    today17Start,
    today18Start
];


// "For loop" to color code all future time blocks.
for (var i = 0; i < todayStarts.length; i++) {
    var currentTime = moment();

    if (todayStarts[i] > currentTime) {
        hourBlocks[i].classList.remove("past");
        hourBlocks[i].classList.add("future");
    } else {
        console.log("Need to fix something");
    }
}


// Function to color code each time block based on whether it occurs in the present.
function colorCodePresent() {
    var currentTime = moment();

    if (today08Start < currentTime == true && today09Start > currentTime == true) {
        hourBlock08.classList.remove("past");
        hourBlock08.classList.add("present");
    } else if (today09Start < currentTime == true && today10Start > currentTime == true) {
        hourBlock09.classList.remove("past");
        hourBlock09.classList.add("present");
    } else if (today10Start < currentTime == true && today11Start > currentTime == true) {
        hourBlock10.classList.remove("past");
        hourBlock10.classList.add("present");
    } else if (today11Start < currentTime == true && today12Start > currentTime == true) {
        hourBlock11.classList.remove("past");
        hourBlock11.classList.add("present");
    } else if (today12Start < currentTime == true && today13Start > currentTime == true) {
        hourBlock12.classList.remove("past");
        hourBlock12.classList.add("present");
    } else if (today13Start < currentTime == true && today14Start > currentTime == true) {
        hourBlock13.classList.remove("past");
        hourBlock13.classList.add("present");
    } else if (today14Start < currentTime == true && today15Start > currentTime == true) {
        hourBlock14.classList.remove("past");
        hourBlock14.classList.add("present");
    } else if (today15Start < currentTime == true && today16Start > currentTime == true) {
        hourBlock15.classList.remove("past");
        hourBlock15.classList.add("present");
    } else if (today16Start < currentTime == true && today17Start > currentTime == true) {
        hourBlock16.classList.remove("past");
        hourBlock16.classList.add("present");
    } else if (today17Start < currentTime == true && today18Start > currentTime == true) {
        hourBlock17.classList.remove("past");
        hourBlock17.classList.add("present");
    } else {
        console.log("Need to fix something");
    }
    return;
}

// Calling the function to color code the "present" time blocks.
colorCodePresent();


// Variables for each time block's text area.
var textArea08 = document.querySelector("#hour08Text");
var textArea09 = document.querySelector("#hour09Text");
var textArea10 = document.querySelector("#hour10Text"); 
var textArea11 = document.querySelector("#hour11Text"); 
var textArea12 = document.querySelector("#hour12Text"); 
var textArea13 = document.querySelector("#hour13Text"); 
var textArea14 = document.querySelector("#hour14Text"); 
var textArea15 = document.querySelector("#hour15Text"); 
var textArea16 = document.querySelector("#hour16Text"); 
var textArea17 = document.querySelector("#hour17Text"); 


// Variables for time block's save button.
var hour08Btn = document.querySelector("#hour08Btn");
var hour09Btn = document.querySelector("#hour09Btn");
var hour10Btn = document.querySelector("#hour10Btn");
var hour11Btn = document.querySelector("#hour11Btn");
var hour12Btn = document.querySelector("#hour12Btn");
var hour13Btn = document.querySelector("#hour13Btn");
var hour14Btn = document.querySelector("#hour14Btn");
var hour15Btn = document.querySelector("#hour15Btn");
var hour16Btn = document.querySelector("#hour16Btn");
var hour17Btn = document.querySelector("#hour17Btn");


// Calling the function to display all time block text saved to local storage.
renderlastregistered();

// Function to display all time block text saved to local storage.
function renderlastregistered() {
    var textAreaInput08 = localStorage.getItem("hour08Text");
    var textAreaInput09 = localStorage.getItem("hour09Text");
    var textAreaInput10 = localStorage.getItem("hour10Text");
    var textAreaInput11 = localStorage.getItem("hour11Text");
    var textAreaInput12 = localStorage.getItem("hour12Text");
    var textAreaInput13 = localStorage.getItem("hour13Text");
    var textAreaInput14 = localStorage.getItem("hour14Text");
    var textAreaInput15 = localStorage.getItem("hour15Text");
    var textAreaInput16 = localStorage.getItem("hour16Text");
    var textAreaInput17 = localStorage.getItem("hour17Text");


    textArea08.textContent = textAreaInput08;
    textArea09.textContent = textAreaInput09;
    textArea10.textContent = textAreaInput10;
    textArea11.textContent = textAreaInput11;
    textArea12.textContent = textAreaInput12;
    textArea13.textContent = textAreaInput13;
    textArea14.textContent = textAreaInput14;
    textArea15.textContent = textAreaInput15;
    textArea16.textContent = textAreaInput16;
    textArea17.textContent = textAreaInput17;

}


// Save button event listener attached to each time block's save button, which saves input into local storage.
hour08Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput08 = document.querySelector("#hour08Text").value;
    localStorage.setItem("hour08Text",textAreaInput08);

    renderlastregistered();

});

hour09Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput09 = document.querySelector("#hour09Text").value;
    localStorage.setItem("hour09Text",textAreaInput09);

    renderlastregistered();

});

hour10Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput10 = document.querySelector("#hour10Text").value;
    localStorage.setItem("hour10Text",textAreaInput10);

    renderlastregistered();

});

hour11Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput11 = document.querySelector("#hour11Text").value;
    localStorage.setItem("hour11Text",textAreaInput11);

    renderlastregistered();

});

hour12Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput12 = document.querySelector("#hour12Text").value;
    localStorage.setItem("hour12Text",textAreaInput12);

    renderlastregistered();

});

hour13Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput13 = document.querySelector("#hour13Text").value;

    localStorage.setItem("hour13Text",textAreaInput13);

    renderlastregistered();

});

hour14Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput14 = document.querySelector("#hour14Text").value;
    localStorage.setItem("hour14Text",textAreaInput14);

    renderlastregistered();

});

hour15Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput15 = document.querySelector("#hour15Text").value;
    localStorage.setItem("hour15Text",textAreaInput15);

    renderlastregistered();

});

hour16Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput16 = document.querySelector("#hour16Text").value;
    localStorage.setItem("hour16Text",textAreaInput16);

    renderlastregistered();

});

hour17Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput17 = document.querySelector("#hour17Text").value;
    localStorage.setItem("hour17Text",textAreaInput17);

    renderlastregistered();

});
