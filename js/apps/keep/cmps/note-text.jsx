export class NoteText extends React.Component {

    state={
        text:''
    }

    render() {
        // console.log(this.props.note.info);
        const {txt} = this.props.note.info
        // if(!txt) return<div></div>
        return(
            <h1>Note Text: {txt} </h1>
        )

    }
}