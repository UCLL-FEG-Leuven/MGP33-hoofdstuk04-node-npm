// Bij gebruik van ES6 modules is __dirname niet beschikbaar.
// Door onderstaande constante te importeren kan je hier toch gebruik van maken.
// Meer info: https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
// Opgelet: vanaf Node 20.11 is het ophalen van de directory van het huidige script vereenvoudigd. 
//          Deze code is compatibel met oude en nieuwe Node.JS versies.
//          De imports zijn dus enkel nodig voor oude Node versies < 20.11.
//          Op termijn mag de code voor oude versies verwijderd worden.

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = import.meta.dirname ? import.meta.dirname : dirname(fileURLToPath(import.meta.url));
export default __dirname;