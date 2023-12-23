import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
   base: number;
   limit: number;
   showTable: boolean;
   fileName: string,
   fileDestination: string,
}

export class ServerApp {
   static  run( options: RunOptions ) {
      const { base, limit, showTable, fileName, fileDestination } = options;
      const table = new CreateTable().execute({ base, limit });
      const wasCreated = new SaveFile()
         .execute( { 
            fileContent: table, 
            fileDestination,
            fileName
         });
      console.log('<--------------- JK Server-app --------------->');
      if ( showTable ) console.log(table);

      ( wasCreated )
         ? console.log('file created')
         : console.log('File not created');
   }
}