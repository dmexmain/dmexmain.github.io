webpackJsonp([10],{"5Uxu":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"></path><path d="M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z"></path></svg>'},"5g6L":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("exGp"),n=a.n(s),i=a("Dd8w"),r=a.n(i),o=a("NYxO"),l=a("hPOY"),c=a.n(l),_=a("oBY/"),v=a.n(_),d=a("5Uxu"),p=a.n(d),w=a("vNdP"),h=a.n(w),g=a("DbQn"),u=a("nMr+"),m=a("pZ8v"),C=a("L7OI"),b=a("WleX"),f=a("22m4"),T=a("ooiH"),y=a("z4R7"),M=a("AYFd"),x=a("/eab"),S=a("i791"),k={name:"page-news",data:()=>({iconArrow:c.a,iconWarning:v.a,iconMore:p.a,iconTools:h.a,today:()=>{const e=new Date;return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}}),computed:r()({},Object(o.c)({isPopupShowing:"ui/isPopupShowing"})),mounted(){var e=this;return n()(function*(){e.$ga.page(e.$router)})()},components:{TheTokenSearchEtherscanMobile:S.a,TheMobileTokenSearch:M.a,TheTokenSearchResultNew:x.a,EBigNumber:g.a,EButton:u.a,EIcon:m.a,TheFooter:C.a,TheHeaderInner:b.a,TheHeaderNew:f.a,TheMenuSidebar:T.a,ThePopup:y.a}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-news",class:{"is-popup-showing":e.isPopupShowing}},[a("transition",{attrs:{name:"transition-header",duration:{enter:2e3,leave:600}}},[e.isPopupShowing?a("div",{staticClass:"page-news__header"},[a("the-header-inner")],1):e._e()]),e._v(" "),a("div",{staticClass:"page-news__root"},[a("div",{ref:"contentWrap",staticClass:"page-news__wrapp",attrs:{id:"page-news__wrapp"}},[a("the-header-new"),e._v(" "),a("div",{staticClass:"page-news__main"},[a("div",{staticClass:"page-news__main-wrapper"},[a("div",{staticClass:"page-news__main-content"},[a("div",{staticClass:"page-news__heading"},[e._v("DMEX News")]),e._v(" "),a("div",{staticClass:"page-news__date"},[e._v("Today "),a("span",[e._v(e._s(e.today()))])]),e._v(" "),a("div",{staticClass:"page-news__list"},[a("router-link",{staticClass:"page-news__list-item",attrs:{to:{name:"futures-contract"}}},[a("div",{staticClass:"page-news__list-item-point"},[a("e-icon",{attrs:{src:e.iconTools}})],1),e._v(" "),a("div",{staticClass:"page-news__list-date"},[e._v("\n                  June 12, 2019\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-headline"},[e._v("\n                  The first Futures Contract has officially launched on DMEX!\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-text"},[e._v("\n                  Symbol: ETHUSD\n                  "),a("br"),e._v("\n                  Margin: 5x\n                  "),a("br"),e._v("\n                  Expires: 1 July\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-readmore"},[e._v("\n                  Read more\n                  "),a("div",{staticClass:"page-news__list-readmore-icon"},[a("e-icon",{attrs:{src:e.iconArrow}})],1)])]),e._v(" "),a("router-link",{staticClass:"page-news__list-item",attrs:{to:{name:"dark-mode"}}},[a("div",{staticClass:"page-news__list-item-point"},[a("e-icon",{attrs:{src:e.iconTools}})],1),e._v(" "),a("div",{staticClass:"page-news__list-date"},[e._v("\n                  March 04, 2019\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-headline"},[e._v("\n                  Dark Mode now available\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-text"},[e._v("\n                  The possibility to switch between Light and Dark Mode is now live on the UI.\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-readmore"},[e._v("\n                  Read more\n                  "),a("div",{staticClass:"page-news__list-readmore-icon"},[a("e-icon",{attrs:{src:e.iconArrow}})],1)])]),e._v(" "),a("router-link",{staticClass:"page-news__list-item",attrs:{to:{name:"tradingview"}}},[a("div",{staticClass:"page-news__list-item-point"},[a("e-icon",{attrs:{src:e.iconWarning}})],1),e._v(" "),a("div",{staticClass:"page-news__list-date"},[e._v("\n                  December 14, 2018\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-headline"},[e._v("\n                  TradingView Chart\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-text"},[e._v("\n                  The TradingView chart is now integrated and live. This change should considerably improve your trading experience.\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-readmore"},[e._v("\n                  Read more\n                  "),a("div",{staticClass:"page-news__list-readmore-icon"},[a("e-icon",{attrs:{src:e.iconArrow}})],1)])]),e._v(" "),a("router-link",{staticClass:"page-news__list-item",attrs:{to:{name:"postsecond"}}},[a("div",{staticClass:"page-news__list-item-point"},[a("e-icon",{attrs:{src:e.iconTools}})],1),e._v(" "),a("div",{staticClass:"page-news__list-date"},[e._v("\n                  September 13, 2018\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-headline"},[e._v("\n                  Ledger Nano S wallet now supported\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-text"},[e._v("\n                  We are happy to announce that Ledger Nano S wallet is now supported on EtherMium! Hardware wallets provide an additional level of security for users. Your private keys are stored on a device without an internet connection. When you wish to perform a transaction, the transaction data is sent to the hardware device, where it is signed and returned to the application — this way your private key is never known outside of the hardware device. Trade safely from your hardware wallet!\n                ")]),e._v(" "),a("div",{staticClass:"page-news__list-readmore"},[e._v("\n                  Read more\n                  "),a("div",{staticClass:"page-news__list-readmore-icon"},[a("e-icon",{attrs:{src:e.iconArrow}})],1)])]),e._v(" "),a("div",{staticClass:"page-news__list-line"})],1),e._v(" "),e._m(0)])])]),e._v(" "),a("the-footer")],1)]),e._v(" "),e.isPopupShowing?a("the-popup"):e._e(),e._v(" "),e.isPopupShowing?a("the-menu-sidebar"):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-news__date"},[this._v("Project launch "),t("span",[this._v("November 19. 2017")])])}]};var z=a("VU/8")(k,P,!1,function(e){a("Fs6u")},null,null);t.default=z.exports},Fs6u:function(e,t){},"oBY/":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z"></path></svg>'},vNdP:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M430.9 393.4l-119.6-119-58.1-57.9-13.4-13.3c15.9-40.6 7.1-88.2-26.6-121.7-35.4-35.3-88.5-42.3-131-22.9l76.1 75.8-53.1 52.9-77.9-75.8C6.2 153.8 15 206.7 50.4 242c33.6 33.5 81.4 42.3 122.1 26.5l14.4 14.3L81.7 388c-7.6 5.7-7.6 19 1.9 26.6l43.8 43.7c7.6 7.6 19.1 7.6 26.7 0l96.1-112.4 113.4 112.9c7.1 7.1 17.7 7.1 24.8 0l40.7-40.6c8.9-7.1 8.9-19.5 1.8-24.8z"></path><path d="M494.4 216.6l-34.5-34.1c-2.2-2.2-5.8-2.2-8 0l-3.7 3.7-18.5-15.8s1.2-10-4.9-18.7c-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-34.1-33.9-69.7-51.4C296.2 55.7 271 48 241 48v29.7s28.7 16.6 45.1 29.7c16.3 13.1 16.8 59.5 16.8 59.5l-28.5 28.5 56.5 56.1 31-36.3c12.9-3.5 23.8-3.8 30.2-.3l13.7 13.3-9.6 9.5c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.1c2.2 2.2 5.8 2.2 8 0l55.7-55.2c2.1-2.2 2.1-5.8 0-7.9z"></path></svg>'}});
//# sourceMappingURL=10.3109d27a46dc4250e1b5.js.map