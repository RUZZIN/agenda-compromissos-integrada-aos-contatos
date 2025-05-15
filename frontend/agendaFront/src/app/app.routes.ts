import { Routes } from '@angular/router';
import { CompromissoFormComponent } from './components/compromisso-form/compromisso-form.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { ContatoDetalheComponent } from './components/contato-detalhe/contato-detalhe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'agenda', pathMatch: 'full' },
  { path: 'agenda', component: AgendaListComponent },
  { path: 'compromisso', component: CompromissoFormComponent },
  { path: 'contato/:id', component: ContatoDetalheComponent },
];