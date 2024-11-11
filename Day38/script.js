// // script.js

// document.addEventListener('DOMContentLoaded', function() {
//     const daysContainer = document.querySelector('.days');
//     const notesList = document.querySelector('.notes-list');
//     const addNoteButton = document.querySelector('.add-note');
//     const noteInput = document.querySelector('.note-input input');
//     const weeks = document.querySelector('.weekdays');

//     for (let i = 1; i <= 30; i++) {
    
//         const dayElement = document.createElement('span');
//         dayElement.textContent = i;
//         if (i === 9) {
//             dayElement.classList.add('active');
//         }
       
//         daysContainer.appendChild(dayElement);
    
//   }
//     // Add note functionality
//     addNoteButton.addEventListener('click', function() {
//         if (noteInput.value.trim() !== "") {
//             const noteItem = document.createElement('li');
//             noteItem.textContent = noteInput.value;
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'x';
//             deleteButton.classList.add('delete-note');
//             deleteButton.addEventListener('click', function() {
//                 noteItem.remove();
//             });
//             noteItem.appendChild(deleteButton);
//             notesList.appendChild(noteItem);
//             noteInput.value = "";
//         }
//     });
// });

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const notesList = document.querySelector('.notes-list');
    const addNoteButton = document.querySelector('.add-note');
    const noteInput = document.querySelector('.note-input input');

    // Generate days for the month (Example: September 2013)
    const daysInMonth = 30;
    const startDay = 4; // September 1st is a Thursday
    for (let i = 1; i < startDay; i++) {
        const emptyDay = document.createElement('span');
        daysContainer.appendChild(emptyDay);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('span');
        dayElement.textContent = i;
        if (i === 9) {
            dayElement.classList.add('active');
        }
        daysContainer.appendChild(dayElement);
    }

    // Add note functionality
    addNoteButton.addEventListener('click', function() {
        if (noteInput.value.trim() !== "") {
            const noteItem = document.createElement('li');
            noteItem.textContent = noteInput.value;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete-note');
            deleteButton.addEventListener('click', function() {
                noteItem.remove();
            });
            noteItem.appendChild(deleteButton);
            notesList.appendChild(noteItem);
            noteInput.value = "";
        }
    });
});
