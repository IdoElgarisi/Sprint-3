export class NoteVideo extends React.Component {
    state = {
        loaded: false,
    }


    render() {
        // const { loaded } = this.state
        const { youtubeId } = this.props.note.info
        return (
            <iframe width="100%" height="200px"
                src={`https://www.youtube.com/embed/${youtubeId}`}>
            </iframe>
        )
    }
}