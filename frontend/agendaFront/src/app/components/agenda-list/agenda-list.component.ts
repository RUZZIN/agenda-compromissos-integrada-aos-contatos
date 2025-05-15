import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompromissoService } from '../../services/compromisso.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class AgendaListComponent implements OnInit {
  compromissosPorData: { [key: string]: any[] } = {};

  constructor(private compromissoService: CompromissoService) {}

  ngOnInit(): void {
    this.carregarCompromissos();
  }

  carregarCompromissos(): void {
    this.compromissoService.listarTodos().subscribe((compromissos) => {
      this.compromissosPorData = compromissos.reduce((acc: { [key: string]: any[] }, compromisso: any) => {
        const data = new Date(compromisso.dataHora).toLocaleDateString();
        if (!acc[data]) acc[data] = [];
        acc[data].push(compromisso);
        return acc;
      }, {});
    });
  }

  getChaves(): string[] {
    return Object.keys(this.compromissosPorData);
  }
}