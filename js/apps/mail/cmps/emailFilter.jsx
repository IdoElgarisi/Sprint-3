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
        console.log(ev);
        const field = ev.target.id;
        let value;
        if (ev.target.value === 'true') value = true
        if (ev.target.value === 'false') value = false
        else value = ev.target.value
        console.log('field', field);
        console.log('value', value);
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };



    render() {
        return (
            <section className="mails-filter">
                <label htmlFor="filterBy">Filter : </label>
                <select name="filterList" onChange={this.handleChange} >
                    <option name="filterList" id="isRead" value={true} >Read</option>
                    <option name="filterList" id="isRead" value={false} >Unread</option>
                </select>
            </section>
        )
    }
}
