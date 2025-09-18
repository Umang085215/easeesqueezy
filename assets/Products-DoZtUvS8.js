import{R as k,r as s,j as C,L as Cn,u as Jr}from"./index-BkecdaOP.js";import{c as yt}from"./createLucideIcon-DZf6o0AY.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]],to=yt("logs",eo);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ro=yt("pencil",no);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ao=yt("plus",oo);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],io=yt("trash-2",so);var V=function(){return V=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},V.apply(this,arguments)};function ft(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var N="-ms-",Ke="-moz-",_="-webkit-",qn="comm",vt="rule",qt="decl",lo="@import",Un="@keyframes",co="@layer",Kn=Math.abs,Ut=String.fromCharCode,Mt=Object.assign;function uo(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function Zn(e){return e.trim()}function ge(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function lt(e,t,n){return e.indexOf(t,n)}function W(e,t){return e.charCodeAt(t)|0}function Te(e,t,n){return e.slice(t,n)}function ce(e){return e.length}function Qn(e){return e.length}function Ue(e,t){return t.push(e),e}function po(e,t){return e.map(t).join("")}function Sn(e,t){return e.filter(function(n){return!ge(n,t)})}var Ct=1,Me=1,Xn=0,ne=0,H=0,Ge="";function St(e,t,n,r,o,a,i,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Ct,column:Me,length:i,return:"",siblings:c}}function ye(e,t){return Mt(St("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fe(e){for(;e.root;)e=ye(e.root,{children:[e]});Ue(e,e.siblings)}function go(){return H}function fo(){return H=ne>0?W(Ge,--ne):0,Me--,H===10&&(Me=1,Ct--),H}function ae(){return H=ne<Xn?W(Ge,ne++):0,Me++,H===10&&(Me=1,Ct++),H}function Pe(){return W(Ge,ne)}function ct(){return ne}function Rt(e,t){return Te(Ge,e,t)}function Lt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ho(e){return Ct=Me=1,Xn=ce(Ge=e),ne=0,[]}function mo(e){return Ge="",e}function At(e){return Zn(Rt(ne-1,zt(e===91?e+2:e===40?e+1:e)))}function bo(e){for(;(H=Pe())&&H<33;)ae();return Lt(e)>2||Lt(H)>3?"":" "}function wo(e,t){for(;--t&&ae()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return Rt(e,ct()+(t<6&&Pe()==32&&ae()==32))}function zt(e){for(;ae();)switch(H){case e:return ne;case 34:case 39:e!==34&&e!==39&&zt(H);break;case 40:e===41&&zt(e);break;case 92:ae();break}return ne}function xo(e,t){for(;ae()&&e+H!==57;)if(e+H===84&&Pe()===47)break;return"/*"+Rt(t,ne-1)+"*"+Ut(e===47?e:ae())}function yo(e){for(;!Lt(Pe());)ae();return Rt(e,ne)}function vo(e){return mo(dt("",null,null,null,[""],e=ho(e),0,[0],e))}function dt(e,t,n,r,o,a,i,c,d){for(var m=0,p=0,g=i,u=0,h=0,b=0,$=1,P=1,E=1,S=0,w="",v=o,D=a,R=r,f=w;P;)switch(b=S,S=ae()){case 40:if(b!=108&&W(f,g-1)==58){lt(f+=O(At(S),"&","&\f"),"&\f",Kn(m?c[m-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:f+=At(S);break;case 9:case 10:case 13:case 32:f+=bo(b);break;case 92:f+=wo(ct()-1,7);continue;case 47:switch(Pe()){case 42:case 47:Ue(Co(xo(ae(),ct()),t,n,d),d);break;default:f+="/"}break;case 123*$:c[m++]=ce(f)*E;case 125*$:case 59:case 0:switch(S){case 0:case 125:P=0;case 59+p:E==-1&&(f=O(f,/\f/g,"")),h>0&&ce(f)-g&&Ue(h>32?$n(f+";",r,n,g-1,d):$n(O(f," ","")+";",r,n,g-2,d),d);break;case 59:f+=";";default:if(Ue(R=Rn(f,t,n,m,p,o,c,w,v=[],D=[],g,a),a),S===123)if(p===0)dt(f,t,R,R,v,a,g,c,D);else switch(u===99&&W(f,3)===110?100:u){case 100:case 108:case 109:case 115:dt(e,R,R,r&&Ue(Rn(e,R,R,0,0,o,c,w,o,v=[],g,D),D),o,D,g,c,r?v:D);break;default:dt(f,R,R,R,[""],D,0,c,D)}}m=p=h=0,$=E=1,w=f="",g=i;break;case 58:g=1+ce(f),h=b;default:if($<1){if(S==123)--$;else if(S==125&&$++==0&&fo()==125)continue}switch(f+=Ut(S),S*$){case 38:E=p>0?1:(f+="\f",-1);break;case 44:c[m++]=(ce(f)-1)*E,E=1;break;case 64:Pe()===45&&(f+=At(ae())),u=Pe(),p=g=ce(w=f+=yo(ct())),S++;break;case 45:b===45&&ce(f)==2&&($=0)}}return a}function Rn(e,t,n,r,o,a,i,c,d,m,p,g){for(var u=o-1,h=o===0?a:[""],b=Qn(h),$=0,P=0,E=0;$<r;++$)for(var S=0,w=Te(e,u+1,u=Kn(P=i[$])),v=e;S<b;++S)(v=Zn(P>0?h[S]+" "+w:O(w,/&\f/g,h[S])))&&(d[E++]=v);return St(e,t,n,o===0?vt:c,d,m,p,g)}function Co(e,t,n,r){return St(e,t,n,qn,Ut(go()),Te(e,2,-2),0,r)}function $n(e,t,n,r,o){return St(e,t,n,qt,Te(e,0,r),Te(e,r+1,-1),r,o)}function Jn(e,t,n){switch(uo(e,t)){case 5103:return _+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _+e+e;case 4789:return Ke+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _+e+Ke+e+N+e+e;case 5936:switch(W(e,t+11)){case 114:return _+e+N+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _+e+N+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _+e+N+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _+e+N+e+e;case 6165:return _+e+N+"flex-"+e+e;case 5187:return _+e+O(e,/(\w+).+(:[^]+)/,_+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return _+e+N+"flex-item-"+O(e,/flex-|-self/g,"")+(ge(e,/flex-|baseline/)?"":N+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return _+e+N+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return _+e+N+O(e,"shrink","negative")+e;case 5292:return _+e+N+O(e,"basis","preferred-size")+e;case 6060:return _+"box-"+O(e,"-grow","")+_+e+N+O(e,"grow","positive")+e;case 4554:return _+O(e,/([^-])(transform)/g,"$1"+_+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_+e+e;case 4200:if(!ge(e,/flex-|baseline/))return N+"grid-column-align"+Te(e,t)+e;break;case 2592:case 3360:return N+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ge(r.props,/grid-\w+-end/)})?~lt(e+(n=n[t].value),"span",0)?e:N+O(e,"-start","")+e+N+"grid-row-span:"+(~lt(n,"span",0)?ge(n,/\d+/):+ge(n,/\d+/)-+ge(e,/\d+/))+";":N+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ge(r.props,/grid-\w+-start/)})?e:N+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,_+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ce(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+Ke+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lt(e,"stretch",0)?Jn(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,i,c,d,m){return N+o+":"+a+m+(i?N+o+"-span:"+(c?d:+d-+a)+m:"")+e});case 4949:if(W(e,t+6)===121)return O(e,":",":"+_)+e;break;case 6444:switch(W(e,W(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_+(W(e,14)===45?"inline-":"")+"box$3$1"+_+"$2$3$1"+N+"$2box$3")+e;case 100:return O(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function So(e,t,n,r){switch(e.type){case co:if(e.children.length)break;case lo:case qt:return e.return=e.return||e.value;case qn:return"";case Un:return e.return=e.value+"{"+ht(e.children,r)+"}";case vt:if(!ce(e.value=e.props.join(",")))return""}return ce(n=ht(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ro(e){var t=Qn(e);return function(n,r,o,a){for(var i="",c=0;c<t;c++)i+=e[c](n,r,o,a)||"";return i}}function $o(e){return function(t){t.root||(t=t.return)&&e(t)}}function Eo(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qt:e.return=Jn(e.value,e.length,n);return;case Un:return ht([ye(e,{value:O(e.value,"@","@"+_)})],r);case vt:if(e.length)return po(n=e.props,function(o){switch(ge(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fe(ye(e,{props:[O(o,/:(read-\w+)/,":"+Ke+"$1")]})),Fe(ye(e,{props:[o]})),Mt(e,{props:Sn(n,r)});break;case"::placeholder":Fe(ye(e,{props:[O(o,/:(plac\w+)/,":"+_+"input-$1")]})),Fe(ye(e,{props:[O(o,/:(plac\w+)/,":"+Ke+"$1")]})),Fe(ye(e,{props:[O(o,/:(plac\w+)/,N+"input-$1")]})),Fe(ye(e,{props:[o]})),Mt(e,{props:Sn(n,r)});break}return""})}}var Oo={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},J={},Le=typeof process<"u"&&J!==void 0&&(J.REACT_APP_SC_ATTR||J.SC_ATTR)||"data-styled",er="active",tr="data-styled-version",$t="6.1.19",Kt=`/*!sc*/
`,mt=typeof window<"u"&&typeof document<"u",Po=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&J!==void 0&&J.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&J.REACT_APP_SC_DISABLE_SPEEDY!==""?J.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&J.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&J!==void 0&&J.SC_DISABLE_SPEEDY!==void 0&&J.SC_DISABLE_SPEEDY!==""&&J.SC_DISABLE_SPEEDY!=="false"&&J.SC_DISABLE_SPEEDY),Et=Object.freeze([]),ze=Object.freeze({});function ko(e,t,n){return n===void 0&&(n=ze),e.theme!==n.theme&&e.theme||t||n.theme}var nr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Do=/(^-|-$)/g;function En(e){return e.replace(jo,"-").replace(Do,"")}var Io=/(a)(d)/gi,ot=52,On=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wt(e){var t,n="";for(t=Math.abs(e);t>ot;t=t/ot|0)n=On(t%ot)+n;return(On(t%ot)+n).replace(Io,"$1-$2")}var _t,rr=5381,He=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},or=function(e){return He(rr,e)};function Ao(e){return Wt(or(e)>>>0)}function _o(e){return e.displayName||e.name||"Component"}function Nt(e){return typeof e=="string"&&!0}var ar=typeof Symbol=="function"&&Symbol.for,sr=ar?Symbol.for("react.memo"):60115,No=ar?Symbol.for("react.forward_ref"):60112,Fo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ho={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},To=((_t={})[No]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_t[sr]=ir,_t);function Pn(e){return("type"in(t=e)&&t.type.$$typeof)===sr?ir:"$$typeof"in e?To[e.$$typeof]:Fo;var t}var Mo=Object.defineProperty,Lo=Object.getOwnPropertyNames,kn=Object.getOwnPropertySymbols,zo=Object.getOwnPropertyDescriptor,Wo=Object.getPrototypeOf,jn=Object.prototype;function lr(e,t,n){if(typeof t!="string"){if(jn){var r=Wo(t);r&&r!==jn&&lr(e,r,n)}var o=Lo(t);kn&&(o=o.concat(kn(t)));for(var a=Pn(e),i=Pn(t),c=0;c<o.length;++c){var d=o[c];if(!(d in Ho||n&&n[d]||i&&d in i||a&&d in a)){var m=zo(t,d);try{Mo(e,d,m)}catch{}}}}return e}function je(e){return typeof e=="function"}function Zt(e){return typeof e=="object"&&"styledComponentId"in e}function Oe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Dn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bt(e,t,n){if(n===void 0&&(n=!1),!n&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bt(e[r],t[r]);else if(Xe(t))for(var r in t)e[r]=Bt(e[r],t[r]);return e}function Qt(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bo=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=o;i<a;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),d=(i=0,n.length);i<d;i++)this.tag.insertRule(c,n[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,i=o;i<a;i++)n+="".concat(this.tag.getRule(i)).concat(Kt);return n},e})(),ut=new Map,bt=new Map,pt=1,at=function(e){if(ut.has(e))return ut.get(e);for(;bt.has(pt);)pt++;var t=pt++;return ut.set(e,t),bt.set(t,e),t},Go=function(e,t){pt=t+1,ut.set(e,t),bt.set(t,e)},Vo="style[".concat(Le,"][").concat(tr,'="').concat($t,'"]'),Yo=new RegExp("^".concat(Le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qo=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},Uo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Kt),o=[],a=0,i=r.length;a<i;a++){var c=r[a].trim();if(c){var d=c.match(Yo);if(d){var m=0|parseInt(d[1],10),p=d[2];m!==0&&(Go(p,m),qo(e,p,d[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(c)}}},In=function(e){for(var t=document.querySelectorAll(Vo),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Le)!==er&&(Uo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ko(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=(function(c){var d=Array.from(c.querySelectorAll("style[".concat(Le,"]")));return d[d.length-1]})(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Le,er),r.setAttribute(tr,$t);var i=Ko();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Zo=(function(){function e(t){this.element=cr(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var i=r[o];if(i.ownerNode===n)return i}throw De(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),Qo=(function(){function e(t){this.element=cr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Xo=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),An=mt,Jo={isServer:!mt,useCSSOMInjection:!Po},dr=(function(){function e(t,n,r){t===void 0&&(t=ze),n===void 0&&(n={});var o=this;this.options=V(V({},Jo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&mt&&An&&(An=!1,In(this)),Qt(this,function(){return(function(a){for(var i=a.getTag(),c=i.length,d="",m=function(g){var u=(function(E){return bt.get(E)})(g);if(u===void 0)return"continue";var h=a.names.get(u),b=i.getGroup(g);if(h===void 0||!h.size||b.length===0)return"continue";var $="".concat(Le,".g").concat(g,'[id="').concat(u,'"]'),P="";h!==void 0&&h.forEach(function(E){E.length>0&&(P+="".concat(E,","))}),d+="".concat(b).concat($,'{content:"').concat(P,'"}').concat(Kt)},p=0;p<c;p++)m(p);return d})(o)})}return e.registerId=function(t){return at(t)},e.prototype.rehydrate=function(){!this.server&&mt&&In(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(V(V({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Xo(o):r?new Zo(o):new Qo(o)})(this.options),new Bo(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(at(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(at(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(at(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),ea=/&/g,ta=/^\s*\/\/.*$/gm;function ur(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ur(n.children,t)),n})}function na(e){var t,n,r,o=ze,a=o.options,i=a===void 0?ze:a,c=o.plugins,d=c===void 0?Et:c,m=function(u,h,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):u},p=d.slice();p.push(function(u){u.type===vt&&u.value.includes("&")&&(u.props[0]=u.props[0].replace(ea,n).replace(r,m))}),i.prefix&&p.push(Eo),p.push(So);var g=function(u,h,b,$){h===void 0&&(h=""),b===void 0&&(b=""),$===void 0&&($="&"),t=$,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var P=u.replace(ta,""),E=vo(b||h?"".concat(b," ").concat(h," { ").concat(P," }"):P);i.namespace&&(E=ur(E,i.namespace));var S=[];return ht(E,Ro(p.concat($o(function(w){return S.push(w)})))),S};return g.hash=d.length?d.reduce(function(u,h){return h.name||De(15),He(u,h.name)},rr).toString():"",g}var ra=new dr,Gt=na(),pr=k.createContext({shouldForwardProp:void 0,styleSheet:ra,stylis:Gt});pr.Consumer;k.createContext(void 0);function _n(){return s.useContext(pr)}var oa=(function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Gt);var i=r.name+a.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,a(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qt(this,function(){throw De(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gt),this.name+t.hash},e})(),aa=function(e){return e>="A"&&e<="Z"};function Nn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;aa(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gr=function(e){return e==null||e===!1||e===""},fr=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!gr(a)&&(Array.isArray(a)&&a.isCss||je(a)?r.push("".concat(Nn(o),":"),a,";"):Xe(a)?r.push.apply(r,ft(ft(["".concat(o," {")],fr(a),!1),["}"],!1)):r.push("".concat(Nn(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Oo||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ke(e,t,n,r){if(gr(e))return[];if(Zt(e))return[".".concat(e.styledComponentId)];if(je(e)){if(!je(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return ke(o,t,n,r)}var a;return e instanceof oa?n?(e.inject(n,r),[e.getName(r)]):[e]:Xe(e)?fr(e):Array.isArray(e)?Array.prototype.concat.apply(Et,e.map(function(i){return ke(i,t,n,r)})):[e.toString()]}function sa(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(je(n)&&!Zt(n))return!1}return!0}var ia=or($t),la=(function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sa(t),this.componentId=n,this.baseHash=He(ia,n),this.baseStyle=r,dr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Oe(o,this.staticRulesId);else{var a=Dn(ke(this.rules,t,n,r)),i=Wt(He(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,i)){var c=r(a,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,c)}o=Oe(o,i),this.staticRulesId=i}else{for(var d=He(this.baseHash,r.hash),m="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")m+=g;else if(g){var u=Dn(ke(g,t,n,r));d=He(d,u+p),m+=u}}if(m){var h=Wt(d>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(m,".".concat(h),void 0,this.componentId)),o=Oe(o,h)}}return o},e})(),wt=k.createContext(void 0);wt.Consumer;function ca(e){var t=k.useContext(wt),n=s.useMemo(function(){return(function(r,o){if(!r)throw De(14);if(je(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw De(8);return o?V(V({},o),r):r})(e.theme,t)},[e.theme,t]);return e.children?k.createElement(wt.Provider,{value:n},e.children):null}var Ft={};function da(e,t,n){var r=Zt(e),o=e,a=!Nt(e),i=t.attrs,c=i===void 0?Et:i,d=t.componentId,m=d===void 0?(function(v,D){var R=typeof v!="string"?"sc":En(v);Ft[R]=(Ft[R]||0)+1;var f="".concat(R,"-").concat(Ao($t+R+Ft[R]));return D?"".concat(D,"-").concat(f):f})(t.displayName,t.parentComponentId):d,p=t.displayName,g=p===void 0?(function(v){return Nt(v)?"styled.".concat(v):"Styled(".concat(_o(v),")")})(e):p,u=t.displayName&&t.componentId?"".concat(En(t.displayName),"-").concat(t.componentId):t.componentId||m,h=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,b=t.shouldForwardProp;if(r&&o.shouldForwardProp){var $=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;b=function(v,D){return $(v,D)&&P(v,D)}}else b=$}var E=new la(n,u,r?o.componentStyle:void 0);function S(v,D){return(function(R,f,A){var U=R.attrs,Y=R.componentStyle,ee=R.defaultProps,se=R.foldedComponentIds,F=R.styledComponentId,fe=R.target,Ce=k.useContext(wt),he=_n(),ie=R.shouldForwardProp||he.shouldForwardProp,Ie=ko(f,Ce,ee)||ze,K=(function(ue,Q,be){for(var pe,te=V(V({},Q),{className:void 0,theme:be}),Re=0;Re<ue.length;Re+=1){var X=je(pe=ue[Re])?pe(te):pe;for(var B in X)te[B]=B==="className"?Oe(te[B],X[B]):B==="style"?V(V({},te[B]),X[B]):X[B]}return Q.className&&(te.className=Oe(te.className,Q.className)),te})(U,f,Ie),me=K.as||fe,de={};for(var z in K)K[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&K.theme===Ie||(z==="forwardedAs"?de.as=K.forwardedAs:ie&&!ie(z,me)||(de[z]=K[z]));var Se=(function(ue,Q){var be=_n(),pe=ue.generateAndInjectStyles(Q,be.styleSheet,be.stylis);return pe})(Y,K),Z=Oe(se,F);return Se&&(Z+=" "+Se),K.className&&(Z+=" "+K.className),de[Nt(me)&&!nr.has(me)?"class":"className"]=Z,A&&(de.ref=A),s.createElement(me,de)})(w,v,D)}S.displayName=g;var w=k.forwardRef(S);return w.attrs=h,w.componentStyle=E,w.displayName=g,w.shouldForwardProp=b,w.foldedComponentIds=r?Oe(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=u,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?(function(D){for(var R=[],f=1;f<arguments.length;f++)R[f-1]=arguments[f];for(var A=0,U=R;A<U.length;A++)Bt(D,U[A],!0);return D})({},o.defaultProps,v):v}}),Qt(w,function(){return".".concat(w.styledComponentId)}),a&&lr(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Fn(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Hn=function(e){return Object.assign(e,{isCss:!0})};function L(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(je(e)||Xe(e))return Hn(ke(Fn(Et,ft([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ke(r):Hn(ke(Fn(r,t)))}function Vt(e,t,n){if(n===void 0&&(n=ze),!t)throw De(1,t);var r=function(o){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,L.apply(void 0,ft([o],a,!1)))};return r.attrs=function(o){return Vt(e,t,V(V({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Vt(e,t,V(V({},n),o))},r}var hr=function(e){return Vt(da,e)},j=hr;nr.forEach(function(e){j[e]=hr(e)});var ve;function We(e,t){return e[t]}function ua(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function pa(e=[],t,n="id"){const r=e.slice(),o=We(t,n);return o?r.splice(r.findIndex((a=>We(a,n)===o)),1):r.splice(r.findIndex((a=>a===t)),1),r}function Tn(e){return e.map(((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r}))}function Ze(e,t){return Math.ceil(e/t)}function Ht(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(ve||(ve={}));const M=()=>null;function mr(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach((a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))})),{conditionalStyle:r,classNames:o.join(" ")}}function gt(e,t=[],n="id"){const r=We(e,n);return r?t.some((o=>We(o,n)===r)):t.some((o=>o===e))}function st(e,t){return t?e.findIndex((n=>Qe(n.id,t))):-1}function Qe(e,t){return e==t}function ga(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:i}=t,c=!e.allSelected,d=!e.toggleOnSelectedRowsChange;if(i){const m=c?[...e.selectedRows,...o.filter((p=>!gt(p,e.selectedRows,r)))]:e.selectedRows.filter((p=>!gt(p,o,r)));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:m.length,selectedRows:m,toggleOnSelectedRowsChange:d})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?o:[],toggleOnSelectedRowsChange:d})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:i,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:pa(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===i,selectedRows:ua(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:i}=t;if(i){const c=[...e.selectedRows,...o.filter((d=>!gt(d,e.selectedRows,r)))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:i}=t,c=o&&i,d=o&&!i||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),d&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const fa=L`
	pointer-events: none;
	opacity: 0.4;
`,ha=j.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&fa};
	${({theme:e})=>e.table.style};
`,ma=L`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,ba=j.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&ma};
	${({theme:e})=>e.head.style};
`,wa=j.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,br=(e,...t)=>L`
		@media screen and (max-width: ${599}px) {
			${L(e,...t)}
		}
	`,xa=(e,...t)=>L`
		@media screen and (max-width: ${959}px) {
			${L(e,...t)}
		}
	`,ya=(e,...t)=>L`
		@media screen and (max-width: ${1280}px) {
			${L(e,...t)}
		}
	`,va=e=>(t,...n)=>L`
			@media screen and (max-width: ${e}px) {
				${L(t,...n)}
			}
		`,Ve=j.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,wr=j(Ve)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&L`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&br`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&xa`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&ya`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&va(e)`
    display: none;
  `};
`,Ca=L`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Sa=j(wr).attrs((e=>({style:e.style})))`
	${({$renderAsCell:e})=>!e&&Ca};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var Ra=s.memo((function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:i,onDragOver:c,onDragEnd:d,onDragEnter:m,onDragLeave:p}){const{conditionalStyle:g,classNames:u}=mr(n,t.conditionalCellStyles,["rdt_TableCell"]);return s.createElement(Sa,{id:e,"data-column-id":t.id,role:"cell",className:u,"data-tag":o,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:g,$isDragging:a,onDragStart:i,onDragOver:c,onDragEnd:d,onDragEnter:m,onDragLeave:p},!t.cell&&s.createElement("div",{"data-tag":o},(function(h,b,$,P){return b?$&&typeof $=="function"?$(h,P):b(h,P):null})(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))}));const Mn="input";var xr=s.memo((function({name:e,component:t=Mn,componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:i=M}){const c=t,d=c!==Mn?n.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),m=s.useMemo((()=>(function(p,...g){let u;return Object.keys(p).map((h=>p[h])).forEach(((h,b)=>{typeof h=="function"&&(u=Object.assign(Object.assign({},p),{[Object.keys(p)[b]]:h(...g)}))})),u||p})(n,r)),[n,r]);return s.createElement(c,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=r)},style:d,onClick:a?M:i,name:e,"aria-label":e,checked:o,disabled:a},m,{onChange:M}))}));const $a=j(Ve)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Ea({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:i,selectableRowsSingle:c,selectableRowDisabled:d,onSelectedRow:m}){const p=!(!d||!d(n));return s.createElement($a,{onClick:g=>g.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},s.createElement(xr,{name:e,component:a,componentOptions:i,checked:o,"aria-checked":o,onClick:()=>{m({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:c})},disabled:p}))}const Oa=j.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Pa({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const i=t?n.expanded:n.collapsed;return s.createElement(Oa,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const ka=j(Ve)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function ja({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return s.createElement(ka,{onClick:i=>i.stopPropagation(),$noPadding:!0},s.createElement(Pa,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const Da=j.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var Ia=s.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter((i=>i!=="rdt_TableRow"))].join(" ");return s.createElement(Da,{className:a,$extendedRowStyle:r},s.createElement(t,Object.assign({data:e},n)))}));const Tt="allowRowEvents";var xt,Yt,Ln;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(xt||(xt={})),(function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"})(Yt||(Yt={})),(function(e){e.SM="sm",e.MD="md",e.LG="lg"})(Ln||(Ln={}));const Aa=L`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,_a=L`
	&:hover {
		cursor: pointer;
	}
`,Na=j.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&Aa};
	${({$pointerOnHover:e})=>e&&_a};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Fa({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:i=!1,expandableRowsComponent:c,expandableRowsComponentProps:d,expandableRowsHideExpander:m,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:g=!1,highlightOnHover:u=!1,id:h,expandableInheritConditionalStyles:b,keyField:$,onRowClicked:P=M,onRowDoubleClicked:E=M,onRowMouseEnter:S=M,onRowMouseLeave:w=M,onRowExpandToggled:v=M,onSelectedRow:D=M,pointerOnHover:R=!1,row:f,rowCount:A,rowIndex:U,selectableRowDisabled:Y=null,selectableRows:ee=!1,selectableRowsComponent:se,selectableRowsComponentProps:F,selectableRowsHighlight:fe=!1,selectableRowsSingle:Ce=!1,selected:he,striped:ie=!1,draggingColumnId:Ie,onDragStart:K,onDragOver:me,onDragEnd:de,onDragEnter:z,onDragLeave:Se}){const[Z,ue]=s.useState(n);s.useEffect((()=>{ue(n)}),[n]);const Q=s.useCallback((()=>{ue(!Z),v(!Z,f)}),[Z,v,f]),be=R||i&&(p||g),pe=s.useCallback((T=>{T.target.getAttribute("data-tag")===Tt&&(P(f,T),!r&&i&&p&&Q())}),[r,p,i,Q,P,f]),te=s.useCallback((T=>{T.target.getAttribute("data-tag")===Tt&&(E(f,T),!r&&i&&g&&Q())}),[r,g,i,Q,E,f]),Re=s.useCallback((T=>{S(f,T)}),[S,f]),X=s.useCallback((T=>{w(f,T)}),[w,f]),B=We(f,$),{conditionalStyle:et,classNames:tt}=mr(f,t,["rdt_TableRow"]),Ot=fe&&he,Pt=b?et:{},kt=ie&&U%2==0;return s.createElement(s.Fragment,null,s.createElement(Na,{id:`row-${h}`,role:"row",$striped:kt,$highlightOnHover:u,$pointerOnHover:!r&&be,$dense:o,onClick:pe,onDoubleClick:te,onMouseEnter:Re,onMouseLeave:X,className:tt,$selected:Ot,$conditionalStyle:et},ee&&s.createElement(Ea,{name:`select-row-${B}`,keyField:$,row:f,rowCount:A,selected:he,selectableRowsComponent:se,selectableRowsComponentProps:F,selectableRowDisabled:Y,selectableRowsSingle:Ce,onSelectedRow:D}),i&&!m&&s.createElement(ja,{id:B,expandableIcon:a,expanded:Z,row:f,onToggled:Q,disabled:r}),e.map((T=>T.omit?null:s.createElement(Ra,{id:`cell-${T.id}-${B}`,key:`cell-${T.id}-${B}`,dataTag:T.ignoreRowClick||T.button?null:Tt,column:T,row:f,rowIndex:U,isDragging:Qe(Ie,T.id),onDragStart:K,onDragOver:me,onDragEnd:de,onDragEnter:z,onDragLeave:Se})))),i&&Z&&s.createElement(Ia,{key:`expander-${B}`,data:f,extendedRowStyle:Pt,extendedClassNames:tt,ExpanderComponent:c,expanderComponentProps:d}))}const Ha=j.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ta=({sortActive:e,sortDirection:t})=>k.createElement(Ha,{$sortActive:e,$sortDirection:t},"▲"),Ma=j(wr)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,La=L`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&L`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,za=j.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&La};
`,Wa=j.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Ba=s.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:i,pagination:c,paginationServer:d,persistSelectedOnSort:m,selectableRowsVisibleOnly:p,onSort:g,onDragStart:u,onDragOver:h,onDragEnd:b,onDragEnter:$,onDragLeave:P}){s.useEffect((()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[E,S]=s.useState(!1),w=s.useRef(null);if(s.useEffect((()=>{w.current&&S(w.current.scrollWidth>w.current.clientWidth)}),[E]),e.omit)return null;const v=()=>{if(!e.sortable&&!e.selector)return;let F=o;Qe(r.id,e.id)&&(F=o===ve.ASC?ve.DESC:ve.ASC),g({type:"SORT_CHANGE",sortDirection:F,selectedColumn:e,clearSelectedOnSort:c&&d&&!m||i||p})},D=F=>s.createElement(Ta,{sortActive:F,sortDirection:o}),R=()=>s.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),f=!(!e.sortable||!Qe(r.id,e.id)),A=!e.sortable||t,U=e.sortable&&!a&&!e.right,Y=e.sortable&&!a&&e.right,ee=e.sortable&&a&&!e.right,se=e.sortable&&a&&e.right;return s.createElement(Ma,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:Qe(e.id,n),onDragStart:u,onDragOver:h,onDragEnd:b,onDragEnter:$,onDragLeave:P},e.name&&s.createElement(za,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:A?void 0:v,onKeyPress:A?void 0:F=>{F.key==="Enter"&&v()},$sortActive:!A&&f,disabled:A},!A&&se&&R(),!A&&Y&&D(f),typeof e.name=="string"?s.createElement(Wa,{title:E?e.name:void 0,ref:w,"data-column-id":e.id},e.name):e.name,!A&&ee&&R(),!A&&U&&D(f)))}));const Ga=j(Ve)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Va({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:i,selectableRowsComponentProps:c,selectableRowDisabled:d,onSelectAllRows:m}){const p=a.length>0&&!r,g=d?t.filter((b=>!d(b))):t,u=g.length===0,h=Math.min(t.length,g.length);return s.createElement(Ga,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},s.createElement(xr,{name:"select-all-rows",component:i,componentOptions:c,onClick:()=>{m({type:"SELECT_ALL_ROWS",rows:g,rowCount:h,mergeSelections:o,keyField:n})},checked:r,indeterminate:p,disabled:u}))}function yr(e=xt.AUTO){const t=typeof window=="object",[n,r]=s.useState(!1);return s.useEffect((()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],i=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||i.dir==="rtl";r(o&&c)}}),[e,t]),n}const Ya=j.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,qa=j.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,zn=j.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function Ua({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=yr(o),i=r>0;return n?s.createElement(zn,{$visible:i},s.cloneElement(n,{selectedCount:r})):s.createElement(zn,{$visible:i,$rtl:a},s.createElement(Ya,null,((c,d,m)=>{if(d===0)return null;const p=d===1?c.singular:c.plural;return m?`${d} ${c.message||""} ${p}`:`${d} ${p} ${c.message||""}`})(e,r,a)),s.createElement(qa,null,t))}const Ka=j.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Za=j.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Qa=j.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Xa=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:i,showMenu:c=!0})=>s.createElement(Ka,{className:"rdt_TableHeader",role:"heading","aria-level":1},s.createElement(Za,null,e),t&&s.createElement(Qa,null,t),c&&s.createElement(Ua,{contextMessage:n,contextActions:r,contextComponent:o,direction:i,selectedCount:a}));function vr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Ja={left:"flex-start",right:"flex-end",center:"center"},es=j.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Ja[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,ts=e=>{var{align:t="right",wrapContent:n=!0}=e,r=vr(e,["align","wrapContent"]);return s.createElement(es,Object.assign({align:t,$wrapContent:n},r))},ns=j.div`
	display: flex;
	flex-direction: column;
`,rs=j.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&L`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&L`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Wn=j.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,os=j.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,as=j(Ve)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,ss=j.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,is=()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},k.createElement("path",{d:"M7 10l5 5 5-5z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ls=j.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,cs=j.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,ds=e=>{var{defaultValue:t,onChange:n}=e,r=vr(e,["defaultValue","onChange"]);return s.createElement(cs,null,s.createElement(ls,Object.assign({onChange:n,defaultValue:t},r)),s.createElement(is,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return k.createElement("div",null,"To add an expander pass in a component instance via ",k.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:k.createElement((()=>k.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),k.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:k.createElement((()=>k.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),k.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:k.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:k.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Yt.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:k.createElement((()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),k.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:k.createElement((()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),k.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:k.createElement((()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:k.createElement((()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:xt.AUTO,onChangePage:M,onChangeRowsPerPage:M,onRowClicked:M,onRowDoubleClicked:M,onRowMouseEnter:M,onRowMouseLeave:M,onRowExpandToggled:M,onSelectedRowsChange:M,onSort:M,onColumnOrderChange:M},us={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ps=j.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,it=j.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,gs=j.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${br`
    width: 100%;
    justify-content: space-around;
  `};
`,Cr=j.span`
	flex-shrink: 1;
	user-select: none;
`,fs=j(Cr)`
	margin: 0 24px;
`,hs=j(Cr)`
	margin: 0 4px;
`;var ms=s.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=l.direction,paginationRowsPerPageOptions:o=l.paginationRowsPerPageOptions,paginationIconLastPage:a=l.paginationIconLastPage,paginationIconFirstPage:i=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:d=l.paginationIconPrevious,paginationComponentOptions:m=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:g=l.onChangePage}){const u=(()=>{const F=typeof window=="object";function fe(){return{width:F?window.innerWidth:void 0,height:F?window.innerHeight:void 0}}const[Ce,he]=s.useState(fe);return s.useEffect((()=>{if(!F)return()=>null;function ie(){he(fe())}return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)}),[]),Ce})(),h=yr(r),b=u.width&&u.width>599,$=Ze(t,e),P=n*e,E=P-e+1,S=n===1,w=n===$,v=Object.assign(Object.assign({},us),m),D=n===$?`${E}-${t} ${v.rangeSeparatorText} ${t}`:`${E}-${P} ${v.rangeSeparatorText} ${t}`,R=s.useCallback((()=>g(n-1)),[n,g]),f=s.useCallback((()=>g(n+1)),[n,g]),A=s.useCallback((()=>g(1)),[g]),U=s.useCallback((()=>g(Ze(t,e))),[g,t,e]),Y=s.useCallback((F=>p(Number(F.target.value),n)),[n,p]),ee=o.map((F=>s.createElement("option",{key:F,value:F},F)));v.selectAllRowsItem&&ee.push(s.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const se=s.createElement(ds,{onChange:Y,defaultValue:e,"aria-label":v.rowsPerPageText},ee);return s.createElement(ps,{className:"rdt_Pagination"},!v.noRowsPerPage&&b&&s.createElement(s.Fragment,null,s.createElement(hs,null,v.rowsPerPageText),se),b&&s.createElement(fs,null,D),s.createElement(gs,null,s.createElement(it,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":S,onClick:A,disabled:S,$isRTL:h},i),s.createElement(it,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":S,onClick:R,disabled:S,$isRTL:h},d),!v.noRowsPerPage&&!b&&se,s.createElement(it,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":w,onClick:f,disabled:w,$isRTL:h},c),s.createElement(it,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":w,onClick:U,disabled:w,$isRTL:h},a)))}));const Ee=(e,t)=>{const n=s.useRef(!0);s.useEffect((()=>{n.current?n.current=!1:e()}),t)};function bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ws=function(e){return(function(t){return!!t&&typeof t=="object"})(e)&&!(function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||(function(r){return r.$$typeof===xs})(t)})(e)},xs=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Je(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Be((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ys(e,t,n){return e.concat(t).map((function(r){return Je(r,n)}))}function Bn(e){return Object.keys(e).concat((function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(n){return Object.propertyIsEnumerable.call(t,n)})):[]})(e))}function Gn(e,t){try{return t in e}catch{return!1}}function vs(e,t,n){var r={};return n.isMergeableObject(e)&&Bn(e).forEach((function(o){r[o]=Je(e[o],n)})),Bn(t).forEach((function(o){(function(a,i){return Gn(a,i)&&!(Object.hasOwnProperty.call(a,i)&&Object.propertyIsEnumerable.call(a,i))})(e,o)||(Gn(e,o)&&n.isMergeableObject(t[o])?r[o]=(function(a,i){if(!i.customMerge)return Be;var c=i.customMerge(a);return typeof c=="function"?c:Be})(o,n)(e[o],t[o],n):r[o]=Je(t[o],n))})),r}function Be(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ys,n.isMergeableObject=n.isMergeableObject||ws,n.cloneUnlessOtherwiseSpecified=Je;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):vs(e,t,n):Je(t,n)}Be.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(n,r){return Be(n,r,t)}),{})};var Cs=bs(Be);const Vn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Yn={default:Vn,light:Vn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ss(e,t,n,r){const[o,a]=s.useState((()=>Tn(e))),[i,c]=s.useState(""),d=s.useRef("");Ee((()=>{a(Tn(e))}),[e]);const m=s.useCallback((P=>{var E,S,w;const{attributes:v}=P.target,D=(E=v.getNamedItem("data-column-id"))===null||E===void 0?void 0:E.value;D&&(d.current=((w=(S=o[st(o,D)])===null||S===void 0?void 0:S.id)===null||w===void 0?void 0:w.toString())||"",c(d.current))}),[o]),p=s.useCallback((P=>{var E;const{attributes:S}=P.target,w=(E=S.getNamedItem("data-column-id"))===null||E===void 0?void 0:E.value;if(w&&d.current&&w!==d.current){const v=st(o,d.current),D=st(o,w),R=[...o];R[v]=o[D],R[D]=o[v],a(R),t(R)}}),[t,o]),g=s.useCallback((P=>{P.preventDefault()}),[]),u=s.useCallback((P=>{P.preventDefault()}),[]),h=s.useCallback((P=>{P.preventDefault(),d.current="",c("")}),[]),b=(function(P=!1){return P?ve.ASC:ve.DESC})(r),$=s.useMemo((()=>o[st(o,n?.toString())]||{}),[n,o]);return{tableColumns:o,draggingColumnId:i,handleDragStart:m,handleDragEnter:p,handleDragOver:g,handleDragLeave:u,handleDragEnd:h,defaultSortDirection:b,defaultSortColumn:$}}var Rs=s.memo((function(e){const{data:t=l.data,columns:n=l.columns,title:r=l.title,actions:o=l.actions,keyField:a=l.keyField,striped:i=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:d=l.pointerOnHover,dense:m=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:g=l.selectableRowsSingle,selectableRowsHighlight:u=l.selectableRowsHighlight,selectableRowsNoSelectAll:h=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:b=l.selectableRowsVisibleOnly,selectableRowSelected:$=l.selectableRowSelected,selectableRowDisabled:P=l.selectableRowDisabled,selectableRowsComponent:E=l.selectableRowsComponent,selectableRowsComponentProps:S=l.selectableRowsComponentProps,onRowExpandToggled:w=l.onRowExpandToggled,onSelectedRowsChange:v=l.onSelectedRowsChange,expandableIcon:D=l.expandableIcon,onChangeRowsPerPage:R=l.onChangeRowsPerPage,onChangePage:f=l.onChangePage,paginationServer:A=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:Y=l.paginationTotalRows,paginationDefaultPage:ee=l.paginationDefaultPage,paginationResetDefaultPage:se=l.paginationResetDefaultPage,paginationPerPage:F=l.paginationPerPage,paginationRowsPerPageOptions:fe=l.paginationRowsPerPageOptions,paginationIconLastPage:Ce=l.paginationIconLastPage,paginationIconFirstPage:he=l.paginationIconFirstPage,paginationIconNext:ie=l.paginationIconNext,paginationIconPrevious:Ie=l.paginationIconPrevious,paginationComponent:K=l.paginationComponent,paginationComponentOptions:me=l.paginationComponentOptions,responsive:de=l.responsive,progressPending:z=l.progressPending,progressComponent:Se=l.progressComponent,persistTableHead:Z=l.persistTableHead,noDataComponent:ue=l.noDataComponent,disabled:Q=l.disabled,noTableHead:be=l.noTableHead,noHeader:pe=l.noHeader,fixedHeader:te=l.fixedHeader,fixedHeaderScrollHeight:Re=l.fixedHeaderScrollHeight,pagination:X=l.pagination,subHeader:B=l.subHeader,subHeaderAlign:et=l.subHeaderAlign,subHeaderWrap:tt=l.subHeaderWrap,subHeaderComponent:Ot=l.subHeaderComponent,noContextMenu:Pt=l.noContextMenu,contextMessage:kt=l.contextMessage,contextActions:T=l.contextActions,contextComponent:Sr=l.contextComponent,expandableRows:nt=l.expandableRows,onRowClicked:Xt=l.onRowClicked,onRowDoubleClicked:Jt=l.onRowDoubleClicked,onRowMouseEnter:en=l.onRowMouseEnter,onRowMouseLeave:tn=l.onRowMouseLeave,sortIcon:Rr=l.sortIcon,onSort:$r=l.onSort,sortFunction:nn=l.sortFunction,sortServer:jt=l.sortServer,expandableRowsComponent:Er=l.expandableRowsComponent,expandableRowsComponentProps:Or=l.expandableRowsComponentProps,expandableRowDisabled:rn=l.expandableRowDisabled,expandableRowsHideExpander:on=l.expandableRowsHideExpander,expandOnRowClicked:Pr=l.expandOnRowClicked,expandOnRowDoubleClicked:kr=l.expandOnRowDoubleClicked,expandableRowExpanded:an=l.expandableRowExpanded,expandableInheritConditionalStyles:jr=l.expandableInheritConditionalStyles,defaultSortFieldId:Dr=l.defaultSortFieldId,defaultSortAsc:Ir=l.defaultSortAsc,clearSelectedRows:sn=l.clearSelectedRows,conditionalRowStyles:Ar=l.conditionalRowStyles,theme:ln=l.theme,customStyles:cn=l.customStyles,direction:Ye=l.direction,onColumnOrderChange:_r=l.onColumnOrderChange,className:Nr,ariaLabel:dn}=e,{tableColumns:un,draggingColumnId:pn,handleDragStart:gn,handleDragEnter:fn,handleDragOver:hn,handleDragLeave:mn,handleDragEnd:bn,defaultSortDirection:Fr,defaultSortColumn:Hr}=Ss(n,_r,Dr,Ir),[{rowsPerPage:we,currentPage:re,selectedRows:Dt,allSelected:wn,selectedCount:xn,selectedColumn:le,sortDirection:Ae,toggleOnSelectedRowsChange:Tr},$e]=s.useReducer(ga,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Hr,toggleOnSelectedRowsChange:!1,sortDirection:Fr,currentPage:ee,rowsPerPage:F,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:yn=!1,persistSelectedOnPageChange:rt=!1}=U,vn=!(!A||!rt&&!yn),Mr=X&&!z&&t.length>0,Lr=K||ms,zr=s.useMemo((()=>((x={},I="default",q="default")=>{const oe=Yn[I]?I:q;return Cs({table:{style:{color:(y=Yn[oe]).text.primary,backgroundColor:y.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:y.text.primary,backgroundColor:y.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:y.background.default,minHeight:"52px"}},head:{style:{color:y.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:y.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:y.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:y.context.background,fontSize:"18px",fontWeight:400,color:y.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:y.text.primary,backgroundColor:y.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:y.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:y.selected.text,backgroundColor:y.selected.default,borderBottomColor:y.background.default}},highlightOnHoverStyle:{color:y.highlightOnHover.text,backgroundColor:y.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:y.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:y.background.default},stripedStyle:{color:y.striped.text,backgroundColor:y.striped.default}},expanderRow:{style:{color:y.text.primary,backgroundColor:y.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:y.button.default,fill:y.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:y.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:y.button.hover},"&:focus":{outline:"none",backgroundColor:y.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:y.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:y.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:y.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:y.button.default,fill:y.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:y.button.disabled,fill:y.button.disabled},"&:hover:not(:disabled)":{backgroundColor:y.button.hover},"&:focus":{outline:"none",backgroundColor:y.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:y.text.primary,backgroundColor:y.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:y.text.primary,backgroundColor:y.background.default}}},x);var y})(cn,ln)),[cn,ln]),Wr=s.useMemo((()=>Object.assign({},Ye!=="auto"&&{dir:Ye})),[Ye]),G=s.useMemo((()=>{if(jt)return t;if(le?.sortFunction&&typeof le.sortFunction=="function"){const x=le.sortFunction,I=Ae===ve.ASC?x:(q,oe)=>-1*x(q,oe);return[...t].sort(I)}return(function(x,I,q,oe){return I?oe&&typeof oe=="function"?oe(x.slice(0),I,q):x.slice(0).sort(((y,It)=>{const Ne=I(y),xe=I(It);if(q==="asc"){if(Ne<xe)return-1;if(Ne>xe)return 1}if(q==="desc"){if(Ne>xe)return-1;if(Ne<xe)return 1}return 0})):x})(t,le?.selector,Ae,nn)}),[jt,le,Ae,t,nn]),qe=s.useMemo((()=>{if(X&&!A){const x=re*we,I=x-we;return G.slice(I,x)}return G}),[re,X,A,we,G]),Br=s.useCallback((x=>{$e(x)}),[]),Gr=s.useCallback((x=>{$e(x)}),[]),Vr=s.useCallback((x=>{$e(x)}),[]),Yr=s.useCallback(((x,I)=>Xt(x,I)),[Xt]),qr=s.useCallback(((x,I)=>Jt(x,I)),[Jt]),Ur=s.useCallback(((x,I)=>en(x,I)),[en]),Kr=s.useCallback(((x,I)=>tn(x,I)),[tn]),_e=s.useCallback((x=>$e({type:"CHANGE_PAGE",page:x,paginationServer:A,visibleOnly:b,persistSelectedOnPageChange:rt})),[A,rt,b]),Zr=s.useCallback((x=>{const I=Ze(Y||qe.length,x),q=Ht(re,I);A||_e(q),$e({type:"CHANGE_ROWS_PER_PAGE",page:q,rowsPerPage:x})}),[re,_e,A,Y,qe.length]);if(X&&!A&&G.length>0&&qe.length===0){const x=Ze(G.length,we),I=Ht(re,x);_e(I)}Ee((()=>{v({allSelected:wn,selectedCount:xn,selectedRows:Dt.slice(0)})}),[Tr]),Ee((()=>{$r(le,Ae,G.slice(0))}),[le,Ae]),Ee((()=>{f(re,Y||G.length)}),[re]),Ee((()=>{R(we,re)}),[we]),Ee((()=>{_e(ee)}),[ee,se]),Ee((()=>{if(X&&A&&Y>0){const x=Ze(Y,we),I=Ht(re,x);re!==I&&_e(I)}}),[Y]),s.useEffect((()=>{$e({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:sn})}),[g,sn]),s.useEffect((()=>{if(!$)return;const x=G.filter((q=>$(q))),I=g?x.slice(0,1):x;$e({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:I,totalRows:G.length,mergeSelections:vn})}),[t,$]);const Qr=b?qe:G,Xr=rt||g||h;return s.createElement(ca,{theme:zr},!pe&&(!!r||!!o)&&s.createElement(Xa,{title:r,actions:o,showMenu:!Pt,selectedCount:xn,direction:Ye,contextActions:T,contextComponent:Sr,contextMessage:kt}),B&&s.createElement(ts,{align:et,wrapContent:tt},Ot),s.createElement(rs,Object.assign({$responsive:de,$fixedHeader:te,$fixedHeaderScrollHeight:Re,className:Nr},Wr),s.createElement(os,null,z&&!Z&&s.createElement(Wn,null,Se),s.createElement(ha,Object.assign({disabled:Q,className:"rdt_Table",role:"table"},dn&&{"aria-label":dn}),!be&&(!!Z||G.length>0&&!z)&&s.createElement(ba,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:te},s.createElement(wa,{className:"rdt_TableHeadRow",role:"row",$dense:m},p&&(Xr?s.createElement(Ve,{style:{flex:"0 0 48px"}}):s.createElement(Va,{allSelected:wn,selectedRows:Dt,selectableRowsComponent:E,selectableRowsComponentProps:S,selectableRowDisabled:P,rowData:Qr,keyField:a,mergeSelections:vn,onSelectAllRows:Gr})),nt&&!on&&s.createElement(as,null),un.map((x=>s.createElement(Ba,{key:x.id,column:x,selectedColumn:le,disabled:z||G.length===0,pagination:X,paginationServer:A,persistSelectedOnSort:yn,selectableRowsVisibleOnly:b,sortDirection:Ae,sortIcon:Rr,sortServer:jt,onSort:Br,onDragStart:gn,onDragOver:hn,onDragEnd:bn,onDragEnter:fn,onDragLeave:mn,draggingColumnId:pn}))))),!G.length&&!z&&s.createElement(ss,null,ue),z&&Z&&s.createElement(Wn,null,Se),!z&&G.length>0&&s.createElement(ns,{className:"rdt_TableBody",role:"rowgroup"},qe.map(((x,I)=>{const q=We(x,a),oe=(function(xe=""){return typeof xe!="number"&&(!xe||xe.length===0)})(q)?I:q,y=gt(x,Dt,a),It=!!(nt&&an&&an(x)),Ne=!!(nt&&rn&&rn(x));return s.createElement(Fa,{id:oe,key:oe,keyField:a,"data-row-id":oe,columns:un,row:x,rowCount:G.length,rowIndex:I,selectableRows:p,expandableRows:nt,expandableIcon:D,highlightOnHover:c,pointerOnHover:d,dense:m,expandOnRowClicked:Pr,expandOnRowDoubleClicked:kr,expandableRowsComponent:Er,expandableRowsComponentProps:Or,expandableRowsHideExpander:on,defaultExpanderDisabled:Ne,defaultExpanded:It,expandableInheritConditionalStyles:jr,conditionalRowStyles:Ar,selected:y,selectableRowsHighlight:u,selectableRowsComponent:E,selectableRowsComponentProps:S,selectableRowDisabled:P,selectableRowsSingle:g,striped:i,onRowExpandToggled:w,onRowClicked:Yr,onRowDoubleClicked:qr,onRowMouseEnter:Ur,onRowMouseLeave:Kr,onSelectedRow:Vr,draggingColumnId:pn,onDragStart:gn,onDragOver:hn,onDragEnd:bn,onDragEnter:fn,onDragLeave:mn})})))))),Mr&&s.createElement("div",null,s.createElement(Lr,{onChangePage:_e,onChangeRowsPerPage:Zr,rowCount:Y||G.length,currentPage:re,rowsPerPage:we,direction:Ye,paginationRowsPerPageOptions:fe,paginationIconLastPage:Ce,paginationIconFirstPage:he,paginationIconNext:ie,paginationIconPrevious:Ie,paginationComponentOptions:me})))}));const $s=({title:e,breadcrumb:t})=>C.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow rounded mb-4",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"text-2xl font-bold text-[#003b19]",children:e}),C.jsx("div",{className:"text-sm text-gray-500 flex items-center gap-1",children:t.map((n,r)=>C.jsxs("span",{className:"flex items-center",children:[r>0&&C.jsx("span",{className:"mx-1",children:">"}),n.link?C.jsx(Cn,{to:n.link,className:"hover:underline",children:n.label}):C.jsx("span",{children:n.label})]},r))})]}),C.jsxs("div",{className:"flex items-center gap-2 mt-3 md:mt-0",children:[C.jsx(Cn,{to:"/admin/products/add-product",className:"bg-blue-600 text-white p-2 rounded hover:bg-blue-700",children:C.jsx(ao,{size:16})}),C.jsx("button",{className:"bg-red-500 text-white p-2 rounded hover:bg-red-600",children:C.jsx(io,{size:16})})]})]}),Ps=()=>{const e=Jr(),[t,n]=s.useState([]),[r,o]=s.useState(!0),[a,i]=s.useState(""),[c,d]=s.useState([]);s.useEffect(()=>{m()},[]);const m=async()=>{const u=localStorage.getItem("adminToken");try{const b=await(await fetch("https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/products",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}})).json();n(b.data||[]),d(b.data||[])}catch(h){console.error("Failed to fetch products:",h),n([])}finally{o(!1)}};s.useEffect(()=>{const u=t.filter(h=>h.product_name?.toLowerCase().includes(a.toLowerCase()));d(u)},[a,t]);const p={rows:{style:{paddingTop:"12px",paddingBottom:"12px"}}},g=[{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Image"}),selector:u=>u.image?C.jsx("div",{className:"w-16 h-16 flex items-center justify-center rounded  border p-1",children:C.jsx("img",{src:`https://devshub.easeesqueezy.com/easeesqueezy_backend/public/uploads/product/${u.image}`,alt:u.product_name,className:"w-full h-full object-contain  "})}):C.jsx("span",{className:"text-gray-400",children:"No image"}),sortable:!1},{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Product Name"}),selector:u=>C.jsxs("div",{children:[C.jsx("span",{children:u.product_name}),C.jsx("div",{className:`text-sm ${u.status=="1"?"text-green-600":"text-red-500"}`,children:u.status=="1"?"Active":"Inactive"})]}),sortable:!0},{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Model"}),selector:u=>u.model,sortable:!0},{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Price"}),selector:u=>u.special_price?C.jsxs("div",{children:[C.jsx("div",{className:"text-red-500 line-through",children:Number(u.price).toFixed(2)}),C.jsx("div",{className:"text-green-600",children:Number(u.special_price).toFixed(2)})]}):C.jsx("div",{className:"text-green-600",children:Number(u.price).toFixed(2)}),sortable:!0},{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Quantity"}),selector:u=>C.jsx("div",{className:`px-1 py-0 rounded text-sm text-white  ${Number(u.quantity)>=50?"bg-green-500 ":Number(u.quantity)>20?"bg-orange-400":"bg-red-500"}`,children:u.quantity}),sortable:!0},{name:C.jsx("span",{className:" text-[0.9rem] font-bold ",children:"Action"}),cell:u=>C.jsx("div",{className:"flex gap-2",children:C.jsx("button",{onClick:()=>e(`/admin/products/${u.id}`),className:"bg-[#003b19] p-2 rounded text-white",children:C.jsx(ro,{size:16})})})}];return C.jsxs(C.Fragment,{children:[C.jsx($s,{title:"Products",breadcrumb:[{label:"Home",link:"#"},{label:"Products"}]}),C.jsx("div",{className:"flex gap-4 flex-col lg:flex-row border",children:C.jsxs("div",{className:"flex-1 w-full bg-white p-4 shadow rounded",children:[C.jsxs("div",{className:"flex items-center gap-1 text-lg font-semibold border-b pb-2 mb-4 text-[#003b19]",children:[C.jsx(to,{size:18}),C.jsx("h2",{children:"Product List"})]}),C.jsx("input",{type:"text",placeholder:"Search products...",className:"w-full md:w-1/3 p-2 border rounded mb-4",value:a,onChange:u=>i(u.target.value)}),C.jsx(Rs,{columns:g,data:c,progressPending:r,pagination:!0,highlightOnHover:!0,responsive:!0,persistTableHead:!0,defaultSortFieldId:2,customStyles:p,noDataComponent:C.jsx("h1",{className:"text-center py-6 text-red-500 text-2xl font-bold",children:"No Product Found"})})]})})]})};export{Ps as default};
