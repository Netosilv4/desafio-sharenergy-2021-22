const bcrypt = require('bcrypt')

const saltRounds = 10

const users = [ "anasilva", "joaosantos", "mariacoelho" ]

const cryptPassword = (users) => {
    users.map((e) => {
        bcrypt.hash(e, saltRounds, (err, hash) => {
            console.log(hash)
        })
    })
}


cryptPassword(users)