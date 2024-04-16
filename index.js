let count = 0;
let string = "Previous Entries: ";
let showSaved = document.getElementById("showSaved");
let showCounter = document.getElementById("showCounter");

function increment(){
    count+=1;
    showCounter.innerHTML = count;
}

function save(){
    string += count + " - ";
    count = 0;
    showCounter.innerHTML = 0;
    showSaved.innerHTML = string;
}