import { screenShot } from './screenshot';
import path from 'node:path';
import { emulate } from './emulate';
console.log(path.join('../', __dirname));
// screenShot('https://www.baidu.com', path.join(__dirname, '../', './imgshot'));
emulate();
