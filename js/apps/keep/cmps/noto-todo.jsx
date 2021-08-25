import { keepService } from "../services/keepService.js"

export class NoteTodo extends React.Component {

    state = {
        todos: [],
    }

    componentDidMount() {
        const { todos } = this.props.note.info
        this.setState({ todos })
    }

    getCurrTime = (doneAt) => {
        const date = new Date(doneAt).toLocaleString('en-US', { hour12: false })
        return date.split(',')
    }

    toggleTodo = (todo) => {
        // keepService.updateDoneTodo()
        // console.log('loadNotes', loadNotes);
        if (!todo.txt) return
        const { note, loadNote } = this.props
        const { todos } = this.state
        keepService.updateDoneTodo(note, todo)
            .then(newTodos => {
                this.setState({ todos: newTodos })
            })


    }
    render() {
        const { todos, loadNotes } = this.state
        if (!todos) return <div>loding..</div>
        console.log(loadNotes);
        return (
            <section className="todos-container">
                <ul className="clean-list ">
                    {todos.map(todo => {
                        if (todo.isDone) {
                            return (
                                <li key={todo.id}>
                                    <textarea name="example" className="done-todo" spellCheck="false" value={todo.txt} readOnly></textarea>
                                    <button onClick={() => this.toggleTodo(todo)} className="fa fas fa-check-circle"></button>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={todo.id}>
                                    <textarea spellCheck="false" value={todo.txt} readOnly></textarea>
                                    <button onClick={() => this.toggleTodo(todo)} className="fa fas fa-circle"></button>
                                </li>
                            )
                        }
                    })}
                </ul>
            </section>
        )
    }

}