webpackJsonp([0,2],[,function(e,t,s){s(6);var n=s(0)(s(10),s(4),null,null);e.exports=n.exports},,function(e,t,s){s(7);var n=s(0)(s(11),s(5),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("基础")]),e._v(" "),s("my-select",{attrs:{options:e.options}}),e._v(" "),s("h1",[e._v("禁用")]),e._v(" "),s("my-select",{attrs:{options:e.options,disabled:""}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select"},[s("div",{staticClass:"select-input",on:{click:e.handleSelect}},[s("input",{staticClass:"select-input__box",attrs:{type:"text",placeholder:"请选择",readonly:!e.editable},domProps:{value:e.selected}}),e._v(" "),s("i",{staticClass:"select-input__caret"})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"select-content"},[s("ul",{staticClass:"select-content__wrapper"},e._l(e.options,function(t){return s("li",{staticClass:"select-content__item",attrs:{value:t.value},on:{click:function(s){s.stopPropagation(),e.selectItem(t.value)}}},[s("span",[e._v(e._s(t.text))])])}))])])},staticRenderFns:[]}},function(e,t){},function(e,t){},,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(3),i=s.n(n);t.default={name:"app",data:function(){return{options:[{text:"a",value:"a"},{text:"b",value:"b"},{text:"c",value:"c"}]}},components:{MySelect:i.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"my-select",props:{options:{type:Array,required:!0},editable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{visible:!1,selected:""}},methods:{handleSelect:function(){this.disabled||(this.visible=!this.visible)},selectItem:function(e){this.selected=e,this.visible=!1}},created:function(){var e=this;document.addEventListener("click",function(t){e.$el.contains(t.target)||(e.visible=!1)})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),i=s.n(n),a=s(1),l=s.n(a);new i.a({el:"#app",template:"<App/>",components:{App:l.a}})}],[12]);
//# sourceMappingURL=app.86575f9c04796c01eb0b.js.map