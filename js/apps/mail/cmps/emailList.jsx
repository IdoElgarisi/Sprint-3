import { EmailPreview } from './emailPreview.jsx'
export function EmailList({ mails, onDeleteMail,onReadBtn }) {

    return (
        <table className="email-list">
            <thead>
                <tr className="emails-info-line">
                    <td>Mails</td>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => <EmailPreview onReadBtn={onReadBtn} key={mail.id} mail={mail} onDeleteMail={onDeleteMail} />)}
            </tbody>
        </table>
    )
}
