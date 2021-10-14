import { readFile } from 'fs/promises';
import { split } from './csv';

const [filename] = process.argv.slice(2);
readFile(filename, {encoding: 'utf8'}).then(contents => {
  const lines = split(contents);
  console.log(lines.length);
})
