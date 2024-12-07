(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b4fc2ef"],{"0e8f":function(t,e,a){"use strict";a("20f6");var r=a("e8f2");e["a"]=Object(r["a"])("flex")},"4b85":function(t,e,a){},6109:function(t,e,a){"use strict";a.r(e);var r=a("fe81"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},"615b":function(t,e,a){},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var r=a("e8f2"),n=a("d9f7");e["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,r=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(a||[])}),s)}})},a722:function(t,e,a){"use strict";a("20f6");var r=a("e8f2");e["a"]=Object(r["a"])("layout")},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var r=a("5530"),n=(a("615b"),a("10d2")),i=a("297c"),s=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(i["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},d72e:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-space-around":"","fill-height":""}},[a("v-flex",[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("hr"),a("b",[a("center",[a("br"),t._v("Kanzler-Radio - Das Radio für die guten Freunde."),a("br"),t._v(" "),a("br")])],1),a("hr"),a("br"),a("br"),t._v(" Über 50.000 Radiostationen aus über 200 Ländern der Welt sind nur einen Mausklick entfernt. Da braucht es doch einen modernen Weltempfänger vom Kanzler."),a("br"),t._v(" Man kann ja nicht immer verreisen ;-)"),a("br"),a("br"),t._v(" Ein Dank geht an Alex Segler für die "),a("a",{attrs:{href:"https://github.com/segler-alex/radiobrowser-api-rust",target:"_blank"}},[t._v("Radio-Browser API")]),t._v(" die dafür sorgt, dass die Links zu den Radiostationen halbwegs aktuell sind."),a("br"),t._v(" Sollte mal ein Sender fehlen, kann man den "),a("a",{attrs:{href:"https://www.radio-browser.info/add",target:"_blank"}},[t._v("hier")]),t._v(" hinzufügen."),a("br"),a("br"),t._v(" Vielen Dank an "),a("a",{attrs:{href:"https://pschatzmann.ch",target:"_blank"}},[t._v("Phil Schatzmann")]),t._v(" für die schöne Weboberfläche die ich geringfügig erweitert habe."),a("br"),a("br"),t._v(" Das Ganze läuft auf einem sparsamen "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ESP32",target:"_blank"}},[t._v("ESP32 Mikrocontroller")]),t._v(" der im Betrieb nur ca. 1 Watt benötigt."),a("br"),t._v(" Wir brauchen das Geld schließlich für den nächsten Segeltörn!"),a("br"),a("br"),t._v(" Und für alle die noch ohne Kanzler-Radio sind, gibt es das Ganze im Webbrowser unter "),a("a",{attrs:{href:"https://kanzlerradio.github.io/",target:"_blank"}},[t._v("https://kanzlerradio.github.io/")]),t._v(". "),a("br"),a("br"),a("br"),a("b",[t._v("Viel Spaß und viele Grüße!")])])],1)],1)],1)],1)},n=[]},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("99af"),a("4de4"),a("a15b"),a("b64b"),a("2ca0"),a("498a");var r=a("2b0e");function n(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var r=a.props,n=a.data,i=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),e(r.tag,n,i)}})}},f820:function(t,e,a){"use strict";a.r(e);var r=a("d72e"),n=a("6109");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var s=a("2877"),o=a("6544"),d=a.n(o),c=a("b0af"),l=a("a523"),u=a("0e8f"),f=a("a722"),h=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=h.exports,d()(h,{VCard:c["a"],VContainer:l["a"],VFlex:u["a"],VLayout:f["a"]})},fe81:function(t,e){}}]);
//# sourceMappingURL=chunk-2b4fc2ef.d1aff3d9.js.map