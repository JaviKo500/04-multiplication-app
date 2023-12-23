import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
   base: number;
   limit: number;
   showTable: boolean;
}

export class ServerApp {
   static  run( options: RunOptions ) {
      const { base, limit, showTable } = options;
      const table = new CreateTable().execute({ base, limit });
      console.log('<--------------- JK Server-app --------------->');
      if ( showTable ) console.log(table);
   }
}