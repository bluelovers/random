Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("../util/ow");
exports.default = (random, n = 1, p = 0.5) => {
    ow_1.ow(n, ow_1.ow.number.positive.integer);
    ow_1.ow(p, ow_1.ow.number.gte(0).lte(1));
    return () => {
        let i = 0;
        let x = 0;
        while (i++ < n) {
            // @ts-ignore
            x += (random.next() < p);
        }
        return x;
    };
};
// @ts-ignore
Object.freeze(exports);
