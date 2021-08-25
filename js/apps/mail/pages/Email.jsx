import { EmailList } from '../cmps/emailList.jsx';
import { emailService } from '../services/email.service.js'

export class EmailApp extends React.Component {
    state = {
        mails: [],
        filterBy: null,
        selectedMail: null,
    };

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then((mails) => {
            console.log(mails);
            this.setState({ mails })

        });
    };
    onDeleteMail = (id) => {
        emailService.deleteMail(id)
        .then(this.loadEmails())
    }
    render() {
        const { mails, selectedMail } = this.state;
        return (
            <section className="mails-layout">

                <h1>MAil App</h1>
                {!selectedMail && (
                    <React.Fragment>
                        <EmailList mails={mails} onDeleteMail={this.onDeleteMail}/>
                    </React.Fragment>
                )}
            </section>
        )

    }

}