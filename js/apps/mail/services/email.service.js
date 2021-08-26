
// import { storageService } from '../../../services/storageService.js'


export const emailService = {
    query,
    deleteMail,
    getMailById,
    sortMails
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
// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
// }

const gMails = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
{
    id: 'e102',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    sentAt: 1629889102697,
    to: 'puki@momo.com'
},
{
    id: 'e103',
    subject: 'Hey Shuki!',
    body: 'Come play for us!',
    isRead: true,
    sentAt: 1429889100697,
    to: 'Hapoel-JLM@momo.com'
},
{
    id: 'e104',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1629887102697,
    to: 'puki@momo.com'
},
{
    id: 'e105',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    sentAt: 1629889102697,
    to: 'puki@momo.com'
},
{
    id: 'e106',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1629489102697,
    to: 'puki@momo.com'
},
{
    id: 'e107',
    subject: 'Hey Puki!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1629884000697,
    to: 'puki@momo.com'
}
]

function query(filterBy) {

    if (filterBy) {
        let { status, txt, isRead, isStared, labels } = filterBy
        isRead = isRead ? isRead : null
        isStared = isStared ? isStared : null
        const mailsToShow = gMails.filter(mail => mail.subject.includes(txt) || mail.body.includes(txt) &&  mail.isRead === isRead )
        return Promise.resolve(mailsToShow)
    }
    return Promise.resolve(gMails)
}

function getMailById(mailId) {
    var mail = gMails.find((mail) => {
        return mailId === mail.id
    })
    return Promise.resolve(mail)
}
function sortMails(sortBy) {
    if (sortBy === 'oldest') gMails.sort(function (a, b) { return a.sentAt - b.sentAt })
    if (sortBy === 'newest') gMails.sort(function (a, b) { return b.sentAt - a.sentAt })
    return Promise.resolve(gMails)
}

function deleteMail(mailId) {
    let mailIdx = gMails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gMails.splice(mailIdx, 1)
    _saveMailsToStorage();
    return Promise.resolve()
}

function _saveMailsToStorage() {
    storageService.saveToStorage('emailsDB', gMails)
}
