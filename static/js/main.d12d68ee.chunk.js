(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{114:function(e,t,n){e.exports=n(137)},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),u=n(200),l=n(199),i=n(79),s=a.a.createContext(null),p=n(56),m=n(57),f={notify:function(){}};var d=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners=f,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){Object(o.unstable_batchedUpdates)((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(n){var r=!0,a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=f)}}]),e}();function b(e){var t=e.store,n=e.context,o=e.children,c=Object(r.useMemo)((function(){var e=new d(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){return c.subscription.trySubscribe(),u!==t.getState()&&c.subscription.notifyNestedSubs(),function(){c.subscription.tryUnsubscribe(),c.subscription.onStateChange=null}}),[t,c,u]);var l=n||s;return a.a.createElement(l.Provider,{value:c},o)}var g=n(44),h=n(99),v=n(45),y=n(97),E=n(37),w=n.n(E),S=n(30);function x(e,t){var n=e.mapStateToProps,r=e.mapDispatchToProps,a=e.mergeProps;function o(e,t){return e===t&&(0!==e||0!==t||1/e===1/t)}function c(e,t){if(o(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!o(e[n[a]],t[n[a]]))return!1;return!0}var u,l,i,s,p,m=!1;function f(e,o){var m=!c(o,l),f=e!==u;return u=e,l=o,m&&f?(i=n(u,l),r.dependsOnOwnProps&&(s=r(t,l)),p=a(i,s,l)):m?(n.dependsOnOwnProps&&(i=n(u,l)),r.dependsOnOwnProps&&(s=r(t,l)),p=a(i,s,l)):f?function(){var e=n(u,l),t=!c(e,i);return i=e,t&&(p=a(i,s,l)),p}():p}return function(e,o){return m?f(e,o):(i=n(u=e,l=o),s=r(t,l),p=a(i,s,l),m=!0,p)}}var k=[];function O(e,t){return[t.payload,e[1]+1]}function j(e,t,n){Object(r.useLayoutEffect)((function(){return e.apply(void 0,Object(y.a)(t))}),[e,t,n])}function C(e,t,n,r,a,o,c){e.current=r,t.current=a,n.current=!1,o.current&&(o.current=null,c())}function P(e,t,n,r,a,o,c,u,l){var i=!1,s=null,p=function(){if(!i){var t,p,m=e.getState();try{t=n(m,r.current)}catch(f){p=f,s=f}p||(s=null),t===a.current?o.current||u():(a.current=t,c.current=t,o.current=!0,l({type:"STORE_UPDATED",payload:{error:p}}))}};t.onStateChange=p,t.trySubscribe(),p();return function(){if(i=!0,t.tryUnsubscribe(),t.onStateChange=null,s)throw s}}var N=function(){return[null,0]};function T(e){var t=s;return function(n){console.log(n);var o=n.displayName||n.name||"Component",c="Connect(".concat(o,")"),u=r.useMemo;function l(o){var c=Object(r.useMemo)((function(){var e=o.reactReduxForwardedRef,t=Object(h.a)(o,["reactReduxForwardedRef"]);return[o.context,e,t]}),[o]),l=Object(v.a)(c,3),i=l[0],s=l[1],p=l[2],m=Object(r.useMemo)((function(){return i&&i.Consumer&&Object(S.isContextConsumer)(a.a.createElement(i.Consumer,null))?i:t}),[i]),f=Object(r.useContext)(m),b=Boolean(o.store)&&Boolean(o.store.getState)&&Boolean(o.store.dispatch),y=b?o.store:f.store,E=Object(r.useMemo)((function(){return t=e,n=y.dispatch,x(t,n);var t,n}),[y]),w=Object(r.useMemo)((function(){var e=new d(y,b?null:f.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[y,b,f]),T=Object(v.a)(w,2),M=T[0],A=T[1],q=Object(r.useMemo)((function(){return b?f:Object(g.a)(Object(g.a)({},f),{},{subscription:M})}),[b,f,M]),I=Object(r.useReducer)(O,k,N),D=Object(v.a)(I,2),B=Object(v.a)(D[0],1)[0],F=D[1];if(B&&B.error)throw B.error;var R=Object(r.useRef)(),W=Object(r.useRef)(p),U=Object(r.useRef)(),H=Object(r.useRef)(!1),L=u((function(){return U.current&&p===W.current?U.current:E(y.getState(),p)}),[y,B,p]);j(C,[W,R,H,p,L,U,A]),j(P,[y,M,E,W,R,H,U,A,F],[y,M,E]);var _=Object(r.useMemo)((function(){return a.a.createElement(n,Object.assign({},L,{ref:s}))}),[s,L]);return Object(r.useMemo)((function(){return a.a.createElement(m.Provider,{value:q},_)}),[_,q])}var i=a.a.memo(l);return i.WrappedComponent=n,i.displayName=c,w()(i,n)}}var M=function(e,t,n){return Object(g.a)(Object(g.a)(Object(g.a)({},n),e),t)},A=function(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length},q=function(e){var t=function e(t,n){return e.dependsOnOwnProps?e.mapToProps(t,n):e.mapToProps(t)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=A(e);var a=t(n,r);return"function"===typeof a&&(t.mapToProps=a,t.dependsOnOwnProps=A(a),a=t(n,r)),a},t};function I(e,t){return T({mapStateToProps:q(e),mapDispatchToProps:q(t),mergeProps:M})}var D=n(14),B=n(6),F=n.n(B),R=n(10),W=n(166),U=n(204),H=n(55),L=n(201),_=n(169),J=n(165),G=n(167),K=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},z=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function Q(e,t){return V.apply(this,arguments)}function V(){return(V=Object(R.a)(F.a.mark((function e(t,n){var r,a,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},K(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,K(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(R.a)(F.a.mark((function e(t,n){var r,a,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},K(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",z(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e,t,n){return $.apply(this,arguments)};function $(){return($=Object(R.a)(F.a.mark((function e(t,n,r){var a,o,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=X,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(e,t){return te.apply(this,arguments)};function te(){return(te=Object(R.a)(F.a.mark((function e(t,n){var r,a,o,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,Z("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=function(e,t){return re.apply(this,arguments)};function re(){return(re=Object(R.a)(F.a.mark((function e(t,n){var r,a,o,c,u;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,Z("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,Z("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),u=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),l=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:l})}else if(2===n){var i=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:"\u8349\u7a3f",subtitle:i})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:s,subtitle:p})}})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(e){return oe.apply(this,arguments)};function oe(){return(oe=Object(R.a)(F.a.mark((function e(t){var n,r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=n(89),ue=n(162),le=n(69),ie=n.n(le);function se(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(ue.a,{href:r.href},ie.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(H.a,null,ie.a.domToReact(o,t)):void 0}};return Object(ce.renderToStaticMarkup)(ie()(e,t))}var pe=function(e,t){return me.apply(this,arguments)};function me(){return(me=Object(R.a)(F.a.mark((function e(t,n){var r,a,o,c,u,l,i,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(v.a)(a,5),c=o[0],u=o[1],l=(l=o[4]).textContent,u=u.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),i=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){i.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=se(s.innerHTML),e.abrupt("return",{title:l,sender:u,time:c,files:i,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(e,t){return de.apply(this,arguments)};function de(){return(de=Object(R.a)(F.a.mark((function e(t,n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(e,t,n,r){return ge.apply(this,arguments)};function ge(){return(ge=Object(R.a)(F.a.mark((function e(t,n,r,a){var o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,Z("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=function(e,t,n){return ve.apply(this,arguments)};function ve(){return(ve=Object(R.a)(F.a.mark((function e(t,n,r){var a,o,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ye={login:function(){var e=Object(R.a)(F.a.mark((function e(){var t,n,r,a=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,ee(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(R.a)(F.a.mark((function e(){var t,n,r,a,o=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,ne(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,ne(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(R.a)(F.a.mark((function e(){var t,n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,ae(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(R.a)(F.a.mark((function e(t){var n,r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,pe(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(R.a)(F.a.mark((function e(t,n,r){var a,o,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,be(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(R.a)(F.a.mark((function e(t){var n,r,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,fe(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(R.a)(F.a.mark((function e(t){var n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=Object(J.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),we=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},Se=I((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(D.e)(),n=Ee(),r=function(){var n=Object(R.a)(F.a.mark((function n(r,a){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ye.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),ye.mail().then((function(t){return e.setStorage("mails",t)})),ye.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(W.a,{className:n.root,maxWidth:"xs"},a.a.createElement(U.a,{className:n.avatar},a.a.createElement(G.a,null)),a.a.createElement(H.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(L.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(L.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(_.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:we(r),variant:"outlined"},"\u767b\u5165")))})),xe=n(202),ke=n(190),Oe=n(35),je=n(138),Ce=n(170),Pe=n(171),Ne=n(81),Te=n(172),Me=n(205),Ae=n(175),qe=n(4),Ie=n(173),De=n(174),Be=Object(qe.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(Oe.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(Oe.a)(t,"margin",e.spacing(1)),Object(Oe.a)(t,"marginBottom",0),Object(Oe.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(je.a,{appear:!1,in:!Object(Ce.a)()},a.a.createElement(Pe.a,{className:e.classes.color,elevation:0},a.a.createElement(Ne.a,{className:e.classes.root},a.a.createElement(Te.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Ie.a,null)),a.a.createElement(Me.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(Te.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(De.a,null))))),a.a.createElement(Ae.a,null))})),Fe=n(203),Re=n(176),We=n(168),Ue=n(181),He=n(182),Le=n(183),_e=n(177),Je=n(178),Ge=n(179),Ke=n(180),ze=n(184),Qe=n(185),Ve=n(186),Xe=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},Ye=Object(qe.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(D.e)();return a.a.createElement(Fe.a,{disableSwipeToOpen:!1,onClose:Xe(e,!1),onOpen:Xe(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:Xe(e,!1),onKeyDown:Xe(e,!1)},a.a.createElement(xe.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(H.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(Re.a,null),a.a.createElement(We.a,null,[[a.a.createElement(_e.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(Je.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(Ge.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(Ke.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(He.a,null,t[0]),a.a.createElement(Le.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(Re.a,null),a.a.createElement(We.a,null,e.label.map((function(t){return a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(He.a,null,a.a.createElement(ze.a,null)),a.a.createElement(Le.a,{primary:t.name}))})))),a.a.createElement(Re.a,null),a.a.createElement(We.a,null,[[a.a.createElement(Qe.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(Ve.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(Ue.a,{button:!0,onClick:e[2]},a.a.createElement(He.a,null,e[0]),a.a.createElement(Le.a,{primary:e[1]}))})))))})),Ze=n(187),$e=n(93),et=n(188),tt=Object(qe.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object($e.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ze.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(et.a,null)),a.a.createElement("div",{className:e.classes.no}))})),nt=n(189),rt=Object(qe.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(We.a,null,e.items.map((function(t){return a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement(nt.a,null,a.a.createElement(U.a,null,t.title[0])),a.a.createElement(Le.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),at=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},ot=I((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(D.e)(),n=function(){var n=Object(R.a)(F.a.mark((function n(r){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),ye.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,at(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(Be,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(Ye,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),ye.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(rt,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(xe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(ke.a,null)),a.a.createElement(tt,null))})),ct=Object(qe.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(Ne.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ue.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),ut=Object(qe.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(Ue.a,{className:e.classes.root,elementType:"div"},a.a.createElement(nt.a,null,a.a.createElement(U.a,null,e.content.sender[0])),a.a.createElement(Le.a,{primary:e.content.sender,secondary:e.content.time}))})),lt=n(191),it=n(192),st=Object(qe.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Pe.a,{className:e.classes.color,elevation:Object(Ce.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(Ae.a,null,a.a.createElement(Te.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(lt.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(Te.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(Ke.a,null)),a.a.createElement(Te.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement(it.a,null)))),a.a.createElement(Ae.a,null))})),pt=n(28),mt=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},ft=Object(qe.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(pt.a,{anchor:"bottom",onClose:mt(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:mt(e,!1),onKeyDown:mt(e,!1)},a.a.createElement(We.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(Ue.a,{button:!0,onClick:e[1]},a.a.createElement(Le.a,{primary:e[0]}))}))))))})),dt=n(193),bt=n(194),gt=a.a.forwardRef((function(e,t){return a.a.createElement(je.a,Object.assign({direction:"up",ref:t},e))})),ht=Object(qe.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(dt.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:gt},a.a.createElement(Pe.a,{className:e.classes.appBar},a.a.createElement(Ae.a,null,a.a.createElement(Te.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(bt.a,null)),a.a.createElement(H.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(We.a,null,a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(He.a,null,a.a.createElement(_e.a,null)),a.a.createElement(Le.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(He.a,null,a.a.createElement(Je.a,null)),a.a.createElement(Le.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Re.a,null),a.a.createElement(We.a,null,e.label.map((function(t){return a.a.createElement(Ue.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(He.a,null,a.a.createElement(ze.a,null)),a.a.createElement(Le.a,{primary:t.name}))}))))))})),vt=n(195),yt=n(196),Et=n(197),wt=n(198),St=Object(qe.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(vt.a,{container:!0,spacing:1},a.a.createElement(vt.a,{item:!0,xs:4},a.a.createElement(_.a,{fullWidth:!0,startIcon:a.a.createElement(yt.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(vt.a,{item:!0,xs:4},a.a.createElement(_.a,{fullWidth:!0,startIcon:a.a.createElement(Et.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(vt.a,{item:!0,xs:4},a.a.createElement(_.a,{fullWidth:!0,startIcon:a.a.createElement(wt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),xt=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},kt=Object(J.a)((function(e){return{root:Object(Oe.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),Ot=I((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=kt().root,n=Object(D.e)(),r=function(){var t=Object(R.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,xt(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(R.a)(F.a.mark((function t(){var r,a=arguments;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(R.a)(F.a.mark((function t(r){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(st,{onBack:r,onToggle:o,onRemove:function(){ye.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(D.a,{path:"/content/more"},a.a.createElement(ft,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(D.a,{path:"/content/move"},a.a.createElement(ht,{label:e.getStorage("label"),moveto:function(t){ye.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(W.a,{maxWidth:"md",className:t},a.a.createElement(H.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(ut,{content:e.getStorage("content")}),a.a.createElement(ct,{files:e.getStorage("content").files,onClick:function(e){return ye.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(St,null)):a.a.createElement(xe.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(ke.a,null)))})),jt=Object(J.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),Ct=I((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){var t=Object(D.e)(),n=jt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe.a,{className:n.appBar},a.a.createElement(Ae.a,null,a.a.createElement(Te.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(lt.a,null)),a.a.createElement(H.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(Ae.a,null),a.a.createElement(W.a,{maxWidth:"md"},a.a.createElement(_.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),Pt=Object(qe.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(D.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe.a,{className:e.classes.appBar},a.a.createElement(Ae.a,null,a.a.createElement(Te.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(lt.a,null)),a.a.createElement(H.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(Ae.a,null),a.a.createElement(W.a,{maxWidth:"md"},a.a.createElement(H.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),Nt=I((function(e){return{getStorage:function(t){return e[t]}}}),(function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}}))((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(D.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),ye.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),ye.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(D.a,{exact:!0,path:"/",component:Se}),a.a.createElement(D.a,{exact:!0,path:"/mails",component:ot}),a.a.createElement(D.a,{path:"/content",component:Ot}),a.a.createElement(D.a,{path:"/setting",component:Ct}),a.a.createElement(D.a,{path:"/about",component:Pt}))})),Tt=n(95),Mt=Object(Tt.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),At=function(){return JSON.parse(localStorage.getItem("SAPP"))},qt=n(98),It=n(96),Dt=function(e){Object(qt.a)(n,e);var t=Object(It.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),Bt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},Ft=Bt("username"),Rt=Bt("password"),Wt=Bt("cookie"),Ut=Bt("contentid"),Ht=Bt("pagesid",0),Lt=Bt("drawer",!1),_t=Bt("open1",!1),Jt=Bt("open2",!1),Gt=Bt("mails"),Kt=Bt("label"),zt=Bt("content"),Qt=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(At()||e(n,r)):t(e(n,r))}}(Object(i.a)({username:Ft,password:Rt,cookie:Wt,contentid:Ut,pagesid:Ht,drawer:Lt,open1:_t,open2:Jt,mails:Gt,label:Kt,content:zt})),Vt=Object(i.b)(Qt);Object(o.render)(a.a.createElement(l.a,{theme:Mt},a.a.createElement(u.a,null),a.a.createElement(b,{store:Vt},a.a.createElement(Dt,{store:Vt},a.a.createElement(c.a,null,a.a.createElement(Nt,null))))),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.d12d68ee.chunk.js.map