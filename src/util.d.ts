/**
 * Created by user on 2018/10/20/020.
 */
/**
 * try save original Math.random,
 * if no other module overwrite Math.random
 *
 * @alias Math.random
 */
declare function _MathRandom(): number;
export { _MathRandom };
export declare function randomSeedNum(): number;
/**
 * give a random string for create seed
 */
export declare function randomSeedStr(): string;
/**
 * @todo support typescript
 */
export declare function getClass(RNGClass: any, thisArgv: any, ...argv: any[]): any;
/**
 * @todo support typescript
 */
export declare function cloneClass(RNGClass: any, thisArgv: any, ...argv: any[]): any;
