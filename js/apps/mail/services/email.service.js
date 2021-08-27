
import { storageService } from '../../../services/storageService.js'

export const emailService = {
    query,
    deleteMail,
    getMailById,
    sortMails,
    addMail
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

const gMails = storageService.loadFromStorage('emailsDB') || [
    {
        id: 'e100',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        isStared: false,
        sentAt: 1651133930594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: []
    },
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStared: false,
        sentAt: 1621133930594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: []
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        isStared: false,
        sentAt: 1551132030594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: []
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStared: false,
        sentAt: 1551131930594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'trash',
        labels: []
    },
    {
        id: 'e104',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStared: false,
        sentAt: 1551033930594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: []
    },
]

const criteria = {
    status: ['inbox', 'sent', 'trash', 'drafts'],
    txt: '',
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic']
}

function query(filterBy) {
    const { status, txt, isStared, labels } = criteria
    if (filterBy) {
        let mailsToShow;
        (status.includes(filterBy)) ? mailsToShow = gMails.filter(mail => mail.status === filterBy) : mailsToShow = gMails;
        if (filterBy === 'read') mailsToShow.filter(mail => mail.isRead === true)
        if (filterBy === 'unread') mailsToShow.filter(mail => mail.isRead === false)
        return Promise.resolve(mailsToShow)
    }
    return Promise.resolve(gMails.filter(mail => mail.status === 'inbox'))
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
    // if(sortBy==='title')
    return Promise.resolve(gMails)
}
function addMail(mail) {
    gMails.push(mail)
    _saveMailsToStorage()
    console.log(gMails);
    return Promise.resolve(gMails)
}
function deleteMail(mailId) {
    let mailIdx = gMails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gMails[mailIdx].status === 'trash' ? gMails.splice(mailIdx, 1) : gMails[mailIdx].status = 'trash'

    _saveMailsToStorage()
    return Promise.resolve()
}

function _saveMailsToStorage() {
    storageService.saveToStorage('emailsDB', gMails)
}
