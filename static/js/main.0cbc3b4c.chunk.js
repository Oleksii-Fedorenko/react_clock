(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),l=n(4),s=n(1),u=n.n(s),h=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=(new Date).toLocaleTimeString();t.setState({time:e}),console.log(e)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The name of clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"clock",children:[Object(h.jsx)("h1",{children:"".concat(this.props.name)}),Object(h.jsx)("p",{"data-cy":"time",children:"Current time: ".concat(this.state.time)})]})}}]),n}(u.a.Component),b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={turnOnClock:!1,nameClock:"Johnny Cage"},t.showClock=function(){t.setState({turnOnClock:!0})},t.hideClock=function(){t.setState({turnOnClock:!1})},t.renameClock=function(){var e=["Longines","Harry Winston","Piaget","Cartier","Jaeger-LeCoultre"],n=e[Math.floor(Math.random()*e.length)];t.setState({nameClock:n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.turnOnClock,n=t.nameClock;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),e&&Object(h.jsx)(m,{name:n}),Object(h.jsx)("button",{className:"button button--start",type:"button",onClick:this.showClock,children:"Turn on clock"}),Object(h.jsx)("button",{className:"button button--edit",type:"button",onClick:this.hideClock,children:"Hide clock"}),Object(h.jsx)("button",{className:"button button--end",type:"button",onClick:this.renameClock,children:"Rename clock"})]})}}]),n}(u.a.Component),d=b;o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0cbc3b4c.chunk.js.map