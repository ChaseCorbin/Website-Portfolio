const newNote = document.querySelector('#plus');
const note = document.getElementsByTagName('textarea');
const deleteBtn = document.getElementById('minus');
const divNote = document.getElementById('addNote');

function stickyNotesFunction() {
    let h = window.innerHeight;
    let w = window.innerWidth;
    let noteCount = document.getElementById('addNote').children.length;
    // if the screen is smaller then 1260 only 5 notes may be created
    if (w < 1260) {
        if (noteCount >= 5) {
            return;
        }
    } else {  // if the screen is bigger then 1260 only 8 notes may be created
        if (noteCount >= 8) {
            return;
        }
    }
    const addNote = document.createElement("textarea");
    // console.log('add note clicked');

    divNote.appendChild(addNote);
    deleteBtn.addEventListener('click', function(e) {
        // console.log('delete note clicked');
        document.location.reload();
    });

    // console.log(noteCount);
    // console.log(h, w);
}
