(this["webpackJsonpappointment-app"]=this["webpackJsonpappointment-app"]||[]).push([[0],{21:function(n,t,e){n.exports=e(33)},26:function(n,t,e){},33:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(17),i=e.n(o),c=(e(26),e(1)),l=e(5),u=Object(l.a)(),s=e(3),p=e(4);function d(){var n=Object(s.a)(["\n  background-color: salmon;\n  height: 50px;\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  background-color: #FFFFFF;\n  /* height: 80vh; */\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]);return m=function(){return n},n}function f(){var n=Object(s.a)(["\n"]);return f=function(){return n},n}function h(){var n=Object(s.a)(["\n  background-color: grey;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n"]);return h=function(){return n},n}function x(){var n=Object(s.a)(["\n  background-color: white;\n  width: 100%;\n  position: relative;\n"]);return x=function(){return n},n}var b=p.a.div(x()),v=p.a.div(h()),g=(p.a.div(f()),p.a.div(m())),D=p.a.div(d()),E=e(11);function w(){var n=Object(s.a)(["\n  a {\n    margin-left: 20px;\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(s.a)(["\n  height: 50px;\n  line-height: 50px;\n  vertical-align: middle;\n"]);return O=function(){return n},n}var y=p.a.div(O()),j=p.a.div(w()),k=function(){return a.a.createElement(y,null,a.a.createElement(j,null,a.a.createElement(E.a,{to:"/"},"Home"),a.a.createElement(E.a,{to:"/login"},"Login")))},F=function(n){var t=n.children;return a.a.createElement(b,null,a.a.createElement(v,null,a.a.createElement(k,null)),a.a.createElement(g,null,t),a.a.createElement(D,null,"Footer"))},I=e(8),z=e.n(I),H=function(n,t,e,r){var a=parseInt(n.split(":")[0]),o=parseInt(n.split(":")[1]),i=z()().startOf("day").hour(a).minutes(o),c=parseInt(r.from.split(":")[0]),l=parseInt(r.from.split(":")[1]),u=z()().startOf("day").hour(c).minutes(l),s=parseInt(r.to.split(":")[0]),p=parseInt(r.to.split(":")[1]),d=z()().startOf("day").hour(s).minutes(p),m=z.a.duration(u.diff(i)).asMinutes()/e,f=z.a.duration(d.diff(u)).asMinutes()/e;return{top:40+50*m,left:50+180*(r.column-1),height:50*f}};function N(){var n=Object(s.a)(["\n  position: absolute;\n  background: green;\n  width: ",";\n  box-sizing: border-box;\n  padding: 4px 8px;\n  color: #FFFFFF;\n  box-sizing: border-box;\n  white-space: pre-line;\n"]);return N=function(){return n},n}function M(){var n=Object(s.a)(["\n  width: ",";\n  font-size: 13px;\n\n  .header {\n    text-align: center;\n    border-right: 1px solid ",";\n    height: ",";\n    line-height: ",";\n    vertical-align: middle;\n    box-sizing: border-box;\n  }\n\n  .first-cell {\n    border-top: 1px solid ",";\n    border-right: 1px solid ",";\n    height: ",";\n    box-sizing: border-box;\n  }\n\n  .cell {\n    border-top: 1px solid ",";\n    border-right: 1px solid ",";\n    height: ",";\n    padding: 4px 8px;\n    box-sizing: border-box;\n  }\n"]);return M=function(){return n},n}function B(){var n=Object(s.a)(["\n  width: ",";\n\n  .header {\n    height: ",";\n    box-sizing: border-box;\n  }\n\n  .first-cell {\n    border-top: 1px solid ",";\n    height: ",";\n    box-sizing: border-box;\n  }\n\n  .cell {\n    height: ",";\n    padding: 4px 8px;\n    text-align: right;\n    box-sizing: border-box;\n    position: relative;\n\n    .content {\n      position: absolute;\n      top: -9px;\n      right: 4px;\n    }\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(s.a)(["\n  border: 1px solid ",";\n  margin-left: 50px;\n  position: relative;\n  display: flex;\n  font-size: 14px;\n"]);return J=function(){return n},n}var L=p.a.div(J(),"#DDDDDD"),W=p.a.div(B(),"50px","30px","#DDDDDD","10px","50px"),A=p.a.div(M(),"180px","#DDDDDD","30px","30px","#DDDDDD","#DDDDDD","10px","#DDDDDD","#DDDDDD","50px"),C=p.a.div(N(),"170px"),P=function(n){var t=n.start,e=void 0===t?"07:00":t,r=n.end,o=void 0===r?"22:00":r,i=n.step,c=void 0===i?30:i,l=n.columns,u=void 0===l?[]:l,s=n.events,p=void 0===s?[]:s,d=function(n,t,e){for(var r=parseInt(n.split(":")[0]),a=parseInt(n.split(":")[1]),o=z()().startOf("day").hour(r).minutes(a),i=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]),l=z()().startOf("day").hour(i).minutes(c),u=z.a.duration(l.diff(o)).asMinutes(),s=[o.format("HH:mm")],p=0;p<u/e;p++)o.add(e,"minutes"),s.push(o.format("HH:mm"));return s}(e,o,c);return a.a.createElement(L,null,a.a.createElement(W,null,a.a.createElement("div",{className:"header"}),a.a.createElement("div",{className:"first-cell"}),d.map((function(n,t){return a.a.createElement("div",{className:"cell",key:t},a.a.createElement("div",{className:"content"},n))}))),u.map((function(n,t){return a.a.createElement(A,{key:t},a.a.createElement("div",{className:"header"},n.text),a.a.createElement("div",{className:"first-cell"}),d.map((function(n,t){return a.a.createElement("div",{className:"cell",key:t})})))})),p.map((function(n,t){return a.a.createElement(C,{style:H(e,0,c,n),key:t},"".concat(n.from," - ").concat(n.to,"\n").concat(n.content))})))};function R(){var n=Object(s.a)(["\n  margin-top: 20px;\n"]);return R=function(){return n},n}var S=p.a.div(R()),$=[{text:"Robin"},{text:"Daisy"},{text:"Michael"}],q=[{from:"08:00",to:"09:15",column:1,content:"Has appointment with A"},{from:"09:00",to:"12:00",column:2,content:"Has appointment with B"},{from:"10:00",to:"12:15",column:3,content:"Has appointment with C"}],G=function(){return a.a.createElement(F,null,a.a.createElement(S,null,a.a.createElement(P,{columns:$,events:q})))},K=function(){return a.a.createElement(F,null,"Login Page")},Q=function(){return a.a.createElement(c.b,{history:u},a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/",exact:!0,component:G}),a.a.createElement(c.a,{path:"/login",exact:!0,component:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.34cfd27e.chunk.js.map