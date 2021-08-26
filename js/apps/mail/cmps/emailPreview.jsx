const { NavLink } = ReactRouterDOM
import { emailService } from '../services/email.service.js'
export function EmailPreview({ mail, onDeleteMail ,onReadBtn}) {
    let dateToShow = `${new Date(mail.sentAt).getDate()}.${new Date(mail.sentAt).getMonth()}.${new Date(mail.sentAt).getFullYear()}`

    let hours = new Date(mail.sentAt).getHours() < 10 ? `0${new Date(mail.sentAt).getHours()}` : new Date(mail.sentAt).getHours();
    let minutes = new Date(mail.sentAt).getMinutes() < 10 ? `0${new Date(mail.sentAt).getMinutes()}` : new Date(mail.sentAt).getMinutes();

    if (Date.now() - mail.sentAt < 86400000) dateToShow = `${hours}:${minutes}`

    return (
        <tr className="mail-details">
            <td>
                <div className="mail-info">
                    <div className="mail-title">
                        <p className={`mail-subject ${mail.isRead ? 'read' : 'unread'}`}>{mail.subject}</p>
                        <p className="mail-body">{mail.body}</p>
                    </div>
                    <div className="mail-rightside-container">
                        <p className="mail-date">{dateToShow}</p>
                        <div className="mail-edit-btns">
                            <button onClick={() => { onDeleteMail(mail.id) }}><i className="fa fa-trash"></i></button>
                            <button onClick={() => { onReadBtn(mail.id,mail.isRead) }} ><i className={`fa fa-envelope${mail.isRead ? '-open' : ''}`}></i></button>
                            <NavLink  to={`/emailApp/${mail.id}`} ><i className="fa fa-expand"></i></NavLink>
                        </div>
                        <p className="mail-address">{mail.to}</p>
                    </div>
                </div>
            </td>
        </tr>
    )

}