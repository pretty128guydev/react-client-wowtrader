(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[92],{16178:t=>{t.exports={"close-button":"close-button-WaM0Er9G","close-icon":"close-icon-WaM0Er9G","button-l":"button-l-WaM0Er9G","button-m":"button-m-WaM0Er9G","button-s":"button-s-WaM0Er9G","button-xs":"button-xs-WaM0Er9G","button-xxs":"button-xxs-WaM0Er9G"}},69599:t=>{t.exports={container:"container-PxtBx6dp","container-danger":"container-danger-PxtBx6dp",icon:"icon-PxtBx6dp",header:"header-PxtBx6dp","container-warning":"container-warning-PxtBx6dp","container-success":"container-success-PxtBx6dp","container-default":"container-default-PxtBx6dp","text-wrap":"text-wrap-PxtBx6dp","close-button":"close-button-PxtBx6dp"}},18546:t=>{t.exports={container:"container-64c268VA",bottomPadding:"bottomPadding-64c268VA",centerElement:"centerElement-64c268VA",notice:"notice-64c268VA","notice-showed":"notice-showed-64c268VA"}},24115:(t,e,n)=>{"use strict";n.d(e,{CloseButton:()=>m});var o=n(59496),s=n(97754),r=n(72571),a=n(58090),i=n(91046),c=n(56846),l=n(86498),d=n(22248),h=n(16178),w=n.n(h);function u(t="l"){switch(t){case"l":return a;case"m":return i;case"s":return c;case"xs":return l;case"xxs":return d;default:return i}}const m=o.forwardRef((t,e)=>{const{className:n,size:a,...i}=t,c=s(w()["close-button"],w()["button-"+a],n);return o.createElement("button",{...i,type:"button",className:c,ref:e},o.createElement(r.Icon,{icon:u(a),className:w()["close-icon"],"aria-hidden":!0}))})},72571:(t,e,n)=>{"use strict";n.d(e,{Icon:()=>s});var o=n(59496);const s=o.forwardRef((t,e)=>{const{icon:n="",...s}=t;return o.createElement("span",{...s,ref:e,dangerouslySetInnerHTML:{__html:n}})})},18460:(t,e,n)=>{"use strict";n.d(e,{Informer:()=>u});var o=n(59496),s=n(97754),r=n(72571),a=n(24115),i=n(37553),c=n(60525),l=n(3150),d=n(69599),h=n.n(d);const w={danger:i,warning:i,success:l,default:c};function u(t){const{informerIntent:e,content:n,className:i,header:c,isIconShown:l=!0,isCloseButtonShown:d,icon:u,onCloseClick:m,closeButtonLabel:x="Close"}=t;return o.createElement("div",{className:s(h().container,h()["container-"+e],i)},l&&o.createElement(r.Icon,{className:h().icon,icon:null!=u?u:w[e]}),o.createElement("div",{className:h()["text-wrap"]},o.createElement("span",{className:h().header},c)," ",n),d&&o.createElement(a.CloseButton,{"aria-label":x,onClick:m,className:h()["close-button"],size:"xs"}))}},61156:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ChartScreenshotHintRenderer:()=>d});var o=n(59496),s=n(87995),r=n(4889),a=n(97754),i=n(18460),c=n(18546);function l(t){const[e,n]=(0,o.useState)(!1);return(0,o.useLayoutEffect)(()=>{const t=setTimeout(()=>n(!0),50),e=setTimeout(()=>n(!1),2500);return()=>{clearTimeout(t),clearTimeout(e)}},[]),o.createElement("div",{className:a(c.container,t.bottomPadding&&c.bottomPadding)},o.createElement("div",{className:c.centerElement},o.createElement(i.Informer,{content:t.text,informerIntent:"success",className:a(c.notice,e&&c["notice-showed"])})))}class d{constructor(t,e){this._showed=!1,this._wrap=document.createElement("div"),this._container=t,
this._debouncedHide=(0,r.default)(()=>this.hide(),3e3),this._bottomPadding=e.bottomPadding}show(t){this._wrap&&!this._showed&&(this._showed=!0,this._container.append(this._wrap),s.render(o.createElement(l,{text:t,bottomPadding:this._bottomPadding}),this._wrap),this._debouncedHide())}hide(){this._wrap&&(this._showed=!1,s.unmountComponentAtNode(this._wrap),this._wrap.remove())}destroy(){this.hide(),delete this._wrap}}},3150:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zm4.15 5.87a.75.75 0 0 0-1.3-.74l-3.51 6.15-2.31-2.31a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.18-.16l4-7z"/></svg>'},37553:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zM7.75 5.48a1.27 1.27 0 1 1 2.5 0l-.67 4.03a.59.59 0 0 1-1.16 0l-.67-4.03zM8 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/></svg>'},60525:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1z"/></svg>'},58090:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23"><path stroke="currentColor" stroke-width="1.2" d="M1 1l21 21m0-21L1 22"/></svg>'},91046:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'},56846:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'},86498:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path stroke="currentColor" stroke-width="1.2" d="M1 1l9 9m0-9l-9 9"/></svg>'},22248:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9" height="9"><path stroke="currentColor" stroke-width="1.2" d="M1 1l7 7m0-7L1 8"/></svg>'}}]);