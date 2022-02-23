import{r as h,d as x,a as s,o as i,g as l,H as c,I as p,c as m,w as n,b as a,y as u,z as k,k as f,P as C,R as v,h as o}from"./vendor.c0366ad2.js";const V=h([{title:"\u57FA\u672C\u7528\u6CD5",desc:`\u8BBE\u7F6E visible \u5C5E\u6027\uFF0C\u4FEE\u6539 Alert \u662F\u5426\u663E\u793A\u3002 \u9ED8\u8BA4\u4E3Atrue (\u663E\u793A)<br>
      \u8BBE\u7F6E type \u5C5E\u6027\uFF0C\u4FEE\u6539 Alert \u7684\u7C7B\u578B\u3002`,closeAnimate:"slide-up",components:[{title:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",visible:!0},{title:"\u6210\u529F\u63D0\u793A",type:"success",visible:!0},{title:"\u8B66\u544A\u63D0\u793A",type:"warning",visible:!0},{title:"\u9519\u8BEF\u63D0\u793A",type:"error",visible:!0}],template:`    <template>
      <div>
        <w-alert title='\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A' />
        <w-alert type='success' title='\u6210\u529F\u63D0\u793A' />
        <w-alert type='warning' title='\u8B66\u544A\u63D0\u793A' />
        <w-alert type='error' title='\u9519\u8BEF\u63D0\u793A' />
      </div>
    </template>`},{title:"\u4E3B\u9898",desc:"\u8BBE\u7F6E effect \u5C5E\u6027\uFF0C\u4FEE\u6539 Alert \u7684\u4E3B\u9898\u3002 (light / dark)",components:[{title:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",visible:!0},{title:"\u6210\u529F\u63D0\u793A",type:"success",visible:!0},{title:"\u8B66\u544A\u63D0\u793A",type:"warning",visible:!0},{title:"\u9519\u8BEF\u63D0\u793A",type:"error",visible:!0}],effect:"dark",template:`    <template>
      <div>
        <w-alert title='\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A' effect='drak' />
        <w-alert type='success' title='\u6210\u529F\u63D0\u793A' effect='drak' close-animate='fade' />
        <w-alert type='warning' title='\u8B66\u544A\u63D0\u793A' effect='drak' close-animate='zoom' />
        <w-alert type='error' title='\u9519\u8BEF\u63D0\u793A' effect='drak' close-animate='slide-up' />
      </div>  
    </template>`},{title:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE",desc:`\u8BBE\u7F6E closable \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u5173\u95ED\u3002<br>
      \u8BBE\u7F6E close-text \u5C5E\u6027\uFF0C\u4FEE\u6539\u5173\u95ED\u6309\u94AE\u5C55\u793A\u7684\u5185\u5BB9\u3002`,components:[{title:"\u8B66\u544A\u63D0\u793A\uFF0C\u9ED8\u8BA4\u81EA\u5E26\u5173\u95ED\u56FE\u6807\u3002",type:"warning",visible:!0},{title:"\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE",closable:!1,visible:!0},{title:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE",type:"success",closeText:"\u77E5\u9053\u4E86\u3002",visible:!0}],template:`    <template>
      <div>
        <w-alert type='warning' title='\u8B66\u544A\u63D0\u793A\uFF0C\u9ED8\u8BA4\u81EA\u5E26\u5173\u95ED\u56FE\u6807\u3002'/>
        <w-alert title='\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE' :closable='false' />
        <w-alert type='success' title='\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE' close-text='\u77E5\u9053\u4E86\u3002' />
      </div>
    </template>`},{title:"\u5E26\u6709\u56FE\u6807",desc:"\u8BBE\u7F6E showIcon \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u524D\u7F6E\u56FE\u6807\u3002<br>\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u524D\u7F6E\u56FE\u6807\u3002 (\u4E5F\u53EF\u4EE5\u901A\u8FC7 icon \u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u524D\u7F6E\u56FE\u6807)",showIcon:!0,size:15,components:[{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",visible:!0},{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",visible:!0},{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning",visible:!0},{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"error",visible:!0},{title:"\u8BBE\u7F6E icon \u5C5E\u6027",icon:"zan",visible:!0},{title:"\u8BBE\u7F6E icon \u63D2\u69FD",iconSlot:!0,visible:!0}],template:`    <template>
      <div> 
        <div style='display:flex;align-items:center;margin-bottom:1em;'>
          <span>\u6587\u5B57\u5927\u5C0F\uFF1A</span>
          <w-input-number v-model='size' size='small' :min='12' :max='50' />
        </div>
        <div>
          <w-alert :size='size' title='\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848' show-icon />
          <w-alert :size='size' type='success' title='\u6210\u529F\u63D0\u793A\u7684\u6587\u6848' show-icon />
          <w-alert :size='size' type='warning' title='\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848' show-icon />
          <w-alert :size='size' type='warning' title='\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848' show-icon />
          <w-alert :size='size' title='\u8BBE\u7F6E icon \u5C5E\u6027' icon='zan' show-icon />
          <w-alert :size='size' title='\u8BBE\u7F6E icon \u63D2\u69FD'>
            <template #icon>
              <img width='35' style='margin-right:10px;'
                src='https://d.lanrentuku.com/down/png/1508/gantanhao-jinggao/a20.' />
            </template>
          </w-alert>
        </div>
      </div> 
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            size: 15
          }
        }
      }
      <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const size = ref(15);
          return { size };
        }
      })
    <\/script>`},{title:"\u6587\u5B57\u5C45\u4E2D",desc:"\u8BBE\u7F6E center \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u9898\u548C\u63CF\u8FF0\u662F\u5426\u5C45\u4E2D\u3002",center:!0,components:[{title:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",visible:!0},{title:"\u6210\u529F\u63D0\u793A",type:"success",visible:!0},{title:"\u8B66\u544A\u63D0\u793A",type:"warning",visible:!0},{title:"\u9519\u8BEF\u63D0\u793A",type:"error",visible:!0}],template:`    <template>
      <div> 
        <w-alert title='\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A' center />
        <w-alert type='success' title='\u6210\u529F\u63D0\u793A' center />
        <w-alert type='warning' title='\u8B66\u544A\u63D0\u793A' center />
        <w-alert type='error' title='\u9519\u8BEF\u63D0\u793A' center />
      </div>
    </template>`},{title:"\u5E26\u6709\u8F85\u52A9\u6027\u6587\u5B57",desc:"\u8BBE\u7F6E description \u5C5E\u6027\uFF0C\u4FEE\u6539\u63CF\u8FF0\u5185\u5BB9\u3002 (\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u63CF\u8FF0\u5185\u5BB9)",center:!0,components:[{title:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",visible:!0,description:"\u63CF\u8FF0\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u8BF4\u70B9\u4EC0\u4E48\u5427\u3002\u3002\u3002\u3002\u3002\u3002\u3002",isDesc:!0},{title:"\u6210\u529F\u63D0\u793A",type:"success",visible:!0,description:"\u8F85\u52A9\u6587\u5B57\u3001\u8F85\u52A9\u6587\u5B57\u3001\u8F85\u52A9\u6587\u5B57",showIcon:!0}],template:`    <template>
      <div>
        <w-alert title='\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A' center>
        <div>
          \u63CF\u8FF0\u6587\u5B571\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002 <br>
          \u63CF\u8FF0\u6587\u5B572\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002
        </div>
        </w-alert>
        <w-alert type='success' title='\u6210\u529F\u63D0\u793A' center description='\u8F85\u52A9\u6587\u5B57\u3001\u8F85\u52A9\u6587\u5B57\u3001\u8F85\u52A9\u6587\u5B57' show-icon />
      </div>
    </template>`},{title:"\u5173\u95ED\u52A8\u753B",desc:"\u8BBE\u7F6E close-animate \u5C5E\u6027\uFF0C\u53EF\u7ED9 Alert \u589E\u52A0\u663E\u9690\u7684\u52A8\u753B\u6548\u679C (\u9ED8\u8BA4\u65E0\u52A8\u753B\u6548\u679C)\u3002",closeAnimate:"",closeAnimateList:["","fade","zoom","slide-up","slide-down","fold-up","fold-down"],components:[{title:"Alert",visible:!0}],template:`    <template>
      <div class='alert-animate-demo'> 
        <div class='options'>
          <div class='option'>
            <span>\u52A8\u753B\u540D\u79F0\uFF1A</span>
            <w-radio-group v-model:checked='alertCloseAnimate'>
              <w-radio v-for='animate in alertAnimateList' :value='animate' :key='animate'>
                {{animate || '\u65E0\u52A8\u753B'}}
              </w-radio>
            </w-radio-group>
          </div>
          <div class='option'>
            <span>\u624B\u52A8\u5207\u6362\uFF1A</span>
            <w-switch v-model='alertVisible' open-text='\u663E\u793A' off-text='\u9690\u85CF' text-inline />
          </div>
        </div>
        <w-alert :visible='alertVisible' :close-animate='alertCloseAnimate' 
          title='Alert' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            alertVisible: true,
            alertCloseAnimate: '',
            alertAnimateList: [
              '','fade','zoom','slide-up','slide-down','fold-up','fold-down'
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const alertVisible = ref(true);
                alertCloseAnimate = ref('');
                alertAnimateList = [
                  '','fade','zoom','slide-up','slide-down','fold-up','fold-down'
                ];
          return { alertVisible, alertCloseAnimate, alertAnimateList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .alert-animate-demo {
        display: flex;
        flex-direction: column;
        margin: 1em;
        > .options {
          display: flex;
          > div {
            margin: 1em;
          }
        }
        > .w-alert {
          margin: 1em;
        }
      } 
    </style>`}]),F={attribute:[{name:"visible",desc:"\u662F\u5426\u53EF\u89C1",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"info\u3001success\u3001warning\u3001error",default:"info"},{name:"effect",desc:"\u4E3B\u9898",type:"string",optional:"light\u3001dark",default:"light"},{name:"title",desc:"\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"descriprion",desc:"\u8F85\u52A9\u6027\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9ED8\u8BA4 slot \u4F20\u5165",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"size",desc:"Alert \u7EC4\u4EF6\u7684\u6587\u5B57\u5927\u5C0F (\u4F1A\u81EA\u52A8\u8C03\u6574\u524D\u7F6E\u56FE\u6807\u548C\u5173\u95ED\u56FE\u6807\u7684\u5927\u5C0F)",type:"string\u3001number",optional:"\u2014\u2014",default:"15px"},{name:"closable",desc:"\u662F\u5426\u53EF\u5173\u95ED",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"close-animate",desc:"\u5173\u95ED\u65F6\u7684\u52A8\u753B\u6548\u679C\uFF0C\u9ED8\u8BA4\u65E0\u52A8\u753B\u6548\u679C",type:"string",optional:"fade\u3001zoom\u3001slide-up\u3001slide-down\u3001fold-up\u3001fold-down",default:"\u2014\u2014"},{name:"close-text",desc:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u6587\u672C",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"center",desc:"\u6807\u9898\u548C\u63CF\u8FF0\u662F\u5426\u5C45\u4E2D",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon",desc:"\u524D\u7F6E\u56FE\u6807\u7684 name (\u5F53\u6709\u8BBE\u7F6E type \u65F6\uFF0Cicon \u4F1A\u5931\u6548)",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-icon",desc:"\u662F\u5426\u663E\u793A\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"title",desc:"\u6807\u9898"},{name:"\u2014\u2014",desc:"\u63CF\u8FF0"},{name:"icon",desc:"\u524D\u7F6E\u56FE\u6807"}],event:[{name:"close",desc:"\u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",callbackParams:"\u2014\u2014"}]};const B={class:"alert-demo-list"},L={key:0,class:"options"},I=o("span",null,"\u6587\u5B57\u5927\u5C0F\uFF1A",-1),D={key:1,class:"options"},U=o("span",null,"\u52A8\u753B\u540D\u79F0\uFF1A",-1),T=o("br",null,null,-1),N={key:0,class:"options"},S=o("span",null,"\u624B\u52A8\u5207\u6362\uFF1A",-1),j=o("div",null,[u(" \u63CF\u8FF0\u6587\u5B571\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002 "),o("br"),u(" \u63CF\u8FF0\u6587\u5B572\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002 ")],-1),E=o("img",{class:"custom-img",src:"https://d.lanrentuku.com/down/png/1508/gantanhao-jinggao/a20.png"},null,-1),q=x({setup(P){return(H,R)=>{const w=s("w-input-number"),y=s("w-radio"),b=s("w-radio-group"),_=s("w-switch"),g=s("w-alert"),A=s("DemoItem"),z=s("TableList");return i(),l("div",B,[(i(!0),l(c,null,p(v(V),(t,r)=>(i(),m(A,{item:t,key:t.title},{default:n(()=>[r===3?(i(),l("div",L,[I,a(w,{modelValue:t.size,"onUpdate:modelValue":e=>t.size=e,size:"small",min:12,max:50},null,8,["modelValue","onUpdate:modelValue"])])):r===6?(i(),l("div",D,[U,a(b,{checked:t.closeAnimate,"onUpdate:checked":e=>t.closeAnimate=e},{default:n(()=>[(i(!0),l(c,null,p(t.closeAnimateList,e=>(i(),m(y,{value:e,key:e},{default:n(()=>[u(k(e||"\u65E0\u52A8\u753B"),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"]),T])):f("",!0),(i(!0),l(c,null,p(t.components,e=>(i(),l("div",{key:e},[r===6?(i(),l("div",N,[S,a(_,{modelValue:e.visible,"onUpdate:modelValue":d=>e.visible=d,"open-text":"\u663E\u793A","off-text":"\u9690\u85CF","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):f("",!0),a(g,{visible:e.visible,type:e.type,title:e.title,effect:t.effect,closable:e.closable,"close-text":e.closeText,icon:e.icon,center:t.center||e.center,description:e.description,"show-icon":t.showIcon||e.showIcon,"close-animate":t.closeAnimate,size:r===3?t.size:"",onClose:d=>e.visible=!1},C({_:2},[e.isDesc?{name:"default",fn:n(()=>[j])}:void 0,e.iconSlot?{name:"icon",fn:n(()=>[E])}:void 0]),1032,["visible","type","title","effect","closable","close-text","icon","center","description","show-icon","close-animate","size","onClose"])]))),128))]),_:2},1032,["item"]))),128)),a(z,{data:v(F)},null,8,["data"])])}}});export{q as default};
