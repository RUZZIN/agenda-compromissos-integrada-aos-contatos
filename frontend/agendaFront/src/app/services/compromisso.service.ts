import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private apiUrl = 'http://localhost:8080/compromissos';

  constructor(private http: HttpClient) {}

  listarTodos() {
    return this.http.get(this.apiUrl);
  }

  salvar(compromisso: any) {
    return this.http.post(this.apiUrl, compromisso);
  }

  listarPorContato(contatoId: number) {
    return this.http.get(`${this.apiUrl}?contatoId=${contatoId}`);
  }
}