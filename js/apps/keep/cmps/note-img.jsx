




export class NoteImg extends React.Component {

    state = {
    }

    render() {
        const { url } = this.props.note.info
        const { title } = this.props.note
        if (!url) return <div>loding..</div>
        return (
            <div className="img-container">
                {/* <h3>{title}</h3> */}
                <img
                    className="note-img"
                    src={url}
                />
            </div>
        )
    }

}
