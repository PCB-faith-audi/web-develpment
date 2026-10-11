// ---------- 1. Select the elements we need ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const count = document.querySelector("#note-count");
const list = document.querySelector("#notes-list");

const STORAGE_KEY = "quicknotes";

// ---------- 2. Load saved notes (or start empty) ----------
let notes = loadNotes();

function loadNotes() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : []
}

function saveNotes() {
    localStorage(STORAGE_KEY, JSON.stringify(notes));
}

// ---------- 3. Draw the notes on the page ----------
function render() {
    list.innerHTML = ""; // clear the old list

    notes.forEach((note) => {
        const li = document.createElement("li");
        li.classList.add("note");

        const text = document.createElement("span");
        text.textContent = note.text; // safe for user text

        const del = document.createElement("button");
        del.textContent = "delete";
        del.classList.add("delete-btn");
        del.addEventListener("click", () => deleteNote(note.id));

        li.appendChild(text);
        li.appendChild(del);
        list.appendChild(li);
    });

    count.textContent =
        notes.length === 1 ? "You have 1 note." : `You have ${notes.length} notes.`;
}

// ---------- 4. Add a new note ----------
function addNote(text) {
    notes.push({id: Date.now(), text: text });
    savedNotes();
    render();
}

function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
    savedNotes();
    render();
}

// ---------- 5. Listen for the form ----------
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return; // ignore empty notes
    addNote(text);
    input.value = "";
    input.focus();
});

// ---------- 6. Draw once when the page first loads ----------
render();