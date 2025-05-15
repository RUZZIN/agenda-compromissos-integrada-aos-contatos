import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompromissoService } from '../../services/compromisso.service';
import { Compromisso } from '../../models/compromisso';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AgendaListComponent implements OnInit {
  compromissosPorData: { [data: string]: Compromisso[] } = {};
  abertos: { [data: string]: boolean } = {};

  constructor(private compromissoService: CompromissoService) {}

  ngOnInit(): void {
    this.carregarCompromissos();
  }

  carregarCompromissos(): void {
    this.compromissoService.listarTodos().subscribe((compromissos: Compromisso[]) => {
      if (!compromissos || compromissos.length === 0) {
        this.compromissosPorData = {};
        return;
      }

      const agrupados: { [data: string]: Compromisso[] } = {};

      compromissos.forEach((compromisso: Compromisso) => {
      const dataFormatada = new Date(compromisso.dataHora).toLocaleDateString();

      if (!agrupados[dataFormatada]) {
        agrupados[dataFormatada] = [];
      }

      agrupados[dataFormatada].push(compromisso);
    });

    this.compromissosPorData = agrupados;


      // Inicializa o primeiro item como aberto
      const primeiraData = this.datas[0];
      if (primeiraData) {
        this.abertos[primeiraData] = true;
      }
    });
  }

  get datas(): string[] {
    return Object.keys(this.compromissosPorData).sort(); // ordena as datas, opcional
  }

  toggleAcordao(data: string): void {
    this.abertos[data] = !this.abertos[data];
  }

  estaAberto(data: string): boolean {
    return !!this.abertos[data];
  }
}
