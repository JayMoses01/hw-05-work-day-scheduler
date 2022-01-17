var dayMonth = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayMonth)

// Variable for each hour time block get element by ID
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
var hourBlock19 = document.getElementById("hour-19");
var hourBlock20 = document.getElementById("hour-20");
var hourBlock21 = document.getElementById("hour-21");
var hourBlock22 = document.getElementById("hour-22");
var hourBlock23 = document.getElementById("hour-23");


// Variables for each time block hour start for time comparisons
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
var today19Start = moment('7:00pm', "hh:mma");
var today20Start = moment('8:00pm', "hh:mma");
var today21Start = moment('9:00pm', "hh:mma");
var today22Start = moment('10:00pm', "hh:mma");
var today23Start = moment('11:00pm', "hh:mma");

// Variable array of all time blocks.
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
    hourBlock18,
    hourBlock19,
    hourBlock20,
    hourBlock21,
    hourBlock22,
    hourBlock23
];

// Variable array of all time block starts.
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
    today18Start,
    today19Start,
    today20Start,
    today21Start,
    today22Start,
    today23Start
];


// for loop to use instead of checking all future
for (var i = 0; i < todayStarts.length; i++) {
    var currentTime = moment();

    if (todayStarts[i] > currentTime) {
        hourBlocks[i].classList.remove("past");
        hourBlocks[i].classList.add("future");
    } else {
        console.log("Need to fix something");
    }
}

// for loop to color code each time block based on whether it occurs in the present
// DOESN'T CURRENTLY WORK. MAYBE TRY THE FUNCTION COLORCODEPRESENT IF/ELSE IF STATMENT THAT I ORIGINALLY HAD.
for (var i = 0; i < todayStarts.length; i++) {
    var currentTime = moment();

    if (todayStarts[i].isBefore(currentTime) == true && todayStarts[i].isAfter(currentTime) == true) {
        hourBlocks[i].classList.remove("past");
        hourBlocks[i].classList.add("present");
    } else {
        console.log("Need to fix something");
    }
}


// Variable for each time block's text area
var textArea08 = document.querySelector("#hour08Text"); // Input and destination. Akin to emailInput and userEmailSpan variables.
var textArea09 = document.querySelector("#hour09Text"); // Input and destination. Akin to emailInput and userEmailSpan variables.
var textArea10 = document.querySelector("#hour10Text"); 
var textArea11 = document.querySelector("#hour11Text"); 
var textArea12 = document.querySelector("#hour12Text"); 
var textArea13 = document.querySelector("#hour13Text"); 
var textArea14 = document.querySelector("#hour14Text"); 
var textArea15 = document.querySelector("#hour15Text"); 
var textArea16 = document.querySelector("#hour16Text"); 
var textArea17 = document.querySelector("#hour17Text"); 
var textArea18 = document.querySelector("#hour18Text"); 
var textArea19 = document.querySelector("#hour19Text"); 
var textArea20 = document.querySelector("#hour20Text"); 
var textArea21 = document.querySelector("#hour21Text"); 
var textArea22 = document.querySelector("#hour22Text"); 
var textArea23 = document.querySelector("#hour23Text"); 


// Variables for save buttons
var hour08Btn = document.querySelector("#hour08Btn"); // Hour 8 AM timeblock save button.
var hour09Btn = document.querySelector("#hour09Btn"); // Hour 9 AM timeblock save button.
var hour10Btn = document.querySelector("#hour10Btn");
var hour11Btn = document.querySelector("#hour11Btn");
var hour12Btn = document.querySelector("#hour12Btn");
var hour13Btn = document.querySelector("#hour13Btn");
var hour14Btn = document.querySelector("#hour14Btn");
var hour15Btn = document.querySelector("#hour15Btn");
var hour16Btn = document.querySelector("#hour16Btn");
var hour17Btn = document.querySelector("#hour17Btn");
var hour18Btn = document.querySelector("#hour18Btn");
var hour19Btn = document.querySelector("#hour19Btn");
var hour20Btn = document.querySelector("#hour20Btn");
var hour21Btn = document.querySelector("#hour21Btn");
var hour22Btn = document.querySelector("#hour22Btn");
var hour23Btn = document.querySelector("#hour23Btn");
// Input and destination are the same location... So now userEmailSpan-like variables needed.


renderlastregistered();

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
    var textAreaInput18 = localStorage.getItem("hour18Text");
    var textAreaInput19 = localStorage.getItem("hour19Text");
    var textAreaInput20 = localStorage.getItem("hour20Text");
    var textAreaInput21 = localStorage.getItem("hour21Text");
    var textAreaInput22 = localStorage.getItem("hour22Text");
    var textAreaInput23 = localStorage.getItem("hour23Text");

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
    textArea18.textContent = textAreaInput18;
    textArea19.textContent = textAreaInput19;
    textArea20.textContent = textAreaInput20;
    textArea21.textContent = textAreaInput21;
    textArea22.textContent = textAreaInput22;
    textArea23.textContent = textAreaInput23;

}


// Save button event listener attached to each hour's save button
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

hour18Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput18 = document.querySelector("#hour18Text").value;
    localStorage.setItem("hour18Text",textAreaInput18);

    renderlastregistered();

});

hour19Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput19 = document.querySelector("#hour19Text").value;
    localStorage.setItem("hour19Text",textAreaInput19);

    renderlastregistered();

});

hour20Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput20 = document.querySelector("#hour20Text").value;
    localStorage.setItem("hour20Text",textAreaInput20);

    renderlastregistered();

});

hour21Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput21 = document.querySelector("#hour21Text").value;
    localStorage.setItem("hour21Text",textAreaInput21);

    renderlastregistered();

});

hour22Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput22 = document.querySelector("#hour22Text").value;
    localStorage.setItem("hour22Text",textAreaInput22);

    renderlastregistered();

});

hour23Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput23 = document.querySelector("#hour23Text").value;
    localStorage.setItem("hour23Text",textAreaInput23);

    renderlastregistered();

});
