const { NavLink, Route, Switch } = ReactRouterDOM
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

    };

    componentDidMount() {
        this.loadEmails();
        this.onSetSort('newest')

    }

    loadEmails = () => {
        this.setState({ selectedEmail: null })
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
            .then(this.loadEmails)
    }
    onNewEmail = () => {
        const { isSendEmail } = this.state
        this.setState({ isSendEmail: !isSendEmail })
    }
    onChangeMode = (id, mode) => {
        emailService.changeMode(id, mode)
            .then(this.loadEmails)
    }


    loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
    render() {
        const { mails, selectedEmail } = this.state;
        return (
            <section className="mails-layout"  >
                   {/* <div className="screen" ></div> */}
                <section className="mails-layout" >

                    <header className=" email-header flex" >
                        <section className="mails-list-header flex">
                            <h1> <i className="fa fa-envelope"></i> Ail App</h1>
                            <div className="filter-sort-container">
                                <EmailFilter onSetFilter={this.onSetFilter} />
                                <EmailSort onSetSort={this.onSetSort} />

                            </div>
                            <div className="user-icon"><p>{this.loggedinUser.fullname.charAt(0).toUpperCase()}</p></div>
                        </section>
                    </header>
                    <section>
                        <NavLink to="/emailApp/newMail" className="new-mail-btn flex " onClick={() => { this.setState({ active: null, selectedEmail: true }) }} ><div className="add-img"></div> <p>New Mail</p></NavLink>
                        <nav className="main-nav-side "><EmailNav mails={mails} onNewEmail={this.onNewEmail} loadEmails={this.loadEmails} onSetFilter={this.onSetFilter} /></nav>
                    </section>
                    <section className="flex">
                        <main className="mails-main-layout" >
                            <EmailList onChangeMode={this.onChangeMode} mails={mails} onReadBtn={this.onReadBtn} onDeleteMail={this.onDeleteMail} />
                            <Switch>
                                <Route path="/emailApp/newMail" loadEmails={this.loadEmails} component={SendEmail} />
                                <Route path="/emailApp/:mailId" component={EmailDetails} />
                            </Switch>
                        </main>

                    </section>
                </section >
            </section >

        )
    }
}