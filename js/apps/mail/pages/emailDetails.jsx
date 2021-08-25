import { emailService } from '../services/email.service.js'
import { EmailNav } from '../cmps/emailSideNav.jsx';
export class EmailDetails extends React.Component {
    state = { mail: null }
    componentDidMount() {
        this.loadMail()
    }
    loadMail = () => {
        const id = this.props.match.params.mailId
        console.log(id);
        emailService.getMailById(id)
            .then(mail => {
                if (!mail) this.props.history.push('/emailApp')
                this.setState({ mail: mail })
            })
    }
    onBack = () => {
        this.props.history.push('/emailApp')
    }

    render() {
        const mail = this.state.mail
        if (!mail) return <div>loading..</div>
        const mailSentTime = new Date(mail.sentAt)
        let date = `${mailSentTime.getDate()}.${mailSentTime.getMonth() + 1}.${mailSentTime.getFullYear() + 1}`
        let hours = mailSentTime.getHours() < 10 ? `0${mailSentTime.getHours()}` : mailSentTime.getHours();
        let minutes = mailSentTime.getMinutes() < 10 ? `0${mailSentTime.getMinutes()}` : mailSentTime.getMinutes();
        console.log(mail);
        return <section className="flex">
            <nav><EmailNav /></nav>
            <main className="mail-layout">
                <section className="full-mail-display">
                    <header className="mail-header flex"><h4>{mail.subject}</h4> <i onClick={this.onBack} className="fa fa-times"></i></header>
                    <section className="mail-display-info-line flex space-between">
                        <div className="from-container">
                            <p><span>From :</span>{mail.to}</p>

                        </div>
                        <div className="date-container flex space-between">
                            <p>{date}</p>
                            <p >{`${hours}:${minutes}`}</p>

                        </div>
                    </section>
                    <div className="msg-container">
                        <p>{mail.body}</p>
                    </div>
                </section>
            </main>
        </section>
    }
}
