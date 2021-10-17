import { appendFileSync, readFileSync, writeFileSync } from 'fs';
import { chunk, explode, label, split, trim } from './csv';
import { prompt } from './prompt';
import { amount } from './format';

type Payees = {[key: string]: {payee: string, memo: string}};

const readPayees = (): Payees => {
  try {
    return JSON.parse(readFileSync('payees.json', { encoding: 'utf8' }));
  } catch (_) {
    return {};
  }
}

const getPayeeMemo = (() => {
  const payees = readPayees();
  return (transaction: { [key: string]: string }): [string, string] => {
    const key = `${transaction.Transaktionstyp};${transaction.Meddelande}`;
    if (payees[key]) {
      return [payees[key].payee, payees[key].memo];
    } else {
      const payee = prompt('Payee: ');
      const memo = prompt('Memo: ');
      payees[key] = {payee, memo};
      writeFileSync('payees.json', JSON.stringify(payees, undefined, 2), {encoding: 'utf8'});
      return [payee, memo];
    }
  };
})();

const [filename] = process.argv.slice(2);
const contents = readFileSync(filename, { encoding: 'utf8' });
const [a, b] = chunk(trim(contents));

const [header] = label(split(a).map(explode));
console.log(`Parsing account "${header.Kontonamn}" (${header.Kontonummer})`);

const transactions = label(split(b).map(explode));

writeFileSync('ynab.csv', 'Date,Payee,Memo,Amount', {encoding: 'utf8'});

for (const transaction of transactions) {
  console.log(transaction);

  const [payee, memo] = getPayeeMemo(transaction);
  const date = transaction.Transaktionsdatum;
  const usAmount = amount(transaction.Belopp);

  appendFileSync('ynab.csv', `\n${date},${payee},${memo},${usAmount}`);
}
