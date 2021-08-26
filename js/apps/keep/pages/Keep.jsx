import { AddNote } from "../cmps/note-add.jsx";
import { NotesList } from "../cmps/note-list.jsx";
import { keepService } from "../services/keepService.js";

export class KeepApp extends React.Component {

    state = {
        notes: null,
    }

    componentDidMount() {
        const notes = keepService.query()
        this.setState({ notes })
    }


    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes })

    }


    render() {
        const { notes } = this.state
        if (!notes) return <div>loading..</div>
        return (
            <section>
                <AddNote loadNotes={this.loadNotes} />
                <NotesList notes={notes} loadNotes={this.loadNotes} />
            </section>
        )
    }

}






