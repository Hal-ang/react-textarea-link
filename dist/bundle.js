'use client';
"use strict";var f=require("react/jsx-runtime"),s=require("react"),S=require("linkify-string");function k(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(c[n[i]]=t[n[i]]);return c}typeof SuppressedError=="function"&&SuppressedError;function E(t,e){e===void 0&&(e={});var c=e.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",c==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var O=`.link-textarea-container__mirror a:link {
  color: #0000ee !important;
}

.link-textarea-container__mirror a:visited {
  color: #551a8b !important;
}

.link-textarea-container__mirror a {
  pointer-events: auto !important;
  text-decoration: underline;
}
`;E(O);const j=t=>t.split("-").map((e,c)=>c===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join(""),v=t=>t.endsWith("px")?parseInt(t.slice(0,-2),10):0,_=(t,e)=>{const c=o=>{if(!t?.current)throw new Error("Textarea ref is not defined");const a=v(o.paddingLeft)+v(o.paddingRight),d=v(o.paddingTop)+v(o.paddingBottom),{clientWidth:r,clientHeight:l}=t.current;return{width:r-a+"px",height:l-d+"px"}},n=s.useMemo(()=>new ResizeObserver(()=>{if(!e.current||!t.current)return;const{width:o,height:a}=c(getComputedStyle(t.current));e.current.style.width=o,e.current.style.height=a}),[t,e,c]),i=s.useCallback(o=>{if(!e?.current||!t?.current)return;const a=["border","borderLeft","borderRight","borderTop","borderBottom","boxSizing","fontFamily","fontSize","fontWeight","letterSpacing","lineHeight","padding","paddingLeft","paddingRight","paddingTop","margin","marginLeft","marginRight","marginTop","marginBottom","paddingBottom","textDecoration","textIndent","textTransform","whiteSpace","wordSpacing","wordWrap","textAlign","borderRadius"],d=getComputedStyle(t.current);a.forEach(r=>{const l=j(r);e.current.style[l]=d[l]}),e.current.style.borderColor="transparent",o?.color&&(e.current.style.color=o.color),o?.backgroundColor&&(e.current.style.backgroundColor=o.backgroundColor)},[e,t]);return{resizeObserver:n,applyStyleToMirroredRef:i,setLinkifyText:o=>{!e?.current||!t.current||(e.current.innerHTML=S(t.current.value,{target:o}))},copyTextToMirroredRef:()=>{!t?.current||!e?.current||(e.current.textContent=t.current.value)}}},L=s.forwardRef((t,e)=>{var{containerStyle:c={},textareaStyle:n={},containerClassName:i="",textareaClassName:T="",linkTarget:p="_blank",fontColor:o="black",caretColor:a="black"}=t,d=k(t,["containerStyle","textareaStyle","containerClassName","textareaClassName","linkTarget","fontColor","caretColor"]);const r=s.useRef(null),l=s.useRef(null),{resizeObserver:g,applyStyleToMirroredRef:C,setLinkifyText:h,copyTextToMirroredRef:m}=_(r,l);return s.useEffect(()=>{m(),C(n),h(p)},[n,m]),s.useEffect(()=>{if(r?.current)return g.observe(r.current),()=>{g.disconnect()}},[r,g]),s.useEffect(()=>{if(!r?.current||!l?.current)return;const u=()=>{!r.current||!l.current||(l.current.scrollTop=r.current.scrollTop)},x=()=>{h(p)};return r.current.addEventListener("scroll",u),r.current.addEventListener("input",x),()=>{var y,b;(y=r.current)===null||y===void 0||y.removeEventListener("scroll",u),(b=r.current)===null||b===void 0||b.removeEventListener("input",x)}},[r,l,p,h]),f.jsxs("div",{className:`link-textarea-container ${i}`,style:Object.assign(Object.assign({},c),{position:"relative"}),children:[f.jsx("textarea",Object.assign({ref:u=>{r.current=u,typeof e=="function"?e(u):e&&(e.current=u)},className:`link-textarea-container__textarea ${T}`,style:Object.assign(Object.assign({width:"100%",height:"100%",caretColor:a},n),{color:"transparent",position:"relative"})},d)),f.jsx("div",{ref:l,className:"link-textarea-container__mirror",style:{color:o,width:"100%",height:"100%",position:"absolute",top:0,left:0,right:0,userSelect:"none",overflow:"hidden",pointerEvents:"none"}})]})});module.exports=L;
//# sourceMappingURL=bundle.js.map
