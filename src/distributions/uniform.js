Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("../util/ow");
exports.default = (random, min, max, fractionDigits) => {
    if (max === undefined) {
        max = (min === undefined ? 1 : min);
        min = 0;
    }
    ow_1.default(min).number();
    ow_1.default(max).number.gt(min);
    let fn = () => {
        return random.next() * (max - min) + min;
    };
    if (fractionDigits !== undefined) {
        ow_1.default(fractionDigits).integer.gte(0);
        return () => {
            return parseFloat(fn().toFixed(fractionDigits));
        };
    }
    return fn;
};
// @ts-ignore
Object.freeze(exports);
