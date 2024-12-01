// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=r()?function(e){var r,i,o,c,s;if(null==e)return t.call(e);i=e[a],s=a,r=null!=(c=e)&&n.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay,s=r();function l(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var w=Math.abs,v=String.prototype.toLowerCase,m=String.prototype.toUpperCase,_=String.prototype.replace,j=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,F=/^(\d+)e/,T=/\.0$/,x=/\.0*e/,I=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":w(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,I,"$1e"),t=_.call(t,x,"e"),t=_.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,j,"e+0$1"),t=_.call(t,E,"e-0$1"),e.alternate&&(t=_.call(t,S,"$1."),t=_.call(t,F,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):v.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,A=Array.isArray;function P(e){return e!=e}function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function C(e){var r,t,n,i,a,o,c,s,l,u,p,f,g;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!P(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,p=n.width,f=n.padRight,g=void 0,(g=p-u.length)<0?u:u=f?u+O(g):O(g)+u)),o+=n.arg||"",c+=1}return o}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function D(e){var r,t,n,i;for(t=[],i=0,n=N.exec(e);n;)(r=e.slice(i,N.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=N.lastIndex,n=N.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function M(e){var r,t;if("string"!=typeof e)throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[D(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return C.apply(null,r)}var Y=Object.prototype,Z=Y.toString,G=Y.__defineGetter__,Q=Y.__defineSetter__,L=Y.__lookupGetter__,W=Y.__lookupSetter__,U=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=Y,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Q&&Q.call(e,r,t.set),e};function X(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"string"==typeof e}var q=String.prototype.valueOf,B=r();function H(e){return"object"==typeof e&&(e instanceof String||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===o(e)))}function J(e){return z(e)||H(e)}function K(e){return"number"==typeof e}X(J,"isPrimitive",z),X(J,"isObject",H);var ee=Number,re=ee.prototype.toString,te=r();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ie(e){return K(e)||ne(e)}X(ie,"isPrimitive",K),X(ie,"isObject",ne);var ae=Number.POSITIVE_INFINITY,oe=ee.NEGATIVE_INFINITY,ce=Math.floor;function se(e){return e<ae&&e>oe&&ce(r=e)===r;var r}function le(e){return K(e)&&se(e)}function ue(e){return ne(e)&&se(e.valueOf())}function pe(e){return le(e)||ue(e)}function fe(){return(new Date).getFullYear()}function ge(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}X(pe,"isPrimitive",le),X(pe,"isObject",ue);var de={1:744,2:672,3:744,4:720,5:744,6:720,7:744,8:744,9:720,10:744,11:720,12:744,jan:744,january:744,feb:672,february:672,mar:744,march:744,apr:720,april:720,may:744,jun:720,june:720,jul:744,july:744,aug:744,august:744,sep:720,september:720,oct:744,october:744,nov:720,november:720,dec:744,december:744};return function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(l(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!z(e)&&!le(e))throw new TypeError(ge("1QFAZ",e));i=fe(),n=e}else{if(!z(e)&&!le(e))throw new TypeError(ge("1QFAX",e));if(!le(r))throw new TypeError(ge("1QF7f",r));n=e,i=r}if(le(n)&&(n<1||n>12))throw new RangeError(ge("1QFAa",n));if(n=function(e){if(!z(e))throw new TypeError(M("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}(n.toString()),void 0===(t=de[n]))throw new Error(ge("1QFAb",n));return 672===t&&function(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!le(e))return!1;r=e}else r=fe();return r%100==0?r%400==0:r%4==0}(i)&&(t+=24),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).hoursInMonth=r();
//# sourceMappingURL=index.js.map
