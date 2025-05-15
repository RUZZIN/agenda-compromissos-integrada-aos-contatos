import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contato {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root', 
})
export class ContatoService {
  private apiUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }
}