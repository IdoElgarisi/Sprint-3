
import { storageService } from '../../../services/storageService.js'
import { utilService } from '../../../services/util.service.js'


const KEY = 'notes'
const notes = createNotes()
// const books = require()
export const keepService = {
    query,
    updateNote,
    removeNote,
    addNote,
    updateDoneTodo,
    updateNoteColor,
    setPinnedNote
}

function query(filterBy) {

    return notes
}

function updateNote(note) {
}

function removeNote(note) {
    const noteIdx = getNoteId(note)
    notes.splice(noteIdx, 1)
    _saveToStorage()
    return Promise.resolve()
}

function addNote(note) {
    note.id = utilService.makeId()
    notes.push(note)
    _saveToStorage()
    return Promise.resolve()

}

function setPinnedNote(pinnedNote) {
    const noteIdx = getNoteId(pinnedNote)
    console.log('before', pinnedNote.isPinned);
    pinnedNote.isPinned = !pinnedNote.isPinned
    if (pinnedNote.isPinned) {
        notes.splice(noteIdx, 1)
        notes.unshift(pinnedNote)
    }
    else {
        notes.splice(noteIdx, 1)

        // const note = notes.shift()
        notes.push(pinnedNote)
    }

    _saveToStorage()
    return Promise.resolve()

}

function getNoteId(note) {
    return notes.findIndex((currNote) => currNote.id === note.id)
}

function updateNoteColor(currNote, color) {
    const noteIdx = getNoteId(currNote)
    notes[noteIdx].style.backgroundColor = color
    _saveToStorage()
    return Promise.resolve()

}

function updateDoneTodo(note, newTodo) {
    const { todos } = note.info
    //     const note = notes.find(note => noteId === note.id)
    var todoIdx = todos.findIndex(todo => todo.id === newTodo.id)
    todos[todoIdx].isDone = !todos[todoIdx].isDone
    // console.log(todoIdx);


    // const todoIdx = todos.indexOf(todo)
    // todos[todoIdx].doneAt = !todos[todoIdx].doneAt ? new Date() : null
    note.info.todos = todos
    // console.log(note.info.todos);
    _saveToStorage()
    return Promise.resolve(todos)
}
function createNotes() {
<<<<<<< HEAD
    var notes = _loadFromStorage()
=======
    // console.log('check');
    var notes = _loadFromStorage()
    // console.log(notes);
>>>>>>> 143fddfba9cfb5dd1d9d25196f12799853d5dc2a
    if (notes) return notes;
    notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: false,
            info: {
                title: 'Lets Go',
                txt: 'Fullstack Me Baby!'
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n102",
            type: "note-img",
            isPinned: false,
            info: {
                url: "https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/blue-morpho-350x150-matthiasfr-pixabay-crop.jpg?itok=Y8DXROpH",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n103",
            type: "note-todo",
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { id: utilService.makeId(), txt: 'Driving liscence', isDone: true },
                    { id: utilService.makeId(), txt: 'Coding power', isDone: false },]
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n104",
            type: "note-txt",
            isPinned: false,
            info: {
                title: 'My Favorites',
                txt: "Common Lets Read!"
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n105",
            type: "note-img",
            isPinned: false,
            info: {
                url: "https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n106",
            type: "note-video",
            isPinned: false,
            info: {
                title: 'Amazing Sea',
                youtubeId: "qcSSpoTrbXk"
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        },
        {
            id: "n107",
            type: "note-todo",
            isPinned: false,
            info: {
                title: 'Home Tasks',
                todos: [
                    { id: utilService.makeId(), txt: 'Do Homework', isDone: true },
                    { id: utilService.makeId(), txt: 'Need Make Something', isDone: false },
                    { id: utilService.makeId(), txt: 'Need Finish css', isDone: true },
                    { id: utilService.makeId(), txt: 'Finish Play', isDone: true }]
            },
            style: {
                backgroundColor: "#cce6ff"
            }
        }
    ];
    storageService.saveToStorage(KEY, notes)
    return notes
}




function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
function _saveToStorage() {
    storageService.saveToStorage(KEY, notes)
}