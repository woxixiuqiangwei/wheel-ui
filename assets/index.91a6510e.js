import{r as z,d as y,a as i,o,g as a,H as s,I as u,c as V,w as A,h as l,t as d,N as m,b as c,k as b,y as r,z as g,R as v}from"./vendor.c0366ad2.js";const k=z([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A Rate \u7684\u503C\u3002",components:[{value:1}],template:`    <template>
      <div>
        <w-rate v-model='rateValue' />
        \u5F53\u524Dvalue:{{rateValue}}
      </div>  
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rateValue: 1
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rateValue = ref(1);
          return { rateValue };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",desc:"\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u53EF\u4EE5\u66FF\u6362\u9ED8\u8BA4\u56FE\u6807\u3002",components:[{value:2,icon:"love-s"},{value:2,icon:"zan-s"}],template:`    <template>
      <div>
        <w-rate v-model='rateValue1' icon='love-s' />
        <w-rate v-model='rateValue2' icon='zan-s' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rateValue1: 2,
            rateValue2: 2
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rateValue1 = ref(2);
          const rateValue2 = ref(2);
          return { rateValue1, rateValue2 };
        }
      })
    <\/script>`},{title:"\u56FE\u6807\u989C\u8272",desc:"\u8BBE\u7F6E void-color \u5C5E\u6027\uFF0C\u4FEE\u6539\u672A\u9009\u4E2D\u56FE\u6807\u7684\u989C\u8272\uFF0C\u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539\u5DF2\u9009\u4E2D\u56FE\u6807\u7684\u989C\u8272",color:"#0000ff",voidColor:"#e4cece",components:[{value:2},{value:2,icon:"zan"}],template:`    <template>
      <div class='options'>
        <div>
          \u672A\u9009\u4E2D\u989C\u8272\uFF1A
          <input v-model='voidColor' type='color' />
        </div>
        <div>
          \u9009\u4E2D\u989C\u8272\uFF1A
          <input v-model='color' type='color' />
        </div>
      </div>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' :icon='item.icon'
          :color='item.color' :void-color='item.voidColor' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 2 }, { value: 2, icon: 'zan' }
            ],
            color: '#0000ff',
            voidColor: '#e4cece'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
                  { value: 2 },
                  { value: 2, icon: 'zan' }
                ]),
                color = ref('#0000ff');
                voidColor = ref('#e4cece');
          return { list, color, voidColor };
        }
      })
    <\/script>`},{title:"\u6700\u9AD8\u5206",desc:"\u8BBE\u7F6E max \u5C5E\u6027\uFF0C\u4FEE\u6539\u6700\u5927\u5206\u503C\u3002 (\u9ED8\u8BA4\u4E3A5\uFF0C5\u4E2A\u56FE\u6807)",components:[{value:2},{value:2,max:8}],template:`    <template>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' :icon='item.icon' :max='item.max' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 2 },
              { value: 2, max: 8}
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { value: 2 }, { value: 2, max: 8 }
          ]);
          return { list };
        }
      })
    <\/script>`},{title:"\u53EA\u8BFB",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u662F\u5426\u4E3A\u53EA\u8BFB\u3002\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u4EA4\u4E92\u3002",disabled:!0,components:[{value:3},{value:3,icon:"love"}],template:`    <template>
      <div>
        <w-rate v-model='value1' disabled />
        <w-rate v-model='value2' icon='love' disabled />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: 3,
            value2: 3
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref(3);
          const value2 = ref(3);
          return{ value1, value2 };
        }
      })
    <\/script>`},{title:"\u8F85\u52A9\u6027\u6587\u5B57",desc:"\u8BBE\u7F6E texts \u5C5E\u6027 (\u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u4E14\u957F\u5EA6\u5FC5\u987B\u4E0E\u6700\u5927\u5206\u503C\u76F8\u7B49)\uFF0C\u53EF\u4EE5\u663E\u793A\u5BF9\u5E94\u5206\u503C\u7684\u6587\u5B57",texts:["\u8F83\u5DEE","\u4E00\u822C","\u8F83\u597D","\u5F88\u597D","\u975E\u5E38\u597D"],components:[{value:3},{value:3,icon:"love",textColor:"red"}],template:`    <template>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' :texts='texts' 
          :icon='item.icon' :text-color='item.textColor' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 2 }, { value: 2, icon: 'love' }
            ],
            texts: ['\u8F83\u5DEE', '\u4E00\u822C', '\u8F83\u597D', '\u5F88\u597D', '\u975E\u5E38\u597D']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { value: 3 },
            { value: 3, icon: 'love', textColor: 'red' }
          ]);
          const texts = ['\u8F83\u5DEE','\u4E00\u822C','\u8F83\u597D','\u5F88\u597D','\u975E\u5E38\u597D'];
          return { list, texts };
        }
      })
    <\/script>`},{title:"\u663E\u793A\u5F53\u524D\u5206\u6570",desc:"\u8BBE\u7F6E show-score \u5C5E\u6027\uFF0C\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\u3002 show-score\u548Ctexts\u4E0D\u80FD\u540C\u65F6\u5B58\u5728",showScore:!0,components:[{value:3},{value:3,icon:"love",textColor:"red"}],template:`    <template>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' show-score 
          :icon='item.icon' :text-color='item.textColor' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 2 },
              { value: 2, icon: 'love' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { value: 3 },
            { value: 3, icon: 'love', textColor: 'red' }
          ]);
          return { list };
        }
      })
    <\/script>`},{title:"\u5176\u4ED6\u5B57\u7B26",desc:"\u8BBE\u7F6E character \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B57\u7B26\u3002\u53EF\u4EE5\u662F\u4E2D\u6587\u3001\u5B57\u6BCD\u6216\u8005\u7B26\u53F7",components:[{value:3,character:"\u597D"},{value:3,character:"A"},{value:3,character:"@"}],template:`    <template>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' :character='item.character' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 3, character: '\u597D' },
              { value: 3, character: 'A' },
              { value: 3, character: '@' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { value: 3 },
            { value: 3, icon: 'love', textColor: 'red' }
          ]);
          return { list };
        }
      })
    <\/script>`},{title:"\u5927\u5C0F",desc:"\u8BBE\u7F6E size \u5C5E\u6027\u6765\u8BBE\u7F6E\u56FE\u6807 (\u81EA\u5B9A\u4E49\u5B57\u7B26\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u662F\u50CF\u7D20)\u3002",size:30,components:[{value:3},{value:3,icon:"love"},{value:3,character:"\u597D"}],template:`    <template>
      <div>
        \u56FE\u6807\u5927\u5C0F\uFF1A
        <w-input-number v-model='item.size' size='medium' />
      </div>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' :size='size'
          :icon='item.icon' :character='item.character' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 3 },
              { value: 3, icon: 'love' },
              { value: 3, character: '\u597D' }
            ],
            size: 30
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { value: 3 },
            { value: 3, icon: 'love' },
            { value: 3, character:'\u597D' }
          ]);
          const size = ref(30);
          return { list, size };
        }
      })
    <\/script>`},{title:"\u534A\u661F",desc:"\u8BBE\u7F6E allow-half \u5C5E\u6027\uFF0C\u51B3\u5B9A\u662F\u5426\u53EF\u4EE5\u534A\u9009\u3002",allowHalf:!0,components:[{value:1.7,size:"30px"},{value:1.5,icon:"love",size:"30px"},{value:1.5,character:"\u597D",size:"30px"}],template:`    <template>
      <div>
        <w-rate v-for='item in list' v-model='item.value' :key='item' allow-half :size='size'
          :icon='item.icon' :character='item.character' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { value: 1.7, size: '30px' },
              { value: 1.5, icon: 'love', size: '30px' },
              { value: 1.5, character: '\u597D', size: '30px' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { value: 1.7, size: '30px' },
            { value: 1.5, icon: 'love', size: '30px' },
            { value: 1.5, character: '\u597D', size: '30px' }
          ]);
          return { list };
        }
      })
    <\/script>`}]),F={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C",type:"number",optional:"\u2014\u2014",default:0},{name:"max",desc:"\u6700\u5927\u5206\u503C",type:"number",optional:"\u2014\u2014",default:5},{name:"disabled",desc:"\u662F\u5426\u4E3A\u53EA\u8BFB",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon",desc:"\u81EA\u5B9A\u4E49\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"star-s"},{name:"character",desc:"\u81EA\u5B9A\u4E49\u5B57\u7B26",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"allow-half",desc:"\u662F\u5426\u5141\u8BB8\u534A\u9009",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"allow-clear",desc:"\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"size",desc:"\u56FE\u6807\u7684\u5927\u5C0F",type:"string\u3001number",optional:"\u2014\u2014",default:"23px"},{name:"color",desc:"\u9009\u4E2D\u65F6\u56FE\u6807\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"gold"},{name:"void-color",desc:"\u672A\u9009\u4E2D\u65F6\u56FE\u6807\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#ddd"},{name:"texts",desc:"\u8F85\u52A9\u6587\u5B57\u6570\u7EC4\uFF0C\u957F\u5EA6\u5E94\u4E0E\u6700\u5927\u503C\u4E00\u6837",type:"array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-score",desc:"\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C texts \u4E0D\u80FD\u540C\u65F6\u5B58\u5728",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"text-color",desc:"\u8F85\u52A9\u6587\u5B57\u6216\u8005\u5206\u503C\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#000"}],event:[{name:"hover-change",desc:"\u9F20\u6807\u7ECF\u8FC7\u65F6\u6570\u503C\u53D8\u5316\u7684\u56DE\u8C03",callbackParams:"\u5F53\u524D\u7ECF\u8FC7\u7684\u5206\u503C"},{name:"change",desc:"\u5206\u503C\u6539\u53D8\u65F6\u89E6\u53D1",callbackParams:"\u6539\u53D8\u540E\u7684\u5206\u503C"}]};const D={class:"rate-demo-list"},U={class:"options"},N=r(" \u672A\u9009\u4E2D\uFF1A "),B=["onUpdate:modelValue"],E=r(" \u5DF2\u9009\u4E2D\uFF1A "),L=["onUpdate:modelValue"],T={key:1},H=r(" \u56FE\u6807\u5927\u5C0F\uFF1A "),P=y({setup(I){const f=p=>console.log("change Rate value ",p);return(p,R)=>{const x=i("w-input-number"),h=i("w-rate"),C=i("DemoItem"),_=i("TableList");return o(),a("div",D,[(o(!0),a(s,null,u(v(k),(e,w)=>(o(),V(C,{item:e,key:e.title},{default:A(()=>[l("div",U,[w===2?(o(),a(s,{key:0},[l("div",null,[N,d(l("input",{"onUpdate:modelValue":t=>e.voidColor=t,type:"color"},null,8,B),[[m,e.voidColor]])]),l("div",null,[E,d(l("input",{"onUpdate:modelValue":t=>e.color=t,type:"color"},null,8,L),[[m,e.color]])])],64)):e.size?(o(),a("div",T,[H,c(x,{modelValue:e.size,"onUpdate:modelValue":t=>e.size=t,size:"medium"},null,8,["modelValue","onUpdate:modelValue"])])):b("",!0)]),(o(!0),a(s,null,u(e.components,t=>(o(),a("div",{key:t},[c(h,{modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,icon:t.icon,max:t.max,disabled:e.disabled,texts:e.texts,"text-color":t.textColor,"show-score":e.showScore,character:t.character,size:e.size||t.size,"allow-half":e.allowHalf,color:e.color,"void-color":e.voidColor,onChange:n=>f(n,t.value)},null,8,["modelValue","onUpdate:modelValue","icon","max","disabled","texts","text-color","show-score","character","size","allow-half","color","void-color","onChange"]),r(" \u5F53\u524Dvalue:"+g(t.value),1)]))),128))]),_:2},1032,["item"]))),128)),c(_,{data:v(F)},null,8,["data"])])}}});export{P as default};
