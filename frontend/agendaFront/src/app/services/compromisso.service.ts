import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Compromisso {
  id: number;
  titulo: string;
  descricao: string;
  dataHora: string;
  local: string;
  contato: any;
}

@Injectable({
  providedIn: 'root',
})
export class CompromissoService {
  private apiUrl = 'http://localhost:8080/compromissos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Compromisso[]> {
    return this.http.get<Compromisso[]>(this.apiUrl);
  }

  salvar(compromisso: Compromisso): Observable<Compromisso> {
    return this.http.post<Compromisso>(this.apiUrl, compromisso);
  }

  listarPorContato(contatoId: number): Observable<Compromisso[]> {
    return this.http.get<Compromisso[]>(`${this.apiUrl}?contatoId=${contatoId}`);
  }
}