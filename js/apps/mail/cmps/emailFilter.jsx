export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            status: '',
            txt: '', // no need to support complex text search
            isRead: null, // (optional property, if missing: show all)
            isStared: null, // (optional property, if missing: show all)
            lables: ' ' // has any of the labels
        },
    };

    handleChange = (ev) => {
        const field = ev.target.name
        let value = ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter()
        });
    };



    render() {
        const { status, txt, isRead, isStared, labels } = this.state.filterBy
        return (
            // <section className="mails-filter">
            //     <label htmlFor="filterBy">Filter : </label>
            //     <select name="isRead" onChange={this.handleChange} >
            //         <option value={true} >Read</option>
            //         <option value={false} >Unread</option>
            //     </select>
            // </section>
            <div className="title-filter">
                <label htmlFor='by-title'>By Title</label>
                <input
                    name='txt'
                    id='by-txt'
                    type='text'
                    placeholder='Text'
                    value={txt}
                    onChange={this.handleChange}
                />
            </div>

        )
    }
}
