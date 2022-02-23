import{a6 as q,r as $,d as X,m as S,q as W,a as f,o as r,g as p,H as T,I as E,c as P,w as i,h as n,b as s,R as d,z as D,y as c,a4 as Y,k as K,P as Q,B as ee,E as le}from"./vendor.c0366ad2.js";import"./axios.92a82b3e.js";import{e as ae}from"./index.c63351a7.js";var Z={exports:{}};(function(I,B){(function(V,y){y(B,I)})(q,function(V,y){var k={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function L(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function h(m){try{delete window[m]}catch{window[m]=void 0}}function C(m){var u=document.getElementById(m);u&&document.getElementsByTagName("head")[0].removeChild(u)}function J(m){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],b=m,_=u.timeout||k.timeout,A=u.jsonpCallback||k.jsonpCallback,w=void 0;return new Promise(function(G,a){var t=u.jsonpCallbackFunction||L(),v=A+"_"+t;window[t]=function(g){G({ok:!0,json:function(){return Promise.resolve(g)}}),w&&clearTimeout(w),C(v),h(t)},b+=b.indexOf("?")===-1?"?":"&";var o=document.createElement("script");o.setAttribute("src",""+b+A+"="+t),u.charset&&o.setAttribute("charset",u.charset),u.nonce&&o.setAttribute("nonce",u.nonce),u.referrerPolicy&&o.setAttribute("referrerPolicy",u.referrerPolicy),o.id=v,document.getElementsByTagName("head")[0].appendChild(o),w=setTimeout(function(){a(new Error("JSONP request to "+m+" timed out")),h(t),C(v),window[t]=function(){h(t)}},_),o.onerror=function(){a(new Error("JSONP request to "+m+" failed")),h(t),C(v),w&&clearTimeout(w)}})}y.exports=J})})(Z,Z.exports);var te=Z.exports;const ue=$([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A Select \u7684\u503C\u3002 (\u9700\u4F20\u5165 options \u5C5E\u6027\uFF0C\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u9009\u9879\u90FD\u5E94\u8BE5\u6709value\u3001label\u5C5E\u6027)",options:[{value:"LiJiang",label:"\u4E3D\u6C5F"},{value:"SanYa",label:"\u4E09\u4E9A"},{value:"HuangShan",label:"\u9EC4\u5C71"},{value:"JiuZhaiGou",label:"\u4E5D\u5BE8\u6C9F"},{value:"GuiLinShanShui",label:"\u6842\u6797\u5C71\u6C34"},{value:"GuLangYu",label:"\u9F13\u6D6A\u5C7F"}],components:[{value:"",dropdownClass:"test-dropdown"}],template:`    <template>
      <div class='select-demo'>
        <w-select v-model='selectValue' :options='options' />
        <p>{{ selectValue }}</p>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            options:[
              { value: 'LiJiang', label: '\u4E3D\u6C5F' }, { value: 'SanYa', label: '\u4E09\u4E9A' },
              { value: 'HuangShan', label: '\u9EC4\u5C71' },{ value: 'JiuZhaiGou', label: '\u4E5D\u5BE8\u6C9F' },
              { value: 'GuiLinShanShui', label: '\u6842\u6797\u5C71\u6C34' },
              { value: 'GuLangYu', label: '\u9F13\u6D6A\u5C7F' }
            ],
            selectValue:''
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const options = [
            { value: 'LiJiang', label: '\u4E3D\u6C5F' }, { value: 'SanYa', label: '\u4E09\u4E9A' },
            { value: 'HuangShan', label: '\u9EC4\u5C71' },{ value: 'JiuZhaiGou', label: '\u4E5D\u5BE8\u6C9F' },
            { value: 'GuiLinShanShui', label: '\u6842\u6797\u5C71\u6C34' },
            { value: 'GuLangYu', label: '\u9F13\u6D6A\u5C7F' }
          ];
          const selectValue = ref('');
          return{ options, selectValue };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        > .w-select {
          margin: 1em;
        }
      }
    </style>`},{title:"\u591A\u9009\u6A21\u5F0F",desc:`\u8BBE\u7F6E multiple \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EF\u4EE5\u591A\u9009\u3002\u591A\u9009\u6A21\u5F0F\u4E0B\u3002<br>
      \u8BBE\u7F6E max-tag-count \u5C5E\u6027\uFF0C\u6298\u53E0\u65F6\u663E\u793A\u591A\u5C11\u4E2ATag\uFF0C\u9ED8\u8BA4\u4E3A0(\u4E0D\u6298\u53E0\u5DF2\u9009\u9879)\u3002
      \u8BBE\u7F6E max-tag-placeholder \u5C5E\u6027\uFF0C\u6298\u53E0\u65F6\u9690\u85CF\u7684Tag\u7684\u6587\u672C\u5185\u5BB9\u3002`,multiple:!0,options:[{value:"Jack",label:"Jack"},{value:"Tom",label:"Tom"},{value:"Bill",label:"Bill",disabled:!0},{value:"Frank",label:"Frank"},{value:"Steve",label:"Steve"}],placeholder:"\u8BF7\u9009\u62E9\u7C7B\u522B",components:[{title:"\u9ED8 \u8BA4",value:["Frank","Tom"]},{title:"\u9009\u4E24\u4E2A\u4EE5\u4E0A\u5C31\u6298\u53E0",maxTagCount:2,value:["Frank","Tom"]}],template:`    <template>
      <div class='select-demo'>
        <div v-for='item in list'>
          <p class='title'>{{ item.title}} </p>
          <w-select v-model='item.value' :options='options'
            multiple :max-tag-count='item.maxTagCount' placeholder='\u8BF7\u9009\u62E9\u7C7B\u522B' />
          <p>{{ item.value }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            options: [
              { value: 'Jack', label: 'Jack' }, 
              { value: 'Tom', label: 'Tom' },
              { value: 'Bill', label: 'Bill', disabled: true },
              { value: 'Frank', label: 'Frank' },
              { value: 'Steve', label: 'Steve' }
            ],
            list: [
              {
                title: '\u9ED8 \u8BA4',
                value: ['fish', 'chicken']
              },
              {
                title: '\u9009\u4E24\u4E2A\u4EE5\u4E0A\u5C31\u6298\u53E0',maxTagCount:2,
                value: ['fish', 'chicken']
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const options = [
            { value: 'Jack', label: 'Jack' }, 
            { value: 'Tom', label: 'Tom' },
            { value: 'Bill', label: 'Bill', disabled: true },
            { value: 'Frank', label: 'Frank' },
            { value: 'Steve', label: 'Steve' }  
          ];
          const list = ref([
            {
              title: '\u9ED8 \u8BA4',
              value: ['fish','chicken']
            },
            {
              title: '\u9009\u4E24\u4E2A\u4EE5\u4E0A\u5C31\u6298\u53E0',
              maxTagCount: 2,
              value: ['fish','chicken']
            }
          ]);
          return { options, list };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        > div {
          display: flex;
          flex-direction: column;
          text-align: center;
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u6A21\u677F",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A Select \u7684\u503C\u3002 (\u9700\u4F20\u5165 options \u5C5E\u6027\uFF0C\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u9009\u9879\u90FD\u5E94\u8BE5\u6709value\u3001label\u5C5E\u6027)",customLabel:!0,options:[{value:"LiJiang",label:"\u4E3D\u6C5F",custom:`
          <span clsss='f-left'>\u4E3D\u6C5F</span><span clsss='f-right'>LiJiang</span>`},{value:"SanYa",label:"\u4E09\u4E9A",disabled:!0,custom:`
          <span clsss='f-left'>\u4E09\u4E9A</span><span clsss='f-right'>SanYa</span>`},{value:"HuangShan",label:"\u9EC4\u5C71",custom:`
          <span clsss='f-left'>\u9EC4\u5C71</span><span clsss='f-right'>HuangShan</span>`},{value:"JiuZhaiGou",label:"\u4E5D\u5BE8\u6C9F",custom:`
          <span clsss='f-left'>\u4E5D\u5BE8\u6C9F</span><span clsss='f-right'>JiuZhaiGou</span>`},{value:"GuiLinShanShui",label:"\u6842\u6797\u5C71\u6C34",custom:`
          <span clsss='f-left'>\u6842\u6797\u5C71\u6C34</span><span clsss='f-right'>GuiLinShanShui</span>`},{value:"GuLangYu",label:"\u9F13\u6D6A\u5C7F",custom:`
          <span clsss='f-left'>\u9F13\u6D6A\u5C7F</span><span clsss='f-right'>GuLangYu</span>`}],components:[{value:""},{value:[],multiple:!0}],placeholder:"\u8BF7\u9009\u62E9\u5730\u540D",template:`    <template>
      <div class='select-demo'>
        <div v-for='item in list'>
          <w-select v-model='item.value' :multiple='item.multiple' :options='options' 
            placeholder='\u8BF7\u9009\u62E9\u5730\u540D' />
          <p>{{item.value}}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            options: [
              {
                value:'LiJiang',label:'\u4E3D\u6C5F',
                custom:"<span clsss='f-left'>\u4E3D\u6C5F</span><span clsss='f-right'>LiJiang</span>"
              },
              {
                value:'SanYa',label:'\u4E09\u4E9A',disabled:true,
                custom:"<span clsss='f-left'>\u4E09\u4E9A</span><span clsss='f-right'>SanYa</span>"
              },
              {
                value:'HuangShan',label:'\u9EC4\u5C71',
                custom:"<span clsss='f-left'>\u9EC4\u5C71</span><span clsss='f-right'>HuangShan</span>"
              },
              {
                value:'JiuZhaiGou',label:'\u4E5D\u5BE8\u6C9F',
                custom:"<span clsss='f-left'>\u4E5D\u5BE8\u6C9F</span><span clsss='f-right'>JiuZhaiGou</span>"
              },
              {
                value:'GuiLinShanShui',label:'\u6842\u6797\u5C71\u6C34',
                custom:"<span clsss='f-left'>\u6842\u6797\u5C71\u6C34</span><span clsss='f-right'>GuiLinShanShui</span>"
              },
            ],
            list: [
              { value: '' },
              { value: [], multiple: true }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const options = [
            {
              value: 'LiJiang',label:'\u4E3D\u6C5F',
              custom: "<span clsss='f-left'>\u4E3D\u6C5F</span><span clsss='f-right'>LiJiang</span>"
            },
            {
              value: 'SanYa',label:'\u4E09\u4E9A',disabled:true,
              custom: "<span clsss='f-left'>\u4E09\u4E9A</span><span clsss='f-right'>SanYa</span>"
            },
            {
              value: 'HuangShan',label:'\u9EC4\u5C71',
              custom: "<span clsss='f-left'>\u9EC4\u5C71</span><span clsss='f-right'>HuangShan</span>"
            },
            {
              value: 'JiuZhaiGou',label:'\u4E5D\u5BE8\u6C9F',
              custom: "<span clsss='f-left'>\u4E5D\u5BE8\u6C9F</span><span clsss='f-right'>JiuZhaiGou</span>"
            },
            {
              value: 'GuiLinShanShui',label:'\u6842\u6797\u5C71\u6C34',
              custom: "<span clsss='f-left'>\u6842\u6797\u5C71\u6C34</span><span clsss='f-right'>GuiLinShanShui</span>"
            }
          ];
          const list = reactive([
            { value: '' },
            { value: [], multiple: true }
          ]);
          return { options, list };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        > div {
          display: flex;
          flex-direction: column;
          text-align: center;
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u53EF\u641C\u7D22",desc:`\u8BBE\u7F6E filterable \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EF\u641C\u7D22\u3002\u9ED8\u8BA4\u641C\u7D22\u60C5\u51B5\u4E0B\uFF0C\u662F\u4F1A\u627E\u51FA\u6240\u6709 label \u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002<br>
      \u5982\u679C\u5E0C\u671B\u4F7F\u7528\u5176\u4ED6\u7684\u641C\u7D22\u903B\u8F91\uFF0C\u4F7F\u7528 filter-method \u4E3A\u4E00\u4E2AFunction\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002`,filterable:!0,customFilter:!0,isCustomFilter:!1,clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u83DC\u540D",options:[{value:"\u6865\u5934\u6392\u9AA8",label:"\u6865\u5934\u6392\u9AA8"},{value:"\u849C\u9999\u83B2\u85D5\u867E",label:"\u849C\u9999\u83B2\u85D5\u867E",disabled:!0},{value:"\u98D8\u9999\u62CC\u97621",label:"\u98D8\u9999\u62CC\u97621"},{value:"\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D",label:"\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D"},{value:"\u9EBB\u9171\u51E4\u5C3E",label:"\u9EBB\u9171\u51E4\u5C3E"},{value:"\u9ED1\u6912\u7206\u6D77\u7687",label:"\u9ED1\u6912\u7206\u6D77\u7687"},{value:"\u87F9\u7C89\u70E9\u9C7C\u809A",label:"\u87F9\u7C89\u70E9\u9C7C\u809A",disabled:!0},{value:"\u9ED1\u6912\u6C41\u725B\u6392",label:"\u9ED1\u6912\u6C41\u725B\u6392"},{value:"\u9C8D\u53C2\u7FC5\u809A\u66F41",label:"\u9C8D\u53C2\u7FC5\u809A\u66F41"},{value:"\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505",label:"\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505"},{value:"\u5B63\u8C46\u7092\u725B\u67F3",label:"\u5B63\u8C46\u7092\u725B\u67F3"},{value:"\u9ED1\u6912\u725B\u67F3",label:"\u9ED1\u6912\u725B\u67F3",disabled:!0}],components:[{value:"\u9ED1\u6912\u6C41\u725B\u6392"},{value:["\u9ED1\u6912\u6C41\u725B\u6392","\u9EBB\u9171\u51E4\u5C3E"],multiple:!0}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <span>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5(\u9700\u5168\u5339\u914D)\uFF1A</span>
          <w-checkbox v-model:checked='customFilter' border>
            \u4F7F\u7528
          </w-checkbox>
        </div>
        <div>
          <div v-for='item in list'>
            <w-select  v-model='item.value' :multiple='item.multiple' clearable
              :options='options' filterable :filter-method="customFilter?filterMethod:''"
              placeholder='\u8BF7\u9009\u62E9\u83DC\u540D' />
            <p>{{item.value}}</p>
          </div>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            options:[
              { value: '\u6865\u5934\u6392\u9AA8', label: '\u6865\u5934\u6392\u9AA8' },
              { value: '\u849C\u9999\u83B2\u85D5\u867E', label: '\u849C\u9999\u83B2\u85D5\u867E', disabled: true },
              { value: '\u98D8\u9999\u62CC\u97621', label: '\u98D8\u9999\u62CC\u97621' },
              { value: '\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D', label: '\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D' },
              { value: '\u9EBB\u9171\u51E4\u5C3E', label: '\u9EBB\u9171\u51E4\u5C3E' }, { value: '\u9ED1\u6912\u7206\u6D77\u7687', label: '\u9ED1\u6912\u7206\u6D77\u7687' },
              { value: '\u87F9\u7C89\u70E9\u9C7C\u809A', label: '\u87F9\u7C89\u70E9\u9C7C\u809A', disabled: true }, { value: '\u9ED1\u6912\u6C41\u725B\u6392', label: '\u9ED1\u6912\u6C41\u725B\u6392' },
              { value: '\u9C8D\u53C2\u7FC5\u809A\u66F41', label: '\u9C8D\u53C2\u7FC5\u809A\u66F41' }, { value: '\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505', label: '\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505' },
              { value: '\u5B63\u8C46\u7092\u725B\u67F3', label: '\u5B63\u8C46\u7092\u725B\u67F3' }, { value: '\u9ED1\u6912\u725B\u67F3', label: '\u9ED1\u6912\u725B\u67F3', disabled: true }
            ],
            list: [
              { value: '\u9ED1\u6912\u6C41\u725B\u6392' },
              { value: ['\u9ED1\u6912\u6C41\u725B\u6392', '\u9EBB\u9171\u51E4\u5C3E' ], multiple: true }
            ],
            customFilter: false
          }         
        },
        methods: {
          filterMethod(val) {
            return val ? this.options.filter(item => item.label === val) : this.options;
          } 
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const options = [
            { value: '\u6865\u5934\u6392\u9AA8', label: '\u6865\u5934\u6392\u9AA8' },
            { value: '\u849C\u9999\u83B2\u85D5\u867E', label: '\u849C\u9999\u83B2\u85D5\u867E', disabled: true },
            { value: '\u98D8\u9999\u62CC\u97621', label: '\u98D8\u9999\u62CC\u97621' },
            { value: '\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D', label: '\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D' },
            { value: '\u9EBB\u9171\u51E4\u5C3E', label: '\u9EBB\u9171\u51E4\u5C3E' }, { value: '\u9ED1\u6912\u7206\u6D77\u7687', label: '\u9ED1\u6912\u7206\u6D77\u7687' },
            { value: '\u87F9\u7C89\u70E9\u9C7C\u809A', label: '\u87F9\u7C89\u70E9\u9C7C\u809A', disabled: true }, { value: '\u9ED1\u6912\u6C41\u725B\u6392', label: '\u9ED1\u6912\u6C41\u725B\u6392' },
            { value: '\u9C8D\u53C2\u7FC5\u809A\u66F41', label: '\u9C8D\u53C2\u7FC5\u809A\u66F41' }, { value: '\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505', label: '\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505' },
            { value: '\u5B63\u8C46\u7092\u725B\u67F3', label: '\u5B63\u8C46\u7092\u725B\u67F3' }, { value: '\u9ED1\u6912\u725B\u67F3', label: '\u9ED1\u6912\u725B\u67F3', disabled: true }
          ],
          list = ref([
            { value: '\u9ED1\u6912\u6C41\u725B\u6392' },
            { value: ['\u9ED1\u6912\u6C41\u725B\u6392', '\u9EBB\u9171\u51E4\u5C3E' ], multiple: true }
          ]),
          customFilter = ref(false),
          filterMethod = (val) => {
            return val ? options.filter(item => item.label === val) : options; 
          };
          return { options, list, customFilter, filterMethod };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: flex;
        flex-direction: column;
        > .options {
          display: flex;
          align-items: center;
          margin: 1em;
        }
        > div {
          display: flex;
          text-align: center;    
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u4FDD\u7559\u5173\u952E\u5B57",desc:"\u5F53\u53EF\u641C\u7D22\u5E76\u4E14\u662F\u591A\u9009\u65F6\uFF0C\u8BBE\u7F6E reserve-keyword \u5C5E\u6027\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD\u548C\u641C\u7D22\u9009\u9879\uFF0C\u9ED8\u8BA4 false (\u4E0D\u4FDD\u7559)\u3002",filterable:!0,clearable:!0,toggleReserveKeyword:!0,reserveKeyword:!0,placeholder:"\u8BF7\u9009\u62E9\u852C\u83DC",options:[{value:"\u80E1\u841D\u535C",label:"1-\u80E1\u841D\u535C"},{value:"\u8C46\u85AF",label:"1-\u8C46\u85AF"},{value:"\u751F\u59DC",label:"1-\u751F\u59DC"},{value:"\u5C71\u836F",label:"1-\u5C71\u836F"},{value:"\u828B\u5934",label:"1-\u828B\u5934"},{value:"\u5927\u849C",label:"1-\u5927\u849C"},{value:"\u51AC\u74DC",label:"2-\u51AC\u74DC"},{value:"\u5357\u74DC",label:"2-\u5357\u74DC"},{value:"\u8304\u5B50",label:"2-\u8304\u5B50"},{value:"\u897F\u7EA2\u67FF",label:"2-\u897F\u7EA2\u67FF"},{value:"\u7389\u7C73",label:"2-\u7389\u7C73"},{value:"\u9999\u83C7",label:"3-\u9999\u83C7"},{value:"\u6728\u8033",label:"3-\u6728\u8033"},{value:"\u53E3\u8611",label:"3-\u53E3\u8611"}],components:[{value:[],multiple:!0}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <span>\u4FDD\u7559\u5173\u952E\u5B57\uFF1A</span>
          <w-checkbox v-model:checked='reserveKeyword' border>
            \u662F\u7684
          </w-checkbox>
        </div>
        <div>
          <w-select v-model='multipleValue' multiple clearable 
          :options='options' filterable placeholder='\u8BF7\u9009\u62E9\u852C\u83DC' />
          <p>{{ multipleValue }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            options:[
              { value: '\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '1-\u8C46\u85AF' }, { value: '\u751F\u59DC', label: '1-\u751F\u59DC' },
              { value: '\u5C71\u836F', label: '1-\u5C71\u836F' }, { value: '\u828B\u5934', label: '1-\u828B\u5934' }, { value: '\u5927\u849C', label: '1-\u5927\u849C' },
              { value: '\u51AC\u74DC', label: '2-\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '2-\u5357\u74DC' }, { value: '\u8304\u5B50', label: '2-\u8304\u5B50' },
              { value: '\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' }, { value: '\u7389\u7C73', label: '2-\u7389\u7C73' },
              { value: '\u9999\u83C7', label: '3-\u9999\u83C7' }, { value: '\u6728\u8033', label: '3-\u6728\u8033' }, { value: '\u53E3\u8611', label: '3-\u53E3\u8611' }
            ],
            multipleValue: [],
            reserveKeyword: true
          }         
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const options = [
            { value: '\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '1-\u8C46\u85AF' }, { value: '\u751F\u59DC', label: '1-\u751F\u59DC' },
            { value: '\u5C71\u836F', label: '1-\u5C71\u836F' }, { value: '\u828B\u5934', label: '1-\u828B\u5934' }, { value: '\u5927\u849C', label: '1-\u5927\u849C' },
            { value: '\u51AC\u74DC', label: '2-\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '2-\u5357\u74DC' }, { value: '\u8304\u5B50', label: '2-\u8304\u5B50' },
            { value: '\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' }, { value: '\u7389\u7C73', label: '2-\u7389\u7C73' },
            { value: '\u9999\u83C7', label: '3-\u9999\u83C7' }, { value: '\u6728\u8033', label: '3-\u6728\u8033' }, { value: '\u53E3\u8611', label: '3-\u53E3\u8611' }
          ],
          multipleValue = ref([]),
          reserveKeyword = ref(true);
          return { options, multipleValue, reserveKeyword };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        flex-direction: column;
        > .options {
          align-items: center;
          margin: 1em;
        }
        > div {
          display: flex;
          &:not(.options) {
            flex-direction: column;
            text-align: center;
          }
          > .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u9650\u5236\u53EF\u9009\u6570\u91CF",desc:"\u5F53\u53EF\u641C\u7D22\u5E76\u4E14\u662F\u591A\u9009\u65F6\uFF0C\u8BBE\u7F6E max-count \u5C5E\u6027\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD\u548C\u641C\u7D22\u9009\u9879\uFF0C\u9ED8\u8BA4 false (\u4E0D\u4FDD\u7559)\u3002",filterable:!0,clearable:!0,toggleMaxCount:!0,maxCount:0,placeholder:"\u8BF7\u9009\u62E9\u852C\u83DC",options:[{value:"\u80E1\u841D\u535C",label:"1-\u80E1\u841D\u535C"},{value:"\u8C46\u85AF",label:"1-\u8C46\u85AF"},{value:"\u751F\u59DC",label:"1-\u751F\u59DC",disabled:!0},{value:"\u5C71\u836F",label:"1-\u5C71\u836F"},{value:"\u828B\u5934",label:"1-\u828B\u5934"},{value:"\u5927\u849C",label:"1-\u5927\u849C"},{value:"\u51AC\u74DC",label:"2-\u51AC\u74DC",disabled:!0},{value:"\u5357\u74DC",label:"2-\u5357\u74DC"},{value:"\u8304\u5B50",label:"2-\u8304\u5B50"},{value:"\u897F\u7EA2\u67FF",label:"2-\u897F\u7EA2\u67FF"},{value:"\u7389\u7C73",label:"2-\u7389\u7C73"},{value:"\u9999\u83C7",label:"3-\u9999\u83C7"},{value:"\u6728\u8033",label:"3-\u6728\u8033"},{value:"\u53E3\u8611",label:"3-\u53E3\u8611"}],components:[{value:[],multiple:!0}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <span>\u6700\u5927\u53EF\u9009\u6570\uFF1A</span>
          <w-radio-group v-model:checked='maxCount'>
            <w-radio :value='0'>\u4E0D\u9650</w-radio>
            <w-radio :value='3'>3\u4E2A</w-radio>
          </w-radio-group>
        </div>
        <div>
          <w-select v-model='multipleValue' multiple clearable
            :options='options' filterable placeholder='\u8BF7\u9009\u62E9\u852C\u83DC' />
          <p>{{ multipleValue }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            options:[
              { value: '\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '1-\u8C46\u85AF' }, { value: '\u751F\u59DC', label: '1-\u751F\u59DC', disabled: true },
              { value: '\u5C71\u836F', label: '1-\u5C71\u836F' }, { value: '\u828B\u5934', label: '1-\u828B\u5934' }, { value: '\u5927\u849C', label: '1-\u5927\u849C' },
              { value: '\u51AC\u74DC', label: '2-\u51AC\u74DC', disabled: true }, { value: '\u5357\u74DC', label: '2-\u5357\u74DC' }, { value: '\u8304\u5B50', label: '2-\u8304\u5B50' },
              { value: '\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' }, { value: '\u7389\u7C73', label: '2-\u7389\u7C73' },
              { value: '\u9999\u83C7', label: '3-\u9999\u83C7' }, { value: '\u6728\u8033', label: '3-\u6728\u8033' }, { value: '\u53E3\u8611', label: '3-\u53E3\u8611' }
            ],
            multipleValue: [],
            maxCount: 0
          }         
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const options = [
            { value: '\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '1-\u8C46\u85AF' }, { value: '\u751F\u59DC', label: '1-\u751F\u59DC', disabled: true },
            { value: '\u5C71\u836F', label: '1-\u5C71\u836F' }, { value: '\u828B\u5934', label: '1-\u828B\u5934' }, { value: '\u5927\u849C', label: '1-\u5927\u849C' },
            { value: '\u51AC\u74DC', label: '2-\u51AC\u74DC', disabled: true }, { value: '\u5357\u74DC', label: '2-\u5357\u74DC' }, { value: '\u8304\u5B50', label: '2-\u8304\u5B50' },
            { value: '\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' }, { value: '\u7389\u7C73', label: '2-\u7389\u7C73' },
            { value: '\u9999\u83C7', label: '3-\u9999\u83C7' }, { value: '\u6728\u8033', label: '3-\u6728\u8033' }, { value: '\u53E3\u8611', label: '3-\u53E3\u8611' }
          ];
          const multipleValue = ref([]);
          const maxCount = ref(0);
          return { options, multipleValue, maxCount };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        flex-direction: column;
        > .options {
          align-items: center;
          margin: 1em;
        }
        > div {
          display: flex;
          &:not(.options) {
            flex-direction: column;
            text-align: center;
          }
          > .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u66F4\u591A\u914D\u7F6E",desc:"\u53EF\u901A\u8FC7\u672C\u4F8B\u5B50\u6D4B\u8BD5\u76F8\u5173\u7684\u53C2\u6570\u3002\u5177\u4F53\u53C2\u6570\u7684\u4FE1\u606F\u53EF\u4EE5\u5728 Select \u4E0B\u62C9\u9009\u62E9 \u5C5E\u6027\u91CC\u67E5\u770B\u3002",animate:"fold",placement:"bottom",clearable:!0,filterable:!0,appendToBody:!1,showArrow:!0,visibleArrow:!0,disabled:!1,hideSelectLabel:!1,bordered:!0,listHeight:270,width:230,labelInValue:!1,placeholder:"\u8BF7\u9009\u62E9\u4F53\u80B2\u9879\u76EE",options:[{value:1,label:"\u7530\u5F84"},{value:2,label:"\u8D5B\u8247"},{value:3,label:"\u7FBD\u6BDB\u7403"},{value:4,label:"\u7BEE\u7403"},{value:5,label:"\u62F3\u51FB"},{value:6,label:"\u81EA\u884C\u8F66"},{value:7,label:"\u6C34\u4E0A\u9879\u76EE"},{value:8,label:"\u8DC6\u62F3\u9053"},{value:"9",label:"\u4E52\u4E53\u7403"},{value:"10",label:"\u5C04\u51FB"},{value:"11",label:"\u94C1\u4EBA\u4E09\u9879"},{value:"12",label:"\u4E3E\u91CD"},{value:"13",label:"\u9A6C\u62C9\u677E"}],components:[{value:3},{value:[3,1,"9","12"],multiple:!0}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <div>
            <span>\u53F3\u8FB9\u7BAD\u5934\uFF1A</span>
            <w-radio-group v-model:checked='showArrow'>
              <w-radio :value='true'>\u663E\u793A</w-radio>
              <w-radio :value='false'>\u9690\u85CF</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u7BAD\u5934\uFF1A</span>
            <w-radio-group v-model:checked='visibleArrow'>
              <w-radio :value='true'>\u663E\u793A</w-radio>
              <w-radio :value='false'>\u9690\u85CF</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u6E05\u7A7A\u6309\u94AE\uFF1A</span>
            <w-radio-group v-model:checked='clearable'>
              <w-radio :value='true'>\u663E\u793A</w-radio>
              <w-radio :value='false'>\u9690\u85CF</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u662F\u5426\u7981\u7528\uFF1A</span>
            <w-radio-group v-model:checked='disabled'>
              <w-radio :value='true'>\u662F</w-radio>
              <w-radio :value='false'>\u5426</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u662F\u5426\u6709\u8FB9\u6846\uFF1A</span>
            <w-radio-group v-model:checked='bordered'>
              <w-radio :value='true'>\u662F</w-radio>
              <w-radio :value='false'>\u5426</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u9009\u4E2D\u9690\u85CF\u9009\u9879\uFF1A</span>
            <w-radio-group v-model:checked='hideSelectLabel'>
              <w-radio :value='true'>\u662F</w-radio>
              <w-radio :value='false'>\u5426</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u52A8\u753B\uFF1A</span>
            <w-radio-group v-model:checked='animate'>
              <w-radio value='fold'>\u6298\u53E0</w-radio>
              <w-radio value='fade'>\u6DE1\u5165</w-radio>
              <w-radio value='zoom'>\u7F29\u653E</w-radio>
              <w-radio value='slide'>\u6ED1\u52A8</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u4F4D\u7F6E\uFF1A</span>
            <w-radio-group v-model:checked='placement'>
              <w-radio value='bottom'>\u4E0B\u65B9</w-radio>
              <w-radio value='top'>\u4E0A\u65B9</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u5728body\u4E0B\uFF1A</span>
            <w-radio-group v-model:checked='appendToBody'>
              <w-radio :value='true'>\u662F</w-radio>
              <w-radio :value='false'>\u5426</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u9AD8\u5EA6\uFF1A</span>
            <w-radio-group v-model:checked='listHeight'>
              <w-radio :value='270'>270px</w-radio>
              <w-radio :value='160'>160px</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u83DC\u5355\u5BBD\u5EA6\uFF1A</span>
            <w-radio-group v-model:checked='width'>
              <w-radio :value='230'>230px</w-radio>
              <w-radio :value='180'>180px</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u8FD4\u56DE\u6570\u636E\uFF1A</span>
            <w-radio-group v-model:checked='labelInValue'>
              <w-radio :value='false'>value</w-radio>
              <w-radio :value='true'>label-value</w-radio>
            </w-radio-group>
          </div>
        </div>
        <div class='select'>
          <w-select v-for='item in list' v-model='item.value' :multiple='item.multiple' 
            :options='options' filterable :animate='animate' :placement='placement' 
            :clearable='clearable' :append-to-body='appendToBody' :show-arrow='showArrow'
            :visible-arrow='visibleArrow' :disabled='disabled' :hide-select-label='hideSelectLabel'
            :bordered='bordered' :list-height='listHeight' :width='width' placeholder='\u8BF7\u9009\u62E9\u4F53\u80B2\u9879\u76EE' />
          <br>
          <p>{{ multipleValue }}</p>
        </div>  
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            options:[
              { value: 1, label: '\u7530\u5F84' }, { value: 2, label: '\u8D5B\u8247' },
              { value: 3, label: '\u7FBD\u6BDB\u7403' }, { value: 4, label: '\u7BEE\u7403' },
              { value: 5, label: '\u62F3\u51FB' }, { value: 6, label: '\u81EA\u884C\u8F66' },
              { value: 7, label: '\u6C34\u4E0A\u9879\u76EE' }, { value: 8, label: '\u8DC6\u62F3\u9053' },
              { value: '9', label: '\u4E52\u4E53\u7403' }, { value: '10', label: '\u5C04\u51FB' },
              { value: '11', label: '\u94C1\u4EBA\u4E09\u9879' }, { value: '12', label: '\u4E3E\u91CD' },
              { value: '13', label: '\u9A6C\u62C9\u677E' }
            ],
            list: [
              { value: 3 },
              { value: [3, 1, '9', '12' ], multiple: true }
            ],
            animate: 'fold',
            placement: 'bottom',
            clearable: true,
            appendToBody: false,
            showArrow: true,
            visibleArrow: true,
            disabled: false,
            hideSelectLabel: false,
            bordered: true,
            listHeight: 270,
            width: 230,
            labelInValue: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, toRefs } from 'vue';
      export default defineComponent({
        setup(){
          const options = [
            { value: 1, label: '\u7530\u5F84' }, { value: 2, label: '\u8D5B\u8247' },
            { value: 3, label: '\u7FBD\u6BDB\u7403' }, { value: 4, label: '\u7BEE\u7403' },
            { value: 5, label: '\u62F3\u51FB' }, { value: 6, label: '\u81EA\u884C\u8F66' },
            { value: 7, label: '\u6C34\u4E0A\u9879\u76EE' }, { value: 8, label: '\u8DC6\u62F3\u9053' },
            { value: '9', label: '\u4E52\u4E53\u7403' }, { value: '10', label: '\u5C04\u51FB' },
            { value: '11', label: '\u94C1\u4EBA\u4E09\u9879' }, { value: '12', label: '\u4E3E\u91CD' },
            { value: '13', label: '\u9A6C\u62C9\u677E' }
          ];
          const list = ref([
            { value: 3 },
            { value: [3, 1, '9', '12' ], multiple: true }
          ]
          const attr = reactive({
              animate: 'fold',
              placement: 'bottom',
              clearable: true,
              appendToBody: false,
              showArrow: true,
              visibleArrow: true,
              disabled: false,
              hideSelectLabel: false,
              bordered: true,
              listHeight: 270,
              width: 230,
              labelInValue: false
          });
          return { options, list, ...toRefs(attr) };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: flex;
        flex-direction: column;
        margin: 1em;
        > .options {
          display: flex;
          flex-wrap: wrap;
          > div {
            display: flex;
            margin: 1em 0;
            width: 33%;
            >span {
              min-width: 104px;
            }
            @media(max-width: 1350px) {
              width: 43%;
            }
            @media(max-width: 1000px) {
              width: 100%;
            }
          }
        }
        > .select {
          display: flex;
          margin-top: 1em;
          > div {
            margin-right: 2em;
          }
        }
      }
    </style>`},{title:"\u8FDC\u7A0B\u641C\u7D22",desc:`\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\u65F6\uFF0C\u9700\u8981\u5C06 filterable \u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\uFF0C\u540C\u65F6\u4F20\u5165 remote-method \u5C5E\u6027\uFF0Cremote-method\u4E3A\u4E00\u4E2AFunction\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002
      \u8BBE\u7F6E debounce-time \u5C5E\u6027\uFF0C\u63A7\u5236\u9632\u6296\u7684\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 0 \u3002`,filterable:!0,clearable:!0,remote:!0,showArrow:!1,reserveKeyword:!0,debounceTime:200,appendToBody:!0,options:[],components:[{value:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D",notFoundText:"Not Found ..."},{value:[],placeholder:"\u591A\u9009\u3002 \u8BF7\u8F93\u5165\u5546\u54C1\u540D",multiple:!0,notFoundText:"\u6CA1\u6709\u641C\u7D22\u5230\u5185\u5BB9 ..."}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <div style='width:100%'>
            <span style='min-width:78px;'>\u9632\u6296\u65F6\u95F4\uFF1A</span>
            <w-input-number v-model='debounceTime' :min='0' :max='2000' :step='50' />
          </div>
        </div>
        <div>
          <div v-for='item in list'>
            <w-select v-model='item.value' filterable :remote-method='remoteMethod' :multiple='item.multiple' 
              :options='options' clearable :not-found-text='item.notFoundText' 
              :placeholder='item.placeholder' :debounce-time='debounceTime' />
            <p>{{ selectValue }}</p>
          </div>
        </div>
      </div>
    <template>
    <script>
      import fetchJsonp from 'fetch-jsonp';`,optionsApi:`
      export default {
        data() {
          return {
            options: [],
            list: [
              {
                value: '', placeholder: '\u8BF7\u8F93\u5165\u5546\u54C1\u540D', notFoundText: 'Not Found ...'
              },
              {
                value: [], placeholder: '\u591A\u9009\u3002 \u8BF7\u8F93\u5165\u5546\u54C1\u540D', multiple:true, notFoundText: '\u6CA1\u6709\u641C\u7D22\u5230\u5185\u5BB9 ...'
              }
            ],
            debounceTime: 200
          }
        },
        methods: {
          remoteMethod(searchValue) {
            if (searchValue!=='') {
              const arr = [];
              await fetchJsonp('https://suggest.taobao.com/sug?q='+searchValue)
                .then(response => response.json())
                .then(data => {
                  const { result } = data;
                  result.forEach(r => {
                    arr.push({
                      value: r[0],
                      label: r[0]
                    });
                  });
                });
              return arr;
            }
            else return [];
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const options = reactive([]);
          const list = ref([
            {
              value: '', placeholder: '\u8BF7\u8F93\u5165\u5546\u54C1\u540D', notFoundText: 'Not Found ...'
            },
            {
              value: [], placeholder: '\u591A\u9009\u3002 \u8BF7\u8F93\u5165\u5546\u54C1\u540D', multiple: true, notFoundText: '\u6CA1\u6709\u641C\u7D22\u5230\u5185\u5BB9 ...'
            }
          ]);
          const debounceTime = ref(200);
          const remoteMethod = (searchValue) => {
            if (searchValue!=='') {
              const arr = [];
              await fetchJsonp('https://suggest.taobao.com/sug?q='+searchValue)
                .then(response => response.json())
                .then(data => {
                  const { result } = data;
                  result.forEach(r => {
                    arr.push({
                      value: r[0],
                      label: r[0]
                    });
                  });
                });
              return arr;
            }
            else return [];
          }
          return { options, list, debounceTime, remoteMethod };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        flex-direction: column;
        > .options {
          align-items: center;
          margin: 1em;
        }
        > div {
          display: flex;
          &:not(.options) {
            text-align: center;
            > div {
              display: flex;
              flex-direction: column;
              .w-select {
                margin: 1em;
              }
            }
          }
        }
      }
    </style>`},{title:"\u6E05\u9664\u503C\u524D\u7684\u56DE\u8C03",desc:"\u8BBE\u7F6E before-clear \u5C5E\u6027\uFF0C\u5728\u6E05\u9664\u503C\u524D\u4F1A\u6267\u884C\u6B64\u65B9\u6CD5\uFF0C\u82E5\u8FD4\u56DE true \u5219\u6E05\u9664\uFF0C\u4E5F\u53EF\u642D\u914D\u5F39\u51FA\u6846\u7B49 \u9009\u62E9\u662F\u5426\u6E05\u9664\u503C\u3002",options:[{value:"LiJiang",label:"\u4E3D\u6C5F"},{value:"SanYa",label:"\u4E09\u4E9A"},{value:"HuangShan",label:"\u9EC4\u5C71"},{value:"JiuZhaiGou",label:"\u4E5D\u5BE8\u6C9F"},{value:"GuiLinShanShui",label:"\u6842\u6797\u5C71\u6C34"}],beforeClear:!0,clearable:!0,components:[{value:"GuiLinShanShui"}],template:`    <template>
      <div class='select-demo'>
        <div class='options'>
          <div style='width:100%'>
            <span style='min-width:78px;'>\u5C55\u793A\u7C7B\u578B\uFF1A</span>
            <w-radio-group v-model:checked='beforeClearType'>
              <w-radio value='tooltip'>Tooltip</w-radio>
              <w-radio value='confirm'>Confirm</w-radio>
              <w-radio value='dialog'>Dialog</w-radio>
            </w-radio-group>
            </div>
          </div>
        <div>
          <w-tooltip :visible='showTooltip' trigger='custom' placement='right' effect='light'>
            <w-select v-model='selectValue' :options='options' clearable :before-clear='beforeClear' />
          </w-tooltip>
          <p>{{ selectValue }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance, h } from 'vue';
      export default {
        data() {
          return {
            options: [
              { value:'LiJiang', label:'\u4E3D\u6C5F' }, { value: 'SanYa', label: '\u4E09\u4E9A' },
              { value:'HuangShan', label:'\u9EC4\u5C71' },{ value: 'JiuZhaiGou', label: '\u4E5D\u5BE8\u6C9F' },
              { value:'GuiLinShanShui',label: '\u6842\u6797\u5C71\u6C34' }
            ],
            selectValue: 'GuiLinShanShui',
            showTooltip: false
            beforeClearType: 'tooltip',
            instance: getCurrentInstance(),
            bool: false
          }
        },
        methods:{
          beforeClear() {
            const type = this.beforeClearTypes;
            if (type === 'tooltip')
              this.showTooltip = true;
            else if (type === 'confirm')
              return confirm('\u786E\u5B9A\u8981\u6E05\u7A7A\u5DF2\u9009\u7684\u503C\u5417');
            else if (type === 'dialog') {
              const This = this;
              return this.ins.proxy.$openDialog({
                title: h('strong', {}, '\u63D0\u793A'),
                content: '\u786E\u5B9A\u8981\u6E05\u9664\u503C\u5417',
                ok() {
                  This.selectValue = '';
                }
              })
            }
          },
          clearValue() {
            this.selectValue = '';
            this.showTooltip = false;
          },
          hideTooltip = () => {
            if (this.bool) this.showTooltip = false;
            this.bool = true;
          }
        },
        watch:{
          showTooltip(val) {
            event(val ? 'add' : 'remove', document, 'click', this.hideTooltip);
            this.bool = !val;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance, h, watch } from 'vue';
      export default defineComponent({
        setup() {
          const options = [
            { value:'LiJiang', label:'\u4E3D\u6C5F' }, { value: 'SanYa', label: '\u4E09\u4E9A' },
            { value:'HuangShan', label:'\u9EC4\u5C71' },{ value: 'JiuZhaiGou', label: '\u4E5D\u5BE8\u6C9F' },
            { value:'GuiLinShanShui',label: '\u6842\u6797\u5C71\u6C34' }
          ],
          selectValue = ref('GuiLinShanShui'),
          showTooltip = ref(false),
          beforeClearType = ref('tooltip'),
          instance = getCurrentInstance(),
          beforeClear = () => {
            const type = beforeClearType.value;
            if (type === 'tooltip')
              showTooltip.value = true;
            else if (type === 'confirm')
              return confirm('\u786E\u5B9A\u8981\u6E05\u7A7A\u5DF2\u9009\u7684\u503C\u5417');
            else if( type === 'dialog')
              return instance.proxy.$openDialog({
                title: h('strong',{},'\u63D0\u793A'),
                content: '\u786E\u5B9A\u8981\u6E05\u9664\u503C\u5417',
                ok() {
                  selectValue.value = '';
                }
              })
          };
          clearValue = () => {
            selectValue.value = '';
            showTooltip.value = false;
          };
          bool = false;
          hideTooltip = () => {
            if (bool) showTooltip.value = false;
            bool = true;
          };
          watch(showTooltip,val => {
            event(val ? 'add': 'remove', document, 'click', hideTooltip);
            bool =! val;
          });
          return { 
            options, selectValue,showTooltip,
            beforeClearType, beforeClear, clearValue
          };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        flex-direction: column;
        > .options {
          align-items: center;
          margin: 1em;
        }
        > div {
          display: flex;
          &:not(.options) {
            flex-direction: column;
            text-align: center;
          }
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u7BAD\u5934",desc:`\u8BBE\u7F6E prefix \u5C5E\u6027\uFF0C\u6DFB\u52A0 Select \u5DE6\u4FA7\u56FE\u6807\uFF0C\u6216\u8005\u8BBE\u7F6E prefix \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49 Select \u5DE6\u4FA7\u5185\u5BB9\u3002<br>
      \u8BBE\u7F6E suffix \u5C5E\u6027\uFF0C\u6DFB\u52A0 Select \u53F3\u4FA7\u56FE\u6807\uFF0C\u6216\u8005\u8BBE\u7F6E suffix \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49 Select \u53F3\u4FA7\u5185\u5BB9\u3002`,filterable:!0,clearable:!0,options:[{value:"1",label:"\u8089\u4E1D\u9762",disabled:!0},{value:"2",label:"\u9E21\u86CB\u9762"},{value:"3",label:"\u6392\u9AA8\u9762"},{value:"4",label:"\u732A\u809D\u9762"},{value:"5",label:"\u725B\u8089\u9762",disabled:!0}],components:[{prefix:"list",suffix:"love",value:"2"},{multiple:!0,prefix:"list",suffixSlot:!0,value:["2"]}],template:`    <template>
      <div class='select-demo'>
        <div v-for='item in list'>
          <w-select v-model='item.value' filterable clearable :options='options' :multiple='item.multiple'
            :suffix='item.suffix' prefix='list'>
            <template v-if='item.suffixSlot' #suffix>
              <w-image src='http://cdn.u1.huluxia.com/g4/M01/09/E4/rBAAdl-k7XOAXKK4AAAESfAf5Po739.png' 
                style='width:21px;height:21px' />
            </template>
          </w-select>
          <p>{{item.value}}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            options: [
              { value: '1', label: '\u8089\u4E1D\u9762', disabled: true },
              { value: '2', label: '\u9E21\u86CB\u9762' },
              { value: '3', label: '\u6392\u9AA8\u9762' }, 
              { value: '4', label: '\u732A\u809D\u9762' },
              { value: '5', label: '\u725B\u8089\u9762', disabled: true }
            ],
            list: [
              { value: '2', suffix: 'love' },
              { value: ['2'], multiple: true, suffixSlot: true }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const options = [
            { value: '1', label: '\u8089\u4E1D\u9762', disabled: true },
            { value: '2', label: '\u9E21\u86CB\u9762' },
            { value: '3', label: '\u6392\u9AA8\u9762' }, 
            { value: '4', label: '\u732A\u809D\u9762' },
            { value: '5', label: '\u725B\u8089\u9762', disabled: true }
          ];
          const list = [
            { value: '2', suffix: 'love' },
            { value: ['2'], multiple: true, suffixSlot: true }
          ];
          return { options, list };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        > div {
          display: flex;
          flex-direction: column;
          text-align: center;
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u9009\u9879\u5206\u7EC4",desc:"\u7ED9 options \u6570\u636E\u91CC\u7684\u7B2C\u4E00\u7EA7\u6DFB\u52A0 options \u5C5E\u6027\uFF0Clabel\u4E3A\u7EC4\u540D\uFF0C\u5E76\u4E14\u4E0D\u9700\u8981\u5199 value \u5C5E\u6027\u3002",filterable:!0,clearable:!0,options:[{label:"\u70ED\u95E8\u57CE\u5E02",options:[{value:"BeiJing",label:"\u5317\u4EAC"},{value:"ShangHai",label:"\u4E0A\u6D77"},{value:"GuangZhou",label:"\u5E7F\u5DDE"},{value:"ShenZhen",label:"\u6DF1\u5733"},{value:"HangZhou",label:"\u676D\u5DDE"}]},{label:"\u57CE\u5E02\u540D",options:[{value:"WenZhou",label:"\u6E29\u5DDE"},{value:"ChengDu",label:"\u6210\u90FD"},{value:"LaSa",label:"\u62C9\u8428",disabled:!0},{value:"HaErBin",label:"\u54C8\u5C14\u6EE8"},{value:"GanZhou",label:"\u8D63\u5DDE"}]},{label:"\u6D4B\u8BD5-1",disabled:!0,options:[{value:"1-1 \u6D4B\u8BD5",label:"1-1 \u6D4B\u8BD5"},{value:"1-2 \u6D4B\u8BD5",label:"1-2 \u6D4B\u8BD5"}]},{label:"\u6D4B\u8BD5-2",disabled:!0,options:[{value:"2-1 \u6D4B\u8BD5",label:"2-1 \u6D4B\u8BD5"},{value:"2-2 \u6D4B\u8BD5",label:"2-2 \u6D4B\u8BD5"}]},{label:"\u6D4B\u8BD5-3",options:[{value:"3-1 \u6D4B\u8BD5",disabled:!0,label:"3-1 \u6D4B\u8BD5"},{value:"3-2 \u6D4B\u8BD5",label:"3-2 \u6D4B\u8BD5"},{value:"3-3 \u6D4B\u8BD5",label:"3-3 \u6D4B\u8BD5"}]}],components:[{value:""},{value:[],multiple:!0}],template:`    <template>
      <div class='select-demo'>
        <div v-for='item in list'>
          <w-select v-model='item.value' filterable clearable :options='groupOptions' 
            :multiple='item.multiple' />
          <p>{{ item.value }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            groupOptions:[
              {
                label: '\u70ED\u95E8\u57CE\u5E02',
                options: [
                  { value: 'BeiJing', label: '\u5317\u4EAC' },
                  { value: 'ShangHai', label: '\u4E0A\u6D77' },
                  { value: 'GuangZhou', label: '\u5E7F\u5DDE' },
                  { value: 'ShenZhen', label: '\u6DF1\u5733' },
                  { value: 'HangZhou', label: '\u676D\u5DDE' }
                ]
              },
              {
                label: '\u57CE\u5E02\u540D',
                options: [
                  { value: 'WenZhou', label: '\u6E29\u5DDE' },
                  { value: 'ChengDu', label: '\u6210\u90FD' },
                  { value: 'LaSa', label: '\u62C9\u8428', disabled: true },
                  { value: 'HaErBin', label: '\u54C8\u5C14\u6EE8' },
                  { value: 'GanZhou', label: '\u8D63\u5DDE' }
                ]
              },
              {
                label: '\u6D4B\u8BD5-1', disabled: true,
                options: [
                  { value: '1-1 \u6D4B\u8BD5', label: '1-1 \u6D4B\u8BD5' },
                  { value: '1-2 \u6D4B\u8BD5', label: '1-2 \u6D4B\u8BD5' }
                ]
              },
              {
                label: '\u6D4B\u8BD5-2', disabled: true,
                options: [
                  { value: '2-1 \u6D4B\u8BD5', label: '2-1 \u6D4B\u8BD5' },
                  { value: '2-2 \u6D4B\u8BD5', label: '2-2 \u6D4B\u8BD5' },
                ]
              },
              {
                label: '\u6D4B\u8BD5-3',
                options: [
                  { value: '3-1 \u6D4B\u8BD5', disabled: true, label: '3-1 \u6D4B\u8BD5' },
                  { value: '3-2 \u6D4B\u8BD5', label: '3-2 \u6D4B\u8BD5' },
                  { value: '3-3 \u6D4B\u8BD5', label: '3-3 \u6D4B\u8BD5' }
                ]
              }
            ],
            list: [
              { value: '' },
              { value: [], multiple: true }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const groupOptions = [
            {
              label: '\u70ED\u95E8\u57CE\u5E02',
              options: [
                { value: 'BeiJing', label: '\u5317\u4EAC' },
                { value: 'ShangHai', label: '\u4E0A\u6D77' },
                { value: 'GuangZhou', label: '\u5E7F\u5DDE' },
                { value: 'ShenZhen', label: '\u6DF1\u5733' },
                { value: 'HangZhou', label: '\u676D\u5DDE' }
              ]
            },
            {
              label: '\u57CE\u5E02\u540D',
              options: [
                { value: 'WenZhou', label: '\u6E29\u5DDE' },
                { value: 'ChengDu', label: '\u6210\u90FD' },
                { value: 'LaSa', label: '\u62C9\u8428', disabled: true },
                { value: 'HaErBin', label: '\u54C8\u5C14\u6EE8' },
                { value: 'GanZhou', label: '\u8D63\u5DDE' }
              ]
            },
            {
              label: '\u6D4B\u8BD5-1', disabled: true,
              options: [
                { value: '1-1 \u6D4B\u8BD5', label: '1-1 \u6D4B\u8BD5' },
                { value: '1-2 \u6D4B\u8BD5', label: '1-2 \u6D4B\u8BD5' }
              ]
            },
            {
              label: '\u6D4B\u8BD5-2', disabled: true,
              options: [
                { value: '2-1 \u6D4B\u8BD5', label: '2-1 \u6D4B\u8BD5' },
                { value: '2-2 \u6D4B\u8BD5', label: '2-2 \u6D4B\u8BD5' }
              ]
            },
            {
              label: '\u6D4B\u8BD5-3',
              options: [
                { value: '3-1 \u6D4B\u8BD5', disabled: true, label: '3-1 \u6D4B\u8BD5' },
                { value: '3-2 \u6D4B\u8BD5', label: '3-2 \u6D4B\u8BD5' },
                { value: '3-3 \u6D4B\u8BD5', label: '3-3 \u6D4B\u8BD5' }
              ]
            }
          ];
          const list = ref([
            { value: '' },
            { value: [], multiple: true }
          ]);
          return { groupOptions, list };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display:inline-flex;
        > div {
          display: flex;
          flex-direction: column;
          text-align: center;
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`},{title:"\u521B\u5EFA\u9009\u9879",desc:`\u5728\u53EF\u641C\u7D22\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E allow-create-option \u5C5E\u6027\u4E3Atrue\uFF0C\u53EF\u901A\u8FC7\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6587\u5B57\u6765\u521B\u5EFA\u65B0\u7684\u9009\u9879\u3002<br>
      \u8BBE\u7F6E default-active-first-option \u5C5E\u6027\u4E3Atrue\uFF0C\u9ED8\u8BA4\u5339\u914D\u6FC0\u6D3B\u7B2C\u4E00\u4E2A\u9009\u9879\u3002<br>
      \u53EF\u4EE5\u6307\u5B9A\u9009\u9879\u7684\u4F4D\u7F6E (\u6CA1\u6709\u5206\u7EC4\u65F6\u51991 \u9009\u98791\uFF0C\u6709\u5206\u7EC4\u65F6\u51992-1 \u9009\u98791)\u3002 \u4E5F\u53EF\u4EE5\u6307\u5B9A\u9009\u9879\u7684label\u548Cvalue (label:\u6807\u7B7E1,value:\u6807\u7B7E1\u7684\u503C)\u3002`,filterable:!0,clearable:!0,allowCreateOption:!0,hideSelectLabel:!1,reserveKeyword:!1,labelInValue:!1,components:[{value:"",options:[{value:"1-\u80E1\u841D\u535C",label:"1-\u80E1\u841D\u535C"},{value:"1-\u8C46\u85AF",label:"1-\u8C46\u85AF"},{value:"1-\u751F\u59DC",label:"1-\u751F\u59DC"},{value:"1-\u5C71\u836F",label:"1-\u5C71\u836F"},{value:"1-\u828B\u5934",label:"1-\u828B\u5934"},{value:"1-\u5927\u849C",label:"1-\u5927\u849C"},{value:"2-\u51AC\u74DC",label:"2-\u51AC\u74DC"},{value:"2-\u5357\u74DC",label:"2-\u5357\u74DC"},{value:"2-\u8304\u5B50",label:"2-\u8304\u5B50"},{value:"2-\u897F\u7EA2\u67FF",label:"2-\u897F\u7EA2\u67FF"},{value:"2-\u7389\u7C73",label:"2-\u7389\u7C73"},{value:"3-\u9999\u83C7",label:"3-\u9999\u83C7"},{value:"3-\u6728\u8033",label:"3-\u6728\u8033"},{value:"3-\u53E3\u8611",label:"3-\u53E3\u8611"}],options:[{label:"\u4E00\u3001",options:[{value:"\u80E1\u841D\u535C",label:"\u80E1\u841D\u535C"},{value:"\u8C46\u85AF",label:"\u8C46\u85AF"},{value:"\u751F\u59DC",label:"\u751F\u59DC"},{value:"\u5C71\u836F",label:"\u5C71\u836F"}]},{label:"\u4E8C\u3001",options:[{value:"\u51AC\u74DC",label:"\u51AC\u74DC"},{value:"\u5357\u74DC",label:"\u5357\u74DC"},{value:"\u8304\u5B50",label:"\u8304\u5B50"},{value:"\u897F\u7EA2\u67FF",label:"\u897F\u7EA2\u67FF"}]},{label:"\u4E09\u3001",options:[{value:"\u9999\u83C7",label:"\u9999\u83C7",disabled:!0},{value:"\u6728\u8033",label:"\u6728\u8033"},{value:"\u53E3\u8611",label:"\u53E3\u8611"}]}]},{value:[],multiple:!0,options:[{label:"\u4E00\u3001",options:[{value:"\u80E1\u841D\u535C",label:"\u80E1\u841D\u535C"},{value:"\u8C46\u85AF",label:"\u8C46\u85AF"},{value:"\u751F\u59DC",label:"\u751F\u59DC"},{value:"\u5C71\u836F",label:"\u5C71\u836F"},{value:"\u828B\u5934",label:"\u828B\u5934"},{value:"\u5927\u849C",label:"\u5927\u849C"}]},{label:"\u4E8C\u3001",options:[{value:"\u51AC\u74DC",label:"\u51AC\u74DC"},{value:"\u5357\u74DC",label:"\u5357\u74DC"},{value:"\u8304\u5B50",label:"\u8304\u5B50"},{value:"\u897F\u7EA2\u67FF",label:"\u897F\u7EA2\u67FF"},{value:"\u7389\u7C73",label:"\u7389\u7C73"}]},{label:"\u4E09\u3001",options:[{value:"\u9999\u83C7",label:"\u9999\u83C7"},{value:"\u6728\u8033",label:"\u6728\u8033"},{value:"\u53E3\u8611",label:"\u53E3\u8611"}]}]}],template:`    <template>
      <div class='select-demo'>
        <div v-for='item in list'>
          <w-select v-model='item.value' filterable allow-create-option clearable 
            :options='item.options' :multiple='item.multiple' default-active-first-option />
          <p>{{ item.value }}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            list:[
              {
                value: '', options: [
                  { value: '1-\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '1-\u8C46\u85AF', label: '1-\u8C46\u85AF' },
                  { value: '1-\u751F\u59DC', label: '1-\u751F\u59DC' }, { value: '1-\u5C71\u836F', label: '1-\u5C71\u836F' },
                  { value: '1-\u828B\u5934', label: '1-\u828B\u5934' }, { value: '1-\u5927\u849C', label: '1-\u5927\u849C' },
                  { value: '2-\u51AC\u74DC', label: '2-\u51AC\u74DC' }, { value: '2-\u5357\u74DC', label: '2-\u5357\u74DC' }, 
                  { value: '2-\u8304\u5B50', label: '2-\u8304\u5B50' }, { value: '2-\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' },
                  { value: '2-\u7389\u7C73', label: '2-\u7389\u7C73' }, { value: '3-\u9999\u83C7', label: '3-\u9999\u83C7' },
                  { value: '3-\u6728\u8033', label: '3-\u6728\u8033' }, { value: '3-\u53E3\u8611', label: '3-\u53E3\u8611' }
                ],
                options: [
                  {
                    label: '\u4E00\u3001',
                    options: [
                      { value: '\u80E1\u841D\u535C', label: '\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '\u8C46\u85AF' },
                      { value: '\u751F\u59DC', label: '\u751F\u59DC' }, { value: '\u5C71\u836F', label: '\u5C71\u836F' },
                    ]
                  },
                  {
                    label: '\u4E8C\u3001',
                    options: [
                      { value: '\u51AC\u74DC', label: '\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '\u5357\u74DC' },
                      { value: '\u8304\u5B50', label: '\u8304\u5B50' }, { value: '\u897F\u7EA2\u67FF', label: '\u897F\u7EA2\u67FF' },
                    ]
                  },
                  {
                    label: '\u4E09\u3001',
                    options: [
                      { value: '\u9999\u83C7', label: '\u9999\u83C7', disabled: true },
                      { value: '\u6728\u8033', label: '\u6728\u8033' },
                      { value: '\u53E3\u8611', label: '\u53E3\u8611' }
                    ]
                  }
                ]
              },
              {
                value: [],
                multiple: true,
                options: [
                  {
                    label: '\u4E00\u3001',
                    options: [
                      { value: '\u80E1\u841D\u535C', label: '\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '\u8C46\u85AF' },
                      { value: '\u751F\u59DC', label: '\u751F\u59DC' }, { value: '\u5C71\u836F', label: '\u5C71\u836F' },
                      { value: '\u828B\u5934', label: '\u828B\u5934' }, { value: '\u5927\u849C', label: '\u5927\u849C' }
                    ]
                  },
                  {
                    label: '\u4E8C\u3001',
                    options: [
                      { value: '\u51AC\u74DC', label: '\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '\u5357\u74DC' },
                      { value: '\u8304\u5B50', label: '\u8304\u5B50' }, { value: '\u897F\u7EA2\u67FF', label: '\u897F\u7EA2\u67FF' },
                      { value: '\u7389\u7C73', label: '\u7389\u7C73' }
                    ]
                  },
                  {
                    label: '\u4E09\u3001',
                    options: [
                      { value: '\u9999\u83C7', label: '\u9999\u83C7' }, { value: '\u6728\u8033', label: '\u6728\u8033' },
                      { value: '\u53E3\u8611', label: '\u53E3\u8611' }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const list = ref([
            {
              value: '', options: [
                { value: '1-\u80E1\u841D\u535C', label: '1-\u80E1\u841D\u535C' }, { value: '1-\u8C46\u85AF', label: '1-\u8C46\u85AF' },
                { value: '1-\u751F\u59DC', label: '1-\u751F\u59DC' }, { value: '1-\u5C71\u836F', label: '1-\u5C71\u836F' },
                { value: '1-\u828B\u5934', label: '1-\u828B\u5934' }, { value: '1-\u5927\u849C', label: '1-\u5927\u849C' },
                { value: '2-\u51AC\u74DC', label: '2-\u51AC\u74DC' }, { value: '2-\u5357\u74DC', label: '2-\u5357\u74DC' }, 
                { value: '2-\u8304\u5B50', label: '2-\u8304\u5B50' }, { value: '2-\u897F\u7EA2\u67FF', label: '2-\u897F\u7EA2\u67FF' },
                { value: '2-\u7389\u7C73', label: '2-\u7389\u7C73' }, { value: '3-\u9999\u83C7', label: '3-\u9999\u83C7' },
                { value: '3-\u6728\u8033', label: '3-\u6728\u8033' }, { value: '3-\u53E3\u8611', label: '3-\u53E3\u8611' }
              ],
              options: [
                {
                  label: '\u4E00\u3001',
                  options: [
                    { value: '\u80E1\u841D\u535C', label: '\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '\u8C46\u85AF' },
                    { value: '\u751F\u59DC', label: '\u751F\u59DC' }, { value: '\u5C71\u836F', label: '\u5C71\u836F' },
                  ]
                },
                {
                  label: '\u4E8C\u3001',
                  options: [
                    { value: '\u51AC\u74DC', label: '\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '\u5357\u74DC' },
                    { value: '\u8304\u5B50', label: '\u8304\u5B50' }, { value: '\u897F\u7EA2\u67FF', label: '\u897F\u7EA2\u67FF' },
                  ]
                },
                {
                  label: '\u4E09\u3001',
                  options: [
                    { value: '\u9999\u83C7', label: '\u9999\u83C7', disabled: true },
                    { value: '\u6728\u8033', label: '\u6728\u8033' },
                    { value: '\u53E3\u8611', label: '\u53E3\u8611' }
                  ]
                }
              ]
            },
            {
              value: [],
              multiple: true,
              options: [
                {
                  label: '\u4E00\u3001',
                  options: [
                    { value: '\u80E1\u841D\u535C', label: '\u80E1\u841D\u535C' }, { value: '\u8C46\u85AF', label: '\u8C46\u85AF' },
                    { value: '\u751F\u59DC', label: '\u751F\u59DC' }, { value: '\u5C71\u836F', label: '\u5C71\u836F' },
                    { value: '\u828B\u5934', label: '\u828B\u5934' }, { value: '\u5927\u849C', label: '\u5927\u849C' }
                  ]
                },
                {
                  label: '\u4E8C\u3001',
                  options: [
                    { value: '\u51AC\u74DC', label: '\u51AC\u74DC' }, { value: '\u5357\u74DC', label: '\u5357\u74DC' },
                    { value: '\u8304\u5B50', label: '\u8304\u5B50' }, { value: '\u897F\u7EA2\u67FF', label: '\u897F\u7EA2\u67FF' },
                    { value: '\u7389\u7C73', label: '\u7389\u7C73' }
                  ]
                },
                {
                  label: '\u4E09\u3001',
                  options: [
                    { value: '\u9999\u83C7', label: '\u9999\u83C7' }, { value: '\u6728\u8033', label: '\u6728\u8033' },
                    { value: '\u53E3\u8611', label: '\u53E3\u8611' }
                  ]
                }
              ]
            }
          ]);
          return { list };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .select-demo {
        display: inline-flex;
        > div {
          display: flex;
          flex-direction: column;
          text-align: center;
          .w-select {
            margin: 1em;
          }
        }
      }
    </style>`}]),oe={attribute:[{name:"value / v-model",desc:"\u6307\u5B9A\u9009\u4E2D\u9879\u76EE\u7684 value \u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528 v-model \u53CC\u5411\u7ED1\u5B9A\u6570\u636E\u3002\u5355\u9009\u65F6\u53EA\u63A5\u53D7 String \u6216 Number \u6216 Boolean\u3002\u591A\u9009\u65F6\u53EA\u63A5\u53D7 Array",type:"string\u3001number\u3001boolean\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"options",desc:"\u83DC\u5355\u9009\u9879",type:"array",optional:"\u2014\u2014",default:[]},{name:"hide-select-label",desc:"\u662F\u5426\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"default-open",desc:"\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"multiple",desc:"\u662F\u5426\u591A\u9009",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"clearable",desc:"\u662F\u5426\u663E\u793A\u6E05\u9664\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"placeholder",desc:"\u9ED8\u8BA4\u63D0\u793A\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u8BF7\u9009\u62E9"},{name:"name",desc:"select input \u7684 name \u5C5E\u6027",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-arrow",desc:"\u662F\u5426\u663E\u793A\u53F3\u4FA7\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"visible-arrow",desc:"\u662F\u5426\u663E\u793A\u83DC\u5355\u8FB9\u7F18\u7684\u7BAD\u5934",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"filterable",desc:"\u662F\u5426\u53EF\u4EE5\u641C\u7D22",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"filter-method",desc:"\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"reserve-keyword",desc:"\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD\u548C\u641C\u7D22\u9009\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"remote-method",desc:"\u8FDC\u7A0B\u641C\u7D22\u81EA\u5B9A\u4E49\u65B9\u6CD5",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"debounce-time",desc:"\u641C\u7D22\u65F6\u662F\u5426\u4F7F\u7528\u9632\u6296\u6765\u63A7\u5236\u641C\u7D22\u9891\u7387\u3002 (\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u4E3A0)",type:"number",optional:"\u2014\u2014",default:0},{name:"allow-create-option",desc:"\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u9009\u9879\u3002\u53EF\u4EE5\u8BBE\u7F6E\u65B0\u9009\u9879\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u65B0\u9009\u9879\u7684 label \u548C value\uFF0Cfilterable \u5C5E\u6027\u5FC5\u987B\u4E3Atrue\u3002",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"default-active-first-option",desc:"\u5728\u53EF\u641C\u7D22\u6A21\u5F0F\u4E0B\uFF0C\u5F53\u6709\u641C\u7D22\u5230\u503C\u5E76\u6309\u4E0B\u56DE\u8F66\uFF0C\u662F\u5426\u9ED8\u8BA4\u5339\u914D\u7B2C\u4E00\u4E2A\u9009\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"not-found-text",desc:"\u5F53\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9",type:"string",optional:"\u2014\u2014",default:"\u65E0\u5339\u914D\u6570\u636E"},{name:"append-to-body",desc:"\u6307\u5B9A\u4E0B\u62C9\u83DC\u5355\u662F\u5426\u5728 body \u5143\u7D20\u4E0B (\u513F\u5B50\u8F88)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"dropdown-fixed",desc:"\u5F53 appendToBody \u4E3Atrue\uFF0C\u5E76\u4E14\u89E6\u53D1\u5143\u7D20\u5904\u4E8E\u56FA\u5B9A\u5B9A\u4F4D\u65F6\uFF0C\u9700\u8981\u52A0\u6B64\u5C5E\u6027\u3002(\u5426\u5219\u5F53\u5C55\u793A\u4E0B\u62C9\u5217\u8868\u65F6\uFF0C\u6D4F\u89C8\u5668\u6EDA\u52A8\u6761\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0B\u62C9\u5217\u8868\u4E5F\u4F1A\u8DDF\u7740\u53D8)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"dropdown-class",desc:"\u4E0B\u62C9\u5217\u8868\u7684class\u5C5E\u6027",type:"string\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"placement",desc:"\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u7684\u4F4D\u7F6E",type:"string",optional:"bottom\u3001top",default:"bottom"},{name:"animate",desc:"\u4E0B\u62C9\u83DC\u5355\u7684\u52A8\u753B\u6548\u679C",type:"string",optional:"fold\u3001fade\u3001slide\u3001zoom",default:"fold"},{name:"max-count",desc:"\u591A\u9009\u65F6\u6700\u591A\u53EF\u4EE5\u9009\u51E0\u9879\uFF0C\u9ED8\u8BA4\u4E3A0 (\u4E0D\u9650\u6570\u91CF)",type:"number",optional:"\u2014\u2014",default:0},{name:"max-tag-count",desc:"\u591A\u9009\u6298\u53E0\u65F6\u663E\u793A\u591A\u5C11\u4E2ATag\uFF0C\u9ED8\u8BA4\u4E3A0 (\u4E0D\u6298\u53E0\u5DF2\u9009\u9879)",type:"number",optional:"\u2014\u2014",default:0},{name:"max-tag-placeholder",desc:"\u591A\u9009\u6298\u53E0\u65F6\u9690\u85CF\u7684Tag\u7684\u6587\u672C\u5185\u5BB9\u3002(\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C55\u793A + length)\uFF0C\u53C2\u6570\u662F\u5DF2\u6298\u53E0\u7684\u6570\u91CF",type:"function",optional:"\u2014\u2014",default:" + length"},{name:"label-in-value",desc:"\u5728\u8FD4\u56DE\u9009\u9879\u65F6\uFF0C\u662F\u5426\u5C06 label \u548C value \u4E00\u5E76\u8FD4\u56DE(\u5355\u9009\u65F6\u8FD4\u56DE\u5BF9\u8C61\u3001\u591A\u9009\u65F6\u8FD4\u56DE\u6570\u7EC4)\uFF0C\u9ED8\u8BA4\u53EA\u8FD4\u56DE value",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"default-label",desc:"\u8FDC\u7A0B\u641C\u7D22\u65F6\uFF0C\u663E\u793A\u9ED8\u8BA4 label\uFF0C\u8BE6\u89C1\u793A\u4F8B",type:"string\u3001number\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"prefix",desc:"\u4E0B\u62C9\u5217\u8868\u5DE6\u4FA7\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"suffix",desc:"\u4E0B\u62C9\u5217\u8868\u53F3\u4FA7\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"down"},{name:"width",desc:"\u4E0B\u62C9\u83DC\u5355\u7684\u5BBD\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:230},{name:"list-height",desc:"\u4E0B\u62C9\u83DC\u5355\u7684\u6700\u5927\u9AD8\u5EA6 (\u5F53\u5185\u5BB9\u8D85\u51FA\u9AD8\u5EA6\u65F6\u51FA\u73B0\u6EDA\u52A8\u6761)",type:"string\u3001number",optional:"\u2014\u2014",default:260},{name:"bordered",desc:"\u662F\u5426\u6709\u8FB9\u6846",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"before-clear",desc:"\u6E05\u7A7A\u503C\u4E4B\u524D\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE true \u6E05\u7A7A\u503C\uFF0C\u8FD4\u56DE false \u53D6\u6D88\u6E05\u7A7A",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"before-remove",desc:"\u591A\u9009\u65F6\u5220\u9664\u67D0\u4E2A\u503C\u4E4B\u524D\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE true \u6E05\u7A7A\u503C\uFF0C\u8FD4\u56DE false \u53D6\u6D88\u5220\u9664",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"}],event:[{name:"change",desc:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u9ED8\u8BA4\u8FD4\u56DE value\uFF0C\u5982\u9700\u8FD4\u56DE label\uFF0C\u8BE6\u89C1 label-in-value \u5C5E\u6027",callbackParams:"\u5F53\u524D\u9009\u4E2D\u503C"},{name:"visible-change",desc:"\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1",callbackParams:"\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false"},{name:"clear",desc:"\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"},{name:"remove-tag",desc:"\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664tag\u65F6\u89E6\u53D1",callbackParams:"\u79FB\u9664\u7684value"},{name:"create-option",desc:"\u65B0\u5EFA\u9009\u9879\u65F6\u89E6\u53D1",callbackParams:"\u65B0\u5EFA\u7684value"},{name:"focus",desc:"\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"(event: Event)"},{name:"blur",desc:"\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"(event: Event)"}],slot:[{name:"prefix",desc:"\u81EA\u5B9A\u4E49 Select \u5185\u5DE6\u4FA7\u56FE\u6807"},{name:"suffix",desc:"\u81EA\u5B9A\u4E49 Select \u5185\u53F3\u4FA7\u56FE\u6807"},{name:"empty",desc:"\u65E0\u9009\u9879\u65F6\u663E\u793A\u7684\u5185\u5BB9"}],method:[{name:"focus",desc:"\u4F7F input \u83B7\u53D6\u7126\u70B9\uFF0C\u5E76\u663E\u793A\u4E0B\u62C9\u83DC\u5355",params:"\u2014\u2014"},{name:"blur",desc:"	\u4F7F input \u5931\u53BB\u7126\u70B9\uFF0C\u5E76\u9690\u85CF\u4E0B\u62C9\u83DC\u5355",params:"\u2014\u2014"}]},ie={attribute:[{name:"label",desc:"\u5206\u7EC4\u7684\u7EC4\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1}]},se={attribute:[{name:"value",desc:"\u9009\u9879\u7684\u503C",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"label",desc:"\u9009\u9879\u7684\u6807\u7B7E",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879",type:"boolean",optional:"\u2014\u2014",default:!1}]};const ne={class:"select-demo-list"},re={key:0,class:"options special"},de=n("span",null,"\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5(\u9700\u5168\u5339\u914D)\uFF1A",-1),pe=c(" \u4F7F\u7528 "),ve={key:1,class:"options special"},be=n("span",null,"\u4FDD\u7559\u5173\u952E\u5B57\uFF1A",-1),ce=c(" \u662F\u7684 "),me={key:2,class:"options special"},fe=n("span",null,"\u6700\u5927\u53EF\u9009\u6570\uFF1A",-1),he=c("\u4E0D\u9650"),ge=c("3\u4E2A"),we={key:3,class:"options"},xe={key:4,class:"options special"},ye={style:{width:"100%"}},Ce=n("span",{style:{"min-width":"78px"}},"\u9632\u6296\u65F6\u95F4\uFF1A",-1),_e={key:5,class:"options special"},Fe={style:{width:"100%"}},ke=n("span",{style:{"min-width":"78px"}},"\u5C55\u793A\u7C7B\u578B\uFF1A",-1),Ae=c("Tooltip"),Se=c("Confirm"),Te=c("Dialog"),Ee={key:0,style:{"margin-bottom":"1em"}},De=n("h4",null,"\u662F\u5426\u8981\u6E05\u9664\u503C",-1),Be=n("br",null,null,-1),Ve=c(" \u662F "),Le=c(" \u5426 "),Je=n("br",null,null,-1),Ge=c("Option Group"),He=c("Option"),Oe=X({setup(I){let B=[{title:"\u53F3\u8FB9\u7BAD\u5934",attr:"showArrow",radio:[{value:!0,label:"\u663E\u793A"},{value:!1,label:"\u9690\u85CF"}]},{title:"\u83DC\u5355\u7BAD\u5934",attr:"visibleArrow",radio:[{value:!0,label:"\u663E\u793A"},{value:!1,label:"\u9690\u85CF"}]},{title:"\u6E05\u7A7A\u6309\u94AE",attr:"clearable",radio:[{value:!0,label:"\u663E\u793A"},{value:!1,label:"\u9690\u85CF"}]},{title:"\u662F\u5426\u7981\u7528",attr:"disabled",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u662F\u5426\u6709\u8FB9\u6846",attr:"bordered",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u9690\u85CF\u9009\u4E2D\u9009\u9879",attr:"hideSelectLabel",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u83DC\u5355\u52A8\u753B",attr:"animate",radio:[{value:"fold",label:"\u6298\u53E0"},{value:"fade",label:"\u6DE1\u5165"},{value:"zoom",label:"\u7F29\u653E"},{value:"slide",label:"\u6ED1\u52A8"}]},{title:"\u83DC\u5355\u4F4D\u7F6E",attr:"placement",radio:[{value:"bottom",label:"\u4E0B\u65B9"},{value:"top",label:"\u4E0A\u65B9"}]},{title:"\u83DC\u5355\u5728body\u4E0B",attr:"appendToBody",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u83DC\u5355\u9AD8\u5EA6",attr:"listHeight",radio:[{value:270,label:"270px"},{value:160,label:"160px"}]},{title:"\u83DC\u5355\u5BBD\u5EA6",attr:"width",radio:[{value:230,label:"230px"},{value:180,label:"180px"}]},{title:"\u8FD4\u56DE\u6570\u636E",attr:"labelInValue",radio:[{value:!1,label:"value"},{value:!0,label:"label-value"}]}],V=(a,t,v)=>{console.log("Select \u6539\u53D8\u503C\u4E86\u3002\u3002\u3002",a)},y=a=>{console.log("\u5220\u9664\u4E86\u67D0\u4E00\u9879\uFF0Cvalue\u4E3A\uFF1A",a)},k=a=>"more "+a,L=[{value:"\u6865\u5934\u6392\u9AA8",label:"\u6865\u5934\u6392\u9AA8"},{value:"\u849C\u9999\u83B2\u85D5\u867E",label:"\u849C\u9999\u83B2\u85D5\u867E",disabled:!0},{value:"\u98D8\u9999\u62CC\u97621",label:"\u98D8\u9999\u62CC\u97621"},{value:"\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D",label:"\u9C8D\u9C7C\u6C41\u9C9C\u7075\u829D"},{value:"\u9EBB\u9171\u51E4\u5C3E",label:"\u9EBB\u9171\u51E4\u5C3E"},{value:"\u9ED1\u6912\u7206\u6D77\u7687",label:"\u9ED1\u6912\u7206\u6D77\u7687"},{value:"\u87F9\u7C89\u70E9\u9C7C\u809A",label:"\u87F9\u7C89\u70E9\u9C7C\u809A",disabled:!0},{value:"\u9ED1\u6912\u6C41\u725B\u6392",label:"\u9ED1\u6912\u6C41\u725B\u6392"},{value:"\u9C8D\u53C2\u7FC5\u809A\u66F41",label:"\u9C8D\u53C2\u7FC5\u809A\u66F41"},{value:"\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505",label:"\u57FA\u56F4\u867E\u841D\u535C\u4E1D\u9505"},{value:"\u5B63\u8C46\u7092\u725B\u67F3",label:"\u5B63\u8C46\u7092\u725B\u67F3"},{value:"\u9ED1\u6912\u725B\u67F3",label:"\u9ED1\u6912\u725B\u67F3",disabled:!0}],h=S(L),C=a=>a?h.value.filter(t=>t.label===a):h.value;S([{value:"\u80E1\u841D\u535C",label:"1-\u80E1\u841D\u535C"},{value:"\u8C46\u85AF",label:"1-\u8C46\u85AF"},{value:"\u751F\u59DC",label:"1-\u751F\u59DC"},{value:"\u5C71\u836F",label:"1-\u5C71\u836F"},{value:"\u828B\u5934",label:"1-\u828B\u5934"},{value:"\u5927\u849C",label:"1-\u5927\u849C"},{value:"\u51AC\u74DC",label:"2-\u51AC\u74DC"},{value:"\u5357\u74DC",label:"2-\u5357\u74DC"},{value:"\u8304\u5B50",label:"2-\u8304\u5B50"},{value:"\u897F\u7EA2\u67FF",label:"2-\u897F\u7EA2\u67FF"},{value:"\u7389\u7C73",label:"2-\u7389\u7C73"},{value:"\u9999\u83C7",label:"3-\u9999\u83C7"},{value:"\u6728\u8033",label:"3-\u6728\u8033"},{value:"\u53E3\u8611",label:"3-\u53E3\u8611"}]);let J=async a=>{if(a!==""){const t=[];return await te(`https://suggest.taobao.com/sug?q=${a}`).then(v=>v.json()).then(v=>{let{result:o}=v;o.forEach(g=>{t.push({value:g[0],label:g[0]})})}),t}else return[]},m=le(),u=S("tooltip"),b=S(!1),_=!1,A=a=>{let t=a;return v=>{let o=u.value;if(o==="tooltip")b.value=!0;else{if(o==="confirm")return confirm("\u786E\u5B9A\u8981\u6E05\u7A7A\u5DF2\u9009\u7684\u503C\u5417");if(o==="dialog")return m.proxy.$openDialog({title:ee("strong","\u63D0\u793A"),content:"\u786E\u5B9A\u8981\u6E05\u9664\u503C\u5417",ok(){t.value=""}})}}},w=a=>{a.value=a.multiple?[]:"",b.value=!1},G=()=>{_&&(b.value=!1),_=!0};return W(b,a=>{ae(a?"add":"remove",document,"click",G),_=!a}),(a,t)=>{const v=f("w-checkbox"),o=f("w-radio"),g=f("w-radio-group"),j=f("w-input-number"),M=f("w-image"),U=f("w-select"),O=f("w-button"),N=f("w-tooltip"),R=f("DemoItem"),H=f("TableList");return r(),p("div",ne,[(r(!0),p(T,null,E(d(ue),(e,z)=>(r(),P(R,{item:e,key:e.title},{default:i(()=>[e.customFilter?(r(),p("div",re,[n("div",null,[de,s(v,{checked:e.isCustomFilter,"onUpdate:checked":l=>e.isCustomFilter=l,border:""},{default:i(()=>[pe]),_:2},1032,["checked","onUpdate:checked"])])])):e.toggleReserveKeyword?(r(),p("div",ve,[n("div",null,[be,s(v,{checked:e.reserveKeyword,"onUpdate:checked":l=>e.reserveKeyword=l,border:""},{default:i(()=>[ce]),_:2},1032,["checked","onUpdate:checked"])])])):e.toggleMaxCount?(r(),p("div",me,[n("div",null,[fe,s(g,{checked:e.maxCount,"onUpdate:checked":l=>e.maxCount=l},{default:i(()=>[s(o,{value:0},{default:i(()=>[he]),_:1}),s(o,{value:3},{default:i(()=>[ge]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])])):e.animate?(r(),p("div",we,[(r(!0),p(T,null,E(d(B),l=>(r(),p("div",{key:l},[n("span",null,D(l.title)+"\uFF1A",1),s(g,{checked:e[l.attr],"onUpdate:checked":x=>e[l.attr]=x},{default:i(()=>[(r(!0),p(T,null,E(l.radio,x=>(r(),P(o,{key:x,value:x.value},{default:i(()=>[c(D(x.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"])]))),128))])):e.remote?(r(),p("div",xe,[n("div",ye,[Ce,s(j,{modelValue:e.debounceTime,"onUpdate:modelValue":l=>e.debounceTime=l,size:"small",min:0,max:2e3,step:50},null,8,["modelValue","onUpdate:modelValue"])])])):e.beforeClear?(r(),p("div",_e,[n("div",Fe,[ke,s(g,{checked:d(u),"onUpdate:checked":t[0]||(t[0]=l=>Y(u)?u.value=l:u=l)},{default:i(()=>[s(o,{value:"tooltip"},{default:i(()=>[Ae]),_:1}),s(o,{value:"confirm"},{default:i(()=>[Se]),_:1}),s(o,{value:"dialog"},{default:i(()=>[Te]),_:1})]),_:1},8,["checked"])])])):K("",!0),(r(!0),p(T,null,E(e.components,(l,x)=>(r(),p("div",{key:l},[z===1?(r(),p("p",Ee,D(l.title),1)):K("",!0),s(N,{visible:(d(u)!=="tooltip"?l.showTooltip:d(b))&&e.beforeClear,trigger:"custom",placement:"right",effect:"light","tooltip-class":"border-color"},{content:i(()=>[n("div",null,[De,Be,n("div",null,[s(O,{size:"10px",type:"primary",onClick:F=>d(w)(l)},{default:i(()=>[Ve]),_:2},1032,["onClick"]),s(O,{size:"10px",onClick:t[1]||(t[1]=F=>Y(b)?b.value=!1:b=!1)},{default:i(()=>[Le]),_:1})])])]),default:i(()=>[s(U,{modelValue:l.value,"onUpdate:modelValue":F=>l.value=F,"dropdown-class":l.dropdownClass,placeholder:l.placeholder||e.placeholder,options:e.customFilter?d(h):e.options||l.options,multiple:e.multiple||l.multiple,clearable:e.clearable,disabled:e.disabled||l.disabled,filterable:e.filterable,"show-arrow":e.showArrow,prefix:l.prefix,suffix:l.suffix,animate:e.animate,placement:e.placement,"append-to-body":e.appendToBody,"not-found-text":l.notFoundText,"remote-method":e.remote?d(J):"","hide-select-label":e.hideSelectLabel,"default-open":l.defaultOpen,"max-tag-placeholder":d(k),"max-tag-count":l.maxTagCount,"label-in-value":e.labelInValue,width:e.width,"list-height":e.listHeight,bordered:e.bordered,"visible-arrow":e.visibleArrow,"max-count":l.maxCount||e.maxCount,"filter-method":e.customFilter&&e.isCustomFilter?d(C):"","default-active-first-option":!!e.allowCreateOption,"reserve-keyword":!!e.reserveKeyword,"allow-create-option":e.allowCreateOption,"before-clear":e.beforeClear?d(A)(l):()=>!0,"debounce-time":e.remote?e.debounceTime:0,onChange:F=>d(V)(F,l,e.labelInValue),onRemoveTag:d(y)},Q({_:2},[l.suffixSlot?{name:"suffix",fn:i(()=>[s(M,{src:"http://cdn.u1.huluxia.com/g4/M01/09/E4/rBAAdl-k7XOAXKK4AAAESfAf5Po739.png",style:{width:"21px",height:"21px"}})])}:void 0]),1032,["modelValue","onUpdate:modelValue","dropdown-class","placeholder","options","multiple","clearable","disabled","filterable","show-arrow","prefix","suffix","animate","placement","append-to-body","not-found-text","remote-method","hide-select-label","default-open","max-tag-placeholder","max-tag-count","label-in-value","width","list-height","bordered","visible-arrow","max-count","filter-method","default-active-first-option","reserve-keyword","allow-create-option","before-clear","debounce-time","onChange","onRemoveTag"])]),_:2},1032,["visible"]),Je,n("p",null,D(l.value),1)]))),128))]),_:2},1032,["item"]))),128)),s(H,{data:d(oe)},null,8,["data"]),s(H,{data:d(ie)},{default:i(()=>[Ge]),_:1},8,["data"]),s(H,{data:d(se)},{default:i(()=>[He]),_:1},8,["data"])])}}});export{Oe as default};
