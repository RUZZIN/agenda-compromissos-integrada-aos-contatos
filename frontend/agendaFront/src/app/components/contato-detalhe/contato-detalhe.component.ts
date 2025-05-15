import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompromissoService } from '../../services/compromisso.service';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ContatoDetalheComponent implements OnInit {
  @Input() contatoId!: number;
  compromissos: any[] = [];

  constructor(private compromissoService: CompromissoService) {}

  ngOnInit(): void {
    this.carregarCompromissos();
  }

  carregarCompromissos(): void {
    this.compromissoService.listarPorContato(this.contatoId).subscribe((compromissos) => {
      this.compromissos = compromissos;
    });
  }
}