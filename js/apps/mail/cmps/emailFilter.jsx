export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '', // no need to support complex text search
            isRead: null, // (optional property, if missing: show all)
        },
    };

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    };
    // onReadFilter = (ev) => {
    //     const value = ev.target.value
    //     console.log('hi',value);


    // }

    render() {
        const { txt, isRead } = this.state.filterBy
        return (
            <section className="mails-filter">
                <form className='emails-filter' onSubmit={this.onFilter}>
                    <div className="txt-filter">
                        <label htmlFor='by-txt'>By subject</label>
                        <input
                            name='txt'
                            id='by-txt'
                            type='text'
                            placeholder='Search Mails...'
                            value={txt}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="read-filter">
                        <label htmlFor="filterBy">Filter : </label>
                        <select name="isRead" onChange={this.onReadFilter} >
                            <option name="isRead" value='read' >Read</option>
                            <option name="isRead" value='unread' >Unread</option>
                        </select>
                    </div>

                    <button>Filter</button>
                </form>
            </section>
        )
    }
    //    render() {
    //         const { txt, isRead} = this.state.filterBy
    //         return (
    //             <secti className="mails-filter">
    //                 
    //                 <div className="txt-filter">
    //                     <label htmlFor='by-txt'>By subject</label>
    //                     <input
    //                         name='txt'
    //                         id='by-txt'
    //                         type='text'
    //                         placeholder='Search mails...'
    //                         value={txt}
    //                         onChange={this.handleChange}
    //                     />
    //                 </div>
    //             </secti on>
    //         )
    //     }
}
