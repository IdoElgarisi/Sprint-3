export class NoteFilter extends React.Component {
    state = {
        filterBy: {
            noteType: '',
            txt: ''
        },
    };
    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onSetFilter = (ev) => {
        // ev.preventDefault();
        // console.log(ev.target.value);
        // this.props.onSetFilter(this.state.filterBy)
    };

    render() {
        const { noteType, txt } = this.state
        return (
            <section>

                <select onChange={this.handleChange}>
                    <option name='noteType' value={'note-text'}>Text</option>
                    <option value={'note-img'}>Image</option>
                    <option value={'note-video'}>Video</option>
                    <option value={'note-todo'}>Todo</option>
                </select>
                <form className='note-filter flex' onSubmit={this.onSetFilter}>
                    {/* <label htmlFor='by-type'>Type</label> */}
                    {/* <input name='noteType' id='by-type' type='text' placeholder='Search Note' value={noteType} onChange={this.handleChange} /> */}
                    {/* <label htmlFor='by-min-price'>Min</label>
                <input name='minPrice' id='by-min-price' type='number' placeholder='enter min price' value={minPrice} onChange={this.handleChange} />
                <label htmlFor='by-max-price'>Max</label>
            <input name='maxPrice' id='by-max-price' type='number' placeholder='enter max price' value={maxPrice} onChange={this.handleChange} /> */}
                </form>
            </section>
        )
    }

}