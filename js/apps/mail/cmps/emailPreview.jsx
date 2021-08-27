const { NavLink } = ReactRouterDOM
import { emailService } from '../services/email.service.js'
export function EmailPreview({ mail, onDeleteMail, onReadBtn }) {
    let dateToShow = `${new Date(mail.sentAt).getDate()}.${new Date(mail.sentAt).getMonth()}.${new Date(mail.sentAt).getFullYear()}`

    let hours = new Date(mail.sentAt).getHours() < 10 ? `0${new Date(mail.sentAt).getHours()}` : new Date(mail.sentAt).getHours();
    let minutes = new Date(mail.sentAt).getMinutes() < 10 ? `0${new Date(mail.sentAt).getMinutes()}` : new Date(mail.sentAt).getMinutes();

    if (Date.now() - mail.sentAt < 86400000) dateToShow = `${hours}:${minutes}`

    return (
        <tr className="mail-details flex ">

            <td className="user-icon"><p>{mail.from.charAt(0).toUpperCase()}</p></td>
            <td className="mail-title flex ">
                <p className={`mail-subject ${mail.isRead ? 'read' : 'unread'}`}>{mail.from}</p>
                <p className="mail-body">{mail.subject}</p>
            </td>

            <td className="mail-info flex space-between"> <p className="mail-date">{dateToShow}</p>
                <div className="mail-edit-btns flex">
                    <button onClick={() => { onDeleteMail(mail.id) }}><i className="fas fa-trash"></i></button>
                    <button onClick={() => { onReadBtn(mail.id, mail.isRead) }} ><i className={`fa fa-envelope${mail.isRead ? '-open' : ''}`}></i></button>
                    <NavLink to={`/emailApp/${mail.id}`} ><i className="fa fa-expand"></i></NavLink>
                </div>
                <div className="mail-star-and-menu flex space-between">
                    <p className="mail-star"><i className={`${mail.isStared ? 'far' : 'fas'} fa-star`}></i></p>
                    <p ><i className="fas fa-ellipsis-v"></i></p>
                </div>
            </td>
        </tr>
    )

}