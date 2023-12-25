const runCommand = async (args: string []) => {
   process.argv = [ ...process.argv, ...args ];
   const { yarg } = await import('./args.plugin')
   return yarg;
}

describe('Args.plugin.test', () => {
   const originalArgv = process.argv;
   beforeEach(() => {
      process.argv = originalArgv;
      jest.resetModules();
   })

   test( 'should return default values', async () => {
      const yarg = await runCommand([ '-b', '5' ]);

      expect(yarg).toEqual( 
         expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
         })
      );
   });

   test( 'should return configuration with custom values', async  () => {
      const options = {
         l: 20,
         b: 2,
         s: true,
         n: 'table-2',
         d: 'outputs',
      }
      const yarg = await runCommand([ '-b', options.b.toString(), '-l', options.l.toString(), '-s', '-n', options.n, '-d', options.d  ]);


      expect( yarg ).toEqual(
         expect.objectContaining(options)
      );
   });
});