
import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR',
})

export function formatar(valor) {
  valor = parseFloat(valor.replace("R$",""))
  var formatado =  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatado;
}
