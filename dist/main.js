(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(601),r=n.n(o),c=n(314),a=n.n(c)()(r());a.push([e.id,"body {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.new-item-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-item {\n  display: grid;\n  grid-template-columns: 6fr 2fr 1fr 1fr;\n}\n\n.edit svg, .remove svg {\n  max-height: 1.2rem;\n}\n",""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var l=e[i],s=o.base?l[0]+o.base:l[0],d=c[s]||0,u="".concat(s," ").concat(d);c[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var l=o(e,r),s=0;s<c.length;s++){var d=n(c[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}},t=class{constructor(e){this.projectName=e,this.todos=[]}};var o=n(72),r=n.n(o),c=n(825),a=n.n(c),i=n(659),l=n.n(i),s=n(56),d=n.n(s),u=n(540),p=n.n(u),m=n(113),v=n.n(m),f=n(365),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(f.A,h),f.A&&f.A.locals&&f.A.locals;const y=[new t("Sample project")],g=document.querySelector("#todo-dialog"),S=document.querySelector("#project-dialog"),q=document.querySelector("#remove-project-dialog");let x=0;function C(){const e=document.querySelector(".project-selector");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("select");for(let e=0;e<y.length;e++){const n=document.createElement("option");n.textContent=y[e].projectName,n.value=e,t.appendChild(n)}t.value=x,t.addEventListener("change",(function(){x=this.value,b()})),e.appendChild(t)}function b(){const e=document.querySelector(".todo-list");for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(y.length>0)for(let t=0;t<y[x].todos.length;t++){const n=document.createElement("span");n.className="todo-item",n.dataset.itemID=y[x].todos[t].id;const o=document.createElement("div");o.className="title",o.textContent=y[x].todos[t].title;const r=document.createElement("div");r.className="date",r.textContent=y[x].todos[t].dueDate;const c=document.createElement("div"),a='<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';c.className="edit",c.innerHTML=a;const i=document.createElement("div"),l='<svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';i.className="remove",i.innerHTML=l,i.addEventListener("click",(e=>j(e))),n.appendChild(o),n.appendChild(r),n.appendChild(c),n.appendChild(i),e.appendChild(n)}}function j(e){const t=e.target.closest(".todo-item").dataset.itemID,n=y[x].todos.findIndex((e=>e.id==t));y[x].todos.splice(n,1),b()}C(),document.querySelector(".new-todo").addEventListener("click",(()=>{g.showModal()})),document.querySelector(".add-todo").addEventListener("click",(()=>{(function(){const e=document.querySelector("#title"),t=document.querySelector("#description");return e.value.length<3?(alert("Title must be filled out"),!1):e.value.length>30?(alert("Title too long"),!1):!(t.value.length>120&&(alert("Description too long"),1))})()&&function(){const t=document.querySelector("#title"),n=document.querySelector("#description"),o=document.querySelector("#due-date"),r=document.querySelector("#priority");y[x].todos.push(function(t,n,o,r){return new e(t,n,o,r)}(t.value,n.value,o.value,r.value)),t.value="",n.value="",o.value="",r.value="medium",b(),g.close()}()})),document.querySelector(".close-todo-dialog").addEventListener("click",(()=>{g.close()})),document.querySelector(".new-project").addEventListener("click",(()=>{S.showModal()})),document.querySelector(".add-project").addEventListener("click",(()=>{(function(){const e=document.querySelector("#project-name");return e.value.length<1?(alert("Project name must be filled out"),!1):!(e.value.length>30&&(alert("Project name too long"),1))})()&&function(){const e=document.querySelector("#project-name");var n;y.push((n=e.value,new t(n))),x=y.length-1,document.querySelector("select").value=x,C(),b(),S.close(),e.value="",0!=y.length&&(document.querySelector(".new-todo").disabled=!1)}()})),document.querySelector(".close-project-dialog").addEventListener("click",(()=>{S.close()})),document.querySelector(".remove-project").addEventListener("click",(()=>{q.showModal()})),document.querySelector(".remove-project-permanently").addEventListener("click",(function(){y.splice(x,1),q.close(),x>0&&(x-=1),console.log("removing project. active project becomes: "+x),C(),b(),0==y.length&&(document.querySelector(".new-todo").disabled=!0)})),document.querySelector(".close-project-remove-dialog").addEventListener("click",(()=>{q.close()}))})()})();