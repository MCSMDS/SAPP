(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],{114:function(e,t,n){e.exports=n(137)},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(32),u=n(200),l=n(199),i=n(79),s=a.a.createContext(null),p=n(56),m=n(57),f={notify:function(){}};var d=function(){function e(t,n){Object(p.a)(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners=f,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return Object(m.a)(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){Object(o.unstable_batchedUpdates)((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(n){var r=!0,a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=f)}}]),e}();function b(e){var t=e.store,n=e.context,o=e.children,c=Object(r.useMemo)((function(){var e=new d(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){return c.subscription.trySubscribe(),u!==t.getState()&&c.subscription.notifyNestedSubs(),function(){c.subscription.tryUnsubscribe(),c.subscription.onStateChange=null}}),[t,c,u]);var l=n||s;return a.a.createElement(l.Provider,{value:c},o)}var g=n(44),h=n(99),v=n(45),y=n(97),E=n(37),w=n.n(E),S=n(30);function x(e,t){var n=e.mapStateToProps,r=e.mapDispatchToProps,a=e.mergeProps;function o(e,t){return e===t&&(0!==e||0!==t||1/e===1/t)}function c(e,t){if(o(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!o(e[n[a]],t[n[a]]))return!1;return!0}var u,l,i,s,p,m=!1;function f(e,o){var m=!c(o,l),f=e!==u;return u=e,l=o,m&&f?(i=n(u),r.dependsOnOwnProps&&(s=r(t)),p=a(i,s,l)):m?(n.dependsOnOwnProps&&(i=n(u)),r.dependsOnOwnProps&&(s=r(t)),p=a(i,s,l)):f?function(){var e=n(u),t=!c(e,i);return i=e,t&&(p=a(i,s,l)),p}():p}return function(e,o){return m?f(e,o):(l=o,i=n(u=e),s=r(t),p=a(i,s,l),m=!0,p)}}var k=[];function O(e,t){return[t.payload,e[1]+1]}function j(e,t,n){Object(r.useLayoutEffect)((function(){return e.apply(void 0,Object(y.a)(t))}),[e,t,n])}function C(e,t,n,r,a,o,c){e.current=r,t.current=a,n.current=!1,o.current&&(o.current=null,c())}function P(e,t,n,r,a,o,c,u,l){var i=!1,s=null,p=function(){if(!i){var t,p,m=e.getState();try{t=n(m,r.current)}catch(f){p=f,s=f}p||(s=null),t===a.current?o.current||u():(a.current=t,c.current=t,o.current=!0,l({type:"STORE_UPDATED",payload:{error:p}}))}};t.onStateChange=p,t.trySubscribe(),p();return function(){if(i=!0,t.tryUnsubscribe(),t.onStateChange=null,s)throw s}}var N=function(){return[null,0]};var T=function(e){var t=function e(t){return e.mapToProps(t)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n){t.mapToProps=e,t.dependsOnOwnProps=!1;var r=t(n);return"function"===typeof r&&(t.mapToProps=r,t.dependsOnOwnProps=function(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}(r),r=t(n)),r},t},M=function(e){var t=s;return function(n){var o=r.useMemo;var c=a.a.memo((function(c){var u=Object(r.useMemo)((function(){var e=c.reactReduxForwardedRef,t=Object(h.a)(c,["reactReduxForwardedRef"]);return[c.context,e,t]}),[c]),l=Object(v.a)(u,3),i=l[0],s=l[1],p=l[2],m=Object(r.useMemo)((function(){return i&&i.Consumer&&Object(S.isContextConsumer)(a.a.createElement(i.Consumer,null))?i:t}),[i]),f=Object(r.useContext)(m),b=Boolean(c.store)&&Boolean(c.store.getState)&&Boolean(c.store.dispatch),y=b?c.store:f.store,E=Object(r.useMemo)((function(){return x(e,y.dispatch)}),[y]),w=Object(r.useMemo)((function(){var e=new d(y,b?null:f.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[y,b,f]),T=Object(v.a)(w,2),M=T[0],A=T[1],q=Object(r.useMemo)((function(){return b?f:Object(g.a)(Object(g.a)({},f),{},{subscription:M})}),[b,f,M]),I=Object(r.useReducer)(O,k,N),D=Object(v.a)(I,2),B=Object(v.a)(D[0],1)[0],F=D[1];if(B&&B.error)throw B.error;var R=Object(r.useRef)(),W=Object(r.useRef)(p),U=Object(r.useRef)(),H=Object(r.useRef)(!1),L=o((function(){return U.current&&p===W.current?U.current:E(y.getState(),p)}),[y,B,p]);j(C,[W,R,H,p,L,U,A]),j(P,[y,M,E,W,R,H,U,A,F],[y,M,E]);var _=Object(r.useMemo)((function(){return a.a.createElement(n,Object.assign({},L,{ref:s}))}),[s,L]);return Object(r.useMemo)((function(){return a.a.createElement(m.Provider,{value:q},_)}),[_,q])}));return c.WrappedComponent=n,c.displayName="Connect(Component)",w()(c,n)}}({mapStateToProps:T((function(e){return{getStorage:function(t){return e[t]}}})),mapDispatchToProps:T((function(e){return{setStorage:function(t,n){return e({type:t,value:n})}}})),mergeProps:function(e,t,n){return Object(g.a)(Object(g.a)(Object(g.a)({},n),e),t)}}),A=n(14),q=n(6),I=n.n(q),D=n(10),B=n(166),F=n(204),R=n(55),W=n(201),U=n(169),H=n(165),L=n(167),_=function(e){return new Uint8Array(e.split("").map((function(e){return e.charCodeAt()}))).buffer},J=function(e){return Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join("")};function G(e,t){return K.apply(this,arguments)}function K(){return(K=Object(D.a)(I.a.mark((function e(t,n){var r,a,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},_(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,_(t));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(D.a)(I.a.mark((function e(t,n){var r,a,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest({name:"SHA-256"},_(n));case 2:return r=e.sent,e.next=5,crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]);case 5:return a=e.sent,e.next=8,crypto.subtle.decrypt({name:"AES-GCM",iv:r},a,t);case 8:return o=e.sent,e.abrupt("return",J(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(e,t,n){return X.apply(this,arguments)};function X(){return(X=Object(D.a)(I.a.mark((function e(t,n,r){var a,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(JSON.stringify({url:t,init:n}),navigator.userAgent);case 2:return a=e.sent,e.next=5,fetch("https://data.mcsmds.tk/sapi",{method:"POST",body:a});case 5:return o=e.sent,e.t0=JSON,e.t1=z,e.next=10,o.arrayBuffer();case 10:return e.t2=e.sent,e.t3=navigator.userAgent,e.next=14,(0,e.t1)(e.t2,e.t3);case 14:return e.t4=e.sent,c=e.t0.parse.call(e.t0,e.t4),r||(c.body=(new DOMParser).parseFromString(decodeURIComponent(escape(c.body)),"text/html")),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e,t){return Z.apply(this,arguments)};function Z(){return(Z=Object(D.a)(I.a.mark((function e(t,n){var r,a,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/templates/");case 2:return r=e.sent,a=r.cookie.replace("; path=/",""),o=r.body.querySelector("[action='../login.php']>[name='securetoken']").value,e.next=7,V("/login.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:a},body:"UserLogin="+t+"&UserPassword="+n+"&securetoken="+o});case 7:return c=e.sent,e.abrupt("return",c.body.querySelector("[name='securetoken']")?"error":{cookie:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e,t){return ee.apply(this,arguments)};function ee(){return(ee=Object(D.a)(I.a.mark((function e(t,n){var r,a,o,c,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["viewfolder.php?FolderID=2","viewfolder.php?FolderID=0","viewfolder.php?FolderID=1","trash.php","viewfolder.php?FolderID="+n][n>3?4:n],e.next=3,V("/home/imail/"+a,{headers:{Cookie:t}});case 3:if(!(o=e.sent).body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:if(o=null===(r=o.body.querySelector(".tablebottom td[width='100%']"))||void 0===r?void 0:r.textContent.split("\u7e3d\u6578 ")[1]){e.next=9;break}return e.abrupt("return",[]);case 9:return e.next=11,V("/home/imail/"+a,{headers:{Cookie:t+"; ck_page_size="+o}});case 11:return(c=e.sent).body.querySelector(".tablebottom").parentNode.remove(),u=[],c.body.querySelectorAll(".tabletop~tr").forEach((function(e){if(0===n||n>3){var t=e.querySelector("[class^='iMailsender']").textContent,r=e.querySelector("[class^='iMailsubject']").textContent.trim(),a=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:t,subtitle:r,id:a})}else if(1===n){var o=e.querySelector("[title]").getAttribute("title"),c=e.querySelector("[class^='iMailsubject']").textContent.trim(),l=e.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];u.push({title:"\u6536\u4ef6\u8005: "+o,subtitle:c,id:l})}else if(2===n){var i=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:"\u8349\u7a3f",subtitle:i})}else if(3===n){var s=e.querySelector("[class^='iMailsender']").textContent,p=e.querySelector("[class^='iMailsubject']").textContent.trim();u.push({title:s,subtitle:p})}})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(e){return ne.apply(this,arguments)};function ne(){return(ne=Object(D.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/home/imail/folder.php",{headers:{Cookie:t}});case 2:if(!(n=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return r=n.body.querySelectorAll(".iMailsubject"),a=[],r.forEach((function(e,t){if(t%2!==1){var n=e.text,r=parseInt(e.getAttribute("href").split("=")[1]);a.push({name:n,id:r})}})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=n(89),ae=n(162),oe=n(69),ce=n.n(oe);function ue(e){var t={replace:function(e){var n=e.name,r=e.attribs,o=e.children;return n&&"a"===n?a.a.createElement(ae.a,{href:r.href},ce.a.domToReact(o,t)):n&&"p"===n?a.a.createElement(R.a,null,ce.a.domToReact(o,t)):void 0}};return Object(re.renderToStaticMarkup)(ce()(e,t))}var le=function(e,t){return ie.apply(this,arguments)};function ie(){return(ie=Object(D.a)(I.a.mark((function e(t,n){var r,a,o,c,u,l,i,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/home/imail/viewmail_content.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!(r=e.sent).body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return a=r.body.querySelectorAll(".tabletext"),o=Object(v.a)(a,5),c=o[0],u=o[1],l=(l=o[4]).textContent,u=u.textContent,c=c.querySelector("#PastDateDiv").getAttribute("title"),i=[],r.body.querySelectorAll("img[src='/images/file.gif']").forEach((function(e){i.push(e.nextElementSibling.textContent)})),(s=r.body.querySelector(".style1").parentNode).querySelectorAll("[class]").forEach((function(e){return e.removeAttribute("class")})),s.querySelectorAll("[lang]").forEach((function(e){return e.removeAttribute("lang")})),s.querySelectorAll("[style]").forEach((function(e){e.style.fontFamily="",e.style.lineHeight=""})),console.log(s),s=ue(s.innerHTML),e.abrupt("return",{title:l,sender:u,time:c,files:i,content:s});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e,t){return pe.apply(this,arguments)};function pe(){return(pe=Object(D.a)(I.a.mark((function e(t,n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/home/imail/remove.php?CampusMailID="+n,{headers:{Cookie:t}});case 2:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=5;break}return e.abrupt("return","error");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=function(e,t,n,r){return fe.apply(this,arguments)};function fe(){return(fe=Object(D.a)(I.a.mark((function e(t,n,r,a){var o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["2","0","1","2",r][r>3?4:r],e.next=3,V("/home/imail/changefolder.php",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Cookie:t},body:"CampusMailID[]="+n+"&FolderID="+o+"&targetFolderID="+a});case 3:if(!e.sent.body.querySelector("[name='securetoken']")){e.next=6;break}return e.abrupt("return","error");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(e,t,n){return be.apply(this,arguments)};function be(){return(be=Object(D.a)(I.a.mark((function e(t,n,r){var a,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("/home/imail/downloadattachment.php?CampusMailID="+n+"&b_filename="+encodeURIComponent(btoa(unescape(encodeURIComponent(r)))),{headers:{Cookie:t}},!0);case 2:return a=e.sent,o=a.body.split("").map((function(e){return e.codePointAt(0)})),c=Uint8Array.from(o),e.abrupt("return",new Blob([c.buffer]));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge={login:function(){var e=Object(D.a)(I.a.mark((function e(){var t,n,r,a=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:window.getStorage("username"),n=a.length>1&&void 0!==a[1]?a[1]:window.getStorage("password"),e.next=4,Y(t,n);case 4:if("error"!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:return window.setStorage("username",t),window.setStorage("password",n),window.setStorage("cookie",r.cookie),e.abrupt("return",window.getStorage("cookie"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mail:function(){var e=Object(D.a)(I.a.mark((function e(){var t,n,r,a,o=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,e.next=3,$(window.getStorage("cookie"),t);case 3:if("error"!==(n=e.sent)){e.next=12;break}return e.next=7,this.login();case 7:return r=e.sent,e.next=10,$(r,t);case 10:return a=e.sent,e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),label:function(){var e=Object(D.a)(I.a.mark((function e(){var t,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(window.getStorage("cookie"));case 2:if("error"!==(t=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return n=e.sent,e.next=9,te(n);case 9:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),content:function(){var e=Object(D.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,le(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),moveto:function(){var e=Object(D.a)(I.a.mark((function e(t,n,r){var a,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(window.getStorage("cookie"),t,n,r);case 2:if("error"!==(a=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return o=e.sent,e.next=9,me(o,t,n,r);case 9:return c=e.sent,e.abrupt("return",c);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}(),remove:function(){var e=Object(D.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(window.getStorage("cookie"),t);case 2:if("error"!==(n=e.sent)){e.next=11;break}return e.next=6,this.login();case 6:return r=e.sent,e.next=9,se(r,t);case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),dawnload:function(){var e=Object(D.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(window.getStorage("cookie"),window.getStorage("contentid"),t);case 2:n=e.sent,(r=document.createElement("a")).download=t,r.href=URL.createObjectURL(n),r.click();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=Object(H.a)((function(e){return{root:{marginTop:e.spacing(9),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{marginTop:e.spacing(2)}}})),ve=function(e){return function(t){t.preventDefault(),e(document.querySelector("#username").value,document.querySelector("#password").value)}},ye=M((function(e){var t=Object(A.e)(),n=he(),r=function(){var n=Object(D.a)(I.a.mark((function n(r,a){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ge.login(r,a);case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.replace("mails"),ge.mail().then((function(t){return e.setStorage("mails",t)})),ge.label().then((function(t){return e.setStorage("label",t)}));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(B.a,{className:n.root,maxWidth:"xs"},a.a.createElement(F.a,{className:n.avatar},a.a.createElement(L.a,null)),a.a.createElement(R.a,{variant:"h5"},"\u767b\u5165"),a.a.createElement("form",{className:n.form},a.a.createElement(W.a,{autoComplete:"username",fullWidth:!0,id:"username",label:"\u767b\u5165\u7de8\u865f",margin:"normal",variant:"outlined"}),a.a.createElement(W.a,{autoComplete:"current-password",fullWidth:!0,id:"password",label:"\u5bc6\u78bc",margin:"normal",type:"password",variant:"outlined"}),a.a.createElement(U.a,{className:n.submit,color:"primary",fullWidth:!0,onClick:ve(r),variant:"outlined"},"\u767b\u5165")))})),Ee=n(202),we=n(190),Se=n(35),xe=n(138),ke=n(170),Oe=n(171),je=n(81),Ce=n(172),Pe=n(205),Ne=n(175),Te=n(4),Me=n(173),Ae=n(174),qe=Object(Te.a)((function(e){var t;return{root:(t={alignItems:"center",display:"flex",minHeight:56-e.spacing(1)},Object(Se.a)(t,e.breakpoints.up("sm"),{minHeight:64-e.spacing(1)}),Object(Se.a)(t,"margin",e.spacing(1)),Object(Se.a)(t,"marginBottom",0),Object(Se.a)(t,"padding","0 3px"),t),color:{backgroundColor:"#fffe"},icon:{padding:12},input:{flex:1,margin:"0 6px"}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(xe.a,{appear:!1,in:!Object(ke.a)()},a.a.createElement(Oe.a,{className:e.classes.color,elevation:0},a.a.createElement(je.a,{className:e.classes.root},a.a.createElement(Ce.a,{"aria-label":"\u76ee\u9304",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Me.a,null)),a.a.createElement(Pe.a,{className:e.classes.input,inputProps:{"aria-label":"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"},placeholder:"\u5728\u90f5\u4ef6\u4e2d\u641c\u5c0b"}),a.a.createElement(Ce.a,{"aria-label":"\u641c\u5c0b",className:e.classes.icon,onClick:function(){return e.onToggle(!0)}},a.a.createElement(Ae.a,null))))),a.a.createElement(Ne.a,null))})),Ie=n(203),De=n(176),Be=n(168),Fe=n(181),Re=n(182),We=n(183),Ue=n(177),He=n(178),Le=n(179),_e=n(180),Je=n(184),Ge=n(185),Ke=n(186),ze=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},Qe=Object(Te.a)((function(e){return{list:{width:250,maxWidth:"75vw"},toolbar:e.mixins.toolbar}}))((function(e){var t=Object(A.e)();return a.a.createElement(Ie.a,{disableSwipeToOpen:!1,onClose:ze(e,!1),onOpen:ze(e,!0),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:ze(e,!1),onKeyDown:ze(e,!1)},a.a.createElement(Ee.a,{alignItems:"center",className:e.classes.toolbar,display:"flex",px:2},a.a.createElement(R.a,{color:"secondary",variant:"h6"},"School APP")),a.a.createElement(De.a,null),a.a.createElement(Be.a,null,[[a.a.createElement(Ue.a,null),"\u6536\u4ef6\u7bb1"],[a.a.createElement(He.a,null),"\u5bc4\u4ef6\u7bb1"],[a.a.createElement(Le.a,null),"\u8349\u7a3f\u7bb1"],[a.a.createElement(_e.a,null),"\u5783\u573e\u7bb1"]].map((function(t,n){return a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.onPageChange(n)}},a.a.createElement(Re.a,null,t[0]),a.a.createElement(We.a,{primary:t[1]}))}))),e.label&&e.label.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(De.a,null),a.a.createElement(Be.a,null,e.label.map((function(t){return a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.onPageChange(t.id)}},a.a.createElement(Re.a,null,a.a.createElement(Je.a,null)),a.a.createElement(We.a,{primary:t.name}))})))),a.a.createElement(De.a,null),a.a.createElement(Be.a,null,[[a.a.createElement(Ge.a,null),"\u8a2d\u5b9a",function(){return t.push("setting")}],[a.a.createElement(Ke.a,null),"\u8aaa\u660e",function(){return t.push("about")}]].map((function(e){return a.a.createElement(Fe.a,{button:!0,onClick:e[2]},a.a.createElement(Re.a,null,e[0]),a.a.createElement(We.a,{primary:e[1]}))})))))})),Ve=n(187),Xe=n(93),Ye=n(188),Ze=Object(Te.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3),color:e.palette.secondary.main,backgroundColor:e.palette.secondary.contrastText,"&:hover":{backgroundColor:Object(Xe.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.secondary.contrastText}}},no:{height:56+e.spacing(6)-e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ve.a,{"aria-label":"\u64b0\u5beb",className:e.classes.fab},a.a.createElement(Ye.a,null)),a.a.createElement("div",{className:e.classes.no}))})),$e=n(189),et=Object(Te.a)({truncate:{"& *":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})((function(e){return e.items&&e.items.length>0&&a.a.createElement(Be.a,null,e.items.map((function(t){return a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.onEachClick(t.id)}},a.a.createElement($e.a,null,a.a.createElement(F.a,null,t.title[0])),a.a.createElement(We.a,{className:e.classes.truncate,primary:t.title,secondary:t.subtitle}))})))})),tt=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},nt=M((function(e){var t=Object(A.e)(),n=function(){var n=Object(D.a)(I.a.mark((function n(r){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==r){n.next=2;break}return n.abrupt("return");case 2:return e.setStorage("contentid",r),ge.content(r).then((function(t){return e.setStorage("content",t)})),n.next=6,tt(275);case 6:t.push("content");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(qe,{onToggle:function(t){return e.setStorage("drawer",t)}}),a.a.createElement(Qe,{label:e.getStorage("label"),onPageChange:function(t){e.setStorage("mails",null),ge.mail(t).then((function(t){return e.setStorage("mails",t)})),e.setStorage("pagesid",t)},onToggle:function(t){return e.setStorage("drawer",t)},open:e.getStorage("drawer")}),e.getStorage("mails")?a.a.createElement(et,{items:e.getStorage("mails"),onEachClick:n}):a.a.createElement(Ee.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px - 88px)"}},a.a.createElement(we.a,null)),a.a.createElement(Ze,null))})),rt=Object(Te.a)((function(e){return{root:{margin:e.spacing(1,0),padding:e.spacing(2)}}}))((function(e){return e.files.length>0&&a.a.createElement(je.a,{className:e.classes.root,variant:"outlined"},e.files.map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.a,{onClick:function(){return e.onClick(t)}},t),a.a.createElement("br",null))})))})),at=Object(Te.a)((function(e){return{root:{padding:e.spacing(1,0)}}}))((function(e){return a.a.createElement(Fe.a,{className:e.classes.root,elementType:"div"},a.a.createElement($e.a,null,a.a.createElement(F.a,null,e.content.sender[0])),a.a.createElement(We.a,{primary:e.content.sender,secondary:e.content.time}))})),ot=n(191),ct=n(192),ut=Object(Te.a)((function(e){return{color:{backgroundColor:"#fffe"},grow:{flexGrow:1}}}))((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Oe.a,{className:e.classes.color,elevation:Object(ke.a)({disableHysteresis:!0,threshold:0})?4:0},a.a.createElement(Ne.a,null,a.a.createElement(Ce.a,{"aria-label":"\u8fd4\u56de",edge:"start",onClick:e.onBack},a.a.createElement(ot.a,null)),a.a.createElement("div",{className:e.classes.grow}),a.a.createElement(Ce.a,{"aria-label":"\u5220\u9664",onClick:e.onRemove},a.a.createElement(_e.a,null)),a.a.createElement(Ce.a,{"aria-label":"\u66f4\u591a",edge:"end",onClick:function(){return e.onToggle()}},a.a.createElement(ct.a,null)))),a.a.createElement(Ne.a,null))})),lt=n(28),it=function(e,t){return function(n){(!n||"keydown"!==n.type||"Shift"!==n.key&&"Tab"!==n.key)&&e.onToggle(t)}},st=Object(Te.a)((function(e){return{list:{width:"auto"}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(lt.a,{anchor:"bottom",onClose:it(e,!1),open:e.open},a.a.createElement("div",{className:e.classes.list,onClick:it(e,!1),onKeyDown:it(e,!1)},a.a.createElement(Be.a,null,[["\u79fb\u81f3",e.onMove],["\u5217\u5370",function(){return window.print()}],["\u53d6\u6d88"]].map((function(e){return a.a.createElement(Fe.a,{button:!0,onClick:e[1]},a.a.createElement(We.a,{primary:e[0]}))}))))))})),pt=n(193),mt=n(194),ft=a.a.forwardRef((function(e,t){return a.a.createElement(xe.a,Object.assign({direction:"up",ref:t},e))})),dt=Object(Te.a)((function(e){return{appBar:{position:"relative",backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(pt.a,{fullScreen:!0,open:e.open1,onClose:e.handleClose,TransitionComponent:ft},a.a.createElement(Oe.a,{className:e.classes.appBar},a.a.createElement(Ne.a,null,a.a.createElement(Ce.a,{edge:"start",onClick:e.handleClose,"aria-label":"close"},a.a.createElement(mt.a,null)),a.a.createElement(R.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u79fb\u81f3"))),a.a.createElement(Be.a,null,a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.moveto(2)}},a.a.createElement(Re.a,null,a.a.createElement(Ue.a,null)),a.a.createElement(We.a,{primary:"\u6536\u4ef6\u7bb1"})),a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.moveto(0)}},a.a.createElement(Re.a,null,a.a.createElement(He.a,null)),a.a.createElement(We.a,{primary:"\u5bc4\u4ef6\u7bb1"}))),e.label.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(De.a,null),a.a.createElement(Be.a,null,e.label.map((function(t){return a.a.createElement(Fe.a,{button:!0,onClick:function(){return e.moveto(t.id)}},a.a.createElement(Re.a,null,a.a.createElement(Je.a,null)),a.a.createElement(We.a,{primary:t.name}))}))))))})),bt=n(195),gt=n(196),ht=n(197),vt=n(198),yt=Object(Te.a)((function(e){return{root:{marginTop:"auto",marginBottom:e.spacing(2)}}}))((function(e){return a.a.createElement("div",{className:e.classes.root},a.a.createElement(bt.a,{container:!0,spacing:1},a.a.createElement(bt.a,{item:!0,xs:4},a.a.createElement(U.a,{fullWidth:!0,startIcon:a.a.createElement(gt.a,null),variant:"outlined"},"\u56de\u8986")),a.a.createElement(bt.a,{item:!0,xs:4},a.a.createElement(U.a,{fullWidth:!0,startIcon:a.a.createElement(ht.a,null),variant:"outlined"},"\u56de\u8986\u5168\u90e8")),a.a.createElement(bt.a,{item:!0,xs:4},a.a.createElement(U.a,{fullWidth:!0,startIcon:a.a.createElement(vt.a,null),variant:"outlined"},"\u8f49\u5bc4"))))})),Et=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},wt=Object(H.a)((function(e){return{root:Object(Se.a)({display:"flex",flexDirection:"column",minHeight:"calc(100% - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100% - 64px)"})}})),St=M((function(e){var t=wt().root,n=Object(A.e)(),r=function(){var t=Object(D.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.goBack(),t.next=3,Et(275);case 3:e.setStorage("content",null),e.setStorage("open1",!1),e.setStorage("open2",!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(D.a)(I.a.mark((function t(){var r,a=arguments;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=!(a.length>0&&void 0!==a[0])||a[0])?n.push("content/more"):n.goBack(),e.setStorage("open1",r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(D.a)(I.a.mark((function t(r){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Et(275);case 2:r?n.push("content/move"):n.goBack(),e.setStorage("open2",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{height:"100%"}},a.a.createElement(ut,{onBack:r,onToggle:o,onRemove:function(){ge.remove(e.getStorage("contentid")),alert("\u79fb\u9664\u5230\u56de\u6536\u7bb1")}}),a.a.createElement(A.a,{path:"/content/more"},a.a.createElement(st,{onMove:function(){return c(!0)},onToggle:o,open:e.getStorage("open1")})),a.a.createElement(A.a,{path:"/content/move"},a.a.createElement(dt,{label:e.getStorage("label"),moveto:function(t){ge.moveto(e.getStorage("contentid"),e.getStorage("pagesid"),t).then((function(){return console.log("ok")}))},open1:e.getStorage("open2"),handleClose:function(){return c(!1)}})),e.getStorage("content")?a.a.createElement(B.a,{maxWidth:"md",className:t},a.a.createElement(R.a,{variant:"h5"},e.getStorage("content").title),a.a.createElement(at,{content:e.getStorage("content")}),a.a.createElement(rt,{files:e.getStorage("content").files,onClick:function(e){return ge.dawnload(e)}}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getStorage("content").content},style:{marginBottom:8}}),a.a.createElement(yt,null)):a.a.createElement(Ee.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},a.a.createElement(we.a,null)))})),xt=Object(H.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)},submit:{marginTop:e.spacing(2)}}})),kt=M((function(e){var t=Object(A.e)(),n=xt();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe.a,{className:n.appBar},a.a.createElement(Ne.a,null,a.a.createElement(Ce.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(ot.a,null)),a.a.createElement(R.a,{variant:"h6",className:n.title,color:"textPrimary"},"\u8a2d\u5b9a"))),a.a.createElement(Ne.a,null),a.a.createElement(B.a,{maxWidth:"md"},a.a.createElement(U.a,{className:n.submit,variant:"contained",onClick:function(t){t.preventDefault(),e.setStorage("username",null),e.setStorage("password",null),e.setStorage("cookie",null),e.setStorage("contentid",null),e.setStorage("pagesid",0),e.setStorage("content",null),e.setStorage("label",null),e.setStorage("mails",null),e.setStorage("open1",!1),e.setStorage("open2",!1),e.setStorage("drawer",!1)}},"\u5220\u9664\u6240\u6709\u6578\u64da")))})),Ot=Object(Te.a)((function(e){return{appBar:{backgroundColor:"#fffe"},title:{marginLeft:e.spacing(2)}}}))((function(e){var t=Object(A.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe.a,{className:e.classes.appBar},a.a.createElement(Ne.a,null,a.a.createElement(Ce.a,{edge:"start",onClick:function(){return t.goBack()},"aria-label":"close"},a.a.createElement(ot.a,null)),a.a.createElement(R.a,{variant:"h6",className:e.classes.title,color:"textPrimary"},"\u8aaa\u660e"))),a.a.createElement(Ne.a,null),a.a.createElement(B.a,{maxWidth:"md"},a.a.createElement(R.a,{variant:"h5",className:e.classes.title,color:"textPrimary"},"\u6211\u4e0d\u77e5\u9053\u8a72\u5728\u9019\u88e1\u5beb\u4ec0\u9ebc\uff01")))})),jt=M((function(e){window.getStorage=e.getStorage,window.setStorage=e.setStorage;var t=Object(A.e)();return Object(r.useEffect)((function(){window.getStorage("username")&&window.getStorage("password")?(t.replace("mails"),window.setStorage("open1",!1),window.setStorage("open2",!1),window.setStorage("drawer",!1),ge.mail(window.getStorage("pagesid")).then((function(e){return window.setStorage("mails",e)})),ge.label().then((function(e){return window.setStorage("label",e)}))):t.replace("")}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(A.a,{exact:!0,path:"/",component:ye}),a.a.createElement(A.a,{exact:!0,path:"/mails",component:nt}),a.a.createElement(A.a,{path:"/content",component:St}),a.a.createElement(A.a,{path:"/setting",component:kt}),a.a.createElement(A.a,{path:"/about",component:Ot}))})),Ct=n(95),Pt=Object(Ct.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e53935"},background:{default:"#fff"}}}),Nt=function(){return JSON.parse(localStorage.getItem("SAPP"))},Tt=n(98),Mt=n(96),At=function(e){Object(Tt.a)(n,e);var t=Object(Mt.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={canShow:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.dispatch({type:"init",show:function(){return e.setState({canShow:!0})}})}},{key:"render",value:function(){return this.state.canShow?this.props.children:null}}]),n}(r.PureComponent),qt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case e:return r.value;default:return n}}},It=qt("username"),Dt=qt("password"),Bt=qt("cookie"),Ft=qt("contentid"),Rt=qt("pagesid",0),Wt=qt("drawer",!1),Ut=qt("open1",!1),Ht=qt("open2",!1),Lt=qt("mails"),_t=qt("label"),Jt=qt("content"),Gt=function(e){var t=function(e){return function(e){localStorage.setItem("SAPP",JSON.stringify(e))}(e),e};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return"init"===r.type&&r.show(),r.type.startsWith("@@redux")?t(Nt()||e(n,r)):t(e(n,r))}}(Object(i.a)({username:It,password:Dt,cookie:Bt,contentid:Ft,pagesid:Rt,drawer:Wt,open1:Ut,open2:Ht,mails:Lt,label:_t,content:Jt})),Kt=Object(i.b)(Gt);Object(o.render)(a.a.createElement(l.a,{theme:Pt},a.a.createElement(u.a,null),a.a.createElement(b,{store:Kt},a.a.createElement(At,{store:Kt},a.a.createElement(c.a,null,a.a.createElement(jt,null))))),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.1b2d457e.chunk.js.map