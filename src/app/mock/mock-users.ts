import { User } from '../users/models/user'

export const userList: User[] = [    
    {
        id: 1,
        name: 'Kriangsak',
        email: 'kriangsak.cha@quantiumfund.com',
        phone: '0867805093',
        birthdate: new Date('1998-08-20')
    },
    {
        id: 2,
        name: 'John',
        email: 'john@quantiumfund.com',
        phone: '0615468529',
        birthdate: new Date('1995-06-10')
    },
    {
        id: 3,
        name: 'Geoge',
        email: 'gg@quantiumfund.com',
        phone: '0981892489',
        birthdate: new Date('1991-11-24')
    }
]