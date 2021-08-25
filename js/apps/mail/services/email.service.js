import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    deleteMail
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}

const gMails = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}, {
    id: 'e102',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    sentAt: 1551133930594,
    to: 'puki@momo.com'
}
]
function query(filterBy) {

    if (filterBy) {
        let { title, date } = filterBy

        const mailsToShow = gMails.filter(mail => mail.subject.includes(subject))
        return Promise.resolve(mailsToShow)
    }
    return Promise.resolve(gMails)
}
function deleteMail(mailId) {
    let mailIdx = gMails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gMails.splice(mailIdx, 1)
    // _saveMailsToStorage();
    return Promise.resolve()
}

function _saveMailsToStorage() {
   storageService.saveToStorage('emailsDB',gMails)
}
