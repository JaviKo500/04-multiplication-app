export interface CreateTableUseCase {
   execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
   base: number,
   limit?: number;
}
export class CreateTable implements CreateTableUseCase {
   constructor() {
      /**
       * @ DI - Dependency Injection 
       */
   }

   execute( { base, limit = 10 }: CreateTableOptions ): string {
      let outputMessage = ``;
      for (let index = 1; index <= limit; index++) {
         const value = index * base;
         outputMessage += `${base} x ${index} = ${value} \n`
      }
      return outputMessage;
   }
}