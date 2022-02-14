/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Format =
  | 'dd/MM/yyyy'
  | 'yyyy-MM-dd'
  | 'HH:mm'
  | "dd 'de' MMM 'de' yyyy"
  | "dd 'de' MMM";

export function formatDate(
  date: Date | number | string,
  formatSrting: Format,
): string {
  let parsedDate: Date;

  if (typeof date === 'string') {
    parsedDate = parseISO(date);
  } else if (typeof date === 'number') {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  const formattedDate = format(parsedDate, formatSrting, { locale: ptBR });

  return formattedDate;
}
