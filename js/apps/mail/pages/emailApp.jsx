const { NavLink, Route } = ReactRouterDOM
import { EmailList } from '../cmps/emailList.jsx';
import { EmailSort } from '../cmps/emailSort.jsx';
import { emailService } from '../services/email.service.js'
import { EmailNav } from '../cmps/emailSideNav.jsx';
import { EmailFilter } from '../cmps/emailFilter.jsx';
import { SendEmail } from '../pages/sendMail.jsx'
import { EmailDetails } from './emailDetails.jsx';


export class EmailApp extends React.Component {
    state = {
        mails: [],
        filterBy: null,
        selectedEmail: null
    };

    componentDidMount() {
        this.loadEmails();
        this.onSetSort('newest')
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then((mails) => {
            this.setState({ mails })
        });
    };
    onSetFilter = (filterBy) => {
        if (this.props.history.location !== '/emailApp') this.props.history.push('/emailApp')
        this.setState({ filterBy }, this.loadEmails);
    };
    onSetSort = (sortBy) => {
        emailService.sortMails(sortBy)
            .then(this.loadEmails)
    }
  
    onDeleteMail = (id) => {
        emailService.deleteMail(id)
            .then(this.loadEmails())
    }
    onNewEmail = () => {
        const { isSendEmail } = this.state
        this.setState({ isSendEmail: !isSendEmail })
    }

    onReadBtn(id, mode) {
        console.log('mode', mode);
        console.log('id', id);
        emailService.getMailById(id)
            .then((mail) => {
                console.log(mail);
                mail.isRead = !mode
                console.log(this);
            })
       
    }
    render() {
        const { mails, selectedEmail } = this.state;
        return (
            <section className="mails-layout">

                <header className="mails-list-header flex">
                    <h1> <i className="fa fa-envelope"></i> Ail App</h1>
                    <EmailSort onSetSort={this.onSetSort} />
                    <EmailFilter onSetFilter={this.onSetFilter} />
                </header>
                <section className="flex">
                    <nav><EmailNav onNewEmail={this.onNewEmail} loadEmails={this.loadEmails} onSetFilter={this.onSetFilter} /></nav>
                    <main>
                        {/* <NavLink to="/about/vision">Inbox</NavLink> */}
                        <EmailList mails={mails} onReadBtn={this.onReadBtn} onDeleteMail={this.onDeleteMail} />
                        <Route path="/emailApp/newMail" loadEmails={this.loadEmails} component={SendEmail} />
                        <Route path="/emailApp/:mailId" component={EmailDetails} />
                    </main>
                </section>

            </section >
        )
    }
}