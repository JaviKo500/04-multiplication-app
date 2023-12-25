import fs from 'fs';
export interface SaveFileUseCase{
   execute: ( options: Options) => boolean;
}

export interface Options {
   fileContent: string;
   fileDestination?: string;
   fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
   constructor() {
      /**
       *  repository: Storage repository
       */
   }

   execute = (options: Options): boolean => {
      console.table({'test': true})
      try {
         const { fileContent, fileDestination = 'outputs', fileName = 'table' } = options;
         fs.mkdirSync( fileDestination, { recursive: true } );
         fs.writeFileSync(`${fileDestination}/${fileName}.txt`,  fileContent);
         return true;
      } catch (error) {
         return false;
      }
      
   };
}