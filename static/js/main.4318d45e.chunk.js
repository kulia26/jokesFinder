(this.webpackJsonpjokesfinder=this.webpackJsonpjokesfinder||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(7),i=r.n(o),s=(r(14),r(15),r(5)),c=r(8),l=r(1),u=r(2),m=r(4),h=r(3),d=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"categories"===this.props.mode?"categories show":"categories hide"},this.props.categories.map((function(t){var r=t===e.props.checked;return n.a.createElement("label",{htmlFor:t,key:t},n.a.createElement("input",{type:"radio",id:t,name:"category",value:t,checked:r,onChange:e.props.onCategorySelect}),n.a.createElement("span",{className:"radio"},t))})))}}]),r}(n.a.Component),f=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"search"},n.a.createElement("input",{type:"radio",id:"search",name:"mode",onChange:this.props.onModeChange,value:"search"}),n.a.createElement("span",{className:"radio"},"Search")),n.a.createElement("input",{className:"search"===this.props.mode?"search show":"search hide",type:"search",placeholder:"Free text search...",id:"search-field",name:"mode",onChange:this.props.onSearchChange,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.props.getJoke())}}))}}]),r}(n.a.Component),p=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(l.a)(this,r),(a=t.call(this,e)).onCategorySelect=function(e){a.setState({fromCategory:e.target.value})},a.onModeChange=function(e){a.setState({mode:e.target.value})},a.onSearchChange=function(e){a.setState({query:e.target.value})},a.getJoke=function(){"random"===a.state.mode&&a.props.getRandomJoke(),"categories"===a.state.mode&&a.state.fromCategory&&a.props.getJokeFromCategory(a.state.fromCategory),"search"===a.state.mode&&a.state.query&&a.props.getJokeFromQuery(a.state.query)},a.state={categories:[],fromCategory:null,mode:"random"},a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoaded:!0}),fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){e.setState({categories:t,fromCategory:t[0]})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("fieldset",{name:"selectMode"},n.a.createElement("legend",null,"Let\u2019s try to find a joke for you:"),n.a.createElement("label",{htmlFor:"random"},n.a.createElement("input",{type:"radio",id:"random",name:"mode",value:"random",onChange:this.onModeChange,defaultChecked:!0}),n.a.createElement("span",{className:"radio"},"Random")),n.a.createElement("fieldset",{name:"fromCategories",className:"categories"},n.a.createElement("legend",null,n.a.createElement("label",{htmlFor:"categories"},n.a.createElement("input",{type:"radio",id:"categories",name:"mode",onChange:this.onModeChange,value:"categories"}),n.a.createElement("span",{className:"radio"},"From categories"))),n.a.createElement(d,{categories:this.state.categories,mode:this.state.mode,onCategorySelect:this.onCategorySelect,checked:this.state.fromCategory})),n.a.createElement(f,{onSearchChange:this.onSearchChange,onModeChange:this.onModeChange,mode:this.state.mode,getJoke:this.getJoke}),n.a.createElement("button",{type:"button",className:"getJoke",onClick:this.getJoke,onSubmit:this.getJoke},"Get a joke"),n.a.createElement("img",{id:"chuck",className:this.props.isLoaded||this.props.error?"hide":"show",src:"./loader.gif",alt:"loading..."}),n.a.createElement("p",{id:"errorMessage",className:this.props.error&&this.props.error.show?"show":"hide"},this.props.error?this.props.error.message:"")))}}]),r}(n.a.Component);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var C=n.a.createElement("path",{d:"M17.2504 0H2.74963C1.23352 0 0 1.23328 0 2.74963V11.6238C0 13.1367 1.22815 14.368 2.73987 14.3734V18.4004L8.5271 14.3734H17.2504C18.7665 14.3734 20 13.1399 20 11.6238V2.74963C20 1.23328 18.7665 0 17.2504 0ZM18.8281 11.6238C18.8281 12.4937 18.1204 13.2015 17.2504 13.2015H8.15942L3.91174 16.1573V13.2015H2.74963C1.87964 13.2015 1.17188 12.4937 1.17188 11.6238V2.74963C1.17188 1.87952 1.87964 1.17188 2.74963 1.17188H17.2504C18.1204 1.17188 18.8281 1.87952 18.8281 2.74963V11.6238Z",fill:"#ABABAB"}),y=n.a.createElement("path",{d:"M5.35291 4.14075H14.6471V5.31262H5.35291V4.14075Z",fill:"#ABABAB"}),E=n.a.createElement("path",{d:"M5.35291 6.64075H14.6471V7.81262H5.35291V6.64075Z",fill:"#ABABAB"}),k=n.a.createElement("path",{d:"M5.35291 9.14075H14.6471V10.3126H5.35291V9.14075Z",fill:"#ABABAB"}),b=function(e){var t=e.svgRef,r=e.title,a=g(e,["svgRef","title"]);return n.a.createElement("svg",v({width:20,height:19,viewBox:"0 0 20 19",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,C,y,E,k)},j=n.a.forwardRef((function(e,t){return n.a.createElement(b,v({svgRef:t},e))}));r.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var S=n.a.createElement("path",{d:"M9.54539 0H5.90903C5.65799 0 5.45448 0.203515 5.45448 0.45455C5.45448 0.705585 5.65799 0.9091 5.90903 0.9091H8.44803L3.76946 5.58768C3.59198 5.76516 3.59198 6.05298 3.76946 6.2305C3.85819 6.31923 3.97452 6.36362 4.09085 6.36362C4.20718 6.36362 4.32352 6.31923 4.41223 6.23048L9.09086 1.55191V4.09091C9.09086 4.34194 9.29437 4.54546 9.54541 4.54546C9.79644 4.54546 9.99996 4.34194 9.99996 4.09091V0.45455C9.99994 0.203515 9.79642 0 9.54539 0Z",fill:"#8EA7FF"}),w=n.a.createElement("path",{d:"M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z",fill:"#8EA7FF"}),J=function(e){var t=e.svgRef,r=e.title,a=F(e,["svgRef","title"]);return n.a.createElement("svg",O({width:10,height:10,viewBox:"0 0 10 10",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,S,w)},N=n.a.forwardRef((function(e,t){return n.a.createElement(J,O({svgRef:t},e))}));r.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var R=n.a.createElement("path",{d:"M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z",fill:"#FF6767"}),V=function(e){var t=e.svgRef,r=e.title,a=M(e,["svgRef","title"]);return n.a.createElement("svg",L({width:20,height:17,viewBox:"0 0 20 17",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,R)},I=n.a.forwardRef((function(e,t){return n.a.createElement(V,L({svgRef:t},e))}));r.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var T=n.a.createElement("path",{d:"M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z",fill:"#FF6767"}),x=function(e){var t=e.svgRef,r=e.title,a=B(e,["svgRef","title"]);return n.a.createElement("svg",H({width:20,height:17,viewBox:"0 0 20 17",fill:"none",ref:t},a),r?n.a.createElement("title",null,r):null,T)},A=n.a.forwardRef((function(e,t){return n.a.createElement(x,H({svgRef:t},e))})),P=(r.p,function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(l.a)(this,r),(a=t.call(this,e)).calculateHours=function(e){return Math.floor((new Date-new Date(e))/1e3/60/60)},a.hasCategory=function(){return a.props.categories&&a.props.categories.length},a.state={className:"hide"},a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({className:"show"})}),0)}},{key:"render",value:function(){var e=this,t=(this.props.className?this.props.className:"")+" "+this.state.className;return n.a.createElement("article",{className:t},n.a.createElement("span",{className:"message"},n.a.createElement(j,null)),n.a.createElement("button",{type:"button",className:this.props.isFavourite?"like hide":"like show",onClick:function(){e.props.addToFavourite(e.props.id)}},n.a.createElement(I,null)),n.a.createElement("button",{type:"button",className:this.props.isFavourite?"like show":"like hide",onClick:function(){e.props.removeFromFavourite(e.props.id)}},n.a.createElement(A,null)),n.a.createElement("address",null,"ID:",n.a.createElement("a",{href:this.props.url},n.a.createElement("span",null,this.props.id),n.a.createElement(N,null))),n.a.createElement("h2",null,this.props.value),n.a.createElement("p",null,"Last update:"," ",n.a.createElement("time",{dateTime:this.props.updated_at},this.calculateHours(this.props.updated_at)," hours ago")),n.a.createElement("mark",{className:this.hasCategory()?"show":"hide"},this.props.categories[0]))}}]),r}(n.a.Component)),q=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("section",null,this.props.jokes.map((function(t){return n.a.createElement(P,Object.assign({key:t.reactId,addToFavourite:e.props.addToFavourite,removeFromFavourite:e.props.removeFromFavourite,isFavourite:e.props.isJokeFavourite(t.id)},t))})))}}]),r}(n.a.Component),U=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("aside",{className:"hide"},n.a.createElement("h2",null,"Favourite"),n.a.createElement("section",null,this.props.favourite.map((function(t){return n.a.createElement(P,Object.assign({key:t.reactId,addToFavourite:e.props.addToFavourite,removeFromFavourite:e.props.removeFromFavourite,isFavourite:e.props.isJokeFavourite(t.id)},t))}))))}}]),r}(n.a.Component),Z=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var a;Object(l.a)(this,r),(a=t.call(this,e)).getUniqueCounterValue=function(){var e=a.state.counterForUniqueId+1;return a.setState({counterForUniqueId:e}),e},a.isJokeFavourite=function(e){return void 0!==a.state.favourite.find((function(t){return t.id===e}))},a.addToFavourite=function(e){var t={},r=a.state.jokes.map((function(r){return r.id===e&&(r.isFavourite=!0,t=Object(c.a)({},r)),r}));t.reactId=t.reactId+a.getUniqueCounterValue(),t.isFavourite=!0;var n=[t].concat(Object(s.a)(a.state.favourite));a.setState({favourite:n,jokes:r}),localStorage.setItem("favourite",JSON.stringify(n))},a.removeFromFavourite=function(e){var t=a.state.favourite.map((function(t){return t.id===e&&(t.className="hide",t.isFavourite=!1),t})),r=a.state.jokes.map((function(t){return t.id===e&&(t.isFavourite=!1),t}));a.setState({favourite:t,jokes:r}),setTimeout((function(){var t=a.state.favourite.filter((function(t){return t.id!==e}));a.setState({favourite:t,jokes:r}),localStorage.setItem("favourite",JSON.stringify(t))}),400)},a.getRandomJoke=function(){a.setState({isLoaded:!1}),fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){e.reactId=e.id+a.getUniqueCounterValue();var t=[e].concat(Object(s.a)(a.state.jokes));a.setState({isLoaded:!0,jokes:t})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.getJokeFromCategory=function(e){a.setState({isLoaded:!1}),fetch("https://api.chucknorris.io/jokes/random?category="+encodeURI(e)).then((function(e){return e.json()})).then((function(e){e.reactId=e.id+a.getUniqueCounterValue();var t=[e].concat(Object(s.a)(a.state.jokes));a.setState({isLoaded:!0,jokes:t})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.getJokeFromQuery=function(e){e.length<3||e.length>120?a.setState({error:{message:"Query must be from 3 to 120 characters"},isLoaded:!0}):fetch("https://api.chucknorris.io/jokes/search?query="+encodeURI(e)).then((function(e){return e.json()})).then((function(t){if(0===t.total)a.setState({isLoaded:!0,error:{message:"There is no jokes about "+e}});else{a.setState({isLoaded:!1});var r=a.state.jokes;t.result.forEach((function(e){e.reactId=e.id+a.getUniqueCounterValue()})),r=t.result.concat(r),setTimeout((function(){return a.setState({isLoaded:!0,jokes:r})}),300)}}),(function(e){a.setState({isLoaded:!0,error:e})}))};var n=localStorage.getItem("favourite"),o=n?JSON.parse(n):[];return a.state={error:null,isLoaded:!0,jokes:[],counterForUniqueId:0,favourite:o},a}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(){var e=this;this.state.error&&void 0===this.state.error.show&&(this.setState({error:{show:!0,message:this.state.error.message}}),setTimeout((function(){e.setState({error:{show:!1,message:e.state.error.message}}),setTimeout((function(){e.state.error&&e.setState({error:null})}),300)}),3e3))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"wrap"},n.a.createElement("header",null,n.a.createElement("h1",null,"MSI 2020")),n.a.createElement("input",{className:"menu",type:"checkbox",id:"menu"}),n.a.createElement("div",{className:"menu"},n.a.createElement("div",null,n.a.createElement("span",null),n.a.createElement("span",null)),n.a.createElement("h2",null,"Favourite")),n.a.createElement("main",null,n.a.createElement("h2",null,"Hey!"),n.a.createElement(p,{error:this.state.error,getJokeFromCategory:this.getJokeFromCategory,getJokeFromQuery:this.getJokeFromQuery,getRandomJoke:this.getRandomJoke,isLoaded:this.state.isLoaded}),n.a.createElement(q,{jokes:this.state.jokes,addToFavourite:this.addToFavourite,removeFromFavourite:this.removeFromFavourite,isJokeFavourite:this.isJokeFavourite}))),n.a.createElement(U,{favourite:this.state.favourite,addToFavourite:this.addToFavourite,removeFromFavourite:this.removeFromFavourite,isJokeFavourite:this.isJokeFavourite}))}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4318d45e.chunk.js.map