import{r as v,d as y,a as c,o as a,g as n,H as p,I as d,c as u,w as t,b as o,k as b,P as x,z as i,h as l,R as _,y as m}from"./vendor.c0366ad2.js";const B=v([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E title \u5C5E\u6027\uFF0C\u4FEE\u6539\u9875\u5934\u7684\u5DE6\u4FA7\u6807\u9898\u3002(\u9ED8\u8BA4\u4E3A\u8FD4\u56DE) \u8BBE\u7F6E content \u5C5E\u6027\uFF0C\u4FEE\u6539\u9875\u5934\u7684\u53F3\u4FA7\u5185\u5BB9\u3002title\u548Ccontent\u90FD\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5176\u5185\u5BB9\u3002",components:[{content:"\u8BE6\u60C5\u9875"},{title:"\u8FD4\u56DE\u4E0A\u4E00\u9875",content:"\u8BE6\u60C5\u9875"},{title:"back",content:"\u8BE6\u60C5\u9875",slot:!0},{title:"\u8FD4\u56DE\u4E0A\u4E00\u9875",content:"\u8BE6\u60C5\u9875",slot:!0}],template:`    <template>
      <w-page-header content='\u8BE6\u60C5\u9875' @back='back' />
      <w-page-header title='\u8FD4\u56DE\u4E0A\u4E00\u9875' content='\u8BE6\u60C5\u9875' @back='back' />
      <w-page-header @back='back'>
        <template #title><i>back</i></template>
        <template #content><h2>\u8BE6\u60C5\u9875</h2></template>
      </w-page-header>
      <w-page-header @back='back'>
        <template #title><i>\u8FD4\u56DE\u4E0A\u4E00\u9875</i></template>
        <template #content><h2>\u8BE6\u60C5\u9875</h2></template>
      </w-page-header>
    </template>
    <script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const back = () => console.log('clickBack...');
          return { back };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",desc:"\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u9875\u5934\u7684\u5DE6\u4FA7\u56FE\u6807\u3002(\u4E5F\u53EF\u4F7F\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u56FE\u6807)",slot:!0,components:[{content:"\u6D3B\u52A8\u9875",icon:"rotate-right"},{content:"\u6D3B\u52A8\u9875",slotIcon:!0}],template:`    <template>
      <w-page-header icon='rotate-right'>
        <template #content>\u6D3B\u52A8\u9875</template>
      </w-page-header>
      <w-page-header>
        <template #icon>
          <span style='margin-right:0.5em;'>
            <img width='35' src="https://static01.imgkr.com/temp/b9da49d9def64b488c349e9bf666a3d7.png" alt="">
          </span> 
        </template>
      <template #content>\u6D3B\u52A8\u9875</template>
      </w-page-header>
    </template>`},{title:"\u5E26\u9762\u5305\u5C51\u9875\u5934",desc:"\u4E0E\u9762\u5305\u5C51\u5BFC\u822A\u642D\u914D\u4F7F\u7528\u53EF\u4EE5\u66F4\u6E05\u6670 (\u9002\u5408\u591A\u7EA7\u83DC\u5355)",slot:!0,components:[{content:"\u6587\u7AE0\u8BE6\u60C5",breadcrumb:!0}],template:`    <template>
      <div>
        <w-breadcrumb v-if='child.breadcrumb' size='15px' style='padding:16px 0 4px 12px;'>
          <w-breadcrumb-item to="/">\u9996\u9875</w-breadcrumb-item>
          <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u4E13\u680F</w-breadcrumb-item>
          <w-breadcrumb-item href='http://www.baidu.com'>\u6587\u7AE0\u5217\u8868</w-breadcrumb-item>
          <w-breadcrumb-item>\u6587\u7AE0\u8BE6\u60C5</w-breadcrumb-item>
        </w-breadcrumb>
        <w-page-header>
          <template #content>\u6587\u7AE0\u8BE6\u60C5</template>
        </w-page-header>
      </div>
    </template>`}]),C={attribute:[{name:"title",desc:"\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u8FD4\u56DE"},{name:"content",desc:"\u5185\u5BB9",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"left"}],slot:[{name:"title",desc:"\u6807\u9898\u533A"},{name:"content",desc:"\u5185\u5BB9\u533A"},{name:"icon",desc:"\u81EA\u5B9A\u4E49\u56FE\u6807"}],event:[{name:"back",desc:"\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u89E6\u53D1",callbackParams:"\u2014\u2014"}]};const E={class:"pageHeader-demo-list"},I=m("\u9996\u9875"),A=m(" \u6587\u7AE0\u4E13\u680F "),D=m(" \u6587\u7AE0\u5217\u8868 "),L=m("\u6587\u7AE0\u8BE6\u60C5"),N={key:0},V={key:1},z=l("span",{style:{"margin-right":"0.5em"}},[l("img",{width:"32",src:"https://static01.imgkr.com/temp/b9da49d9def64b488c349e9bf666a3d7.png",alt:""})],-1),j=y({setup(T){const w=()=>console.log("clickBack...");return(F,H)=>{const r=c("w-breadcrumb-item"),g=c("w-breadcrumb"),h=c("w-page-header"),f=c("DemoItem"),k=c("TableList");return a(),n("div",E,[(a(!0),n(p,null,d(_(B),(s,P)=>(a(),u(f,{item:s,key:s.title},{default:t(()=>[(a(!0),n(p,null,d(s.components,e=>(a(),n("div",{key:e},[e.breadcrumb?(a(),u(g,{key:0,size:15},{default:t(()=>[o(r,{to:"/"},{default:t(()=>[I]),_:1}),o(r,{href:"http://www.baidu.com"},{default:t(()=>[A]),_:1}),o(r,{href:"http://www.baidu.com"},{default:t(()=>[D]),_:1}),o(r,null,{default:t(()=>[L]),_:1})]),_:1})):b("",!0),o(h,{title:e.title,content:e.content,icon:e.icon,onBack:w},x({_:2},[e.title||e.slot?{name:"title",fn:t(()=>[e.slot?(a(),n("i",N,i(e.title),1)):e.title?(a(),n("p",V,i(e.title),1)):b("",!0)])}:void 0,e.slotIcon?{name:"icon",fn:t(()=>[z])}:void 0,e.slot?{name:"content",fn:t(()=>[l("h2",null,i(e.content),1)])}:void 0]),1032,["title","content","icon"])]))),128))]),_:2},1032,["item"]))),128)),o(k,{data:_(C)},null,8,["data"])])}}});export{j as default};
