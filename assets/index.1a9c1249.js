import{r as k,d as x,m as w,a as i,o as t,g as r,H as f,I as _,c,w as s,b as a,k as d,z as F,P as C,R as l,y as n}from"./vendor.c0366ad2.js";const V=k([{title:"\u57FA\u7840\u7528\u6CD5",desc:`\u5728w-breadcrumb\u4E2D\u4F7F\u7528w-breadcrumb-item\u6807\u7B7E\u8868\u793A\u6BCF\u4E00\u7EA7\u83DC\u5355\u3002<br>
      item\u4E2D\u8BBE\u7F6E to \u5C5E\u6027\uFF0C\u5B9A\u4E49\u8DEF\u7531\u8DF3\u8F6C\u7684\u8DEF\u5F84\u3002\u8BBE\u7F6E href \u5C5E\u6027\uFF0C\u5B9A\u4E49\u94FE\u63A5\u8DF3\u8F6C\u7684\u8DEF\u5F84\u3002(\u4F1A\u5237\u65B0\u9875\u9762)
      `,components:[{}],template:`    <template>
      <w-breadcrumb>
        <w-breadcrumb-item to='/'>\u9996\u9875</w-breadcrumb-item>
        <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
        <w-breadcrumb-item>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
      </w-breadcrumb>
    </template>`},{title:"\u6587\u5B57\u5927\u5C0F",desc:"\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u6587\u5B57\u7684\u5927\u5C0F\u3002 (\u5305\u62EC\u5206\u9694\u7B26\u548C\u524D\u7F6E\u56FE\u6807\u7684\u5927\u5C0F)",size:18,components:[{},{haveIcon:!0}],template:`    <template>
      <div class='demo'>
        <div class='options'>
          <div>
            <span>\u6587\u5B57\u5927\u5C0F\uFF1A</span>
            <w-input-number v-model='size' size='medium' :min='12' :max='80' />
          </div>
        </div> 
        <w-breadcrumb :size='size'>
          <w-breadcrumb-item to='/'>\u9996\u9875</w-breadcrumb-item>
          <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
          <w-breadcrumb-item>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
        </w-breadcrumb>
        <w-breadcrumb :size='size'>
          <w-breadcrumb-item to='/'>
            <w-icon :size='size' name='home-s' /> \u9996\u9875
          </w-breadcrumb-item>
          <w-breadcrumb-item href='http://www.baidu.com'>
            <w-icon :size='size' name='list' /> \u6587\u7AE0\u5217\u8868
          </w-breadcrumb-item>
          <w-breadcrumb-item>
            <w-icon :size='size' name='detail-s' /> \u6587\u7AE0\u5217\u8868
          </w-breadcrumb-item>
        </w-breadcrumb>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
          data() {
            return {
            size: 18
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const size = ref(18);
          return { size };
        }
      })
    <\/script>`,style:`
    <style>
      .demo > div {
        margin: 1em;
        width: 100%;
      }
    </style>`},{title:"\u56FE\u6807\u5206\u9694\u7B26",desc:`\u8BBE\u7F6E separator \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u9694\u7B26 (\u5FC5\u987B\u662F\u5B57\u7B26\u4E32)\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u5185\u5BB9\u3002<br>
      \u8BBE\u7F6E separator-icon \uFF0C\u4F20\u5165\u5BF9\u5E94icon\u7684name\uFF0C\u4FEE\u6539\u5206\u9694\u7B26\u3002\u6CE8\u610F\uFF0C\u8FD9\u5C06\u4F7F separator \u8BBE\u7F6E\u5931\u6548\u3002`,size:17,position:"left",components:[{title:"icon",icon:"right"},{title:"\u5C5E\u6027",separator:'<span style="color: red"> > </span>'},{title:"\u63D2\u69FD"}],template:`    <template>
      <div class='demo'>
        <div class='options'>
          <div>
            <span>\u5BFC\u822A\u4F4D\u7F6E\uFF1A</span>
            <w-switch v-model='position' open-text='\u53F3\u8FB9' off-text='\u5DE6\u8FB9'
              open-value='right' off-value='left' />
          </div>
        </div> 
        <div>
          <span>icon\uFF1A</span>
          <w-breadcrumb separator-icon='right' :size='17' :position='position'>
            <w-breadcrumb-item to='/'>\u9996\u9875</w-breadcrumb-item>
            <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
            <w-breadcrumb-item>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
          </w-breadcrumb>
        </div>
        <div>
          <span>\u5C5E\u6027\uFF1A</span>
          <w-breadcrumb separator="<span style='color: red'> > </span>" :size='17' :position='position'>
            <w-breadcrumb-item to='/"'>\u9996\u9875</w-breadcrumb-item>
            <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
            <w-breadcrumb-item>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
          </w-breadcrumb>
        </div>
        <div>
          <span>\u63D2\u69FD\uFF1A</span>
          <w-breadcrumb :size='19' :position='position'>
            <w-breadcrumb-item to='/'>\u9996\u9875</w-breadcrumb-item>
            <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
            <w-breadcrumb-item>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
            <template #separator>
              <w-icon color='gold' name='right' :size='17' />
            </template>
          </w-breadcrumb>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            position: 'left'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const position = ref('left');
          return { position };
        }
      })
    <\/script>`,style:`
    <style>
      .demo {
        display: flex;
        flex-direction: column;
      }
      .demo > div {
        margin: 1em;
        width: 100%;
      }
    </style>`}]),A={attribute:[{name:"separator",desc:"\u5206\u9694\u7B26",type:"string",optional:"\u2014\u2014",default:"\u659C\u6760/"},{name:"separator-icon",desc:"\u56FE\u6807\u5206\u9694\u7B26 name",type:"boolean",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"size",desc:"\u6587\u5B57\u5927\u5C0F",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"position",desc:"\u56FE\u6807\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u4ECE\u5DE6\u5230\u53F3(\u6700\u53F3\u8FB9\u6CA1\u6709\u56FE\u6807)\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u53F3\u5230\u5DE6(\u6700\u5DE6\u8FB9\u6CA1\u6709\u56FE\u6807)",type:"string",optional:"left\u3001right",default:"left"}],slot:[{name:"separator",desc:"\u5206\u9694\u7B26"}]},B={attribute:[{name:"href",desc:"\u8DF3\u8F6C\u7684\u94FE\u63A5\uFF0C\u4F1A\u5237\u65B0\u9875\u9762",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"target",desc:"\u76F8\u5F53\u4E8Ea\u94FE\u63A5\u7684target\u5C5E\u6027",type:"string",optional:"_blank\u3001_self",default:"\u2014\u2014"},{name:"to",desc:"\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C vue-router \u7684 to",type:"string\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"replace",desc:"\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55",type:"boolean",optional:"\u2014\u2014",default:!1}]};const I={class:"breadcrumb-demo-list"},D={key:0,class:"options"},E={key:0},L=n(" \u6587\u5B57\u5927\u5C0F\uFF1A "),U={key:1},N=n(" \u5BFC\u822A\u4F4D\u7F6E\uFF1A "),T={key:0,style:{"white-space":"nowrap"}},j=n(" \u9996\u9875 "),S=n(" \u6587\u7AE0\u5217\u8868 "),H=n(" \u6587\u7AE0\u8BE6\u60C5 "),P=n("Breadcrumb Item"),K=x({setup(R){return w("left"),w(null),(q,G)=>{const v=i("w-input-number"),h=i("w-switch"),u=i("w-icon"),p=i("w-breadcrumb-item"),z=i("w-breadcrumb"),y=i("DemoItem"),b=i("TableList");return t(),r("div",I,[(t(!0),r(f,null,_(l(V),(e,m)=>(t(),c(y,{item:e,key:e.title},{default:s(()=>[m===1||m===2?(t(),r("div",D,[m===1?(t(),r("div",E,[L,a(v,{modelValue:e.size,"onUpdate:modelValue":o=>e.size=o,size:"medium",class:"size",min:12,max:80},null,8,["modelValue","onUpdate:modelValue"])])):(t(),r("div",U,[N,a(h,{modelValue:e.position,"onUpdate:modelValue":o=>e.position=o,border:!0,"open-text":"\u53F3\u8FB9","off-text":"\u5DE6\u8FB9","open-value":"right","off-value":"left"},null,8,["modelValue","onUpdate:modelValue"])]))])):d("",!0),(t(!0),r(f,null,_(e.components,(o,g)=>(t(),r("div",{key:o},[m===2?(t(),r("span",T,F(o.title)+"\uFF1A",1)):d("",!0),a(z,{"separator-icon":o.icon,size:e.size,separator:o.separator,position:e.position},C({default:s(()=>[a(p,{to:{path:"/"}},{default:s(()=>[o.haveIcon?(t(),c(u,{key:0,name:"home-s",size:e.size},null,8,["size"])):d("",!0),j]),_:2},1024),a(p,{href:"http://www.baidu.com"},{default:s(()=>[o.haveIcon?(t(),c(u,{key:0,name:"list",size:e.size},null,8,["size"])):d("",!0),S]),_:2},1024),a(p,null,{default:s(()=>[o.haveIcon?(t(),c(u,{key:0,name:"detail-s",size:e.size},null,8,["size"])):d("",!0),H]),_:2},1024)]),_:2},[m===2&&g===2?{name:"separator",fn:s(()=>[a(u,{color:"gold",name:"right",size:e.size},null,8,["size"])])}:void 0]),1032,["separator-icon","size","separator","position"])]))),128))]),_:2},1032,["item"]))),128)),a(b,{data:l(A)},null,8,["data"]),a(b,{data:l(B)},{default:s(()=>[P]),_:1},8,["data"])])}}});export{K as default};
