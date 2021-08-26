
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
    updateDoneTodo
}

function query(filterBy) {

    return notes
}

function updateNote(note) {
}

function removeNote(noteId) {

}

function addNote(note) {
    note.id = utilService.makeId()
    notes.unshift(note)
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
    // console.log('check');
    var notes = _loadFromStorage()
    // console.log(notes);
    if (notes) return notes;
    notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/blue-morpho-350x150-matthiasfr-pixabay-crop.jpg?itok=Y8DXROpH",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        },
        {
            id: "n104",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Common Lets Read!"
            }
        },
        {
            id: "n105",
            type: "note-img",
            info: {
                url: "https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n106",
            type: "note-video",
            isPinned: false,
            info: {
                youtubeId: "qcSSpoTrbXk"
            }
        },
        {
            id: "n107",
            type: "note-todo",
            isPinned: false,
            info: {
                todos: [
                    { id: utilService.makeId(), txt: 'Do Homework', isDone: true },
                    { id: utilService.makeId(), txt: 'Need Make Something', isDone: false },
                    { id: utilService.makeId(), txt: 'Need Finish css', isDone: true },
                    { id: utilService.makeId(), txt: 'Finish Play', isDone: true }]
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