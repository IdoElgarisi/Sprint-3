import { NoteText } from "./note-text.jsx";

export class NotePreview extends React.Component {

    state = {
        note: null,
        currNoteType: null
    }

    componentDidMount() {
        const { note } = this.props
        this.setState({ note, currNoteType: note.type })
    }

    render() {
        const { note, currNoteType } = this.state
        console.log(currNoteType);
        if (!note) return <div>loading..</div>
        const DynamicCmp = (props) => {
            switch (currNoteType) {
                case 'note-txt':
                    return <NoteText {...props} />
                default:
                    return <div>No Notes</div>
            }
        }
        return (
            <section>
                <DynamicCmp note={note} />
            </section>
        )
    }

}








