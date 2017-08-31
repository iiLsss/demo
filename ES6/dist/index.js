'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var foo = void 0;
var _foo = { foo: 'lsss' };
foo = _foo.foo;

console.log(foo);

var _lsss = 'lsss',
    _lsss2 = _slicedToArray(_lsss, 4),
    a = _lsss2[0],
    b = _lsss2[1],
    c = _lsss2[2],
    d = _lsss2[3];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
