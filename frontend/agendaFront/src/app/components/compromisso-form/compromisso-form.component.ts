import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { CompromissoService } from '../../services/compromisso.service';

@Component({
  selector: 'app-compromisso-form',
  templateUrl: './compromisso-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Inclua CommonModule e ReactiveFormsModule
})
export class CompromissoFormComponent implements OnInit {
  form: FormGroup;
  contatos: { id: number; nome: string }[] = [];
  mensagem: string | null = null;

  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService,
    private compromissoService: CompromissoService
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: [''],
      dataHora: ['', Validators.required],
      local: ['', Validators.required],
      contatoId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos(): void {
    this.contatoService.listarTodos().subscribe((contatos: { id: number; nome: string }[]) => {
      this.contatos = contatos;
    });
  }

  salvarCompromisso(): void {
    if (this.form.invalid) {
      this.mensagem = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.compromissoService.salvar(this.form.value).subscribe({
      next: () => {
        this.mensagem = 'Compromisso salvo com sucesso!';
        this.form.reset();
      },
      error: () => {
        this.mensagem = 'Erro ao salvar o compromisso.';
      },
    });
  }
}