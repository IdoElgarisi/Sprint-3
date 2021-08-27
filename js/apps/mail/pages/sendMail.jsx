// import { utilService } from '../../../services/util.service.js'
import { emailService } from "../services/email.service.js"


export class SendEmail extends React.Component {
    time = Date.now()
    // dateToShow = `${new Date.now().getDate()}.${new Date.now().getMonth()}.${new Date.now().getFullYear()}`
    // hours = new Date.now().getHours() < 10 ? `0${new Date.now().getHours()}` : new Date.now().getHours();
    // minutes = new Date.now().getMinutes() < 10 ? `0${new Date.now().getMinutes()}` : new Date.now().getMinutes();

    loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }

    state = {
        id: `${utilService.makeId()}`,
        user: `${this.loggedinUser.fullname}`,
        subject: '',
        body: '',
        isStared: false,
        sentAt: ``,
        to: '',
        from: `${this.loggedinUser.email}`,
        status: 'drafts',
        labels: []
    }
    inputRef = React.createRef()
    componentDidMount() {
        this.inputRef.current.focus()
    }



    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ ...prevState, [field]: value }))
    }
    onBack = () => {
        this.props.history.push('/emailApp')
    }
    formSubmited = (ev) => {

        const id = this.state.id
        ev.preventDefault()
        this.setState(prevState => ({ ...prevState, sentAt: this.time, status: 'sent' }))
        setTimeout(() => {
            emailService.addMail(this.state)
                .then(() => {
                    this.props.loadMail
                    this.props.history.push(`/emailApp`);
                })
        }, 100);
    }
  
    render() {
        return <section className=" new-mail flex">
            <main className="new-mail-layout">
                <section className="new-mail-display">
                    <header className="mail-header flex"><h4>New Message</h4> <i onClick={this.onBack} className="fa fa-times"></i></header>
                    <form action="sendMail">
                        <div className="input-group">
                            <span><i className="fa fa-user"></i></span>
                            <input type="text" ref={this.inputRef} name="to" placeholder="To..." onChange={this.handleChange} />
                        </div>
                        <div className="input-group">
                            <span><i className="fa fa-pencil"></i></span>
                            <input type="text" name="subject" placeholder="Subject..." onChange={this.handleChange} />
                        </div>
                        <div className="input-group">
                            <span><i className="fa fa-palette"></i></span>
                            <textarea name="body" className="body-area" rows="6" placeholder="Body..." onChange={this.handleChange}></textarea>
                        </div>
                        <button onClick={this.formSubmited}>Send </button>
                    </form>
                </section>
            </main>
        </section>
    }
}
