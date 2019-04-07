{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.jU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.h6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.h6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.h6(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={fR:function fR(){},
je:function(a,b,c,d){P.fT(b,"start")
return new H.eo(a,b,c,[d])},
j1:function(a,b,c,d){H.k(a,"$it",[c],"$at")
H.b(b,{func:1,ret:d,args:[c]})
return new H.dj(a,b,[c,d])},
iV:function(){return new P.ay("Too few elements")},
di:function di(){},
ba:function ba(){},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.$ti=c},
b5:function b5(){},
bv:function(a){var u,t
u=H.x(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
jI:function(a){return v.types[H.J(a)]},
kw:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.w(a).$ick},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.d2(a)
if(typeof u!=="string")throw H.e(H.cY(a))
return u},
be:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
j7:function(a){var u,t
if(typeof a!=="string")H.Z(H.cY(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.iG(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bN:function(a){return H.j4(a)+H.ft(H.b0(a),0,null)},
j4:function(a){var u,t,s,r,q,p,o,n,m
u=J.w(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.a5||!!u.$iaU){p=C.x(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bv(r.length>1&&C.e.au(r,0)===36?C.e.dk(r,1):r)},
j5:function(){return Date.now()},
j6:function(){var u,t
if($.dX!=null)return
$.dX=1000
$.dY=H.jq()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dX=1e6
$.dY=new H.dW(t)},
P:function(a){throw H.e(H.cY(a))},
a:function(a,b){if(a==null)J.b2(a)
throw H.e(H.c6(a,b))},
c6:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
u=H.J(J.b2(a))
if(!(b<0)){if(typeof u!=="number")return H.P(u)
t=b>=u}else t=!0
if(t)return P.dB(b,a,"index",null,u)
return P.ct(b,"index")},
cY:function(a){return new P.ar(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.bd()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.im})
u.name=""}else u.toString=H.im
return u},
im:function(){return J.d2(this.dartException)},
Z:function(a){throw H.e(a)},
F:function(a){throw H.e(P.aH(a))},
ao:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.j([],[P.z])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.er(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
es:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
hL:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
hG:function(a,b){return new H.dT(a,b==null?null:b.method)},
fS:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.dF(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.fL(a)
if(a==null)return
if(a instanceof H.bE)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.es(s,16)&8191)===10)switch(r){case 438:return u.$1(H.fS(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.hG(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.is()
p=$.it()
o=$.iu()
n=$.iv()
m=$.iy()
l=$.iz()
k=$.ix()
$.iw()
j=$.iB()
i=$.iA()
h=q.L(t)
if(h!=null)return u.$1(H.fS(H.x(t),h))
else{h=p.L(t)
if(h!=null){h.method="call"
return u.$1(H.fS(H.x(t),h))}else{h=o.L(t)
if(h==null){h=n.L(t)
if(h==null){h=m.L(t)
if(h==null){h=l.L(t)
if(h==null){h=k.L(t)
if(h==null){h=n.L(t)
if(h==null){h=j.L(t)
if(h==null){h=i.L(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.hG(H.x(t),h))}}return u.$1(new H.eu(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cD()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ar(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cD()
return a},
b1:function(a){var u
if(a instanceof H.bE)return a.b
if(a==null)return new H.cT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cT(a)},
jF:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
jN:function(a,b,c,d,e,f){H.m(a,"$ifP")
switch(H.J(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.eP("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var u
H.J(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jN)
a.$identity=u
return u},
iO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.el().constructor.prototype):Object.create(new H.bx(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.ah
if(typeof q!=="number")return q.D()
$.ah=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.hr(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.jI,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.hp:H.fM
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.hr(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
iL:function(a,b,c,d){var u=H.fM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.iN(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.iL(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.D()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.by
if(q==null){q=H.dc("self")
$.by=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.D()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.by
if(q==null){q=H.dc("self")
$.by=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
iM:function(a,b,c,d){var u,t
u=H.fM
t=H.hp
switch(b?-1:a){case 0:throw H.e(H.jb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
iN:function(a,b){var u,t,s,r,q,p,o,n
u=$.by
if(u==null){u=H.dc("self")
$.by=u}t=$.ho
if(t==null){t=H.dc("receiver")
$.ho=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.iM(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.ah
if(typeof t!=="number")return t.D()
$.ah=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.ah
if(typeof t!=="number")return t.D()
$.ah=t+1
return new Function(u+t+"}")()},
h6:function(a,b,c,d,e,f,g){return H.iO(a,b,H.J(c),d,!!e,!!f,g)},
fM:function(a){return a.a},
hp:function(a){return a.c},
dc:function(a){var u,t,s,r,q
u=new H.bx("self","target","receiver","name")
t=J.hw(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
x:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aa(a,"String"))},
jC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"double"))},
fJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"num"))},
kr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aa(a,"bool"))},
J:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aa(a,"int"))},
hb:function(a,b){throw H.e(H.aa(a,H.bv(H.x(b).substring(2))))},
m:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.hb(a,b)},
ky:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.w(a)[b])return a
H.hb(a,b)},
d_:function(a){if(a==null)return a
if(!!J.w(a).$in)return a
throw H.e(H.aa(a,"List<dynamic>"))},
jO:function(a,b){var u
if(a==null)return a
u=J.w(a)
if(!!u.$in)return a
if(u[b])return a
H.hb(a,b)},
ic:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.J(u)]
else return a.$S()}return},
br:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ic(J.w(a))
if(u==null)return!1
return H.hY(u,null,b,null)},
b:function(a,b){var u,t
if(a==null)return a
if($.h2)return a
$.h2=!0
try{if(H.br(a,b))return a
u=H.bt(b)
t=H.aa(a,u)
throw H.e(t)}finally{$.h2=!1}},
bs:function(a,b){if(a!=null&&!H.h5(a,b))H.Z(H.aa(a,H.bt(b)))
return a},
aa:function(a,b){return new H.cH("TypeError: "+P.dl(a)+": type '"+H.i3(a)+"' is not a subtype of type '"+b+"'")},
iK:function(a,b){return new H.dd("CastError: "+P.dl(a)+": type '"+H.i3(a)+"' is not a subtype of type '"+b+"'")},
i3:function(a){var u,t
u=J.w(a)
if(!!u.$ibA){t=H.ic(u)
if(t!=null)return H.bt(t)
return"Closure"}return H.bN(a)},
jU:function(a){throw H.e(new P.dg(H.x(a)))},
jb:function(a){return new H.ed(a)},
ig:function(a){return v.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
kv:function(a,b,c){return H.bu(a["$a"+H.f(c)],H.b0(b))},
b_:function(a,b,c,d){var u
H.x(c)
H.J(d)
u=H.bu(a["$a"+H.f(c)],H.b0(b))
return u==null?null:u[d]},
h8:function(a,b,c){var u
H.x(b)
H.J(c)
u=H.bu(a["$a"+H.f(b)],H.b0(a))
return u==null?null:u[c]},
d:function(a,b){var u
H.J(b)
u=H.b0(a)
return u==null?null:u[b]},
bt:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
H.k(b,"$in",[P.z],"$an")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bv(a[0].name)+H.ft(a,1,b)
if(typeof a=="function")return H.bv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.J(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.f(b[t])}if('func' in a)return H.jo(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jo:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.z]
H.k(b,"$in",u,"$an")
if("bounds" in a){t=a.bounds
if(b==null){b=H.j([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.j(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.a(b,m)
o=C.e.D(o,b[m])
l=t[p]
if(l!=null&&l!==P.p)o+=" extends "+H.aZ(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aZ(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aZ(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.jE(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.x(u[g])
i=i+h+H.aZ(d[c],b)+(" "+H.f(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ft:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$in",[P.z],"$an")
if(a==null)return""
u=new P.bU("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.h(0)+">"},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
I:function(a,b,c,d){var u,t
H.x(b)
H.d_(c)
H.x(d)
if(a==null)return!1
u=H.b0(a)
t=J.w(a)
if(t[b]==null)return!1
return H.i7(H.bu(t[d],u),null,c,null)},
hc:function(a,b,c,d){H.x(b)
H.d_(c)
H.x(d)
if(a==null)return a
if(H.I(a,b,c,d))return a
throw H.e(H.iK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bv(b.substring(2))+H.ft(c,0,null),v.mangledGlobalNames)))},
k:function(a,b,c,d){H.x(b)
H.d_(c)
H.x(d)
if(a==null)return a
if(H.I(a,b,c,d))return a
throw H.e(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bv(b.substring(2))+H.ft(c,0,null),v.mangledGlobalNames)))},
i8:function(a,b,c,d,e){H.x(c)
H.x(d)
H.x(e)
if(!H.X(a,null,b,null))H.jV("TypeError: "+H.f(c)+H.bt(a)+H.f(d)+H.bt(b)+H.f(e))},
jV:function(a){throw H.e(new H.cH(H.x(a)))},
i7:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.X(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.X(a[t],b,c[t],d))return!1
return!0},
ks:function(a,b,c){return a.apply(b,H.bu(J.w(b)["$a"+H.f(c)],H.b0(b)))},
ii:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="p"||a.name==="u"||a===-1||a===-2||H.ii(u)}return!1},
h5:function(a,b){var u,t
if(a==null)return b==null||b.name==="p"||b.name==="u"||b===-1||b===-2||H.ii(b)
if(b==null||b===-1||b.name==="p"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.h5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.br(a,b)}u=J.w(a).constructor
t=H.b0(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.X(u,null,b,null)},
l:function(a,b){if(a!=null&&!H.h5(a,b))throw H.e(H.aa(a,H.bt(b)))
return a},
X:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="p"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="p"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="u")return!0
if('func' in c)return H.hY(a,b,c,d)
if('func' in a)return c.name==="fP"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,s,d)
else if(H.X(a,b,s,d))return!0
else{if(!('$i'+"A" in t.prototype))return!1
r=t.prototype["$a"+"A"]
q=H.bu(r,u?a.slice(1):null)
return H.X(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.i7(H.bu(m,u),b,p,d)},
hY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.X(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.X(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.X(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.X(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.jS(h,b,g,d)},
jS:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.X(c[r],d,a[r],b))return!1}return!0},
j_:function(a,b){return new H.a_([a,b])},
kt:function(a,b,c){Object.defineProperty(a,H.x(b),{value:c,enumerable:false,writable:true,configurable:true})},
jP:function(a){var u,t,s,r,q,p
u=H.x($.ih.$1(a))
t=$.fA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.fH[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.x($.i6.$2(a,u))
if(u!=null){t=$.fA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.fH[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.fI(s)
$.fA[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.fH[u]=s
return s}if(q==="-"){p=H.fI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ij(a,s)
if(q==="*")throw H.e(P.hM(u))
if(v.leafTags[u]===true){p=H.fI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ij(a,s)},
ij:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ha(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
fI:function(a){return J.ha(a,!1,null,!!a.$ick)},
jQ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.fI(u)
else return J.ha(u,c,null,null)},
jL:function(){if(!0===$.h9)return
$.h9=!0
H.jM()},
jM:function(){var u,t,s,r,q,p,o,n
$.fA=Object.create(null)
$.fH=Object.create(null)
H.jK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ik.$1(q)
if(p!=null){o=H.jQ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
jK:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.bp(C.V,H.bp(C.W,H.bp(C.y,H.bp(C.y,H.bp(C.X,H.bp(C.Y,H.bp(C.Z(C.x),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ih=new H.fE(q)
$.i6=new H.fF(p)
$.ik=new H.fG(o)},
bp:function(a,b){return a(b)||b},
iZ:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.hu("Illegal RegExp pattern ("+String(r)+")",a))},
dW:function dW(a){this.a=a},
er:function er(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dT:function dT(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
bE:function bE(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a},
cT:function cT(a){this.a=a
this.b=null},
bA:function bA(){},
ep:function ep(){},
el:function el(){},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cH:function cH(a){this.a=a},
dd:function dd(a){this.a=a},
ed:function ed(a){this.a=a},
bV:function bV(a){this.a=a
this.d=this.b=null},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dE:function dE(a){this.a=a},
dH:function dH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b
this.c=null},
fc:function fc(a){this.b=a},
hV:function(a,b,c){},
hE:function(a,b,c){var u
H.hV(a,b,c)
u=new Float32Array(a,b,c)
return u},
hF:function(a,b,c){var u
H.hV(a,b,c)
u=new Int16Array(a,b,c)
return u},
fr:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.c6(b,a))},
cm:function cm(){},
cq:function cq(){},
cp:function cp(){},
bL:function bL(){},
bM:function bM(){},
cn:function cn(){},
co:function co(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
jE:function(a){return J.iW(a?Object.keys(a):[],null)},
jT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ha:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fC:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.h9==null){H.jL()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.hM("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hd()]
if(q!=null)return q
q=H.jP(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){Object.defineProperty(r,$.hd(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
iW:function(a,b){return J.hw(H.j(a,[b]))},
hw:function(a){H.d_(a)
a.fixed$length=Array
return a},
hx:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iX:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.au(a,b)
if(t!==32&&t!==13&&!J.hx(t))break;++b}return b},
iY:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cz(a,u)
if(t!==32&&t!==13&&!J.hx(t))break}return b},
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ci.prototype
return J.ch.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cj.prototype
if(typeof a=="boolean")return J.dC.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.p)return a
return J.fC(a)},
h7:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.p)return a
return J.fC(a)},
id:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.p)return a
return J.fC(a)},
jG:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aU.prototype
return a},
jH:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aU.prototype
return a},
cZ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.p)return a
return J.fC(a)},
ie:function(a){if(a==null)return a
if(!(a instanceof P.p))return J.aU.prototype
return a},
d1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).B(a,b)},
iD:function(a,b,c,d){return J.cZ(a).dD(a,b,c,d)},
iE:function(a,b,c,d){return J.cZ(a).ej(a,b,c,d)},
hl:function(a,b){return J.id(a).T(a,b)},
aF:function(a){return J.w(a).gk(a)},
hm:function(a){return J.id(a).gG(a)},
b2:function(a){return J.h7(a).gl(a)},
d2:function(a){return J.w(a).h(a)},
iF:function(a,b){return J.jG(a).ft(a,b)},
iG:function(a){return J.jH(a).fv(a)},
B:function B(){},
dC:function dC(){},
cj:function cj(){},
cl:function cl(){},
dV:function dV(){},
aU:function aU(){},
aN:function aN(){},
aM:function aM(a){this.$ti=a},
fQ:function fQ(a){this.$ti=a},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bG:function bG(){},
ci:function ci(){},
ch:function ch(){},
b9:function b9(){}},P={
jf:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.jx()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bq(new P.eE(u),1)).observe(t,{childList:true})
return new P.eD(u,t,s)}else if(self.setImmediate!=null)return P.jy()
return P.jz()},
jg:function(a){self.scheduleImmediate(H.bq(new P.eF(H.b(a,{func:1,ret:-1})),0))},
jh:function(a){self.setImmediate(H.bq(new P.eG(H.b(a,{func:1,ret:-1})),0))},
ji:function(a){H.b(a,{func:1,ret:-1})
P.jl(0,a)},
jl:function(a,b){var u=new P.fm()
u.dB(a,b)
return u},
hZ:function(a){return new P.cK(new P.cU(new P.E(0,$.r,[a]),[a]),!1,[a])},
hU:function(a,b){H.b(a,{func:1,ret:-1,args:[P.v,,]})
H.m(b,"$icK")
a.$2(0,null)
b.b=!0
return b.a.a},
hR:function(a,b){P.jm(a,H.b(b,{func:1,ret:-1,args:[P.v,,]}))},
hT:function(a,b){H.m(b,"$ifN").R(0,a)},
hS:function(a,b){H.m(b,"$ifN").ab(H.ae(a),H.b1(a))},
jm:function(a,b){var u,t,s,r
H.b(b,{func:1,ret:-1,args:[P.v,,]})
u=new P.fp(b)
t=new P.fq(b)
s=J.w(a)
if(!!s.$iE)a.bf(u,t,null)
else if(!!s.$iA)a.ar(u,t,null)
else{r=new P.E(0,$.r,[null])
H.l(a,null)
r.a=4
r.c=a
r.bf(u,null,null)}},
i4:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.r.bC(new P.fw(u),P.u,P.v,null)},
iS:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
m={}
u=null
t=!1
H.k(a,"$it",[[P.A,b]],"$at")
l=[[P.n,b]]
s=new P.E(0,$.r,l)
m.a=null
m.b=0
m.c=null
m.d=null
r=new P.dr(m,u,t,s)
try{for(k=a,j=J.w(k),k=new H.bJ(k,j.gl(k),0,[H.b_(j,k,"ba",0)]);k.q();){q=k.d
p=m.b
q.ar(new P.dq(m,p,s,u,t,b),r,null);++m.b}k=m.b
if(k===0){k=new P.E(0,$.r,l)
k.c2(C.a8)
return k}k=new Array(k)
k.fixed$length=Array
m.a=H.j(k,[b])}catch(i){o=H.ae(i)
n=H.b1(i)
if(m.b===0||t){h=o
if(h==null)h=new P.bd()
k=$.r
if(k!==C.c)k.toString
l=new P.E(0,k,l)
l.c3(h,n)
return l}else{m.c=o
m.d=n}}return s},
hN:function(a,b){var u,t,s
b.a=1
try{a.ar(new P.eU(b),new P.eV(b),null)}catch(s){u=H.ae(s)
t=H.b1(s)
P.fK(new P.eW(b,u,t))}},
eT:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.m(a.c,"$iE")
if(u>=4){t=b.ax()
b.a=a.a
b.c=a.c
P.bl(b,t)}else{t=H.m(b.c,"$iaq")
b.a=2
b.c=a
a.cj(t)}},
bl:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.m(t.c,"$iN")
t=t.b
p=q.a
o=q.b
t.toString
P.cX(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bl(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.m(m,"$iN")
t=t.b
p=m.a
o=m.b
t.toString
P.cX(null,null,t,p,o)
return}j=$.r
if(j!=l)$.r=l
else j=null
t=b.c
if(t===8)new P.f0(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.f_(s,b,m).$0()}else if((t&2)!==0)new P.eZ(u,s,b).$0()
if(j!=null)$.r=j
t=s.b
if(!!J.w(t).$iA){if(t.a>=4){i=H.m(o.c,"$iaq")
o.c=null
b=o.ay(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.eT(t,o)
return}}h=b.b
i=H.m(h.c,"$iaq")
h.c=null
b=h.ay(i)
t=s.a
p=s.b
if(!t){H.l(p,H.d(h,0))
h.a=4
h.c=p}else{H.m(p,"$iN")
h.a=8
h.c=p}u.a=h
t=h}},
jt:function(a,b){if(H.br(a,{func:1,args:[P.p,P.y]}))return b.bC(a,null,P.p,P.y)
if(H.br(a,{func:1,args:[P.p]}))return H.b(a,{func:1,ret:null,args:[P.p]})
throw H.e(P.hn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jr:function(){var u,t
for(;u=$.bo,u!=null;){$.c5=null
t=u.b
$.bo=t
if(t==null)$.c4=null
u.a.$0()}},
jw:function(){$.h3=!0
try{P.jr()}finally{$.c5=null
$.h3=!1
if($.bo!=null)$.hf().$1(P.ia())}},
i2:function(a){var u=new P.cL(H.b(a,{func:1,ret:-1}))
if($.bo==null){$.c4=u
$.bo=u
if(!$.h3)$.hf().$1(P.ia())}else{$.c4.b=u
$.c4=u}},
jv:function(a){var u,t,s
H.b(a,{func:1,ret:-1})
u=$.bo
if(u==null){P.i2(a)
$.c5=$.c4
return}t=new P.cL(a)
s=$.c5
if(s==null){t.b=u
$.c5=t
$.bo=t}else{t.b=s.b
s.b=t
$.c5=t
if(t.b==null)$.c4=t}},
fK:function(a){var u,t
u={func:1,ret:-1}
H.b(a,u)
t=$.r
if(C.c===t){P.aY(null,null,C.c,a)
return}t.toString
P.aY(null,null,t,H.b(t.cu(a),u))},
k8:function(a,b){return new P.fl(H.k(a,"$ibT",[b],"$abT"),[b])},
fZ:function(a){return new P.cM(0,null,null,null,null,[a])},
az:function(a){return new P.eB(null,null,0,[a])},
fv:function(a){return},
i_:function(a,b){var u=$.r
u.toString
P.cX(null,null,u,a,b)},
js:function(){},
cX:function(a,b,c,d,e){var u={}
u.a=d
P.jv(new P.fu(u,e))},
i0:function(a,b,c,d,e){var u,t
H.b(d,{func:1,ret:e})
t=$.r
if(t===c)return d.$0()
$.r=c
u=t
try{t=d.$0()
return t}finally{$.r=u}},
i1:function(a,b,c,d,e,f,g){var u,t
H.b(d,{func:1,ret:f,args:[g]})
H.l(e,g)
t=$.r
if(t===c)return d.$1(e)
$.r=c
u=t
try{t=d.$1(e)
return t}finally{$.r=u}},
ju:function(a,b,c,d,e,f,g,h,i){var u,t
H.b(d,{func:1,ret:g,args:[h,i]})
H.l(e,h)
H.l(f,i)
t=$.r
if(t===c)return d.$2(e,f)
$.r=c
u=t
try{t=d.$2(e,f)
return t}finally{$.r=u}},
aY:function(a,b,c,d){var u
H.b(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.cu(d):c.eI(d,-1)
P.i2(d)},
eE:function eE(a){this.a=a},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fw:function fw(a){this.a=a},
eI:function eI(a,b){this.a=a
this.$ti=b},
U:function U(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
eJ:function eJ(){},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.e=_.d=null
_.$ti=d},
A:function A(){},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cN:function cN(){},
eC:function eC(a,b){this.a=a
this.$ti=b},
cU:function cU(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
E:function E(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
eQ:function eQ(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a){this.a=a},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a
this.b=null},
bT:function bT(){},
em:function em(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
R:function R(){},
fi:function fi(){},
fj:function fj(a){this.a=a},
eH:function eH(){},
cM:function cM(a,b,c,d,e,f){var _=this
_.a=null
_.b=a
_.c=null
_.d=b
_.e=c
_.f=d
_.r=e
_.$ti=f},
bj:function bj(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b,c,d){var _=this
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
eK:function eK(){},
fk:function fk(){},
eL:function eL(){},
bk:function bk(a,b){this.b=a
this.a=null
this.$ti=b},
a4:function a4(){},
fd:function fd(a,b){this.a=a
this.b=b},
ac:function ac(a,b){var _=this
_.c=_.b=null
_.a=a
_.$ti=b},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
fl:function fl(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
N:function N(a,b){this.a=a
this.b=b},
fo:function fo(){},
fu:function fu(a,b){this.a=a
this.b=b},
fe:function fe(){},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function(a,b,c){H.d_(a)
return H.k(H.jF(a,new H.a_([b,c])),"$ihA",[b,c],"$ahA")},
iU:function(a,b,c){var u,t
if(P.h4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.j([],[P.z])
t=$.c7()
C.a.j(t,a)
try{P.jp(a,u)}finally{if(0>=t.length)return H.a(t,-1)
t.pop()}t=P.hK(b,H.jO(u,"$it"),", ")+c
return t.charCodeAt(0)==0?t:t},
hv:function(a,b,c){var u,t,s
if(P.h4(a))return b+"..."+c
u=new P.bU(b)
t=$.c7()
C.a.j(t,a)
try{s=u
s.a=P.hK(s.a,a,", ")}finally{if(0>=t.length)return H.a(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
h4:function(a){var u,t
for(u=0;t=$.c7(),u<t.length;++u)if(a===t[u])return!0
return!1},
jp:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$in",[P.z],"$an")
u=a.gG(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.f(u.gu())
C.a.j(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.a(b,-1)
q=b.pop()
if(0>=b.length)return H.a(b,-1)
p=b.pop()}else{o=u.gu();++s
if(!u.q()){if(s<=4){C.a.j(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.a(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gu();++s
for(;u.q();o=n,n=m){m=u.gu();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.a(b,-1)
t-=b.pop().length+2;--s}C.a.j(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.j(b,l)
C.a.j(b,p)
C.a.j(b,q)},
hD:function(a){var u,t
t={}
if(P.h4(a))return"{...}"
u=new P.bU("")
try{C.a.j($.c7(),a)
u.a+="{"
t.a=!0
a.a3(0,new P.dM(t,u))
u.a+="}"}finally{t=$.c7()
if(0>=t.length)return H.a(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
O:function O(){},
dL:function dL(){},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(){},
jD:function(a){var u=H.j7(a)
if(u!=null)return u
throw H.e(P.hu("Invalid double",a))},
iR:function(a){if(a instanceof H.bA)return a.h(0)
return"Instance of '"+H.bN(a)+"'"},
hB:function(a,b,c){var u,t
u=H.j([],[c])
for(t=a.gG(a);t.q();)C.a.j(u,H.l(t.gu(),c))
return u},
j9:function(a){return new H.dD(a,H.iZ(a,!1,!0,!1))},
hK:function(a,b,c){var u=J.hm(b)
if(!u.q())return a
if(c.length===0){do a+=H.f(u.gu())
while(u.q())}else{a+=H.f(u.gu())
for(;u.q();)a=a+c+H.f(u.gu())}return a},
ht:function(){return new P.as()},
dl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.d2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iR(a)},
bw:function(a){return new P.ar(!1,null,null,a)},
hn:function(a,b,c){return new P.ar(!0,a,b,c)},
j8:function(a){return new P.bO(null,null,!1,null,null,a)},
ct:function(a,b){return new P.bO(null,null,!0,a,b,"Value not in range")},
bf:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
hI:function(a,b,c){if(0>a||a>c)throw H.e(P.bf(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.bf(b,a,c,"end",null))
return b}return c},
fT:function(a,b){if(typeof a!=="number")return a.bN()
if(a<0)throw H.e(P.bf(a,0,null,b,null))},
dB:function(a,b,c,d,e){var u=H.J(e==null?J.b2(b):e)
return new P.dA(u,!0,a,c,"Index out of range")},
T:function(a){return new P.ev(a)},
hM:function(a){return new P.et(a)},
an:function(a){return new P.ay(a)},
aH:function(a){return new P.de(a)},
hu:function(a,b){return new P.dp(a,b,null)},
Y:function Y(){},
ad:function ad(){},
as:function as(){},
bd:function bd(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dA:function dA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ev:function ev(a){this.a=a},
et:function et(a){this.a=a},
ay:function ay(a){this.a=a},
de:function de(a){this.a=a},
dU:function dU(){},
cD:function cD(){},
dg:function dg(a){this.a=a},
eP:function eP(a){this.a=a},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
t:function t(){},
av:function av(){},
n:function n(){},
u:function u(){},
o:function o(){},
p:function p(){},
y:function y(){},
fX:function fX(){this.b=this.a=0},
z:function z(){},
bU:function bU(a){this.a=a},
jB:function(a){var u={}
a.a3(0,new P.fz(u))
return u},
iP:function(a){var u,t,s
try{t=document.createEvent(a)
t.initEvent("",!0,!0)
u=t
return!!J.w(u).$ic}catch(s){H.ae(s)}return!1},
fz:function fz(a){this.a=a},
hO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f9:function f9(){},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(){},
ai:function ai(){},
cr:function cr(){},
aS:function aS(){},
cG:function cG(){},
bW:function bW(){}},W={
jW:function(){return window},
iJ:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
iQ:function(a){H.m(a,"$ib3")
return"wheel"},
iT:function(){var u=document.createElement("img")
return u},
fa:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hP:function(a,b,c,d){var u,t
u=W.fa(W.fa(W.fa(W.fa(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
H:function(a,b,c,d,e){var u=W.i5(new W.eO(c),W.c)
u=new W.eN(a,b,u,!1,[e])
u.eB()
return u},
i5:function(a,b){var u
H.b(a,{func:1,ret:-1,args:[b]})
u=$.r
if(u===C.c)return a
return u.eJ(a,b)},
i:function i(){},
d4:function d4(){},
d5:function d5(){},
aG:function aG(){},
ca:function ca(){},
bB:function bB(){},
df:function df(){},
dh:function dh(){},
cb:function cb(){},
h:function h(){},
c:function c(){},
b3:function b3(){},
dn:function dn(){},
am:function am(){},
aw:function aw(){},
bK:function bK(){},
a1:function a1(){},
bc:function bc(){},
ee:function ee(){},
a9:function a9(){},
aB:function aB(){},
eq:function eq(){},
aT:function aT(){},
ew:function ew(){},
ap:function ap(){},
bX:function bX(){},
cP:function cP(){},
eM:function eM(){},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eN:function eN(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eO:function eO(a){this.a=a},
b8:function b8(){},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cO:function cO(){},
cV:function cV(){},
cW:function cW(){}},K={
hz:function(){var u,t
u=new K.dG(0,P.az(P.o))
t=new K.ey()
u.a=t
u.b=t
return u},
ey:function ey(){this.b=this.a=null},
dG:function dG(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b},
aA:function aA(a,b){this.b=a
this.c=b}},A={
iI:function(a){var u,t,s,r,q,p,o,n,m
u=$.io()
t=A.iH(a,u.d)
s=t.b
r=t.c
u.e
q=W.iT()
p=W.am
o=new P.E(0,$.r,[p])
n=new N.cf(q,new P.eC(o,[p]),s)
p=W.c
m={func:1,ret:-1,args:[p]}
n.d=W.H(q,"load",H.b(n.ge8(),m),!1,p)
n.e=W.H(q,"error",H.b(n.ge6(),m),!1,p)
q.src=s
return o.bG(new A.da(r),A.af)},
iH:function(a,b){var u=new A.d7()
u.du(a,b)
return u},
jc:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=P.o
t=T.C()
s=T.C()
r=T.C()
q=H.j([],[A.aV])
p=H.j([new A.bm("mouseDown","mouseUp","click","doubleClick"),new A.bm("middleMouseDown","middleMouseUp","middleClick","middleClick"),new A.bm("rightMouseDown","rightMouseUp","rightClick","rightClick")],[A.bm])
o=K.hz()
n=H.j([],[A.aj])
$.K=$.K+1
n=new A.Q(1,0,0,0,0,new U.L(0,0,0,0,[u]),t,s,r,new R.bg("render",!1),C.n,C.u,C.v,C.m,"default",new U.D(0,0,[u]),q,new H.a_([P.v,A.bn]),p,o,4294967295,n,"auto",0,0,0,0,1,1,0,0,0,1,H.j([],[A.ag]),T.C())
n.dv(a,b,c,d)
return n},
af:function af(a){this.c=a},
da:function da(a){this.a=a},
d7:function d7(){this.c=this.b=this.a=null},
d8:function d8(a){this.a=a},
d9:function d9(a){this.c=!1
this.d=a
this.e=!1},
ag:function ag(){},
aj:function aj(){},
bC:function bC(){},
cg:function cg(){},
e1:function e1(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.a=!1},
e2:function e2(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.k3=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=l
_.fy=_.fr=null
_.go=m
_.id=!0
_.a=null},
ef:function ef(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.aI=_.C=null
_.a0=a
_.f0=!0
_.k3=!1
_.k4=!0
_.r1=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=m
_.fy=_.fr=null
_.go=n
_.id=!0
_.a=null},
bS:function bS(a){this.b=a},
bi:function bi(a){this.b=a},
a2:function a2(a){this.b=a},
Q:function Q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var _=this
_.a1=_.aI=_.ac=_.C=null
_.cR=_.cQ=_.cP=_.cO=0
_.aJ=a
_.f1=!1
_.bs=b
_.bt=c
_.bu=d
_.bv=e
_.f2=f
_.aK=g
_.cS=h
_.cI=i
_.eU=j
_.a_=null
_.bo=k
_.aH=l
_.cJ=m
_.cK=n
_.cL=o
_.bp=p
_.bq=null
_.cM=q
_.cN=r
_.eV=s
_.eW=t
_.fK=null
_.br=u
_.eY=_.eX=!0
_.f_=_.eZ=!1
_.a0=a0
_.f0=!0
_.k3=!1
_.k4=!0
_.r1=a1
_.c=a2
_.d=a3
_.e=a4
_.f=a5
_.r=a6
_.x=a7
_.y=a8
_.z=a9
_.Q=b0
_.ch=b1
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=b2
_.fy=_.fr=null
_.go=b3
_.id=!0
_.a=null},
ek:function ek(a){this.a=a},
eh:function eh(a){this.a=a},
ei:function ei(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.ry=_.rx=0
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=o
_.fy=_.fr=null
_.go=p
_.id=!0
_.a=null},
eg:function eg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.x=_.r=!1
_.y=g
_.Q=_.z=!0
_.cx=_.ch=!1},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(){},
jJ:function(a){var u,t
u=C.q.bw(H.k(a,"$it",[P.p],"$at"),0,new A.fD(),P.v)
if(typeof u!=="number")return H.P(u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
fD:function fD(){},
bh:function bh(a,b){this.c=a
this.a=b
this.b=null}},U={
jj:function(a){var u=new U.aE(H.j([],[U.a3]))
u.dz(a)
return u},
f8:function(a,b,c,d){var u=new U.f7(b,c,d,H.j([],[U.c_]))
u.dA(a,b,c,d)
return u},
aK:function aK(){this.a=null},
dt:function dt(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=null},
aL:function aL(){this.a=null},
du:function du(){},
b6:function b6(a){this.c=a
this.a=null},
b7:function b7(a,b){this.b=a
this.c=b
this.a=null},
dv:function dv(a,b){this.b=a
this.c=b
this.a=null},
dw:function dw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=null},
dx:function dx(){},
dy:function dy(a,b,c,d){var _=this
_.f=a
_.b=b
_.c=c
_.d=d
_.a=null},
ak:function ak(a,b){this.a=a
this.b=b
this.c=null},
al:function al(){},
dz:function dz(){},
bI:function bI(a){this.b=a},
bz:function bz(a){this.b=a},
cR:function cR(a,b){this.b=a
this.c=b
this.a=null},
cS:function cS(){},
f2:function f2(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e},
f3:function f3(a,b){this.b=a
this.c=b},
f4:function f4(a,b){this.b=a
this.a=b},
f5:function f5(a,b,c){var _=this
_.b=!1
_.c=a
_.d=b
_.a=c},
f6:function f6(a,b){this.b=a
this.a=b},
aX:function aX(){},
bZ:function bZ(){},
aE:function aE(a){this.b=null
this.a=a},
a3:function a3(a,b,c,d,e,f){var _=this
_.z=null
_.Q=!1
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.f=d
_.r=e
_.x=f},
f7:function f7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
c_:function c_(a,b,c,d,e,f,g,h,i){var _=this
_.z=a
_.Q=b
_.ch=c
_.a=d
_.b=e
_.d=_.c=0
_.e=f
_.f=g
_.r=h
_.x=i},
D:function D(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},L={
hW:function(){var u,t
if($.h1===-1){u=window
t=H.b(new L.fs(),{func:1,ret:-1,args:[P.o]})
C.T.dP(u)
$.h1=C.T.el(u,W.i5(t,P.o))}},
ja:function(a){var u,t
u=T.C()
t=new T.bb(new Float32Array(16))
t.ai()
t=new L.bY(1,C.f,u,t,null)
u=new L.e6(a,t)
u.e=t
return u},
fV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=new Int16Array(6)
t=new Float32Array(16)
s=new L.cB(a,b,c,d,e,u,t)
r=d===0
if(r||d===2){q=0-c.a
p=q/e
t[12]=p
t[0]=p
p=0-c.b
o=p/e
t[5]=o
t[1]=o
q=(q+b.c)/e
t[4]=q
t[8]=q
p=(p+b.d)/e
t[13]=p
t[9]=p}else if(d===1||d===3){q=0-c.a
p=q/e
t[12]=p
t[0]=p
p=0-c.b
o=p/e
t[5]=o
t[1]=o
q=(q+b.d)/e
t[4]=q
t[8]=q
p=(p+b.c)/e
t[13]=p
t[9]=p}else H.Z(P.ht())
if(r){r=b.a
q=a.a
p=r/q
t[14]=p
t[2]=p
p=b.b
o=a.b
n=p/o
t[7]=n
t[3]=n
n=H.d(b,0)
q=H.l(r+b.c,n)/q
t[6]=q
t[10]=q
o=H.l(p+b.d,n)/o
t[15]=o
t[11]=o}else if(d===1){r=b.a
q=H.d(b,0)
p=H.l(r+b.c,q)
o=a.a
p/=o
t[6]=p
t[2]=p
p=b.b
n=a.b
m=p/n
t[15]=m
t[3]=m
o=r/o
t[14]=o
t[10]=o
n=H.l(p+b.d,q)/n
t[7]=n
t[11]=n}else if(d===2){r=b.a
q=H.d(b,0)
p=H.l(r+b.c,q)
o=a.a
p/=o
t[14]=p
t[2]=p
p=b.b
q=H.l(p+b.d,q)
n=a.b
q/=n
t[7]=q
t[3]=q
o=r/o
t[6]=o
t[10]=o
n=p/n
t[15]=n
t[11]=n}else if(d===3){r=b.a
q=a.a
p=r/q
t[6]=p
t[2]=p
p=b.b
o=H.d(b,0)
n=H.l(p+b.d,o)
m=a.b
n/=m
t[15]=n
t[3]=n
q=H.l(r+b.c,o)/q
t[14]=q
t[10]=q
m=p/m
t[7]=m
t[11]=m}else H.Z(P.ht())
u[0]=0
u[1]=1
u[2]=2
u[3]=0
u[4]=2
u[5]=3
s.y=t
s.x=u
return s},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
cv:function cv(a){this.b=a},
aP:function aP(){},
dZ:function dZ(){},
bR:function bR(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=null
_.f=b
_.r=c
_.Q=_.z=_.y=_.x=null
_.cx=0
_.cy=d
_.dx=e
_.dy=f
_.fr=g
_.fx=h
_.fy=i
_.a=j
_.b=k
_.c=l},
e0:function e0(){},
cw:function cw(){},
fs:function fs(){},
cx:function cx(){},
fb:function fb(){},
cy:function cy(){},
e4:function e4(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
fU:function fU(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
e5:function e5(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bY:function bY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
e6:function e6(a,b){this.c=a
this.d=b
this.e=null},
aQ:function aQ(){this.c=this.b=this.a=0},
cz:function cz(a,b,c,d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.f=b
_.r=c
_.x=null
_.y=d
_.z=!1
_.ch=_.Q=null},
cA:function cA(a){this.a=a},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
e7:function e7(a){this.a=a},
cc:function cc(a){this.b=a},
cF:function cF(a){this.b=a},
aI:function aI(){}},T={dK:function dK(a,b){this.a=a
this.b=b},
C:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.dR(u)},
dR:function dR(a){this.a=a},
bb:function bb(a){this.a=a},
q:function q(a){this.a=a}},R={
h0:function(a,b,c){var u,t,s,r
H.i8(c,R.c8,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in '_dispatchBroadcastEvent'.")
H.k(b,"$in",[[R.G,c]],"$an")
u=b.length
for(t={func:1,ret:-1,args:[c]},s=0;s<u;++s){if(s<0||s>=b.length)return H.a(b,s)
r=b[s]
if(!r.c){a.f=!1
a.r=!1
H.b(r.f,t).$1(H.l(a,c))}else{C.a.bD(b,s);--u;--s}}},
c8:function c8(){},
a5:function a5(a,b,c){var _=this
_.db=a
_.a=b
_.b=c
_.r=_.f=!1},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
V:function V(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
cd:function cd(){},
bD:function bD(a){this.b=a},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
G:function G(a,b,c,d,e){var _=this
_.a=a
_.b=0
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
bF:function bF(a){this.b=a},
a7:function a7(){},
a0:function a0(a,b,c,d){var _=this
_.z=a
_.Q=b
_.db=!1
_.a=c
_.b=d
_.r=_.f=!1},
aC:function aC(a,b,c,d){var _=this
_.z=a
_.Q=b
_.db=!1
_.a=c
_.b=d
_.r=_.f=!1},
cs:function cs(a,b,c){var _=this
_.r=a
_.b=_.a=null
_.c=b
_.d=c
_.e=10}},N={cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},cI:function cI(){var _=this
_.e=_.d=_.c=_.b=_.a=null}},O={cC:function cC(a){this.a=a},eb:function eb(){},ec:function ec(){},ea:function ea(){},a8:function a8(){},
hs:function(a,b){if(a.gbz()>b*b)return a.bB().X(0,b)
else return a},
dk:function dk(){var _=this
_.d=_.c=_.b=_.a=null},
bH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},Q={dS:function dS(){},aR:function aR(){},
jn:function(){var u,t
try{u=P.iP("TouchEvent")
return u}catch(t){H.ae(t)
return!1}}},E={d3:function d3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function(a,b,c){var u,t,s
u=[U.al]
u=new U.ak(H.j([],u),H.j([],u))
$.K=$.K+1
t=H.j([],[A.ag])
s=T.C()
u.m(new U.aK())
u.bj(0,0,c)
u.m(new U.aL())
u.m(new U.b6(b))
u.m(new U.aK())
u.bj(0,0,c/2)
u.m(new U.aL())
u.m(new U.b6(a))
return new A.ax(u,0,0,0,0,1,1,0,0,0,1,t,s)},
hJ:function(a,b){var u,t,s
u=[U.al]
u=new U.ak(H.j([],u),H.j([],u))
$.K=$.K+1
t=H.j([],[A.ag])
s=T.C()
u.m(new U.aK())
u.bj(0,0,b)
u.m(new U.aL())
u.m(new U.b6(a))
return new A.ax(u,0,0,0,0,1,1,0,0,0,1,t,s)},
e9:function e9(){var _=this
_.d=_.c=_.b=_.a=null}},D={ce:function ce(){},ds:function ds(a){this.a=a}},F={e8:function e8(a,b){this.c=a
this.a=b
this.b=null},
d0:function(){var u=0,t=P.hZ(P.u),s,r,q,p,o
var $async$d0=P.i4(function(a,b){if(a===1)return P.hS(b,t)
while(true)switch(u){case 0:s=new A.eg(C.r,C.n,C.u,C.v,C.m,4294967295,5)
s.b=C.o
r=A.jc(H.m(document.querySelector("#stage"),"$iaG"),600,s,600)
q=K.hz()
p=H.j([],[A.Q])
o=new A.e1(q,p,new R.a5(0,"enterFrame",!1),new R.b4("exitFrame",!1),0)
o.a=!0
L.hW()
q=$.hi();(q&&C.a).j(q,o.ge4())
q=r.aI
if(q!=null)if(C.a.O(q.c,r))r.aI=null
r.aI=o
C.a.j(p,r)
P.az(P.o)
u=2
return P.hR(new O.cC(new H.a_([P.z,O.a8])).aO(0),$async$d0)
case 2:$.a6=r
new D.ce().df(0)
return P.hT(null,t)}})
return P.hU($async$d0,t)}},V={S:function S(a,b,c,d,e){var _=this
_.r=a
_.x=b
_.y=50
_.z=0
_.Q=null
_.ch=c
_.b=_.a=_.cy=_.cx=null
_.c=d
_.d=e
_.e=10},
fy:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.f((a>>>24&255)/255)+")"},
jR:function(a,b){if(typeof b!=="number")return H.P(b)
if(a<=b)return a
else return b},
fx:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
fB:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.e(P.bw("The supplied value ("+H.f(a)+") is not an int."))},
ib:function(a){return a},
il:function(a,b){return a-0.0001<b&&a+0.0001>b}}
var w=[C,H,J,P,W,K,A,U,L,T,R,N,O,Q,E,D,F,V]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fR.prototype={}
J.B.prototype={
B:function(a,b){return a===b},
gk:function(a){return H.be(a)},
h:function(a){return"Instance of '"+H.bN(a)+"'"}}
J.dC.prototype={
h:function(a){return String(a)},
gk:function(a){return a?519018:218159},
$iY:1}
J.cj.prototype={
B:function(a,b){return null==b},
h:function(a){return"null"},
gk:function(a){return 0},
$iu:1}
J.cl.prototype={
gk:function(a){return 0},
h:function(a){return String(a)}}
J.dV.prototype={}
J.aU.prototype={}
J.aN.prototype={
h:function(a){var u=a[$.ip()]
if(u==null)return this.dq(a)
return"JavaScript function for "+H.f(J.d2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ifP:1}
J.aM.prototype={
j:function(a,b){H.l(b,H.d(a,0))
if(!!a.fixed$length)H.Z(P.T("add"))
a.push(b)},
bD:function(a,b){if(!!a.fixed$length)H.Z(P.T("removeAt"))
if(b<0||b>=a.length)throw H.e(P.ct(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.Z(P.T("remove"))
for(u=0;u<a.length;++u)if(J.d1(a[u],b)){a.splice(u,1)
return!0}return!1},
a3:function(a,b){var u,t
H.b(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.aH(a))}},
bw:function(a,b,c,d){var u,t,s
H.l(b,d)
H.b(c,{func:1,ret:d,args:[d,H.d(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.aH(a))}return t},
T:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
f9:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.d1(a[u],b))return u
return-1},
eN:function(a,b){var u
for(u=0;u<a.length;++u)if(J.d1(a[u],b))return!0
return!1},
h:function(a){return P.hv(a,"[","]")},
gG:function(a){return new J.d6(a,a.length,0,[H.d(a,0)])},
gk:function(a){return H.be(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.Z(P.T("set length"))
if(b<0)throw H.e(P.bf(b,0,null,"newLength",null))
a.length=b},
p:function(a,b,c){H.l(c,H.d(a,0))
if(!!a.immutable$list)H.Z(P.T("indexed set"))
if(b>=a.length||b<0)throw H.e(H.c6(a,b))
a[b]=c},
$it:1,
$in:1}
J.fQ.prototype={}
J.d6.prototype={
gu:function(){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.F(u))
s=this.c
if(s>=t){this.sbX(null)
return!1}this.sbX(u[s]);++this.c
return!0},
sbX:function(a){this.d=H.l(a,H.d(this,0))},
$iav:1}
J.bG.prototype={
bm:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gaM(b)
if(this.gaM(a)===u)return 0
if(this.gaM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaM:function(a){return a===0?1/a<0:a<0},
cw:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.e(P.T(""+a+".ceil()"))},
f5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.T(""+a+".floor()"))},
A:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.T(""+a+".round()"))},
P:function(a,b,c){if(C.d.bm(b,c)>0)throw H.e(H.cY(b))
if(this.bm(a,b)<0)return b
if(this.bm(a,c)>0)return c
return a},
ft:function(a,b){var u
if(b<0||b>20)throw H.e(P.bf(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaM(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
K:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dt:function(a,b){if(typeof b!=="number")throw H.e(H.cY(b))
if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ex(a,b)},
ex:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.T("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
es:function(a,b){var u
if(a>0)u=this.er(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
er:function(a,b){return b>31?0:a>>>b},
$iad:1,
$io:1}
J.ci.prototype={$iv:1}
J.ch.prototype={}
J.b9.prototype={
cz:function(a,b){if(b<0)throw H.e(H.c6(a,b))
if(b>=a.length)H.Z(H.c6(a,b))
return a.charCodeAt(b)},
au:function(a,b){if(b>=a.length)throw H.e(H.c6(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.e(P.hn(b,null,null))
return a+b},
bQ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ct(b,null))
if(b>c)throw H.e(P.ct(b,null))
if(c>a.length)throw H.e(P.ct(c,null))
return a.substring(b,c)},
dk:function(a,b){return this.bQ(a,b,null)},
fv:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.au(u,0)===133){s=J.iX(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.cz(u,r)===133?J.iY(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
X:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.a_)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aR:function(a,b){var u=b-a.length
if(u<=0)return a
return this.X(" ",u)+a},
h:function(a){return a},
gk:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ihH:1,
$iz:1}
H.di.prototype={}
H.ba.prototype={
gG:function(a){return new H.bJ(this,this.gl(this),0,[H.h8(this,"ba",0)])}}
H.eo.prototype={
gdO:function(){var u=J.b2(this.a)
return u},
geu:function(){var u,t
u=J.b2(this.a)
t=this.b
if(t>u)return u
return t},
gl:function(a){var u,t
u=J.b2(this.a)
t=this.b
if(t>=u)return 0
return u-t},
T:function(a,b){var u,t
u=this.geu()+b
if(b>=0){t=this.gdO()
if(typeof t!=="number")return H.P(t)
t=u>=t}else t=!0
if(t)throw H.e(P.dB(b,this,"index",null,null))
return J.hl(this.a,u)},
fs:function(a,b){var u,t,s,r,q,p,o,n
u=this.b
t=this.a
s=J.h7(t)
r=s.gl(t)
q=r-u
if(q<0)q=0
p=new Array(q)
p.fixed$length=Array
o=H.j(p,this.$ti)
for(n=0;n<q;++n){C.a.p(o,n,s.T(t,u+n))
if(s.gl(t)<r)throw H.e(P.aH(this))}return o}}
H.bJ.prototype={
gu:function(){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.h7(u)
s=t.gl(u)
if(this.b!==s)throw H.e(P.aH(u))
r=this.c
if(r>=s){this.sak(null)
return!1}this.sak(t.T(u,r));++this.c
return!0},
sak:function(a){this.d=H.l(a,H.d(this,0))},
$iav:1}
H.dO.prototype={
gG:function(a){var u=this.a
return new H.dP(u.gG(u),this.b,this.$ti)},
gl:function(a){return this.a.a.a},
$at:function(a,b){return[b]}}
H.dj.prototype={}
H.dP.prototype={
q:function(){var u=this.b
if(u.q()){this.sak(this.c.$1(u.d))
return!0}this.sak(null)
return!1},
gu:function(){return this.a},
sak:function(a){this.a=H.l(a,H.d(this,1))},
$aav:function(a,b){return[b]}}
H.dQ.prototype={
gl:function(a){return J.b2(this.a)},
T:function(a,b){return this.b.$1(J.hl(this.a,b))},
$aba:function(a,b){return[b]},
$at:function(a,b){return[b]}}
H.cJ.prototype={
gG:function(a){return new H.ex(J.hm(this.a),this.b,this.$ti)}}
H.ex.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gu()))return!0
return!1},
gu:function(){return this.a.gu()}}
H.b5.prototype={}
H.dW.prototype={
$0:function(){return C.b.f5(1000*this.a.now())},
$S:34}
H.er.prototype={
L:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.dT.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dF.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.eu.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bE.prototype={}
H.fL.prototype={
$1:function(a){if(!!J.w(a).$ias)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.cT.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iy:1}
H.bA.prototype={
h:function(a){return"Closure '"+H.bN(this).trim()+"'"},
$ifP:1,
gfE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ep.prototype={}
H.el.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bv(u)+"'"}}
H.bx.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gk:function(a){var u,t
u=this.c
if(u==null)t=H.be(this.a)
else t=typeof u!=="object"?J.aF(u):H.be(u)
return(t^H.be(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bN(u)+"'")}}
H.cH.prototype={
h:function(a){return this.a}}
H.dd.prototype={
h:function(a){return this.a}}
H.ed.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.bV.prototype={
gaz:function(){var u=this.b
if(u==null){u=H.bt(this.a)
this.b=u}return u},
h:function(a){return this.gaz()},
gk:function(a){var u=this.d
if(u==null){u=C.e.gk(this.gaz())
this.d=u}return u},
B:function(a,b){if(b==null)return!1
return b instanceof H.bV&&this.gaz()===b.gaz()}}
H.a_.prototype={
gl:function(a){return this.a},
gd6:function(a){var u=H.d(this,0)
return H.j1(new H.dI(this,[u]),new H.dE(this),u,H.d(this,1))},
cD:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.c9(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.c9(t,a)}else return this.fa(a)},
fa:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.aw(u,J.aF(a)&0x3ffffff),a)>=0},
t:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.al(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.al(r,b)
s=t==null?null:t.b
return s}else return this.fb(b)},
fb:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aw(u,J.aF(a)&0x3ffffff)
s=this.aL(t,a)
if(s<0)return
return t[s].b},
p:function(a,b,c){var u,t,s,r,q,p
H.l(b,H.d(this,0))
H.l(c,H.d(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.b8()
this.b=u}this.bZ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.b8()
this.c=t}this.bZ(t,b,c)}else{s=this.d
if(s==null){s=this.b8()
this.d=s}r=J.aF(b)&0x3ffffff
q=this.aw(s,r)
if(q==null)this.be(s,r,[this.b9(b,c)])
else{p=this.aL(q,b)
if(p>=0)q[p].b=c
else q.push(this.b9(b,c))}}},
fk:function(a,b){var u
H.l(a,H.d(this,0))
H.b(b,{func:1,ret:H.d(this,1)})
if(this.cD(a))return this.t(0,a)
u=b.$0()
this.p(0,a,u)
return u},
O:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ek(this.c,b)
else return this.fc(b)},
fc:function(a){var u,t,s,r
u=this.d
if(u==null)return
t=this.aw(u,J.aF(a)&0x3ffffff)
s=this.aL(t,a)
if(s<0)return
r=t.splice(s,1)[0]
this.co(r)
return r.b},
aa:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b7()}},
a3:function(a,b){var u,t
H.b(b,{func:1,ret:-1,args:[H.d(this,0),H.d(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.aH(this))
u=u.c}},
bZ:function(a,b,c){var u
H.l(b,H.d(this,0))
H.l(c,H.d(this,1))
u=this.al(a,b)
if(u==null)this.be(a,b,this.b9(b,c))
else u.b=c},
ek:function(a,b){var u
if(a==null)return
u=this.al(a,b)
if(u==null)return
this.co(u)
this.cc(a,b)
return u.b},
b7:function(){this.r=this.r+1&67108863},
b9:function(a,b){var u,t
u=new H.dH(H.l(a,H.d(this,0)),H.l(b,H.d(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.b7()
return u},
co:function(a){var u,t
u=a.d
t=a.c
if(u==null)this.e=t
else u.c=t
if(t==null)this.f=u
else t.d=u;--this.a
this.b7()},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.d1(a[t].a,b))return t
return-1},
h:function(a){return P.hD(this)},
al:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
be:function(a,b,c){a[b]=c},
cc:function(a,b){delete a[b]},
c9:function(a,b){return this.al(a,b)!=null},
b8:function(){var u=Object.create(null)
this.be(u,"<non-identifier-key>",u)
this.cc(u,"<non-identifier-key>")
return u},
$ihA:1}
H.dE.prototype={
$1:function(a){var u=this.a
return u.t(0,H.l(a,H.d(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.d(u,1),args:[H.d(u,0)]}}}
H.dH.prototype={}
H.dI.prototype={
gl:function(a){return this.a.a},
gG:function(a){var u,t
u=this.a
t=new H.dJ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.dJ.prototype={
gu:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.aH(u))
else{u=this.c
if(u==null){this.sbY(null)
return!1}else{this.sbY(u.a)
this.c=this.c.c
return!0}}},
sbY:function(a){this.d=H.l(a,H.d(this,0))},
$iav:1}
H.fE.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.fF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.fG.prototype={
$1:function(a){return this.a(H.x(a))},
$S:25}
H.dD.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
f4:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.fc(u)},
$ihH:1}
H.fc.prototype={
geR:function(){var u=this.b
return u.index+u[0].length}}
H.cm.prototype={$icm:1,$ijZ:1}
H.cq.prototype={
dV:function(a,b,c,d){var u=P.bf(b,0,c,d,null)
throw H.e(u)},
c6:function(a,b,c,d){if(b>>>0!==b||b>c)this.dV(a,b,c,d)},
$ikj:1}
H.cp.prototype={
gl:function(a){return a.length},
cn:function(a,b,c,d,e){var u,t,s
u=a.length
this.c6(a,b,u,"start")
this.c6(a,c,u,"end")
if(b>c)throw H.e(P.bf(b,0,c,null,null))
t=c-b
s=d.length
if(s-e<t)throw H.e(P.an("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$ick:1,
$ack:function(){}}
H.bL.prototype={
t:function(a,b){H.fr(b,a,a.length)
return a[b]},
p:function(a,b,c){H.jC(c)
H.fr(b,a,a.length)
a[b]=c},
a6:function(a,b,c,d){H.k(d,"$it",[P.ad],"$at")
if(!!J.w(d).$ibL){this.cn(a,b,c,d,0)
return}this.bT(a,b,c,d,0)},
$ab5:function(){return[P.ad]},
$aO:function(){return[P.ad]},
$it:1,
$at:function(){return[P.ad]},
$in:1,
$an:function(){return[P.ad]}}
H.bM.prototype={
p:function(a,b,c){H.J(c)
H.fr(b,a,a.length)
a[b]=c},
a6:function(a,b,c,d){H.k(d,"$it",[P.v],"$at")
if(!!J.w(d).$ibM){this.cn(a,b,c,d,0)
return}this.bT(a,b,c,d,0)},
$ab5:function(){return[P.v]},
$aO:function(){return[P.v]},
$it:1,
$at:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
H.cn.prototype={$ik0:1}
H.co.prototype={
t:function(a,b){H.fr(b,a,a.length)
return a[b]},
$ik1:1}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
H.c3.prototype={}
P.eE.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:7}
P.eD.prototype={
$1:function(a){var u,t
this.a.a=H.b(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:15}
P.eF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fm.prototype={
dB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bq(new P.fn(this,b),0),a)
else throw H.e(P.T("`setTimeout()` not found."))}}
P.fn.prototype={
$0:function(){this.b.$0()},
$S:1}
P.cK.prototype={
R:function(a,b){var u
H.bs(b,{futureOr:1,type:H.d(this,0)})
if(this.b)this.a.R(0,b)
else if(H.I(b,"$iA",this.$ti,"$aA")){u=this.a
b.ar(u.gcA(u),u.geM(),-1)}else P.fK(new P.eA(this,b))},
ab:function(a,b){if(this.b)this.a.ab(a,b)
else P.fK(new P.ez(this,a,b))},
$ifN:1}
P.eA.prototype={
$0:function(){this.a.a.R(0,this.b)},
$S:0}
P.ez.prototype={
$0:function(){this.a.a.ab(this.b,this.c)},
$S:0}
P.fp.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:3}
P.fq.prototype={
$2:function(a,b){this.a.$2(1,new H.bE(a,H.m(b,"$iy")))},
$S:8}
P.fw.prototype={
$2:function(a,b){this.a(H.J(a),b)},
$S:26}
P.eI.prototype={}
P.U.prototype={
bb:function(){},
bc:function(){},
sba:function(a){this.dy=H.k(a,"$iU",this.$ti,"$aU")},
sck:function(a){this.fr=H.k(a,"$iU",this.$ti,"$aU")}}
P.eJ.prototype={
gdX:function(){return this.c<4},
c1:function(a,b,c,d){var u,t,s,r,q,p
u=H.d(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
if((this.c&4)!==0){if(c==null)c=P.i9()
u=new P.cQ($.r,c,this.$ti)
u.em()
return u}t=$.r
s=d?1:0
r=this.$ti
q=new P.U(this,t,s,r)
q.bW(a,b,c,d,u)
q.sck(q)
q.sba(q)
H.k(q,"$iU",r,"$aU")
q.dx=this.c&1
p=this.e
this.sdW(q)
q.sba(null)
q.sck(p)
if(p==null)this.sdR(q)
else p.sba(q)
if(this.d==this.e)P.fv(this.a)
return q},
cl:function(a){H.k(a,"$iR",this.$ti,"$aR")},
cm:function(a){H.k(a,"$iR",this.$ti,"$aR")},
dC:function(){if((this.c&4)!==0)return new P.ay("Cannot add new events after calling close")
return new P.ay("Cannot add new events while doing an addStream")},
j:function(a,b){H.l(b,H.d(this,0))
if(!this.gdX())throw H.e(this.dC())
this.a9(b)},
sdR:function(a){this.d=H.k(a,"$iU",this.$ti,"$aU")},
sdW:function(a){this.e=H.k(a,"$iU",this.$ti,"$aU")},
$ijd:1,
$ijk:1,
$iaW:1}
P.eB.prototype={
a9:function(a){var u,t
H.l(a,H.d(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.c0(new P.bk(a,t))}}
P.A.prototype={}
P.dr.prototype={
$2:function(a,b){var u,t
H.m(b,"$iy")
u=this.a
t=--u.b
if(u.a!=null){u.a=null
if(u.b===0||this.c)this.d.E(a,b)
else{u.c=a
u.d=b}}else if(t===0&&!this.c)this.d.E(u.c,u.d)},
$S:8}
P.dq.prototype={
$1:function(a){var u,t
H.l(a,this.f)
u=this.a;--u.b
t=u.a
if(t!=null){C.a.p(t,this.b,a)
if(u.b===0)this.c.c8(u.a)}else if(u.b===0&&!this.e)this.c.E(u.c,u.d)},
$S:function(){return{func:1,ret:P.u,args:[this.f]}}}
P.cN.prototype={
ab:function(a,b){H.m(b,"$iy")
if(a==null)a=new P.bd()
if(this.a.a!==0)throw H.e(P.an("Future already completed"))
$.r.toString
this.E(a,b)},
cB:function(a){return this.ab(a,null)},
$ifN:1}
P.eC.prototype={
R:function(a,b){var u
H.bs(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.an("Future already completed"))
u.c2(b)},
E:function(a,b){this.a.c3(a,b)}}
P.cU.prototype={
R:function(a,b){var u
H.bs(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.an("Future already completed"))
u.b4(b)},
eL:function(a){return this.R(a,null)},
E:function(a,b){this.a.E(a,b)}}
P.aq.prototype={
fd:function(a){if(this.c!==6)return!0
return this.b.b.bF(H.b(this.d,{func:1,ret:P.Y,args:[P.p]}),a.a,P.Y,P.p)},
f6:function(a){var u,t,s,r
u=this.e
t=P.p
s={futureOr:1,type:H.d(this,1)}
r=this.b.b
if(H.br(u,{func:1,args:[P.p,P.y]}))return H.bs(r.fp(u,a.a,a.b,null,t,P.y),s)
else return H.bs(r.bF(H.b(u,{func:1,args:[P.p]}),a.a,null,t),s)}}
P.E.prototype={
ar:function(a,b,c){var u,t
u=H.d(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.r
if(t!==C.c){t.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.jt(b,t)}return this.bf(a,b,c)},
bG:function(a,b){return this.ar(a,null,b)},
bf:function(a,b,c){var u,t,s
u=H.d(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.E(0,$.r,[c])
s=b==null?1:3
this.c_(new P.aq(t,s,a,b,[u,c]))
return t},
c_:function(a){var u,t
u=this.a
if(u<=1){a.a=H.m(this.c,"$iaq")
this.c=a}else{if(u===2){t=H.m(this.c,"$iE")
u=t.a
if(u<4){t.c_(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.aY(null,null,u,H.b(new P.eQ(this,a),{func:1,ret:-1}))}},
cj:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.m(this.c,"$iaq")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.m(this.c,"$iE")
t=p.a
if(t<4){p.cj(a)
return}this.a=t
this.c=p.c}u.a=this.ay(a)
t=this.b
t.toString
P.aY(null,null,t,H.b(new P.eY(u,this),{func:1,ret:-1}))}},
ax:function(){var u=H.m(this.c,"$iaq")
this.c=null
return this.ay(u)},
ay:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
b4:function(a){var u,t,s
u=H.d(this,0)
H.bs(a,{futureOr:1,type:u})
t=this.$ti
if(H.I(a,"$iA",t,"$aA"))if(H.I(a,"$iE",t,null))P.eT(a,this)
else P.hN(a,this)
else{s=this.ax()
H.l(a,u)
this.a=4
this.c=a
P.bl(this,s)}},
c8:function(a){var u
H.l(a,H.d(this,0))
u=this.ax()
this.a=4
this.c=a
P.bl(this,u)},
E:function(a,b){var u
H.m(b,"$iy")
u=this.ax()
this.a=8
this.c=new P.N(a,b)
P.bl(this,u)},
dK:function(a){return this.E(a,null)},
c2:function(a){var u
H.bs(a,{futureOr:1,type:H.d(this,0)})
if(H.I(a,"$iA",this.$ti,"$aA")){this.dI(a)
return}this.a=1
u=this.b
u.toString
P.aY(null,null,u,H.b(new P.eS(this,a),{func:1,ret:-1}))},
dI:function(a){var u=this.$ti
H.k(a,"$iA",u,"$aA")
if(H.I(a,"$iE",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.aY(null,null,u,H.b(new P.eX(this,a),{func:1,ret:-1}))}else P.eT(a,this)
return}P.hN(a,this)},
c3:function(a,b){var u
H.m(b,"$iy")
this.a=1
u=this.b
u.toString
P.aY(null,null,u,H.b(new P.eR(this,a,b),{func:1,ret:-1}))},
$iA:1}
P.eQ.prototype={
$0:function(){P.bl(this.a,this.b)},
$S:0}
P.eY.prototype={
$0:function(){P.bl(this.b,this.a.a)},
$S:0}
P.eU.prototype={
$1:function(a){var u=this.a
u.a=0
u.b4(a)},
$S:7}
P.eV.prototype={
$2:function(a,b){H.m(b,"$iy")
this.a.E(a,b)},
$1:function(a){return this.$2(a,null)},
$S:14}
P.eW.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:0}
P.eS.prototype={
$0:function(){var u=this.a
u.c8(H.l(this.b,H.d(u,0)))},
$S:0}
P.eX.prototype={
$0:function(){P.eT(this.b,this.a)},
$S:0}
P.eR.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:0}
P.f0.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.d0(H.b(r.d,{func:1}),null)}catch(q){t=H.ae(q)
s=H.b1(q)
if(this.d){r=H.m(this.a.a.c,"$iN").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.m(this.a.a.c,"$iN")
else p.b=new P.N(t,s)
p.a=!0
return}if(!!J.w(u).$iA){if(u instanceof P.E&&u.a>=4){if(u.a===8){r=this.b
r.b=H.m(u.c,"$iN")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.bG(new P.f1(o),null)
r.a=!1}},
$S:1}
P.f1.prototype={
$1:function(a){return this.a},
$S:37}
P.f_.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.d(s,0)
q=H.l(this.c,r)
p=H.d(s,1)
this.a.b=s.b.b.bF(H.b(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ae(o)
t=H.b1(o)
s=this.a
s.b=new P.N(u,t)
s.a=!0}},
$S:1}
P.eZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.m(this.a.a.c,"$iN")
r=this.c
if(r.fd(u)&&r.e!=null){q=this.b
q.b=r.f6(u)
q.a=!1}}catch(p){t=H.ae(p)
s=H.b1(p)
r=H.m(this.a.a.c,"$iN")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.N(t,s)
n.a=!0}},
$S:1}
P.cL.prototype={}
P.bT.prototype={
gl:function(a){var u,t
u={}
t=new P.E(0,$.r,[P.v])
u.a=0
this.aN(new P.em(u,this),!0,new P.en(u,t),t.gdJ())
return t}}
P.em.prototype={
$1:function(a){H.l(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.u,args:[H.d(this.b,0)]}}}
P.en.prototype={
$0:function(){this.b.b4(this.a.a)},
$S:0}
P.R.prototype={}
P.fi.prototype={
gei:function(){if((this.b&8)===0)return H.k(this.a,"$ia4",this.$ti,"$aa4")
var u=this.$ti
return H.k(H.k(this.a,"$iab",u,"$aab").gaW(),"$ia4",u,"$aa4")},
cf:function(){var u,t
if((this.b&8)===0){u=this.a
if(u==null){u=new P.ac(0,this.$ti)
this.a=u}return H.k(u,"$iac",this.$ti,"$aac")}u=this.$ti
t=H.k(this.a,"$iab",u,"$aab")
t.gaW()
return H.k(t.gaW(),"$iac",u,"$aac")},
gev:function(){if((this.b&8)!==0){var u=this.$ti
return H.k(H.k(this.a,"$iab",u,"$aab").gaW(),"$iaD",u,"$aaD")}return H.k(this.a,"$iaD",this.$ti,"$aaD")},
c4:function(){if((this.b&4)!==0)return new P.ay("Cannot add event after closing")
return new P.ay("Cannot add event while adding a stream")},
j:function(a,b){var u
H.l(b,H.d(this,0))
u=this.b
if(u>=4)throw H.e(this.c4())
if((u&1)!==0)this.a9(b)
else if((u&3)===0)this.cf().j(0,new P.bk(b,this.$ti))},
c1:function(a,b,c,d){var u,t,s,r,q,p,o
u=H.d(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
if((this.b&3)!==0)throw H.e(P.an("Stream has already been listened to."))
t=$.r
s=d?1:0
r=this.$ti
q=new P.aD(this,t,s,r)
q.bW(a,b,c,d,u)
p=this.gei()
u=this.b|=1
if((u&8)!==0){o=H.k(this.a,"$iab",r,"$aab")
o.saW(q)
o.fo()}else this.a=q
q.eq(p)
q.dT(new P.fj(this))
return q},
cl:function(a){var u=this.$ti
H.k(a,"$iR",u,"$aR")
if((this.b&8)!==0)C.l.fM(H.k(this.a,"$iab",u,"$aab"))
P.fv(this.e)},
cm:function(a){var u=this.$ti
H.k(a,"$iR",u,"$aR")
if((this.b&8)!==0)H.k(this.a,"$iab",u,"$aab").fo()
P.fv(this.f)},
$ijd:1,
$ijk:1,
$iaW:1}
P.fj.prototype={
$0:function(){P.fv(this.a.d)},
$S:0}
P.eH.prototype={
a9:function(a){var u=H.d(this,0)
H.l(a,u)
this.gev().c0(new P.bk(a,[u]))}}
P.cM.prototype={}
P.bj.prototype={
gk:function(a){return(H.be(this.a)^892482866)>>>0},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.bj&&b.a===this.a}}
P.aD.prototype={
bb:function(){this.x.cl(this)},
bc:function(){this.x.cm(this)}}
P.eK.prototype={
bW:function(a,b,c,d,e){var u,t,s,r
u=H.d(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
t=this.d
t.toString
this.se2(H.b(a,{func:1,ret:null,args:[u]}))
s=b==null?P.jA():b
if(H.br(s,{func:1,ret:-1,args:[P.p,P.y]}))t.bC(s,null,P.p,P.y)
else if(H.br(s,{func:1,ret:-1,args:[P.p]}))H.b(s,{func:1,ret:null,args:[P.p]})
else H.Z(P.bw("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.b(c,{func:1,ret:-1})
r=c==null?P.i9():c
this.se3(H.b(r,{func:1,ret:-1}))},
eq:function(a){H.k(a,"$ia4",this.$ti,"$aa4")
if(a==null)return
this.sbd(a)
if(a.c!=null){this.e=(this.e|64)>>>0
this.r.aY(this)}},
bb:function(){},
bc:function(){},
c0:function(a){var u,t
u=this.$ti
t=H.k(this.r,"$iac",u,"$aac")
if(t==null){t=new P.ac(0,u)
this.sbd(t)}t.j(0,a)
u=this.e
if((u&64)===0){u=(u|64)>>>0
this.e=u
if(u<128)this.r.aY(this)}},
a9:function(a){var u,t
u=H.d(this,0)
H.l(a,u)
t=this.e
this.e=(t|32)>>>0
this.d.d2(this.a,a,u)
this.e=(this.e&4294967263)>>>0
this.c7((t&4)!==0)},
dT:function(a){var u
H.b(a,{func:1,ret:-1})
u=this.e
this.e=(u|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c7((u&4)!==0)},
c7:function(a){var u,t,s
u=this.e
if((u&64)!==0&&this.r.c==null){u=(u&4294967231)>>>0
this.e=u
if((u&4)!==0)if(u<128){t=this.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){u=(u&4294967291)>>>0
this.e=u}}for(;!0;a=s){if((u&8)!==0){this.sbd(null)
return}s=(u&4)!==0
if(a===s)break
this.e=(u^32)>>>0
if(s)this.bb()
else this.bc()
u=(this.e&4294967263)>>>0
this.e=u}if((u&64)!==0&&u<128)this.r.aY(this)},
se2:function(a){this.a=H.b(a,{func:1,ret:-1,args:[H.d(this,0)]})},
se3:function(a){H.b(a,{func:1,ret:-1})},
sbd:function(a){this.r=H.k(a,"$ia4",this.$ti,"$aa4")},
$iR:1,
$iaW:1}
P.fk.prototype={
aN:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.b(c,{func:1,ret:-1})
return this.a.c1(H.b(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)},
bA:function(a){return this.aN(a,null,null,null)}}
P.eL.prototype={}
P.bk.prototype={}
P.a4.prototype={
aY:function(a){var u
H.k(a,"$iaW",this.$ti,"$aaW")
u=this.a
if(u===1)return
if(u>=1){this.a=1
return}P.fK(new P.fd(this,a))
this.a=1}}
P.fd.prototype={
$0:function(){var u,t,s,r,q
u=this.a
t=u.a
u.a=0
if(t===3)return
s=H.k(this.b,"$iaW",[H.d(u,0)],"$aaW")
r=u.b
q=r.a
u.b=q
if(q==null)u.c=null
H.k(s,"$iaW",[H.d(r,0)],"$aaW").a9(r.b)},
$S:0}
P.ac.prototype={
j:function(a,b){var u=this.c
if(u==null){this.c=b
this.b=b}else{u.a=b
this.c=b}}}
P.cQ.prototype={
em:function(){if((this.b&2)!==0)return
var u=this.a
u.toString
P.aY(null,null,u,H.b(this.gen(),{func:1,ret:-1}))
this.b=(this.b|2)>>>0},
eo:function(){var u=(this.b&4294967293)>>>0
this.b=u
if(u>=4)return
this.b=(u|1)>>>0
this.a.d1(this.c)},
$iR:1}
P.fl.prototype={}
P.N.prototype={
h:function(a){return H.f(this.a)},
$ias:1}
P.fo.prototype={$ikk:1}
P.fu.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.bd()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.h(0)
throw s},
$S:0}
P.fe.prototype={
d1:function(a){var u,t,s
H.b(a,{func:1,ret:-1})
try{if(C.c===$.r){a.$0()
return}P.i0(null,null,this,a,-1)}catch(s){u=H.ae(s)
t=H.b1(s)
P.cX(null,null,this,u,H.m(t,"$iy"))}},
d2:function(a,b,c){var u,t,s
H.b(a,{func:1,ret:-1,args:[c]})
H.l(b,c)
try{if(C.c===$.r){a.$1(b)
return}P.i1(null,null,this,a,b,-1,c)}catch(s){u=H.ae(s)
t=H.b1(s)
P.cX(null,null,this,u,H.m(t,"$iy"))}},
eI:function(a,b){return new P.fg(this,H.b(a,{func:1,ret:b}),b)},
cu:function(a){return new P.ff(this,H.b(a,{func:1,ret:-1}))},
eJ:function(a,b){return new P.fh(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
d0:function(a,b){H.b(a,{func:1,ret:b})
if($.r===C.c)return a.$0()
return P.i0(null,null,this,a,b)},
bF:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.l(b,d)
if($.r===C.c)return a.$1(b)
return P.i1(null,null,this,a,b,c,d)},
fp:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.l(b,e)
H.l(c,f)
if($.r===C.c)return a.$2(b,c)
return P.ju(null,null,this,a,b,c,d,e,f)},
bC:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}}
P.fg.prototype={
$0:function(){return this.a.d0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ff.prototype={
$0:function(){return this.a.d1(this.b)},
$S:1}
P.fh.prototype={
$1:function(a){var u=this.c
return this.a.d2(this.b,H.l(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.O.prototype={
gG:function(a){return new H.bJ(a,this.gl(a),0,[H.b_(this,a,"O",0)])},
T:function(a,b){return this.t(a,b)},
bw:function(a,b,c,d){var u,t,s
H.l(b,d)
H.b(c,{func:1,ret:d,args:[d,H.b_(this,a,"O",0)]})
u=this.gl(a)
for(t=b,s=0;s<u;++s){if(s>=a.length)return H.a(a,s)
t=c.$2(t,a[s])
if(u!==a.length)throw H.e(P.aH(a))}return t},
bP:function(a,b,c,d,e){var u,t,s,r,q
u=H.b_(this,a,"O",0)
H.k(d,"$it",[u],"$at")
P.hI(b,c,this.gl(a))
t=c-b
if(t===0)return
P.fT(e,"skipCount")
if(H.I(d,"$in",[u],"$an")){s=e
r=d}else{r=H.je(d,e,null,H.b_(J.w(d),d,"O",0)).fs(0,!1)
s=0}if(s+t>r.length)throw H.e(H.iV())
if(s<b)for(q=t-1;q>=0;--q){u=s+q
if(u>=r.length)return H.a(r,u)
this.p(a,b+q,r[u])}else for(q=0;q<t;++q){u=s+q
if(u>=r.length)return H.a(r,u)
this.p(a,b+q,r[u])}},
a6:function(a,b,c,d){return this.bP(a,b,c,d,0)},
bO:function(a,b,c){H.k(c,"$it",[H.b_(this,a,"O",0)],"$at")
this.a6(a,b,b+c.length,c)},
h:function(a){return P.hv(a,"[","]")}}
P.dL.prototype={}
P.dM.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:9}
P.dN.prototype={
gl:function(a){return this.a},
h:function(a){return P.hD(this)},
$ihC:1}
P.Y.prototype={}
P.ad.prototype={}
P.as.prototype={}
P.bd.prototype={
h:function(a){return"Throw of null."}}
P.ar.prototype={
gb6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb5:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+H.f(u)
r=this.gb6()+t+s
if(!this.a)return r
q=this.gb5()
p=P.dl(this.b)
return r+q+": "+p}}
P.bO.prototype={
gb6:function(){return"RangeError"},
gb5:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.dA.prototype={
gb6:function(){return"RangeError"},
gb5:function(){var u,t
u=H.J(this.b)
if(typeof u!=="number")return u.bN()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.ev.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.et.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ay.prototype={
h:function(a){return"Bad state: "+H.f(this.a)}}
P.de.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dl(u)+"."}}
P.dU.prototype={
h:function(a){return"Out of Memory"},
$ias:1}
P.cD.prototype={
h:function(a){return"Stack Overflow"},
$ias:1}
P.dg.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eP.prototype={
h:function(a){return"Exception: "+this.a}}
P.dp.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
if(typeof s==="string"){r=s.length>78?C.e.bQ(s,0,75)+"...":s
return t+"\n"+r}else return t}}
P.v.prototype={}
P.t.prototype={
gl:function(a){var u,t
u=this.gG(this)
for(t=0;u.q();)++t
return t},
T:function(a,b){var u,t,s
P.fT(b,"index")
for(u=this.gG(this),t=0;u.q();){s=u.gu()
if(b===t)return s;++t}throw H.e(P.dB(b,this,"index",null,t))},
h:function(a){return P.iU(this,"(",")")}}
P.av.prototype={}
P.n.prototype={$it:1}
P.u.prototype={
gk:function(a){return P.p.prototype.gk.call(this,this)},
h:function(a){return"null"}}
P.o.prototype={}
P.p.prototype={constructor:P.p,$ip:1,
B:function(a,b){return this===b},
gk:function(a){return H.be(this)},
h:function(a){return"Instance of '"+H.bN(this)+"'"},
toString:function(){return this.h(this)}}
P.y.prototype={}
P.fX.prototype={}
P.z.prototype={$ihH:1}
P.bU.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.i.prototype={}
W.d4.prototype={
h:function(a){return String(a)}}
W.d5.prototype={
h:function(a){return String(a)}}
W.aG.prototype={
bL:function(a,b,c){var u=a.getContext(b,P.jB(c))
return u},
$iaG:1,
$ihq:1}
W.ca.prototype={$ica:1}
W.bB.prototype={
gl:function(a){return a.length}}
W.df.prototype={}
W.dh.prototype={
h:function(a){return String(a)}}
W.cb.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.I(b,"$iaO",[P.o],"$aaO"))return!1
u=J.cZ(b)
return a.left===u.gae(b)&&a.top===u.gag(b)&&a.width===u.gah(b)&&a.height===u.gad(b)},
gk:function(a){return W.hP(C.b.gk(a.left),C.b.gk(a.top),C.b.gk(a.width),C.b.gk(a.height))},
gae:function(a){return a.left},
gag:function(a){return a.top},
$iaO:1,
$aaO:function(){return[P.o]}}
W.h.prototype={
h:function(a){return a.localName},
$ih:1}
W.c.prototype={$ic:1}
W.b3.prototype={
dD:function(a,b,c,d){return a.addEventListener(b,H.bq(H.b(c,{func:1,args:[W.c]}),1),!1)},
ej:function(a,b,c,d){return a.removeEventListener(b,H.bq(H.b(c,{func:1,args:[W.c]}),1),!1)},
$ib3:1}
W.dn.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1,$ihq:1}
W.aw.prototype={$iaw:1}
W.bK.prototype={}
W.a1.prototype={$ia1:1}
W.bc.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dn(a):u}}
W.ee.prototype={
gl:function(a){return a.length}}
W.a9.prototype={$ia9:1}
W.aB.prototype={$iaB:1}
W.eq.prototype={
gl:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.dB(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.m(c,"$ia9")
throw H.e(P.T("Cannot assign element of immutable List."))},
T:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ick:1,
$ack:function(){return[W.a9]},
$aO:function(){return[W.a9]},
$it:1,
$at:function(){return[W.a9]},
$in:1,
$an:function(){return[W.a9]},
$ab8:function(){return[W.a9]}}
W.aT.prototype={}
W.ew.prototype={$ihq:1}
W.ap.prototype={
geQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.T("deltaY is not supported"))},
geP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.T("deltaX is not supported"))},
$iap:1}
W.bX.prototype={
el:function(a,b){return a.requestAnimationFrame(H.bq(H.b(b,{func:1,ret:-1,args:[P.o]}),1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cP.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.I(b,"$iaO",[P.o],"$aaO"))return!1
u=J.cZ(b)
return a.left===u.gae(b)&&a.top===u.gag(b)&&a.width===u.gah(b)&&a.height===u.gad(b)},
gk:function(a){return W.hP(C.b.gk(a.left),C.b.gk(a.top),C.b.gk(a.width),C.b.gk(a.height))},
gad:function(a){return a.height},
gah:function(a){return a.width}}
W.eM.prototype={
aN:function(a,b,c,d){var u=H.d(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
return W.H(this.a,this.b,a,!1,u)}}
W.h_.prototype={}
W.eN.prototype={
aD:function(){if(this.b==null)return
this.eC()
this.b=null
this.sdU(null)
return},
eB:function(){var u,t,s
u=this.d
t=u!=null
if(t&&this.a<=0){s=this.b
s.toString
H.b(u,{func:1,args:[W.c]})
if(t)J.iD(s,this.c,u,!1)}},
eC:function(){var u,t,s
u=this.d
t=u!=null
if(t){s=this.b
s.toString
H.b(u,{func:1,args:[W.c]})
if(t)J.iE(s,this.c,u,!1)}},
sdU:function(a){this.d=H.b(a,{func:1,args:[W.c]})}}
W.eO.prototype={
$1:function(a){return this.a.$1(H.m(a,"$ic"))},
$S:16}
W.b8.prototype={
gG:function(a){return new W.dm(a,a.length,-1,[H.b_(this,a,"b8",0)])},
a6:function(a,b,c,d){H.k(d,"$it",[H.b_(this,a,"b8",0)],"$at")
throw H.e(P.T("Cannot setRange on immutable List."))}}
W.dm.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){t=this.a
if(u<0||u>=t.length)return H.a(t,u)
this.scb(t[u])
this.c=u
return!0}this.scb(null)
this.c=t
return!1},
gu:function(){return this.d},
scb:function(a){this.d=H.l(a,H.d(this,0))},
$iav:1}
W.cO.prototype={}
W.cV.prototype={}
W.cW.prototype={}
P.fz.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.f9.prototype={
cV:function(a){if(a<=0||a>4294967296)throw H.e(P.j8("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ik6:1}
P.W.prototype={
h:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
B:function(a,b){var u
if(b==null)return!1
if(H.I(b,"$iW",[P.o],"$aW")){u=J.ie(b)
u=this.a==u.gH(b)&&this.b==u.gI(b)}else u=!1
return u},
gk:function(a){var u,t,s
u=J.aF(this.a)
t=J.aF(this.b)
t=P.hO(P.hO(0,u),t)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
gH:function(a){return this.a},
gI:function(a){return this.b}}
P.c9.prototype={$ic9:1}
P.ai.prototype={$iai:1}
P.cr.prototype={$icr:1}
P.aS.prototype={
d4:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}t=J.w(g)
if(!!t.$iam&&h==null&&u&&!0){this.ey(a,b,c,d,e,f,g)
return}if(!!t.$iaG&&h==null&&u&&!0){this.ez(a,b,c,d,e,f,g)
return}throw H.e(P.bw("Incorrect number or type of arguments"))},
d3:function(a,b,c,d,e,f,g){return this.d4(a,b,c,d,e,f,g,null,null,null)},
ey:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ez:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fw:function(a,b,c){return a.uniform1i(b,c)},
$iaS:1}
P.cG.prototype={$icG:1}
P.bW.prototype={$ibW:1}
K.ey.prototype={}
K.dG.prototype={
aB:function(a){var u,t,s,r
u=this.c+=a
this.d.j(0,u)
t=this.a
s=this.b
for(;t!==s;){r=t.b
t.a=r.gfI()
t.b=r.gfL()}return!0},
$ijX:1}
A.af.prototype={}
A.da.prototype={
$1:function(a){var u,t,s,r
H.m(a,"$iam")
u=new L.cz(C.aa,C.I,C.I,-1)
t=V.fB(a.width)
u.a=t
s=V.fB(a.height)
u.b=s
u.c=a
r=[P.v]
r=L.fV(u,new U.L(0,0,t,s,r),new U.L(0,0,t,s,r),0,1)
return new A.af(L.fV(r.a,r.b,r.c,r.d,this.a))},
$S:17}
A.d7.prototype={
du:function(a,b){var u,t,s,r,q,p,o,n,m
this.a=a
this.b=a
this.c=1
u=P.j9("@(\\d+(.\\d+)?)x").f4(this.a)
if(u!=null){t=u.b
if(2>=t.length)return H.a(t,2)
s=t[2]
if(s==null)s="."
r=P.jD(t[1])
q=C.a.bw(b,0,new A.d8($.hk()),P.o)
p=J.iF(q,s.length-1)
t=t.index+1
s=u.geR()
o=P.hI(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
this.b=n+p+m
if(typeof r!=="number")return H.P(r)
this.c=q/r}}}
A.d8.prototype={
$2:function(a,b){var u
H.fJ(a)
H.fJ(b)
u=this.a
if(typeof a!=="number")return a.Y()
if(typeof u!=="number")return H.P(u)
if(typeof b!=="number")return b.Y()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:18}
A.d9.prototype={}
A.ag.prototype={}
A.aj.prototype={
gd_:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gbI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(this.id){this.id=!1
u=this.go
t=this.Q
s=this.r
r=this.x
q=this.y
p=this.z
if(s>-0.0001&&s<0.0001)s=0.0001
if(r>-0.0001&&r<0.0001)r=0.0001
if(q!==0||p!==0){o=p+t
n=s*Math.cos(o)
m=s*Math.sin(o)
o=q+t
l=-r*Math.sin(o)
k=r*Math.cos(o)
o=this.e
j=this.f
u.a7(n,m,l,k,this.c-o*n-j*l,this.d-o*m-j*k)}else{o=this.e
j=this.f
if(t!==0){i=Math.cos(t)
h=Math.sin(t)
n=s*i
m=s*h
l=-r*h
k=r*i
u.a7(n,m,l,k,this.c-o*n-j*l,this.d-o*m-j*k)}else u.a7(s,0,0,r,this.c-o*s,this.d-j*r)}}return this.go},
cX:function(){var u,t,s,r
u=this.fy
if(u!=null){t=u.a0
s=C.a.f9(t,this)
this.n(0,new R.V("removed",!0))
r=u.gd_()
if((r instanceof A.Q?r:null)!=null)u.cd(this,"removedFromStage")
this.sci(null)
C.a.bD(t,s)}},
J:function(a,b){var u,t
u=[P.o]
H.k(a,"$iD",u,"$aD")
H.k(b,"$iD",u,"$aD")
t=H.I(b,"$iD",u,null)?b:new U.D(0,0,u)
t.sH(0,a.a)
t.sI(0,a.b)
this.cg(t)
return t},
cg:function(a){var u,t,s,r,q,p
u=[P.o]
H.k(a,"$iD",u,"$aD")
t=this.fy
if(t!=null)t.cg(a)
s=H.I(a,"$iD",u,null)?a:new U.D(0,0,u)
r=a.a
q=a.b
p=this.gbI()
u=p.a
s.sH(0,(u[3]*(r-u[4])-u[2]*(q-u[5]))/p.gcH())
s.sI(0,(u[0]*(q-u[5])-u[1]*(r-u[4]))/p.gcH())},
n:function(a,b){var u,t,s,r,q
u=H.j([],[R.cd])
for(t=this.fy;t!=null;t=t.fy)C.a.j(u,t)
s=u.length-1
while(!0){if(!(s>=0&&b.gcv()))break
if(s<0||s>=u.length)return H.a(u,s)
u[s].bn(b,this,C.E);--s}this.bn(b,this,C.a2)
r=b.b
s=0
while(!0){q=u.length
if(!(s<q&&r))break
if(s>=q)return H.a(u,s)
u[s].bn(b,this,C.a3);++s}},
sci:function(a){this.fy=H.k(a,"$ifO",[A.aj],"$afO")},
$ik7:1}
A.bC.prototype={
an:function(a){var u
if(a===this)throw H.e(P.bw("An object cannot be added as a child of itself."))
else if(a.fy===this)this.dE(a)
else{a.cX()
this.eA(a)
C.a.j(this.a0,a)
a.sci(this)
a.n(0,new R.V("added",!0))
u=this.gd_()
if((u instanceof A.Q?u:null)!=null)this.cd(a,"addedToStage")}},
a4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.a0,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.a(u,t)
r=u[t]
q=r.gbI()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.a4((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$icg&&!0)return i
s=this}}return s},
V:function(a){var u,t,s
for(u=this.a0,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bE(s)}},
eA:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.e(P.bw("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
dE:function(a){var u,t,s,r
u=this.a0
for(t=u.length-1,s=a;t>=0;--t,s=r){if(t>=u.length)return H.a(u,t)
r=u[t]
C.a.p(u,t,s)
if(a===r)break}},
cd:function(a,b){var u,t
u=!1
t=this
while(!0){if(!(t!=null&&!u))break
if(t.by(b,!0))u=!0
t=t.fy}this.ce(a,new R.V(b,!1),u)},
ce:function(a,b,c){var u,t,s
u=!c
if(!u||a.f7(b.a))a.n(0,b)
if(!!a.$ibC){c=!u||a.by(b.a,!0)
t=a.a0
for(s=0;s<t.length;++s)this.ce(t[s],b,c)}},
$ifO:1,
$afO:function(){return[A.aj]}}
A.cg.prototype={}
A.e1.prototype={
aB:function(a){var u
this.f+=a
u=this.d
u.db=a
R.h0(u,$.hg(),R.a5)
this.b.aB(a)
u=this.c
C.a.a3(u,new A.e2(a))
C.a.a3(u,new A.e3(this,a))
R.h0(this.e,$.hh(),R.b4)}}
A.e2.prototype={
$1:function(a){H.m(a,"$iQ").eW.aB(this.a)
return!0},
$S:19}
A.e3.prototype={
$1:function(a){var u,t,s,r,q,p
H.m(a,"$iQ")
u=this.a.f
t=a.aH
if(t!==C.u)t=t===C.R
else t=!0
if(t){if($.fY==null){H.j6()
$.fY=$.dX}t=H.J($.dY.$0())
if(typeof t!=="number")return t.Y()
t-=0
a.cp()
R.h0(a.eU,$.hj(),R.bg)
a.ac.aq(0)
s=a.ac
r=s.a
r.a=0
r.b=0
r.c=0
s.bk(0,a.br)
a.a_.cZ(0,a.cS)
V.ib(u)
V.ib(this.b)
a.a_.bE(a)
a.a_.c.F(0)
a.f1=!1
q=a.ac.a
u=H.J($.dY.$0())
if(typeof u!=="number")return u.Y()
s=$.fY
if(typeof s!=="number")return H.P(s)
p=C.d.dt((u-t)*1000,s)
a.bt=a.bt*0.75+q.a*0.25
a.bu=a.bu*0.75+q.b*0.25
a.bv=a.bv*0.75+q.c*0.25
a.bs=a.bs*0.95+p*0.05
u=a.a1
if(u.cx){u.cy
t=!0}else t=!1
if(t){C.a.sl(u.r2,0)
u.rx=0
u.ry=0
a.a1.aS(0,"FRAMETIME"+C.e.aR(C.d.h(C.b.A(a.bs)),6))
a.a1.aS(0,"DRAWCALLS"+C.e.aR(C.d.h(C.b.A(a.bt)),6))
a.a1.aS(0,"VERTICES"+C.e.aR(C.d.h(C.b.A(a.bu)),7))
a.a1.aS(0,"INDICES"+C.e.aR(C.d.h(C.b.A(a.bv)),8))
a.a_.cZ(0,a.cI)
a.a_.bE(a.a1)
a.a_.c.F(0)}}if(a.aH===C.R)a.aH=C.ab
return},
$S:20}
A.ax.prototype={
a4:function(a,b){if(this.k3.N(a,b))return this
return},
V:function(a){this.k3.V(a)}}
A.ef.prototype={
gbM:function(){var u=this.C
if(!(u!=null)){u=[U.al]
u=new U.ak(H.j([],u),H.j([],u))
this.C=u}return u},
a4:function(a,b){var u,t
u=this.C
t=this.b1(a,b)
if(t==null&&u!=null)t=u.N(a,b)?this:null
return t},
V:function(a){var u=this.C
if(u!=null)u.V(a)
this.dl(a)}}
A.bS.prototype={
h:function(a){return this.b}}
A.bi.prototype={
h:function(a){return this.b}}
A.a2.prototype={
h:function(a){return this.b}}
A.Q.prototype={
dv:function(a,b,c,d){var u,t,s
u=a.tabIndex
if(typeof u!=="number")return u.fG()
if(u<=0)a.tabIndex=1
u=a.style
if(u.outline==="")u.outline="none"
this.br=c.f
this.eX=!0
this.eY=!0
this.eZ=!1
this.f_=!1
this.C=a
this.cK=c.e
this.cJ=c.d
this.aH=c.c
this.bo=c.b
this.cO=V.fB(d)
this.cP=V.fB(b)
this.aJ=V.jR(c.y,$.hk())
u=this.dM(a,c)
this.ac=u
this.a_=L.ja(u)
u=H.j([],[L.cB])
t=T.C()
s=H.j([],[P.z])
$.K=$.K+1
s=new A.cE("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC",u,t,s,0,0,0,0,1,1,0,0,0,1,H.j([],[A.ag]),T.C())
A.iI("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").bG(s.gdF(),-1)
s.cx=!1
this.a1=s
H.jT("StageXL render engine : "+this.ac.gcY().h(0))
u=W.aw
t=H.b(this.gea(),{func:1,ret:-1,args:[u]})
W.H(a,"keydown",t,!1,u)
W.H(a,"keyup",t,!1,u)
W.H(a,"keypress",t,!1,u)
u=this.bo
if(u===C.n||u===C.o){u=W.a1
t=H.b(this.gec(),{func:1,ret:-1,args:[u]})
W.H(a,"mousedown",t,!1,u)
W.H(a,"mouseup",t,!1,u)
W.H(a,"mousemove",t,!1,u)
W.H(a,"mouseout",t,!1,u)
W.H(a,"contextmenu",t,!1,u)
u=W.ap
W.H(a,H.x(W.iQ(a)),H.b(this.gee(),{func:1,ret:-1,args:[u]}),!1,u)}u=this.bo
if((u===C.a4||u===C.o)&&$.iC()){u=W.aB
t=H.b(this.geg(),{func:1,ret:-1,args:[u]})
W.H(a,"touchstart",t,!1,u)
W.H(a,"touchend",t,!1,u)
W.H(a,"touchmove",t,!1,u)
W.H(a,"touchenter",t,!1,u)
W.H(a,"touchleave",t,!1,u)
W.H(a,"touchcancel",t,!1,u)}$.ir().bA(new A.ek(this))
this.bh()
this.cp()
this.ac.bk(0,this.br)},
gcU:function(){return this.bp},
a4:function(a,b){var u=this.b1(a,b)
return u!=null?u:this},
dM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=b.a
if(u===C.r)try{u=new T.bb(new Float32Array(16))
u.ai()
t=H.j([],[L.fb])
s=P.z
r=P.v
q=P.bW
p=new Int16Array(0)
p=new L.e4(-1,new H.a_([s,r]),new H.a_([s,q]),new L.bP(p,35048,-1),new L.bQ(new Float32Array(0),35048,-1),new L.aQ())
new Int16Array(0)
new Float32Array(0)
o=new Int16Array(0)
n=new Float32Array(0)
m=new Int16Array(16384)
l=new Float32Array(32768)
k=new Array(8)
k.fixed$length=Array
k=H.j(k,[L.cz])
j=H.j([],[L.cw])
i=L.aP
i=new L.cu(a,u,t,p,new L.e5(-1,new H.a_([s,r]),new H.a_([s,q]),new L.bP(o,35048,-1),new L.bQ(n,35048,-1),new L.aQ()),new L.bP(m,35048,-1),new L.bQ(l,35048,-1),k,j,new L.aQ(),P.az(i),P.az(i))
j=P.ai
k={func:1,ret:-1,args:[j]}
W.H(a,"webglcontextlost",H.b(i.gdZ(),k),!1,j)
W.H(a,"webglcontextrestored",H.b(i.ge0(),k),!1,j)
b=P.j0(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],s,null)
h=C.z.bL(a,"webgl",b)
h=H.m(h==null?C.z.bL(a,"experimental-webgl",b):h,"$iaS")
if(!J.w(h).$iaS)H.Z(P.an("Failed to get WebGL context."))
i.e=h
h.enable(3042)
i.e.disable(2960)
i.e.disable(2929)
i.e.disable(2884)
i.e.pixelStorei(37441,1)
i.e.blendFunc(1,771)
i.x=p
p.am(i)
u=$.e_+1
$.e_=u
i.cx=u
i.aq(0)
return i}catch(g){H.ae(g)
u=T.C()
t=L.aP
t=new L.bR(a,a.getContext("2d"),u,C.f,1,new L.aQ(),P.az(t),P.az(t))
t.aq(0)
return t}else if(u===C.H){u=T.C()
t=L.aP
t=new L.bR(a,a.getContext("2d"),u,C.f,1,new L.aQ(),P.az(t),P.az(t))
t.aq(0)
return t}else throw H.e(P.an("Unknown RenderEngine"))},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=this.cO
t=this.cP
s=this.C.getBoundingClientRect()
r=this.C
q=r.clientLeft
p=C.b.A(s.left)
if(typeof q!=="number")return q.D()
o=r.clientTop
n=C.b.A(s.top)
if(typeof o!=="number")return o.D()
m=r.clientWidth
l=r.clientHeight
if(m===0||l===0)return
if(typeof m!=="number")return m.bK()
k=m/u
if(typeof l!=="number")return l.bK()
j=l/t
switch(this.cJ){case C.ac:i=j
h=k
break
case C.ad:i=k>j?k:j
h=i
break
case C.ae:h=1
i=1
break
case C.v:i=k<j?k:j
h=i
break
default:h=1
i=1}r=this.cK
switch(r){case C.M:case C.O:case C.J:g=0
break
case C.K:case C.m:case C.P:g=(m-u*h)/2
break
case C.L:case C.N:case C.Q:g=m-u*h
break
default:g=0}switch(r){case C.J:case C.K:case C.L:f=0
break
case C.M:case C.m:case C.N:f=(l-t*i)/2
break
case C.O:case C.P:case C.Q:f=l-t*i
break
default:f=0}r=this.f2
r.sae(0,-g/h)
r.sag(0,-f/i)
r.sah(0,m/h)
r.sad(0,l/i)
r=this.cS
r.a7(h,0,0,i,g,f)
e=this.aJ
r.aX(0,e,e)
e=this.aK
e.a7(1,0,0,1,-(q+p)-g,-(o+n)-f)
e.aX(0,1/h,1/i)
e=this.cI
e.cT()
n=this.aJ
e.aX(0,n,n)
if(this.cQ!==m||this.cR!==l){this.cQ=m
this.cR=l
r=this.C
q=this.aJ
if(typeof q!=="number")return H.P(q)
r.width=C.b.A(m*q)
r.height=C.b.A(l*q)
if(r.clientWidth!==m||r.clientHeight!==l){r=r.style
q=""+m+"px"
r.width=q
r=this.C.style
q=""+l+"px"
r.height=q}this.n(0,new R.V("resize",!1))}},
bh:function(){var u,t,s,r,q,p,o,n,m,l
u=this.bq
t=$.j3
if(u!=null&&t==="auto"){s=u.r1
if(s!=="auto")t=s}if(t==="auto")t="default"
if(this.cL!=t){this.cL=t
r=this.C.style
if($.he().cD(t)){q=$.he().t(0,t)
p=C.l.gfN(q)
o=q.gf8()
n=o.gH(o)
o=q.gf8()
m=o.gI(o)
l="url('"+H.f(p)+"') "+H.f(n)+" "+H.f(m)+", "+H.f(t)}else l=t
o=$.j2?"none":l
r.toString
r.cursor=o==null?"":o}},
ed:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.m(a,"$ia1")
a.preventDefault()
u=Date.now()
t=a.button
s=P.o
r=this.aK.bH(new P.W(a.clientX,a.clientY,[s]))
q=new U.D(0,0,[s])
if(typeof t!=="number")return t.bN()
if(t<0||t>2)return
if(a.type==="mousemove"&&this.bp.B(0,r))return
s=this.eV
if(t<0||t>=3)return H.a(s,t)
p=s[t]
this.sdY(r)
C.a.a3(this.cM,new A.eh(r))
if(a.type!=="mouseout")o=this.a4(r.a,r.b)
else{this.n(0,new R.V("mouseLeave",!1))
o=null}n=this.bq
if(n!=o){s=[A.aj]
m=H.j([],s)
l=H.j([],s)
for(k=n;k!=null;k=k.fy)C.a.j(m,k)
for(k=o;k!=null;k=k.fy)C.a.j(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.a(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.a(l,h)
if(g!==l[h])break}if(n!=null){n.J(r,q)
n.n(0,new R.a0(r.a,r.b,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.J(r,q)
e.n(0,new R.a0(r.a,r.b,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.a(l,f)
e=l[f]
e.J(r,q)
e.n(0,new R.a0(r.a,r.b,"rollOver",!1))}if(o!=null){o.J(r,q)
o.n(0,new R.a0(r.a,r.b,"mouseOver",!0))}this.bq=o}this.bh()
if(a.type==="mousedown"){this.C.focus()
d=p.a
if(o!=p.e||u>p.r+500)p.x=0
p.f=!0
p.e=o
p.r=u;++p.x}else d=null
if(a.type==="mouseup"){d=p.b
p.f=!1
c=p.e==o
c}else c=!1
u=a.type
if(u==="mousemove")d="mouseMove"
if(u==="contextmenu")d="contextMenu"
if(d!=null&&o!=null){o.J(r,q)
o.n(0,new R.a0(r.a,r.b,d,!0))
if(c)o.n(0,new R.a0(r.a,r.b,p.c,!0))}},
ef:function(a){var u,t,s,r
H.m(a,"$iap")
u=P.o
t=this.aK.bH(new P.W(a.clientX,a.clientY,[u]))
s=this.a4(t.a,t.b)
s.J(t,new U.D(0,0,[u]))
u=t.a
r=t.b;(a&&C.S).geP(a)
C.S.geQ(a)
s.n(0,new R.a0(u,r,"mouseWheel",!0))},
eh:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
H.m(b3,"$iaB")
b3.preventDefault()
u=b3.type
for(t=b3.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=this.cN,m=this.cM,l=P.o,k=[l],j=this.aK,l=[l],i=[A.aj],h=0;h<t.length;t.length===s||(0,H.F)(t),++h){g=t[h]
f=g.identifier
e=j.bH(new P.W(C.b.A(g.clientX),C.b.A(g.clientY),k))
d=new U.D(0,0,l)
c=this.b1(e.a,e.b)
c=c!=null?c:this
b=n.fk(f,new A.ei(this,c))
a=b.a
b.b
C.a.a3(m,new A.ej(a,e))
a0=b.d
if(a0!==c){a1=H.j([],i)
a2=H.j([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.j(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.j(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.a(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.a(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.J(e,d)
a0.n(0,new R.aC(e.a,e.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.J(e,d)
b0.n(0,new R.aC(e.a,e.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.a(a2,a9)
b0=a2[a9]
b0.J(e,d)
b0.n(0,new R.aC(e.a,e.b,"touchRollOver",!1))}c.J(e,d)
c.n(0,new R.aC(e.a,e.b,"touchOver",!0))
b.d=c}if(o){this.C.focus()
n.p(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.O(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.O(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.J(e,d)
c.n(0,new R.aC(e.a,e.b,b1,!0))
if(b2)c.n(0,new R.aC(e.a,e.b,"touchTap",!0))}}},
eb:function(a){H.m(a,"$iaw")
return},
sdY:function(a){this.bp=H.k(a,"$iD",[P.o],"$aD")}}
A.ek.prototype={
$1:function(a){H.x(a)
return this.a.bh()},
$S:39}
A.eh.prototype={
$1:function(a){return H.m(a,"$iaV").fC(0,this.a)},
$S:10}
A.ei.prototype={
$0:function(){var u,t,s
u=this.b
t=this.a.cN.a
s=$.hQ
$.hQ=s+1
return new A.bn(s,t===0,u,u)},
$S:27}
A.ej.prototype={
$1:function(a){return H.m(a,"$iaV").fC(this.a,this.b)},
$S:10}
A.cE.prototype={
aS:function(a,b){var u,t
C.a.j(this.r2,b)
u=b.length
t=this.rx
this.rx=u>t?u:t;++this.ry},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
this.n(0,new R.V("Update",!1))
for(u=this.k4,t=a.c,s=this.r1,r=this.r2,q=0;q<this.ry;++q)for(p=q*14,o=0;o<this.rx;++o){if(q>=r.length)return H.a(r,q)
n=r[q]
m=o<n.length?C.e.au(n,o)-32:0
if(m<0||m>=64)m=0
s.a7(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.C()
j=new T.bb(new Float32Array(16))
j.ai()
k=new L.bY(1,C.f,n,j,l)
l.f=k}k.c.cE(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.a(u,m)
t.aT(a,u[m])
a.e=a.e.e}},
dG:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
u=H.m(b3,"$iaf").c
t=u.a
t.sf3(C.a9)
for(s=[P.v],r=this.k4,q=[P.o],p=u.e,o=0*p,n=u.d,m=u.b,l=H.d(m,0),u=u.c,k=0;k<64;++k){j=k*7
i=H.k(new U.L(j,0,7,14,s),"$iL",q,"$aL")
h=C.b.A(j*p)
g=C.b.A(o)
i=H.d(i,0)
j=C.b.A(H.l(j+7,i)*p)-h
i=C.b.A(H.l(14,i)*p)-g
f=m.a
e=m.b
d=H.l(f+m.c,l)
c=H.l(e+m.d,l)
b=u.a
a=u.b
a0=C.d.K(n,4)
a1=h+j
a2=g+i
if(n===0){a3=f+b
a4=a3+h
a5=e+a
a6=a5+g
a7=a3+a1
a8=a5+a2}else if(n===1){a3=d-a
a4=a3-a2
a5=e+b
a6=a5+h
a7=a3-g
a8=a5+a1}else if(n===2){a3=d-b
a4=a3-a1
a5=c-a
a6=a5-a2
a7=a3-h
a8=a5-g}else if(n===3){a3=f+a
a4=a3+g
a5=c-b
a6=a5-a1
a7=a3+a2
a8=a5-h}else{a4=0
a6=0
a7=0
a8=0}a9=V.fx(a4,f,d)
b0=V.fx(a6,e,c)
a1=V.fx(a7,f,d)
a2=V.fx(a8,e,c)
if(a0===0){b1=a4-a9
b2=a6-b0}else if(a0===1){b1=a6-b0
b2=a1-a7}else if(a0===2){b1=a1-a7
b2=a8-a2}else if(a0===3){b1=a2-a8
b2=a9-a4}else{b1=0
b2=0}C.a.j(r,L.fV(t,new U.L(a9,b0,a1-a9,a2-b0,s),new U.L(b1,b2,j,i,s),a0,p))}}}
A.eg.prototype={}
A.bm.prototype={}
A.bn.prototype={}
A.aV.prototype={}
U.aK.prototype={
M:function(a){a.ct(0)}}
U.dt.prototype={
gH:function(a){return this.b},
gI:function(a){return this.c},
M:function(a){var u,t,s
u=this.b
t=this.d
s=this.c
a.a5(0,u+t,s)
a.aC(0,u,s,t,0,6.283185307179586,!1)
a.aE(0)}}
U.aL.prototype={
M:function(a){a.aE(0)}}
U.du.prototype={}
U.b6.prototype={
M:function(a){a.ap(this.c)}}
U.b7.prototype={
gH:function(a){return this.b},
gI:function(a){return this.c},
M:function(a){a.U(0,this.b,this.c)}}
U.dv.prototype={
gH:function(a){return this.b},
gI:function(a){return this.c},
M:function(a){a.a5(0,this.b,this.c)}}
U.dw.prototype={
gH:function(a){return this.b},
gI:function(a){return this.c},
M:function(a){var u,t,s
u=this.b
t=this.c
a.a5(0,u,t)
s=u+this.d
a.U(0,s,t)
t+=this.e
a.U(0,s,t)
a.U(0,u,t)
a.aE(0)}}
U.dx.prototype={}
U.dy.prototype={
M:function(a){a.aj(this.f,this.b,this.c,this.d)}}
U.ak.prototype={
m:function(a){a.ep(this)
C.a.j(this.a,a)
C.a.sl(this.b,0)
this.sb2(null)},
aa:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
r.a=null}C.a.sl(u,0)
C.a.sl(this.b,0)
this.sb2(null)},
bj:function(a,b,c){var u=new U.dt(a,b,c,!1)
this.m(u)
return u},
gbi:function(){var u,t,s
if(this.c==null){u=this.av(!0)
t=new U.f2(17976931348623157e292,17976931348623157e292,-17976931348623157e292,-17976931348623157e292,new U.aE(H.j([],[U.a3])))
this.aA(t,u)
this.sb2(t.gbi())}s=this.c
return new U.L(s.a,s.b,s.c,s.d,[H.d(s,0)])},
N:function(a,b){var u,t
if(this.gbi().cC(0,a,b)){u=this.av(!0)
t=new U.f5(a,b,new U.aE(H.j([],[U.a3])))
this.aA(t,u)
return t.b}else return!1},
V:function(a){var u,t,s,r
u=a.c
if(u instanceof L.bR){t=this.av(!1)
s=u.e
u.b_(0,a.e.c)
r=a.e.a
u.x=r
s.globalAlpha=r
s.beginPath()
this.aA(new U.f3(u,s),t)}else{t=this.av(!0)
this.aA(new U.f6(a,new U.aE(H.j([],[U.a3]))),t)}},
av:function(a){var u,t,s,r
if(a&&this.b.length===0){u=new U.f4(this.b,new U.aE(H.j([],[U.a3])))
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)t[r].M(u)}return a?this.b:this.a},
aA:function(a,b){var u
H.k(b,"$in",[U.al],"$an")
for(u=0;u<b.length;++u)b[u].M(a)},
sb2:function(a){this.c=H.k(a,"$iL",[P.o],"$aL")}}
U.al.prototype={
ep:function(a){if(this.a!=null&&a!=null)throw H.e(P.bw("Command is already assigned to graphics."))
else this.a=a}}
U.dz.prototype={}
U.bI.prototype={
h:function(a){return this.b}}
U.bz.prototype={
h:function(a){return this.b}}
U.cR.prototype={
M:function(a){if(!!a.$icS)a.aP(this)}}
U.cS.prototype={
ct:function(a){this.a=new U.aE(H.j([],[U.a3]))},
aE:function(a){var u,t
u=this.a
t=u.b
if(t!=null){t.Q=!0
u.b=null}},
a5:function(a,b,c){this.a.a5(0,b,c)},
U:function(a,b,c){this.a.U(0,b,c)},
aC:function(a,b,c,d,e,f,g){this.a.aC(0,b,c,d,e,f,!1)}}
U.f2.prototype={
gbi:function(){var u,t,s,r
u=this.b
t=this.d
s=u<t&&this.c<this.e
r=[P.o]
if(s){s=this.c
return new U.L(u,s,t-u,this.e-s,r)}else return new U.L(0,0,0,0,r)},
ap:function(a){this.bg(this.a)},
aj:function(a,b,c,d){this.bg(U.f8(this.a,b,c,d))},
aP:function(a){this.bg(a.b)},
bg:function(a){var u,t,s,r,q,p
for(u=H.k(a,"$iaX",[U.bZ],"$aaX").a,t=u.length,s=0;s<t;++s){r=u[s]
q=this.b
p=r.e
this.b=q>p?p:q
q=this.c
p=r.f
this.c=q>p?p:q
q=this.d
p=r.r
this.d=q<p?p:q
q=this.e
p=r.x
this.e=q<p?p:q}}}
U.f3.prototype={
ct:function(a){this.c.beginPath()},
aE:function(a){this.c.closePath()},
a5:function(a,b,c){this.c.moveTo(b,c)},
U:function(a,b,c){this.c.lineTo(b,c)},
aC:function(a,b,c,d,e,f,g){this.c.arc(b,c,d,e,f,!1)},
ap:function(a){var u=this.c
u.fillStyle=V.fy(a)
u.fill()},
aj:function(a,b,c,d){var u,t,s
u=this.c
u.strokeStyle=V.fy(a)
u.lineWidth=b
t=c===C.j?"miter":"round"
u.lineJoin=c===C.p?"bevel":t
s=d===C.A?"butt":"round"
u.lineCap=d===C.B?"square":s
u.stroke()}}
U.f4.prototype={
ap:function(a){C.a.j(this.b,new U.cR(U.jj(this.a),a))},
aj:function(a,b,c,d){C.a.j(this.b,new U.cR(U.f8(this.a,b,c,d),a))},
aP:function(a){C.a.j(this.b,a)}}
U.f5.prototype={
ap:function(a){var u=this.a
this.b=this.b||u.N(this.c,this.d)},
aj:function(a,b,c,d){var u=U.f8(this.a,b,c,d)
this.b=this.b||u.N(this.c,this.d)},
aP:function(a){this.b=this.b||a.b.N(this.c,this.d)}}
U.f6.prototype={
ap:function(a){this.a.a2(this.b,a)},
aj:function(a,b,c,d){U.f8(this.a,b,c,d).a2(this.b,a)},
aP:function(a){a.b.a2(this.b,a.c)}}
U.aX.prototype={}
U.bZ.prototype={
dw:function(a){var u=a.c
this.c=u
this.d=a.d
this.e=a.e
this.f=a.f
this.r=a.r
this.x=a.x
C.q.a6(this.a,0,u*2,a.a)
C.F.a6(this.b,0,this.d,a.b)},
i:function(a,b){var u,t,s,r,q,p
u=this.c*2
t=this.a
s=t.length
if(u+2>s){r=s<16?16:s
if(r>256)r=256
q=new Float32Array(s+r)
this.a=q
C.q.bO(q,0,t)}t=this.e
this.e=t>a?a:t
t=this.f
this.f=t>b?b:t
t=this.r
this.r=t<a?a:t
t=this.x
this.x=t<b?b:t
t=this.a
q=t.length
if(u>=q)return H.a(t,u)
t[u]=a
p=u+1
if(p>=q)return H.a(t,p)
t[p]=b
return this.c++},
w:function(a,b,c){var u,t,s,r,q,p
u=this.d
t=this.b
s=t.length
if(u+3>s){r=s<32?32:s
if(r>256)r=256
q=new Int16Array(s+r)
this.b=q
C.F.bO(q,0,t)}t=this.b
q=t.length
if(u>=q)return H.a(t,u)
t[u]=a
p=u+1
if(p>=q)return H.a(t,p)
t[p]=b
p=u+2
if(p>=q)return H.a(t,p)
t[p]=c
this.d+=3},
a2:function(a,b){var u,t,s
u=this.b.buffer
t=this.d
u.toString
s=H.hF(u,0,t)
t=this.a.buffer
u=this.c
t.toString
a.c.aU(a,s,H.hE(t,0,u*2),b)}}
U.aE.prototype={
dz:function(a){var u,t,s,r,q,p,o
for(u=a.a,t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(q.d===0)q.b3()
T.C()
p=q.c
p=new Float32Array(p*2)
o=q.d
p=new U.a3(p,new Int16Array(o),17976931348623157e292,17976931348623157e292,-17976931348623157e292,-17976931348623157e292)
p.dw(q)
o=q.z
if(typeof o!=="boolean"){o=q.c5()>=0
q.z=o}p.z=o
p.Q=q.Q
C.a.j(s,p)}},
a5:function(a,b,c){var u
T.C()
u=new Float32Array(16)
u=new U.a3(u,new Int16Array(32),17976931348623157e292,17976931348623157e292,-17976931348623157e292,-17976931348623157e292)
this.b=u
u.i(b,c)
C.a.j(this.a,this.b)},
U:function(a,b,c){var u=this.b
if(u==null)this.a5(0,b,c)
else u.i(b,c)},
aC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=C.d.K(e,6.283185307179586)
t=C.b.K(f,6.283185307179586)-u
if(f<e){if(t<=0)t+=6.283185307179586}else t=f-e>=6.283185307179586?6.283185307179586:C.k.K(t,6.283185307179586)
s=C.k.cw(Math.abs(60*t/6.283185307179586))
r=t/s
q=Math.cos(r)
p=Math.sin(r)
o=b-b*q+c*p
n=c-b*p-c*q
m=b+Math.cos(u)*d
l=c+Math.sin(u)*d
this.U(0,m,l)
for(k=1;k<=s;++k,l=i,m=j){j=m*q-l*p+o
i=m*p+l*q+n
this.b.i(j,i)}},
a2:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.d===0)r.b3()
r.a2(a,b)}},
N:function(a,b){var u,t,s,r,q
for(u=this.a,t=u.length,s=0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(!(a>=q.e&&a<=q.r&&b>=q.f&&b<=q.x))continue
if(q.d===0)q.b3()
s+=q.fD(a,b)}return s!==0},
$aaX:function(){return[U.a3]}}
U.a3.prototype={
geK:function(){var u=this.z
if(typeof u!=="boolean"){u=this.c5()>=0
this.z=u}return u},
i:function(a,b){var u,t,s,r
u=this.a
t=this.c*2
if(t!==0){s=t-2
r=u.length
if(s<0||s>=r)return H.a(u,s)
if(V.il(u[s],a)){s=t-1
if(s<0||s>=r)return H.a(u,s)
s=!V.il(u[s],b)}else s=!0}else s=!0
if(s){this.d=0
this.z=null
return this.ds(a,b)}else return this.c-1},
fD:function(a,b){var u,t,s,r,q,p,o,n,m,l
if(this.e>a||this.r<a)return 0
if(this.f>b||this.x<b)return 0
u=this.c
if(u<3)return 0
t=this.a
s=(u-1)*2
r=t.length
if(s<0||s>=r)return H.a(t,s)
q=t[s];++s
if(s>=r)return H.a(t,s)
p=t[s]
for(o=0,n=0;n<u;++n,p=l,q=m){s=n*2
if(s>=r)return H.a(t,s)
m=t[s];++s
if(s>=r)return H.a(t,s)
l=t[s]
if(p<=b){if(l>b&&(m-q)*(b-p)-(a-q)*(l-p)>0)++o}else if(l<=b&&(m-q)*(b-p)-(a-q)*(l-p)<0)--o}return o},
b3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
this.d=0
u=this.a
t=this.c
if(t<3)return
s=H.j([],[P.v])
r=this.geK()
for(q=0;q<t;++q)C.a.j(s,q)
for(p=u.length,o=0;n=s.length,n>3;){m=s[C.d.K(o,n)]
l=o+1
k=s[l%n]
j=s[(o+2)%n]
i=m*2
if(i>=p)return H.a(u,i)
h=u[i];++i
if(i>=p)return H.a(u,i)
g=u[i]
i=k*2
if(i>=p)return H.a(u,i)
f=u[i];++i
if(i>=p)return H.a(u,i)
e=u[i]
i=j*2
if(i>=p)return H.a(u,i)
d=u[i];++i
if(i>=p)return H.a(u,i)
c=d-h
b=u[i]-g
a=f-h
a0=e-g
a1=b*a-c*a0
a2=r?a1>=0:a1<=0
i=a1*a
a3=a1*a0
a4=a1*b
a5=a1*c
a6=a1*a1
a7=0
a8=0
a9=0
while(!0){if(!(a9<n&&a2))break
if(a9>=n)return H.a(s,a9)
b0=s[a9]
if(b0!==m&&b0!==k&&b0!==j){b1=b0*2
if(b1>=p)return H.a(u,b1)
b2=u[b1]-h;++b1
if(b1>=p)return H.a(u,b1)
b3=u[b1]-g
a7=i*b3-a3*b2
if(a7>=0){a8=a4*b2-a5*b3
if(a8>=0)a2=a7+a8<a6?!1:a2}}++a9}if(a2){this.w(m,k,j)
C.a.bD(s,l%s.length)
o=0}else{if(o>3*n)break
o=l}}if(0>=n)return H.a(s,0)
p=s[0]
if(1>=n)return H.a(s,1)
i=s[1]
if(2>=n)return H.a(s,2)
this.w(p,i,s[2])},
c5:function(){var u,t,s,r,q,p,o,n,m,l
u=this.a
t=this.c
if(t<3)return 0
s=(t-1)*2
r=u.length
if(s<0||s>=r)return H.a(u,s)
q=u[s];++s
if(s>=r)return H.a(u,s)
p=u[s]
for(o=0,n=0;n<t;++n,p=l,q=m){s=n*2
if(s>=r)return H.a(u,s)
m=u[s];++s
if(s>=r)return H.a(u,s)
l=u[s]
o+=(q-m)*(p+l)}return o/2}}
U.f7.prototype={
dA:function(a,b,c,d){var u,t,s,r,q,p,o
for(u=a.a,t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
p=q.c
T.C()
o=new Float32Array(p*4)
p=new U.c_(this,-1,-1,o,new Int16Array(p*6),17976931348623157e292,17976931348623157e292,-17976931348623157e292,-17976931348623157e292)
p.dH(q)
C.a.j(s,p)}},
a2:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].a2(a,b)},
N:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(!(a>=r.e&&a<=r.r&&b>=r.f&&b<=r.x))continue
if(r.N(a,b))return!0}return!1},
$aaX:function(){return[U.c_]}}
U.c_.prototype={
N:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(u=this.d-2,t=this.a,s=t.length,r=this.b,q=r.length,p=0;p<u;p+=3){if(p>=q)return H.a(r,p)
o=r[p]*2
n=p+1
if(n>=q)return H.a(r,n)
m=r[n]*2
n=p+2
if(n>=q)return H.a(r,n)
l=r[n]*2
if(o<0||o>=s)return H.a(t,o)
k=t[o]-a
if(m<0||m>=s)return H.a(t,m)
j=t[m]-a
if(l<0||l>=s)return H.a(t,l)
i=t[l]-a
if(k>0&&j>0&&i>0)continue
if(k<0&&j<0&&i<0)continue
n=o+1
if(n>=s)return H.a(t,n)
h=t[n]-b
n=m+1
if(n>=s)return H.a(t,n)
g=t[n]-b
n=l+1
if(n>=s)return H.a(t,n)
f=t[n]-b
if(h>0&&g>0&&f>0)continue
if(h<0&&g<0&&f<0)continue
e=k*g-j*h
d=j*f-i*g
c=i*h-k*f
if(e>=0&&d>=0&&c>=0)return!0
if(e<=0&&d<=0&&c<=0)return!0}return!1},
dH:function(d5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
u=this.z
t=u.c
s=u.d
r=d5.a
q=d5.c
p=d5.Q
if(p&&q>=2){o=r.length
if(0>=o)return H.a(r,0)
n=r[0]
if(1>=o)return H.a(r,1)
m=r[1]
l=q*2
k=l-2
if(k<0||k>=o)return H.a(r,k)
j=r[k];--l
if(l<0||l>=o)return H.a(r,l)
i=r[l]
if(n===j&&m===i)--q}if(q<=1)return
for(o=q-1,l=r.length,u=0.5*u.b,k=!p,h=t!==C.j,g=s===C.a1,f=s===C.B,e=0,d=0,c=0,b=0,a=0,a0=-2;a0<=q;a0=a1,a=b0,b=a9,c=a8,d=a5,e=a3){a1=a0+1
a2=C.d.K(a1,q)*2
if(a2<0||a2>=l)return H.a(r,a2)
a3=r[a2]
a4=a2+1
if(a4>=l)return H.a(r,a4)
a5=r[a4]
a6=a3-e
a7=d-a5
a8=Math.sqrt(a6*a6+a7*a7)/u
a9=a7/a8
b0=a6/a8
if(a0===0&&k)if(f){this.Q=this.i(e+a9-b0,d+b0+a9)
this.ch=this.i(e-a9-b0,d-b0+a9)}else{a4=e+a9
b1=d+b0
b2=e-a9
b3=d-b0
if(g){this.Q=this.i(a4,b1)
a4=this.i(b2,b3)
this.ch=a4
this.a8(e,d,-a9,-b0,a9,b0,this.Q,a4,!0)}else{this.Q=this.i(a4,b1)
this.ch=this.i(b2,b3)}}else if(a0===o&&k){b4=this.Q
b5=this.ch
if(f){this.Q=this.i(e+b+a,d+a-b)
this.ch=this.i(e-b+a,d-a-b)}else{a4=e+b
b1=d+a
b2=e-b
b3=d-a
if(g){this.Q=this.i(a4,b1)
a4=this.i(b2,b3)
this.ch=a4
this.a8(e,d,b,a,-b,-a,a4,this.Q,!0)}else{this.Q=this.i(a4,b1)
this.ch=this.i(b2,b3)}}this.w(b4,b5,this.Q)
this.w(b5,this.Q,this.ch)}else{if(a0>=0)a4=a0<q||p
else a4=!1
if(a4){b6=(a9*(b-a9)+b0*(a-b0))/(a9*a-b0*b)
b7=Math.abs(b6)
if(isNaN(b6)){b6=0
b7=0}b8=h&&b7<0.1?C.j:t
if(b8===C.j&&b7>10)b8=C.p
b9=b-b6*a
c0=a+b6*b
c1=b7>c||b7>a8
b5=this.Q
a4=b6>=0
b4=a4?b5:this.ch
c2=a4?this.ch:b5
if(b8===C.j){if(!c1){c3=this.ch
c4=this.i(e+b9,d+c0)
this.Q=c4
c5=this.i(e-b9,d-c0)
this.ch=c5}else{b1=e-a9
b2=d-b0
b3=e+a9
c6=d+b0
if(a4){c3=this.i(e+b,d+a)
c4=this.i(e-b9,d-c0)
c5=this.i(b1,b2)
this.ch=c5
this.Q=this.i(b3,c6)
this.w(b4,c3,c4)}else{c3=this.i(e-b,d-a)
c4=this.i(e+b9,d+c0)
c5=this.i(b3,c6)
this.Q=c5
this.ch=this.i(b1,b2)
this.w(b4,c3,c4)}}this.w(b4,c2,c4)
this.w(c3,c4,c5)}else if(b8===C.p){b1=!c1
if(b1&&a4){c3=this.i(e+b9,d+c0)
this.Q=c3
c4=this.i(e-b,d-a)
c5=this.i(e-a9,d-b0)
this.ch=c5}else if(b1){c3=this.i(e-b9,d-c0)
this.ch=c3
c4=this.i(e+b,d+a)
c5=this.i(e+a9,d+b0)
this.Q=c5}else{b1=e+b
b2=d+a
b3=e-b
c6=d-a
c7=e-a9
c8=d-b0
c9=e+a9
d0=d+b0
if(a4){c3=this.i(b1,b2)
c4=this.i(b3,c6)
c5=this.i(c7,c8)
this.ch=c5
this.Q=this.i(c9,d0)}else{c3=this.i(b3,c6)
c4=this.i(b1,b2)
c5=this.i(c9,d0)
this.Q=c5
this.ch=this.i(c7,c8)}}this.w(b4,c2,c3)
this.w(c2,c3,c4)
this.w(c3,c4,c5)}else if(b8===C.a7){b1=!c1
if(b1&&a4){c3=this.i(e+b9,d+c0)
this.Q=c3
c4=this.i(e-b,d-a)
this.ch=this.a8(e,d,-b,-a,-a9,-b0,c3,c4,!1)}else if(b1){c3=this.i(e-b9,d-c0)
this.ch=c3
c4=this.i(e+b,d+a)
this.Q=this.a8(e,d,b,a,a9,b0,c3,c4,!0)}else{b1=e-b
b2=d-a
b3=e+b
c6=d+a
if(a4){c3=this.i(b3,c6)
c4=this.i(b1,b2)
this.Q=this.i(e+a9,d+b0)
this.ch=this.a8(e,d,-b,-a,-a9,-b0,c3,c4,!1)}else{c3=this.i(b1,b2)
c4=this.i(b3,c6)
this.ch=this.i(e-a9,d-b0)
this.Q=this.a8(e,d,b,a,a9,b0,c3,c4,!0)}}this.w(b4,c2,c3)
this.w(c2,c3,c4)}if(b5<0){a4=this.a
b1=this.Q*2
b2=a4.length
if(b1<0||b1>=b2)return H.a(a4,b1)
d1=a4[b1];++b1
if(b1>=b2)return H.a(a4,b1)
d2=a4[b1]
b1=this.ch*2
if(b1<0||b1>=b2)return H.a(a4,b1)
d3=a4[b1];++b1
if(b1>=b2)return H.a(a4,b1)
d4=a4[b1]
this.c=0
this.d=0
this.Q=this.i(d1,d2)
this.ch=this.i(d3,d4)}}}}},
a8:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=Math.atan2(d,c)
t=Math.atan2(a1,a0)
s=C.b.K(u,6.283185307179586)
r=C.b.K(t,6.283185307179586)-s
if(a4&&t>u){if(r>=0)r-=6.283185307179586}else if(a4)r=C.k.K(r,6.283185307179586)-6.283185307179586
else if(t<u){if(r<=0)r+=6.283185307179586}else r=C.k.K(r,6.283185307179586)
q=C.k.cw(Math.abs(10*r/3.141592653589793))
p=r/q
o=Math.cos(p)
n=Math.sin(p)
m=a-a*o+b*n
l=b-a*n-b*o
k=a+c
j=b+d
for(i=a3,h=0;h<q;++h,j=f,k=g,i=e){g=k*o-j*n+m
f=k*n+j*o+l
e=this.i(g,f)
this.w(a2,i,e)}return i}}
L.db.prototype={}
L.bP.prototype={}
L.bQ.prototype={
ao:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.cv.prototype={
h:function(a){return this.b}}
L.aP.prototype={}
L.dZ.prototype={}
L.bR.prototype={
gcY:function(){return C.H},
aq:function(a){var u
this.b_(0,this.f)
this.r=C.f
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1},
bk:function(a,b){var u,t,s
this.b_(0,this.f)
this.r=C.f
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1
t=b>>>24&255
if(t<255){s=this.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fy(b)
s=this.d
u.fillRect(0,0,s.width,s.height)}},
F:function(a){},
aT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
t=b.a.c
s=b.d
r=b.b
q=b.r
p=a.e
o=p.c
n=p.a
m=p.b
if(this.x!==n){this.x=n
u.globalAlpha=n}if(this.r!==m){this.r=m
u.globalCompositeOperation=m.c}if(s===0){p=o.a
u.setTransform(p[0],p[1],p[2],p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[0]
h=q[1]
u.drawImage(t,p,l,k,j,i,h,q[8]-i,q[9]-h)}else if(s===1){p=o.a
u.setTransform(-p[2],-p[3],p[0],p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,0-q[13],q[12],q[9]-q[1],q[8]-q[0])}else if(s===2){p=o.a
u.setTransform(-p[0],-p[1],-p[2],-p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[8]
h=q[9]
u.drawImage(t,p,l,k,j,0-i,0-h,i-q[0],h-q[1])}else if(s===3){p=o.a
u.setTransform(p[2],p[3],-p[0],-p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,q[5],0-q[4],q[9]-q[1],q[8]-q[0])}},
aU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=this.e
t=a.e
s=t.c
r=t.a
q=t.b
if(this.x!==r){this.x=r
u.globalAlpha=r}if(this.r!==q){this.r=q
u.globalCompositeOperation=q.c}t=s.a
u.setTransform(t[0],t[1],t[2],t[3],t[4],t[5])
u.beginPath()
for(t=b.length-2,p=c.length,o=0;o<t;o+=3){n=b[o]<<1>>>0
m=b[o+1]<<1>>>0
l=b[o+2]<<1>>>0
if(n>=p)return H.a(c,n)
k=c[n]
j=n+1
if(j>=p)return H.a(c,j)
i=c[j]
if(m>=p)return H.a(c,m)
h=c[m]
j=m+1
if(j>=p)return H.a(c,j)
g=c[j]
if(l>=p)return H.a(c,l)
f=c[l]
j=l+1
if(j>=p)return H.a(c,j)
e=c[j]
u.moveTo(k,i)
u.lineTo(h,g)
u.lineTo(f,e)}u.fillStyle=V.fy(d)
u.fill()},
b_:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.cu.prototype={
gcY:function(){return C.r},
aq:function(a){var u,t,s
u=this.d
t=u.width
s=u.height
this.y=null
this.e.bindFramebuffer(36160,null)
this.e.viewport(0,0,t,s)
u=this.f
u.ai()
if(typeof t!=="number")return H.P(t)
if(typeof s!=="number")return H.P(s)
u.d7(0,2/t,-2/s,1)
u.fu(0,-1,1,0)
this.x.scW(u)},
bk:function(a,b){var u
C.a.sl(this.dS(),0)
this.eE(null)
this.eF(0)
u=(b>>>24&255)/255
this.e.colorMask(!0,!0,!0,!0)
this.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
this.e.clear(17408)},
F:function(a){this.x.F(0)},
aT:function(a,b){var u=this.cy
this.cr(u)
this.cq(a.e.b)
this.cs(b.a)
u.aT(a,b)},
aU:function(a,b,c,d){var u=this.dx
this.cr(u)
this.cq(a.e.b)
u.aU(a,b,c,d)},
cr:function(a){var u=this.x
if(a!==u){u.F(0)
this.x=a
a.am(this)
this.x.scW(this.f)}},
cq:function(a){if(a!==this.Q){this.x.F(0)
this.Q=a
this.e.blendFunc(a.a,a.b)}},
cs:function(a){var u,t,s,r
u=this.fx
if(a!==u[0]){this.x.F(0)
C.a.p(u,0,a)
u=a.y
t=this.cx
if(u!==t){a.x=this
a.y=t
u=this.e
a.Q=u
a.ch=u.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(3553,a.ch)
s=a.Q.isEnabled(3089)
if(s)a.Q.disable(3089)
u=a.c
t=a.Q
r=t&&C.t
if(u!=null){r.d3(t,3553,0,6408,6408,5121,u)
a.z=a.Q.getError()===1281}else r.d4(t,3553,0,6408,a.a,a.b,0,6408,5121,null)
if(a.z){u=a.a
u=W.iJ(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.t).d3(u,3553,0,6408,6408,5121,a.d)}if(s)a.Q.enable(3089)
a.Q.texParameteri(3553,10242,a.f.a)
a.Q.texParameteri(3553,10243,a.r.a)
a.Q.texParameteri(3553,10241,a.e.a)
a.Q.texParameteri(3553,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(3553,a.ch)}}},
dS:function(){var u=this.y
return u instanceof L.cw?u.r:this.r},
eF:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
eE:function(a){this.e.disable(3089)},
e_:function(a){H.m(a,"$iai").preventDefault()
this.b.j(0,new L.aP())},
e1:function(a){var u
H.m(a,"$iai")
u=$.e_+1
$.e_=u
this.cx=u
this.c.j(0,new L.aP())}}
L.e0.prototype={}
L.cw.prototype={}
L.fs.prototype={
$1:function(a){var u,t,s,r,q
H.fJ(a)
if(typeof a!=="number")return a.bK()
u=a/1000
t=$.hX
if(typeof t!=="number")return H.P(t)
s=u-t
$.hX=u
$.h1=-1
L.hW()
t=$.hi()
t=H.j(t.slice(0),[H.d(t,0)])
r=t.length
q=0
for(;q<t.length;t.length===r||(0,H.F)(t),++q)t[q].$1(s)},
$S:30}
L.cx.prototype={
e5:function(a){var u
H.fJ(a)
if(this.a){if(typeof a!=="number")return a.fF()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.aB(a)}}
L.fb.prototype={}
L.cy.prototype={
scW:function(a){var u=this.e.t(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
am:function(a){var u,t,s,r
u=this.a
t=a.cx
if(u!==t){this.a=t
u=a.e
this.b=u
s=a.a
this.x=s
r=a.dy
this.f=r
this.r=a.fr
if(r.e!==t){r.e=t
r.x=s
r.r=u
u=u.createBuffer()
r.f=u
r.r.bindBuffer(34963,u)
r.r.bufferData(34963,r.a,r.b)}r.r.bindBuffer(34963,r.f)
u=this.r
t=u.e
r=a.cx
if(t!==r){u.e=r
u.x=s
t=a.e
u.r=t
t=t.createBuffer()
u.f=t
u.r.bindBuffer(34962,t)
u.r.bufferData(34962,u.a,u.b)}u.r.bindBuffer(34962,u.f)
u=this.dL(this.b)
this.c=u
this.eD(this.b,u)
this.eG(this.b,this.c)}this.b.useProgram(this.c)},
F:function(a){var u,t,s,r,q
u=this.f
t=u.c
if(t>0&&this.r.c>0){s=u.a.buffer
s.toString
r=H.hF(s,0,t)
u.r.bufferSubData(34963,0,r)
s=u.x
s.c=s.c+u.d
u=this.f
u.c=0
u.d=0
u=this.r
s=u.a.buffer
q=u.c
s.toString
r=H.hE(s,0,q)
u.r.bufferSubData(34962,0,r)
q=u.x
q.b=q.b+u.d
u=this.r
u.c=0
u.d=0
this.b.drawElements(4,t,5123,0);++this.x.a}},
dL:function(a){var u,t,s
u=a.createProgram()
t=this.ca(a,this.gbJ(),35633)
s=this.ca(a,this.gbx(),35632)
a.attachShader(u,t)
a.attachShader(u,s)
a.linkProgram(u)
if(a.getProgramParameter(u,35714)===!0)return u
throw H.e(P.an(a.isContextLost()?"ContextLost":a.getProgramInfoLog(u)))},
ca:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.e(P.an(a.isContextLost()?"ContextLost":a.getShaderInfoLog(u)))},
eD:function(a,b){var u,t,s,r,q
u=this.d
u.aa(0)
t=H.J(a.getProgramParameter(b,35721))
if(typeof t!=="number")return H.P(t)
s=0
for(;s<t;++s){r=a.getActiveAttrib(b,s)
q=a.getAttribLocation(b,r.name)
a.enableVertexAttribArray(q)
u.p(0,r.name,q)}},
eG:function(a,b){var u,t,s,r,q
u=this.e
u.aa(0)
t=H.J(a.getProgramParameter(b,35718))
if(typeof t!=="number")return H.P(t)
s=0
for(;s<t;++s){r=a.getActiveUniform(b,s)
q=a.getUniformLocation(b,r.name)
u.p(0,r.name,q)}}}
L.e4.prototype={
gbJ:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbx:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
am:function(a){var u
this.bU(a)
u=this.b;(u&&C.t).fw(u,this.e.t(0,"uSampler"),0)
u=this.d
this.r.ao(u.t(0,"aVertexPosition"),2,20,0)
this.r.ao(u.t(0,"aVertexTextCoord"),2,20,8)
this.r.ao(u.t(0,"aVertexAlpha"),1,20,16)},
aT:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=a2.e
t=u.a
s=u.c
r=a3.r
u=this.f
q=u.a
p=q.length
if(u.c+6>=p)this.F(0)
u=this.r
o=u.a
n=o.length
if(u.c+20>=n)this.F(0)
u=this.f
m=u.c
l=this.r
k=l.c
j=l.d
if(m>=p)return H.a(q,m)
q[m]=j
i=m+1
if(i>=p)return H.a(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.a(q,i)
q[i]=h
i=m+3
if(i>=p)return H.a(q,i)
q[i]=j
i=m+4
if(i>=p)return H.a(q,i)
q[i]=h
h=m+5
if(h>=p)return H.a(q,h)
q[h]=j+3
u.c=m+6
u.d+=6
u=r[0]
h=s.a
p=h[0]
i=h[4]
g=u*p+i
f=r[8]
e=f*p+i
i=h[1]
p=h[5]
d=u*i+p
c=f*i+p
p=r[1]
i=h[2]
b=p*i
f=r[9]
a=f*i
h=h[3]
a0=p*h
a1=f*h
if(k>=n)return H.a(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.a(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+4
if(h>=n)return H.a(o,h)
o[h]=t
h=k+5
if(h>=n)return H.a(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.a(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+9
if(h>=n)return H.a(o,h)
o[h]=t
h=k+10
if(h>=n)return H.a(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.a(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+14
if(h>=n)return H.a(o,h)
o[h]=t
h=k+15
if(h>=n)return H.a(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.a(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+19
if(h>=n)return H.a(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.fU.prototype={
gbJ:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbx:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.e5.prototype={
gbJ:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbx:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
am:function(a){var u
this.bU(a)
u=this.d
this.r.ao(u.t(0,"aVertexPosition"),2,24,0)
this.r.ao(u.t(0,"aVertexColor"),4,24,8)},
aU:function(a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
u=a9.e
t=u.c
s=u.a
r=b0.length
u=b1.length
q=u>>>1
p=this.f
o=p.a
n=o.length
if(p.c+r>=n)this.F(0)
p=this.r
m=p.a
l=q*6
k=m.length
if(p.c+l>=k)this.F(0)
p=this.f
j=p.c
i=this.r
h=i.c
g=i.d
for(f=0;f<r;++f){i=j+f
e=b0[f]
if(i>=n)return H.a(o,i)
o[i]=g+e}p.c=j+r
this.f.d+=r
p=t.a
d=p[0]
c=p[1]
b=p[2]
a=p[3]
a0=p[4]
a1=p[5]
a2=0.00392156862745098*(b2>>>24&255)*s
a3=0.00392156862745098*(b2>>>16&255)*a2
a4=0.00392156862745098*(b2>>>8&255)*a2
a5=0.00392156862745098*(b2&255)*a2
for(f=0,a6=0;f<q;++f,a6+=2){if(a6>=u)return H.a(b1,a6)
a7=b1[a6]
p=a6+1
if(p>=u)return H.a(b1,p)
a8=b1[p]
if(h>=k)return H.a(m,h)
m[h]=a0+d*a7+b*a8
p=h+1
if(p>=k)return H.a(m,p)
m[p]=a1+c*a7+a*a8
p=h+2
if(p>=k)return H.a(m,p)
m[p]=a3
p=h+3
if(p>=k)return H.a(m,p)
m[p]=a4
p=h+4
if(p>=k)return H.a(m,p)
m[p]=a5
p=h+5
if(p>=k)return H.a(m,p)
m[p]=a2
h+=6}u=this.r
u.c+=l
u.d+=q}}
L.bY.prototype={
gfe:function(){var u,t
u=this.f
if(u==null){u=T.C()
t=new T.bb(new Float32Array(16))
t.ai()
t=new L.bY(1,C.f,u,t,this)
this.f=t
u=t}return u}}
L.e6.prototype={
cZ:function(a,b){var u,t
u=this.d
this.e=u
u=u.c
u.cT()
t=this.e
t.a=1
t.b=C.f
u.eO(b)},
bE:function(a){var u,t,s,r,q
u=a.gbI()
t=a.ch
s=this.e
r=s.gfe()
r.c.cE(u,s.c)
q=s.b
r.b=q
r.a=t*s.a
this.e=r
a.V(this)
this.e=s}}
L.aQ.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.cz.prototype={
sf3:function(a){var u
if(this.e===a)return
this.e=a
u=this.x
if(u==null||this.ch==null)return
if(u.cx!==this.y)return
u.cs(this)
this.Q.texParameteri(3553,10241,this.e.a)
this.Q.texParameteri(3553,10240,this.e.a)}}
L.cA.prototype={}
L.cB.prototype={}
L.e7.prototype={}
T.dK.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.c8.prototype={
gcv:function(){return!1}}
R.a5.prototype={}
R.b4.prototype={}
R.bg.prototype={}
R.V.prototype={
gcv:function(){return!0}}
R.cd.prototype={
af:function(a,b,c){var u,t,s,r
H.i8(c,R.V,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.a_([P.z,[R.aJ,R.V]])
this.sdQ(u)}t=[c]
s=H.k(u.t(0,b),"$iaJ",t,"$aaJ")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.aJ(this,H.j(r,[[R.G,c]]),t)
u.p(0,b,s)}return s},
by:function(a,b){var u,t,s
u=this.a
if(u==null)return!1
t=u.t(0,a)
if(t==null)return!1
s=t.d
return b?s>0:t.c.length>s},
f7:function(a){return this.by(a,!1)},
bn:function(a,b,c){var u,t
a.f=!1
a.r=!1
u=this.a
if(u==null)return
t=u.t(0,a.a)
if(t==null)return
t.dN(a,b,c)},
sdQ:function(a){this.a=H.k(a,"$ihC",[P.z,[R.aJ,R.V]],"$ahC")}}
R.bD.prototype={
h:function(a){return this.b}}
R.aJ.prototype={
aN:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.b(c,{func:1,ret:-1})
return this.Z(a,!1,0)},
Z:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
u=H.d(this,0)
t=new R.G(c,!1,this,H.b(a,{func:1,ret:-1,args:[u]}),this.$ti)
s=this.c
r=s.length
q=new Array(r+1)
q.fixed$length=Array
p=H.j(q,[[R.G,u]])
o=p.length-1
for(n=0,m=0;n<r;++n,m=k){l=s[n]
if(n===m&&l.a<c){k=m+1
o=m
m=k}k=m+1
C.a.p(p,m,l)}C.a.p(p,o,t)
this.sew(p)
u=[R.a5]
if(H.I(t,"$iG",u,null)){r=$.hg();(r&&C.a).j(r,H.hc(t,"$iG",u,"$aG"))}else{u=[R.b4]
if(H.I(t,"$iG",u,null)){r=$.hh();(r&&C.a).j(r,H.hc(t,"$iG",u,"$aG"))}else{u=[R.bg]
if(H.I(t,"$iG",u,null)){r=$.hj();(r&&C.a).j(r,H.hc(t,"$iG",u,"$aG"))}}}return t},
dN:function(a,b,c){var u,t,s,r,q,p,o
u=H.d(this,0)
H.l(a,u)
t=this.c
s=c===C.E
for(r=t.length,u={func:1,ret:-1,args:[u]},q=0;q<r;++q){p=t[q]
if(!p.c)if(p.b<=0){p.d
o=s}else o=!0
else o=!0
if(o)continue
H.b(p.f,u).$1(a)}},
sew:function(a){this.c=H.k(a,"$in",[[R.G,H.d(this,0)]],"$an")}}
R.G.prototype={}
R.bF.prototype={
h:function(a){return this.b}}
R.a7.prototype={}
R.a0.prototype={}
R.aC.prototype={}
T.dR.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.f(u[0])+", b="+H.f(u[1])+", c="+H.f(u[2])+", d="+H.f(u[3])+", tx="+H.f(u[4])+", ty="+H.f(u[5])+"]"},
gcH:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
bH:function(a){var u,t,s,r,q,p,o,n
u=P.o
H.k(a,"$iW",[u],"$aW")
t=a.a
t.toString
s=a.b
s.toString
r=this.a
q=r[0]
if(typeof t!=="number")return t.X()
p=r[2]
if(typeof s!=="number")return s.X()
o=t*q+s*p+r[4]
n=t*r[1]+s*r[3]+r[5]
u=[u]
if(H.I(null,"$iD",u,null)){null.fH(o,n)
return}else return new U.D(o,n,u)},
cT:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aX:function(a,b,c){var u,t
u=this.a
t=u[0]
if(typeof b!=="number")return H.P(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.P(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
a7:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
eO:function(a){var u,t
u=this.a
t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
cE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=a.a
t=u[0]
s=u[1]
r=u[2]
q=u[3]
p=u[4]
o=u[5]
u=b.a
n=u[0]
m=u[1]
l=u[2]
k=u[3]
j=u[4]
i=u[5]
u=this.a
u[0]=t*n+s*l
u[1]=t*m+s*k
u[2]=r*n+q*l
u[3]=r*m+q*k
u[4]=p*n+o*l+j
u[5]=p*m+o*k+i}}
T.bb.prototype={
ai:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
d7:function(a,b,c,d){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*c
u[5]=u[5]*c
u[6]=u[6]*c
u[7]=u[7]*c
u[8]=u[8]*d
u[9]=u[9]*d
u[10]=u[10]*d
u[11]=u[11]*d},
fu:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.D.prototype={
h:function(a){return"Point<"+new H.bV(H.d(this,0)).h(0)+"> [x="+H.f(this.a)+", y="+H.f(this.b)+"]"},
B:function(a,b){var u
if(b==null)return!1
if(H.I(b,"$iW",[P.o],"$aW")){u=J.ie(b)
u=this.a===u.gH(b)&&this.b===u.gI(b)}else u=!1
return u},
gk:function(a){var u,t
u=C.b.gk(this.a)
t=C.b.gk(this.b)
return O.hy(O.bH(O.bH(0,u),t))},
sH:function(a,b){this.a=H.l(b,H.d(this,0))},
sI:function(a,b){this.b=H.l(b,H.d(this,0))},
$iW:1,
gH:function(a){return this.a},
gI:function(a){return this.b}}
U.L.prototype={
h:function(a){return"Rectangle<"+new H.bV(H.d(this,0)).h(0)+"> [left="+H.f(this.a)+", top="+H.f(this.b)+", width="+H.f(this.c)+", height="+H.f(this.d)+"]"},
B:function(a,b){var u
if(b==null)return!1
if(H.I(b,"$iaO",[P.o],"$aaO")){u=J.cZ(b)
u=this.a===u.gae(b)&&this.b===u.gag(b)&&this.c===u.gah(b)&&this.d===u.gad(b)}else u=!1
return u},
gk:function(a){var u,t,s,r
u=C.b.gk(this.a)
t=C.b.gk(this.b)
s=C.b.gk(this.c)
r=C.b.gk(this.d)
return O.hy(O.bH(O.bH(O.bH(O.bH(0,u),t),s),r))},
cC:function(a,b,c){var u,t,s
u=this.a
if(u<=b){t=this.b
if(t<=c){s=H.d(this,0)
u=H.l(u+this.c,s)>b&&H.l(t+this.d,s)>c}else u=!1}else u=!1
return u},
sae:function(a,b){this.a=H.l(b,H.d(this,0))},
sag:function(a,b){this.b=H.l(b,H.d(this,0))},
sah:function(a,b){this.c=H.l(b,H.d(this,0))},
sad:function(a,b){this.d=H.l(b,H.d(this,0))},
$iaO:1,
gae:function(a){return this.a},
gag:function(a){return this.b},
gah:function(a){return this.c},
gad:function(a){return this.d}}
N.cf.prototype={
e9:function(a){this.d.aD()
this.e.aD()
this.b.R(0,this.a)},
e7:function(a){this.d.aD()
this.e.aD()
this.b.cB(new T.dK("Failed to load "+H.f(this.a.src)+".",null))}}
O.cC.prototype={
aO:function(a){var u=0,t=P.hZ(O.cC),s,r=this,q,p,o,n
var $async$aO=P.i4(function(b,c){if(b===1)return P.hS(c,t)
while(true)switch(u){case 0:q=r.gfj()
p=[P.A,,]
o=H.d(q,0)
u=3
return P.hR(P.iS(new H.dQ(q,H.b(new O.eb(),{func:1,ret:p,args:[o]}),[o,p]),null),$async$aO)
case 3:n=r.geT().length
if(n>0)throw H.e(P.an("Failed to load "+n+" resource(s)."))
else{s=r
u=1
break}case 1:return P.hT(s,t)}})
return P.hU($async$aO,t)},
gfj:function(){var u,t
u=this.a
u=u.gd6(u)
t=H.h8(u,"t",0)
return P.hB(new H.cJ(u,H.b(new O.ec(),{func:1,ret:P.Y,args:[t]}),[t]),!0,t)},
geT:function(){var u,t
u=this.a
u=u.gd6(u)
t=H.h8(u,"t",0)
return P.hB(new H.cJ(u,H.b(new O.ea(),{func:1,ret:P.Y,args:[t]}),[t]),!0,t)}}
O.eb.prototype={
$1:function(a){return C.l.gcA(H.m(a,"$ia8"))},
$S:33}
O.ec.prototype={
$1:function(a){C.l.gfO(H.m(a,"$ia8"))
return!1},
$S:13}
O.ea.prototype={
$1:function(a){C.l.gfJ(H.m(a,"$ia8"))
return!0},
$S:13}
O.a8.prototype={}
Q.dS.prototype={}
A.fD.prototype={
$2:function(a,b){var u,t
H.J(a)
u=J.aF(b)
if(typeof a!=="number")return a.D()
t=536870911&a+u
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:35}
T.q.prototype={
v:function(a,b){var u=this.a
u[0]=a
u[1]=b},
at:function(a){var u,t
u=a.a
t=this.a
t[1]=u[1]
t[0]=u[0]},
h:function(a){var u=this.a
return"["+H.f(u[0])+","+H.f(u[1])+"]"},
B:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.q){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]}else u=!1
return u},
gk:function(a){return A.jJ(this.a)},
Y:function(a,b){var u=new T.q(new Float32Array(2))
u.at(this)
u.b0(b)
return u},
D:function(a,b){var u,t,s
u=new Float32Array(2)
t=new T.q(u)
t.at(this)
s=b.a
u[0]=u[0]+s[0]
u[1]=u[1]+s[1]
return t},
X:function(a,b){var u=new T.q(new Float32Array(2))
u.at(this)
u.as(0,b)
return u},
gl:function(a){return Math.sqrt(this.gbz())},
gbz:function(){var u,t
u=this.a
t=u[0]
u=u[1]
return t*t+u*u},
fg:function(){var u,t,s
u=Math.sqrt(this.gbz())
if(u===0)return 0
t=1/u
s=this.a
s[0]=s[0]*t
s[1]=s[1]*t
return u},
bB:function(){var u=new T.q(new Float32Array(2))
u.at(this)
u.fg()
return u},
aG:function(a){var u,t,s,r
u=this.a
t=a.a
s=u[0]-t[0]
r=u[1]-t[1]
return s*s+r*r},
b0:function(a){var u,t
u=a.a
t=this.a
t[0]=t[0]-u[0]
t[1]=t[1]-u[1]},
as:function(a,b){var u=this.a
u[1]=u[1]*b
u[0]=u[0]*b},
gH:function(a){return this.a[0]},
gI:function(a){return this.a[1]}}
E.d3.prototype={
W:function(){var u,t,s,r,q,p,o
u=[V.S]
this.sfq(H.j([],u))
this.sff(H.j([],u))
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.ch===C.i){q=this.b;(q&&C.a).j(q,r)}else{q=this.c;(q&&C.a).j(q,r)}}for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(!r.cx.b){q=this.d.cV(600)
p=this.d.cV(600)
o=new Float32Array(2)
o[0]=q
o[1]=p
r.cx=new K.aA(!0,new T.q(o))}if(!r.cy.b)this.d9(r)}},
d9:function(a){var u,t,s,r,q,p,o
for(u=this.c,t=u.length,s=null,r=1/0,q=0;q<u.length;u.length===t||(0,H.F)(u),++q){p=u[q]
o=a.d.aG(p.d)
if(o<r){r=o
s=p}}if(s!=null)a.cy=new K.aA(!0,s.d)},
sfq:function(a){this.b=H.k(a,"$in",[V.S],"$an")},
sff:function(a){this.c=H.k(a,"$in",[V.S],"$an")}}
O.dk.prototype={
W:function(){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].W()
this.d.W()},
S:function(a,b){var u=new V.S(2,0.5,b,new T.q(new Float32Array(2)),a)
u.a=P.fZ(null)
u.Q=new T.q(new Float32Array(2))
u.b=C.C
u.cx=new K.aA(!1,new T.q(new Float32Array(2)))
u.cy=new K.aA(!1,new T.q(new Float32Array(2)))
C.a.j(this.a,u)
C.a.j(this.b,u)
this.c.j(0,u)},
seS:function(a){this.a=H.k(a,"$in",[L.aI],"$an")},
sfz:function(a){this.b=H.k(a,"$in",[V.S],"$an")}}
L.cc.prototype={
h:function(a){return this.b}}
L.cF.prototype={
h:function(a){return this.b}}
L.aI.prototype={
W:function(){this.aQ()},
aQ:function(){this.d=this.d.D(0,this.c)
this.bl()},
bl:function(){},
cG:function(){C.a.O($.M.a,this)
this.a.j(0,"Destroy")}}
D.ce.prototype={
df:function(a){var u,t,s,r,q,p
u=new O.dk()
t=[V.S]
u.sfz(H.j([],t))
s=L.aI
u.seS(H.j([],[s]))
u.c=P.fZ(s)
s=u.b
r=new E.d3(s)
r.d=C.a0
u.d=r
$.M=u
u=new N.cI()
u.seH(s)
u.saZ(H.j([],t))
u.e=!1
$.au=u
u=new E.e9()
u.sfm(H.j([],[Q.aR]))
u.sfn(H.j([],[A.bh]))
t=[U.al]
s=H.j([],t)
r=H.j([],t)
$.K=$.K+1
q=[A.ag]
u.c=new A.ax(new U.ak(s,r),0,0,0,0,1,1,0,0,0,1,H.j([],q),T.C())
r=H.j([],t)
s=H.j([],t)
$.K=$.K+1
u.d=new A.ax(new U.ak(r,s),0,0,0,0,1,1,0,0,0,1,H.j([],q),T.C())
$.at=u
s=new Float32Array(2)
new T.q(s).v(600,600)
r=new Float32Array(2)
new T.q(r).v(0,0)
t=new U.ak(H.j([],t),H.j([],t))
$.K=$.K+1
p=new A.ax(t,0,0,0,0,1,1,0,0,0,1,H.j([],q),T.C())
t.m(new U.aK())
q=r[0]
r=r[1]
t.m(new U.dw(q,r,s[0]-q,s[1]-r))
t.m(new U.aL())
t.m(new U.b6(4284782061))
u.d=p
$.a6.an(p)
u=$.M.c
new P.bj(u,[H.d(u,0)]).bA(new D.ds(this))
u=$.a6.af(0,"enterFrame",R.a5)
u.Z(H.b(this.gfA(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=R.a0
t=$.a6.af(0,"mouseDown",u)
t.Z(H.b($.au.gdg(),{func:1,ret:-1,args:[H.d(t,0)]}),!1,0)
t=$.a6.af(0,"mouseUp",u)
t.Z(H.b($.au.gdi(),{func:1,ret:-1,args:[H.d(t,0)]}),!1,0)
t=$.a6.af(0,"rightMouseDown",u)
t.Z(H.b($.au.gdd(),{func:1,ret:-1,args:[H.d(t,0)]}),!1,0)
u=$.a6.af(0,"middleMouseDown",u)
u.Z(H.b($.au.gda(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=$.M
t=new T.q(new Float32Array(2))
t.v(50,50)
u.S(t,C.h)
t=$.M
u=new T.q(new Float32Array(2))
u.v(50,100)
t.S(u,C.h)
u=$.M
t=new T.q(new Float32Array(2))
t.v(100,50)
u.S(t,C.h)
t=$.M
u=new T.q(new Float32Array(2))
u.v(100,100)
t.S(u,C.h)
u=$.M
t=new T.q(new Float32Array(2))
t.v(500,500)
u.S(t,C.i)
t=$.M
u=new T.q(new Float32Array(2))
u.v(500,550)
t.S(u,C.i)
u=$.M
t=new T.q(new Float32Array(2))
t.v(550,500)
u.S(t,C.i)
t=$.M
u=new T.q(new Float32Array(2))
u.v(550,550)
t.S(u,C.i)},
fB:function(a){var u,t,s,r,q,p
H.m(a,"$ia5")
$.M.W()
$.at.fl()
u=$.at
u.c.k3.aa(0)
if($.au.e){t=$.a6.gcU().a
s=$.a6.gcU().b
r=new Float32Array(2)
new T.q(r).v(t,s)
r[0]=C.b.P(r[0],0,600)
r[1]=C.b.P(r[1],0,600)
s=$.au.c
t=[U.al]
t=new U.ak(H.j([],t),H.j([],t))
$.K=$.K+1
q=H.j([],[A.ag])
p=T.C()
t.m(new U.aK())
s=s.a
t.m(new U.dv(s[0],s[1]))
t.m(new U.b7(s[0],r[1]))
t.m(new U.b7(r[0],r[1]))
t.m(new U.b7(r[0],s[1]))
t.m(new U.b7(s[0],s[1]))
t.m(new U.aL())
t.m(new U.dy(4294967295,1,C.j,C.A))
u.c=new A.ax(t,0,0,0,0,1,1,0,0,0,1,q,p)}$.a6.an(u.c)}}
D.ds.prototype={
$1:function(a){var u,t,s,r
H.m(a,"$iaI")
switch(a.b){case C.C:u=$.at
H.m(a,"$iS")
u.toString
t=new A.bh(a,a)
t.bV(a)
s=t.b.af(0,"click",R.a0)
s.Z(H.b(t.gfh(t),{func:1,ret:-1,args:[H.d(s,0)]}),!1,0)
C.a.j(u.a,t)
C.a.j(u.b,t)
break
case C.D:u=$.at
H.m(a,"$ics")
u.toString
r=new F.e8(a,a)
r.bV(a)
C.a.j(u.a,r)
break}return},
$S:3}
R.cs.prototype={
W:function(){this.bS()},
aQ:function(){var u,t,s,r,q,p,o,n,m
this.bR()
u=new Float32Array(2)
t=new Float32Array(2)
new T.q(t).v(600,600)
s=this.d
r=u[0]
q=t[0]
p=r<q?r:q
o=u[1]
n=t[1]
m=o<n?o:n
u=s.a
if(!new U.L(p,m,Math.abs(r-q),Math.abs(o-n),[P.o]).cC(0,u[0],u[1]))this.cG()},
bl:function(){var u,t,s,r,q,p,o,n
for(u=$.M.b,t=u.length,s=this.r,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(q.ch!==s){p=q.e
if(q.d.aG(this.d)<p*p){C.a.O($.M.b,q)
q.dm()
C.a.O($.M.a,this)
p=this.a
o=H.d(p,0)
H.l("Destroy",o)
if(p.b>=4)H.Z(p.c4())
n=p.b
if((n&1)!==0)p.a9("Destroy")
else if((n&3)===0){p=p.cf()
o=new P.bk("Destroy",[o])
n=p.c
if(n==null){p.c=o
p.b=o}else{n.a=o
p.c=o}}}}}}}
Q.aR.prototype={
bV:function(a){var u=this.a.a
new P.bj(u,[H.d(u,0)]).bA(this.gcF())
u=H.j([],[A.aj])
$.K=$.K+1
this.b=new A.ef(u,"auto",0,0,0,0,1,1,0,0,0,1,H.j([],[A.ag]),T.C())
this.aV()},
aV:function(){},
aF:function(a){this.b.cX()
C.a.O($.at.a,this)}}
F.e8.prototype={
aV:function(){var u,t
this.b.gbM().aa(0)
u=this.c.r
if(u===C.h)t=E.hJ(4278190080,2)
else t=u===C.i?E.hJ(4294901760,2):null
this.b.an(t)}}
A.bh.prototype={
aV:function(){var u,t,s
this.b.gbM().aa(0)
u=this.c
t=u.ch
if(t===C.h)s=C.a.eN($.au.b,u)?E.fW(4278190080,4294944e3,10):E.fW(4278190080,4294967040,10)
else s=t===C.i?E.fW(4294967295,4294901760,10):null
this.b.an(s)},
fi:function(a,b){var u
H.m(b,"$ia7")
u=$.au
u.toString
u.saZ(H.j([],[V.S]))
C.a.j(u.b,this.c)
$.at.d5()},
aF:function(a){C.a.O($.at.b,this)
this.dr(a)}}
E.e9.prototype={
d5:function(){var u,t,s
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].aV()},
fl:function(){var u,t,s,r,q,p
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=r.b
p=r.a.d.a
q.c=p[0]
q.id=!0
q.d=p[1]
$.a6.an(q)}},
sfm:function(a){this.a=H.k(a,"$in",[Q.aR],"$an")},
sfn:function(a){this.b=H.k(a,"$in",[A.bh],"$an")}}
K.aA.prototype={}
V.S.prototype={
W:function(){var u,t,s,r
u=this.cx
if(u.b){this.Q=u.c.Y(0,this.d).bB().X(0,this.r)
if(this.d.aG(this.cx.c)<100){this.cx.b=!1
this.Q=new T.q(new Float32Array(2))}}u=this.cy
if(u.b&&this.z===0){this.z=this.y
u.b=!1
t=u.c.Y(0,this.d).bB().X(0,5)
u=$.M
s=this.d
u.toString
r=new R.cs(this.ch,t,s)
r.a=P.fZ(null)
r.b=C.D
C.a.j(u.a,r)
u.c.j(0,r)}u=this.z
if(u>0)this.z=u-1
this.bS()},
aQ:function(){var u,t
u=this.Q.Y(0,this.c)
t=this.c.D(0,O.hs(u,this.x))
this.c=t
this.c=O.hs(t,this.r)
this.bR()
t=this.d.a
t[0]=C.b.P(t[0],0,600)
t=this.d.a
t[1]=C.b.P(t[1],0,600)},
bl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=$.M.b
for(t=u.length,s=this.e,r=s*s,q=0;q<u.length;u.length===t||(0,H.F)(u),++q){p=u[q]
if(p!==this){o=this.d
n=p.d
m=p.e
o=o.a
l=o[0]
n=n.a
k=n[0]
if(l+s+m>k)if(l<k+s+m){j=o[1]
i=n[1]
j=j+s+m>i&&j<i+s+m}else j=!1
else j=!1
if(j)if(r<Math.pow(l+k,2)+Math.pow(o[1]+n[1],2)){o=this.d
n=p.d
l=new Float32Array(2)
h=new T.q(l)
g=n.a
l[1]=g[1]
l[0]=g[0]
h.b0(o)
h.as(0,-1)
n=o.aG(n)
m=Math.pow(s+m,2)
k=new Float32Array(2)
k[1]=l[1]
k[0]=l[0]
new T.q(k).as(0,n-m)
n=new Float32Array(2)
m=new T.q(n)
n[1]=k[1]
n[0]=k[0]
m.as(0,0.0005)
n=new Float32Array(2)
l=new T.q(n)
g=o.a
n[1]=g[1]
n[0]=g[0]
l.b0(m)
this.d=l}}}}}
N.cI.prototype={
dh:function(a){var u,t,s
H.m(a,"$ia7")
u=C.b.P(a.z,0,600)
t=C.b.P(a.Q,0,600)
s=new T.q(new Float32Array(2))
s.v(u,t)
this.c=s
this.e=!0},
dj:function(a){var u,t,s
H.m(a,"$ia7")
u=C.b.P(a.z,0,600)
t=C.b.P(a.Q,0,600)
s=new T.q(new Float32Array(2))
s.v(u,t)
this.d=s
this.e=!1
this.d8(0)},
de:function(a){var u,t,s,r,q,p,o
H.m(a,"$ia7")
for(u=this.b,t=u.length,s=a.z,r=a.Q,q=0;q<u.length;u.length===t||(0,H.F)(u),++q){p=u[q]
o=new Float32Array(2)
o[0]=s
o[1]=r
p.cx=new K.aA(!0,new T.q(o))}},
dc:function(a){var u,t,s,r,q,p,o
H.m(a,"$ia7")
for(u=this.b,t=u.length,s=a.z,r=a.Q,q=0;q<u.length;u.length===t||(0,H.F)(u),++q){p=u[q]
o=new Float32Array(2)
o[0]=s
o[1]=r
p.cy=new K.aA(!0,new T.q(o))}},
d8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.c.a
t=u[0]
s=this.d.a
r=s[0]
q=t<r?t:r
p=u[1]
o=s[1]
n=p<o?p:o
m=new U.L(q,n,Math.abs(t-r),Math.abs(p-o),[P.o])
this.saZ(H.j([],[V.S]))
for(u=this.a,s=u.length,l=0;l<u.length;u.length===s||(0,H.F)(u),++l){k=u[l]
if(k.ch===C.h){j=k.d.a
i=j[0]
j=j[1]
h=m.a
if(h<=i){g=m.b
j=g<=j&&h+m.c>i&&g+m.d>j}else j=!1
if(j)C.a.j(this.b,k)}}$.at.d5()},
seH:function(a){this.a=H.k(a,"$in",[V.S],"$an")},
saZ:function(a){this.b=H.k(a,"$in",[V.S],"$an")}};(function aliases(){var u=J.B.prototype
u.dn=u.h
u=J.cl.prototype
u.dq=u.h
u=P.O.prototype
u.bT=u.bP
u=A.bC.prototype
u.b1=u.a4
u.dl=u.V
u=U.bZ.prototype
u.ds=u.i
u=L.cy.prototype
u.bU=u.am
u=L.aI.prototype
u.bS=u.W
u.bR=u.aQ
u.dm=u.cG
u=Q.aR.prototype
u.dr=u.aF})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_1i
u(H,"jq","j5",38)
t(P,"jx","jg",5)
t(P,"jy","jh",5)
t(P,"jz","ji",5)
u(P,"ia","jw",1)
s(P,"jA",1,null,["$2","$1"],["i_",function(a){return P.i_(a,null)}],4,0)
u(P,"i9","js",1)
r(P.cN.prototype,"geM",0,1,null,["$2","$1"],["ab","cB"],4,0)
r(P.cU.prototype,"gcA",1,0,null,["$1","$0"],["R","eL"],32,0)
r(P.E.prototype,"gdJ",0,1,null,["$2","$1"],["E","dK"],4,0)
q(P.cQ.prototype,"gen","eo",1)
var n
p(n=A.Q.prototype,"gec","ed",21)
p(n,"gee","ef",22)
p(n,"geg","eh",23)
p(n,"gea","eb",24)
p(A.cE.prototype,"gdF","dG",28)
p(n=L.cu.prototype,"gdZ","e_",11)
p(n,"ge0","e1",11)
p(L.cx.prototype,"ge4","e5",31)
p(n=N.cf.prototype,"ge8","e9",12)
p(n,"ge6","e7",12)
p(D.ce.prototype,"gfA","fB",36)
p(Q.aR.prototype,"gcF","aF",3)
o(n=A.bh.prototype,"gfh","fi",2)
p(n,"gcF","aF",3)
p(n=N.cI.prototype,"gdg","dh",2)
p(n,"gdi","dj",2)
p(n,"gdd","de",2)
p(n,"gda","dc",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.p,null)
s(P.p,[H.fR,J.B,J.d6,P.t,H.bJ,P.av,H.b5,H.bA,H.er,P.as,H.bE,H.cT,H.bV,P.dN,H.dH,H.dJ,H.dD,H.fc,P.fm,P.cK,P.bT,P.eK,P.eJ,P.A,P.cN,P.aq,P.E,P.cL,P.R,P.fi,P.eH,P.eL,P.a4,P.cQ,P.fl,P.N,P.fo,P.O,P.Y,P.o,P.dU,P.cD,P.eP,P.dp,P.n,P.u,P.y,P.fX,P.z,P.bU,W.df,W.b8,W.dm,P.f9,P.W,K.ey,K.dG,A.af,A.d7,A.d9,L.e0,R.cd,L.cx,A.bS,A.bi,A.a2,A.eg,A.bm,A.bn,A.aV,U.al,U.ak,U.dz,U.bI,U.bz,U.aX,U.bZ,L.db,L.bP,L.bQ,L.cv,L.aP,L.dZ,L.cw,L.fb,L.cy,L.bY,L.e6,L.aQ,L.cz,L.cA,L.cB,L.e7,R.V,R.bD,R.bF,T.dR,T.bb,U.D,U.L,N.cf,O.cC,O.a8,Q.dS,T.q,E.d3,O.dk,L.cc,L.cF,L.aI,D.ce,Q.aR,E.e9,K.aA,N.cI])
s(J.B,[J.dC,J.cj,J.cl,J.aM,J.bG,J.b9,H.cm,H.cq,W.b3,W.ca,W.cO,W.dh,W.cb,W.c,W.a9,W.cV,P.c9,P.cr,P.aS,P.cG,P.bW])
s(J.cl,[J.dV,J.aU,J.aN])
t(J.fQ,J.aM)
s(J.bG,[J.ci,J.ch])
s(P.t,[H.di,H.dO,H.cJ])
s(H.di,[H.ba,H.dI])
s(H.ba,[H.eo,H.dQ])
t(H.dj,H.dO)
s(P.av,[H.dP,H.ex])
s(H.bA,[H.dW,H.fL,H.ep,H.dE,H.fE,H.fF,H.fG,P.eE,P.eD,P.eF,P.eG,P.fn,P.eA,P.ez,P.fp,P.fq,P.fw,P.dr,P.dq,P.eQ,P.eY,P.eU,P.eV,P.eW,P.eS,P.eX,P.eR,P.f0,P.f1,P.f_,P.eZ,P.em,P.en,P.fj,P.fd,P.fu,P.fg,P.ff,P.fh,P.dM,W.eO,P.fz,A.da,A.d8,A.e2,A.e3,A.ek,A.eh,A.ei,A.ej,L.fs,O.eb,O.ec,O.ea,A.fD,D.ds])
s(P.as,[H.dT,H.dF,H.eu,H.cH,H.dd,H.ed,P.bd,P.ar,P.ev,P.et,P.ay,P.de,P.dg,T.dK])
s(H.ep,[H.el,H.bx])
t(P.dL,P.dN)
t(H.a_,P.dL)
t(H.cp,H.cq)
s(H.cp,[H.c0,H.c2])
t(H.c1,H.c0)
t(H.bL,H.c1)
t(H.c3,H.c2)
t(H.bM,H.c3)
t(H.cn,H.bL)
t(H.co,H.bM)
s(P.bT,[P.fk,W.eM,R.aJ])
t(P.bj,P.fk)
t(P.eI,P.bj)
t(P.aD,P.eK)
t(P.U,P.aD)
t(P.eB,P.eJ)
s(P.cN,[P.eC,P.cU])
t(P.cM,P.fi)
t(P.bk,P.eL)
t(P.ac,P.a4)
t(P.fe,P.fo)
s(P.o,[P.ad,P.v])
s(P.ar,[P.bO,P.dA])
s(W.b3,[W.bc,W.bX])
t(W.h,W.bc)
t(W.i,W.h)
s(W.i,[W.d4,W.d5,W.aG,W.dn,W.am,W.bK,W.ee])
t(W.bB,W.cO)
s(W.c,[W.aT,P.ai])
s(W.aT,[W.aw,W.a1,W.aB])
t(W.cW,W.cV)
t(W.eq,W.cW)
t(W.ew,W.bK)
t(W.ap,W.a1)
t(W.cP,W.cb)
t(W.h_,W.eM)
s(P.R,[W.eN,R.G])
t(A.ag,L.e0)
t(A.aj,R.cd)
s(A.aj,[A.cg,A.ax,A.cE])
t(A.bC,A.cg)
t(A.e1,L.cx)
s(A.bC,[A.ef,A.Q])
s(U.al,[U.aK,U.dt,U.aL,U.du,U.b7,U.dv,U.dw,U.dx,U.cR])
t(U.b6,U.du)
t(U.dy,U.dx)
s(U.dz,[U.cS,U.f3])
s(U.cS,[U.f2,U.f4,U.f5,U.f6])
s(U.aX,[U.aE,U.f7])
s(U.bZ,[U.a3,U.c_])
s(L.dZ,[L.bR,L.cu])
s(L.cy,[L.e4,L.fU,L.e5])
s(R.V,[R.c8,R.a7])
s(R.c8,[R.a5,R.b4,R.bg])
s(R.a7,[R.a0,R.aC])
s(L.aI,[R.cs,V.S])
s(Q.aR,[F.e8,A.bh])
u(H.c0,P.O)
u(H.c1,H.b5)
u(H.c2,P.O)
u(H.c3,H.b5)
u(P.cM,P.eH)
u(W.cO,W.df)
u(W.cV,P.O)
u(W.cW,W.b8)})();(function constants(){var u=hunkHelpers.makeConstList
C.z=W.aG.prototype
C.a5=J.B.prototype
C.a=J.aM.prototype
C.k=J.ch.prototype
C.d=J.ci.prototype
C.l=J.cj.prototype
C.b=J.bG.prototype
C.e=J.b9.prototype
C.a6=J.aN.prototype
C.q=H.cn.prototype
C.F=H.co.prototype
C.G=J.dV.prototype
C.t=P.aS.prototype
C.w=J.aU.prototype
C.S=W.ap.prototype
C.T=W.bX.prototype
C.f=new L.db(1,771,"source-over")
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.Z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.V=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.W=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.Y=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.X=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.y=function(hooks) { return hooks; }

C.a_=new P.dU()
C.a0=new P.f9()
C.c=new P.fe()
C.A=new U.bz("CapsStyle.NONE")
C.a1=new U.bz("CapsStyle.ROUND")
C.B=new U.bz("CapsStyle.SQUARE")
C.C=new L.cc("EntityType.Unit")
C.D=new L.cc("EntityType.Projectile")
C.E=new R.bD("EventPhase.CAPTURING_PHASE")
C.a2=new R.bD("EventPhase.AT_TARGET")
C.a3=new R.bD("EventPhase.BUBBLING_PHASE")
C.n=new R.bF("InputEventMode.MouseOnly")
C.a4=new R.bF("InputEventMode.TouchOnly")
C.o=new R.bF("InputEventMode.MouseAndTouch")
C.j=new U.bI("JointStyle.MITER")
C.a7=new U.bI("JointStyle.ROUND")
C.p=new U.bI("JointStyle.BEVEL")
C.a8=H.j(u([]),[P.u])
C.r=new L.cv("RenderEngine.WebGL")
C.H=new L.cv("RenderEngine.Canvas2D")
C.a9=new L.cA(9728)
C.aa=new L.cA(9729)
C.I=new L.e7(33071)
C.J=new A.a2("StageAlign.TOP_LEFT")
C.K=new A.a2("StageAlign.TOP")
C.L=new A.a2("StageAlign.TOP_RIGHT")
C.M=new A.a2("StageAlign.LEFT")
C.m=new A.a2("StageAlign.NONE")
C.N=new A.a2("StageAlign.RIGHT")
C.O=new A.a2("StageAlign.BOTTOM_LEFT")
C.P=new A.a2("StageAlign.BOTTOM")
C.Q=new A.a2("StageAlign.BOTTOM_RIGHT")
C.u=new A.bS("StageRenderMode.AUTO")
C.R=new A.bS("StageRenderMode.ONCE")
C.ab=new A.bS("StageRenderMode.STOP")
C.ac=new A.bi("StageScaleMode.EXACT_FIT")
C.ad=new A.bi("StageScaleMode.NO_BORDER")
C.ae=new A.bi("StageScaleMode.NO_SCALE")
C.v=new A.bi("StageScaleMode.SHOW_ALL")
C.h=new L.cF("Team.Friendly")
C.i=new L.cF("Team.Enemy")})();(function staticFields(){$.dX=null
$.dY=null
$.ah=0
$.by=null
$.ho=null
$.h2=!1
$.ih=null
$.i6=null
$.ik=null
$.fA=null
$.fH=null
$.h9=null
$.bo=null
$.c4=null
$.c5=null
$.h3=!1
$.r=C.c
$.fY=null
$.K=0
$.hQ=1
$.e_=0
$.hX=17976931348623157e292
$.h1=-1
$.j2=!1
$.j3="auto"
$.a6=null
$.M=null
$.at=null
$.au=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"k_","ip",function(){return H.ig("_$dart_dartClosure")})
u($,"k2","hd",function(){return H.ig("_$dart_js")})
u($,"k9","is",function(){return H.ao(H.es({
toString:function(){return"$receiver$"}}))})
u($,"ka","it",function(){return H.ao(H.es({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kb","iu",function(){return H.ao(H.es(null))})
u($,"kc","iv",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kf","iy",function(){return H.ao(H.es(void 0))})
u($,"kg","iz",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ke","ix",function(){return H.ao(H.hL(null))})
u($,"kd","iw",function(){return H.ao(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ki","iB",function(){return H.ao(H.hL(void 0))})
u($,"kh","iA",function(){return H.ao(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"kl","hf",function(){return P.jf()})
u($,"kq","c7",function(){return[]})
u($,"jY","io",function(){return new A.d9(H.j([1,2],[P.ad]))})
u($,"ko","hi",function(){return[]})
u($,"km","hg",function(){return H.j([],[[R.G,R.a5]])})
u($,"kn","hh",function(){return H.j([],[[R.G,R.b4]])})
u($,"kp","hj",function(){return H.j([],[[R.G,R.bg]])})
u($,"ku","hk",function(){var t=W.jW().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"kx","iC",function(){return Q.jn()})
u($,"k4","he",function(){return H.j_(P.z,Q.dS)})
u($,"k3","iq",function(){return P.az(P.z)})
u($,"k5","ir",function(){var t=$.iq()
t.toString
return new P.eI(t,[H.d(t,0)])})})()
var v={mangledGlobalNames:{v:"int",ad:"double",o:"num",z:"String",Y:"bool",u:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.u},{func:1,ret:-1},{func:1,ret:-1,args:[R.a7]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[P.p],opt:[P.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.u,args:[,]},{func:1,ret:P.u,args:[,P.y]},{func:1,ret:P.u,args:[,,]},{func:1,ret:-1,args:[A.aV]},{func:1,ret:-1,args:[P.ai]},{func:1,ret:-1,args:[W.c]},{func:1,ret:P.Y,args:[O.a8]},{func:1,ret:P.u,args:[,],opt:[P.y]},{func:1,ret:P.u,args:[{func:1,ret:-1}]},{func:1,args:[W.c]},{func:1,ret:A.af,args:[W.am]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.Y,args:[A.Q]},{func:1,ret:-1,args:[A.Q]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:-1,args:[W.aw]},{func:1,args:[P.z]},{func:1,ret:P.u,args:[P.v,,]},{func:1,ret:A.bn},{func:1,ret:-1,args:[A.af]},{func:1,args:[,P.z]},{func:1,ret:P.u,args:[P.o]},{func:1,ret:-1,args:[P.o]},{func:1,ret:-1,opt:[P.p]},{func:1,ret:[P.A,,],args:[O.a8]},{func:1,ret:P.v},{func:1,ret:P.v,args:[P.v,P.p]},{func:1,ret:-1,args:[R.a5]},{func:1,ret:[P.E,,],args:[,]},{func:1,ret:P.o},{func:1,ret:-1,args:[P.z]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.B,CanvasPattern:J.B,DOMError:J.B,MediaError:J.B,Navigator:J.B,NavigatorConcurrentHardware:J.B,NavigatorUserMediaError:J.B,OverconstrainedError:J.B,PositionError:J.B,WebGLActiveInfo:J.B,WebGLFramebuffer:J.B,WebGLRenderbuffer:J.B,WebGL2RenderingContext:J.B,WebGLShader:J.B,SQLError:J.B,ArrayBuffer:H.cm,ArrayBufferView:H.cq,Float32Array:H.cn,Int16Array:H.co,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLBodyElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.d4,HTMLAreaElement:W.d5,HTMLCanvasElement:W.aG,CanvasRenderingContext2D:W.ca,CSSStyleDeclaration:W.bB,MSStyleCSSProperties:W.bB,CSS2Properties:W.bB,DOMException:W.dh,DOMRectReadOnly:W.cb,SVGAElement:W.h,SVGAnimateElement:W.h,SVGAnimateMotionElement:W.h,SVGAnimateTransformElement:W.h,SVGAnimationElement:W.h,SVGCircleElement:W.h,SVGClipPathElement:W.h,SVGDefsElement:W.h,SVGDescElement:W.h,SVGDiscardElement:W.h,SVGEllipseElement:W.h,SVGFEBlendElement:W.h,SVGFEColorMatrixElement:W.h,SVGFEComponentTransferElement:W.h,SVGFECompositeElement:W.h,SVGFEConvolveMatrixElement:W.h,SVGFEDiffuseLightingElement:W.h,SVGFEDisplacementMapElement:W.h,SVGFEDistantLightElement:W.h,SVGFEFloodElement:W.h,SVGFEFuncAElement:W.h,SVGFEFuncBElement:W.h,SVGFEFuncGElement:W.h,SVGFEFuncRElement:W.h,SVGFEGaussianBlurElement:W.h,SVGFEImageElement:W.h,SVGFEMergeElement:W.h,SVGFEMergeNodeElement:W.h,SVGFEMorphologyElement:W.h,SVGFEOffsetElement:W.h,SVGFEPointLightElement:W.h,SVGFESpecularLightingElement:W.h,SVGFESpotLightElement:W.h,SVGFETileElement:W.h,SVGFETurbulenceElement:W.h,SVGFilterElement:W.h,SVGForeignObjectElement:W.h,SVGGElement:W.h,SVGGeometryElement:W.h,SVGGraphicsElement:W.h,SVGImageElement:W.h,SVGLineElement:W.h,SVGLinearGradientElement:W.h,SVGMarkerElement:W.h,SVGMaskElement:W.h,SVGMetadataElement:W.h,SVGPathElement:W.h,SVGPatternElement:W.h,SVGPolygonElement:W.h,SVGPolylineElement:W.h,SVGRadialGradientElement:W.h,SVGRectElement:W.h,SVGScriptElement:W.h,SVGSetElement:W.h,SVGStopElement:W.h,SVGStyleElement:W.h,SVGElement:W.h,SVGSVGElement:W.h,SVGSwitchElement:W.h,SVGSymbolElement:W.h,SVGTSpanElement:W.h,SVGTextContentElement:W.h,SVGTextElement:W.h,SVGTextPathElement:W.h,SVGTextPositioningElement:W.h,SVGTitleElement:W.h,SVGUseElement:W.h,SVGViewElement:W.h,SVGGradientElement:W.h,SVGComponentTransferFunctionElement:W.h,SVGFEDropShadowElement:W.h,SVGMPathElement:W.h,Element:W.h,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,Event:W.c,InputEvent:W.c,EventTarget:W.b3,HTMLFormElement:W.dn,HTMLImageElement:W.am,KeyboardEvent:W.aw,HTMLAudioElement:W.bK,HTMLMediaElement:W.bK,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.bc,HTMLDocument:W.bc,Node:W.bc,HTMLSelectElement:W.ee,Touch:W.a9,TouchEvent:W.aB,TouchList:W.eq,CompositionEvent:W.aT,FocusEvent:W.aT,TextEvent:W.aT,UIEvent:W.aT,HTMLVideoElement:W.ew,WheelEvent:W.ap,Window:W.bX,DOMWindow:W.bX,ClientRect:W.cP,DOMRect:W.cP,WebGLBuffer:P.c9,WebGLContextEvent:P.ai,WebGLProgram:P.cr,WebGLRenderingContext:P.aS,WebGLTexture:P.cG,WebGLUniformLocation:P.bW})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.d0,[])
else F.d0([])})})()
//# sourceMappingURL=main.dart.js.map
