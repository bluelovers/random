import RNGFunction from './function';
import { _MathRandom } from '../util';
export declare class RNGMathRandom2 extends RNGFunction<typeof _MathRandom> {
    constructor(seed?: typeof _MathRandom, opts?: any, ...argv: any[]);
    readonly name: string;
}
export default RNGMathRandom2;