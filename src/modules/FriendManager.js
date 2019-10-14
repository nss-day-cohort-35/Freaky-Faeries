const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/friends/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/friends`).then(result => result.json())
  },
  get(friends){
    return fetch(`${remoteURL}/friends${friends}`).then(result => result.json())
  } 
}