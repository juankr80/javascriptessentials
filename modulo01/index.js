import * as ColorConsole from './logMessages.js';

import divide , { add, rest as resting } from './maths.js';

ColorConsole.blue( `add ${add(2,2)}` );
ColorConsole.yellow( `resting ${resting(2,2)}` );
ColorConsole.red( `divide ${divide(2,2)}` );