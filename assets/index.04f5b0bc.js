import{r as z,d as k,a as o,o as n,g as l,H as c,I as s,c as p,w as a,h as w,b as r,k as I,n as V,a3 as m,y as i,z as g,R as d}from"./vendor.c0366ad2.js";const L=z([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E type \u5C5E\u6027\uFF0C\u4FEE\u6539 Button \u7684\u7C7B\u578B\u3002\u8BBE\u7F6E plain \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u662F\u6734\u7D20\u6309\u94AE\u3002\u8BBE\u7F6E round \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u662F\u5706\u89D2\u3002\u8BBE\u7F6E circle \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u662F\u5706\u5F62\u3002",components:[{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE"},{type:"primary",label:"\u4E3B\u8981\u6309\u94AE"},{type:"success",label:"\u6210\u529F\u6309\u94AE"},{type:"warning",label:"\u8B66\u544A\u6309\u94AE"},{type:"danger",label:"\u5371\u9669\u6309\u94AE"},{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE",plain:!0},{type:"primary",label:"\u4E3B\u8981\u6309\u94AE",plain:!0},{type:"success",label:"\u6210\u529F\u6309\u94AE",plain:!0},{type:"warning",label:"\u8B66\u544A\u6309\u94AE",plain:!0},{type:"danger",label:"\u5371\u9669\u6309\u94AE",plain:!0},{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE",plain:!0,round:!0},{type:"primary",label:"\u4E3B\u8981\u6309\u94AE",plain:!0,round:!0},{type:"success",label:"\u6210\u529F\u6309\u94AE",plain:!0,round:!0},{type:"warning",label:"\u8B66\u544A\u6309\u94AE",plain:!0,round:!0},{type:"danger",label:"\u5371\u9669\u6309\u94AE",plain:!0,round:!0},{type:"default",circle:!0,icon:"home",size:"50px",onlyIcon:!0},{type:"primary",plain:!0,circle:!0,size:"12px",icon:"home",onlyIcon:!0},{type:"primary",circle:!0,icon:"download",onlyIcon:!0},{type:"warning",circle:!0,icon:"upload",onlyIcon:!0},{type:"danger",circle:!0,icon:"upload",onlyIcon:!0}],template:`    <template>
      <div>
        <w-button>\u9ED8\u8BA4\u6309\u94AE</w-button>
        <w-button type='primary'>\u4E3B\u8981\u6309\u94AE</w-button>
        <w-button type='success'>\u6210\u529F\u6309\u94AE</w-button>
        <w-button type='warning'>\u8B66\u544A\u6309\u94AE</w-button>
        <w-button type='danger'>\u5371\u9669\u6309\u94AE</w-button>
      </div>  

      <div>
        <w-button plain>\u9ED8\u8BA4\u6309\u94AE</w-button>
        <w-button plain ype='primary'>\u4E3B\u8981\u6309\u94AE</w-button>
        <w-button plain type='success'>\u6210\u529F\u6309\u94AE</w-button>
        <w-button plain type='warning'>\u8B66\u544A\u6309\u94AE</w-button>
        <w-button plain type='danger'>\u5371\u9669\u6309\u94AE</w-button>
      </div>

      <div>
        <w-button plain round>\u9ED8\u8BA4\u6309\u94AE</w-button>
        <w-button plain round ype='primary'>\u4E3B\u8981\u6309\u94AE</w-button>
        <w-button plain round type='success'>\u6210\u529F\u6309\u94AE</w-button>
        <w-button plain round type='warning'>\u8B66\u544A\u6309\u94AE</w-button>
        <w-button plain round type='danger'>\u5371\u9669\u6309\u94AE</w-button>
      </div>

      <div>
        <w-button circle icon='home' icon-size='50px' only-icon />
        <w-button circle plain type='primary' icon='home' only-icon />
        <w-button circle type='primary' icon='download' only-icon />
        <w-button circle type='warning' icon='upload' only-icon />
        <w-button circle type='danger' icon='upload' only-icon />
      </div>
    </template>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u7981\u7528\u3002",disabled:!0,components:[{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE"},{type:"primary",label:"\u4E3B\u8981\u6309\u94AE"},{type:"success",label:"\u6210\u529F\u6309\u94AE"},{type:"warning",label:"\u8B66\u544A\u6309\u94AE"},{type:"danger",label:"\u5371\u9669\u6309\u94AE"},{type:"default",icon:"home",size:"20px",onlyIcon:!0},{type:"success",plain:!0,circle:!0,icon:"home",onlyIcon:!0},{type:"primary",round:!0,icon:"download",onlyIcon:!0},{type:"warning",circle:!0,icon:"upload",onlyIcon:!0},{type:"danger",circle:!0,icon:"check-circle",size:"20px",onlyIcon:!0}],template:`    <template>
      <div>
        <w-button disabled>\u9ED8\u8BA4\u6309\u94AE</w-button>
        <w-button disabled type='primary'>\u4E3B\u8981\u6309\u94AE</w-button>
        <w-button disabled type='success'>\u6210\u529F\u6309\u94AE</w-button>
        <w-button disabled type='warning'>\u8B66\u544A\u6309\u94AE</w-button>
        <w-button disabled type='danger'>\u5371\u9669\u6309\u94AE</w-button>
      </div>

      <div>
        <w-button disabled icon='home' icon-size='20px' only-icon />
        <w-button disabled circle plain type='success' icon='home' only-icon />
        <w-button disabled round type='primary' icon='download' only-icon />
        <w-button disabled circle type='warning' icon='upload' only-icon />
        <w-button disabled circle type='danger' icon='check-circle' icon-size='20px' only-icon />
      </div>
    </template>`},{title:"\u6587\u5B57\u6309\u94AE",desc:"\u8BBE\u7F6E type='text' \uFF0C\u4FEE\u6539\u6309\u94AE\u4E3A\u6587\u5B57\u6309\u94AE\u3002",components:[{type:"text",label:"\u6587\u5B57\u6309\u94AE"},{type:"text",disabled:!0,label:"\u4F60\u597D\uFF0C\u4E16\u754C (\u7981\u7528)"}],template:`    <template>     
      <w-button type='text'>\u6587\u5B57\u6309\u94AE</w-button>
      <w-button disabled type='text'>\u4F60\u597D\uFF0C\u4E16\u754C (\u7981\u7528)</w-button>
    </template>`},{title:"\u56FE\u6807\u6309\u94AE",desc:"\u5E26\u56FE\u6807\u7684\u6309\u94AE\u53EF\u589E\u5F3A\u8FA8\u8BC6\u5EA6\uFF08\u6709\u6587\u5B57\uFF09\u6216\u8282\u7701\u7A7A\u95F4\uFF08\u65E0\u6587\u5B57\uFF09\u3002\u8BBE\u7F6E icon \u5C5E\u6027\u53EF\u6DFB\u52A0\u6DFB\u52A0\u56FE\u6807\uFF0C\u9700\u8981\u56FE\u6807\u5728\u6587\u5B57\u53F3\u8FB9\u8BBE\u7F6E icon-position \u5C5E\u6027\u4E3A right \u5373\u53EF\u3002",components:[{type:"default",icon:"home",size:"20px",onlyIcon:!0},{type:"success",plain:!0,circle:!0,icon:"home",size:"20px",onlyIcon:!0},{icon:"home",label:"\u5730\u5740"},{type:"primary",icon:"home",size:"19px",label:"\u5730\u5740",iconPosition:"right"}],template:`    <template>  
      <w-button icon='home' icon-size='20px' only-icon />
      <w-button type='success' plain circle icon='home' icon-size='20px' only-icon />
      <w-button icon='home'>\u5730\u5740</w-button>
      <w-button type='primary' icon='home' icon-size='19px' icon-position='right'>\u5730\u5740</w-button>
    </template>`},{title:"\u52A0\u8F7D\u4E2D",desc:"\u8BBE\u7F6E loading \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u5728\u52A0\u8F7D\u4E2D\u3002",components:[{type:"default",label:"\u52A0\u8F7D\u4E2D..",loading:!0},{type:"primary",label:"\u52A0\u8F7D\u4E2D..",loading:!0},{loading:!0,onlyIcon:!0},{type:"danger",plain:!0,round:!0,label:"\u52A0\u8F7D\u4E2D..",loading:!0,iconPosition:"right"}],template:`    <template>
      <w-button loading>\u52A0\u8F7D\u4E2D..</w-button>
      <w-button type='primary' loading>\u52A0\u8F7D\u4E2D..</w-button>
      <w-button loading onlyIcon />
      <w-button type='danger' plain round loading icon-position='right'>\u52A0\u8F7D\u4E2D..</w-button>
    </template>`},{title:"\u5757\u7EA7\u6309\u94AE",desc:"\u8BBE\u7F6E bock \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u662F\u5426\u662F\u5757\u7EA7\u5143\u7D20\u3002 (\u5BBD\u5EA6\u4E3A100%\u7684)",block:!0,components:[{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE",block:!0},{type:"primary",label:"\u52A0\u8F7D\u4E2D..",block:!0,loading:!0},{type:"danger",plain:!0,round:!0,label:"\u5BBD\u5EA6100%",block:!0,icon:"setting",iconPosition:"right"}],template:`    <template>
      <w-button block>\u9ED8\u8BA4\u6309\u94AE</w-button>
      <w-button type='primary' loading block>\u52A0\u8F7D\u4E2D..</w-button>
      <w-button type='danger' plain round block icon-position='right' icon='up'>\u5BBD\u5EA6100</w-button>
    </template>`},{title:"\u5E7D\u7075\u6309\u94AE",desc:"\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E\uFF0C\u5E38\u7528\u5728\u6709\u8272\u7684\u80CC\u666F\u4E0A\u3002",ghost:!0,components:[{type:"default",label:"\u9ED8\u8BA4\u6309\u94AE"},{type:"primary",label:"\u4E3B\u8981\u6309\u94AE"},{type:"success",label:"\u6210\u529F\u6309\u94AE"},{type:"warning",label:"\u8B66\u544A\u6309\u94AE"},{type:"danger",label:"\u5371\u9669\u6309\u94AE"},{type:"text",label:"\u6587\u5B57\u6309\u94AE"}],template:`    <template>
      <div>
        <w-button ghost>\u9ED8\u8BA4\u6309\u94AE</w-button>
        <w-button type='primary' ghost>\u4E3B\u8981\u6309\u94AE</w-button>
        <w-button type='success' ghost>\u6210\u529F\u6309\u94AE</w-button>
        <w-button type='warning' ghost>\u8B66\u544A\u6309\u94AE</w-button>
        <w-button type='danger' ghost>\u5371\u9669\u6309\u94AE</w-button>
        <w-button type='text' ghost>\u6587\u5B57\u6309\u94AE</w-button>
      </div>`},{title:"\u6309\u94AE\u7EC4",desc:`\u5982\u9700\u4F7F\u7528\u6309\u94AE\u7EC4\uFF0C\u5219\u4F7F\u7528<w-button-group>\u6807\u7B7E\u6765\u5D4C\u5957\u6309\u94AE\u3002 (\u6309\u94AE\u7EC4\u7684\u5B50\u5143\u7D20\u5FC5\u987B\u662F\u6309\u94AE)<br>
    \u8BBE\u7F6E vertical \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u94AE\u7EC4\u5185\u7684\u6309\u94AE\u662F\u5426\u5782\u76F4\u6392\u5217\u3002`,group:!0,vertical:!0,size:16,components:[{button:[{icon:"left",label:"\u4E0A\u4E00\u9875"},{icon:"right",label:"\u4E0B\u4E00\u9875",iconPosition:"right"}]},{button:[{label:"S"},{label:"M"},{label:"L",disabled:!0},{label:"XL"},{label:"XXL"}],type:"primary"},{button:[{icon:"upload",onlyIcon:!0},{icon:"download",onlyIcon:!0}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u6587\u5B57\u5927\u5C0F\uFF1A</span>
          <w-input-number size='small' v-model='size' :min='12' :max='60' />
        </div>
        <div>
          <span>\u6309\u94AE\u65B9\u5411\uFF1A</span>
          <w-switch class='switch-vertical' v-model='vertical' open-text='\u5782\u76F4' off-text='\u6C34\u5E73' text-inline />
        </div>
      </div>
      <w-button-group :vertical='vertical' :size='size'>
        <w-button icon='left'>\u4E0A\u4E00\u9875</w-button>
        <w-button icon='right' icon-position='right'>\u4E0B\u4E00\u9875</w-button>
      </w-button-group>

      <w-button-group :vertical='vertical' :size='size'>
        <w-button type='primary'>S</w-button>
        <w-button>M</w-button>
        <w-button disabled>L</w-button>
        <w-button>XL</w-button>
        <w-button>XXL</w-button>
      </w-button-group>

      <w-button-group :vertical='vertical' :size='size'>
        <w-button icon='upload' only-icon />
        <w-button icon='download' icon-position='right' only-icon />
      </w-button-group>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            vertical: true,
            size: 16
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const vertical = ref(true);
          const size = ref(16);
          return { vertical, size };
        }
      })
    <\/script>`}]),C={attribute:[{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"default\u3001primary\u3001success\u3001warning\u3001danger\u3001text",default:"default"},{name:"plain",desc:"\u662F\u5426\u6734\u7D20\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"round",desc:"\u662F\u5426\u5706\u89D2\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"circle",desc:"\u662F\u5426\u5706\u5F62\u6309\u94AE  ",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"loading",desc:"\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001  ",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u662F\u5426\u7981\u7528  ",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"block",desc:"\u662F\u5426\u5C06\u6309\u94AE\u5BBD\u5EA6\u8C03\u6574\u4E3A\u5176\u7236\u7684\u5BBD\u5EA6  ",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"ghost",desc:"\u5E7D\u7075\u6A21\u5F0F\uFF0C\u4F7F\u6309\u94AE\u80CC\u666F\u4E3A\u900F\u660E",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"dashed",desc:"\u8FB9\u6846\u662F\u5426\u662F\u865A\u7EBF\u5F62\u5F0F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"\u6587\u5B57\u3001\u56FE\u6807\u5927\u5C0F",type:"string\u3001number",optional:"\u2014\u2014",default:"14px"},{name:"icon",desc:"\u56FE\u6807\u540D\u79F0",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"only-icon",desc:"\u6309\u94AE\u5185\u53EA\u6709\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon-position",desc:"\u56FE\u6807\u663E\u793A\u4F4D\u7F6E",type:"string",optional:"left\u3001right",default:"left"}],event:[{name:"click",desc:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"}]},B={attribute:[{name:"vertical",desc:"\u662F\u5426\u7EB5\u5411\u6392\u5217\u6309\u94AE\u7EC4",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"\u6309\u94AE\u7EC4\u7684\u6587\u5B57\u5927\u5C0F (\u5305\u62EC\u56FE\u6807)",type:"string\u3001number",optional:"\u2014\u2014",default:"14px"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u6309\u94AE\u7EC4\u5185\u7684\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!1}]};const F={class:"button-demo-list"},P={key:0,class:"options"},X=i(" \u6587\u5B57\u5927\u5C0F\uFF1A "),A=i(" \u6309\u94AE\u65B9\u5411\uFF1A "),D=i("ButtonGroup"),T=k({setup(N){return(U,E)=>{const f=o("w-input-number"),v=o("w-switch"),b=o("w-button"),h=o("w-button-group"),_=o("DemoItem"),y=o("TableList");return n(),l("div",F,[(n(!0),l(c,null,s(d(L),(t,x)=>(n(),p(_,{item:t,key:t.title},{default:a(()=>[x===7?(n(),l("div",P,[w("div",null,[X,r(f,{modelValue:t.size,"onUpdate:modelValue":e=>t.size=e,size:"small",min:12,max:60},null,8,["modelValue","onUpdate:modelValue"])]),w("div",null,[A,r(v,{modelValue:t.vertical,"onUpdate:modelValue":e=>t.vertical=e,class:"switch-vertical","open-text":"\u5782\u76F4","off-text":"\u6C34\u5E73","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])])):I("",!0),(n(!0),l(c,null,s(t.components,e=>(n(),l("div",{key:e,class:V({group:t.group,block:t.block})},[t.group?(n(),p(h,{key:1,vertical:t.vertical,size:t.size},{default:a(()=>[(n(!0),l(c,null,s(e.button,u=>(n(),p(b,m(u,{key:u,type:e.type,disabled:t.disabled||u.disabled}),{default:a(()=>[i(g(u.label),1)]),_:2},1040,["type","disabled"]))),128))]),_:2},1032,["vertical","size"])):(n(),p(b,m({key:0},e,{disabled:t.disabled||e.disabled,ghost:t.ghost}),{default:a(()=>[i(g(e.label),1)]),_:2},1040,["disabled","ghost"]))],2))),128))]),_:2},1032,["item"]))),128)),r(y,{data:d(C)},null,8,["data"]),r(y,{data:d(B)},{default:a(()=>[D]),_:1},8,["data"])])}}});export{T as default};
