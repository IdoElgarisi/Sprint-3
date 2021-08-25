// import { NotesList } from "../cmps/note-list.jsx";
// import { keepService } from "../services/keepService.js";

export class AddNote extends React.Component {

    state = {
        txtInput: ''
    }

    componentDidMount() {
        // const notes = this.loadNotes()
        // this.setState({ notes })
    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState({ txtInput: value })
    }

    render() {
        const { txtInput } = this.state
        // if (!notes) return <div>loading..</div>
        return (
            <section>
                <div className="add-note">
                    <form onSubmit={this.onAddNote}>
                        <label htmlFor="add-note"></label>
                        <input type="text" name="txtInput" placeholder='add your note!' value={txtInput} id="add-note" onChange={this.handleChange} autoFocus />
                        <button className="add-note-btn fa fa-far fa-plus-square"></button>
                    </form>
                    <div className="note-type-container">
                        <button className="fa fas fa-font"></button>
                        <button className="fa fas fa-image"></button>
                        <button className="fa fas fa-youtube"></button>
                        <button className="fa fas fa-list-ul"></button>
                        {/* <button onClick={() => this.onSelectType('NoteText')} className={`fas fa-font clean-btn ${noteType === 'NoteText' ? 'active-type' : ''} `}></button>
                        <button onClick={() => this.onSelectType('NoteImg')} className={`far fa-image clean-btn ${noteType === 'NoteImg' ? 'active-type' : ''}`}></button>
                        <button onClick={() => this.onSelectType('NoteVideo')} className={`fab fa-youtube clean-btn ${noteType === 'NoteVideo' ? 'active-type' : ''}`}></button>
                        <button onClick={() => this.onSelectType('NoteTodos')} className={`fas fa-list-ul clean-btn ${noteType === 'NoteTodos' ? 'active-type' : ''}`}></button> */}
                    </div>
                </div>
            </section>
        )
    }

}






