// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.2.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.2.0-esm/index.mjs";var o={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function d(d,l){var g,u,h,j;if(0===arguments.length)u=(j=new Date).getMonth()+1,h=j.getFullYear();else if(1===arguments.length)if(e(d))u=(j=d).getMonth()+1,h=j.getFullYear();else{if(!t(d)&&!r(d))throw new TypeError(n("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",d));h=m(),u=d}else{if(!t(d)&&!r(d))throw new TypeError(n("invalid argument. First argument must be either a string or integer. Value: `%s`.",d));if(!r(l))throw new TypeError(n("invalid argument. Second argument must be an integer. Value: `%s`.",l));u=d,h=l}if(r(u)&&(u<1||u>12))throw new RangeError(n("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",u));if(u=s(u.toString()),void 0===(g=o[u]))throw new Error(n("invalid argument. Must provide a recognized month. Value: `%s`.",u));return 672===g&&i(h)&&(g+=a),g}export{d as default};
//# sourceMappingURL=index.mjs.map
