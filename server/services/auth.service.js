const createSession = new Map()

function setUser(id,user) {
    createSession.set(id,user)
    
}

function getUser(id) {
    createSession.get(id)
    
}

module.exports = {setUser,getUser}