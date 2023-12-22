import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let text = `
================================
            Table ${base}
================================\n
`;
for (let index = 1; index <= limit; index++) {
   const value = index * base;

   const total = `${base} x ${index} = ${value}`;
   text += `${total} \n`
}

if ( showTable ) {
   console.log(text);
}

const outputPath = 'outputs';

fs.mkdirSync( outputPath, { recursive: true } );

fs.writeFileSync(`${outputPath}/table-${base}.txt`,  text, 'utf8');

