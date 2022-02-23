import{r as x,d as h,m as d,a as n,o as a,g as o,H as i,I as b,c as l,w as s,k as m,t as k,N as z,h as C,y as r,z as p,b as c,R as w}from"./vendor.c0366ad2.js";const A=x([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value \u5C5E\u6027\uFF0C\u4FEE\u6539\u663E\u793A\u7684\u6807\u8BB0\u503C\u3002\u8BBE\u7F6E type \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u8BB0\u7684\u7C7B\u578B\u3002\u8BBE\u7F6E show-zero \u5C5E\u6027\uFF0C\u4FEE\u6539\u503C\u4E3A0\u65F6\u662F\u5426\u663E\u793A\u3002(\u9ED8\u8BA4\u4E0D\u663E\u793A)",showZero:!1,components:[{value:0,label:"\u8BC4\u8BBA (0)",color:"blue"},{value:3,label:"\u56DE\u590D",type:"primary"},{value:30,label:"\u901A\u77E5",type:"warning",btnType:"primary"},{value:90,label:"\u6D88\u606F",type:"info",size:"23px"},{value:18,label:"\u6211\u7684\u6D88\u606F",type:"success",noBtn:!0}],template:`    <template>
      <div class='badge-demo'>
        <w-switch v-model='showZero' text-inline open-text='\u4E3A0\u4E5F\u663E\u793A' off-text='\u4E3A0\u4E0D\u663E\u793A' />
        <w-badge :value='0' color='blue' :show-zero='showZero'>
          <w-button>\u8BC4\u8BBA</w-button>
        </w-badge>
        <w-badge :value='3' type='primary'>
           <w-button>\u56DE\u590D</w-button>
          </w-badge>
        <w-badge :value='30' type='warning'>
           <w-button type='primary'>\u901A\u77E5</w-button>
        </w-badge>
        <w-badge :value='90' type='info'>
           <w-button size='23px'>\u6D88\u606F</w-button>
        </w-badge>
        <w-badge :value='18' type='success'>
           <a>\u6211\u7684\u6D88\u606F</a>
        </w-badge>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            showZero: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const showZero = ref(false);
          return { showZero };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .badge-demo {
        margin: 1em;
        >.w-switch {
          width: 100%;
          margin: 0 0 0 1em;
        }
        >.w-badge {
          margin: 1em 1.5em;
        }
      }
    </style>`},{title:"\u6700\u5927\u503C",desc:"\u8BBE\u7F6E max \u5C5E\u6027\uFF0C\u4FEE\u6539\u6700\u5927\u503C\u3002(\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A '{max}+')",components:[{value:200,label:"\u6700\u5927\u503C99",max:99},{value:12,label:"\u6700\u5927\u503C10",type:"primary",max:10},{value:9,label:"\u6700\u5927\u503C8",type:"warning",btnType:"primary",max:8},{value:"12",type:"success",icon:"love",max:10,size:"26",onlyIcon:!0}],template:`    <template>
      <div class='badge-demo'>
        <w-badge :value='200' :max='99'>
          <w-button>\u6700\u5927\u503C99</w-button>
        </w-badge>
        <w-badge :value='12' :max='10' type='primary'>
          <w-button>\u6700\u5927\u503C10</w-button>
        </w-badge>
        <w-badge :value='9' :max='8' type='warning'>
          <w-button type='primary'>\u6700\u5927\u503C8</w-button>
        </w-badge>
        <w-badge :value='12' :max='10' type='success'>
          <w-button type='success' icon='love' size='26' only-icon />
        </w-badge>
      </div>
    </template>
    <style lang='scss'>
      .badge-demo {
        margin: 1em;
        > .w-badge {
          margin: 1em 1.5em;
        }
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u8BBE\u7F6E value \u5C5E\u6027\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u53EF\u4EE5\u662F\u7B26\u53F7\u7B49\u5185\u5BB9\u3002",components:[{value:"new",label:"\u8BC4\u8BBA"},{value:"hot",label:"\u56DE\u590D",type:"primary"},{value:"\u2605",label:"\u6211\u7684\u6D88\u606F",type:"warning",btnType:"primary"},{value:"\u2299",label:"\u6211\u7684\u6D88\u606F",type:"success",noBtn:!0}],template:`    <template>
      <div class='badge-demo'>
        <w-badge value='new'>
          <w-button>\u8BC4\u8BBA</w-button>
        </w-badge>
        <w-badge value='hot' type='primary'>
          <w-button>\u56DE\u590D</w-button>
        </w-badge>
        <w-badge value='\u2605' type='warning'>
          <w-button type='primary'>\u6211\u7684\u6D88\u606F</w-button>
        </w-badge>
        <w-badge value='\u2299' type='success'>
          <a>\u6211\u7684\u6D88\u606F</a>
        </w-badge>
      </div>
    </template>
    <style lang='scss'>
      .badge-demo {
        margin: 1em;
        > .w-badge {
          margin: 1em 1.5em;
        }
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u989C\u8272",desc:"\u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u8BB0\u7684\u80CC\u666F\u989C\u8272\u3002 (\u5982\u5DF2\u7ECF\u8BBE\u7F6Etype\uFF0C\u5219\u4F1A\u8986\u76D6\u5176\u81EA\u5E26\u7684\u989C\u8272)",color:"#9a8d8d",components:[{value:"new",label:"\u8BC4\u8BBA"},{value:"\u2605",label:"\u56DE\u590D",type:"warning",btnType:"primary"},{value:"3",label:"\u5173\u4E8E\u6211"},{value:"2",label:"\u52A8\u6001",type:"success",noBtn:!0,isDot:!0}],template:`    <template>
      <div class='badge-demo'>
        <div class='options'>
          \u80CC\u666F\u989C\u8272\uFF1A
          <input v-model='color' type='color' />&nbsp;&nbsp;
          {{color}}
        </div>
        <w-badge value='new' :color='color'>
          <w-button>\u8BC4\u8BBA</w-button>
        </w-badge>
        <w-badge value='hot' type='primary' :color='color'>
          <w-button type='primary'>\u56DE\u590D</w-button>
        </w-badge>
        <w-badge :value='3' :color='color'>
          <w-button>\u5173\u4E8E\u6211</w-button>
        </w-badge>
        <w-badge :value='2' :color='color' is-dot>
          <a>\u52A8\u6001</a>
        </w-badge>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            color: '#9a8d8d'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const color = ref('#9a8d8d');
          return { color };
        }
      })
    <\/script>`,style:`
    <style>
      .badge-demo {
        margin: 1em;
        > .options {
          display: flex;
          align-items: center;
        }
        > div {
          margin: 1em 1.5em;
        }
      }
    </style>`},{title:"\u5C0F\u5706\u70B9",desc:"\u8BBE\u7F6E is-dot \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u8BB0\u662F\u5426\u4EE5\u5C0F\u5706\u70B9\u5C55\u793A\u3002 (\u5982\u5DF2\u7ECF\u8BBE\u7F6Evalue\uFF0C\u5219\u4E0D\u4F1A\u663E\u793Avalue)",isDot:!0,components:[{label:"\u8BC4\u8BBA",color:"black"},{label:"\u56DE\u590D",type:"primary",color:"pink"},{label:"\u6211\u7684\u6D88\u606F",type:"warning",btnType:"primary"},{label:"\u6211\u7684\u6D88\u606F",type:"success",noBtn:!0}],template:`    <template>
      <div>
        <w-badge is-dot color='black'>
          <w-button>\u8BC4\u8BBA</w-button>
        </w-badge>
        <w-badge is-dot type='primary' color='pink'>
          <w-button>\u56DE\u590D</w-button>
        </w-badge>
        <w-badge is-dot type='warning'>
          <w-button type='primary'>\u6211\u7684\u6D88\u606F</w-button>
        </w-badge>
        <w-badge is-dot type='success'>
          <a>\u6211\u7684\u6D88\u606F</a>
        </w-badge>
      </div>  
    </template>
    <style lang='scss'>
      .badge-demo {
        margin: 1em;
        > .w-badge {
          margin: 1em 1.5em;
        }
      }
    </style>`}]),D={attribute:[{name:"value",desc:"<\u5FC5\u586B> \u663E\u793A\u503C",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"primary\u3001success\u3001warning\u3001info",default:"\u2014\u2014"},{name:"color",desc:"\u81EA\u5B9A\u4E49\u5C0F\u5706\u70B9\u6216\u72B6\u6001\u70B9\u7684\u80CC\u666F\u989C\u8272 (\u5982\u5DF2\u7ECF\u8BBE\u7F6Etype\uFF0C\u5219\u4F1A\u8986\u76D6\u5176\u81EA\u5E26\u7684\u989C\u8272)",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"max",desc:"\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A '{max}+'",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"is-dot",desc:"\u662F\u5426\u8BBE\u7F6E\u6210\u5C0F\u5706\u70B9 (\u5982\u5DF2\u7ECF\u8BBE\u7F6Evalue\uFF0C\u5219\u4E0D\u4F1A\u663E\u793Avalue)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"hidden",desc:"\u662F\u5426\u9690\u85CF badge",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-zero",desc:"\u4E3A0\u65F6\u662F\u5426\u663E\u793A\u6807\u8BB0",type:"boolean",optional:"\u2014\u2014",default:!1}]};const T={class:"badge-demo-list"},V={key:1,class:"options"},B=r(" \u80CC\u666F\u989C\u8272\uFF1A "),Z=["onUpdate:modelValue"],E={key:0},U=h({setup(F){return d("left"),d(!1),(I,N)=>{const y=n("w-switch"),g=n("w-button"),v=n("w-badge"),f=n("DemoItem"),_=n("TableList");return a(),o("div",T,[(a(!0),o(i,null,b(w(A),(t,u)=>(a(),l(f,{item:t,key:t.title},{default:s(()=>[u===0?(a(),l(y,{key:0,modelValue:t.showZero,"onUpdate:modelValue":e=>t.showZero=e,"text-inline":"","open-text":"\u4E3A0\u4E5F\u663E\u793A","off-text":"\u4E3A0\u4E0D\u663E\u793A"},null,8,["modelValue","onUpdate:modelValue"])):m("",!0),u===3?(a(),o("div",V,[B,k(C("input",{"onUpdate:modelValue":e=>t.color=e,type:"color"},null,8,Z),[[z,t.color]]),r(" \xA0 "+p(t.color),1)])):m("",!0),(a(!0),o(i,null,b(t.components,e=>(a(),o("div",{key:e},[c(v,{value:e.value,hidden:e.hidden,max:e.max,color:e.color||t.color,"is-dot":t.isDot||e.isDot,type:e.type,"show-zero":t.showZero},{default:s(()=>[e.noBtn?(a(),o("a",E,p(e.label),1)):(a(),l(g,{key:1,type:e.btnType,size:e.size,icon:e.icon,"only-icon":e.onlyIcon},{default:s(()=>[r(p(e.label),1)]),_:2},1032,["type","size","icon","only-icon"]))]),_:2},1032,["value","hidden","max","color","is-dot","type","show-zero"])]))),128))]),_:2},1032,["item"]))),128)),c(_,{data:w(D)},null,8,["data"])])}}});export{U as default};
