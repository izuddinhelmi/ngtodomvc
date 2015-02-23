/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,X,u){'use strict';function A(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.6/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:z(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Dd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function G(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function $(b){return parseInt(b,10)}function H(){}function oa(b){return b}function ca(b){return function(){return b}}function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function O(b){return null!==b&&"object"===typeof b}function z(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function pa(b){return"[object Date]"===Ja.call(b)}function B(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(O(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Da(b,[],c,d):pa(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):O(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(O(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function ga(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?ga(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==u&&!B(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ta(a)&&
(c="$SCOPE");return c}function Za(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Fd,a)}function oc(b){return z(b)?JSON.parse(b):b}function va(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===mb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];r(b,function(b,d){x(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=ob.length;b=D(b);for(d=0;d<e;++d)if(c=ob[d]+a,z(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){O(c)||(c={});c=G({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":va(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;U&&e.test(U.name)&&(c.debugInfoEnabled=!0,U.name=U.name.replace(e,""));if(U&&!f.test(U.name))return d();U.name=U.name.replace(f,"");ha.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Id(){U.name="NG_ENABLE_DEBUG_INFO!"+U.name;U.location.reload()}function Jd(b){return ha.element(b).injector().get("$$testability")}function Pb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Ld(){var b;
tc||((ra=U.jQuery)&&ra.fn.on?(D=ra,G(ra.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):D=R,ha.element=D,tc=!0)}function Rb(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&x(b)&&(b=b[b.length-1]);Rb(B(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function uc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?nc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ia(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=A("$injector"),
d=A("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||A;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide",
"factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Nd(b){G(b,{bootstrap:sc,copy:Da,extend:G,equals:ga,element:D,forEach:r,injector:Ob,noop:H,bind:nc,toJson:Za,fromJson:oc,identity:oa,isUndefined:C,
isDefined:y,isString:z,isFunction:B,isObject:O,isNumber:Y,isElement:mc,isArray:x,version:Od,isDate:pa,lowercase:Q,uppercase:rb,callbacks:{counter:0},getTestability:Jd,$$minErr:A,$$csp:$a,reloadWithDebugInfo:Id});ab=Md(U);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Pd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",vc).directive({a:Rd,input:wc,textarea:wc,form:Sd,script:Td,select:Ud,style:Vd,option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,
ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:xc,ngPattern:xc,required:yc,ngRequired:yc,minlength:zc,ngMinlength:zc,maxlength:Ac,ngMaxlength:Ac,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(sb).directive(Bc);a.provider({$anchorScroll:ze,
$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Cc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze,$$jqLite:$e})}])}function bb(b){return b.replace(af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(bf,"Moz$1")}function Dc(b){b=b.nodeType;
return b===na||!b||9===b}function Ec(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(cf.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;z(b)&&(b=P(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=ef.exec(b))?[a.createElement(c[1])]:(c=Ec(b,a))?c.childNodes:[]}Fc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Gc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(y(c)){var d=e[a];Va(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Gc(b)),delete wb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++ff,c=wb[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Dc(b)){var d=y(c),e=!d&&a&&!O(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];G(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",P(c))}}function Fc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Hc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Ic(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Jc(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function gf(b,a){a=a||U;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Kc(b,a){var c=Bb[a.toLowerCase()];return c&&Lc[ua(b)]&&c}function hf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Mc[a]}function jf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function $e(){this.$get=function(){return G(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&
(b=b[0]);return yb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Dd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function kf(b){return(b=b.toString().replace(Nc,"").match(Oc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw z(c)&&
c||(c=b.name||kf(b)),Fa("strictdi",c);a=b.toString().replace(Nc,"");a=a.match(Oc);r(a[1].split(lf),function(a){a.replace(mf,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,pb(b[a],"fn"),d=b.slice(0,a)):pb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(O(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(B(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,
this);if(C(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{z(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):pb(a,"module")}catch(e){throw x(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&
(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===k)throw Fa("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a,e)}catch(f){throw b[a]===k&&delete b[a],f;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Wb(b,a,g),l,q,s;q=0;for(l=k.length;q<l;q++){s=k[q];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}x(b)&&
(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return O(a)||B(a)?a:d},get:d,annotate:Wb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){La(a,
"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ha.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||H)});return s}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}
var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||gf(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Aa(){r(K,function(a){a()});E=b(Aa,a)})()}function g(){h();k()}function h(){J=
b.history.state;J=C(J)?null:J;ga(J,S)&&(J=S);S=J}function k(){if(F!==m.url()||L!==J)F=m.url(),L=J,r(W,function(a){a(m.url(),J)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,N=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){r(K,function(a){a()});0===v?a():w.push(a)};var K=[],E;m.addPollFn=function(a){C(E)&&
f(100,s);K.push(a);return a};var J,L,F=q.href,da=a.find("base"),I=null;h();L=J;m.url=function(a,c,e){C(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=L===e;if(F===a&&(!d.history||f))return m;var g=F&&Ga(F)===Ga(a);F=a;L=e;!d.history||g&&f?(g||(I=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),L=J);return m}return I||q.href.replace(/%27/g,"'")};m.state=function(){return J};var W=
[],ba=!1,S=null;m.onUrlChange=function(a){if(!ba){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);ba=!0}W.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=da.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var aa={},y="",ea=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+ea+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ea).length+
1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),aa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),aa[a]===u&&(aa[a]=l(e.substring(g+1))));return aa}};m.defer=function(a,b){var c;v++;c=s(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],N(a),e(H),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer",
"$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var g=0,h=G({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<
Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=q=null},destroy:function(){m=h=k=null;delete a[b]},info:function(){return G({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}
function vc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");z(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||
(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);B(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";O(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?
(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=function(a){return y(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,N,n,v,w,K,E,J){function L(a,b){try{a.addClass(b)}catch(c){}}
function F(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=da(a,b,a,c,d,e);F.$$addScopeClass(a);var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?D(U(g,D("<div>").append(a).html())):
c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);F.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function da(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,n,w;if(p)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(s=h.length;q<s;)k=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),F.$$addScopeInfo(D(k),l)):l=a,n=c.transcludeOnThisElement?I(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?I(a,
b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,q,s,p,n=0;n<a.length;n++){k=new V;l=W(a[n],[],k,0===n?d:u,e);(f=l.length?aa(l,a[n],k,b,c,null,[],[],f):null)&&f.scope&&F.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:da(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(n,f,k),s=!0,p=p||f;f=null}return s?g:null}function I(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case na:ea(c,wa(ua(b)),"E",h,k);for(var s,n,w,N=b.attributes,K=0,t=N&&N.length;K<t;K++){var J=!1,v=!1;s=N[K];q=s.name;s=P(s.value);n=wa(q);if(w=Ha.test(n))q=Pb(n.substr(6),"-");var L=n.replace(/(Start|End)$/,""),E;a:{var F=L;if(d.hasOwnProperty(F)){E=void 0;for(var F=a.get(F+"Directive"),W=0,r=F.length;W<r;W++)if(E=F[W],E.multiElement){E=!0;break a}}E=!1}E&&n===L+"Start"&&
(J=q,v=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(w||!g.hasOwnProperty(n))g[n]=s,Kc(b,n)&&(g[n]=!0);R(b,c,s,n,w);ea(c,n,"A",h,k,J,v)}b=b.className;if(z(b)&&""!==b)for(;q=f.exec(b);)n=wa(q[2]),ea(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:T(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),ea(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(da){}}c.sort(A);return c}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function S(a,b,c){return function(d,e,f,g,h){e=ba(e[0],b,c);return a(d,e,f,g,h)}}function aa(a,d,e,f,g,k,l,s,p){function w(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=M.require;a.directiveName=fa;if(I===M||M.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=S(b,c,d));b.require=M.require;b.directiveName=fa;if(I===
M||M.$$isolateScope)b=Y(b,{isolateScope:!0});s.push(b)}}function K(a,b,c,d){var e,f="data",g=!1,k=c,l;if(z(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ka("ctreq",b,a);return e||null}x(b)&&(e=[],r(b,function(b){e.push(K(a,b,c,d))}));return e}function J(a,c,f,g,h){function k(a,b,c){var d;
Ta(a)||(c=b,b=a,a=u);ya&&(d=L);c||(c=ya?W.parent():W);return h(a,b,d,c,Xb)}var p,w,t,v,L,db,W,S;d===f?(S=e,W=e.$$element):(W=D(f),S=new V(W,e));I&&(v=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);E&&(da={},L={},r(E,function(a){var b={$scope:a===I||a.$$isolateScope?v:c,$element:W,$attrs:S,$transclude:db};t=a.controller;"@"==t&&(t=S[a.name]);b=n(t,b,!0,a.controllerAs);L[a.name]=b;ya||W.data("$"+a.name+"Controller",b.instance);da[a.name]=b}));if(I){F.$$addScopeInfo(W,v,!0,!(aa&&(aa===I||aa===I.$$originalDirective)));
F.$$addScopeClass(W,!0);g=da&&da[I.name];var ba=v;g&&g.identifier&&!0===I.bindToController&&(ba=g.instance);r(v.$$isolateBindings=I.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":S.$observe(e,function(a){ba[d]=a});S.$$observers[e].$$scope=c;S[e]&&(ba[d]=b(S[e])(c));break;case "=":if(f&&!S[e])break;h=N(S[e]);l=h.literal?ga:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw ka("nonassign",S[e],I.name);};g=ba[d]=h(c);f=function(a){l(a,
ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(S[e],f):c.$watch(N(S[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=N(S[e]),ba[d]=function(a){return h(c,a)}}})}da&&(r(da,function(a){a()}),da=null);g=0;for(p=l.length;g<p;g++)w=l[g],Z(w,w.isolateScope?v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db);var Xb=c;I&&(I.template||null===I.templateUrl)&&(Xb=v);a&&a(Xb,f.childNodes,u,h);for(g=s.length-1;0<=g;g--)w=s[g],Z(w,w.isolateScope?
v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db)}p=p||{};for(var v=-Number.MAX_VALUE,L,E=p.controllerDirectives,da,I=p.newIsolateScopeDirective,aa=p.templateDirective,ea=p.nonTlbTranscludeDirective,H=!1,G=!1,ya=p.hasElementTranscludeDirective,T=e.$$element=D(d),M,fa,A,Ha=f,Q,xa=0,R=a.length;xa<R;xa++){M=a[xa];var Cb=M.$$start,$=M.$$end;Cb&&(T=ba(d,Cb,$));A=u;if(v>M.priority)break;if(A=M.scope)M.templateUrl||(O(A)?(Aa("new/isolated scope",I||L,M,T),I=M):Aa("new/isolated scope",I,M,T)),L=L||
M;fa=M.name;!M.templateUrl&&M.controller&&(A=M.controller,E=E||{},Aa("'"+fa+"' controller",E[fa],M,T),E[fa]=M);if(A=M.transclude)H=!0,M.$$tlb||(Aa("transclusion",ea,M,T),ea=M),"element"==A?(ya=!0,v=M.priority,A=T,T=e.$$element=D(X.createComment(" "+fa+": "+e[fa]+" ")),d=T[0],Db(g,Ya.call(A,0),d),Ha=F(A,f,v,k&&k.name,{nonTlbTranscludeDirective:ea})):(A=D(Ub(d)).contents(),T.empty(),Ha=F(A,f));if(M.template)if(G=!0,Aa("template",aa,M,T),aa=M,A=B(M.template)?M.template(T,e):M.template,A=Pc(A),M.replace){k=
M;A=Sb.test(A)?Qc(U(M.templateNamespace,P(A))):[];d=A[0];if(1!=A.length||d.nodeType!==na)throw ka("tplrt",fa,"");Db(g,T,d);R={$attr:{}};A=W(d,[],R);var pf=a.splice(xa+1,a.length-(xa+1));I&&y(A);a=a.concat(A).concat(pf);C(e,R);R=a.length}else T.html(A);if(M.templateUrl)G=!0,Aa("template",aa,M,T),aa=M,M.replace&&(k=M),J=of(a.splice(xa,a.length-xa),T,e,g,H&&Ha,l,s,{controllerDirectives:E,newIsolateScopeDirective:I,templateDirective:aa,nonTlbTranscludeDirective:ea}),R=a.length;else if(M.compile)try{Q=
M.compile(T,e,Ha),B(Q)?w(null,Q,Cb,$):Q&&w(Q.pre,Q.post,Cb,$)}catch(ca){c(ca,va(T))}M.terminal&&(J.terminal=!0,v=Math.max(v,M.priority))}J.scope=L&&!0===L.scope;J.transcludeOnThisElement=H;J.elementTranscludeOnThisElement=ya;J.templateOnThisElement=G;J.transclude=Ha;p.hasElementTranscludeDirective=ya;return J}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=G(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ea(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;
e=a.get(e+"Directive");for(var s=0,n=e.length;s<n;s++)try{if(q=e[s],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(k){var w={$$start:k,$$end:l};q=G(Object.create(q),w)}b.push(q);h=q}}catch(N){c(N)}}return h}function C(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+
b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],n=a.shift(),w=G({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),N=B(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();s(K.getTrustedResourceUrl(N)).then(function(s){var K,v;s=Pc(s);if(n.replace){s=Sb.test(s)?Qc(U(t,P(s))):[];K=s[0];if(1!=s.length||K.nodeType!==na)throw ka("tplrt",n.name,N);s={$attr:{}};
Db(d,b,K);var J=W(K,[],s);O(n.scope)&&y(J);a=J.concat(a);C(c,s)}else K=p,b.html(s);a.unshift(w);l=aa(a,K,c,e,b,n,f,g,h);r(d,function(a,c){a==K&&(d[c]=b[0])});for(q=da(b[0].childNodes,e);k.length;){s=k.shift();v=k.shift();var E=k.shift(),F=k.shift(),J=b[0];if(!s.$$destroyed){if(v!==p){var S=v.className;h.hasElementTranscludeDirective&&n.replace||(J=Ub(K));Db(E,D(v),J);L(D(J),S)}v=l.transcludeOnThisElement?I(s,l.transclude,F):F;l(q,s,J,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?
k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=I(b,l.transclude,e)),l(q,b,c,d,a)))}}function A(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Aa(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,va(d));}function T(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&F.$$addBindingClass(a);return function(a,c){var e=c.parent();b||F.$$addBindingClass(e);F.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function U(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return K.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function R(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ua(a))throw ka("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ka("nodomevents");l[e]&&(h=b(l[e],!0,xa(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function Db(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ra?(Qb=!0,ra.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return G(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var V=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};V.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Kc(f,a),h=hf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Pb(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+J(P(h[q]),!0),g=g+(" "+P(h[q+1]));h=P(h[2*l]).split(/\s/);g+=J(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var ya=b.startSymbol(),fa=b.endSymbol(),Pc="{{"==ya||"}}"==fa?oa:function(a){return a.replace(/\{\{/g,ya).replace(/}}/g,fa)},Ha=/^ngAttr[A-Z]/;F.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;
F.$$addBindingClass=l?function(a){L(a,"ng-binding")}:H;F.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;F.$$addScopeClass=l?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:H;return F}]}function wa(b){return bb(b.replace(qf,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=D(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");O(a)?G(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!O(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var m,p,q;k=!0===k;l&&z(l)&&(q=l);z(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:uc(h.$scope,p,
!0)||(a?uc(e,p,!0):u),pb(g,p,!0));if(k)return k=(x(g)?g[g.length-1]:g).prototype,m=Object.create(k),q&&f(h,q,m,p||g.name),G(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return D(b.document)}]}function Fe(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(z(b)){b=b.replace(sf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)&&
b.trim()||tf.test(b)&&uf.test(b))b=oc(b)}return b}function Tc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=Q(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=O(b)?b:u;return function(c){a||(a=Tc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Vc(b,a,c){if(B(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return O(a)&&
"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=G({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):
a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=G({},a.headers),e,f,c=G({},c.common,c[Q(a.method)]);a:for(e in c){a=Q(e);for(f in d)if(Q(f)===a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){B(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);if(!ha.isObject(a))throw A("$http")("badreq",a);G(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=
a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);C(d)&&r(e,function(a,b){"content-type"===Q(b)&&delete e[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},u],g=h.when(d);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,
b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function m(b,c,d,e){function f(){w(c,b,d,e)}F&&(200<=b&&300>b?F.put(I,[b,c,Tc(d),e]):F.remove(I));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function w(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function t(a){w(a.data,a.status,qa(a.headers()),a.statusText)}function E(){var a=l.pendingRequests.indexOf(c);
-1!==a&&l.pendingRequests.splice(a,1)}var J=h.defer(),L=J.promise,F,r,I=p(c.url,c.params);l.pendingRequests.push(c);L.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=O(c.cache)?c.cache:O(b.cache)?b.cache:q);F&&(r=F.get(I),y(r)?r&&B(r.then)?r.then(t,t):x(r)?w(r[1],r[0],qa(r[2]),r[3]):w(r,200,{},"OK"):F.put(I,L));C(r)&&((r=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(k[c.xsrfHeaderName||b.xsrfHeaderName]=r),d(c.method,I,f,m,k,c.timeout,c.withCredentials,
c.responseType));return L}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||C(a)||(x(a)||(a=[a]),r(a,function(a){O(a)&&(a=pa(a)?a.toISOString():Za(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(z(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(G(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,
function(a){l[a]=function(b,c,d){return l(G(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function vf(){return new U.XMLHttpRequest}function Je(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);
e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,q,t){function s(){v&&v();w&&w.abort()}function N(a,d,e,f,g){E!==u&&c.cancel(E);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);
d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){N(l,a,d[n].data,"",b);d[n]=H})}else{var w=a();w.open(e,h,!0);r(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);N(l,c,b,w.getAllResponseHeaders(),a)};e=function(){N(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=
!0);if(t)try{w.responseType=t}catch(K){if("json"!==t)throw K;}w.send(k||null)}if(0<p)var E=c(s,p);else p&&B(p.then)&&p.then(s)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function N(c){return c.replace(l,b).replace(m,a)}function n(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=
a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}s=!!s;for(var v,w,K=0,E=[],J=[],L=f.length,F=[],r=[];K<L;)if(-1!=(v=f.indexOf(b,K))&&-1!=(w=f.indexOf(a,v+h)))K!==v&&F.push(N(f.substring(K,v))),K=f.substring(v+h,w),E.push(K),J.push(c(K,n)),K=w+k,r.push(F.length),F.push("");else{K!==L&&F.push(N(f.substring(K)));break}if(t&&1<F.length)throw $b("noconcat",f);if(!g||E.length){var I=function(a){for(var b=
0,c=E.length;b<c;b++){if(s&&C(a[b]))return;F[r[b]]=a[b]}return F.join("")};return G(function(a){var b=0,c=E.length,e=Array(c);try{for(;b<c;b++)e[b]=J[b](a);return I(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:E,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(J,function(c,e){var f=I(c);B(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,q=0,t=y(l)&&!l,s=(t?d:c).defer(),N=s.promise;k=y(k)?k:0;N.then(null,null,e);N.$$intervalId=m(function(){s.notify(q++);0<k&&q>=k&&(s.resolve(q),p(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=s;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function Xc(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||xf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Zc(b){return b.replace(/(#.+)|#$/,
"$1")}function bc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Xc(b,this);this.$$parse=function(a){var b=za(c,a);if(!z(b))throw Eb("ipthprfx",a,c);Yc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==u?(g=f,g=(f=za(a,f))!==u?c+(za("/",f)||f):b+g):(f=za(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Xc(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function $c(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Fb(b){return function(){return this[b]}}function ad(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):O(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw Eb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:$c}else p=Ga(m),
l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");O(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Ba(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=
d.url()&&(c.$apply(),U.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var t=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(t=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Zc(d.url()),b=Zc(k.absUrl()),f=d.state(),l=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;
if(t||q)t=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&g(b,l,f===k.$$state?null:k.$$state),h(a,f)))});k.$$replace=!1});return k}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function Na(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Oa(b){return"constructor"==
b}function bd(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},k=g||Oa(b)?h:oa,l=g||Oa(a)?h:oa,m=g||Oa(c)?h:oa,p=g||Oa(d)?h:oa,q=g||Oa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function cd(b,
a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?bd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=bd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Oa(a))e="eso("+e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s",
"l","eso","fe",k);a.toString=ca(k);l&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Na(a,b,c,b)};return e[b]=f}function fc(b){return B(b.valueOf)?b.valueOf():Bf.call(b)}function Me(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===
b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));
return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;B(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&
b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,K;switch(typeof d){case "string":K=d=d.trim();var E=g?a:b;v=E[K];
v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?t:q,v=new gc(g),v=(new eb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?l:k):v.inputs&&(v.$$watchDelegate=h),E[K]=v);return p(v,f);case "function":return p(d,f);default:return p(H,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},
a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};
g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(O(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=
a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return k(e,!1)}return d&&B(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):
k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!B(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ne(){var b=10,
a=A("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function t(){null===d&&(d=h.defer(function(){s.$apply(q)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;B(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!C(e)){if(O(e))if(Ra(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==m&&(f=m={},t=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,q=g(a,c),p=[],m=
{},n=!0,t=0;return this.$watch(q,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(O(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,t,v,r=b,I,u=[],y,S;l("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(I=this;N.length;){try{S=N.shift(),S.scope.$eval(S.expression)}catch(A){f(A)}c=null}a:do{if(m=I.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=
e.get(I))!==(k=e.last)&&!(e.eq?ga(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))v=!0,c=e,e.last=e.eq?Da(g,null):g,e.fn(g,k===p?g:k,I),5>r&&(y=4-r,u[y]||(u[y]=[]),u[y].push({msg:B(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(m=I.$$nextSibling);)I=I.$parent}while(I=m);if((v||N.length)&&!r--)throw s.$$phase=null,a("infdig",b,u);}while(v||N.length);
for(s.$$phase=null;n.length;)try{n.shift()()}catch(ea){f(ea)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||N.length||h.defer(function(){N.length&&s.$digest()});N.push({scope:this,expression:a})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return l("$apply"),
this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,q--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new k,N=s.$$asyncQueue=[],n=s.$$postDigestQueue=[],v=s.$$applyAsyncQueue=[];return s}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function fd(b){var a=
[];y(b)&&r(b,function(b){a.push(Cf(b))});return a}function Re(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Pa)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ma,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,
b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");
l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=z(f.body.style.webkitTransition),m=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Pa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;return a.data},function(a){d.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ha.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function We(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=y(l)&&!l,p=(m?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Pa&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=z(b)?Ba(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=ca(U)}function Cc(b){function a(c,d){if(O(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",jd);a("orderBy",kd);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){!0===a?a=ga:B(a)||
(a=function(a,b){if(O(a)||O(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(d){return fb(d,b,a,c)}}function fb(b,a,c,d){var e=typeof b,f=typeof a;if("string"===f&&"!"===a.charAt(0))return!fb(b,a.substring(1),c,d);if("array"===e)return b.some(function(b){return fb(b,a,c,d)});switch(e){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&fb(b[g],a,c))return!0;return!1}if("object"===f){for(g in a)if(e=a[g],!B(e)&&(f="$"===g,!fb(f?b:b[g],e,c,f)))return!1;return!0}return c(b,
a);case "function":return!1;default:return c(b,a)}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ld(b,a,c,d,e){if(!isFinite(b)||O(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=
g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,l=!0)}if(l)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(md)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(md),l=g[0],g=g[1]||"",p=0,q=a.lgSize,t=a.gSize;if(l.length>=q+t)for(p=l.length-q,m=0;m<p;m++)0===(p-m)%t&&0!==m&&(h+=c),h+=l.charAt(m);for(m=p;m<l.length;m++)0===(l.length-m)%q&&0!==m&&(h+=c),h+=l.charAt(m);for(;g.length<
e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);k.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return k.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();
return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Jf.test(c)?$(c):a(c));Y(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(l=Kf.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Lf[a];g+=k?k(c,b.DATETIME_FORMATS):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){C(a)&&(a=2);return Za(b,a)}}function Ff(){return function(b,a){Y(b)&&(b=b.toString());if(!x(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?
function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c===d&&"object"===c&&(c=typeof(a.valueOf?a=a.valueOf():a),d=typeof(b.valueOf?b=b.valueOf():b),c===d&&"object"===c&&(c=typeof(a.toString?a=a.toString():a),d=typeof(b.toString?b=b.toString():b),c===d&&a===b||"object"===c))?0:c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(z(a)){if("+"==a.charAt(0)||
"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function pd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Jb+" ng-submitted");
f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;k()})}var k=function(b){l&&(f.defer.cancel(l),
l=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=P(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",k);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(z(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,
f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):u}rd(e,f,g,h);gb(e,f,g,h,k,l);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!pa(a))throw Lb("datefmt",a);if(p(a)){if((s=
a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return m("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||C(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||C(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function rd(b,a,c,d){(d.$$hasNativeValidators=O(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||
{};return c.badInput&&!c.typeMismatch?u:b})}function sd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw A("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Pb(b,"-"):"";a(ib+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[td]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,
b,f)):(d.$pending&&h(d.$pending,b,f),ud(d.$pending)&&(d.$pending=u));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=u,c("",null)):(a(vd,!1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!x(a)){if(z(a))return a.split(" ");if(O(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===
a||f.$index%2===a){var l=e(b||[]);if(!m){var t=k(l,1);h.$addClass(t)}else if(!ga(b,m)){var s=e(m),t=d(l,s),l=d(s,l),t=k(t,1),l=k(l,-1);t&&t.length&&c.addClass(g,t);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Nf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return z(b)?b.toLowerCase():
b},rc=Object.prototype.hasOwnProperty,rb=function(b){return z(b)?b.toUpperCase():b},Pa,D,ra,Ya=[].slice,rf=[].splice,Of=[].push,Ja=Object.prototype.toString,Wa=A("ng"),ha=U.angular||(U.angular={}),ab,kb=0;Pa=X.documentMode;H.$inject=[];oa.$inject=[];var x=Array.isArray,P=function(b){return z(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(y($a.isActive_))return $a.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,tc=!1,Qb,na=1,mb=3,Od={full:"1.3.6",major:1,minor:3,dot:6,codeName:"robofunky-danceblaster"};R.expando="ng339";var wb=R.cache={},ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var af=/([\:\-\_]+(.))/g,bf=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=A("jqLite"),ef=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,cf=/<([\w:]+)/,df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(U).on("load",a))},
toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Bb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[Q(b)]=b});var Lc={};r("input select option textarea button form details".split(" "),function(b){Lc[b]=!0});var Mc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
r({data:Vb,removeData:ub},function(b,a){R[a]=b});r({data:Vb,inheritedData:Ab,scope:function(b){return D.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Hc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=bb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Bb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===na||d===mb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===ua(b)){var c=[];r(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Ic},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Ic&&(2==b.length&&b!==xb&&b!==Hc?a:d)===u){if(O(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
r({removeData:ub,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Dc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=jf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:Gc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Jc,detach:function(a){Jc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;C(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=G(e,
c)),c=qa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=D(g))):Fc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];
return c}};var Oc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lf=/,/,mf=/^\s*(_?)(\S+?)\1\s*$/,Nc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=A("$injector");Ob.$$annotate=Wb;var Qf=A("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||
(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ha.isObject(c)){var d=G(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";
r(a,function(a){zb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";r(a,function(a){yb(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ha.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=
a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:H,cancel:H}}]}],ka=A("$compile");vc.$inject=["$provide","$$sanitizeUriProvider"];var qf=/^((?:x|data)[\:\-_])/i,Sc="application/json",Zb={"Content-Type":Sc+";charset=utf-8"},
tf=/^\s*(\[|\{[^\{])/,uf=/[\}\]]\s*$/,sf=/^\)\]\}',?\n/,$b=A("$interpolate"),Rf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Eb=A("$location"),Sf={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Rf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Fb("$$protocol"),host:Fb("$$host"),port:Fb("$$port"),path:ad("$$path",function(a){a=null!==a?
a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a)||Y(a))a=a.toString(),this.$$search=qc(a);else if(O(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Eb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ad("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([$c,dc,cc],function(a){a.prototype=Object.create(Sf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=C(c)?null:c;return this}});var la=A("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Mb[c]=a});Mb["this"]=
function(a){return a};Mb["this"].sharedGetter=!0;var jb=G(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Wf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Wf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var eb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};eb.ZERO=G(function(){return 0},
{sharedGetter:!0,constant:!0});eb.prototype={constructor:eb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=
this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,
e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return G(function(a,f){return d(a,
f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return G(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Mb[a]||cd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return G(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=
[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return G(function(f,h){var k=a(f,h);if(e){e[0]=
k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(u,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),G(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&
(c=this.assignment(),this.consume(":"))){var d=this.assignment();return G(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=",
"===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?
this.primary():(a=this.expect("-"))?this.binaryFn(eb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=cd(d,this.options,c);return G(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Na(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return G(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],
c):u},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):y(c)?u:g,l=a(g,h,k)||H;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(k,e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Tf||l===Uf||l===Vf)throw la("isecff",e);}k=l.apply?l.apply(k,
f):l(f[0],f[1],f[2],f[3],f[4]);return ta(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return G(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):
this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return G(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Af=ia(),zf=ia(),Bf=Object.prototype.valueOf,Ca=A("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=A("$compile"),Z=X.createElement("a"),gd=Ba(U.location.href);Cc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=
["$locale"];var md=".",Lf={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:od(2),w:od(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;id.$inject=["$locale"];var Gf=ca(Q),Hf=ca(rb);kd.$inject=["$parse"];var Rd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb=
{};r(Bb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Mc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,
link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Pa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;m&&(Na(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Na(a,m,u,m),m=c,Na(a,m,h,m),l.$$renameControl(h,
m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Na(a,m,u,m);G(h,Ib)})}}}}}]},Sd=wd(),ee=wd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Xf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Yf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Zf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
jc=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,$f=/(\s+|^)default(\s+|$)/,Lb=new A("ngModel"),Bd={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",xd,Kb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",yd,Kb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ad,Kb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(pa(a))return a;if(z(a)){jc.lastIndex=0;var d=
jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",zd,Kb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){rd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Zf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Lb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||C(k)||a<=k};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));k=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,
c){var d=a||c;return e.$isEmpty(d)||Xf.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=sd(k,a,"ngTrueValue",d.ngTrueValue,!0),
m=sd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ga(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:H,button:H,submit:H,reset:H,file:H},wc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Bd[Q(h.type)]||Bd.text)(f,g,h,k[0],
c,a,d,e)}}}}],ib="ng-valid",td="ng-invalid",Qa="ng-pristine",Jb="ng-dirty",vd="ng-pending",ag=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,N=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);B(d)&&(d=c(a));return d};s=function(a,c){B(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=H;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==
a};var v=e.inheritedData("$formController")||Ib,w=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Qa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Qa);g.addClass(e,Jb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=
!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!Y(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:u,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!B(k.then))throw Lb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},H):k(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function k(a){m===w&&e(a)}w++;var m=w;(function(a){var c=
n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(N);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=C(c)?u:!0;if(d)for(var e=
0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),C(c)){d=!1;break}Y(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=t(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=
n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(u,c,f,H))}return c})}],te=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ag,priority:1,compile:function(c){c.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],k=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);k.$addControl(h);f.$observe("name",function(a){h.$name!==a&&k.$$renameControl(h,
a)});a.$on("$destroy",function(){k.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],ve=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){z(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Ac=function(){return{restrict:"A",
require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",
link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},bg=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,
function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace($f,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,
f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});
d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=ic("",!0),be=ic("Odd",0),ae=ic("Even",1),ce=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bc={},cg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);Bc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ha.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,r,s){var u=0,n,v,w,K=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),
n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(l)||l&&!f.$eval(l)||c()},q=++u;e?(a(e,!0).then(function(a){if(q===u){var c=f.$new();r.template=a;a=s(c,function(a){K();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===u&&(K(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(K(),r.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Ec(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function k(a){g.text(a||"")}var l=
h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},t={},m=c.startSymbol(),s=c.endSymbol(),u=m+l+"-"+p+s,n=ha.noop,v;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(l,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(t[c],k),v=c)})}}}],le=["$parse","$animate",function(a,c){var d=A("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=
e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=X.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],q=l[3],t=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l)throw d("iidexp",m);var s=l[3]||l[1],y=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,A,E={$id:Ma};t?n=a(t):(w=function(a,c){return Ma(c)},A=function(a){return a});return function(a,f,g,l,m){n&&(v=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return n(a,E)});var t=ia();a.$watchCollection(p,function(g){var l,n,p=f[0],F,E=ia(),C,H,G,T,B,x,z;q&&(a[q]=g);if(Ra(g))B=g,n=v||
w;else{n=v||A;B=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&B.push(z);B.sort()}C=B.length;z=Array(C);for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],T=n(H,G,l),t[T])x=t[T],delete t[T],E[T]=x,z[l]=x;else{if(E[T])throw r(z,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,T,G);z[l]={id:T,scope:u,clone:u};E[T]=!0}for(F in t){x=t[F];T=qb(x.clone);c.leave(T);if(T[0].parentNode)for(l=0,n=T.length;l<n;l++)T[l].$$NG_REMOVED=!0;x.scope.$destroy()}for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],x=z[l],x.scope){F=
p;do F=F.nextSibling;while(F&&F.$$NG_REMOVED);x.clone[0]!=F&&c.move(qb(x.clone),null,D(p));p=x.clone[x.clone.length-1];e(x.scope,l,s,G,y,H,C)}else m(function(a,d){x.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(p));p=f;x.clone=a;E[x.id]=x;e(x.scope,l,s,G,y,H,C)});t=E})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,
1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],dg=A("ngOptions"),re=ca({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,
c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue===a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){k.renderUnknownOption=H})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(E.parent()&&E.remove(),c.val(a),""===a&&n.prop("selected",!0)):C(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){E.parent()&&E.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ga(e,
d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){U[B]=d;G&&(U[G]=c);return a(e,U)}function k(a){var c;if(t)if(L&&x(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=new cb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:C?C:z;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(n),
v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function n(){v=!1;var a={"":[]},c=[""],d,l,p,s,u;p=g.$viewValue;s=O(e)||[];var C=G?Object.keys(s).sort():s,x,B,D,z,S={};u=k(p);var P=!1,V,X;Q={};for(z=0;D=C.length,z<D;z++){x=z;if(G&&(x=C[z],"$"===x.charAt(0)))continue;B=s[x];d=h(J,x,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(x,B);P=P||d;B=h(E,x,B);B=y(B)?B:"";X=L?L(e,U):G?C[z]:z;L&&(Q[X]=x);l.push({id:X,label:B,selected:d})}t||(A||null===p?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",
label:"",selected:!0}));x=0;for(C=c.length;x<C;x++){d=c[x];l=a[d];R.length<=x?(p={element:H.clone().attr("label",d),label:l.label},s=[p],R.push(s),f.append(p.element)):(s=R[x],p=s[0],p.label!=d&&p.element.attr("label",p.label=d));P=null;z=0;for(D=l.length;z<D;z++)d=l[z],(u=s[z+1])?(P=u.element,u.label!==d.label&&(m(S,u.label,!1),m(S,d.label,!0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Pa&&P.prop("selected",
u.selected))):(""===d.id&&A?V=A:(V=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),s.push(u={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),P?P.after(V):p.element.append(V),P=V);for(z++;s.length>z;)d=s.pop(),m(S,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(z=1;z<l.length;++z)m(S,l[z].label,!1);l[0].element.remove()}r(S,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var p;if(!(p=s.match(d)))throw dg("iexp",
s,va(f));var E=c(p[2]||p[1]),B=p[4]||p[6],D=/ as /.test(p[0])&&p[1],C=D?c(D):null,G=p[5],J=c(p[3]||""),z=c(p[2]?p[1]:B),O=c(p[7]),L=p[8]?c(p[8]):null,Q={},R=[[{element:f,label:""}]],U={};A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(t)c=[],r(f.val(),function(d){d=L?Q[d]:d;c.push("?"===d?u:""===d?null:h(C?C:z,d,a[d]))});else{var d=L?Q[f.val()]:f.val();c="?"===d?u:""===d?null:h(C?C:z,d,a[d])}g.$setViewValue(c);n()})});g.$render=
n;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(E,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(E,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var q=k[0];k=k[1];var t=h.multiple,s=h.ngOptions,A=!1,n,v=!1,w=D(X.createElement("option")),H=D(X.createElement("optgroup")),E=w.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){n=A=B.eq(h);
break}q.init(k,A,E);t&&(k.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,k):t?m(e,g,k):l(e,g,k,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=ca({restrict:"E",terminal:!1});U.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(ha),D(X).ready(function(){Hd(X,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map


/**
 * @license AngularJS v1.3.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider),
    $routeMinErr = angular.$$minErr('ngRoute');

/**
 * @ngdoc provider
 * @name $routeProvider
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = angular.copy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] == '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(function() {
              // Don't support cancellation of a reload for now...
              prepareRoute();
              commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {Object} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              var searchParams = {}, self=this;

              angular.forEach(Object.keys(newParams), function(key) {
                if (!self.current.pathParams[key]) searchParams[key] = newParams[key];
              });

              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              $location.search(angular.extend({}, $location.search(), searchParams));
            }
            else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;
        if (nextRoute) {
          if (nextRoute.redirectTo) {
            if (angular.isString(nextRoute.redirectTo)) {
              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                       .replace();
            } else {
              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(nextRoute).
          then(function() {
            if (nextRoute) {
              var locals = angular.extend({}, nextRoute.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = nextRoute.template)) {
                if (angular.isFunction(template)) {
                  template = template(nextRoute.params);
                }
              } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(nextRoute.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  nextRoute.loadedTemplateUrl = templateUrl;
                  template = $templateRequest(templateUrl);
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (nextRoute == $route.current) {
              if (nextRoute) {
                nextRoute.locals = locals;
                angular.copy(nextRoute.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
            }
          }, function(error) {
            if (nextRoute == $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.then(function() {
              previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);


/*! @license Firebase v2.2.0 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var h,aa=this;function m(a){return void 0!==a}function ba(){}function ca(a){a.Ob=function(){return a.kf?a.kf:a.kf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Kg=b.prototype;a.prototype=new c;a.Gg=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function na(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function oa(){this.Md=void 0}
function pa(a,b,c){switch(typeof b){case "string":qa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],pa(a,a.Md?a.Md.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),qa(f,c),
c.push(":"),pa(a,a.Md?a.Md.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ra={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function qa(a,b){b.push('"',a.replace(sa,function(a){if(a in ra)return ra[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ra[a]=e+b.toString(16)}),'"')};function ta(a){return"undefined"!==typeof JSON&&m(JSON.parse)?JSON.parse(a):na(a)}function r(a){if("undefined"!==typeof JSON&&m(JSON.stringify))a=JSON.stringify(a);else{var b=[];pa(new oa,a,b);a=b.join("")}return a};function s(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function t(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ua(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function va(a){var b={};ua(a,function(a,d){b[a]=d});return b};function wa(a){this.vc=a;this.Jd="firebase:"}h=wa.prototype;h.set=function(a,b){null==b?this.vc.removeItem(this.Jd+a):this.vc.setItem(this.Jd+a,r(b))};h.get=function(a){a=this.vc.getItem(this.Jd+a);return null==a?null:ta(a)};h.remove=function(a){this.vc.removeItem(this.Jd+a)};h.lf=!1;h.toString=function(){return this.vc.toString()};function xa(){this.pc={}}xa.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};xa.prototype.get=function(a){return s(this.pc,a)?this.pc[a]:null};xa.prototype.remove=function(a){delete this.pc[a]};xa.prototype.lf=!0;function ya(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wa(b)}}catch(c){}return new xa}var za=ya("localStorage"),v=ya("sessionStorage");function Aa(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Bb=b;this.ub=c;this.Eg=d;this.Id=e||"";this.Ma=za.get("host:"+a)||this.host}function Ba(a,b){b!==a.Ma&&(a.Ma=b,"s-"===a.Ma.substr(0,2)&&za.set("host:"+a.host,a.Ma))}Aa.prototype.toString=function(){var a=(this.Bb?"https://":"http://")+this.host;this.Id&&(a+="<"+this.Id+">");return a};function Ca(){this.Sa=-1};function Da(){this.Sa=-1;this.Sa=64;this.R=[];this.ge=[];this.Ef=[];this.Fd=[];this.Fd[0]=128;for(var a=1;a<this.Sa;++a)this.Fd[a]=0;this.Yd=this.Tb=0;this.reset()}ma(Da,Ca);Da.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.Yd=this.Tb=0};
function Ea(a,b,c){c||(c=0);var d=a.Ef;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],n,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),n=1518500249):(f=c^g^k,n=1859775393):60>e?(f=c&g|k&(c|g),n=2400959708):(f=c^g^k,n=3395469782),f=(b<<
5|b>>>27)+f+l+n+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
Da.prototype.update=function(a,b){m(b)||(b=a.length);for(var c=b-this.Sa,d=0,e=this.ge,f=this.Tb;d<b;){if(0==f)for(;d<=c;)Ea(this,a,d),d+=this.Sa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Sa){Ea(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Sa){Ea(this,e);f=0;break}}this.Tb=f;this.Yd+=b};function Fa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var w=Array.prototype,Ga=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Ja=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ka=w.reduce?function(a,b,c,d){d&&(b=q(b,d));return w.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ha(a,function(c,g){e=b.call(d,e,c,g,a)});return e},La=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ma(a,b){var c=Na(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Na(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Oa(a,b){var c=Ga(a,b);0<=c&&w.splice.call(a,c,1)}function Pa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}function Qa(a,b){a.sort(b||Ra)}function Ra(a,b){return a>b?1:a<b?-1:0};var Sa;a:{var Ta=aa.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){Sa=Ua;break a}}Sa=""}function Va(a){return-1!=Sa.indexOf(a)};var Wa=Va("Opera")||Va("OPR"),Xa=Va("Trident")||Va("MSIE"),Ya=Va("Gecko")&&-1==Sa.toLowerCase().indexOf("webkit")&&!(Va("Trident")||Va("MSIE")),Za=-1!=Sa.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Wa&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Ya?b=/rv\:([^\);]+)(\)|;)/:Xa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Za&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Sa))?a[1]:"");return Xa&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var $a=null,ab=null,bb=null;function cb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");db();for(var c=b?ab:$a,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,n=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|n>>6,n=n&63;l||(n=64,g||(k=64));d.push(c[u],c[f],c[k],c[n])}return d.join("")}
function db(){if(!$a){$a={};ab={};bb={};for(var a=0;65>a;a++)$a[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),bb[ab[a]]=a}};var eb=function(){var a=1;return function(){return a++}}();function y(a,b){if(!a)throw fb(b);}function fb(a){return Error("Firebase INTERNAL ASSERT FAILED:"+a)}
function gb(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{db();for(var c=bb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Pa(d,c,
c+8192));b=a}}return b}catch(n){hb("base64Decode failed: ",n)}return null}function ib(a){var b=jb(a);a=new Da;a.update(b);var b=[],c=8*a.Yd;56>a.Tb?a.update(a.Fd,56-a.Tb):a.update(a.Fd,a.Sa-(a.Tb-56));for(var d=a.Sa-1;56<=d;d--)a.ge[d]=c&255,c/=256;Ea(a,a.ge);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return cb(b)}
function kb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+kb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+r(arguments[c]):b+arguments[c],b+=" ";return b}var lb=null,mb=!0;function hb(a){!0===mb&&(mb=!1,null===lb&&!0===v.get("logging_enabled")&&nb(!0));if(lb){var b=kb.apply(null,arguments);lb(b)}}function ob(a){return function(){hb(a,arguments)}}
function pb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+kb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function qb(a){var b=kb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function z(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+kb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function rb(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var n=a[l];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(u){}e+="/"+n}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Bg:d,Bb:f,scheme:g,Pc:e}}function sb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function tb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function ub(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=vb(a),d=vb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function wb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+r(b));}
function xb(a){if("object"!==typeof a||null===a)return r(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=r(b[d]),c+=":",c+=xb(a[b[d]]);return c+"}"}function yb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function zb(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else A(a,b)}
function Ab(a){y(!sb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Bb=/^-?\d{1,10}$/;function vb(a){return Bb.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){z("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function B(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Cb(function(){a.apply(null,c)})}};function Db(a,b,c,d){this.pe=b;this.Sd=c;this.Kd=d;this.kd=a}Db.prototype.Rb=function(){var a=this.Sd.dc();return"value"===this.kd?a.path:a.parent().path};Db.prototype.te=function(){return this.kd};Db.prototype.Mb=function(){return this.pe.Mb(this)};Db.prototype.toString=function(){return this.Rb().toString()+":"+this.kd+":"+r(this.Sd.cf())};function Eb(a,b,c){this.pe=a;this.error=b;this.path=c}Eb.prototype.Rb=function(){return this.path};Eb.prototype.te=function(){return"cancel"};
Eb.prototype.Mb=function(){return this.pe.Mb(this)};Eb.prototype.toString=function(){return this.path.toString()+":cancel"};function C(a,b,c,d){this.type=a;this.Ha=b;this.Ua=c;this.Ee=d;this.Kd=void 0}function Fb(a){return new C(Gb,a)}var Gb="value";function Hb(a,b,c){this.Hb=a;this.lb=b;this.nb=c||null}h=Hb.prototype;h.wf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new Db("value",this,new D(a.Ha,b.dc(),c))};h.Mb=function(a){var b=this.nb;if("cancel"===a.te()){y(this.lb,"Raising a cancel event on a listener with no cancel callback");var c=this.lb;return function(){c.call(b,a.error)}}var d=this.Hb;return function(){d.call(b,a.Sd)}};h.Ze=function(a,b){return this.lb?new Eb(this,a,b):null};
h.matches=function(a){return a instanceof Hb?a.Hb&&this.Hb?a.Hb===this.Hb&&a.nb===this.nb:!0:!1};h.jf=function(){return null!==this.Hb};function Ib(a,b,c){this.ea=a;this.lb=b;this.nb=c}h=Ib.prototype;h.wf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ea};h.Ze=function(a,b){return this.lb?new Eb(this,a,b):null};
h.createEvent=function(a,b){y(null!=a.Ua,"Child events should have a childName.");var c=b.dc().u(a.Ua);return new Db(a.type,this,new D(a.Ha,c,b.n.g),a.Kd)};h.Mb=function(a){var b=this.nb;if("cancel"===a.te()){y(this.lb,"Raising a cancel event on a listener with no cancel callback");var c=this.lb;return function(){c.call(b,a.error)}}var d=this.ea[a.kd];return function(){d.call(b,a.Sd,a.Kd)}};
h.matches=function(a){if(a instanceof Ib){if(!this.ea||!a.ea)return!0;if(this.nb===a.nb){var b=Jb(a.ea);if(b===Jb(this.ea)){if(1===b){var b=Kb(a.ea),c=Kb(this.ea);return c===b&&(!a.ea[b]||!this.ea[c]||a.ea[b]===this.ea[c])}return Lb(this.ea,function(b,c){return a.ea[c]===b})}}}return!1};h.jf=function(){return null!==this.ea};function jb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,y(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function E(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function G(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function H(a,b,c,d){if((!d||m(c))&&!ha(c))throw Error(G(a,b,d)+"must be a valid function.");}function Mb(a,b,c){if(m(c)&&(!ia(c)||null===c))throw Error(G(a,b,!0)+"must be a valid context object.");};var Nb=/[\[\].#$\/\u0000-\u001F\u007F]/,Ob=/[\[\].#$\u0000-\u001F\u007F]/;function Pb(a){return p(a)&&0!==a.length&&!Nb.test(a)}function Qb(a){return null===a||p(a)||ga(a)&&!sb(a)||ia(a)&&s(a,".sv")}function Rb(a,b,c){c&&!m(b)||Sb(G(a,1,c),b)}
function Sb(a,b,c,d){c||(c=0);var e=d||[];if(!m(b))throw Error(a+"contains undefined"+Tb(e));if(ha(b))throw Error(a+"contains a function"+Tb(e)+" with contents: "+b.toString());if(sb(b))throw Error(a+"contains "+b.toString()+Tb(e));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+e.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<jb(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Tb(e)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var f=
!1,g=!1;ua(b,function(b,d){if(".value"===b)f=!0;else if(".priority"!==b&&".sv"!==b&&(g=!0,!Pb(b)))throw Error(a+" contains an invalid key ("+b+")"+Tb(e)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');e.push(b);Sb(a,d,c+1,e);e.pop()});if(f&&g)throw Error(a+' contains ".value" child'+Tb(e)+" in addition to actual children.");}}function Tb(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}
function Ub(a,b){if(!ia(b)||ea(b))throw Error(G(a,1,!1)+" must be an Object containing the children to replace.");if(s(b,".value"))throw Error(G(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Rb(a,b,!1)}
function Vb(a,b,c){if(sb(c))throw Error(G(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qb(c))throw Error(G(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Wb(a,b,c){if(!c||m(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(G(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Xb(a,b,c,d){if((!d||m(c))&&!Pb(c))throw Error(G(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Yb(a,b){if(!p(b)||0===b.length||Ob.test(b))throw Error(G(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Zb(a,b){if(".info"===I(b))throw Error(a+" failed: Can't modify data under /.info/");}function $b(a,b){if(!p(b))throw Error(G(a,1,!1)+"must be a valid credential (a string).");}function ac(a,b,c){if(!p(c))throw Error(G(a,b,!1)+"must be a valid string.");}
function J(a,b,c,d){if(!d||m(c))if(!ia(c)||null===c)throw Error(G(a,b,d)+"must be a valid object.");}function K(a,b,c){if(!ia(b)||null===b||!s(b,c))throw Error(G(a,1,!1)+'must contain the key "'+c+'"');if(!p(t(b,c)))throw Error(G(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function bc(a){this.g=a}h=bc.prototype;h.D=function(a,b,c,d,e){y(a.Bc(this.g),"A node must be indexed if only a child is updated");d=a.K(b);if(d.aa(c))return a;null!=e&&(c.e()?a.Da(b)?cc(e,new C("child_removed",d,b)):y(a.M(),"A child remove without an old child only makes sense on a leaf node"):d.e()?cc(e,new C("child_added",c,b)):cc(e,new C("child_changed",c,b,d)));return a.M()&&c.e()?a:a.P(b,c).hb(this.g)};
h.oa=function(a,b,c){null!=c&&(a.M()||a.U(L,function(a,e){b.Da(a)||cc(c,new C("child_removed",e,a))}),b.M()||b.U(L,function(b,e){if(a.Da(b)){var f=a.K(b);f.aa(e)||cc(c,new C("child_changed",e,b,f))}else cc(c,new C("child_added",e,b))}));return b.hb(this.g)};h.$=function(a,b){return a.e()?M:a.$(b)};h.Ca=function(){return!1};h.Nb=function(){return this};function dc(a){this.ve=new bc(a.g);this.g=a.g;var b;a.ia?(b=ec(a),b=a.g.ud(fc(a),b)):b=a.g.yd();this.Vc=b;a.qa?(b=gc(a),a=a.g.ud(hc(a),b)):a=a.g.wd();this.xc=a}h=dc.prototype;h.matches=function(a){return 0>=this.g.compare(this.Vc,a)&&0>=this.g.compare(a,this.xc)};h.D=function(a,b,c,d,e){this.matches(new N(b,c))||(c=M);return this.ve.D(a,b,c,d,e)};h.oa=function(a,b,c){b.M()&&(b=M);var d=b.hb(this.g),d=d.$(M),e=this;b.U(L,function(a,b){e.matches(new N(a,b))||(d=d.P(a,M))});return this.ve.oa(a,d,c)};
h.$=function(a){return a};h.Ca=function(){return!0};h.Nb=function(){return this.ve};function ic(a,b){return ub(a.name,b.name)}function jc(a,b){return ub(a,b)};function kc(){}var lc={};function mc(a){return q(a.compare,a)}kc.prototype.we=function(a,b){return 0!==this.compare(new N("[MIN_NAME]",a),new N("[MIN_NAME]",b))};kc.prototype.yd=function(){return nc};function oc(a){this.Vb=a}ma(oc,kc);h=oc.prototype;h.sd=function(a){return!a.K(this.Vb).e()};h.compare=function(a,b){var c=a.V.K(this.Vb),d=b.V.K(this.Vb),c=c.dd(d);return 0===c?ub(a.name,b.name):c};h.ud=function(a,b){var c=O(a),c=M.P(this.Vb,c);return new N(b,c)};
h.wd=function(){var a=M.P(this.Vb,pc);return new N("[MAX_NAME]",a)};h.toString=function(){return this.Vb};var L=new oc(".priority");function qc(){}ma(qc,kc);h=qc.prototype;h.compare=function(a,b){return ub(a.name,b.name)};h.sd=function(){throw fb("KeyIndex.isDefinedOn not expected to be called.");};h.we=function(){return!1};h.yd=function(){return nc};h.wd=function(){return new N("[MAX_NAME]",M)};h.ud=function(a){y(p(a),"KeyIndex indexValue must always be a string.");return new N(a,M)};
h.toString=function(){return".key"};var rc=new qc;function sc(){}ma(sc,kc);h=sc.prototype;h.compare=function(a,b){var c=a.V.dd(b.V);return 0===c?ub(a.name,b.name):c};h.sd=function(){return!0};h.we=function(a,b){return!a.aa(b)};h.yd=function(){return nc};h.wd=function(){return tc};h.ud=function(a,b){var c=O(a);return new N(b,c)};h.toString=function(){return".value"};var uc=new sc;function vc(){}vc.prototype.ff=function(){return null};vc.prototype.se=function(){return null};var wc=new vc;function xc(a,b,c){this.Bf=a;this.Ia=b;this.Ed=c}xc.prototype.ff=function(a){var b=this.Ia.B;if(yc(b,a))return b.j().K(a);b=null!=this.Ed?new zc(this.Ed,!0,!1):this.Ia.o();return this.Bf.Ta(a,b)};xc.prototype.se=function(a,b,c){var d=null!=this.Ed?this.Ed:Ac(this.Ia);a=this.Bf.he(d,b,1,c,a);return 0===a.length?null:a[0]};function Bc(){this.Za={}}
function cc(a,b){var c=b.type,d=b.Ua;y("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");y(".priority"!==d,"Only non-priority child changes can be tracked.");var e=t(a.Za,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.Za[d]=new C("child_changed",b.Ha,d,e.Ha);else if("child_removed"==c&&"child_added"==f)delete a.Za[d];else if("child_removed"==c&&"child_changed"==f)a.Za[d]=new C("child_removed",e.Ee,d);else if("child_changed"==c&&
"child_added"==f)a.Za[d]=new C("child_added",b.Ha,d);else if("child_changed"==c&&"child_changed"==f)a.Za[d]=new C("child_changed",b.Ha,d,e.Ee);else throw fb("Illegal combination of changes: "+b+" occurred after "+e);}else a.Za[d]=b};function N(a,b){this.name=a;this.V=b}function Cc(a,b){return new N(a,b)};function Dc(a){this.ma=new dc(a);this.g=a.g;y(a.ka,"Only valid if limit has been set");this.sa=a.sa;this.Ab=!(""===a.Fb?a.ia:"l"===a.Fb)}h=Dc.prototype;h.D=function(a,b,c,d,e){this.ma.matches(new N(b,c))||(c=M);return a.K(b).aa(c)?a:a.vb()<this.sa?this.ma.Nb().D(a,b,c,d,e):Ec(this,a,b,c,d,e)};
h.oa=function(a,b,c){var d;if(b.M()||b.e())d=M.hb(this.g);else if(2*this.sa<b.vb()&&b.Bc(this.g)){d=M.hb(this.g);b=this.Ab?b.Sb(this.ma.xc,this.g):b.Qb(this.ma.Vc,this.g);for(var e=0;0<b.Na.length&&e<this.sa;){var f=P(b),g;if(g=this.Ab?0>=this.g.compare(this.ma.Vc,f):0>=this.g.compare(f,this.ma.xc))d=d.P(f.name,f.V),e++;else break}}else{d=b.hb(this.g);d=d.$(M);var k,l,n;if(this.Ab){b=d.hf(this.g);k=this.ma.xc;l=this.ma.Vc;var u=mc(this.g);n=function(a,b){return u(b,a)}}else b=d.Pb(this.g),k=this.ma.Vc,
l=this.ma.xc,n=mc(this.g);for(var e=0,x=!1;0<b.Na.length;)f=P(b),!x&&0>=n(k,f)&&(x=!0),(g=x&&e<this.sa&&0>=n(f,l))?e++:d=d.P(f.name,M)}return this.ma.Nb().oa(a,d,c)};h.$=function(a){return a};h.Ca=function(){return!0};h.Nb=function(){return this.ma.Nb()};
function Ec(a,b,c,d,e,f){var g;if(a.Ab){var k=mc(a.g);g=function(a,b){return k(b,a)}}else g=mc(a.g);y(b.vb()==a.sa,"");var l=new N(c,d),n=a.Ab?Fc(b,a.g):Gc(b,a.g),u=a.ma.matches(l);if(b.Da(c)){var x=b.K(c),n=e.se(a.g,n,a.Ab);null!=n&&n.name==c&&(n=e.se(a.g,n,a.Ab));e=null==n?1:g(n,l);if(u&&!d.e()&&0<=e)return null!=f&&cc(f,new C("child_changed",d,c,x)),b.P(c,d);null!=f&&cc(f,new C("child_removed",x,c));b=b.P(c,M);return null!=n&&a.ma.matches(n)?(null!=f&&cc(f,new C("child_added",n.V,n.name)),b.P(n.name,
n.V)):b}return d.e()?b:u&&0<=g(n,l)?(null!=f&&(cc(f,new C("child_removed",n.V,n.name)),cc(f,new C("child_added",d,c))),b.P(c,d).P(n.name,M)):b};function Hc(){this.wc=this.qa=this.lc=this.ia=this.ka=!1;this.sa=0;this.Fb="";this.Ac=null;this.Xb="";this.zc=null;this.Ub="";this.g=L}var Ic=new Hc;function fc(a){y(a.ia,"Only valid if start has been set");return a.Ac}function ec(a){y(a.ia,"Only valid if start has been set");return a.lc?a.Xb:"[MIN_NAME]"}function hc(a){y(a.qa,"Only valid if end has been set");return a.zc}function gc(a){y(a.qa,"Only valid if end has been set");return a.wc?a.Ub:"[MAX_NAME]"}
function Jc(a){var b=new Hc;b.ka=a.ka;b.sa=a.sa;b.ia=a.ia;b.Ac=a.Ac;b.lc=a.lc;b.Xb=a.Xb;b.qa=a.qa;b.zc=a.zc;b.wc=a.wc;b.Ub=a.Ub;b.g=a.g;return b}h=Hc.prototype;h.Be=function(a){var b=Jc(this);b.ka=!0;b.sa=a;b.Fb="";return b};h.Ce=function(a){var b=Jc(this);b.ka=!0;b.sa=a;b.Fb="l";return b};h.De=function(a){var b=Jc(this);b.ka=!0;b.sa=a;b.Fb="r";return b};h.Td=function(a,b){var c=Jc(this);c.ia=!0;m(a)||(a=null);c.Ac=a;null!=b?(c.lc=!0,c.Xb=b):(c.lc=!1,c.Xb="");return c};
h.jd=function(a,b){var c=Jc(this);c.qa=!0;m(a)||(a=null);c.zc=a;m(b)?(c.wc=!0,c.Ub=b):(c.Jg=!1,c.Ub="");return c};function Kc(a,b){var c=Jc(a);c.g=b;return c}function Lc(a){var b={};a.ia&&(b.sp=a.Ac,a.lc&&(b.sn=a.Xb));a.qa&&(b.ep=a.zc,a.wc&&(b.en=a.Ub));if(a.ka){b.l=a.sa;var c=a.Fb;""===c&&(c=a.ia?"l":"r");b.vf=c}a.g!==L&&(b.i=a.g.toString());return b}function Mc(a){return!(a.ia||a.qa||a.ka)}h.toString=function(){return r(Lc(this))};function Q(a,b,c,d){this.k=a;this.path=b;this.n=c;this.bc=d}
function Nc(a){var b=null,c=null;a.ia&&(b=fc(a));a.qa&&(c=hc(a));if(a.g===rc){if(a.ia){if("[MIN_NAME]"!=ec(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.qa){if("[MAX_NAME]"!=gc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===L){if(null!=b&&!Qb(b)||null!=c&&!Qb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(y(a.g instanceof oc||a.g===uc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Oc(a){if(a.ia&&a.qa&&a.ka&&(!a.ka||""===a.Fb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Pc(a,b){if(!0===a.bc)throw Error(b+": You can't combine multiple orderBy calls.");}Q.prototype.dc=function(){E("Query.ref",0,0,arguments.length);return new R(this.k,this.path)};Q.prototype.ref=Q.prototype.dc;
Q.prototype.wb=function(a,b,c,d){E("Query.on",2,4,arguments.length);Wb("Query.on",a,!1);H("Query.on",2,b,!1);var e=Qc("Query.on",c,d);if("value"===a)Rc(this.k,this,new Hb(b,e.cancel||null,e.Ka||null));else{var f={};f[a]=b;Rc(this.k,this,new Ib(f,e.cancel,e.Ka))}return b};Q.prototype.on=Q.prototype.wb;
Q.prototype.$b=function(a,b,c){E("Query.off",0,3,arguments.length);Wb("Query.off",a,!0);H("Query.off",2,b,!0);Mb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Hb(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Ib(e,null,c||null));e=this.k;d=".info"===I(this.path)?e.rd.gb(this,d):e.N.gb(this,d);Sc(e.ba,this.path,d)};Q.prototype.off=Q.prototype.$b;
Q.prototype.lg=function(a,b){function c(g){f&&(f=!1,e.$b(a,c),b.call(d.Ka,g))}E("Query.once",2,4,arguments.length);Wb("Query.once",a,!1);H("Query.once",2,b,!1);var d=Qc("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.wb(a,c,function(b){e.$b(a,c);d.cancel&&d.cancel.call(d.Ka,b)})};Q.prototype.once=Q.prototype.lg;
Q.prototype.Be=function(a){z("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");E("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Be(a);Oc(b);return new Q(this.k,this.path,b,this.bc)};Q.prototype.limit=Q.prototype.Be;
Q.prototype.Ce=function(a){E("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Q(this.k,this.path,this.n.Ce(a),this.bc)};Q.prototype.limitToFirst=Q.prototype.Ce;
Q.prototype.De=function(a){E("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Q(this.k,this.path,this.n.De(a),this.bc)};Q.prototype.limitToLast=Q.prototype.De;
Q.prototype.mg=function(a){E("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Xb("Query.orderByChild",1,a,!1);Pc(this,"Query.orderByChild");var b=Kc(this.n,new oc(a));Nc(b);return new Q(this.k,
this.path,b,!0)};Q.prototype.orderByChild=Q.prototype.mg;Q.prototype.ng=function(){E("Query.orderByKey",0,0,arguments.length);Pc(this,"Query.orderByKey");var a=Kc(this.n,rc);Nc(a);return new Q(this.k,this.path,a,!0)};Q.prototype.orderByKey=Q.prototype.ng;Q.prototype.og=function(){E("Query.orderByPriority",0,0,arguments.length);Pc(this,"Query.orderByPriority");var a=Kc(this.n,L);Nc(a);return new Q(this.k,this.path,a,!0)};Q.prototype.orderByPriority=Q.prototype.og;
Q.prototype.pg=function(){E("Query.orderByValue",0,0,arguments.length);Pc(this,"Query.orderByValue");var a=Kc(this.n,uc);Nc(a);return new Q(this.k,this.path,a,!0)};Q.prototype.orderByValue=Q.prototype.pg;
Q.prototype.Td=function(a,b){E("Query.startAt",0,2,arguments.length);Rb("Query.startAt",a,!0);Xb("Query.startAt",2,b,!0);var c=this.n.Td(a,b);Oc(c);Nc(c);if(this.n.ia)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");m(a)||(b=a=null);return new Q(this.k,this.path,c,this.bc)};Q.prototype.startAt=Q.prototype.Td;
Q.prototype.jd=function(a,b){E("Query.endAt",0,2,arguments.length);Rb("Query.endAt",a,!0);Xb("Query.endAt",2,b,!0);var c=this.n.jd(a,b);Oc(c);Nc(c);if(this.n.qa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Q(this.k,this.path,c,this.bc)};Q.prototype.endAt=Q.prototype.jd;
Q.prototype.Tf=function(a,b){E("Query.equalTo",1,2,arguments.length);Rb("Query.equalTo",a,!1);Xb("Query.equalTo",2,b,!0);if(this.n.ia)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.qa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Td(a,b).jd(a,b)};Q.prototype.equalTo=Q.prototype.Tf;Q.prototype.Fa=function(){var a=xb(Lc(this.n));return"{}"===a?"default":a};
function Qc(a,b,c){var d={cancel:null,Ka:null};if(b&&c)d.cancel=b,H(a,3,d.cancel,!0),d.Ka=c,Mb(a,4,d.Ka);else if(b)if("object"===typeof b&&null!==b)d.Ka=b;else if("function"===typeof b)d.cancel=b;else throw Error(G(a,3,!0)+" must either be a cancel callback or a context object.");return d};function S(a,b){if(1==arguments.length){this.w=a.split("/");for(var c=0,d=0;d<this.w.length;d++)0<this.w[d].length&&(this.w[c]=this.w[d],c++);this.w.length=c;this.da=0}else this.w=a,this.da=b}function I(a){return a.da>=a.w.length?null:a.w[a.da]}function Tc(a){return a.w.length-a.da}function T(a){var b=a.da;b<a.w.length&&b++;return new S(a.w,b)}function Uc(a){return a.da<a.w.length?a.w[a.w.length-1]:null}
S.prototype.toString=function(){for(var a="",b=this.da;b<this.w.length;b++)""!==this.w[b]&&(a+="/"+this.w[b]);return a||"/"};S.prototype.parent=function(){if(this.da>=this.w.length)return null;for(var a=[],b=this.da;b<this.w.length-1;b++)a.push(this.w[b]);return new S(a,0)};
S.prototype.u=function(a){for(var b=[],c=this.da;c<this.w.length;c++)b.push(this.w[c]);if(a instanceof S)for(c=a.da;c<a.w.length;c++)b.push(a.w[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new S(b,0)};S.prototype.e=function(){return this.da>=this.w.length};var U=new S("");function V(a,b){var c=I(a);if(null===c)return b;if(c===I(b))return V(T(a),T(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
S.prototype.aa=function(a){if(Tc(this)!==Tc(a))return!1;for(var b=this.da,c=a.da;b<=this.w.length;b++,c++)if(this.w[b]!==a.w[c])return!1;return!0};S.prototype.contains=function(a){var b=this.da,c=a.da;if(Tc(this)>Tc(a))return!1;for(;b<this.w.length;){if(this.w[b]!==a.w[c])return!1;++b;++c}return!0};function Vc(){this.children={};this.bd=0;this.value=null}function Wc(a,b,c){this.zd=a?a:"";this.Oc=b?b:null;this.A=c?c:new Vc}function Xc(a,b){for(var c=b instanceof S?b:new S(b),d=a,e;null!==(e=I(c));)d=new Wc(e,d,t(d.A.children,e)||new Vc),c=T(c);return d}h=Wc.prototype;h.za=function(){return this.A.value};function Yc(a,b){y("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Zc(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Zc(this)};
h.md=function(){return 0<this.A.bd};h.e=function(){return null===this.za()&&!this.md()};h.U=function(a){var b=this;A(this.A.children,function(c,d){a(new Wc(d,b,c))})};function $c(a,b,c,d){c&&!d&&b(a);a.U(function(a){$c(a,b,!0,d)});c&&d&&b(a)}function ad(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new S(null===this.Oc?this.zd:this.Oc.path()+"/"+this.zd)};h.name=function(){return this.zd};h.parent=function(){return this.Oc};
function Zc(a){if(null!==a.Oc){var b=a.Oc,c=a.zd,d=a.e(),e=s(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Zc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Zc(b))}};function bd(a,b){this.Ja=a;this.va=b?b:cd}h=bd.prototype;h.La=function(a,b){return new bd(this.Ja,this.va.La(a,b,this.Ja).Y(null,null,!1,null,null))};h.remove=function(a){return new bd(this.Ja,this.va.remove(a,this.Ja).Y(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.va;!c.e();){b=this.Ja(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function dd(a,b){for(var c,d=a.va,e=null;!d.e();){c=a.Ja(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.va.e()};h.count=function(){return this.va.count()};h.Ic=function(){return this.va.Ic()};h.Yb=function(){return this.va.Yb()};h.fa=function(a){return this.va.fa(a)};
h.Pb=function(a){return new ed(this.va,null,this.Ja,!1,a)};h.Qb=function(a,b){return new ed(this.va,a,this.Ja,!1,b)};h.Sb=function(a,b){return new ed(this.va,a,this.Ja,!0,b)};h.hf=function(a){return new ed(this.va,null,this.Ja,!0,a)};function ed(a,b,c,d,e){this.Nd=e||null;this.ze=d;this.Na=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.ze?a.left:a.right;else if(0===e){this.Na.push(a);break}else this.Na.push(a),a=this.ze?a.right:a.left}
function P(a){if(0===a.Na.length)return null;var b=a.Na.pop(),c;c=a.Nd?a.Nd(b.key,b.value):{key:b.key,value:b.value};if(a.ze)for(b=b.left;!b.e();)a.Na.push(b),b=b.right;else for(b=b.right;!b.e();)a.Na.push(b),b=b.left;return c}function fd(a){if(0===a.Na.length)return null;var b;b=a.Na;b=b[b.length-1];return a.Nd?a.Nd(b.key,b.value):{key:b.key,value:b.value}}function gd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:cd;this.right=null!=e?e:cd}h=gd.prototype;
h.Y=function(a,b,c,d,e){return new gd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.fa=function(a){return this.left.fa(a)||a(this.key,this.value)||this.right.fa(a)};function hd(a){return a.left.e()?a:hd(a.left)}h.Ic=function(){return hd(this).key};h.Yb=function(){return this.right.e()?this.key:this.right.Yb()};
h.La=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.La(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.La(a,b,c));return id(e)};function jd(a){if(a.left.e())return cd;a.left.ca()||a.left.left.ca()||(a=kd(a));a=a.Y(null,null,null,jd(a.left),null);return id(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ca()||c.left.left.ca()||(c=kd(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.ca()&&(c=md(c));c.right.e()||c.right.ca()||c.right.left.ca()||(c=nd(c),c.left.left.ca()&&(c=md(c),c=nd(c)));if(0===b(a,c.key)){if(c.right.e())return cd;d=hd(c.right);c=c.Y(d.key,d.value,null,null,jd(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return id(c)};h.ca=function(){return this.color};
function id(a){a.right.ca()&&!a.left.ca()&&(a=od(a));a.left.ca()&&a.left.left.ca()&&(a=md(a));a.left.ca()&&a.right.ca()&&(a=nd(a));return a}function kd(a){a=nd(a);a.right.left.ca()&&(a=a.Y(null,null,null,null,md(a.right)),a=od(a),a=nd(a));return a}function od(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function md(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
function nd(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function pd(){}h=pd.prototype;h.Y=function(){return this};h.La=function(a,b){return new gd(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.fa=function(){return!1};h.Ic=function(){return null};h.Yb=function(){return null};h.ca=function(){return!1};var cd=new pd;function qd(a,b){this.F=a;y(m(this.F)&&null!==this.F,"LeafNode shouldn't be created with null/undefined value.");this.ha=b||M;rd(this.ha);this.tb=null}h=qd.prototype;h.M=function(){return!0};h.L=function(){return this.ha};h.$=function(a){return new qd(this.F,a)};h.K=function(a){return".priority"===a?this.ha:M};h.ra=function(a){return a.e()?this:".priority"===I(a)?this.ha:M};h.Da=function(){return!1};h.gf=function(){return null};
h.P=function(a,b){return".priority"===a?this.$(b):b.e()&&".priority"!==a?this:M.P(a,b).$(this.ha)};h.D=function(a,b){var c=I(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;y(".priority"!==c||1===Tc(a),".priority must be the last token in a path");return this.P(c,M.D(T(a),b))};h.e=function(){return!1};h.vb=function(){return 0};h.I=function(a){return a&&!this.L().e()?{".value":this.za(),".priority":this.L().I()}:this.za()};
h.hash=function(){if(null===this.tb){var a="";this.ha.e()||(a+="priority:"+sd(this.ha.I())+":");var b=typeof this.F,a=a+(b+":"),a="number"===b?a+Ab(this.F):a+this.F;this.tb=ib(a)}return this.tb};h.za=function(){return this.F};h.dd=function(a){if(a===M)return 1;if(a instanceof W)return-1;y(a.M(),"Unknown node type");var b=typeof a.F,c=typeof this.F,d=Ga(td,b),e=Ga(td,c);y(0<=d,"Unknown leaf type: "+b);y(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.F<a.F?-1:this.F===a.F?0:1:e-d};
var td=["object","boolean","number","string"];qd.prototype.hb=function(){return this};qd.prototype.Bc=function(){return!0};qd.prototype.aa=function(a){return a===this?!0:a.M()?this.F===a.F&&this.ha.aa(a.ha):!1};qd.prototype.toString=function(){return r(this.I(!0))};function ud(a,b){this.qd=a;this.Wb=b}ud.prototype.get=function(a){var b=t(this.qd,a);if(!b)throw Error("No index defined for "+a);return b===lc?null:b};function vd(a,b,c){var d=wd(a.qd,function(d,f){var g=t(a.Wb,f);y(g,"Missing index implementation for "+f);if(d===lc){if(g.sd(b.V)){for(var k=[],l=c.Pb(Cc),n=P(l);n;)n.name!=b.name&&k.push(n),n=P(l);k.push(b);return xd(k,mc(g))}return lc}g=c.get(b.name);k=d;g&&(k=k.remove(new N(b.name,g)));return k.La(b,b.V)});return new ud(d,a.Wb)}
function yd(a,b,c){var d=wd(a.qd,function(a){if(a===lc)return a;var d=c.get(b.name);return d?a.remove(new N(b.name,d)):a});return new ud(d,a.Wb)}var zd=new ud({".priority":lc},{".priority":L});function W(a,b,c){this.m=a;(this.ha=b)&&rd(this.ha);this.pb=c;this.tb=null}h=W.prototype;h.M=function(){return!1};h.L=function(){return this.ha||M};h.$=function(a){return new W(this.m,a,this.pb)};h.K=function(a){if(".priority"===a)return this.L();a=this.m.get(a);return null===a?M:a};h.ra=function(a){var b=I(a);return null===b?this:this.K(b).ra(T(a))};h.Da=function(a){return null!==this.m.get(a)};
h.P=function(a,b){y(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.$(b);var c=new N(a,b),d;b.e()?(d=this.m.remove(a),c=yd(this.pb,c,this.m)):(d=this.m.La(a,b),c=vd(this.pb,c,this.m));return new W(d,this.ha,c)};h.D=function(a,b){var c=I(a);if(null===c)return b;y(".priority"!==I(a)||1===Tc(a),".priority must be the last token in a path");var d=this.K(c).D(T(a),b);return this.P(c,d)};h.e=function(){return this.m.e()};h.vb=function(){return this.m.count()};var Ad=/^(0|[1-9]\d*)$/;
h=W.prototype;h.I=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(L,function(f,g){b[f]=g.I(a);c++;e&&Ad.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.L().e()&&(b[".priority"]=this.L().I());return b};h.hash=function(){if(null===this.tb){var a="";this.L().e()||(a+="priority:"+sd(this.L().I())+":");this.U(L,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.tb=""===a?"":ib(a)}return this.tb};
h.gf=function(a,b,c){return(c=Bd(this,c))?(a=dd(c,new N(a,b)))?a.name:null:dd(this.m,a)};function Fc(a,b){var c;c=(c=Bd(a,b))?(c=c.Ic())&&c.name:a.m.Ic();return c?new N(c,a.m.get(c)):null}function Gc(a,b){var c;c=(c=Bd(a,b))?(c=c.Yb())&&c.name:a.m.Yb();return c?new N(c,a.m.get(c)):null}h.U=function(a,b){var c=Bd(this,a);return c?c.fa(function(a){return b(a.name,a.V)}):this.m.fa(b)};h.Pb=function(a){return this.Qb(a.yd(),a)};
h.Qb=function(a,b){var c=Bd(this,b);if(c)return c.Qb(a,function(a){return a});for(var c=this.m.Qb(a.name,Cc),d=fd(c);null!=d&&0>b.compare(d,a);)P(c),d=fd(c);return c};h.hf=function(a){return this.Sb(a.wd(),a)};h.Sb=function(a,b){var c=Bd(this,b);if(c)return c.Sb(a,function(a){return a});for(var c=this.m.Sb(a.name,Cc),d=fd(c);null!=d&&0<b.compare(d,a);)P(c),d=fd(c);return c};h.dd=function(a){return this.e()?a.e()?0:-1:a.M()||a.e()?1:a===pc?-1:0};
h.hb=function(a){if(a===rc||Cd(this.pb.Wb,a.toString()))return this;var b=this.pb,c=this.m;y(a!==rc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Pb(Cc),f=P(c);f;)e=e||a.sd(f.V),d.push(f),f=P(c);d=e?xd(d,mc(a)):lc;e=a.toString();c=Dd(b.Wb);c[e]=a;a=Dd(b.qd);a[e]=d;return new W(this.m,this.ha,new ud(a,c))};h.Bc=function(a){return a===rc||Cd(this.pb.Wb,a.toString())};
h.aa=function(a){if(a===this)return!0;if(a.M())return!1;if(this.L().aa(a.L())&&this.m.count()===a.m.count()){var b=this.Pb(L);a=a.Pb(L);for(var c=P(b),d=P(a);c&&d;){if(c.name!==d.name||!c.V.aa(d.V))return!1;c=P(b);d=P(a)}return null===c&&null===d}return!1};function Bd(a,b){return b===rc?null:a.pb.get(b.toString())}h.toString=function(){return r(this.I(!0))};function O(a,b){if(null===a)return M;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);y(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new qd(a,O(c));if(a instanceof Array){var d=M,e=a;A(e,function(a,b){if(s(e,b)&&"."!==b.substring(0,1)){var c=O(a);if(c.M()||!c.e())d=
d.P(b,c)}});return d.$(O(c))}var f=[],g=!1,k=a;ua(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=O(k[a]);b.e()||(g=g||!b.L().e(),f.push(new N(a,b)))}});var l=xd(f,ic,function(a){return a.name},jc);if(g){var n=xd(f,mc(L));return new W(l,O(c),new ud({".priority":n},{".priority":L}))}return new W(l,O(c),zd)}var Ed=Math.log(2);function Fd(a){this.count=parseInt(Math.log(a+1)/Ed,10);this.af=this.count-1;this.Nf=a+1&parseInt(Array(this.count+1).join("1"),2)}
function Gd(a){var b=!(a.Nf&1<<a.af);a.af--;return b}
function xd(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var n=a[b],u=c?c(n):n;return new gd(u,n.V,!1,null,null)}var n=parseInt(f/2,10)+b,f=e(b,n),x=e(n+1,d),n=a[n],u=c?c(n):n;return new gd(u,n.V,!1,f,x)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,x=u;u-=b;var x=e(k+1,x),k=a[k],F=c?c(k):k,x=new gd(F,k.V,g,null,x);f?f.left=x:n=x;f=x}for(var f=null,n=null,u=a.length,x=0;x<b.count;++x){var F=Gd(b),ld=Math.pow(2,b.count-(x+1));F?d(ld,!1):(d(ld,!1),d(ld,!0))}return n}(new Fd(a.length));
return null!==f?new bd(d||b,f):new bd(d||b)}function sd(a){return"number"===typeof a?"number:"+Ab(a):"string:"+a}function rd(a){if(a.M()){var b=a.I();y("string"===typeof b||"number"===typeof b||"object"===typeof b&&s(b,".sv"),"Priority must be a string or number.")}else y(a===pc||a.e(),"priority of unexpected type.");y(a===pc||a.L().e(),"Priority nodes can't have a priority of their own.")}var M=new W(new bd(jc),null,zd);function Hd(){W.call(this,new bd(jc),M,zd)}ma(Hd,W);h=Hd.prototype;
h.dd=function(a){return a===this?0:1};h.aa=function(a){return a===this};h.L=function(){throw fb("Why is this called?");};h.K=function(){return M};h.e=function(){return!1};var pc=new Hd,nc=new N("[MIN_NAME]",M),tc=new N("[MAX_NAME]",pc);function D(a,b,c){this.A=a;this.W=b;this.g=c}D.prototype.I=function(){E("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.I()};D.prototype.val=D.prototype.I;D.prototype.cf=function(){E("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.I(!0)};D.prototype.exportVal=D.prototype.cf;D.prototype.Wf=function(){E("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};D.prototype.exists=D.prototype.Wf;
D.prototype.u=function(a){E("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Yb("Firebase.DataSnapshot.child",a);var b=new S(a),c=this.W.u(b);return new D(this.A.ra(b),c,L)};D.prototype.child=D.prototype.u;D.prototype.Da=function(a){E("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Yb("Firebase.DataSnapshot.hasChild",a);var b=new S(a);return!this.A.ra(b).e()};D.prototype.hasChild=D.prototype.Da;
D.prototype.L=function(){E("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.L().I()};D.prototype.getPriority=D.prototype.L;D.prototype.forEach=function(a){E("Firebase.DataSnapshot.forEach",1,1,arguments.length);H("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.M())return!1;var b=this;return!!this.A.U(this.g,function(c,d){return a(new D(d,b.W.u(c),L))})};D.prototype.forEach=D.prototype.forEach;
D.prototype.md=function(){E("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.M()?!1:!this.A.e()};D.prototype.hasChildren=D.prototype.md;D.prototype.name=function(){z("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");E("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};D.prototype.name=D.prototype.name;D.prototype.key=function(){E("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.key()};
D.prototype.key=D.prototype.key;D.prototype.vb=function(){E("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.vb()};D.prototype.numChildren=D.prototype.vb;D.prototype.dc=function(){E("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};D.prototype.ref=D.prototype.dc;function Id(a){y(ea(a)&&0<a.length,"Requires a non-empty array");this.Ff=a;this.Gc={}}Id.prototype.$d=function(a,b){for(var c=this.Gc[a]||[],d=0;d<c.length;d++)c[d].rc.apply(c[d].Ka,Array.prototype.slice.call(arguments,1))};Id.prototype.wb=function(a,b,c){Jd(this,a);this.Gc[a]=this.Gc[a]||[];this.Gc[a].push({rc:b,Ka:c});(a=this.ue(a))&&b.apply(c,a)};Id.prototype.$b=function(a,b,c){Jd(this,a);a=this.Gc[a]||[];for(var d=0;d<a.length;d++)if(a[d].rc===b&&(!c||c===a[d].Ka)){a.splice(d,1);break}};
function Jd(a,b){y(Ma(a.Ff,function(a){return a===b}),"Unknown event: "+b)};function Kd(){Id.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.nc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.nc&&(c.nc=b,c.$d("visible",b))},!1)}}ma(Kd,Id);ca(Kd);Kd.prototype.ue=function(a){y("visible"===a,"Unknown event type: "+a);return[this.nc]};function A(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function wd(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Lb(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function Jb(a){var b=0,c;for(c in a)b++;return b}function Kb(a){for(var b in a)return b}function Ld(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Md(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Cd(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Nd(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Od(a,b){var c=Nd(a,b,void 0);return c&&a[c]}function Pd(a){for(var b in a)return!1;return!0}function Qd(a,b){return b in a?a[b]:void 0}function Dd(a){var b={},c;for(c in a)b[c]=a[c];return b}var Rd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Sd(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Rd.length;f++)c=Rd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Td(){this.uc={}}function Ud(a,b,c){m(c)||(c=1);s(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}Td.prototype.get=function(){return Dd(this.uc)};function Vd(a){this.Pf=a;this.td=null}Vd.prototype.get=function(){var a=this.Pf.get(),b=Dd(a);if(this.td)for(var c in this.td)b[c]-=this.td[c];this.td=a;return b};function Wd(a,b){this.zf={};this.Ud=new Vd(a);this.S=b;var c=1E4+2E4*Math.random();setTimeout(q(this.tf,this),Math.floor(c))}Wd.prototype.tf=function(){var a=this.Ud.get(),b={},c=!1,d;for(d in a)0<a[d]&&s(this.zf,d)&&(b[d]=a[d],c=!0);c&&(a=this.S,a.ja&&(b={c:b},a.f("reportStats",b),a.Ba("s",b)));setTimeout(q(this.tf,this),Math.floor(6E5*Math.random()))};var Xd={},Yd={};function Zd(a){a=a.toString();Xd[a]||(Xd[a]=new Td);return Xd[a]}function $d(a,b){var c=a.toString();Yd[c]||(Yd[c]=b());return Yd[c]};var ae=null;"undefined"!==typeof MozWebSocket?ae=MozWebSocket:"undefined"!==typeof WebSocket&&(ae=WebSocket);function be(a,b,c){this.me=a;this.f=ob(this.me);this.frames=this.Cc=null;this.jb=this.kb=this.Ue=0;this.Ra=Zd(b);this.$a=(b.Bb?"wss://":"ws://")+b.Ma+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.$a+="&r=f");b.host!==b.Ma&&(this.$a=this.$a+"&ns="+b.ub);c&&(this.$a=this.$a+"&s="+c)}var ce;
be.prototype.open=function(a,b){this.fb=b;this.hg=a;this.f("Websocket connecting to "+this.$a);this.yc=!1;za.set("previous_websocket_failure",!0);try{this.ua=new ae(this.$a)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.eb();return}var e=this;this.ua.onopen=function(){e.f("Websocket connected.");e.yc=!0};this.ua.onclose=function(){e.f("Websocket connection was disconnected.");e.ua=null;e.eb()};this.ua.onmessage=function(a){if(null!==e.ua)if(a=a.data,e.jb+=
a.length,Ud(e.Ra,"bytes_received",a.length),de(e),null!==e.frames)ee(e,a);else{a:{y(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Ue=b;e.frames=[];a=null;break a}}e.Ue=1;e.frames=[]}null!==a&&ee(e,a)}};this.ua.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.eb()}};be.prototype.start=function(){};
be.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ae&&!ce};be.responsesRequiredToBeHealthy=2;be.healthyTimeout=3E4;h=be.prototype;h.vd=function(){za.remove("previous_websocket_failure")};function ee(a,b){a.frames.push(b);if(a.frames.length==a.Ue){var c=a.frames.join("");a.frames=null;c=ta(c);a.hg(c)}}
h.send=function(a){de(this);a=r(a);this.kb+=a.length;Ud(this.Ra,"bytes_sent",a.length);a=yb(a,16384);1<a.length&&this.ua.send(String(a.length));for(var b=0;b<a.length;b++)this.ua.send(a[b])};h.Uc=function(){this.rb=!0;this.Cc&&(clearInterval(this.Cc),this.Cc=null);this.ua&&(this.ua.close(),this.ua=null)};h.eb=function(){this.rb||(this.f("WebSocket is closing itself"),this.Uc(),this.fb&&(this.fb(this.yc),this.fb=null))};h.close=function(){this.rb||(this.f("WebSocket is being closed"),this.Uc())};
function de(a){clearInterval(a.Cc);a.Cc=setInterval(function(){a.ua&&a.ua.send("0");de(a)},Math.floor(45E3))};function fe(a){this.ac=a;this.Hd=[];this.Jb=0;this.le=-1;this.xb=null}function ge(a,b,c){a.le=b;a.xb=c;a.le<a.Jb&&(a.xb(),a.xb=null)}function he(a,b,c){for(a.Hd[b]=c;a.Hd[a.Jb];){var d=a.Hd[a.Jb];delete a.Hd[a.Jb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Cb(function(){f.ac(d[e])})}if(a.Jb===a.le){a.xb&&(clearTimeout(a.xb),a.xb(),a.xb=null);break}a.Jb++}};function ie(){this.set={}}h=ie.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return s(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return Pd(this.set)};h.count=function(){return Jb(this.set)};function je(a,b){A(a.set,function(a,d){b(d,a)})};function ke(a,b,c){this.me=a;this.f=ob(a);this.jb=this.kb=0;this.Ra=Zd(b);this.Rd=c;this.yc=!1;this.Zc=function(a){b.host!==b.Ma&&(a.ns=b.ub);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.Bb?"https://":"http://")+b.Ma+"/.lp?"+c.join("&")}}var le,me;
ke.prototype.open=function(a,b){this.$e=0;this.ga=b;this.mf=new fe(a);this.rb=!1;var c=this;this.mb=setTimeout(function(){c.f("Timed out trying to connect.");c.eb();c.mb=null},Math.floor(3E4));tb(function(){if(!c.rb){c.Pa=new ne(function(a,b,d,k,l){oe(c,arguments);if(c.Pa)if(c.mb&&(clearTimeout(c.mb),c.mb=null),c.yc=!0,"start"==a)c.id=b,c.rf=d;else if("close"===a)b?(c.Pa.Pd=!1,ge(c.mf,b,function(){c.eb()})):c.eb();else throw Error("Unrecognized command received: "+a);},function(a,b){oe(c,arguments);
he(c.mf,a,b)},function(){c.eb()},c.Zc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Pa.ae&&(a.cb=c.Pa.ae);a.v="5";c.Rd&&(a.s=c.Rd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Zc(a);c.f("Connecting via long-poll to "+a);pe(c.Pa,a,function(){})}})};
ke.prototype.start=function(){var a=this.Pa,b=this.rf;a.cg=this.id;a.dg=b;for(a.fe=!0;qe(a););a=this.id;b=this.rf;this.Zb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.Zb.src=this.Zc(c);this.Zb.style.display="none";document.body.appendChild(this.Zb)};ke.isAvailable=function(){return!me&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Fg)&&(le||!0)};h=ke.prototype;
h.vd=function(){};h.Uc=function(){this.rb=!0;this.Pa&&(this.Pa.close(),this.Pa=null);this.Zb&&(document.body.removeChild(this.Zb),this.Zb=null);this.mb&&(clearTimeout(this.mb),this.mb=null)};h.eb=function(){this.rb||(this.f("Longpoll is closing itself"),this.Uc(),this.ga&&(this.ga(this.yc),this.ga=null))};h.close=function(){this.rb||(this.f("Longpoll is being closed."),this.Uc())};
h.send=function(a){a=r(a);this.kb+=a.length;Ud(this.Ra,"bytes_sent",a.length);a=jb(a);a=cb(a,!0);a=yb(a,1840);for(var b=0;b<a.length;b++){var c=this.Pa;c.Qc.push({ug:this.$e,Cg:a.length,bf:a[b]});c.fe&&qe(c);this.$e++}};function oe(a,b){var c=r(b).length;a.jb+=c;Ud(a.Ra,"bytes_received",c)}
function ne(a,b,c,d){this.Zc=d;this.fb=c;this.Je=new ie;this.Qc=[];this.oe=Math.floor(1E8*Math.random());this.Pd=!0;this.ae=eb();window["pLPCommand"+this.ae]=a;window["pRTLPCB"+this.ae]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||hb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.ab=a.contentDocument:a.contentWindow?a.ab=a.contentWindow.document:a.document&&(a.ab=a.document);this.Aa=a;a="";this.Aa.src&&"javascript:"===this.Aa.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Aa.ab.open(),this.Aa.ab.write(a),this.Aa.ab.close()}catch(f){hb("frame writing exception"),f.stack&&hb(f.stack),hb(f)}}
ne.prototype.close=function(){this.fe=!1;if(this.Aa){this.Aa.ab.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Aa&&(document.body.removeChild(a.Aa),a.Aa=null)},Math.floor(0))}var b=this.fb;b&&(this.fb=null,b())};
function qe(a){if(a.fe&&a.Pd&&a.Je.count()<(0<a.Qc.length?2:1)){a.oe++;var b={};b.id=a.cg;b.pw=a.dg;b.ser=a.oe;for(var b=a.Zc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].bf.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Cg+"&d"+d+"="+e.bf;d++}else break;re(a,b+c,a.oe);return!0}return!1}function re(a,b,c){function d(){a.Je.remove(c);qe(a)}a.Je.add(c);var e=setTimeout(d,Math.floor(25E3));pe(a,b,function(){clearTimeout(e);d()})}
function pe(a,b,c){setTimeout(function(){try{if(a.Pd){var d=a.Aa.ab.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){hb("Long-poll script failed to load: "+b);a.Pd=!1;a.close()};a.Aa.ab.body.appendChild(d)}}catch(e){}},Math.floor(1))};function se(a){te(this,a)}var ue=[ke,be];function te(a,b){var c=be&&be.isAvailable(),d=c&&!(za.lf||!0===za.get("previous_websocket_failure"));b.Eg&&(c||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Xc=[be];else{var e=a.Xc=[];zb(ue,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ve(a){if(0<a.Xc.length)return a.Xc[0];throw Error("No transports available");};function we(a,b,c,d,e,f){this.id=a;this.f=ob("c:"+this.id+":");this.ac=c;this.Kc=d;this.ga=e;this.He=f;this.O=b;this.Gd=[];this.Ye=0;this.Af=new se(b);this.Qa=0;this.f("Connection created");xe(this)}
function xe(a){var b=ve(a.Af);a.J=new b("c:"+a.id+":"+a.Ye++,a.O);a.Le=b.responsesRequiredToBeHealthy||0;var c=ye(a,a.J),d=ze(a,a.J);a.Yc=a.J;a.Tc=a.J;a.C=null;a.sb=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.od=setTimeout(function(){a.od=null;a.sb||(a.J&&102400<a.J.jb?(a.f("Connection exceeded healthy timeout but has received "+a.J.jb+" bytes.  Marking connection healthy."),a.sb=!0,a.J.vd()):a.J&&10240<a.J.kb?a.f("Connection exceeded healthy timeout but has sent "+
a.J.kb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function ze(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Qa?1===a.Qa&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.O.Ma.substr(0,2)&&(za.remove("host:"+a.O.host),a.O.Ma=a.O.host)),a.close()):b===a.C?(a.f("Secondary connection lost."),c=a.C,a.C=null,a.Yc!==c&&a.Tc!==c||a.close()):a.f("closing an old connection")}}
function ye(a,b){return function(c){if(2!=a.Qa)if(b===a.Tc){var d=wb("t",c);c=wb("d",c);if("c"==d){if(d=wb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Rd=c.s;Ba(a.O,f);0==a.Qa&&(a.J.start(),Ae(a,a.J,d),"5"!==e&&z("Protocol version mismatch detected"),c=a.Af,(c=1<c.Xc.length?c.Xc[1]:null)&&Be(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Tc=a.C;for(c=0;c<a.Gd.length;++c)a.Cd(a.Gd[c]);a.Gd=[];Ce(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.He&&(a.He(c),a.He=null),a.ga=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ba(a.O,c),1===a.Qa?a.close():(De(a),xe(a))):"e"===d?pb("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ee(a),Fe(a)):pb("Unknown control packet command: "+d)}else"d"==d&&a.Cd(c)}else if(b===a.C)if(d=wb("t",c),c=wb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ge(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.C.close(),a.Yc!==a.C&&a.Tc!==a.C||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.yf--,Ge(a)));else if("d"==d)a.Gd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}we.prototype.Ba=function(a){He(this,{t:"d",d:a})};function Ce(a){a.Yc===a.C&&a.Tc===a.C&&(a.f("cleaning up and promoting a connection: "+a.C.me),a.J=a.C,a.C=null)}
function Ge(a){0>=a.yf?(a.f("Secondary connection is healthy."),a.sb=!0,a.C.vd(),a.C.start(),a.f("sending client ack on secondary"),a.C.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.Yc=a.C,Ce(a)):(a.f("sending ping on secondary."),a.C.send({t:"c",d:{t:"p",d:{}}}))}we.prototype.Cd=function(a){Ee(this);this.ac(a)};function Ee(a){a.sb||(a.Le--,0>=a.Le&&(a.f("Primary connection is healthy."),a.sb=!0,a.J.vd()))}
function Be(a,b){a.C=new b("c:"+a.id+":"+a.Ye++,a.O,a.Rd);a.yf=b.responsesRequiredToBeHealthy||0;a.C.open(ye(a,a.C),ze(a,a.C));setTimeout(function(){a.C&&(a.f("Timed out trying to upgrade."),a.C.close())},Math.floor(6E4))}function Ae(a,b,c){a.f("Realtime connection established.");a.J=b;a.Qa=1;a.Kc&&(a.Kc(c),a.Kc=null);0===a.Le?(a.f("Primary connection is healthy."),a.sb=!0):setTimeout(function(){Fe(a)},Math.floor(5E3))}
function Fe(a){a.sb||1!==a.Qa||(a.f("sending ping on primary."),He(a,{t:"c",d:{t:"p",d:{}}}))}function He(a,b){if(1!==a.Qa)throw"Connection is not connected";a.Yc.send(b)}we.prototype.close=function(){2!==this.Qa&&(this.f("Closing realtime connection."),this.Qa=2,De(this),this.ga&&(this.ga(),this.ga=null))};function De(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.C&&(a.C.close(),a.C=null);a.od&&(clearTimeout(a.od),a.od=null)};function Ie(){Id.call(this,["online"]);this.Lc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Lc||a.$d("online",!0);a.Lc=!0},!1);window.addEventListener("offline",function(){a.Lc&&a.$d("online",!1);a.Lc=!1},!1)}}ma(Ie,Id);ca(Ie);Ie.prototype.ue=function(a){y("online"===a,"Unknown event type: "+a);return[this.Lc]};function Je(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ta(gb(f[0])||""),c=ta(gb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Hg:b,ke:c,data:d,yg:e}}function Ke(a){a=Je(a).ke;return"object"===typeof a&&a.hasOwnProperty("iat")?t(a,"iat"):null}function Le(a){a=Je(a);var b=a.ke;return!!a.yg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Me(a,b,c,d){this.id=Ne++;this.f=ob("p:"+this.id+":");this.Db=!0;this.ta={};this.la=[];this.Nc=0;this.Jc=[];this.ja=!1;this.Wa=1E3;this.xd=3E5;this.Dd=b;this.Bd=c;this.Ie=d;this.O=a;this.Pe=null;this.Sc={};this.tg=0;this.Dc=this.Ae=null;Oe(this,0);Kd.Ob().wb("visible",this.kg,this);-1===a.host.indexOf("fblocal")&&Ie.Ob().wb("online",this.ig,this)}var Ne=0,Pe=0;h=Me.prototype;
h.Ba=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(r(a));y(this.ja,"sendRequest call when we're not connected not allowed.");this.Oa.Ba(a);c&&(this.Sc[d]=c)};function Qe(a,b,c,d,e){var f=b.Fa(),g=b.path.toString();a.f("Listen called for "+g+" "+f);a.ta[g]=a.ta[g]||{};y(!a.ta[g][f],"listen() called twice for same path/queryId.");b={H:e,nd:c,qg:Lc(b.n),tag:d};a.ta[g][f]=b;a.ja&&Re(a,g,f,b)}
function Re(a,b,c,d){a.f("Listen on "+b+" for "+c);var e={p:b};d.tag&&(e.q=d.qg,e.t=d.tag);e.h=d.nd();a.Ba("q",e,function(e){if((a.ta[b]&&a.ta[b][c])===d){a.f("listen response",e);var g=e.s;"ok"!==g&&Se(a,b,c);e=e.d;d.H&&d.H(g,e)}})}h.Q=function(a,b,c){this.Ib={Rf:a,df:!1,rc:b,ad:c};this.f("Authenticating using credential: "+a);Te(this);(b=40==a.length)||(a=Je(a).ke,b="object"===typeof a&&!0===t(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.xd=3E4)};
h.Ve=function(a){delete this.Ib;this.ja&&this.Ba("unauth",{},function(b){a(b.s,b.d)})};function Te(a){var b=a.Ib;a.ja&&b&&a.Ba("auth",{cred:b.Rf},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ib===b&&delete a.Ib;b.df?"ok"!==d&&b.ad&&b.ad(d,c):(b.df=!0,b.rc&&b.rc(d,c))})}function Ue(a,b,c,d){a.ja?Ve(a,"o",b,c,d):a.Jc.push({Pc:b,action:"o",data:c,H:d})}function We(a,b,c,d){a.ja?Ve(a,"om",b,c,d):a.Jc.push({Pc:b,action:"om",data:c,H:d})}
h.Ge=function(a,b){this.ja?Ve(this,"oc",a,null,b):this.Jc.push({Pc:a,action:"oc",data:null,H:b})};function Ve(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ba(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Xe(this,"p",a,b,c,d)};function Ye(a,b,c,d){Xe(a,"m",b,c,d,void 0)}function Xe(a,b,c,d,e,f){d={p:c,d:d};m(f)&&(d.h=f);a.la.push({action:b,uf:d,H:e});a.Nc++;b=a.la.length-1;a.ja?Ze(a,b):a.f("Buffering put: "+c)}
function Ze(a,b){var c=a.la[b].action,d=a.la[b].uf,e=a.la[b].H;a.la[b].rg=a.ja;a.Ba(c,d,function(d){a.f(c+" response",d);delete a.la[b];a.Nc--;0===a.Nc&&(a.la=[]);e&&e(d.s,d.d)})}
h.Cd=function(a){if("r"in a){this.f("from server: "+r(a));var b=a.r,c=this.Sc[b];c&&(delete this.Sc[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Dd(c.p,c.d,!1,c.t):"m"===b?this.Dd(c.p,c.d,!0,c.t):"c"===b?$e(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ib,delete this.Ib,c&&c.ad&&c.ad(a,b)):"sd"===b?this.Pe?this.Pe(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):pb("Unrecognized action received from server: "+r(b)+"\nAre you using the latest client?"))}};h.Kc=function(a){this.f("connection ready");this.ja=!0;this.Dc=(new Date).getTime();this.Ie({serverTimeOffset:a-(new Date).getTime()});af(this);this.Bd(!0)};function Oe(a,b){y(!a.Oa,"Scheduling a connect when we're already connected/ing?");a.Kb&&clearTimeout(a.Kb);a.Kb=setTimeout(function(){a.Kb=null;bf(a)},Math.floor(b))}
h.kg=function(a){a&&!this.nc&&this.Wa===this.xd&&(this.f("Window became visible.  Reducing delay."),this.Wa=1E3,this.Oa||Oe(this,0));this.nc=a};h.ig=function(a){a?(this.f("Browser went online.  Reconnecting."),this.Wa=1E3,this.Db=!0,this.Oa||Oe(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Db=!1,this.Oa&&this.Oa.close())};
h.of=function(){this.f("data client disconnected");this.ja=!1;this.Oa=null;for(var a=0;a<this.la.length;a++){var b=this.la[a];b&&"h"in b.uf&&b.rg&&(b.H&&b.H("disconnect"),delete this.la[a],this.Nc--)}0===this.Nc&&(this.la=[]);if(this.Db)this.nc?this.Dc&&(3E4<(new Date).getTime()-this.Dc&&(this.Wa=1E3),this.Dc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Wa=this.xd,this.Ae=(new Date).getTime()),a=Math.max(0,this.Wa-((new Date).getTime()-this.Ae)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Oe(this,a),this.Wa=Math.min(this.xd,1.3*this.Wa);else for(var c in this.Sc)delete this.Sc[c];this.Bd(!1)};function bf(a){if(a.Db){a.f("Making a connection attempt");a.Ae=(new Date).getTime();a.Dc=null;var b=q(a.Cd,a),c=q(a.Kc,a),d=q(a.of,a),e=a.id+":"+Pe++;a.Oa=new we(e,a.O,b,c,d,function(b){z(b+" ("+a.O.toString()+")");a.Db=!1})}}h.qb=function(){this.Db=!1;this.Oa?this.Oa.close():(this.Kb&&(clearTimeout(this.Kb),this.Kb=null),this.ja&&this.of())};
h.ic=function(){this.Db=!0;this.Wa=1E3;this.Oa||Oe(this,0)};function $e(a,b,c){c=c?Ja(c,function(a){return xb(a)}).join("$"):"default";(a=Se(a,b,c))&&a.H&&a.H("permission_denied")}function Se(a,b,c){b=(new S(b)).toString();var d;m(a.ta[b])?(d=a.ta[b][c],delete a.ta[b][c],0===Jb(a.ta[b])&&delete a.ta[b]):d=void 0;return d}
function af(a){Te(a);A(a.ta,function(b,d){A(b,function(b,c){Re(a,d,c,b)})});for(var b=0;b<a.la.length;b++)a.la[b]&&Ze(a,b);for(;a.Jc.length;)b=a.Jc.shift(),Ve(a,b.action,b.Pc,b.data,b.H)};function cf(){this.m=this.F=null}cf.prototype.ec=function(a,b){if(a.e())this.F=b,this.m=null;else if(null!==this.F)this.F=this.F.D(a,b);else{null==this.m&&(this.m=new ie);var c=I(a);this.m.contains(c)||this.m.add(c,new cf);c=this.m.get(c);a=T(a);c.ec(a,b)}};
function df(a,b){if(b.e())return a.F=null,a.m=null,!0;if(null!==a.F){if(a.F.M())return!1;var c=a.F;a.F=null;c.U(L,function(b,c){a.ec(new S(b),c)});return df(a,b)}return null!==a.m?(c=I(b),b=T(b),a.m.contains(c)&&df(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function ef(a,b,c){null!==a.F?c(b,a.F):a.U(function(a,e){var f=new S(b.toString()+"/"+a);ef(e,f,c)})}cf.prototype.U=function(a){null!==this.m&&je(this.m,function(b,c){a(b,c)})};function ff(){this.Od=M}ff.prototype.j=function(a){return this.Od.ra(a)};ff.prototype.toString=function(){return this.Od.toString()};function gf(){this.ob=[]}function hf(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Rb();null===c||f.aa(c.Rb())||(a.ob.push(c),c=null);null===c&&(c=new jf(f));c.add(e)}c&&a.ob.push(c)}function Sc(a,b,c){hf(a,c);kf(a,function(a){return a.aa(b)})}function lf(a,b,c){hf(a,c);kf(a,function(a){return a.contains(b)||b.contains(a)})}
function kf(a,b){for(var c=!0,d=0;d<a.ob.length;d++){var e=a.ob[d];if(e)if(e=e.Rb(),b(e)){for(var e=a.ob[d],f=0;f<e.ld.length;f++){var g=e.ld[f];if(null!==g){e.ld[f]=null;var k=g.Mb();lb&&hb("event: "+g.toString());Cb(k)}}a.ob[d]=null}else c=!1}c&&(a.ob=[])}function jf(a){this.Ea=a;this.ld=[]}jf.prototype.add=function(a){this.ld.push(a)};jf.prototype.Rb=function(){return this.Ea};var mf="auth.firebase.com";function nf(a,b,c){this.cd=a||{};this.Zd=b||{};this.Xa=c||{};this.cd.remember||(this.cd.remember="default")}var of=["remember","redirectTo"];function pf(a){var b={},c={};ua(a||{},function(a,e){0<=Ga(of,a)?b[a]=e:c[a]=e});return new nf(b,{},c)};var qf={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function X(a){var b=Error(t(qf,a),a);b.code=a;return b};function rf(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function sf(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function tf(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function uf(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function vf(a){var b="";try{a=a.replace("#","");var c={},d=a.replace(/^\?/,"").split("&");for(a=0;a<d.length;a++)if(d[a]){var e=d[a].split("=");c[e[0]]=e[1]}c&&s(c,"__firebase_request_key")&&(b=t(c,"__firebase_request_key"))}catch(f){}return b}
function wf(a){var b=[],c;for(c in a)if(s(a,c)){var d=t(a,c);if(ea(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(t(a,c)))}return b?"&"+b.join("&"):""}function xf(){var a=rb(mf);return a.scheme+"://"+a.host+"/v2"}function yf(a){return xf()+"/"+a+"/auth/channel"};function zf(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function Af(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function Bf(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Bf.prototype.open=function(a,b,c){function d(){c&&(c(X("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;sf(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ta(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(X("SERVER_ERROR")):c(X("NETWORK_ERROR"));c=null;tf(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+wf(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=r(b));"application/x-www-form-urlencoded"===k&&(g=wf(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Sd(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};Bf.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||Af())};Bf.prototype.tc=function(){return"json"};function Cf(a){this.gc=Fa()+Fa()+Fa();this.pf=a}
Cf.prototype.open=function(a,b,c){function d(){c&&(c(X("USER_CANCELLED")),c=null)}var e=this,f=rb(mf),g;b.requestId=this.gc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=wf(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{var n=a.url;try{var u=document.createElement("a");u.href=n;b=u.host===f.host&&"/blank/page.html"===u.pathname;break a}catch(x){}b=!1}b&&(a=vf(a.url),g.removeEventListener("exit",
d),g.close(),a=new nf(null,null,{requestId:e.gc,requestKey:a}),e.pf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(X("TRANSPORT_UNAVAILABLE"))};Cf.isAvailable=function(){return zf()};Cf.prototype.tc=function(){return"redirect"};function Df(a){if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.options=a}
Df.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);u&&(u=clearInterval(u));tf(window,"message",e);tf(window,"unload",d);if(n&&!a)try{n.close()}catch(b){k.postMessage("die",l)}n=k=void 0}function e(a){if(a.origin===l)try{var b=ta(a.data);"ready"===b.a?k.postMessage(x,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Af(),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=uf(a);if(l!==uf(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+wf(b);var n=window.open(a,this.options.window_name,this.options.window_features);k||(k=n);var u=setInterval(function(){n&&n.closed&&
(d(!1),c&&(c(X("USER_CANCELLED")),c=null))},500),x=r({a:"request",d:b});sf(window,"unload",d);sf(window,"message",e)}};
Df.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(zf()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};Df.prototype.tc=function(){return"popup"};function Ef(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Ef.prototype.open=function(a,b,c){function d(){c&&(c(X("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;Pd(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);tf(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+wf(b);
sf(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Ff(f,a,c)};
function Ff(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(X("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(X("NETWORK_ERROR"))}},0)}Ef.isAvailable=function(){return!zf()};Ef.prototype.tc=function(){return"json"};function Gf(a,b){this.Ke=["session",a.Id,a.ub].join(":");this.Wd=b}Gf.prototype.set=function(a,b){if(!b)if(this.Wd.length)b=this.Wd[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ke,a)};Gf.prototype.get=function(){var a=Ja(this.Wd,q(this.Zf,this)),a=Ia(a,function(a){return null!==a});Qa(a,function(a,c){return Ke(c.token)-Ke(a.token)});return 0<a.length?a.shift():null};Gf.prototype.Zf=function(a){try{var b=a.get(this.Ke);if(b&&b.token)return b}catch(c){}return null};
Gf.prototype.clear=function(){var a=this;Ha(this.Wd,function(b){b.remove(a.Ke)})};function Hf(a){this.gc=Fa()+Fa()+Fa();this.pf=a}Hf.prototype.open=function(a,b){v.set("redirect_request_id",this.gc);v.set("redirect_request_id",this.gc);b.requestId=this.gc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+wf(b);window.location=a};Hf.isAvailable=function(){return!/^file:\//.test(location.href)&&!zf()};Hf.prototype.tc=function(){return"redirect"};function If(a,b,c,d){Id.call(this,["auth_status"]);this.O=a;this.Xe=b;this.Dg=c;this.Fe=d;this.jc=new Gf(a,[za,v]);this.ib=null;Jf(this)}ma(If,Id);h=If.prototype;h.re=function(){return this.ib||null};function Jf(a){v.get("redirect_request_id")&&Kf(a);var b=a.jc.get();b&&b.token?(Lf(a,b),a.Xe(b.token,function(c,d){Mf(a,c,d,!1,b.token,b)},function(b,d){Nf(a,"resumeSession()",b,d)})):Lf(a,null)}
function Of(a,b,c,d,e,f){"firebaseio-demo.com"===a.O.domain&&z("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.Xe(b,function(f,k){Mf(a,f,k,!0,b,c,d||{},e)},function(b,c){Nf(a,"auth()",b,c,f)})}function Pf(a,b){a.jc.clear();Lf(a,null);a.Dg(function(a,d){if("ok"===a)B(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;B(b,f)}})}
function Mf(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Le(e)?e:"",c=null,b&&s(b,"uid")?c=t(b,"uid"):s(f,"uid")&&(c=t(f,"uid")),f.uid=c,c="custom",b&&s(b,"provider")?c=t(b,"provider"):s(f,"provider")&&(c=t(f,"provider")),f.provider=c,a.jc.clear(),Le(e)&&(g=g||{},c=za,"sessionOnly"===g.remember&&(c=v),"none"!==g.remember&&a.jc.set(f,c)),Lf(a,f)),B(k,null,f)):(a.jc.clear(),Lf(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,B(k,f))}
function Nf(a,b,c,d,e){z(b+" was canceled: "+d);a.jc.clear();Lf(a,null);a=Error(d);a.code=c.toUpperCase();B(e,a)}function Qf(a,b,c,d,e){Rf(a);c=new nf(d||{},{},c||{});Sf(a,[Bf,Ef],"/auth/"+b,c,e)}
function Tf(a,b,c,d){Rf(a);var e=[Df,Cf];c=pf(c);"anonymous"===b||"password"===b?setTimeout(function(){B(d,X("TRANSPORT_UNAVAILABLE"))},0):(c.Zd.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Zd.relay_url=yf(a.O.ub),c.Zd.requestWithCredential=q(a.hc,a),Sf(a,e,"/auth/"+b,c,d))}
function Kf(a){var b=v.get("redirect_request_id");if(b){var c=v.get("redirect_client_options");v.remove("redirect_request_id");v.remove("redirect_client_options");var d=[Bf,Ef],b={requestId:b,requestKey:vf(document.location.hash)},c=new nf(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Sf(a,d,"/auth/session",c)}}h.ne=function(a,b){Rf(this);var c=pf(a);c.Xa._method="POST";this.hc("/users",c,function(a,c){a?B(b,a):B(b,a,c)})};
h.Me=function(a,b){var c=this;Rf(this);var d="/users/"+encodeURIComponent(a.email),e=pf(a);e.Xa._method="DELETE";this.hc(d,e,function(a,d){!a&&d&&d.uid&&c.ib&&c.ib.uid&&c.ib.uid===d.uid&&Pf(c);B(b,a)})};h.je=function(a,b){Rf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=pf(a);d.Xa._method="PUT";d.Xa.password=a.newPassword;this.hc(c,d,function(a){B(b,a)})};
h.ie=function(a,b){Rf(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=pf(a);d.Xa._method="PUT";d.Xa.email=a.newEmail;d.Xa.password=a.password;this.hc(c,d,function(a){B(b,a)})};h.Ne=function(a,b){Rf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=pf(a);d.Xa._method="POST";this.hc(c,d,function(a){B(b,a)})};h.hc=function(a,b,c){Uf(this,[Bf,Ef],a,b,c)};
function Sf(a,b,c,d,e){Uf(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Of(a,c.token,c,d.cd,function(a,b){a?B(e,a):B(e,null,b)}):B(e,b||X("UNKNOWN_ERROR"))})}
function Uf(a,b,c,d,e){b=Ia(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){B(e,X("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Zd),d=va(d.Xa),d.v="js-2.2.0",d.transport=b.tc(),d.suppress_status_codes=!0,a=xf()+"/"+a.O.ub+c,b.open(a,d,function(a,b){if(a)B(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;B(e,c)}else B(e,null,b)}))}
function Lf(a,b){var c=null!==a.ib||null!==b;a.ib=b;c&&a.$d("auth_status",b);a.Fe(null!==b)}h.ue=function(a){y("auth_status"===a,'initial event must be of type "auth_status"');return[this.ib]};function Rf(a){var b=a.O;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===mf)throw Error("This custom Firebase server ('"+a.O.domain+"') does not support delegated login.");};function Vf(a,b){return a&&"object"===typeof a?(y(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Wf(a,b){var c=new cf;ef(a,new S(""),function(a,e){c.ec(a,Xf(e,b))});return c}function Xf(a,b){var c=a.L().I(),c=Vf(c,b),d;if(a.M()){var e=Vf(a.za(),b);return e!==a.za()||c!==a.L().I()?new qd(e,O(c)):a}d=a;c!==a.L().I()&&(d=d.$(new qd(c)));a.U(L,function(a,c){var e=Xf(c,b);e!==c&&(d=d.P(a,e))});return d};function Yf(a,b){this.value=a;this.children=b||Zf}var Zf=new bd(function(a,b){return a===b?0:a<b?-1:1}),$f=new Yf(null);function ag(a){var b=$f;A(a,function(a,d){b=b.set(new S(d),a)});return b}h=Yf.prototype;h.e=function(){return null===this.value&&this.children.e()};function bg(a,b,c){if(null!=a.value&&c(a.value))return{path:U,value:a.value};if(b.e())return null;var d=I(b);a=a.children.get(d);return null!==a?(b=bg(a,T(b),c),null!=b?{path:(new S(d)).u(b.path),value:b.value}:null):null}
function cg(a,b){return bg(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(I(a));return null!==b?b.subtree(T(a)):$f};h.set=function(a,b){if(a.e())return new Yf(b,this.children);var c=I(a),d=(this.children.get(c)||$f).set(T(a),b),c=this.children.La(c,d);return new Yf(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?$f:new Yf(null,this.children);var b=I(a),c=this.children.get(b);return c?(a=c.remove(T(a)),b=a.e()?this.children.remove(b):this.children.La(b,a),null===this.value&&b.e()?$f:new Yf(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(I(a));return b?b.get(T(a)):null};
function dg(a,b,c){if(b.e())return c;var d=I(b);b=dg(a.children.get(d)||$f,T(b),c);d=b.e()?a.children.remove(d):a.children.La(d,b);return new Yf(a.value,d)}function eg(a,b){return fg(a,U,b)}function fg(a,b,c){var d={};a.children.fa(function(a,f){d[a]=fg(f,b.u(a),c)});return c(b,a.value,d)}function gg(a,b,c){return hg(a,b,U,c)}function hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=I(b);return(a=a.children.get(e))?hg(a,T(b),c.u(e),d):null}
function ig(a,b,c){if(!b.e()){var d=!0;a.value&&(d=c(U,a.value));!0===d&&(d=I(b),(a=a.children.get(d))&&jg(a,T(b),U.u(d),c))}}function jg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=I(b);return(a=a.children.get(e))?jg(a,T(b),c.u(e),d):$f}function kg(a,b){lg(a,U,b)}function lg(a,b,c){a.children.fa(function(a,e){lg(e,b.u(a),c)});a.value&&c(b,a.value)}function mg(a,b){a.children.fa(function(a,d){d.value&&b(a,d.value)})}
h.toString=function(){var a={};kg(this,function(b,c){a[b.toString()]=c.toString()});return r(a)};function ng(a,b){this.ce=a;this.Of=b}function og(a){this.G=a}
og.prototype.Ya=function(a,b,c,d){var e=new Bc,f;if(b.type===pg)b.source.qe?c=qg(this,a,b.path,b.Ga,c,d,e):(y(b.source.ef,"Unknown source."),f=b.source.Te,c=rg(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===sg)b.source.qe?c=tg(this,a,b.path,b.children,c,d,e):(y(b.source.ef,"Unknown source."),f=b.source.Te,c=ug(this,a,b.path,b.children,c,d,f,e));else if(b.type===vg)if(b.Oe)if(f=b.path,null!=c.kc(f))c=a;else{b=new xc(c,a,d);d=a.B.j();if(f.e()||".priority"===I(f))wg(a.o())?b=c.pa(Ac(a)):(b=a.o().j(),
y(b instanceof W,"serverChildren would be complete if leaf node"),b=c.qc(b)),b=this.G.oa(d,b,e);else{f=I(f);var g=c.Ta(f,a.o());null==g&&yc(a.o(),f)&&(g=d.K(f));b=null!=g?this.G.D(d,f,g,b,e):a.B.j().Da(f)?this.G.D(d,f,M,b,e):d;b.e()&&wg(a.o())&&(d=c.pa(Ac(a)),d.M()&&(b=this.G.oa(b,d,e)))}d=wg(a.o())||null!=c.kc(U);c=xg(a,b,d,this.G.Ca())}else c=yg(this,a,b.path,c,d,e);else if(b.type===zg)d=b.path,b=a.o(),f=b.j(),g=b.Z||d.e(),c=Ag(this,new Bg(a.B,new zc(f,g,b.Lb)),d,c,wc,e);else throw fb("Unknown operation type: "+
b.type);e=Ld(e.Za);d=c;b=d.B;b.Z&&(f=b.j().M()||b.j().e(),g=Cg(a),(0<e.length||!a.B.Z||f&&!b.j().aa(g)||!b.j().L().aa(g.L()))&&e.push(Fb(Cg(d))));return new ng(c,e)};
function Ag(a,b,c,d,e,f){var g=b.B;if(null!=d.kc(c))return b;var k;if(c.e())y(wg(b.o()),"If change path is empty, we must have complete server data"),b.o().Lb?(e=Ac(b),d=d.qc(e instanceof W?e:M)):d=d.pa(Ac(b)),f=a.G.oa(b.B.j(),d,f);else{var l=I(c);if(".priority"==l)y(1==Tc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.o().j(),d=d.$c(c,f,k),f=null!=d?a.G.$(f,d):g.j();else{var n=T(c);yc(g,l)?(k=b.o().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().K(l).D(n,d):g.j().K(l)):d=d.Ta(l,b.o());
f=null!=d?a.G.D(g.j(),l,d,e,f):g.j()}}return xg(b,f,g.Z||c.e(),a.G.Ca())}function rg(a,b,c,d,e,f,g,k){var l=b.o();g=g?a.G:a.G.Nb();if(c.e())d=g.oa(l.j(),d,null);else if(g.Ca()&&!l.Lb)d=l.j().D(c,d),d=g.oa(l.j(),d,null);else{var n=I(c);if((c.e()?!l.Z||l.Lb:!yc(l,I(c)))&&1<Tc(c))return b;d=l.j().K(n).D(T(c),d);d=".priority"==n?g.$(l.j(),d):g.D(l.j(),n,d,wc,null)}l=l.Z||c.e();b=new Bg(b.B,new zc(d,l,g.Ca()));return Ag(a,b,c,e,new xc(e,b,f),k)}
function qg(a,b,c,d,e,f,g){var k=b.B;e=new xc(e,b,f);if(c.e())g=a.G.oa(b.B.j(),d,g),a=xg(b,g,!0,a.G.Ca());else if(f=I(c),".priority"===f)g=a.G.$(b.B.j(),d),a=xg(b,g,k.Z,k.Lb);else{var l=T(c);c=k.j().K(f);if(!l.e()){var n=e.ff(f);d=null!=n?".priority"===Uc(l)&&n.ra(l.parent()).e()?n:n.D(l,d):M}c.aa(d)?a=b:(g=a.G.D(k.j(),f,d,e,g),a=xg(b,g,k.Z,a.G.Ca()))}return a}
function tg(a,b,c,d,e,f,g){var k=b;kg(d,function(d,n){var u=c.u(d);yc(b.B,I(u))&&(k=qg(a,k,u,n,e,f,g))});kg(d,function(d,n){var u=c.u(d);yc(b.B,I(u))||(k=qg(a,k,u,n,e,f,g))});return k}function Dg(a,b){kg(b,function(b,d){a=a.D(b,d)});return a}
function ug(a,b,c,d,e,f,g,k){if(b.o().j().e()&&!wg(b.o()))return b;var l=b;c=c.e()?d:dg($f,c,d);var n=b.o().j();c.children.fa(function(c,d){if(n.Da(c)){var F=b.o().j().K(c),F=Dg(F,d);l=rg(a,l,new S(c),F,e,f,g,k)}});c.children.fa(function(c,d){var F=!wg(b.o())&&null==d.value;n.Da(c)||F||(F=b.o().j().K(c),F=Dg(F,d),l=rg(a,l,new S(c),F,e,f,g,k))});return l}
function yg(a,b,c,d,e,f){if(null!=d.kc(c))return b;var g=new xc(d,b,e),k=e=b.B.j();if(wg(b.o())){if(c.e())e=d.pa(Ac(b)),k=a.G.oa(b.B.j(),e,f);else if(".priority"===I(c)){var l=d.Ta(I(c),b.o());null==l||e.e()||e.L().aa(l)||(k=a.G.$(e,l))}else l=I(c),e=d.Ta(l,b.o()),null!=e&&(k=a.G.D(b.B.j(),l,e,g,f));e=!0}else if(b.B.Z||c.e())k=e,e=b.B.j(),e.M()||e.U(L,function(c){var e=d.Ta(c,b.o());null!=e&&(k=a.G.D(k,c,e,g,f))}),e=b.B.Z;else{l=I(c);if(1==Tc(c)||yc(b.B,l))c=d.Ta(l,b.o()),null!=c&&(k=a.G.D(e,l,c,
g,f));e=!1}return xg(b,k,e,a.G.Ca())};function Eg(a){this.W=a;this.g=a.n.g}function Fg(a,b,c,d){var e=[],f=[];Ha(b,function(b){"child_changed"===b.type&&a.g.we(b.Ee,b.Ha)&&f.push(new C("child_moved",b.Ha,b.Ua))});Gg(a,e,"child_removed",b,d,c);Gg(a,e,"child_added",b,d,c);Gg(a,e,"child_moved",f,d,c);Gg(a,e,"child_changed",b,d,c);Gg(a,e,Gb,b,d,c);return e}function Gg(a,b,c,d,e,f){d=Ia(d,function(a){return a.type===c});Qa(d,q(a.Qf,a));Ha(d,function(c){var d=Hg(a,c,f);Ha(e,function(e){e.wf(c.type)&&b.push(e.createEvent(d,a.W))})})}
function Hg(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Kd=c.gf(b.Ua,b.Ha,a.g));return b}Eg.prototype.Qf=function(a,b){if(null==a.Ua||null==b.Ua)throw fb("Should only compare child_ events.");return this.g.compare(new N(a.Ua,a.Ha),new N(b.Ua,b.Ha))};function zc(a,b,c){this.A=a;this.Z=b;this.Lb=c}function wg(a){return a.Z}function yc(a,b){return a.Z&&!a.Lb||a.A.Da(b)}zc.prototype.j=function(){return this.A};function Bg(a,b){this.B=a;this.Qd=b}function xg(a,b,c,d){return new Bg(new zc(b,c,d),a.Qd)}function Cg(a){return a.B.Z?a.B.j():null}Bg.prototype.o=function(){return this.Qd};function Ac(a){return a.Qd.Z?a.Qd.j():null};function Ig(a,b){this.W=a;var c=a.n,d=new bc(c.g),c=Mc(c)?new bc(c.g):c.ka?new Dc(c):new dc(c);this.sf=new og(c);var e=b.o(),f=b.B,g=d.oa(M,e.j(),null),k=c.oa(M,f.j(),null);this.Ia=new Bg(new zc(k,f.Z,c.Ca()),new zc(g,e.Z,d.Ca()));this.Va=[];this.Uf=new Eg(a)}function Jg(a){return a.W}h=Ig.prototype;h.o=function(){return this.Ia.o().j()};h.bb=function(a){var b=Ac(this.Ia);return b&&(Mc(this.W.n)||!a.e()&&!b.K(I(a)).e())?b.ra(a):null};h.e=function(){return 0===this.Va.length};h.Gb=function(a){this.Va.push(a)};
h.gb=function(a,b){var c=[];if(b){y(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ha(this.Va,function(a){(a=a.Ze(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Va.length;++f){var g=this.Va[f];if(!g.matches(a))e.push(g);else if(a.jf()){e=e.concat(this.Va.slice(f+1));break}}this.Va=e}else this.Va=[];return c};
h.Ya=function(a,b,c){a.type===sg&&null!==a.source.zb&&(y(Ac(this.Ia),"We should always have a full cache before handling merges"),y(Cg(this.Ia),"Missing event cache, even though we have a server cache"));var d=this.Ia;a=this.sf.Ya(d,a,b,c);b=this.sf;c=a.ce;y(c.B.j().Bc(b.G.g),"Event snap not indexed");y(c.o().j().Bc(b.G.g),"Server snap not indexed");y(wg(a.ce.o())||!wg(d.o()),"Once a server snap is complete, it should never go back");this.Ia=a.ce;return Kg(this,a.Of,a.ce.B.j(),null)};
function Lg(a,b){var c=a.Ia.B,d=[];c.j().M()||c.j().U(L,function(a,b){d.push(new C("child_added",b,a))});c.Z&&d.push(Fb(c.j()));return Kg(a,d,c.j(),b)}function Kg(a,b,c,d){return Fg(a.Uf,b,c,d?[d]:a.Va)};function Mg(){this.wa={}}h=Mg.prototype;h.e=function(){return Pd(this.wa)};h.Ya=function(a,b,c){var d=a.source.zb;if(null!==d)return d=t(this.wa,d),y(null!=d,"SyncTree gave us an op for an invalid query."),d.Ya(a,b,c);var e=[];A(this.wa,function(d){e=e.concat(d.Ya(a,b,c))});return e};h.Gb=function(a,b,c,d,e){var f=a.Fa(),g=t(this.wa,f);if(!g){var g=c.pa(e?d:null),k=!1;g?k=!0:(g=d instanceof W?c.qc(d):M,k=!1);g=new Ig(a,new Bg(new zc(g,k,!1),new zc(d,e,!1)));this.wa[f]=g}g.Gb(b);return Lg(g,b)};
h.gb=function(a,b,c){var d=a.Fa(),e=[],f=[],g=null!=Ng(this);if("default"===d){var k=this;A(this.wa,function(a,d){f=f.concat(a.gb(b,c));a.e()&&(delete k.wa[d],Mc(a.W.n)||e.push(a.W))})}else{var l=t(this.wa,d);l&&(f=f.concat(l.gb(b,c)),l.e()&&(delete this.wa[d],Mc(l.W.n)||e.push(l.W)))}g&&null==Ng(this)&&e.push(new R(a.k,a.path));return{sg:e,Vf:f}};function Og(a){return Ia(Ld(a.wa),function(a){return!Mc(a.W.n)})}h.bb=function(a){var b=null;A(this.wa,function(c){b=b||c.bb(a)});return b};
function Pg(a,b){if(Mc(b.n))return Ng(a);var c=b.Fa();return t(a.wa,c)}function Ng(a){return Od(a.wa,function(a){return Mc(a.W.n)})||null};function Qg(a){this.X=a}var Rg=new Qg(new Yf(null));function Sg(a,b,c){if(b.e())return new Qg(new Yf(c));var d=cg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=V(e,b);d=d.D(b,c);return new Qg(a.X.set(e,d))}a=dg(a.X,b,new Yf(c));return new Qg(a)}function Tg(a,b,c){var d=a;ua(c,function(a,c){d=Sg(d,b.u(a),c)});return d}Qg.prototype.Ld=function(a){if(a.e())return Rg;a=dg(this.X,a,$f);return new Qg(a)};function Ug(a,b){var c=cg(a.X,b);return null!=c?a.X.get(c.path).ra(V(c.path,b)):null}
function Vg(a){var b=[],c=a.X.value;null!=c?c.M()||c.U(L,function(a,c){b.push(new N(a,c))}):a.X.children.fa(function(a,c){null!=c.value&&b.push(new N(a,c.value))});return b}function Wg(a,b){if(b.e())return a;var c=Ug(a,b);return null!=c?new Qg(new Yf(c)):new Qg(a.X.subtree(b))}Qg.prototype.e=function(){return this.X.e()};Qg.prototype.apply=function(a){return Xg(U,this.X,a)};
function Xg(a,b,c){if(null!=b.value)return c.D(a,b.value);var d=null;b.children.fa(function(b,f){".priority"===b?(y(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Xg(a.u(b),f,c)});c.ra(a).e()||null===d||(c=c.D(a.u(".priority"),d));return c};function Yg(){this.T=Rg;this.xa=[];this.Ec=-1}h=Yg.prototype;
h.Ld=function(a){var b=Na(this.xa,function(b){return b.de===a});y(0<=b,"removeWrite called with nonexistent writeId.");var c=this.xa[b];this.xa.splice(b,1);for(var d=c.visible,e=!1,f=this.xa.length-1;d&&0<=f;){var g=this.xa[f];g.visible&&(f>=b&&Zg(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=$g(this.xa,ah,U),this.Ec=0<this.xa.length?this.xa[this.xa.length-1].de:-1;else if(c.Ga)this.T=this.T.Ld(c.path);else{var k=this;A(c.children,function(a,b){k.T=k.T.Ld(c.path.u(b))})}return c.path}return null};
h.pa=function(a,b,c,d){if(c||d){var e=Wg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Ug(e,U)?(e=$g(this.xa,function(b){return(b.visible||d)&&(!c||!(0<=Ga(c,b.de)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||M,e.apply(b)):null}e=Ug(this.T,a);if(null!=e)return e;e=Wg(this.T,a);return e.e()?b:null!=b||null!=Ug(e,U)?(b=b||M,e.apply(b)):null};
h.qc=function(a,b){var c=M,d=Ug(this.T,a);if(d)d.M()||d.U(L,function(a,b){c=c.P(a,b)});else if(b){var e=Wg(this.T,a);b.U(L,function(a,b){var d=Wg(e,new S(a)).apply(b);c=c.P(a,d)});Ha(Vg(e),function(a){c=c.P(a.name,a.V)})}else e=Wg(this.T,a),Ha(Vg(e),function(a){c=c.P(a.name,a.V)});return c};h.$c=function(a,b,c,d){y(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.u(b);if(null!=Ug(this.T,a))return null;a=Wg(this.T,a);return a.e()?d.ra(b):a.apply(d.ra(b))};
h.Ta=function(a,b,c){a=a.u(b);var d=Ug(this.T,a);return null!=d?d:yc(c,b)?Wg(this.T,a).apply(c.j().K(b)):null};h.kc=function(a){return Ug(this.T,a)};h.he=function(a,b,c,d,e,f){var g;a=Wg(this.T,a);g=Ug(a,U);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.hb(f);if(g.e()||g.M())return[];b=[];a=mc(f);e=e?g.Sb(c,f):g.Qb(c,f);for(f=P(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=P(e);return b};
function Zg(a,b){return a.Ga?a.path.contains(b):!!Nd(a.children,function(c,d){return a.path.u(d).contains(b)})}function ah(a){return a.visible}
function $g(a,b,c){for(var d=Rg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ga)c.contains(g)?(g=V(c,g),d=Sg(d,g,f.Ga)):g.contains(c)&&(g=V(g,c),d=Sg(d,U,f.Ga.ra(g)));else if(f.children)if(c.contains(g))g=V(c,g),d=Tg(d,g,f.children);else{if(g.contains(c))if(g=V(g,c),g.e())d=Tg(d,U,f.children);else if(f=t(f.children,I(g)))f=f.ra(T(g)),d=Sg(d,U,f)}else throw fb("WriteRecord should have .snap or .children");}}return d}function bh(a,b){this.Eb=a;this.X=b}h=bh.prototype;
h.pa=function(a,b,c){return this.X.pa(this.Eb,a,b,c)};h.qc=function(a){return this.X.qc(this.Eb,a)};h.$c=function(a,b,c){return this.X.$c(this.Eb,a,b,c)};h.kc=function(a){return this.X.kc(this.Eb.u(a))};h.he=function(a,b,c,d,e){return this.X.he(this.Eb,a,b,c,d,e)};h.Ta=function(a,b){return this.X.Ta(this.Eb,a,b)};h.u=function(a){return new bh(this.Eb.u(a),this.X)};function ch(a,b,c){this.type=pg;this.source=a;this.path=b;this.Ga=c}ch.prototype.Mc=function(a){return this.path.e()?new ch(this.source,U,this.Ga.K(a)):new ch(this.source,T(this.path),this.Ga)};ch.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function dh(a,b){this.type=vg;this.source=eh;this.path=a;this.Oe=b}dh.prototype.Mc=function(){return this.path.e()?this:new dh(T(this.path),this.Oe)};dh.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Oe+")"};function fh(a,b){this.type=zg;this.source=a;this.path=b}fh.prototype.Mc=function(){return this.path.e()?new fh(this.source,U):new fh(this.source,T(this.path))};fh.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function gh(a,b,c){this.type=sg;this.source=a;this.path=b;this.children=c}gh.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new S(a)),a.e()?null:a.value?new ch(this.source,U,a.value):new gh(this.source,U,a);y(I(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new gh(this.source,T(this.path),this.children)};gh.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var pg=0,sg=1,vg=2,zg=3;function hh(a,b,c,d){this.qe=a;this.ef=b;this.zb=c;this.Te=d;y(!d||b,"Tagged queries must be from server.")}var eh=new hh(!0,!1,null,!1),ih=new hh(!1,!0,null,!1);hh.prototype.toString=function(){return this.qe?"user":this.Te?"server(queryID="+this.zb+")":"server"};function jh(a){this.na=$f;this.yb=new Yg;this.Wc={};this.cc={};this.Fc=a}function kh(a,b,c,d,e){var f=a.yb,g=e;y(d>f.Ec,"Stacking an older write on top of newer ones");m(g)||(g=!0);f.xa.push({path:b,Ga:c,de:d,visible:g});g&&(f.T=Sg(f.T,b,c));f.Ec=d;return e?lh(a,new ch(eh,b,c)):[]}function mh(a,b,c,d){var e=a.yb;y(d>e.Ec,"Stacking an older merge on top of newer ones");e.xa.push({path:b,children:c,de:d,visible:!0});e.T=Tg(e.T,b,c);e.Ec=d;c=ag(c);return lh(a,new gh(eh,b,c))}
function nh(a,b,c){c=c||!1;b=a.yb.Ld(b);return null==b?[]:lh(a,new dh(b,c))}function oh(a,b,c){c=ag(c);return lh(a,new gh(ih,b,c))}function ph(a,b,c,d){d=Qd(a.Wc,"_"+d);if(null!=d){var e=qh(d);d=e.path;e=e.zb;b=V(d,b);c=new ch(new hh(!1,!0,e,!0),b,c);return rh(a,d,c)}return[]}function sh(a,b,c,d){if(d=Qd(a.Wc,"_"+d)){var e=qh(d);d=e.path;e=e.zb;b=V(d,b);c=ag(c);c=new gh(new hh(!1,!0,e,!0),b,c);return rh(a,d,c)}return[]}
jh.prototype.Gb=function(a,b){var c=a.path,d=null,e=!1;ig(this.na,c,function(a,b){var f=V(a,c);d=b.bb(f);e=e||null!=Ng(b);return!d});var f=this.na.get(c);f?(e=e||null!=Ng(f),d=d||f.bb(U)):(f=new Mg,this.na=this.na.set(c,f));var g;null!=d?g=!0:(g=!1,d=M,mg(this.na.subtree(c),function(a,b){var c=b.bb(U);c&&(d=d.P(a,c))}));var k=null!=Pg(f,a);if(!k&&!Mc(a.n)){var l=th(a);y(!(l in this.cc),"View does not exist, but we have a tag");var n=uh++;this.cc[l]=n;this.Wc["_"+n]=l}g=f.Gb(a,b,new bh(c,this.yb),
d,g);k||e||(f=Pg(f,a),g=g.concat(vh(this,a,f)));return g};
jh.prototype.gb=function(a,b,c){var d=a.path,e=this.na.get(d),f=[];if(e&&("default"===a.Fa()||null!=Pg(e,a))){f=e.gb(a,b,c);e.e()&&(this.na=this.na.remove(d));e=f.sg;f=f.Vf;b=-1!==Na(e,function(a){return Mc(a.n)});var g=gg(this.na,d,function(a,b){return null!=Ng(b)});if(b&&!g&&(d=this.na.subtree(d),!d.e()))for(var d=wh(d),k=0;k<d.length;++k){var l=d[k],n=l.W,l=xh(this,l);this.Fc.Qe(n,yh(this,n),l.nd,l.H)}if(!g&&0<e.length&&!c)if(b)this.Fc.Vd(a,null);else{var u=this;Ha(e,function(a){a.Fa();var b=u.cc[th(a)];
u.Fc.Vd(a,b)})}zh(this,e)}return f};jh.prototype.pa=function(a,b){var c=this.yb,d=gg(this.na,a,function(b,c){var d=V(b,a);if(d=c.bb(d))return d});return c.pa(a,d,b,!0)};function wh(a){return eg(a,function(a,c,d){if(c&&null!=Ng(c))return[Ng(c)];var e=[];c&&(e=Og(c));A(d,function(a){e=e.concat(a)});return e})}function zh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!Mc(d.n)){var d=th(d),e=a.cc[d];delete a.cc[d];delete a.Wc["_"+e]}}}
function vh(a,b,c){var d=b.path,e=yh(a,b);c=xh(a,c);b=a.Fc.Qe(b,e,c.nd,c.H);d=a.na.subtree(d);if(e)y(null==Ng(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=eg(d,function(a,b,c){if(!a.e()&&b&&null!=Ng(b))return[Jg(Ng(b))];var d=[];b&&(d=d.concat(Ja(Og(b),function(a){return a.W})));A(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Fc.Vd(c,yh(a,c));return b}
function xh(a,b){var c=b.W,d=yh(a,c);return{nd:function(){return(b.o()||M).hash()},H:function(b,f){if("ok"===b){if(f&&"object"===typeof f&&s(f,"w")){var g=t(f,"w");ea(g)&&0<=Ga(g,"no_index")&&z("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}if(d){var k=c.path;if(g=Qd(a.Wc,"_"+d))var l=qh(g),g=l.path,l=l.zb,k=V(g,k),k=new fh(new hh(!1,!0,l,!0),k),g=rh(a,g,k);else g=[]}else g=lh(a,new fh(ih,
c.path));return g}g="Unknown Error";"too_big"===b?g="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?g="Client doesn't have permission to access the desired data.":"unavailable"==b&&(g="The service is unavailable");g=Error(b+": "+g);g.code=b.toUpperCase();return a.gb(c,null,g)}}}function th(a){return a.path.toString()+"$"+a.Fa()}
function qh(a){var b=a.indexOf("$");y(-1!==b&&b<a.length-1,"Bad queryKey.");return{zb:a.substr(b+1),path:new S(a.substr(0,b))}}function yh(a,b){var c=th(b);return t(a.cc,c)}var uh=1;function rh(a,b,c){var d=a.na.get(b);y(d,"Missing sync point for query tag that we're tracking");return d.Ya(c,new bh(b,a.yb),null)}function lh(a,b){return Ah(a,b,a.na,null,new bh(U,a.yb))}
function Ah(a,b,c,d,e){if(b.path.e())return Bh(a,b,c,d,e);var f=c.get(U);null==d&&null!=f&&(d=f.bb(U));var g=[],k=I(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var n=d?d.K(k):null,k=e.u(k),g=g.concat(Ah(a,l,c,n,k));f&&(g=g.concat(f.Ya(b,e,d)));return g}function Bh(a,b,c,d,e){var f=c.get(U);null==d&&null!=f&&(d=f.bb(U));var g=[];c.children.fa(function(c,f){var n=d?d.K(c):null,u=e.u(c),x=b.Mc(c);x&&(g=g.concat(Bh(a,x,f,n,u)))});f&&(g=g.concat(f.Ya(b,e,d)));return g};function Ch(a){this.O=a;this.Ra=Zd(a);this.ba=new gf;this.Ad=1;this.S=new Me(this.O,q(this.Dd,this),q(this.Bd,this),q(this.Ie,this));this.Ag=$d(a,q(function(){return new Wd(this.Ra,this.S)},this));this.mc=new Wc;this.xe=new ff;var b=this;this.rd=new jh({Qe:function(a,d,e,f){d=[];e=b.xe.j(a.path);e.e()||(d=lh(b.rd,new ch(ih,a.path,e)),setTimeout(function(){f("ok")},0));return d},Vd:ba});Dh(this,"connected",!1);this.ga=new cf;this.Q=new If(a,q(this.S.Q,this.S),q(this.S.Ve,this.S),q(this.Fe,this));this.hd=
0;this.ye=null;this.N=new jh({Qe:function(a,d,e,f){Qe(b.S,a,e,d,function(d,e){var l=f(d,e);lf(b.ba,a.path,l)});return[]},Vd:function(a,d){var e=b.S,f=a.path.toString(),g=a.Fa();e.f("Unlisten called for "+f+" "+g);if(Se(e,f,g)&&e.ja){var k=Lc(a.n);e.f("Unlisten on "+f+" for "+g);f={p:f};d&&(f.q=k,f.t=d);e.Ba("n",f)}}})}h=Ch.prototype;h.toString=function(){return(this.O.Bb?"https://":"http://")+this.O.host};h.name=function(){return this.O.ub};
function Eh(a){a=a.xe.j(new S(".info/serverTimeOffset")).I()||0;return(new Date).getTime()+a}function Fh(a){a=a={timestamp:Eh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}h.Dd=function(a,b,c,d){this.hd++;var e=new S(a);b=this.ye?this.ye(a,b):b;a=[];d?c?(b=wd(b,function(a){return O(a)}),a=sh(this.N,e,b,d)):(b=O(b),a=ph(this.N,e,b,d)):c?(d=wd(b,function(a){return O(a)}),a=oh(this.N,e,d)):(d=O(b),a=lh(this.N,new ch(ih,e,d)));d=e;0<a.length&&(d=Gh(this,e));lf(this.ba,d,a)};
h.Bd=function(a){Dh(this,"connected",a);!1===a&&Hh(this)};h.Ie=function(a){var b=this;zb(a,function(a,d){Dh(b,d,a)})};h.Fe=function(a){Dh(this,"authenticated",a)};function Dh(a,b,c){b=new S("/.info/"+b);c=O(c);var d=a.xe;d.Od=d.Od.D(b,c);c=lh(a.rd,new ch(ih,b,c));lf(a.ba,b,c)}
h.Cb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Ig:c});var e=Fh(this);b=O(b,c);var e=Xf(b,e),f=this.Ad++,e=kh(this.N,a,e,f,!0);hf(this.ba,e);var g=this;this.S.put(a.toString(),b.I(!0),function(b,c){var e="ok"===b;e||z("set at "+a+" failed: "+b);e=nh(g.N,f,!e);lf(g.ba,a,e);Ih(d,b,c)});e=Jh(this,a);Gh(this,e);lf(this.ba,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Fh(this),f={};A(b,function(a,b){d=!1;var c=O(a);f[b]=Xf(c,e)});if(d)hb("update() called with empty data.  Don't do anything."),Ih(c,"ok");else{var g=this.Ad++,k=mh(this.N,a,f,g);hf(this.ba,k);var l=this;Ye(this.S,a.toString(),b,function(b,d){y("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");var e="ok"===b;e||z("update at "+a+" failed: "+b);var e=nh(l.N,g,!e),f=a;0<e.length&&(f=Gh(l,a));lf(l.ba,f,e);Ih(c,b,
d)});b=Jh(this,a);Gh(this,b);lf(this.ba,a,[])}};function Hh(a){a.f("onDisconnectEvents");var b=Fh(a),c=[];ef(Wf(a.ga,b),U,function(b,e){c=c.concat(lh(a.N,new ch(ih,b,e)));var f=Jh(a,b);Gh(a,f)});a.ga=new cf;lf(a.ba,U,c)}h.Ge=function(a,b){var c=this;this.S.Ge(a.toString(),function(d,e){"ok"===d&&df(c.ga,a);Ih(b,d,e)})};function Kh(a,b,c,d){var e=O(c);Ue(a.S,b.toString(),e.I(!0),function(c,g){"ok"===c&&a.ga.ec(b,e);Ih(d,c,g)})}
function Lh(a,b,c,d,e){var f=O(c,d);Ue(a.S,b.toString(),f.I(!0),function(c,d){"ok"===c&&a.ga.ec(b,f);Ih(e,c,d)})}function Mh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(hb("onDisconnect().update() called with empty data.  Don't do anything."),Ih(d,"ok")):We(a.S,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var n=O(c[l]);a.ga.ec(b.u(l),n)}Ih(d,e,f)})}function Rc(a,b,c){c=".info"===I(b.path)?a.rd.Gb(b,c):a.N.Gb(b,c);Sc(a.ba,b.path,c)}h.qb=function(){this.S.qb()};h.ic=function(){this.S.ic()};
h.Re=function(a){if("undefined"!==typeof console){a?(this.Ud||(this.Ud=new Vd(this.Ra)),a=this.Ud.get()):a=this.Ra.get();var b=Ka(Md(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Se=function(a){Ud(this.Ra,a);this.Ag.zf[a]=!0};h.f=function(a){hb("r:"+this.S.id+":",arguments)};function Ih(a,b,c){a&&Cb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Nh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new R(a,b);g.wb("value",f);c={path:b,update:c,H:d,status:null,qf:eb(),We:e,xf:0,be:function(){g.$b("value",f)},ee:null,ya:null,ed:null,fd:null,gd:null};d=a.N.pa(b,void 0)||M;c.ed=d;d=c.update(d.I());if(m(d)){Sb("transaction failed: Data returned ",d);c.status=1;e=Xc(a.mc,b);var k=e.za()||[];k.push(c);Yc(e,k);"object"===typeof d&&null!==d&&s(d,".priority")?(k=t(d,".priority"),y(Qb(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.N.pa(b)||M).L().I();e=Fh(a);d=O(d,k);e=Xf(d,e);c.fd=d;c.gd=e;c.ya=a.Ad++;c=kh(a.N,b,e,c.ya,c.We);lf(a.ba,b,c);Oh(a)}else c.be(),c.fd=null,c.gd=null,c.H&&(a=new D(c.ed,new R(a,c.path),L),c.H(null,!1,a))}function Oh(a,b){var c=b||a.mc;b||Ph(a,c);if(null!==c.za()){var d=Qh(a,c);y(0<d.length,"Sending zero length transaction queue");La(d,function(a){return 1===a.status})&&Rh(a,c.path(),d)}else c.md()&&c.U(function(b){Oh(a,b)})}
function Rh(a,b,c){for(var d=Ja(c,function(a){return a.ya}),e=a.N.pa(b,d)||M,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];y(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.xf++;var k=V(b,g.path),d=d.D(k,g.fd)}d=d.I(!0);a.S.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(nh(a.N,c[f].ya));if(c[f].H){var g=c[f].gd,k=new R(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new D(g,k,L)))}c[f].be()}Ph(a,Xc(a.mc,b));Oh(a);lf(a.ba,b,e);for(f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(z("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ee=d;Gh(a,b)}},e)}function Gh(a,b){var c=Sh(a,b),d=c.path(),c=Qh(a,c);Th(a,c,d);return d}
function Th(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ja(b,function(a){return a.ya}),g=0;g<b.length;g++){var k=b[g],l=V(c,k.path),n=!1,u;y(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)n=!0,u=k.ee,e=e.concat(nh(a.N,k.ya,!0));else if(1===k.status)if(25<=k.xf)n=!0,u="maxretry",e=e.concat(nh(a.N,k.ya,!0));else{var x=a.N.pa(k.path,f)||M;k.ed=x;var F=b[g].update(x.I());m(F)?(Sb("transaction failed: Data returned ",F),l=O(F),"object"===typeof F&&null!=F&&s(F,
".priority")||(l=l.$(x.L())),x=k.ya,F=Fh(a),F=Xf(l,F),k.fd=l,k.gd=F,k.ya=a.Ad++,Oa(f,x),e=e.concat(kh(a.N,k.path,F,k.ya,k.We)),e=e.concat(nh(a.N,x,!0))):(n=!0,u="nodata",e=e.concat(nh(a.N,k.ya,!0)))}lf(a.ba,c,e);e=[];n&&(b[g].status=3,setTimeout(b[g].be,Math.floor(0)),b[g].H&&("nodata"===u?(k=new R(a,b[g].path),d.push(q(b[g].H,null,null,!1,new D(b[g].ed,k,L)))):d.push(q(b[g].H,null,Error(u),!1,null))))}Ph(a,a.mc);for(g=0;g<d.length;g++)Cb(d[g]);Oh(a)}}
function Sh(a,b){for(var c,d=a.mc;null!==(c=I(b))&&null===d.za();)d=Xc(d,c),b=T(b);return d}function Qh(a,b){var c=[];Uh(a,b,c);c.sort(function(a,b){return a.qf-b.qf});return c}function Uh(a,b,c){var d=b.za();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){Uh(a,b,c)})}function Ph(a,b){var c=b.za();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Yc(b,0<c.length?c:null)}b.U(function(b){Ph(a,b)})}
function Jh(a,b){var c=Sh(a,b).path(),d=Xc(a.mc,b);ad(d,function(b){Vh(a,b)});Vh(a,d);$c(d,function(b){Vh(a,b)});return c}
function Vh(a,b){var c=b.za();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(y(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ee="set"):(y(1===c[g].status,"Unexpected transaction status in abort"),c[g].be(),e=e.concat(nh(a.N,c[g].ya,!0)),c[g].H&&d.push(q(c[g].H,null,Error("set"),!1,null))));-1===f?Yc(b,null):c.length=f+1;lf(a.ba,b.path(),e);for(g=0;g<d.length;g++)Cb(d[g])}};function Wh(){this.fc={}}ca(Wh);Wh.prototype.qb=function(){for(var a in this.fc)this.fc[a].qb()};Wh.prototype.interrupt=Wh.prototype.qb;Wh.prototype.ic=function(){for(var a in this.fc)this.fc[a].ic()};Wh.prototype.resume=Wh.prototype.ic;function Xh(a){var b=this;this.sc=a;this.Xd="*";Af()?this.Hc=this.pd=rf():(this.Hc=window.opener,this.pd=window);if(!b.Hc)throw"Unable to find relay frame";sf(this.pd,"message",q(this.ac,this));sf(this.pd,"message",q(this.nf,this));try{Yh(this,{a:"ready"})}catch(c){sf(this.Hc,"load",function(){Yh(b,{a:"ready"})})}sf(window,"unload",q(this.jg,this))}function Yh(a,b){b=r(b);Af()?a.Hc.doPost(b,a.Xd):a.Hc.postMessage(b,a.Xd)}
Xh.prototype.ac=function(a){var b=this,c;try{c=ta(a.data)}catch(d){}c&&"request"===c.a&&(tf(window,"message",this.ac),this.Xd=a.origin,this.sc&&setTimeout(function(){b.sc(b.Xd,c.d,function(a,c){b.Mf=!c;b.sc=void 0;Yh(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Xh.prototype.jg=function(){try{tf(this.pd,"message",this.nf)}catch(a){}this.sc&&(Yh(this,{a:"error",d:"unknown closed window"}),this.sc=void 0);try{window.close()}catch(b){}};Xh.prototype.nf=function(a){if(this.Mf&&"die"===a.data)try{window.close()}catch(b){}};var Y={Xf:function(){le=ce=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){me=!0};Y.forceWebSockets=Y.Yf;Y.xg=function(a,b){a.k.S.Pe=b};Y.setSecurityDebugCallback=Y.xg;Y.Re=function(a,b){a.k.Re(b)};Y.stats=Y.Re;Y.Se=function(a,b){a.k.Se(b)};Y.statsIncrementCounter=Y.Se;Y.hd=function(a){return a.k.hd};Y.dataUpdateCount=Y.hd;Y.ag=function(a,b){a.k.ye=b};Y.interceptServerData=Y.ag;Y.gg=function(a){new Xh(a)};Y.onPopupOpen=Y.gg;Y.vg=function(a){mf=a};Y.setAuthenticationServer=Y.vg;function Z(a,b){this.Rc=a;this.Ea=b}Z.prototype.cancel=function(a){E("Firebase.onDisconnect().cancel",0,1,arguments.length);H("Firebase.onDisconnect().cancel",1,a,!0);this.Rc.Ge(this.Ea,a||null)};Z.prototype.cancel=Z.prototype.cancel;Z.prototype.remove=function(a){E("Firebase.onDisconnect().remove",0,1,arguments.length);Zb("Firebase.onDisconnect().remove",this.Ea);H("Firebase.onDisconnect().remove",1,a,!0);Kh(this.Rc,this.Ea,null,a)};Z.prototype.remove=Z.prototype.remove;
Z.prototype.set=function(a,b){E("Firebase.onDisconnect().set",1,2,arguments.length);Zb("Firebase.onDisconnect().set",this.Ea);Rb("Firebase.onDisconnect().set",a,!1);H("Firebase.onDisconnect().set",2,b,!0);Kh(this.Rc,this.Ea,a,b)};Z.prototype.set=Z.prototype.set;
Z.prototype.Cb=function(a,b,c){E("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Zb("Firebase.onDisconnect().setWithPriority",this.Ea);Rb("Firebase.onDisconnect().setWithPriority",a,!1);Vb("Firebase.onDisconnect().setWithPriority",2,b);H("Firebase.onDisconnect().setWithPriority",3,c,!0);Lh(this.Rc,this.Ea,a,b,c)};Z.prototype.setWithPriority=Z.prototype.Cb;
Z.prototype.update=function(a,b){E("Firebase.onDisconnect().update",1,2,arguments.length);Zb("Firebase.onDisconnect().update",this.Ea);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ub("Firebase.onDisconnect().update",a);H("Firebase.onDisconnect().update",2,b,!0);Mh(this.Rc,
this.Ea,a,b)};Z.prototype.update=Z.prototype.update;var $={};$.oc=Me;$.DataConnection=$.oc;Me.prototype.zg=function(a,b){this.Ba("q",{p:a},b)};$.oc.prototype.simpleListen=$.oc.prototype.zg;Me.prototype.Sf=function(a,b){this.Ba("echo",{d:a},b)};$.oc.prototype.echo=$.oc.prototype.Sf;Me.prototype.interrupt=Me.prototype.qb;$.Df=we;$.RealTimeConnection=$.Df;we.prototype.sendRequest=we.prototype.Ba;we.prototype.close=we.prototype.close;
$.$f=function(a){var b=Me.prototype.put;Me.prototype.put=function(c,d,e,f){m(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Me.prototype.put=b}};$.hijackHash=$.$f;$.Cf=Aa;$.ConnectionTarget=$.Cf;$.Fa=function(a){return a.Fa()};$.queryIdentifier=$.Fa;$.bg=function(a){return a.k.S.ta};$.listens=$.bg;var Zh=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);y(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);y(20===c.length,"NextPushId: Length should be 20.");
return c}}();function R(a,b){var c,d,e;if(a instanceof Ch)c=a,d=b;else{E("new Firebase",1,2,arguments.length);d=rb(arguments[0]);c=d.Bg;"firebase"===d.domain&&qb(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||qb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.Bb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Aa(d.host,d.Bb,c,"ws"===d.scheme||"wss"===d.scheme);d=new S(d.Pc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Pb(c.ub))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Ob.test(e)));if(f)throw Error(G("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Wh)e=b;else if(p(b))e=Wh.Ob(),c.Id=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=Wh.Ob();f=c.toString();var g=t(e.fc,f);g||(g=new Ch(c),e.fc[f]=g);c=g}Q.call(this,c,d,Ic,!1)}ma(R,Q);var $h=R,ai=["Firebase"],bi=aa;ai[0]in bi||!bi.execScript||bi.execScript("var "+ai[0]);for(var ci;ai.length&&(ci=ai.shift());)!ai.length&&m($h)?bi[ci]=$h:bi=bi[ci]?bi[ci]:bi[ci]={};R.prototype.name=function(){z("Firebase.name() being deprecated. Please use Firebase.key() instead.");E("Firebase.name",0,0,arguments.length);return this.key()};R.prototype.name=R.prototype.name;
R.prototype.key=function(){E("Firebase.key",0,0,arguments.length);return this.path.e()?null:Uc(this.path)};R.prototype.key=R.prototype.key;R.prototype.u=function(a){E("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof S))if(null===I(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Yb("Firebase.child",b)}else Yb("Firebase.child",a);return new R(this.k,this.path.u(a))};R.prototype.child=R.prototype.u;
R.prototype.parent=function(){E("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new R(this.k,a)};R.prototype.parent=R.prototype.parent;R.prototype.root=function(){E("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};R.prototype.root=R.prototype.root;
R.prototype.toString=function(){E("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.k.toString();else{a=this.parent().toString()+"/";var b=this.key();a+=encodeURIComponent(String(b))}return a};R.prototype.toString=R.prototype.toString;R.prototype.set=function(a,b){E("Firebase.set",1,2,arguments.length);Zb("Firebase.set",this.path);Rb("Firebase.set",a,!1);H("Firebase.set",2,b,!0);this.k.Cb(this.path,a,null,b||null)};R.prototype.set=R.prototype.set;
R.prototype.update=function(a,b){E("Firebase.update",1,2,arguments.length);Zb("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ub("Firebase.update",a);H("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};R.prototype.update=R.prototype.update;
R.prototype.Cb=function(a,b,c){E("Firebase.setWithPriority",2,3,arguments.length);Zb("Firebase.setWithPriority",this.path);Rb("Firebase.setWithPriority",a,!1);Vb("Firebase.setWithPriority",2,b);H("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Cb(this.path,a,b,c||null)};R.prototype.setWithPriority=R.prototype.Cb;
R.prototype.remove=function(a){E("Firebase.remove",0,1,arguments.length);Zb("Firebase.remove",this.path);H("Firebase.remove",1,a,!0);this.set(null,a)};R.prototype.remove=R.prototype.remove;
R.prototype.transaction=function(a,b,c){E("Firebase.transaction",1,3,arguments.length);Zb("Firebase.transaction",this.path);H("Firebase.transaction",1,a,!1);H("Firebase.transaction",2,b,!0);if(m(c)&&"boolean"!=typeof c)throw Error(G("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Nh(this.k,this.path,a,b||null,c)};R.prototype.transaction=R.prototype.transaction;
R.prototype.wg=function(a,b){E("Firebase.setPriority",1,2,arguments.length);Zb("Firebase.setPriority",this.path);Vb("Firebase.setPriority",1,a);H("Firebase.setPriority",2,b,!0);this.k.Cb(this.path.u(".priority"),a,null,b)};R.prototype.setPriority=R.prototype.wg;R.prototype.push=function(a,b){E("Firebase.push",0,2,arguments.length);Zb("Firebase.push",this.path);Rb("Firebase.push",a,!0);H("Firebase.push",2,b,!0);var c=Eh(this.k),c=Zh(c),c=this.u(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
R.prototype.push=R.prototype.push;R.prototype.fb=function(){Zb("Firebase.onDisconnect",this.path);return new Z(this.k,this.path)};R.prototype.onDisconnect=R.prototype.fb;R.prototype.Q=function(a,b,c){z("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");E("Firebase.auth",1,3,arguments.length);$b("Firebase.auth",a);H("Firebase.auth",2,b,!0);H("Firebase.auth",3,b,!0);Of(this.k.Q,a,{},{remember:"none"},b,c)};R.prototype.auth=R.prototype.Q;
R.prototype.Ve=function(a){E("Firebase.unauth",0,1,arguments.length);H("Firebase.unauth",1,a,!0);Pf(this.k.Q,a)};R.prototype.unauth=R.prototype.Ve;R.prototype.re=function(){E("Firebase.getAuth",0,0,arguments.length);return this.k.Q.re()};R.prototype.getAuth=R.prototype.re;R.prototype.fg=function(a,b){E("Firebase.onAuth",1,2,arguments.length);H("Firebase.onAuth",1,a,!1);Mb("Firebase.onAuth",2,b);this.k.Q.wb("auth_status",a,b)};R.prototype.onAuth=R.prototype.fg;
R.prototype.eg=function(a,b){E("Firebase.offAuth",1,2,arguments.length);H("Firebase.offAuth",1,a,!1);Mb("Firebase.offAuth",2,b);this.k.Q.$b("auth_status",a,b)};R.prototype.offAuth=R.prototype.eg;R.prototype.Hf=function(a,b,c){E("Firebase.authWithCustomToken",2,3,arguments.length);$b("Firebase.authWithCustomToken",a);H("Firebase.authWithCustomToken",2,b,!1);J("Firebase.authWithCustomToken",3,c,!0);Of(this.k.Q,a,{},c||{},b)};R.prototype.authWithCustomToken=R.prototype.Hf;
R.prototype.If=function(a,b,c){E("Firebase.authWithOAuthPopup",2,3,arguments.length);ac("Firebase.authWithOAuthPopup",1,a);H("Firebase.authWithOAuthPopup",2,b,!1);J("Firebase.authWithOAuthPopup",3,c,!0);Tf(this.k.Q,a,c,b)};R.prototype.authWithOAuthPopup=R.prototype.If;
R.prototype.Jf=function(a,b,c){E("Firebase.authWithOAuthRedirect",2,3,arguments.length);ac("Firebase.authWithOAuthRedirect",1,a);H("Firebase.authWithOAuthRedirect",2,b,!1);J("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.Q;Rf(d);var e=[Hf],f=pf(c);"anonymous"===a||"firebase"===a?B(b,X("TRANSPORT_UNAVAILABLE")):(v.set("redirect_client_options",f.cd),Sf(d,e,"/auth/"+a,f,b))};R.prototype.authWithOAuthRedirect=R.prototype.Jf;
R.prototype.Kf=function(a,b,c,d){E("Firebase.authWithOAuthToken",3,4,arguments.length);ac("Firebase.authWithOAuthToken",1,a);H("Firebase.authWithOAuthToken",3,c,!1);J("Firebase.authWithOAuthToken",4,d,!0);p(b)?(ac("Firebase.authWithOAuthToken",2,b),Qf(this.k.Q,a+"/token",{access_token:b},d,c)):(J("Firebase.authWithOAuthToken",2,b,!1),Qf(this.k.Q,a+"/token",b,d,c))};R.prototype.authWithOAuthToken=R.prototype.Kf;
R.prototype.Gf=function(a,b){E("Firebase.authAnonymously",1,2,arguments.length);H("Firebase.authAnonymously",1,a,!1);J("Firebase.authAnonymously",2,b,!0);Qf(this.k.Q,"anonymous",{},b,a)};R.prototype.authAnonymously=R.prototype.Gf;
R.prototype.Lf=function(a,b,c){E("Firebase.authWithPassword",2,3,arguments.length);J("Firebase.authWithPassword",1,a,!1);K("Firebase.authWithPassword",a,"email");K("Firebase.authWithPassword",a,"password");H("Firebase.authAnonymously",2,b,!1);J("Firebase.authAnonymously",3,c,!0);Qf(this.k.Q,"password",a,c,b)};R.prototype.authWithPassword=R.prototype.Lf;
R.prototype.ne=function(a,b){E("Firebase.createUser",2,2,arguments.length);J("Firebase.createUser",1,a,!1);K("Firebase.createUser",a,"email");K("Firebase.createUser",a,"password");H("Firebase.createUser",2,b,!1);this.k.Q.ne(a,b)};R.prototype.createUser=R.prototype.ne;R.prototype.Me=function(a,b){E("Firebase.removeUser",2,2,arguments.length);J("Firebase.removeUser",1,a,!1);K("Firebase.removeUser",a,"email");K("Firebase.removeUser",a,"password");H("Firebase.removeUser",2,b,!1);this.k.Q.Me(a,b)};
R.prototype.removeUser=R.prototype.Me;R.prototype.je=function(a,b){E("Firebase.changePassword",2,2,arguments.length);J("Firebase.changePassword",1,a,!1);K("Firebase.changePassword",a,"email");K("Firebase.changePassword",a,"oldPassword");K("Firebase.changePassword",a,"newPassword");H("Firebase.changePassword",2,b,!1);this.k.Q.je(a,b)};R.prototype.changePassword=R.prototype.je;
R.prototype.ie=function(a,b){E("Firebase.changeEmail",2,2,arguments.length);J("Firebase.changeEmail",1,a,!1);K("Firebase.changeEmail",a,"oldEmail");K("Firebase.changeEmail",a,"newEmail");K("Firebase.changeEmail",a,"password");H("Firebase.changeEmail",2,b,!1);this.k.Q.ie(a,b)};R.prototype.changeEmail=R.prototype.ie;
R.prototype.Ne=function(a,b){E("Firebase.resetPassword",2,2,arguments.length);J("Firebase.resetPassword",1,a,!1);K("Firebase.resetPassword",a,"email");H("Firebase.resetPassword",2,b,!1);this.k.Q.Ne(a,b)};R.prototype.resetPassword=R.prototype.Ne;R.goOffline=function(){E("Firebase.goOffline",0,0,arguments.length);Wh.Ob().qb()};R.goOnline=function(){E("Firebase.goOnline",0,0,arguments.length);Wh.Ob().ic()};
function nb(a,b){y(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?lb=q(console.log,console):"object"===typeof console.log&&(lb=function(a){console.log(a)})),b&&v.set("logging_enabled",!0)):a?lb=a:(lb=null,v.remove("logging_enabled"))}R.enableLogging=nb;R.ServerValue={TIMESTAMP:{".sv":"timestamp"}};R.SDK_VERSION="2.2.0";R.INTERNAL=Y;R.Context=Wh;R.TEST_ACCESS=$;})();


/*!
 * AngularFire is the officially supported AngularJS binding for Firebase. Firebase
 * is a full backend so you don't need servers to build your Angular app. AngularFire
 * provides you with the $firebase service which allows you to easily keep your $scope
 * variables in sync with your Firebase backend.
 *
 * AngularFire 0.9.2
 * https://github.com/firebase/angularfire/
 * Date: 01/24/2015
 * License: MIT
 */
(function(exports) {
  "use strict";

// Define the `firebase` module under which all AngularFire
// services will live.
  angular.module("firebase", [])
    //todo use $window
    .value("Firebase", exports.Firebase)

    // used in conjunction with firebaseUtils.debounce function, this is the
    // amount of time we will wait for additional records before triggering
    // Angular's digest scope to dirty check and re-render DOM elements. A
    // larger number here significantly improves performance when working with
    // big data sets that are frequently changing in the DOM, but delays the
    // speed at which each record is rendered in real-time. A number less than
    // 100ms will usually be optimal.
    .value('firebaseBatchDelay', 50 /* milliseconds */);

})(window);
(function() {
  'use strict';
  /**
   * Creates and maintains a synchronized list of data. This constructor should not be
   * manually invoked. Instead, one should create a $firebase object and call $asArray
   * on it:  <code>$firebase( firebaseRef ).$asArray()</code>;
   *
   * Internally, the $firebase object depends on this class to provide 5 $$ methods, which it invokes
   * to notify the array whenever a change has been made at the server:
   *    $$added - called whenever a child_added event occurs
   *    $$updated - called whenever a child_changed event occurs
   *    $$moved - called whenever a child_moved event occurs
   *    $$removed - called whenever a child_removed event occurs
   *    $$error - called when listeners are canceled due to a security error
   *    $$process - called immediately after $$added/$$updated/$$moved/$$removed
   *                to splice/manipulate the array and invokes $$notify
   *
   * Additionally, these methods may be of interest to devs extending this class:
   *    $$notify - triggers notifications to any $watch listeners, called by $$process
   *    $$getKey - determines how to look up a record's key (returns $id by default)
   *
   * Instead of directly modifying this class, one should generally use the $extendFactory
   * method to add or change how methods behave. $extendFactory modifies the prototype of
   * the array class by returning a clone of $FirebaseArray.
   *
   * <pre><code>
   * var NewFactory = $FirebaseArray.$extendFactory({
   *    // add a new method to the prototype
   *    foo: function() { return 'bar'; },
   *
   *    // change how records are created
   *    $$added: function(snap, prevChild) {
   *       return new Widget(snap, prevChild);
   *    },
   *
   *    // change how records are updated
   *    $$updated: function(snap) {
   *      return this.$getRecord(snap.key()).update(snap);
   *    }
   * });
   * </code></pre>
   *
   * And then the new factory can be passed as an argument:
   * <code>$firebase( firebaseRef, {arrayFactory: NewFactory}).$asArray();</code>
   */
  angular.module('firebase').factory('$FirebaseArray', ["$log", "$firebaseUtils",
    function($log, $firebaseUtils) {
      /**
       * This constructor should probably never be called manually. It is used internally by
       * <code>$firebase.$asArray()</code>.
       *
       * @param $firebase
       * @param {Function} destroyFn invoking this will cancel all event listeners and stop
       *                   notifications from being delivered to $$added, $$updated, $$moved, and $$removed
       * @param readyPromise resolved when the initial data downloaded from Firebase
       * @returns {Array}
       * @constructor
       */
      function FirebaseArray($firebase, destroyFn, readyPromise) {
        var self = this;
        this._observers = [];
        this.$list = [];
        this._inst = $firebase;
        this._promise = readyPromise;
        this._destroyFn = destroyFn;

        // indexCache is a weak hashmap (a lazy list) of keys to array indices,
        // items are not guaranteed to stay up to date in this list (since the data
        // array can be manually edited without calling the $ methods) and it should
        // always be used with skepticism regarding whether it is accurate
        // (see $indexFor() below for proper usage)
        this._indexCache = {};

        // Array.isArray will not work on objects which extend the Array class.
        // So instead of extending the Array class, we just return an actual array.
        // However, it's still possible to extend FirebaseArray and have the public methods
        // appear on the array object. We do this by iterating the prototype and binding
        // any method that is not prefixed with an underscore onto the final array.
        $firebaseUtils.getPublicMethods(self, function(fn, key) {
          self.$list[key] = fn.bind(self);
        });

        return this.$list;
      }

      FirebaseArray.prototype = {
        /**
         * Create a new record with a unique ID and add it to the end of the array.
         * This should be used instead of Array.prototype.push, since those changes will not be
         * synchronized with the server.
         *
         * Any value, including a primitive, can be added in this way. Note that when the record
         * is created, the primitive value would be stored in $value (records are always objects
         * by default).
         *
         * Returns a future which is resolved when the data has successfully saved to the server.
         * The resolve callback will be passed a Firebase ref representing the new data element.
         *
         * @param data
         * @returns a promise resolved after data is added
         */
        $add: function(data) {
          this._assertNotDestroyed('$add');
          return this.$inst().$push($firebaseUtils.toJSON(data));
        },

        /**
         * Pass either an item in the array or the index of an item and it will be saved back
         * to Firebase. While the array is read-only and its structure should not be changed,
         * it is okay to modify properties on the objects it contains and then save those back
         * individually.
         *
         * Returns a future which is resolved when the data has successfully saved to the server.
         * The resolve callback will be passed a Firebase ref representing the saved element.
         * If passed an invalid index or an object which is not a record in this array,
         * the promise will be rejected.
         *
         * @param {int|object} indexOrItem
         * @returns a promise resolved after data is saved
         */
        $save: function(indexOrItem) {
          this._assertNotDestroyed('$save');
          var self = this;
          var item = self._resolveItem(indexOrItem);
          var key = self.$keyAt(item);
          if( key !== null ) {
            return self.$inst().$set(key, $firebaseUtils.toJSON(item))
              .then(function(ref) {
                self.$$notify('child_changed', key);
                return ref;
              });
          }
          else {
            return $firebaseUtils.reject('Invalid record; could determine its key: '+indexOrItem);
          }
        },

        /**
         * Pass either an existing item in this array or the index of that item and it will
         * be removed both locally and in Firebase. This should be used in place of
         * Array.prototype.splice for removing items out of the array, as calling splice
         * will not update the value on the server.
         *
         * Returns a future which is resolved when the data has successfully removed from the
         * server. The resolve callback will be passed a Firebase ref representing the deleted
         * element. If passed an invalid index or an object which is not a record in this array,
         * the promise will be rejected.
         *
         * @param {int|object} indexOrItem
         * @returns a promise which resolves after data is removed
         */
        $remove: function(indexOrItem) {
          this._assertNotDestroyed('$remove');
          var key = this.$keyAt(indexOrItem);
          if( key !== null ) {
            return this.$inst().$remove(key);
          }
          else {
            return $firebaseUtils.reject('Invalid record; could not find key: '+indexOrItem);
          }
        },

        /**
         * Given an item in this array or the index of an item in the array, this returns the
         * Firebase key (record.$id) for that record. If passed an invalid key or an item which
         * does not exist in this array, it will return null.
         *
         * @param {int|object} indexOrItem
         * @returns {null|string}
         */
        $keyAt: function(indexOrItem) {
          var item = this._resolveItem(indexOrItem);
          return this.$$getKey(item);
        },

        /**
         * The inverse of $keyAt, this method takes a Firebase key (record.$id) and returns the
         * index in the array where that record is stored. If the record is not in the array,
         * this method returns -1.
         *
         * @param {String} key
         * @returns {int} -1 if not found
         */
        $indexFor: function(key) {
          var self = this;
          var cache = self._indexCache;
          // evaluate whether our key is cached and, if so, whether it is up to date
          if( !cache.hasOwnProperty(key) || self.$keyAt(cache[key]) !== key ) {
            // update the hashmap
            var pos = self.$list.findIndex(function(rec) { return self.$$getKey(rec) === key; });
            if( pos !== -1 ) {
              cache[key] = pos;
            }
          }
          return cache.hasOwnProperty(key)? cache[key] : -1;
        },

        /**
         * The loaded method is invoked after the initial batch of data arrives from the server.
         * When this resolves, all data which existed prior to calling $asArray() is now cached
         * locally in the array.
         *
         * As a shortcut is also possible to pass resolve/reject methods directly into this
         * method just as they would be passed to .then()
         *
         * @param {Function} [resolve]
         * @param {Function} [reject]
         * @returns a promise
         */
        $loaded: function(resolve, reject) {
          var promise = this._promise;
          if( arguments.length ) {
            promise = promise.then.call(promise, resolve, reject);
          }
          return promise;
        },

        /**
         * @returns the original $firebase object used to create this object.
         */
        $inst: function() { return this._inst; },

        /**
         * Listeners passed into this method are notified whenever a new change (add, updated,
         * move, remove) is received from the server. Each invocation is sent an object
         * containing <code>{ type: 'added|updated|moved|removed', key: 'key_of_item_affected'}</code>
         *
         * Additionally, added and moved events receive a prevChild parameter, containing the
         * key of the item before this one in the array.
         *
         * This method returns a function which can be invoked to stop observing events.
         *
         * @param {Function} cb
         * @param {Object} [context]
         * @returns {Function} used to stop observing
         */
        $watch: function(cb, context) {
          var list = this._observers;
          list.push([cb, context]);
          // an off function for cancelling the listener
          return function() {
            var i = list.findIndex(function(parts) {
              return parts[0] === cb && parts[1] === context;
            });
            if( i > -1 ) {
              list.splice(i, 1);
            }
          };
        },

        /**
         * Informs $firebase to stop sending events and clears memory being used
         * by this array (delete's its local content).
         */
        $destroy: function(err) {
          if( !this._isDestroyed ) {
            this._isDestroyed = true;
            this.$list.length = 0;
            $log.debug('destroy called for FirebaseArray: '+this.$inst().$ref().toString());
            this._destroyFn(err);
          }
        },

        /**
         * Returns the record for a given Firebase key (record.$id). If the record is not found
         * then returns null.
         *
         * @param {string} key
         * @returns {Object|null} a record in this array
         */
        $getRecord: function(key) {
          var i = this.$indexFor(key);
          return i > -1? this.$list[i] : null;
        },

        /**
         * Called by $firebase to inform the array when a new item has been added at the server.
         * This method must exist on any array factory used by $firebase.
         *
         * @param {object} snap a Firebase snapshot
         * @param {string} prevChild
         * @return {object} the record to be inserted into the array
         */
        $$added: function(snap/*, prevChild*/) {
          // check to make sure record does not exist
          var i = this.$indexFor($firebaseUtils.getKey(snap));
          if( i === -1 ) {
            // parse data and create record
            var rec = snap.val();
            if( !angular.isObject(rec) ) {
              rec = { $value: rec };
            }
            rec.$id = $firebaseUtils.getKey(snap);
            rec.$priority = snap.getPriority();
            $firebaseUtils.applyDefaults(rec, this.$$defaults);

            return rec;
          }
          return false;
        },

        /**
         * Called by $firebase whenever an item is removed at the server.
         * This method does not physically remove the objects, but instead
         * returns a boolean indicating whether it should be removed (and
         * taking any other desired actions before the remove completes).
         *
         * @param {object} snap a Firebase snapshot
         * @return {boolean} true if item should be removed
         */
        $$removed: function(snap) {
          return this.$indexFor($firebaseUtils.getKey(snap)) > -1;
        },

        /**
         * Called by $firebase whenever an item is changed at the server.
         * This method should apply the changes, including changes to data
         * and to $priority, and then return true if any changes were made.
         *
         * @param {object} snap a Firebase snapshot
         * @return {boolean} true if any data changed
         */
        $$updated: function(snap) {
          var changed = false;
          var rec = this.$getRecord($firebaseUtils.getKey(snap));
          if( angular.isObject(rec) ) {
            // apply changes to the record
            changed = $firebaseUtils.updateRec(rec, snap);
            $firebaseUtils.applyDefaults(rec, this.$$defaults);
          }
          return changed;
        },

        /**
         * Called by $firebase whenever an item changes order (moves) on the server.
         * This method should set $priority to the updated value and return true if
         * the record should actually be moved. It should not actually apply the move
         * operation.
         *
         * @param {object} snap a Firebase snapshot
         * @param {string} prevChild
         */
        $$moved: function(snap/*, prevChild*/) {
          var rec = this.$getRecord($firebaseUtils.getKey(snap));
          if( angular.isObject(rec) ) {
            rec.$priority = snap.getPriority();
            return true;
          }
          return false;
        },

        /**
         * Called whenever a security error or other problem causes the listeners to become
         * invalid. This is generally an unrecoverable error.
         * @param {Object} err which will have a `code` property and possibly a `message`
         */
        $$error: function(err) {
          $log.error(err);
          this.$destroy(err);
        },

        /**
         * Returns ID for a given record
         * @param {object} rec
         * @returns {string||null}
         * @private
         */
        $$getKey: function(rec) {
          return angular.isObject(rec)? rec.$id : null;
        },

        /**
         * Handles placement of recs in the array, sending notifications,
         * and other internals. Called by the $firebase synchronization process
         * after $$added, $$updated, $$moved, and $$removed.
         *
         * @param {string} event one of child_added, child_removed, child_moved, or child_changed
         * @param {object} rec
         * @param {string} [prevChild]
         * @private
         */
        $$process: function(event, rec, prevChild) {
          var key = this.$$getKey(rec);
          var changed = false;
          var curPos;
          switch(event) {
            case 'child_added':
              curPos = this.$indexFor(key);
              break;
            case 'child_moved':
              curPos = this.$indexFor(key);
              this._spliceOut(key);
              break;
            case 'child_removed':
              // remove record from the array
              changed = this._spliceOut(key) !== null;
              break;
            case 'child_changed':
              changed = true;
              break;
            default:
              throw new Error('Invalid event type: ' + event);
          }
          if( angular.isDefined(curPos) ) {
            // add it to the array
            changed = this._addAfter(rec, prevChild) !== curPos;
          }
          if( changed ) {
            // send notifications to anybody monitoring $watch
            this.$$notify(event, key, prevChild);
          }
          return changed;
        },

        /**
         * Used to trigger notifications for listeners registered using $watch
         *
         * @param {string} event
         * @param {string} key
         * @param {string} [prevChild]
         * @private
         */
        $$notify: function(event, key, prevChild) {
          var eventData = {event: event, key: key};
          if( angular.isDefined(prevChild) ) {
            eventData.prevChild = prevChild;
          }
          angular.forEach(this._observers, function(parts) {
            parts[0].call(parts[1], eventData);
          });
        },

        /**
         * Used to insert a new record into the array at a specific position. If prevChild is
         * null, is inserted first, if prevChild is not found, it is inserted last, otherwise,
         * it goes immediately after prevChild.
         *
         * @param {object} rec
         * @param {string|null} prevChild
         * @private
         */
        _addAfter: function(rec, prevChild) {
          var i;
          if( prevChild === null ) {
            i = 0;
          }
          else {
            i = this.$indexFor(prevChild)+1;
            if( i === 0 ) { i = this.$list.length; }
          }
          this.$list.splice(i, 0, rec);
          this._indexCache[this.$$getKey(rec)] = i;
          return i;
        },

        /**
         * Removes a record from the array by calling splice. If the item is found
         * this method returns it. Otherwise, this method returns null.
         *
         * @param {string} key
         * @returns {object|null}
         * @private
         */
        _spliceOut: function(key) {
          var i = this.$indexFor(key);
          if( i > -1 ) {
            delete this._indexCache[key];
            return this.$list.splice(i, 1)[0];
          }
          return null;
        },

        /**
         * Resolves a variable which may contain an integer or an item that exists in this array.
         * Returns the item or null if it does not exist.
         *
         * @param indexOrItem
         * @returns {*}
         * @private
         */
        _resolveItem: function(indexOrItem) {
          var list = this.$list;
          if( angular.isNumber(indexOrItem) && indexOrItem >= 0 && list.length >= indexOrItem ) {
            return list[indexOrItem];
          }
          else if( angular.isObject(indexOrItem) ) {
            // it must be an item in this array; it's not sufficient for it just to have
            // a $id or even a $id that is in the array, it must be an actual record
            // the fastest way to determine this is to use $getRecord (to avoid iterating all recs)
            // and compare the two
            var key = this.$$getKey(indexOrItem);
            var rec = this.$getRecord(key);
            return rec === indexOrItem? rec : null;
          }
          return null;
        },

        /**
         * Throws an error if $destroy has been called. Should be used for any function
         * which tries to write data back to $firebase.
         * @param {string} method
         * @private
         */
        _assertNotDestroyed: function(method) {
          if( this._isDestroyed ) {
            throw new Error('Cannot call ' + method + ' method on a destroyed $FirebaseArray object');
          }
        }
      };

      /**
       * This method allows FirebaseArray to be copied into a new factory. Methods passed into this
       * function will be added onto the array's prototype. They can override existing methods as
       * well.
       *
       * In addition to passing additional methods, it is also possible to pass in a class function.
       * The prototype on that class function will be preserved, and it will inherit from
       * FirebaseArray. It's also possible to do both, passing a class to inherit and additional
       * methods to add onto the prototype.
       *
       * Once a factory is obtained by this method, it can be passed into $firebase as the
       * `arrayFactory` parameter:
       * <pre><code>
       * var MyFactory = $FirebaseArray.$extendFactory({
       *    // add a method onto the prototype that sums all items in the array
       *    getSum: function() {
       *       var ct = 0;
       *       angular.forEach(this.$list, function(rec) { ct += rec.x; });
        *      return ct;
       *    }
       * });
       *
       * // use our new factory in place of $FirebaseArray
       * var list = $firebase(ref, {arrayFactory: MyFactory}).$asArray();
       * </code></pre>
       *
       * @param {Function} [ChildClass] a child class which should inherit FirebaseArray
       * @param {Object} [methods] a list of functions to add onto the prototype
       * @returns {Function} a new factory suitable for use with $firebase
       */
      FirebaseArray.$extendFactory = function(ChildClass, methods) {
        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
          methods = ChildClass;
          ChildClass = function() { return FirebaseArray.apply(this, arguments); };
        }
        return $firebaseUtils.inherit(ChildClass, FirebaseArray, methods);
      };

      return FirebaseArray;
    }
  ]);
})();

(function() {
  'use strict';
  var FirebaseAuth;

  // Define a service which provides user authentication and management.
  angular.module('firebase').factory('$firebaseAuth', [
    '$q', '$firebaseUtils', '$log', function($q, $firebaseUtils, $log) {
      /**
       * This factory returns an object allowing you to manage the client's authentication state.
       *
       * @param {Firebase} ref A Firebase reference to authenticate.
       * @return {object} An object containing methods for authenticating clients, retrieving
       * authentication state, and managing users.
       */
      return function(ref) {
        var auth = new FirebaseAuth($q, $firebaseUtils, $log, ref);
        return auth.construct();
      };
    }
  ]);

  FirebaseAuth = function($q, $firebaseUtils, $log, ref) {
    this._q = $q;
    this._utils = $firebaseUtils;
    this._log = $log;

    if (typeof ref === 'string') {
      throw new Error('Please provide a Firebase reference instead of a URL when creating a `$firebaseAuth` object.');
    }
    this._ref = ref;
  };

  FirebaseAuth.prototype = {
    construct: function() {
      this._object = {
        // Authentication methods
        $authWithCustomToken: this.authWithCustomToken.bind(this),
        $authAnonymously: this.authAnonymously.bind(this),
        $authWithPassword: this.authWithPassword.bind(this),
        $authWithOAuthPopup: this.authWithOAuthPopup.bind(this),
        $authWithOAuthRedirect: this.authWithOAuthRedirect.bind(this),
        $authWithOAuthToken: this.authWithOAuthToken.bind(this),
        $unauth: this.unauth.bind(this),

        // Authentication state methods
        $onAuth: this.onAuth.bind(this),
        $getAuth: this.getAuth.bind(this),
        $requireAuth: this.requireAuth.bind(this),
        $waitForAuth: this.waitForAuth.bind(this),

        // User management methods
        $createUser: this.createUser.bind(this),
        $changePassword: this.changePassword.bind(this),
        $changeEmail: this.changeEmail.bind(this),
        $removeUser: this.removeUser.bind(this),
        $resetPassword: this.resetPassword.bind(this),
        $sendPasswordResetEmail: this.sendPasswordResetEmail.bind(this)
      };

      return this._object;
    },


    /********************/
    /*  Authentication  */
    /********************/

    /**
     * Authenticates the Firebase reference with a custom authentication token.
     *
     * @param {string} authToken An authentication token or a Firebase Secret. A Firebase Secret
     * should only be used for authenticating a server process and provides full read / write
     * access to the entire Firebase.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authWithCustomToken: function(authToken, options) {
      var deferred = this._q.defer();

      try {
        this._ref.authWithCustomToken(authToken, this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Authenticates the Firebase reference anonymously.
     *
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authAnonymously: function(options) {
      var deferred = this._q.defer();

      try {
        this._ref.authAnonymously(this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Authenticates the Firebase reference with an email/password user.
     *
     * @param {Object} credentials An object containing email and password attributes corresponding
     * to the user account.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authWithPassword: function(credentials, options) {
      var deferred = this._q.defer();

      try {
        this._ref.authWithPassword(credentials, this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Authenticates the Firebase reference with the OAuth popup flow.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authWithOAuthPopup: function(provider, options) {
      var deferred = this._q.defer();

      try {
        this._ref.authWithOAuthPopup(provider, this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Authenticates the Firebase reference with the OAuth redirect flow.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authWithOAuthRedirect: function(provider, options) {
      var deferred = this._q.defer();

      try {
        this._ref.authWithOAuthRedirect(provider, this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Authenticates the Firebase reference with an OAuth token.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {string|Object} credentials Either a string, such as an OAuth 2.0 access token, or an
     * Object of key / value pairs, such as a set of OAuth 1.0a credentials.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    authWithOAuthToken: function(provider, credentials, options) {
      var deferred = this._q.defer();

      try {
        this._ref.authWithOAuthToken(provider, credentials, this._utils.makeNodeResolver(deferred), options);
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Unauthenticates the Firebase reference.
     */
    unauth: function() {
      if (this.getAuth() !== null) {
        this._ref.unauth();
      }
    },


    /**************************/
    /*  Authentication State  */
    /**************************/
    /**
     * Asynchronously fires the provided callback with the current authentication data every time
     * the authentication data changes. It also fires as soon as the authentication data is
     * retrieved from the server.
     *
     * @param {function} callback A callback that fires when the client's authenticate state
     * changes. If authenticated, the callback will be passed an object containing authentication
     * data according to the provider used to authenticate. Otherwise, it will be passed null.
     * @param {string} [context] If provided, this object will be used as this when calling your
     * callback.
     * @return {function} A function which can be used to deregister the provided callback.
     */
    onAuth: function(callback, context) {
      var self = this;

      var fn = this._utils.debounce(callback, context, 0);
      this._ref.onAuth(fn);

      // Return a method to detach the `onAuth()` callback.
      return function() {
        self._ref.offAuth(fn);
      };
    },

    /**
     * Synchronously retrieves the current authentication data.
     *
     * @return {Object} The client's authentication data.
     */
    getAuth: function() {
      return this._ref.getAuth();
    },

    /**
     * Helper onAuth() callback method for the two router-related methods.
     *
     * @param {boolean} rejectIfAuthDataIsNull Determines if the returned promise should be
     * resolved or rejected upon an unauthenticated client.
     * @return {Promise<Object>} A promise fulfilled with the client's authentication state or
     * rejected if the client is unauthenticated and rejectIfAuthDataIsNull is true.
     */
    _routerMethodOnAuthPromise: function(rejectIfAuthDataIsNull) {
      var ref = this._ref;

      return this._utils.promise(function(resolve,reject){
        function callback(authData) {
          // Turn off this onAuth() callback since we just needed to get the authentication data once.
          ref.offAuth(callback);

          if (authData !== null) {
            resolve(authData);
            return;
          }
          else if (rejectIfAuthDataIsNull) {
            reject("AUTH_REQUIRED");
            return;
          }
          else {
            resolve(null);
            return;
          }
        }

        ref.onAuth(callback);
      });
    },

    /**
     * Utility method which can be used in a route's resolve() method to require that a route has
     * a logged in client.
     *
     * @returns {Promise<Object>} A promise fulfilled with the client's current authentication
     * state or rejected if the client is not authenticated.
     */
    requireAuth: function() {
      return this._routerMethodOnAuthPromise(true);
    },

    /**
     * Utility method which can be used in a route's resolve() method to grab the current
     * authentication data.
     *
     * @returns {Promise<Object|null>} A promise fulfilled with the client's current authentication
     * state, which will be null if the client is not authenticated.
     */
    waitForAuth: function() {
      return this._routerMethodOnAuthPromise(false);
    },


    /*********************/
    /*  User Management  */
    /*********************/
    /**
     * Creates a new email/password user. Note that this function only creates the user, if you
     * wish to log in as the newly created user, call $authWithPassword() after the promise for
     * this method has been resolved.
     *
     * @param {Object|string} emailOrCredentials The email of the user to create or an object
     * containing the email and password of the user to create.
     * @param {string} [password] The password for the user to create.
     * @return {Promise<Object>} A promise fulfilled with the user object, which contains the
     * uid of the created user.
     */
    createUser: function(emailOrCredentials, password) {
      var deferred = this._q.defer();

      // Allow this method to take a single credentials argument or two separate string arguments
      var credentials = emailOrCredentials;
      if (typeof emailOrCredentials === "string") {
        this._log.warn("Passing in credentials to $createUser() as individual arguments has been deprecated in favor of a single credentials argument. See the AngularFire API reference for details.");

        credentials = {
          email: emailOrCredentials,
          password: password
        };
      }

      try {
        this._ref.createUser(credentials, this._utils.makeNodeResolver(deferred));
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Changes the password for an email/password user.
     *
     * @param {Object|string} emailOrCredentials The email of the user whose password is to change
     * or an object containing the email, old password, and new password of the user whose password
     * is to change.
     * @param {string} [oldPassword] The current password for the user.
     * @param {string} [newPassword] The new password for the user.
     * @return {Promise<>} An empty promise fulfilled once the password change is complete.
     */
    changePassword: function(emailOrCredentials, oldPassword, newPassword) {
      var deferred = this._q.defer();

      // Allow this method to take a single credentials argument or three separate string arguments
      var credentials = emailOrCredentials;
      if (typeof emailOrCredentials === "string") {
        this._log.warn("Passing in credentials to $changePassword() as individual arguments has been deprecated in favor of a single credentials argument. See the AngularFire API reference for details.");

        credentials = {
          email: emailOrCredentials,
          oldPassword: oldPassword,
          newPassword: newPassword
        };
      }

      try {
        this._ref.changePassword(credentials, this._utils.makeNodeResolver(deferred));
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Changes the email for an email/password user.
     *
     * @param {Object} credentials An object containing the old email, new email, and password of
     * the user whose email is to change.
     * @return {Promise<>} An empty promise fulfilled once the email change is complete.
     */
    changeEmail: function(credentials) {
      if (typeof this._ref.changeEmail !== 'function') {
        throw new Error('$firebaseAuth.$changeEmail() requires Firebase version 2.1.0 or greater.');
      }

      var deferred = this._q.defer();

      try {
        this._ref.changeEmail(credentials, this._utils.makeNodeResolver(deferred));
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Removes an email/password user.
     *
     * @param {Object|string} emailOrCredentials The email of the user to remove or an object
     * containing the email and password of the user to remove.
     * @param {string} [password] The password of the user to remove.
     * @return {Promise<>} An empty promise fulfilled once the user is removed.
     */
    removeUser: function(emailOrCredentials, password) {
      var deferred = this._q.defer();

      // Allow this method to take a single credentials argument or two separate string arguments
      var credentials = emailOrCredentials;
      if (typeof emailOrCredentials === "string") {
        this._log.warn("Passing in credentials to $removeUser() as individual arguments has been deprecated in favor of a single credentials argument. See the AngularFire API reference for details.");

        credentials = {
          email: emailOrCredentials,
          password: password
        };
      }

      try {
        this._ref.removeUser(credentials, this._utils.makeNodeResolver(deferred));
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    },

    /**
     * Sends a password reset email to an email/password user. [DEPRECATED]
     *
     * @deprecated
     * @param {Object|string} emailOrCredentials The email of the user to send a reset password
     * email to or an object containing the email of the user to send a reset password email to.
     * @return {Promise<>} An empty promise fulfilled once the reset password email is sent.
     */
    sendPasswordResetEmail: function(emailOrCredentials) {
      this._log.warn("$sendPasswordResetEmail() has been deprecated in favor of the equivalent $resetPassword().");

      try {
        return this.resetPassword(emailOrCredentials);
      } catch (error) {
        return this._q(function(resolve, reject) {
          return reject(error);
        });
      }
    },

    /**
     * Sends a password reset email to an email/password user.
     *
     * @param {Object|string} emailOrCredentials The email of the user to send a reset password
     * email to or an object containing the email of the user to send a reset password email to.
     * @return {Promise<>} An empty promise fulfilled once the reset password email is sent.
     */
    resetPassword: function(emailOrCredentials) {
      var deferred = this._q.defer();

      // Allow this method to take a single credentials argument or a single string argument
      var credentials = emailOrCredentials;
      if (typeof emailOrCredentials === "string") {
        this._log.warn("Passing in credentials to $resetPassword() as individual arguments has been deprecated in favor of a single credentials argument. See the AngularFire API reference for details.");

        credentials = {
          email: emailOrCredentials
        };
      }

      try {
        this._ref.resetPassword(credentials, this._utils.makeNodeResolver(deferred));
      } catch (error) {
        deferred.reject(error);
      }

      return deferred.promise;
    }
  };
})();

(function() {
  'use strict';
  /**
   * Creates and maintains a synchronized object. This constructor should not be
   * manually invoked. Instead, one should create a $firebase object and call $asObject
   * on it:  <code>$firebase( firebaseRef ).$asObject()</code>;
   *
   * Internally, the $firebase object depends on this class to provide 2 methods, which it invokes
   * to notify the object whenever a change has been made at the server:
   *    $$updated - called whenever a change occurs (a value event from Firebase)
   *    $$error - called when listeners are canceled due to a security error
   *
   * Instead of directly modifying this class, one should generally use the $extendFactory
   * method to add or change how methods behave:
   *
   * <pre><code>
   * var NewFactory = $FirebaseObject.$extendFactory({
   *    // add a new method to the prototype
   *    foo: function() { return 'bar'; },
   * });
   * </code></pre>
   *
   * And then the new factory can be used by passing it as an argument:
   * <code>$firebase( firebaseRef, {objectFactory: NewFactory}).$asObject();</code>
   */
  angular.module('firebase').factory('$FirebaseObject', [
    '$parse', '$firebaseUtils', '$log', '$interval',
    function($parse, $firebaseUtils, $log) {
      /**
       * This constructor should probably never be called manually. It is used internally by
       * <code>$firebase.$asObject()</code>.
       *
       * @param $firebase
       * @param {Function} destroyFn invoking this will cancel all event listeners and stop
       *                   notifications from being delivered to $$updated and $$error
       * @param readyPromise resolved when the initial data downloaded from Firebase
       * @returns {FirebaseObject}
       * @constructor
       */
      function FirebaseObject($firebase, destroyFn, readyPromise) {
        // These are private config props and functions used internally
        // they are collected here to reduce clutter in console.log and forEach
        this.$$conf = {
          promise: readyPromise,
          inst: $firebase,
          binding: new ThreeWayBinding(this),
          destroyFn: destroyFn,
          listeners: []
        };

        // this bit of magic makes $$conf non-enumerable and non-configurable
        // and non-writable (its properties are still writable but the ref cannot be replaced)
        // we declare it above so the IDE can relax
        Object.defineProperty(this, '$$conf', {
          value: this.$$conf
        });

        this.$id = $firebaseUtils.getKey($firebase.$ref().ref());
        this.$priority = null;

        $firebaseUtils.applyDefaults(this, this.$$defaults);
      }

      FirebaseObject.prototype = {
        /**
         * Saves all data on the FirebaseObject back to Firebase.
         * @returns a promise which will resolve after the save is completed.
         */
        $save: function () {
          var self = this;
          return self.$inst().$set($firebaseUtils.toJSON(self))
            .then(function(ref) {
              self.$$notify();
              return ref;
            });
        },

        /**
         * Removes all keys from the FirebaseObject and also removes
         * the remote data from the server.
         *
         * @returns a promise which will resolve after the op completes
         */
        $remove: function() {
          var self = this;
          $firebaseUtils.trimKeys(this, {});
          this.$value = null;
          return self.$inst().$remove().then(function(ref) {
            self.$$notify();
            return ref;
          });
        },

        /**
         * The loaded method is invoked after the initial batch of data arrives from the server.
         * When this resolves, all data which existed prior to calling $asObject() is now cached
         * locally in the object.
         *
         * As a shortcut is also possible to pass resolve/reject methods directly into this
         * method just as they would be passed to .then()
         *
         * @param {Function} resolve
         * @param {Function} reject
         * @returns a promise which resolves after initial data is downloaded from Firebase
         */
        $loaded: function(resolve, reject) {
          var promise = this.$$conf.promise;
          if (arguments.length) {
            // allow this method to be called just like .then
            // by passing any arguments on to .then
            promise = promise.then.call(promise, resolve, reject);
          }
          return promise;
        },

        /**
         * @returns the original $firebase object used to create this object.
         */
        $inst: function () {
          return this.$$conf.inst;
        },

        /**
         * Creates a 3-way data sync between this object, the Firebase server, and a
         * scope variable. This means that any changes made to the scope variable are
         * pushed to Firebase, and vice versa.
         *
         * If scope emits a $destroy event, the binding is automatically severed. Otherwise,
         * it is possible to unbind the scope variable by using the `unbind` function
         * passed into the resolve method.
         *
         * Can only be bound to one scope variable at a time. If a second is attempted,
         * the promise will be rejected with an error.
         *
         * @param {object} scope
         * @param {string} varName
         * @returns a promise which resolves to an unbind method after data is set in scope
         */
        $bindTo: function (scope, varName) {
          var self = this;
          return self.$loaded().then(function () {
            return self.$$conf.binding.bindTo(scope, varName);
          });
        },

        /**
         * Listeners passed into this method are notified whenever a new change is received
         * from the server. Each invocation is sent an object containing
         * <code>{ type: 'updated', key: 'my_firebase_id' }</code>
         *
         * This method returns an unbind function that can be used to detach the listener.
         *
         * @param {Function} cb
         * @param {Object} [context]
         * @returns {Function} invoke to stop observing events
         */
        $watch: function (cb, context) {
          var list = this.$$conf.listeners;
          list.push([cb, context]);
          // an off function for cancelling the listener
          return function () {
            var i = list.findIndex(function (parts) {
              return parts[0] === cb && parts[1] === context;
            });
            if (i > -1) {
              list.splice(i, 1);
            }
          };
        },

        /**
         * Informs $firebase to stop sending events and clears memory being used
         * by this object (delete's its local content).
         */
        $destroy: function (err) {
          var self = this;
          if (!self.$isDestroyed) {
            self.$isDestroyed = true;
            self.$$conf.binding.destroy();
            $firebaseUtils.each(self, function (v, k) {
              delete self[k];
            });
            self.$$conf.destroyFn(err);
          }
        },

        /**
         * Called by $firebase whenever an item is changed at the server.
         * This method must exist on any objectFactory passed into $firebase.
         *
         * It should return true if any changes were made, otherwise `$$notify` will
         * not be invoked.
         *
         * @param {object} snap a Firebase snapshot
         * @return {boolean} true if any changes were made.
         */
        $$updated: function (snap) {
          // applies new data to this object
          var changed = $firebaseUtils.updateRec(this, snap);
          // applies any defaults set using $$defaults
          $firebaseUtils.applyDefaults(this, this.$$defaults);
          // returning true here causes $$notify to be triggered
          return changed;
        },

        /**
         * Called whenever a security error or other problem causes the listeners to become
         * invalid. This is generally an unrecoverable error.
         * @param {Object} err which will have a `code` property and possibly a `message`
         */
        $$error: function (err) {
          // prints an error to the console (via Angular's logger)
          $log.error(err);
          // frees memory and cancels any remaining listeners
          this.$destroy(err);
        },

        /**
         * Called internally by $bindTo when data is changed in $scope.
         * Should apply updates to this record but should not call
         * notify().
         */
        $$scopeUpdated: function(newData) {
          // we use a one-directional loop to avoid feedback with 3-way bindings
          // since set() is applied locally anyway, this is still performant
          return this.$inst().$set($firebaseUtils.toJSON(newData));
        },

        /**
         * Updates any bound scope variables and
         * notifies listeners registered with $watch
         */
        $$notify: function() {
          var self = this, list = this.$$conf.listeners.slice();
          // be sure to do this after setting up data and init state
          angular.forEach(list, function (parts) {
            parts[0].call(parts[1], {event: 'value', key: self.$id});
          });
        },

        /**
         * Overrides how Angular.forEach iterates records on this object so that only
         * fields stored in Firebase are part of the iteration. To include meta fields like
         * $id and $priority in the iteration, utilize for(key in obj) instead.
         */
        forEach: function(iterator, context) {
          return $firebaseUtils.each(this, iterator, context);
        }
      };

      /**
       * This method allows FirebaseObject to be copied into a new factory. Methods passed into this
       * function will be added onto the object's prototype. They can override existing methods as
       * well.
       *
       * In addition to passing additional methods, it is also possible to pass in a class function.
       * The prototype on that class function will be preserved, and it will inherit from
       * FirebaseObject. It's also possible to do both, passing a class to inherit and additional
       * methods to add onto the prototype.
       *
       * Once a factory is obtained by this method, it can be passed into $firebase as the
       * `objectFactory` parameter:
       *
       * <pre><code>
       * var MyFactory = $FirebaseObject.$extendFactory({
       *    // add a method onto the prototype that prints a greeting
       *    getGreeting: function() {
       *       return 'Hello ' + this.first_name + ' ' + this.last_name + '!';
       *    }
       * });
       *
       * // use our new factory in place of $FirebaseObject
       * var obj = $firebase(ref, {objectFactory: MyFactory}).$asObject();
       * </code></pre>
       *
       * @param {Function} [ChildClass] a child class which should inherit FirebaseObject
       * @param {Object} [methods] a list of functions to add onto the prototype
       * @returns {Function} a new factory suitable for use with $firebase
       */
      FirebaseObject.$extendFactory = function(ChildClass, methods) {
        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
          methods = ChildClass;
          ChildClass = function() { FirebaseObject.apply(this, arguments); };
        }
        return $firebaseUtils.inherit(ChildClass, FirebaseObject, methods);
      };

      /**
       * Creates a three-way data binding on a scope variable.
       *
       * @param {FirebaseObject} rec
       * @returns {*}
       * @constructor
       */
      function ThreeWayBinding(rec) {
        this.subs = [];
        this.scope = null;
        this.key = null;
        this.rec = rec;
      }

      ThreeWayBinding.prototype = {
        assertNotBound: function(varName) {
          if( this.scope ) {
            var msg = 'Cannot bind to ' + varName + ' because this instance is already bound to ' +
              this.key + '; one binding per instance ' +
              '(call unbind method or create another $firebase instance)';
            $log.error(msg);
            return $firebaseUtils.reject(msg);
          }
        },

        bindTo: function(scope, varName) {
          function _bind(self) {
            var sending = false;
            var parsed = $parse(varName);
            var rec = self.rec;
            self.scope = scope;
            self.varName = varName;

            function equals(rec) {
              var parsed = getScope();
              var newData = $firebaseUtils.scopeData(rec);
              return angular.equals(parsed, newData) &&
                parsed.$priority === rec.$priority &&
                parsed.$value === rec.$value;
            }

            function getScope() {
              return $firebaseUtils.scopeData(parsed(scope));
            }

            function setScope(rec) {
              parsed.assign(scope, $firebaseUtils.scopeData(rec));
            }

            var send = $firebaseUtils.debounce(function() {
              rec.$$scopeUpdated(getScope())
                ['finally'](function() { sending = false; });
            }, 50, 500);

            var scopeUpdated = function() {
              if( !equals(rec) ) {
                sending = true;
                send();
              }
            };

            var recUpdated = function() {
              if( !sending && !equals(rec) ) {
                setScope(rec);
              }
            };

            // $watch will not check any vars prefixed with $, so we
            // manually check $priority and $value using this method
            function checkMetaVars() {
              var dat = parsed(scope);
              if( dat.$value !== rec.$value || dat.$priority !== rec.$priority ) {
                scopeUpdated();
              }
            }

            self.subs.push(scope.$watch(checkMetaVars));

            setScope(rec);
            self.subs.push(scope.$on('$destroy', self.unbind.bind(self)));

            // monitor scope for any changes
            self.subs.push(scope.$watch(varName, scopeUpdated, true));

            // monitor the object for changes
            self.subs.push(rec.$watch(recUpdated));

            return self.unbind.bind(self);
          }

          return this.assertNotBound(varName) || _bind(this);
        },

        unbind: function() {
          if( this.scope ) {
            angular.forEach(this.subs, function(unbind) {
              unbind();
            });
            this.subs = [];
            this.scope = null;
            this.key = null;
          }
        },

        destroy: function() {
          this.unbind();
          this.rec = null;
        }
      };

      return FirebaseObject;
    }
  ]);
})();

(function() {
  'use strict';

  angular.module("firebase")

    // The factory returns an object containing the value of the data at
    // the Firebase location provided, as well as several methods. It
    // takes one or two arguments:
    //
    //   * `ref`: A Firebase reference. Queries or limits may be applied.
    //   * `config`: An object containing any of the advanced config options explained in API docs
    .factory("$firebase", [ "$firebaseUtils", "$firebaseConfig",
      function ($firebaseUtils, $firebaseConfig) {
        function AngularFire(ref, config) {
          // make the new keyword optional
          if (!(this instanceof AngularFire)) {
            return new AngularFire(ref, config);
          }
          this._config = $firebaseConfig(config);
          this._ref = ref;
          this._arraySync = null;
          this._objectSync = null;
          this._assertValidConfig(ref, this._config);
        }

        AngularFire.prototype = {
          $ref: function () {
            return this._ref;
          },

          $push: function (data) {
            var def = $firebaseUtils.defer();
            var ref = this._ref.ref().push();
            var done = this._handle(def, ref);
            if (arguments.length > 0) {
              ref.set(data, done);
            }
            else {
              done();
            }
            return def.promise;
          },

          $set: function (key, data) {
            var ref = this._ref;
            var def = $firebaseUtils.defer();
            if (arguments.length > 1) {
              ref = ref.ref().child(key);
            }
            else {
              data = key;
            }
            if( angular.isFunction(ref.set) || !angular.isObject(data) ) {
              // this is not a query, just do a flat set
              ref.ref().set(data, this._handle(def, ref));
            }
            else {
              var dataCopy = angular.extend({}, data);
              // this is a query, so we will replace all the elements
              // of this query with the value provided, but not blow away
              // the entire Firebase path
              ref.once('value', function(snap) {
                snap.forEach(function(ss) {
                  if( !dataCopy.hasOwnProperty($firebaseUtils.getKey(ss)) ) {
                    dataCopy[$firebaseUtils.getKey(ss)] = null;
                  }
                });
                ref.ref().update(dataCopy, this._handle(def, ref));
              }, this);
            }
            return def.promise;
          },

          $remove: function (key) {
            var ref = this._ref, self = this;
            var def = $firebaseUtils.defer();
            if (arguments.length > 0) {
              ref = ref.ref().child(key);
            }
            if( angular.isFunction(ref.remove) ) {
              // self is not a query, just do a flat remove
              ref.remove(self._handle(def, ref));
            }
            else {
              // self is a query so let's only remove the
              // items in the query and not the entire path
              ref.once('value', function(snap) {
                var promises = [];
                snap.forEach(function(ss) {
                  var d = $firebaseUtils.defer();
                  promises.push(d.promise);
                  ss.ref().remove(self._handle(d));
                }, self);
                $firebaseUtils.allPromises(promises)
                  .then(function() {
                    def.resolve(ref);
                  },
                  function(err){
                    def.reject(err);
                  }
                );
              });
            }
            return def.promise;
          },

          $update: function (key, data) {
            var ref = this._ref.ref();
            var def = $firebaseUtils.defer();
            if (arguments.length > 1) {
              ref = ref.child(key);
            }
            else {
              data = key;
            }
            ref.update(data, this._handle(def, ref));
            return def.promise;
          },

          $transaction: function (key, valueFn, applyLocally) {
            var ref = this._ref.ref();
            if( angular.isFunction(key) ) {
              applyLocally = valueFn;
              valueFn = key;
            }
            else {
              ref = ref.child(key);
            }
            applyLocally = !!applyLocally;

            return new $firebaseUtils.promise(function(resolve,reject){
              ref.transaction(valueFn, function(err, committed, snap) {
                if( err ) {
                  reject(err);
                  return;
                }
                else {
                  resolve(committed? snap : null);
                  return;
                }
              }, applyLocally);
            });
          },

          $asObject: function () {
            if (!this._objectSync || this._objectSync.isDestroyed) {
              this._objectSync = new SyncObject(this, this._config.objectFactory);
            }
            return this._objectSync.getObject();
          },

          $asArray: function () {
            if (!this._arraySync || this._arraySync.isDestroyed) {
              this._arraySync = new SyncArray(this, this._config.arrayFactory);
            }
            return this._arraySync.getArray();
          },

          _handle: function (def) {
            var args = Array.prototype.slice.call(arguments, 1);
            return function (err) {
              if (err) {
                def.reject(err);
              }
              else {
                def.resolve.apply(def, args);
              }
            };
          },

          _assertValidConfig: function (ref, cnf) {
            $firebaseUtils.assertValidRef(ref, 'Must pass a valid Firebase reference ' +
              'to $firebase (not a string or URL)');
            if (!angular.isFunction(cnf.arrayFactory)) {
              throw new Error('config.arrayFactory must be a valid function');
            }
            if (!angular.isFunction(cnf.objectFactory)) {
              throw new Error('config.objectFactory must be a valid function');
            }
          }
        };

        function SyncArray($inst, ArrayFactory) {
          function destroy(err) {
            self.isDestroyed = true;
            var ref = $inst.$ref();
            ref.off('child_added', created);
            ref.off('child_moved', moved);
            ref.off('child_changed', updated);
            ref.off('child_removed', removed);
            array = null;
            resolve(err||'destroyed');
          }

          function init() {
            var ref = $inst.$ref();

            // listen for changes at the Firebase instance
            ref.on('child_added', created, error);
            ref.on('child_moved', moved, error);
            ref.on('child_changed', updated, error);
            ref.on('child_removed', removed, error);

            // determine when initial load is completed
            ref.once('value', function() { resolve(null); }, resolve);
          }

          // call resolve(), do not call this directly
          function _resolveFn(err) {
            if( def ) {
              if( err ) { def.reject(err); }
              else { def.resolve(array); }
              def = null;
            }
          }

          var def     = $firebaseUtils.defer();
          var array   = new ArrayFactory($inst, destroy, def.promise);
          var batch   = $firebaseUtils.batch();
          var created = batch(function(snap, prevChild) {
            var rec = array.$$added(snap, prevChild);
            if( rec ) {
              array.$$process('child_added', rec, prevChild);
            }
          });
          var updated = batch(function(snap) {
            var rec = array.$getRecord($firebaseUtils.getKey(snap));
            if( rec ) {
              var changed = array.$$updated(snap);
              if( changed ) {
                array.$$process('child_changed', rec);
              }
            }
          });
          var moved   = batch(function(snap, prevChild) {
            var rec = array.$getRecord($firebaseUtils.getKey(snap));
            if( rec ) {
              var confirmed = array.$$moved(snap, prevChild);
              if( confirmed ) {
                array.$$process('child_moved', rec, prevChild);
              }
            }
          });
          var removed = batch(function(snap) {
            var rec = array.$getRecord($firebaseUtils.getKey(snap));
            if( rec ) {
              var confirmed = array.$$removed(snap);
              if( confirmed ) {
                array.$$process('child_removed', rec);
              }
            }
          });

          assertArray(array);

          var error   = batch(array.$$error, array);
          var resolve = batch(_resolveFn);

          var self = this;
          self.isDestroyed = false;
          self.getArray = function() { return array; };

          init();
        }

        function assertArray(arr) {
          if( !angular.isArray(arr) ) {
            var type = Object.prototype.toString.call(arr);
            throw new Error('arrayFactory must return a valid array that passes ' +
            'angular.isArray and Array.isArray, but received "' + type + '"');
          }
        }

        function SyncObject($inst, ObjectFactory) {
          function destroy(err) {
            self.isDestroyed = true;
            ref.off('value', applyUpdate);
            obj = null;
            resolve(err||'destroyed');
          }

          function init() {
            ref.on('value', applyUpdate, error);
            ref.once('value', function() { resolve(null); }, resolve);
          }

          // call resolve(); do not call this directly
          function _resolveFn(err) {
            if( def ) {
              if( err ) { def.reject(err); }
              else { def.resolve(obj); }
              def = null;
            }
          }

          var def = $firebaseUtils.defer();
          var obj = new ObjectFactory($inst, destroy, def.promise);
          var ref = $inst.$ref();
          var batch = $firebaseUtils.batch();
          var applyUpdate = batch(function(snap) {
            var changed = obj.$$updated(snap);
            if( changed ) {
              // notifies $watch listeners and
              // updates $scope if bound to a variable
              obj.$$notify();
            }
          });
          var error = batch(obj.$$error, obj);
          var resolve = batch(_resolveFn);

          var self = this;
          self.isDestroyed = false;
          self.getObject = function() { return obj; };
          init();
        }

        return AngularFire;
      }
    ]);
})();

'use strict';

// Shim Array.indexOf for IE compatibility.
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    if (this === undefined || this === null) {
      throw new TypeError("'this' is null or not defined");
    }
    // Hack to convert object.length to a UInt32
    // jshint -W016
    var length = this.length >>> 0;
    fromIndex = +fromIndex || 0;
    // jshint +W016

    if (Math.abs(fromIndex) === Infinity) {
      fromIndex = 0;
    }

    if (fromIndex < 0) {
      fromIndex += length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    for (;fromIndex < length; fromIndex++) {
      if (this[fromIndex] === searchElement) {
        return fromIndex;
      }
    }

    return -1;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(this instanceof fNOP && oThis
            ? this
            : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        if (i in list) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
      }
      return -1;
    }
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
if (typeof Object.create != 'function') {
  (function () {
    var F = function () {};
    Object.create = function (o) {
      if (arguments.length > 1) {
        throw new Error('Second argument not supported');
      }
      if (o === null) {
        throw new Error('Cannot set a null [[Prototype]]');
      }
      if (typeof o != 'object') {
        throw new TypeError('Argument must be an object');
      }
      F.prototype = o;
      return new F();
    };
  })();
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

// http://ejohn.org/blog/objectgetprototypeof/
if ( typeof Object.getPrototypeOf !== "function" ) {
  if ( typeof "test".__proto__ === "object" ) {
    Object.getPrototypeOf = function(object){
      return object.__proto__;
    };
  } else {
    Object.getPrototypeOf = function(object){
      // May break if the constructor has been tampered with
      return object.constructor.prototype;
    };
  }
}

(function() {
  'use strict';

  angular.module('firebase')
    .factory('$firebaseConfig', ["$FirebaseArray", "$FirebaseObject", "$injector",
      function($FirebaseArray, $FirebaseObject, $injector) {
        return function(configOpts) {
          // make a copy we can modify
          var opts = angular.extend({}, configOpts);
          // look up factories if passed as string names
          if( typeof opts.objectFactory === 'string' ) {
            opts.objectFactory = $injector.get(opts.objectFactory);
          }
          if( typeof opts.arrayFactory === 'string' ) {
            opts.arrayFactory = $injector.get(opts.arrayFactory);
          }
          // extend defaults and return
          return angular.extend({
            arrayFactory: $FirebaseArray,
            objectFactory: $FirebaseObject
          }, opts);
        };
      }
    ])

    .factory('$firebaseUtils', ["$q", "$timeout", "firebaseBatchDelay",
      function($q, $timeout, firebaseBatchDelay) {

        // ES6 style promises polyfill for angular 1.2.x
        // Copied from angular 1.3.x implementation: https://github.com/angular/angular.js/blob/v1.3.5/src/ng/q.js#L539
        function Q(resolver) {
          if (!angular.isFunction(resolver)) {
            throw new Error('missing resolver function');
          }

          var deferred = $q.defer();

          function resolveFn(value) {
            deferred.resolve(value);
          }

          function rejectFn(reason) {
            deferred.reject(reason);
          }

          resolver(resolveFn, rejectFn);

          return deferred.promise;
        }

        var utils = {
          /**
           * Returns a function which, each time it is invoked, will pause for `wait`
           * milliseconds before invoking the original `fn` instance. If another
           * request is received in that time, it resets `wait` up until `maxWait` is
           * reached.
           *
           * Unlike a debounce function, once wait is received, all items that have been
           * queued will be invoked (not just once per execution). It is acceptable to use 0,
           * which means to batch all synchronously queued items.
           *
           * The batch function actually returns a wrap function that should be called on each
           * method that is to be batched.
           *
           * <pre><code>
           *   var total = 0;
           *   var batchWrapper = batch(10, 100);
           *   var fn1 = batchWrapper(function(x) { return total += x; });
           *   var fn2 = batchWrapper(function() { console.log(total); });
           *   fn1(10);
           *   fn2();
           *   fn1(10);
           *   fn2();
           *   console.log(total); // 0 (nothing invoked yet)
           *   // after 10ms will log "10" and then "20"
           * </code></pre>
           *
           * @param {int} wait number of milliseconds to pause before sending out after each invocation
           * @param {int} maxWait max milliseconds to wait before sending out, defaults to wait * 10 or 100
           * @returns {Function}
           */
          batch: function(wait, maxWait) {
            wait = typeof('wait') === 'number'? wait : firebaseBatchDelay;
            if( !maxWait ) { maxWait = wait*10 || 100; }
            var queue = [];
            var start;
            var cancelTimer;
            var runScheduledForNextTick;

            // returns `fn` wrapped in a function that queues up each call event to be
            // invoked later inside fo runNow()
            function createBatchFn(fn, context) {
               if( typeof(fn) !== 'function' ) {
                 throw new Error('Must provide a function to be batched. Got '+fn);
               }
               return function() {
                 var args = Array.prototype.slice.call(arguments, 0);
                 queue.push([fn, context, args]);
                 resetTimer();
               };
            }

            // clears the current wait timer and creates a new one
            // however, if maxWait is exceeded, calls runNow() on the next tick.
            function resetTimer() {
              if( cancelTimer ) {
                cancelTimer();
                cancelTimer = null;
              }
              if( start && Date.now() - start > maxWait ) {
                if(!runScheduledForNextTick){
                  runScheduledForNextTick = true;
                  utils.compile(runNow);
                }
              }
              else {
                if( !start ) { start = Date.now(); }
                cancelTimer = utils.wait(runNow, wait);
              }
            }

            // Clears the queue and invokes all of the functions awaiting notification
            function runNow() {
              cancelTimer = null;
              start = null;
              runScheduledForNextTick = false;
              var copyList = queue.slice(0);
              queue = [];
              angular.forEach(copyList, function(parts) {
                parts[0].apply(parts[1], parts[2]);
              });
            }

            return createBatchFn;
          },

          /**
           * A rudimentary debounce method
           * @param {function} fn the function to debounce
           * @param {object} [ctx] the `this` context to set in fn
           * @param {int} wait number of milliseconds to pause before sending out after each invocation
           * @param {int} [maxWait] max milliseconds to wait before sending out, defaults to wait * 10 or 100
           */
          debounce: function(fn, ctx, wait, maxWait) {
            var start, cancelTimer, args, runScheduledForNextTick;
            if( typeof(ctx) === 'number' ) {
              maxWait = wait;
              wait = ctx;
              ctx = null;
            }

            if( typeof wait !== 'number' ) {
              throw new Error('Must provide a valid integer for wait. Try 0 for a default');
            }
            if( typeof(fn) !== 'function' ) {
              throw new Error('Must provide a valid function to debounce');
            }
            if( !maxWait ) { maxWait = wait*10 || 100; }

            // clears the current wait timer and creates a new one
            // however, if maxWait is exceeded, calls runNow() on the next tick.
            function resetTimer() {
              if( cancelTimer ) {
                cancelTimer();
                cancelTimer = null;
              }
              if( start && Date.now() - start > maxWait ) {
                if(!runScheduledForNextTick){
                  runScheduledForNextTick = true;
                  utils.compile(runNow);
                }
              }
              else {
                if( !start ) { start = Date.now(); }
                cancelTimer = utils.wait(runNow, wait);
              }
            }

            // Clears the queue and invokes the debounced function with the most recent arguments
            function runNow() {
              cancelTimer = null;
              start = null;
              runScheduledForNextTick = false;
              fn.apply(ctx, args);
            }

            function debounced() {
              args = Array.prototype.slice.call(arguments, 0);
              resetTimer();
            }
            debounced.running = function() {
              return start > 0;
            };

            return debounced;
          },

          assertValidRef: function(ref, msg) {
            if( !angular.isObject(ref) ||
              typeof(ref.ref) !== 'function' ||
              typeof(ref.ref().transaction) !== 'function' ) {
              throw new Error(msg || 'Invalid Firebase reference');
            }
          },

          // http://stackoverflow.com/questions/7509831/alternative-for-the-deprecated-proto
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
          inherit: function(ChildClass, ParentClass, methods) {
            var childMethods = ChildClass.prototype;
            ChildClass.prototype = Object.create(ParentClass.prototype);
            ChildClass.prototype.constructor = ChildClass; // restoring proper constructor for child class
            angular.forEach(Object.keys(childMethods), function(k) {
              ChildClass.prototype[k] = childMethods[k];
            });
            if( angular.isObject(methods) ) {
              angular.extend(ChildClass.prototype, methods);
            }
            return ChildClass;
          },

          getPrototypeMethods: function(inst, iterator, context) {
            var methods = {};
            var objProto = Object.getPrototypeOf({});
            var proto = angular.isFunction(inst) && angular.isObject(inst.prototype)?
              inst.prototype : Object.getPrototypeOf(inst);
            while(proto && proto !== objProto) {
              for (var key in proto) {
                // we only invoke each key once; if a super is overridden it's skipped here
                if (proto.hasOwnProperty(key) && !methods.hasOwnProperty(key)) {
                  methods[key] = true;
                  iterator.call(context, proto[key], key, proto);
                }
              }
              proto = Object.getPrototypeOf(proto);
            }
          },

          getPublicMethods: function(inst, iterator, context) {
            utils.getPrototypeMethods(inst, function(m, k) {
              if( typeof(m) === 'function' && k.charAt(0) !== '_' ) {
                iterator.call(context, m, k);
              }
            });
          },

          defer: $q.defer,

          reject: $q.reject,

          resolve: $q.when,

          //TODO: Remove false branch and use only angular implementation when we drop angular 1.2.x support.
          promise: angular.isFunction($q) ? $q : Q,

          makeNodeResolver:function(deferred){
            return function(err,result){
              if(err === null){
                if(arguments.length > 2){
                  result = Array.prototype.slice.call(arguments,1);
                }
                deferred.resolve(result);
              }
              else {
                deferred.reject(err);
              }
            };
          },

          wait: function(fn, wait) {
            var to = $timeout(fn, wait||0);
            return function() {
              if( to ) {
                $timeout.cancel(to);
                to = null;
              }
            };
          },

          compile: function(fn) {
            return $timeout(fn||function() {});
          },

          deepCopy: function(obj) {
            if( !angular.isObject(obj) ) { return obj; }
            var newCopy = angular.isArray(obj) ? obj.slice() : angular.extend({}, obj);
            for (var key in newCopy) {
              if (newCopy.hasOwnProperty(key)) {
                if (angular.isObject(newCopy[key])) {
                  newCopy[key] = utils.deepCopy(newCopy[key]);
                }
              }
            }
            return newCopy;
          },

          trimKeys: function(dest, source) {
            utils.each(dest, function(v,k) {
              if( !source.hasOwnProperty(k) ) {
                delete dest[k];
              }
            });
          },

          extendData: function(dest, source) {
            utils.each(source, function(v,k) {
              dest[k] = utils.deepCopy(v);
            });
            return dest;
          },

          scopeData: function(dataOrRec) {
            var data = {
              $id: dataOrRec.$id,
              $priority: dataOrRec.$priority
            };
            if( dataOrRec.hasOwnProperty('$value') ) {
              data.$value = dataOrRec.$value;
            }
            return utils.extendData(data, dataOrRec);
          },

          updateRec: function(rec, snap) {
            var data = snap.val();
            var oldData = angular.extend({}, rec);

            // deal with primitives
            if( !angular.isObject(data) ) {
              rec.$value = data;
              data = {};
            }
            else {
              delete rec.$value;
            }

            // apply changes: remove old keys, insert new data, set priority
            utils.trimKeys(rec, data);
            angular.extend(rec, data);
            rec.$priority = snap.getPriority();

            return !angular.equals(oldData, rec) ||
              oldData.$value !== rec.$value ||
              oldData.$priority !== rec.$priority;
          },

          applyDefaults: function(rec, defaults) {
            if( angular.isObject(defaults) ) {
              angular.forEach(defaults, function(v,k) {
                if( !rec.hasOwnProperty(k) ) {
                  rec[k] = v;
                }
              });
            }
            return rec;
          },

          dataKeys: function(obj) {
            var out = [];
            utils.each(obj, function(v,k) {
              out.push(k);
            });
            return out;
          },

          each: function(obj, iterator, context) {
            if(angular.isObject(obj)) {
              for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                  var c = k.charAt(0);
                  if( c !== '_' && c !== '$' && c !== '.' ) {
                    iterator.call(context, obj[k], k, obj);
                  }
                }
              }
            }
            else if(angular.isArray(obj)) {
              for(var i = 0, len = obj.length; i < len; i++) {
                iterator.call(context, obj[i], i, obj);
              }
            }
            return obj;
          },

          /**
           * A utility for retrieving a Firebase reference or DataSnapshot's
           * key name. This is backwards-compatible with `name()` from Firebase
           * 1.x.x and `key()` from Firebase 2.0.0+. Once support for Firebase
           * 1.x.x is dropped in AngularFire, this helper can be removed.
           */
          getKey: function(refOrSnapshot) {
            return (typeof refOrSnapshot.key === 'function') ? refOrSnapshot.key() : refOrSnapshot.name();
          },

          /**
           * A utility for converting records to JSON objects
           * which we can save into Firebase. It asserts valid
           * keys and strips off any items prefixed with $.
           *
           * If the rec passed into this method has a toJSON()
           * method, that will be used in place of the custom
           * functionality here.
           *
           * @param rec
           * @returns {*}
           */
          toJSON: function(rec) {
            var dat;
            if( !angular.isObject(rec) ) {
              rec = {$value: rec};
            }
            if (angular.isFunction(rec.toJSON)) {
              dat = rec.toJSON();
            }
            else {
              dat = {};
              utils.each(rec, function (v, k) {
                dat[k] = stripDollarPrefixedKeys(v);
              });
            }
            if( angular.isDefined(rec.$value) && Object.keys(dat).length === 0 && rec.$value !== null ) {
              dat['.value'] = rec.$value;
            }
            if( angular.isDefined(rec.$priority) && Object.keys(dat).length > 0 && rec.$priority !== null ) {
              dat['.priority'] = rec.$priority;
            }
            angular.forEach(dat, function(v,k) {
              if (k.match(/[.$\[\]#\/]/) && k !== '.value' && k !== '.priority' ) {
                throw new Error('Invalid key ' + k + ' (cannot contain .$[]#)');
              }
              else if( angular.isUndefined(v) ) {
                throw new Error('Key '+k+' was undefined. Cannot pass undefined in JSON. Use null instead.');
              }
            });
            return dat;
          },
          batchDelay: firebaseBatchDelay,
          allPromises: $q.all.bind($q)
        };

        return utils;
      }
    ]);

    function stripDollarPrefixedKeys(data) {
      if( !angular.isObject(data) ) { return data; }
      var out = angular.isArray(data)? [] : {};
      angular.forEach(data, function(v,k) {
        if(typeof k !== 'string' || k.charAt(0) !== '$') {
          out[k] = stripDollarPrefixedKeys(v);
        }
      });
      return out;
    }
})();



(function (window) {
	'use strict';

	var todos = [
		{
			done : false,
			name : 'Buy Milk'
		}, {
			done : false,
			name : 'Buy Eggs'
		}
	]

	var app = angular.module('todos',['ngRoute', 'firebase'])
		.controller('listController', ["$rootScope", "$scope", function($rootScope, $scope){
			$scope.removeTodo = function(todo){
				$rootScope.todos.$remove(todo);
			}
			$scope.editTodo = function(todo) {
				console.log(todo);
				todo.editing = true;
			}
			$scope.todoSetDone = function(todo) {
				$rootScope.todos.$save(todo);
			}
			$scope.exitEditMode = function($event, todo) {
				if($event.keyCode == 27 || $event.keyCode == 13) {
					todo.editing = false;
					$rootScope.todos.$save(todo);
				}
			}
		}])

		.controller('createController', ["$rootScope", "$scope", function($rootScope, $scope){
			$scope.createTodo = function ($event) {

				if($event.keyCode == 13) {
					$rootScope.todos.$add({
						done:false,
						name: $scope.newTodo
					})
					$scope.newTodo = ''
				}
				// console.log($scope.newTodo)
			}
			//$rootScope
		}])
		.controller('footerController', ["$rootScope", "$scope", "$location", function($rootScope, $scope, $location){
			// $scope.itemsLeft = function(){
			// 	return $
			// }

			$scope.location = $location;

			$scope.incompleteLength = function(){
				return $rootScope.todos.filter(function(todo){
					return todo.done == false;
				}).length;
			}

			$scope.clearCompleted = function() {
				$rootScope.todos.forEach(function(todo){
					if(todo.done) {
						$rootScope.todos.$remove(todo);
					}
				})
				$rootScope.todos = $rootScope.todos.filter(function(todo){
					return todo.done ==false;
				})
			}
		}])

		.config(["$routeProvider", function($routeProvider){
			$routeProvider
				.when('/active', {
					templateUrl: 'active.html',
					controller : 'listController'
				})

				.when('/completed', {
					templateUrl: 'completed.html',
					controller : 'listController'
				})
				.when('/', {
					templateUrl: 'all.html',
					controller : 'listController'
				})
		}])
		.run(["$rootScope", "$firebase", function($rootScope, $firebase){
			var source = new Firebase('https://iztodos.firebaseio.com/');
			$rootScope.todos = $firebase(source).$asArray();
		}])

})(window);
