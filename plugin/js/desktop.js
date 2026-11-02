(function(){var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.injectPlatformDeps=e.platformDeps=void 0,e.platformDeps={readFileFromPath:function(){throw Error(`not implemented`)},getRequestToken:function(){throw Error(`not implemented`)},getDefaultAuth:function(){throw Error(`not implemented`)},buildPlatformDependentConfig:function(){throw Error(`not implemented`)},buildHeaders:function(){throw Error(`not implemented`)},buildFormDataValue:function(){throw Error(`not implemented`)},buildBaseUrl:function(){throw Error(`not implemented`)},getVersion:function(){throw Error(`not implemented`)}},e.injectPlatformDeps=function(t){t.readFileFromPath&&(e.platformDeps.readFileFromPath=t.readFileFromPath),t.getRequestToken&&(e.platformDeps.getRequestToken=t.getRequestToken),t.getDefaultAuth&&(e.platformDeps.getDefaultAuth=t.getDefaultAuth),t.buildPlatformDependentConfig&&(e.platformDeps.buildPlatformDependentConfig=t.buildPlatformDependentConfig),t.buildHeaders&&(e.platformDeps.buildHeaders=t.buildHeaders),t.buildFormDataValue&&(e.platformDeps.buildFormDataValue=t.buildFormDataValue),t.buildBaseUrl&&(e.platformDeps.buildBaseUrl=t.buildBaseUrl),t.getVersion&&(e.platformDeps.getVersion=t.getVersion)}})),u=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.UnsupportedPlatformError=void 0,e.UnsupportedPlatformError=function(e){r(t,e);function t(n){var r=this,i=`This function is not supported in ${n} environment`;return r=e.call(this,i)||this,Error.captureStackTrace&&Error.captureStackTrace(r,t),r.name=`UnsupportedPlatformError`,r.platform=n,Object.setPrototypeOf(r,t.prototype),r}return t}(Error)})),d=a(((e,t)=>{function n(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}n.prototype.define=function(e,t){for(let n in e){let r=e[n].map(function(e){return e.toLowerCase()});n=n.toLowerCase();for(let e=0;e<r.length;e++){let i=r[e];if(i[0]!==`*`){if(!t&&i in this._types)throw Error(`Attempt to change mapping for "`+i+`" extension from "`+this._types[i]+`" to "`+n+'". Pass `force=true` to allow this, otherwise remove "'+i+`" from the list of extensions for "`+n+`".`);this._types[i]=n}}if(t||!this._extensions[n]){let e=r[0];this._extensions[n]=e[0]===`*`?e.substr(1):e}}},n.prototype.getType=function(e){e=String(e);let t=e.replace(/^.*[/\\]/,``).toLowerCase(),n=t.replace(/^.*\./,``).toLowerCase(),r=t.length<e.length;return(n.length<t.length-1||!r)&&this._types[n]||null},n.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null},t.exports=n})),f=a(((e,t)=>{t.exports={"application/andrew-inset":[`ez`],"application/applixware":[`aw`],"application/atom+xml":[`atom`],"application/atomcat+xml":[`atomcat`],"application/atomdeleted+xml":[`atomdeleted`],"application/atomsvc+xml":[`atomsvc`],"application/atsc-dwd+xml":[`dwd`],"application/atsc-held+xml":[`held`],"application/atsc-rsat+xml":[`rsat`],"application/bdoc":[`bdoc`],"application/calendar+xml":[`xcs`],"application/ccxml+xml":[`ccxml`],"application/cdfx+xml":[`cdfx`],"application/cdmi-capability":[`cdmia`],"application/cdmi-container":[`cdmic`],"application/cdmi-domain":[`cdmid`],"application/cdmi-object":[`cdmio`],"application/cdmi-queue":[`cdmiq`],"application/cu-seeme":[`cu`],"application/dash+xml":[`mpd`],"application/davmount+xml":[`davmount`],"application/docbook+xml":[`dbk`],"application/dssc+der":[`dssc`],"application/dssc+xml":[`xdssc`],"application/ecmascript":[`es`,`ecma`],"application/emma+xml":[`emma`],"application/emotionml+xml":[`emotionml`],"application/epub+zip":[`epub`],"application/exi":[`exi`],"application/express":[`exp`],"application/fdt+xml":[`fdt`],"application/font-tdpfr":[`pfr`],"application/geo+json":[`geojson`],"application/gml+xml":[`gml`],"application/gpx+xml":[`gpx`],"application/gxf":[`gxf`],"application/gzip":[`gz`],"application/hjson":[`hjson`],"application/hyperstudio":[`stk`],"application/inkml+xml":[`ink`,`inkml`],"application/ipfix":[`ipfix`],"application/its+xml":[`its`],"application/java-archive":[`jar`,`war`,`ear`],"application/java-serialized-object":[`ser`],"application/java-vm":[`class`],"application/javascript":[`js`,`mjs`],"application/json":[`json`,`map`],"application/json5":[`json5`],"application/jsonml+json":[`jsonml`],"application/ld+json":[`jsonld`],"application/lgr+xml":[`lgr`],"application/lost+xml":[`lostxml`],"application/mac-binhex40":[`hqx`],"application/mac-compactpro":[`cpt`],"application/mads+xml":[`mads`],"application/manifest+json":[`webmanifest`],"application/marc":[`mrc`],"application/marcxml+xml":[`mrcx`],"application/mathematica":[`ma`,`nb`,`mb`],"application/mathml+xml":[`mathml`],"application/mbox":[`mbox`],"application/mediaservercontrol+xml":[`mscml`],"application/metalink+xml":[`metalink`],"application/metalink4+xml":[`meta4`],"application/mets+xml":[`mets`],"application/mmt-aei+xml":[`maei`],"application/mmt-usd+xml":[`musd`],"application/mods+xml":[`mods`],"application/mp21":[`m21`,`mp21`],"application/mp4":[`mp4s`,`m4p`],"application/msword":[`doc`,`dot`],"application/mxf":[`mxf`],"application/n-quads":[`nq`],"application/n-triples":[`nt`],"application/node":[`cjs`],"application/octet-stream":[`bin`,`dms`,`lrf`,`mar`,`so`,`dist`,`distz`,`pkg`,`bpk`,`dump`,`elc`,`deploy`,`exe`,`dll`,`deb`,`dmg`,`iso`,`img`,`msi`,`msp`,`msm`,`buffer`],"application/oda":[`oda`],"application/oebps-package+xml":[`opf`],"application/ogg":[`ogx`],"application/omdoc+xml":[`omdoc`],"application/onenote":[`onetoc`,`onetoc2`,`onetmp`,`onepkg`],"application/oxps":[`oxps`],"application/p2p-overlay+xml":[`relo`],"application/patch-ops-error+xml":[`xer`],"application/pdf":[`pdf`],"application/pgp-encrypted":[`pgp`],"application/pgp-signature":[`asc`,`sig`],"application/pics-rules":[`prf`],"application/pkcs10":[`p10`],"application/pkcs7-mime":[`p7m`,`p7c`],"application/pkcs7-signature":[`p7s`],"application/pkcs8":[`p8`],"application/pkix-attr-cert":[`ac`],"application/pkix-cert":[`cer`],"application/pkix-crl":[`crl`],"application/pkix-pkipath":[`pkipath`],"application/pkixcmp":[`pki`],"application/pls+xml":[`pls`],"application/postscript":[`ai`,`eps`,`ps`],"application/provenance+xml":[`provx`],"application/pskc+xml":[`pskcxml`],"application/raml+yaml":[`raml`],"application/rdf+xml":[`rdf`,`owl`],"application/reginfo+xml":[`rif`],"application/relax-ng-compact-syntax":[`rnc`],"application/resource-lists+xml":[`rl`],"application/resource-lists-diff+xml":[`rld`],"application/rls-services+xml":[`rs`],"application/route-apd+xml":[`rapd`],"application/route-s-tsid+xml":[`sls`],"application/route-usd+xml":[`rusd`],"application/rpki-ghostbusters":[`gbr`],"application/rpki-manifest":[`mft`],"application/rpki-roa":[`roa`],"application/rsd+xml":[`rsd`],"application/rss+xml":[`rss`],"application/rtf":[`rtf`],"application/sbml+xml":[`sbml`],"application/scvp-cv-request":[`scq`],"application/scvp-cv-response":[`scs`],"application/scvp-vp-request":[`spq`],"application/scvp-vp-response":[`spp`],"application/sdp":[`sdp`],"application/senml+xml":[`senmlx`],"application/sensml+xml":[`sensmlx`],"application/set-payment-initiation":[`setpay`],"application/set-registration-initiation":[`setreg`],"application/shf+xml":[`shf`],"application/sieve":[`siv`,`sieve`],"application/smil+xml":[`smi`,`smil`],"application/sparql-query":[`rq`],"application/sparql-results+xml":[`srx`],"application/srgs":[`gram`],"application/srgs+xml":[`grxml`],"application/sru+xml":[`sru`],"application/ssdl+xml":[`ssdl`],"application/ssml+xml":[`ssml`],"application/swid+xml":[`swidtag`],"application/tei+xml":[`tei`,`teicorpus`],"application/thraud+xml":[`tfi`],"application/timestamped-data":[`tsd`],"application/toml":[`toml`],"application/trig":[`trig`],"application/ttml+xml":[`ttml`],"application/ubjson":[`ubj`],"application/urc-ressheet+xml":[`rsheet`],"application/urc-targetdesc+xml":[`td`],"application/voicexml+xml":[`vxml`],"application/wasm":[`wasm`],"application/widget":[`wgt`],"application/winhlp":[`hlp`],"application/wsdl+xml":[`wsdl`],"application/wspolicy+xml":[`wspolicy`],"application/xaml+xml":[`xaml`],"application/xcap-att+xml":[`xav`],"application/xcap-caps+xml":[`xca`],"application/xcap-diff+xml":[`xdf`],"application/xcap-el+xml":[`xel`],"application/xcap-ns+xml":[`xns`],"application/xenc+xml":[`xenc`],"application/xhtml+xml":[`xhtml`,`xht`],"application/xliff+xml":[`xlf`],"application/xml":[`xml`,`xsl`,`xsd`,`rng`],"application/xml-dtd":[`dtd`],"application/xop+xml":[`xop`],"application/xproc+xml":[`xpl`],"application/xslt+xml":[`*xsl`,`xslt`],"application/xspf+xml":[`xspf`],"application/xv+xml":[`mxml`,`xhvml`,`xvml`,`xvm`],"application/yang":[`yang`],"application/yin+xml":[`yin`],"application/zip":[`zip`],"audio/3gpp":[`*3gpp`],"audio/adpcm":[`adp`],"audio/amr":[`amr`],"audio/basic":[`au`,`snd`],"audio/midi":[`mid`,`midi`,`kar`,`rmi`],"audio/mobile-xmf":[`mxmf`],"audio/mp3":[`*mp3`],"audio/mp4":[`m4a`,`mp4a`],"audio/mpeg":[`mpga`,`mp2`,`mp2a`,`mp3`,`m2a`,`m3a`],"audio/ogg":[`oga`,`ogg`,`spx`,`opus`],"audio/s3m":[`s3m`],"audio/silk":[`sil`],"audio/wav":[`wav`],"audio/wave":[`*wav`],"audio/webm":[`weba`],"audio/xm":[`xm`],"font/collection":[`ttc`],"font/otf":[`otf`],"font/ttf":[`ttf`],"font/woff":[`woff`],"font/woff2":[`woff2`],"image/aces":[`exr`],"image/apng":[`apng`],"image/avif":[`avif`],"image/bmp":[`bmp`],"image/cgm":[`cgm`],"image/dicom-rle":[`drle`],"image/emf":[`emf`],"image/fits":[`fits`],"image/g3fax":[`g3`],"image/gif":[`gif`],"image/heic":[`heic`],"image/heic-sequence":[`heics`],"image/heif":[`heif`],"image/heif-sequence":[`heifs`],"image/hej2k":[`hej2`],"image/hsj2":[`hsj2`],"image/ief":[`ief`],"image/jls":[`jls`],"image/jp2":[`jp2`,`jpg2`],"image/jpeg":[`jpeg`,`jpg`,`jpe`],"image/jph":[`jph`],"image/jphc":[`jhc`],"image/jpm":[`jpm`],"image/jpx":[`jpx`,`jpf`],"image/jxr":[`jxr`],"image/jxra":[`jxra`],"image/jxrs":[`jxrs`],"image/jxs":[`jxs`],"image/jxsc":[`jxsc`],"image/jxsi":[`jxsi`],"image/jxss":[`jxss`],"image/ktx":[`ktx`],"image/ktx2":[`ktx2`],"image/png":[`png`],"image/sgi":[`sgi`],"image/svg+xml":[`svg`,`svgz`],"image/t38":[`t38`],"image/tiff":[`tif`,`tiff`],"image/tiff-fx":[`tfx`],"image/webp":[`webp`],"image/wmf":[`wmf`],"message/disposition-notification":[`disposition-notification`],"message/global":[`u8msg`],"message/global-delivery-status":[`u8dsn`],"message/global-disposition-notification":[`u8mdn`],"message/global-headers":[`u8hdr`],"message/rfc822":[`eml`,`mime`],"model/3mf":[`3mf`],"model/gltf+json":[`gltf`],"model/gltf-binary":[`glb`],"model/iges":[`igs`,`iges`],"model/mesh":[`msh`,`mesh`,`silo`],"model/mtl":[`mtl`],"model/obj":[`obj`],"model/step+xml":[`stpx`],"model/step+zip":[`stpz`],"model/step-xml+zip":[`stpxz`],"model/stl":[`stl`],"model/vrml":[`wrl`,`vrml`],"model/x3d+binary":[`*x3db`,`x3dbz`],"model/x3d+fastinfoset":[`x3db`],"model/x3d+vrml":[`*x3dv`,`x3dvz`],"model/x3d+xml":[`x3d`,`x3dz`],"model/x3d-vrml":[`x3dv`],"text/cache-manifest":[`appcache`,`manifest`],"text/calendar":[`ics`,`ifb`],"text/coffeescript":[`coffee`,`litcoffee`],"text/css":[`css`],"text/csv":[`csv`],"text/html":[`html`,`htm`,`shtml`],"text/jade":[`jade`],"text/jsx":[`jsx`],"text/less":[`less`],"text/markdown":[`markdown`,`md`],"text/mathml":[`mml`],"text/mdx":[`mdx`],"text/n3":[`n3`],"text/plain":[`txt`,`text`,`conf`,`def`,`list`,`log`,`in`,`ini`],"text/richtext":[`rtx`],"text/rtf":[`*rtf`],"text/sgml":[`sgml`,`sgm`],"text/shex":[`shex`],"text/slim":[`slim`,`slm`],"text/spdx":[`spdx`],"text/stylus":[`stylus`,`styl`],"text/tab-separated-values":[`tsv`],"text/troff":[`t`,`tr`,`roff`,`man`,`me`,`ms`],"text/turtle":[`ttl`],"text/uri-list":[`uri`,`uris`,`urls`],"text/vcard":[`vcard`],"text/vtt":[`vtt`],"text/xml":[`*xml`],"text/yaml":[`yaml`,`yml`],"video/3gpp":[`3gp`,`3gpp`],"video/3gpp2":[`3g2`],"video/h261":[`h261`],"video/h263":[`h263`],"video/h264":[`h264`],"video/iso.segment":[`m4s`],"video/jpeg":[`jpgv`],"video/jpm":[`*jpm`,`jpgm`],"video/mj2":[`mj2`,`mjp2`],"video/mp2t":[`ts`],"video/mp4":[`mp4`,`mp4v`,`mpg4`],"video/mpeg":[`mpeg`,`mpg`,`mpe`,`m1v`,`m2v`],"video/ogg":[`ogv`],"video/quicktime":[`qt`,`mov`],"video/webm":[`webm`]}})),p=a(((e,t)=>{t.exports=new(d())(f())})),m=o({author:()=>S,browser:()=>ee,bugs:()=>b,default:()=>oe,dependencies:()=>re,description:()=>_,devDependencies:()=>ie,engines:()=>D,exports:()=>C,files:()=>E,homepage:()=>y,keywords:()=>v,license:()=>`MIT`,main:()=>w,module:()=>T,name:()=>h,publishConfig:()=>ae,repository:()=>x,scripts:()=>ne,types:()=>te,version:()=>g}),h,g,_,v,y,b,x,S,C,w,T,ee,te,E,ne,re,ie,D,ae,oe,se=i((()=>{h=`@kintone/rest-api-client`,g=`6.6.0`,_=`Kintone REST API client for JavaScript`,v=[`kintone`,`rest`,`api-client`],y=`https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme`,b={url:`https://github.com/kintone/js-sdk/issues`},x={type:`git`,url:`git+https://github.com/kintone/js-sdk.git`,directory:`packages/rest-api-client`},S={name:`Cybozu, Inc.`,url:`https://cybozu.co.jp`},C={".":{types:{import:`./esm/src/index.d.ts`,require:`./lib/src/index.d.ts`,default:`./lib/src/index.d.ts`},node:{import:`./index.mjs`,require:`./lib/src/index.js`,default:`./lib/src/index.js`},browser:`./lib/src/index.browser.js`},"./package.json":`./package.json`},w=`lib/src/index.js`,T=`esm/src/index.js`,ee=`lib/src/index.browser.js`,te=`lib/src/index.d.ts`,E=[`esm`,`lib`,`umd`,`index.mjs`],ne={prebuild:`pnpm clean`,build:`tsc --build --force`,postbuild:`run-p build:*`,"build:umd_dev":`rollup -c --environment BUILD:development`,"build:umd_prod":`rollup -c --environment BUILD:production`,clean:`rimraf lib esm umd`,fix:`pnpm lint --fix`,lint:`eslint 'src/**/*.ts' --max-warnings 0`,prepublishOnly:`run-p build:umd_*`,start:`pnpm build --watch`,test:`vitest run`,"test:ci":`vitest run`},re={axios:`1.20.0`,"form-data":`4.0.6`,"js-base64":`3.9.4`,mime:`3.0.0`,qs:`6.16.0`},ie={"@rollup/plugin-babel":`6.1.0`,"@rollup/plugin-commonjs":`26.0.3`,"@rollup/plugin-json":`6.1.0`,"@rollup/plugin-node-resolve":`16.0.3`,"@rollup/plugin-terser":`1.0.0`,"@types/js-base64":`3.3.1`,"@types/mime":`3.0.4`,"@types/qs":`6.15.1`,"babel-loader":`9.2.1`,"core-js":`3.49.0`,msw:`2.15.0`,rimraf:`6.1.3`,rollup:`4.63.6`,"rollup-plugin-ecma-version-validator":`0.2.13`,"rollup-plugin-license":`3.7.1`,"rollup-plugin-node-globals":`1.4.0`,"rollup-plugin-polyfill-node":`0.13.0`,vite:`5.4.21`,webpack:`5.105.4`,"webpack-cli":`7.2.3`},D={node:`>=20`},ae={access:`public`},oe={name:h,version:g,description:_,keywords:v,homepage:y,bugs:b,repository:x,license:`MIT`,author:S,exports:C,main:w,module:T,browser:ee,types:te,files:E,scripts:ne,dependencies:re,devDependencies:ie,engines:D,publishConfig:ae}})),ce=a(((e,t,n)=>{var r=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},i=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a=n&&n.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.getVersion=e.buildBaseUrl=e.buildFormDataValue=e.buildHeaders=e.buildPlatformDependentConfig=e.getDefaultAuth=e.getRequestToken=e.readFileFromPath=void 0;var o=u(),s=a(p()),l=a((se(),c(m).default));e.readFileFromPath=function(e){throw new o.UnsupportedPlatformError(`Browser`)},e.getRequestToken=function(){return r(void 0,void 0,void 0,function(){return i(this,function(e){if(typeof kintone==`object`&&kintone!==null&&typeof kintone.getRequestToken==`function`)return[2,kintone.getRequestToken()];if(typeof garoon==`object`&&garoon!==null&&typeof garoon.connect?.kintone?.getRequestToken==`function`)return[2,garoon.connect.kintone.getRequestToken()];throw Error(`session authentication must specify a request token`)})})},e.getDefaultAuth=function(){return{type:`session`}},e.buildPlatformDependentConfig=function(){return{}},e.buildHeaders=function(){return{}},e.buildFormDataValue=function(e,t){var n={};return t&&(n.type=s.default.getType(t)||void 0),new Blob([e],n)},e.buildBaseUrl=function(e){if(e)return e;if(location===void 0)throw Error(`The baseUrl parameter is required for this environment`);var t=location.host;return`${location.protocol}//${t}`},e.getVersion=function(){return l.default.version}})),le=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.buildPath=void 0,e.buildPath=function(e){var t=e.endpointName,n=e.guestSpaceId,r=e.preview;return`/k${n===void 0?``:`/guest/${n}`}/v1${r?`/preview`:``}/${t}.json`}})),O=a(((e,t,n)=>{var r=n&&n.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseClient=void 0;var i=le();e.BaseClient=function(){function e(e,t){this.client=e,this.guestSpaceId=t}return e.prototype.buildPathWithGuestSpaceId=function(e){return(0,i.buildPath)(r(r({},e),{guestSpaceId:this.guestSpaceId}))},e.prototype.buildPath=function(e){return(0,i.buildPath)(e)},e}()})),ue=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),i=n&&n.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=n&&n.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.BulkRequestClient=void 0,e.BulkRequestClient=function(e){r(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.REQUESTS_LENGTH_LIMIT=20,r}return t.prototype.send=function(e){var t=this,n=e.requests.map(function(e){if(`endpointName`in e){var n=e.endpointName,r=a(e,[`endpointName`]);return i({api:t.buildPathWithGuestSpaceId({endpointName:n})},r)}return e}),r=this.buildPathWithGuestSpaceId({endpointName:`bulkRequest`});return this.client.post(r,{requests:n})},t}(O().BaseClient)})),de=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),i=n&&n.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},o=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},s=n&&n.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.AppClient=void 0,e.AppClient=function(e){r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getFormFields=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:t});return this.client.get(r,i({},n))},t.prototype.addFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.post(t,e)},t.prototype.updateFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.put(t,e)},t.prototype.deleteFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.delete(t,e)},t.prototype.getFormLayout=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/form/layout`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateFormLayout=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/layout`,preview:!0});return this.client.put(t,e)},t.prototype.getViews=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/views`,preview:t});return this.client.get(r,n)},t.prototype.updateViews=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/views`,preview:!0});return this.client.put(t,e)},t.prototype.getApp=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app`});return this.client.get(t,e)},t.prototype.getApps=function(e){e===void 0&&(e={});var t=this.buildPathWithGuestSpaceId({endpointName:`apps`});return this.client.get(t,e)},t.prototype.addApp=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,s;return o(this,function(o){switch(o.label){case 0:return t=e.name,n=e.space,r=this.buildPathWithGuestSpaceId({endpointName:`app`,preview:!0}),n?(a=this.buildPathWithGuestSpaceId({endpointName:`space`}),[4,this.client.get(a,{id:n})]):[3,2];case 1:return s=o.sent().defaultThread,[2,this.client.post(r,i(i({},e),{thread:s}))];case 2:return[2,this.client.post(r,{name:t})]}})})},t.prototype.getAppSettings=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/settings`,preview:t});return this.client.get(r,n)},t.prototype.updateAppSettings=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/settings`,preview:!0});return this.client.put(t,e)},t.prototype.getProcessManagement=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/status`,preview:t});return this.client.get(r,n)},t.prototype.updateProcessManagement=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/status`,preview:!0});return this.client.put(t,e)},t.prototype.getDeployStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/deploy`,preview:!0});return this.client.get(t,e)},t.prototype.deployApp=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/deploy`,preview:!0});return this.client.post(t,e)},t.prototype.getFieldAcl=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`field/acl`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateFieldAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`field/acl`,preview:!0});return this.client.put(t,e)},t.prototype.getAppAcl=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/acl`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateAppAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/acl`,preview:!0});return this.client.put(t,e)},t.prototype.evaluateRecordsAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/acl/evaluate`});return this.client.get(t,e)},t.prototype.getRecordAcl=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`record/acl`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateRecordAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/acl`,preview:!0});return this.client.put(t,e)},t.prototype.getAppCustomize=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/customize`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateAppCustomize=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/customize`,preview:!0});return this.client.put(t,e)},t.prototype.getGeneralNotifications=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/general`,preview:t});return this.client.get(r,i({},n))},t.prototype.updateGeneralNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/general`,preview:!0});return this.client.put(t,e)},t.prototype.getPerRecordNotifications=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/perRecord`,preview:t});return this.client.get(r,n)},t.prototype.updatePerRecordNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/perRecord`,preview:!0});return this.client.put(t,e)},t.prototype.getReminderNotifications=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/reminder`,preview:t});return this.client.get(r,n)},t.prototype.updateReminderNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/reminder`,preview:!0});return this.client.put(t,e)},t.prototype.getReports=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/reports`,preview:t});return this.client.get(r,n)},t.prototype.updateReports=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/reports`,preview:!0});return this.client.put(t,e)},t.prototype.getAppActions=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/actions`,preview:t});return this.client.get(r,n)},t.prototype.updateAppActions=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/actions`,preview:!0});return this.client.put(t,e)},t.prototype.getAdminNotes=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/adminNotes`,preview:t});return this.client.get(r,n)},t.prototype.updateAdminNotes=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/adminNotes`,preview:!0});return this.client.put(t,e)},t.prototype.move=function(e){var t=this.buildPath({endpointName:`app/move`});return this.client.post(t,e)},t.prototype.getPlugins=function(e){var t=e.preview,n=s(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/plugins`,preview:t});return this.client.get(r,n)},t.prototype.addPlugins=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/plugins`,preview:!0});return this.client.post(t,e)},t.prototype.getStatistics=function(e){e===void 0&&(e={});var t=this.buildPath({endpointName:`apps/statistics`});return this.client.get(t,e)},t}(O().BaseClient)})),fe=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneAbortSearchError=void 0,e.KintoneAbortSearchError=function(e){r(t,e);function t(n){var r=e.call(this,n)||this;return r.name=`KintoneAbortSearchError`,r.message=n,Object.setPrototypeOf(r,t.prototype),r}return t}(Error)})),pe=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneAllRecordsError=void 0,e.KintoneAllRecordsError=function(e){r(t,e);function t(n,r,i,a,o){var s=this,c=i-r.length,l=t.extractErrorIndex(c,a,o),u=t.buildErrorMessage(c,i,l);return s=e.call(this,u)||this,s.name=`KintoneAllRecordsError`,s.processedRecordsResult=n,s.unprocessedRecords=r,s.error=a,s.errorIndex=l,s.message=u,s.numOfProcessedRecords=c,s.numOfAllRecords=i,Object.setPrototypeOf(s,t.prototype),s}return t.parseErrorIndex=function(e){var t=[];return Object.keys(e).forEach(function(e){var n=e.match(/records\[(\d+)\]/);n&&t.push(Number(n[1]))}),t.length>0?Math.min.apply(Math,t):null},t.extractErrorIndex=function(e,n,r){if(n.bulkRequestIndex!==void 0&&n.errors){var i=t.parseErrorIndex(n.errors);if(i!==null)return e+n.bulkRequestIndex*r+i}},t.buildErrorMessage=function(e,t,n){var r=``;return n!==void 0&&(r=`An error occurred at records[${n}]. `),r+=`${e}/${t} records are processed successfully`,r},t}(Error)})),me=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIError=void 0,e.KintoneRestAPIError=function(e){r(t,e);function t(n){var r=this,i=t.buildErrorResponseDateWithIndex(n),a=i.data,o=i.bulkRequestIndex;return r=e.call(this,a.message)||this,r.name=`KintoneRestAPIError`,r.id=a.id,r.code=a.code,r.errors=a.errors,r.status=n.status,r.bulkRequestIndex=o,r.headers=n.headers,r.message=`[${n.status}] [${r.code}] ${r.message} (${r.id})`,Error.captureStackTrace&&Error.captureStackTrace(r,t),Object.setPrototypeOf(r,t.prototype),r}return t.findErrorResponseDataWithIndex=function(e){for(var t=0;t<e.length;t++)if(Object.keys(e[t]).length!==0)return{data:e[t],bulkRequestIndex:t};throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.")},t.buildErrorResponseDateWithIndex=function(e){return`results`in e.data?t.findErrorResponseDataWithIndex(e.data.results):{data:e.data}},t}(Error)})),he=a(((e,t,n)=>{var r=n&&n.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),i=n&&n.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&r(t,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),i(fe(),e),i(pe(),e),i(me(),e)})),ge=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),i=n&&n.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},o=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},s=n&&n.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},c=n&&n.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(e,"__esModule",{value:!0}),e.RecordClient=void 0;var l=he(),u=O(),d=100,f=100,p=100,m=500;e.RecordClient=function(e){r(t,e);function t(t,n,r){var i=e.call(this,t,r)||this;return i.bulkRequestClient=n,i.didWarnMaximumOffsetValue=!1,i}return t.prototype.getRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.get(t,e)},t.prototype.addRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.post(t,e)},t.prototype.updateRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.put(t,e)},t.prototype.upsertRecord=function(e){return a(this,void 0,void 0,function(){var t,n,r,i,a,s;return o(this,function(o){switch(o.label){case 0:return t=e.app,n=e.updateKey,r=e.record,[4,this.getRecords({app:t,query:`${n.field} = "${n.value}"`})];case 1:return i=o.sent().records,i.length>0?i[0].$id.type===`__ID__`?[4,this.updateRecord(e)]:[3,3]:[3,4];case 2:return a=o.sent().revision,[2,{id:i[0].$id.value,revision:a}];case 3:throw Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");case 4:return[2,this.addRecord({app:t,record:Object.assign({},r,(s={},s[n.field]={value:n.value},s))})]}})})},t.prototype.getRecords=function(e){return a(this,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return t=this.buildPathWithGuestSpaceId({endpointName:`records`}),[4,this.client.get(t,e)];case 1:return n=r.sent(),this.warnMaximumOffsetValueIfNeeded(e.query),[2,n]}})})},t.prototype.warnMaximumOffsetValueIfNeeded=function(e){if(e){var t=e.match(/offset\s+(\d+)/i);!this.didWarnMaximumOffsetValue&&t&&Number(t[1])>1e4&&(this.didWarnMaximumOffsetValue=!0,console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."))}},t.prototype.addRecords=function(e){return a(this,void 0,void 0,function(){var t,n,r,i;return o(this,function(a){switch(a.label){case 0:return t=this.buildPathWithGuestSpaceId({endpointName:`records`}),[4,this.client.post(t,e)];case 1:return n=a.sent(),r=n.ids,i=n.revisions,[2,{ids:r,revisions:i,records:r.map(function(e,t){return{id:e,revision:i[t]}})}]}})})},t.prototype.updateRecords=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records`});return this.client.put(t,e)},t.prototype.deleteRecords=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records`});return this.client.delete(t,e)},t.prototype.createCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.post(t,e)},t.prototype.getRecordsByCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.get(t,e)},t.prototype.deleteCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.delete(t,e)},t.prototype.getAllRecords=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,c,l,u;return o(this,function(o){return t=e.condition,n=e.orderBy,r=e.withCursor,a=r===void 0||r,c=s(e,[`condition`,`orderBy`,`withCursor`]),n?a?(l=t?`${t} `:``,u=`${l}${n?`order by ${n}`:``}`,[2,this.getAllRecordsWithCursor(i(i({},c),{query:u}))]):[2,this.getAllRecordsWithOffset(i(i({},c),{orderBy:n,condition:t}))]:[2,this.getAllRecordsWithId(i(i({},c),{condition:t}))]})})},t.prototype.getAllRecordsWithId=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,l,u,d,f,p,h;return o(this,function(o){switch(o.label){case 0:t=e.fields,n=e.condition,r=s(e,[`fields`,`condition`]),a=t,a&&a.length>0&&a.indexOf(`$id`)===-1&&(a=c(c([],a,!0),[`$id`],!1)),l=n?`(${n}) and `:``,u=[],d=`0`,o.label=1;case 1:return f=`${l}$id > ${d} order by $id asc limit ${m}`,[4,this.getRecords(i(i({},r),{fields:a,query:f}))];case 2:if(p=o.sent(),u=u.concat(p.records),p.records.length<m)return[3,3];if(h=p.records[p.records.length-1],h.$id.type===`__ID__`)d=h.$id.value;else throw Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");return[3,1];case 3:return[2,u]}})})},t.prototype.getAllRecordsWithOffset=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,c,l,u,d;return o(this,function(o){switch(o.label){case 0:t=e.condition,n=e.orderBy,r=s(e,[`condition`,`orderBy`]),a=t?`${t} `:``,c=[],l=0,o.label=1;case 1:return u=`${a}${n?`order by ${n} `:``}limit ${m} offset ${l}`,[4,this.getRecords(i(i({},r),{query:u}))];case 2:return d=o.sent(),c=c.concat(d.records),d.records.length<m?[3,3]:(l+=m,[3,1]);case 3:return[2,c]}})})},t.prototype.getAllRecordsWithCursor=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,s;return o(this,function(o){switch(o.label){case 0:return t=i(i({},e),{size:m}),[4,this.createCursor(t)];case 1:n=o.sent().id,o.label=2;case 2:o.trys.push([2,6,,8]),r=[],o.label=3;case 3:return[4,this.getRecordsByCursor({id:n})];case 4:return a=o.sent(),r=r.concat(a.records),a.next?[3,3]:[3,5];case 5:return[2,r];case 6:return s=o.sent(),[4,this.deleteCursor({id:n})];case 7:throw o.sent(),s;case 8:return[2]}})})},t.prototype.addAllRecords=function(e){return a(this,void 0,void 0,function(){return o(this,function(t){if(!e.records.every(function(e){return!Array.isArray(e)&&e instanceof Object}))throw Error("the `records` parameter must be an array of object.");return[2,this.addAllRecordsRecursive(e,e.records.length,[])]})})},t.prototype.addAllRecordsRecursive=function(e,t,n){return a(this,void 0,void 0,function(){var r,i,a,s,c,u;return o(this,function(o){switch(o.label){case 0:if(r=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*d,i=e.app,a=e.records,s=a.slice(0,r),s.length===0)return[2,{records:n}];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.addAllRecordsWithBulkRequest({app:i,records:s})];case 2:return c=o.sent(),[3,4];case 3:throw u=o.sent(),new l.KintoneAllRecordsError({records:n},a,t,u,d);case 4:return[2,this.addAllRecordsRecursive({app:i,records:a.slice(r)},t,n.concat(c))]}})})},t.prototype.addAllRecordsWithBulkRequest=function(e){return a(this,void 0,void 0,function(){var t,n,r;return o(this,function(i){switch(i.label){case 0:return t=this.separateArrayRecursive(d,[],e.records),n=t.map(function(t){return{method:`POST`,endpointName:`records`,payload:{app:e.app,records:t}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r=i.sent().results,[2,r.map(function(e){var t=e.ids,n=e.revisions;return t.map(function(e,t){return{id:e,revision:n[t]}})}).reduce(function(e,t){return e.concat(t)},[])]}})})},t.prototype.updateAllRecords=function(e){return a(this,void 0,void 0,function(){return o(this,function(t){return[2,this.updateAllRecordsRecursive(e,e.records.length,[])]})})},t.prototype.updateAllRecordsRecursive=function(e,t,n){return a(this,void 0,void 0,function(){var r,i,a,s,c,u,d;return o(this,function(o){switch(o.label){case 0:if(r=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*f,i=e.app,a=e.upsert,s=e.records,c=s.slice(0,r),c.length===0)return[2,{records:n}];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.updateAllRecordsWithBulkRequest({app:i,upsert:a,records:c})];case 2:return u=o.sent(),[3,4];case 3:throw d=o.sent(),new l.KintoneAllRecordsError({records:n},s,t,d,f);case 4:return[2,this.updateAllRecordsRecursive({app:i,upsert:a,records:s.slice(r)},t,n.concat(u))]}})})},t.prototype.updateAllRecordsWithBulkRequest=function(e){return a(this,void 0,void 0,function(){var t,n,r;return o(this,function(i){switch(i.label){case 0:return t=this.separateArrayRecursive(f,[],e.records),n=t.map(function(t){return{method:`PUT`,endpointName:`records`,payload:{app:e.app,upsert:e.upsert,records:t}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r=i.sent().results,[2,r.map(function(e){return e.records}).reduce(function(e,t){return e.concat(t)},[])]}})})},t.prototype.deleteAllRecords=function(e){return this.deleteAllRecordsRecursive(e,e.records.length)},t.prototype.deleteAllRecordsRecursive=function(e,t){return a(this,void 0,void 0,function(){var n,r,i,a,s;return o(this,function(o){switch(o.label){case 0:if(n=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*p,r=e.app,i=e.records,a=i.slice(0,n),a.length===0)return[2,{}];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.deleteAllRecordsWithBulkRequest({app:r,records:a})];case 2:return o.sent(),[3,4];case 3:throw s=o.sent(),new l.KintoneAllRecordsError({},i,t,s,p);case 4:return[2,this.deleteAllRecordsRecursive({app:r,records:i.slice(n)},t)]}})})},t.prototype.deleteAllRecordsWithBulkRequest=function(e){return a(this,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return t=this.separateArrayRecursive(p,[],e.records),n=t.map(function(t){return{method:`DELETE`,endpointName:`records`,payload:{app:e.app,ids:t.map(function(e){return e.id}),revisions:t.map(function(e){return e.revision})}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r.sent(),[2]}})})},t.prototype.separateArrayRecursive=function(e,t,n){var r=n.slice(0,e);return r.length===0?t:this.separateArrayRecursive(e,c(c([],t,!0),[r],!1),n.slice(e))},t.prototype.addRecordComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comment`});return this.client.post(t,e)},t.prototype.deleteRecordComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comment`});return this.client.delete(t,e)},t.prototype.getRecordComments=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comments`});return this.client.get(t,e)},t.prototype.updateRecordAssignees=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/assignees`});return this.client.put(t,e)},t.prototype.updateRecordStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/status`});return this.client.put(t,e)},t.prototype.updateRecordsStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/status`});return this.client.put(t,e)},t}(u.BaseClient)})),_e=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.SpaceClient=void 0,e.SpaceClient=function(e){r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.get(t,e)},t.prototype.updateSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.put(t,e)},t.prototype.deleteSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.delete(t,e)},t.prototype.updateSpaceBody=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/body`});return this.client.put(t,e)},t.prototype.getSpaceMembers=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/members`});return this.client.get(t,e)},t.prototype.updateSpaceMembers=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/members`});return this.client.put(t,e)},t.prototype.addThread=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread`});return this.client.post(t,e)},t.prototype.updateThread=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread`});return this.client.put(t,e)},t.prototype.addThreadComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread/comment`});return this.client.post(t,e)},t.prototype.addGuests=function(e){var t=this.buildPath({endpointName:`guests`});return this.client.post(t,e)},t.prototype.deleteGuests=function(e){var t=this.buildPath({endpointName:`guests`});return this.client.delete(t,e)},t.prototype.updateSpaceGuests=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/guests`});return this.client.put(t,e)},t.prototype.addSpaceFromTemplate=function(e){var t=this.buildPath({endpointName:`template/space`});return this.client.post(t,e)},t.prototype.getStatistics=function(e){e===void 0&&(e={});var t=this.buildPath({endpointName:`spaces/statistics`});return this.client.get(t,e)},t}(O().BaseClient)})),ve=a(((e,t)=>{t.exports=typeof self==`object`?self.FormData:window.FormData})),ye=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),i=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},a=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},o=n&&n.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.FileClient=void 0;var s=o(ve()),c=l(),d=u();e.FileClient=function(e){r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.uploadFile=function(e){return i(this,void 0,void 0,function(){var t,n,r,i,o,l,u,f,o,p;return a(this,function(a){switch(a.label){case 0:if(t=this.buildPathWithGuestSpaceId({endpointName:`file`}),n=new s.default,!(`path`in e.file))return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.platformDeps.readFileFromPath(e.file.path)];case 2:return r=a.sent(),i=r.name,o=r.data,n.append(`file`,o,i),[3,4];case 3:throw l=a.sent(),l instanceof d.UnsupportedPlatformError?Error(`uploadFile doesn't allow to accept a file path in ${l.platform} environment.`):l;case 4:return[3,6];case 5:u=e.file,f=u.name,o=u.data,p=c.platformDeps.buildFormDataValue(o,f),n.append(`file`,p,f),a.label=6;case 6:return[2,this.client.postData(t,n)]}})})},t.prototype.downloadFile=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`file`});return this.client.getData(t,e)},t}(O().BaseClient)})),be=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.PluginClient=void 0,e.PluginClient=function(e){r(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getPlugins=function(e){e===void 0&&(e={});var t=this.buildPath({endpointName:`plugins`});return this.client.get(t,e)},t.prototype.getRequiredPlugins=function(e){e===void 0&&(e={});var t=this.buildPath({endpointName:`plugins/required`});return this.client.get(t,e)},t.prototype.getApps=function(e){var t=this.buildPath({endpointName:`plugin/apps`});return this.client.get(t,e)},t.prototype.updatePlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.put(t,e)},t.prototype.installPlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.post(t,e)},t.prototype.uninstallPlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.delete(t,e)},t}(O().BaseClient)})),xe=a(((e,t,n)=>{var r=n&&n.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),i=n&&n.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},o=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},s=n&&n.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.SearchClient=void 0,e.SearchClient=function(e){r(t,e);function t(t,n,r){r===void 0&&(r=!1);var i=e.call(this,t,n)||this;return i.isUsRegion=r,i}return t.prototype.search=function(e){return a(this,void 0,void 0,function(){var t,n,r,a,c;return o(this,function(o){return t=this.buildPathWithGuestSpaceId({endpointName:`search`}),n=e.createdAfter,r=e.createdBefore,a=e.includeSynonyms,c=s(e,[`createdAfter`,`createdBefore`,`includeSynonyms`]),[2,this.client.post(t,i(i(i(i({},c),n!==void 0&&{createdAfter:n instanceof Date?n.toISOString():n}),r!==void 0&&{createdBefore:r instanceof Date?r.toISOString():r}),a!==void 0&&{includeSynonyms:this.validatedIncludeSynonymsOptions(a)}))]})})},t.prototype.validatedIncludeSynonymsOptions=function(e){if(this.isUsRegion&&(e===!0||e===`true`))throw Error(`Can't use includeSynonyms parameter in US Region`);return e},t}(O().BaseClient)})),Se=a(((e,t)=>{function n(e,t){return function(){return e.apply(t,arguments)}}var{toString:r}=Object.prototype,{getPrototypeOf:i}=Object,{iterator:a,toStringTag:o}=Symbol,s=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),c=e=>typeof e==`string`&&(e===`__proto__`||e===`constructor`||e===`prototype`),l=(e,t,n)=>e===Object.prototype||!n&&t===null,u=e=>{if(!Object.isExtensible(e))return!1;let t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(t=>{if(c(t))return!1;let n=Object.getOwnPropertyDescriptor(e,t);return!!n&&n.configurable&&n.writable===!0})},d=(e,t)=>{let n=e,r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);let a=i(n);if(l(n,a,n===e))return!1;if(s(n,t))return!0;n=a}return!1},f=(e,t)=>e!=null&&d(e,t)?e[t]:void 0,p=e=>{if(e==null||typeof e!=`object`&&typeof e!=`function`)return e;let t=i(e);if(t===null&&u(e))return e;let n=Object.create(null),r=Object.create(null),a=[],o=e;for(;o!=null&&a.indexOf(o)===-1;){a.push(o);let u=o===e?t:i(o);if(l(o,u,o===e))break;let d=Object.getOwnPropertyNames(o);Object.getOwnPropertySymbols&&d.push(...Object.getOwnPropertySymbols(o));for(let t of d)c(t)||s(r,t)||(n[t]=e[t],r[t]=!0);o=u}return n},m=(e=>t=>{let n=r.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),h=e=>(e=e.toLowerCase(),t=>m(t)===e),g=e=>t=>typeof t===e,{isArray:_}=Array,v=g(`undefined`);function y(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var b=h(`ArrayBuffer`);function x(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&b(e.buffer),t}var S=g(`string`),C=g(`function`),w=g(`number`),T=e=>typeof e==`object`&&!!e,ee=e=>e===!0||e===!1,te=e=>{if(!T(e))return!1;let t=i(e);return(t===null||t===Object.prototype||i(t)===null)&&!d(e,o)&&!d(e,a)},E=e=>{if(!T(e)||y(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ne=h(`Date`),re=h(`File`),ie=e=>!!(e&&e.uri!==void 0),D=e=>e&&e.getParts!==void 0,ae=h(`Blob`),oe=h(`FileList`),se=h(`Set`),ce=e=>T(e)&&C(e.pipe);function le(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var O=le(),ue=O.FormData===void 0?void 0:O.FormData,de=e=>{if(!e)return!1;if(ue&&e instanceof ue)return!0;let t=i(e);if(!t||t===Object.prototype||!C(e.append))return!1;let n=m(e);return n===`formdata`||n===`object`&&C(e.toString)&&e.toString()===`[object FormData]`},fe=h(`URLSearchParams`),[pe,me,he,ge]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(h),_e=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function ve(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),_(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(y(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ye(e,t){if(y(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var be=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,xe=e=>!v(e)&&e!==be;function Se(...e){let{caseless:t,skipUndefined:n}=xe(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&ye(r,i)||i,o=s(r,a)?r[a]:void 0;te(o)&&te(e)?r[a]=Se(o,e):te(e)?r[a]=Se({},e):_(e)?r[a]=e.slice():n&&v(e)||(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||y(n)||(ve(n,i),typeof n!=`object`||_(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];Pe.call(n,t)&&i(n[t],t)}}return r}var Ce=(e,t,r,{allOwnKeys:i}={})=>(ve(t,(t,i)=>{r&&C(t)?Object.defineProperty(e,i,{__proto__:null,value:n(t,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),we=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Te=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Ee=(e,t,n,r)=>{let a,o,s,c={};if(t||={},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-->0;)s=a[o],r&&!r(s,e,t)||c[s]||(t[s]=e[s],c[s]=!0);e=n!==!1&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},De=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Oe=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!w(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},ke=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&i(Uint8Array)),Ae=(e,t)=>{let n=(e&&e[a]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},je=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Me=h(`HTMLFormElement`),Ne=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:Pe}=Object.prototype,Fe=h(`RegExp`),Ie=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};ve(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Le=e=>{Ie(e,(t,n)=>{if(C(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];C(r)&&(t.enumerable=!1,`writable`in t?t.writable=!1:t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)})})},Re=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return _(e)?r(e):r(String(e).split(t)),n},ze=()=>{},Be=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Ve(e){return!!(e&&C(e.append)&&e[o]===`FormData`&&e[a])}var He=e=>{let t=new WeakSet,n=e=>{if(T(e)){if(t.has(e))return;if(y(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(se(e)){r=[];for(let t of e){let e=n(t);!v(e)&&r.push(e)}}else r=_(e)?[]:{},ve(e,(e,t)=>{let i=n(e);!v(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},Ue=h(`AsyncFunction`),We=e=>e&&(T(e)||C(e))&&C(e.then)&&C(e.catch),Ge=((e,t)=>e?setImmediate:t?((e,t)=>(be.addEventListener(`message`,({source:n,data:r})=>{n===be&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),be.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,C(be.postMessage)),Ke=typeof queueMicrotask<`u`?queueMicrotask.bind(be):typeof process<`u`&&process.nextTick||Ge,qe=e=>e!=null&&C(e[a]),k={isArray:_,isArrayBuffer:b,isBuffer:y,isFormData:de,isArrayBufferView:x,isString:S,isNumber:w,isBoolean:ee,isObject:T,isPlainObject:te,isEmptyObject:E,isReadableStream:pe,isRequest:me,isResponse:he,isHeaders:ge,isUndefined:v,isDate:ne,isFile:re,isReactNativeBlob:ie,isReactNative:D,isBlob:ae,isRegExp:Fe,isFunction:C,isStream:ce,isURLSearchParams:fe,isTypedArray:ke,isFileList:oe,forEach:ve,merge:Se,extend:Ce,trim:_e,stripBOM:we,inherits:Te,toFlatObject:Ee,kindOf:m,kindOfTest:h,endsWith:De,toArray:Oe,forEachEntry:Ae,matchAll:je,isHTMLForm:Me,hasOwnProperty:s,hasOwnProp:s,hasOwnInPrototypeChain:d,getSafeProp:f,toSafeFlatObject:p,reduceDescriptors:Ie,freezeMethods:Le,toObjectSet:Re,toCamelCase:Ne,noop:ze,toFiniteNumber:Be,findKey:ye,global:be,isContextDefined:xe,isSpecCompliantForm:Ve,toJSONObject:He,isAsyncFn:Ue,isThenable:We,setImmediate:Ge,asap:Ke,isIterable:qe,isSafeIterable:e=>e!=null&&d(e,a)&&qe(e)},Je=k.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Ye=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=k.hasOwnProp(t,n);!n||a&&k.hasOwnProp(Je,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function Xe(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var Ze=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),Qe=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function $e(e,t){return k.isArray(e)?e.map(e=>$e(e,t)):Xe(String(e).replace(t,``))}var et=e=>$e(e,Ze),tt=e=>$e(e,Qe);function nt(e){let t=Object.create(null);return k.forEach(e.toJSON(),(e,n)=>{t[n]=tt(e)}),t}var rt=Symbol(`internals`);function it(e){return e&&String(e).trim().toLowerCase()}function at(e){return e===!1||e==null?e:k.isArray(e)?e.map(at):et(String(e))}function ot(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var st=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ct(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function lt(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function ut(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=ct(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=ct(i.slice(0,a));if(!st.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=ct(i.slice(a+1));t[s]=lt(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var dt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ft(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function pt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function mt(e,t){let n=k.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var ht=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=it(t);if(!i)return;let a=k.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=at(e))}let a=(e,t)=>k.forEach(e,(e,n)=>i(e,n,t));if(k.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(k.isString(e)&&(e=e.trim())&&!dt(e))a(Ye(e),t);else if(k.isObject(e)&&k.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!k.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],k.hasOwnProp(n,i)?(r=n[i],n[i]=k.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=it(e),e){let n=k.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return ot(e);if(k.isFunction(t))return t.call(this,e,n);if(k.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=it(e),e){let n=k.findKey(this,e);return!(!n||this[n]===void 0||t&&!ft(this,this[n],n,t))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=it(e),e){let i=k.findKey(n,e);i&&(!t||ft(n,n[i],i,t))&&(delete n[i],r=!0)}}return k.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||ft(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return k.forEach(this,(r,i)=>{let a=k.findKey(n,i);if(a){t[a]=at(r),delete t[i];return}let o=e?pt(i):String(i).trim();o!==i&&delete t[i],t[o]=at(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return k.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&k.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return k.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return ut(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[rt]=this[rt]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=it(e);t[r]||(mt(n,e),t[r]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}};ht.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),k.reduceDescriptors(ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),k.freezeMethods(ht);var gt=`[REDACTED ****]`;function _t(e){if(k.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function vt(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||k.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof ht&&(e=e.toJSON()),r.push(e);let t;if(k.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);k.isUndefined(r)||(t[n]=r)});else{if(!k.isPlainObject(e)&&_t(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?gt:i(a);k.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function yt(e){try{return String(e)}catch{return``}}function bt(e){return e.errors.map(e=>{try{return e&&e.message?yt(e.message):yt(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var A=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&k.isArray(t.errors)&&t.errors.length&&(s=bt(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&k.hasOwnProp(e,`redact`)?e.redact:void 0,n=k.isArray(t)&&t.length>0?vt(e,t):k.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};A.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,A.ERR_BAD_OPTION=`ERR_BAD_OPTION`,A.ECONNABORTED=`ECONNABORTED`,A.ETIMEDOUT=`ETIMEDOUT`,A.ECONNREFUSED=`ECONNREFUSED`,A.ERR_NETWORK=`ERR_NETWORK`,A.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,A.ERR_DEPRECATED=`ERR_DEPRECATED`,A.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,A.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,A.ERR_CANCELED=`ERR_CANCELED`,A.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,A.ERR_INVALID_URL=`ERR_INVALID_URL`,A.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;var xt=null,St=100;function Ct(e){return k.isPlainObject(e)||k.isArray(e)}function wt(e){return k.endsWith(e,`[]`)?e.slice(0,-2):e}function Tt(e,t,n){return e?e.concat(t).map(function(e,t){return e=wt(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Et(e){return k.isArray(e)&&!e.some(Ct)}var Dt=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function Ot(e,t,n){if(!k.isObject(e))throw TypeError(`target must be an object`);t||=new FormData;let r=(e,t)=>{let r=k.getSafeProp(n,e);return k.isUndefined(r)?t:r},i=r(`metaTokens`,!0),a=r(`visitor`)||h,o=r(`dots`,!1),s=r(`indexes`,!1),c=r(`Blob`)||typeof Blob<`u`&&Blob,l=r(`maxDepth`,St),u=c&&k.isSpecCompliantForm(t),d=[];if(!k.isFunction(a))throw TypeError(`visitor must be a function`);function f(e){if(e===null)return``;if(k.isDate(e))return e.toISOString();if(k.isBoolean(e))return e.toString();if(!u&&k.isBlob(e))throw new A(`Blob is not supported. Use a Buffer instead.`);if(k.isArrayBuffer(e)||k.isTypedArray(e)){if(u&&typeof c==`function`)return new c([e]);throw new A(`Blob is not supported. Use a Buffer instead.`,A.ERR_NOT_SUPPORT)}return e}function p(e){if(e>l)throw new A(`Object is too deeply nested (`+e+` levels). Max depth: `+l,A.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(e,t){if(l===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!k.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),p(t+n.length-1),r})}function h(e,n,r){let a=e;if(k.isReactNative(t)&&k.isReactNativeBlob(e))return t.append(Tt(r,n,o),f(e)),!1;if(e&&!r&&typeof e==`object`){if(k.endsWith(n,`{}`))n=i?n:n.slice(0,-2),e=m(e,1);else if(k.isArray(e)&&Et(e)||(k.isFileList(e)||k.endsWith(n,`[]`))&&(a=k.toArray(e)))return n=wt(n),a.forEach(function(e,r){!(k.isUndefined(e)||e===null)&&t.append(s===!0?Tt([n],r,o):s===null?n:n+`[]`,f(e))}),!1}return Ct(e)?!0:(t.append(Tt(r,n,o),f(e)),!1)}let g=Object.assign(Dt,{defaultVisitor:h,convertValue:f,isVisitable:Ct});function _(e,n,r=0){if(!k.isUndefined(e)){if(p(r),d.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));d.push(e),k.forEach(e,function(e,i){(!(k.isUndefined(e)||e===null)&&a.call(t,e,k.isString(i)?i.trim():i,n,g))===!0&&_(e,n?n.concat(i):[i],r+1)}),d.pop()}}if(!k.isObject(e))throw TypeError(`data must be an object`);return _(e),t}function kt(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function At(e,t){this._pairs=[],e&&Ot(e,this,t)}var jt=At.prototype;jt.append=function(e,t){this._pairs.push([e,t])},jt.toString=function(e){let t=e?t=>e.call(this,t,kt):kt;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Nt(e,t,n){if(!t)return e;e||=``;let r=k.isFunction(n)?{serialize:n}:n,i=k.getSafeProp(r,`encode`)||Mt,a=k.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):k.isURLSearchParams(t)?t.toString():new At(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Pt=Symbol(`internals`);function Ft(e){return e?e.length:0}function It(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function Lt(e,t){let n=e.handlers,r=Ft(n);n===t.handlersRef?r!==t.handlersLength&&(r?t.handlerEntries.forEach(function(e,r){n[e.index]!==e.handler&&t.handlerEntries.delete(r)}):t.handlerEntries.clear()):(t.handlersRef=n,t.handlerEntries.clear()),t.handlersLength=r}var Rt=class{constructor(){this.handlers=[],this[Pt]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,t,n){let r={fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null},i=this[Pt];this.handlers??=[],Lt(this,i);let a=i.nextId++;return this.handlers.push(r),i.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),i.handlersLength=this.handlers.length,a}eject(e){let t=this[Pt];Lt(this,t);let n=t.handlerEntries.get(e);if(n){if(t.handlerEntries.delete(e),this.handlers[n.index]!==n.handler)return;this.handlers[n.index]=null,t.iterationDepth||(It(this.handlers),t.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Lt(this,this[Pt]))}forEach(e){let t=this[Pt];Lt(this,t),t.iterationDepth++;try{k.forEach(this.handlers,function(t){t!==null&&e(t)})}finally{--t.iterationDepth||(Lt(this,t),It(this.handlers),t.handlersLength=Ft(this.handlers))}}},zt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Bt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:At,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Vt=typeof window<`u`&&typeof document<`u`,Ht=typeof navigator==`object`&&navigator||void 0,Ut=Vt&&(!Ht||[`ReactNative`,`NativeScript`,`NS`].indexOf(Ht.product)<0),Wt=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Gt=Vt&&window.location.href||`http://localhost`,Kt={...Object.freeze({__proto__:null,hasBrowserEnv:Vt,hasStandardBrowserEnv:Ut,hasStandardBrowserWebWorkerEnv:Wt,navigator:Ht,origin:Gt}),...Bt};function qt(e,t){return Ot(e,new Kt.classes.URLSearchParams,{visitor:function(e,t,n,r){return Kt.isNode&&k.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var Jt=St;function Yt(e){if(e>Jt)throw new A(`FormData field is too deeply nested (`+e+` levels). Max depth: 100`,A.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Xt(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)Yt(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function Zt(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Qt(e){function t(e,n,r,i){Yt(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&k.isArray(r)?r.length:a,s?(k.hasOwnProp(r,a)?r[a]=k.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):(k.hasOwnProp(r,a)&&k.isObject(r[a])||(r[a]=[]),t(e,n,r[a],i)&&k.isArray(r[a])&&(r[a]=Zt(r[a])),!o)}if(k.isFormData(e)&&k.isFunction(e.entries)){let n={};return k.forEachEntry(e,(e,r)=>{t(Xt(e),r,n,0)}),n}return null}var $t=Object.freeze([`get`,`delete`,`head`,`options`,`post`,`put`,`patch`,`purge`,`link`,`unlink`,`query`]),en=(e,t)=>e!=null&&k.hasOwnProp(e,t)?e[t]:void 0;function tn(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var nn={transitional:zt,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=k.isObject(e);if(i&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r?JSON.stringify(Qt(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=en(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return qt(e,t).toString();if((a=k.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=en(this,`env`),r=n&&n.FormData;return Ot(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),tn(e)):e}],transformResponse:[function(e){let t=en(this,`transitional`)||nn.transitional,n=t&&t.forcedJSONParsing,r=en(this,`responseType`),i=r===`json`;if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,en(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?A.from(e,A.ERR_BAD_RESPONSE,this,null,en(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};k.forEach($t,e=>{nn.headers[e]={}});function rn(e,t){let n=this||nn,r=t||n,i=ht.from(r.headers),a=r.data;return k.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function an(e){return!!(e&&e.__CANCEL__)}var on=class extends A{constructor(e,t,n){super(e??`canceled`,A.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function sn(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new A(`Request failed with status code `+n.status,n.status>=400&&n.status<500?A.ERR_BAD_REQUEST:A.ERR_BAD_RESPONSE,n.config,n.request,n))}var cn=/[\t\n\r]/g;function ln(e){if(typeof e!=`string`)return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(cn,``)}function un(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function dn(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function fn(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i),(...e)=>o(e)]}var pn=(e,t,n=3)=>{let r=0,i=dn(50,250);return fn(n=>{if(!n||!k.isNumber(n.loaded))return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},mn=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},j=(e,t=k.asap)=>(...n)=>t(()=>e(...n)),hn=Kt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Kt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,M=Kt.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];k.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&s.push(`path=${r}`),k.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),k.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function gn(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _n(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var vn=/^https?:(?!\/\/)/i;function yn(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${gt}`)}function bn(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${gt}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${gt}`);return n===-1?r:`${r}#${yn(t.slice(n+1))}`}function xn(e,t){if(typeof e==`string`){let n=ln(e);if(vn.test(n))throw new A(`Invalid URL ${JSON.stringify(bn(n))}: missing "//" after protocol`,A.ERR_INVALID_URL,t)}}function Sn(e,t,n,r){xn(t,r);let i=!gn(t);return e&&(i||n===!1)?(xn(e,r),_n(e,t)):t}var Cn=e=>e instanceof ht?{...e}:e,wn=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Tn(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return k.isPlainObject(e)&&k.isPlainObject(t)?k.merge.call({caseless:r},e,t):k.isPlainObject(t)?k.merge({},t):k.isArray(t)?t.slice():t}function i(e,t,n,i){if(!k.isUndefined(t))return r(e,t,n,i);if(!k.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!k.isUndefined(t))return r(void 0,t)}function o(e,t){if(!k.isUndefined(t))return r(void 0,t);if(!k.isUndefined(e))return r(void 0,e)}function s(n){let r=k.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!k.isUndefined(r)){if(k.isPlainObject(r)){if(k.hasOwnProp(r,n))return r[n]}else return}let i=k.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(k.isPlainObject(i)&&k.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(k.hasOwnProp(t,a))return r(n,i);if(k.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(Cn(e),Cn(t),n,!0)};return k.forEach(wn({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=k.hasOwnProp(l,r)?l[r]:i,o=a(k.hasOwnProp(e,r)?e[r]:void 0,k.hasOwnProp(t,r)?t[r]:void 0,r);k.isUndefined(o)&&a!==c||(n[r]=o)}),k.hasOwnProp(t,`validateStatus`)&&k.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(k.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var En=[`content-type`,`content-length`];function Dn(e,t,n){n===`content-only`?Object.entries(t||{}).forEach(([t,n])=>{En.includes(t.toLowerCase())&&e.set(t,n)}):e.set(t)}var On=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function kn(e){let t=Tn({},e),n=e=>k.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=ht.from(s),t.url=Nt(Sn(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=k.getSafeProp(c,`username`)||``,n=k.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?On(n):``)))}catch(t){throw A.from(t,A.ERR_BAD_OPTION_VALUE,e)}}if(k.isFormData(r)){let e=k.getSafeProp(r,`getHeaders`);Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv||k.isReactNative(r)?s.setContentType(void 0):k.isFunction(e)&&Dn(s,e.call(r),n(`formDataHeaderPolicy`))}if(Kt.hasStandardBrowserEnv&&(k.isFunction(i)&&(i=i(t)),i===!0||i==null&&hn(t.url))){let e=a&&o&&M.read(o);e&&s.set(a,e)}return t}var An=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=kn(e),i=r.data,a=ht.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p,m;function h(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function _(i){if(!g)return;if(g.status===0&&(un(ln(r.url))||un(Kt.origin))!==`file`&&!(g.responseURL&&g.responseURL.startsWith(`file:`))){n(new A(`Request aborted`,A.ECONNABORTED,e,g)),h(),g=null;return}try{i?m&&m(i):p&&p()}catch(e){setTimeout(()=>{throw e})}if(!g)return;let a=ht.from(`getAllResponseHeaders`in g&&g.getAllResponseHeaders());sn(function(e){t(e),h()},function(e){n(e),h()},{data:!o||o===`text`||o===`json`?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:a,config:e,request:g}),g=null}`onloadend`in g?g.onloadend=_:g.onreadystatechange=function(){g&&g.readyState===4&&(g.status!==0||g.responseURL&&g.responseURL.startsWith(`file:`))&&setTimeout(_)},g.onabort=function(){g&&=(n(new A(`Request aborted`,A.ECONNABORTED,e,g)),h(),null)},g.onerror=function(t){let r=new A(t&&t.message?t.message:`Network Error`,A.ERR_NETWORK,e,g);r.event=t||null,n(r),h(),g=null},g.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||zt;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new A(t,i.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,g)),h(),g=null},i===void 0&&a.setContentType(null),`setRequestHeader`in g&&k.forEach(nt(a),function(e,t){g.setRequestHeader(t,e)}),k.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),o&&o!==`json`&&(g.responseType=r.responseType),c&&([d,p,m]=pn(c,!0),g.addEventListener(`progress`,d)),s&&g.upload&&([u,f]=pn(s),g.upload.addEventListener(`progress`,u),g.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{g&&=(n(!t||t.type?new on(null,e,g):t),g.abort(),h(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let v=un(r.url);v&&!Kt.protocols.includes(v)?(n(new A(`Unsupported protocol `+v+`:`,A.ERR_BAD_REQUEST,e)),h()):g.send(i||null)})},jn=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof A?t:new on(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new A(`timeout of ${t}ms exceeded`,A.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{r||(e.aborted?i.call(e):e.addEventListener(`abort`,i,{once:!0}))});let{signal:s}=n;return s.unsubscribe=()=>k.asap(o),s},Mn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Nn=async function*(e,t){for await(let n of Pn(e))yield*Mn(n,t)},Pn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Fn=(e,t,n,r)=>{let i=Nn(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},In=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Ln=(e,t,n)=>t+2<n&&In(e.charCodeAt(t+1))&&In(e.charCodeAt(t+2)),Rn=e=>e<=57?e-48:(e&223)-55,zn=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,Bn=e=>e===9||e===10||e===12||e===13||e===32,Vn=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},Hn=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},Un=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);o===37&&Ln(e,a,t)&&(o=Rn(e.charCodeAt(a+1))*16+Rn(e.charCodeAt(a+2)),a+=2),Bn(o)||(o===61?r++:!zn(o)||r>0?i=!0:n++)}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?Hn(e):Vn(n)},Wn=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&Ln(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function Gn(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return Wn(t===-1?e:e.slice(0,t),Un)}var Kn=`1.20.0`,qn=65536,Jn={cache:`default`,redirect:`follow`,referrer:`about:client`,referrerPolicy:``,mode:`cors`,integrity:``,keepalive:!1,priority:`auto`,window:null},{isFunction:Yn}=k,Xn=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Zn=e=>{if(!k.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Qn=(e,...t)=>{try{return!!e(...t)}catch{return!1}},$n=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},er=e=>{let t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Yn(i):typeof fetch==`function`,c=Yn(a),l=Yn(o);if(!s)return!1;let u=s&&Yn(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Qn(()=>{let e=!1,t=new a(Kt.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Qn(()=>k.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new A(`Response type '${e}' is not supported`,A.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new a(Kt.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e+=``),k.isString(e))return(await d(e)).byteLength},g=async(e,t)=>k.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:S=`same-origin`,fetchOptions:C,maxContentLength:w,maxBodyLength:T,maxRedirects:ee}=kn(e),te=k.isNumber(w)&&w>-1,E=k.isNumber(T)&&T>-1,ne=t=>k.hasOwnProp(e,t)?e[t]:void 0,re=i||fetch;b=b?(b+``).toLowerCase():`text`;let ie=jn([l,d&&d.toAbortSignal()],_),D=null,ae=ie&&ie.unsubscribe&&(()=>{ie.unsubscribe()}),oe,se=null,ce=()=>new A(`Request body larger than maxBodyLength limit`,A.ERR_BAD_REQUEST,e,D);try{let i,l=ne(`auth`);if(l&&(i={username:k.getSafeProp(l,`username`)||``,password:k.getSafeProp(l,`password`)||``}),$n(t)){let e=new URL(t,Kt.origin);!i&&(e.username||e.password)&&(i={username:Zn(e.username),password:Zn(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(Xn((i.username||``)+`:`+(i.password||``))))),te&&typeof t==`string`&&t.startsWith(`data:`)&&Gn(t)>w)throw new A(`maxContentLength size of `+w+` exceeded`,A.ERR_BAD_RESPONSE,e,D);if(E&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(oe=e,e>T))throw ce()}let d=E&&(k.isReadableStream(s)||k.isStream(s)),_=(e,t,n)=>Fn(e,qn,e=>{if(E&&e>T)throw se=ce();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(oe??=await g(x,s),oe!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(k.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&mn(oe,pn(j(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new A(`Stream request bodies are not supported by the current fetch implementation`,A.ERR_NOT_SUPPORT,e,D);k.isString(S)||(S=S?`include`:`omit`);let le=c&&`credentials`in a.prototype;if(k.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/1.20.0`,!1);let O=C==null?C:Object.assign(Object.create(null),C);O&&(delete O.body,delete O.headers,delete O.method,delete O.signal,delete O.duplex,delete O.credentials);let ue=Object.assign(Object.create(null),O,{signal:ie,method:n.toUpperCase(),headers:nt(x.normalize()),body:s,duplex:`half`,credentials:le?S:void 0});c&&(k.forEach(Jn,(e,t)=>{ue[t]===void 0&&(ue[t]=e)}),ue.signal===void 0&&(ue.signal=null),ue.body===void 0&&(ue.body=null)),ee===0&&(ue.redirect=`manual`,O&&(O.redirect=`manual`)),D=c&&new a(t,ue);let de=await(c?re(D,O):re(t,ue)),fe=ht.from(de.headers);if(te){let t=k.toFiniteNumber(fe.getContentLength());if(t!=null&&t>w)throw new A(`maxContentLength size of `+w+` exceeded`,A.ERR_BAD_RESPONSE,e,D)}let pe=p&&(b===`stream`||b===`response`);if(p&&de.body&&(v||te||pe&&ae)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=de[e]});let n=k.toFiniteNumber(fe.getContentLength()),[r,i]=v&&mn(n,pn(j(v),!0))||[],a=0;de=new o(Fn(de.body,qn,t=>{if(te&&(a=t,a>w))throw new A(`maxContentLength size of `+w+` exceeded`,A.ERR_BAD_RESPONSE,e,D);r&&r(t)},()=>{i&&i(),ae&&ae()}),t)}b||=`text`;let me=await m[k.findKey(m,b)||`text`](de,e);if(te&&!p&&!pe){let t;if(me!=null&&(typeof me.byteLength==`number`?t=me.byteLength:typeof me.size==`number`?t=me.size:typeof me==`string`&&(t=typeof r==`function`?new r().encode(me).byteLength:me.length)),typeof t==`number`&&t>w)throw new A(`maxContentLength size of `+w+` exceeded`,A.ERR_BAD_RESPONSE,e,D)}return!pe&&ae&&ae(),await new Promise((t,n)=>{sn(t,n,{data:me,headers:ht.from(de.headers),status:de.status,statusText:de.statusText,config:e,request:D})})}catch(t){if(ae&&ae(),ie&&ie.aborted&&ie.reason instanceof A){let n=ie.reason;throw n.config=e,D&&(n.request=D),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(se)throw D&&!se.request&&(se.request=D),se;if(t instanceof A)throw D&&!t.request&&(t.request=D),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new A(`Network Error`,A.ERR_NETWORK,e,D,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw A.from(t,t&&t.code,e,D,t&&t.response)}}},tr=new Map,nr=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=tr;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:er(t)),l=c;return c};nr();var rr={http:xt,xhr:An,fetch:{get:nr}};k.forEach(rr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var ir=e=>`- ${e}`,ar=e=>k.isFunction(e)||e===null||e===!1;function or(e,t){e=k.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!ar(r)&&(i=rr[(n=String(r)).toLowerCase()],i===void 0))throw new A(`Unknown adapter '${n}'`);if(i&&(k.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new A(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(ir).join(`
`):` `+ir(e[0]):`as no adapter specified`),A.ERR_NOT_SUPPORT)}return i}var sr={getAdapter:or,adapters:rr};function cr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new on(null,e)}function lr(e){let t=k.toSafeFlatObject(e);return cr(t),t.headers=ht.from(k.getSafeProp(t,`headers`)),t.data=rn.call(t,t.transformRequest),[`post`,`put`,`patch`].indexOf(t.method)!==-1&&t.headers.setContentType(`application/x-www-form-urlencoded`,!1),sr.getAdapter(t.adapter||nn.adapter,t)(t).then(function(e){cr(t),t.response=e;try{e.data=rn.call(t,t.transformResponse,e)}finally{delete t.response}return e.headers=ht.from(e.headers),e},function(e){if(!an(e)&&(cr(t),e&&e.response)){t.response=e.response;try{e.response.data=rn.call(t,t.transformResponse,e.response)}finally{delete t.response}e.response.headers=ht.from(e.response.headers)}return Promise.reject(e)})}var ur={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{ur[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var dr={};ur.transitional=function(e,t,n){function r(e,t){return`[Axios v1.20.0] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new A(r(i,` has been removed`+(t?` in `+t:``)),A.ERR_DEPRECATED);return t&&!dr[i]&&(dr[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},ur.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function fr(e,t,n){if(typeof e!=`object`||!e)throw new A(`options must be an object`,A.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new A(`option `+a+` must be `+n,A.ERR_BAD_OPTION_VALUE)}else if(n!==!0)throw new A(`Unknown option `+a,A.ERR_BAD_OPTION)}}var pr={assertOptions:fr,validators:ur},mr=pr.validators,hr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Rt,response:new Rt}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error)try{let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack,r=``;if(typeof n==`string`){let e=n.indexOf(`
`);r=e===-1?``:n.slice(e+1)}if(!e.stack)e.stack=r;else if(r){let t=r.indexOf(`
`),n=t===-1?-1:r.indexOf(`
`,t+1),i=n===-1?``:r.slice(n+1);String(e.stack).endsWith(i)||(e.stack+=`
`+r)}}catch{}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Tn(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&pr.assertOptions(n,{silentJSONParsing:mr.transitional(mr.boolean),forcedJSONParsing:mr.transitional(mr.boolean),clarifyTimeoutError:mr.transitional(mr.boolean),legacyInterceptorReqResOrdering:mr.transitional(mr.boolean),advertiseZstdAcceptEncoding:mr.transitional(mr.boolean),validateStatusUndefinedResolves:mr.transitional(mr.boolean)},!1),r!=null&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:pr.assertOptions(r,{encode:mr.function,serialize:mr.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),pr.assertOptions(t,{baseUrl:mr.spelling(`baseURL`),withXsrfToken:mr.spelling(`withXSRFToken`)},!0),t.method=(k.getSafeProp(t,`method`)||k.getSafeProp(this.defaults,`method`)||`get`).toLowerCase();let a=i&&k.merge(i.common,i[t.method]);i&&k.forEach($t.concat(`common`),e=>{delete i[e]}),t.headers=ht.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||zt;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[lr.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);k.isThenable(n)&&(l=Promise.resolve(n).then(()=>lr.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=lr.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Tn(this.defaults,e),Nt(Sn(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};k.forEach([`delete`,`get`,`head`,`options`],function(e){hr.prototype[e]=function(t,n){return this.request(Tn(n||{},{method:e,url:t,data:n&&k.hasOwnProp(n,`data`)?n.data:void 0}))}}),k.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(Tn(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}hr.prototype[e]=t(),e!==`query`&&(hr.prototype[e+`Form`]=t(!0))});var N=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new on(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function gr(e){return function(t){return e.apply(null,t)}}function _r(e){return k.isObject(e)&&e.isAxiosError===!0}var vr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vr).forEach(([e,t])=>{vr[t]===void 0&&(vr[t]=e)});function yr(e){let t=new hr(e),r=n(hr.prototype.request,t);return k.extend(r,hr.prototype,t,{allOwnKeys:!0}),k.extend(r,t,null,{allOwnKeys:!0}),r.create=function(t){return yr(Tn(e,t))},r}var br=yr(nn);br.Axios=hr,br.CanceledError=on,br.CancelToken=N,br.isCancel=an,br.VERSION=Kn,br.toFormData=Ot,br.AxiosError=A,br.Cancel=br.CanceledError,br.all=function(e){return Promise.all(e)},br.spread=gr,br.isAxiosError=_r,br.mergeConfig=Tn,br.AxiosHeaders=ht,br.formToJSON=e=>Qt(k.isHTMLForm(e)?new FormData(e):e),br.getAdapter=sr.getAdapter,br.HttpStatusCode=vr,br.default=br,t.exports=br})),Ce=a(((e,t,n)=>{var r=n&&n.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},a=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},o=n&&n.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.AxiosClient=void 0;var s=o(Se());e.AxiosClient=function(){function e(e){var t=e.responseHandler,n=e.requestConfigBuilder;this.responseHandler=t,this.requestConfigBuilder=n}return e.prototype.get=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`get`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.getData=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`get`,e,t,{responseType:`arraybuffer`})];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.post=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`post`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.postData=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`post`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.put=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`put`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.delete=function(e,t){return i(this,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`delete`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.sendRequest=function(e){return this.responseHandler.handle((0,s.default)(r(r({},e),{maxBodyLength:1/0,maxContentLength:1/0})))},e}()})),we=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultHttpClient=void 0;var t=Ce();Object.defineProperty(e,"DefaultHttpClient",{enumerable:!0,get:function(){return t.AxiosClient}})})),Te=a(((e,t)=>{t.exports=TypeError})),Ee=a(((e,t)=>{t.exports={}})),De=a(((e,t)=>{var n=typeof Map==`function`&&Map.prototype,r=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,`size`):null,i=n&&r&&typeof r.get==`function`?r.get:null,a=n&&Map.prototype.forEach,o=typeof Set==`function`&&Set.prototype,s=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Set.prototype,`size`):null,c=o&&s&&typeof s.get==`function`?s.get:null,l=o&&Set.prototype.forEach,u=typeof WeakMap==`function`&&WeakMap.prototype?WeakMap.prototype.has:null,d=typeof WeakSet==`function`&&WeakSet.prototype?WeakSet.prototype.has:null,f=typeof WeakRef==`function`&&WeakRef.prototype?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,m=Object.prototype.toString,h=Function.prototype.toString,g=String.prototype.match,_=String.prototype.slice,v=String.prototype.replace,y=String.prototype.toUpperCase,b=String.prototype.toLowerCase,x=RegExp.prototype.test,S=Array.prototype.concat,C=Array.prototype.join,w=Array.prototype.slice,T=Math.floor,ee=typeof BigInt==`function`?BigInt.prototype.valueOf:null,te=Object.getOwnPropertySymbols,E=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?Symbol.prototype.toString:null,ne=typeof Symbol==`function`&&typeof Symbol.iterator==`object`,re=typeof Symbol==`function`&&Symbol.toStringTag?Symbol.toStringTag:null,ie=Object.prototype.propertyIsEnumerable,D=(typeof Reflect==`function`?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function ae(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||x.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e==`number`){var r=e<0?-T(-e):T(e);if(r!==e){var i=String(r),a=_.call(t,i.length+1);return v.call(i,n,`$&_`)+`.`+v.call(v.call(a,/([0-9]{3})/g,`$&_`),/_$/,``)}}return v.call(t,n,`$&_`)}var oe=Ee(),se=oe.custom,ce=be(se)?se:null,le={__proto__:null,double:`"`,single:`'`},O={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};t.exports=function e(t,n,r,o){var s=n||{};if(Ce(s,`quoteStyle`)&&!Ce(le,s.quoteStyle))throw TypeError(`option "quoteStyle" must be "single" or "double"`);if(Ce(s,`maxStringLength`)&&(typeof s.maxStringLength==`number`?s.maxStringLength<0&&s.maxStringLength!==1/0:s.maxStringLength!==null))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=!Ce(s,`customInspect`)||s.customInspect;if(typeof u!=`boolean`&&u!==`symbol`)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Ce(s,`indent`)&&s.indent!==null&&s.indent!==`	`&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Ce(s,`numericSeparator`)&&typeof s.numericSeparator!=`boolean`)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var d=s.numericSeparator;if(t===void 0)return`undefined`;if(t===null)return`null`;if(typeof t==`boolean`)return t?`true`:`false`;if(typeof t==`string`)return Pe(t,s);if(typeof t==`number`){if(t===0)return 1/0/t>0?`0`:`-0`;var f=String(t);return d?ae(t,f):f}if(typeof t==`bigint`){var m=String(t)+`n`;return d?ae(t,m):m}var h=s.depth===void 0?5:s.depth;if(r===void 0&&(r=0),r>=h&&h>0&&typeof t==`object`)return pe(t)?`[Array]`:`[Object]`;var g=Be(s,r);if(o===void 0)o=[];else if(De(o,t)>=0)return`[Circular]`;function y(t,n,i){if(n&&(o=w.call(o),o.push(n)),i){var a={depth:s.depth};return Ce(s,`quoteStyle`)&&(a.quoteStyle=s.quoteStyle),e(t,a,r+1,o)}return e(t,s,r+1,o)}if(typeof t==`function`&&!he(t)){var x=Te(t),T=He(t,y);return`[Function`+(x?`: `+x:` (anonymous)`)+`]`+(T.length>0?` { `+C.call(T,`, `)+` }`:``)}if(be(t)){var te=ne?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,`$1`):E.call(t);return typeof t==`object`&&!ne?Ie(te):te}if(Ne(t)){for(var se=`<`+b.call(String(t.nodeName)),O=t.attributes||[],fe=0;fe<O.length;fe++)se+=` `+O[fe].name+`=`+ue(de(O[fe].value),`double`,s);return se+=`>`,t.childNodes&&t.childNodes.length&&(se+=`...`),se+=`</`+b.call(String(t.nodeName))+`>`,se}if(pe(t)){if(t.length===0)return`[]`;var Se=He(t,y);return g&&!ze(Se)?`[`+Ve(Se,g)+`]`:`[ `+C.call(Se,`, `)+` ]`}if(ge(t)){var Ee=He(t,y);return!(`cause`in Error.prototype)&&`cause`in t&&!ie.call(t,`cause`)?`{ [`+String(t)+`] `+C.call(S.call(`[cause]: `+y(t.cause),Ee),`, `)+` }`:Ee.length===0?`[`+String(t)+`]`:`{ [`+String(t)+`] `+C.call(Ee,`, `)+` }`}if(typeof t==`object`&&u){if(ce&&typeof t[ce]==`function`&&oe)return oe(t,{depth:h-r});if(u!==`symbol`&&typeof t.inspect==`function`)return t.inspect()}if(Oe(t)){var Fe=[];return a&&a.call(t,function(e,n){Fe.push(y(n,t,!0)+` => `+y(e,t))}),Re(`Map`,i.call(t),Fe,g)}if(je(t)){var Ue=[];return l&&l.call(t,function(e){Ue.push(y(e,t))}),Re(`Set`,c.call(t),Ue,g)}if(ke(t))return Le(`WeakMap`);if(Me(t))return Le(`WeakSet`);if(Ae(t))return Le(`WeakRef`);if(ve(t))return Ie(y(Number(t)));if(xe(t))return Ie(y(ee.call(t)));if(ye(t))return Ie(p.call(t));if(_e(t))return Ie(y(String(t)));if(typeof window<`u`&&t===window)return`{ [object Window] }`;if(typeof globalThis<`u`&&t===globalThis||typeof global<`u`&&t===global)return`{ [object globalThis] }`;if(!me(t)&&!he(t)){var We=He(t,y),Ge=D?D(t)===Object.prototype:t instanceof Object||t.constructor===Object,Ke=t instanceof Object?``:`null prototype`,qe=!Ge&&re&&Object(t)===t&&re in t?_.call(we(t),8,-1):Ke?`Object`:``,k=(Ge||typeof t.constructor!=`function`?``:t.constructor.name?t.constructor.name+` `:``)+(qe||Ke?`[`+C.call(S.call([],qe||[],Ke||[]),`: `)+`] `:``);return We.length===0?k+`{}`:g?k+`{`+Ve(We,g)+`}`:k+`{ `+C.call(We,`, `)+` }`}return String(t)};function ue(e,t,n){var r=le[n.quoteStyle||t];return r+e+r}function de(e){return v.call(String(e),/"/g,`&quot;`)}function fe(e){return!re||!(typeof e==`object`&&(re in e||e[re]!==void 0))}function pe(e){return we(e)===`[object Array]`&&fe(e)}function me(e){return we(e)===`[object Date]`&&fe(e)}function he(e){return we(e)===`[object RegExp]`&&fe(e)}function ge(e){return we(e)===`[object Error]`&&fe(e)}function _e(e){return we(e)===`[object String]`&&fe(e)}function ve(e){return we(e)===`[object Number]`&&fe(e)}function ye(e){return we(e)===`[object Boolean]`&&fe(e)}function be(e){if(ne)return e&&typeof e==`object`&&e instanceof Symbol;if(typeof e==`symbol`)return!0;if(!e||typeof e!=`object`||!E)return!1;try{return E.call(e),!0}catch{}return!1}function xe(e){if(!e||typeof e!=`object`||!ee)return!1;try{return ee.call(e),!0}catch{}return!1}var Se=Object.prototype.hasOwnProperty||function(e){return e in this};function Ce(e,t){return Se.call(e,t)}function we(e){return m.call(e)}function Te(e){if(e.name)return e.name;var t=g.call(h.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function De(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function Oe(e){if(!i||!e||typeof e!=`object`)return!1;try{i.call(e);try{c.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function ke(e){if(!u||!e||typeof e!=`object`)return!1;try{u.call(e,u);try{d.call(e,d)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function Ae(e){if(!f||!e||typeof e!=`object`)return!1;try{return f.call(e),!0}catch{}return!1}function je(e){if(!c||!e||typeof e!=`object`)return!1;try{c.call(e);try{i.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function Me(e){if(!d||!e||typeof e!=`object`)return!1;try{d.call(e,d);try{u.call(e,u)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function Ne(e){return!e||typeof e!=`object`?!1:typeof HTMLElement<`u`&&e instanceof HTMLElement||typeof e.nodeName==`string`&&typeof e.getAttribute==`function`}function Pe(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r=`... `+n+` more character`+(n>1?`s`:``);return Pe(_.call(e,0,t.maxStringLength),t)+r}var i=O[t.quoteStyle||`single`];return i.lastIndex=0,ue(v.call(v.call(e,i,`\\$1`),/[\x00-\x1f]/g,Fe),`single`,t)}function Fe(e){var t=e.charCodeAt(0),n={8:`b`,9:`t`,10:`n`,12:`f`,13:`r`}[t];return n?`\\`+n:`\\x`+(t<16?`0`:``)+y.call(t.toString(16))}function Ie(e){return`Object(`+e+`)`}function Le(e){return e+` { ? }`}function Re(e,t,n,r){var i=r?Ve(n,r):C.call(n,`, `);return e+` (`+t+`) {`+i+`}`}function ze(e){for(var t=0;t<e.length;t++)if(De(e[t],`
`)>=0)return!1;return!0}function Be(e,t){var n;if(e.indent===`	`)n=`	`;else if(typeof e.indent==`number`&&e.indent>0)n=C.call(Array(e.indent+1),` `);else return null;return{base:n,prev:C.call(Array(t+1),n)}}function Ve(e,t){if(e.length===0)return``;var n=`
`+t.prev+t.base;return n+C.call(e,`,`+n)+`
`+t.prev}function He(e,t){var n=pe(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=Ce(e,i)?t(e[i],e):``}var a=typeof te==`function`?te(e):[],o;if(ne){o={};for(var s=0;s<a.length;s++)o[`$`+a[s]]=a[s]}for(var c in e)Ce(e,c)&&(n&&String(Number(c))===c&&c<e.length||ne&&o[`$`+c]instanceof Symbol||(x.call(/[^\w$]/,c)?r.push(t(c,e)+`: `+t(e[c],e)):r.push(c+`: `+t(e[c],e))));if(typeof te==`function`)for(var l=0;l<a.length;l++)ie.call(e,a[l])&&r.push(`[`+t(a[l])+`]: `+t(e[a[l]],e));return r}})),Oe=a(((e,t)=>{var n=De(),r=Te(),i=function(e,t,n){for(var r=e,i;(i=r.next)!=null;r=i)if(i.key===t)return r.next=i.next,n||(i.next=e.next,e.next=i),i},a=function(e,t){if(e){var n=i(e,t);return n&&n.value}},o=function(e,t,n){var r=i(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},s=function(e,t){return e?!!i(e,t):!1},c=function(e,t){if(e)return i(e,t,!0)};t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new r(`Side channel does not contain `+n(e))},delete:function(t){var n=c(e,t);return n&&e&&!e.next&&(e=void 0),!!n},get:function(t){return a(e,t)},has:function(t){return s(e,t)},set:function(t,n){e||={next:void 0},o(e,t,n)}};return t}})),ke=a(((e,t)=>{t.exports=Object})),Ae=a(((e,t)=>{t.exports=Error})),je=a(((e,t)=>{t.exports=EvalError})),Me=a(((e,t)=>{t.exports=RangeError})),Ne=a(((e,t)=>{t.exports=ReferenceError})),Pe=a(((e,t)=>{t.exports=SyntaxError})),Fe=a(((e,t)=>{t.exports=URIError})),Ie=a(((e,t)=>{t.exports=Math.abs})),Le=a(((e,t)=>{t.exports=Math.floor})),Re=a(((e,t)=>{t.exports=Math.max})),ze=a(((e,t)=>{t.exports=Math.min})),Be=a(((e,t)=>{t.exports=Math.pow})),Ve=a(((e,t)=>{t.exports=Math.round})),He=a(((e,t)=>{t.exports=Number.isNaN||function(e){return e!==e}})),Ue=a(((e,t)=>{var n=He();t.exports=function(e){return n(e)||e===0?e:e<0?-1:1}})),We=a(((e,t)=>{t.exports=Object.getOwnPropertyDescriptor})),Ge=a(((e,t)=>{var n=We();if(n)try{n([],`length`)}catch{n=null}t.exports=n})),Ke=a(((e,t)=>{var n=Object.defineProperty||!1;if(n)try{n({},`a`,{value:1})}catch{n=!1}t.exports=n})),qe=a(((e,t)=>{t.exports=function(){if(typeof Symbol!=`function`||typeof Object.getOwnPropertySymbols!=`function`)return!1;if(typeof Symbol.iterator==`symbol`)return!0;var e={},t=Symbol(`test`),n=Object(t);if(typeof t==`string`||Object.prototype.toString.call(t)!==`[object Symbol]`||Object.prototype.toString.call(n)!==`[object Symbol]`)return!1;var r=42;for(var i in e[t]=r,e)return!1;if(typeof Object.keys==`function`&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames==`function`&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor==`function`){var o=Object.getOwnPropertyDescriptor(e,t);if(o.value!==r||o.enumerable!==!0)return!1}return!0}})),k=a(((e,t)=>{var n=typeof Symbol<`u`&&Symbol,r=qe();t.exports=function(){return typeof n!=`function`||typeof Symbol!=`function`||typeof n(`foo`)!=`symbol`||typeof Symbol(`bar`)!=`symbol`?!1:r()}})),Je=a(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect.getPrototypeOf||null})),Ye=a(((e,t)=>{t.exports=ke().getPrototypeOf||null})),Xe=a(((e,t)=>{var n=Object.prototype.toString,r=Math.max,i=`[object Function]`,a=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r];for(var i=0;i<t.length;i+=1)n[i+e.length]=t[i];return n},o=function(e,t){for(var n=[],r=t||0,i=0;r<e.length;r+=1,i+=1)n[i]=e[r];return n},s=function(e,t){for(var n=``,r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n};t.exports=function(e){var t=this;if(typeof t!=`function`||n.apply(t)!==i)throw TypeError(`Function.prototype.bind called on incompatible `+t);for(var c=o(arguments,1),l,u=function(){if(this instanceof l){var n=t.apply(this,a(c,arguments));return Object(n)===n?n:this}return t.apply(e,a(c,arguments))},d=r(0,t.length-c.length),f=[],p=0;p<d;p++)f[p]=`$`+p;if(l=Function(`binder`,`return function (`+s(f,`,`)+`){ return binder.apply(this,arguments); }`)(u),t.prototype){var m=function(){};m.prototype=t.prototype,l.prototype=new m,m.prototype=null}return l}})),Ze=a(((e,t)=>{var n=Xe();t.exports=Function.prototype.bind||n})),Qe=a(((e,t)=>{t.exports=Function.prototype.call})),$e=a(((e,t)=>{t.exports=Function.prototype.apply})),et=a(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect&&Reflect.apply})),tt=a(((e,t)=>{var n=Ze(),r=$e(),i=Qe();t.exports=et()||n.call(i,r)})),nt=a(((e,t)=>{var n=Ze(),r=Te(),i=Qe(),a=tt();t.exports=function(e){if(e.length<1||typeof e[0]!=`function`)throw new r(`a function is required`);return a(n,i,e)}})),rt=a(((e,t)=>{var n=nt(),r=Ge(),i;try{i=[].__proto__===Array.prototype}catch(e){if(!e||typeof e!=`object`||!(`code`in e)||e.code!==`ERR_PROTO_ACCESS`)throw e}var a=!!i&&r&&r(Object.prototype,`__proto__`),o=Object,s=o.getPrototypeOf;t.exports=a&&typeof a.get==`function`?n([a.get]):typeof s==`function`&&function(e){return s(e==null?e:o(e))}})),it=a(((e,t)=>{var n=Je(),r=Ye(),i=rt();t.exports=n?function(e){return n(e)}:r?function(e){if(!e||typeof e!=`object`&&typeof e!=`function`)throw TypeError(`getProto: not an object`);return r(e)}:i?function(e){return i(e)}:null})),at=a(((e,t)=>{var n=Function.prototype.call,r=Object.prototype.hasOwnProperty;t.exports=Ze().call(n,r)})),ot=a(((e,t)=>{var n,r=ke(),i=Ae(),a=je(),o=Me(),s=Ne(),c=Pe(),l=Te(),u=Fe(),d=Ie(),f=Le(),p=Re(),m=ze(),h=Be(),g=Ve(),_=Ue(),v=Function,y=function(e){try{return v(`"use strict"; return (`+e+`).constructor;`)()}catch{}},b=Ge(),x=Ke(),S=function(){throw new l},C=b?function(){try{return arguments.callee,S}catch{try{return b(arguments,`callee`).get}catch{return S}}}():S,w=k()(),T=it(),ee=Ye(),te=Je(),E=$e(),ne=Qe(),re={},ie=typeof Uint8Array>`u`||!T?n:T(Uint8Array),D={__proto__:null,"%AggregateError%":typeof AggregateError>`u`?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>`u`?n:ArrayBuffer,"%ArrayIteratorPrototype%":w&&T?T([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":re,"%AsyncGenerator%":re,"%AsyncGeneratorFunction%":re,"%AsyncIteratorPrototype%":re,"%Atomics%":typeof Atomics>`u`?n:Atomics,"%BigInt%":typeof BigInt>`u`?n:BigInt,"%BigInt64Array%":typeof BigInt64Array>`u`?n:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>`u`?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>`u`?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":i,"%eval%":eval,"%EvalError%":a,"%Float16Array%":typeof Float16Array>`u`?n:Float16Array,"%Float32Array%":typeof Float32Array>`u`?n:Float32Array,"%Float64Array%":typeof Float64Array>`u`?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>`u`?n:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":re,"%Int8Array%":typeof Int8Array>`u`?n:Int8Array,"%Int16Array%":typeof Int16Array>`u`?n:Int16Array,"%Int32Array%":typeof Int32Array>`u`?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":w&&T?T(T([][Symbol.iterator]())):n,"%JSON%":typeof JSON==`object`?JSON:n,"%Map%":typeof Map>`u`?n:Map,"%MapIteratorPrototype%":typeof Map>`u`||!w||!T?n:T(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":r,"%Object.getOwnPropertyDescriptor%":b,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>`u`?n:Promise,"%Proxy%":typeof Proxy>`u`?n:Proxy,"%RangeError%":o,"%ReferenceError%":s,"%Reflect%":typeof Reflect>`u`?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>`u`?n:Set,"%SetIteratorPrototype%":typeof Set>`u`||!w||!T?n:T(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>`u`?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":w&&T?T(``[Symbol.iterator]()):n,"%Symbol%":w?Symbol:n,"%SyntaxError%":c,"%ThrowTypeError%":C,"%TypedArray%":ie,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>`u`?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>`u`?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>`u`?n:Uint16Array,"%Uint32Array%":typeof Uint32Array>`u`?n:Uint32Array,"%URIError%":u,"%WeakMap%":typeof WeakMap>`u`?n:WeakMap,"%WeakRef%":typeof WeakRef>`u`?n:WeakRef,"%WeakSet%":typeof WeakSet>`u`?n:WeakSet,"%Function.prototype.call%":ne,"%Function.prototype.apply%":E,"%Object.defineProperty%":x,"%Object.getPrototypeOf%":ee,"%Math.abs%":d,"%Math.floor%":f,"%Math.max%":p,"%Math.min%":m,"%Math.pow%":h,"%Math.round%":g,"%Math.sign%":_,"%Reflect.getPrototypeOf%":te};if(T)try{null.error}catch(e){D[`%Error.prototype%`]=T(T(e))}var ae=function e(t){var n;if(t===`%AsyncFunction%`)n=y(`async function () {}`);else if(t===`%GeneratorFunction%`)n=y(`function* () {}`);else if(t===`%AsyncGeneratorFunction%`)n=y(`async function* () {}`);else if(t===`%AsyncGenerator%`){var r=e(`%AsyncGeneratorFunction%`);r&&(n=r.prototype)}else if(t===`%AsyncIteratorPrototype%`){var i=e(`%AsyncGenerator%`);i&&T&&(n=T(i.prototype))}return D[t]=n,n},oe={__proto__:null,"%ArrayBufferPrototype%":[`ArrayBuffer`,`prototype`],"%ArrayPrototype%":[`Array`,`prototype`],"%ArrayProto_entries%":[`Array`,`prototype`,`entries`],"%ArrayProto_forEach%":[`Array`,`prototype`,`forEach`],"%ArrayProto_keys%":[`Array`,`prototype`,`keys`],"%ArrayProto_values%":[`Array`,`prototype`,`values`],"%AsyncFunctionPrototype%":[`AsyncFunction`,`prototype`],"%AsyncGenerator%":[`AsyncGeneratorFunction`,`prototype`],"%AsyncGeneratorPrototype%":[`AsyncGeneratorFunction`,`prototype`,`prototype`],"%BooleanPrototype%":[`Boolean`,`prototype`],"%DataViewPrototype%":[`DataView`,`prototype`],"%DatePrototype%":[`Date`,`prototype`],"%ErrorPrototype%":[`Error`,`prototype`],"%EvalErrorPrototype%":[`EvalError`,`prototype`],"%Float32ArrayPrototype%":[`Float32Array`,`prototype`],"%Float64ArrayPrototype%":[`Float64Array`,`prototype`],"%FunctionPrototype%":[`Function`,`prototype`],"%Generator%":[`GeneratorFunction`,`prototype`],"%GeneratorPrototype%":[`GeneratorFunction`,`prototype`,`prototype`],"%Int8ArrayPrototype%":[`Int8Array`,`prototype`],"%Int16ArrayPrototype%":[`Int16Array`,`prototype`],"%Int32ArrayPrototype%":[`Int32Array`,`prototype`],"%JSONParse%":[`JSON`,`parse`],"%JSONStringify%":[`JSON`,`stringify`],"%MapPrototype%":[`Map`,`prototype`],"%NumberPrototype%":[`Number`,`prototype`],"%ObjectPrototype%":[`Object`,`prototype`],"%ObjProto_toString%":[`Object`,`prototype`,`toString`],"%ObjProto_valueOf%":[`Object`,`prototype`,`valueOf`],"%PromisePrototype%":[`Promise`,`prototype`],"%PromiseProto_then%":[`Promise`,`prototype`,`then`],"%Promise_all%":[`Promise`,`all`],"%Promise_reject%":[`Promise`,`reject`],"%Promise_resolve%":[`Promise`,`resolve`],"%RangeErrorPrototype%":[`RangeError`,`prototype`],"%ReferenceErrorPrototype%":[`ReferenceError`,`prototype`],"%RegExpPrototype%":[`RegExp`,`prototype`],"%SetPrototype%":[`Set`,`prototype`],"%SharedArrayBufferPrototype%":[`SharedArrayBuffer`,`prototype`],"%StringPrototype%":[`String`,`prototype`],"%SymbolPrototype%":[`Symbol`,`prototype`],"%SyntaxErrorPrototype%":[`SyntaxError`,`prototype`],"%TypedArrayPrototype%":[`TypedArray`,`prototype`],"%TypeErrorPrototype%":[`TypeError`,`prototype`],"%Uint8ArrayPrototype%":[`Uint8Array`,`prototype`],"%Uint8ClampedArrayPrototype%":[`Uint8ClampedArray`,`prototype`],"%Uint16ArrayPrototype%":[`Uint16Array`,`prototype`],"%Uint32ArrayPrototype%":[`Uint32Array`,`prototype`],"%URIErrorPrototype%":[`URIError`,`prototype`],"%WeakMapPrototype%":[`WeakMap`,`prototype`],"%WeakSetPrototype%":[`WeakSet`,`prototype`]},se=Ze(),ce=at(),le=se.call(ne,Array.prototype.concat),O=se.call(E,Array.prototype.splice),ue=se.call(ne,String.prototype.replace),de=se.call(ne,String.prototype.slice),fe=se.call(ne,RegExp.prototype.exec),pe=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,me=/\\(\\)?/g,he=function(e){var t=de(e,0,1),n=de(e,-1);if(t===`%`&&n!==`%`)throw new c("invalid intrinsic syntax, expected closing `%`");if(n===`%`&&t!==`%`)throw new c("invalid intrinsic syntax, expected opening `%`");var r=[];return ue(e,pe,function(e,t,n,i){r[r.length]=n?ue(i,me,`$1`):t||e}),r},ge=function(e,t){var n=e,r;if(ce(oe,n)&&(r=oe[n],n=`%`+r[0]+`%`),ce(D,n)){var i=D[n];if(i===re&&(i=ae(n)),i===void 0&&!t)throw new l(`intrinsic `+e+` exists, but is not available. Please file an issue!`);return{alias:r,name:n,value:i}}throw new c(`intrinsic `+e+` does not exist!`)};t.exports=function(e,t){if(typeof e!=`string`||e.length===0)throw new l(`intrinsic name must be a non-empty string`);if(arguments.length>1&&typeof t!=`boolean`)throw new l(`"allowMissing" argument must be a boolean`);if(fe(/^%?[^%]*%?$/,e)===null)throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=he(e),r=n.length>0?n[0]:``,i=ge(`%`+r+`%`,t),a=i.name,o=i.value,s=!1,u=i.alias;u&&(r=u[0],O(n,le([0,1],u)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],m=de(p,0,1),h=de(p,-1);if((m===`"`||m===`'`||m==="`"||h===`"`||h===`'`||h==="`")&&m!==h)throw new c(`property names with quotes must have matching quotes`);if(p!==`constructor`&&f||(s=!0),r+=`.`+p,a=`%`+r+`%`,ce(D,a))o=D[a];else if(o!=null){if(!(p in o)){if(!t)throw new l(`base intrinsic for `+e+` exists, but the property is not available.`);return}if(b&&d+1>=n.length){var g=b(o,p);f=!!g,o=f&&`get`in g&&!(`originalValue`in g.get)?g.get:o[p]}else f=ce(o,p),o=o[p];f&&!s&&(D[a]=o)}}return o}})),st=a(((e,t)=>{var n=ot(),r=nt(),i=r([n(`%String.prototype.indexOf%`)]);t.exports=function(e,t){var a=n(e,!!t);return typeof a==`function`&&i(e,`.prototype.`)>-1?r([a]):a}})),ct=a(((e,t)=>{var n=ot(),r=st(),i=De(),a=Te(),o=n(`%Map%`,!0),s=r(`Map.prototype.get`,!0),c=r(`Map.prototype.set`,!0),l=r(`Map.prototype.has`,!0),u=r(`Map.prototype.delete`,!0),d=r(`Map.prototype.size`,!0);t.exports=!!o&&function(){var e,t={assert:function(e){if(!t.has(e))throw new a(`Side channel does not contain `+i(e))},delete:function(t){if(e){var n=u(e,t);return d(e)===0&&(e=void 0),n}return!1},get:function(t){if(e)return s(e,t)},has:function(t){return e?l(e,t):!1},set:function(t,n){e||=new o,c(e,t,n)}};return t}})),lt=a(((e,t)=>{var n=ot(),r=st(),i=De(),a=ct(),o=Te(),s=n(`%WeakMap%`,!0),c=r(`WeakMap.prototype.get`,!0),l=r(`WeakMap.prototype.set`,!0),u=r(`WeakMap.prototype.has`,!0),d=r(`WeakMap.prototype.delete`,!0);t.exports=s?function(){var e,t,n={assert:function(e){if(!n.has(e))throw new o(`Side channel does not contain `+i(e))},delete:function(n){if(s&&n&&(typeof n==`object`||typeof n==`function`)){if(e)return d(e,n)}else if(a&&t)return t.delete(n);return!1},get:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?c(e,n):t&&t.get(n)},has:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?u(e,n):!!t&&t.has(n)},set:function(n,r){s&&n&&(typeof n==`object`||typeof n==`function`)?(e||=new s,l(e,n,r)):a&&(t||=a(),t.set(n,r))}};return n}:a})),ut=a(((e,t)=>{var n=Te(),r=De(),i=Oe(),a=ct(),o=lt()||a||i;t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new n(`Side channel does not contain `+(e&&Object(e)===e?`the given object key`:r(e)))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,n){e||=o(),e.set(t,n)}};return t}})),dt=a(((e,t)=>{var n=String.prototype.replace,r=/%20/g,i={RFC1738:`RFC1738`,RFC3986:`RFC3986`};t.exports={default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,r,`+`)},RFC3986:function(e){return String(e)}},RFC1738:i.RFC1738,RFC3986:i.RFC3986}})),ft=a(((e,t)=>{var n=dt(),r=ut(),i=Ke(),a=Object.prototype.hasOwnProperty,o=Array.isArray,s=r(),c=function(e,t){return s.set(e,t),e},l=function(e){return s.has(e)},u=function(e){return s.get(e)},d=function(e,t){s.set(e,t)},f=function(){for(var e=[],t=0;t<256;++t)e[e.length]=`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase();return e}(),p=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],i=0;i<n.length;++i)n[i]!==void 0&&(r[r.length]=n[i]);t.obj[t.prop]=r}}},m=function(e,t){for(var n=t&&t.plainObjects?{__proto__:null}:{},r=0;r<e.length;++r)e[r]!==void 0&&(n[r]=e[r]);return n},h=function(e,t,n){t===`__proto__`&&i?i(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},g=function e(t,n,r){if(!n)return t;if(typeof n!=`object`&&typeof n!=`function`){if(o(t)){var i=t.length;if(r&&typeof r.arrayLimit==`number`&&i>=r.arrayLimit){if(r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);return c(m(t.concat(n),r),i)}t[i]=n}else if(t&&typeof t==`object`){if(l(t)){var s=u(t)+1;t[s]=n,d(t,s)}else if(r&&r.strictMerge)return[t,n];else(r&&(r.plainObjects||r.allowPrototypes)||!a.call(Object.prototype,n))&&(t[n]=!0)}else return[t,n];return t}if(!t||typeof t!=`object`){if(l(n)){for(var f=Object.keys(n),p=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},g=0;g<f.length;g++){var _=parseInt(f[g],10);p[_+1]=n[f[g]]}return c(p,u(n)+1)}var v=[t].concat(n);if(r&&typeof r.arrayLimit==`number`&&v.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);return c(m(v,r),v.length-1)}return v}var y=t;if(o(t)&&!o(n)&&(y=m(t,r)),o(t)&&o(n)){if(n.forEach(function(n,i){if(a.call(t,i)){var o=t[i];o&&typeof o==`object`&&n&&typeof n==`object`?t[i]=e(o,n,r):t[t.length]=n}else t[i]=n}),r&&typeof r.arrayLimit==`number`&&t.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);return c(m(t,r),t.length-1)}return t}return Object.keys(n).reduce(function(t,i){var o=n[i];if(a.call(t,i)?h(t,i,e(t[i],o,r)):h(t,i,o),l(n)&&!l(t)&&c(t,u(n)),l(t)){var s=parseInt(i,10);String(s)===i&&s>=0&&s>u(t)&&d(t,s)}return t},y)},_=function(e,t){return Object.keys(t).reduce(function(e,n){return h(e,n,t[n]),e},e)},v=function(e,t,n){var r=e.replace(/\+/g,` `);if(n===`iso-8859-1`)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},y=1024;t.exports={arrayToObject:m,assign:_,combine:function(e,t,n,r,i){if(l(e)){if(i)throw RangeError(`Array limit exceeded. Only `+n+` element`+(n===1?``:`s`)+` allowed in an array.`);for(var a=o(t)?t:[t],s=u(e),f=0;f<a.length;++f)s+=1,e[s]=a[f];return d(e,s),e}var p=[].concat(e,t);if(p.length>n){if(i)throw RangeError(`Array limit exceeded. Only `+n+` element`+(n===1?``:`s`)+` allowed in an array.`);return c(m(p,{plainObjects:r}),p.length-1)}return p},compact:function(e){for(var t=[{obj:{o:e},prop:`o`}],n=r(),i=0;i<t.length;++i)for(var a=t[i],o=a.obj[a.prop],s=Object.keys(o),c=0;c<s.length;++c){var l=s[c],u=o[l];typeof u==`object`&&u&&!n.has(u)&&(t[t.length]={obj:o,prop:l},n.set(u,!0))}return p(t),e},decode:v,encode:function(e,t,r,i,a){if(e.length===0)return e;var o=e;if(typeof e==`symbol`?o=Symbol.prototype.toString.call(e):typeof e!=`string`&&(o=String(e)),r===`iso-8859-1`)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});for(var s=``,c=0;c<o.length;c+=y){var l=o.length>=y?o.slice(c,c+y):o;if(c+y<o.length){var u=l.charCodeAt(l.length-1);u>=55296&&u<=56319&&(l=l.slice(0,-1),--c)}for(var d=[],p=0;p<l.length;++p){var m=l.charCodeAt(p);m===45||m===46||m===95||m===126||m>=48&&m<=57||m>=65&&m<=90||m>=97&&m<=122||a===n.RFC1738&&(m===40||m===41)?d[d.length]=l.charAt(p):m<128?d[d.length]=f[m]:m<2048?d[d.length]=f[192|m>>6]+f[128|m&63]:m<55296||m>=57344?d[d.length]=f[224|m>>12]+f[128|m>>6&63]+f[128|m&63]:(p+=1,m=65536+((m&1023)<<10|l.charCodeAt(p)&1023),d[d.length]=f[240|m>>18]+f[128|m>>12&63]+f[128|m>>6&63]+f[128|m&63])}s+=d.join(``)}return s},isBuffer:function(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e))},isOverflow:l,isRegExp:function(e){return Object.prototype.toString.call(e)===`[object RegExp]`},markOverflow:c,maybeMap:function(e,t){if(o(e)){for(var n=[],r=0;r<e.length;r+=1)n[n.length]=t(e[r]);return n}return t(e)},merge:g}})),pt=a(((e,t)=>{var n=ut(),r=ft(),i=dt(),a=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+`[]`},comma:`comma`,indices:function(e,t){return e+`[`+t+`]`},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,d=i.default,f={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,commaRoundTrip:!1,delimiter:`&`,depth:1/0,encode:!0,encodeDotInKeys:!1,encoder:r.encode,encodeValuesOnly:!1,filter:void 0,format:d,formatter:i.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`},m={},h=function e(t,i,a,o,c,u,d,h,g,_,v,y,b,x,S,C,w,T,ee,te){var E=t;if(te>ee)throw RangeError(`Input depth exceeded depth option of `+ee);for(var ne=T,re=0,ie=!1;(ne=ne.get(m))!==void 0&&!ie;){var D=ne.get(t);if(re+=1,D!==void 0){if(D===re)throw RangeError(`Cyclic object value`);ie=!0}ne.get(m)===void 0&&(re=0)}if(E=typeof _==`function`?_(i,E):E,E instanceof Date?E=b(E):a===`comma`&&s(E)&&(E=r.maybeMap(E,function(e){return e instanceof Date?b(e):e})),E===null){if(u)return S(g&&!C?g(i,f.encoder,w,`key`,x):i);E=``}if(p(E)||r.isBuffer(E))return g?[S(C?i:g(i,f.encoder,w,`key`,x))+`=`+S(g(E,f.encoder,w,`value`,x))]:[S(i)+`=`+S(String(E))];var ae=[];if(E===void 0)return ae;var oe;if(a===`comma`&&s(E))C&&g&&(E=r.maybeMap(E,function(e){return e==null?e:g(e)})),oe=[{value:E.length>0?E.join(`,`)||null:void 0}];else if(s(_))oe=_;else{var se=Object.keys(E);oe=v?se.sort(v):se}var ce=h?String(i).replace(/\./g,`%2E`):String(i),le=o&&s(E)&&E.length===1?ce+`[]`:ce;if(c&&s(E)&&E.length===0&&Object.keys(E).length===0)return le+`[]`;for(var O=0;O<oe.length;++O){var ue=oe[O],de=typeof ue==`object`&&ue&&ue.value!==void 0?ue.value:E[ue];if(!(d&&de===null)){var fe=y&&h?String(ue).replace(/\./g,`%2E`):String(ue),pe=s(E)?typeof a==`function`?a(le,fe):le:le+(y?`.`+fe:`[`+fe+`]`);T.set(t,re);var me=n();me.set(m,T),l(ae,e(de,pe,a,o,c,u,d,h,a===`comma`&&C&&s(E)?null:g,_,v,y,b,x,S,C,w,me,ee,te+1))}}return ae},g=function(e){if(!e)return f;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);var t=e.charset||f.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);var n=i.default;if(e.format!==void 0){if(!a.call(i.formatters,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}var r=i.formatters[n],c=f.filter;(typeof e.filter==`function`||s(e.filter))&&(c=e.filter);var l=e.arrayFormat in o?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:f.arrayFormat;if(`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var u=e.allowDots===void 0?e.encodeDotInKeys===!0||f.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:f.addQueryPrefix,allowDots:u,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:f.allowEmptyArrays,arrayFormat:l,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:f.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?f.delimiter:e.delimiter,depth:typeof e.depth==`number`?e.depth:f.depth,encode:typeof e.encode==`boolean`?e.encode:f.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:f.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:f.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:f.encodeValuesOnly,filter:c,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:f.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:f.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:f.strictNullHandling}};t.exports=function(e,t){var r=e,i=g(t),a,c;typeof i.filter==`function`?(c=i.filter,r=c(``,r)):s(i.filter)&&(c=i.filter,a=c);var u=[];if(typeof r!=`object`||!r)return``;var d=o[i.arrayFormat],f=d===`comma`&&i.commaRoundTrip;a||=Object.keys(r),i.sort&&a.sort(i.sort);for(var p=n(),m=0;m<a.length;++m){var _=a[m];if(_!=null){var v=r[_];i.skipNulls&&v===null||l(u,h(v,i.encodeDotInKeys?String(_).replace(/\./g,`%2E`):String(_),d,f,i.allowEmptyArrays,i.strictNullHandling,i.skipNulls,i.encodeDotInKeys,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset,p,i.depth,0))}}var y=u.join(i.delimiter),b=i.addQueryPrefix===!0?`?`:``;return i.charsetSentinel&&(i.charset===`iso-8859-1`?b+=`utf8=%26%2310003%3B`+i.delimiter:b+=`utf8=%E2%9C%93`+i.delimiter),y.length>0?b+y:``}})),mt=a(((e,t)=>{var n=ft(),r=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:`utf-8`,charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:n.decode,delimiter:`&`,depth:5,duplicates:`combine`,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},o=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s=function(e,t,n){if(e&&typeof e==`string`&&t.comma&&e.indexOf(`,`)>-1){if(t.throwOnLimitExceeded)for(var r=0,i=e.indexOf(`,`);i>-1;){if(r+=1,r>=t.arrayLimit)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);i=e.indexOf(`,`,i+1)}return e.split(`,`)}if(t.throwOnLimitExceeded&&n>=t.arrayLimit)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);return e},c=`utf8=%26%2310003%3B`,l=`utf8=%E2%9C%93`,u=function(e,t){var u={__proto__:null},d=t.ignoreQueryPrefix?e.replace(/^\?/,``):e;d=d.replace(/%5B/gi,`[`).replace(/%5D/gi,`]`);var f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=d.split(t.delimiter,t.throwOnLimitExceeded&&f!==void 0?f+1:f);if(t.throwOnLimitExceeded&&f!==void 0&&p.length>f)throw RangeError(`Parameter limit exceeded. Only `+f+` parameter`+(f===1?``:`s`)+` allowed.`);var m=-1,h,g=t.charset;if(t.charsetSentinel)for(h=0;h<p.length;++h)p[h].indexOf(`utf8=`)===0&&(p[h]===l?g=`utf-8`:p[h]===c&&(g=`iso-8859-1`),m=h,h=p.length);for(h=0;h<p.length;++h)if(h!==m){var _=p[h],v=_.indexOf(`]=`),y=v===-1?_.indexOf(`=`):v+1,b,x;if(y===-1?(b=t.decoder(_,a.decoder,g,`key`),x=t.strictNullHandling?null:``):(b=t.decoder(_.slice(0,y),a.decoder,g,`key`),b!==null&&(x=n.maybeMap(s(_.slice(y+1),t,i(u[b])?u[b].length:0),function(e){return t.decoder(e,a.decoder,g,`value`)}))),x&&t.interpretNumericEntities&&g===`iso-8859-1`&&(x=o(String(x))),_.indexOf(`[]=`)>-1&&(x=i(x)?[x]:x),t.comma&&i(x)&&x.length>t.arrayLimit&&(x=n.combine([],x,t.arrayLimit,t.plainObjects,t.throwOnLimitExceeded)),b!==null){var S=r.call(u,b);S&&(t.duplicates===`combine`||_.indexOf(`[]=`)>-1)?u[b]=n.combine(u[b],x,t.arrayLimit,t.plainObjects,t.throwOnLimitExceeded):S&&t.duplicates!==`last`||(u[b]=x)}}return u},d=function(e,t,r,i){var a=0;if(e.length>0&&e[e.length-1]===`[]`){var o=e.slice(0,-1).join(``);a=Array.isArray(t)&&t[o]?t[o].length:0}for(var c=i?t:s(t,r,a),l=e.length-1;l>=0;--l){var u,d=e[l];if(d===`[]`&&r.parseArrays)u=n.isOverflow(c)?c:r.allowEmptyArrays&&(c===``||r.strictNullHandling&&c===null)?[]:n.combine([],c,r.arrayLimit,r.plainObjects,r.throwOnLimitExceeded);else{u=r.plainObjects?{__proto__:null}:{};var f=d.charAt(0)===`[`&&d.charAt(d.length-1)===`]`?d.slice(1,-1):d,p=r.decodeDotInKeys?f.replace(/%2E/g,`.`):f,m=parseInt(p,10),h=!isNaN(m)&&d!==p&&String(m)===p&&m>=0&&r.parseArrays;if(!r.parseArrays&&p===``)u={0:c};else if(h&&m<r.arrayLimit)u=[],u[m]=c;else if(h&&r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);else h?(u[m]=c,n.markOverflow(u,m)):p!==`__proto__`&&(u[p]=c)}c=u}return c},f=function(e,t){var n=t.allowDots?e.replace(/\.([^.[]+)/g,`[$1]`):e;if(t.depth<=0)return!t.plainObjects&&r.call(Object.prototype,n)&&!t.allowPrototypes?void 0:[n];var i=[],a=n.indexOf(`[`),o=a>=0?n.slice(0,a):n;if(o){if(!t.plainObjects&&r.call(Object.prototype,o)&&!t.allowPrototypes)return;i[i.length]=o}for(var s=n.length,c=a,l=0;c>=0&&l<t.depth;){for(var u=1,d=c+1,f=-1;d<s&&f<0;){var p=n.charCodeAt(d);p===91?u+=1:p===93&&(--u,u===0&&(f=d)),d+=1}if(f<0)return i[i.length]=`[`+n.slice(c)+`]`,i;var m=n.slice(c,f+1),h=m.slice(1,-1);if(!t.plainObjects&&r.call(Object.prototype,h)&&!t.allowPrototypes)return;i[i.length]=m,l+=1,c=n.indexOf(`[`,f+1)}if(c>=0){if(t.strictDepth===!0)throw RangeError(`Input depth exceeded depth option of `+t.depth+` and strictDepth is true`);i[i.length]=`[`+n.slice(c)+`]`}return i},p=function(e,t,n,r){if(e){var i=f(e,n);if(i)return d(i,t,n,r)}},m=function(e){if(!e)return a;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.decodeDotInKeys!==void 0&&typeof e.decodeDotInKeys!=`boolean`)throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!=`function`)throw TypeError(`Decoder has to be a function.`);if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);if(e.throwOnLimitExceeded!==void 0&&typeof e.throwOnLimitExceeded!=`boolean`)throw TypeError("`throwOnLimitExceeded` option must be a boolean");var t=e.charset===void 0?a.charset:e.charset,r=e.duplicates===void 0?a.duplicates:e.duplicates;if(r!==`combine`&&r!==`first`&&r!==`last`)throw TypeError(`The duplicates option must be either combine, first, or last`);return{allowDots:e.allowDots===void 0?e.decodeDotInKeys===!0||a.allowDots:!!e.allowDots,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes==`boolean`?e.allowPrototypes:a.allowPrototypes,allowSparse:typeof e.allowSparse==`boolean`?e.allowSparse:a.allowSparse,arrayLimit:typeof e.arrayLimit==`number`?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:a.charsetSentinel,comma:typeof e.comma==`boolean`?e.comma:a.comma,decodeDotInKeys:typeof e.decodeDotInKeys==`boolean`?e.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof e.decoder==`function`?e.decoder:a.decoder,delimiter:typeof e.delimiter==`string`||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:typeof e.depth==`number`||e.depth===!1?+e.depth:a.depth,duplicates:r,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities==`boolean`?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof e.parameterLimit==`number`?e.parameterLimit:a.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects==`boolean`?e.plainObjects:a.plainObjects,strictDepth:typeof e.strictDepth==`boolean`?!!e.strictDepth:a.strictDepth,strictMerge:typeof e.strictMerge==`boolean`?!!e.strictMerge:a.strictMerge,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:a.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded==`boolean`&&e.throwOnLimitExceeded}};t.exports=function(e,t){var r=m(t);if(e===``||e==null)return r.plainObjects?{__proto__:null}:{};for(var i=typeof e==`string`?u(e,r):e,a=r.plainObjects?{__proto__:null}:{},o=Object.keys(i),s=0;s<o.length;++s){var c=o[s],l=p(c,i[c],r,typeof e==`string`);a=n.merge(a,l,r)}return r.allowSparse===!0?a:n.compact(a)}})),ht=a(((e,t)=>{var n=pt(),r=mt();t.exports={formats:dt(),parse:r,stringify:n}})),gt=a(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,(function(){var e=n.Base64,t=n.Base64={};r(t),t.noConflict=function(){return n.Base64=e,t}})())})(n,(function(e){"use strict";var t=`3.9.4`,n=t,r=typeof TextDecoder==`function`?new TextDecoder(`utf-8`,{ignoreBOM:!0}):void 0,i=typeof TextEncoder==`function`?new TextEncoder:void 0,a=Array.prototype.slice.call(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`),o=(function(e){var t={};return e.forEach(function(e,n){return t[e]=n}),t})(a),s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),l=typeof Uint8Array.from==`function`?Uint8Array.from.bind(Uint8Array):function(e){return new Uint8Array(Array.prototype.slice.call(e,0))},u=function(e){return e.replace(/=/g,``).replace(/[+\/]/g,function(e){return e==`+`?`-`:`_`})},d=function(e){return e.replace(/[^A-Za-z0-9\+\/]/g,``)},f=function(e){for(var t,n,r,i,o=``,s=e.length%3,c=0;c<e.length;){if((n=e.charCodeAt(c++))>255||(r=e.charCodeAt(c++))>255||(i=e.charCodeAt(c++))>255)throw TypeError(`invalid character found`);t=n<<16|r<<8|i,o+=a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[t&63]}return s?o.slice(0,s-3)+`===`.substring(s):o},p=typeof btoa==`function`?function(e){return btoa(e)}:f,m=typeof Uint8Array.prototype.toBase64==`function`?function(e){return e.toBase64()}:function(e){for(var t=4096,n=[],r=0,i=e.length;r<i;r+=t)n.push(c.apply(null,e.subarray(r,r+t)));return p(n.join(``))},h=function(e,t){return t===void 0&&(t=!1),t?u(m(e)):m(e)},g=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?c(192|t>>>6)+c(128|t&63):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|t&63)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|t&63)},_=/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\x00-\x7F]/g,v=function(e){return e.replace(_,g)},y=i?function(e){return m(i.encode(e))}:function(e){return p(v(e))},b=function(e,t){return t===void 0&&(t=!1),t?u(y(e)):y(e)},x=function(e){return b(e,!0)},S=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,C=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return c((t>>>10)+55296)+c((t&1023)+56320);case 3:return c((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return c((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},w=function(e){return e.replace(S,C)},T=function(e){if(e=e.replace(/\s+/g,``),!s.test(e))throw TypeError(`malformed base64.`);e+=`==`.slice(2-(e.length&3));for(var t,n,r,i=[],a=0;a<e.length;)t=o[e.charAt(a++)]<<18|o[e.charAt(a++)]<<12|(n=o[e.charAt(a++)])<<6|(r=o[e.charAt(a++)]),n===64?i.push(c(t>>16&255)):r===64?i.push(c(t>>16&255,t>>8&255)):i.push(c(t>>16&255,t>>8&255,t&255));return i.join(``)},ee=typeof atob==`function`?function(e){return atob(d(e))}:T,te=typeof Uint8Array.fromBase64==`function`?function(e){return Uint8Array.fromBase64(e)}:function(e){return l(ee(e).split(``).map(function(e){return e.charCodeAt(0)}))},E=function(e){return te(re(e))},ne=r?function(e){return r.decode(te(e))}:function(e){return w(ee(e))},re=function(e){return d(e.replace(/[-_]/g,function(e){return e==`-`?`+`:`/`}))},ie=function(e){return ne(re(e))},D=function(e){if(typeof e!=`string`)return!1;var t=e.replace(/\s+/g,``).replace(/={0,2}$/,``);return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},ae=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}},oe=function(){var e=function(e,t){return Object.defineProperty(String.prototype,e,ae(t))};e(`fromBase64`,function(){return ie(this)}),e(`toBase64`,function(e){return b(this,e)}),e(`toBase64URI`,function(){return b(this,!0)}),e(`toBase64URL`,function(){return b(this,!0)}),e(`toUint8Array`,function(){return E(this)})},se=function(){var e=function(e,t){return Object.defineProperty(Uint8Array.prototype,e,ae(t))};e(`toBase64`,function(e){return h(this,e)}),e(`toBase64URI`,function(){return h(this,!0)}),e(`toBase64URL`,function(){return h(this,!0)})},ce=function(){oe(),se()};e.Base64={version:t,VERSION:n,atob:ee,atobPolyfill:T,btoa:p,btoaPolyfill:f,fromBase64:ie,toBase64:b,encode:b,encodeURI:x,encodeURL:x,utob:v,btou:w,decode:ie,isValid:D,fromUint8Array:h,toUint8Array:E,extendString:oe,extendUint8Array:se,extendBuiltins:ce},e.VERSION=n,e.atob=ee,e.atobPolyfill=T,e.btoa=p,e.btoaPolyfill=f,e.btou=w,e.decode=ie,e.encode=b,e.encodeURI=x,e.encodeURL=x,e.extendBuiltins=ce,e.extendString=oe,e.extendUint8Array=se,e.fromBase64=ie,e.fromUint8Array=h,e.isValid=D,e.toBase64=b,e.toUint8Array=E,e.utob=v,e.version=t}))})),_t=a(((e,t,n)=>{var r=n&&n.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=n&&n.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},a=n&&n.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},o=n&&n.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRequestConfigBuilder=void 0;var s=o(ve()),c=o(ht()),u=gt(),d=l(),f=`http`,p=4096;e.KintoneRequestConfigBuilder=function(){function e(e){if(this.baseUrl=e.baseUrl,this.auth=e.auth,this.headers=this.buildHeaders({basicAuth:e.basicAuth,userAgent:e.userAgent}),`httpsAgent`in e){if(`clientCertAuth`in e)throw Error(`Cannot specify clientCertAuth along with httpsAgent.`);this.httpsAgent=e.httpsAgent}else`clientCertAuth`in e&&(this.clientCertAuth=e.clientCertAuth);this.proxy=e.proxy,this.requestToken=null,this.socketTimeout=e.socketTimeout}return e.prototype.build=function(e,t,n,o){return i(this,void 0,void 0,function(){var i,c,l,u,f,m,h,l,g,_,v,y,b;return a(this,function(a){switch(a.label){case 0:switch(i=r(r(r({method:e,headers:this.headers,url:`${this.baseUrl}${t}`},o||{}),d.platformDeps.buildPlatformDependentConfig({httpsAgent:this.httpsAgent,clientCertAuth:this.clientCertAuth,socketTimeout:this.socketTimeout})),{proxy:this.buildProxyConfig(this.proxy)}),c=e,c){case`get`:return[3,1];case`post`:return[3,4];case`put`:return[3,8];case`delete`:return[3,10]}return[3,12];case 1:return l=this.buildRequestUrl(t,n),l.length>p?(u=[r({},i)],v={method:`post`,headers:r(r({},this.headers),{"X-HTTP-Method-Override":`GET`})},[4,this.buildData(n)]):[3,3];case 2:return[2,r.apply(void 0,u.concat([(v.data=a.sent(),v)]))];case 3:return[2,r(r({},i),{url:l})];case 4:return n instanceof s.default?[4,this.buildData(n)]:[3,6];case 5:return f=a.sent(),[2,r(r({},i),{headers:typeof f.getHeaders==`function`?r(r({},this.headers),f.getHeaders()):this.headers,data:f})];case 6:return m=[r({},i)],y={},[4,this.buildData(n)];case 7:return[2,r.apply(void 0,m.concat([(y.data=a.sent(),y)]))];case 8:return h=[r({},i)],b={},[4,this.buildData(n)];case 9:return[2,r.apply(void 0,h.concat([(b.data=a.sent(),b)]))];case 10:return g=this.buildRequestUrl,_=[t],[4,this.buildData(n)];case 11:return l=g.apply(this,_.concat([a.sent()])),[2,r(r({},i),{url:l})];case 12:throw Error(`${e} method is not supported`);case 13:return[2]}})})},e.prototype.buildProxyConfig=function(e){if(e!==void 0){if(e===!1)return!1;var t=e;return t.auth&&(t.auth.username.length===0||t.auth.password.length===0)&&(t.auth=void 0),t.protocol=t.protocol??f,t}},e.prototype.buildRequestUrl=function(e,t){return`${this.baseUrl}${e}?${c.default.stringify(t)}`},e.prototype.buildData=function(e){return i(this,void 0,void 0,function(){var t;return a(this,function(n){switch(n.label){case 0:return this.auth.type===`session`?[4,this.getRequestToken()]:[3,2];case 1:return t=n.sent(),e instanceof s.default?(e.append(`__REQUEST_TOKEN__`,t),[2,e]):[2,r({__REQUEST_TOKEN__:t},e)];case 2:return[2,e]}})})},e.prototype.buildHeaders=function(e){var t=e.basicAuth,n=e.userAgent,i=t?{Authorization:`Basic ${u.Base64.encode(`${t.username}:${t.password}`)}`}:{},a=d.platformDeps.buildHeaders({userAgent:n}),o=r(r({},a),i);switch(this.auth.type){case`password`:return r(r({},o),{"X-Cybozu-Authorization":u.Base64.encode(`${this.auth.username}:${this.auth.password}`)});case`apiToken`:var s=this.auth.apiToken;return Array.isArray(s)?r(r({},o),{"X-Cybozu-API-Token":s.join(`,`)}):r(r({},o),{"X-Cybozu-API-Token":s});case`oAuthToken`:return r(r({},o),{Authorization:`Bearer ${this.auth.oAuthToken}`});default:return r(r({},o),{"X-Requested-With":`XMLHttpRequest`})}},e.prototype.getRequestToken=function(){return i(this,void 0,void 0,function(){var e;return a(this,function(t){switch(t.label){case 0:return this.requestToken===null?(e=this,[4,d.platformDeps.getRequestToken()]):[3,2];case 1:e.requestToken=t.sent(),t.label=2;case 2:return[2,this.requestToken]}})})},e}()})),vt=a(((e,t,n)=>{var r=n&&n.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=n&&n.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneResponseHandler=void 0;var a=he();e.KintoneResponseHandler=function(){function e(e){var t=e.enableAbortSearchError;this.enableAbortSearchError=t}return e.prototype.handle=function(e){var t=this;return e.then(function(e){return t.handleSuccessResponse(e)},function(e){return t.handleErrorResponse(e)})},e.prototype.handleSuccessResponse=function(e){if(this.enableAbortSearchError&&/Filter aborted because of too many search results/.test(e.headers[`x-cybozu-warning`]))throw new a.KintoneAbortSearchError(e.headers[`x-cybozu-warning`]);return e.data},e.prototype.handleErrorResponse=function(e){if(!e.response)throw/mac verify failure/.test(e.toString())?Error(`invalid clientCertAuth setting`):e;var t=e.response,n=t.data,o=i(t,[`data`]);throw typeof n==`string`?Error(`${o.status}: ${o.statusText}`):new a.KintoneRestAPIError(r({data:n},o))},e}()})),yt=a(((e,t,n)=>{var r=n&&n.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIClient=void 0;var i=ue(),a=de(),o=ge(),s=_e(),c=ye(),d=be(),f=xe(),p=we(),m=_t(),h=vt(),g=l(),_=u(),v=function(e){if(`username`in e)return r({type:`password`},e);if(`apiToken`in e)return r({type:`apiToken`},e);if(`oAuthToken`in e)return r({type:`oAuthToken`},e);try{return g.platformDeps.getDefaultAuth()}catch(e){throw e instanceof _.UnsupportedPlatformError?Error(`session authentication is not supported in ${e.platform} environment.`):e}};e.KintoneRestAPIClient=function(){function e(e){e===void 0&&(e={}),y(e),this.baseUrl=g.platformDeps.buildBaseUrl(e.baseUrl).replace(/\/+$/,``);var t=v(e.auth??{}),n=new m.KintoneRequestConfigBuilder(r(r({},e),{baseUrl:this.baseUrl,auth:t})),l=new h.KintoneResponseHandler({enableAbortSearchError:e.featureFlags?.enableAbortSearchError??!1}),u=new p.DefaultHttpClient({responseHandler:l,requestConfigBuilder:n}),_=e.guestSpaceId;this.bulkRequest_=new i.BulkRequestClient(u,_),this.record=new o.RecordClient(u,this.bulkRequest_,_),this.app=new a.AppClient(u,_),this.space=new s.SpaceClient(u,_),this.file=new c.FileClient(u,_),this.plugin=new d.PluginClient(u),this.search_=new f.SearchClient(u,_,x(this.baseUrl))}return Object.defineProperty(e,"version",{get:function(){return g.platformDeps.getVersion()},enumerable:!1,configurable:!0}),e.prototype.getBaseUrl=function(){return this.baseUrl},e.prototype.search=function(e){return this.search_.search(e)},e.prototype.bulkRequest=function(e){return this.bulkRequest_.send(e)},e}();var y=function(e){b(e.baseUrl),S(e.guestSpaceId),C(e.socketTimeout)},b=function(e){if(e!==void 0){var t=new URL(e);if(t.hostname!==`localhost`&&t.protocol!==`https:`)throw Error(`The protocol of baseUrl must be "https".`)}},x=function(e){return e!==void 0&&new URL(e).hostname.endsWith(`.kintone.com`)},S=function(e){if(e===``||e===null)throw Error(`invalid guestSpaceId: got [${e}]`)},C=function(e){if(e!==void 0){var t=parseFloat(e.toString());if(isNaN(t)||t<0)throw Error(`Invalid socketTimeout. Must be a positive number.`)}}})),bt=a(((e,t,n)=>{var r=n&&n.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),i=n&&n.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),a=n&&n.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var a=e(t),o=0;o<a.length;o++)a[o]!=="default"&&r(n,t,a[o]);return i(n,t),n}})(),o=n&&n.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&r(t,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIClient=void 0;var s=l(),c=a(ce());(0,s.injectPlatformDeps)(c);var u=yt();Object.defineProperty(e,"KintoneRestAPIClient",{enumerable:!0,get:function(){return u.KintoneRestAPIClient}}),o(he(),e)}))(),A=new bt.KintoneRestAPIClient;async function xt(e,t,n){let{records:r}=await A.record.getRecords({app:n,query:`appID = "${e}" and RecordID = "${t}" limit 1`});return r[0]??null}var St=Array.isArray,Ct=Array.prototype.indexOf,wt=Array.prototype.includes,Tt=Array.from,Et=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors,kt=Object.prototype,At=Array.prototype,jt=Object.getPrototypeOf,Mt=Object.isExtensible,Nt=()=>{};function Pt(e){for(var t=0;t<e.length;t++)e[t]()}function Ft(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var It=1<<24,Lt=1024,Rt=2048,zt=4096,Bt=8192,Vt=16384,Ht=32768,Ut=1<<25,Wt=65536,Gt=1<<19,Kt=1<<20,qt=1<<25,Jt=1<<21,Yt=1<<22,Xt=1<<23,Zt=Symbol(`$state`),Qt=Symbol(`component`),$t=Symbol(`legacy props`),en=Symbol(``),tn=Symbol(`attributes`),nn=Symbol(`class`),rn=Symbol(`style`),an=Symbol(`text`),on=Symbol(`form reset`),sn=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},cn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),ln={},un=Symbol(`uninitialized`),dn=`http://www.w3.org/1999/xhtml`;function fn(){console.warn(`https://svelte.dev/e/derived_inert`)}function pn(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function mn(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var j=!1;function hn(e){j=e}var M;function gn(e){if(e===null)throw pn(),ln;return M=e}function _n(){return gn(ti(M))}function vn(e){if(j){if(ti(M)!==null)throw pn(),ln;M=e}}function yn(e=1){if(j){for(var t=e,n=M;t--;)n=ti(n);M=n}}function bn(e=!0){for(var t=0,n=M;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else(r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=ti(n);e&&n.remove(),n=i}}function xn(e){if(!e||e.nodeType!==8)throw pn(),ln;return e.data}function Sn(e){return e===this.v}function Cn(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function wn(e){return!Cn(e,this.v)}function Tn(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function En(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Dn(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function On(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function kn(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function An(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function jn(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Mn(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Nn(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Pn(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Fn(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function In(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Ln=null;function Rn(e){Ln=e}function zn(e,t=!1,n){Ln={p:Ln,i:!1,c:null,e:null,s:e,x:null,r:I,l:null}}function Bn(e){var t=Ln,n=t.e;if(n!==null){t.e=null;for(var r of n)vi(r)}return e!==void 0&&(t.x=e),t.i=!0,Ln=t.p,Vn(e)}function Vn(e={}){return Et(e,Qt,{value:!0}),e}function Hn(){return!0}var Un=[];function Wn(){var e=Un;Un=[],Pt(e)}function Gn(e){if(Un.length===0&&!yr){var t=Un;queueMicrotask(()=>{t===Un&&Wn()})}Un.push(e)}function Kn(){for(;Un.length>0;)Wn()}var qn=~(Rt|zt|Lt);function Jn(e,t){e.f=e.f&qn|t}function Yn(e){e.f&512||e.deps===null?Jn(e,Lt):Jn(e,zt)}function Xn(e,t){e.f&2048?t.set(e,Rt):e.f&4096&&t.get(e)!==2048&&t.set(e,zt),Jn(e,Lt)}var Zn=!1;function Qn(){Zn||(Zn=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[on]?.()})},{capture:!0}))}function $n(e){var t=F,n=I;Hi(null),Ui(null);try{return e()}finally{Hi(t),Ui(n)}}function er(e,t,n,r=n){e.addEventListener(t,()=>$n(n));let i=e[on];e[on]=i?()=>{i(),r(!0)}:()=>r(!0),Qn()}function tr(e,t,n,r){let i=Hn()?ar:lr;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=I,c=nr(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){di(e,s)}rr()}}var d=ir();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>sr(e))).then(u).catch(e=>di(e,s)).finally(d)}l?l.then(()=>{s.f&16384?d():(c(),f(),rr())}):f()}function nr(){var e=I,t=F,n=Ln,r=N;return function(i=!0){Ui(e),Hi(t),Rn(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function rr(e=!0){Ui(null),Hi(null),Rn(null),e&&N?.deactivate()}function ir(){var e=I,t=e.b,n=N,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function ar(e){var t=2|Rt;return I!==null&&(I.f|=Gt),{ctx:Ln,deps:null,effects:null,equals:Sn,f:t,fn:e,reactions:null,rv:0,v:un,wv:0,parent:I,ac:null}}var or=Symbol(`obsolete`);function sr(e,t,n){let r=I;r===null&&En();var i=void 0,a=Ir(un),o=!F,s=new Set;return xi(()=>{var t=I,n=Ft();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==sn&&n.reject(e)}).finally(rr)}catch(e){n.reject(e),rr()}var c=N;if(o){if(t.f&32768)var l=ir();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(or);else for(let e of s.values())e.reject(or);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==or&&(c.activate(),t?(a.f|=Xt,Vr(a,t)):(a.f&8388608&&(a.f^=Xt),Vr(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),gi(()=>{for(let e of s)e.reject(or)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function cr(e){let t=ar(e);return Gi(t),t}function lr(e){let t=ar(e);return t.equals=wn,t}function ur(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ai(t[n])}}function dr(e){var t,n=I,r=e.parent;if(!zi&&r!==null&&e.v!==un&&r.f&24576)return fn(),e.v;Ui(r);try{ur(e),t=ra(e)}finally{Ui(n)}return t}function fr(e){var t=dr(e);!e.equals(t)&&(e.wv=ea(),(!N?.is_fork||e.deps===null)&&(N===null?e.v=t:(N.capture(e,t,!0),gr?.capture(e,t,!0)),e.deps===null))?Jn(e,Lt):zi||(_r===null?Yn(e):(hi()||N?.is_fork)&&_r.set(e,t))}function pr(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&$n(()=>{t.ac.abort(sn),t.ac=null}),t.fn!==null&&(t.teardown=Nt),oa(t,0),Oi(t))}function mr(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&sa(t)}var hr=null,N=null,gr=null,_r=null,vr=null,yr=!1,br=!1,xr=null,Sr=null,Cr=0,wr=1,Tr=class e{id=wr++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#r=new Map;#i=null;#a=[];#o=[];#s=new Map;#c=new Map;#l=new Set;is_fork=!1;#u=!1;constructor(){hr===null?hr=this:(hr.next=this,this.prev=hr),hr=this}#d(){if(this.is_fork)return!0;for(let e of this.#r.keys())if(!this.#f(e))return!0;return!1}#f(e){for(var t=e;t!==null;t=t.parent)if(this.#c.has(t))return!0;return!1}skip_effect(e){this.#c.has(e)||this.#c.set(e,{d:[],m:[]}),this.#l.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#c.get(e);if(n){this.#c.delete(e);for(var r of n.d)Jn(r,Rt),t(r);for(r of n.m)Jn(r,zt),t(r)}this.#l.add(e)}#p(){var e=[];for(let i of this.#a)if(!(i.f&16384||!(i.f&6144))){for(var t=i,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if(r&96){if(!(r&1024)){n=!0;break}t.f^=Lt}}n||e.push(t)}return this.#a=[],e}#m(){this.started=!0;for(let[e,t]of this.#s)Jn(e,t),this.schedule(e);this.apply();for(var t=xr=[],n=[],r=Sr=[];this.#a.length>0;){Cr++>1e3&&(this.#b(),Dr());for(let e of this.#p())try{this.#h(e,t,n)}catch(t){throw Mr(e),this.#d()||this.discard(),t}}if(N=null,r.length>0){var i=e.ensure();for(let e of r)i.schedule(e)}if(xr=null,Sr=null,this.#d()){this.#y(n),this.#y(t);for(let[e,t]of this.#c)jr(e,t);r.length>0&&N.#m();return}let a=this.#g();if(a)this.#y(n),this.#y(t),a.#v(this);else{this.#s.clear();for(let e of this.#e)e(this);this.#e.clear(),gr=this,kr(n),kr(t),gr=null,this.#i?.resolve();var o=N;this.#n===0&&(this.#a.length===0||o!==null)&&this.#b(),o!==null&&(Pr.clear(),o.#m())}}#h(e,t,n){e.f^=Lt;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&i&1024||i&8192||this.#c.has(r))&&r.fn!==null){a?r.f^=Lt:i&4?t.push(r):ta(r)&&(i&16&&this.add_dirty_reaction(r,zt),sa(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#g(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(let[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#v(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#s);let t=e=>{var n=e.reactions;if(n!==null&&!(e.f&2&&!(e.f&6144)))for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#s.delete(i),Jn(i,Rt),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#b(),N=this,this.#m()}#y(e){for(var t=0;t<e.length;t+=1)Xn(e[t],this.#s)}capture(e,t,n=!1){e.v!==un&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),_r?.set(e,t)),this.is_fork||(e.v=t)}activate(){N=this}deactivate(){N=null,_r=null}flush(){try{br=!0,N=this,this.#m()}finally{Cr=0,vr=null,xr=null,Sr=null,br=!1,N=null,_r=null,Pr.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear();for(let e of this.async_deriveds.values())e.reject(or);this.#b(),this.#i?.resolve()}register_created_effect(e){this.#o.push(e)}increment(e,t){if(this.#n+=1,e){let e=this.#r.get(t)??0;this.#r.set(t,e+1)}}decrement(e,t){if(--this.#n,e){let e=this.#r.get(t)??0;e===1?this.#r.delete(t):this.#r.set(t,e-1)}this.#u||(this.#u=!0,Gn(()=>{this.#u=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(let[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===2048||this.#s.get(e)!==2048)&&this.#s.set(e,t)}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=Ft()).promise}static ensure(){if(N===null){let t=N=new e;!br&&!yr&&Gn(()=>{t.started||t.flush()})}return N}apply(){_r=null}schedule(e){vr=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)?e.b.defer_effect(e):this.#a.push(e)}#b(){if(this.linked){var e=this.prev,t=this.next;e===null||(e.next=t),t===null?hr=e:t.prev=e,this.linked=!1}}};function Er(e){var t=yr,n=gr;gr=null,yr=!0;try{var r;for(e&&(Er(),r=e());;){if(Kn(),N===null)return r;N.flush()}}finally{yr=t,gr=n}}function Dr(){try{jn()}catch(e){di(e,vr)}}var Or=null;function kr(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&ta(r)&&(Or=new Set,sa(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Mi(r),Or?.size>0)){Pr.clear();for(let e of Or){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Or.has(n)&&(Or.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||sa(n)}}Or.clear()}}Or=null}}function Ar(e){N.schedule(e)}function jr(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),Jn(e,Lt);for(var n=e.first;n!==null;)jr(n,t),n=n.next}}function Mr(e){Jn(e,Lt);for(var t=e.first;t!==null;)Mr(t),t=t.next}var Nr=new Set,Pr=new Map,Fr=!1;function Ir(e,t){return{f:0,v:e,reactions:null,equals:Sn,rv:0,wv:0}}function Lr(e,t){let n=Ir(e,t);return Gi(n),n}function Rr(e,t=!1,n=!0){let r=Ir(e);return t||(r.equals=wn),r}function P(e,t,n=!1){return F!==null&&(!Vi||F.f&131072)&&Hn()&&F.f&4325394&&(Wi===null||!Wi.has(e))&&Fn(),Vr(e,n?Gr(t):t,Sr)}var zr=null,Br=0;function Vr(e,t,n=null){if(!e.equals(t)){zi?Pr.set(e,t):Pr.has(e)||Pr.set(e,e.v);var r=Tr.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&dr(t),_r===null&&Yn(t)}e.wv=ea(),zr=null,Br=0,Wr(e,Rt,n),zr=null,Hn()&&I!==null&&I.f&1024&&!(I.f&96)&&(Ji===null?Yi([e]):Ji.push(e)),!r.is_fork&&Nr.size>0&&!Fr&&Hr()}return t}function Hr(){Fr=!1;for(let e of Nr){e.f&1024&&Jn(e,zt);let t;try{t=ta(e)}catch{t=!0}t&&sa(e)}Nr.clear()}function Ur(e){P(e,e.v+1)}function Wr(e,t,n){var r=e.reactions;if(r!==null){var i=Hn(),a=r.length;if(Br+=a,Br>1e5&&zr===null&&(zr=new Set),zr!==null){if(zr.has(e))return;zr.add(e)}for(var o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==I){var l=(c&Rt)===0;if(l&&Jn(s,t),c&131072)Nr.add(s);else if(c&2){var u=s;_r?.delete(u),Wr(u,zt,n)}else if(l){var d=s;c&16&&Or!==null&&Or.add(d),n===null?Ar(d):n.push(d)}}}}}function Gr(e){if(typeof e!=`object`||!e||Zt in e||Qt in e)return e;let t=jt(e);if(t!==kt&&t!==At)return e;var n=new Map,r=St(e),i=Lr(0),a=null,o=Qi,s=e=>{if(Qi===o)return e();var t=F,n=Qi;Hi(null),$i(o);var r=e();return Hi(t),$i(n),r};return r&&n.set(`length`,Lr(e.length,a)),new Proxy(e,{defineProperty(e,t,r){`value`in r&&r.configurable!==!1&&r.enumerable!==!1&&r.writable!==!1||Nn();var i=n.get(t);return i===void 0?s(()=>{var e=Lr(r.value,a);return n.set(t,e),e}):P(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){let e=s(()=>Lr(un,a));n.set(t,e),Ur(i)}}else P(r,un),Ur(i);return!0},get(t,r,i){if(r===Zt)return e;var o=n.get(r),c=r in t;if(o===void 0&&(!c||Dt(t,r)?.writable)&&(o=s(()=>Lr(Gr(c?t[r]:un),a)),n.set(r,o)),o!==void 0){var l=L(o);return l===un?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){this.has?.(e,t);var r=Reflect.getOwnPropertyDescriptor(e,t),i=n.get(t);if(i!==void 0){var a=L(i);if(a===un)return;if(r&&`value`in r)r.value=a;else return{enumerable:!0,configurable:!0,value:a,writable:!0}}return r},has(e,t){if(t===Zt)return!0;var r=n.get(t),i=r!==void 0&&r.v!==un||Reflect.has(e,t);return(r!==void 0||(I!==null||F!==null)&&(!i||Dt(e,t)?.writable))&&(r===void 0&&(r=s(()=>Lr(i?Gr(e[t]):un,a)),n.set(t,r)),L(r)===un)?!1:i},set(e,t,o,c){var l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=o;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=s(()=>Lr(un,a)),n.set(d+``,f)):P(f,un)}if(l===void 0)(!u||Dt(e,t)?.writable)&&(l=s(()=>Lr(void 0,a)),P(l,Gr(o)),n.set(t,l));else{u=l.v!==un;var p=s(()=>Gr(o));P(l,p)}var m=Reflect.getOwnPropertyDescriptor(e,t);if(m?.set&&m.set.call(c,o),!u){if(r&&typeof t==`string`){var h=n.get(`length`),g=Number(t);Number.isInteger(g)&&g>=h.v&&P(h,g+1)}Ur(i)}return!0},ownKeys(e){L(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==un});for(var[r,a]of n)a.v!==un&&!(r in e)&&t.push(r);return t},setPrototypeOf(){Pn()}})}function Kr(e){try{if(typeof e==`object`&&e&&Zt in e)return e[Zt]}catch{}return e}function qr(e,t){return Object.is(Kr(e),Kr(t))}var Jr,Yr,Xr,Zr;function Qr(){if(Jr===void 0){Jr=window,Yr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Xr=Dt(t,`firstChild`).get,Zr=Dt(t,`nextSibling`).get,Mt(e)&&(e[nn]=void 0,e[tn]=null,e[rn]=void 0,e.__e=void 0),Mt(n)&&(n[an]=void 0)}}function $r(e=``){return document.createTextNode(e)}function ei(e){return Xr.call(e)}function ti(e){return Zr.call(e)}function ni(e,t){if(!j)return ei(e);var n=ei(M);if(n===null)n=M.appendChild($r());else if(t&&n.nodeType!==3){var r=$r();return n?.before(r),gn(r),r}return t&&li(n),gn(n),n}function ri(e,t=!1){if(!j){var n=ei(e);return n instanceof Comment&&n.data===``?ti(n):n}if(t){if(M?.nodeType!==3){var r=$r();return M?.before(r),gn(r),r}li(M)}return M}function ii(e,t=!1){if(!j)return ei(e);var n=ni(e,t);return vn(e),n}function ai(e,t=1,n=!1){let r=j?M:e;for(var i;t--;)i=r,r=ti(r);if(!j)return r;if(n){if(r?.nodeType!==3){var a=$r();return r===null?i?.after(a):r.before(a),gn(a),a}li(r)}return gn(r),r}function oi(e){e.textContent=``}function si(){return!1}function ci(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function li(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function ui(e){var t=I;if(t===null)return F.f|=Xt,e;if(!(t.f&32768)&&!(t.f&4))throw e;di(e,t)}function di(e,t){if(e===ln)throw e;if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128&&!(t.f&33570816)){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}function fi(e){I===null&&(F===null&&An(e),kn()),zi&&On(e)}function pi(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function mi(e,t){var n=I;n!==null&&n.f&8192&&(e|=Bt);var r={ctx:Ln,deps:null,nodes:null,f:e|Rt|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};N?.register_created_effect(r);var i=r;if(e&4)xr===null?Tr.ensure().schedule(r):xr.push(r);else if(t!==null){try{sa(r)}catch(e){throw Ai(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=Wt))}if(i!==null&&(i.parent=n,n!==null&&pi(i,n),F!==null&&F.f&2&&!(e&64))){var a=F;(a.effects??=[]).push(i)}return r}function hi(){return F!==null&&!Vi}function gi(e){let t=mi(8,null);return Jn(t,Lt),t.teardown=e,t}function _i(e){fi(`$effect`);var t=I.f;if(!F&&t&32&&Ln!==null&&!Ln.i){var n=Ln;(n.e??=[]).push(e)}else return vi(e)}function vi(e){return mi(4|Kt,e)}function yi(e){Tr.ensure();let t=mi(64|Gt,e);return(e={})=>new Promise(n=>{e.outro?Ni(t,()=>{Ai(t),n(void 0)}):(Ai(t),n(void 0))})}function bi(e){return mi(4,e)}function xi(e){return mi(Yt|Gt,e)}function Si(e,t=0){return mi(8|t,e)}function Ci(e,t=[],n=[],r=[]){tr(r,t,n,t=>{mi(8,()=>{e(...t.map(L))})})}function wi(e,t=0){return mi(16|t,e)}function Ti(e,t=0){return mi(It|t,e)}function Ei(e){return mi(32|Gt,e)}function Di(e){var t=e.teardown;if(t!==null){let n=zi,r=F;Bi(!0),Hi(null);try{t.call(null)}catch(t){di(t,e.parent)}finally{Bi(n),Hi(r)}}}function Oi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&$n(()=>{e.abort(sn)});var r=n.next;n.f&64?n.parent=null:Ai(n,t),n=r}}function ki(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||Ai(t),t=n}}function Ai(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(ji(e.nodes.start,e.nodes.end),n=!0),e.f|=Ut,Oi(e,t&&!n),oa(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Di(e),e.f^=Ut,e.f|=Vt;var i=e.parent;i!==null&&i.first!==null&&Mi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function ji(e,t){for(;e!==null;){var n=e===t?null:ti(e);e.remove(),e=n}}function Mi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Ni(e,t,n=!0){var r=[];e.f|=256,Pi(e,r,!0);var i=()=>{n&&Ai(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Pi(e,t,n){if(!(e.f&8192)){e.f^=Bt;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=!!(i.f&65536)||!!(i.f&32)&&!!(e.f&16);Pi(i,t,o?n:!1)}i=a}}}function Fi(e){e.f&=-257,Ii(e,!0)}function Ii(e,t){if(!(e.f&256)&&e.f&8192){e.f^=Bt,e.f&1024||(Jn(e,Rt),Tr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=!!(n.f&65536)||!!(n.f&32);Ii(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Li(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:ti(n);t.append(n),n=i}}var Ri=null,zi=!1;function Bi(e){zi=e}var F=null,Vi=!1;function Hi(e){F=e}var I=null;function Ui(e){I=e}var Wi=null;function Gi(e){F!==null&&(F.f&2097152||F.f&2)&&(Wi??=new Set).add(e)}var Ki=null,qi=0,Ji=null;function Yi(e){Ji=e}var Xi=1,Zi=0,Qi=Zi;function $i(e){Qi=e}function ea(){return++Xi}function ta(e){var t=e.f;if(t&2048)return!0;if(t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(ta(a)&&fr(a),a.wv>e.wv)return!0}t&512&&_r===null&&Jn(e,Lt)}return!1}function na(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Wi!==null&&Wi.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?na(a,t,!1):t===a&&(n?Jn(a,Rt):a.f&1024&&Jn(a,zt),Ar(a))}}function ra(e){var t=Ki,n=qi,r=Ji,i=F,a=Wi,o=Ln,s=Vi,c=Qi,l=e.f;Ki=null,qi=0,Ji=null,F=l&96?null:e,Wi=null,Rn(e.ctx),Vi=!1,Qi=++Zi,e.ac!==null&&($n(()=>{e.ac.abort(sn)}),e.ac=null);try{e.f|=Jt;var u=e.fn,d=u();e.f|=Ht;var f=ia(e);if(Hn()&&Ji!==null&&!Vi&&f!==null&&!(e.f&6146))for(var p=0;p<Ji.length;p++)na(Ji[p],e);if(i!==null&&i!==e){if(Zi++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Zi;if(t!==null)for(let e of t)e.rv=Zi;Ji!==null&&(r===null?r=Ji:r.push(...Ji))}return e.f&8388608&&(e.f^=Xt),d}catch(t){return ia(e),ui(t)}finally{e.f^=Jt,Ki=t,qi=n,Ji=r,F=i,Wi=a,Rn(o),Vi=s,Qi=c}}function ia(e){var t=e.deps,n=N?.is_fork;if(Ki!==null){var r;if(n||oa(e,qi),t!==null&&qi>0)for(t.length=qi+Ki.length,r=0;r<Ki.length;r++)t[qi+r]=Ki[r];else e.deps=t=Ki;if(hi()&&e.f&512)for(r=qi;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&qi<t.length&&(oa(e,qi),t.length=qi);return t}function aa(e,t){let n=t.reactions;if(n!==null){var r=Ct.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&t.f&2&&(Ki===null||!wt.call(Ki,t))){var a=t;a.f&512&&(a.f^=512),a.v!==un&&Yn(a),a.ac!==null&&$n(()=>{a.ac.abort(sn),a.ac=null,Jn(a,Rt)}),pr(a),oa(a,0)}}function oa(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)aa(e,n[r])}function sa(e){var t=e.f;if(!(t&16384)){Jn(e,Lt);var n=I;I=e;try{t&16777232?ki(e):Oi(e),Di(e);var r=ra(e);e.teardown=typeof r==`function`?r:null,e.wv=Xi}finally{I=n}}}async function ca(){await Promise.resolve(),Er()}function L(e){var t=!!(e.f&2);if(Ri?.add(e),F!==null&&!Vi&&!(I!==null&&I.f&16384)&&(Wi===null||!Wi.has(e))){var n=F.deps;if(F.f&2097152)e.rv<Zi&&(e.rv=Zi,Ki===null&&n!==null&&n[qi]===e?qi++:Ki===null?Ki=[e]:Ki.push(e));else{F.deps??=[],wt.call(F.deps,e)||F.deps.push(e);var r=e.reactions;r===null?e.reactions=[F]:wt.call(r,F)||r.push(F)}}if(zi&&Pr.has(e))return Pr.get(e);if(t){var i=e;if(zi){var a=i.v;return(!(i.f&1024)&&i.reactions!==null||ua(i))&&(a=dr(i)),Pr.set(i,a),a}var o=!(i.f&512)&&!Vi&&F!==null&&!!(F.f&512),s=(i.f&Ht)===0;ta(i)&&(o&&(i.f|=512),fr(i)),o&&!s&&(mr(i),la(i))}if(_r?.has(e))return _r.get(e);if(e.f&8388608)throw e.v;return e.v}function la(e){if(e.f|=512,e.deps!==null)for(let n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:wt.call(t,e)||t.push(e),n.f&2&&!(n.f&512)&&(mr(n),la(n))}}function ua(e){if(e.v===un)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Pr.has(t)||t.f&2&&ua(t))return!0;return!1}function da(e){var t=Vi;try{return Vi=!0,e()}finally{Vi=t}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var fa=[`touchstart`,`touchmove`];function pa(e){return fa.includes(e)}var ma=Symbol(`events`),ha=new Set,ga=new Set;function _a(e,t,n){(t[ma]??={})[e]=n}function va(e){for(var t=0;t<e.length;t++)ha.add(e[t]);for(var n of ga)n(e)}var ya=null,ba=!1;function xa(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;ya=e,ba||(ba=!0,setTimeout(()=>{ba=!1,ya=null}));var o=0,s=ya===e&&e[ma];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window)){e[ma]=t;return}var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if(a=i[o]||e.target,a!==t){Et(e,`currentTarget`,{configurable:!0,get(){return a||n}});var u=F,d=I;Hi(null),Ui(null);try{for(var f,p=[];a!==null&&a!==t;){try{var m=a[ma]?.[r];m==null||a.disabled&&e.target!==a||m.call(a,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(f){for(let e of p)queueMicrotask(()=>{throw e});throw f}}finally{e[ma]=t,delete e.currentTarget,Hi(u),Ui(d)}}}var Sa=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Ca(e){return Sa?.createHTML(e)??e}function wa(e){var t=ci(`template`);return t.innerHTML=Ca(e.replaceAll(`<!>`,`<!---->`)),t.content}function Ta(e,t){var n=I;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Ea(e,t){var n=!!(t&1),r=!!(t&2),i,a=!e.startsWith(`<!>`);return()=>{if(j)return Ta(M,null),M;i===void 0&&(i=wa(a?e:`<!>`+e),n||(i=ei(i)));var t=r||Yr?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=ei(t),s=t.lastChild;Ta(o,s)}else Ta(t,t);return t}}function Da(){if(j)return Ta(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(``),n=$r();return e.append(t,n),Ta(t,n),e}function Oa(e,t){if(j){var n=I;n.f&32768&&n.nodes.end!==null||(n.nodes.end=M),_n()}else e!==null&&e.before(t)}function ka(e){let t=0,n=Ir(0),r;return()=>{hi()&&(L(n),Si(()=>(t===0&&(r=da(()=>e(()=>Ur(n)))),t+=1,()=>{Gn(()=>{--t,t===0&&(r?.(),r=void 0,Ur(n))})})))}}var Aa=Wt|Gt;function ja(e,t,n,r){new Ma(e,t,n,r)}var Ma=class{parent;is_pending=!1;transform_error;#e;#t=j?M:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Map;#p=null;#m=ka(()=>(this.#p=Ir(this.#l),()=>{this.#p=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=I;t.b=this,t.f|=128,n(e)},this.parent=I.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=wi(()=>{if(j){let e=xn(this.#t);_n();let t=e===`[!`;if(e.startsWith(`[?`)){let t=JSON.parse(e.slice(2));this.#g(t)}else t?this.#y():this.#h()}else this.#b()},Aa),j&&(this.#e=M)}#h(){try{this.#a=Ei(()=>this.#r(this.#e))}catch(e){this.error(e)}}#g(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#_(e);Gn(r),t&&(this.#s=Ei(()=>{t(this.#e,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;let r=()=>{this.#v()||(t?mn():(t=!0,n&&In(),this.#s!==null&&Ni(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})))};return{reset:r,invoke_onerror:()=>{if(!this.#v())try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){di(e,this.#i&&this.#i.parent)}}}}#v(){return(this.#i.f&(Vt|Ut))!==0}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Ei(()=>e(this.#e)),Gn(()=>{if(!this.#v()){var e=this.#c=document.createDocumentFragment(),t=$r(),n=!1;e.append(t),this.#a=this.#S(()=>{try{return Ei(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){di(e,this.#i.parent)}return null}}),this.#a===null?(this.#c=null,n&&this.#x(N)):this.#u===0&&(this.#e.before(e),this.#c=null,Ni(this.#o,()=>{this.#o=null}),this.#x(N))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Ei(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Li(this.#a,e);let t=this.#n.pending;this.#o=Ei(()=>t(this.#e))}else this.#x(N)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_reactions(this.#f)}defer_effect(e){Xn(e,this.#f)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=I,n=F,r=Ln;Ui(this.#i),Hi(this.#i),Rn(this.#i.ctx);try{return Tr.ensure(),e()}finally{Ui(t),Hi(n),Rn(r)}}#C(e,t){this.has_pending_snippet()?(this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Ni(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))):this.parent&&this.parent.#C(e,t)}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!this.#p||this.#d||(this.#d=!0,Gn(()=>{this.#d=!1,this.#p&&Vr(this.#p,this.#l)}))}get_effect_pending(){return this.#m(),L(this.#p)}error(e){if(e===ln||!this.#n.onerror&&!this.#n.failed)throw e;N?.is_fork?(this.#a&&N.skip_effect(this.#a),this.#o&&N.skip_effect(this.#o),this.#s&&N.skip_effect(this.#s),N.oncommit(()=>{this.#v()||this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Ai(this.#a),null),this.#o&&=(Ai(this.#o),null),this.#s&&=(Ai(this.#s),null),j&&(gn(this.#t),yn(),gn(bn()));let t=this.#n.failed,n=e=>{if(this.#v())return;let{reset:n,invoke_onerror:r}=this.#_(e);r(),t&&!this.#v()&&(this.#s=this.#S(()=>{try{return Ei(()=>{var r=I;r.b=this,r.f|=128,t(this.#e,()=>e,()=>n)})}catch(e){return di(e,this.#i.parent),null}}))};Gn(()=>{if(!this.#v()){var t;try{t=this.transform_error(e)}catch(e){di(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>di(e,this.#i&&this.#i.parent)):n(t)}})}};function Na(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[an]??=e.nodeValue)&&(e[an]=n,e.nodeValue=`${n}`)}function Pa(e,t){return Ia(e,t)}var Fa=new Map;function Ia(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:o=!0,transformError:s}){Qr();var c=void 0,l=yi(()=>{var o=n??t.appendChild($r());ja(o,{pending:()=>{}},t=>{zn({});var n=Ln;if(a&&(n.c=a),i&&(r.$$events=i),j&&Ta(t,null),c=e(t,r)||Vn(),j&&(I.nodes.end=M,M===null||M.nodeType!==8||M.data!==`]`))throw pn(),ln;Bn()},s);var l=new Set,u=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!l.has(r)){l.add(r);var i=pa(r);for(let e of[t,document]){var a=Fa.get(e);a===void 0&&(a=new Map,Fa.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,xa,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return u(Tt(ha)),ga.add(u),()=>{for(var e of l)for(let n of[t,document]){var r=Fa.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,xa),r.delete(e),r.size===0&&Fa.delete(n)):r.set(e,i)}ga.delete(u),o!==n&&o.parentNode?.removeChild(o)}});return La.set(c,l),c}var La=new WeakMap;function Ra(e,t){let n=La.get(e);return n?(La.delete(e),n(t)):Promise.resolve()}var za=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Fi(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(Fi(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Ai(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Li(r,t),t.append($r()),this.#n.set(e,{effect:r,fragment:t})}else Ai(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Ni(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Ai(n.effect),this.#n.delete(e))};ensure(e,t){var n=N,r=si();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=$r();i.append(a),this.#n.set(e,{effect:Ei(()=>t(a)),fragment:i})}else this.#t.set(e,Ei(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else j&&(this.anchor=M),this.#a(n)}};function Ba(e,t,n=!1){var r;j&&(r=M,_n());var i=new za(e),a=n?Wt:0;function o(e,t){if(j){var n=xn(r);if(e!==parseInt(n.substring(1))){var a=bn();gn(a),i.anchor=a,hn(!1),i.ensure(e,t),hn(!0);return}}i.ensure(e,t)}wi(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Va(e,t){return t}function Ha(e,t,n){for(var r=[],i=t.length,a,o=t.length,s=0;s<i;s++){let n=t[s];Ni(n,()=>{if(a){if(a.pending.delete(n),a.done.add(n),a.pending.size===0){var t=e.outrogroups;Ua(e,Tt(a.done)),t.delete(a),t.size===0&&(e.outrogroups=null)}}else--o},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var l=n,u=l.parentNode;oi(u),u.append(l),e.items.clear()}Ua(e,t,!c)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function Ua(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=qt,Li(a,document.createDocumentFragment())):Ai(t[i],n)}}var Wa;function Ga(e,t,n,r,i,a=null){var o=e,s=new Map;if(t&4){var c=e;o=j?gn(ei(c)):c.appendChild($r())}j&&_n();var l=null,u=lr(()=>{var e=n();return St(e)?e:e==null?[]:Tt(e)}),d=new Map,f=!0;function p(e){if(!(h.effect.f&16384)){h.pending.delete(e);var n=L(u);h.fallback=l,qa(h,n,o,t,r),l!==null&&(n.length===0?l.f&33554432?(l.f^=qt,Ya(l,null,o)):Fi(l):Ni(l,()=>{l=null}))}}function m(e){h.pending.delete(e)}var h={effect:wi(()=>{var e=L(u),c=e.length;let h=!1;j&&xn(o)===`[!`!=(c===0)&&(o=bn(),gn(o),hn(!1),h=!0);for(var g=new Set,_=N,v=si(),y=0;y<c;y+=1){j&&M.nodeType===8&&M.data===`]`&&(o=M,h=!0,hn(!1));var b=e[y],x=r(b,y),S=f?null:s.get(x);S?(S.v&&Vr(S.v,b),S.i&&Vr(S.i,y),v&&_.unskip_effect(S.e)):(S=Ja(s,f?o:Wa??=$r(),b,x,y,i,t,n),f||(S.e.f|=qt),s.set(x,S)),g.add(x)}if(c===0&&a&&!l&&(f?l=Ei(()=>a(o)):(l=Ei(()=>a(Wa??=$r())),l.f|=qt)),c>g.size&&Dn(``,``,``),j&&c>0&&gn(bn()),!f){if(d.set(_,g),v){for(let[e,t]of s)g.has(e)||_.skip_effect(t.e);_.oncommit(p),_.ondiscard(m)}else p(_)}h&&hn(!0),L(u)}),flags:t,items:s,pending:d,outrogroups:null,fallback:l};f=!1,j&&(o=M)}function Ka(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function qa(e,t,n,r,i){var a=!!(r&8),o=t.length,s=e.items,c=Ka(e.effect.first),l,u=null,d,f=[],p=[],m,h,g,_;if(a)for(_=0;_<o;_+=1)m=t[_],h=i(m,_),g=s.get(h).e,g.f&33554432||(g.nodes?.a?.measure(),(d??=new Set).add(g));for(_=0;_<o;_+=1){if(m=t[_],h=i(m,_),g=s.get(h).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(g),t.done.delete(g);if(g.f&8192&&(Fi(g),a&&(g.nodes?.a?.unfix(),(d??=new Set).delete(g))),g.f&33554432){if(g.f^=qt,g===c)Ya(g,null,n);else{var v=u?u.next:c;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Xa(e,u,g),Xa(e,g,v),Ya(g,v,n),u=g,f=[],p=[],c=Ka(u.next);continue}}if(g!==c){if(l!==void 0&&l.has(g)){if(f.length<p.length){var y=p[0],b;u=y.prev;var x=f[0],S=f[f.length-1];for(b=0;b<f.length;b+=1)Ya(f[b],y,n);for(b=0;b<p.length;b+=1)l.delete(p[b]);Xa(e,x.prev,S.next),Xa(e,u,x),Xa(e,S,y),c=y,u=S,--_,f=[],p=[]}else l.delete(g),Ya(g,c,n),Xa(e,g.prev,g.next),Xa(e,g,u===null?e.effect.first:u.next),Xa(e,u,g),u=g;continue}for(f=[],p=[];c!==null&&c!==g;)(l??=new Set).add(c),p.push(c),c=Ka(c.next);if(c===null)continue}g.f&33554432||f.push(g),u=g,c=Ka(g.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Ua(e,Tt(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||l!==void 0){var C=[];if(l!==void 0)for(g of l)g.f&8192||C.push(g);for(;c!==null;)!(c.f&8192)&&c!==e.fallback&&C.push(c),c=Ka(c.next);var w=C.length;if(w>0){var T=r&4&&o===0?n:null;if(a){for(_=0;_<w;_+=1)C[_].nodes?.a?.measure();for(_=0;_<w;_+=1)C[_].nodes?.a?.fix()}Ha(e,C,T)}}a&&Gn(()=>{if(d!==void 0)for(g of d)g.nodes?.a?.apply()})}function Ja(e,t,n,r,i,a,o,s){var c=o&1?o&16?Ir(n):Rr(n,!1,!1):null,l=o&2?Ir(i):null;return{v:c,i:l,e:Ei(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Ya(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=ti(r);if(a.before(r),r===i)return;r=o}}function Xa(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Za(e,t){bi(()=>{e=I?.parent?.nodes?.start??e;var n=e.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector(`#`+t.hash)){let e=ci(`style`);e.id=t.hash,e.textContent=t.code,r.appendChild(e)}})}function Qa(e,t){var n=void 0,r;Ti(()=>{n!==(n=t())&&(r&&=(Ai(r),null),n&&(r=Ei(()=>{bi(()=>n(e))})))})}function $a(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function eo(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function to(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(eo)),i&&c.push(...Object.keys(i).map(eo));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=eo(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=$a(r)),i&&(n+=$a(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function no(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function ro(e,t,n,r){var i=e[rn];if(j||i!==t){var a=to(t,r);j&&a===e.getAttribute(`style`)||(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[rn]=t}else r&&(Array.isArray(r)?(no(e,n?.[0],r[0]),no(e,n?.[1],r[1],`important`)):no(e,n,r));return r}var io=Symbol(`is custom element`),ao=Symbol(`is html`),oo=cn?`link`:`LINK`;function so(e){if(j){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;co(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;co(e,`checked`,null),e.checked=r}}};e[on]=n,Gn(n),Qn()}}function co(e,t,n,r){var i=lo(e);if(!(j&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===oo))){var a=i[t];a!==(i[t]=n)&&(t===`loading`&&(e[en]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&fo(e).has(t)?e[t]=n:(!j||typeof n!=`number`&&typeof n!=`boolean`||a!==String(n))&&e.setAttribute(t,n))}}function lo(e){return e[tn]??={[io]:e.nodeName.includes(`-`),[ao]:e.namespaceURI===dn}}var uo=new Map;function fo(e){var t=e.getAttribute(`is`)||e.nodeName,n=uo.get(t);if(n)return n;uo.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=Ot(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=jt(i)}return n}function po(e,t,n=t){var r=new WeakSet;er(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=_o(e)?vo(a):a,n(a),N!==null&&r.add(N),await ca(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(j&&e.defaultValue!==e.value||da(t)==null&&e.value)&&(n(_o(e)?vo(e.value):e.value),N!==null&&r.add(N)),Si(()=>{var n=t();if(e===document.activeElement){var i=N;if(r.has(i))return}_o(e)&&n===vo(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}var mo=new Set;function ho(e,t,n,r,i=r){var a=n.getAttribute(`type`)===`checkbox`,o=e;let s=!1;if(t!==null)for(var c of t)o=o[c]??=[];o.push(n),er(n,`change`,()=>{var e=n.__value;a&&(e=go(o,e,n.checked)),i(e)},()=>i(a?[]:null)),Si(()=>{var e=r();j&&n.defaultChecked!==n.checked?s=!0:a?(e||=[],n.checked=e.includes(n.__value)):n.checked=qr(n.__value,e)}),gi(()=>{var e=o.indexOf(n);e!==-1&&o.splice(e,1)}),mo.has(o)||(mo.add(o),Gn(()=>{o.sort((e,t)=>e.compareDocumentPosition(t)===4?-1:1),mo.delete(o)})),Gn(()=>{if(s){var e=a?go(o,e,n.checked):o.find(e=>e.checked)?.__value;i(e)}})}function go(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value);return n||r.delete(t),Array.from(r)}function _o(e){var t=e.type;return t===`number`||t===`range`}function vo(e){return e===``?null:+e}function yo(e,t){return e===t||e?.[Zt]===t}function bo(e=Vn(),t,n,r){var i=Ln.r,a=I;return bi(()=>{var o,s;return Si(()=>{o=s,s=r?.()||[],da(()=>{yo(n(...s),e)||(t(e,...s),o&&yo(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&yo(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}var xo=!1;function So(e){var t=xo;try{return xo=!1,[e(),xo]}finally{xo=t}}function Co(e,t,n,r){var i=!0,a=!!(n&8),o=!!(n&16),s=r,c=!0,l=void 0,u=()=>o&&i?(l??=ar(r),L(l)):(c&&(c=!1,s=o?da(r):r),s);let d;if(a){var f=Zt in e||$t in e;d=Dt(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;a?[p,m]=So(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&Mn(t),d(p)));var h=i?()=>{var n=e[t];return n===void 0?u():(c=!0,n)}:()=>{var n=e[t];return n!==void 0&&(s=void 0),n===void 0?s:n};if(i&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?ar:lr)(()=>(_=!1,h()));a&&L(v);var y=I;return(function(e,t){if(arguments.length>0){let n=t?L(v):i&&a?Gr(e):e;return P(v,n),_=!0,s!==void 0&&(s=n),e}return zi&&_||y.f&16384?v.v:L(v)})}function wo(e){Ln===null&&Tn(`onMount`),_i(()=>{let t=da(e);if(typeof t==`function`)return t})}function To(e){Ln===null&&Tn(`onDestroy`),wo(()=>()=>da(e))}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Eo=globalThis,Do=Eo.ShadowRoot&&(Eo.ShadyCSS===void 0||Eo.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Oo=Symbol(),ko=new WeakMap,Ao=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Do&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ko.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ko.set(t,e))}return e}toString(){return this.cssText}},jo=e=>new Ao(typeof e==`string`?e:e+``,void 0,Oo),Mo=(e,t)=>{if(Do)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Eo.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},No=Do?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return jo(t)})(e):e,{is:Po,defineProperty:Fo,getOwnPropertyDescriptor:Io,getOwnPropertyNames:Lo,getOwnPropertySymbols:Ro,getPrototypeOf:zo}=Object,Bo=globalThis,Vo=Bo.trustedTypes,Ho=Vo?Vo.emptyScript:``,Uo=Bo.reactiveElementPolyfillSupport,Wo=(e,t)=>e,Go={toAttribute(e,t){switch(t){case Boolean:e=e?Ho:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ko=(e,t)=>!Po(e,t),qo={attribute:!0,type:String,converter:Go,reflect:!1,useDefault:!1,hasChanged:Ko};Symbol.metadata??=Symbol(`metadata`),Bo.litPropertyMetadata??=new WeakMap;var Jo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Fo(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Io(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qo}static _$Ei(){if(this.hasOwnProperty(Wo(`elementProperties`)))return;let e=zo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wo(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wo(`properties`))){let e=this.properties,t=[...Lo(e),...Ro(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(No(e))}else e!==void 0&&t.push(No(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Go:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Go:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ko)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Jo.elementStyles=[],Jo.shadowRootOptions={mode:`open`},Jo[Wo(`elementProperties`)]=new Map,Jo[Wo(`finalized`)]=new Map,Uo?.({ReactiveElement:Jo}),(Bo.reactiveElementVersions??=[]).push(`2.1.2`);var Yo=globalThis,Xo=e=>e,Zo=Yo.trustedTypes,Qo=Zo?Zo.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,$o=`$lit$`,es=`lit$${Math.random().toFixed(9).slice(2)}$`,ts=`?`+es,ns=`<${ts}>`,rs=document,is=()=>rs.createComment(``),as=e=>e===null||typeof e!=`object`&&typeof e!=`function`,os=Array.isArray,ss=e=>os(e)||typeof e?.[Symbol.iterator]==`function`,cs=`[ 	
\f\r]`,ls=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,us=/-->/g,ds=/>/g,fs=RegExp(`>|${cs}(?:([^\\s"'>=/]+)(${cs}*=${cs}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ps=/'/g,ms=/"/g,hs=/^(?:script|style|textarea|title)$/i,gs=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),R=gs(1),z=gs(2),_s=Symbol.for(`lit-noChange`),vs=Symbol.for(`lit-nothing`),ys=new WeakMap,bs=rs.createTreeWalker(rs,129);function xs(e,t){if(!os(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Qo===void 0?t:Qo.createHTML(t)}var Ss=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ls;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ls?c[1]===`!--`?o=us:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=fs):(hs.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=fs):o=ds:o===fs?c[0]===`>`?(o=i??ls,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?fs:c[3]===`"`?ms:ps):o===ms||o===ps?o=fs:o===us||o===ds?o=ls:(o=fs,i=void 0);let d=o===fs&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ls?n+ns:l>=0?(r.push(s),n.slice(0,l)+$o+n.slice(l)+es+d):n+es+(l===-2?t:d)}return[xs(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Cs=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ss(t,n);if(this.el=e.createElement(l,r),bs.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=bs.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith($o)){let t=u[o++],n=i.getAttribute(e).split(es),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Os:r[1]===`?`?ks:r[1]===`@`?As:Ds}),i.removeAttribute(e)}else e.startsWith(es)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(hs.test(i.tagName)){let e=i.textContent.split(es),t=e.length-1;if(t>0){i.textContent=Zo?Zo.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],is()),bs.nextNode(),c.push({type:2,index:++a});i.append(e[t],is())}}}else if(i.nodeType===8){if(i.data===ts)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(es,e+1))!==-1;)c.push({type:7,index:a}),e+=es.length-1}}a++}}static createElement(e,t){let n=rs.createElement(`template`);return n.innerHTML=e,n}};function ws(e,t,n=e,r){if(t===_s)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=as(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ws(e,i._$AS(e,t.values),i,r)),t}var Ts=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??rs).importNode(t,!0);bs.currentNode=r;let i=bs.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Es(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new js(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=bs.nextNode(),a++)}return bs.currentNode=rs,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Es=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=vs,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ws(this,e,t),as(e)?e===vs||e==null||e===``?(this._$AH!==vs&&this._$AR(),this._$AH=vs):e!==this._$AH&&e!==_s&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ss(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==vs&&as(this._$AH)?this._$AA.nextSibling.data=e:this.T(rs.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Cs.createElement(xs(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ts(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ys.get(e.strings);return t===void 0&&ys.set(e.strings,t=new Cs(e)),t}k(t){os(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(is()),this.O(is()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Xo(e).nextSibling;Xo(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ds=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=vs,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=vs}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ws(this,e,t,0),a=!as(e)||e!==this._$AH&&e!==_s,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ws(this,r[n+o],t,o),s===_s&&(s=this._$AH[o]),a||=!as(s)||s!==this._$AH[o],s===vs?e=vs:e!==vs&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===vs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Os=class extends Ds{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===vs?void 0:e}},ks=class extends Ds{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==vs)}},As=class extends Ds{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ws(this,e,t,0)??vs)===_s)return;let n=this._$AH,r=e===vs&&n!==vs||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==vs&&(n===vs||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},js=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ws(this,e)}},Ms=Yo.litHtmlPolyfillSupport;Ms?.(Cs,Es),(Yo.litHtmlVersions??=[]).push(`3.3.3`);var Ns=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Es(t.insertBefore(is(),e),e,void 0,n??{})}return i._$AI(e),i},Ps=globalThis,Fs=class extends Jo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ns(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _s}};Fs._$litElement$=!0,Fs.finalized=!0,Ps.litElementHydrateSupport?.({LitElement:Fs});var Is=Ps.litElementPolyfillSupport;Is?.({LitElement:Fs}),(Ps.litElementVersions??=[]).push(`4.2.2`);var Ls={attribute:!0,type:String,converter:Go,reflect:!1,hasChanged:Ko},Rs=(e=Ls,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function B(e){return(t,n)=>typeof n==`object`?Rs(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function V(e){return B({...e,state:!0,attribute:!1})}var zs=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function H(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return zs(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return zs(n,r,{get(){return a(this)}})}}var Bs;function Vs(e){return(t,n)=>zs(t,n,{get(){return(this.renderRoot??(Bs??=document.createDocumentFragment())).querySelectorAll(e)}})}var Hs=1024,Us=1048576,Ws=1073741824,Gs=`NaN size`,Ks={ATTACHMENT_BROWSE:`Browse`,ATTACHMENT_DRAG_DROP_ZONE:`Drop files here.`},qs={ATTACHMENT_BROWSE:`参照`,ATTACHMENT_DRAG_DROP_ZONE:`ここにファイルをドロップします。`},Js={ATTACHMENT_BROWSE:`选择文件`,ATTACHMENT_DRAG_DROP_ZONE:`拖动文件到此。`},Ys={ATTACHMENT_BROWSE:`選擇檔案`,ATTACHMENT_DRAG_DROP_ZONE:`拖曳檔案到此。`},Xs={ATTACHMENT_BROWSE:`Examinar`,ATTACHMENT_DRAG_DROP_ZONE:`Suelte los archivos aquí.`},U={ITEMS:{IS_NOT_ARRAY:`'items' property is not array.`,IS_DUPLICATED:`'value' property is not unique in items.`,IS_NOT_SPECIFIED:`'value' property is not specified in items.`},FILES:{IS_NOT_ARRAY:`'files' property is not array.`},VALUE:{IS_NOT_ARRAY:`'value' property is not array.`,IS_NOT_STRING:`'value' property is not string.`},SELECTED_INDEX:{IS_NOT_ARRAY:`'selectedIndex' property is not array.`,IS_NOT_NUMBER:`'selectedIndex' property is not number.`},COLUMNS:{IS_NOT_ARRAY:`'columns' property is not array.`,FIELD_REQUIRED:`'field' property is not specified in columns.`,FIELD_UNIQUE:`'field' property is not unique in columns.`},ROWS_PER_PAGE:{INVALID:`'rowsPerPage' property is not positive integer.`},DATA:{IS_NOT_ARRAY:`'data' property is not array.`},CONTAINER:{INVALID:`'container' property is not HTMLElement.`},ACCEPT:{IS_NOT_STRING:`'accept' property is not string.`},MAX_FILES:{IS_NOT_NUMBER:`'maxFiles' property is not number.`}},Zs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qs=e=>(...t)=>({_$litDirective$:e,values:t}),$s=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ec=class extends $s{constructor(e){if(super(e),this.it=vs,e.type!==Zs.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===vs||e==null)return this._t=void 0,this.it=e;if(e===_s)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ec.directiveName=`unsafeHTML`,ec.resultType=1;var tc=Qs(ec),nc={AM:`AM`,PM:`PM`},rc=`"max" must be greater than or equal to "min".`,ic=`Time is out of valid range.`,ac=`'timeStep' property is not number.`,oc=`00:00`,sc=`23:59`,cc={VALUE:`'value' property format is not valid.`,MAX:`'max' property format is not valid.`,MIN:`'min' property format is not valid.`,TIME_STEP:`'timeStep' property format is not valid.`},lc={MONTH_SELECT:[`JANUARY`,`FEBRUARY`,`MARCH`,`APRIL`,`MAY`,`JUNE`,`JULY`,`AUGUST`,`SEPTEMBER`,`OCTOBER`,`NOVEMBER`,`DECEMBER`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`SUN`,abbr:`Sunday`},{text:`MON`,abbr:`Monday`},{text:`TUE`,abbr:`Tuesday`},{text:`WED`,abbr:`Wednesday`},{text:`THU`,abbr:`Thursday`},{text:`FRI`,abbr:`Friday`},{text:`SAT`,abbr:`Saturday`}],INVALID_FORMAT:`Format is not valid.`,INVALID_TIME_FORMAT:`Format is not valid.`,CALENDAR_FOOTER_TEXT:{none:`None`,today:`Today`,close:`Close`},TIME_IS_OUT_OF_VALID_RANGE:`Time is out of valid range.`},uc={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`日`,abbr:`日`},{text:`月`,abbr:`月`},{text:`火`,abbr:`火`},{text:`水`,abbr:`水`},{text:`木`,abbr:`木`},{text:`金`,abbr:`金`},{text:`土`,abbr:`土`}],INVALID_FORMAT:`日付の形式が不正です。`,INVALID_TIME_FORMAT:`時刻の形式が不正です。`,CALENDAR_FOOTER_TEXT:{none:`選択を解除`,today:`今日`,close:`閉じる`},TIME_IS_OUT_OF_VALID_RANGE:`時刻が有効な範囲外です。`},dc={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`周日`,abbr:`周日`},{text:`周一`,abbr:`周一`},{text:`周二`,abbr:`周二`},{text:`周三`,abbr:`周三`},{text:`周四`,abbr:`周四`},{text:`周五`,abbr:`周五`},{text:`周六`,abbr:`周六`}],INVALID_FORMAT:`日期格式不正确。`,INVALID_TIME_FORMAT:`时间格式不正确。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`关闭`},TIME_IS_OUT_OF_VALID_RANGE:`时间超出有效范围。`},fc={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`週日`,abbr:`週日`},{text:`週一`,abbr:`週一`},{text:`週二`,abbr:`週二`},{text:`週三`,abbr:`週三`},{text:`週四`,abbr:`週四`},{text:`週五`,abbr:`週五`},{text:`週六`,abbr:`週六`}],INVALID_FORMAT:`日期格式錯誤。`,INVALID_TIME_FORMAT:`時間格式錯誤。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`關閉`},TIME_IS_OUT_OF_VALID_RANGE:`時間超出有效範圍。`},pc={MONTH_SELECT:[`ENERO`,`FEBRERO`,`MARZO`,`ABRIL`,`MAYO`,`JUNIO`,`JULIO`,`AGOSTO`,`SEPTIEMBRE`,`OCTUBRE`,`NOVIEMBRE`,`DICIEMBRE`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`Do.`,abbr:`Domingo`},{text:`Lu.`,abbr:`Lunes`},{text:`Ma.`,abbr:`Martes`},{text:`Mi.`,abbr:`Miércoles`},{text:`Ju.`,abbr:`Jueves`},{text:`Vi.`,abbr:`Viernes`},{text:`Sá.`,abbr:`Sábado`}],INVALID_FORMAT:`Formato no válido.`,INVALID_TIME_FORMAT:`Formato no válido.`,CALENDAR_FOOTER_TEXT:{none:`Ninguno`,today:`Hoy`,close:`Cerrar`},TIME_IS_OUT_OF_VALID_RANGE:`La hora está fuera del rango válido.`},mc=(e,t)=>{let n=Mc(e,t),r=new Date(n.start),i=[],a=[];for(;r<=n.end;)i.push(Ec(r)),i.length===7&&(a.push(i),i=[]),r.setDate(r.getDate()+1),r=new Date(r);return a},hc=(e,t,n,r)=>{let i=[],a=Math.round(t),o=_c(r),s=_c(n);if(a>0){let t=Math.floor((o-s)/a)+1;for(let n=0;n<t;n++){let t=gc(s+n*a,e);i.push(t)}}return i},gc=(e,t)=>{let n,r;n=Math.floor(e/60),r=e%60;let i=n%24<12?nc.AM:nc.PM;return n=t?n%12:n%24,n===0&&t&&(n=12),n<10&&(n=`0`+n),r<10&&(r=`0`+r),{label:n+`:`+r+(t?` `+i:``),value:n+`:`+r+(t?` `+i:``)}},_c=e=>{let t=e.split(`:`),n=parseInt(t[0],10),r=parseInt(t[1],10);return isNaN(n)||isNaN(r)?0:(n<0?n=0:n>=24&&(n=23),r<0?r=0:r>=60&&(r=59),n*60+r)},vc=(e,t)=>{let n=_c(e),r=_c(t);return n>r?1:n===r?0:-1},yc=(e,t)=>{let n=e.split(`:`),r=parseInt(n[0],10),i=parseInt(n[1],10),a=r%24;return isNaN(a)||isNaN(i)?{hours:``,minutes:``,suffix:``}:t?Cc(r,i):{hours:W(a),minutes:W(i),suffix:``}},bc=(e,t)=>{let n={hours:``,minutes:``,suffix:``},r=e.split(`:`),i=parseInt(r[0],10),a=parseInt(r[1],10),o=i%24;return isNaN(o)||(n.hours=W(t?xc(o):o),n.suffix=t?Sc(o):``),isNaN(a)||(n.minutes=W(a)),n},xc=e=>{let t=e%12;return t=t===0?12:t,t},Sc=e=>e>=12?nc.PM:nc.AM,Cc=(e,t)=>{let n=Sc(e);return{hours:W(xc(e)),minutes:W(t),suffix:n}},wc=e=>{let[t,n]=e.split(` `),[r,i]=t.split(`:`);return n?`${Tc(r,n)}:${i}`:e},Tc=(e,t)=>{let n=parseInt(e,10);return t===nc.PM?W(n===12?12:n+12):W(n===12?0:n)},Ec=e=>{let t=new Date(e),n=t.getFullYear(),r=W(t.getMonth()+1),i=W(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${n}-${r}-${i}`}},Dc=(e,t)=>{if(t&&!kc(t)){let n=t.split(`-`);if(n.length!==3)return t;let r=n[0],i=n[1],a=n[2];return e===`en`?`${i}/${a}/${r}`:`${r}-${i}-${a}`}return t},Oc=(e,t)=>{if(kc(t))return t;let n=e===`en`,r=n?`/`:`-`,i=t.split(r);return`${n?i[2]:i[0]}-${n?i[0]:i[1]}-${n?i[1]:i[2]}`},kc=e=>e==null||e.length===0||!/[^(^\s*)|(\s*$)]/.test(e),Ac=(e=`ja`)=>{let t=new Date,n=t.getFullYear(),r=W(t.getMonth()+1),i=W(t.getDate());return e===`ja`||e===`zh`?n+`-`+r+`-`+i:r+`/`+i+`/`+n},jc=(e,t)=>{if(t&&!kc(t)){let n=e===`en`,r=n?`/`:`-`;return new Date(`${t}${n?``:`T00:00:00`}`).getDate()===parseInt(t.split(r)[n?1:2],10)?e===`en`?t.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/)!==null:t.match(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g)!==null:!1}return!1},W=(e,t=2)=>{let n=`0000000000${e}`;return n.substr(n.length-t)},Mc=(e,t)=>{let n=new Date(e,t);n.setDate(1);let r=new Date(n);r.setDate(r.getDate()-r.getDay());let i=new Date(e,t);i.setMonth(i.getMonth()+1,0);let a=new Date(i);a.setDate(a.getDate()+(6-a.getDay()));let o=(a.getTime()-r.getTime())/864e5;return a.setDate(a.getDate()+(42-o)),{start:r,end:a}},Nc=e=>{switch(e){case`en`:return lc;case`zh`:return dc;case`ja`:return uc;case`zh-TW`:return fc;case`es`:return pc;default:return lc}},Pc=(e=1)=>{let t=[];for(let n=0;n<=59;n+=e)t.push({value:W(n),label:W(n)});return t},Fc=(e=!1)=>e?Ic(`AM`).concat(Ic(`PM`)):Lc(),Ic=e=>{let t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let n=1;n<=11;n++)t.push({value:`${e} ${W(n)}`,label:`${e} ${W(n)}`});return t},Lc=()=>{let e=[];e.push({value:`00`,label:`00`});for(let t=1;t<=23;t++)e.push({value:W(t),label:`${W(t)}`});return e},Rc=()=>z`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `,zc=()=>z`
    <svg
      class="kuc-base-datetime-calendar-header-1-26-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`,Bc=(e={})=>{let{anchorEl:t,popoverEl:n}=e;if(!n||!t)return;let{popoverHeight:r,popoverWidth:i}=e;if(!r)return;let a=t.getBoundingClientRect(),o=window.innerHeight>document.documentElement.clientHeight?document.documentElement.clientHeight:window.innerHeight,s=window.innerWidth>document.documentElement.clientWidth?document.documentElement.clientWidth:window.innerWidth,c=a.top,l=o-a.bottom,u,d;if(l>=r)u=a.bottom,d=r;else if(c>=r)u=a.top-r,d=r;else if(l>=c)u=a.bottom,d=l;else{d=c;let e=Math.min(r||d,d);u=Math.max(0,a.top-e)}n.style.right=`auto`;let f=a.left;if(i){let e=n.offsetWidth;s-a.left<e&&(f=a.right-e)}let p=`${f}px`;n.style.left!==p&&(n.style.left=p),n.style.top=`${u}px`,n.style.maxHeight=`${Math.floor(d)}px`,n.style.overflowY=`auto`};function Vc(e){if(!e)return{width:0,height:0};let t=e.style.position,n=e.style.left,r=e.style.top,i=e.style.maxHeight;e.style.position=`fixed`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.style.maxHeight=`none`;let a=e.getBoundingClientRect(),o=a.width||0,s=a.height||0;return e.style.position=t,e.style.left=n,e.style.top=r,e.style.maxHeight=i,{width:o,height:s}}function Hc(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}var Uc=e=>{if(!e.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0,inputDateWidth:0,inputDateHeight:0};let t=e.closest(`kuc-base-date-1-26-0`)??e.closest(`kuc-mobile-base-date-1-26-0`),{left:n,top:r,bottom:i,width:a,height:o}=(t.getElementsByClassName(`kuc-base-date-1-26-0__input`)[0]??t.getElementsByClassName(`kuc-mobile-base-date-1-26-0__group`)[0]).getBoundingClientRect();return{inputToBottom:window.innerHeight-i,inputToTop:r,inputToRight:window.innerWidth-n,inputToLeft:n+a,inputDateWidth:a,inputDateHeight:o}},Wc=()=>z`
    <svg
      class="kuc-base-datetime-calendar-header-1-26-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`,G={fromAttribute(e){return e===null},toAttribute(e){return e?null:``}},Gc={fromAttribute:e=>!e||[`en`,`ja`,`zh`,`zh-TW`,`es`].indexOf(e)===-1,toAttribute:e=>{let t=[`en`,`ja`,`zh`,`zh-TW`,`es`];return t.indexOf(e)===-1?t.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:e}},Kc=e=>e instanceof HTMLElement?e:tc(e),qc=e=>{if(e===void 0||e===``)return``;let t=[];return e.indexOf(`-`)>0&&(t=e.split(`-`)),t.length<2?`${e}-01-01`:t.length===2?`${W(t[0],4)}-${W(t[1])}-01`:t.length>2?`${W(t[0],4)}-${W(t[1])}-${W(t[2])}`:``},Jc=e=>{if(e.length===5||e===``)return e;let t=e.indexOf(`:`),n=e.substr(0,t),r=e.substr(t+1,5);return`${W(n)}:${W(r)}`},Yc=[];for(let e=0;e<256;++e)Yc.push((e+256).toString(16).slice(1));function Xc(e,t=0){return(Yc[e[t+0]]+Yc[e[t+1]]+Yc[e[t+2]]+Yc[e[t+3]]+`-`+Yc[e[t+4]]+Yc[e[t+5]]+`-`+Yc[e[t+6]]+Yc[e[t+7]]+`-`+Yc[e[t+8]]+Yc[e[t+9]]+`-`+Yc[e[t+10]]+Yc[e[t+11]]+Yc[e[t+12]]+Yc[e[t+13]]+Yc[e[t+14]]+Yc[e[t+15]]).toLowerCase()}var Zc=new Uint8Array(16);function Qc(){return crypto.getRandomValues(Zc)}function $c(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():el(e,t,n)}function el(e,t,n){e||={};let r=e.random??e.rng?.()??Qc();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return Xc(r)}var K=class extends Fs{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(e){throw await this.updateComplete,Error(e)}},q=(e,t,n)=>{let r=new CustomEvent(t,{detail:n,bubbles:!0,composed:!0});return e.dispatchEvent(r)},J=e=>{let t=`kuc-style-1-26-0`,n=document.getElementById(t);n||(n=document.createElement(`style`),n.id=t,document.head.appendChild(n)),n.appendChild(document.createTextNode(e))},Y=()=>$c(),tl=`
  kuc-base-error-1-26-0,
  kuc-base-error-1-26-0 *,
  kuc-base-error-1-26-0:lang(en),
  kuc-base-error-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-26-0:lang(es),
  kuc-base-error-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-26-0:lang(ja),
  kuc-base-error-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error-1-26-0:lang(zh),
  kuc-base-error-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error-1-26-0:lang(zh-TW),
  kuc-base-error-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error-1-26-0 {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-error-1-26-0__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error-1-26-0__error[hidden] {
    display: none;
  }
`,nl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},rl=class extends K{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return R`
      ${this.ariaLive&&this.ariaLive!==``?R`
              <div
                class="kuc-base-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                aria-live="${this.ariaLive}"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `:R`
              <div
                class="kuc-base-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `}
    `}};nl([B({type:String})],rl.prototype,`ariaLive`,void 0),nl([B({type:String})],rl.prototype,`guid`,void 0),nl([B({type:String})],rl.prototype,`text`,void 0),window.customElements.get(`kuc-base-error-1-26-0`)||(J(tl),window.customElements.define(`kuc-base-error-1-26-0`,rl));var il=`
  kuc-base-label-1-26-0,
  kuc-base-label-1-26-0 *,
  kuc-base-label-1-26-0:lang(en),
  kuc-base-label-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-26-0:lang(es),
  kuc-base-label-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-26-0:lang(ja),
  kuc-base-label-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label-1-26-0:lang(zh),
  kuc-base-label-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label-1-26-0:lang(zh-TW),
  kuc-base-label-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-label-1-26-0__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label-1-26-0__required-icon[hidden] {
    display: none;
  }
`,al=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ol=class extends K{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return R`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-26-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?R`
          <span class="kuc-base-label-1-26-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:R` <span class="kuc-base-label-1-26-0__text">${this.text}</span> `}};al([B({type:Boolean})],ol.prototype,`requiredIcon`,void 0),al([B({type:String})],ol.prototype,`guid`,void 0),al([B({type:String})],ol.prototype,`text`,void 0),window.customElements.get(`kuc-base-label-1-26-0`)||(J(il),window.customElements.define(`kuc-base-label-1-26-0`,ol));function X(e){if(!e||typeof e!=`object`)return{};let t={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===void 0&&delete t[e];return t}function sl(e){return!!(e===``||e===void 0||/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function cl(e){return!!(e===``||/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function ll(e,t,n){let r=Math.round(e),i=_c(t),a=_c(n);return!isNaN(r)&&r>0&&r<=i-a}function ul(e){let[t,n,r]=e.split(`-`),i=new Date(`${e}T00:00:00`),a=i.getFullYear(),o=i.getMonth(),s=i.getDate();return a===Number(t)&&o===Number(n)-1&&s===Number(r)}function dl(e){return typeof e==`string`}function fl(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}function pl(e){return e.length<2||!e.some(t=>e.indexOf(t)!==e.lastIndexOf(t))}function ml(e){return!(e<.5||!vl(e))}var hl=e=>{for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(e[t],`field`))return!1;return!0},gl=e=>{let t=e.map(e=>e.field);return t.some(function(e,n){return t.indexOf(e)!==n})};function _l(e){return/^[1-9]\d*$/.test(e)}function vl(e){return typeof e==`number`&&!Number.isNaN(e)}function Z(e){return Array.isArray(e)}var yl=e=>{if(e instanceof HTMLElement)return!0;let t=document.createElement(`div`);return t.innerHTML=e,t.childElementCount>0},bl=`
  kuc-attachment-1-26-0,
  kuc-attachment-1-26-0 *,
  kuc-attachment-1-26-0:lang(en),
  kuc-attachment-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-26-0:lang(ja),
  kuc-attachment-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment-1-26-0:lang(zh),
  kuc-attachment-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment-1-26-0:lang(zh-TW),
  kuc-attachment-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment-1-26-0:lang(es),
  kuc-attachment-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-26-0 {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment-1-26-0[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files {
    border: solid 1px #e3e7e8;
    background-color: #eeeeee;
    padding: 16px 4px;
    display: block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: var(--kuc-attachment-width, auto);
    height: var(--kuc-attachment-height, auto);
  }
  .kuc-attachment-1-26-0__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment-1-26-0__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment-1-26-0__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-26-0__group__files__browse-button:hover
  .kuc-attachment-1-26-0__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment-1-26-0__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item {
    position: relative;
    margin-bottom: 8px;
    height: auto;
    min-height: 24px;
    border: 2px solid #f1f4f5;
    background-color: #f1f4f5;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__name {
    display: inline-block;
    padding: 3px calc(4.6em + 4px) 3px 26px;
    width: 100%;
    max-width: 177px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__size {
    display: inline-block;
    position: absolute;
    right: 0;
    color: #888888;
    padding: 0 3px 0 0;
    max-width: 4.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-26-0__group__files__droppable {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
  }
  .kuc-attachment-1-26-0__group__files__droppable[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-26-0__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment-1-26-0__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment-1-26-0__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`,xl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sl;(()=>{if(Sl=window.customElements.get(`kuc-attachment-1-26-0`),Sl)return;class e extends K{constructor(e){super(),this.accept=``,this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.message=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(e.dataTransfer.items!==void 0){for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind.toLowerCase()===`file`)return!0}if(e.dataTransfer.types!==void 0){for(let t=0;t<e.dataTransfer.types.length;t++)if(e.dataTransfer.types[t].toLowerCase()===`files`)return!0}return!1},this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`files`)&&!Z(this.files)?(this.throwErrorAfterUpdateComplete(U.FILES.IS_NOT_ARRAY),!1):e.has(`accept`)&&!dl(this.accept)?(this.throwErrorAfterUpdateComplete(U.ACCEPT.IS_NOT_STRING),!1):e.has(`maxFiles`)&&this.maxFiles!==void 0&&!vl(this.maxFiles)?(this.throwErrorAfterUpdateComplete(U.MAX_FILES.IS_NOT_NUMBER),!1):!0}willUpdate(e){e.has(`language`)&&(this._locale=this._getLocale())}render(){return R`
        <div class="kuc-attachment-1-26-0__group">
          <label
            class="kuc-attachment-1-26-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
            @click="${this._handleClickLabel}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div
            class="kuc-attachment-1-26-0__group__files ${this.disabled?` kuc-attachment-1-26-0__group__files--disabled`:``}"
            @dragenter="${this._handleDragEnter}"
            @dragover="${this._handleDragOver}"
            @dragleave="${this._handleDragLeave}"
            @drop="${this._handleDragDrop}"
          >
            <div
              class="kuc-attachment-1-26-0__group__files__droppable"
              ?hidden="${!this._isDraging}"
            >
              <div class="kuc-attachment-1-26-0__group__files__droppable__text">
                ${this._locale.ATTACHMENT_DRAG_DROP_ZONE}
              </div>
            </div>
            <ul
              class="kuc-attachment-1-26-0__group__files__display-area${this._isDraging?` kuc-attachment-1-26-0__group__files__not-droppable--dragenter`:``}"
            >
              ${this.files.map((e,t)=>this._getAttachmentItemTemplate(e,t))}
            </ul>
            <div
              class="kuc-attachment-1-26-0__group__files__browse-button${this._isDraging?` kuc-attachment-1-26-0__group__files__not-droppable--dragenter`:``}"
              ?hidden="${this.disabled||this._isMaxFilesReached()}"
            >
              <span class="kuc-attachment-1-26-0__group__files__browse-button__text"
                >${this._locale.ATTACHMENT_BROWSE}</span
              >
              <div
                class="kuc-attachment-1-26-0__group__files__browse-button__input-container"
              >
                <input
                  class="kuc-attachment-1-26-0__group__files__browse-button__input-container__input"
                  type="file"
                  multiple
                  .id="${this._GUID}-input"
                  accept="${this.accept}"
                  aria-required="${this.requiredIcon}"
                  aria-invalid="${this.error}"
                  aria-describedby="${this._GUID}-error"
                  @change="${this._handleChangeFiles}"
                />
              </div>
            </div>
            <p
              class="kuc-attachment-1-26-0__group__files__browse-message${this.disabled?` kuc-attachment-1-26-0__group__files__browse-message--disabled`:``}"
              ?hidden="${!this.message}"
            >
              ${this.message}
            </p>
          </div>
          <kuc-base-error-1-26-0
            class="kuc-attachment-1-26-0__error"
            ?hidden="${!this.error}"
            .text="${this.error}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getAttachmentItemTemplate(e,t){return R`
        <li class="kuc-attachment-1-26-0__group__files__display-area__item">
          <div
            title="${e.name||``}"
            class="kuc-attachment-1-26-0__group__files__display-area__item__name"
          >
            ${e.name||``}
          </div>
          <div
            class="kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button"
              type="button"
              aria-label="Cancel File"
              data-file-index="${t}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment-1-26-0__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){let e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`})}_getRemoveButtonIcon(){return z`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.93933 7.00001L1.96966 3.03034L1.43933 2.50001L2.49999 1.43935L3.03032 1.96968L6.99999 5.93935L10.9697 1.96968L11.5 1.43935L12.5607 2.50001L12.0303 3.03034L8.06065 7.00001L12.0303 10.9697L12.5607 11.5L11.5 12.5607L10.9697 12.0303L6.99999 8.06067L3.03032 12.0303L2.49999 12.5607L1.43933 11.5L1.96966 10.9697L5.93933 7.00001Z"
          fill="#a8a8a8"
        />
      </svg>`}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_getLocale(){switch(this._getLanguage()){case`en`:return Ks;case`zh`:return Js;case`zh-TW`:return Ys;case`ja`:return qs;case`es`:return Xs;default:return Ks}}_handleClickFileRemove(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`data-file-index`),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();let e=[...this.files];this.files.splice(n,1);let t={oldFiles:e,files:this.files,type:`remove-file`,fileIndex:[n]};q(this,`change`,t),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){this.disabled||this._isMaxFilesReached()||(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e)&&(e.preventDefault(),this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+`px`,this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2+`px`,this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-6+`px`,this._isDraging=!0))}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){!this.disabled&&this._isDraging&&(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){if(e.dataTransfer&&e.dataTransfer.items){for(let t=0;t<e.dataTransfer.items.length;t++)if(typeof e.dataTransfer.items[t].webkitGetAsEntry==`function`&&e.dataTransfer.items[t].webkitGetAsEntry()?.isDirectory)return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height=`var(--kuc-attachment-height, auto)`,this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;if(t=Object.keys(t).map(e=>t[e]),this.accept&&(t=t.filter(e=>this._matchesAccept(e))),this._hasMaxFilesLimit()){let e=Math.max(0,this._effectiveMaxFiles()-this.files.length);t=t.slice(0,e)}if(t.length===0){this._inputEl.value=``;return}let n=[...this.files],r=t.map((e,t)=>n.length+t);t.forEach(e=>this.files.push(e));let i={oldFiles:n,files:this.files,type:`add-file`,fileIndex:r};q(this,`change`,i),this.requestUpdate()}this._inputEl.value=``}_matchesAccept(e){let t=this.accept.split(`,`).map(e=>e.trim().toLowerCase()).filter(e=>e&&(e.startsWith(`.`)||e.includes(`/`)));if(t.length===0)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.some(e=>{if(e===`*/*`)return!0;if(e.startsWith(`.`))return n.endsWith(e);if(e.endsWith(`/*`)){let t=e.slice(0,-1);return r.startsWith(t)}return r===e})}_hasMaxFilesLimit(){return this.maxFiles!==void 0&&this.maxFiles>=1}_effectiveMaxFiles(){return Math.floor(this.maxFiles)}_isMaxFilesReached(){return this._hasMaxFilesLimit()&&this.files.length>=this._effectiveMaxFiles()}_getFileSize(e){return typeof e==`number`?this._formatFileSize(e):_l(e)?this._formatFileSize(parseInt(e,10)):Gs}_formatFileSize(e){return e>=1073741824?Math.round(e/Ws)+` GB`:e>=1048576?Math.round(e/Us)+` MB`:e>=1024?Math.round(e/Hs)+` KB`:Math.round(e)+` bytes`}}xl([B({type:String})],e.prototype,`accept`,void 0),xl([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),xl([B({type:String})],e.prototype,`error`,void 0),xl([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),xl([B({type:String})],e.prototype,`label`,void 0),xl([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),xl([B({type:String})],e.prototype,`message`,void 0),xl([B({type:Boolean})],e.prototype,`disabled`,void 0),xl([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),xl([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),xl([B({type:Number})],e.prototype,`maxFiles`,void 0),xl([B({type:Array})],e.prototype,`files`,void 0),xl([V()],e.prototype,`_isDraging`,void 0),xl([H(`.kuc-attachment-1-26-0__group__files`)],e.prototype,`_groupFilesEl`,void 0),xl([H(`.kuc-attachment-1-26-0__group__files__droppable__text`)],e.prototype,`_dragTextEl`,void 0),xl([H(`.kuc-attachment-1-26-0__group__files__browse-button__input-container__input`)],e.prototype,`_inputEl`,void 0),xl([H(`.kuc-attachment-1-26-0__group__label`)],e.prototype,`_labelEl`,void 0),xl([Vs(`.kuc-attachment-1-26-0__group__files__display-area__item__name`)],e.prototype,`_fileItemsEl`,void 0),xl([Vs(`.kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button`)],e.prototype,`_fileRemoveButtons`,void 0),window.customElements.define(`kuc-attachment-1-26-0`,e),J(bl),Sl=e})();var Cl=`
  kuc-button-1-26-0,
  kuc-button-1-26-0 *,
  kuc-button-1-26-0:lang(en),
  kuc-button-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button-1-26-0:lang(es),
  kuc-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button-1-26-0:lang(ja),
  kuc-button-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button-1-26-0:lang(zh),
  kuc-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button-1-26-0:lang(zh-TW),
  kuc-button-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button-1-26-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button-1-26-0[hidden] {
    display: none;
  }
  .kuc-button-1-26-0__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button-1-26-0__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--normal:hover,
  .kuc-button-1-26-0__button--normal:focus-visible,
  .kuc-button-1-26-0__button--normal:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button-1-26-0__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button-1-26-0__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button-1-26-0__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--submit:hover,
  .kuc-button-1-26-0__button--submit:focus-visible,
  .kuc-button-1-26-0__button--submit:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button-1-26-0__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button-1-26-0__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button-1-26-0__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--alert:hover,
  .kuc-button-1-26-0__button--alert:focus-visible,
  .kuc-button-1-26-0__button--alert:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button-1-26-0__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button-1-26-0__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button-1-26-0__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button-1-26-0__button--normal:focus-visible,
  .kuc-button-1-26-0__button--submit:focus-visible,
  .kuc-button-1-26-0__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`,wl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Tl;(()=>{if(Tl=window.customElements.get(`kuc-button-1-26-0`),Tl)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=X(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),q(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`||this.type===`alert`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?yl(this.content)?Kc(this.content):this.content:this.text)}render(){return R`
        <button
          type="button"
          class="kuc-button-1-26-0__button kuc-button-1-26-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}wl([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),wl([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),wl([B({type:String})],e.prototype,`text`,void 0),wl([B({type:String})],e.prototype,`type`,void 0),wl([B()],e.prototype,`content`,void 0),wl([B({type:Boolean})],e.prototype,`disabled`,void 0),wl([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-button-1-26-0`,e),J(Cl),Tl=e})();var El=Tl,Dl=`
  kuc-checkbox-1-26-0,
  kuc-checkbox-1-26-0 *,
  kuc-checkbox-1-26-0:lang(en),
  kuc-checkbox-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-26-0:lang(es),
  kuc-checkbox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-26-0:lang(ja),
  kuc-checkbox-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-checkbox-1-26-0:lang(zh),
  kuc-checkbox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-checkbox-1-26-0:lang(zh-TW),
  kuc-checkbox-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-checkbox-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-checkbox-menu-width, 239px);
    min-width: var(--kuc-checkbox-menu-width, 239px);
    line-height: 1.5;
  }
  kuc-checkbox-1-26-0[hidden] {
    display: none;
  }
  .kuc-checkbox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-checkbox-1-26-0__group__select-menu {
    white-space: nowrap;
    width: var(--kuc-checkbox-menu-width, auto);
    height: var(--kuc-checkbox-menu-height, auto);
    color: var(--kuc-checkbox-menu-color, #333333);
    font-size: var(--kuc-checkbox-menu-font-size, 14px);
    display: flex;
    align-items: flex-start;
  }
  .kuc-checkbox-1-26-0__group__select-menu[itemLayout="vertical"] {
    display: block;
  }
  .kuc-checkbox-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }
  .kuc-checkbox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-checkbox-1-26-0__group__select-menu[borderVisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding: 4px 0 0 4px;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item {
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input:hover
    + .kuc-checkbox-1-26-0__group__select-menu__item__label {
    color: var(--kuc-checkbox-menu-color-hover, #666666);
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-checkbox-1-26-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    min-height: 24px;
    line-height: 1.2;
  }
  `,Ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kl;(()=>{if(kl=window.customElements.get(`kuc-checkbox-1-26-0`),kl)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!Z(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!Z(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!Z(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};q(this,`change`,l)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getCheckboxIconSvgTemplate(e,t){return z`
    <svg
      class="kuc-checkbox-1-26-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?z`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?`#d8d8d8`:`#3498db`}"/>`:``}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?`#d8d8d8`:t?`#3498db`:`#d8d8d8`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return R`
        <div
          class="kuc-checkbox-1-26-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            ?disabled="${r}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-26-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return R`
        <div
          class="kuc-checkbox-1-26-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-26-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-checkbox-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}Ol([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ol([B({type:String})],e.prototype,`error`,void 0),Ol([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ol([B({type:String})],e.prototype,`itemLayout`,void 0),Ol([B({type:String})],e.prototype,`label`,void 0),Ol([B({type:Boolean})],e.prototype,`borderVisible`,void 0),Ol([B({type:Boolean})],e.prototype,`disabled`,void 0),Ol([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ol([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Ol([B({type:Array})],e.prototype,`items`,void 0),Ol([B({type:Array})],e.prototype,`selectedIndex`,void 0),Ol([B({type:Array})],e.prototype,`value`,void 0),Ol([Vs(`.kuc-checkbox-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),Ol([V()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-checkbox-1-26-0`,e),J(Dl),kl=e})();var Al=`
  kuc-combobox-1-26-0,
  kuc-combobox-1-26-0 *,
  kuc-combobox-1-26-0:lang(en),
  kuc-combobox-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-26-0:lang(es),
  kuc-combobox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-26-0:lang(ja),
  kuc-combobox-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-combobox-1-26-0:lang(zh),
  kuc-combobox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-26-0:lang(zh-TW),
  kuc-combobox-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-26-0 {
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: var(--kuc-combobox-toggle-width, 180px);
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-combobox-1-26-0[hidden] {
    display: none;
  }
  .kuc-combobox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-combobox-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-combobox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-combobox-1-26-0__group__toggle {
    position: relative;
    display: flex;
    width: var(--kuc-combobox-toggle-width);
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input {
    width: 100%;
    height: var(--kuc-combobox-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    background-color: #ffffff;
    color: var(--kuc-combobox-toggle-color, #000000);
    font-size: var(--kuc-combobox-font-size, 14px);
    line-height: 1.5;
    padding: 0 40px 0 8px;
    margin: 0;
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    background-color: #e2f2fe;
    box-shadow: none;
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input:disabled,
  .kuc-combobox-1-26-0__group__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-26-0__group__toggle__icon {
    position: absolute;
    right: 0px;
    top: 2px;
    border-left: 1px solid #e3e7e8;
  }
  .kuc-combobox-1-26-0__group__toggle__icon__button {
    width: 40px;
    height: calc(var(--kuc-combobox-toggle-height, 40px) - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-combobox-1-26-0__group__select-menu {
    min-width: 280px;
    color: var(--kuc-combobox-menu-color);
    padding: 8px 0;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    list-style: none;
  }
  .kuc-combobox-1-26-0__group__select-menu__item {
    font-size: var(--kuc-combobox-font-size, 14px);
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }
  .kuc-combobox-1-26-0__group__select-menu__item:lang(en) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(ja) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(zh) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(zh-TW) b{
    font-weight: 700;
  }
  .kuc-combobox-1-26-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-combobox-1-26-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-combobox-menu-color-selected, #3498db);
  }
  .kuc-combobox-1-26-0__group__select-menu__item--disabled,
  .kuc-combobox-1-26-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-26-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`,jl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ml;(()=>{if(Ml=window.customElements.get(`kuc-combobox-1-26-0`),Ml)return;class e extends K{_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText=``,this._DISABLED_CLASS=`kuc-combobox-1-26-0__group__select-menu__item--disabled`,this._query=``,this._matchingItems=[],this._scrollTargets=[],this._GUID=Y(),this._timeoutID=null;let t=X(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!Z(this.items))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1;if(!pl(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has(`value`)&&(this._searchText=this._getSelectedLabel()||``)}render(){return R`
        <div class="kuc-combobox-1-26-0__group">
          <div
            class="kuc-combobox-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div class="kuc-combobox-1-26-0__group__toggle">
            <input
              class="kuc-combobox-1-26-0__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox-1-26-0__group__toggle__icon">
              <button
                class="kuc-combobox-1-26-0__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            id="${this._GUID}-listbox"
            popover="manual"
            class="kuc-combobox-1-26-0__group__select-menu"
            role="listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible&&(this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_getToggleIconSvgTemplate(){return z`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}_getItemTemplate(e,t){let n=this._isCheckedItem(e),r=e.disabled,i=e.label===void 0?e.value:e.label,a=n?R`<b>${i}</b>`:R`${i}`,o=this._query.trim().toLowerCase();if(o&&i){let e=i.toLowerCase().indexOf(o),t=e+o.length;a=R`
          ${i.slice(0,e)}<b>${i.slice(e,t)}</b>${i.slice(t)}
        `}return R`
        <li
          class="kuc-combobox-1-26-0__group__select-menu__item ${r?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${n?`true`:`false`}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${r?null:this._handleClickComboboxItem}"
          @mouseover="${r?null:this._handleMouseOverComboboxItem}"
        >
          ${this._getComboboxIconSvgTemplate(n,r)}
          ${a}
        </li>
      `}_getComboboxIconSvgTemplate(e,t){return z`
      ${e?z`<svg
          class="kuc-combobox-1-26-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?`#888888`:`#3498db`}"/>
        </svg>`:``}`}_handleClickComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),this.items.length!==0&&this._matchingItems.length!==0&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,this._menuEl&&this._toggleEl&&(this._setMenuPosition(),this._attachListeners()))}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-combobox-1-26-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-combobox-1-26-0__group__select-menu__highlight`)}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}let t={oldValue:this.value,value:e};this.value=e,this._query=``,q(this,`change`,t)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-combobox-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){!this._menuEl||!this._toggleEl?this._detachListeners():(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop))}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){let e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||``),this._query=``}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-combobox-1-26-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}}jl([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),jl([B({type:String})],e.prototype,`error`,void 0),jl([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),jl([B({type:String})],e.prototype,`label`,void 0),jl([B({type:String})],e.prototype,`placeholder`,void 0),jl([B({type:String})],e.prototype,`value`,void 0),jl([B({type:Boolean})],e.prototype,`disabled`,void 0),jl([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),jl([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),jl([B({type:Array})],e.prototype,`items`,void 0),jl([V()],e.prototype,`_selectorVisible`,void 0),jl([H(`.kuc-combobox-1-26-0__group__toggle`)],e.prototype,`_toggleEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__toggle__input`)],e.prototype,`_inputEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),jl([Vs(`.kuc-combobox-1-26-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),jl([H(`.kuc-combobox-1-26-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),jl([H(`.kuc-base-error-1-26-0__error`)],e.prototype,`_errorEl`,void 0),jl([Vs(`.kuc-combobox-1-26-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),jl([V()],e.prototype,`_searchText`,void 0),window.customElements.define(`kuc-combobox-1-26-0`,e),J(Al),Ml=e})();var Nl=`
.kuc-base-datetime-header-year-1-26-0__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-year-1-26-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-year-1-26-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-year-1-26-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,Pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fl=class extends K{constructor(){super(...arguments),this.year=new Date().getFullYear(),this.postfix=``,this._listBoxVisible=!1,this._listBoxMaxHeight=300,this._scrollTargets=[],this._boundOnScrollAndResize=()=>Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(e)}render(){return R`
      <button
        class="kuc-base-datetime-header-year-1-26-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-26-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-26-0__toggle__icon"
          >${Rc()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){this._listBoxVisible&&this._listBoxEl&&Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Hc(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?R`
          <kuc-base-datetime-listbox-1-26-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-26-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-26-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),q(this,`kuc:year-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){e.key!==`Tab`&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);let t={value:`${this.year}`};q(this,`kuc:year-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(;t<=n;t++)e.push(t);return e}};Pl([B({type:Number})],Fl.prototype,`year`,void 0),Pl([B({type:String})],Fl.prototype,`postfix`,void 0),Pl([V()],Fl.prototype,`_listBoxVisible`,void 0),Pl([H(`.kuc-base-datetime-header-year-1-26-0__toggle`)],Fl.prototype,`_toggleEl`,void 0),Pl([H(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Fl.prototype,`_listBoxEl`,void 0),Pl([H(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Fl.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-year-1-26-0`)||(J(Nl),window.customElements.define(`kuc-base-datetime-header-year-1-26-0`,Fl));var Il=`
.kuc-base-datetime-header-month-1-26-0__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-month-1-26-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-month-1-26-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-month-1-26-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,Ll=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rl=class extends K{constructor(){super(...arguments),this.language=`auto`,this.month=1,this._listBoxVisible=!1,this._locale=Nc(`en`),this._monthLabel=``,this._maxHeight=1e3,this._scrollTargets=[],this._listBoxMaxHeight=378,this._boundOnScrollAndResize=()=>Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){e.has(`language`)&&(this._locale=Nc(this.language),this._listBoxItems=this._getListBoxItems()),e.has(`month`)&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return R`
      <button
        class="kuc-base-datetime-header-month-1-26-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-26-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-26-0__toggle__icon"
          >${Rc()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){this._listBoxVisible&&this._listBoxEl&&Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Hc(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?R`
          <kuc-base-datetime-listbox-1-26-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-26-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-26-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),q(this,`kuc:month-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return e===`Tab`}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);let t={value:`${this.month}`};q(this,`kuc:month-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Bc({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getListBoxItems(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_getMonthLabel(){let e=this._locale.MONTH_SELECT.filter((e,t)=>this.month===t+1);return e.length>0?e[0]:`JANUARY`}};Ll([B({type:String,attribute:`lang`,reflect:!0})],Rl.prototype,`language`,void 0),Ll([B({type:Number})],Rl.prototype,`month`,void 0),Ll([V()],Rl.prototype,`_listBoxVisible`,void 0),Ll([H(`.kuc-base-datetime-header-month-1-26-0__toggle`)],Rl.prototype,`_toggleEl`,void 0),Ll([H(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Rl.prototype,`_listBoxEl`,void 0),Ll([H(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Rl.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-month-1-26-0`)||(J(Il),window.customElements.define(`kuc-base-datetime-header-month-1-26-0`,Rl));var zl=`
kuc-base-datetime-calendar-header-1-26-0,
kuc-base-datetime-calendar-header-1-26-0 *,
kuc-base-datetime-calendar-header-1-26-0:lang(en),
kuc-base-datetime-calendar-header-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(ja),
kuc-base-datetime-calendar-header-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  font-weight: 700;
}
kuc-base-datetime-calendar-header-1-26-0:lang(zh),
kuc-base-datetime-calendar-header-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-header-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(es),
kuc-base-datetime-calendar-header-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(ja) kuc-base-datetime-listbox-1-26-0 * {
  font-weight: 400;
}
.kuc-base-datetime-calendar-header-1-26-0__group {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e7e8;
  padding: 0;
  white-space: nowrap;
  width: 266px;
  height: 44px;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 38px;
  height: 32px;
  margin: 0;
  text-align: center;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button-icon {
  vertical-align: middle;
}
.kuc-base-datetime-calendar-header-1-26-0__group__center {
  width: 190px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kuc-base-datetime-calendar-header-1-26-0__month {
  margin: 0 4px 0 4px;
}
`,Bl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function Vl(e){return e>0&&e<13}function Hl(e){return e>=0&&e<1e4}var Ul=class extends K{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=Nc(`en`)}update(e){e.has(`language`)&&(this._locale=Nc(this.language)),super.update(e)}render(){return R`
      <div class="kuc-base-datetime-calendar-header-1-26-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-26-0__group__button kuc-base-datetime-calendar-header-1-26-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${zc()}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-26-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-26-0__group__button kuc-base-datetime-calendar-header-1-26-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${Wc()}
        </button>
      </div>
    `}_getYearTemplate(){return R`
      <kuc-base-datetime-header-year-1-26-0
        class="kuc-base-datetime-calendar-header-1-26-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-26-0>
    `}_getMonthTemplate(){return R`
      <kuc-base-datetime-header-month-1-26-0
        class="kuc-base-datetime-calendar-header-1-26-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-26-0>
    `}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?R` ${this._getYearTemplate()}${this._getMonthTemplate()} `:R` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&e.key===`Tab`&&(e.preventDefault(),q(this,`kuc:calendar-header-previous-shifttab`))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};q(this,`kuc:calendar-header-change`,e)}};Bl([B({type:String,attribute:`lang`,reflect:!0})],Ul.prototype,`language`,void 0),Bl([B({type:Number,hasChanged(e){return Vl(e)}})],Ul.prototype,`month`,void 0),Bl([B({type:Number,hasChanged(e){return Hl(e)}})],Ul.prototype,`year`,void 0),Bl([H(`.kuc-base-datetime-calendar-header-1-26-0__month`)],Ul.prototype,`_baseDateTimeHeaderMonthEl`,void 0),Bl([H(`.kuc-base-datetime-calendar-header-1-26-0__year`)],Ul.prototype,`_baseDateTimeHeaderYearEl`,void 0),Bl([H(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Ul.prototype,`_listBoxMonthEl`,void 0),Bl([H(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Ul.prototype,`_listBoxYearEl`,void 0),window.customElements.get(`kuc-base-datetime-calendar-header-1-26-0`)||(J(zl),window.customElements.define(`kuc-base-datetime-calendar-header-1-26-0`,Ul));var Wl=`
kuc-base-datetime-calendar-footer-1-26-0,
kuc-base-datetime-calendar-footer-1-26-0 *,
kuc-base-datetime-calendar-footer-1-26-0:lang(en),
kuc-base-datetime-calendar-footer-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(ja),
kuc-base-datetime-calendar-footer-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(zh),
kuc-base-datetime-calendar-footer-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-footer-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(es),
kuc-base-datetime-calendar-footer-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-footer-1-26-0__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__center {
  width: 100%;
}
`,Gl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kl=class extends K{constructor(){super(...arguments),this.language=`en`,this._locale=Nc(`en`)}update(e){e.has(`language`)&&(this._locale=Nc(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),q(this,`kuc:calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),q(this,`kuc:calendar-footer-click-today`)}_handleKeyDownCalendarFooterButtonNone(e){e.key===`Tab`&&(e.shiftKey||(e.preventDefault(),q(this,`kuc:calendar-footer-tab-none`)))}render(){return R`
      <div class="kuc-base-datetime-calendar-footer-1-26-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-26-0__group__button kuc-base-datetime-calendar-footer-1-26-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-26-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-26-0__group__button kuc-base-datetime-calendar-footer-1-26-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}};Gl([B({type:String,attribute:`lang`,reflect:!0})],Kl.prototype,`language`,void 0),Gl([V()],Kl.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-datetime-calendar-footer-1-26-0`)||(J(Wl),window.customElements.define(`kuc-base-datetime-calendar-footer-1-26-0`,Kl));var ql=`
.kuc-base-datetime-calendar-1-26-0__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
`,Jl=`
kuc-base-datetime-calendar-body-1-26-0,
kuc-base-datetime-calendar-body-1-26-0 *,
kuc-base-datetime-calendar-body-1-26-0:lang(en),
kuc-base-datetime-calendar-body-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(ja),
kuc-base-datetime-calendar-body-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(zh),
kuc-base-datetime-calendar-body-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-body-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(es),
kuc-base-datetime-calendar-body-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-body-1-26-0__table,
.kuc-base-datetime-calendar-body-1-26-0__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date,
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body-1-26-0__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body-1-26-0__table__header {
  font-weight: 700;
}
:lang(es) th.kuc-base-datetime-calendar-body-1-26-0__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected,
.kuc-base-datetime-calendar-body-1-26-0__table__date,
.kuc-base-datetime-calendar-body-1-26-0__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body-1-26-0__table__header:nth-child(1),
.kuc-base-datetime-calendar-body-1-26-0__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date:focus,
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date
  .kuc-base-datetime-calendar-body-1-26-0__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today,
.kuc-base-datetime-calendar-body-1-26-0__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--other-month,
.kuc-base-datetime-calendar-body-1-26-0__table__date--other-month:hover {
  color: #d4d7d7;
}
`,Yl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xl=class extends K{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=Nc(`en`),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`keydown`,this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=Nc(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return R`
      <table class="kuc-base-datetime-calendar-body-1-26-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has(`value`)&&this.focusActiveDate(),super.update(e)}focusActiveDate(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}_handleKeyDownDocument(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),q(this,`kuc:calendar-body-blur`,{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`)||``;this._dispatchClickEvent(n)}_handleKeyDownDate(e){let t=!1;switch(e.key){case`Up`:case`ArrowUp`:t=!0,this._moveToDate(-7);break;case`Down`:case`ArrowDown`:t=!0,this._moveToDate(7);break;case`Left`:case`ArrowLeft`:t=!0,this._moveToDate(-1);break;case`Right`:case`ArrowRight`:t=!0,this._moveToDate(1);break;case` `:case`Enter`:{t=!0;let e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};q(this,`kuc:calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this._getSelectedValue(),{day:n}=this._separateDateValue(t),r=`${this._year}-${W(this._month)}-${n}`,i=new Date(`${r||this._getValueItemFocused()}T00:00:00`);if(isNaN(i.getTime()))return;i.setDate(i.getDate()+e);let a=this._getDateString(i),o=r;this.value=a;let s={oldValue:o,value:a};q(this,`kuc:calendar-body-change-date`,s)}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||``:this._selectedItem&&this._selectedItem.getAttribute(`data-date`)||``}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute(`data-date`)||``}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today`:``:this._isToday(e)?` kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today`:` kuc-base-datetime-calendar-body-1-26-0__table__date--other-month`}_getDateString(e=new Date){return`${e.getFullYear()}-${W(e.getMonth()+1)}-${W(e.getDate())}`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return R`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>R`
              <th
                class="kuc-base-datetime-calendar-body-1-26-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=mc(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return R`
      <tbody>
        ${e.map(e=>R`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return R`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-26-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${a?`0`:`-1`}"
                    aria-current="${this._isToday(n)?`date`:!1}"
                    aria-label="${n[2]} ${t}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${n[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}};Yl([B({type:Number})],Xl.prototype,`month`,void 0),Yl([B({type:Number})],Xl.prototype,`year`,void 0),Yl([B({type:String,attribute:`lang`,reflect:!0})],Xl.prototype,`language`,void 0),Yl([B({type:String,reflect:!0})],Xl.prototype,`value`,void 0),Yl([V()],Xl.prototype,`_month`,void 0),Yl([V()],Xl.prototype,`_year`,void 0),Yl([H(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected[aria-selected="true"]`)],Xl.prototype,`_selectedItem`,void 0),Yl([H(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected`)],Xl.prototype,`_highlightItem`,void 0),Yl([H(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected[tabindex="0"]`)],Xl.prototype,`_focusedItem`,void 0),window.customElements.get(`kuc-base-datetime-calendar-body-1-26-0`)||(J(Jl),window.customElements.define(`kuc-base-datetime-calendar-body-1-26-0`,Xl));var Zl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ql=class extends K{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return R`
      <div
        class="kuc-base-datetime-calendar-1-26-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-26-0>
        <kuc-base-datetime-calendar-body-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-26-0>
        <kuc-base-datetime-calendar-footer-1-26-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-26-0>
      </div>
    `}async updated(e){await this.updateComplete,super.updated(e)}focusActiveDate(){let e=this.querySelector(`kuc-base-datetime-calendar-body-1-26-0`);e&&e.focusActiveDate()}repositionHeaderListboxes(){var e,t;(e=this._monthEl)==null||e.repositionListBox(),(t=this._yearEl)==null||t.repositionListBox()}_handleKeyDownCalendarGroup(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),q(this,`kuc:calendar-escape`,{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_handleCalendarBodyChangeDate(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=Ac().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};Zl([B({type:String,attribute:`lang`,reflect:!0})],Ql.prototype,`language`,void 0),Zl([B({type:String,reflect:!0})],Ql.prototype,`value`,void 0),Zl([H(`.kuc-base-datetime-calendar-header-1-26-0__month`)],Ql.prototype,`_monthEl`,void 0),Zl([H(`.kuc-base-datetime-calendar-header-1-26-0__year`)],Ql.prototype,`_yearEl`,void 0),Zl([H(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Ql.prototype,`_listBoxMonthEl`,void 0),Zl([H(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Ql.prototype,`_listBoxYearEl`,void 0),Zl([V()],Ql.prototype,`_month`,void 0),Zl([V()],Ql.prototype,`_year`,void 0),window.customElements.get(`kuc-base-datetime-calendar-1-26-0`)||(J(ql),window.customElements.define(`kuc-base-datetime-calendar-1-26-0`,Ql));var $l=`
kuc-base-datetime-listbox-1-26-0,
kuc-base-datetime-listbox-1-26-0 *,
kuc-base-datetime-listbox-1-26-0:lang(en),
kuc-base-datetime-listbox-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(ja),
kuc-base-datetime-listbox-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(zh),
kuc-base-datetime-listbox-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(zh-TW),
kuc-base-datetime-listbox-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-base-datetime-listbox-1-26-0:lang(es),
kuc-base-datetime-listbox-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-listbox-1-26-0__listbox[popover] {
  margin: 0;
  padding: 8px 0;
  box-sizing: border-box;
  border: 1px solid #e3e7e8;
  background-color: #ffffff;
  list-style: none;
  line-height: 1;
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 2000;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 130px;
  padding: 8px 16px 8px 25px;
  color: #333333;
  cursor: pointer;
  -webkit-tap-highlight-color: initial;
  text-align: left;
  font-size: 14px;
  user-select: none;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox-1-26-0__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item:focus {
  outline: none;
}
`,eu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tu=class extends K{constructor(){super(),this.value=``,this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}showPopover(){var e;this.requestUpdate(),(e=this._listBoxEl)==null||e.showPopover()}hidePopover(){var e;(e=this._listBoxEl)==null||e.hidePopover(),this.requestUpdate()}render(){return R`
      <ul
        popover="manual"
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-26-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map(e=>this._getListBoxItemTemplate(e))}
      </ul>
    `}async updated(e){await this.updateComplete,e.has(`value`)&&this._highlightSelectedItem(),this._scrollToView(),super.updated(e)}_handleClickDocument(){q(this,`kuc:listbox-blur`,{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case`Up`:case`ArrowUp`:this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Down`:case`ArrowDown`:this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Home`:this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case`End`:this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case`Tab`:q(this,`kuc:listbox-click`,{});break;case`Escape`:q(this,`kuc:listbox-escape`,{});break;case` `:case`Enter`:{let e={value:this._highlightItemEl.getAttribute(`value`)||``};q(this,`kuc:listbox-click`,e);break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;let t={value:e.target.getAttribute(`value`)||``};q(this,`kuc:listbox-click`,t)}_handleMouseOverItem(e){if(this._actionKeyboard){this._actionKeyboard=!1;return}let t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add(`kuc-base-datetime-listbox-1-26-0__listbox--highlight`),e.setAttribute(`tabindex`,`0`)}_highlightSelectedItem(){if(!this.doFocus)return;let e=Array.from(this._itemsEl).filter(e=>e.getAttribute(`aria-selected`)===`true`)[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}let e=this._getNextItemEl();e?(this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e):this._highlightFirstItem()}_getNextItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}let e=this._getPreviousItemEl();e?(this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e):this._highlightLastItem()}_getPreviousItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute(`tabindex`,`-1`),this._highlightItemEl.classList.remove(`kuc-base-datetime-listbox-1-26-0__listbox--highlight`))}_focusHighlightItemEl(e){let t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),e!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){let e={value:this._highlightItemEl.getAttribute(`value`)||``};q(this,`kuc:listbox-focus-change`,e)}_scrollToView(){let e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;let t=e.offsetHeight,n=this._listBoxEl.clientHeight/t/2,r=e.offsetTop-n*t;r<0&&(r=0),this._listBoxEl.scrollTop=r}_getHighlightItemByValue(){let e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`)),n=e.find(e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t);return n||=e[e.length-1],!this.doFocus||!n||(this._setHighlightItemEl(n),this._focusHighlightItemEl()),n}_getListBoxItemTemplate(e){let t=this.value===e.value&&this.doFocus;return R`
      <li
        class="kuc-base-datetime-listbox-1-26-0__listbox__item"
        role="option"
        tabindex="${t?`0`:`-1`}"
        aria-selected="${t}"
        title="${e.label||``}"
        value="${e.value===void 0?``:e.value}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():``}
        ${e.label===void 0?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return z`<svg
          class="kuc-base-datetime-listbox-1-26-0__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}};eu([B({type:String})],tu.prototype,`value`,void 0),eu([B({type:Array})],tu.prototype,`items`,void 0),eu([B({type:Number})],tu.prototype,`maxHeight`,void 0),eu([B({type:Boolean})],tu.prototype,`doFocus`,void 0),eu([H(`.kuc-base-datetime-listbox-1-26-0__listbox`)],tu.prototype,`_listBoxEl`,void 0),eu([Vs(`.kuc-base-datetime-listbox-1-26-0__listbox__item`)],tu.prototype,`_itemsEl`,void 0),eu([H(`.kuc-base-datetime-listbox-1-26-0__listbox__item`)],tu.prototype,`_firstItemEl`,void 0),eu([H(`.kuc-base-datetime-listbox-1-26-0__listbox__item:last-child`)],tu.prototype,`_lastItemEl`,void 0),eu([H(`.kuc-base-datetime-listbox-1-26-0__listbox--highlight`)],tu.prototype,`_highlightItemEl`,void 0),eu([H(`.kuc-base-datetime-listbox-1-26-0__listbox__item__icon`)],tu.prototype,`_iconChecked`,void 0),eu([V()],tu.prototype,`_actionKeyboard`,void 0),eu([V()],tu.prototype,`_firstHighlight`,void 0),window.customElements.get(`kuc-base-datetime-listbox-1-26-0`)||(J($l),window.customElements.define(`kuc-base-datetime-listbox-1-26-0`,tu));var nu=`
input.kuc-base-date-1-26-0__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  color: #333333;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

input.kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input.kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-datetime-picker-1-26-0__group__inputs--date
  input.kuc-base-date-1-26-0__input--focus {
  border-color: #3498db;
}
input.kuc-base-date-1-26-0__input:disabled {
  color: #888888 !important;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-base-date-1-26-0__calendar {
  padding: 0;
  border: none;
  background-color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
}
.kuc-base-date-1-26-0__calendar[popover] {
  position: fixed;
  z-index: 2000;
  right: auto;
  bottom: auto;
}
.kuc-base-date-1-26-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
`,ru=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},iu=class extends K{constructor(){super(...arguments),this.inputAriaLabel=``,this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=Nc(`en`),this._calendarValue=``,this._inputValue=``,this._valueForReset=``,this._hasFocus=!1,this._blurBaseline=``,this._resizeDebounceTimer=null,this._scrollRAF=0,this._calendarNaturalWidth=0,this._calendarNaturalHeight=0,this._scrollTargets=[],this._DEBOUNCE_DELAY=200,this._schedulePositionOnScroll=()=>{this._dateTimeCalendarVisible&&!this._scrollRAF&&(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._schedulePositionOnResize=()=>{this._dateTimeCalendarVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{var e;this._resizeDebounceTimer=null,this._positionCalendar(),(e=this._calendarEl)==null||e.repositionHeaderListboxes()},this._DEBOUNCE_DELAY))},this._handleFocusIn=e=>{this._isFocusInsideComponent(e.relatedTarget)||(this._hasFocus=!0,this._blurBaseline=this.value,q(this,`kuc:base-date-focusin`,{}))},this._handleFocusOut=e=>{this._isFocusInsideComponent(e.relatedTarget)||this._dateTimeCalendarVisible||this._emitDeferredBlur()},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._dateInput);!n&&!r&&(this._closeCalendar(),this._isFocusInsideComponent(document.activeElement)||this._emitDeferredBlur())},this._positionCalendar=()=>{if(!this._calendarEl||!this._dateInput)return;let e=this._dateInput.getBoundingClientRect(),t=this._calendarNaturalWidth||336,n=this._calendarNaturalHeight||0,r=e.top,i=window.innerHeight-e.bottom,a;a=e.bottom,i<r&&(a=e.top-n);let o=e.left;o>window.innerWidth-t&&window.innerWidth-e.left<e.right&&(o=e.right-t),this._calendarEl.style.left=`${Math.floor(o)}px`,this._calendarEl.style.top=`${Math.floor(a)}px`}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),e.has(`language`)&&(this._locale=Nc(this.language),this._updateValueProp()),e.has(`value`)&&this._updateValueProp(),super.update(e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners(),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut),super.disconnectedCallback()}_isFocusInsideComponent(e){return e instanceof HTMLElement?e===this._dateInput||e===this._assistiveBtn||e===this._calendarEl||this._calendarEl?.contains(e)===!0:!1}_emitDeferredBlur(){if(!this._hasFocus)return;this._hasFocus=!1;let e={value:this.value,oldValue:this._blurBaseline},t=this._getCurrentError();t&&(e.error=t),q(this,`kuc:base-date-blur`,e)}_getCurrentError(){if(this._inputValue&&!jc(this.language,this._inputValue))return this._locale.INVALID_FORMAT}render(){return R`
      <input
        class="kuc-base-date-1-26-0__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-26-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      <kuc-base-datetime-calendar-1-26-0
        class="kuc-base-date-1-26-0__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
        @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
        @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
        @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
        @kuc:calendar-escape="${this._handleCalendarEscape}"
      >
      </kuc-base-datetime-calendar-1-26-0>
    `}updated(e){e.has(`inputAriaLabel`)&&this.inputAriaLabel&&this._dateInput.setAttribute(`aria-label`,this.inputAriaLabel),super.updated(e)}_handleInputValue(e){let t=e.target.value;this._inputValue=t||``}_handleClickInput(){this._dateTimeCalendarVisible?this._closeCalendar():(this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_updateValueProp(){if(this.value){let e=this._setCalendarValueWhenInvalidValue();this._inputValue=Dc(this.language,this.value),this._calendarValue=e||this.value;return}let e=Ac();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!ul(this.value)){let e=Ac();return this._calendarValue||e.slice(0,7)}return``}_getNewCalendarValue(e){if(jc(this.language,e))return Oc(this.language,e);if(!this._calendarValue)return``;let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_handleChangeInput(e){e.stopPropagation();let t=(e?.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7){this._dispathDateChangeCustomEvent(Oc(this.language,t));return}let n={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,q(this,`kuc:base-date-change`,n)}_handleKeyDownInput(e){e.key===`Escape`&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){if(await this.updateComplete,this._calendarEl.showPopover(),!this._calendarNaturalWidth||!this._calendarNaturalHeight){let e=Vc(this._calendarEl);this._calendarNaturalWidth=e.width,this._calendarNaturalHeight=e.height}this._positionCalendar(),this._attachListeners(),this._calendarEl.focusActiveDate()}}_attachListeners(){this._detachListeners(),this._scrollTargets=Hc(this._dateInput);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize),document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize),document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,q(this,`kuc:base-date-change`,e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,q(this,`kuc:base-date-change`,e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue=``;let e=Ac(),t=this._setCalendarValueWhenInvalidValue();t||=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)+`-01`,this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=Ac();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){let e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;let t={oldValue:this.value,value:e};this.value=e,q(this,`kuc:base-date-change`,t)}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e===void 0?``:e,q(this,`kuc:base-date-change`,t)}_handleClickButton(){this._dateTimeCalendarVisible?this._closeCalendar():(this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_handleBlurButton(){this._dateInput.classList.remove(`kuc-base-date-1-26-0__input--focus`)}_handleFocusButton(){this._dateInput.classList.add(`kuc-base-date-1-26-0__input--focus`)}};ru([B({type:String})],iu.prototype,`inputAriaLabel`,void 0),ru([B({type:String})],iu.prototype,`inputId`,void 0),ru([B({type:String,attribute:`lang`,reflect:!0})],iu.prototype,`language`,void 0),ru([B({type:String,reflect:!0})],iu.prototype,`value`,void 0),ru([B({type:Boolean})],iu.prototype,`disabled`,void 0),ru([B({type:Boolean})],iu.prototype,`inputAriaInvalid`,void 0),ru([B({type:Boolean})],iu.prototype,`required`,void 0),ru([H(`.kuc-base-date-1-26-0__input`)],iu.prototype,`_dateInput`,void 0),ru([H(`.kuc-base-date-1-26-0__calendar`)],iu.prototype,`_calendarEl`,void 0),ru([H(`.kuc-base-date-1-26-0__assistive-text`)],iu.prototype,`_assistiveBtn`,void 0),ru([H(`.kuc-base-datetime-calendar-header-1-26-0__group__button--previous-month`)],iu.prototype,`_previousMonth`,void 0),ru([H(`.kuc-base-datetime-calendar-footer-1-26-0__group__button--none`)],iu.prototype,`_footerNoneBtn`,void 0),ru([V()],iu.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-base-date-1-26-0`)||(J(nu),window.customElements.define(`kuc-base-date-1-26-0`,iu));var au=`
kuc-date-picker-1-26-0,
kuc-date-picker-1-26-0 *,
kuc-date-picker-1-26-0:lang(en),
kuc-date-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-date-picker-1-26-0:lang(ja),
kuc-date-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-date-picker-1-26-0:lang(zh),
kuc-date-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker-1-26-0:lang(zh-TW),
kuc-date-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-date-picker-1-26-0:lang(es),
kuc-date-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-date-picker-1-26-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: var(--kuc-date-picker-input-width, 100px);
  width: var(--kuc-date-picker-input-width, 100px);
  line-height: 1.5;
}
kuc-date-picker-1-26-0[hidden] {
  display: none;
}
.kuc-date-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input {
  width: var(--kuc-date-picker-input-width, 100px);
  height: var(--kuc-date-picker-input-height, 40px);
  padding: 0px;
  text-align: center;
  color: var(--kuc-date-picker-input-color);
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: var(--kuc-date-picker-input-font-size, 14px);
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-date-picker-1-26-0__group kuc-base-date-1-26-0 {
  display: inline-flex;
}

.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: var(--kuc-date-picker-input-color, #333333);
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,ou=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},su;(()=>{if(su=window.customElements.get(`kuc-date-picker-1-26-0`),su)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._errorFormat=``,this._errorText=``,this._inputValue=``,this._invalidValue=``,this._blurBaseline=``,this._valueConverted=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||!sl(this.value)||(this._valueConverted=qc(this.value),this._valueConverted&&!ul(this._valueConverted))?(this.throwErrorAfterUpdateComplete(cc.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat=``)),this._updateErrorText()}render(){return R`
        <div class="kuc-date-picker-1-26-0__group">
          <label
            class="kuc-date-picker-1-26-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <kuc-base-date-1-26-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
            @kuc:base-date-blur="${this._handleDateChangeOnBlur}"
            @kuc:base-date-focusin="${this._handleDateFocusIn}"
          >
          </kuc-base-date-1-26-0>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._invalidValue=``}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error=``,t.value=void 0):(this._errorFormat=``,this.value=e.detail.value===void 0?``:e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_handleDateFocusIn(e){e.stopPropagation(),this._blurBaseline=this.value}_handleDateChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.error?void 0:e.detail.value,oldValue:this._blurBaseline};q(this,`blur`,t)}_dispatchChangeEvent(e){q(this,`change`,e)}}ou([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ou([B({type:String})],e.prototype,`error`,void 0),ou([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ou([B({type:String})],e.prototype,`label`,void 0),ou([B({type:Boolean})],e.prototype,`disabled`,void 0),ou([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),ou([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),ou([B({type:String})],e.prototype,`value`,void 0),ou([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),ou([H(`.kuc-base-date-1-26-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-date-picker-1-26-0`,e),J(au),su=e})();var cu=`
:lang(ja) .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours,
:lang(ja) .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes {
  width: 2ch;
}
.kuc-base-time-1-26-0__group {
  display: inline-flex;
  position: relative;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 85px;
  width: 85px;
  height: 40px;
  color: #333333;
  border: solid 1px #e3e7e8;
  box-sizing: border-box;
  padding: 0px 8px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  background-color: #ffffff;
  overflow: hidden;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours:focus {
  border: 0px;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes:focus {
  border: 0px;
}
.kuc-base-time-1-26-0__group__colon {
  width: auto;
  text-align: center;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix {
  border: 0px;
  width: 3ch;
  text-align: right;
  font-size: inherit;
  outline: none;
  appearance: none;
  margin-left: 1px;
  padding: 0px;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time-1-26-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time-1-26-0__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time-1-26-0__group--disabled input:disabled,
.kuc-base-time-1-26-0__group--disabled span {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`,lu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},uu=class extends K{constructor(){super(...arguments),this.language=`en`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.timeStep=30,this._hasFocus=!1,this._blurBaseline=``,this._listBoxVisible=!1,this._valueLabel=``,this._doFocusListBox=!1,this._hours=``,this._minutes=``,this._suffix=``,this._valueForReset=``,this._locale=Nc(`en`),this._scrollTargets=[],this._listBoxMaxHeight=165,this._listBoxMaxWidth=0,this._resizeDebounceTimer=null,this._DEBOUNCE_DELAY=200,this._handleFocusOut=e=>{this._emitDeferredChangeOnBlur(e.relatedTarget)},this._schedulePositionOnResize=()=>{this._listBoxVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{this._resizeDebounceTimer=null,Bc({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})},this._DEBOUNCE_DELAY))},this._boundOnScroll=()=>Bc({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusout`,this._handleFocusOut)}disconnectedCallback(){this._detachListeners(),this.removeEventListener(`focusout`,this._handleFocusOut),super.disconnectedCallback()}update(e){(e.has(`hour12`)||e.has(`timeStep`)||e.has(`max`)||e.has(`min`))&&(this._listBoxItems=hc(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has(`value`)&&this._updateInputValue(),e.has(`language`)&&(this._locale=Nc(this.language)),super.update(e)}render(){return R`
      <div
        class="kuc-base-time-1-26-0__group"
        @mousedown="${this._handleMouseDownInputGroup}"
        @click="${this._handleClickInputGroup}"
      >
        <input
          type="text"
          class="kuc-base-time-1-26-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?`0`:`-1`}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-26-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?`0`:`-1`}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-26-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has(`disabled`)&&this._toggleDisabledGroup(),super.update(e)}_handleMouseDownInputGroup(e){let t=e.target;t!==this._hoursEl&&t!==this._minutesEl&&t!==this._suffixEl&&e.preventDefault()}_handleClickInputGroup(e){if(this.disabled)return;if(this.value===``){this._toggleEl.focus(),this._openListBox();return}let t=e.target;this._openListBox(),t.tagName.toUpperCase()===`INPUT`?t.select():this._hoursEl.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||this._closeListBox()}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--disabled`):this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--disabled`)}_updateInputValue(){var e;let t=yc(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||``,this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),(e=this._inputFocusEl)==null||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return``;let t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||``)}_handleKeyDownButton(e){switch(e.key){case`Tab`:case`Escape`:if(e.key===`Escape`&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case`Enter`:case` `:case`ArrowUp`:case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(e){this._emitDeferredChangeOnBlur(e.relatedTarget),this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`)}_handleFocusButton(e){e.stopPropagation(),this._captureBlurBaseline(e.relatedTarget),this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--focus`)}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._openListBox(),this._doFocusListBox=!0,this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===``?this._toggleEl.focus():this._hoursEl.select()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||this.value!==``)return;let t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;let t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){let t=e.detail.value,n=wc(t);this._actionUpdateInputValue(n)}_handleFocusInput(e){this._inputFocusEl=e.target,this._captureBlurBaseline(e.relatedTarget),this._inputFocusEl.select(),this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--focus`)}_captureBlurBaseline(e){this._isFocusInsideComponent(e)||(this._hasFocus=!0,this._blurBaseline=this.value,q(this,`kuc:base-time-focusin`,{}))}_handleBlurInput(e){this._inputFocusEl=null;let t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._emitDeferredChangeOnBlur(t),this._closeListBox(),this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`))}_handleTabKey(e){return e.key===`Tab`}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleChangeInput(e){e.stopPropagation()}_handleInput(e){let t=e.target;t===this._hoursEl?t.value=this._hours:t===this._minutesEl?t.value=this._minutes:t===this._suffixEl&&(t.value=this._suffix)}_handleSupportedKey(e){e.preventDefault();let t=e.key,n;switch(t){case`Enter`:case`ArrowRight`:this._actionSelectNextRange();break;case`ArrowLeft`:this._actionSelectPreviousRange();break;case`ArrowUp`:n=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(n);break;case`ArrowDown`:n=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(n);break;case`Backspace`:case`Delete`:n=this._computeDeleteValue(),this._actionUpdateInputValue(n);break;default:n=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(n)}}_actionUpdateInputValue(e){let t=wc(this.value===``?this.value:this._formatKeyDownValue()),n=wc(e);t!==n&&(this.value=n,this._dispatchEventTimeChange(n,t))}_isFocusInsideComponent(e){return e instanceof HTMLElement?this._inputGroupEl.contains(e)||e===this._toggleEl||this._listboxEl?.contains(e)===!0:!1}_emitDeferredChangeOnBlur(e){this._isFocusInsideComponent(e)||this._hasFocus&&(this._hasFocus=!1,this._dispatchEventTimeChange(this.value,this._blurBaseline,`kuc:base-time-blur`))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:`00`}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:`00`}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){let e=this._suffix===nc.AM?nc.PM:nc.AM;return this._formatKeyDownValue({suffix:e})}if([`a`,`A`,`p`,`P`].indexOf(e)===-1)return this._formatKeyDownValue();let t=e===`a`||e===`A`?nc.AM:nc.PM;return this.value===``&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=12,t=t<=0?12:t):(t%=24,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){let t=W(this._getPreviousMinutes(this._minutes)+e);return this.value===``?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:t})}_computeNumberKeyValueHours(e){let t=W(this._getPreviousHours(this._hours,e)+e);return this.value===``?this._formatKeyDownValue({hours:t,minutes:`00`}):this._formatKeyDownValue({hours:t})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(``+e)[1]:``+e,t=parseInt(t,10)>5?`0`:t,t}_getPreviousHours(e,t){let n;n=parseInt(e,10)>10?(``+e)[1]:``+e;let r=parseInt(n+t,10);return n=this.hour12&&r>12||!this.hour12&&r>=24?`0`:n,n}_actionSelectNextRange(){this._inputFocusEl===this._hoursEl?this._minutesEl.select():this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){this._inputFocusEl===this._suffixEl?this._minutesEl.select():this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(e,t,n=`kuc:base-time-change`){let r={value:e,oldValue:t};(vc(e,this.min)<0||vc(this.max,e)<0)&&(r.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),q(this,n,r)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){let t=e.hours||this._hours,n=e.minutes||this._minutes,r=e.suffix||this._suffix,i=`${W(t)}:${W(n)}`;return r?`${i} ${r}`:i}async _openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0,await this.updateComplete,this._listboxEl&&(this._listboxEl.showPopover(),this._listBoxMaxWidth=Vc(this._listBoxUl).width,Bc({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth}),this._attachListeners()))}_attachListeners(){this._detachListeners(),this._scrollTargets=Hc(this._inputGroupEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize)}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize)}_closeListBox(){var e;this._doFocusListBox=!1,this._listBoxVisible=!1,(e=this._listboxEl)==null||e.hidePopover(),this._detachListeners()}_getColonTemplate(){return this._hours?R` <span class="kuc-base-time-1-26-0__group__colon">:</span> `:``}_getSuffixTemplate(){return this.hour12?R`
          <input
            class="kuc-base-time-1-26-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?`0`:`-1`}"
            aria-label="${this._suffix||`suffix`}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:``}_getListBoxTemplate(){return this._listBoxVisible?R`
          <kuc-base-datetime-listbox-1-26-0
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-26-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-26-0>
        `:``}};lu([B({type:String,attribute:`lang`,reflect:!0})],uu.prototype,`language`,void 0),lu([B({type:String})],uu.prototype,`max`,void 0),lu([B({type:String})],uu.prototype,`min`,void 0),lu([B({type:String})],uu.prototype,`value`,void 0),lu([B({type:Boolean})],uu.prototype,`disabled`,void 0),lu([B({type:Boolean})],uu.prototype,`hour12`,void 0),lu([B({type:Number})],uu.prototype,`timeStep`,void 0),lu([V()],uu.prototype,`_listBoxVisible`,void 0),lu([V()],uu.prototype,`_valueLabel`,void 0),lu([V()],uu.prototype,`_doFocusListBox`,void 0),lu([V()],uu.prototype,`_hours`,void 0),lu([V()],uu.prototype,`_minutes`,void 0),lu([V()],uu.prototype,`_suffix`,void 0),lu([V()],uu.prototype,`_inputFocusEl`,void 0),lu([H(`.kuc-base-time-1-26-0__group__hours`)],uu.prototype,`_hoursEl`,void 0),lu([H(`.kuc-base-time-1-26-0__group__minutes`)],uu.prototype,`_minutesEl`,void 0),lu([H(`.kuc-base-time-1-26-0__group__suffix`)],uu.prototype,`_suffixEl`,void 0),lu([H(`.kuc-base-time-1-26-0__assistive-text`)],uu.prototype,`_toggleEl`,void 0),lu([H(`.kuc-base-time-1-26-0__group`)],uu.prototype,`_inputGroupEl`,void 0),lu([H(`.kuc-base-time-1-26-0__group__listbox`)],uu.prototype,`_listboxEl`,void 0),lu([H(`.kuc-base-datetime-listbox-1-26-0__listbox`)],uu.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-time-1-26-0`)||(J(cu),window.customElements.define(`kuc-base-time-1-26-0`,uu));var du=`
kuc-datetime-picker-1-26-0,
kuc-datetime-picker-1-26-0 *,
kuc-datetime-picker-1-26-0:lang(en),
kuc-datetime-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-26-0:lang(ja),
kuc-datetime-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker-1-26-0:lang(zh),
kuc-datetime-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker-1-26-0:lang(zh-TW),
kuc-datetime-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker-1-26-0:lang(es),
kuc-datetime-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-26-0 {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker-1-26-0[hidden] {
  display: none;
}
.kuc-datetime-picker-1-26-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker-1-26-0__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker-1-26-0__group__inputs--time {
  position: relative;
}
.kuc-datetime-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__hours,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__minutes,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`,fu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pu;(()=>{if(pu=window.customElements.get(`kuc-datetime-picker-1-26-0`),pu)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorText=``,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._timeBlurBaseline=``,this._dateBlurBaseline=``,this._inputMax=``,this._inputMin=``,this._timeConverted=``,this._errorInvalidTime=``,this._inputTimeStep=30,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return(e.has(`max`)||e.has(`min`))&&!this._checkAndUpdateMaxMinProperty()||e.has(`timeStep`)&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=qc(this._dateAndTime.date),!(fl(this._dateAndTime.date,this._dateAndTime.time)&&ul(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(cc.VALUE),!1):(this._timeConverted=Jc(this._dateAndTime.time.slice(0,5)),e.has(`value`)&&(vc(this._timeConverted,this._inputMin)<0||vc(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(ic),!1):!0)}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e,t;if(this.max===void 0||this.max===``)t=sc;else{if(!cl(this.max))return this.throwErrorAfterUpdateComplete(cc.MAX),!1;t=this.max=Jc(this.max)}if(this.min===void 0||this.min===``)e=oc;else{if(!cl(this.min))return this.throwErrorAfterUpdateComplete(cc.MIN),!1;e=this.min=Jc(this.min)}return vc(t,e)<0?(this.throwErrorAfterUpdateComplete(rc),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return vl(this.timeStep)?ll(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(cc.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete(ac),!1)}_updateValueChangeByUI(){let e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value=``);let t=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;this._errorText=t||n?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!t}_updateValueWhenSetter(){this._errorText=this.error,this.value===``||this.value===void 0?(this._previousTimeValue=``,this._errorFormat=``,this._errorInvalidTime=``):(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString())}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&ul(t)?Jc(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalidTime=``),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue=``,this._timeValue=``}else this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorInvalidTime=``}render(){return R`
        <fieldset
          class="kuc-datetime-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </legend>
          <div class="kuc-datetime-picker-1-26-0__group__inputs">
            <kuc-base-date-1-26-0
              class="kuc-datetime-picker-1-26-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
              @kuc:base-date-blur="${this._handleDateChangeOnBlur}"
              @kuc:base-date-focusin="${this._handleDateFocusIn}"
            ></kuc-base-date-1-26-0
            ><kuc-base-time-1-26-0
              class="kuc-datetime-picker-1-26-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
              @kuc:base-time-blur="${this._handleTimeChangeOnBlur}"
              @kuc:base-time-focusin="${this._handleTimeFocusIn}"
            ></kuc-base-time-1-26-0>
          </div>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-26-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):(t=e.detail.value,this._errorFormat=``),this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=``):this._errorInvalidTime=``,this._updateDateTimeValue(t,`time`)}_handleTimeFocusIn(e){e.stopPropagation(),this._timeBlurBaseline=this.value}_handleDateFocusIn(e){e.stopPropagation(),this._dateBlurBaseline=this.value}_handleTimeChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:this.value,oldValue:this._timeBlurBaseline,changedPart:`time`};q(this,`blur`,t)}_handleDateChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:this.value,oldValue:this._dateBlurBaseline,changedPart:`date`};q(this,`blur`,t)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),i=this._errorFormat||this._errorInvalidTime?void 0:r;this.value=i,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value=``);let a={value:this.value,oldValue:n,changedPart:t};q(this,`change`,a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:oc};let[i,a,o]=r.split(`:`);if(i===``||a===``||o===``)return{date:n,time:r};let s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}fu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),fu([B({type:String})],e.prototype,`error`,void 0),fu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),fu([B({type:String})],e.prototype,`label`,void 0),fu([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),fu([B({type:String})],e.prototype,`max`,void 0),fu([B({type:String})],e.prototype,`min`,void 0),fu([B({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),fu([B({type:Boolean})],e.prototype,`disabled`,void 0),fu([B({type:Boolean})],e.prototype,`hour12`,void 0),fu([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),fu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),fu([B({type:Number})],e.prototype,`timeStep`,void 0),fu([H(`.kuc-base-date-1-26-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-datetime-picker-1-26-0`,e),J(du),pu=e})();var mu=pu,hu=`
  kuc-dialog-1-26-0,
  kuc-dialog-1-26-0 *,
  kuc-dialog-1-26-0:lang(en),
  kuc-dialog-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-26-0:lang(es),
  kuc-dialog-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-26-0:lang(ja),
  kuc-dialog-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dialog-1-26-0:lang(zh),
  kuc-dialog-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dialog-1-26-0:lang(zh-TW),
  kuc-dialog-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }

  kuc-dialog-1-26-0 {
    display: none;
  }

  kuc-dialog-1-26-0[opened] {
    display: block;
  }

  .kuc-dialog-1-26-0__dialog {
    min-width: 400px;
    max-width: var(--kuc-dialog-max-width, 600px);
    width: max-content;
    font-size: 20px;
    background-color: #ffffff;
    position: fixed;
    line-height: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  
  .kuc-dialog-1-26-0__dialog:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-26-0__dialog__header {
    min-height: 64px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    justify-content: space-between;
  }

  .kuc-dialog-1-26-0__dialog__header__title {
    font-size: var(--kuc-dialog-header-font-size, 24px);
    color: var(--kuc-dialog-header-color);
    padding: 0 24px;
    align-self: center;
    overflow-wrap: anywhere;
    word-break: normal;
    font-weight: 400;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button {
    width: 48px;
    height: 48px;
    border: none;
    background-color: #ffffff;
    margin-right: 12px;
    margin-top: 11px;
    cursor: pointer;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button-svg {
    vertical-align: middle;
  }

  .kuc-dialog-1-26-0__dialog__content {
    border-bottom: #e3e7e8 solid 1px;
    background-color: #f7f9fa;
    padding: 24px;
    display: flex;
    overflow: auto;
  }

  .kuc-dialog-1-26-0__dialog__content__content {
    line-height: 1.2;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-26-0__dialog__content__icon-info,
  .kuc-dialog-1-26-0__dialog__content__icon-success,
  .kuc-dialog-1-26-0__dialog__content__icon-error,
  .kuc-dialog-1-26-0__dialog__content__icon-warning,
  .kuc-dialog-1-26-0__dialog__content__icon-question {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }

  .kuc-dialog-1-26-0__dialog__footer {
    padding: 24px;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-26-0__dialog__footer[hidden] {
    display: none;
  }

  .kuc-dialog-1-26-0__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    z-index: 9999;
  }

  .kuc--has-dialog {
    overflow: hidden;
  }

  .kuc--has-dialog .kuc-dialog-1-26-0__dialog {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
  }
`,gu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_u;(()=>{if(_u=window.customElements.get(`kuc-dialog-1-26-0`),_u)return;class e extends K{constructor(e){super(),this.className=``,this.icon=``,this.id=``,this.title=``,this.content=``,this.footer=``,this.header=``,this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content=``,this._footer=``,this._header=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}_handleFocusFirstDummy(){let e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){e.key===`Escape`&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return z`
        <svg
          class="kuc-dialog-1-26-0__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case`info`:return z`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case`success`:return z`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case`error`:return z`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case`warning`:return z`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case`question`:return z`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return``}}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(U.CONTAINER.INVALID),!1}return!0}update(e){e.has(`content`)&&(this._content=this.content&&yl(this.content)?Kc(this.content):this.content),e.has(`footer`)&&(this._footer=this.footer&&yl(this.footer)?Kc(this.footer):this.footer),(e.has(`header`)||e.has(`title`))&&(this._header=this.header!==null&&this.header!==void 0&&this.header!==``?yl(this.header)?Kc(this.header):this.header:this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.container.classList.add(`kuc--has-dialog`),this.performUpdate(),this.setAttribute(`opened`,``),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this._close(),q(this,`close`)}_close(){this._isOpened=!1,document.getElementsByTagName(`body`)[0].classList.remove(`kuc--has-dialog`),this.removeAttribute(`opened`),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return R`
        <span
          class="kuc-dialog-1-26-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-26-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-26-0__dialog__header">
            <h2
              class="kuc-dialog-1-26-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this._header}
            </h2>
            <button
              class="kuc-dialog-1-26-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-26-0__dialog__content">
            <div class="kuc-dialog-1-26-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-26-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div
            class="kuc-dialog-1-26-0__dialog__footer"
            ?hidden="${!this.footerVisible}"
          >
            ${this._footer}
          </div>
        </div>
        <span
          class="kuc-dialog-1-26-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-26-0__mask"></div>
      `}}gu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),gu([B({type:String})],e.prototype,`icon`,void 0),gu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),gu([B({type:String})],e.prototype,`title`,void 0),gu([B()],e.prototype,`content`,void 0),gu([B()],e.prototype,`footer`,void 0),gu([B()],e.prototype,`header`,void 0),gu([B()],e.prototype,`container`,void 0),gu([B({type:Boolean})],e.prototype,`footerVisible`,void 0),gu([V()],e.prototype,`_isOpened`,void 0),gu([H(`.kuc-dialog-1-26-0__dialog`)],e.prototype,`_dialogEl`,void 0),gu([Vs(`a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']`)],e.prototype,`_focusableElements`,void 0),window.customElements.define(`kuc-dialog-1-26-0`,e),J(hu),_u=e})();var vu=`
  kuc-dropdown-1-26-0,
  kuc-dropdown-1-26-0 *,
  kuc-dropdown-1-26-0:lang(en),
  kuc-dropdown-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-26-0:lang(es),
  kuc-dropdown-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-26-0:lang(ja),
  kuc-dropdown-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dropdown-1-26-0:lang(zh),
  kuc-dropdown-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown-1-26-0:lang(zh-TW),
  kuc-dropdown-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-dropdown-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: var(--kuc-dropdown-toggle-width, 180px);
    min-width: var(--kuc-dropdown-toggle-width, 180px);
    line-height: 1.5;
  }
  kuc-dropdown-1-26-0[hidden] {
    display: none;
  }
  .kuc-dropdown-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown-1-26-0__group__toggle {
    height: var(--kuc-dropdown-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 1px 1px 1px #ffffff inset;
    border: 1px solid #e3e7e8;
    color: var(--kuc-dropdown-toggle-color, #3498db);
    background-color: #f7f9fa;
    padding: 0 0 0 24px;
    display: grid;
    grid: auto / auto-flow;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: var(--kuc-dropdown-toggle-width, 100%);
    cursor: pointer;
  }
  .kuc-dropdown-1-26-0__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown-1-26-0__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown-1-26-0__group__toggle__selected-item-label {
    font-size: var(--kuc-dropdown-font-size, 14px);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown-1-26-0__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown-1-26-0__group__select-menu {
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style: none;
    box-sizing: border-box;
    border: none;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: var(--kuc-dropdown-menu-color, #333333);
    font-size: var(--kuc-dropdown-font-size, 14px);
  }
  .kuc-dropdown-1-26-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-dropdown-menu-color-selected, #3498db);
  }
  .kuc-dropdown-1-26-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item--disabled,
  .kuc-dropdown-1-26-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
`,yu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bu;(()=>{if(bu=window.customElements.get(`kuc-dropdown-1-26-0`),bu)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS=`kuc-dropdown-1-26-0__group__select-menu__item--disabled`,this._hasValueInItems=!1,this._scrollTargets=[],this._GUID=Y();let t=X(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e,t));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return z`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!vl(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}render(){return R`
        <div class="kuc-dropdown-1-26-0__group">
          <div
            class="kuc-dropdown-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <button
            class="kuc-dropdown-1-26-0__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-26-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-26-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            popover="manual"
            class="kuc-dropdown-1-26-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}async updated(){await this.updateComplete,this._selectorVisible&&this._scrollToView()}_handleMouseDownDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target),n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._actionUpdateValue(n,r)}_handleMouseOverDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}let{value:t,selectedIndex:n}=this._getInfoHighlightItem();if(t===null)break;this._actionUpdateValue(t,n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getInfoHighlightItem(){let e=this._highlightItemEl;return e===null?{value:null,selectedIndex:`-1`}:{value:e.getAttribute(`value`),selectedIndex:e.dataset.index||`0`}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,this._menuEl.showPopover(),this._menuEl&&this._buttonEl&&(this._setMenuPosition(),this._attachListeners(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)||this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)))}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._buttonEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionToggleMenu(){this.items.length!==0&&(this._selectorVisible?this._actionHideMenu():this._actionShowMenu())}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-dropdown-1-26-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-dropdown-1-26-0__group__select-menu__highlight`)}_actionUpdateValue(e,t){let n=parseInt(t,10);if(this.value===e&&this.selectedIndex===n)return;let r={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,q(this,`change`,r)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute(`aria-activedescendant`)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-dropdown-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){!this._menuEl||!this._buttonEl?this._detachListeners():(this._setMenuPositionAboveOrBelow(this._menuEl,this._buttonEl),this._setMenuPositionLeftOrRight(this._menuEl,this._buttonEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop))}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return R`
        <li
          class="kuc-dropdown-1-26-0__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:``}"
          role="option"
          tabindex="${!e.disabled&&n?`0`:`-1`}"
          aria-selected="${n?`true`:`false`}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${e.disabled?null:this._handleMouseDownDropdownItem}"
          @mouseover="${e.disabled?null:this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(n,!!e.disabled)}
          ${e.label===void 0?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e,t){return z`
      ${e?z`<svg
          class="kuc-dropdown-1-26-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?`#888888`:`#3498db`}"/>
        </svg>`:``}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-dropdown-1-26-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}yu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),yu([B({type:String})],e.prototype,`error`,void 0),yu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),yu([B({type:String})],e.prototype,`label`,void 0),yu([B({type:String})],e.prototype,`value`,void 0),yu([B({type:Number})],e.prototype,`selectedIndex`,void 0),yu([B({type:Boolean})],e.prototype,`disabled`,void 0),yu([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),yu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),yu([B({type:Array})],e.prototype,`items`,void 0),yu([V()],e.prototype,`_selectorVisible`,void 0),yu([H(`.kuc-dropdown-1-26-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),yu([Vs(`.kuc-dropdown-1-26-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),yu([H(`button.kuc-dropdown-1-26-0__group__toggle`)],e.prototype,`_buttonEl`,void 0),yu([H(`.kuc-dropdown-1-26-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),yu([H(`.kuc-dropdown-1-26-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),yu([H(`.kuc-dropdown-1-26-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),yu([H(`.kuc-dropdown-1-26-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),yu([Vs(`.kuc-dropdown-1-26-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),window.customElements.define(`kuc-dropdown-1-26-0`,e),J(vu),bu=e})();var xu=`
  kuc-field-group-1-26-0 .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text,
  kuc-field-group-1-26-0:lang(en) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-26-0:lang(es) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-26-0:lang(ja) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group-1-26-0:lang(zh) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group-1-26-0:lang(zh-TW) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group-1-26-0 {
    display: inline-table;
  }
  kuc-field-group-1-26-0[hidden] {
    display: none;
  }
  .kuc-field-group-1-26-0__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group-1-26-0__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group-1-26-0__group__toggle {
    display: flex;
    align-items: center;
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0px 12px 8px;
    min-height: 34px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled .kuc-base-label-1-26-0__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-size: 16px;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group-1-26-0__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group-1-26-0__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group-1-26-0__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`,Su=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cu=517,wu;(()=>{if(wu=window.customElements.get(`kuc-field-group-1-26-0`),wu)return;class e extends K{constructor(e){super(),this.className=``,this.content=``,this.id=``,this.label=``,this.disabled=!1,this.expanded=!1,this.visible=!0,this._content=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}update(e){e.has(`content`)&&(this._content=this.content&&yl(this.content)?Kc(this.content):this.content),super.update(e)}render(){return R`
        <div
          class="kuc-field-group-1-26-0__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group-1-26-0__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label-1-26-0>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group-1-26-0__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has(`content`)&&(this._groupEl.style.minWidth=`517px`,requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;let e=this._bodyEl.hasAttribute(`hidden`);e&&this._bodyEl.removeAttribute(`hidden`);let t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute(`hidden`,``),t<=Cu||(this._groupEl.style.minWidth=t+`px`)}_getSvgTemplate(){return this.expanded?R`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`:R`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){let e=this._bodyEl.getBoundingClientRect().width;e>Cu&&(this._groupEl.style.minWidth=e+`px`)}else this._groupEl.style.minWidth=`517px`;this.expanded=!this.expanded;let t={expanded:this.expanded};q(this,`change`,t)}}Su([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Su([B()],e.prototype,`content`,void 0),Su([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Su([B({type:String})],e.prototype,`label`,void 0),Su([B({type:Boolean})],e.prototype,`disabled`,void 0),Su([B({type:Boolean})],e.prototype,`expanded`,void 0),Su([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Su([H(`.kuc-field-group-1-26-0__group`)],e.prototype,`_groupEl`,void 0),Su([H(`.kuc-field-group-1-26-0__group__body`)],e.prototype,`_bodyEl`,void 0),Su([H(`.kuc-field-group-1-26-0__group__toggle`)],e.prototype,`_toggle`,void 0),window.customElements.define(`kuc-field-group-1-26-0`,e),J(xu),wu=e})();var Tu=`
  kuc-multi-choice-1-26-0,
  kuc-multi-choice-1-26-0 *,
  kuc-multi-choice-1-26-0:lang(en),
  kuc-multi-choice-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(es),
  kuc-multi-choice-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(ja),
  kuc-multi-choice-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(zh),
  kuc-multi-choice-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(zh-TW),
  kuc-multi-choice-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-multi-choice-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: var(--kuc-multi-choice-menu-color, #333333);
    width: var(--kuc-multi-choice-menu-width, 180px);
    min-width: var(--kuc-multi-choice-menu-width, 180px);
    line-height: 1.5;
  }
  kuc-multi-choice-1-26-0[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-26-0__group__menu {
    position: relative;
    background: #ffffff;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
    padding: 6px 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: var(--kuc-multi-choice-menu-height, auto);
    max-height: var(--kuc-multi-choice-menu-height, 134px);
    width: var(--kuc-multi-choice-menu-width, auto);
    font-size: var(--kuc-multi-choice-menu-font-size, 14px);
  }
  .kuc-multi-choice-1-26-0__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice-1-26-0__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice-1-26-0__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-26-0__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice-1-26-0__group__menu__item--disabled {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-multi-choice-1-26-0__group__menu__item[aria-selected="true"] {
    color: var(--kuc-multi-choice-menu-color-selected, #3498db);
    padding-left: 32px;
  }
  .kuc-multi-choice-1-26-0__group__menu__item--disabled[aria-selected="true"] {
    color: #888888;
    padding-left: 32px;
  }
  .kuc-multi-choice-1-26-0__group__menu[disabled]
    .kuc-multi-choice-1-26-0__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice-1-26-0__group__menu__highlight[role="option"] {
    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);
    cursor: pointer;
  }
`,Eu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Du;(()=>{if(Du=window.customElements.get(`kuc-multi-choice-1-26-0`),Du)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS=`kuc-multi-choice-1-26-0__group__menu__item--disabled`,this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!Z(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!Z(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!Z(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return R`
        <div class="kuc-multi-choice-1-26-0__group">
          <div
            class="kuc-multi-choice-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-multi-choice-1-26-0__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?`-1`:`0`}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map((e,t)=>this._getMenuItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;let t=e.target,n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._handleChangeValue(n,r)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains(`kuc-multi-choice-1-26-0__group__menu__highlight`)&&e.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`)});let t=e.currentTarget;t.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break;case`Spacebar`:case` `:e.preventDefault(),this._actionUpdateValue()}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);t||(e.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);t||(e.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`)})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains(`kuc-multi-choice-1-26-0__group__menu__highlight`)){let t=e.getAttribute(`value`),n=e.dataset.index||`0`;this._handleChangeValue(t,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,t){return z`
        ${t?z`<svg
            class="kuc-multi-choice-1-26-0__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?`#888888`:`#3498db`}"
            />
          </svg>`:``}`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getMenuItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return R`
        <div
          class="kuc-multi-choice-1-26-0__group__menu__item ${r?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${n}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${r?null:this._handleMouseDownMultiChoiceItem}"
          @mouseover="${r?null:this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${r?null:this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(r,n)}
          ${e.label===void 0?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute(`aria-activedescendant`,e):this._menuEl.removeAttribute(`aria-activedescendant`)}_handleChangeValue(e,t){let n=this.value?[...this.value]:this.value,r=this._getNewValueMapping(e,t),i=this.items.map(e=>e.value),a=Object.values(r).filter(e=>i.indexOf(e)>-1);if(a===n)return;let o=Object.keys(r).map(e=>parseInt(e,10));this.value=a,this.selectedIndex=o;let s={oldValue:n,value:a};q(this,`change`,s)}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}}Eu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Eu([B({type:String})],e.prototype,`error`,void 0),Eu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Eu([B({type:String})],e.prototype,`label`,void 0),Eu([B({type:Boolean})],e.prototype,`disabled`,void 0),Eu([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Eu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Eu([B({type:Array})],e.prototype,`items`,void 0),Eu([B({type:Array})],e.prototype,`selectedIndex`,void 0),Eu([B({type:Array})],e.prototype,`value`,void 0),Eu([H(`.kuc-multi-choice-1-26-0__group__menu`)],e.prototype,`_menuEl`,void 0),Eu([Vs(`.kuc-multi-choice-1-26-0__group__menu__item`)],e.prototype,`_itemsEl`,void 0),Eu([H(`.kuc-multi-choice-1-26-0__group__menu__item`)],e.prototype,`_firstItemEl`,void 0),Eu([H(`.kuc-multi-choice-1-26-0__group__menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Eu([H(`.kuc-multi-choice-1-26-0__group__menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),Eu([V()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-multi-choice-1-26-0`,e),J(Tu),Du=e})();var Ou=`
  kuc-notification-1-26-0,
  kuc-notification-1-26-0 *,
  kuc-notification-1-26-0:lang(en),
  kuc-notification-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification-1-26-0:lang(es),
  kuc-notification-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification-1-26-0:lang(ja),
  kuc-notification-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification-1-26-0:lang(zh),
  kuc-notification-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification-1-26-0:lang(zh-TW),
  kuc-notification-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification-1-26-0 {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification-1-26-0 {
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1.5;
    z-index: 10000;
    margin-top: 16px;
    pointer-events: none;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .kuc-notification-fadein-1-26-0 {
    animation-name: kuc-notification-fade-in-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout-1-26-0 {
    animation-name: kuc-notification-fade-out-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-1-26-0__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-26-0__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification-1-26-0__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification-1-26-0__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-26-0__notification__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--kuc-notification-font-size, 16px);
    color: var(--kuc-notification-color, #ffffff);
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification-1-26-0__notification__title--html {
    white-space: normal;
    max-width: 500px;
  }
  .kuc-notification-1-26-0__notification__close-button {
    position: absolute;
    top: 4px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in-1-26-0 {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out-1-26-0 {
    0% {
      visibility: visible;
      top: 0;
    }
    10% {
      visibility: visible;
      top: 14px;
    }
    100% {
      top: -56px;
    }
  }
`,ku=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Au;(()=>{if(Au=window.customElements.get(`kuc-notification-1-26-0`),Au)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`danger`,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=X(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(U.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?yl(this.content)?R`<div
              class="kuc-notification-1-26-0__notification__title--html"
            >
              ${Kc(this.content)}
            </div>`:this.content:this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case`info`:case`success`:return this.type;default:return`danger`}}_getCloseButtonSvgTemplate(){return z`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification-1-26-0__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!Number.isFinite(this.duration)||this.duration<0||(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-notification-fadeout-1-26-0`),this.classList.add(`kuc-notification-fadein-1-26-0`),this._isOpened=!0,this._setAutoCloseTimer()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}_close(){this._isOpened=!1,this.classList.remove(`kuc-notification-fadein-1-26-0`),this.classList.add(`kuc-notification-fadeout-1-26-0`),this._clearAutoCloseTimer()}close(){this._close(),q(this,`close`)}render(){return R`
        <div
          class="kuc-notification-1-26-0__notification kuc-notification-1-26-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-26-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!--
          -->${this._content}</pre>
          <button
            class="kuc-notification-1-26-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}ku([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ku([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ku([B({type:String})],e.prototype,`text`,void 0),ku([B({type:String})],e.prototype,`type`,void 0),ku([B({type:Number})],e.prototype,`duration`,void 0),ku([B()],e.prototype,`container`,void 0),ku([B()],e.prototype,`content`,void 0),ku([V()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-notification-1-26-0`,e),J(Ou),Au=e})();var ju=`
  kuc-radio-button-1-26-0,
  kuc-radio-button-1-26-0 *,
  kuc-radio-button-1-26-0:lang(en),
  kuc-radio-button-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-26-0:lang(es),
  kuc-radio-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-26-0:lang(ja),
  kuc-radio-button-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-radio-button-1-26-0:lang(zh),
  kuc-radio-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button-1-26-0:lang(zh-TW),
  kuc-radio-button-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-radio-button-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    width: var(--kuc-radio-button-menu-width, 239px);
    min-width: var(--kuc-radio-button-menu-width, 239px);
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button-1-26-0[hidden] {
    display: none;
  }

  .kuc-radio-button-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button-1-26-0__group__select-menu {
    display: flex;
    align-items: flex-start;
    width: var(--kuc-radio-button-menu-width, 100%);
    height: var(--kuc-radio-button-menu-height);
    color: var(--kuc-radio-button-menu-color, #333333);
    font-size: var(--kuc-radio-button-menu-font-size, 14px);
  }

  .kuc-radio-button-1-26-0__group__select-menu[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button-1-26-0__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item {
    margin-left: 4px;
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input:hover
    + .kuc-radio-button-1-26-0__group__select-menu__item__label {
    color: var(--kuc-radio-button-menu-color-hover, #666666);
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-radio-button-1-26-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.2;
    min-height: 24px;
  }
`,Mu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nu;(()=>{if(Nu=window.customElements.get(`kuc-radio-button-1-26-0`),Nu)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!vl(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){let n=this.items[t];n.disabled||(this.selectedIndex===t&&n.value===this.value||e===-1)&&(e=t)}return e}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,q(this,`change`,a)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getRadioIconSvgTemplate(e,t){return z`
    <svg
      class="kuc-radio-button-1-26-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?z`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?`#e3e7e8`:`#3498db`}"/>`:``}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled,i=e.value===void 0?``:e.value,a=t===this._findItemToFocus()?`0`:`-1`;return R`
        <div
          class="kuc-radio-button-1-26-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${n?`true`:`false`}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${i}"
            tabindex="${a}"
            aria-required="${this.requiredIcon}"
            ?disabled="${r}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-26-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return R`
        <div
          class="kuc-radio-button-1-26-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-26-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-radio-button-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Mu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Mu([B({type:String})],e.prototype,`error`,void 0),Mu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Mu([B({type:String})],e.prototype,`itemLayout`,void 0),Mu([B({type:String})],e.prototype,`label`,void 0),Mu([B({type:String})],e.prototype,`value`,void 0),Mu([B({type:Number})],e.prototype,`selectedIndex`,void 0),Mu([B({type:Boolean})],e.prototype,`borderVisible`,void 0),Mu([B({type:Boolean})],e.prototype,`disabled`,void 0),Mu([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Mu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Mu([B({type:Array})],e.prototype,`items`,void 0),Mu([Vs(`.kuc-radio-button-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-radio-button-1-26-0`,e),J(ju),Nu=e})();var Pu=`
  .kuc-base-pagination-1-26-0__group {
    margin-top: 10px;
  }
  .kuc-base-pagination-1-26-0__group button {
    cursor: pointer;
  }
  .kuc-base-pagination-1-26-0__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-26-0__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-26-0__group__pager-next:hover svg path,
  .kuc-base-pagination-1-26-0__group__pager-prev:hover svg path,
  .kuc-base-pagination-1-26-0__group__pager-next:focus-visible svg path,
  .kuc-base-pagination-1-26-0__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager--focus,
  .kuc-base-pagination-1-26-0__group__pager-next:focus-visible,
  .kuc-base-pagination-1-26-0__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager--horver svg path {
    fill: #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager-next svg,
  .kuc-base-pagination-1-26-0__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination-1-26-0__group__pager-disable {
    visibility: hidden;
  }
  .kuc-base-pagination-1-26-0__group__pager-current {
    display: inline-block;
    height: 23px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 14px;
    color: #333333;
  }
`,Fu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Iu;(()=>{if(Iu=window.customElements.get(`kuc-base-pagination-1-26-0`),Iu)return;class e extends K{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return R`
        <div class="kuc-base-pagination-1-26-0__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination-1-26-0__group__pager-prev${this.isPrev?``:` kuc-base-pagination-1-26-0__group__pager-disable`}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination-1-26-0__group__pager-next${this.isNext?``:` kuc-base-pagination-1-26-0__group__pager-disable`}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `}_handleClickPrevButton(e){e.stopPropagation(),q(this,`kuc:pagination-click-prev`)}_handleFocusPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleBlurPrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleClickNextButton(e){e.stopPropagation(),q(this,`kuc:pagination-click-next`)}_handleFocusNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleBlurNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleMouseOverNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--horver`)}_getPrevButtonSvgTemplate(){return z`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return z`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `}_getCurrentPageNumberTemplate(){let e=this._createCurrentPageInfo();return R`<span class="kuc-base-pagination-1-26-0__group__pager-current"
        >${`${e.firstNum} - ${e.lastNum} / ${this.total}`}</span
      >`}_createCurrentPageInfo(){let e=(this.pagePosition-1)*this.rowsPerPage+1,t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}Fu([B({type:Number})],e.prototype,`pagePosition`,void 0),Fu([B({type:Number})],e.prototype,`rowsPerPage`,void 0),Fu([B({type:Number})],e.prototype,`total`,void 0),Fu([B({type:Boolean})],e.prototype,`isNext`,void 0),Fu([B({type:Boolean})],e.prototype,`isPrev`,void 0),Fu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Fu([H(`.kuc-base-pagination-1-26-0__group__pager-prev`)],e.prototype,`_prevButtonEl`,void 0),Fu([H(`.kuc-base-pagination-1-26-0__group__pager-next`)],e.prototype,`_nextButtonEl`,void 0),window.customElements.define(`kuc-base-pagination-1-26-0`,e),J(Pu),Iu=e})();var Lu=`
  kuc-readonly-table-1-26-0 ,
  kuc-readonly-table-1-26-0  *,
  kuc-readonly-table-1-26-0:lang(en),
  kuc-readonly-table-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(es),
  kuc-readonly-table-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(ja),
  kuc-readonly-table-1-26-0:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(zh),
  kuc-readonly-table-1-26-0:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(zh-TW),
  kuc-readonly-table-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-readonly-table-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table-1-26-0[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table-1-26-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--first-visible:hover {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--last-visible:hover {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--first-visible:focus-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--last-visible:focus-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc.kuc-readonly-table-1-26-0__table__header__cell--first-visible,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc.kuc-readonly-table-1-26-0__table__header__cell--first-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc.kuc-readonly-table-1-26-0__table__header__cell--last-visible,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc.kuc-readonly-table-1-26-0__table__header__cell--last-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table-1-26-0__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table-1-26-0__table__header__cell {
    background-color: var(--kuc-readonly-table-header-background-color, #3498db);
    color: var(--kuc-readonly-table-header-color, #ffffff);
    height: var(--kuc-readonly-table-header-height, 40px);
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: var(--kuc-readonly-table-header-font-size, 12px);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--html {
    white-space: normal;
    overflow: unset;
  }
  .kuc-readonly-table-1-26-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__title {
    flex: 1;
    min-width: 0;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__title--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__sort-icon {
    flex-shrink: 0;
    margin-left: 4px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .kuc-readonly-table-1-26-0__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table-1-26-0__table__body>.kuc-readonly-table-1-26-0__table__body__row:first-child>.kuc-readonly-table-1-26-0__table__body__row__cell-data {
    border-top-width: 0px;
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell,
  .kuc-readonly-table-1-26-0__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table-1-26-0__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table-1-26-0__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort {
    cursor: pointer;
    user-select: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort:hover {
    background-color: var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort:focus-visible {
    outline: none;
    background-color: var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc {
    background-color: var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
`,Ru=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zu;(()=>{if(zu=window.customElements.get(`kuc-readonly-table-1-26-0`),zu)return;class e extends K{constructor(e){if(super(),this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;let t=X(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`columns`)&&!Z(this.columns)?(this.throwErrorAfterUpdateComplete(U.COLUMNS.IS_NOT_ARRAY),!1):e.has(`data`)&&!Z(this.data)?(this.throwErrorAfterUpdateComplete(U.DATA.IS_NOT_ARRAY),!1):e.has(`rowsPerPage`)&&!ml(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(U.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has(`columns`)&&(this._columnOrder=[],this.columns.map(e=>this._columnOrder.push(e.field?e.field:``))),e.has(`rowsPerPage`)&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){let e=this._createDisplayData();return!this.columns||this.columns.length<1?R`
            <table class="kuc-readonly-table-1-26-0__table">
              <caption
                class="kuc-readonly-table-1-26-0__table__label kuc-readonly-table-1-26-0__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:R`
            <table class="kuc-readonly-table-1-26-0__table">
              <caption
                class="kuc-readonly-table-1-26-0__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table-1-26-0__table__header">
                <tr>
                  ${this.columns.map((e,t)=>this._getColumnsTemplate(e,t))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table-1-26-0__table__body">
                ${e.map((e,t)=>this._getDataTemplate(e,t))}
              </tbody>
            </table>
            <kuc-base-pagination-1-26-0
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination-1-26-0>
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;let t=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((e,r)=>r>=t-1&&r<=n-1)}_sortData(e,t,n){return[...e].sort((e,r)=>{let i=e[t],a=r[t],o=yl(i),s=yl(a);if(o&&s)return 0;if(o)return 1;if(s)return-1;if(i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;if(typeof i==`number`&&typeof a==`number`)return n===`asc`?i-a:a-i;if(typeof i==`string`&&typeof a==`string`&&ul(i)&&ul(a)){let e=new Date(i),t=new Date(a);if(!isNaN(e.getTime())&&!isNaN(t.getTime()))return n===`asc`?e.getTime()-t.getTime():t.getTime()-e.getTime()}let c=String(i),l=String(a),u=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});return n===`asc`?u.compare(c,l):u.compare(l,c)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._sortFields(t))}_sortFields(e){let t=this._columnOrder.indexOf(e);t<0||this.columns[t].sort&&(this._sortField===e?this._sortDirection=this._sortDirection===`asc`?`desc`:`asc`:(this._sortField=e,this._sortDirection=`asc`),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){let n=this._customWidthVariables(t),r=e.title?yl(e.title):!1,i=e.field||``,a=e.sort===!0,o=this._sortField===i,s=this.columns.map((e,t)=>e.visible===!1?-1:t).filter(e=>e!==-1),c=t===s[0],l=t===s[s.length-1],u=o?` kuc-readonly-table-1-26-0__table__header__cell--sorted-${this._sortDirection}`:``;return R`
        <th
          class="kuc-readonly-table-1-26-0__table__header__cell${r?` kuc-readonly-table-1-26-0__table__header__cell--html`:``}${a?` kuc-readonly-table-1-26-0__table__header__cell--sort`:``}${u}${c?` kuc-readonly-table-1-26-0__table__header__cell--first-visible`:``}${l?` kuc-readonly-table-1-26-0__table__header__cell--last-visible`:``}"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n};"
          @click="${a?()=>this._handleClickHeader(i):null}"
          tabindex="${a?0:-1}"
          aria-sort="${o?this._getSortDescription(this._sortDirection):`none`}"
          @keydown="${a?e=>this._handleKeyDownHeader(e,i):null}"
        >
          <div class="kuc-readonly-table-1-26-0__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table-1-26-0__table__header__cell__wrapper__title${r?` kuc-readonly-table-1-26-0__table__header__cell__wrapper__title--html`:``}"
            >
              ${r?Kc(e.title):e.title??``}
            </div>
            ${a&&o?R`<div
                    class="kuc-readonly-table-1-26-0__table__header__cell__wrapper__sort-icon"
                  >
                    ${this._getSortSvgIcon(this._sortDirection)}
                  </div>`:``}
          </div>
        </th>
      `}_getSortDescription(e){return e===`desc`?`descending`:e===`asc`?`ascending`:`none`}_getSortSvgIcon(e){return e===`desc`?z`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e===`asc`?z`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:``}_getDataTemplate(e,t){return R`
        <tr
          class="kuc-readonly-table-1-26-0__table__body__row kuc-readonly-table-1-26-0__table__body__row-${t}"
        >
          ${this._columnOrder.map((t,n)=>{let r=this.columns[n].visible??!0,i=e[t];yl(i)&&(i=R`<div
                class="kuc-readonly-table-1-26-0__table__body__row__cell-data--html"
              >
                ${Kc(i)}
              </div>`);let a=this._customWidthVariables(n);return R`<td class="kuc-readonly-table-1-26-0__table__body__row__cell-data" ?hidden="${!r}" style="width: ${a}; min-width: ${a}; max-width: ${a}">${i}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){this._pagePosition<2||(ml(this.rowsPerPage)?--this._pagePosition:this.throwErrorAfterUpdateComplete(U.ROWS_PER_PAGE.INVALID))}_handleClickNextButton(e){ml(this.rowsPerPage)?this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1):this.throwErrorAfterUpdateComplete(U.ROWS_PER_PAGE.INVALID)}}Ru([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ru([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ru([B({type:String})],e.prototype,`label`,void 0),Ru([B({type:Array})],e.prototype,`columns`,void 0),Ru([B({type:Array})],e.prototype,`data`,void 0),Ru([B({type:Boolean})],e.prototype,`pagination`,void 0),Ru([B({type:Number})],e.prototype,`rowsPerPage`,void 0),Ru([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Ru([V()],e.prototype,`_pagePosition`,void 0),Ru([V()],e.prototype,`_columnOrder`,void 0),Ru([V()],e.prototype,`_sortField`,void 0),Ru([V()],e.prototype,`_sortDirection`,void 0),window.customElements.define(`kuc-readonly-table-1-26-0`,e),J(Lu),zu=e})();var Bu=`
  kuc-spinner-1-26-0,
  kuc-spinner-1-26-0 *,
  kuc-spinner-1-26-0:lang(en),
  kuc-spinner-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-26-0:lang(es),
  kuc-spinner-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-26-0:lang(ja),
  kuc-spinner-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-spinner-1-26-0:lang(zh),
  kuc-spinner-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-spinner-1-26-0:lang(zh-TW),
  kuc-spinner-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-spinner-1-26-0 {
    font-size: 14px;
    color: #333333;
  }
  .kuc-spinner-1-26-0__spinner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .kuc-spinner-1-26-0__spinner__loader {
    width: var(--kuc-spinner-loader-width, 50px);
    height: var(--kuc-spinner-loader-height, 50px);
    animation: rotate-loading 1s steps(12) infinite;
    fill: var(--kuc-spinner-loader-color, #99ccff);
  }
  .kuc-spinner-1-26-0__spinner__text {
    margin: 10px 0;
    font-size: var(--kuc-spinner-text-font-size, 14px);
    color: var(--kuc-spinner-text-color, #333333);
  }
  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  .kuc-spinner-1-26-0__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #666666;
    opacity: 0.6;
    z-index: 9999;
  }
  .kuc--has-spinner {
    overflow: hidden;
  }
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Vu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hu;(()=>{if(Hu=window.customElements.get(`kuc-spinner-1-26-0`),Hu)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.container=document.body,this._isOpened=!1;let t=X(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return z`
        <svg
          class="kuc-spinner-1-26-0__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){this._isValidContainerElement()?(this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains(`kuc--has-spinner`)||this.container.classList.add(`kuc--has-spinner`),this._isOpened=!0):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(U.CONTAINER.INVALID),!1}return!0}render(){return R`
        <div class="kuc-spinner-1-26-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-26-0__spinner__text${this.text?``:` visually-hidden`}"
          >
            ${this.text?this.text:`now loading…`}
          </div>
        </div>
        <div class="kuc-spinner-1-26-0__mask"></div>
      `}}Vu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Vu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Vu([B({type:String})],e.prototype,`text`,void 0),Vu([B()],e.prototype,`container`,void 0),window.customElements.define(`kuc-spinner-1-26-0`,e),J(Bu),Hu=e})();var Uu=`
  kuc-switch-1-26-0,
  kuc-switch-1-26-0 *,
  kuc-switch-1-26-0:lang(en),
  kuc-switch-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-switch-1-26-0:lang(es),
  kuc-switch-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-switch-1-26-0:lang(ja),
  kuc-switch-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-switch-1-26-0:lang(zh),
  kuc-switch-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-switch-1-26-0:lang(zh-TW),
  kuc-switch-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }

  kuc-switch-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-switch-1-26-0[hidden] {
    display: none;
  }

  .kuc-switch-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 6px;
  }

  .kuc-switch-1-26-0__group--top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-26-0__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-26-0__group--left {
    flex-direction: row;
  }

  .kuc-switch-1-26-0__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch-1-26-0__group__label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-switch-1-26-0__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch-1-26-0__group--top .kuc-switch-1-26-0__group__label,
  .kuc-switch-1-26-0__group--bottom .kuc-switch-1-26-0__group__label {
    padding-left: 3px;
  }

  .kuc-switch-1-26-0__group__label .kuc-base-label-1-26-0__text {
    font-size: 14px;
  }

  .kuc-switch-1-26-0__group__switch {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kuc-switch-1-26-0__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
  }

  .kuc-switch-1-26-0__group__switch__handle {
    position: absolute;
    width: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    height: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    left: 4px;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__handle {
    left: calc(100% - var(--kuc-switch-track-height, 28px) + 4px);
  }

  .kuc-switch-1-26-0__group__switch__track {
    position: relative;
    transition: background-color 0.2s ease-in-out, padding-left 0.2s ease-in-out, padding-right 0.2s ease-in-out;
    border-radius: calc(var(--kuc-switch-track-height, 28px) / 2);
    display: block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    background-color: #b5b5b5;
    padding-left: var(--kuc-switch-track-height, 28px);
    padding-right: 10px;
    box-sizing: border-box;
    min-width: 54px;
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track {
    background-color: #3498db;
    padding-left: 10px;
    padding-right: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch-1-26-0__group__switch__input:focus-visible ~ .kuc-switch-1-26-0__group__switch__track {
    outline: 1px solid #3498db;
    outline-offset: 1px;
  }

  .kuc-switch-1-26-0__group__switch__input:disabled ~ .kuc-switch-1-26-0__group__switch__track,
  .kuc-switch-1-26-0__group__switch__input:disabled ~ .kuc-switch-1-26-0__group__switch__handle {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch-1-26-0__group__switch__track__text {
    font-size: 14px;
    color: #ffffff;
    transition: margin-left 0.2s ease-in-out, margin-right 0.2s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
    text-align: center;
    display: block;
    height: var(--kuc-switch-track-height, 28px);
    line-height: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch-1-26-0__group__switch__track__text--unchecked {
    margin-top: calc(-1 * var(--kuc-switch-track-height, 28px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch-1-26-0__group__switch__track__text--checked {
    margin-left: calc(-100% - var(--kuc-switch-track-height, 28px));
    margin-right: calc(100% + var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track .kuc-switch-1-26-0__group__switch__track__text--unchecked {
    margin-left: calc(100% + var(--kuc-switch-track-height, 28px));
    margin-right: calc(-100% - var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track .kuc-switch-1-26-0__group__switch__track__text--checked {
    margin-left: 0;
    margin-right: 0;
  }
`,Wu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gu;(()=>{if(Gu=window.customElements.get(`kuc-switch-1-26-0`),Gu)return;class e extends K{constructor(e){super(),this.checkedText=``,this.className=``,this.id=``,this.label=``,this.labelPlacement=`left`,this.unCheckedText=``,this.checked=!1,this.disabled=!1,this.visible=!0,this._validLabelPlacement=[`top`,`bottom`,`left`,`right`],this._GUID=Y();let t=X(e);Object.assign(this,t)}render(){return R`
        <div
          class="kuc-switch-1-26-0__group kuc-switch-1-26-0__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch-1-26-0__group__label${this.disabled?` kuc-switch-1-26-0__group__label--disabled`:``}"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-switch-1-26-0__group__switch">
            <input
              class="kuc-switch-1-26-0__group__switch__input"
              id="${this._GUID}-input"
              type="checkbox"
              role="switch"
              aria-labelledby="${this._GUID}-group"
              aria-describedby="${this._GUID}-text-${this.checked?`checked`:`unchecked`}"
              .checked="${this.checked}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            />
            <label
              class="kuc-switch-1-26-0__group__switch__track"
              for="${this._GUID}-input"
            >
              <span
                id="${this._GUID}-text-checked"
                class="kuc-switch-1-26-0__group__switch__track__text kuc-switch-1-26-0__group__switch__track__text--checked"
                >${this.checkedText}</span
              >
              <span
                id="${this._GUID}-text-unchecked"
                class="kuc-switch-1-26-0__group__switch__track__text kuc-switch-1-26-0__group__switch__track__text--unchecked"
                >${this.unCheckedText}</span
              >
            </label>
            <label
              class="kuc-switch-1-26-0__group__switch__handle"
              for="${this._GUID}-input"
            ></label>
          </div>
        </div>
      `}_handleChangeInput(e){e.stopPropagation();let t=e.target;this.checked=t.checked;let n={checked:this.checked};q(this,`change`,n)}_getLabelPlacement(){return this._validLabelPlacement.includes(this.labelPlacement)?this.labelPlacement:`left`}}Wu([B({type:String})],e.prototype,`checkedText`,void 0),Wu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Wu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Wu([B({type:String})],e.prototype,`label`,void 0),Wu([B({type:String})],e.prototype,`labelPlacement`,void 0),Wu([B({type:String})],e.prototype,`unCheckedText`,void 0),Wu([B({type:Boolean})],e.prototype,`checked`,void 0),Wu([B({type:Boolean})],e.prototype,`disabled`,void 0),Wu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-switch-1-26-0`,e),J(Uu),Gu=e})();var Ku=`
  kuc-table-1-26-0,
  kuc-table-1-26-0 *,
  kuc-table-1-26-0:lang(en),
  kuc-table-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-table-1-26-0:lang(es),
  kuc-table-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-table-1-26-0:lang(ja),
  kuc-table-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-table-1-26-0:lang(zh),
  kuc-table-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-table-1-26-0:lang(zh-TW),
  kuc-table-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-table-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-table-1-26-0[hidden] {
    display: none;
  }
  kuc-table-1-26-0 kuc-* {
    line-height: 1;
  }
  .kuc-table-1-26-0__table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .kuc-table-1-26-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-table-header-background-color, #3498db);
    border-style: solid;
    border-right: 0;
  }
  .kuc-table-1-26-0__table__header[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__header__cell {
    box-sizing: border-box;
    font-size: var(--kuc-table-header-font-size, 12px);
    font-weight: 400;
    background-color: var(--kuc-table-header-background-color, #3498db);
    color: var(--kuc-table-header-color, #ffffff);
    height: var(--kuc-table-header-height, 40px);
    padding: 4px 8px;
    text-align: left;
    white-space: normal;
  }
  .kuc-table-1-26-0__table__header__cell-title {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }
  .kuc-table-1-26-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__header__cell .kuc-base-label-1-26-0__required-icon {
    font-size: var(--kuc-table-header-font-size, 20px);
    align-self: flex-start;
  }
  .kuc-table-1-26-0__table__header__cell__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    right: var(--kuc-table-action-button-right, 0px);
  }
  .kuc-table-1-26-0__table__header__cell__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    left: var(--kuc-table-action-button-left, 0px);
    z-index: 1;
  }
  .kuc-table-1-26-0__table__body__row__cell-data {
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: normal;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 8px 8px;
    vertical-align: top;
  }
  .kuc-table-1-26-0__table__body--no-header>.kuc-table-1-26-0__table__body__row:first-child>.kuc-table-1-26-0__table__body__row__cell-data {
    border-top-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__cell-data:not(.kuc-table-1-26-0__table__body__row__cell-data[hidden])~.kuc-table-1-26-0__table__body__row__cell-data {
    border-left-width: 0px;
  }
  .kuc-table-1-26-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__body__row__action {
    white-space: nowrap;
    background-color: var(--kuc-table-action-button-background-color, #f5f5f5);
    vertical-align: middle;
    position: sticky;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .kuc-table-1-26-0__table__body--no-header>.kuc-table-1-26-0__table__body__row:first-child>.kuc-table-1-26-0__table__body__row__action {
    border-top-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    right: var(--kuc-table-action-button-right, 0px);
    border-right-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    left: var(--kuc-table-action-button-left, 0px);
    border-left-width: 1px;
    z-index: 1;
  }
  .kuc-table-1-26-0__table__body__row__action button {
    display: inline-block;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid transparent;
    padding: 2px;
    cursor: pointer;
  }
  .kuc-table-1-26-0__table__body__row__action button[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__body__row__action-add {
    margin-left: 8px;
    margin-right: 8px;
  }
  .kuc-table-1-26-0__table__body__row__action-remove {
    margin-left: 4px;
    margin-right: 8px;
  }
  .kuc-table-1-26-0__table__body__row__action-add:focus,
  .kuc-table-1-26-0__table__body__row__action-remove:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  .kuc-table-1-26-0__table__body__row__action-remove:hover path {
    fill: #e74c3c;
  }
  .kuc-table-1-26-0__table__body__row__action[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table caption {
    text-align: left;
    margin-bottom: 6px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  .kuc-table-1-26-0__table .kuc-table-1-26-0__table__label--no-column {
    overflow-wrap: break-word;
  }
`,qu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ju=`kuc-table-1-26-0__table__body__row__cell-data`,Yu=`kuc-table-1-26-0__table__body__row`,Xu=`kuc-table-1-26-0__table__body__row__action`,Zu=`kuc-table-1-26-0__table__body__row__action-add`,Qu=`kuc-table-1-26-0__table__body__row__action-remove`,$u=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`,ed=`M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z`,td=`#3498db`,nd=`M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z`,rd=`#b5b5b5`,id;(()=>{if(id=window.customElements.get(`kuc-table-1-26-0`),id)return;class e extends K{constructor(e){if(super(),this.actionButtonPosition=`right`,this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition=`right`,!e)return;let t=X(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`data`)||e.has(`columns`)){let e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){e.has(`actionButtonPosition`)&&(this._actionButtonPosition=this.actionButtonPosition===`left`?`left`:`right`),e.has(`actionButton`)&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML=``)}render(){return!this.columns||this.columns.length<1?R`<table class="kuc-table-1-26-0__table">
            <caption
              class="kuc-table-1-26-0__table__label kuc-table-1-26-0__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:R`
            <table class="kuc-table-1-26-0__table">
              <caption class="kuc-table-1-26-0__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table-1-26-0__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table-1-26-0__table__body${this.headerVisible?``:` kuc-table-1-26-0__table__body--no-header`}"
              ></tbody>
            </table>
          `}updated(e){if(this.columns.length!==0)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return R`
        <tr>
          ${this._actionButtonPosition===`left`?this._getActionButtonHeaderTemplate():``}
          ${this.columns.map((e,t)=>this._getColumnHeaderTemplate(e,t))}
          ${this._actionButtonPosition===`right`?this._getActionButtonHeaderTemplate():``}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?R``:R`
        <th
          class="kuc-table-1-26-0__table__header__cell kuc-table-1-26-0__table__header__cell__action${this._actionButtonPosition===`left`?`--left`:`--right`}"
        ></th>
      `}_getColumnHeaderTemplate(e,t){let n=$u(t);return R`
        <th
          class="kuc-table-1-26-0__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n}"
        >
          <div class="kuc-table-1-26-0__table__header__cell-title">
            ${e.title&&yl(e.title)?Kc(e.title):e.title}<!--
        --><span
              class="kuc-base-label-1-26-0__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,n=e;for(;this.data.length>1;){let e=this._table.rows[n];if(!e)n--;else{t=e.cells[this._actionButtonPosition===`left`?0:this.columns.length];break}}return t}_getDefaultDataRow(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){t[n]=[];continue}if(typeof e[n]==`object`&&e[n]!==null){t[n]={};continue}t[n]=``}return t}_addRowToTable(e,t){let n=this._tBody.insertRow(e);n.classList.add(Yu),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`&&this._addActionsCellToNewRow(n);for(let r=0;r<this.columns.length;r++){let i=$u(r),a=n.insertCell(r+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`?1:0)),o=this.columns[r];a.classList.add(Ju),a.style.width=i,a.style.maxWidth=i,a.style.minWidth=i,a.addEventListener(`change`,e=>{this._handleChangeCell(e,o.field)}),a.hidden=!(o.visible??!0);let s=o.render?o.render(t[o.field],t,e):t[o.field];s&&s.nodeType?a.appendChild(s):a.innerText=s||``}(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition!==`left`&&this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();let n=this._deepCloneObject(this.data),r=e.currentTarget.parentElement.rowIndex-1,i=this.data[r];if(t in i){let n=e.target.value;`detail`in e&&(n=e.detail.value),i[t]=n}let a={type:`change-cell`,rowIndex:r,data:this._deepCloneObject(this.data),oldData:n,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){let t=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);let r={type:`add-row`,rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(r),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;let t=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);let r={type:`remove-row`,rowIndex:t,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(r),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){let t=this._getActionsCellWhenRemoveRow(e);t?this._focusRemoveRowButton(t):this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${Qu}`).focus()}_focusFirstAddRowButton(){this._table.rows[1].cells[this._actionButtonPosition===`left`?0:this.columns.length].querySelector(`.${Zu}`)?.focus()}_toggleRemoveRowButton(){let e=this._actionButtonPosition===`left`?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,t=e.lastChild;if(this.data.length===1)t.style.display=`none`,this._actionButton.add||(e.style.display=`none`,this._hideActionHeaderCell());else if(this.data.length===2){let n=(this._actionButtonPosition===`left`?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;t.style.display=n.style.display=`inline-block`,e.style.removeProperty(`display`)}}_getSvgDOM(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`fill`,`none`),n.setAttribute(`width`,`18`),n.setAttribute(`height`,`18`),n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`aria-hidden`,`true`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`fill-rule`,`evenodd`),r.setAttribute(`clip-rule`,`evenodd`),r.setAttribute(`fill`,e),n.appendChild(r),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;let t=e.insertCell(this._actionButtonPosition===`left`?0:this.columns.length);if(t.classList.add(Xu),this._actionButtonPosition===`left`?t.classList.add(`kuc-table-1-26-0__table__body__row__action--left`):t.classList.add(`kuc-table-1-26-0__table__body__row__action--right`),this._actionButton.add){let n=this._getActionButtonDOM(`add`,e);t.appendChild(n)}if(this._actionButton.remove){let n=this._getActionButtonDOM(`remove`,e);t.appendChild(n),this.data.length===1&&(n.style.display=`none`)}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),t.style.display=`none`):(this._showActionHeaderCell(),t.style.removeProperty(`display`))}_getActionButtonDOM(e,t){let n=Qu,r=`Delete this row`,i=e===`add`;i&&(n=Zu,r=`Add row`);let a=i?td:rd,o=i?ed:nd,s=this._getSvgDOM(a,o),c=document.createElement(`button`);return c.classList.add(n),c.setAttribute(`title`,r),c.type=`button`,c.appendChild(s),c.addEventListener(`click`,()=>{let e=this._getErrorValidateColumnsAndData();e?this.throwErrorAfterUpdateComplete(e):i?this._handleAddRow(t.rowIndex):this._handleRemoveRow(t.rowIndex)}),c}_getActionButtonSettings(){let e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton==`object`&&(e.add=!Object.prototype.hasOwnProperty.call(this.actionButton,`add`)||!!this.actionButton.add,e.remove=!Object.prototype.hasOwnProperty.call(this.actionButton,`remove`)||!!this.actionButton.remove),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||(Z(this.data)?``:U.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return Z(this.columns)?hl(this.columns)?gl(this.columns)?U.COLUMNS.FIELD_UNIQUE:``:U.COLUMNS.FIELD_REQUIRED:U.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){let t=e;q(this,`change`,t)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}qu([B({type:String})],e.prototype,`actionButtonPosition`,void 0),qu([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),qu([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),qu([B({type:String})],e.prototype,`label`,void 0),qu([B({type:Array})],e.prototype,`columns`,void 0),qu([B({type:Array})],e.prototype,`data`,void 0),qu([B()],e.prototype,`actionButton`,void 0),qu([B({type:Boolean})],e.prototype,`headerVisible`,void 0),qu([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),qu([H(`.kuc-table-1-26-0__table`)],e.prototype,`_table`,void 0),qu([H(`.kuc-table-1-26-0__table__body`)],e.prototype,`_tBody`,void 0),qu([H(`.kuc-table-1-26-0__table__header__cell__action--right`)],e.prototype,`_actionHeaderCellRight`,void 0),qu([H(`.kuc-table-1-26-0__table__header__cell__action--left`)],e.prototype,`_actionHeaderCellLeft`,void 0),window.customElements.define(`kuc-table-1-26-0`,e),J(Ku),id=e})();var ad=`
  kuc-tabs-1-26-0,
  kuc-tabs-1-26-0 *,
  kuc-tabs-1-26-0:lang(en),
  kuc-tabs-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-26-0:lang(es),
  kuc-tabs-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-26-0:lang(ja),
  kuc-tabs-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tabs-1-26-0:lang(zh),
  kuc-tabs-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tabs-1-26-0:lang(zh-TW),
  kuc-tabs-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-tabs-1-26-0 {
    display: inline-block;
  }
  kuc-tabs-1-26-0[hidden] {
    display: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container {
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 16px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-right: 1px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-left: 1px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container {
    display: flex;
    flex-direction: row;
    padding: 0;
    overflow-y: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0px;
    list-style: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab {
    min-height: var(--kuc-tabs-tab-height, 48px);
    height: var(--kuc-tabs-tab-height, 48px);
    white-space: normal;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:disabled {
    color: GrayText;
    background-color: #d4d7d7;
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button {
    height: 100%;
    margin: 0;
    padding: 0 24px;
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-tabs-tab-font-size, 14px);
    background-color: var(--kuc-tabs-tab-background-color, #d4d7d7);
    color: var(--kuc-tabs-tab-color, #333333);
    border-style: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    box-shadow: 1px 0 3px #c7cbcb inset;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1.5;
    width: var(--kuc-tabs-tab-width, auto);
    min-width: var(--kuc-tabs-tab-width, 200px);
    word-wrap: break-word;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button[hidden] {
    display: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:last-of-type {
    border-right: 1px solid #c7cbcb;
  }

  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button--click:focus{
    border: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button[aria-selected="true"] {
    background-color: var(--kuc-tabs-tab-background-color-selected, #ffffff);
    color: var(--kuc-tabs-tab-color-selected, #333333);
    box-shadow: none;
  }
  .kuc-tabs-1-26-0__group__tab-panel {
    display:block;
    padding: 0;
    border-top: 0;
  }
  .kuc-tabs-1-26-0__group__tab-panel[border-visible] {
    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  }
  .kuc-tabs-1-26-0__group__tab-panel__content[hidden]{
    display:none;
  }
`,od=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sd;(()=>{if(sd=window.customElements.get(`kuc-tabs-1-26-0`),sd)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.value=``,this.borderVisible=!0,this.scrollButtons=!1,this.visible=!0,this.items=[],this._selectedValue=``,this._resizeObserver=null,this._isClick=!1,this._isAtStart=!0,this._isAtEnd=!1,this._GUID=Y();let t=X(e);Object.assign(this,t),this._handleResize=this._handleResize.bind(this)}shouldUpdate(e){if(e.has(`items`)){if(!Z(this.items))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1;for(let e=0;e<this.items.length;e++)if(this.items[e].value===void 0)return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_SPECIFIED),!1;if(!pl(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){let t=this._getMatchedTabIndex();t===-1&&(t=this._getFirstVisibleTabIndex()),t>-1&&(this._selectedValue=this.items[t].value)}render(){return R`
        <div class="kuc-tabs-1-26-0__group">
          <div class="kuc-tabs-1-26-0__group__tabs-container">
            <button
              class="kuc-tabs-1-26-0__group__tabs-container__tab-pre-button"
              type="button"
              @mousedown="${this._handleMouseDownPrevButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtStart}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getPrevButtonSvgTemplate()}
            </button>
            <div
              class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((e,t)=>this._getTabTemplate(e,t))}
              </ul>
            </div>
            <button
              class="kuc-tabs-1-26-0__group__tabs-container__tab-next-button"
              type="button"
              @mousedown="${this._handleMouseDownNextButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtEnd}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getNextButtonSvgTemplate()}
            </button>
          </div>
          <div
            class="kuc-tabs-1-26-0__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((e,t)=>this._getTabContentTemplate(e,t))}
          </div>
        </div>
      `}firstUpdated(){window.addEventListener(`resize`,this._handleResize),this._resizeObserver=new ResizeObserver(()=>{this.scrollButtons&&this._updatePreNextButtonState()}),this._resizeObserver.observe(this._tabListContainer),this._setScrollStyles(),this._scrollToSelectedTab(!0)}updated(e){e.has(`scrollButtons`)&&this._setScrollStyles(),this.scrollButtons&&this._updatePreNextButtonState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this._handleResize),this._resizeObserver&&=(this._resizeObserver.disconnect(),null)}_getTabTemplate(e,t){let n=e.value===this._selectedValue;return R`<li
        role="presentation"
        class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab"
      >
        <button
          role="tab"
          type="button"
          ?hidden="${e.visible===!1}"
          aria-selected="${n}"
          tabindex="${n&&!e.disabled?`0`:`-1`}"
          class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button ${this._isClick?`kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button--click`:``}"
          id="${this._GUID}-button-${t}"
          aria-controls="${this._GUID}-tabpanel-${t}"
          value="${e.value}"
          @click="${this._handleClickTab}"
          @mousedown="${this._handleMouseDown}"
          @keydown="${this._handleKeyDownTab}"
          ?disabled="${e.disabled}"
        >
          ${e.label?e.label:``}
        </button>
      </li>`}_getTabContentTemplate(e,t){let n=e.value===this._selectedValue;return R`<div
        class="kuc-tabs-1-26-0__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${t}"
        aria-labelledby="${this._GUID}-button-${t}"
        ?hidden="${!n||e.visible===!1}"
        @change="${this._handleChangeEvent}"
      >
        ${e.content&&yl(e.content)?Kc(e.content):e.content}
      </div>`}_getPrevButtonSvgTemplate(){return z`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="${this._isAtStart?`GrayText`:`#333333`}"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return z`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="${this._isAtEnd?`GrayText`:`#333333`}"
        />
      </svg>
      `}_getVisibleTab(e,t){let n=Array.from(this._tabButtons),r=n.indexOf(t),i=e===`next`?1:-1,a=e===`next`?n.length:-1;for(let e=r+i;e!==a;e+=i)if(!n[e].hidden)return n[e];return null}_handleTabScroll(e){let t=this._findVisibleTab(e);if(!t)return;let n=this._isTabPartiallyVisible(t,e)?t:this._getVisibleTab(e,t);n&&this._scrollTab(n,{direction:e,mode:`edge`}),this._updatePreNextButtonState()}_findVisibleTab(e){let t=this._tabListContainer.getBoundingClientRect(),n=Array.from(this._tabButtons),r=e=>{let n=e.getBoundingClientRect();return!(n.right<=t.left||n.left>=t.right)};return e===`next`?n.reverse().find(r):n.find(r)}_isTabPartiallyVisible(e,t){let n=this._tabListContainer.getBoundingClientRect(),r=e.getBoundingClientRect();return t===`next`?r.right>n.right+2:r.left<n.left-2}_calculateScrollPosition(e,t){let{direction:n,mode:r}=t,i=this._tabListContainer.getBoundingClientRect(),a=e.getBoundingClientRect(),o=this._tabListContainer.scrollLeft;return r===`edge`&&n?o+=n===`next`?a.right-i.right:a.left-i.left:a.width>i.width&&n?o+=n===`next`?a.left-i.left:a.right-i.right:a.left<i.left?o+=a.left-i.left:a.right>i.right&&(o+=a.right-i.right),Math.max(0,Math.min(o,this._tabListContainer.scrollWidth-this._tabListContainer.clientWidth))}_scrollTab(e,t){let n=this._calculateScrollPosition(e,t);this._tabListContainer.scrollTo({left:n,behavior:t.immediate?`auto`:`smooth`})}_handleMouseDownPrevButton(e){e.preventDefault(),this._handleTabScroll(`prev`)}_handleMouseDownNextButton(e){e.preventDefault(),this._handleTabScroll(`next`)}_handleResize(){this.scrollButtons&&this._updatePreNextButtonState()}_handleScroll(){this._updatePreNextButtonState()}_isScrollToLeft(){return this._tabListContainer.scrollLeft===0}_isScrollToRight(){let{scrollWidth:e,scrollLeft:t,clientWidth:n}=this._tabListContainer;return Math.abs(e-t-n)<2}_setScrollStyles(){var e;(e=this._tabGroup.parentElement)==null||e.style.setProperty(`max-width`,this.scrollButtons?`100%`:``),this._tabListContainer.style.setProperty(`overflow-x`,this.scrollButtons?`auto`:`visible`)}_updatePreNextButtonState(){let e=this._isScrollToLeft(),t=this._isScrollToRight();e!==this._isAtStart&&(this._isAtStart=e),t!==this._isAtEnd&&(this._isAtEnd=t)}_handleMouseDown(e){this._isClick=!0}_handleClickTab(e){let t=e.target;t.blur();let n=this._getCurrentTabIndex(t.getAttribute(`value`));if(this._tabButtons[n].focus(),this.value===t.value)return;let r=this._generateEventDetail(t.value);q(this,`change`,r)}_handleChangeEvent(e){e.stopPropagation()}_handleBlur(e){this._isClick=!1}_handleKeyDownTab(e){this._isClick=!1;let t=!1;switch(e.key){case`Left`:case`ArrowLeft`:t=!0,this._moveToAdjacentTab(e.target,`prev`);break;case`Right`:case`ArrowRight`:t=!0,this._moveToAdjacentTab(e.target,`next`);break;case`Home`:t=!0,this._moveToLastFirstTab(e.target,`first`);break;case`End`:t=!0,this._moveToLastFirstTab(e.target,`last`)}t&&(e.stopPropagation(),e.preventDefault())}_getCurrentTabIndex(e){let t=-1;for(let n=0;n<this.items.length;n++)if(this.items[n].value===e){t=n;break}return t===-1&&(t=this._getFirstVisibleTabIndex()),t}_getFirstVisibleTabIndex(){return this.items.findIndex(e=>e.visible!==!1)}_getMatchedTabIndex(){return this.items.findIndex(e=>e.visible!==!1&&e.value===this.value)}_moveToLastFirstTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`last`?-1:1,i=t===`last`?this.items.length-1:0;for(;i!==n;){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),q(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`});break}i+=r}}_moveToAdjacentTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`next`?1:-1,i=n+r;for(;i!==n&&(i===this.items.length?i=0:i===-1&&(i=this.items.length-1),i!==n);){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),q(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`,direction:t});break}i+=r}}_scrollToSelectedTab(e=!1){if(!this.value||!this._tabButtons.length)return;let t=this._getCurrentTabIndex(this.value);if(t===-1)return;let n=this._tabButtons[t];n&&(n.hidden||(this._scrollTab(n,{mode:`visible`,immediate:e}),this._updatePreNextButtonState()))}_generateEventDetail(e){let t=this.value;return this.value=e,{oldValue:t,value:e}}}od([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),od([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),od([B({type:String})],e.prototype,`value`,void 0),od([B({type:Boolean})],e.prototype,`borderVisible`,void 0),od([B({type:Boolean})],e.prototype,`scrollButtons`,void 0),od([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),od([B({type:Array})],e.prototype,`items`,void 0),od([Vs(`.kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button`)],e.prototype,`_tabButtons`,void 0),od([H(`.kuc-tabs-1-26-0__group__tabs-container__tab-list-container`)],e.prototype,`_tabListContainer`,void 0),od([H(`.kuc-tabs-1-26-0__group`)],e.prototype,`_tabGroup`,void 0),od([V()],e.prototype,`_isClick`,void 0),od([V()],e.prototype,`_isAtStart`,void 0),od([V()],e.prototype,`_isAtEnd`,void 0),window.customElements.define(`kuc-tabs-1-26-0`,e),J(ad),sd=e})();var cd=`
kuc-text-1-26-0,
kuc-text-1-26-0 *,
kuc-text-1-26-0:lang(en),
kuc-text-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-text-1-26-0:lang(es),
kuc-text-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-text-1-26-0:lang(ja),
kuc-text-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-text-1-26-0:lang(zh),
kuc-text-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-text-1-26-0:lang(zh-TW),
kuc-text-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-text-1-26-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  min-width: var(--kuc-text-input-width, 177px);
  width: var(--kuc-text-input-width, 177px);
  line-height: 1.5;
}
kuc-text-1-26-0[hidden] {
  display: none;
}
.kuc-text-1-26-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: 0px;
}
.kuc-text-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-text-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-text-1-26-0__group__input-form {
  display: flex;
  align-items: center;
  width: 100%;
}
.kuc-text-1-26-0__group__input-form__prefix-outer__prefix {
  padding-right: 4px;
  white-space: nowrap;
}
.kuc-text-1-26-0__group__input-form__input-outer {
  display: flex;
  min-width: var(--kuc-text-input-width, 26px);
  width: var(--kuc-text-input-width, 100%);
}
input[type="text"].kuc-text-1-26-0__group__input-form__input-outer__input {
  width: var(--kuc-text-input-width, 100%);
  height: var(--kuc-text-input-height, 40px);
  font-size: var(--kuc-text-input-font-size, 14px);
  color: var(--kuc-text-input-color, #000000);
  padding: 0 8px;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}
.kuc-text-1-26-0__group__input-form__input-outer__input[textAlign="left"] {
  text-align: left;
}
.kuc-text-1-26-0__group__input-form__input-outer__input[textAlign="right"] {
  text-align: right;
}
input[type=text].kuc-text-1-26-0__group__input-form__input-outer__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input[type=text].kuc-text-1-26-0__group__input-form__input-outer__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-text-1-26-0__group__input-form__suffix-outer__suffix {
  padding-left: 4px;
  white-space: nowrap;
}
`,ld=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ud;(()=>{if(ud=window.customElements.get(`kuc-text-1-26-0`),ud)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Y();let t=X(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};q(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,q(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};q(this,`input`,t)}render(){return R`
        <div class="kuc-text-1-26-0__group">
          <label
            class="kuc-text-1-26-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-text-1-26-0__group__input-form">
            <div class="kuc-text-1-26-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-26-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-26-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-26-0__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${this.error!==``}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-26-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-26-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-26-0>
        </div>
      `}}ld([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ld([B({type:String})],e.prototype,`error`,void 0),ld([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ld([B({type:String})],e.prototype,`label`,void 0),ld([B({type:String})],e.prototype,`placeholder`,void 0),ld([B({type:String})],e.prototype,`prefix`,void 0),ld([B({type:String})],e.prototype,`suffix`,void 0),ld([B({type:String})],e.prototype,`textAlign`,void 0),ld([B({type:String})],e.prototype,`value`,void 0),ld([B({type:Boolean})],e.prototype,`disabled`,void 0),ld([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),ld([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-text-1-26-0`,e),J(cd),ud=e})();var dd=ud,fd=`
  kuc-textarea-1-26-0,
  kuc-textarea-1-26-0 *,
  kuc-textarea-1-26-0:lang(en),
  kuc-textarea-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-26-0:lang(es),
  kuc-textarea-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-26-0:lang(ja),
  kuc-textarea-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-textarea-1-26-0:lang(zh),
  kuc-textarea-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-textarea-1-26-0:lang(zh-TW),
  kuc-textarea-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-textarea-1-26-0 {
    font-size: 14px;
    color: var(--kuc-textarea-input-color, #333333);
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    line-height: 1.5;
  }
  kuc-textarea-1-26-0[hidden] {
    display: none;
  }
  .kuc-textarea-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
    white-space: normal;
  }
  .kuc-textarea-1-26-0__group__label {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 0px 8px 0px;
  }
  .kuc-textarea-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-textarea-1-26-0__group__container {
    position: relative;
    display: inline-table;
    width: var(--kuc-textarea-input-width, 100%);
    min-width: var(--kuc-textarea-input-width, 100%);
  }
  textarea.kuc-textarea-1-26-0__group__textarea {
    display: block;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    font-size: var(--kuc-textarea-input-font-size, 14px);
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    min-width: var(--kuc-textarea-input-width, 299px);
    min-height: var(--kuc-textarea-input-height, 125px);
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    padding: 8px;
    resize: none;
    width: 100%;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-26-0__group__textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #3498db;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-26-0__group__textarea:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    resize: none;
  }
  .kuc-textarea-1-26-0__group__resizer {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    float: right;
    margin: -16px 0px;
    right: 0px;
  }
`,pd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},md;(()=>{if(md=window.customElements.get(`kuc-textarea-1-26-0`),md)return;let e={MIN_WIDTH:16,MIN_HEIGHT:16};class t extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=Y();let t=X(e);Object.assign(this,t)}_handleFocusTextarea(e){let t={value:this.value};q(this,`focus`,t)}_handleChangeTextarea(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,q(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};q(this,`input`,t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(t){if(!this._onResize)return;let n=this._textarea.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;r<e.MIN_WIDTH&&(r=e.MIN_WIDTH),i<e.MIN_HEIGHT&&(i=e.MIN_HEIGHT),this._container.style.width=r+`px`,this._textarea.style.height=i+`px`}_getResizerButtonSvgTemplate(){return z`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener(`mousemove`,e=>this._handleMouseMoveDocument(e)),document.addEventListener(`mouseup`,e=>this._handleMouseUpDocument())}render(){return R`
        <div class="kuc-textarea-1-26-0__group">
          <label
            class="kuc-textarea-1-26-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-textarea-1-26-0__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea-1-26-0__group__textarea"
              placeholder="${this.placeholder}"
              .value="${this.value}"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              @change="${this._handleChangeTextarea}"
              @focus="${this._handleFocusTextarea}"
              @input="${this._handleInputTextArea}"
              ?disabled="${this.disabled}"
            >
            </textarea>
            <div
              class="kuc-textarea-1-26-0__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-26-0>
        </div>
      `}}pd([B({type:String,reflect:!0,attribute:`class`})],t.prototype,`className`,void 0),pd([B({type:String})],t.prototype,`error`,void 0),pd([B({type:String,reflect:!0,attribute:`id`})],t.prototype,`id`,void 0),pd([B({type:String})],t.prototype,`label`,void 0),pd([B({type:String})],t.prototype,`placeholder`,void 0),pd([B({type:String})],t.prototype,`value`,void 0),pd([B({type:Boolean})],t.prototype,`disabled`,void 0),pd([B({type:Boolean})],t.prototype,`requiredIcon`,void 0),pd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],t.prototype,`visible`,void 0),pd([H(`.kuc-textarea-1-26-0__group__container`)],t.prototype,`_container`,void 0),pd([H(`.kuc-textarea-1-26-0__group__textarea`)],t.prototype,`_textarea`,void 0),window.customElements.define(`kuc-textarea-1-26-0`,t),J(fd),md=t})();var hd=`
kuc-time-picker-1-26-0,
kuc-time-picker-1-26-0 *,
kuc-time-picker-1-26-0:lang(en),
kuc-time-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker-1-26-0:lang(ja),
kuc-time-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker-1-26-0:lang(zh),
kuc-time-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker-1-26-0:lang(zh-TW),
kuc-time-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker-1-26-0:lang(es),
kuc-time-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker-1-26-0 {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker-1-26-0__group__input {
  position: relative;
}
kuc-time-picker-1-26-0[hidden] {
  display: none;
}
.kuc-time-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker-1-26-0__group kuc-base-time-1-26-0 {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__hours,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__minutes,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-26-0__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker-1-26-0__group__label[hidden] {
  display: none;
}
`,gd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_d;(()=>{if(_d=window.customElements.get(`kuc-time-picker-1-26-0`),_d)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText=``,this._inputValue=``,this._errorInvalid=``,this._blurBaseline=``,this._inputMax=``,this._inputMin=``,this._inputTimeStep=30,this._valueConverted=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`max`)||e.has(`min`)){let e,t;if(this.max===void 0||this.max===``)t=sc;else{if(!cl(this.max))return this.throwErrorAfterUpdateComplete(cc.MAX),!1;t=this.max=Jc(this.max)}if(this.min===void 0||this.min===``)e=oc;else{if(!cl(this.min))return this.throwErrorAfterUpdateComplete(cc.MIN),!1;e=this.min=Jc(this.min)}if(vc(t,e)<0)return this.throwErrorAfterUpdateComplete(rc),!1;this._inputMin=e,this._inputMax=t}if(e.has(`timeStep`)){if(!vl(this.timeStep))return this.throwErrorAfterUpdateComplete(ac),!1;if(!ll(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(cc.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===``?!0:cl(this.value)?(this._valueConverted=Jc(this.value),e.has(`value`)&&(vc(this._valueConverted,this._inputMin)<0||vc(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(ic),!1):!0):(this.throwErrorAfterUpdateComplete(cc.VALUE),!1)}update(e){e.has(`value`)&&(this.value===void 0?this._errorInvalid===``&&(this._inputValue=``):(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value)),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalid=``),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return R`
        <fieldset
          class="kuc-time-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </legend>
          <kuc-base-time-1-26-0
            class="kuc-time-picker-1-26-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
            @kuc:base-time-blur="${this._handleTimeChangeOnBlur}"
            @kuc:base-time-focusin="${this._handleTimeFocusIn}"
          >
          </kuc-base-time-1-26-0>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-26-0>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=``):(this.value=e.detail.value,this._errorInvalid=``),this._inputValue=e.detail.value,q(this,`change`,t)}_handleTimeFocusIn(e){e.stopPropagation(),this._blurBaseline=this.value}_handleTimeChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.error?void 0:e.detail.value,oldValue:this._blurBaseline};q(this,`blur`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}gd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),gd([B({type:String})],e.prototype,`error`,void 0),gd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),gd([B({type:String})],e.prototype,`label`,void 0),gd([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),gd([B({type:String})],e.prototype,`max`,void 0),gd([B({type:String})],e.prototype,`min`,void 0),gd([B({type:String})],e.prototype,`value`,void 0),gd([B({type:Boolean})],e.prototype,`disabled`,void 0),gd([B({type:Boolean})],e.prototype,`hour12`,void 0),gd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),gd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),gd([B({type:Number})],e.prototype,`timeStep`,void 0),window.customElements.define(`kuc-time-picker-1-26-0`,e),J(hd),_d=e})();var vd=`
  kuc-tooltip-1-26-0,
  kuc-tooltip-1-26-0 *,
  kuc-tooltip-1-26-0:lang(en),
  kuc-tooltip-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-26-0:lang(es),
  kuc-tooltip-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-26-0:lang(ja),
  kuc-tooltip-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip-1-26-0:lang(zh),
  kuc-tooltip-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip-1-26-0:lang(zh-TW),
  kuc-tooltip-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip-1-26-0__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip-1-26-0__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__text {
    max-width: var(--kuc-tooltip-width, 250px);
    width: var(--kuc-tooltip-width, auto);
    min-height: var(--kuc-tooltip-height, 32px);;
    height: var(--kuc-tooltip-height, auto);
    padding: 6px 8px;
    color: var(--kuc-tooltip-color, #ffffff);
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    background-color: var(--kuc-tooltip-background-color, #000000);
    font-size: var(--kuc-tooltip-font-size);
    border-radius: 6px;
    box-sizing: border-box;
  }
  .kuc-tooltip-1-26-0__group__title[popover] {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-width: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
  }
  .kuc-tooltip-1-26-0__group .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--top > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--right > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-right-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title,
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--right > .kuc-tooltip-1-26-0__group__title {
    width: max-content;
    height: fit-content;
  }
  .kuc-tooltip-1-26-0__group .kuc-tooltip-1-26-0__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--top > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--bottom > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: row-reverse;
  }
`,yd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bd;(()=>{if(bd=window.customElements.get(`kuc-tooltip-1-26-0`),bd)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.placement=`top`,this.title=``,this.container=``,this.describeChild=!1,this._container=``,this._scrollTargets=[],this._timeoutID=null,this._handleScroll=()=>{this._timeoutID!==null&&clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(()=>{this._setTooltipPositionBound(),this._timeoutID=null},20)},this._GUID=Y();let t=X(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this),this._setTooltipPositionBound=this._setTooltipPosition.bind(this)}update(e){e.has(`container`)&&(this._container=this.container&&yl(this.container)?Kc(this.container):this.container),super.update(e)}render(){return R`
        <div
          class="kuc-tooltip-1-26-0__group kuc-tooltip-1-26-0__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip-1-26-0__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){let t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!=`string`){let e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute(`aria-describedby`)&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`title`,this.title),this._firstChildEl.removeAttribute(`aria-label`))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`aria-label`,this.title),this._firstChildEl.removeAttribute(`title`))}_getTitleTemplate(){return this.title?R`
        <div
          id="${this._GUID}-title"
          popover="manual"
          class="kuc-tooltip-1-26-0__group__title"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip-1-26-0__group__title__wrapper">
            <div class="kuc-tooltip-1-26-0__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip-1-26-0__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:R``}_handleMouseLeaveTitle(e){let t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0);let e=this.querySelector(`.kuc-tooltip-1-26-0__group__title`);e&&(e.showPopover(),requestAnimationFrame(()=>{this._setTooltipPosition()})),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1);let e=this.querySelector(`.kuc-tooltip-1-26-0__group__title`);e&&e.hidePopover(),this._removeGlobalListener()}_updateChildElementAttributes(e){this._firstChildEl&&this.describeChild&&(e?(this._firstChildEl.removeAttribute(`title`),this._firstChildEl.setAttribute(`aria-describedby`,`${this._GUID}-title`)):(this._firstChildEl.removeAttribute(`aria-describedby`),this._firstChildEl.setAttribute(`title`,this.title)))}_attachGlobalListener(){document.addEventListener(`keydown`,this._globalEscapeBound),this._scrollTargets=this._getScrollableAncestors(this._containerEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._handleScroll,{passive:!0})}_removeGlobalListener(){document.removeEventListener(`keydown`,this._globalEscapeBound);for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._handleScroll);this._scrollTargets=[],this._timeoutID!==null&&(clearTimeout(this._timeoutID),this._timeoutID=null)}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_globalEscape(e){(e.key===`Escape`||e.key===`Esc`)&&this._closeTooltip()}_getPlacement(){return[`top`,`bottom`,`left`,`right`].includes(this.placement)?this.placement:`top`}_setTooltipPosition(){if(!this._titleEl||!this._containerEl)return;let e=this._containerEl.getBoundingClientRect(),t=this._titleEl.getBoundingClientRect(),n,r;switch(this.placement){case`bottom`:n=e.bottom,r=e.left+e.width/2-t.width/2;break;case`left`:n=e.top+e.height/2-t.height/2,r=e.left-t.width;break;case`right`:n=e.top+e.height/2-t.height/2,r=e.right;break;default:n=e.top-t.height,r=e.left+e.width/2-t.width/2}this._titleEl.style.position=`fixed`,this._titleEl.style.top=`${Math.round(n)}px`,this._titleEl.style.left=`${Math.round(r)}px`,this._titleEl.style.transform=`none`}}yd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),yd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),yd([B({type:String})],e.prototype,`placement`,void 0),yd([B({type:String})],e.prototype,`title`,void 0),yd([B()],e.prototype,`container`,void 0),yd([B({type:Boolean})],e.prototype,`describeChild`,void 0),yd([H(`.kuc-tooltip-1-26-0__group__container`)],e.prototype,`_groupContainerEL`,void 0),yd([H(`.kuc-tooltip-1-26-0__group__title__wrapper`)],e.prototype,`_titleWrapper`,void 0),yd([H(`.kuc-tooltip-1-26-0__group__container`)],e.prototype,`_containerEl`,void 0),yd([H(`.kuc-tooltip-1-26-0__group__title`)],e.prototype,`_titleEl`,void 0),window.customElements.define(`kuc-tooltip-1-26-0`,e),J(vd),bd=e})();var xd=`
  kuc-user-org-group-select-1-26-0,
  kuc-user-org-group-select-1-26-0 *,
  kuc-user-org-group-select-1-26-0:lang(en),
  kuc-user-org-group-select-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(es),
  kuc-user-org-group-select-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(ja),
  kuc-user-org-group-select-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(zh),
  kuc-user-org-group-select-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(zh-TW),
  kuc-user-org-group-select-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-26-0 {
    display: inline-table;
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-user-org-group-select-1-26-0[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-user-org-group-select-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-26-0__group__container {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    margin: 0px;
    align-items: start;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area {
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input {
    width: calc(var(--kuc-user-org-group-select-toggle-width, 280px) - 40px);
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    border-right: 0;
    background-color: #ffffff;
    color: #000000;
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: 1.5;
    padding: 0 8px;
    margin: 0;
  }
  input[type=text].kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    box-shadow: none;
  }
  input[type=text].kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input:disabled,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }

  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button {
    width: 40px;
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    border-left: 1px solid #e3e7e8;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button__svg {
    border: 1px solid #e3e7e8;
    border-left: none;
    background-color: #eeeeee;
    box-sizing: content-box;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker {
    margin-left: 8px;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker__button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker__button:disabled {
    cursor: not-allowed;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu {
    width: 100%;
    max-width: var(--kuc-user-org-group-select-toggle-width, 280px);
    padding: 0;
    border: none;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    list-style: none;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item {
   border-bottom: 1px solid #e3e7e8;
   display: flex;
   background-color: #f7f9fa;
   flex-direction: row;
   cursor: pointer;
   box-sizing: border-box;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight[role="option"] {
    background-color: #d8e1e6;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon {
    min-width: 48px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon--disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__text {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: normal;
    width: 100%;
    padding: 2px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3498db;
    align-content: center;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e3e7e8;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-width: 0;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex: 0;
    flex-shrink: 0;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button:focus {
    outline: none;
  }
 .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text{
    padding: 2px 0 2px 8px;
    line-height: normal;
    align-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text--disabled {
    background-color: #d4d7d7;
    color: #888888;
  }
`,Sd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cd;(()=>{if(Cd=window.customElements.get(`kuc-user-org-group-select-1-26-0`),Cd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.icon=``,this.id=``,this.label=``,this.placeholder=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._selectedValues=[],this._searchText=``,this._selectorVisible=!1,this._query=``,this._matchingItems=[],this._DISABLED_ITEM_CLASS=`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled`,this._DISABLED_ICON_CLASS=`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon--disabled`,this._SMALL_ICON_SIZE=24,this._LARGE_ICON_SIZE=48,this._scrollTargets=[],this._GUID=Y();let t=X(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!Z(this.items))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1;if(!pl(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(U.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!Z(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_ARRAY),!1):!0}render(){let e=this._getIconType();return R`
        <div class="kuc-user-org-group-select-1-26-0__group">
          <div
            class="kuc-user-org-group-select-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div class="kuc-user-org-group-select-1-26-0__group__container">
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area"
            >
              <div
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle"
              >
                <input
                  class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input"
                  role="combobox"
                  type="text"
                  .value="${this._searchText}"
                  aria-haspopup="listbox"
                  aria-autocomplete="list"
                  aria-labelledby="${this._GUID}-label"
                  aria-controls="${this._GUID}-listbox"
                  aria-describedby="${this._GUID}-error"
                  aria-expanded="${this._selectorVisible}"
                  aria-required="${this.requiredIcon}"
                  placeholder="${this.placeholder}"
                  ?disabled="${this.disabled}"
                  @change="${this._handleChangeUserOrgGroupInput}"
                  @input="${this._handleInputUserOrgGroupInput}"
                  @keydown="${this._handleKeyDownUserOrgGroupInput}"
                  @click="${this._handleClickUserOrgGroupInput}"
                  @blur="${this._handleBlurUserOrgGroupInput}"
                />
                <div
                  class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon"
                >
                  <button
                    class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button"
                    tabindex="-1"
                    type="button"
                    aria-label="search"
                    aria-controls="${this._GUID}-listbox"
                    aria-expanded="${this._selectorVisible}"
                    ?disabled="${this.disabled}"
                    @mousedown="${this._handleMouseDownToggleButton}"
                    @click="${this._handleClickToggleButton}"
                  >
                    ${this._getSearchPickerSvgTemplate()}
                  </button>
                </div>
              </div>
              <ul
                id="${this._GUID}-listbox"
                popover="manual"
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu"
                role="listbox"
                aria-labelledby="${this._GUID}-label"
                aria-hidden="${!this._selectorVisible}"
                @mouseleave="${this._handleMouseLeaveMenu}"
                @mousedown="${this._handleMouseDownMenu}"
              >
                ${this._matchingItems.map((e,t)=>this._getMatchedItemTemplate(e,t))}
              </ul>
              <ul
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list"
              >
                ${this._selectedValues.map((e,t)=>this._getSelectedItemTemplate(e,t))}
              </ul>
            </div>
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__picker"
              ?hidden="${!e}"
            >
              <button
                class="kuc-user-org-group-select-1-26-0__group__container__picker__button"
                tabindex="-1"
                type="button"
                ?disabled="${this.disabled}"
                @click="${this._handleClickIconButton}"
              >
                ${this._getPickerSVGTemplateByIcon(e)}
              </button>
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getIconType(){if(this.icon===`user`||this.icon===`org`||this.icon===`group`)return this.icon}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}async updated(e){super.updated(e),await this.updateComplete,e.has(`value`)&&this._initializeSelectedValues(),this._selectorVisible&&this._actionClearAllHighlightMenuItem()}_initializeSelectedValues(){Array.isArray(this.value)&&(this._selectedValues=this.value.filter(e=>this.items.some(t=>t.value===e)))}_getMatchedItemTemplate(e,t){let n=e.label===void 0||e.label===null?e.value:e.label,r=R`${n}`,i=e.disabled,a=this._query.trim().toLowerCase();if(a&&n){let e=n.toLowerCase().indexOf(a),t=e+a.length;r=R`
          ${n.slice(0,e)}<b>${n.slice(e,t)}</b>${n.slice(t)}
        `}return R`
        <li
          class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item ${i?this._DISABLED_ITEM_CLASS:``}"
          role="option"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${i?null:this._handleClickUserOrgGroupItem}"
          @mouseover="${i?null:this._handleMouseOverUserOrgGroupItem}"
        >
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon ${i?this._DISABLED_ICON_CLASS:``}"
          >
            ${this._getSvgTemplateByType(e?e.type:``)}
          </div>
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__text"
          >
            ${r}
          </div>
        </li>
      `}_getSelectedItemTemplate(e,t){let n=this.items.filter(t=>t.value===e)[0];if(!n)return``;let r=n?.disabled,i=n.label===void 0||n.label===null?n.value:n.label;return R`
        <li
          class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item"
          value="${e}"
          id="${this._GUID}-selected-item-${t}"
        >
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content"
          >
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__icon"
            >
              ${this._getSvgTemplateByType(n.type||``,this._SMALL_ICON_SIZE)}
            </div>
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text ${r?`kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text--disabled`:``}"
            >
              ${i}
            </div>
          </div>
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button"
              type="button"
              aria-label="remove"
              selected-item-index="${t}"
              @click="${this._handleClickRemoveSelectedItem}"
            >
              ${this._getRemoveSVGTemplate()}
            </button>
          </div>
        </li>
      `}_handleChangeUserOrgGroupInput(e){e.stopPropagation()}_handleInputUserOrgGroupInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickUserOrgGroupInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleBlurUserOrgGroupInput(e){let t=e.relatedTarget;t&&(this._toggleEl.contains(t)||this._menuEl&&this._menuEl.contains(t))||this._resetToggleInputValue()}_handleKeyDownUserOrgGroupInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_resetToggleInputValue(){this._searchText=``,this._query=``}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMenuPosition(){this._menuEl&&this._toggleEl&&(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl))}_handleClickRemoveSelectedItem(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`selected-item-index`)||`-1`,10),r=this._selectedValues.filter((e,t)=>t!==n),i=this.value;this._selectedValues=r,this.value=r;let a={oldValue:i,value:this.value};q(this,`change`,a)}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus();let t=this._inputEl.value.length;this._inputEl.setSelectionRange(t,t),this._setMatchingItems(),this._actionShowMenu()}_handleMouseDownToggleButton(e){e.preventDefault()}_handleClickIconButton(e){e.preventDefault();let t={value:this.value};q(this,`click-picker-icon`,t)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-user-org-group-select-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`,e.style.overflowX=`hidden`,this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),this.items.length!==0&&this._matchingItems.length!==0&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,this._menuEl&&this._toggleEl&&(this._setMenuPosition(),this._attachListeners()))}_handleMouseOverUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.setAttribute(`aria-selected`,`true`),e.classList.add(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)}_handleClickUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_actionUpdateValue(e){if(this._selectedValues.includes(e)){this._resetToggleInputValue();return}let t=this.value,n=[...this._selectedValues,e];this._selectedValues=n,this.value=n;let r={oldValue:t,value:this.value};this._query=``,q(this,`change`,r),this._resetToggleInputValue()}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.setAttribute(`aria-selected`,`false`),e.classList.remove(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)}),this._actionRemoveActiveDescendant()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickDocument(e){e.target===this._toggleEl||this._toggleEl.contains(e.target)||Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){var e;for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],(e=this._menuEl)==null||e.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getPickerSVGTemplateByIcon(e){if(!e)return``;switch(e){case`user`:return this._getUserPickerSvgTemplate();case`org`:return this._getOrgPickerSvgTemplate();case`group`:return this._getGroupPickerSvgTemplate();default:return``}}_getSvgTemplateByType(e,t=this._LARGE_ICON_SIZE){if(!e)return``;switch(e){case`user`:return this._getUserSvgTemplate(t);case`org`:return this._getOrgSvgTemplate(t);case`group`:return this._getGroupSvgTemplate(t);default:return``}}_getUserPickerSvgTemplate(){return z`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7820)">
            <path d="M40 0H0V40H40V0Z" fill="#3498db"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7952 29.5014C30.6103 29.1232 29.0893 28.2243 26.4523 27.2194C26.3083 27.1766 26.1685 27.121 26.0346 27.0532C24.9881 26.7068 23.9606 26.3054 22.9564 25.8507L22.8145 25.7719C22.1496 25.3286 22.0013 24.4536 22.0017 22.7937C22.0235 22.0583 22.2846 21.3509 22.7443 20.7784C23.1224 20.1551 23.3587 19.4542 23.4442 18.6661C23.5273 18.1843 23.7029 17.7231 23.923 17.3756C24.1192 16.9983 24.2545 16.5924 24.3239 16.1729L24.3601 16.0255C24.4067 15.883 24.4067 15.7294 24.3636 15.5974C24.2774 15.3437 24.2123 15.0833 24.1689 14.8188L24.1456 14.6767L24.1635 14.5338C24.2604 13.7586 24.3379 13.1224 24.4059 12.5811C24.4211 11.6974 24.0911 10.8425 23.4802 10.1922C22.6022 9.24161 21.3353 8.74834 20.0457 8.85492L19.8783 8.85466C18.5907 8.74424 17.3242 9.23383 16.4373 10.1905C15.8303 10.8294 15.5009 11.6826 15.5145 12.4708C15.5459 12.7398 15.576 13.0061 15.634 13.5218C15.6816 13.9435 15.7157 14.2344 15.7516 14.5219L15.7676 14.6495L15.7506 14.7771C15.7126 15.063 15.6424 15.3438 15.5603 15.5586C15.5129 15.7122 15.5129 15.8764 15.5603 16.03L15.5883 16.1448C15.6658 16.5693 15.8109 16.9785 16.0232 17.367C16.2479 17.789 16.3905 18.2498 16.4437 18.7267C16.5233 19.4513 16.7617 20.1491 17.1417 20.7705C17.6108 21.3382 17.8822 22.0458 17.9138 22.8232V23.1366C17.9893 23.859 17.8735 24.5889 17.5774 25.253L17.4666 25.5013L17.2451 25.6591C16.6349 26.0939 15.9497 26.4124 15.3008 26.5755L13.5299 27.1849C10.7007 28.2494 9.16333 29.179 9.1108 29.4241C9.05833 29.8816 9.02367 30.3408 9.00687 30.8007H30.8764L30.7952 29.5014ZM26.7379 25.1844L26.9153 25.2625C26.9487 25.2812 26.984 25.2961 27.0908 25.3307C30.6256 26.674 32.4548 27.7827 32.7559 29.1001L32.779 29.2601L33 32.7957H7.02157L7.00338 31.8168C6.98712 30.9416 7.02899 30.0664 7.14161 29.1148C7.4095 27.7754 9.24475 26.6656 12.8538 25.3081L14.7282 24.6661C15.1234 24.5647 15.5007 24.405 15.8479 24.1926C15.9346 23.9083 15.9615 23.6082 15.9259 23.3111L15.9187 23.1922L15.9196 22.8648C15.9065 22.551 15.787 22.251 15.5807 22.0142L15.4891 21.8909C14.9273 20.9994 14.5756 19.9919 14.4608 18.9462C14.4357 18.7217 14.3683 18.5039 14.2675 18.3144C13.967 17.765 13.754 17.1722 13.6359 16.5575C13.4886 16.0383 13.4952 15.4851 13.6727 14.9152C13.7077 14.8215 13.735 14.7251 13.7544 14.6271C13.7234 14.3744 13.6923 14.1065 13.6515 13.7459C13.5934 13.229 13.5638 12.9668 13.5264 12.6091C13.4943 11.2011 14.0208 9.83752 14.9825 8.82527C16.2601 7.44706 18.0936 6.7253 19.965 6.86029C21.8377 6.73098 23.6699 7.4573 24.94 8.83235C25.9008 9.85515 26.4248 11.2124 26.3941 12.7139C26.3238 13.3167 26.2511 13.9157 26.1624 14.6273C26.1861 14.739 26.217 14.8509 26.2561 14.9661C26.4263 15.4861 26.4344 16.0449 26.2802 16.5686C26.1732 17.1707 25.9739 17.7555 25.6547 18.3632C25.5325 18.5594 25.4495 18.7773 25.4192 18.9406C25.3084 19.9869 24.9615 20.9944 24.4046 21.887L24.321 22.002C24.1197 22.2407 24.0052 22.5405 23.9964 22.8232C23.9964 23.3728 24.0234 23.8066 24.0731 24.0998C24.953 24.5507 25.838 24.8892 26.7379 25.1844Z" fill="white"/>
          </g>
          <defs>
            <clipPath">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgPickerSvgTemplate(){return z`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`}_getGroupPickerSvgTemplate(){return z`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`}_getSearchPickerSvgTemplate(){return z`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`}_getRemoveSVGTemplate(){return z`
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11108_7852)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 5.96056L0.930232 1.99089L0.399902 1.46056L1.46056 0.399902L1.99089 0.930232L5.96056 4.8999L9.93023 0.930232L10.4606 0.399902L11.5212 1.46056L10.9909 1.99089L7.02122 5.96056L10.9909 9.93023L11.5212 10.4606L10.4606 11.5212L9.93023 10.9909L5.96056 7.02122L1.99089 10.9909L1.46056 11.5212L0.399902 10.4606L0.930233 9.93023L4.8999 5.96056Z" fill="#3498db"/>
        </g>
        <defs>
          <clipPath>
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `}_getUserSvgTemplate(e){return z`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7825)">
            <path d="M32.5866 -0.521484H-0.586548V32.6516H32.5866V-0.521484Z" fill="#717272"/>
            <path d="M15.9413 5.64404C18.4049 5.64404 20.6468 8.02938 20.6077 11.4053C20.5686 14.7552 19.2 15.407 18.4309 16.8278C18.1442 17.3622 18.066 19.0306 18.6134 19.3565C21.1291 20.8815 23.5926 22.0416 25.6912 23.2669C26.6167 23.8143 26.747 24.9483 26.747 25.7174C25.0525 25.7174 20.4774 25.7174 15.9413 25.7174C11.4053 25.7174 6.83012 25.7174 5.13562 25.7174C5.13562 24.9483 5.26597 23.8143 6.19142 23.2669C8.29 22.0416 10.7535 20.8815 13.2692 19.3565C13.8167 19.0306 13.7385 17.3622 13.4517 16.8278C12.6827 15.407 11.314 14.7422 11.2749 11.4053C11.2358 8.02938 13.4778 5.64404 15.9413 5.64404Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="31.9348" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgSvgTemplate(e){return z`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7858)">
            <path d="M32 0H0V32H32V0Z" fill="#4f91c5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3335 5.3335H10.0002V14.0002H21.3335V5.3335ZM20.0002 6.66683H18.0002V8.66683H20.0002V6.66683ZM16.6668 19.3335H26.6668V27.3335H16.6668V19.3335ZM15.3335 19.3335H5.3335V27.3335H15.3335V19.3335ZM24.0002 21.3335H25.3335V22.6668H24.0002V21.3335ZM14.0002 21.3335H12.6668V22.6668H14.0002V21.3335Z" fill="#eff3f4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 14H15.3335V16H9.3335V17.3333V19.3333H10.6668V17.3333H20.6668V19.3333H22.0002V17.3333V16H16.6668V14Z" fill="#a6b2b3"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getGroupSvgTemplate(e){return z`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7756)">
            <path d="M32 0H0V31.9032H32V0Z" fill="#86bac0"/>
            <path d="M32.0005 15.6099L20.1262 3.72021L3.74902 20.0193L15.749 31.9033H32.0005V15.6099Z" fill="#6c969b"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1141 0.0854492C24.9541 0.0854492 31.9998 7.22949 31.9998 16.0427C31.9998 24.856 24.9541 32 16.1141 32C7.27412 32 0.108398 24.856 0.108398 16.0427C0.108398 7.22949 7.27412 0.0854492 16.1141 0.0854492Z" fill="#86bac0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.983 16.6751C31.6459 24.8845 25.2059 31.5329 17.0001 31.983L6.85156 21.8651L25.1487 9.78174L31.9887 16.601L31.983 16.6751Z" fill="#6c969b"/>
            <path d="M25.1487 9.78174H6.85156V21.8651H25.1487V9.78174Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 13.8154L25.1487 21.8653H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 14.3794L25.1487 21.8653H6.85156Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.8202L25.1487 9.78174H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.2676L25.1487 9.78174H6.85156Z" fill="white"/>
            <path d="M32 0H0V31.9032H32V0Z" fill="#9cc076"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3942 24.6003H16.2011C16.192 24.1094 16.2156 23.6184 16.2717 23.1307C16.3705 22.6384 17.3704 22.0361 19.2712 21.3235L20.337 20.9579C20.6968 20.8659 21.0366 20.7085 21.3392 20.4938C21.4763 20.1873 21.5275 19.8495 21.4874 19.5164V19.2984C21.474 18.9793 21.352 18.6743 21.1415 18.4335C20.8563 17.9824 20.6777 17.4727 20.6193 16.9427C20.5961 16.7361 20.5339 16.5356 20.4358 16.3521C20.2827 16.0732 20.1755 15.7717 20.1182 15.459C20.0551 15.2552 20.0551 15.0371 20.1182 14.8332C20.1625 14.7152 20.1933 14.5925 20.2099 14.4676C20.1605 14.0738 20.1182 13.673 20.0688 13.2511C20.0533 12.5749 20.307 11.9202 20.7745 11.4298C21.4194 10.7368 22.3491 10.3787 23.2941 10.4595C24.2402 10.3816 25.1696 10.7421 25.8137 11.4369C26.278 11.9293 26.5312 12.5826 26.5195 13.2581C26.4701 13.68 26.4207 14.0808 26.3713 14.4746C26.3917 14.5988 26.4224 14.7211 26.4631 14.8402C26.5299 15.0435 26.5299 15.2628 26.4631 15.4661C26.4117 15.7751 26.3117 16.0741 26.1666 16.3521C26.0537 16.5326 25.9771 16.7332 25.9408 16.9427C25.8845 17.4721 25.7084 17.9818 25.4256 18.4335C25.2202 18.6762 25.1033 18.981 25.0939 19.2984C25.0939 20.0015 25.1644 20.4516 25.3127 20.55C25.9041 20.8168 26.5096 21.0516 27.1265 21.2532C27.1846 21.2857 27.2461 21.3116 27.31 21.3305C29.192 22.0431 30.1895 22.6455 30.3025 23.1377L30.3942 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0016 24.6003H1.80856C1.79941 24.1094 1.82298 23.6184 1.87914 23.1307C1.97795 22.6384 2.97779 22.0361 4.87867 21.3235L5.94438 20.9579C6.30425 20.8659 6.644 20.7085 6.94658 20.4938C7.08374 20.1873 7.13496 19.8495 7.09479 19.5164V19.2984C7.08142 18.9793 6.95946 18.6743 6.74896 18.4335C6.46369 17.9824 6.28509 17.4727 6.22669 16.9427C6.20354 16.7361 6.14127 16.5356 6.04319 16.3521C5.89012 16.0732 5.78289 15.7717 5.7256 15.459C5.66249 15.2552 5.66249 15.0371 5.7256 14.8332C5.7699 14.7152 5.80068 14.5925 5.81735 14.4676C5.76794 14.0738 5.7256 13.673 5.67619 13.2511C5.66071 12.5749 5.91445 11.9202 6.38196 11.4298C7.02682 10.7368 7.95648 10.3787 8.90157 10.4595C9.84766 10.3816 10.777 10.7421 11.4212 11.4369C11.8854 11.9293 12.1386 12.5826 12.1269 13.2581C12.0775 13.68 12.0281 14.0808 11.9787 14.4746C11.9992 14.5988 12.0298 14.7211 12.0705 14.8402C12.1373 15.0435 12.1373 15.2628 12.0705 15.4661C12.0191 15.7751 11.9191 16.0741 11.7741 16.3521C11.6612 16.5326 11.5845 16.7332 11.5482 16.9427C11.492 17.4721 11.3158 17.9818 11.033 18.4335C10.8276 18.6762 10.7107 18.981 10.7013 19.2984C10.7013 20.0015 10.7719 20.4516 10.9201 20.55C11.5115 20.8168 12.117 21.0516 12.7339 21.2532C12.792 21.2857 12.8535 21.3116 12.9174 21.3305C14.7995 22.0431 15.797 22.6455 15.9099 23.1377L16.0016 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6766 24.6002H7.3295C7.31831 24.0002 7.34712 23.4001 7.41576 22.804C7.53652 22.2024 8.75855 21.4661 11.0818 20.5952L12.3844 20.1483C12.8242 20.0359 13.2395 19.8436 13.6093 19.5811C13.7769 19.2065 13.8395 18.7937 13.7904 18.3865V18.12C13.7741 17.7301 13.625 17.3573 13.3678 17.0629C13.0191 16.5117 12.8008 15.8886 12.7294 15.2409C12.7011 14.9883 12.625 14.7434 12.5052 14.519C12.3181 14.1782 12.187 13.8097 12.117 13.4275C12.0399 13.1784 12.0399 12.9118 12.117 12.6626C12.1711 12.5183 12.2088 12.3684 12.2291 12.2157C12.1687 11.7344 12.117 11.2446 12.0566 10.7289C12.0377 9.90252 12.3478 9.10226 12.9192 8.50296C13.7074 7.65586 14.8436 7.21826 15.9987 7.31694C17.1551 7.22174 18.291 7.66239 19.0782 8.51156C19.6457 9.11336 19.9551 9.91193 19.9409 10.7375C19.8805 11.2532 19.8201 11.743 19.7597 12.2243C19.7847 12.3761 19.8222 12.5256 19.8718 12.6712C19.9535 12.9197 19.9535 13.1876 19.8718 13.4361C19.8091 13.8138 19.6868 14.1793 19.5095 14.519C19.3716 14.7396 19.2778 14.9848 19.2335 15.2409C19.1648 15.8879 18.9494 16.5109 18.6038 17.0629C18.3528 17.3596 18.2099 17.7322 18.1984 18.12C18.1984 18.9795 18.2846 19.5295 18.4658 19.6498C19.1887 19.9759 19.9287 20.2628 20.6827 20.5093C20.7537 20.549 20.8289 20.5807 20.907 20.6038C23.2073 21.4747 24.4264 22.211 24.5644 22.8126L24.6766 24.6002Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}}Sd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Sd([B({type:String})],e.prototype,`error`,void 0),Sd([B({type:String})],e.prototype,`icon`,void 0),Sd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Sd([B({type:String})],e.prototype,`label`,void 0),Sd([B({type:String})],e.prototype,`placeholder`,void 0),Sd([B({type:Boolean})],e.prototype,`disabled`,void 0),Sd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Sd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Sd([B({type:Array})],e.prototype,`items`,void 0),Sd([B({type:Array})],e.prototype,`value`,void 0),Sd([Vs(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item`)],e.prototype,`_itemsEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input`)],e.prototype,`_inputEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__toggle`)],e.prototype,`_toggleEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu`)],e.prototype,`_menuEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)],e.prototype,`_highlightItemEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item:first-child`)],e.prototype,`_firstItemEl`,void 0),Sd([H(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Sd([Vs(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),Sd([V()],e.prototype,`_selectedValues`,void 0),Sd([V()],e.prototype,`_searchText`,void 0),Sd([V()],e.prototype,`_selectorVisible`,void 0),window.customElements.define(`kuc-user-org-group-select-1-26-0`,e),J(xd),Cd=e})();var wd=`
  kuc-mobile-button-1-26-0,
  kuc-mobile-button-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(es),
  kuc-mobile-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(zh),
  kuc-mobile-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(zh-TW),
  kuc-mobile-button-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-button-1-26-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-button-1-26-0__button {
    min-width: var(--kuc-mobile-button-width, 100px);
    width: var(--kuc-mobile-button-width, auto);
    height: var(--kuc-mobile-button-height, 42px);
    padding: 0 12px;
    user-select: none;
    font-weight: 700;
    font-size: var(--kuc-mobile-button-font-size, 14px);
    line-height: 1;
    display: grid;
    align-items: center;
    align-content: center;
  }
  .kuc-mobile-button-1-26-0__button:focus {
    outline: none;
  }
  .kuc-mobile-button-1-26-0__button--submit {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #206694);
    color: var(--kuc-mobile-button-text-color, #ffffff);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-26-0__button--submit:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-26-0__button--submit:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-26-0__button--submit:disabled {
    color: #ffffff;
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button-1-26-0__button--normal {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #ffffff);
    color: var(--kuc-mobile-button-text-color, #206694);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-26-0__button--normal:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-26-0__button--normal:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-26-0__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    background-color: #ffffff;
    cursor: default;
  }
`,Td=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ed;(()=>{if(Ed=window.customElements.get(`kuc-mobile-button-1-26-0`),Ed)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=X(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),q(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?yl(this.content)?Kc(this.content):this.content:this.text)}render(){return R`
        <button
          type="button"
          class="kuc-mobile-button-1-26-0__button kuc-mobile-button-1-26-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}Td([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Td([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Td([B({type:String})],e.prototype,`text`,void 0),Td([B({type:String})],e.prototype,`type`,void 0),Td([B()],e.prototype,`content`,void 0),Td([B({type:Boolean})],e.prototype,`disabled`,void 0),Td([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-button-1-26-0`,e),J(wd),Ed=e})();var Dd=`
  kuc-base-mobile-error-1-26-0 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(es),
  kuc-base-mobile-error-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(zh),
  kuc-base-mobile-error-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(zh-TW),
  kuc-base-mobile-error-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-error-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-error-1-26-0__error {
    line-height: 1.5;
    color: #000000;
    background-color: #fdffc9;
    border: 1px solid #e5db68;
    border-radius: 0.4em;
    padding: 0.4em 1em;
    margin-top: 0.3em;
    margin-left: 0.5em;
  }
  .kuc-base-mobile-error-1-26-0__error[hidden] {
    display: none;
  }
`,Od=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kd=class extends K{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return R`
      ${this.ariaLive&&this.ariaLive!==``?R`
              <div
                class="kuc-base-mobile-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                aria-live="${this.ariaLive}"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `:R`
              <div
                class="kuc-base-mobile-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `}
    `}};Od([B({type:String})],kd.prototype,`ariaLive`,void 0),Od([B({type:String})],kd.prototype,`guid`,void 0),Od([B({type:String})],kd.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-error-1-26-0`)||(J(Dd),window.customElements.define(`kuc-base-mobile-error-1-26-0`,kd));var Ad=`
  kuc-base-mobile-label-1-26-0 {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(es) ,
  kuc-base-mobile-label-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(zh) ,
  kuc-base-mobile-label-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(zh-TW),
  kuc-base-mobile-label-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-label-1-26-0__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label-1-26-0__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label-1-26-0__required-icon[hidden] {
    display: none;
  }
`,jd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Md=class extends K{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return R`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-26-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?R`
          <span class="kuc-base-mobile-label-1-26-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:R` <span class="kuc-base-mobile-label-1-26-0__text">${this.text}</span> `}};jd([B({type:Boolean})],Md.prototype,`requiredIcon`,void 0),jd([B({type:String})],Md.prototype,`guid`,void 0),jd([B({type:String})],Md.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-label-1-26-0`)||(J(Ad),window.customElements.define(`kuc-base-mobile-label-1-26-0`,Md));var Nd=`
  kuc-mobile-checkbox-1-26-0,
  kuc-mobile-checkbox-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(es),
  kuc-mobile-checkbox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(zh),
  kuc-mobile-checkbox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(zh-TW),
  kuc-mobile-checkbox-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-checkbox-1-26-0 {
    width: 100%;
    display: inline-block;
  }
  kuc-mobile-checkbox-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .kuc-mobile-checkbox-1-26-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-checkbox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: inherit;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__required-icon {
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__required-icon[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[disabled],
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu--required[bordervisible] {
    border-color: #cf4a38;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item[bordervisible] {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    border-bottom: 1px solid #b3b3b3;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label {
    position: relative;
    margin: -7px 0px 0px 34px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    padding: 11px 13px 13px 0px;
    font-size: 14.04px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -13px;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    background-size: 22px 17px;
    content: "";
  }
  .kuc-mobile-checkbox-1-26-0__group__error {
    line-height: 1.5;
    border: 1px solid #e5db68;
    background-color: #fdffc9;
    margin-top: 0.3em;
    margin-left: 0.5em;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    color: #000000;
  }
  .kuc-mobile-checkbox-1-26-0__group__error[hidden] {
    display: none;
  }
`,Pd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fd;(()=>{if(Fd=window.customElements.get(`kuc-mobile-checkbox-1-26-0`),Fd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!Z(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};q(this,`change`,l)}_getCheckboxIconSvgTemplate(e){return z`
       <svg
         class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC`:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return R`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-26-0__group__select-menu__item${e.disabled?` kuc-mobile-checkbox-1-26-0__group__select-menu__item--disabled`:``}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${e.value===void 0?``:e.value}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error!==``}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(n)}${e.label===void 0?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!Z(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!Z(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return R`
        <fieldset class="kuc-mobile-checkbox-1-26-0__group">
          <legend
            class="kuc-mobile-checkbox-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-26-0__group__select-menu ${this.requiredIcon?`kuc-mobile-checkbox-1-26-0__group__select-menu--required`:``}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-26-0>
        </fieldset>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}}Pd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Pd([B({type:String})],e.prototype,`error`,void 0),Pd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Pd([B({type:String})],e.prototype,`label`,void 0),Pd([B({type:Boolean})],e.prototype,`borderVisible`,void 0),Pd([B({type:Boolean})],e.prototype,`disabled`,void 0),Pd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Pd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Pd([B({type:Array})],e.prototype,`items`,void 0),Pd([B({type:Array})],e.prototype,`selectedIndex`,void 0),Pd([B({type:Array})],e.prototype,`value`,void 0),Pd([Vs(`.kuc-mobile-checkbox-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),Pd([V()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-checkbox-1-26-0`,e),J(Nd),Fd=e})();var Id=`
  kuc-mobile-dropdown-1-26-0,
  kuc-mobile-dropdown-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(es),
  kuc-mobile-dropdown-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(zh),
  kuc-mobile-dropdown-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(zh-TW),
  kuc-mobile-dropdown-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-dropdown-1-26-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-26-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown-1-26-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-26-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Ld=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rd;(()=>{if(Rd=window.customElements.get(`kuc-mobile-dropdown-1-26-0`),Rd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value;if(this.value===n&&this.selectedIndex===t.selectedIndex)return;let r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=t.selectedIndex,q(this,`change`,r)}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!vl(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return R`
        <option
          value="${e.value||``}"
          ?selected="${n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return R`
        <label
          class="kuc-mobile-dropdown-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-dropdown-1-26-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-26-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-dropdown-1-26-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-26-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-26-0>
      `}updated(e){e.has(`selectedIndex`)&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Ld([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ld([B({type:String})],e.prototype,`error`,void 0),Ld([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ld([B({type:String})],e.prototype,`label`,void 0),Ld([B({type:String})],e.prototype,`value`,void 0),Ld([B({type:Number})],e.prototype,`selectedIndex`,void 0),Ld([B({type:Boolean})],e.prototype,`disabled`,void 0),Ld([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ld([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Ld([B({type:Array})],e.prototype,`items`,void 0),Ld([H(`.kuc-mobile-dropdown-1-26-0__input-form__select__input`)],e.prototype,`_selectEl`,void 0),window.customElements.define(`kuc-mobile-dropdown-1-26-0`,e),J(Id),Rd=e})();var zd=`
  kuc-mobile-multi-choice-1-26-0,
  kuc-mobile-multi-choice-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(es),
  kuc-mobile-multi-choice-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(zh),
  kuc-mobile-multi-choice-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(zh-TW),
  kuc-mobile-multi-choice-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-multi-choice-1-26-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-multi-choice-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-26-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-multi-choice-1-26-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input option:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input option:disabled[selected] {
    background-color: #cecece; /* Chrome */
    background-color: -moz-cellhighlight; /* Firefox */
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input:disabled option {
    color: #999999;
    -webkit-text-fill-color: #999999;
  }
`,Bd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vd;(()=>{if(Vd=window.customElements.get(`kuc-mobile-multi-choice-1-26-0`),Vd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!Z(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=this.value?[...this.value]:this.value,r=Array.from(t.selectedOptions,e=>e.value),i=Array.from(t.selectedOptions,e=>e.dataset.index),a={value:r,oldValue:n};this.value=r,this.selectedIndex=i.map(e=>e?parseInt(e,10):0),q(this,`change`,a)}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!Z(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!Z(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return R`
        <option
          value="${e.value||``}"
          data-index="${t}"
          ?selected="${e.value!==void 0&&n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return R`
        <label
          class="kuc-mobile-multi-choice-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-26-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-26-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-multi-choice-1-26-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-26-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-26-0>
      `}}Bd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Bd([B({type:String})],e.prototype,`error`,void 0),Bd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Bd([B({type:String})],e.prototype,`label`,void 0),Bd([B({type:Boolean})],e.prototype,`disabled`,void 0),Bd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Bd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Bd([B({type:Array})],e.prototype,`items`,void 0),Bd([B({type:Array})],e.prototype,`selectedIndex`,void 0),Bd([B({type:Array})],e.prototype,`value`,void 0),Bd([V()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-multi-choice-1-26-0`,e),J(zd),Vd=e})();var Hd=`
  kuc-mobile-radio-button-1-26-0,
  kuc-mobile-radio-button-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(es),
  kuc-mobile-radio-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(zh) ,
  kuc-mobile-radio-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(zh-TW),
  kuc-mobile-radio-button-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-radio-button-1-26-0 {
    width: 100%;
    display: inline-block;
  }

  kuc-mobile-radio-button-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-26-0__group {
    border: none;
    height: auto;
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .kuc-mobile-radio-button-1-26-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-radio-button-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.4em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item {
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 45px;
    display: block;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-26-0__group__select-menu__item {
    border-bottom: 1px solid #b3b3b3;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-26-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    margin-top: -11px;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
    left: 8px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__value {
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[disabled], 
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled:last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled:first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label {
    position: absolute;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    padding: 0px;
  }
`,Ud=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wd;(()=>{if(Wd=window.customElements.get(`kuc-mobile-radio-button-1-26-0`),Wd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Y();let t=X(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,q(this,`change`,a)}_getRadioIconSvgTemplate(e,t){return z`
      <svg
        class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${t?z`<circle cx="10.5" cy="10.5" r="6.5" fill="${`#5b5b5b`}"/>`:``}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return R`
        <div
          class="kuc-mobile-radio-button-1-26-0__group__select-menu__item${e.disabled?` kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled`:``}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            aria-invalid="${this.error!==``}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,n)}
            <div
              class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__value"
            >
              ${e.label===void 0?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has(`items`)&&!Z(this.items)?(this.throwErrorAfterUpdateComplete(U.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!dl(this.value)?(this.throwErrorAfterUpdateComplete(U.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!vl(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(U.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return R`
        <div class="kuc-mobile-radio-button-1-26-0__group">
          <div
            class="kuc-mobile-radio-button-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Ud([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ud([B({type:String})],e.prototype,`error`,void 0),Ud([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ud([B({type:String})],e.prototype,`label`,void 0),Ud([B({type:String})],e.prototype,`value`,void 0),Ud([B({type:Number})],e.prototype,`selectedIndex`,void 0),Ud([B({type:Boolean})],e.prototype,`borderVisible`,void 0),Ud([B({type:Boolean})],e.prototype,`disabled`,void 0),Ud([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ud([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Ud([B({type:Array})],e.prototype,`items`,void 0),Ud([Vs(`.kuc-mobile-radio-button-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-mobile-radio-button-1-26-0`,e),J(Hd),Wd=e})();var Gd=`
  kuc-mobile-text-1-26-0,
  kuc-mobile-text-1-26-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(es),
  kuc-mobile-text-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(zh),
  kuc-mobile-text-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(zh-TW),
  kuc-mobile-text-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-text-1-26-0 {
    display: block;
  }
  kuc-mobile-text-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-text-1-26-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__input-form {
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
  .kuc-mobile-text-1-26-0__input-form__prefix {
    margin-right: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-26-0__input-form__prefix[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__input-form__input {
    width: 100%;
    min-width: 20px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    text-align: left;
  }
  .kuc-mobile-text-1-26-0__input-form__input[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-text-1-26-0__input-form__input[textAlign="right"] {
    text-align: right;
  }
  .kuc-mobile-text-1-26-0__input-form__input:disabled {
    color: #999999;
    background-color: #d5d7d9;
    -webkit-text-fill-color: #999999;
    opacity: 1;
    -webkit-opacity: 1;
  }
  .kuc-mobile-text-1-26-0__input-form__suffix {
    margin-left: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-26-0__input-form__suffix[hidden] {
    display: none;
  }
`,Kd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qd;(()=>{if(qd=window.customElements.get(`kuc-mobile-text-1-26-0`),qd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Y();let t=X(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};q(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,q(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};q(this,`input`,t)}render(){return R`
        <label
          class="kuc-mobile-text-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-text-1-26-0__input-form">
          <span
            class="kuc-mobile-text-1-26-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-26-0__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-26-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-26-0>
      `}}Kd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Kd([B({type:String})],e.prototype,`error`,void 0),Kd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Kd([B({type:String})],e.prototype,`label`,void 0),Kd([B({type:String})],e.prototype,`placeholder`,void 0),Kd([B({type:String})],e.prototype,`prefix`,void 0),Kd([B({type:String})],e.prototype,`suffix`,void 0),Kd([B({type:String})],e.prototype,`textAlign`,void 0),Kd([B({type:String})],e.prototype,`value`,void 0),Kd([B({type:Boolean})],e.prototype,`disabled`,void 0),Kd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Kd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-text-1-26-0`,e),J(Gd),qd=e})();var Jd=`
  kuc-mobile-textarea-1-26-0,
  kuc-mobile-textarea-1-26-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(es),
  kuc-mobile-textarea-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(zh),
  kuc-mobile-textarea-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(zh-TW),
  kuc-mobile-textarea-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-textarea-1-26-0 {
    display: block;
  }
  kuc-mobile-textarea-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-26-0__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea-1-26-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-26-0__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea {
    width: 100%;
    height: 120px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    vertical-align: top;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Yd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xd;(()=>{if(Xd=window.customElements.get(`kuc-mobile-textarea-1-26-0`),Xd)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Y();let t=X(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};q(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,q(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};q(this,`input`,t)}render(){return R`
        <label
          class="kuc-mobile-textarea-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-textarea-1-26-0__form">
          <textarea
            class="kuc-mobile-textarea-1-26-0__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-26-0>
      `}}Yd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Yd([B({type:String})],e.prototype,`error`,void 0),Yd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Yd([B({type:String})],e.prototype,`label`,void 0),Yd([B({type:String})],e.prototype,`placeholder`,void 0),Yd([B({type:String})],e.prototype,`value`,void 0),Yd([B({type:Boolean})],e.prototype,`disabled`,void 0),Yd([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Yd([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-textarea-1-26-0`,e),J(Jd),Xd=e})();var Zd=`
  kuc-mobile-notification-1-26-0 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    visibility: hidden;
    animation-fill-mode: forwards;
    position: relative;
    top: -100px;
    left: 0;
    z-index: 10000;
  }
  kuc-mobile-notification-1-26-0:lang(es),
  kuc-mobile-notification-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-notification-1-26-0:lang(zh),
  kuc-mobile-notification-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-notification-1-26-0:lang(zh-TW),
  kuc-mobile-notification-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  .kuc-mobile-notification-fadein-1-26-0 {
    animation-name: kuc-mobile-notification-fade-in-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout-1-26-0 {
    animation-name: kuc-mobile-notification-fade-out-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification-1-26-0__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    position: relative;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification-1-26-0__notification__title {
    display: inline-block;
    vertical-align: middle;
    padding: 17px 44px 11px 44px;
    margin: 0 0 0 -20px;
    text-align: left;
    font-weight: inherit;
    font-family: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .kuc-mobile-notification-1-26-0__notification__title--html {
    white-space: normal;
  }

  .kuc-mobile-notification-1-26-0__notification__close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
    pointer-events: auto;
    outline: none;
  }
  @keyframes kuc-mobile-notification-fade-in-1-26-0 {
    0% {
      top: -100px;
      left: 0;
    }
    50% {
      top: -50px;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes kuc-mobile-notification-fade-out-1-26-0 {
    0% {
      visibility: visible;
      top: 0;
      left: 0;
    }
    50% {
      visibility: visible;
      top: -50px;
      left: 0;
    }
    100% {
      top: -100px;
      left: 0;
    }
  }
`,Qd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$d;(()=>{if($d=window.customElements.get(`kuc-mobile-notification-1-26-0`),$d)return;class e extends K{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=X(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return z`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!Number.isFinite(this.duration)||this.duration<0||(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-mobile-notification-fadeout-1-26-0`),this.classList.add(`kuc-mobile-notification-fadein-1-26-0`),this._isOpened=!0,this._setAutoCloseTimer()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this._close(),q(this,`close`)}_close(){this._isOpened=!1,this.classList.remove(`kuc-mobile-notification-fadein-1-26-0`),this.classList.add(`kuc-mobile-notification-fadeout-1-26-0`),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(U.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?yl(this.content)?R`<div
              class="kuc-mobile-notification-1-26-0__notification__title--html"
            >
              ${Kc(this.content)}
            </div>`:this.content:this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return R`
        <div class="kuc-mobile-notification-1-26-0__notification">
          <pre
            class="kuc-mobile-notification-1-26-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!---->${this._content}</pre>
          <button
            class="kuc-mobile-notification-1-26-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Qd([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Qd([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Qd([B({type:String})],e.prototype,`text`,void 0),Qd([B({type:Number})],e.prototype,`duration`,void 0),Qd([B()],e.prototype,`container`,void 0),Qd([B()],e.prototype,`content`,void 0),Qd([V()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-mobile-notification-1-26-0`,e),J(Zd),$d=e})();var ef=e=>{let t=document.createElement(`div`);return t.style.cssText=`
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-family: ${window.getComputedStyle(e).fontFamily};
  `,t},tf=e=>{let t=ef(e),n=e.cloneNode(!0);if(n.hasAttribute(`hidden`))return 0;t.appendChild(n),document.body.appendChild(t);let r=t.getBoundingClientRect().width;return document.body.removeChild(t),r},nf=`
kuc-base-mobile-datetime-calendar-header-1-26-0,
kuc-base-mobile-datetime-calendar-header-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e7e8;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    min-width: 40px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    word-wrap: normal;
    cursor: pointer;
    -webkit-appearance: button;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button-icon {
    vertical-align: middle;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center {
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-width: 186px;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center
    > :first-child {
    padding-left: 13px;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select {
    font-size: 14px;
    font-weight: 700;
    padding: 0 22.4px 0 0;
    line-height: 40px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")
    no-repeat center right 0.6em #ffffff;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select:focus,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__month {
    margin: 0 4px 0 4px;
}
`,rf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function af(e){return e>0&&e<13}function of(e){return e>=0&&e<1e4}var sf=class extends K{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=Nc(`en`)}update(e){e.has(`language`)&&(this._locale=Nc(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return R`
      <div class="kuc-base-mobile-datetime-calendar-header-1-26-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__button kuc-base-mobile-datetime-calendar-header-1-26-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__button kuc-base-mobile-datetime-calendar-header-1-26-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has(`month`)&&this._setSelectMonthWidth(this.month),e.has(`year`)&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){let t=this._monthOptions[e-1].label;if(!t)return;let n=document.createElement(`span`);n.innerText=t;let r=tf(n);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=r+35+`px`}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_generateYearOptions(){return this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`}))}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(t>=n&&(t=n-100);t<=n;t++)e.push(t);return e}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?R` ${this._getYearTemplate()}${this._getMonthTemplate()} `:R` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};q(this,`kuc:mobile-calendar-header-change`,e)}_getOptionsMonthTemplate(){return this._monthOptions.map(e=>R`
        <option
          ?selected="${parseInt(e.value,10)===this.month}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getOptionsYearTemplate(){return this._yearOptions.map(e=>R`
        <option
          ?selected="${parseInt(e.value,10)===this.year}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getMonthTemplate(){return R`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return R`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return z`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return z`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}};rf([B({type:String,attribute:`lang`,reflect:!0})],sf.prototype,`language`,void 0),rf([B({type:Number,hasChanged(e){return af(e)}})],sf.prototype,`month`,void 0),rf([B({type:Number,hasChanged(e){return of(e)}})],sf.prototype,`year`,void 0),rf([V()],sf.prototype,`_monthOptions`,void 0),rf([V()],sf.prototype,`_yearOptions`,void 0),rf([H(`.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select`)],sf.prototype,`_selectMonthEl`,void 0),rf([H(`.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select`)],sf.prototype,`_selectYearEl`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-header-1-26-0`)||(J(nf),window.customElements.define(`kuc-base-mobile-datetime-calendar-header-1-26-0`,sf));var cf=`
kuc-base-mobile-datetime-calendar-body-1-26-0,
kuc-base-mobile-datetime-calendar-body-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(es) * {
    font-family: sans-serif;
}

.kuc-base-mobile-datetime-calendar-body-1-26-0__table,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date {
    max-width: 40px;
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    box-sizing: border-box;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    padding: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected:focus {
    outline: none;
}
`,lf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},uf=class extends K{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=Nc(`en`),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=Nc(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return R`
      <table class="kuc-base-mobile-datetime-calendar-body-1-26-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){q(this,`kuc:mobile-calendar-body-blur`,{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`);this._dispatchClickEvent(n)}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};q(this,`kuc:mobile-calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--today`:``:` kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--other-month`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return R`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>R`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-26-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=mc(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return R`
      <tbody>
        ${e.map(e=>R`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return R`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${this._isToday(n)?`date`:!1}"
                    class="kuc-base-mobile-datetime-calendar-body-1-26-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
                    data-date="${e.attr}"
                    aria-label="${n[2]} ${t}"
                    @click="${this._handleClickDate}"
                  >
                    ${n[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}};lf([B({type:Number})],uf.prototype,`month`,void 0),lf([B({type:Number})],uf.prototype,`year`,void 0),lf([B({type:String,attribute:`lang`,reflect:!0})],uf.prototype,`language`,void 0),lf([B({type:String,reflect:!0})],uf.prototype,`value`,void 0),lf([V()],uf.prototype,`_month`,void 0),lf([V()],uf.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-body-1-26-0`)||(J(cf),window.customElements.define(`kuc-base-mobile-datetime-calendar-body-1-26-0`,uf));var df=`
kuc-base-mobile-datetime-calendar-footer-1-26-0,
kuc-base-mobile-datetime-calendar-footer-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button {
    background: transparent;
    border: 1px solid transparent;
    color: #206694;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group__center {
    width: 100%;
}
`,ff=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pf=class extends K{constructor(){super(...arguments),this.language=`en`,this._locale=Nc(`en`)}update(e){e.has(`language`)&&(this._locale=Nc(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),q(this,`kuc:mobile-calendar-footer-click-close`)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),q(this,`kuc:mobile-calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),q(this,`kuc:mobile-calendar-footer-click-today`)}render(){return R`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}};ff([B({type:String,attribute:`lang`,reflect:!0})],pf.prototype,`language`,void 0),ff([V()],pf.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-footer-1-26-0`)||(J(df),window.customElements.define(`kuc-base-mobile-datetime-calendar-footer-1-26-0`,pf));var mf=`
.kuc-base-mobile-datetime-calendar-1-26-0__group {
    display: inline-block;
    box-sizing: border-box;
    width: 290px;
    padding: 0 10px;
    background: #ffffff;
    text-align: center;
    font-size: 13px;
    border: 1px solid #d8d8d8;
}
`,hf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gf=class extends K{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return R`
      <div
        class="kuc-base-mobile-datetime-calendar-1-26-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-26-0>
        <kuc-base-mobile-datetime-calendar-body-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-26-0>
        <kuc-base-mobile-datetime-calendar-footer-1-26-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-26-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=Ac().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};hf([B({type:String,attribute:`lang`,reflect:!0})],gf.prototype,`language`,void 0),hf([B({type:String,reflect:!0})],gf.prototype,`value`,void 0),hf([V()],gf.prototype,`_month`,void 0),hf([V()],gf.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-1-26-0`)||(J(mf),window.customElements.define(`kuc-base-mobile-datetime-calendar-1-26-0`,gf));var _f=`
kuc-mobile-base-date-1-26-0,
kuc-mobile-base-date-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-base-date-1-26-0:lang(zh),
kuc-mobile-base-date-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-base-date-1-26-0:lang(zh-TW),
kuc-mobile-base-date-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-base-date-1-26-0:lang(es),
kuc-mobile-base-date-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-mobile-base-date-1-26-0__group {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 5.148px;
    background-color: #ffffff;
}
.kuc-mobile-base-date-1-26-0__group__input[aria-required="true"] {
    border-color: #cf4a38;
}
input.kuc-mobile-base-date-1-26-0__group__input {
    color: #000000;
    width: 100%;
    height: 31.28px;
    font-size: 99%;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: 5.148px;
    border-radius: 5.148px;
    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
    border: 1px solid #b3b3b3;
    font-weight: 400;
    -webkit-appearance: none;
    appearance: none;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
}
.kuc-mobile-base-date-1-26-0__group--disabled {
    background-color: #d5d7d9;
    opacity: 1;
}
.kuc-mobile-base-date-1-26-0__group--disabled input {
    color: #999999;
    -webkit-text-fill-color: #999999;
}
.kuc-base-mobile-date-1-26-0__calendar {
    position: absolute;
    left: 0;
    top: 39px;
    z-index: 1000;
}
.kuc-base-mobile-date-1-26-0__calendar[popover] {
    position: fixed;
    right: auto;
    bottom: auto;
    border: none;
    padding: 0;
}
.kuc-mobile-base-date-1-26-0__group__button {
    position: absolute;
    display: flex;
    right: 10px;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 100%;
    align-items: center;
}
`,vf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yf=class extends K{constructor(){super(...arguments),this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue=``,this._inputValue=``,this._scrollDebounceTimer=null,this._scrollRAF=0,this._scrollTargets=[],this._calendarWidth=0,this._calendarHeight=0,this._schedulePositionOnScroll=()=>{this._dateTimeCalendarVisible&&!this._scrollRAF&&(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._positionCalendar=()=>{if(!this._calendarEl||!this._inputEl)return;let{inputToBottom:e,inputToTop:t,inputToLeft:n,inputDateWidth:r,inputDateHeight:i}=Uc(this),a=this._calendarHeight;e>=t?this._calendarEl.style.top=`${t+i+7.5}px`:this._calendarEl.style.top=`${t-a-2}px`,this._calendarEl.style.left=`${n-r}px`},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._inputEl),i=t.includes(this._btnToggleEl);n||r||i||this._closeCalendar()}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),(e.has(`value`)||e.has(`language`))&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return R`
      <div class="kuc-mobile-base-date-1-26-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-26-0__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-26-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}_attachListeners(){this._detachListeners(),this._scrollTargets=Hc(this._inputEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_getGroupClass(){let e=``;return this.disabled&&(e+=` kuc-mobile-base-date-1-26-0__group--disabled`),this.required&&(e+=` kuc-mobile-base-date-1-26-0__group--required`),e}_handleClickOpenCalendar(e){this._dateTimeCalendarVisible?(e.preventDefault(),e.stopPropagation()):(this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_updateValueProp(){if(this.value){this._inputValue=Dc(this.language,this.value),this._calendarValue=this.value;return}let e=Ac();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_getNewCalendarValue(e){if(jc(this.language,e))return Oc(this.language,e);let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){await this.updateComplete,this._calendarEl.showPopover();let e=Vc(this._calendarEl);this._calendarWidth=e.width,this._calendarHeight=e.height,this._positionCalendar(),this._attachListeners()}}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,q(this,`kuc:mobile-base-date-change`,e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue=``;let e=this.value?this.value.slice(0,7)+`-01`:``;e||=this._calendarValue.slice(0,7)+`-01`,this._calendarValue=e,this._dispathDateChangeCustomEvent(``)}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=Ac();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e,q(this,`kuc:mobile-base-date-change`,t),this._btnToggleEl.focus()}_getCalendarTemplate(){return R`
      <kuc-base-mobile-datetime-calendar-1-26-0
        class="kuc-base-mobile-date-1-26-0__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
        @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
      >
      </kuc-base-mobile-datetime-calendar-1-26-0>
    `}_getCalendarIconTemplate(){return R`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}};vf([B({type:String})],yf.prototype,`inputId`,void 0),vf([B({type:String,attribute:`lang`,reflect:!0})],yf.prototype,`language`,void 0),vf([B({type:String,reflect:!0})],yf.prototype,`value`,void 0),vf([B({type:Boolean})],yf.prototype,`disabled`,void 0),vf([B({type:Boolean})],yf.prototype,`inputAriaInvalid`,void 0),vf([B({type:Boolean})],yf.prototype,`required`,void 0),vf([H(`.kuc-mobile-base-date-1-26-0__group__button`)],yf.prototype,`_btnToggleEl`,void 0),vf([H(`.kuc-mobile-base-date-1-26-0__group__input`)],yf.prototype,`_inputEl`,void 0),vf([H(`.kuc-base-mobile-date-1-26-0__calendar`)],yf.prototype,`_calendarEl`,void 0),vf([V()],yf.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-mobile-base-date-1-26-0`)||(J(_f),window.customElements.define(`kuc-mobile-base-date-1-26-0`,yf));var bf=`
kuc-mobile-date-picker-1-26-0,
kuc-mobile-date-picker-1-26-0 * {
  color: #333333;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-date-picker-1-26-0:lang(zh),
kuc-mobile-date-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-date-picker-1-26-0:lang(zh-TW),
kuc-mobile-date-picker-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-date-picker-1-26-0:lang(es),
kuc-mobile-date-picker-1-26-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-date-picker-1-26-0 {
  font-size: 13px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-date-picker-1-26-0[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-mobile-date-picker-1-26-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  white-space: nowrap;
  margin: 0 0 4px 0;
}
.kuc-mobile-date-picker-1-26-0__group__base__date {
  width: 130px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.kuc-mobile-date-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,xf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sf;(()=>{if(Sf=window.customElements.get(`kuc-mobile-date-picker-1-26-0`),Sf)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._dateConverted=``,this._inputValue=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:!sl(this.value)||(this._dateConverted=qc(this.value),this._dateConverted!==``&&!ul(this._dateConverted))?(this.throwErrorAfterUpdateComplete(cc.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&this.value!==void 0&&this.value!==``&&(this.value=this._dateConverted)}update(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}render(){return R`
        <div class="kuc-mobile-date-picker-1-26-0__group">
          <label
            class="kuc-mobile-date-picker-1-26-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-26-0>
          </label>
          <kuc-mobile-base-date-1-26-0
            class="kuc-mobile-date-picker-1-26-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-26-0>
          <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-26-0>
        </div>
      `}_updateInputValue(){this._inputValue=this.value===void 0||this.value===``?``:this.value}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){q(this,`change`,e)}}xf([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),xf([B({type:String})],e.prototype,`error`,void 0),xf([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),xf([B({type:String})],e.prototype,`label`,void 0),xf([B({type:Boolean})],e.prototype,`disabled`,void 0),xf([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),xf([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),xf([B({type:String})],e.prototype,`value`,void 0),xf([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),xf([V()],e.prototype,`_inputValue`,void 0),window.customElements.define(`kuc-mobile-date-picker-1-26-0`,e),J(bf),Sf=e})();var Cf=`
kuc-mobile-time-picker-1-26-0,
kuc-mobile-time-picker-1-26-0 * {
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-time-picker-1-26-0:lang(zh),
kuc-mobile-time-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}
kuc-mobile-time-picker-1-26-0:lang(zh-TW),
kuc-mobile-time-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}
kuc-mobile-time-picker-1-26-0:lang(es),
kuc-mobile-time-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-mobile-time-picker-1-26-0 {
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-time-picker-1-26-0[hidden] {
  display: none;
}
.kuc-mobile-time-picker-1-26-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-time-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-base-mobile-time-1-26-0__group__wrapper {
  padding-left: 0.5em;
  max-width: 10px;
}
`,wf=`
kuc-base-mobile-time-1-26-0,
kuc-base-mobile-time-1-26-0 * {
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-time-1-26-0:lang(zh),
kuc-base-mobile-time-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}

kuc-base-mobile-time-1-26-0:lang(zh-TW),
kuc-base-mobile-time-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}

kuc-base-mobile-time-1-26-0:lang(es),
kuc-base-mobile-time-1-26-0:lang(es) * {
  font-family: sans-serif;
}

kuc-base-mobile-time-1-26-0 {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

kuc-base-mobile-time-1-26-0[hidden] {
  display: none;
}

.kuc-base-mobile-time-1-26-0__group {
  padding: 0;
  margin: 0;
  height: 31.28px;
  border: 1px solid #b3b3b3;
  border-radius: 5.2px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
}

.kuc-base-mobile-time-1-26-0__group--required {
  border-color: #cf4a38;
}

.kuc-base-mobile-time-1-26-0__group__hours {
  padding: 5.148px 7.722px;
}

.kuc-base-mobile-time-1-26-0__group__minutes {
  padding: 5.148px 7.722px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours,
.kuc-base-mobile-time-1-26-0__group__minutes {
  font-size: 99%;
  height: 100%;
  color: #000000;
  border: none;
  border-radius: 5.148px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.kuc-base-mobile-time-1-26-0__group__colon {
  color: #000000;
}

.kuc-base-mobile-time-1-26-0__group__hours:disabled
+ .kuc-base-mobile-time-1-26-0__group__colon {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group--disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  background-color: #d5d7d9;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours:disabled,
.kuc-base-mobile-time-1-26-0__group__minutes:disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours:focus {
  outline: none;
}

.kuc-base-mobile-time-1-26-0__group__minutes:focus {
  outline: none;
}
`,Tf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ef=class extends K{constructor(e){super(),this.guid=``,this.language=`en`,this.value=``,this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours=``,this._minutes=``,this._suffix=``,this._locale=Nc(`en`);let t=X(e);Object.assign(this,t)}update(e){e.has(`language`)&&(this._locale=Nc(this.language)),e.has(`hour12`)&&(this._hourOptions=Fc(this.hour12)),e.has(`_timeStep`)&&(this._minuteOptions=Pc(this._timeStep)),super.update(e)}render(){return R`
      <fieldset
        class="kuc-base-mobile-time-1-26-0__group${this.disabled?` kuc-base-mobile-time-1-26-0__group--disabled`:``}${this.required?` kuc-base-mobile-time-1-26-0__group--required`:``}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-26-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-26-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-26-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}_updateInputValue(){let e=bc(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+` `+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value;this._minutes=n;let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value.split(` `);n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix=``);let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_getTimeValueString(){let e=`${this._hours}:${this._minutes}`;return this._suffix?wc(`${e} ${this._suffix}`):wc(e)}_dispatchEventTimeChange(e,t){let n=e===`:`?``:e,r={value:n,oldValue:t===`:`?``:t};r.error=cl(n)?``:this._locale.INVALID_TIME_FORMAT,q(this,`kuc:base-mobile-time-change`,r)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(e=>R` <option value="${e.value}">${e.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(e=>R` <option value="${e.value}">${e.label}</option> `)}};Tf([B({type:String})],Ef.prototype,`guid`,void 0),Tf([B({type:String,attribute:`lang`,reflect:!0})],Ef.prototype,`language`,void 0),Tf([B({type:String})],Ef.prototype,`value`,void 0),Tf([B({type:Boolean})],Ef.prototype,`disabled`,void 0),Tf([B({type:Boolean})],Ef.prototype,`hour12`,void 0),Tf([B({type:Boolean})],Ef.prototype,`required`,void 0),Tf([V()],Ef.prototype,`_timeStep`,void 0),Tf([V()],Ef.prototype,`_hours`,void 0),Tf([V()],Ef.prototype,`_minutes`,void 0),Tf([V()],Ef.prototype,`_suffix`,void 0),Tf([V()],Ef.prototype,`_hourOptions`,void 0),Tf([V()],Ef.prototype,`_minuteOptions`,void 0),Tf([H(`.kuc-base-mobile-time-1-26-0__group__hours`)],Ef.prototype,`_hoursEl`,void 0),Tf([H(`.kuc-base-mobile-time-1-26-0__group__minutes`)],Ef.prototype,`_minutesEl`,void 0),window.customElements.get(`kuc-base-mobile-time-1-26-0`)||(J(wf),window.customElements.define(`kuc-base-mobile-time-1-26-0`,Ef));var Df=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Of;(()=>{if(Of=window.customElements.get(`kuc-mobile-time-picker-1-26-0`),Of)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue=``,this._errorFormat=``,this._isSelectError=!1,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``||cl(this.value)?!0:(this.throwErrorAfterUpdateComplete(cc.VALUE),!1)}willUpdate(){this.value!==void 0&&this.value!==``&&(this.value=Jc(this.value))}update(e){e.has(`value`)&&!this._isSelectError&&(this._inputValue=this.value===void 0?``:this.value||``,this._errorFormat=``),super.update(e)}render(){return R`
        <div class="kuc-mobile-time-picker-1-26-0__group">
          <label
            class="kuc-mobile-time-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </label>
          <div class="kuc-base-mobile-time-1-26-0__group__wrapper">
            <kuc-base-mobile-time-1-26-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-26-0>
          </div>
          <kuc-base-mobile-error-1-26-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-26-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};this._inputValue=e.detail.value,e.detail.error?(this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error=``,q(this,`change`,t)):(this._isSelectError=!1,this._errorFormat=``,this.value=e.detail.value,q(this,`change`,t))}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}Df([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Df([B({type:String})],e.prototype,`error`,void 0),Df([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Df([B({type:String})],e.prototype,`label`,void 0),Df([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),Df([B({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),Df([B({type:Boolean})],e.prototype,`disabled`,void 0),Df([B({type:Boolean})],e.prototype,`hour12`,void 0),Df([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Df([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Df([V()],e.prototype,`_inputValue`,void 0),Df([V()],e.prototype,`_errorFormat`,void 0),window.customElements.define(`kuc-mobile-time-picker-1-26-0`,e),J(Cf),Of=e})();var kf=`
kuc-mobile-datetime-picker-1-26-0,
kuc-mobile-datetime-picker-1-26-0 * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-26-0:lang(zh),
kuc-mobile-datetime-picker-1-26-0:lang(zh) * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-26-0:lang(zh-TW),
kuc-mobile-datetime-picker-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-datetime-picker-1-26-0:lang(es),
kuc-mobile-datetime-picker-1-26-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-datetime-picker-1-26-0 {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker-1-26-0[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-26-0__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker-1-26-0__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker-1-26-0__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-26-0__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker-1-26-0__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker-1-26-0__group__input--time {
max-width: 10px;
}
`,Af=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jf;(()=>{if(jf=window.customElements.get(`kuc-mobile-datetime-picker-1-26-0`),jf)return;class e extends K{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue=``,this._previousDateValue=``,this._dateValue=``,this._timeValue=``,this._errorFormat=``,this._errorText=``,this._GUID=Y();let t=X(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=qc(this._dateAndTime.date),!(fl(this._dateAndTime.date,this._dateAndTime.time)&&ul(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(cc.VALUE),!1):!0}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat=``,this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat=``,this.value===``||this.value===void 0?this._previousTimeValue=``:(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString())}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&ul(t)?Jc(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){let e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue=``,this._timeValue=``}else this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:`00:00`};let[i,a,o]=r.split(`:`),s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}render(){return R`
        <fieldset
          class="kuc-mobile-datetime-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-26-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-26-0__group__input">
            <kuc-mobile-base-date-1-26-0
              class="kuc-mobile-datetime-picker-1-26-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${this.error!==``}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-26-0>
            <kuc-base-mobile-time-1-26-0
              class="kuc-mobile-datetime-picker-1-26-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-26-0>
          </div>
          <kuc-base-mobile-error-1-26-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-26-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):t=e.detail.value,this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0,e.detail.error?(this._errorFormat=e.detail.error,this.error=``):this._errorFormat=``;let t=e.detail.value;this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat?void 0:this._getDateTimeString(),i=this._errorFormat?void 0:r;this.value=i;let a=this._errorFormat?void 0:r;this.value=a;let o={value:i,oldValue:n,changedPart:t};q(this,`change`,o)}_getDateTimeString(){if(this._dateValue===``&&this._timeValue===``)return``;if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}Af([B({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Af([B({type:String})],e.prototype,`error`,void 0),Af([B({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Af([B({type:String})],e.prototype,`label`,void 0),Af([B({type:String,attribute:`lang`,reflect:!0,converter:Gc})],e.prototype,`language`,void 0),Af([B({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),Af([B({type:Boolean})],e.prototype,`disabled`,void 0),Af([B({type:Boolean})],e.prototype,`hour12`,void 0),Af([B({type:Boolean})],e.prototype,`requiredIcon`,void 0),Af([B({type:Boolean,attribute:`hidden`,reflect:!0,converter:G})],e.prototype,`visible`,void 0),Af([V()],e.prototype,`_dateValue`,void 0),Af([V()],e.prototype,`_timeValue`,void 0),Af([V()],e.prototype,`_errorFormat`,void 0),Af([V()],e.prototype,`_errorText`,void 0),window.customElements.define(`kuc-mobile-datetime-picker-1-26-0`,e),J(kf),jf=e})();var Mf={d:(e,t)=>{if(Array.isArray(t))for(var n=0;n<t.length;){var r=t[n++],i=t[n++];Mf.o(e,r)?i===0&&n++:i===0?Object.defineProperty(e,r,{enumerable:!0,value:t[n++]}):Object.defineProperty(e,r,{enumerable:!0,get:i})}else for(var r in t)Mf.o(t,r)&&!Mf.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Mf.d({},[`r`,0,`1.26.0`]);var Nf={d:(e,t)=>{if(Array.isArray(t))for(var n=0;n<t.length;){var r=t[n++],i=t[n++];Nf.o(e,r)?i===0&&n++:i===0?Object.defineProperty(e,r,{enumerable:!0,value:t[n++]}):Object.defineProperty(e,r,{enumerable:!0,get:i})}else for(var r in t)Nf.o(t,r)&&!Nf.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Nf.d({},[`$`,0,void 0]);async function Pf(e,t,n){let r=new URLSearchParams;r.append(`_lc`,kintone.getLoginUser().language),r.append(`_ref`,encodeURI(window.location.href));let i=await(await fetch(`/k/api/directory/search.json?${r}`,{method:`POST`,headers:{"Content-Type":`application/json; charset=utf-8`},body:JSON.stringify({term:e,appId:t,recordId:n,spaceId:null})})).json();if(console.log(`directory search response:`,i),!i.result)return[];let{users:a,orgs:o,groups:s}=i.result;return[...a.map(e=>({code:e.code,name:e.name,type:`USER`,avatar:e.photo?.size_24||``})),...o.map(e=>({code:e.code,name:e.name,type:`ORGANIZATION`,avatar:`https://static.cybozu.com/contents/k/image/argo/preset/user/organization_48.png`})),...s.map(e=>({code:e.code,name:e.name,type:`GROUP`,avatar:`https://static.cybozu.com/contents/k/image/argo/preset/user/group_48.png`}))]}var Q=e=>typeof e==`string`,Ff=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},If=e=>e==null?``:String(e),Lf=e=>Q(e)&&/^[A-Za-z0-9_@.-]{1,128}$/.test(e)&&!e.includes(`..`)&&![`__proto__`,`constructor`,`prototype`].includes(e),Rf=e=>e?.callbackApi??e?.constructor?.callbackApi,zf=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},Bf=/###/g,Vf=e=>e&&e.includes(`###`)?e.replace(Bf,`.`):e,Hf=e=>!e||Q(e),Uf=(e,t,n)=>{let r=Q(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(Hf(e))return{};let t=Vf(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return Hf(e)?{}:{obj:e,k:Vf(r[i])}},Wf=(e,t,n)=>{let{obj:r,k:i}=Uf(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=Uf(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=Uf(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},Gf=(e,t,n,r)=>{let{obj:i,k:a}=Uf(e,t,Object);i[a]=i[a]||[],i[a].push(n)},Kf=(e,t)=>{let{obj:n,k:r}=Uf(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},qf=(e,t,n)=>{let r=Kf(e,n);return r===void 0?Kf(t,n):r},Jf=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?Q(e[r])||e[r]instanceof String||Q(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Jf(e[r],t[r],n):e[r]=t[r]);return e},Yf=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),Xf={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},Zf=e=>Q(e)?e.replace(/[&<>"'\/]/g,e=>Xf[e]):e,Qf=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},$f=[` `,`,`,`?`,`!`,`;`],ep=new Qf(20),tp=(e,t,n)=>{t||=``,n||=``;let r=$f.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=ep.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},np=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],typeof t!=`function`&&a!==`__proto__`||Object.prototype.hasOwnProperty.call(i,a)||(t=void 0),t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},rp=e=>e?.replace(/_/g,`-`),ip={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},ap=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||ip,this.options=t,this.debug=t.debug,this.seen=new Set}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}once(e,t,...n){return!this.debug||this.seen.has(e)||this.seen.size>=1e3?null:(this.seen.add(e),this[t](...n))}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Q(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Q(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},op=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){(typeof e==`string`?e.split(` `):[e]).forEach(e=>{this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])})}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},sp=new WeakSet,cp=class extends op{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.logger=ap.create(`resourceStore`),this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}deprecateDottedLng(e){this.logger.once(e,`deprecate`,`${e}: a dotted language ('en.translation.key') that carries the namespace and key is removed in v27; pass language, namespace and key as separate arguments`)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?(this.deprecateDottedLng(`getResource`),o=e.split(`.`)):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Q(n)&&i?o.push(...n.split(i)):o.push(n)));let s=Kf(this.data,o);return s==null&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s!=null||!a||!Q(n)?s:np(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(this.deprecateDottedLng(`addResource`),o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),Wf(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Q(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(this.deprecateDottedLng(`addResourceBundle`),o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=Kf(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?Jf(s,n,i):s={...s,...n},Wf(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>{let n=t[e];return sp.has(n)?!0:!n||Object.keys(n).length===0?!1:(typeof n==`object`&&sp.add(n),!0)})}toJSON(){return this.data}},lp={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},up=Symbol(`i18next/PATH_KEY`);function dp(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===up?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function fp(e,t){let{[up]:n}=e(dp()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var pp=e=>!Q(e)&&typeof e!=`boolean`&&typeof e!=`number`,mp=class e extends op{constructor(e,t={}){super(),zf([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`,`ownPostProcessors`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=ap.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=pp(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!tp(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Q(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Q(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=fp(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?fp(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!Q(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,ee=m;y&&!m&&x&&(ee=T);let te=pp(ee),E=Object.prototype.toString.apply(ee);if(y&&ee&&te&&!_.includes(E)&&!(Q(v)&&Array.isArray(ee))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||(this.logger.warn(`accessing an object - but returnObjects options is not enabled!`),this.logger.once(`returnedObject`,`deprecate`,`accessing an object without returnObjects returns a sentence about it today; from v27 t() returns the key, as for a missing key (returnedObjectHandler can keep today's text)`));let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,ee,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(ee),t=e?[]:{},n=e?g:h;for(let e in ee)if(Object.prototype.hasOwnProperty.call(ee,e)){let r=`${n}${o}${e}`;t[e]=x&&!m?this.translate(r,{...i,defaultValue:pp(T)?T[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=ee[e])}m=t}}else if(y&&Q(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,p,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i,void 0,this.utils?.hasLoadedNamespace),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Q(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Q(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Q(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(o.forEach(e=>{this.logger.debug&&lp.processors[e]&&this.ownPostProcessors&&!this.ownPostProcessors.has(e)&&this.logger.once(e,`deprecate`,`postProcess: '${e}' was registered with use() on another i18next instance; from v27 post-processors are per instance, so call use() with it on this instance too`)}),e=lp.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Q(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?fp(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Q(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Q(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Q(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},hp=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ap.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=rp(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=rp(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Q(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}let t=this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e;return this.logger.debug&&Q(e)&&this.deprecateBareCode(e,t),t}deprecateBareCode(e,t){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{return}this.options.lowerCaseLng&&(n=n.toLowerCase()),n!==t&&this.logger.once(e,`deprecate`,`language code '${e}' is used as '${t}'; i18next v27 canonicalizes it to '${n}', use '${n}' in lng, fallbackLng, supportedLngs and the resources`)}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!(!e.includes(`-`)||r.includes(`-`)||e.slice(0,e.indexOf(`-`))!==r))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Q(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||Q(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=Q(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Q(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):Q(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{let t=this.formatLanguageCode(e);l.includes(t)||u(t)}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},gp={zero:0,one:1,two:2,few:3,many:4,other:5},_p={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},vp=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=ap.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=rp(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),_p;if(!e.match(/-|_/))return _p;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>gp[e]-gp[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},yp=(e,t,n,r=`.`,i=!0)=>{let a=qf(e,t,n);return a==null&&i&&Q(n)&&(a=np(e,n,r),a===void 0&&(a=np(t,n,r))),a},bp=class{constructor(e={}){this.logger=ap.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;if(a||s||f||m){let e=Object.entries({prefixEscaped:a,suffixEscaped:s,nestingPrefixEscaped:f,nestingSuffixEscaped:m}).filter(([,e])=>e).map(([e])=>e);this.logger.once(e.join(),`deprecate`,`interpolation.${e.join(`, interpolation.`)}: the regex-escaped delimiter options are removed in v27; pass the literal delimiters as prefix, suffix, nestingPrefix and nestingSuffix`)}this.escape=t===void 0?Zf:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?Yf(i):a||`{{`,this.suffix=o?Yf(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?Yf(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?Yf(l):``,this.nestingPrefix=d?Yf(d):f||Yf(`$t(`),this.nestingSuffix=p?Yf(p):m||Yf(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']|"[^"]*"|'[^']*'|\\((?:[^()"']|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=e,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=e=>{if(!e.includes(this.formatSeparator)){let i=yp(t,c,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(yp(t,c,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let u=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables,f=[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?(this.escape===Zf&&this.options?.interpolation?.escapeValue!==!1&&Q(e)&&e.includes(`/`)&&this.logger.once(`/`,`deprecate`,`escapeValue renders '/' in a value as '&#x2F;' today; from v27 the default escape leaves '/' as it is`),this.escape(e)):e}],p=[],m=0;return f.forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i.index-m,c=p.find(([e,t])=>n>=e&&n<t);if(c){t.regex.lastIndex=c[1]+m;continue}let f=i[1].trim();if(a=l(f),a===void 0){if(typeof u==`function`){let t=u(e,i,r);a=Q(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,f))a=``;else if(d){this.logger.debug&&this.logger.once(`${s}\u0000${i[0]}`,`warn`,`missed to pass in variable ${f} for interpolating ${s}`),a=i[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),a=``}else!Q(a)&&!this.useRawValueToEscape&&(a=If(a));let h=If(t.safeValue(a));if(e=e.slice(0,i.index)+h+e.slice(i.index+i[0].length),d?(t.regex===this.regexpUnescape?p.push([i.index,i.index+h.length]):m+=h.length-i[0].length,t.regex.lastIndex+=h.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${Yf(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e},s=new RegExp(this.nestingRegexp),c=``,l=0;for(;r=s.exec(e);){let u=[];a={...n},a=a.replace&&!Q(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(d!==-1&&(u=r[1].slice(d).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,d)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Q(i))return i;Q(i)||(i=If(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),u.length&&(i=u.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),c+=e.slice(l,r.index)+If(i),l=s.lastIndex,this.regexp.lastIndex=0}return l?c+e.slice(l):e}},xp=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},Sp=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o;try{o=r+JSON.stringify(a)}catch{return e(rp(r),i)(n)}let s=t[o];return s||(s=e(rp(r),i),t[o]=s),s(n)}},Cp=e=>(t,n,r)=>e(rp(n),r)(t),wp=class{constructor(e={}){this.logger=ap.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?Sp:Cp;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Sp(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=xp(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},Tp=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Ep=class extends op{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=ap.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r),this.callbackApi=Rf(this.backend),this.backend&&this.callbackApi===void 0&&(this.backend.read||this.backend.create)&&this.logger.deprecate(`backend: set callbackApi to declare the calling convention (true: read(language, namespace, callback) and create(languages, namespace, key, fallbackValue, callback, options); false: both return a promise or a value); guessing it from the number of parameters is deprecated`)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:!n.reload&&this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{Gf(n.loaded,[i],a),Tp(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&s&&r<this.maxRetries?setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i):a(o,s)},s=this.backend[n].bind(this.backend);if(this.callbackApi===!1||this.callbackApi===void 0&&s.length===2)try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}else return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Q(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Q(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}noticeDevFallback(e){e===`dev`&&this.devIsDefaultFallback&&this.logger.once(`dev`,`warn`,`language 'dev' is requested because fallbackLng is not set (its default is ['dev']); i18next v27 defaults to fallbackLng: false and loads and saves missing keys in the requested language instead. Set fallbackLng to your source language, or to 'dev' to keep this behavior`)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.noticeDevFallback(r),this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{},s=this.newestCloneHasLoadedNamespace||this.services?.utils?.hasLoadedNamespace){if(s&&!s(t))this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);else if(n!=null&&n!==``){if(this.backend?.create){e?.forEach?.(e=>this.noticeDevFallback(e));let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(this.callbackApi===!1||this.callbackApi===void 0&&c.length<6)try{let i;i=this.callbackApi===!1||c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},Dp=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Q(e[1])&&(t.defaultValue=e[1]),Q(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Op=e=>(Q(e.ns)&&(e.ns=[e.ns]),Q(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Q(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),kp=()=>{},Ap,jp=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Mp=class e extends op{constructor(e={},t){if(super(),this.options=Op(e),this.services={ownPostProcessors:new Set},this.logger=ap,this.modules={external:[]},jp(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Q(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=e.fallbackLng===void 0&&this.options.fallbackLng===void 0,r=Dp();this.options={...r,...this.options,...Op(e)},this.options.interpolation={...r.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);let i=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){Ap&&Ap!==this&&Ap.modules.logger!==this.modules.logger&&ap.deprecate(`init: this init() replaces the logger another i18next instance set with use(), as the logger is shared in v26; from v27 each instance keeps its own logger`),Ap=this.modules.logger?this:void 0,this.modules.logger?ap.init(i(this.modules.logger),this.options):ap.init(null,this.options),this.pendingWarnings?.forEach(e=>this.logger.warn(e)),this.pendingWarnings=void 0;let e;e=this.modules.formatter?this.modules.formatter:wp;let t=new hp(this.options);this.store=new cp(this.options.resources,this.options);let r=this.services;r.logger=ap,r.resourceStore=this.store,r.languageUtils=t,r.pluralResolver=new vp(t,{prepend:this.options.pluralSeparator}),e&&(r.formatter=i(e),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new bp(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this),reloadResources:this.reloadResources.bind(this)},r.backendConnector=new Ep(i(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.devIsDefaultFallback=n,r.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(r.languageDetector=i(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options),r.languageDetector.async&&Rf(r.languageDetector)===void 0&&this.logger.deprecate(`languageDetector: set callbackApi to declare how the async detect() answers (true: detect(callback); false: detect() returns a promise); guessing it from the number of parameters is deprecated`)),this.modules.i18nFormat&&(r.i18nFormat=i(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new mp(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=kp,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let a=Ff(),o=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),a.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?o():setTimeout(o,0),a}loadResources(e,t=kp){let n=t,r=Q(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=Ff();if(typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),!e){let t=Object.keys(this.services.backendConnector.state).map(e=>e.split(`|`)[0]);e=[...new Set([...this.languages||[],...t])].filter(e=>e!==`cimode`)}return t||=this.options.ns,n||=kp,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);let t=t=>{if(this.modules[t]&&this.modules[t]!==e){let e=`use: this ${t} replaces the ${t} passed to an earlier use() call; only one ${t} is used per instance`;this.isInitializing||this.isInitialized?this.logger.warn(e):(this.pendingWarnings=this.pendingWarnings||[]).push(e)}this.modules[t]=e};return e.type===`backend`&&t(`backend`),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&t(`languageDetector`),e.type===`i18nFormat`&&t(`i18nFormat`),e.type===`postProcessor`&&(lp.addPostProcessor(e),this.services.ownPostProcessors?.add(e.name)),e.type===`formatter`&&t(`formatter`),e.type===`3rdParty`&&this.modules.external.push(e),this}hydrate(e,t){return this.options.isClone?this:this.services.resourceStore?(e&&!this.initializedStoreOnce&&(this.services.resourceStore.data=e,Object.values(e).forEach(e=>{Object.keys(e).forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)})}),this.initializedStoreOnce=!0,this.isInitialized=!0),t&&!this.initializedLanguageOnce&&(this.changeLanguage(t),this.initializedLanguageOnce=!0),this):(this.logger.warn(`hydrate: call init() first, the instance has no resource store yet`),this)}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=Ff();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Q(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Q(t)?[t]:t);a&&this.logger.debug&&!Lf(a)&&![].concat(this.options.supportedLngs||[],this.services.languageUtils.getFallbackCodes(this.options.fallbackLng,a),this.options.preload||[]).includes(a)&&!Object.prototype.hasOwnProperty.call(this.store.data,a)&&this.logger.once(`lng:${a}`,`deprecate`,`changeLanguage: the language code '${a.slice(0,64)}' comes from lng, changeLanguage() or the language detector and is not configured; from v27 such a code is refused unless it has only letters, digits, '-', '_', '@' and '.' (no '..'), at most 128 characters. Set supportedLngs, or check the code before passing it on`),a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};if(!e&&this.services.languageDetector&&!this.services.languageDetector.async)a(this.services.languageDetector.detect());else if(!e&&this.services.languageDetector&&this.services.languageDetector.async){let e=Rf(this.services.languageDetector);e===!1||e===void 0&&this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a)}else a(e);return n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=fp(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=fp(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=fp(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Q(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?this.translator.translate(...e):(this.logger.warn(`t: called before init(); returning an empty string`),``)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}if(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages)return!0;let{languageUtils:o}=this.services,s=t.lng?o.isSupportedCode(n)&&o.toResolveHierarchy(n,!1)[0]:n;return!(s&&!a(s,e)||r&&!a(i,e))}loadNamespaces(e,t){let n=Ff();return this.options.ns?(Q(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=Ff();Q(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`ltr`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new hp(Dp());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=kp){let r=t.forkResourceStore;r&&(t={...t},delete t.forkResourceStore);let i={...this.options,preload:!1,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={...a.services.utils,hasLoadedNamespace:a.hasLoadedNamespace.bind(a),reloadResources:a.reloadResources.bind(a)},r){let e=t=>{let n=Array.isArray(t)?[...t]:{...t};return Object.keys(n).forEach(t=>{n[t]&&typeof n[t]==`object`&&(n[t]=e(n[t]))}),n};a.store=new cp(e(this.store.data),i),a.services.resourceStore=a.store}if(t.interpolation){let e={...Dp().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new bp(n)}return a.translator=new mp(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.newestCloneHasLoadedNamespace=a.hasLoadedNamespace.bind(a),a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();Mp.createInstance,Mp.dir,Mp.init,Mp.loadResources,Mp.reloadResources,Mp.use,Mp.changeLanguage,Mp.getFixedT,Mp.t,Mp.exists,Mp.setDefaultNamespace,Mp.hasLoadedNamespace,Mp.loadNamespaces,Mp.loadLanguages,Mp.init({lng:(()=>{try{let{language:e}=kintone.getLoginUser();if(e)return e}catch(e){console.error(`Error getting user language:`,e)}return kintone.api.url(`/k/v1/records.json`).includes(`kintone.com`)?`en`:`ja`})(),fallbackLng:`en`,initImmediate:!1,interpolation:{escapeValue:!1},resources:{en:{translation:{config:{heading:`PollBuddy Settings`,subtitle:`Note: these settings apply per app.`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`App ID of the repository app where questionnaire data is stored`,createRepositoryButton:`Create New Repository App`,creatingRepositoryButton:`Creating...`,createRepositoryInfo:`Creating a new app will automatically fill in its App ID above. Settings are not applied until you press Save.`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`API token for the repository app`,repositoryTokenInfo:`If you just created a new repository app, issue a new API token and enter it here.`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`Allow users without app management permission to create polls`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`This will create a new app to store questionnaire data. Continue?`,repositoryAppIdRequired:`Repository App ID is required`,createRepositorySuccess:`Repository app created! App ID: {{appId}}`,createRepositoryError:`Failed to create the repository app`,saveSuccess:`Settings saved!`},form:{titleLabel:`Title`,titlePlaceholder:`Enter your question`,optionsLabel:`Options`,optionPlaceholder:`Option {{number}}`,addOption:`+ Add option`,deadlineLabel:`Deadline`,mentionsLabel:`Participants`,mentionsPlaceholder:`Search by name or code`},questionnaire:{badge:`Poll`,votesCount_one:`{{count}} vote ({{percent}}%)`,votesCount_other:`{{count}} votes ({{percent}}%)`,voteButton:`Vote`,votingButton:`Submitting...`,votingClosedError:`This poll has closed`,voteSubmitError:`Failed to submit your vote. Please try again`},questionnaireButton:{mentionButtonLabel:`Poll`,mentionButtonTitle:`Create a poll`,dialogTitle:`Create a poll`,createButton:`Create`,cancelButton:`Cancel`,commentBody:`A poll has started: {{title}}
Deadline: {{deadline}}`,dateLocale:`en-US`},validation:{titleRequired:`Please enter a title`,optionsMinimum:`Please enter at least two options`,deadlineRequired:`Please enter a deadline`,deadlineInPast:`The deadline must be in the future`},common:{remove:`Remove`}}},ja:{translation:{config:{heading:`意思決定くん設定`,subtitle:`アプリ毎の設定になりますのでご注意ください。`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`アンケートデータを保存するリポジトリアプリのApp ID`,createRepositoryButton:`リポジトリアプリを新規作成`,creatingRepositoryButton:`作成中...`,createRepositoryInfo:`新規作成すると、上の欄に新しいApp IDが自動で入力されます。保存ボタンを押すまで設定は反映されません。`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`リポジトリアプリのAPIトークン`,repositoryTokenInfo:`リポジトリアプリを新規作成した場合は、新しいAPIトークンを発行して入力してください。`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`アプリの管理者権限を持たないユーザーにもアンケート作成を許可する`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`アンケートデータを保存する新しいアプリを作成します。よろしいですか？`,repositoryAppIdRequired:`Repository App ID は必須項目です`,createRepositorySuccess:`リポジトリアプリを作成しました！App ID: {{appId}}`,createRepositoryError:`リポジトリアプリの作成に失敗しました`,saveSuccess:`設定を保存しました！`},form:{titleLabel:`タイトル`,titlePlaceholder:`質問を入力してください`,optionsLabel:`選択肢`,optionPlaceholder:`選択肢 {{number}}`,addOption:`＋ 選択肢を追加`,deadlineLabel:`締め切り`,mentionsLabel:`参加者`,mentionsPlaceholder:`名前またはコードで検索`},questionnaire:{badge:`アンケート`,votesCount:`{{count}}票 ({{percent}}%)`,voteButton:`投票する`,votingButton:`送信中...`,votingClosedError:`このアンケートは終了しました`,voteSubmitError:`投票に失敗しました。もう一度お試しください`},questionnaireButton:{mentionButtonLabel:`アンケート`,mentionButtonTitle:`アンケートを作成する`,dialogTitle:`アンケートを作成`,createButton:`作成`,cancelButton:`キャンセル`,commentBody:`アンケートが開始されました: {{title}}
回答期限: {{deadline}}`,dateLocale:`ja-JP`},validation:{titleRequired:`タイトルを入力してください`,optionsMinimum:`選択肢を2つ以上入力してください`,deadlineRequired:`締め切りを入力してください`,deadlineInPast:`締め切りは未来の日時を指定してください`},common:{remove:`削除`}}},es:{translation:{config:{heading:`Configuración de PollBuddy`,subtitle:`Ten en cuenta que esta configuración se aplica por aplicación.`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`App ID de la aplicación repositorio donde se guardan los datos de las encuestas`,createRepositoryButton:`Crear nueva aplicación repositorio`,creatingRepositoryButton:`Creando...`,createRepositoryInfo:`Al crearla, el nuevo App ID se rellenará automáticamente arriba. Los cambios no se aplican hasta que pulses Guardar.`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`Token de API de la aplicación repositorio`,repositoryTokenInfo:`Si acabas de crear una nueva aplicación repositorio, genera un nuevo token de API e introdúcelo aquí.`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`Permitir crear encuestas a usuarios sin permisos de administración de la aplicación`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`Se creará una nueva aplicación para guardar los datos de las encuestas. ¿Deseas continuar?`,repositoryAppIdRequired:`El Repository App ID es obligatorio`,createRepositorySuccess:`¡Aplicación repositorio creada! App ID: {{appId}}`,createRepositoryError:`No se pudo crear la aplicación repositorio`,saveSuccess:`¡Configuración guardada!`},form:{titleLabel:`Título`,titlePlaceholder:`Escribe tu pregunta`,optionsLabel:`Opciones`,optionPlaceholder:`Opción {{number}}`,addOption:`+ Añadir opción`,deadlineLabel:`Fecha límite`,mentionsLabel:`Participantes`,mentionsPlaceholder:`Buscar por nombre o código`},questionnaire:{badge:`Encuesta`,votesCount_one:`{{count}} voto ({{percent}}%)`,votesCount_other:`{{count}} votos ({{percent}}%)`,voteButton:`Votar`,votingButton:`Enviando...`,votingClosedError:`Esta encuesta ha finalizado`,voteSubmitError:`No se pudo enviar tu voto. Inténtalo de nuevo`},questionnaireButton:{mentionButtonLabel:`Encuesta`,mentionButtonTitle:`Crear una encuesta`,dialogTitle:`Crear una encuesta`,createButton:`Crear`,cancelButton:`Cancelar`,commentBody:`Se ha iniciado una encuesta: {{title}}
Fecha límite: {{deadline}}`,dateLocale:`es-ES`},validation:{titleRequired:`Introduce un título`,optionsMinimum:`Introduce al menos dos opciones`,deadlineRequired:`Introduce una fecha límite`,deadlineInPast:`La fecha límite debe ser en el futuro`},common:{remove:`Eliminar`}}},"zh-TW":{translation:{config:{heading:`PollBuddy 設定`,subtitle:`此為各應用程式個別設定，請注意。`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`用於儲存問卷資料的儲存庫應用程式 App ID`,createRepositoryButton:`建立新的儲存庫應用程式`,creatingRepositoryButton:`建立中...`,createRepositoryInfo:`建立後，上方欄位會自動帶入新的 App ID。按下儲存按鈕後設定才會生效。`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`儲存庫應用程式的 API Token`,repositoryTokenInfo:`若您剛建立新的儲存庫應用程式，請發行新的 API Token 並輸入於此。`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`允許未具有應用程式管理權限的使用者建立問卷`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`即將建立用於儲存問卷資料的新應用程式，是否繼續？`,repositoryAppIdRequired:`Repository App ID 為必填項目`,createRepositorySuccess:`已建立儲存庫應用程式！App ID：{{appId}}`,createRepositoryError:`建立儲存庫應用程式失敗`,saveSuccess:`設定已儲存！`},form:{titleLabel:`標題`,titlePlaceholder:`請輸入問題`,optionsLabel:`選項`,optionPlaceholder:`選項 {{number}}`,addOption:`＋ 新增選項`,deadlineLabel:`截止時間`,mentionsLabel:`參與者`,mentionsPlaceholder:`以名稱或代碼搜尋`},questionnaire:{badge:`問卷`,votesCount:`{{count}} 票 ({{percent}}%)`,voteButton:`投票`,votingButton:`送出中...`,votingClosedError:`此問卷已結束`,voteSubmitError:`投票失敗，請再試一次`},questionnaireButton:{mentionButtonLabel:`問卷`,mentionButtonTitle:`建立問卷`,dialogTitle:`建立問卷`,createButton:`建立`,cancelButton:`取消`,commentBody:`問卷已開始：{{title}}
截止時間：{{deadline}}`,dateLocale:`zh-TW`},validation:{titleRequired:`請輸入標題`,optionsMinimum:`請輸入至少兩個選項`,deadlineRequired:`請輸入截止時間`,deadlineInPast:`截止時間必須是未來的日期時間`},common:{remove:`移除`}}}}});var $=Mp.t.bind(Mp),Np=Ea(`<span style="
          display:flex;
          align-items:center;
          gap:6px;
          background:#f0f4f5;
          border:1px solid #e3e7e8;
          border-radius:16px;
          padding:4px 6px 4px 10px;
          font-size:13px;
        "> <button type="button" style="
              border:none;
              background:none;
              cursor:pointer;
              font-size:14px;
              line-height:1;
              padding:0 4px;
              color:#888;
            ">×</button></span>`),Pp=Ea(`<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:8px;"></div>`),Fp=Ea(`<div role="option"><img alt="" width="24" height="24" style="border-radius:50%; flex-shrink:0;"/> <span style="font-weight:500;"> </span> <span style="color:#888; font-size:11px; margin-left:auto;"> </span></div>`),Ip=Ea(`<div></div>`),Lp=Ea(`<div style="position:relative;"><label style="font-size:14px; display:block; margin-bottom:6px;"> </label> <input type="text" style="width:100%; box-sizing:border-box; padding:8px; font-size:14px;"/> <!> <!></div>`);function Rp(e,t){zn(t,!0);let n=Co(t,`mentions`,31,()=>Gr([])),r,i=Lr(``),a=Lr(Gr([])),o=Lr(!1),s=Lr(0),c=Lr(0),l=Lr(0);async function u(){let e=L(i).replace(/^@/,``).trim();if(e===``){P(o,!1);return}let n=await Pf(e,t.appId,t.recordId);n.length===0?P(o,!1):(P(a,n,!0),P(l,0),P(o,!0),d())}function d(){let e=r.getBoundingClientRect();P(s,e.bottom+window.scrollY+4),P(c,e.left+window.scrollX)}function f(e){n().some(t=>t.code===e.code&&t.type===e.type)||n([...n(),{code:e.code,type:e.type,name:e.name,avatar:e.avatar}]),P(i,``),P(o,!1),r.focus()}function p(e){n(n().filter((t,n)=>n!==e))}function m(e){L(o)&&(e.key===`ArrowDown`?(e.preventDefault(),P(l,(L(l)+1)%L(a).length)):e.key===`ArrowUp`?(e.preventDefault(),P(l,(L(l)-1+L(a).length)%L(a).length)):e.key===`Enter`||e.key===`Tab`?(e.preventDefault(),f(L(a)[L(l)])):e.key===`Escape`&&P(o,!1))}function h(e){r&&!r.contains(e.target)&&P(o,!1)}wo(()=>document.addEventListener(`mousedown`,h)),To(()=>document.removeEventListener(`mousedown`,h));var g=Lp(),_=ni(g),v=ii(_,!0),y=ai(_,2);so(y),bo(y,e=>r=e,()=>r);var b=ai(y,2),x=e=>{var t=Pp();Ga(t,21,n,Va,(e,t,n)=>{var r=Np(),i=ni(r),a=ai(i);vn(r),Ci(e=>{Na(i,`${L(t).name??L(t).code??``} `),co(a,`aria-label`,e)},[()=>$(`common.remove`)]),_a(`click`,a,()=>p(n)),Oa(e,r)}),vn(t),Oa(e,t)};Ba(b,e=>{n().length>0&&e(x)});var S=ai(b,2),C=e=>{var t=Ip();Ga(t,21,()=>L(a),Va,(e,t,n)=>{var r=Fp(),i=ni(r),a=ai(i,2),o=ii(a,!0),s=ii(ai(a,2),!0);vn(r),Ci(()=>{co(r,`aria-selected`,n===L(l)),ro(r,`
            display:flex;
            align-items:center;
            gap:8px;
            padding:8px 12px;
            cursor:pointer;
            background:${n===L(l)?`#f5f5f5`:`white`};
            font-size:13px;
          `),co(i,`src`,L(t).avatar),Na(o,L(t).name),Na(s,L(t).code)}),_a(`mousedown`,r,e=>{e.preventDefault(),f(L(t))}),Oa(e,r)}),vn(t),Ci(()=>ro(t,`
      position:fixed;
      top:${L(s)??``}px;
      left:${L(c)??``}px;
      background:white;
      border:1px solid #e3e7e8;
      border-radius:4px;
      box-shadow:0 4px 12px rgba(0,0,0,0.15);
      z-index:99999;
      min-width:220px;
      max-height:200px;
      overflow-y:auto;
    `)),Oa(e,t)};Ba(S,e=>{L(o)&&e(C)}),vn(g),Ci((e,t)=>{Na(v,e),co(y,`placeholder`,t)},[()=>$(`form.mentionsLabel`),()=>$(`form.mentionsPlaceholder`)]),_a(`input`,y,u),_a(`keydown`,y,m),po(y,()=>L(i),e=>P(i,e)),Oa(e,g),Bn()}va([`input`,`keydown`,`click`,`mousedown`]);var zp=Ea(`<div style="margin-bottom:8px;"></div>`),Bp=Ea(`<div style="display:flex; flex-direction:column; gap:16px; min-width:400px; padding:24px;"><div></div> <div><div style="font-size:14px; margin-bottom:8px;"> </div> <!> <div></div></div> <div></div> <!></div>`);function Vp(e,t){zn(t,!0);let n=new dd({label:$(`form.titleLabel`),placeholder:$(`form.titlePlaceholder`),requiredIcon:!0}),r=e=>new dd({placeholder:$(`form.optionPlaceholder`,{number:e})}),i=Lr([r(1),r(2)]),a=new El({text:$(`form.addOption`),type:`normal`});a.addEventListener(`click`,()=>{L(i).length>=5||(P(i,[...L(i),r(L(i).length+1)]),a.visible=L(i).length<5)});let o=new mu({label:$(`form.deadlineLabel`),requiredIcon:!0}),s=Lr(Gr([]));function c(){return{title:n.value??``,options:L(i).map(e=>e.value??``),deadline:o.value??``,mentions:L(s).map(({code:e,type:t})=>({code:e,type:t}))}}let l=e=>t=>{t.appendChild(e)};var u={getFormData:c},d=Bp(),f=ni(d);Qa(f,()=>l(n));var p=ai(f,2),m=ni(p),h=ii(m,!0),g=ai(m,2);Ga(g,16,()=>L(i),e=>e,(e,t)=>{var n=zp();Qa(n,()=>l(t)),Oa(e,n)}),Qa(ai(g,2),()=>l(a)),vn(p);var _=ai(p,2);return Qa(_,()=>l(o)),Rp(ai(_,2),{get appId(){return t.appId},get recordId(){return t.recordId},get mentions(){return L(s)},set mentions(e){P(s,e,!0)}}),vn(d),Ci(e=>Na(h,e),[()=>$(`form.optionsLabel`)]),Oa(e,d),Bn(u)}async function Hp(e){return(await kintone.api(kintone.api.url(`/k/v1/record/comment.json`,!0),`POST`,e)).id}var Up=new bt.KintoneRestAPIClient;async function Wp(e,t,n,r){let{id:i}=await Up.record.addRecord({app:r,record:{appID:{value:String(e)},RecordID:{value:String(t)},table:{value:[{value:n}]}}});return i}var Gp=new bt.KintoneRestAPIClient,Kp=3;async function qp(e,t,n){for(let r=1;;r++){let{record:i}=await Gp.record.getRecord({app:e,id:t}),a=n(i.table.value);if(!a)return i;try{await Gp.record.updateRecord({app:e,id:t,revision:i.$revision.value,record:{table:{value:a}}})}catch(e){if(e.code===`GAIA_CO02`&&r<Kp)continue;throw e}let{record:o}=await Gp.record.getRecord({app:e,id:t});return o}}async function Jp(e,t,n,r){let i=await xt(e,t,r);if(!i){let i=await Wp(e,t,n,r),{record:a}=await Gp.record.getRecord({app:r,id:i});return a}return qp(r,i.$id.value,e=>[...e,{value:n}])}async function Yp(e,t,n,r){return qp(r,e,e=>{let r=e.find(e=>e.value.commentID.value===String(t));if(!r)throw Error(`No questionnaire row for comment ${t}`);let i=n(r.value);return i?e.map(e=>e===r?{...e,value:i}:e):null})}function Xp(e,t,n){let{title:r,options:i,deadline:a,mentions:o}=e,s=i.filter(e=>e.trim()),c=`abcdefghijklmnopqrstuvwxyz`,l=s.map((e,t)=>`${c[t].toUpperCase()}:${e.trim()}`).join(`;;;`)+`;;;`,u=s.map((e,t)=>`${c[t]}:0`).join(`,`),d=o.filter(e=>e.type===`USER`).map(({code:e})=>({code:e})),f=o.filter(e=>e.type===`GROUP`).map(({code:e})=>({code:e})),p=o.filter(e=>e.type===`ORGANIZATION`).map(({code:e})=>({code:e})),m=new Date().toISOString();return{commentID:{value:String(n)},title:{value:r},startTime:{value:m},endTime:{value:new Date(a).toISOString()},options:{value:l},votes:{value:u},users:{value:d},group:{value:f},org:{value:p},creator:{value:[{code:t.code}]},votedUsers:{value:[]}}}var Zp=`https://cn7noxn4p5.execute-api.ap-northeast-1.amazonaws.com/dev/schedule`;async function Qp({pluginId:e,appId:t,recordId:n,commentID:r,repositoryRecordId:i,repoAppId:a,deadline:o}){let s=kintone.plugin.app.getConfig(e).repoToken;if(!s){console.error(`No repository API token configured for this plugin — skipping end-notification scheduling.`);return}let{subdomain:c,baseDomain:l}=await kintone.getDomain(),u=Intl.DateTimeFormat().resolvedOptions().timeZone,d=`${await kintone.buildPageUrl(`APP_DETAIL`,{appId:t,recordId:n})}&comment=${r}`,f=await fetch(Zp,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({subdomain:c,baseDomain:l,repoToken:s,appId:t,recordId:n,recordUrl:d,commentID:r,repositoryRecordId:i,repoAppId:a,deadline:o,timezone:u})});if(!f.ok){let e=await f.text();throw console.error(`Failed to schedule questionnaire end:`,f.status,e),Error(`Failed to schedule questionnaire end notification`)}return f.json()}function $p(e){let{title:t,options:n,deadline:r}=e;return t.trim()?n.filter(e=>e.trim()).length<2?$(`validation.optionsMinimum`):r?new Date(r)<=new Date?$(`validation.deadlineInPast`):null:$(`validation.deadlineRequired`):$(`validation.titleRequired`)}function em(e){return new Date(e).toLocaleString($(`questionnaireButton.dateLocale`),{year:`numeric`,month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function tm(){let e=document.querySelector(`.marktone`);if(e)return{mode:`marktone`,anchor:e};let t=document.getElementById(`+oceanMention`);return t?{mode:`native`,anchor:t}:null}function nm(){let e=document.createElement(`div`);return e.className=`tab questionnaire-tab`,e.setAttribute(`role`,`tab`),e.setAttribute(`tabindex`,`0`),e.textContent=$(`questionnaireButton.mentionButtonLabel`),e}function rm(e){let t=e.cloneNode(!0);return t.title=$(`questionnaireButton.mentionButtonTitle`),t.querySelector(`.ocean-ui-editor-toolbar-mention-button`).textContent=$(`questionnaireButton.mentionButtonLabel`),t}function im({pluginId:e,appId:t,recordId:n,repoAppId:r,onRepositoryUpdate:i}){if(document.getElementById(`questionnaire-create-btn`))return;let a=tm();if(!a)return;let{mode:o,anchor:s}=a,c=o===`marktone`?nm():rm(s);if(c.id=`questionnaire-create-btn`,c.addEventListener(`click`,async a=>{o===`marktone`&&(a.preventDefault(),a.stopPropagation());let s=document.createElement(`div`),c=Pa(Vp,{target:s,props:{appId:t,recordId:n}});await(await kintone.createDialog({title:$(`questionnaireButton.dialogTitle`),body:s,okButtonText:$(`questionnaireButton.createButton`),showCancelButton:!0,cancelButtonText:$(`questionnaireButton.cancelButton`),showCloseButton:!0,beforeClose:async a=>{if(a!==`OK`)return;let o=c.getFormData(),s=$p(o);if(s)return kintone.showNotification(`ERROR`,s),!1;let l=kintone.getLoginUser(),u=await Hp({app:t,record:n,comment:{text:$(`questionnaireButton.commentBody`,{title:o.title,deadline:em(o.deadline)}),mentions:o.mentions}}),d=await Jp(t,n,Xp(o,l,u),r),f=d.$id.value;i(d);try{await Qp({pluginId:e,appId:t,recordId:n,commentID:u,repositoryRecordId:f,repoAppId:r,deadline:o.deadline})}catch(e){console.error(`Questionnaire created, but end-notification scheduling failed:`,e)}}})).show(),Ra(c)}),o===`marktone`){let e=s.querySelector(`.tabs`);e?e.insertAdjacentElement(`afterend`,c):s.appendChild(c)}else s.insertAdjacentElement(`afterend`,c)}function am(e){return Object.fromEntries(e.split(`,`).filter(Boolean).map(e=>{let[t,n]=e.split(`:`);return[t,Number(n)||0]}))}async function om({repositoryRecordId:e,commentID:t,letter:n,loginUser:r,repoAppId:i}){let a;return{record:await Yp(e,t,e=>{if(a=e.votes.value,e.votedUsers.value.some(e=>e.code===r.code))return null;let t=am(e.votes.value);return t[n]=(t[n]||0)+1,a=Object.entries(t).map(([e,t])=>`${e}:${t}`).join(`,`),{...e,votes:{value:a},votedUsers:{value:[...e.votedUsers.value,{code:r.code}]}}},i),votesValue:a}}var sm=Ea(`<div class="questionnaire-result-row svelte-1d1e8kl"><div class="questionnaire-result-label svelte-1d1e8kl"><span> </span> <span> </span></div> <div class="questionnaire-bar-track svelte-1d1e8kl"><div class="questionnaire-bar-fill svelte-1d1e8kl"></div></div></div>`),cm=Ea(`<label class="questionnaire-option-row svelte-1d1e8kl"><input type="radio"/> </label>`),lm=Ea(`<div class="questionnaire-error svelte-1d1e8kl"> </div>`),um=Ea(`<!> <!> <button class="questionnaire-vote-button svelte-1d1e8kl"> </button>`,1),dm=Ea(`<div class="itemlist-head-gaia"><div class="itemlist-user-gaia questionnaire-label svelte-1d1e8kl"> </div></div> <div class="commentlist-body-gaia questionnaire-body svelte-1d1e8kl"><div class="questionnaire-title svelte-1d1e8kl"> </div> <!></div>`,1),fm={hash:`svelte-1d1e8kl`,code:`.questionnaire-label.svelte-1d1e8kl {font-weight:600;}.questionnaire-body.svelte-1d1e8kl {font-size:13px;}.questionnaire-title.svelte-1d1e8kl {font-weight:600;margin-bottom:10px;}.questionnaire-option-row.svelte-1d1e8kl {display:flex;align-items:center;gap:6px;padding:4px 0;cursor:pointer;}.questionnaire-vote-button.svelte-1d1e8kl {margin-top:8px;padding:6px 16px;cursor:pointer;}.questionnaire-vote-button.svelte-1d1e8kl:disabled {cursor:not-allowed;opacity:0.5;}.questionnaire-error.svelte-1d1e8kl {color:#c0392b;font-size:12px;margin-top:6px;}.questionnaire-result-row.svelte-1d1e8kl {margin-bottom:8px;}.questionnaire-result-label.svelte-1d1e8kl {display:flex;justify-content:space-between;margin-bottom:4px;}.questionnaire-bar-track.svelte-1d1e8kl {background:#eee;border-radius:4px;height:8px;overflow:hidden;}.questionnaire-bar-fill.svelte-1d1e8kl {background:#3498db;height:100%;transition:width 0.3s ease;}`};function pm(e,t){zn(t,!0),Za(e,fm);let n=[],r=Lr(!1),i=Lr(null),a=Lr(!1),o=Lr(``),s=cr(()=>t.hasVoted||L(r)),c=cr(()=>t.row.title.value),l=cr(()=>t.row.options.value.split(`;;;`).filter(Boolean).map(e=>{let[t,...n]=e.split(`:`);return{letter:t.toLowerCase(),label:n.join(`:`)}})),u=Lr(Gr(t.row.votes.value)),d=cr(()=>Object.fromEntries(L(u).split(`,`).filter(Boolean).map(e=>{let[t,n]=e.split(`:`);return[t,Number(n)||0]}))),f=cr(()=>Object.values(L(d)).reduce((e,t)=>e+t,0));async function p(){if(L(i)&&!L(a)){if(new Date>new Date(t.row.endTime.value))P(o,$(`questionnaire.votingClosedError`),!0);else{P(o,``),P(a,!0);try{let{record:e,votesValue:n}=await om({repositoryRecordId:t.repositoryRecordId,commentID:t.row.commentID.value,letter:L(i),loginUser:t.loginUser,repoAppId:t.repoAppId});P(u,n,!0),P(r,!0),t.onRepositoryUpdate(e)}catch(e){console.error(`Failed to submit vote:`,e),P(o,$(`questionnaire.voteSubmitError`),!0)}finally{P(a,!1)}}}}var m=dm(),h=ri(m),g=ii(ni(h));vn(h);var _=ai(h,2),v=ni(_),y=ii(v,!0),b=ai(v,2),x=e=>{var t=Da();Ga(ri(t),17,()=>L(l),Va,(e,t)=>{let n=cr(()=>L(d)[L(t).letter]||0),r=cr(()=>L(f)===0?0:Math.round(L(n)/L(f)*100));var i=sm(),a=ni(i),o=ni(a),s=ii(o,!0),c=ii(ai(o,2),!0);vn(a);var l=ii(ai(a,2));vn(i),Ci(e=>{Na(s,L(t).label),Na(c,e),ro(l,`width: ${L(r)??``}%;`)},[()=>$(`questionnaire.votesCount`,{count:L(n),percent:L(r)})]),Oa(e,i)}),Oa(e,t)},S=e=>{var r=um(),s=ri(r);Ga(s,17,()=>L(l),Va,(e,r)=>{var a=cm(),o=ni(a);so(o);var s,c=ai(o);vn(a),Ci(()=>{co(o,`name`,`vote-${t.row.commentID.value??``}`),s!==(s=L(r).letter)&&(o.value=(o.__value=s)??``),Na(c,` ${L(r).label??``}`)}),ho(n,[],o,()=>(L(r).letter,L(i)),e=>P(i,e)),Oa(e,a)});var c=ai(s,2),u=e=>{var t=lm(),n=ii(t,!0);Ci(()=>Na(n,L(o))),Oa(e,t)};Ba(c,e=>{L(o)&&e(u)});var d=ai(c,2),f=ii(d,!0);Ci(e=>{d.disabled=!L(i)||L(a),Na(f,e)},[()=>L(a)?$(`questionnaire.votingButton`):$(`questionnaire.voteButton`)]),_a(`click`,d,p),Oa(e,r)};Ba(b,e=>{L(s)||t.isEnded?e(x):e(S,-1)}),vn(_),Ci(e=>{Na(g,`📊 ${e??``}`),Na(y,L(c))},[()=>$(`questionnaire.badge`)]),Oa(e,m),Bn()}va([`click`]);var mm=new Map;function hm(e,t={},n){let r=document.querySelectorAll(`.itemlist-gaia`);r.length!==0&&e.forEach(e=>{let i=e.value.commentID.value,a=`a[href*="comment=${i}"]`,o=null;for(let e of r)if(o=e.querySelector(a),o)break;let s=o?.closest(`.itemlist-item-gaia`);if(!s)return;let c=`questionnaire-${i}`,l=mm.get(c);if(l?.wrapper.isConnected&&l.wrapper.previousElementSibling===s)return;l&&(Ra(l.component),l.wrapper.remove(),mm.delete(c));let u=document.createElement(`li`);u.id=c,u.className=`itemlist-item-gaia itemlist-item-head-gaia`,s.insertAdjacentElement(`afterend`,u);let d=t[i]??{isCreator:!1,hasVoted:!1,isEnded:!1},f=Pa(pm,{target:u,props:{row:e.value,isCreator:d.isCreator,hasVoted:d.hasVoted,isEnded:d.isEnded,repositoryRecordId:n.repositoryRecordId,loginUser:n.loginUser,repoAppId:n.repoAppId,onRepositoryUpdate:n.onRepositoryUpdate}});mm.set(c,{wrapper:u,component:f})})}var gm=kintone.$PLUGIN_ID,_m;kintone.events.on(`app.record.detail.show`,async()=>{_m?.disconnect();let e=String(kintone.app.getId()),t=String(kintone.app.record.getId()),n=kintone.plugin.app.getConfig(gm),r=n.allowNonAdminPoll===`true`,i=n.repoAppId,a=await xt(e,t,i),o=kintone.getLoginUser(),s=!0;r||(s=(await kintone.app.getPermissions()).editApp),await kintone.app.record.getSideBarDisplayState()!==`COMMENTS`&&await kintone.app.record.showSideBar(`COMMENTS`);let c=e=>{a=e},l=()=>{if(!a)return;let e=vm(a.table.value,o);hm(a.table.value,e,{repositoryRecordId:a.$id.value,loginUser:o,repoAppId:i,onRepositoryUpdate:c})};l(),_m=new MutationObserver(()=>{s&&im({pluginId:gm,appId:e,recordId:t,repoAppId:i,onRepositoryUpdate:c}),l()}),_m.observe(document.body,{childList:!0,subtree:!0})});function vm(e,t){let n={};return e.forEach(e=>{let r=e.value.commentID.value;n[r]={isCreator:e.value.creator.value.some(e=>e.code===t.code),hasVoted:e.value.votedUsers.value.some(e=>e.code===t.code),isEnded:new Date(e.value.endTime.value)<=new Date}}),n}})();