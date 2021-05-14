const notesEl = document.querySelector(".notes");
const addBtn = document.querySelector('.add');

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}


addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement('div');
    note.classList.add(".note");
    note.innerHTML = `
    <div class="notes">
    <div class="tools">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="fas fa-minus"></i></button>
    </div>
    <div class="main">
    </div>
    <textarea spellcheck="false" class="hidden"></textarea>
    </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    const tools = note.querySelector(".tools");
    textArea.value = text;
    main.innerHTML = marked(text);


    editBtn.addEventListener('click', () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        tools.classList.toggle('edit-mode');
    });
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);
        updateLS();
    });
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })
    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value)
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}