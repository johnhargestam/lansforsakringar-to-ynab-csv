import { readFile } from 'fs/promises';
import { chunk, explode, label, split, trim } from './csv';

const [filename] = process.argv.slice(2);
readFile(filename, { encoding: 'utf8' }).then((contents) => {
  const [header] = chunk(trim(contents));

  const lines = split(header).map((line) => explode(line));
  console.log(label(lines));
});
