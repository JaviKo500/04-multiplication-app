const runCommand = async (args: string []) => {
   process.argv = [ ...process.argv, ...args ];
   const { yarg } = await import('./args.plugin')
   return yarg;
}

describe('Args.plugin.test', () => {
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
});