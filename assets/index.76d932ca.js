import{r as b,d as S,m as u,a as n,o as i,g as o,H as d,I as c,c as U,w as p,h as a,b as s,k as f,P as A,y as v,z as k,a3 as C,R as w}from"./vendor.c0366ad2.js";const B=b([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E title \u5C5E\u6027\uFF0C\u7ED9\u6570\u503C\u589E\u52A0\u6807\u9898\uFF0C\u8BBE\u7F6E value \u5C5E\u6027\uFF0C\u5B9A\u4E49\u6570\u503C\u3002",components:[{title:"Downloads",value:125751},{title:"Uploads",value:90128}],template:`    <template>
      <div class='statistic-demo'>
        <w-statistic title="Downloads" :value="125751" />
        <w-statistic title="Uploads" :value="90128" />
      </div>
    </template>`,style:`
    <style>
      .statistic-demo > .w-statistic {
        margin: 1em;
      }
    </style>`},{title:"\u5012\u5E8F\u5C55\u793A",desc:"\u8BBE\u7F6E reverse \u5C5E\u6027\uFF0C\u6539\u53D8\u6807\u9898\u548C\u6570\u503C\u7684\u4F4D\u7F6E\u3002",components:[{title:"Downloads",value:125751,reverse:!0},{title:"Uploads",value:90128,reverse:!0}],template:`    <template>
      <div class='statistic-demo'>
        <w-statistic title="Downloads" :value="125751" reverse />
        <w-statistic title="Uploads" :value="90128" reverse />
      </div>
    </template>`,style:`
    <style>
      .statistic-demo > .w-statistic {
        margin: 1em;
      }
    </style>`},{title:"\u5C55\u793A\u5343\u5206\u4F4D",desc:"\u8BBE\u7F6E show-separator \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF0C\u8BBE\u7F6E precision \u5C5E\u6027\uFF0C\u4FEE\u6539\u5C0F\u6570\u4FDD\u7559\u4F4D\u6570\u3002",components:[{title:"Downloads",value:8868528,showSeparator:!0,precision:0}],template:`    <template>
      <div class='statistic-demo'>
        <div class="options">
          <div>
            <span>\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF1A</span>
            <w-switch 
              v-model="showSeparator" 
              off-text="\u4E0D\u663E\u793A"
              open-text="\u663E\u793A"  
              text-inline
            />
          </div>
          <div>
            <span>\u5C0F\u6570\u70B9\uFF1A</span>
            <w-switch 
              v-model="precision" 
              off-text="2\u4F4D" 
              open-text="0\u4F4D" 
              :off-value="2"
              :open-value="0" 
              text-inline
            />
          </div>
        </div>
        <w-statistic title="Downloads" :value="8868528" 
          :show-separator="showSeparator" :precision="precision" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            showSeparator: true,
            precision: 0
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const showSeparator = ref(true),
                precision = ref(0);
          return { showSeparator, precision };
        }
      })
    <\/script>`,style:`
    <style lang="scss">
      .statistic-demo {
        > .options {
          display: inline-flex;
          > div {
            display: inline-flex;
            align-items: center;
            margin: .5em;
          }
        }
        > .w-statistic {
          margin: 1em;
        }
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u524D\u7F00\u540E\u7F00",desc:"\u8BBE\u7F6E prefix \u5C5E\u6027\uFF0C\u6216\u8005 prefix \u63D2\u69FD\uFF0C\u7ED9\u6570\u503C\u6DFB\u52A0\u524D\u7F00\u3002\u8BBE\u7F6E suffix \u5C5E\u6027\uFF0C\u6216\u8005 suffix \u63D2\u69FD\uFF0C\u7ED9\u6570\u503C\u6DFB\u52A0\u540E\u7F00\u3002",components:[{title:"Comments",value:6745,icon:"zan",prefixSlot:!0},{title:"Likes",value:850,icon:"love",prefixSlot:!0},{title:"\u8F6C\u53D1\u6570",value:5820,suffix:"\u6B21",suffixSlot:!0},{title:"\u6536\u85CF\u6570",value:960,suffix:"\u7BC7",suffixSlot:!0}],template:`    <template>
      <div class='statistic-demo'>
        <w-statistic title="Comments" :value="6745">
          <template #prefix>
            <w-icon name="zan" />
          </template>
        </w-statistic>
        <w-statistic title="Likes" :value="850">
          <template #prefix>
            <w-icon name="love" />
          </template>
        </w-statistic>
        <w-statistic title="\u8F6C\u53D1\u6570" :value="5820" suffix="\u6B21">
        <w-statistic title="\u6536\u85CF\u6570" :value="960" suffix="\u7BC7">
      </div>
    </template>`,style:`
    <style>
      .statistic-demo > .w-statistic {
        margin: 1em;
      }
    </style>`},{title:"\u6570\u503C\u52A8\u753B",desc:"\u5C06\u4E00\u4E2A\u5BB9\u5668\u5206\u5272\u6210\u4E24\u5757\u533A\u57DF\uFF0C\u8BBE\u7F6E v-model \u5C5E\u6027\u83B7\u53D6\u5BF9\u5E94\u7684\u503C (\u7C7B\u578B\u4E3A\u6570\u7EC4) \u3002",start:!1,animation:!0,valueFrom:0,animationDuration:2e3,components:[{title:"Downloads",value:66580},{title:"Uploads",value:2680},{title:"Growth Rate",value:60.686,precision:2,suffix:"%"}],template:`    <template>
      <div class='statistic-demo'>
        <div class="options">
          <div>
            <span>\u52A8\u753B\uFF1A</span>
            <w-switch 
              v-model="start"
              :loading="start"
              open-text="\u6301\u7EED\u4E2D" 
              off-text="\u5F00\u59CB"
              text-inline
            />
          </div>
          <div>
            <span>\u6301\u7EED\u65F6\u95F4\uFF1A</span>
            <w-input-number 
              v-model="animationDuration"
              :min='1000' 
              :max="100000" 
              :step="1000" 
              size="small" 
            />
            &nbsp;
            <span>\u6BEB\u79D2</span>
          </div>     
        </div>
        <w-statistic v-for="item in list" 
          :key="item.value"
          :title="item.title" :value="item.value" 
          :precision='item.precision'
          :start="start"
          :value-from="valueFrom" animation
          :animation-duration='animationDuration'
          @animate-finish="animateFinish"
        />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { title: "Downloads", value:66580 },
              { title: "Uploads", value:2680 },
              { title: "Growth Rate", value: 60.686, precision: 2 }
            ],
            start: false,
            valueFrom: 0,
            animationDuration: 2000
          }
        },
        methods: {
          animateFinish() {
            this.start = false;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
                  { title: "Downloads", value:66580 },
                  { title: "Uploads", value:2680 },
                  { title: "Growth Rate", value: 60.686, precision: 2 }
                ]),
                start = ref(false),
                valueFrom = ref(0),
                animationDuration = ref(2000),
                animateFinish = () => {
                  start.value = false;
                };
          return { list, start, valueFrom, animationDuration, animateFinish };
        }
      })
    <\/script>`,style:`
    <style lang="scss">
      .statistic-demo {
        > .options {
          display: inline-flex;
          > div {
            display: inline-flex;
            align-items: center;
            margin: .5em;
          }
        }
        > .w-statistic {
          margin: 1em;
        }
      }
    </style>`}]),E={attribute:[{name:"title",desc:"\u6570\u503C\u5BF9\u5E94\u7684\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"div"},{name:"value",desc:"\u6570\u503C\u663E\u793A\u7684\u503C",type:"number\u3001string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"precision",desc:"\u5C0F\u6570\u4FDD\u7559\u4F4D\u6570",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-separator",desc:"",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"reverse",desc:"\u6807\u9898\u548C\u6570\u503C\u7684\u987A\u5E8F\u4E92\u6362\u3002",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"prefix",desc:"\u6570\u503C\u7684\u524D\u7F00",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"suffix",desc:"\u6570\u503C\u7684\u540E\u7F00",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"animation",desc:"\u662F\u5426\u542F\u7528\u52A8\u753B",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"start",desc:"\u662F\u5426\u5F00\u59CB\u52A8\u753B",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"value-from",desc:"\u52A8\u753B\u7684\u8D77\u59CB\u6570\u503C",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"animation-duration",desc:"\u52A8\u753B\u6301\u7EED\u7684\u65F6\u95F4",type:"number",optional:"\u2014\u2014",default:2e3}],slot:[{name:"title",desc:"\u81EA\u5B9A\u4E49\u6807\u9898"},{name:"prefix",desc:"\u81EA\u5B9A\u4E49\u524D\u7F00\u5185\u5BB9"},{name:"suffix",desc:"\u81EA\u5B9A\u4E49\u540E\u7F00\u5185\u5BB9"}],event:[{name:"change",desc:"\u503C\u6539\u53D8\u65F6\u89E6\u53D1",callbackParams:"value, oldValue"},{name:"animate-finish",desc:"\u6570\u503C\u52A8\u753B\u5B8C\u6210\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}],method:[{name:"reset",desc:"\u542F\u7528\u52A8\u753B\u65F6\uFF0C\u5C06\u503C\u91CD\u7F6E\u4E3A value-from",params:"\u2014\u2014"}]};const L={class:"statistic-demo-list"},z={key:0,class:"options"},N=a("span",null,"\u52A8\u753B\uFF1A",-1),P=a("span",null,"\u6301\u7EED\u65F6\u95F4\uFF1A",-1),R=v(" \xA0 "),G=a("span",null,"\u6BEB\u79D2",-1),I={key:0,class:"options"},T=a("span",null,"\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF1A",-1),j=a("span",null,"\u5C0F\u6570\u70B9\uFF1A",-1),J=S({setup(H){u(!1),u(125670),u(-10),u(null);const x=l=>{console.log(l)},_=l=>{l.start=!1};return(l,$)=>{const m=n("w-switch"),y=n("w-input-number"),h=n("w-icon"),D=n("w-statistic"),F=n("DemoItem"),g=n("TableList");return i(),o("div",L,[(i(!0),o(d,null,c(w(B),(e,V)=>(i(),U(F,{item:e,key:e.title},{default:p(()=>[e.animation?(i(),o("div",z,[a("div",null,[N,s(m,{modelValue:e.start,"onUpdate:modelValue":t=>e.start=t,loading:e.start,"open-text":"\u6301\u7EED\u4E2D","off-text":"\u5F00\u59CB","text-inline":"",onChange:x},null,8,["modelValue","onUpdate:modelValue","loading"])]),a("div",null,[P,s(y,{modelValue:e.animationDuration,"onUpdate:modelValue":t=>e.animationDuration=t,min:500,max:1e4,step:500,size:"small"},null,8,["modelValue","onUpdate:modelValue"]),R,G])])):f("",!0),(i(!0),o(d,null,c(e.components,t=>(i(),o("div",{key:t.value},[V===2?(i(),o("div",I,[a("div",null,[T,s(m,{modelValue:t.showSeparator,"onUpdate:modelValue":r=>t.showSeparator=r,"off-text":"\u4E0D\u663E\u793A","open-text":"\u663E\u793A","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])]),a("div",null,[j,s(m,{modelValue:t.precision,"onUpdate:modelValue":r=>t.precision=r,"off-text":"2\u4F4D","open-text":"0\u4F4D","off-value":2,"open-value":0,"text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])])):f("",!0),s(D,C(t,{animation:e.animation,start:e.start,"value-from":e.valueFrom,animationDuration:e.animationDuration,onAnimateFinish:r=>_(e)}),A({_:2},[t.prefixSlot?{name:"prefix",fn:p(()=>[s(h,{name:t.icon},null,8,["name"])])}:void 0,t.suffixSlot?{name:"suffix",fn:p(()=>[v(k(t.suffix),1)])}:void 0]),1040,["animation","start","value-from","animationDuration","onAnimateFinish"])]))),128))]),_:2},1032,["item"]))),128)),s(g,{data:w(E)},null,8,["data"])])}}});export{J as default};
