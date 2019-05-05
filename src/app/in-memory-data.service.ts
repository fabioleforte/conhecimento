import { Injectable } from '@angular/core';

import { Conhecimentos } from './models/conhecimento';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const conhecimentos: Conhecimentos[] = [
      { id: 1, name: 'Conhecimento' },
      { id: 2, name: 'Tipo' },
      { id: 3, name: 'Teste' },
      { id: 4, name: 'Teste1' },
      { id: 1, name: 'Conhecimento' },
      { id: 2, name: 'Tipo' },
      { id: 3, name: 'Teste' },
      { id: 4, name: 'Teste1' },
      { id: 1, name: 'Conhecimento' },
      { id: 2, name: 'Tipo' },
      { id: 3, name: 'Teste' },
      { id: 4, name: 'Teste1' },
    ];
    return { conhecimentos };
  }
}
