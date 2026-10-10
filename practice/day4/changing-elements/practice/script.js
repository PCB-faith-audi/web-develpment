const count = document.querySelector("note-count");
const input = document.querySelector("#note-input");
const button = document.querySelector("#add-button");
const noteList = document.querySelector("#note-list");

let totalNotes = 0;

button.addEventListener("click", function() {
  const noteText = input.value.trim();

  if (noteText === "") {
    input.focus();
    return;
}
    const note = document.createElement("li");
    note.textContent = noteText;
    noteList.appendChild(note);

    totalNotes = totalNotes +1;
    count.textContent = `You have ${totalNotes} notes.`;

    count.classList.add("highlight");

    input.value = "";
    input.focus();

});