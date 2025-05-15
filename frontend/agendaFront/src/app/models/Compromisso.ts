import { Contato } from './Contato';

export interface Compromisso {
  id: number;
  titulo: string;
  descricao: string;
  dataHora: Date;
  local: string;
  contato: Contato;
}