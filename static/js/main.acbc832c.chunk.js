(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{114:function(e,t,n){e.exports=n(137)},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),u=n(200),l=n(199),i=n(80),s=a.a.createContext(null),p=n(57),m=n(58);var f=function(e){e()},d={notify:function(){}};function b(){var e=f,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,a=n={callback:e,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){r&&null!==t&&(r=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var g=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners=d,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=b())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=d)}}]),e}();var h=function(e){var t=e.store,n=e.context,o=e.children,c=Object(r.useMemo)((function(){var e=new g(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=c.subscription;return e.trySubscribe(),u!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[t,c,u]);var l=n||s;return a.a.createElement(l.Provider,{value:c},o)},v=n(36),y=n(45),E=n(55),w=n(98),S=n(38),x=n.n(S),O=n(30),k=[],j=[null,null];function C(e,t){return[t.payload,e[1]+1]}function P(e,t,n){Object(r.useLayoutEffect)((function(){return e.apply(void 0,Object(w.a)(t))}),[e,t,n])}function N(e,t,n,r,a,o,c){e.current=r,t.current=a,n.current=!1,o.current&&(o.current=null,c())}function T(e,t,n,r,a,o,c,u,l,i){if(e){var s=!1,p=null,m=function(){if(!s){var e,n,m=t.getState();try{e=r(m,a.current)}catch(f){n=f,p=f}n||(p=null),e===o.current?c.current||l():(o.current=e,u.current=e,c.current=!0,i({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=m,n.trySubscribe(),m();return function(){if(s=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}}var M=function(){return[null,0]};function A(e,t){var n=t.shouldHandleStateChanges,o=Object(E.a)(t,["shouldHandleStateChanges"]),c=s;return function(t){var u=t.displayName||t.name||"Component",l="Connect(".concat(u,")"),i=Object(v.a)(Object(v.a)({},o),{},{getDisplayName:function(e){return"Connect(".concat(e,")")},methodName:"connect",renderCountProp:void 0,shouldHandleStateChanges:n,storeKey:"store",displayName:l,wrappedComponentName:u,WrappedComponent:t});var s=r.useMemo;function p(o){var u=Object(r.useMemo)((function(){var e=o.reactReduxForwardedRef,t=Object(E.a)(o,["reactReduxForwardedRef"]);return[o.context,e,t]}),[o]),l=Object(y.a)(u,3),p=l[0],m=l[1],f=l[2],d=Object(r.useMemo)((function(){return p&&p.Consumer&&Object(O.isContextConsumer)(a.a.createElement(p.Consumer,null))?p:c}),[p]),b=Object(r.useContext)(d),h=Boolean(o.store)&&Boolean(o.store.getState)&&Boolean(o.store.dispatch),w=h?o.store:b.store,S=Object(r.useMemo)((function(){return function(t){return e(t.dispatch,i)}(w)}),[w]),x=Object(r.useMemo)((function(){if(!n)return j;var e=new g(w,h?null:b.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[w,h,b]),A=Object(y.a)(x,2),q=A[0],D=A[1],I=Object(r.useMemo)((function(){return h?b:Object(v.a)(Object(v.a)({},b),{},{subscription:q})}),[h,b,q]),B=Object(r.useReducer)(C,k,M),F=Object(y.a)(B,2),R=Object(y.a)(F[0],1)[0],W=F[1];if(R&&R.error)throw R.error;var U=Object(r.useRef)(),H=Object(r.useRef)(f),L=Object(r.useRef)(),_=Object(r.useRef)(!1),J=s((function(){return L.current&&f===H.current?L.current:S(w.getState(),f)}),[w,R,f]);P(N,[H,U,_,f,J,L,D]),P(T,[n,w,q,S,H,U,_,L,D,W],[w,q,S]);var G=Object(r.useMemo)((function(){return a.a.createElement(t,Object.assign({},J,{ref:m}))}),[m,J]);return Object(r.useMemo)((function(){return n?a.a.createElement(d.Provider,{value:I},"              ",G,"            "):G}),[G,I])}var m=a.a.memo(p);return m.WrappedComponent=t,m.displayName=l,x()(m,t)}}function q(e,t,n,r){function a(e,t){return e===t&&(0!==e||0!==t||1/e===1/t)}function o(e,t){if(a(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!a(e[n[o]],t[n[o]]))return!1;return!0}var c,u,l,i,s,p=o,m=o,f=!1;function d(a,o){var f=!p(o,u),d=!(a===c);return c=a,u=o,f&&d?(l=e(c,u),t.dependsOnOwnProps&&(i=t(r,u)),s=n(l,i,u)):f?(e.dependsOnOwnProps&&(l=e(c,u)),t.dependsOnOwnProps&&(i=t(r,u)),s=n(l,i,u)):d?function(){var t=e(c,u),r=!m(t,l);return l=t,r&&(s=n(l,i,u)),s}():s}return function(a,o){return f?d(a,o):(l=e(c=a,u=o),i=t(r,u),s=n(l,i,u),f=!0,s)}}function D(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,a=t.initMergeProps,o=Object(E.a)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]);return q(n(e,o),r(e,o),a(e,o),e)}var I,B=function(){return function(e,t,n){return Object(v.a)(Object(v.a)(Object(v.a)({},n),e),t)}};function F(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function R(e){return function(){var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=F(e);var a=t(n,r);return"function"===typeof a&&(t.mapToProps=a,t.dependsOnOwnProps=F(a),a=t(n,r)),a},t}}function W(e,t){return A(D,{shouldHandleStateChanges:Boolean(e),initMapStateToProps:R(e),initMapDispatchToProps:R(t),initMergeProps:B})}I=o.unstable_batchedUpdates,f=I;var U=n(14),H=n(6),L=n.n(H),_=n(10),J=n(166),G=n(204),K=n(56),z=n(201),Q=n(169),V=n(165),X=n(167),Y=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},Z=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(_.a)(L.a.mark((function e(t,n){var r,a,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},Y(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,Y(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(_.a)(L.a.mark((function e(t,n){var r,a,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},Y(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",Z(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(e,t,n){return ae.apply(this,arguments)};function ae(){return(ae=Object(_.a)(L.a.mark((function e(t,n,r){var a,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=te,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(e,t){return ce.apply(this,arguments)};function ce(){return(ce=Object(_.a)(L.a.mark((function e(t,n){var r,a,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,re("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e,t){return le.apply(this,arguments)};function le(){return(le=Object(_.a)(L.a.mark((function e(t,n){var r,a,o,c,u;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,re("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,re("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),u=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),l=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:l})}else if(2===n){var i=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:"\u8349\u7a3f",subtitle:i})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:s,subtitle:p})}})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=function(e){return se.apply(this,arguments)};function se(){return(se=Object(_.a)(L.a.mark((function e(t){var n,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe=n(90),me=n(162),fe=n(70),de=n.n(fe);function be(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(me.a,{href:r.href},de.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(K.a,null,de.a.domToReact(o,t)):void 0}};return Object(pe.renderToStaticMarkup)(de()(e,t))}var ge=function(e,t){return he.apply(this,arguments)};function he(){return(he=Object(_.a)(L.a.mark((function e(t,n){var r,a,o,c,u,l,i,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(y.a)(a,5),c=o[0],u=o[1],l=(l=o[4]).textContent,u=u.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),i=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){i.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=be(s.innerHTML),e.abrupt("return",{title:l,sender:u,time:c,files:i,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve=function(e,t){return ye.apply(this,arguments)};function ye(){return(ye=Object(_.a)(L.a.mark((function e(t,n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(e,t,n,r){return we.apply(this,arguments)};function we(){return(we=Object(_.a)(L.a.mark((function e(t,n,r,a){var o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,re("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Se=function(e,t,n){return xe.apply(this,arguments)};function xe(){return(xe=Object(_.a)(L.a.mark((function e(t,n,r){var a,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe={login:function(){var e=Object(_.a)(L.a.mark((function e(){var t,n,r,a=arguments;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,oe(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(_.a)(L.a.mark((function e(){var t,n,r,a,o=arguments;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,ue(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,ue(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(_.a)(L.a.mark((function e(){var t,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,ie(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(_.a)(L.a.mark((function e(t){var n,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,ge(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(_.a)(L.a.mark((function e(t,n,r){var a,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,Ee(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(_.a)(L.a.mark((function e(t){var n,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,ve(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(_.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=Object(V.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),je=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},Ce=W((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(U.e)(),n=ke(),r=function(){var n=Object(_.a)(L.a.mark((function n(r,a){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Oe.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),Oe.mail().then((function(t){return e.setStorage("mails",t)})),Oe.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(J.a,{className:n.root,maxWidth:"xs"},a.a.createElement(G.a,{className:n.avatar},a.a.createElement(X.a,null)),a.a.createElement(K.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(z.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(z.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(Q.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:je(r),variant:"outlined"},"\u767b\u5165")))})),Pe=n(202),Ne=n(190),Te=n(35),Me=n(138),Ae=n(170),qe=n(171),De=n(82),Ie=n(172),Be=n(205),Fe=n(175),Re=n(4),We=n(173),Ue=n(174),He=Object(Re.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(Te.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(Te.a)(t,"margin",e.spacing(1)),Object(Te.a)(t,"marginBottom",0),Object(Te.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Me.a,{appear:!1,in:!Object(Ae.a)()},a.a.createElement(qe.a,{className:e.classes.color,elevation:0},a.a.createElement(De.a,{className:e.classes.root},a.a.createElement(Ie.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(We.a,null)),a.a.createElement(Be.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(Ie.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Ue.a,null))))),a.a.createElement(Fe.a,null))})),Le=n(203),_e=n(176),Je=n(168),Ge=n(181),Ke=n(182),ze=n(183),Qe=n(177),Ve=n(178),Xe=n(179),Ye=n(180),Ze=n(184),$e=n(185),et=n(186),tt=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},nt=Object(Re.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(U.e)();return a.a.createElement(Le.a,{disableSwipeToOpen:!1,onClose:tt(e,!1),onOpen:tt(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:tt(e,!1),onKeyDown:tt(e,!1)},a.a.createElement(Pe.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(K.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(_e.a,null),a.a.createElement(Je.a,null,[[a.a.createElement(Qe.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(Ve.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(Xe.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(Ye.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(Ke.a,null,t[0]),a.a.createElement(ze.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(_e.a,null),a.a.createElement(Je.a,null,e.label.map((function(t){return a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(Ke.a,null,a.a.createElement(Ze.a,null)),a.a.createElement(ze.a,{primary:t.name}))})))),a.a.createElement(_e.a,null),a.a.createElement(Je.a,null,[[a.a.createElement($e.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(et.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(Ge.a,{button:!0,onClick:e[2]},a.a.createElement(Ke.a,null,e[0]),a.a.createElement(ze.a,{primary:e[1]}))})))))})),rt=n(187),at=n(94),ot=n(188),ct=Object(Re.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object(at.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(rt.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(ot.a,null)),a.a.createElement("div",{className:e.classes.no}))})),ut=n(189),lt=Object(Re.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(Je.a,null,e.items.map((function(t){return a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement(ut.a,null,a.a.createElement(G.a,null,t.title[0])),a.a.createElement(ze.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),it=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},st=W((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(U.e)(),n=function(){var n=Object(_.a)(L.a.mark((function n(r){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),Oe.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,it(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(He,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(nt,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),Oe.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(lt,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(Pe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(Ne.a,null)),a.a.createElement(ct,null))})),pt=Object(Re.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(De.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(me.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),mt=Object(Re.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(Ge.a,{className:e.classes.root,elementType:"div"},a.a.createElement(ut.a,null,a.a.createElement(G.a,null,e.content.sender[0])),a.a.createElement(ze.a,{primary:e.content.sender,secondary:e.content.time}))})),ft=n(191),dt=n(192),bt=Object(Re.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(qe.a,{className:e.classes.color,elevation:Object(Ae.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(Fe.a,null,a.a.createElement(Ie.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(ft.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(Ie.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(Ye.a,null)),a.a.createElement(Ie.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement(dt.a,null)))),a.a.createElement(Fe.a,null))})),gt=n(28),ht=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},vt=Object(Re.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(gt.a,{anchor:"bottom",onClose:ht(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:ht(e,!1),onKeyDown:ht(e,!1)},a.a.createElement(Je.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(Ge.a,{button:!0,onClick:e[1]},a.a.createElement(ze.a,{primary:e[0]}))}))))))})),yt=n(193),Et=n(194),wt=a.a.forwardRef((function(e,t){return a.a.createElement(Me.a,Object.assign({direction:"up",ref:t},e))})),St=Object(Re.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(yt.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:wt},a.a.createElement(qe.a,{className:e.classes.appBar},a.a.createElement(Fe.a,null,a.a.createElement(Ie.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(Et.a,null)),a.a.createElement(K.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(Je.a,null,a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(Ke.a,null,a.a.createElement(Qe.a,null)),a.a.createElement(ze.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(Ke.a,null,a.a.createElement(Ve.a,null)),a.a.createElement(ze.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(_e.a,null),a.a.createElement(Je.a,null,e.label.map((function(t){return a.a.createElement(Ge.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(Ke.a,null,a.a.createElement(Ze.a,null)),a.a.createElement(ze.a,{primary:t.name}))}))))))})),xt=n(195),Ot=n(196),kt=n(197),jt=n(198),Ct=Object(Re.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(xt.a,{container:!0,spacing:1},a.a.createElement(xt.a,{item:!0,xs:4},a.a.createElement(Q.a,{fullWidth:!0,startIcon:a.a.createElement(Ot.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(xt.a,{item:!0,xs:4},a.a.createElement(Q.a,{fullWidth:!0,startIcon:a.a.createElement(kt.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(xt.a,{item:!0,xs:4},a.a.createElement(Q.a,{fullWidth:!0,startIcon:a.a.createElement(jt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),Pt=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},Nt=Object(V.a)((function(e){return{root:Object(Te.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),Tt=W((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Nt().root,n=Object(U.e)(),r=function(){var t=Object(_.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,Pt(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(_.a)(L.a.mark((function t(){var r,a=arguments;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(_.a)(L.a.mark((function t(r){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pt(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(bt,{onBack:r,onToggle:o,onRemove:function(){Oe.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(U.a,{path:"/content/more"},a.a.createElement(vt,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(U.a,{path:"/content/move"},a.a.createElement(St,{label:e.getStorage("label"),moveto:function(t){Oe.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(J.a,{maxWidth:"md",className:t},a.a.createElement(K.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(mt,{content:e.getStorage("content")}),a.a.createElement(pt,{files:e.getStorage("content").files,onClick:function(e){return Oe.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(Ct,null)):a.a.createElement(Pe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(Ne.a,null)))})),Mt=Object(V.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),At=W((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(U.e)(),n=Mt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(qe.a,{className:n.appBar},a.a.createElement(Fe.a,null,a.a.createElement(Ie.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(ft.a,null)),a.a.createElement(K.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(Fe.a,null),a.a.createElement(J.a,{maxWidth:"md"},a.a.createElement(Q.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),qt=Object(Re.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(U.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(qe.a,{className:e.classes.appBar},a.a.createElement(Fe.a,null,a.a.createElement(Ie.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(ft.a,null)),a.a.createElement(K.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(Fe.a,null),a.a.createElement(J.a,{maxWidth:"md"},a.a.createElement(K.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),Dt=W((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(U.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),Oe.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),Oe.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(U.a,{exact:!0,path:"/",component:Ce}),a.a.createElement(U.a,{exact:!0,path:"/mails",component:st}),a.a.createElement(U.a,{path:"/content",component:Tt}),a.a.createElement(U.a,{path:"/setting",component:At}),a.a.createElement(U.a,{path:"/about",component:qt}))})),It=n(96),Bt=Object(It.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),Ft=function(){return JSON.parse(localStorage.getItem("SAPP"))},Rt=n(99),Wt=n(97),Ut=function(e){Object(Rt.a)(n,e);var t=Object(Wt.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),Ht=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},Lt=Ht("username"),_t=Ht("password"),Jt=Ht("cookie"),Gt=Ht("contentid"),Kt=Ht("pagesid",0),zt=Ht("drawer",!1),Qt=Ht("open1",!1),Vt=Ht("open2",!1),Xt=Ht("mails"),Yt=Ht("label"),Zt=Ht("content"),$t=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(Ft()||e(n,r)):t(e(n,r))}}(Object(i.a)({username:Lt,password:_t,cookie:Jt,contentid:Gt,pagesid:Kt,drawer:zt,open1:Qt,open2:Vt,mails:Xt,label:Yt,content:Zt})),en=Object(i.b)($t);Object(o.render)(a.a.createElement(l.a,{theme:Bt},a.a.createElement(u.a,null),a.a.createElement(h,{store:en},a.a.createElement(Ut,{store:en},a.a.createElement(c.a,null,a.a.createElement(Dt,null))))),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.acbc832c.chunk.js.map