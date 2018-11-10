Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("../util/ow");
exports.default = (random, likelihood = 0.5) => {
    ow_1.default(likelihood, ow_1.default.number.gt(0).lt(1));
    return () => {
        return (random.next() >= likelihood);
    };
};
// @ts-ignore
Object.freeze(exports);
