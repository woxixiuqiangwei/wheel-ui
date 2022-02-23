import{r as w,d as k,m as A,a as l,o as n,g as o,H as y,I as h,c as V,w as c,b as p,k as a,R as u,h as d,z as N,y as _}from"./vendor.c0366ad2.js";const z=w([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A InputNumber \u7684\u503C\u3002",components:[{num:""}],template:`    <template>
      <div style='display:flex;align-items:center;'>
        <w-button @click='focus'>\u83B7\u5F97\u7126\u70B9</w-button>
        <w-button @click='select'>\u9009\u4E2D\u503C</w-button>
        <w-input-number v-model='NumberValue' style='margin-left: 2em;' ref='inputNumber' />
        <span style='margin-left: 1em;'>
          \u5F53\u524D\u503C\uFF1A{{ NumberValue }}
        </span>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            NumberValue: 1
          }
        },
        methods: {
          focus() {
            this.$refs.inputNumber.focus();
          },
          select() {
            this.$refs.inputNumber.select();
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const NumberValue = ref(1),
                inputNumber = ref(null),
                focus = () => {
                  inputNumber.value.focus();
                },
                select = () => {
                  inputNumber.value.select();
                };
          return { NumberValue, inputNumber, focus, select };
        }
      })
    <\/script>`},{title:"\u6309\u94AE\u4F4D\u7F6E",desc:"\u8BBE\u7F6E controls-position \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6309\u94AE\u7684\u4F4D\u7F6E (\u4E3A right \u65F6\u5728\u53F3\u8FB9\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u5728\u4E24\u8FB9)\u3002",controlsPostion:"right",components:[{num:1}],template:`    <template>
      <w-input-number v-model="num" controls-postion="right" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            num: 1
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const num = ref(1);
          return { num };
        }
      })
    <\/script>`},{title:"\u5C3A\u5BF8",desc:"\u8BBE\u7F6E size \u5C5E\u6027\u4E3Amedium\u3001small\uFF0C\u4FEE\u6539 InputNumber \u7684\u5C3A\u5BF8\u3002",controlsPostion:"right",components:[{num:1},{num:1,size:"medium"},{num:1,size:"small"}],template:`    <template>
      <div class="options">
        <span>\u6309\u94AE\u4F4D\u7F6E\uFF1A</span>
        <w-switch
          v-model="item.controlsPostion"
          open-text="\u53F3\u8FB9" off-text="\u4E24\u8FB9"
          open-value="right" off-value=""
          text-inline
        />
      </div>
      <div>
        <w-input-number v-for="input in inputList" v-model="input.num"
          :key="input" :size="input.size" 
          :controls-postion="i===0?'':'right'" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            inputList: [
              { num: 1 },
              { num: 1, size: 'medium' },
              { num: 1, size: 'small' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const inputList = reactive([
            { num: 1},
            { num: 1, size: 'medium' },
            { num: 1, size: 'small' }
          ]);
          return { inputList };
        }
      })
    <\/script>`},{title:"\u6307\u793A\u5668\u663E\u793A",desc:"\u6307\u793A\u5668\u9ED8\u8BA4\u4E00\u76F4\u663E\u793A\uFF0C\u8BBE\u7F6Econtrols\u5C5E\u6027\uFF0Chover\u4E3A\u9F20\u6807\u79FB\u5165\u8BA1\u6570\u5668\u65F6\u663E\u793A\u6307\u793A\u5668\uFF0Cnever\u4E3A\u4E0D\u663E\u793A\u6307\u793A\u5668\u3002",components:[{num:1},{num:1,controls:"hover"},{num:1,controls:"never"}],template:`    <template>
      <div>
        <w-input-number v-for='input in inputList' v-model='input.value' :key='input' 
          :controls='input.controls' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            inputList: [
              { num:1 },
              { num:1, controls: 'hover' },
              { num:1, controls: 'never' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const inputList = reactive([
            { num:1 },
            { num:1, controls: 'hover' },
            { num:1, controls: 'never' }
          ]);
          return { inputList };
        }
      })
    <\/script>`},{title:"\u9650\u5236\u8303\u56F4",desc:"\u8BBE\u7F6E max \u3001 min \u5C5E\u6027\u6765\u9650\u5236 InputNumber \u7684\u8303\u56F4\u3002",max:10,min:0,components:[{num:1},{num:1,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' :min='0' :max='10' 
          controls-postion='input.controlsPostion' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num:1 },
              { num:1, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num: 1 },
            { num: 1, controlsPostion: 'right' }
          ])
          return { list };
        }
      })
    <\/script>`},{title:"\u4E0D\u53EF\u7F16\u8F91",desc:"\u8BBE\u7F6E editable \u5C5E\u6027\u6765\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u7F16\u8F91 (+ - \u6309\u94AE\u4E0D\u53D7\u5F71\u54CD)\u3002",editable:!1,components:[{num:1},{num:1,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' :editable='false'
          controls-postion='input.controlsPostion' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num: 1 },
              { num: 1, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num:1 }, { num: 1, controlsPostion: 'right' }
          ])
          return{list};
        }
      })
    <\/script>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u63A7\u5236\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668\u3002",disabled:!0,components:[{num:1},{num:1,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' disabled
          controls-postion='input.controlsPostion' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num:1 },
              { num:1, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num: 1 },
            { num: 1, controlsPostion: 'right' }
          ])
          return { list };
        }
      })
    <\/script>`},{title:"\u6B65\u6570",desc:"\u8BBE\u7F6E step \u5C5E\u6027\uFF0C\u4FEE\u6539 InputNumber \u7684\u6B65\u957F\u3002",step:5,components:[{num:1},{num:1,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' :step='5'
          controls-postion='input.controlsPostion' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num: 1 },
              { num: 1, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num: 1 },
            { num: 1, controlsPostion: 'right' }
          ])
          return { list };
        }
      })
    <\/script>`},{title:"\u4E25\u683C\u6B65\u6570",desc:"\u8BBE\u7F6E step-strictly \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u662F\u5426\u53EA\u80FD\u8F93\u5165\u6B65\u6570\u7684\u500D\u6570\u3002 (\u5F53\u503C\u6539\u53D8\u65F6\u5982\u679C\u4E0D\u662F\u6B65\u6570\u7684\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u6539\u6210\u76F8\u90BB\u7684\u7B26\u5408\u503C)",stepStrictly:!0,components:[{num:2,step:3},{num:2,step:1.1,precision:2,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' :step='input.step'
          controls-postion='input.controlsPostion' :precision='input.precision' step-strictly />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num: 2, step: 3 },
              { num: 2, step: 1.1, precision: 2, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num: 2, step: 3},
            { num: 2, step: 1.1, precision: 2, controlsPostion: 'right' }
          ])
          return { list };
        }
      })
    <\/script>`},{title:"\u7CBE\u5EA6",desc:"\u8BBE\u7F6E precision \u5C5E\u6027\uFF0C\u63A7\u5236\u6570\u503C\u7CBE\u5EA6(\u5C31\u662F\u5C0F\u6570\u4F4D\u6570)\uFF0C\u5982\u4F4D\u6570\u4E0D\u8DB3\uFF0C\u672B\u5C3E\u4F1A\u81EA\u52A8\u6DFB\u52A0 0\uFF0C\u7B26\u5408\u89C6\u89C9\u6548\u679C\u3002 (\u9ED8\u8BA4\u4E0D\u9650\u5236\u6570\u503C\u7CBE\u5EA6)",max:100,min:0,components:[{num:1,precision:1,step:.1},{num:1,precision:3,step:.1,controlsPostion:"right"}],template:`    <template>
      <div>
        <w-input-number v-for='input in list' v-model='input.num' :key='input' :step='input.step'
          controls-postion='input.controlsPostion' :precision='input.precision' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { num: 1, precision: 1, step: 0.1},
              { num: 1, precision: 3, step: 0.1, controlsPostion: 'right' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { num: 1, precision: 1, step: 0.1 },
            { num: 1, precision: 3, step: 0.01, controlsPostion: 'right' }
          ])
          return { list };
        }
      })
    <\/script>`}]),F={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"editable",desc:"\u662F\u5426\u53EF\u7F16\u8F91,(\u4E0D\u5F71\u54CD\u589E\u51CF\u6309\u94AE)",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"\u8BA1\u6570\u5668\u7684\u5927\u5C0F",type:"string",optional:"medium\u3001small",default:"\u2014\u2014"},{name:"name",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u8BA1\u6570\u5668\u7684\u540D\u5B57",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"placeholder",desc:"\u8BA1\u6570\u5668\u9ED8\u8BA4 placeholder",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"max",desc:"\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",type:"number",optional:"\u2014\u2014",default:"Infinity"},{name:"min",desc:"\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",type:"number",optional:"\u2014\u2014",default:"-Infinity"},{name:"step",desc:"\u8BA1\u6570\u5668\u6B65\u957F",type:"number",optional:"\u2014\u2014",default:"1"},{name:"step-strictly",desc:"\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"precision",desc:"\u6570\u503C\u7CBE\u5EA6",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"controls-position",desc:"\u589E\u51CF\u6309\u94AE\u7684\u4F4D\u7F6E",type:"string",optional:"right",default:"\u2014\u2014"},{name:"controls",desc:"\u589E\u51CF\u6309\u94AE\u663E\u793A\u7684\u65F6\u673A",type:"string",optional:"always\u3001hover\u3001never",default:"always"},{name:"clear-on-esc",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u6E05\u7A7A value ",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"keyboard",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u952E\u76D8\u65B9\u5411\u952E\u6539\u53D8 value",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"mousewheel",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u9F20\u6807\u6EDA\u8F6E\u6539\u53D8 value",type:"boolean",optional:"\u2014\u2014",default:!0}],event:[{name:"change",desc:"\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\uFF0C\u5E76\u4E14\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"currentValue,oldValue"},{name:"focus",desc:"\u8BA1\u6570\u5668\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"},{name:"blur",desc:"\u8BA1\u6570\u5668\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}],method:[{name:"focus",desc:"\u4F7F \u8BA1\u6570\u5668 \u83B7\u5F97\u7126\u70B9",params:"\u2014\u2014"},{name:"select",desc:"\u9009\u4E2D \u8BA1\u6570\u5668 \u5F53\u524D\u7684\u503C",params:"\u2014\u2014"}]};const L={class:"inputNumber-demo-list"},B={key:0,class:"options"},I=d("span",null,"\u6309\u94AE\u4F4D\u7F6E\uFF1A",-1),D={key:1,class:"options"},E=d("span",null,"\u6B65\u6570\uFF1A",-1),U={key:0,class:"options"},S=_("\u83B7\u5F97\u7126\u70B9"),$=_("\u9009\u4E2D\u503C"),T={key:0,style:{"margin-left":"1em"}},R=k({setup(j){let m=A([]),g=(f,s)=>{console.log("\u65B0\u503C ",f," \u65E7\u503C ",s)};return(f,s)=>{const v=l("w-switch"),b=l("w-button"),x=l("w-input-number"),P=l("DemoItem"),C=l("TableList");return n(),o("div",L,[(n(!0),o(y,null,h(u(z),(t,r)=>(n(),V(P,{item:t,key:t.title},{default:c(()=>[r===2?(n(),o("div",B,[I,p(v,{modelValue:t.controlsPostion,"onUpdate:modelValue":e=>t.controlsPostion=e,"open-text":"\u53F3\u8FB9","off-text":"\u4E24\u8FB9","open-value":"right","off-value":"","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):a("",!0),r===7?(n(),o("div",D,[E,p(v,{modelValue:t.step,"onUpdate:modelValue":e=>t.step=e,"open-text":"5","off-text":"1","open-value":5,"off-value":1,"text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):a("",!0),(n(!0),o(y,null,h(t.components,e=>(n(),o("div",{key:e},[r===0?(n(),o("div",U,[p(b,{onClick:s[0]||(s[0]=i=>u(m)[0].focus())},{default:c(()=>[S]),_:1}),p(b,{onClick:s[1]||(s[1]=i=>u(m)[0].select())},{default:c(()=>[$]),_:1})])):a("",!0),d("div",null,[p(x,{modelValue:e.num,"onUpdate:modelValue":i=>e.num=i,ref_for:!0,ref:i=>r===0&&u(m).push(i),min:t.min,max:t.max,"step-strictly":t.stepStrictly,"controls-position":t.controlsPostion||e.controlsPostion,disabled:t.disabled,step:t.step||e.step,precision:t.precision||e.precision,controls:e.controls,size:e.size,editable:t.editable,onChange:i=>u(g)(i,e)},null,8,["modelValue","onUpdate:modelValue","min","max","step-strictly","controls-position","disabled","step","precision","controls","size","editable","onChange"]),r===0?(n(),o("span",T," \u5F53\u524D\u503C:"+N(e.num),1)):a("",!0)])]))),128))]),_:2},1032,["item"]))),128)),p(C,{data:u(F)},null,8,["data"])])}}});export{R as default};
