(function () {
    const newNote = document.querySelector('#plus');
    const note = document.createElement('textarea');
    const deleteBtn = document.createElement('button')
    

    newNote.addEventListener('click', function() {
        note.innerHTML = "Add notes for fun!!";
        deleteBtn.innerHTML = "-";
        console.log('clicked');
        newNote.before(note);
        newNote.after(deleteBtn);
    });
    deleteBtn.addEventListener('click', function(){
        note.remove(note);
        deleteBtn.remove(deleteBtn);
    });
})();