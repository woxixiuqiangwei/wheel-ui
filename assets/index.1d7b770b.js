import{r as y,d as P,m as f,a as p,o,g as s,H as r,I as g,c as m,w as e,h as t,z as V,k,b as n,R as h}from"./vendor.c0366ad2.js";const B=y([{title:"\u5DE6\u53F3\u5206\u5272",desc:"\u5C06\u4E00\u4E2A\u5BB9\u5668\u5206\u5272\u6210\u4E24\u5757\u533A\u57DF\uFF0C\u8BBE\u7F6E v-model \u5C5E\u6027\u83B7\u53D6\u5BF9\u5E94\u7684\u503C (\u7C7B\u578B\u4E3A\u6570\u7EC4) \u3002",components:[{value:["50%","50%"]}],template:`    <template>
      <div class='split-demo'>
        <w-split v-model="arr">
          <template #left>
            <div>Left Pane</div>
          </template>
          <template #right>
            <div>Right Pane</div>
          </template>
        </w-split>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            arr: ['50%', '50%']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const arr = ref(['50%', '50%']);
          return { arr };
        }
      })
    <\/script>`,style:`
    <style>
      .split-demo > .w-split {
        width: 500px;
        height: 300px;
        border: 2px solid #007fff;
        border-radius: 4px;
      }
    </style>
    `},{title:"\u4E0A\u4E0B\u5206\u5272",desc:"\u8BBE\u7F6E direction \u5C5E\u6027\uFF0Chorizontal (\u6C34\u5E73\u65B9\u5411)\u3001 vertical (\u5782\u76F4\u65B9\u5411)\u3002",components:[{value:["100px","200px"]}],template:`    <template>
      <div class='split-demo'>
        <w-split v-model="arr">
          <template #left>
            <div>Left Pane</div>
          </template>
          <template #right>
            <div>Right Pane</div>
          </template>
        </w-split>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            arr: ['100px', '200px']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const arr = ref(['100px', '200px']);
          return { arr };
        }
      })
    <\/script>`,style:`
    <style>
      .split-demo > .w-split {
        width: 500px;
        height: 300px;
        border: 2px solid #007fff;
        border-radius: 4px;
      }
    </style>
    `},{title:"\u5D4C\u5957\u4F7F\u7528",desc:"\u9762\u677F\u5206\u5272\u53EF\u4EE5\u5D4C\u5957\u4F7F\u7528\u3002",components:[{value:0}],template:`    <template>
      <div class='split-demo'>
        <w-split>
          <template #left class="no-padding">
            <div class="no-padding">
              <w-split direction="vertical">
                <template #top>
                  <div>Top Pane</div>
                </template>
                <template #bottom>
                  <div>Bottom Pane</div>
                </template>
              </w-split>
            </div>
          </template>
          <template #right>
            <div>Right Pane</div>
          </template>
        </w-split>
        <br><br>
        <w-split direction="vertical">
          <template #top>
            <div class="no-padding">
              <w-split v-model="arr">
                <template #left>
                  <div>Left Pane</div>
                </template>
                <template #right>
                  <div class="no-padding">
                    <w-split v-model="arr2" direction="vertical">
                      <template #top>
                        <div>Top Pane</div>
                      </template>
                      <template #bottom>
                        <div>Bottom Pane</div>
                      </template>
                    </w-split>
                  </div>
                </template>
              </w-split>
            </div>
          </template>
          <template #bottom>
            <div>Bottom Pane</div>
          </template>
        </w-split>
      </div>
    </template>
    <script>`,style:`
    <style>
      .split-demo > .w-split {
        width: 500px;
        height: 300px;
        border: 2px solid #007fff;
        border-radius: 4px;
      }
    </style>
    `},{title:"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668",desc:"\u8BBE\u7F6E\u63D2\u69FD trigger\uFF0C\u53EF\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\u3002 ",components:[{value:0}],template:`    <template>
      <div class='split-demo'>
        <w-split>
          <template #left>
            <div>Left Pane</div>
          </template>
          <template #right>
            <div>Right Pane</div>
          </template>
          <template #trigger>
            <div class="custom-trigger">
              <w-icon name='trigger-el' color="blue" size="22px" />
            </div>
          </template>
        </w-split>
      </div>
    </template>
    <script>`,style:`
    <style>
      .split-demo > .w-split {
        width: 500px;
        height: 300px;
        border: 2px solid #007fff;
        border-radius: 4px;
      }
      .split-demo > .w-split .custom-trigger {
        position: relative;
        background: #ddd;
        width: 3px;
        height: 100%;
        transition: .16s;
        &:hover {
          background: #007fff;
        }
        > .w-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
       }
     }
    </style>
    `}]),L={attribute:[{name:"component",desc:"\u6E32\u67D3\u5BB9\u5668\u7684\u6807\u7B7E",type:"string",optional:"\u2014\u2014",default:"div"},{name:"v-model",desc:"\u5206\u5272\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\u6216\u8005\u5177\u4F53\u50CF\u7D20\u503C\uFF0C\u5982 200px\u300130%\u3002 \u6C34\u5E73\u65B9\u5411 [left, right] \u5782\u76F4\u65B9\u5411 [top, bottom]",type:"array",optional:"\u2014\u2014",default:"[50%, 50%]"},{name:"direction",desc:"\u5206\u5272\u7684\u65B9\u5411",type:"string",optional:"horizontal\u3001vertical",default:"horizontal"},{name:"max",desc:"\u5F53\u6C34\u5E73\u5206\u5272\u65F6\uFF0C\u662F\u7ED9left\u8BBE\u7F6E\u6700\u5927\u503C\uFF0C\u5782\u76F4\u5206\u5272\u65F6\uFF0C\u662F\u7ED9top\u8BBE\u7F6E\u6700\u5927\u503C\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\u6216\u8005\u5177\u4F53\u50CF\u7D20\u503C",type:"number\u3001string",optional:"\u2014\u2014",default:"80%"},{name:"min",desc:"\u5F53\u6C34\u5E73\u5206\u5272\u65F6\uFF0C\u662F\u7ED9left\u8BBE\u7F6E\u6700\u5C0F\u503C\uFF0C\u5782\u76F4\u5206\u5272\u65F6\uFF0C\u662F\u7ED9top\u8BBE\u7F6E\u6700\u5C0F\u503C\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\u6216\u8005\u5177\u4F53\u50CF\u7D20\u503C",type:"number\u3001string",optional:"\u2014\u2014",default:"20%"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u53EF\u5206\u5272\u5185\u5BB9",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"left",desc:"direction \u4E3A horizontal \u65F6\u53EF\u7528\uFF0C\u5DE6\u8FB9\u9762\u677F"},{name:"right",desc:"direction \u4E3A horizontal \u65F6\u53EF\u7528\uFF0C\u53F3\u8FB9\u9762\u677F"},{name:"top",desc:"direction \u4E3A vertical \u65F6\u53EF\u7528\uFF0C\u4E0A\u8FB9\u9762\u677F"},{name:"bottom",desc:"direction \u4E3A vertical \u65F6\u53EF\u7528\uFF0C\u4E0B\u8FB9\u9762\u677F"},{name:"trigger",desc:"\u81EA\u5B9A\u4E49\u5206\u5272\u62D6\u62FD\u8282\u70B9"}],event:[{name:"move-start",desc:"\u5F00\u59CB\u62D6\u52A8\u5206\u5272\u7EBF\u65F6\u89E6\u53D1",callbackParams:"event"},{name:"moving",desc:"\u62D6\u52A8\u5206\u5272\u7EBF\u65F6\u89E6\u53D1",callbackParams:"event, value"},{name:"move-end",desc:"\u62D6\u52A8\u7ED3\u675F\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}]};const z={class:"split-demo-list"},C=t("br",null,null,-1),R=t("div",null,"Left Pane",-1),T=t("div",null,"Right Pane",-1),U=t("div",null,"Top Pane",-1),A=t("div",null,"Bottom Pane",-1),D={class:"no-padding"},I=t("div",null,"Top Pane",-1),N=t("div",null,"Bottom Pane",-1),j=t("div",null,"Right Pane",-1),E=t("br",null,null,-1),F=t("br",null,null,-1),H={class:"no-padding"},S=t("div",null,"Left Pane",-1),q={class:"no-padding"},G=t("div",null,"Top Pane",-1),J=t("div",null,"Bottom Pane",-1),K=t("div",null,"Bottom Pane",-1),M=t("div",null,"Left Pane",-1),O=t("div",null,"Right Pane",-1),Q={class:"custom-trigger"},Z=P({setup(W){const u=f(["200px","300px"]),_=f(["30%","70%"]);return(X,d)=>{const l=p("w-split"),b=p("w-icon"),x=p("DemoItem"),w=p("TableList");return o(),s("div",z,[(o(!0),s(r,null,g(h(B),(c,v)=>(o(),m(x,{item:c,key:c.title},{default:e(()=>[(o(!0),s(r,null,g(c.components,i=>(o(),s("div",{key:i.label,class:"demo"},[i.value?(o(),s(r,{key:0},[t("div",null,V(i.value),1),C],64)):k("",!0),v===0?(o(),m(l,{key:1,modelValue:i.value,"onUpdate:modelValue":a=>i.value=a},{left:e(()=>[R]),right:e(()=>[T]),_:2},1032,["modelValue","onUpdate:modelValue"])):v===1?(o(),m(l,{key:2,modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,direction:"vertical"},{top:e(()=>[U]),bottom:e(()=>[A]),_:2},1032,["modelValue","onUpdate:modelValue"])):v===2?(o(),s(r,{key:3},[n(l,null,{left:e(()=>[t("div",D,[n(l,{direction:"vertical"},{top:e(()=>[I]),bottom:e(()=>[N]),_:1})])]),right:e(()=>[j]),_:1}),E,F,n(l,{direction:"vertical"},{top:e(()=>[t("div",H,[n(l,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=a=>u.value=a)},{left:e(()=>[S]),right:e(()=>[t("div",q,[n(l,{modelValue:_.value,"onUpdate:modelValue":d[0]||(d[0]=a=>_.value=a),direction:"vertical"},{top:e(()=>[G]),bottom:e(()=>[J]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"])])]),bottom:e(()=>[K]),_:1})],64)):(o(),m(l,{key:4},{left:e(()=>[M]),right:e(()=>[O]),trigger:e(()=>[t("div",Q,[n(b,{name:"trigger-el",color:"blue",size:"22px"})])]),_:1}))]))),128))]),_:2},1032,["item"]))),128)),n(w,{data:h(L)},null,8,["data"])])}}});export{Z as default};
