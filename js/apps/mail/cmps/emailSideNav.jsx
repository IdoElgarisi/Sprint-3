const { NavLink, withRouter } = ReactRouterDOM

class _EmailNav extends React.Component {
    state = {
        filterBy: {
            status: ['inbox', 'sent', 'trash', 'drafts'],
            txt: 'puki', // no need to support complex text search
            isRead: true, // (optional property, if missing: show all)
            isStared: true, // (optional property, if missing: show all)
            lables: ['important', 'romantic'] // has any of the labels
        }
    }

    render() {
        const { onSetFilter } = this.props
        return (
            <section className="mail-nav">
                <NavLink to="/emailApp/newMail" className="new-mail-btn flex" ><div className="add-img"></div> <p>New Mail</p></NavLink>
                <ul className="mail-nav-bar">
                    <li onClick={() => onSetFilter('inbox')}><i className="fa fa-inbox"></i><span>Inbox</span> </li>
                    <li onClick={() => onSetFilter('stared')}><i className="fa fa-star"></i><span>Stared</span> </li>
                    <li onClick={() => onSetFilter('sent')}><i className="fa fa-paper-plane"></i><span>Sent</span> </li>
                    <li onClick={() => onSetFilter('drafts')}><i className="fa fa-sticky-note"></i> <span>Drafts</span></li>
                    <li onClick={() => onSetFilter('trash')}><i className="fa fa-trash"></i> <span>Rcycle Bin</span></li>
                </ul>

            </section>
        )
    }
}

export const EmailNav = withRouter(_EmailNav);