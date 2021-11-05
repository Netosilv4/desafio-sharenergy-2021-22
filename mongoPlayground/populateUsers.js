use('share-energy')

const users = 
[
    {
        "numeroCliente": 1,
        "nomeCliente": "Ana Silva",
        "email": "netos2@rocketmail.com",
        "tipo": "cliente",
        "usuario": "anasilva",
        "senha": "$2b$10$VK6B89Bj5CQpbOc6Zxi/IOJ4zcXdxzWWjm4uidjCzJrbbLVEtdWeu",
        "usinas":
        [
            {
                "usinaId": 1,
                "percentualDeParticipacao": 30
            }
        ]
    },
    {
        "numeroCliente": 2,
        "nomeCliente": "João Santos",
        "email": "netos2@rocketmail.com",
        "tipo": "cliente",
        "usuario": "joaosantos",
        "senha": '$2b$10$6NgtS1OGl4hzPUj/d7mj0.M6YZKDlaPxGjSUo22RjKRqwQtX1oFI2',
        "usinas":
        [
            {
                "usinaId": 1,
                "percentualDeParticipacao": 20
            }
        ]
    },
    {
        "numeroCliente": 3,
        "nomeCliente": "Maria Coelho",
        "email": "netos2@rocketmail.com",
        "tipo": "cliente",
        "usuario": "mariacoelho",
        "senha": "$2b$10$jjqCszhUrmDorPdSDeTfH.KgOoiORnM9vV.X6puKjCLUL.Dj7wZOG",
        "usinas":
        [
            {
                "usinaId": 1,
                "percentualDeParticipacao": 50
            }
        ]
    }
]

db.users.deleteMany({})

db.users.insertMany(users)