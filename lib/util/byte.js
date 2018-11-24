Object.defineProperty(exports, "__esModule", {
    value: !0
});

const const_1 = require("./const");

function _bytesToUuid(t = const_1.BYTE_TO_HEX_TO_LOWER_CASE) {
    return (e, r) => {
        let o = r || 0;
        return [ t[e[o++]], t[e[o++]], t[e[o++]], t[e[o++]], "-", t[e[o++]], t[e[o++]], "-", t[e[o++]], t[e[o++]], "-", t[e[o++]], t[e[o++]], "-", t[e[o++]], t[e[o++]], t[e[o++]], t[e[o++]], t[e[o++]], t[e[o++]] ].join("");
    };
}

function bytesToUuid(t, e, r = const_1.BYTE_TO_HEX_TO_LOWER_CASE) {
    let o = e || 0;
    return [ r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]] ].join("");
}

function stringifyByte(t) {
    return const_1.BYTE_TO_HEX_TO_UPPER_CASE[t];
}

function toHexArray(t) {
    return t.map(stringifyByte);
}

exports._bytesToUuid = _bytesToUuid, exports.bytesToUuid = bytesToUuid, exports.stringifyByte = stringifyByte, 
exports.toHexArray = toHexArray, Object.freeze(exports);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjb25zdF8xIiwicmVxdWlyZSIsIl9ieXRlc1RvVXVpZCIsImJ0aCIsIkJZVEVfVE9fSEVYX1RPX0xPV0VSX0NBU0UiLCJidWYiLCJvZmZzZXQiLCJpIiwiam9pbiIsImJ5dGVzVG9VdWlkIiwic3RyaW5naWZ5Qnl0ZSIsImJ5dGUiLCJCWVRFX1RPX0hFWF9UT19VUFBFUl9DQVNFIiwidG9IZXhBcnJheSIsImFyciIsIm1hcCIsImZyZWV6ZSJdLCJtYXBwaW5ncyI6IkFBR0FBLE9BQU9DLGVBQWVDLFNBQVM7SUFBZ0JDLFFBQU87OztBQUN0RCxNQUFNQyxVQUFVQyxRQUFROztBQUV4QixTQUFTQyxhQUFhQyxJQUFNSCxRQUFRSTtJQUNoQyxPQUFPLENBQUNDLEdBQUtDO1FBQ1QsSUFBSUMsSUFBSUQsS0FBVTtRQUVsQixTQUNJSCxFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUN2QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FBTyxLQUM5QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FBTyxLQUM5QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FBTyxLQUM5QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FBTyxLQUM5QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FDdkJKLEVBQUlFLEVBQUlFLE9BQU9KLEVBQUlFLEVBQUlFLE9BQ3ZCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxRQUN4QkMsS0FBSzs7OztBQU9oQixTQUFTQyxZQUFZSixHQUFLQyxHQUFRSCxJQUFNSCxRQUFRSTtJQUM1QyxJQUFJRyxJQUFJRCxLQUFVO0lBRWxCLFNBQ0lILEVBQUlFLEVBQUlFLE9BQU9KLEVBQUlFLEVBQUlFLE9BQ3ZCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUFPLEtBQzlCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUFPLEtBQzlCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUFPLEtBQzlCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUFPLEtBQzlCSixFQUFJRSxFQUFJRSxPQUFPSixFQUFJRSxFQUFJRSxPQUN2QkosRUFBSUUsRUFBSUUsT0FBT0osRUFBSUUsRUFBSUUsT0FDdkJKLEVBQUlFLEVBQUlFLE9BQU9KLEVBQUlFLEVBQUlFLFFBQ3hCQyxLQUFLOzs7QUFHWixTQUFTRSxjQUFjQztJQUNuQixPQUFPWCxRQUFRWSwwQkFBMEJEOzs7QUFHN0MsU0FBU0UsV0FBV0M7SUFDaEIsT0FBT0EsRUFBSUMsSUFBSUw7OztBQXhCbkJaLFFBQVFJLGVBQWVBLGNBa0J2QkosUUFBUVcsY0FBY0EsYUFJdEJYLFFBQVFZLGdCQUFnQkE7QUFJeEJaLFFBQVFlLGFBQWFBLFlBRXJCakIsT0FBT29CLE9BQU9sQiJ9