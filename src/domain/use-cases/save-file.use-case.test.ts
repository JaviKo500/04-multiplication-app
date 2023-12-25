import { SaveFile } from './save-file.use-case';
import fs from 'fs';
describe('Save-file.use-case.test', () => {

   // beforeEach(() => {
   //    fs.rmSync('outputs', { recursive: true });
   // });
   const customOptions = {
      fileContent: 'custom content',
      fileDestination: 'custom-outputs/file-destination',
      fileName: 'custom-table-name'
   };


   const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;


   afterEach(() => {
      const outputFolderExists = fs.existsSync(`outputs`);
      if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

      const outputCustomFolderExists = fs.existsSync(customOptions.fileDestination);
      if( outputCustomFolderExists ) fs.rmSync(customOptions.fileDestination, { recursive: true });
   });

   test( 'should save file with default values', () => {
      const saveFile = new SaveFile();
      const options = {
         fileContent: 'test content',
      };

      const filePath = 'outputs/table.txt';
      const wasCreated = saveFile.execute(options);
      const checkFile = fs.existsSync(filePath);
      const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
      
      expect( wasCreated ).toBe(true);
      expect( checkFile ).toBe(true);
      expect( fileContent ).toBe(options.fileContent);
   });

   test( 'should save file with custom values', () => {
      const saveFile = new SaveFile();
      
      const wasCreated = saveFile.execute(customOptions);
      const checkFile = fs.existsSync(customFilePath);
      const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf8'});
      
      expect( wasCreated ).toBe(true);
      expect( checkFile ).toBe(true);
      expect( fileContent ).toBe(customOptions.fileContent);

   });

   test( 'should return false if directory could not be created', () => {
      const saveFile = new SaveFile();

      const mkdirSpy = jest.spyOn( fs, 'mkdirSync').mockImplementation(
         () => {throw new Error('Error test created directory');}
      );

      const wasCreated = saveFile.execute(customOptions);

      expect( wasCreated ).toBe(false);

      mkdirSpy.mockRestore();
   });

   test( 'should return false if file could not be created', () => {
      const saveFile = new SaveFile();

      const writeFileSpy = jest.spyOn( fs, 'writeFileSync').mockImplementation(
         () => {throw new Error('Error test create file');}
      );

      const wasCreated = saveFile.execute({ fileContent: 'hello' });

      expect( wasCreated ).toBe(false);

      writeFileSpy.mockRestore();
   });
});