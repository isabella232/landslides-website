!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=L.Control.Layers.extend({_addItem:function(a){var b,c,d,e,f;return d=document.createDocumentFragment(),f=document.createElement("label"),b=this._map.hasLayer(a.layer),a.overlay?(e=document.createElement("input"),e.type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=b):e=this._createRadioElement("leaflet-base-layers",b),e.layerId=L.stamp(a.layer),e.id="leaflet-layer-control-selector-"+e.layerId,L.DomEvent.on(e,"click",this._onInputClick,this),f.innerHTML=a.name,f.setAttribute("for",e.id),d.appendChild(e),d.appendChild(f),c=a.overlay?this._overlaysList:this._baseLayersList,c.appendChild(d),d}});L.Control.HazDevLayers=d,L.control.hazDevLayers=function(a,b,c){return new d(a,b,c)},b.exports=L.control.hazDevLayers},{}],2:[function(a,b,c){"use strict";var d,e,f,g,h=a("leaflet/layer/TileProvider"),i=a("util/Util");e="esri",f="natgeo",g={},d={provider:e},g[e]={url:"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",options:{subdomains:["server","services"],attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"}},g[f]={url:"//{s}.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{subdomains:["server","services"],attribution:"Content may not reflect National Geographic's current map policy. Sources: National Geographic, Esri, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."}};var j=function(a){try{return h.create(g,i.extend({},d,a))}catch(b){return h.create(g,d)}};j.ESRI=e,j.NATGEO=f,b.exports=j},{"leaflet/layer/TileProvider":3,"util/Util":11}],3:[function(a,b,c){"use strict";var d=a("util/Util"),e={create:function(a,b){var c,e,f;return f=a[b.provider],e=f.url,c=d.extend({},f.options,b),c.hasOwnProperty("provider")&&delete c.provider,L.tileLayer(e,c)}};b.exports=e},{"util/Util":11}],4:[function(a,b,c){"use strict";var d=a("../util/Events"),e=a("../util/Util"),f=function(a){var b,c,f;return b=d(),c=function(){f=e.extend({},a),a&&a.hasOwnProperty("id")&&(b.id=a.id),a=null},b.get=function(a){return void 0===a?f:f.hasOwnProperty(a)?f[a]:null},b.set=function(a,c){var d,g={},h=!1;for(d in a)f.hasOwnProperty(d)&&f[d]===a[d]||(g[d]=a[d],h=!0);if(f=e.extend(f,a),a&&a.hasOwnProperty("id")&&(b.id=a.id),!(c&&c.hasOwnProperty("silent")&&c.silent)&&(h||c&&c.hasOwnProperty("force")&&c.force)){for(d in g)b.trigger("change:"+d,g[d]);b.trigger("change",g)}},b.toJSON=function(){var a,b,c=e.extend({},f);for(a in c)"object"==typeof(b=c[a])&&null!==b&&"function"==typeof b.toJSON&&(c[a]=b.toJSON());return c},c(),b};b.exports=f},{"../util/Events":6,"../util/Util":7}],5:[function(a,b,c){"use strict";var d=a("./Model"),e=a("../util/Events"),f=a("../util/Util"),g={},h=function(a){var b,c,h;return b=e(),c=function(a){a=f.extend({},g,a),b.el=a&&a.hasOwnProperty("el")?a.el:document.createElement("div"),b.model=a.model,b.model||(b.model=d({}),h=!0),b.model.on("change","render",b)},b.render=function(){},b.destroy=f.compose(function(){null!==b&&(b.model.off("change","render",b),h&&b.model.destroy(),h=null,b.model=null,b.el=null,c=null,b=null)},b.destroy),c(a),a=null,b};b.exports=h},{"../util/Events":6,"../util/Util":7,"./Model":4}],6:[function(a,b,c){"use strict";var d=null,e=function(a){return"string"==typeof a||a instanceof String},f=function(){var a,b,c;return a={},b=function(){c={}},a.destroy=function(){b=null,c=null,a=null},a.off=function(a,b,d){var e;if(void 0===a)c=null,c={};else{if(!c.hasOwnProperty(a))return;if(void 0===b)delete c[a];else{var f=null;for(e=c[a].length-1;e>=0&&(f=c[a][e],f.callback!==b||d&&f.context!==d||(c[a].splice(e,1),!d));e--);0===c[a].length&&delete c[a],f=null}}},a.on=function(a,b,d){if(!(b||!b.apply||d&&e(b)&&d[b].apply))throw new Error("Callback parameter is not callable.");c.hasOwnProperty(a)||(c[a]=[]),c[a].push({callback:b,context:d})},a.trigger=function(a){var b,d,f,g,h;if(c.hasOwnProperty(a))for(b=Array.prototype.slice.call(arguments,1),h=c[a].slice(0),d=0,f=h.length;d<f;d++)g=h[d],e(g.callback)?g.context[g.callback].apply(g.context,b):g.callback.apply(g.context,b)},b(),a};d=f(),f.on=function(){return d.on.apply(d,arguments)},f.off=function(){return d.off.apply(d,arguments)},f.trigger=function(){return d.trigger.apply(d,arguments)};var g=function(a){f.trigger("hashchange",a)};if("onhashchange"in window)window.addEventListener&&window.addEventListener("hashchange",g,!1);else{var h=document.location.hash;setInterval(function(){h!==document.location.hash&&(h=document.location.hash,g({type:"hashchange",newURL:document.location.hash,oldURL:h}))},300)}b.exports=f},{}],7:[function(a,b,c){"use strict";var d=!1,e=!1,f=function(){};f.isMobile=function(){return d},f.supportsDateInput=function(){return e},f.extend=function(a){var b,c,d,e;for(b=1,c=arguments.length;b<c;b++)if(d=arguments[b])for(e in d)a[e]=d[e];return a},f.equals=function(a,b){var c,d;if(a===b)return!0;if(null===a||null===b)return!1;if("object"==typeof a&&"object"==typeof b){for(c in a)if(a.hasOwnProperty(c)&&!b.hasOwnProperty(c))return!1;for(d in b)if(b.hasOwnProperty(d)){if(!a.hasOwnProperty(d))return!1;if(!f.equals(a[d],b[d]))return!1}return!0}return a===b},f.getEvent=function(a){var b;return a||(a=window.event),a.target?b=a.target:a.srcElement&&(b=a.srcElement),3===b.nodeType&&(b=b.parentNode),{target:b,originalEvent:a}},f.getParentNode=function(a,b,c){for(var d=a;d&&d!==c&&d.nodeName.toUpperCase()!==b.toUpperCase();)d=d.parentNode;return d&&"nodeName"in d&&d.nodeName.toUpperCase()===b.toUpperCase()?d:null},f.empty=function(a){for(;a.firstChild;)a.removeChild(a.firstChild)},f.detach=function(a){a.parentNode&&a.parentNode.removeChild(a)},f.getWindowSize=function(){var a={width:null,height:null};if("innerWidth"in window&&"innerHeight"in window)a={width:window.innerWidth,height:window.innerHeight};else{var b="documentElement"in document?document.documentElement:document.body;a={width:b.offsetWidth,height:b.offsetHeight}}return a},f.compose=function(){var a=arguments;return function(b){var c,d,e;for(c=0,e=a.length;c<e;c++)(d=a[c])&&d.call&&(b=d.call(this,b));return b}},f.contains=function(a,b){var c,d;for(c=0,d=a.length;c<d;c++)if(b===a[c])return!0;return!1},f.isArray=function(a){return"function"==typeof Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)},f.loadScript=function(a,b){var c,d,e,g,h;b=f.extend({},{success:null,error:null,done:null},b),c=function(){h.removeEventListener("load",g),h.removeEventListener("error",e),h.parentNode.removeChild(h),c=null,g=null,e=null,h=null},d=function(){null!==b.done&&b.done(),b=null},e=function(){c(),null!==b.error&&b.error.apply(null,arguments),d()},g=function(){c(),null!==b.success&&b.success.apply(null,arguments),d()},h=document.createElement("script"),h.addEventListener("load",g),h.addEventListener("error",e),h.src=a,h.async=!0,document.querySelector("script").parentNode.appendChild(h)},function(){var a=(document.createElement("div"),document.createElement("input")),b=navigator.userAgent||navigator.vendor||window.opera;d=b.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i),a.setAttribute("type","date"),e="text"!==a.type}(),b.exports=f},{}],8:[function(a,b,c){"use strict";var d,e,f,g,h,i=a("./Util"),j=0,k={url:null,success:null,error:null,done:null,data:null,callbackName:null,callbackParameter:"callback"},l={url:null,success:null,error:null,done:null,method:"GET",headers:null,data:null,rawdata:null};d=function(a){var b,c,d,e,f;if(a=i.extend({},l,a),e=a.url,a.restrictOrigin&&(e=g(e)),c=a.rawdata,null!==a.data&&(d=h(a.data),"GET"===a.method?e=e+"?"+d:(c=d,null===a.headers&&(a.headers={}),a.headers["Content-Type"]="application/x-www-form-urlencoded")),f=new XMLHttpRequest,f.onreadystatechange=function(){var b,c;if(4===f.readyState){if(200===f.status){if(null!==a.success)try{b=f.response,c=f.getResponseHeader("Content-Type"),c&&-1!==c.indexOf("json")&&(b=JSON.parse(b)),a.success(b,f)}catch(d){null!==a.error&&a.error(d,f)}}else a.error&&a.error(f.status,f);null!==a.done&&a.done(f)}},f.open(a.method,e,!0),null!==a.headers)for(b in a.headers)f.setRequestHeader(b,a.headers[b]);return f.send(c),f},e=function(){return"_xhr_callback_"+(new Date).getTime()+"_"+ ++j},f=function(a){var b,c,d;a=i.extend({},k,a),d=a.url,b=i.extend({},a.data),c=a.callbackName||e(),b[a.callbackParameter]=c,d+=(-1===d.indexOf("?")?"?":"&")+h(b),window[c]=function(){a.success.apply(null,arguments)},i.loadScript(d,{error:a.error,done:function(){window[c]=null,delete window[c],null!==a.done&&a.done()}})},g=function(a){var b,c;return b=document.createElement("a"),b.setAttribute("href",a),c=b.pathname,0!==a.indexOf("http")&&0!==a.indexOf("/")||0===c.indexOf("/")||(c="/"+c),c},h=function(a){var b,c,d,e,f,g;b=[];for(c in a)if(d=encodeURIComponent(c),(e=a[c])instanceof Array)for(f=0,g=e.length;f<g;f++)b.push(d+"="+encodeURIComponent(e[f]));else b.push(d+"="+encodeURIComponent(e));return b.join("&")},b.exports={ajax:d,getCallbackName:e,jsonp:f,restrictOrigin:g,urlEncode:h}},{"./Util":7}],9:[function(a,b,c){"function"==typeof Object.create?b.exports=function(a,b){a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}:b.exports=function(a,b){a.super_=b;var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a}},{}],10:[function(a,b,c){function d(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function f(a){if(l===setTimeout)return setTimeout(a,0);if((l===d||!l)&&setTimeout)return l=setTimeout,setTimeout(a,0);try{return l(a,0)}catch(b){try{return l.call(null,a,0)}catch(b){return l.call(this,a,0)}}}function g(a){if(m===clearTimeout)return clearTimeout(a);if((m===e||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(a);try{return m(a)}catch(b){try{return m.call(null,a)}catch(b){return m.call(this,a)}}}function h(){q&&o&&(q=!1,o.length?p=o.concat(p):r=-1,p.length&&i())}function i(){if(!q){var a=f(h);q=!0;for(var b=p.length;b;){for(o=p,p=[];++r<b;)o&&o[r].run();r=-1,b=p.length}o=null,q=!1,g(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var l,m,n=b.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:d}catch(a){l=d}try{m="function"==typeof clearTimeout?clearTimeout:e}catch(a){m=e}}();var o,p=[],q=!1,r=-1;n.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];p.push(new j(a,b)),1!==p.length||q||f(i)},j.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=k,n.addListener=k,n.once=k,n.off=k,n.removeListener=k,n.removeAllListeners=k,n.emit=k,n.prependListener=k,n.prependOnceListener=k,n.listeners=function(a){return[]},n.binding=function(a){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(a){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}],11:[function(a,b,c){(function(b,d){function e(a,b){var d={seen:[],stylize:g};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),p(b)?d.showHidden=b:b&&c._extend(d,b),v(d.showHidden)&&(d.showHidden=!1),v(d.depth)&&(d.depth=2),v(d.colors)&&(d.colors=!1),v(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=f),i(d,a,d.depth)}function f(a,b){var c=e.styles[b];return c?"["+e.colors[c][0]+"m"+a+"["+e.colors[c][1]+"m":a}function g(a,b){return a}function h(a){var b={};return a.forEach(function(a,c){b[a]=!0}),b}function i(a,b,d){if(a.customInspect&&b&&A(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d,a);return t(e)||(e=i(a,e,d)),e}var f=j(a,b);if(f)return f;var g=Object.keys(b),p=h(g);if(a.showHidden&&(g=Object.getOwnPropertyNames(b)),z(b)&&(g.indexOf("message")>=0||g.indexOf("description")>=0))return k(b);if(0===g.length){if(A(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(w(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(y(b))return a.stylize(Date.prototype.toString.call(b),"date");if(z(b))return k(b)}var r="",s=!1,u=["{","}"];if(o(b)&&(s=!0,u=["[","]"]),A(b)){r=" [Function"+(b.name?": "+b.name:"")+"]"}if(w(b)&&(r=" "+RegExp.prototype.toString.call(b)),y(b)&&(r=" "+Date.prototype.toUTCString.call(b)),z(b)&&(r=" "+k(b)),0===g.length&&(!s||0==b.length))return u[0]+r+u[1];if(d<0)return w(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var v;return v=s?l(a,b,d,p,g):g.map(function(c){return m(a,b,d,p,c,s)}),a.seen.pop(),n(v,r,u)}function j(a,b){if(v(b))return a.stylize("undefined","undefined");if(t(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return s(b)?a.stylize(""+b,"number"):p(b)?a.stylize(""+b,"boolean"):q(b)?a.stylize("null","null"):void 0}function k(a){return"["+Error.prototype.toString.call(a)+"]"}function l(a,b,c,d,e){for(var f=[],g=0,h=b.length;g<h;++g)F(b,String(g))?f.push(m(a,b,c,d,String(g),!0)):f.push("");return e.forEach(function(e){e.match(/^\d+$/)||f.push(m(a,b,c,d,e,!0))}),f}function m(a,b,c,d,e,f){var g,h,j;if(j=Object.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?h=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(h=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),h||(a.seen.indexOf(j.value)<0?(h=q(c)?i(a,j.value,null):i(a,j.value,c-1),h.indexOf("\n")>-1&&(h=f?h.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+h.split("\n").map(function(a){return"   "+a}).join("\n"))):h=a.stylize("[Circular]","special")),v(g)){if(f&&e.match(/^\d+$/))return h;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+h}function n(a,b,c){var d=0;return a.reduce(function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function o(a){return Array.isArray(a)}function p(a){return"boolean"==typeof a}function q(a){return null===a}function r(a){return null==a}function s(a){return"number"==typeof a}function t(a){return"string"==typeof a}function u(a){return"symbol"==typeof a}function v(a){return void 0===a}function w(a){return x(a)&&"[object RegExp]"===C(a)}function x(a){return"object"==typeof a&&null!==a}function y(a){return x(a)&&"[object Date]"===C(a)}function z(a){return x(a)&&("[object Error]"===C(a)||a instanceof Error)}function A(a){return"function"==typeof a}function B(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||void 0===a}function C(a){return Object.prototype.toString.call(a)}function D(a){return a<10?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),J[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=/%[sdj%]/g;c.format=function(a){if(!t(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(e(arguments[c]));return b.join(" ")}for(var c=1,d=arguments,f=d.length,g=String(a).replace(G,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(d[c++]);case"%d":return Number(d[c++]);case"%j":try{return JSON.stringify(d[c++])}catch(b){return"[Circular]"}default:return a}}),h=d[c];c<f;h=d[++c])q(h)||!x(h)?g+=" "+h:g+=" "+e(h);return g},c.deprecate=function(a,e){function f(){if(!g){if(b.throwDeprecation)throw new Error(e);b.traceDeprecation?console.trace(e):console.error(e),g=!0}return a.apply(this,arguments)}if(v(d.process))return function(){return c.deprecate(a,e).apply(this,arguments)};if(!0===b.noDeprecation)return a;var g=!1;return f};var H,I={};c.debuglog=function(a){if(v(H)&&(H=b.env.NODE_DEBUG||""),a=a.toUpperCase(),!I[a])if(new RegExp("\\b"+a+"\\b","i").test(H)){var d=b.pid;I[a]=function(){var b=c.format.apply(c,arguments);console.error("%s %d: %s",a,d,b)}}else I[a]=function(){};return I[a]},c.inspect=e,e.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},e.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=o,c.isBoolean=p,c.isNull=q,c.isNullOrUndefined=r,c.isNumber=s,c.isString=t,c.isSymbol=u,c.isUndefined=v,c.isRegExp=w,c.isObject=x,c.isDate=y,c.isError=z,c.isFunction=A,c.isPrimitive=B,c.isBuffer=a("./support/isBuffer");var J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=a("inherits"),c._extend=function(a,b){if(!b||!x(b))return a;for(var c=Object.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":12,_process:10,inherits:9}],12:[function(a,b,c){b.exports=function(a){return a&&"object"==typeof a&&"function"==typeof a.copy&&"function"==typeof a.fill&&"function"==typeof a.readUInt8}},{}],13:[function(a,b,c){"use strict";var d,e=a("summary/SummaryView"),f=a("util/Xhr");d="https://earthquake.usgs.gov/arcgis/rest/services/ls/pwfdf_locations/MapServer/0/query?f=json&outfields=*&returnGeometry=false&where=1%3D1",f.ajax({url:d,success:function(a){var b,c;try{b=JSON.parse(a)}catch(d){b=a}c=e({el:document.querySelector("#application"),data:b.features}),c.render()},error:function(a){document.querySelector("#application").innerHTML='<p class="alert error">Failed to download post-wildfire debris flow data.</p>',console.log(a)}})},{"summary/SummaryView":16,"util/Xhr":8}],14:[function(a,b,c){"use strict";var d=a("leaflet/control/HazDevLayers"),e=a("util/Util"),f={icon:L.icon({iconUrl:"images/flame.png",iconRetinaUrl:"images/flame.png",iconSize:[15,20],iconAnchor:[10,18],popupAnchor:[-3,-16]})},g=function(a){var b,c;return b={},c=function(a){a=e.extend({},f,a),b.data=a.data||{},b.icon=a.icon,b.layers=d(),b.map=null},b.addMarkers=function(){var a,c,d,e,f,g,h;h=Object.keys(b.data),h=h.sort(function(a,b){return b-a});for(var i=0;i<h.length;i++){g=h[i],a=b.data[g],f=[];for(var j=0;j<a.length;j++)c=a[j],e=L.marker([c.attributes.lat,c.attributes.lon],{title:c.attributes.fire,icon:b.icon}),e.bindPopup('<a href="detail.php?objectid='+c.attributes.OBJECTID+'"><h3>'+c.attributes.fire+"</h3></a>"),f.push(e);d=L.layerGroup(f),b.layers.addBaseLayer(d,g),0===i&&d.addTo(b.map)}b.layers.addTo(b.map)},b.destroy=function(){null!==b&&(c=null,b=null)},b.onAdd=function(a){b.map=a,b.addMarkers()},b.onRemove=function(){b.map=null},c(a),a=null,b};b.exports=g},{"leaflet/control/HazDevLayers":1,"util/Util":11}],15:[function(a,b,c){"use strict";var d,e=a("summary/SummaryFireLayer"),f=a("leaflet/layer/Terrain"),g=a("util/Util"),h=a("mvc/View");d={};var i=function(a){var b,c;return a=g.extend({},d,a),b=h(a),c=function(a){b.el.classList.add("summary-map-view"),b.data=a.data||{},b.map=L.map(b.el,{center:[41.5,-112],maxBounds:[[-90,-1/0],[90,1/0]],scrollWheelZoom:!1,zoom:5,zoomAnimation:!1}),f().addTo(b.map),b.fires=e({data:b.data}),b.map.addLayer(b.fires),g.isMobile()||b.map.addControl(L.control.scale({position:"bottomleft"}))},b.destroy=g.compose(function(){null!==b&&(c=null,b=null)},b.destroy),c(a),a=null,b};b.exports=i},{"leaflet/layer/Terrain":2,"mvc/View":5,"summary/SummaryFireLayer":14,"util/Util":11}],16:[function(a,b,c){"use strict";var d,e=a("summary/SummaryMapView"),f=a("util/Util"),g=a("mvc/View");d={};var h=function(a){var b,c;return a=f.extend({},d,a),b=g(a),c=function(){var c=document.querySelector(".summary-links");b.el.classList.add("summary-view"),b.el.innerHTML='<div class="summary-map-view"></div><div class="row"><div class="column two-of-three summary-list"></div><div class="column one-of-three summary-links"></div></div>',b.data=b.orderEvents(a.data||[]),b.summaryMapView=e({el:b.el.querySelector(".summary-map-view"),data:b.data}),c&&b.el.querySelector(".summary-links").appendChild(c)},b.createSummaryList=function(){var a,c,d;if(d=[],c=Object.keys(b.data),!(c=c.sort(function(a,b){return b-a}))||0===c.length)return void(b.el.querySelector(".summary-list").innerHTML='<p class="alert error">No data to display at this time.</p>');for(var e=0;e<c.length;e++){a=b.data[c[e]],d.push("<h3>"+c[e]+" Fires </h3>"),d.push('<ul class="'+c[e]+'-fires">');for(var f=0;f<a.length;f++)d.push("<li>",b.formatSummaryListItem(a[f]),"</li>");d.push("</ul>")}b.el.querySelector(".summary-list").innerHTML=d.join("")},b.destroy=f.compose(function(){null!==b&&(c=null,b=null)},b.destroy),b.formatSummaryListItem=function(a){var b,c,d;c=[],d=["January","February","March","April","May","June","July","August","September","October","November","December"];try{return b=new Date(a.attributes.date),c.push('<a href="detail.php?objectid='+a.attributes.OBJECTID+'">'+d[b.getUTCMonth()]+" - ",a.attributes.fire,"("+a.attributes.location+")</a>"),c.join(" ")}catch(e){return'<p class="alert error">'+e+"<p>"}},b.orderEvents=function(a){var b,c,d,e;for(d={},a=a.sort(function(a,b){return b.attributes.date-a.attributes.date}),b=0,c=a.length;b<c;b++)e=new Date(a[b].attributes.date).getUTCFullYear(),d.hasOwnProperty(e)||(d[e]=[]),d[e].push(a[b]);return d},b.render=function(){b.summaryMapView.render(),b.createSummaryList()},c(a),a=null,b};b.exports=h},{"mvc/View":5,"summary/SummaryMapView":15,"util/Util":11}]},{},[13]);