(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=a(57),i=a(58),s=a(69),m=a(70),h=a(180),u=a(181),d=a(178),E=a(175),p=a(176),f=a(179),g=a(177),v=a(68),L=a(67),b=a(59),U=a.n(b),k=a(60),R=a.n(k),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){n.setState({URL:e.target.value})},n.mySubmitHandler=function(e){e.preventDefault(),console.log("You are submitting "+n.state.URL),R.a.isURL(n.state.URL,{require_protocol:!0})?U.a.post("http://localhost:5000/api/url/shorten",{longUrl:n.state.URL}).then((function(e){console.log(e),n.setState({shortURL:e.data.shortUrl})}),(function(e){console.log(e)})):n.setState({shortURL:"Invalid URL Make sure to ensure the url and http(s) protocols are correct."})},n.state={URL:"",shortURL:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(h.a.Brand,{href:"#home"},"Insta - Car"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{href:"#features"},"Features"),r.a.createElement(u.a.Link,{href:"#pricing"},"Pricing"),r.a.createElement(d.a,{title:"Dropdown",id:"collasible-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(d.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(d.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(d.a.Divider,null),r.a.createElement(d.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(u.a,null,r.a.createElement(u.a.Link,{href:"#deets"},"More deets"),r.a.createElement(u.a.Link,{eventKey:2,href:"#memes"},"Dank memes")))),r.a.createElement(E.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{onSubmit:this.mySubmitHandler},r.a.createElement(f.a.Group,{as:g.a,controlId:"formHorizontalEmail"},r.a.createElement(f.a.Label,{column:!0,sm:2},"Enter URL"),r.a.createElement(v.a,{sm:8},r.a.createElement(f.a.Control,{type:"url",placeholder:"Please Enter The Url To Be Shortened",onChange:this.myChangeHandler})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"Submit"))),r.a.createElement("p",null,this.state.shortURL?r.a.createElement("a",{href:this.state.shortURL},this.state.shortURL):""))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(171);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(172)}},[[71,1,2]]]);
//# sourceMappingURL=main.113f0224.chunk.js.map