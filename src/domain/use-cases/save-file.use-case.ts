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

      try {
         const { fileContent, fileDestination = 'outputs', fileName = 'table' } = options;
         fs.mkdirSync( fileDestination, { recursive: true } );
         fs.writeFileSync(`${fileDestination}/${fileName}.txt`,  fileContent);
         return true;
      } catch (error) {
         // console.log('<--------------- JK Save-file.use-case --------------->');
         // console.log(error);
         return false;
      }
      
   };
}