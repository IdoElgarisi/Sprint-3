import { emailService } from '../services/email.service.js'

export function EmailPreview({ mail, onDeleteMail }) {
    const date = `${new Date(mail.sentAt).getDate()}.${new Date(mail.sentAt).getMonth()}.${new Date(mail.sentAt).getFullYear()}`

    return (
        <tr className="mail-details">
            <td>
                <div className="mail-info">
                    <div className="mail-title">
                        <p className="mail-subject">{mail.subject}</p>
                        <p className="mail-body">{mail.body}</p>
                    </div>
                    <div className="mail-rightside-container">
                        <p className="mail-date">{date}</p>
                        <div className="mail-edit-btns">
                            <button onClick={() => { onDeleteMail(mail.id) }}><i className="fa fa-trash"></i></button>
                            <button ><i className={`fa fa-envelope${mail.isRead ? '-open' : ''}`}></i></button>
                        </div>
                        <p className="mail-address">{mail.to}</p>
                    </div>
                </div>
            </td>
        </tr>
    )

}