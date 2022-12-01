import { print } from 'gluegun';

export const toSecond = (ms: number): number => ms / 1000;

export const command = (name: string, explain: string): void => {
  const {
    colors: { gray, green },
    info,
  } = print;
  info(`${green(name)} ${gray(explain)}`);
};
