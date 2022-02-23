import"./index.c63351a7.js";import{r as y,d as C,m,C as H,a as p,o as t,g as o,H as i,I as r,c as d,w as s,h as c,z as n,b,y as u,k as f,R as v,n as j,i as w}from"./vendor.c0366ad2.js";const z=y([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E placement \u5C5E\u6027\uFF0C\u5728\u4E0D\u540C\u7684\u65B9\u5411\u663E\u793A Tooltip\u3002\u63D0\u4F9B\u4E8612\u4E2A\u4F4D\u7F6E\uFF0C\u5185\u5BB9\u53EF\u4EE5\u4F7F\u7528\u5C5E\u6027 content\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD #content",components:[{}],template:`    <template>
      <div class='tooltip-demo'>
        <div v-for='item in tooltipDemo' :key='item.className' :class='item.className'>
          <w-tooltip v-for='tooltip in item.list' :key='tooltip' :placement='tooltip.placement'>
            <template #content>
              <p v-for='i in 5' :key='i'>
                {{i+' '+tooltip.label}} {{tooltip.placement}}
              </p>
            </template>
            <w-button>{{ tooltip.label }}</w-button>
          </w-tooltip>
        </div>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            tooltipDemo: [
              {
                className: 'top',
                list: [
                  { placement: 'top-left', label:'\u4E0A\u5DE6' },
                  { placement: 'top', label:'\u4E0A\u8FB9' },
                  { placement: 'top-right', label:'\u4E0A\u53F3' }
                ]
              },
              {
                className: 'left',
                list: [
                  { placement: 'left-top', label: '\u5DE6\u4E0A' },
                  { placement: 'left', label: '\u5DE6\u8FB9' },
                  { placement: 'left-bottom', label: '\u5DE6\u4E0B' }
                ]
              },
              {
                className: 'right',
                list: [
                  { placement: 'right-top', label: '\u53F3\u4E0A' },
                  { placement: 'right', label: '\u53F3\u8FB9' },
                  { placement: 'right-bottom', label: '\u53F3\u4E0B' }
                ]
              },
              {
                className: 'bottom',
                list: [
                  { placement: 'bottom-left', label: '\u4E0B\u5DE6' },
                  { placement: 'bottom', label: '\u4E0B\u8FB9' },
                  { placement: 'bottom-right', label: '\u4E0B\u53F3' }
                ]
              }
            ]
          }
        }
      }
    <\/script>
    <style lang='scss'>
      .tooltip-demo {
        position: relative;
        margin: 0 auto;
        width: 470px;
        height: 290px;
        @media(max-width: 500px) {
          width: 100%;
        }
        .top,
        .bottom { 
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          > * {
            &:not(:first-child) {
              margin-left: 1em;
            }
          } 
        }
        .left,
        .right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          flex-direction: column;
          > * {
            &:not(:first-child) {
              margin-top: 1em;
            }
          }
        }
        .bottom {
          top: auto;
          bottom: 0;
        }
        .right {
          right: 0;
          left: auto;
        }
        > div {
          display: flex;
        }
      }
    </style>`},{title:"\u5BF9\u6BD4\u5927\u5C0F",desc:"\u5F53\u76EE\u6807\u5143\u7D20\u6BD4 tooltip \u9AD8 / \u957F\u65F6\uFF0C\u7BAD\u5934\u7684\u663E\u793A\u7684\u4F4D\u7F6E\u4E0D\u4F1A\u4E71\u3002",height:"120px",components:[{}],template:`    <template>
      <div class='tooltip-demo'>
        <div v-for='item in tooltipDemo' :key='item.className' :class='item.className'>
          <w-tooltip v-for='tooltip in item.list' :key='tooltip' :placement='tooltip.placement'>
            <template #content>
              <p v-for='i in 5' :key='item'>
                {{ i + ' ' + tooltip.label }}
                {{ tooltip.placement }}
              </p>
            </template>
            <w-button style='height:120px'>
              {{ tooltip.label }}
            </w-button>
          </w-tooltip>
        </div>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            tooltipDemo: [
              {
                className: 'top',
                list: [
                  { placement: 'top-left', label: '\u4E0A\u5DE6' },
                  { placement: 'top', label: '\u4E0A\u8FB9' },
                  { placement: 'top-right', label: '\u4E0A\u53F3' }
                ]
              },
              {
                className: 'left',
                list: [
                  { placement: 'left-top', label: '\u5DE6\u4E0A' },
                  { placement: 'left', label: '\u5DE6\u8FB9' },
                  { placement: 'left-bottom', label: '\u5DE6\u4E0B' }
                ]
              },
              {
                className: 'right',
                list: [
                  { placement: 'right-top', label: '\u53F3\u4E0A' },
                  { placement: 'right', label: '\u53F3\u8FB9' },
                  { placement: 'right-bottom', label: '\u53F3\u4E0B' }
                ]
              },
              {
                className: 'bottom',
                list: [
                  { placement: 'bottom-left', label: '\u4E0B\u5DE6' },
                  { placement: 'bottom', label: '\u4E0B\u8FB9' },
                  { placement: 'bottom-right', label: '\u4E0B\u53F3' }
                ]
              }
            ]
          }
        }
      }
    <\/script>
    <style lang='scss'>
      .tooltip-demo {
        position: relative;
        margin: 0 auto;
        width: 470px;
        height: 520px;
        @media(max-width: 500px) {
          width: 100%;
        }
        .top,
        .bottom {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          > * {
            &:not(:first-child) {
              margin-left: 1em;
            }
          } 
        }
        .left,
        .right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          flex-direction: column;
          > * {
            &:not(:first-child) {
              margin-top: 1em;
            }
          }
        }
        .bottom {
          top: auto;
          bottom: 0;
        }
        .right {
          right: 0;
          left: auto;
        }
        > div {
          display: flex;
        }
      }
    </style>`},{title:"\u66F4\u591A\u914D\u7F6E",desc:"\u53EF\u901A\u8FC7\u672C\u4F8B\u5B50\u6D4B\u8BD5\u76F8\u5173\u7684\u53C2\u6570\u3002\u5177\u4F53\u53C2\u6570\u7684\u4FE1\u606F\u53EF\u4EE5\u5728 Tooltip \u6587\u5B57\u63D0\u793A \u5C5E\u6027\u91CC\u67E5\u770B\u3002",openDelay:0,hideDelay:50,trigger:"hover",effect:"dark",enterable:!0,destroyOnHide:!1,disabled:!1,visibleArrow:!0,visible:!1,options:!0,appendToBody:!0,animate:"fade",maxHeight:"",width:"auto",components:[{}],template:`    <template>
      <div class='tooltip-demo-2'>
        <div class='options'>
          <div v-for='option in options' :key='option'>
            <span>{{ option.title }}\uFF1A</span>
            <w-radio-group v-model:checked='obj[option.attr]'>
              <w-radio v-for='radio in option.radio' :key='radio' :value='radio.value'>
                {{ radio.label }}
              </w-radio>
            </w-radio-group>
          </div>
        </div>
        <div class='tooltip'>
          <div :class='tooltip.className' v-for='tooltip in tooltipDemo' :key='tooltip.className'>
            <w-tooltip v-for='t in tooltip.list' :key='t' v-bind='obj'
              :placement='t.placement' :visible='tooltip.visible' 
              >
              <template #content>
                <p v-for='i in 5' :key='i'>
                  {{ i + ' ' + t.label }} {{ t.placement }}
                </p>
              </template>
              <w-button>{{ t.label }}</w-button>
            </w-tooltip>
          </div>
        </div>
      </div>
    </template>
    <script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const tooltipDemo = reactive([
                    {
                      className: 'top',
                      list: [
                        { placement: 'top-left', label: '\u4E0A\u5DE6' },
                        { placement: 'top', label: '\u4E0A\u8FB9' },
                        { placement: 'top-right', label: '\u4E0A\u53F3' }
                      ]
                    },
                    {
                      className: 'left',
                      list: [
                        { placement: 'left-top', label: '\u5DE6\u4E0A' },
                        { placement: 'left', label: '\u5DE6\u8FB9' },
                        { placement: 'left-bottom', label: '\u5DE6\u4E0B' }
                      ]
                    },
                    {
                      className: 'right',
                      list: [
                        { placement: 'right-top', label: '\u53F3\u4E0A' },
                        { placement: 'right', label: '\u53F3\u8FB9' },
                        { placement: 'right-bottom', label: '\u53F3\u4E0B' }
                      ]
                    },
                    {
                      className: 'bottom',
                      list: [
                        { placement: 'bottom-left', label: '\u4E0B\u5DE6' },
                        { placement: 'bottom', label: '\u4E0B\u8FB9' },
                        { placement: 'bottom-right', label: '\u4E0B\u53F3' }
                      ]
                    }
                ]);
                options = [
                  {
                    title: '\u4E3B\u9898',
                    attr: 'effect',
                    radio: [
                      { value: 'dark', label: '\u9ED1\u8272' },
                      { value: 'light', label: '\u767D\u8272' }
                    ]
                  },
                  {
                    title: 'openDelay',
                    attr: 'openDelay',
                    radio: [
                      { value: 0, label: '\u65E0\u5EF6\u8FDF' },
                      { value: 1000, label: '\u5EF6\u8FDF1\u79D2' }
                    ]
                  },
                  {
                    title: 'hideDelay',
                    attr: 'hideDelay',
                    radio: [
                      { value: 50, label: '\u65E0\u5EF6\u8FDF' },
                      { value: 1000, label: '\u5EF6\u8FDF1\u79D2' }
                    ]
                  },
                  {
                    title: '\u89E6\u53D1\u65B9\u5F0F',
                    attr: 'trigger',
                    radio: [
                      { value: 'hover', label: 'hover' },
                      { value: 'click', label: 'click' },
                      { value: 'custom', label: '\u81EA\u5B9A\u4E49' }
                    ]
                  },
                  {
                    title: '\u9F20\u6807\u662F\u5426\u53EF\u79FB\u5165tooltip\u5185',
                    attr: 'enterable',
                    radio:[
                      { value: true, label: '\u662F' },
                      { value: false, label: '\u5426' }
                    ]  
                  },
                  {
                    title: '\u662F\u5426\u663E\u793A\u7BAD\u5934',
                    attr: 'visibleArrow',
                    radio: [
                      { value: true, label: '\u662F' },
                      { value: false, label: '\u5426' }
                    ]
                  },
                  {
                    title: '\u662F\u5426\u7981\u7528tooltip',
                    attr: 'disabled',
                    radio: [
                      { value: true, label: '\u662F' },
                      { value: false, label: '\u5426' }
                    ]
                  },
                  {
                    title: '\u662F\u5426\u5728body\u4E0B',
                    attr: 'appendToBody',
                    radio: [
                      { value: true, label: '\u662F' },
                      { value: false, label: '\u5426' }
                    ]
                  },
                  {
                    title: '\u9690\u85CF\u65F6\u662F\u5426\u5220\u9664\u5185\u5BB9',
                    attr: 'destroyOnHide',
                    radio: [
                      { value: true, label: '\u662F' },
                      { value: false, label: '\u5426' }
                    ]
                  },
                  {
                    title: '\u52A8\u753B',
                    attr: 'animate',
                    radio: [
                      { value: 'fade', label: '\u6DE1\u5165' },
                      { value: 'zoom', label: '\u7F29\u653E' },
                      { value: 'fold', label: '\u6298\u53E0' },
                      { value: 'slide', label: '\u6ED1\u52A8' }
                    ]
                  },
                  {
                    title: '\u6700\u5927\u9AD8\u5EA6',
                    attr: 'maxHeight',
                    radio: [
                      { value: '', label: '\u65E0' },
                      { value: 40, label: '40px' }
                    ]
                  },
                  {
                    title: '\u5BBD\u5EA6',
                    attr: 'width',
                    radio: [
                      { value: 'auto', label: 'auto' },
                      { value: 160, label: '160px' }
                    ]
                  }
                ];
                obj = reactive({
                  openDelay: 0,
                  hideDelay: 50,
                  trigger: 'hover',
                  effect: 'dark',
                  enterable: true,
                  destroyOnHide: false,
                  disabled: false,
                  visibleArrow: true,
                  visible: false,
                  options: true,
                  appendToBody: true,
                  animate: 'fade',
                  maxHeight: ''
                });
          return { tooltipDemo, options, obj };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .tooltip-demo-2 {
        width: 750px;
        flex-direction: column;
        > .options {
          display: flex;
          flex-wrap: wrap; 
          > div {
            width: 48%;
            display: flex;
            align-items: center;
            margin-bottom: 1.1em;
            > span {
              line-height: 1.6;
              min-width: 48px;
            }
            > .w-radio-group {
              white-space: nowrap;
              flex-wrap: nowrap; 
            }
            @media(max-width: 500px) {
              width: 100%;
              margin-bottom: 1em;
            }
          }
        }
        > .tooltip {
          position: relative;
          margin: 0 auto;
          width: 470px;
          height: 290px;
          @media(max-width: 500px) {
            width: 100%;
          }
          .top,
          .bottom {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            > * {
              &:not(:first-child) {
                margin-left: 1em;
              }
            } 
          }
          .left,.right{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            flex-direction: column;
            >*{
              &:not(:first-child){
                margin-top: 1em;
              }
            }
          }
          .bottom {
            top: auto;
            bottom: 0;
          }
          .right {
            right: 0;
            left: auto;
          }
          > div {
            display: flex;
          }
        }
      }
    </style>`}]),O={attribute:[{name:"trigger",desc:"\u89E6\u53D1\u65B9\u5F0F",type:"string",optional:"hover\u3001click\u3001custom",default:"hover"},{name:"placement",desc:"Tooltip \u7684\u51FA\u73B0\u4F4D\u7F6E",type:"string",optional:"top\u3001top-left\u3001top-right\u3001bottom\u3001bottom-left\u3001bottom-right\u3001left\u3001left-top\u3001left-bottom\u3001right\u3001right-top\u3001right-bottom",default:"top"},{name:"visible (v-model)",desc:"\u7528\u4E8E\u624B\u52A8\u63A7\u5236 (trigger='custom'\u65F6) Tooltip \u663E\u9690",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"width",desc:"Tooltip \u7684\u5BBD\u5EA6\uFF0C\u5F53\u8D85\u51FA\u6700\u5927\u503C\u540E\uFF0C\u6587\u672C\u5C06\u81EA\u52A8\u6362\u884C\u3002",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"tooltip-class",desc:"Tooltip \u7684class",type:"string\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"effect",desc:"\u63D0\u4F9B\u7684\u4E3B\u9898\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49 Tooltip \u7684\u989C\u8272",type:"string",optional:"dark\u3001light",default:"dark"},{name:"content",desc:"\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot#content \u4F20\u5165 DOM",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"Tooltip \u662F\u5426\u53EF\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"visible-arrow",desc:"\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"open-delay",desc:"\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2",type:"number",optional:"\u2014\u2014",default:0},{name:"hide-delay",desc:"\u5EF6\u8FDF\u9690\u85CF\uFF0C\u5355\u4F4D\u6BEB\u79D2",type:"number",optional:"\u2014\u2014",default:50},{name:"enterable",desc:"\u9F20\u6807\u662F\u5426\u53EF\u8FDB\u5165\u5230 Tooltip \u4E2D",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"append-to-body",desc:"\u6307\u5B9A Tooltip \u662F\u5426\u5728 body \u5143\u7D20\u4E0B\u4E00\u7EA7 (\u63A8\u8350\u4E3Atrue)\u3002",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"destroy-on-hide",desc:"\u9690\u85CF\u65F6\u662F\u5426\u5220\u9664 Tooltip",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"max-height",desc:"Tooltip \u7684\u6700\u5927\u9AD8\u5EA6 (\u8BBE\u7F6E\u4E4B\u540E\uFF0C\u5F53\u5185\u5BB9\u8D85\u51FA\u6307\u5B9A\u9AD8\u5EA6\u65F6\u51FA\u73B0\u6EDA\u52A8\u6761)",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"}],event:[{name:"show",desc:"Tooltip \u663E\u793A\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"},{name:"hide",desc:"Tooltip \u9690\u85CF\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}],slot:[{name:"\u2014\u2014",desc:"\u76EE\u6807\u5143\u7D20"},{name:"content",desc:"Tooltip\u7684\u5185\u5BB9\uFF0C\u5B9A\u4E49\u6B64 slot \u65F6\uFF0C\u4F1A\u8986\u76D6 props content"}]};const L={class:"tooltip-demo-list"},V={key:0,class:"options",style:{"margin-bottom":"2em"}},S=C({setup(I){m(!1),m(null),m(null);const x=y([{className:"top",list:[{placement:"top-left",label:"\u4E0A\u5DE6"},{placement:"top",label:"\u4E0A\u8FB9"},{placement:"top-right",label:"\u4E0A\u53F3"}]},{className:"left",list:[{placement:"left-top",label:"\u5DE6\u4E0A"},{placement:"left",label:"\u5DE6\u8FB9"},{placement:"left-bottom",label:"\u5DE6\u4E0B"}]},{className:"right",list:[{placement:"right-top",label:"\u53F3\u4E0A"},{placement:"right",label:"\u53F3\u8FB9"},{placement:"right-bottom",label:"\u53F3\u4E0B"}]},{className:"bottom",list:[{placement:"bottom-left",label:"\u4E0B\u5DE6"},{placement:"bottom",label:"\u4E0B\u8FB9"},{placement:"bottom-right",label:"\u4E0B\u53F3"}]}]),k=[{title:"\u4E3B\u9898",attr:"effect",radio:[{value:"dark",label:"dark"},{value:"light",label:"light"},{value:"blue",label:"blue"}]},{title:"openDelay",attr:"openDelay",radio:[{value:0,label:"\u65E0\u5EF6\u8FDF"},{value:1e3,label:"\u5EF6\u8FDF1\u79D2"}]},{title:"hideDelay",attr:"hideDelay",radio:[{value:50,label:"\u65E0\u5EF6\u8FDF"},{value:1e3,label:"\u5EF6\u8FDF1\u79D2"}]},{title:"\u89E6\u53D1\u65B9\u5F0F",attr:"trigger",radio:[{value:"hover",label:"hover"},{value:"click",label:"click"},{value:"custom",label:"\u81EA\u5B9A\u4E49"}]},{title:"\u9F20\u6807\u53EF\u79FB\u5165tooltip\u5185",attr:"enterable",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u663E\u793A\u7BAD\u5934",attr:"visibleArrow",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u7981\u7528tooltip",attr:"disabled",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u5728body\u4E0B",attr:"appendToBody",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u9690\u85CF\u65F6\u5220\u9664\u5185\u5BB9",attr:"destroyOnHide",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u52A8\u753B",attr:"animate",radio:[{value:"fade",label:"\u6DE1\u5165"},{value:"zoom",label:"\u7F29\u653E"},{value:"fold",label:"\u6298\u53E0"},{value:"slide",label:"\u6ED1\u52A8"}]},{title:"\u6700\u5927\u9AD8\u5EA6",attr:"maxHeight",radio:[{value:"",label:"\u65E0"},{value:40,label:"40px"}]},{title:"\u5BBD\u5EA6",attr:"width",radio:[{value:"auto",label:"auto"},{value:160,label:"160px"}]}];return m(!1),H(()=>{}),(X,Y)=>{const D=p("w-radio"),_=p("w-radio-group"),E=p("w-tag"),F=p("w-button"),B=p("w-tooltip"),N=p("DemoItem"),T=p("TableList");return t(),o("div",L,[(t(!0),o(i,null,r(v(z),(e,h)=>(t(),d(N,{item:e,key:e.title},{default:s(()=>[(t(!0),o(i,null,r(e.components,A=>(t(),o("div",{key:A},[h===2?(t(),o("div",V,[(t(),o(i,null,r(k,l=>c("div",null,[c("span",null,n(l.title)+"\uFF1A",1),b(_,{checked:e[l.attr],"onUpdate:checked":a=>e[l.attr]=a},{default:s(()=>[(t(!0),o(i,null,r(l.radio,a=>(t(),d(D,{value:a.value,key:a},{default:s(()=>[u(n(a.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"])])),64))])):f("",!0),c("div",{class:"tooltip-demo",style:w({height:e.height?"560px":"290px"})},[(t(!0),o(i,null,r(v(x),l=>(t(),o("div",{class:j(l.className),key:l.className},[e.trigger==="custom"?(t(),d(E,{key:0,title:"\u70B9\u6211 "+(l.visible?"\u9690\u85CF":"\u663E\u793A ")+l.className+" \u90E8\u5206\u7684 Tooltip",type:"success",onClick:a=>l.visible=!l.visible},{default:s(()=>[u(n(l.visible?"\u9690\u85CF":"\u663E\u793A")+" "+n(l.className+" \u90E8\u5206\u7684"),1)]),_:2},1032,["title","onClick"])):f("",!0),(t(!0),o(i,null,r(l.list,a=>(t(),d(B,{key:a,placement:a.placement,"open-delay":e.openDelay,"hide-delay":e.hideDelay,enterable:e.enterable,animate:e.animate,"append-to-body":e.appendToBody,trigger:e.trigger,disabled:e.disabled,"visible-arrow":e.visibleArrow,visible:h===2?l.visible:!1,"max-height":e.maxHeight,width:e.width,effect:e.effect},{content:s(()=>[(t(),o(i,null,r(3,g=>c("p",{key:g},[u(n(g+" "+a.label)+" - "+n(a.placement)+" ",1),a.placement.length<=5?(t(),o(i,{key:0},[u(" \xA0"+n(a.label+" "+a.placement),1)],64)):f("",!0)])),64))]),default:s(()=>[b(F,{style:w({height:e.height||""})},{default:s(()=>[u(n(a.label),1)]),_:2},1032,["style"])]),_:2},1032,["placement","open-delay","hide-delay","enterable","animate","append-to-body","trigger","disabled","visible-arrow","visible","max-height","width","effect"]))),128))],2))),128))],4)]))),128))]),_:2},1032,["item"]))),128)),b(T,{data:v(O)},null,8,["data"])])}}});export{S as default};
