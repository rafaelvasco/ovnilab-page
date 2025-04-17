
import { Translations } from './types';
import { en } from './en';
import { es } from './es';
import { ptBr } from './pt-br';

export type { Translations };

export const translations: Record<string, Translations> = {
  en,
  es,
  'pt-br': ptBr
};

