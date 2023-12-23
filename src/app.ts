import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

( async () => {
   await main();
})();


async function main () {
   const { b, l, s, n, d } = yarg;
   const data = {
      base: b,
      limit: l,
      showTable: s,
      fileName: n,
      fileDestination: d,
   }
   ServerApp.run( data );
}