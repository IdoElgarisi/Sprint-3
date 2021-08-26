const { Link, withRouter } = ReactRouterDOM

class _EmailNav extends React.Component {
    render() {
        return (
            <section className="mail-nav">
                {/* <button className="new-mail-btn flex"><div className="add-img"></div> <p>New Mail</p></button> */}
                <Link to="/emailApp/newMail/" className="new-mail-btn flex"><div className="add-img"></div> <p>New Mail</p></Link>
                <ul className="mail-nav-bar">
                    <li><i className="fa fa-inbox"></i><span>Inbox</span> </li>
                    <li><i className="fa fa-star"></i><span>Stared</span> </li>
                    <li><i className="fa fa-paper-plane"></i><span>Sent</span> </li>
                    <li><i className="fa fa-sticky-note"></i> <span>Drafts</span></li>
                    <li><i className="fa fa-trash"></i> <span>Rcycle Bin</span></li>
                </ul>

            </section>
        )
    }
}

export const EmailNav = withRouter(_EmailNav);