import{r as z,d as w,a as d,o as i,g as n,H as r,I as p,c as y,w as u,h as o,t as g,N as b,b as s,k as V,z as c,y as l,R as v}from"./vendor.c0366ad2.js";const C=z([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u7528\u6765\u5BF9\u884C\u5185\u6587\u5B57\u3001\u94FE\u63A5\u3001\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002",components:[{topText:"\u9752\u6625\u662F\u4E00\u4E2A\u77ED\u6682\u7684\u7F8E\u68A6, \u5F53\u4F60\u9192\u6765\u65F6, \u5B83\u65E9\u5DF2\u6D88\u5931\u65E0\u8E2A",bottomText:"\u5C11\u91CF\u7684\u90AA\u6076\u8DB3\u4EE5\u62B5\u6D88\u5168\u90E8\u9AD8\u8D35\u7684\u54C1\u8D28, \u5BB3\u5F97\u4EBA\u58F0\u540D\u72FC\u85C9"}],template:`    <template>
      <div>\u9752\u6625\u662F\u4E00\u4E2A\u77ED\u6682\u7684\u7F8E\u68A6, \u5F53\u4F60\u9192\u6765\u65F6, \u5B83\u65E9\u5DF2\u6D88\u5931\u65E0\u8E2A</div>
      <w-divider />
      <div>\u5C11\u91CF\u7684\u90AA\u6076\u8DB3\u4EE5\u62B5\u6D88\u5168\u90E8\u9AD8\u8D35\u7684\u54C1\u8D28, \u5BB3\u5F97\u4EBA\u58F0\u540D\u72FC\u85C9</div>
    </template>`},{title:"\u8BBE\u7F6E\u6587\u6848",desc:"\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u7ED9\u5206\u5272\u7EBF\u81EA\u5B9A\u4E49\u6587\u6848\u5185\u5BB9\u3002\u8BBE\u7F6E content-position \u5C5E\u6027\uFF0C\u4FEE\u6539\u6587\u6848\u7684\u4F4D\u7F6E\u3002(\u9ED8\u8BA4\u662F\u4E2D\u95F4)",components:[{topText:"\u8DEF\u6F2B\u6F2B\u5176\u4FEE\u8FDC\u4ECA\uFF0C\u543E\u5C06\u4E0A\u4E0B\u800C\u6C42\u7D22\u3002",content:"\u5C48\u539F",contentPosition:"left"},{topText:"\u4EBA\u751F\u8981\u6709\u610F\u4E49\u53EA\u6709\u53D1\u626C\u751F\u547D\uFF0C\u5FEB\u4E50\u5C31\u662F\u53D1\u626C\u751F\u547D\u7684\u6700\u597D\u65B9\u6CD5\u3002",content:"\u5F20\u95FB\u5929"},{topText:"\u7406\u89E3\u751F\u6D3B\u800C\u4E14\u8FD8\u8981\u70ED\u7231\u751F\u6D3B\u3002",content:"\u7F57\u66FC\xB7\u7F57\u5170",contentPosition:"right"}],template:`    <template>
      <div>\u8DEF\u6F2B\u6F2B\u5176\u4FEE\u8FDC\u4ECA\uFF0C\u543E\u5C06\u4E0A\u4E0B\u800C\u6C42\u7D22\u3002</div>
      <w-divider content-position="left">\u5C48\u539F</w-divider>
      <div>\u4EBA\u751F\u8981\u6709\u610F\u4E49\u53EA\u6709\u53D1\u626C\u751F\u547D\uFF0C\u5FEB\u4E50\u5C31\u662F\u53D1\u626C\u751F\u547D\u7684\u6700\u597D\u65B9\u6CD5\u3002</div>
      <w-divider>\u5F20\u95FB\u5929</w-divider>
      <div>\u7406\u89E3\u751F\u6D3B\u800C\u4E14\u8FD8\u8981\u70ED\u7231\u751F\u6D3B\u3002</div>
      <w-divider content-position="right">\u7F57\u66FC\xB7\u7F57\u5170</w-divider>
    </template>`},{title:"\u5782\u76F4\u5206\u5272",desc:"\u8BBE\u7F6E direction \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u5272\u7EBF\u7684\u4F4D\u7F6E\u3002(\u9ED8\u8BA4\u662F\u6C34\u5E73\u65B9\u5411)",components:[{vertical:!0}],template:`    <template>
      <div class="flex">
        <span>\u96E8\u7EB7\u7EB7</span>
        <w-divider direction="vertical" />
        <span>\u65E7\u6545\u91CC</span>
        <w-divider direction="vertical" />
        <span>\u8349\u6728\u6DF1</span>
      </div>
    </template>
    <style>
      .flex {
        margin: 1em;
        display: flex;
        align-items: center;
      }
    </style>`},{title:"\u5C3A\u5BF8\u989C\u8272",desc:"\u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u5272\u7EBF\u7684\u989C\u8272\u3002\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u5272\u7EBF\u7684\u5BBD\u5EA6 (\u9AD8\u5EA6)\u3002\u8BBE\u7F6E dashed \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u5272\u7EBF\u662F\u5426\u4E3A\u865A\u7EBF\u3002(\u9ED8\u8BA4\u662F\u5B9E\u7EBF)",dashed:!1,size:3,color:"#b1571b",fontSize:16,components:[{topText:"\u9752\u4E4C\u4E91\u540E\u9762\u4F9D\u7136\u662F\u707F\u70C2\u7684\u6674\u5929\u3002",content:"\u6717\u5F17\u7F57",contentPosition:"left"},{vertical:!0}],template:`    <template>
      <div class='divider-demo'>
        <div class='options'>
          <div>
            \u989C\u8272\uFF1A
            <input v-model='color' type='color' />
          </div>
          <div>
            \u89C4\u683C\uFF1A
            <w-switch v-model='dashed' text-inline off-text='\u5B9E\u7EBF' open-text='\u865A\u7EBF' />
          </div>
          <div>
            \u5C3A\u5BF8\uFF1A
            <w-input-number size='small' v-model='size' :max='8' :min='1' />
          </div>
        </div>
        <div>\u9752\u4E4C\u4E91\u540E\u9762\u4F9D\u7136\u662F\u707F\u70C2\u7684\u6674\u5929\u3002</div>
        <w-divider :color='color' :size='size' :dashed='dashed' content-position='left'>
          \u6717\u5F17\u7F57
        </w-divider>
        <div class='flex'>
          <span>\u96E8\u7EB7\u7EB7</span>
          <w-divider direction='vertical' :color='color' :size='size' :dashed='dashed' />
          <span>\u65E7\u6545\u91CC</span>
          <w-divider direction='vertical' :color='color' :size='size' :dashed='dashed' />
          <span>\u8349\u6728\u6DF1</span>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            color: '#b1571b',
            dashed: false,
            size: 3
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const color = ref('#b1571b');
          const dashed = ref(false);
          const size = ref(3);
          return { color, dashed, size };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .divider-demo {
        margin: 1em;
        .options {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 2em;
          > * {
            display: flex;
            align-items: center;
            margin-right: 1.5em;
          }
        }
        .flex {
          display: flex;
          align-items: center;
        }
      }
    </style>`}]),T={attribute:[{name:"direction",desc:"\u5206\u5272\u7EBF\u65B9\u5411",type:"string",optional:"horizontal\u3001vertical",default:"horizontal"},{name:"content-position",desc:"\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E",type:"string",optional:"left\u3001center\u3001right",default:"center"},{name:"color",desc:"\u5206\u5272\u7EBF\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#ddd"},{name:"size",desc:"\u5F53\u5206\u5272\u7EBF\u65B9\u5411\u4E3Ahorizontal\u65F6\uFF0C\u5BF9\u5E94\u7684\u662Fheight\uFF0C\u65B9\u5411\u4E3Avertical\u65F6\uFF0C\u5BF9\u5E94\u7684\u662Fwidth",type:"string\u3001number",optional:"\u2014\u2014",default:"1px"},{name:"dashed",desc:"\u5206\u5272\u7EBF\u662F\u5426\u4E3A\u865A\u7EBF",type:"boolean",optional:"\u2014\u2014",default:!1}]};const F={class:"divider-demo-list"},B={key:0,class:"options"},k=l(" \u989C\u8272\uFF1A "),E=["onUpdate:modelValue"],A=l(" \u89C4\u683C\uFF1A "),D=l(" \u5C3A\u5BF8\uFF1A "),U={key:1,class:"flex"},N=o("span",null,"\u96E8\u7EB7\u7EB7",-1),L=o("span",null,"\u65E7\u6545\u91CC",-1),P=o("span",null,"\u8349\u6728\u6DF1",-1),M=w({setup(I){return(S,j)=>{const m=d("w-switch"),_=d("w-input-number"),a=d("w-divider"),f=d("DemoItem"),h=d("TableList");return i(),n("div",F,[(i(!0),n(r,null,p(v(C),(e,x)=>(i(),y(f,{item:e,key:e.title},{default:u(()=>[x===3?(i(),n("div",B,[o("div",null,[k,g(o("input",{"onUpdate:modelValue":t=>e.color=t,type:"color"},null,8,E),[[b,e.color]])]),o("div",null,[A,s(m,{modelValue:e.dashed,"onUpdate:modelValue":t=>e.dashed=t,"text-inline":"","off-text":"\u5B9E\u7EBF","open-text":"\u865A\u7EBF"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",null,[D,s(_,{modelValue:e.size,"onUpdate:modelValue":t=>e.size=t,size:"small",max:8,min:1},null,8,["modelValue","onUpdate:modelValue"])])])):V("",!0),(i(!0),n(r,null,p(e.components,t=>(i(),n("div",{key:t},[t.vertical?(i(),n("div",U,[N,s(a,{direction:"vertical",size:e.size,dashed:e.dashed,color:e.color},null,8,["size","dashed","color"]),L,s(a,{direction:"vertical",size:e.size,dashed:e.dashed,color:e.color},null,8,["size","dashed","color"]),P])):(i(),n(r,{key:0},[o("div",null,c(t.topText),1),s(a,{direction:t.direction,dashed:e.dashed,size:t.size||e.size,color:t.color||e.color,"content-position":t.contentPosition},{default:u(()=>[l(c(t.content),1)]),_:2},1032,["direction","dashed","size","color","content-position"]),o("div",null,c(t.bottomText),1)],64))]))),128))]),_:2},1032,["item"]))),128)),s(h,{data:v(T)},null,8,["data"])])}}});export{M as default};
