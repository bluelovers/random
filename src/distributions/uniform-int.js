"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = __importDefault(require("../util/ow"));
const uniform_1 = __importDefault(require("./uniform"));
exports.default = (random, min, max) => {
    if (max === undefined) {
        max = (min === undefined ? 1 : min);
        min = 0;
    }
    ow_1.default(min).integer();
    ow_1.default(max).integer.gt(min);
    //ow(min, ow.number.integer)
    //ow(max, ow.number.integer.gt(min))
    let fn = uniform_1.default(random, min, max + 1);
    return () => {
        return Math.floor(fn());
    };
};
//# sourceMappingURL=uniform-int.js.map