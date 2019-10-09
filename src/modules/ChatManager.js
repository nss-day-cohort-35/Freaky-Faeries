const remoteURL = "http://localhost:5002"

export default {
    get (id) {
        return fetch(`${remoteURL}/chats/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/chats`).then(result => result.json())
    }

}