// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-hours-in-day@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.0.2-esm/index.mjs";var d={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};function a(a,l){var j,h,p,f;if(0===arguments.length)h=(f=new Date).getMonth()+1,p=f.getFullYear();else if(1===arguments.length)if(e(a))h=(f=a).getMonth()+1,p=f.getFullYear();else{if(!r(a)&&!t(a))throw new TypeError(n("1QFAZ,LU",a));p=m(),h=a}else{if(!r(a)&&!t(a))throw new TypeError(n("1QFAX,LV",a));if(!t(l))throw new TypeError(n("1QF7f,LW",l));h=a,p=l}if(t(h)&&(h<1||h>12))throw new RangeError(n("1QFAa,LX",h));if(h=s(h.toString()),void 0===(j=d[h]))throw new Error(n("1QFAb,LY",h));return 672===j&&i(p)&&(j+=o),j}export{a as default};
//# sourceMappingURL=index.mjs.map
