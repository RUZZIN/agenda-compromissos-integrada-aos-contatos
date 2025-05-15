import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ContatoService } from '../../services/contato.service';
import { CompromissoService } from '../../services/compromisso.service';

@Component({
  selector: 'app-compromisso-form',
  templateUrl: './compromisso-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class CompromissoFormComponent {
  form: FormGroup;
  contatos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService,
    private compromissoService: CompromissoService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: [''],
      dataHora: [null, Validators.required],
      local: ['', Validators.required],
      contatoId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatoService.listarTodos().subscribe((contatos: any[]) => {
      this.contatos = contatos.map((contato) => ({ label: contato.nome, value: contato.id }));
    });
  }

  salvarCompromisso() {
    if (this.form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Formulário inválido!' });
      return;
    }

    this.compromissoService.salvar(this.form.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Compromisso salvo com sucesso!' });
        this.form.reset();
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.message });
      },
    });
  }
}