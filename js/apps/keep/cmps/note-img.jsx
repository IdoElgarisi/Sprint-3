




export class NoteImg extends React.Component {

    state = {
    }

    render() {
        const { url } = this.props.note.info
        if (!url) return <div>loding..</div>
        return (
            <div className="img-container">
                <img
                    className="note-img"
                    src={url}
                />
            </div>
        )
    }

}
