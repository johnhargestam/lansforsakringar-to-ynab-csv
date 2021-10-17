import { readFile } from 'fs/promises';
import { chunk, trim } from './csv';

const [filename] = process.argv.slice(2);
readFile(filename, {encoding: 'utf8'}).then(contents => {
  const [header, body] = chunk(trim(contents));
  console.log(header);
})
