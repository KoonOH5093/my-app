import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/models/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
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
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
