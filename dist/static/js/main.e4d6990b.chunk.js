(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/lautiflix.53c4f4a4.png"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/bg-grimm.3f6fcb1a.jpg"},function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(8),c=t.n(i),s=(t(15),t(1)),r=t(2),o=t(5),m=t(3),u=t(4),d=(t(16),t(17),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={scrolled:!1},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=document.querySelector("html");window.addEventListener("scroll",function(){a.scrollTop>50?e.setState({scrolled:!0}):e.setState({scrolled:!1})})}},{key:"render",value:function(){var e=this.state.scrolled;return n.a.createElement("nav",{className:"navbar is-fixed-top "+(e?"is-scrolled":"")},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("a",{className:"navbar-item"},n.a.createElement("img",{src:t(18),alt:""})),n.a.createElement("div",{className:"navbar-item  menu_for_mobile is-hidden-desktop"},n.a.createElement("div",{className:"dropdown is-hoverable"},n.a.createElement("div",{className:"dropdown-trigger"},n.a.createElement("button",{className:"button","aria-haspopup":"true"},n.a.createElement("span",null,"Explorar"),n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"material-icons"},"keyboard_arrow_down")))),n.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu4",role:"menu"},n.a.createElement("div",{className:"dropdown-content"},n.a.createElement("div",{className:"dropdown-item"},n.a.createElement("a",{className:"has-text-white"},"Inicio")),n.a.createElement("div",{className:"dropdown-item"},n.a.createElement("a",{className:"has-text-white"},"Series")),n.a.createElement("div",{className:"dropdown-item"},n.a.createElement("a",{className:"has-text-white"},"Peliculas")),n.a.createElement("div",{className:"dropdown-item"},n.a.createElement("a",{className:"has-text-white"},"Agregados recientemente")),n.a.createElement("div",{className:"dropdown-item"},n.a.createElement("a",{className:"has-text-white"},"Mi lista"))))))),n.a.createElement("div",{className:"navbar-menu"},n.a.createElement("div",{className:"navbar-start"},n.a.createElement("a",{className:"navbar-item active"},"Inicio"),n.a.createElement("a",{className:"navbar-item"},"Series"),n.a.createElement("a",{className:"navbar-item"},"Peliculas"),n.a.createElement("a",{className:"navbar-item"},"Agregados recientemente"),n.a.createElement("a",{className:"navbar-item"},"Mi lista"))))}}]),a}(n.a.Component)),p=(t(19),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"hero is-fullheight",style:{backgroundColor:"transparent"}},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"bg__portada",style:{backgroundImage:"url('".concat(t(20),"')")}}),n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("div",{className:"columns",style:{paddingTop:50}},n.a.createElement("div",{className:"column is-5"},n.a.createElement("div",{className:"originalOfNetflix"},n.a.createElement("p",{className:"title is-3 has-text-white is-marginless",style:{marginBottom:"5px"}},n.a.createElement("span",{className:"has-text-weight-light"},"ORIGINAL DE "),n.a.createElement("span",{className:"has-text-weight-extrabold"},"LAUTIFLIX")),n.a.createElement("br",null),n.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grimm_Logo.png/800px-Grimm_Logo.png",width:"200",alt:""})),n.a.createElement("br",null),n.a.createElement("div",{className:"has-text-left"},n.a.createElement("button",{className:"button lautiflix__button__rp is-dark"},n.a.createElement("i",{className:"material-icons"},"play_arrow"),"\xa0 Reproducir \xa0"),"\xa0",n.a.createElement("span",null," "),"\xa0 \xa0",n.a.createElement("button",{className:"button lautiflix__button__rp is-dark"},n.a.createElement("i",{className:"material-icons"},"add"),"\xa0 Mi Lista \xa0"),n.a.createElement("br",null),"\xa0",n.a.createElement("p",{className:"title has-text-white",style:{fontSize:"22px"}},"Ve a la temporada 6"),n.a.createElement("p",{className:"subtitle has-text-white"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi odio modi adipisci, vel, ipsa esse doloribus quam")))))))}}]),a}(n.a.Component)),E=t(6),h=(t(21),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).next=t.next.bind(Object(E.a)(Object(E.a)(t))),t.previous=t.previous.bind(Object(E.a)(Object(E.a)(t))),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"next",value:function(){var e=document.querySelector("html").clientWidth;document.getElementById(this.props.idScroll).scrollLeft+=e}},{key:"previous",value:function(){var e=document.querySelector("html").clientWidth;document.getElementById(this.props.idScroll).scrollLeft-=e}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.idScroll,t=e.title;return n.a.createElement("div",{className:"lautiflix__carousel"},n.a.createElement("p",{className:"subtitle has-text-light has-text-weight-bold",style:{marginBottom:10}},t),n.a.createElement("div",null,n.a.createElement("div",{onClick:this.previous,className:"lautiflix__carousel__control lautiflix__carousel__inline is-left-control"},n.a.createElement("i",{className:"material-icons"},"keyboard_arrow_left")),n.a.createElement("div",{className:"lautiflix__carousel__images lautiflix__carousel__inline",id:a},n.a.createElement("div",{className:"columns is-gapless is-mobile "},n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"http://images.vertele.eldiario.es/2019/01/10/criticas/Sex-education_2084501626_9723727_660x371.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://1yazat78t1q1ticyv3i8g9il-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/the100pic.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://www.nocreasnada.com/wp-content/uploads/2018/11/2018-11-17_5bf0a27395c9f_shadowhunters.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://2.bp.blogspot.com/-XC_AXTvmzwo/WTTyUapHUuI/AAAAAAAAIu8/KiXaoE71fGYQ87OmrxrnAhFSUnMKb32eACLcB/s1600/originals-serie.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"}))),n.a.createElement("div",{className:"lautiflix__carousel__img column is-2-desktop is-4-touch"},n.a.createElement("div",{className:"childComp"},n.a.createElement(b,{bannerImage:"https://www.roastbrief.com.mx/wp-content/uploads/2018/05/roastbrief-trollhunters-la-serie-animada-de-guillermo-del-toro-780x405.jpg"}))))),n.a.createElement("div",{onClick:this.next,className:"lautiflix__carousel__control lautiflix__carousel__inline is-right-control"},n.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))))}}]),a}(n.a.Component)),b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.bannerImage;return n.a.createElement("div",{className:"image__carousel",style:{backgroundImage:"url(".concat(e,")")}},n.a.createElement("div",{className:"play_button"},n.a.createElement("div",{className:"icon"},n.a.createElement("center",null,n.a.createElement("div",{className:"icon_set"},n.a.createElement("i",{className:"material-icons icon"},"play_arrow"))))))}}]),a}(n.a.Component),v=h,_=(t(22),t(23),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"application"},n.a.createElement(d,null),n.a.createElement(p,null),n.a.createElement("div",{className:"lautiflix__container"},n.a.createElement(v,{idScroll:"id2190218",title:"Mi lista"}),n.a.createElement("br",null),n.a.createElement(v,{idScroll:"id2190216",title:"M\xe1s populares"}),n.a.createElement("br",null)))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e4d6990b.chunk.js.map