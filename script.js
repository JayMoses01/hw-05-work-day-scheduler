var dayMonth = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayMonth)

// Variable for each hour time block get element by ID
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


console.log(hourBlock08);
console.log(hourBlock09);
console.log(hourBlock10);
console.log(hourBlock11);
console.log(hourBlock12);
console.log(hourBlock13);
console.log(hourBlock14);
console.log(hourBlock15);
console.log(hourBlock16);
console.log(hourBlock17);


var today08Start = moment('8:00am', "hh:mm:ss");
var today09Start = moment('9:00am', "hh:mm:ss");
var today10Start = moment('10:00am', "hh:mm:ss");
var today11Start = moment('11:00am', "hh:mm:ss");
var today12Start = moment('12:00pm', "hh:mm:ss");
var today13Start = moment('1:00pm', "hh:mm:ss");
var today14Start = moment('2:00pm', "hh:mm:ss");
var today15Start = moment('3:00pm', "hh:mm:ss");
var today16Start = moment('4:00pm', "hh:mm:ss");
var today17Start = moment('5:00pm', "hh:mm:ss");
var today18Start = moment('6:00pm', "hh:mm:ss");
var today19Start = moment('7:00pm', "hh:mm:ss");
var today20Start = moment('8:00pm', "hh:mm:ss");
var today21Start = moment('9:00pm', "hh:mm:ss");
var today22Start = moment('10:00pm', "hh:mm:ss");
var today23Start = moment('11:00pm', "hh:mm:ss");


var hourBlocks = [
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

// Finish this array and then try again. I already updated the for loop.
var todayStarts = [
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


/*

// Function to color code each time block based on whether it occurs in the present
function colorCodePresent() {
    var currentTime = moment();
    console.log(currentTime);
    console.log(today08Start);

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
    } else if (today18Start < currentTime == true && today19Start > currentTime == true) {
        hourBlock18.classList.remove("past");
        hourBlock18.classList.add("present");
    } else if (today19Start < currentTime == true && today20Start > currentTime == true) {
        hourBlock19.classList.remove("past");
        hourBlock19.classList.add("present");
    } else if (today20Start < currentTime == true && today21Start > currentTime == true) {
        hourBlock20.classList.remove("past");
        hourBlock20.classList.add("present");
    } else if (today21Start < currentTime == true && today22Start > currentTime == true) {
        hourBlock21.classList.remove("past");
        hourBlock21.classList.add("present");
    } else if (today22Start < currentTime == true && today23Start > currentTime == true) {
        hourBlock22.classList.remove("past");
        hourBlock22.classList.add("present");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodePresent();



*/






/*

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture08() {
    var currentTime = moment();
    console.log(currentTime);
    console.log(today08Start);

    if (today08Start > currentTime) {
        hourBlock08.classList.remove("past");
        hourBlock08.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture08();


//create a colorCodeFuture function for each time block--to force each condition to run.


//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture09() {
    var currentTime = moment();

    if (today09Start > currentTime) {
        hourBlock09.classList.remove("past");
        hourBlock09.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture09();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture10() {
    var currentTime = moment();

    if (today10Start > currentTime) {
        hourBlock10.classList.remove("past");
        hourBlock10.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture10();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture11() {
    var currentTime = moment();

    if (today11Start > currentTime) {
        hourBlock11.classList.remove("past");
        hourBlock11.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture11();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture12() {
    var currentTime = moment();
 
    if (today12Start > currentTime) {
        hourBlock12.classList.remove("past");
        hourBlock12.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture12();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture13() {
    var currentTime = moment();

    if (today13Start > currentTime) {
        hourBlock13.classList.remove("past");
        hourBlock13.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture13();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture14() {
    var currentTime = moment();

    if (today14Start > currentTime) {
        hourBlock14.classList.remove("past");
        hourBlock14.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture14();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture15() {
    var currentTime = moment();
   
    if (today15Start > currentTime) {
        hourBlock15.classList.remove("past");
        hourBlock15.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture15();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture16() {
    var currentTime = moment();

    if (today16Start > currentTime) {
        hourBlock16.classList.remove("past");
        hourBlock16.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture16();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture17() {
    var currentTime = moment();

    if (today17Start > currentTime) {
        hourBlock17.classList.remove("past");
        hourBlock17.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture17();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture18() {
    var currentTime = moment();

    if (today18Start > currentTime) {
        hourBlock18.classList.remove("past");
        hourBlock18.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture18();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture19() {
    var currentTime = moment();

    if (today19Start > currentTime) {
        hourBlock19.classList.remove("past");
        hourBlock19.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture19();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture20() {
    var currentTime = moment();

    if (today20Start > currentTime) {
        hourBlock20.classList.remove("past");
        hourBlock20.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture20();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture21() {
    var currentTime = moment();

    if (today21Start > currentTime) {
        hourBlock21.classList.remove("past");
        hourBlock21.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture21();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture22() {
    var currentTime = moment();

    if (today22Start > currentTime) {
        hourBlock22.classList.remove("past");
        hourBlock2.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture22();

//Function to color code each time block based on whether it occurs in the future
function colorCodeFuture23() {
    var currentTime = moment();
 
    if (today23Start > currentTime) {
        hourBlock23.classList.remove("past");
        hourBlock23.classList.add("future");
    } else {
        console.log("Need to fix something");
    }
    return;
}

colorCodeFuture23();
*/






/*
hour08Btn = $('#hour08Btn');
hour09Btn = $('#hour09Btn');
*/




// Variable for each time block's text area
var textArea08 = document.querySelector("#hour08Text"); // Input and destination. Akin to emailInput and userEmailSpan variables.
var textArea09 = document.querySelector("#hour09Text"); // Input and destination. Akin to emailInput and userEmailSpan variables.
// Variables for save buttons
var hour08Btn = document.querySelector("#hour08Btn"); // Hour 8 AM timeblock save button.
var hour09Btn = document.querySelector("#hour09Btn"); // Hour 9 AM timeblock save button.
// Input and destination are the same location... So now userEmailSpan-like variables needed.


renderlastregistered();

function renderlastregistered() {
    var textAreaInput08 = localStorage.getItem("hour08Text");

    textArea08.textContent = textAreaInput08;
    
}




// Save button event listener attached to each hour's save button
//hour08Btn.on('submit', handleFormSubmit);
hour08Btn.addEventListener("click",function(event) {
    event.preventDefault;

    var textAreaInput08 = document.querySelector("#hour08Text").value;

    localStorage.setItem("hour08text",textAreaInput08);
    renderlastregistered();


});




/*
//CUT

// Function that saves entry from each textarea into localStorage
function handleFormSubmit(event) {
    event.preventDefault();

    var textAreaInput08 = document.querySelector("#hour08Text")
    localStorage.setItem("hour08Text", textAreaInputEl08);



}
*/
