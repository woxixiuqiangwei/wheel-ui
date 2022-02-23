import{r as v,d as A,m as b,a as d,o as _,g as i,H as p,I as f,c as g,w as e,t as s,v as r,b as t,h as C,y as o,z as F,R as k}from"./vendor.c0366ad2.js";import{_ as L}from"./index.c63351a7.js";const O=v([{title:"\u57FA\u672C\u5E38\u7528\u5E03\u5C40",desc:`Layout\uFF1A\u5E03\u5C40\u5BB9\u5668\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957 HeaderSiderContentFooter\u6216 Layout \u672C\u8EAB\uFF0C\u53EF\u4EE5\u653E\u5728\u4EFB\u4F55\u7236\u5BB9\u5668\u4E2D\u3002<br>
    Header\uFF1A\u9876\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 Layout \u4E2D\u3002<br>
    Sider\uFF1A\u4FA7\u8FB9\u680F\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u53CA\u57FA\u672C\u529F\u80FD\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 Layout \u4E2D\u3002<br>
    Content\uFF1A\u5185\u5BB9\u90E8\u5206\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 Layout \u4E2D\u3002<br>
    Footer\uFF1A\u5E95\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 Layout \u4E2D\u3002`,components:[{type:1},{type:2},{type:3},{type:4},{type:5},{type:6}],template:`    <template>
      <div class='wheel-ui-layout-demo'>
        <w-layout>
          <w-layout-header>Header</w-layout-header>
          <w-layout-content>Content</w-layout-content>
        </w-layout>
        <w-layout>
          <w-layout-header>Header</w-layout-header>
          <w-layout-content>Content</w-layout-content>
          <w-layout-footer>Footer</w-layout-footer>
        </w-layout>
        <w-layout>
          <w-layout-header>Header</w-layout-header>
          <w-layout :has-sider='true'>
            <w-layout-aside>Aside</w-layout-aside>
            <w-layout-content>Content</w-layout-content>
          </w-layout>
        </w-layout>
        <w-layout>
          <w-layout-header>Header</w-layout-header>
          <w-layout :has-sider='true'>
            <w-layout-aside>Aside</w-layout-aside>
            <w-layout-content>Content</w-layout-content>
          </w-layout>
          <w-layout-footer>Footer</w-layout-footer>
        </w-layout>
        <w-layout>
          <w-layout-header>Header</w-layout-header>
          <w-layout :has-sider='true'>
            <w-layout-content>Content</w-layout-content>
            <w-layout-aside>Aside</w-layout-aside>
          </w-layout>
          <w-layout-footer>Footer</w-layout-footer>
        </w-layout>
        <w-layout :has-sider='true'>
          <w-layout-aside>Aside</w-layout-aside>
          <w-layout>
            <w-layout-header>Header</w-layout-header>
            <w-layout-content>Content</w-layout-content>
            <w-layout-footer>Footer</w-layout-footer>
          </w-layout>
        </w-layout>
      </div>
    </template>
    <style>
      .wheel-ui-layout-demo {
        text-align: center;
        padding: 24px;
        color: #fff;
      }
      .wheel-ui-layout-demo > .w-layout {
        margin-bottom: 2em;
      }
      .wheel-ui-layout-demo .w-layout-header {
        background: #7dbcea;
      }
      .wheel-ui-layout-demo .w-layout-aside {
        background: #426fee;
        line-height: 200px;
      }
      .wheel-ui-layout-demo .w-layout-content {
        background: #108ee9;
      }
      .wheel-ui-layout-demo .w-layout-footer {
        background: #41a1e6;
      }
    </style>`},{title:"\u6536\u7F29\u4FA7\u8FB9\u680F",desc:"\u8BBE\u7F6E has-sider \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u6709\u4FA7\u8FB9\u680F\u3002 \u8BBE\u7F6E collapsed \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u5C55\u5F00\u4FA7\u8FB9\u680F\u3002",components:[{type:7,isOpen:!0},{type:8,isOpen:!0}],template:`    <template>
      <div class='wheel-ui-layout-collapsed-demo'>
        <w-layout>
          <w-layout-header>
            Header <w-button @click='bool1=!bool1'>\u70B9\u6211\u5207\u6362\u4FA7\u8FB9\u680F</w-button>
          </w-layout-header>
          <w-layout :has-sider='true'>
            <w-layout-aside :collapsed='bool1'>Aside</w-layout-aside>
            <w-layout-content>Content</w-layout-content>
          </w-layout>
          <w-layout-footer>Footer</w-layout-footer>
        </w-layout>
        <w-layout :has-sider='true'>
          <w-layout-aside :collapsed='bool2'>Aside</w-layout-aside>
          <w-layout>
            <w-layout-header>
              Header <w-button @click='bool2=!bool2'>\u70B9\u6211\u5207\u6362\u4FA7\u8FB9\u680F</w-button>
            </w-layout-header>
            <w-layout-content>Content</w-layout-content>
            <w-layout-footer>Footer</w-layout-footer>
          </w-layout>
        </w-layout>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            bool1: true,
            bool2: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const bool1 = ref(true);
          const bool2 = ref(true);
          return { bool1, bool2 };
        }
      })
    <\/script>`}]),B={attribute:[{name:"has-sider",desc:"\u662F\u5426\u6709\u4FA7\u8FB9\u680F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"collapsed",desc:"\u662F\u5426\u5C55\u5F00\u4FA7\u8FB9\u680F",type:"boolean",optional:"\u2014\u2014",default:!0}]};const D={class:"layout-demo-list"},I=o("Header"),S=o("Content"),U=o("Header"),E=o("Content"),N=o("Footer"),T=o("Header"),V=o("Header"),j=o("Aside"),z=o("Content"),R=o("Footer"),q=o("Header"),G=o("Content"),J=o("Aside"),K=o("Footer"),M=o("Aside"),P=o("Header"),Q=o("Content"),W=o("Footer"),X=o(" Header "),Y=o(" Aside "),Z=o("Content"),$=o("Footer"),ee=o("Aside"),te=o(" Header "),oe=o("Content"),ae=o("Footer"),le=A({setup(ue){return b(!0),b(!0),(ne,de)=>{const u=d("w-layout-header"),n=d("w-layout-content"),l=d("w-layout"),y=d("w-layout-footer"),c=d("w-layout-aside"),m=d("w-checkbox"),x=d("DemoItem"),H=d("TableList");return _(),i("div",D,[(_(!0),i(p,null,f(k(O),(h,se)=>(_(),g(x,{item:h,key:h.title},{default:e(()=>[(_(!0),i(p,null,f(h.components,a=>(_(),i("div",{key:a},[s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[I]),_:1}),t(n,null,{default:e(()=>[S]),_:1})]),_:2},1536),[[r,a.type===1]]),s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[U]),_:1}),t(n,null,{default:e(()=>[E]),_:1}),t(y,null,{default:e(()=>[N]),_:1})]),_:2},1536),[[r,a.type===2]]),s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[T]),_:1}),t(l,{"has-sider":!0},{default:e(()=>[t(c,{style:{height:"260px"}},{default:e(()=>[(_(),i(p,null,f(10,w=>C("p",null,"Aside")),64))]),_:1}),t(n,{style:{height:"260px"}},{default:e(()=>[(_(),i(p,null,f(10,w=>C("p",null,"Content")),64))]),_:1})]),_:1})]),_:2},1536),[[r,a.type===3]]),s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[V]),_:1}),t(l,{"has-sider":!0},{default:e(()=>[t(c,null,{default:e(()=>[j]),_:1}),t(n,null,{default:e(()=>[z]),_:1})]),_:1}),t(y,null,{default:e(()=>[R]),_:1})]),_:2},1536),[[r,a.type===4]]),s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[q]),_:1}),t(l,{"has-sider":!0},{default:e(()=>[t(n,null,{default:e(()=>[G]),_:1}),t(c,null,{default:e(()=>[J]),_:1})]),_:1}),t(y,null,{default:e(()=>[K]),_:1})]),_:2},1536),[[r,a.type===5]]),s(t(l,{"has-sider":!0},{default:e(()=>[t(c,null,{default:e(()=>[M]),_:1}),t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[P]),_:1}),t(n,null,{default:e(()=>[Q]),_:1}),t(y,null,{default:e(()=>[W]),_:1})]),_:1})]),_:2},1536),[[r,a.type===6]]),s(t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[t(m,{checked:a.isOpen,"onUpdate:checked":w=>a.isOpen=w},{default:e(()=>[o(F(a.isOpen?"\u9690\u85CF":"\u663E\u793A")+"\u4FA7\u8FB9\u680F ",1)]),_:2},1032,["checked","onUpdate:checked"]),X]),_:2},1024),t(l,{"has-sider":!0},{default:e(()=>[t(c,{collapsed:a.isOpen},{default:e(()=>[Y]),_:2},1032,["collapsed"]),t(n,null,{default:e(()=>[Z]),_:1})]),_:2},1024),t(y,null,{default:e(()=>[$]),_:1})]),_:2},1536),[[r,a.type===7]]),s(t(l,{"has-sider":!0},{default:e(()=>[t(c,{collapsed:a.isOpen},{default:e(()=>[ee]),_:2},1032,["collapsed"]),t(l,null,{default:e(()=>[t(u,null,{default:e(()=>[t(m,{checked:a.isOpen,"onUpdate:checked":w=>a.isOpen=w},{default:e(()=>[o(F(a.isOpen?"\u9690\u85CF":"\u663E\u793A")+"\u4FA7\u8FB9\u680F ",1)]),_:2},1032,["checked","onUpdate:checked"]),te]),_:2},1024),t(n,null,{default:e(()=>[oe]),_:1}),t(y,null,{default:e(()=>[ae]),_:1})]),_:2},1024)]),_:2},1536),[[r,a.type===8]])]))),128))]),_:2},1032,["item"]))),128)),t(H,{data:k(B)},null,8,["data"])])}}});var ye=L(le,[["__scopeId","data-v-26c412d3"]]);export{ye as default};
