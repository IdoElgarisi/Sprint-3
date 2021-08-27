import { keepService } from "../services/keepService.js"
import { ColorPalette } from "./ColorPalette.jsx"
import { EditNote } from "./note-edit.jsx"

export class NoteSetup extends React.Component {

    state = {
        note: null,
        isShowPalette: false,
        isEditMode: false
    }

    componentDidMount() {
        const { note } = this.props
        this.setState({ note })
    }
    togglePalette = () => {
        const { isShowPalette } = this.state
        this.setState({ isShowPalette: !isShowPalette })
    }
    onSetColor = (color) => {
        const { note } = this.state
        const { onExitHover } = this.props
        keepService.updateNoteColor(note, color)
            .then(() => onExitHover())
    }

    onDeleteNote = () => {
        const { note } = this.state
        const { onExitHover, loadNotes } = this.props
        keepService.removeNote(note)
            .then(() => loadNotes())
    }
    onPinnedNote = () => {
        const { note } = this.state
        const { loadNotes } = this.props
        keepService.setPinnedNote(note)
            .then(() => loadNotes())
    }
    toggleEditMode = () => {
        const { isEditMode } = this.state
        this.setState({ isEditMode: !isEditMode })
    }

    onChangeNote = (txt) => {

        const { note } = this.state
        const { loadNotes } = this.props
        note.info.title = txt
        keepService.updateNote(note)
            .then(() => loadNotes())
    }
    onCopyNote = () => {
        const { note } = this.state
        const { loadNotes } = this.props
        keepService.copyNote(note)
            .then(() => loadNotes())
    }

    render() {
        const { note, isShowPalette, isEditMode } = this.state
        if (!note) return <div></div>
        return (
            <section className="note-setup flex">
                <div className="setup-buttons flex">
                    <button onClick={this.togglePalette} className="fa fas fa-palette clear-btn"></button>
                    <button onClick={this.onDeleteNote} className="fas fa-trash clear-btn"></button>
                    <button onClick={this.onPinnedNote} className="fa fas fa-thumbtack clear-btn"></button>
                    <button className="fas fa-envelope-open-text clear-btn"></button>
                    <button onClick={this.toggleEditMode} className="fas fa-edit clear-btn"></button>
                    <button onClick={this.onCopyNote} className="fas fa-copy clear-btn"></button>
                </div>
                <div>
                    {isShowPalette && <ColorPalette onSetColor={this.onSetColor} />}
                    {isEditMode && <EditNote onChangeNote={this.onChangeNote} />}
                </div>
            </section>
        )
    }
}
