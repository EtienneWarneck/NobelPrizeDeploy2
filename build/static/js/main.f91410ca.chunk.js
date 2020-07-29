(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,a){e.exports={style:"NavBarTitle_style__3lHKZ",styleText:"NavBarTitle_styleText__6NvGe"}},46:function(e,t,a){e.exports={container__section:"HomeButtons_container__section__2Mxb2"}},47:function(e,t,a){e.exports={b:"ButtonCategory_b__2p6Jp",buttons:"ButtonCategory_buttons__2igj2"}},51:function(e,t,a){e.exports=a(83)},56:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=a(11),s=a(12),i=a(15),u=a(14),m=(a(56),a(30)),h=a(5),p=a(50),d=a(49),v=a(31),b=a.n(v),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{bg:"",expand:"lg",className:"navbar d-flex justify-content-center"},r.a.createElement("div",{className:b.a.style},r.a.createElement(p.a.Link,{className:b.a.styleText,href:"/"},"Nobel Prize Laureates"))))}}]),a}(n.Component),g=a(46),y=a.n(g),E=a(47),C=a.n(E);var N=function(e){return r.a.createElement("button",{className:C.a.b,name:e.name,onClick:e.onClick,value:e.value},e.name)},k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){console.log("PROPS HomeButtons",e.props),t=t.slice(0,3).toLowerCase(),e.props.history.push("/"+t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=["Physics","Chemistry","Medicine","Literature","Peace","Economics"].map((function(t){return r.a.createElement(N,{key:t.toString(),value:t,name:t,onClick:function(t){return e.handleClick(t.target.value)}})}));return r.a.createElement("div",{className:y.a.container__section},t)}}]),a}(n.Component),j=a(32),O=a.n(j),_=a(19);a(77);var S=function(e){return console.log("PROPS from WinnerCard",e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(_.a,{className:"cols-12 col-md-8 p-0 m-4 mb-3 gold border-dark"},r.a.createElement(_.a.Header,{className:"text-black",as:"h5"},e.category," Laureate "),r.a.createElement(_.a.Body,{className:"white"},r.a.createElement(_.a.Title,{className:"ml-3 mb-1 ",as:"h5"},e.awardYear),r.a.createElement(_.a.Title,{className:" mt-1 ml-3",as:"h2"},e.name),r.a.createElement(_.a.Text,{className:" m-3",as:"h5"},e.motivation)))))},w=a(21),x=a(33),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={allCards:[],category:null,searchYear:"",searchName:""},e.onChangeYear=function(t){t.preventDefault(),console.log("ON CHANGE",t.target.value),console.log("ON CHANGE prevent",t.preventDefault),e.setState({searchYear:t.target.value})},e.onChangeName=function(t){t.preventDefault(),e.setState({searchName:t.target.value})},e.onClickSearch=function(t){console.log("ON CLICK",e.state);var a=e.props.match.params.category_name;O.a.get("http://api.nobelprize.org/2.0/nobelPrizes?sort=desc&nobelPrizeCategory="+a+"&format=json&csvLang=en").then((function(t){var a=t.data.nobelPrizes;e.setState({allCards:a})})).catch((function(e){return console.log(e)}))},e.onClickReset=function(t){e.setState({allCards:[],searchYear:"",searchName:""})},e.handleSubmit=function(t){console.log("SUBMIT"),t.preventDefault(),e.setState({searchYear:"",searchName:""})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("CARDS CATEGORY",this.props);var t=this.props.match.params.category_name;O.a.get("http://api.nobelprize.org/2.0/nobelPrizes?limit=50&sort=desc&nobelPrizeCategory="+t+"&format=json&csvLang=en").then((function(t){var a=t.data.nobelPrizes;console.log("categoryData",t.data.nobelPrizes),e.setState({allCards:a,category:e.props.match.params.category_name})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.searchYear,a=e.searchName,n=e.allCards.filter((function(e){var n;return t!=e.awardYear&&t?null:null===(n=e.laureates[0].knownName)||void 0===n?void 0:n.en.toLowerCase().includes(a.toLowerCase())})).map((function(e){var t,a;return r.a.createElement(S,{key:e.id,awardYear:e.awardYear,category:e.category.en,name:null===(t=e.laureates[0].knownName)||void 0===t?void 0:t.en,motivation:null===(a=e.laureates[0].motivation)||void 0===a?void 0:a.en})}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(w.a,{className:"form-row p-0 m-3 mt-5 mb-5 justify-content-center",type:"submit",value:"Submit",onSubmit:this.handleSubmit},r.a.createElement(w.a.Label,{htmlFor:"",className:"col-form-label text-right col-auto text-uppercase font-weight-normal"},"Year :"),r.a.createElement(w.a.Control,{type:"text",placeholder:"",className:"col-2 text-center font-weight-bold border-dark",value:this.state.searchYear,onChange:this.onChangeYear}),r.a.createElement(w.a.Label,{htmlFor:"",className:"col-form-label ml-2 text-right col-auto font-weight-normal"},"NAME :"),r.a.createElement(w.a.Control,{type:"text",placeholder:"",className:"col-4 font-weight-bold border-dark",value:this.state.searchName,onChange:this.onChangeName}),r.a.createElement(x.a,{type:"button",variant:"btn ml-4 col-1 outline-dark border-dark gold",onClick:this.onClickSearch},"SEARCH"),r.a.createElement(x.a,{type:"button",variant:"btn ml-4 col-1 outline-dark border-dark gold",onClick:this.onClickReset},"RESET"))),r.a.createElement("div",null,n))}}]),a}(n.Component),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{path:"/",component:f}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{path:"/:category_name",component:P})))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(Y,null))))}}]),a}(n.Component);a(81),a(82);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f91410ca.chunk.js.map