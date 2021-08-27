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
        selectedEmail: null,
        active: false
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
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        const { mails, selectedEmail, active } = this.state;
        return (
            <section className="mails-layout">

                <header className=" email-header flex" >
                    <section className="mails-list-header flex">
                        <button onClick={() => this.toggleClass()} className={`btn-menu ${active ? 'active' : ' '}`}><i className="fa fa-bars"></i></button>
                        <h1> <i className="fa fa-envelope"></i> Ail App</h1>
                        <div className="filter-sort-container">
                            <EmailFilter onSetFilter={this.onSetFilter} />
                            <EmailSort onSetSort={this.onSetSort} />
                        </div>
                    </section>
                </header>
                {active &&
                <nav className="main-nav-side "><EmailNav onNewEmail={this.onNewEmail} loadEmails={this.loadEmails} onSetFilter={this.onSetFilter} /></nav>
                }
                <section className="flex">
                    <main className="mails-main-layout">
                        <EmailList mails={mails} onReadBtn={this.onReadBtn} onDeleteMail={this.onDeleteMail} />
                        <Route path="/emailApp/newMail" loadEmails={this.loadEmails} component={SendEmail} />
                        <Route path="/emailApp/:mailId" component={EmailDetails} />
                    </main>
                </section>

            </section >
        )
    }
}