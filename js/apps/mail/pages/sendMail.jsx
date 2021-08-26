import { EmailNav } from "../cmps/emailSideNav.jsx"

export class SendMail extends React.Component {

    state = {
        user: ' '
    }
    // inputRef = React.createRef()
    componentDidMount() {
        // this.inputRef.current.focus()
    }

    componentWillUnmount() {
    }

    handleChange = ({ target }) => {

    }
    onBack = () => {
        this.props.history.push('/emailApp')
    }

    render() {
        return <section className=" new-mail flex">
            <nav><EmailNav /></nav>
            <main className="new-mail-layout">
                <section className="new-mail-display">
                    <header className="mail-header flex"><h4>New Message</h4> <i onClick={this.onBack} className="fa fa-times"></i></header>
                       <div > <input className="to-input " type="text" name="send-to" placeholder="Send to" />   </div>     
                       <div > <input type="text"  className="subject-input "name="subject" placeholder="Subject" />   </div> 
                       <div className="txt-input "> <input type="text" name="subject" placeholder="Your message..." />   </div> 

                </section>
            </main>
        </section>
    }
}
