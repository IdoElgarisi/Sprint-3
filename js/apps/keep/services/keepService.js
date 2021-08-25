// import { utilService } from './util.service.js'
// import { storageService } from '../services/storageService'

import { storageService } from '../../../services/storagService.js'


const KEY = 'notes'
const notes = createNotes()
// const books = require()
export const keepService = {
    query,
    updateNote,
    removeNote,
    addNote
}

function query(filterBy) {

    return notes
}

function updateNote(noteId){
    
}

function removeNote(noteId){

}

function addNote(){

}




function createNotes() {
    var notes = _loadFromStorage()
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
                url: "http://some-img/me",
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
        }
    ];
    storageService.saveToStorage(KEY, notes)
    return notes
}




function _loadFromStorage() {
    storageService.loadFromStorage(KEY)
}
function _saveToStorage() {
    storageService.saveToStorage(KEY, notes)
}