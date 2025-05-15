import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CompromissoService } from '../../services/compromisso.service';
import { Compromisso } from '../../models/compromisso';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  standalone: true,
  imports: [CommonModule, TimelineModule],
})
export class ContatoDetalheComponent implements OnInit {
  @Input() contatoId!: number;
  compromissos: Compromisso[] = [];

  constructor(private compromissoService: CompromissoService) {}

  ngOnInit() {
    this.carregarCompromissos();
  }

  carregarCompromissos() {
    this.compromissoService.listarPorContato(this.contatoId).subscribe((compromissos) => {
       
    });
  }
}