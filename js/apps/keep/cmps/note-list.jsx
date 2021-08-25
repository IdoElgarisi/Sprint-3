import { NotePreview } from "./note-preview.jsx";

export function NotesList({ notes }) {
    return (
        <div className="notes-list">
            <h1>note list</h1>
            {notes.map(note => <NotePreview note={note} key={note.id} />)}
        </div>
    )
}