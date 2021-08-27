import { AddNote } from "../cmps/note-add.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";
import { NotesList } from "../cmps/note-list.jsx";
import { keepService } from "../services/keepService.js";

export class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }

    componentDidMount() {
        const notes = keepService.query()
        this.setState({ notes })
    }


    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes })
    }

    onSetFilter = (filterBy) => {
        console.log(filterBy);
        this.setState({ filterBy }, this.loadNotes);
    }


    render() {
        const { notes } = this.state
        if (!notes) return <div>loading..</div>
        return (
            <section>
                <NoteFilter onSetFilter={this.onSetFilter} />
                <AddNote loadNotes={this.loadNotes} />
                <NotesList notes={notes} loadNotes={this.loadNotes} />
            </section>
        )
    }

}






