(function(e){function t(t){for(var c,i,o=t[0],s=t[1],u=t[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f7":function(e,t,n){},"0273":function(e,t,n){},"04a3":function(e,t,n){},"0ea1":function(e,t,n){},1862:function(e,t,n){},"24b7":function(e,t,n){e.exports=n.p+"img/widget.7785c728.png"},2530:function(e,t,n){},"2e84":function(e,t,n){"use strict";n("4d43")},"2ecd":function(e,t,n){},"312e":function(e,t,n){},"33e0":function(e,t,n){"use strict";n("b74d")},"36de":function(e,t,n){"use strict";n("04a3")},"4a87":function(e,t,n){"use strict";n("8e7c")},"4d43":function(e,t,n){},"4eb8":function(e,t,n){"use strict";n("0ea1")},"4f76":function(e,t,n){"use strict";n("01f7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var o=Object(c["g"])("MainPage");return Object(c["f"])(),Object(c["c"])(o)}function a(e,t,n,r,a,i){var o=Object(c["g"])("Header"),s=Object(c["g"])("MainPageBody"),u=Object(c["g"])("Footer");return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])(o),Object(c["e"])(s),Object(c["e"])(u)],64)}var i=n("a1d8"),o=n.n(i),s={class:"container"},u={class:"header"},l=Object(c["e"])("img",{src:o.a,alt:"logo",class:"header__logo"},null,-1);function b(e,t,n,r,a,i){var o=Object(c["g"])("HeaderNavigation"),b=Object(c["g"])("HeaderSearch"),d=Object(c["g"])("HeaderAuthorization");return Object(c["f"])(),Object(c["c"])("div",s,[Object(c["e"])("header",u,[l,Object(c["e"])(o),Object(c["e"])(b),Object(c["e"])(d)])])}var d={class:"header__search"},j=Object(c["e"])("input",{type:"text"},null,-1);function f(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("div",d,[j])}var O={name:"HederSearch"};n("61a5");O.render=f;var v=O,p={class:"header__nav"},g=Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Главная")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"О нас")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Участники")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Контакты")])],-1);function h(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("nav",p,[g])}var A={name:"HeaderNavigation"};n("e843");A.render=h;var m=A,w=n("6a45"),y=n.n(w),N={class:"header__autorization autorization"},P=Object(c["e"])("img",{src:y.a,alt:""},null,-1),B=Object(c["e"])("button",null,"Личный кабинет",-1);function x(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("div",N,[P,B])}var S={name:"HeaderAuthorization"};n("4eb8");S.render=x;var M=S,R={name:"Header",components:{HeaderSearch:v,HeaderNavigation:m,HeaderAuthorization:M}};n("5f8f");R.render=b;var C=R,Y={class:"content"};function G(e,t,n,r,a,i){var o=Object(c["g"])("Banner"),s=Object(c["g"])("SuccessModule"),u=Object(c["g"])("DirectionOfResearch"),l=Object(c["g"])("News");return Object(c["f"])(),Object(c["c"])("main",Y,[Object(c["e"])(o),Object(c["e"])(s),Object(c["e"])(u),Object(c["e"])(l)])}var H={class:"banner"},Q=Object(c["e"])("div",{class:"container"},[Object(c["e"])("div",{class:"banner__img"},[Object(c["e"])("h1",null,"Агротехнологии будущего")])],-1);function I(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("section",H,[Q])}var W={name:"Banner"};n("670c");W.render=I;var Z=W,F=n("a2b8"),q=n.n(F),J={class:"container"},K={class:"success-module"},L=Object(c["e"])("div",{class:"section-header"},[Object(c["e"])("h1",{class:"section-header-text"},"Успехи программы")],-1),T=Object(c["e"])("div",null,[Object(c["e"])("img",{src:q.a,alt:"",class:""})],-1),z=Object(c["e"])("div",null,[Object(c["e"])("img",{src:q.a,alt:"",class:""})],-1);function E(e,t,n,r,a,i){var o=Object(c["g"])("VueSlickCarousel");return Object(c["f"])(),Object(c["c"])("div",J,[Object(c["e"])("section",K,[L,Object(c["e"])(o,null,{default:Object(c["h"])((function(){return[T,z]})),_:1})])])}var U=n("a7ab"),k=n.n(U),X=(n("6a2c"),{name:"SuccessModule",components:{VueSlickCarousel:k.a}});n("2e84");X.render=E;var V=X,D={class:"container"},_=Object(c["d"])('<section class="direction-on-research"><div class="section-header"><h1 class="section-header-text">Направление исследований</h1></div><div class="directions"><div class="directions__description"><h2>Рожь как смысл жизни</h2><p>Раскрыто значение пищевой продукции из зерна озимой ржи, которая должна стать неотъемлемой частью здорового питания населения России. Зерно ржи включает богатейший спектр питательных веществ, благодаря чему ржаной хлеб -полноценный продукт питания для человека. </p></div><div class="directions__promo"><div class="direction__text"><h2>Рожь как смысл жизни</h2><p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p></div></div></div></section>',1);function $(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("div",D,[_])}var ee={name:"DirectionOfResearch"};n("33e0");ee.render=$;var te=ee,ne=n("585f"),ce=n.n(ne),re=n("de47"),ae=n.n(re),ie=n("d6d8"),oe=n.n(ie),se={class:"container"},ue=Object(c["e"])("section",{class:"news"},[Object(c["e"])("div",{class:"news"},[Object(c["e"])("div",{class:"news-filters-items"},[Object(c["e"])("div",{class:"news-filters-item"}),Object(c["e"])("div",{class:"news-filters-item"}),Object(c["e"])("div",{class:"news-filters-item"}),Object(c["e"])("div",{class:"news-filters-item"}),Object(c["e"])("div",{class:"news-filters-item"})]),Object(c["e"])("div",{class:"section-header"},[Object(c["e"])("h1",{class:"section-header-text"}," Новости программы")]),Object(c["e"])("div",{class:"news-items"},[Object(c["e"])("div",{class:"news-item"},[Object(c["e"])("img",{src:ce.a,alt:""}),Object(c["e"])("p",null,"Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно "),Object(c["e"])("div",null,[Object(c["e"])("p",null,"02.10.2020"),Object(c["e"])("button",null,"Узнать больше")])]),Object(c["e"])("div",{class:"news-item"},[Object(c["e"])("img",{src:ae.a,alt:""}),Object(c["e"])("p",null,"Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно "),Object(c["e"])("div",null,[Object(c["e"])("p",null,"02.10.2020"),Object(c["e"])("button",null,"Узнать больше")])]),Object(c["e"])("div",{class:"news-item"},[Object(c["e"])("img",{src:oe.a,alt:""}),Object(c["e"])("p",null,"Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно "),Object(c["e"])("div",null,[Object(c["e"])("p",null,"02.10.2020"),Object(c["e"])("button",null,"Узнать больше")])])])])],-1);function le(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("div",se,[ue])}var be={name:"News"};n("98a4");be.render=le;var de=be,je={name:"MainPageBody",components:{News:de,DirectionOfResearch:te,SuccessModule:V,Banner:Z}};n("722e");je.render=G;var fe=je,Oe={class:"container"},ve={class:"footer"};function pe(e,t,n,r,a,i){var o=Object(c["g"])("FooterSocialNetworks"),s=Object(c["g"])("FooterNavigation");return Object(c["f"])(),Object(c["c"])("div",Oe,[Object(c["e"])("footer",ve,[Object(c["e"])(o),Object(c["e"])(s)])])}var ge=n("24b7"),he=n.n(ge),Ae={class:"timWidget"},me=Object(c["e"])("img",{src:he.a,alt:""},null,-1);function we(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("div",Ae,[me])}var ye={name:"FooterSocialNetworks"};n("36de");ye.render=we;var Ne=ye,Pe={class:"footer__nav"},Be=Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Главная")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"О нас")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Участники")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#"},"Контакты")])],-1);function xe(e,t,n,r,a,i){return Object(c["f"])(),Object(c["c"])("nav",Pe,[Be])}var Se={name:"FooterNavigation"};n("e2f3");Se.render=xe;var Me=Se,Re={name:"Footer",components:{FooterNavigation:Me,FooterSocialNetworks:Ne}};n("4a87");Re.render=pe;var Ce=Re,Ye={name:"MainPage",components:{Header:C,MainPageBody:fe,Footer:Ce}};n("4f76");Ye.render=a;var Ge=Ye,He={name:"App",components:{MainPage:Ge}};n("64be");He.render=r;var Qe=He;Object(c["b"])(Qe).mount("#app")},"585f":function(e,t,n){e.exports=n.p+"img/news1.7b7b0d7c.png"},"5f8f":function(e,t,n){"use strict";n("2ecd")},"61a5":function(e,t,n){"use strict";n("2530")},"64be":function(e,t,n){"use strict";n("c894")},"670c":function(e,t,n){"use strict";n("312e")},"6a45":function(e,t){e.exports="data:image/png;base64,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"},"722e":function(e,t,n){"use strict";n("d571")},"891a":function(e,t,n){},"8e7c":function(e,t,n){},"98a4":function(e,t,n){"use strict";n("891a")},a1d8:function(e,t,n){e.exports=n.p+"img/logo.46cae1c6.png"},a2b8:function(e,t,n){e.exports=n.p+"img/Карусель.c2808a47.png"},b74d:function(e,t,n){},c894:function(e,t,n){},d571:function(e,t,n){},d6d8:function(e,t,n){e.exports=n.p+"img/news3.1d081116.png"},de47:function(e,t,n){e.exports=n.p+"img/news2.4e2c853a.png"},e2f3:function(e,t,n){"use strict";n("1862")},e843:function(e,t,n){"use strict";n("0273")}});
//# sourceMappingURL=app.247e856a.js.map