import fs from "fs";

const number = 5;

let text = `
================================
            Table ${5}
================================\n
`;

console.log('<--------------- JK App --------------->');
console.log(text);
for (let index = 1; index <= 10; index++) {
   const value = index * number;

   const total = `${number} x ${index} = ${value}`;
   console.log( total );
   text += `${total} \n`
}

const outputPath = 'outputs';

fs.mkdirSync( outputPath, { recursive: true } );

fs.writeFileSync(`${outputPath}/table-${number}.txt`,  text, 'utf8');

