const form = document.querySelector("#note-form"); // by id
const input = document.querySelector("#note-input");
const firstNote = document.querySelector(".note"); // first .note element
const allNotes = document.querySelectorAll(".note"); // all of them (a NodeList- collection of document object model[DOM] returned by querySelectorAll())

console.log(allNotes); //prints all notes from 0-2
console.log(form); // print the form
console.log(allNotes.length); // counting all notes prints 3 to the console