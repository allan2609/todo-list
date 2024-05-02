(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),d=n.n(i)()(r());d.push([e.id,'html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: "Lucida Grande", Geneva, sans-serif;\n}\n\ndialog {\n  width: min(34rem, 95%);\n  padding: 2rem;\n  border: 2px solid black;\n  border-radius: 0.5rem;\n  box-shadow: 1px 0px 4px 4px rgba(0, 0, 0, 0.2);\n}\n\nsvg:hover {\n  transform: scale(1.4);\n}\n\nsvg {\n  transition: all 0.25s;\n  transform-origin: 50% 50%;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nselect {\n  display: flex;\n  flex: 1;\n  height: 1.75rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.9rem;\n}\n\nbutton {\n  height: 2rem;\n  width: 8rem;\n  font-size: 0.9rem;\n}\n\n.container {\n  display: grid;\n  min-width: 100%;\n  min-height: 100vh;\n  background-color: lightgray;\n}\n\n.content {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  color: black;\n  background-color: white;\n  margin: 0.5rem;\n  width: min(40rem, 100%);\n  justify-self: center;\n  border: 2px solid darkgray;\n  border-radius: 2rem;\n  box-shadow: 1px 0px 4px 4px rgba(0, 0, 0, 0.2);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 1rem 0 2rem 0;\n}\n\n.form p {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.form-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.form-items span {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.form-items span input {\n  display: flex;\n  flex: 1;\n  height: 1.75rem;\n  padding-left: 0.5rem;\n  font-size: 0.9rem;\n}\n\ninput:focus, select:focus {\n  border: 1px solid blue;\n  outline: 1px solid blue;\n}\n\ninput.invalid:focus {\n  border: 1px solid red;\n  outline: 1px solid red;\n}\n\n.date, .edit, .remove {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 1rem 1rem 1rem;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.dialog-buttons {\n  display: flex;\n  flex: 1;\n  gap: 2rem;\n}\n\n.dialog-buttons button {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  padding: 1rem;\n  gap: 0.5rem;\n}\n\n.todo-item {\n  display: grid;\n  grid-template-columns: 10fr 4fr 1fr 1fr;\n  gap: 0.5rem;\n  background-color: #ededed;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.low-priority {\n  border-left: 1px solid lightgreen;\n  box-shadow: 1px 0px 3px 3px rgba(82, 209, 88, 0.2);\n}\n\n.medium-priority {\n  border-left: 1px solid yellow;\n  box-shadow: 1px 0px 3px 3px rgba(252, 250, 101, 0.2);\n}\n\n.high-priority {\n  border: 1px solid pink;\n  box-shadow: 1px 0px 3px 3px rgba(168, 50, 50, 0.2);\n}\n\n.edit svg, .remove svg {\n  height: 1.1rem;\n}\n\n.hidden-description {\n  position: absolute;\n  display: none;\n  visibility: hidden;\n  background-color: #f0eac7;\n  padding: 0.3rem;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  font-size: 0.8rem;\n  max-width: min(22rem, 70%);\n}\n\n@media (max-width: 460px) {\n  .buttons-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .project-buttons {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: -1rem;\n  }\n  .buttons-container button, .project-buttons button {\n    width: 70%;\n    margin: 0.2rem;\n  }\n}\n',""]);const c=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(d[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],c=0;c<e.length;c++){var l=e[c],a=o.base?l[0]+o.base:l[0],s=i[a]||0,u="".concat(a," ").concat(s);i[a]=s+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var l=o(e,r),a=0;a<i.length;a++){var s=n(i[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.id=Math.random()}},t=function(t,n,o,r){return new e(t,n,o,r)},o=class{constructor(e){this.projectName=e,this.todos=[]}},r=function(e){return new o(e)};var i=n(72),d=n.n(i),c=n(825),l=n.n(c),a=n(659),s=n.n(a),u=n(56),m=n.n(u),p=n(540),f=n.n(p),v=n(113),y=n.n(v),g=n(365),h={};h.styleTagTransform=y(),h.setAttributes=m(),h.insert=s().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=f(),d()(g.A,h),g.A&&g.A.locals&&g.A.locals;const b=localStorage.projects?function(e){let n=JSON.parse(e),o=[];for(let e=0;e<n.length;e++){let i=r(n[e].projectName),d=n[e].todos;for(let e=0;e<d.length;e++){let n=d[e];d[e]=t(n.title,n.description,n.dueDate,n.priority)}i.todos=d,o.push(i)}return o}(localStorage.projects):[new o("Sample project")],S=document.querySelector("#todo-dialog"),x=document.querySelector("#edit-todo-dialog"),q=document.querySelector("#project-dialog"),L=document.querySelector("#remove-project-dialog");let w=0;function j(){const e=document.querySelector(".project-selector");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("select");for(let e=0;e<b.length;e++){const n=document.createElement("option");n.textContent=b[e].projectName,n.value=e,t.appendChild(n)}t.value=w,t.addEventListener("change",(function(){w=this.value,E()})),e.appendChild(t)}function E(){const e=document.querySelector(".todo-list");for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(document.querySelector(".new-todo").disabled=!0,b.length>0){document.querySelector(".new-todo").disabled=!1;for(let t=0;t<b[w].todos.length;t++){const n=document.createElement("span");n.className="todo-item",n.dataset.itemID=b[w].todos[t].id;const o=document.createElement("div");o.className="title",o.textContent=b[w].todos[t].title;const r=document.createElement("div");r.className="date",r.textContent=b[w].todos[t].dueDate,"low"==b[w].todos[t].priority?n.classList.add("low-priority"):"medium"==b[w].todos[t].priority?n.classList.add("medium-priority"):"high"==b[w].todos[t].priority&&n.classList.add("high-priority");const i=document.createElement("div"),d='<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';i.className="edit",i.innerHTML=d,i.addEventListener("click",(e=>k(e)));const c=document.createElement("div"),l='<svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';c.className="remove",c.innerHTML=l,c.addEventListener("click",(e=>C(e))),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(c),e.appendChild(n)}}}function k(e){const t=e.target.closest(".todo-item").dataset.itemID,n=b[w].todos.findIndex((e=>e.id==t));document.querySelector("#edit-title").value=b[w].todos[n].title,document.querySelector("#edit-description").value=b[w].todos[n].description,document.querySelector("#edit-due-date").value=b[w].todos[n].dueDate,document.querySelector("#edit-priority").value=b[w].todos[n].priority,x.showModal(),document.querySelector(".update-todo").addEventListener("click",(function(){var e;console.log("update button clicked"),e=n,console.log("updating todo"),function(){const e=document.querySelector("#edit-title"),t=document.querySelector("#edit-description");return e.value.length<3||e.value.length>30?(document.querySelector("#edit-title").focus(),!1):!(t.value.length>70&&(document.querySelector("#edit-description").focus(),1))}()&&(b[w].todos[e].title=document.querySelector("#edit-title").value,b[w].todos[e].description=document.querySelector("#edit-description").value,b[w].todos[e].dueDate=document.querySelector("#edit-due-date").value,b[w].todos[e].priority=document.querySelector("#edit-priority").value,E(),localStorage.setItem("projects",JSON.stringify(b)),x.close());const t=document.querySelector(".update-todo"),o=t.cloneNode(!0);t.parentNode.replaceChild(o,t)}))}function C(e){const t=e.target.closest(".todo-item").dataset.itemID,n=b[w].todos.findIndex((e=>e.id==t));b[w].todos.splice(n,1),E(),localStorage.setItem("projects",JSON.stringify(b)),document.querySelector(".hidden-description").textContent="",document.querySelector(".hidden-description").style.display="none",document.querySelector(".hidden-description").style.visibility="hidden"}j(),E(),document.querySelector(".new-todo").addEventListener("click",(()=>{S.showModal()})),document.querySelector(".add-todo").addEventListener("click",(()=>{(function(){const e=document.querySelector("#title"),t=document.querySelector("#description");return e.value.length<3||e.value.length>30?(document.querySelector("#title").focus(),!1):!(t.value.length>70&&(document.querySelector("#description").focus(),1))})()&&function(){const e=document.querySelector("#title"),n=document.querySelector("#description"),o=document.querySelector("#due-date"),r=document.querySelector("#priority");b[w].todos.push(t(e.value,n.value,o.value,r.value)),localStorage.setItem("projects",JSON.stringify(b)),e.value="",n.value="",o.value="",r.value="medium",E(),S.close()}()})),document.querySelector(".close-todo-dialog").addEventListener("click",(()=>{document.querySelector("#title").value="",document.querySelector("#title").classList.remove("invalid"),document.querySelector("#description").value="",document.querySelector("#description").classList.remove("invalid"),document.querySelector("#due-date").value="",document.querySelector("#priority").value="medium",S.close()})),document.querySelector(".close-edit-todo-dialog").addEventListener("click",(()=>{x.close()})),document.querySelector(".new-project").addEventListener("click",(()=>{q.showModal()})),document.querySelector(".add-project").addEventListener("click",(()=>{(function(){const e=document.querySelector("#project-name");return e.value.length<1?(document.querySelector("#project-name").focus(),!1):!(e.value.length>30&&(document.querySelector("#project-name").focus(),1))})()&&function(){const e=document.querySelector("#project-name");b.push(r(e.value)),w=b.length-1,document.querySelector("select").value=w,j(),E(),localStorage.setItem("projects",JSON.stringify(b)),q.close(),e.value="",0!=b.length&&(document.querySelector(".new-todo").disabled=!1)}()})),document.querySelector(".close-project-dialog").addEventListener("click",(()=>{document.querySelector("#project-name").value="",document.querySelector("#project-name").classList.remove("invalid"),q.close()})),document.querySelector(".remove-project").addEventListener("click",(()=>{L.showModal()})),document.querySelector(".remove-project-permanently").addEventListener("click",(function(){b.splice(w,1),L.close(),w>0&&(w-=1),j(),localStorage.setItem("projects",JSON.stringify(b)),E(),0==b.length&&(document.querySelector(".new-todo").disabled=!0)})),document.querySelector(".close-project-remove-dialog").addEventListener("click",(()=>{L.close()})),document.querySelector("#title").addEventListener("input",(()=>{document.querySelector("#title").value.length<3||document.querySelector("#title").value.length>30?document.querySelector("#title").classList.add("invalid"):document.querySelector("#title").classList.remove("invalid")})),document.querySelector("#edit-title").addEventListener("input",(()=>{document.querySelector("#edit-title").value.length<3||document.querySelector("#edit-title").value.length>30?document.querySelector("#edit-title").classList.add("invalid"):document.querySelector("#edit-title").classList.remove("invalid")})),document.querySelector("#description").addEventListener("input",(()=>{document.querySelector("#description").value.length>70?document.querySelector("#description").classList.add("invalid"):document.querySelector("#description").classList.remove("invalid")})),document.querySelector("#edit-description").addEventListener("input",(()=>{document.querySelector("#edit-description").value.length>70?document.querySelector("#edit-description").classList.add("invalid"):document.querySelector("#edit-description").classList.remove("invalid")})),document.querySelector("#project-name").addEventListener("input",(()=>{document.querySelector("#project-name").value.length<1||document.querySelector("#project-name").value.length>30?document.querySelector("#project-name").classList.add("invalid"):document.querySelector("#project-name").classList.remove("invalid")}))})()})();