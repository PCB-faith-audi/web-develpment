const count = document.querySelector("#note-count");

// Change the text
count.textContent = "You have 5 notes.";

// change a style directly (CSS property names become camelCase)
count.style.color = "#8e0000";
count.style.fontWeight = "bold";

// Better: add/remove CSS classes defined in style.css
count.classList.add("highlight");
count.classList.remove("highlight");
count.classList.toggle("highlight"); // add if not present, remove if present

// Read and change what the user typed in an input
const input = document.querySelector("#note-input");
console.log(input.value); // prints the value of the input to the console
input.value = "This is a new note."; // changes the value of the input to "This is a new note."
input.focus(); // puts the cursor in the input field so the user can type