/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={597:function(e,t,r){var n,i,a;i=[r(77)],void 0===(a="function"==typeof(n=function(e){e.register("locale","da-dk",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"k",million:"mio",billion:"mia",trillion:"b"},ordinal:function(e){return"."},currency:{symbol:"DKK"}})})?n.apply(t,i):n)||(e.exports=a)},77:function(e,t,r){var n,i;n=function(){var e,t,r,n,i,a={},o={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,i,o,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(i in a)if((s="function"==typeof a[i].regexps.unformat?a[i].regexps.unformat():a[i].regexps.unformat)&&r.match(s)){o=a[i].unformat;break}n=(o=o||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var i,a,s,l,u,c,f,d,h=o[e.options.currentLocale],p=!1,m=!1,g="",_=1e12,v=1e9,b=1e6,y="",w=!1;if(t=t||0,a=Math.abs(t),e._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(u=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],e._.includes(r," a")&&(g=" "),r=r.replace(new RegExp(g+"a[kmbt]?"),""),a>=_&&!i||"t"===i?(g+=h.abbreviations.trillion,t/=_):a<_&&a>=v&&!i||"b"===i?(g+=h.abbreviations.billion,t/=v):a<v&&a>=b&&!i||"m"===i?(g+=h.abbreviations.million,t/=b):(a<b&&a>=1e3&&!i||"k"===i)&&(g+=h.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(m=!0,r=r.replace("[.]",".")),s=t.toString().split(".")[0],l=r.split(".")[1],c=r.indexOf(","),d=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),y=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):y=e._.toFixed(t,l.length,n),s=y.split(".")[0],y=e._.includes(y,".")?h.delimiters.decimal+y.split(".")[1]:"",m&&0===Number(y.slice(1))&&(y="")):s=e._.toFixed(t,0,n),g&&!i&&Number(s)>=1e3&&g!==h.abbreviations.trillion)switch(s=String(Number(s)/1e3),g){case h.abbreviations.thousand:g=h.abbreviations.million;break;case h.abbreviations.million:g=h.abbreviations.billion;break;case h.abbreviations.billion:g=h.abbreviations.trillion}if(e._.includes(s,"-")&&(s=s.slice(1),w=!0),s.length<d)for(var E=d-s.length;E>0;E--)s="0"+s;return c>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),0===r.indexOf(".")&&(s=""),f=s+y+(g||""),p?f=(p&&w?"(":"")+f+(p&&w?")":""):u>=0?f=0===u?(w?"-":"+")+f:f+(w?"-":"+"):w&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,i=o[l.currentLocale],a=e,s={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)r=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),s)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),a.match(n)){r*=Math.pow(10,s[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,a=0;if(3===arguments.length)r=arguments[2];else{for(;a<i&&!(a in n);)a++;if(a>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<i;a++)a in n&&(r=t(r,n[a],a,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var i,a,o,s,l=e.toString().split("."),u=t-(n||0);return i=2===l.length?Math.min(Math.max(l[1].length,u),t):u,o=Math.pow(10,i),s=(r(e+"e+"+i)/o).toFixed(i),n>t-i&&(a=new RegExp("\\.?0{1,"+(n-(t-i))+"}$"),s=s.replace(a,"")),s}},e.options=l,e.formats=a,e.locales=o,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return o[l.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in s)l[e]=s[e]},e.zeroFormat=function(e){l.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,i,a,o,s,l,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(t){u=e.localeData(e.locale())}return a=u.currency.symbol,s=u.abbreviations,n=u.delimiters.decimal,i="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==a)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==s.thousand&&c[0]!==s.million&&c[0]!==s.billion&&c[0]!==s.trillion)||(l=new RegExp(i+"{2}"),t.match(/[^\d.,]/g)||(o=t.split(n)).length>2||(o.length<2?!o[0].match(/^\d+.*\d$/)||o[0].match(l):1===o[0].length?!o[0].match(/^\d+$/)||o[0].match(l)||!o[1].match(/^\d+$/):!o[0].match(/^\d+.*\d$/)||o[0].match(l)||!o[1].match(/^\d+$/))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,i,o,s=this._value,u=t||l.defaultFormat;if(r=r||Math.round,0===s&&null!==l.zeroFormat)i=l.zeroFormat;else if(null===s&&null!==l.nullFormat)i=l.nullFormat;else{for(n in a)if(u.match(a[n].regexps.format)){o=a[n].format;break}i=(o=o||e._.numberToFormat)(s,u,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],(function(e,t,n,i){return e+Math.round(r*t)}),0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],(function(e,t,n,i){return e-Math.round(r*t)}),Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,i){var a=t.correctionFactor(e,r);return Math.round(e*a)*Math.round(r*a)/Math.round(a*a)}),1),this},divide:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,i){var a=t.correctionFactor(e,r);return Math.round(e*a)/Math.round(r*a)})),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var i,a=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"BPS"),i=i.join("")):i=i+a+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i="("+(i=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(t,i,a){var o,s,l,u=e._.includes(i,"ib")?n:r,c=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),o=0;o<=u.suffixes.length;o++)if(s=Math.pow(u.base,o),l=Math.pow(u.base,o+1),null===t||0===t||t>=s&&t<l){c+=u.suffixes[o],s>0&&(t/=s);break}return e._.numberToFormat(t,i,a)+c},unformat:function(t){var i,a,o=e._.stringToNumber(t);if(o){for(i=r.suffixes.length-1;i>=0;i--){if(e._.includes(t,r.suffixes[i])){a=Math.pow(r.base,i);break}if(e._.includes(t,n.suffixes[i])){a=Math.pow(n.base,i);break}}o*=a||1}return o}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var i,a,o=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),a=0;a<s.before.length;a++)switch(s.before[a]){case"$":i=e._.insert(i,o.currency.symbol,a);break;case" ":i=e._.insert(i," ",a+o.currency.symbol.length-1)}for(a=s.after.length-1;a>=0;a--)switch(s.after[a]){case"$":i=a===s.after.length-1?i+o.currency.symbol:e._.insert(i,o.currency.symbol,-(s.after.length-(1+a)));break;case" ":i=a===s.after.length-1?i+" ":e._.insert(i," ",-(s.after.length-(1+a)+o.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var i=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),i=Number(r[1]);return i=e._.includes(t,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],(function(t,r,n,i){var a=e._.correctionFactor(t,r);return t*a*(r*a)/(a*a)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var i=e.locales[e.options.currentLocale],a=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),a+=i.ordinal(t),e._.numberToFormat(t,r,n)+a}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var i,a=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"%"),i=i.join("")):i=i+a+"%",i},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),a=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(i=n.call(t,r,t,e))||(e.exports=i)},460:function(e,t){var r,n;r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},a=0,o={parse:function(r,n){var s=(n=n||{}).dynamicTyping||!1;if(w(s)&&(n.dynamicTypingFunction=s,s={}),n.dynamicTyping=s,n.transform=!!w(n.transform)&&n.transform,n.worker&&o.WORKERS_SUPPORTED){var l=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,n,s=(r=t.URL||t.webkitURL||null,n=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),l=new t.Worker(s);return l.onmessage=g,l.id=a++,i[l.id]=l}();return l.userStep=n.step,l.userChunk=n.chunk,l.userComplete=n.complete,l.userError=n.error,n.step=w(n.step),n.chunk=w(n.chunk),n.complete=w(n.complete),n.error=w(n.error),delete n.worker,void l.postMessage({input:r,config:n,workerId:l.id})}var h=null;return o.NODE_STREAM_INPUT,"string"==typeof r?h=n.download?new u(n):new f(n):!0===r.readable&&w(r.read)&&w(r.on)?h=new d(n):(t.File&&r instanceof File||r instanceof Object)&&(h=new c(n)),h.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",a="\r\n",s='"',l=s+s,u=!1,c=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(a=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+s),"boolean"==typeof t.escapeFormulae&&(f=t.escapeFormulae)}}();var d=new RegExp(p(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,u);if("object"==typeof e[0])return h(c||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var s=Array.isArray(e)&&0<e.length,l=!Array.isArray(t[0]);if(s&&n){for(var u=0;u<e.length;u++)0<u&&(o+=i),o+=m(e[u],u);0<t.length&&(o+=a)}for(var c=0;c<t.length;c++){var f=s?e.length:t[c].length,d=!1,h=s?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!s&&(d="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&s){for(var p=[],g=0;g<f;g++){var _=l?e[g]:g;p.push(t[c][_])}d=""===p.join("").trim()}if(!d){for(var v=0;v<f;v++){0<v&&!h&&(o+=i);var b=s&&l?e[v]:v;o+=m(t[c][b],v)}c<t.length-1&&(!r||0<f&&!h)&&(o+=a)}}return o}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===f&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var n=e.toString().replace(d,l),a="boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(n,o.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1);return a?s+n+s:n}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=h,o.NetworkStreamer=u,o.FileStreamer=c,o.StringStreamer=f,o.ReadableStreamStreamer=d,t.jQuery){var s=t.jQuery;s.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==s(this).prop("tagName").toUpperCase()||"file"!==s(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:s.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,l=n[0];if(w(e.before)){var u=e.before(l.file,l.inputElem);if("object"==typeof u){if("abort"===u.action)return"AbortError",t=l.file,r=l.inputElem,i=u.reason,void(w(e.error)&&e.error({name:"AbortError"},t,r,i));if("skip"===u.action)return void a();"object"==typeof u.config&&(l.instanceConfig=s.extend(l.instanceConfig,u.config))}else if("skip"===u)return void a()}var c=l.instanceConfig.complete;l.instanceConfig.complete=function(e){w(c)&&c(e,l.file,l.inputElem),a()},o.parse(l.file,l.instanceConfig)}else w(e.complete)&&e.complete()}function a(){n.splice(0,1),i()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var s=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=s.meta.cursor;this._finished||(this._partialLine=a.substring(l-this._baseIndex),this._baseIndex=l),s&&s.data&&(this._rowCount+=s.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:s,workerId:o.WORKER_ID,finished:u});else if(w(this._config.chunk)&&!r){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!u||!w(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),l.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var a=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:a}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){l.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=y((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=y((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=y((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function h(e){var t,r,n,i=Math.pow(2,53),a=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,u=this,c=0,f=0,d=!1,h=!1,g=[],_={data:[],errors:[],meta:{}};if(w(e.step)){var v=e.step;e.step=function(t){if(_=t,k())E();else{if(E(),0===_.data.length)return;c+=t.data.length,e.preview&&c>e.preview?r.abort():(_.data=_.data[0],v(_,u))}}}function y(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function E(){if(_&&n&&(S("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)y(_.data[t])&&_.data.splice(t--,1);return k()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;k()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){w(e.transformHeader)&&(t=e.transformHeader(t,r)),g.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var a=n,o=t[n];e.header&&(a=n>=g.length?"__parsed_extra":g[n]),e.transform&&(o=e.transform(o,a)),o=x(a,o),"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(o)):i[a]=o}return e.header&&(n>g.length?S("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+n,f+r):n<g.length&&S("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+n,f+r)),i}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=g),f+=r,_}()}function k(){return e.header&&0===g.length}function x(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(s.test(e)){var t=parseFloat(e);if(a<t&&t<i)return!0}return!1}(r)?parseFloat(r):l.test(r)?new Date(r):""===r?null:r):r;var n}function S(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),_.errors.push(i)}this.parse=function(i,a,s){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),a=1<i.length&&i[0].length<n[0].length;if(1===n.length||a)return"\n";for(var o=0,s=0;s<n.length;s++)"\n"===n[s][0]&&o++;return o>=n.length/2?"\r\n":"\r"}(i,l)),n=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),_.meta.delimiter=e.delimiter);else{var u=function(t,r,n,i,a){var s,l,u,c;a=a||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var f=0;f<a.length;f++){var d=a[f],h=0,p=0,g=0;u=void 0;for(var _=new m({comments:i,delimiter:d,newline:r,preview:10}).parse(t),v=0;v<_.data.length;v++)if(n&&y(_.data[v]))g++;else{var b=_.data[v].length;p+=b,void 0!==u?0<b&&(h+=Math.abs(b-u),u=b):u=b}0<_.data.length&&(p/=_.data.length-g),(void 0===l||h<=l)&&(void 0===c||c<p)&&1.99<p&&(l=h,s=d,c=p)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(n=!0,e.delimiter=o.DefaultDelimiter),_.meta.delimiter=e.delimiter}var c=b(e);return e.preview&&e.header&&c.preview++,t=i,r=new m(c),_=r.parse(t,a,s),E(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=w(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(d=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),_.meta.aborted=!0,w(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,a=e.step,s=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,f=!1;this.parse=function(e,o,d){if("string"!=typeof e)throw new Error("Input must be a string");var h=e.length,m=r.length,g=n.length,_=i.length,v=w(a),b=[],y=[],E=[],k=c=0;if(!e)return D();if(l||!1!==l&&-1===e.indexOf(t)){for(var x=e.split(n),S=0;S<x.length;S++){if(E=x[S],c+=E.length,S!==x.length-1)c+=n.length;else if(d)return D();if(!i||E.substring(0,_)!==i){if(v){if(b=[],I(E.split(r)),B(),f)return D()}else I(E.split(r));if(s&&s<=S)return b=b.slice(0,s),D(!0)}}return D()}for(var T=e.indexOf(r,c),C=e.indexOf(n,c),R=new RegExp(p(u)+p(t),"g"),F=e.indexOf(t,c);;)if(e[c]!==t)if(i&&0===E.length&&e.substring(c,c+_)===i){if(-1===C)return D();c=C+g,C=e.indexOf(n,c),T=e.indexOf(r,c)}else if(-1!==T&&(T<C||-1===C))E.push(e.substring(c,T)),c=T+m,T=e.indexOf(r,c);else{if(-1===C)break;if(E.push(e.substring(c,C)),M(C+g),v&&(B(),f))return D();if(s&&b.length>=s)return D(!0)}else for(F=c,c++;;){if(-1===(F=e.indexOf(t,F+1)))return d||y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),N();if(F===h-1)return N(e.substring(c,F).replace(R,t));if(t!==u||e[F+1]!==u){if(t===u||0===F||e[F-1]!==u){-1!==T&&T<F+1&&(T=e.indexOf(r,F+1)),-1!==C&&C<F+1&&(C=e.indexOf(n,F+1));var O=A(-1===C?T:Math.min(T,C));if(e[F+1+O]===r){E.push(e.substring(c,F).replace(R,t)),e[c=F+1+O+m]!==t&&(F=e.indexOf(t,c)),T=e.indexOf(r,c),C=e.indexOf(n,c);break}var L=A(C);if(e.substring(F+1+L,F+1+L+g)===n){if(E.push(e.substring(c,F).replace(R,t)),M(F+1+L+g),T=e.indexOf(r,c),F=e.indexOf(t,c),v&&(B(),f))return D();if(s&&b.length>=s)return D(!0);break}y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),F++}}else F++}return N();function I(e){b.push(e),k=c}function A(t){var r=0;if(-1!==t){var n=e.substring(F+1,t);n&&""===n.trim()&&(r=n.length)}return r}function N(t){return d||(void 0===t&&(t=e.substring(c)),E.push(t),c=h,I(E),v&&B()),D()}function M(t){c=t,I(E),E=[],C=e.indexOf(n,c)}function D(e){return{data:b,errors:y,meta:{delimiter:r,linebreak:n,aborted:f,truncated:!!e,cursor:k+(o||0)}}}function B(){a(D()),b=[],y=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var a={abort:function(){n=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},a),!n);o++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,a,t.file),delete t.results)}t.finished&&!n&&_(t.workerId,t.results)}function _(e,t){var r=i[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function v(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=b(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=o.parse(r.input,r.config);n&&t.postMessage({workerId:o.WORKER_ID,results:n,finished:!0})}}),(u.prototype=Object.create(l.prototype)).constructor=u,(c.prototype=Object.create(l.prototype)).constructor=c,(f.prototype=Object.create(f.prototype)).constructor=f,(d.prototype=Object.create(l.prototype)).constructor=d,o},void 0===(n=r.apply(t,[]))||(e.exports=n)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{const e=r(460),t=r(77);var n;r(597),(n=new class{data=[];add(e,t,r){e&&t&&(r=void 0===r?null:r,this.data.push({text:e.toString().toLowerCase(),amount:r,account:t}))}get(e,t){if(e){e=e.toString().toLowerCase(),t=void 0===t?null:t;for(var r=0;r<this.data.length;r++){var n=this.data[r];if(n.text===e){if(null!=n.amount&&n.amount!==t)continue;return n.account}}return null}}}).add("Adobe"),n.add("Google GSUITE_conjugo.dk"),n.add("GOOGLE*GSUITE CONJUGO."),n.add("BACKBLAZE.COM"),n.add("CLICKUP"),n.add("SKAT"),n.add("BS BETALINGSORDNINGER SKATTEKON"),n.add("Hævet privat"),n.add("Telia"),n.add("Telia"),n.add("Telenor"),window.ledger={import:(e,r)=>{r.sort((function(e,t){var r=e.Date.replace(/\./g,"/").replace(/-/g,"/").split("/"),n=new Date(parseInt(r[2]),parseInt(r[1]-1),parseInt(r[0])),i=t.Date.replace(/\./g,"/").replace(/-/g,"/").split("/"),a=new Date(parseInt(i[2]),parseInt(i[1]-1),parseInt(i[0]));return n<a?-1:n>a?1:0})),t.locale("da-dk");var n=".ledger-table-item-line--cell__description--field",i=document.querySelector("ledger-table ledger-table-item .ledger-table-item-row.placeholder"),a=i?i.parentElement:null;if(a){var o=a.previousElementSibling;if(""!==o.querySelector(n).value.trim()&&(a.querySelector(n).dispatchEvent(new Event("focus")),o=document.querySelector("ledger-table ledger-table-item .ledger-table-item-row.placeholder").parentElement.previousElementSibling),o){var s=function(n){var i=r[n],a=t(i.Amount),l=null,u=null;"csv"===e&&(l=i.Account,u=i.OffsetAccount),"bank"===e&&(console.log(a),u="55020");var c=o.querySelector(".ledger-table-item-row--cell__date--field"),f=o.querySelector(".ledger-table-item-line--cell__description--field"),d=o.querySelector(".ledger-table-item-line--cell__amount--field"),h=0;setTimeout((function(){c.value=i.Date.replace(/\./g,"/").replace(/-/g,"/"),c.dispatchEvent(new Event("dateChange"))}),h),h+=1e3,setTimeout((function(){f.dispatchEvent(new Event("focus")),f.value=i.Text,f.dispatchEvent(new Event("change"))}),h),h+=1e3,setTimeout((function(){d.dispatchEvent(new Event("focus")),d.value=t(-1*a.value()).format("0,0.00"),d.dispatchEvent(new Event("blur"))}),h),h+=1e3,null!==l&&(setTimeout((()=>o.querySelector(".ledger-table-item-line--cell__account .ledger-select").dispatchEvent(new Event("click"))),h),h+=100,setTimeout((()=>document.querySelector("ledger-account-select .search-field").value=l),h),h+=100,setTimeout((()=>document.querySelector("ledger-account-select .search-field").dispatchEvent(new Event("input"))),h),h+=100,setTimeout((()=>document.querySelector("ledger-account-select ledger-account-select-item .ledger-account-select-sub-item.selected").dispatchEvent(new Event("click"))),h),h+=1e3),null!==u&&(setTimeout((()=>o.querySelector(".ledger-table-item-line--cell__offset-account .ledger-select").dispatchEvent(new Event("click"))),h),h+=100,setTimeout((()=>document.querySelector("ledger-offset-account-select .search-field").value=u),h),h+=100,setTimeout((()=>document.querySelector("ledger-offset-account-select .search-field").dispatchEvent(new Event("input"))),h),h+=100,setTimeout((()=>document.querySelector("ledger-offset-account-select ledger-offset-account-select-item .ledger-offset-account-select-sub-item.selected").dispatchEvent(new Event("click"))),h),h+=1e3),++n<r.length?setTimeout((function(){o=o.nextElementSibling,s(n)}),h):setTimeout((function(){alert("Import er gennemført")}),2e3)};s(0)}}}},function(){if("/ledgerv2"===window.location.pathname.substring(window.location.pathname.length-9)){var t=document.createElement("label");t.style.position="fixed",t.style.bottom="90px",t.style.right="15px",t.style.display="block",t.style.width="70px",t.style.height="70px",t.style.padding="10px 0 0",t.style.borderRadius="50px",t.style.backgroundColor="#21c18c",t.style.boxSizing="border-box",t.style.color="#fff",t.style.boxShadow="0 0 8px rgba(0,0,0,.2)",t.style.cursor="pointer";var r=t.cloneNode();r.style.right="105px";var n=document.createElement("span");n.style.display="block",n.style.textAlign="center",n.style.fontSize="40px",n.style.lineHeight="30px",n.innerHTML="&plus;";var i=n.cloneNode(!0),a=document.createElement("span");a.style.display="block",a.style.textAlign="center",a.style.fontSize="12px",a.style.lineHeight="normal",a.innerText="Bank";var o=a.cloneNode();o.innerText="CSV";var s=document.createElement("input");s.type="file",s.accept="csv",s.style.opacity=0;var l=s.cloneNode();s.addEventListener("change",(function(t){e.parse(t.target.files[0],{header:!0,skipEmptyLines:!0,complete:function(e,t){e.errors.length>0||ledger.import("bank",e.data)}})})),l.addEventListener("change",(function(t){e.parse(t.target.files[0],{header:!0,skipEmptyLines:!0,complete:function(e,t){e.errors.length>0||ledger.import("csv",e.data)}})})),t.append(n),t.append(a),t.append(s),r.append(i),r.append(o),r.append(l),document.querySelector("body").append(t),document.querySelector("body").append(r)}}()})()})();