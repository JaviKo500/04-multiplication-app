import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

( async () => {
   await main();
})();


async function main () {
   const { b, l, s } = yarg;
   const data = {
      base: b,
      limit: l,
      showTable: s
   }
   ServerApp.run( data );
}