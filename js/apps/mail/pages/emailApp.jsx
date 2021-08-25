
import { EmailList } from '../cmps/emailList.jsx';
import { EmailSort } from '../cmps/emailSort.jsx';
import { emailService } from '../services/email.service.js'
import { EmailNav } from '../cmps/emailSideNav.jsx';
import { EmailFilter } from '../cmps/emailFilter.jsx';

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
            this.setState({ mails })
        });
    };
    onSetFilter = (filterBy) => {
console.log(filterBy);
        this.setState({ filterBy }, this.loadEmails);
    };
    onSetSort = (sortBy) => {
        console.log(sortBy);
        emailService.sortMails(sortBy)
            .then(this.loadEmails)


    }
    onDeleteMail = (id) => {
        emailService.deleteMail(id)
            .then(this.loadEmails())
    }

    render() {
        const { mails, selectedMail } = this.state;
        return (
            <section className="mails-layout">
                <header className="mails-list-header flex">
                    <h1>MAil App</h1>
                    <EmailSort onSetSort={this.onSetSort} />
                    <EmailFilter onSetFilter={this.onSetFilter} />
                </header>
                <section className="flex">
                    <nav><EmailNav onSetFilter={this.onSetFilter} /></nav>
                    <main>
                        {!selectedMail && (
                            <React.Fragment>
                                <EmailList mails={mails} onDeleteMail={this.onDeleteMail} />
                            </React.Fragment>
                        )}
                    </main>
                </section>
            </section>
        )
    }
}