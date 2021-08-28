
export const emailService = {
    query,
    deleteMail,
    getMailById,
    sortMails,
    addMail,
    changeMode,
    makeId,
    getRandomColor
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
    status: ['inbox', 'sent', 'trash', 'drafts'],
    txt: '',
    isRead: '', // (optional property, if missing: show all)
    lables: ['important', 'romantic']
}
let currFolder;
function query(filterBy) {
    let { status, isRead, isStared, labels } = criteria
    let mailsToFilter;
    let mailsToShow;
    if (filterBy) {
        (filterBy.isRead === true || filterBy.isRead === false) ? isRead = filterBy.isRead : isRead = '';
        (status.includes(filterBy)) ? currFolder = filterBy : currFolder = currFolder;
        (status.includes(currFolder)) ? mailsToFilter = gMails.filter(mail => mail.status === currFolder) : mailsToFilter = gMails
        if (filterBy === 'isStared') mailsToFilter = gMails.filter(mail => mail.isStared);
        // (filterBy.isRead !== '' ) ? mailsToFilter = mailsToFilter.filter((mail) => { return (mail.isRead === isRead) }) : mailsToFilter;
        if (filterBy.txt === "" || !filterBy.txt) return Promise.resolve(mailsToFilter)
        mailsToShow = mailsToFilter.filter(mail => { return (mail.subject.includes(filterBy.txt.toLowerCase()) || mail.body.includes(filterBy.txt.toLowerCase())) })
        mailsToShow = (isRead === ' ') ? mailsToShow : mailsToShow.filter(mail => { return (mail.isRead === isRead) })

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
    if (sortBy === 'title') gMails.sort(function (a, b) { return a.subject.localeCompare(b.subject) })

    // if(sortBy==='title')
    return Promise.resolve(gMails)
}
function addMail(mail) {
    gMails.push(mail)
    _saveMailsToStorage()
    return Promise.resolve(gMails)
}
function changeMode(id, mode) {
    let mailIdx = gMails.findIndex(function (mail) {
        return id === mail.id
    })
    let mail = gMails[mailIdx]
    mode === 'isStared' ? mail.isStared = !mail.isStared : mail.isStared
    mode === 'isRead' ? mail.isRead = !mail.isRead : mail.isRead
    return Promise.resolve()
}
function deleteMail(mailId) {
    let mailIdx = gMails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gMails[mailIdx].removedAt = Date.now()
    gMails[mailIdx].status === 'trash' ? gMails.splice(mailIdx, 1) : gMails[mailIdx].status = 'trash'

    _saveMailsToStorage()
    return Promise.resolve()
}

function _saveMailsToStorage() {
    saveToStorage('emailsDB', gMails)
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const gMails = loadFromStorage('emailsDB') || [
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
        body: '111',
        isRead: false,
        isStared: false,
        sentAt: 1551033930594,
        to: 'muki@muki.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: []
    },
]