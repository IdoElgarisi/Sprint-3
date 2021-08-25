export const storageService = {
    loadFromStorage,
    saveToStorage
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
    console.log('hello');
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}