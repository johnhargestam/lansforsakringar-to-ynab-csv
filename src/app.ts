import { readFile } from 'fs/promises';
import { chunk, explode, split, trim } from './csv';

const [filename] = process.argv.slice(2);
readFile(filename, { encoding: 'utf8' }).then((contents) => {
  const [header] = chunk(trim(contents));

  console.log(split(header).map((line) => explode(line)));
});
