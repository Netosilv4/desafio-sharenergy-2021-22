export const keyPrettier: IKeyPrettier = {
  nomeCliente: 'Nome',
  numeroCliente: 'Número',
  usuario: 'Usuário',
  email: 'E-mail',
};

export interface IKeyPrettier {
  nomeCliente: string;
  numeroCliente: string;
  usuario: string;
  email: string;
}

export const hoursConverter = (hour: number) => {
  const hours = hour.toString().split('.');
  const minutes = ((Number(`0.${hours[1]}`)) * 60);
  return `${hours[0]}:${minutes.toFixed()}`;
};

export const camelCaseToWords = (str: string) => str
  .match(/^[a-z]+|[A-Z][a-z]*/g)?.map((x) => x[0]
    .toUpperCase() + x.substr(1).toLowerCase()).join(' ');

export const prefix = (chartKey: string) => chartKey.split('_')[1];
