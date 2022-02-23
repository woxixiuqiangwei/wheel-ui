import{r as S,d as y,a as i,o as n,g as s,H as u,I as w,c as T,w as a,b as o,k as h,P as C,y as l,z as v,a3 as U,R as m}from"./vendor.c0366ad2.js";const j=S([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E current-page \u5C5E\u6027\u4E3A\u5F53\u524D\u9875\u7801\uFF0C\u8BBE\u7F6E total \u5C5E\u6027\u4E3A\u6570\u636E\u603B\u6570 (\u5FC5\u586B\u9879\uFF0C\u5982\u4E0D\u586B\u5219\u4E0D\u4F1A\u663E\u793A\u5206\u9875\u5668)\u3002",components:[{page:1,total:45}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination v-model:current-page="currentPage" :total="45" />
      </div>
    </template>
    <script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const currentPage = ref(1);
          return { currentPage };
        }
      })
    <\/script>`},{title:"\u5E26\u8FB9\u6846",desc:"\u8BBE\u7F6E border \u5C5E\u6027\uFF0C\u7ED9\u5206\u9875\u6309\u94AE\u6DFB\u52A0\u8FB9\u6846\u3002",components:[{page:1,total:50,border:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="50" border />
      </div>
    </template>`},{title:"\u5E26\u80CC\u666F\u8272",desc:"\u8BBE\u7F6E background \u5C5E\u6027\uFF0C\u7ED9\u5206\u9875\u6309\u94AE\u6DFB\u52A0\u80CC\u666F\u8272\u3002",components:[{page:1,total:50,background:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="50" background />
      </div>
    </template>`},{title:"\u5C55\u793A\u603B\u6570",desc:"\u8BBE\u7F6E show-total \u5C5E\u6027\uFF0C\u663E\u793A\u603B\u6570\uFF0C\u8BBE\u7F6E total \u63D2\u69FD\uFF0C\u53EF\u81EA\u5B9A\u4E49\u603B\u6570\u3002",components:[{page:1,total:50,background:!0,showTotal:!0},{page:1,total:50,background:!0,showTotal:!0,slotTotal:"in Total"}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="50" background show-total />
        <w-pagination :total="50" background show-total>
          <template #total="{total}">
            {{ total + ' in Total' }}
          </template>
        </w-pagination>
      </div>
    </template>`},{title:"\u66F4\u591A\u9875\u7801",desc:"\u8BBE\u7F6E pager-count \u5C5E\u6027\uFF0C\u4FEE\u6539\u6700\u5927\u9875\u7801\u6570 (\u6B65\u957F)\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0\u9875\u7801\uFF0C\u9ED8\u8BA4\u4E3A 5 \u9875\u3002",components:[{page:1,total:200,showTotal:!0},{page:1,total:200,showTotal:!0,pagerCount:10}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="200" show-total />
        <w-pagination :total="200" show-total :pager-count="10" />
      </div>
    </template>`},{title:"\u6BCF\u9875\u6761\u6570",desc:`\u8BBE\u7F6E show-page-sizes \u5C5E\u6027\uFF0C\u663E\u793A\u6BCF\u9875\u6570\u636E\u6761\u6570\u9009\u62E9\u5668\u3002\u8BBE\u7F6E page-sizes \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u6761\u6570\u9009\u62E9\u9879\uFF0C\u9ED8\u8BA4\u4E3A[10, 20, 30, 40, 50]
      <br>\u8BBE\u7F6E page-size-option \u63D2\u69FD\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6761\u6570\u4E0B\u62C9\u9009\u9879\u6587\u672C\u3002`,components:[{page:1,total:100,showPageSizes:!0,showTotal:!0},{page:1,total:100,showPageSizes:!0,showTotal:!0,slotPageSizes:!0,pageSizes:[10,20,30,40,100]}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="100" show-total show-page-sizes />
        <w-pagination :total="100" show-total show-page-sizes :page-sizes="[10, 20, 30, 40, 100]">
          <template #page-size-option="{data}">
            <span v-if='data !== 100'>
              {{ data }} / page
            </span>
            <span v-else> \u5168\u90E8 </span>
          </template>
        </w-pagination>
      </div>
    </template>`},{title:"\u9875\u7801\u8DF3\u8F6C",desc:"\u8BBE\u7F6E show-jumper \u5C5E\u6027\uFF0C\u663E\u793A\u8DF3\u8F6C\u9875\u7801\u6587\u672C\u6846\u3002",components:[{page:1,total:100,showTotal:!0,showJumper:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="100" show-total show-jumper />
      </div>
    </template>`},{title:"\u7981\u7528",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u7981\u7528\u5206\u9875\u5668\uFF08\u8DF3\u8F6C\u9875\u7801\u6587\u672C\u6846\u548C\u6761\u6570\u9009\u62E9\u5668\u90FD\u4F1A\u88AB\u7981\u7528\uFF09\u3002",components:[{page:1,total:45,disabled:!0,showJumper:!0,showPageSizes:!0},{page:1,total:45,background:!0,disabled:!0,showJumper:!0,showPageSizes:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="45" disabled show-jumper show-page-sizes />
        <w-pagination :total="45" background disabled show-jumper show-page-sizes />
      </div>
    </template>`},{title:"\u7B80\u6D01\u6A21\u5F0F",desc:"\u8BBE\u7F6E simple \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u4E3A\u7B80\u7EA6\u6A21\u5F0F\u3002",components:[{page:1,total:100,showPageSizes:!0,showTotal:!0,simple:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="100" simple show-total show-page-sizes />
      </div>
    </template>`},{title:"\u53EA\u6709\u4E00\u9875\u65F6\u9690\u85CF",desc:"\u8BBE\u7F6E hide-on-single-page \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F53\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u663E\u793A\u5206\u9875\u3002",components:[{page:1,total:9,showTotal:!0,hideOnSinglePage:!1,isHide:!0}],template:`    <template>
      <div class="pagination-demo">
        <div class="option">
          <w-checkbox v-model:checked="hideOnSinglePage" border>
            \u9690\u85CF
          </w-checkbox>
        </div>
        <w-pagination :total="9" :hide-on-single-page="hideOnSinglePage" 
          show-total />
      </div>
    </template>
    <script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const hideOnSinglePage = ref(false);
          return { hideOnSinglePage };
        }
      })
    <\/script>`},{title:"\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65",desc:`\u8BBE\u7F6E prev-text \u5C5E\u6027\uFF0C\u4FEE\u6539\u4E0A\u4E00\u9875\u7684\u663E\u793A\u6587\u672C\uFF0C\u8BBE\u7F6E next-text \u5C5E\u6027\uFF0C\u4FEE\u6539\u4E0B\u4E00\u9875\u7684\u663E\u793A\u6587\u672C\u3002<br>
      \u8BBE\u7F6E prev \u63D2\u69FD\uFF0C\u53EF\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\uFF0C\u8BBE\u7F6E next \u5C5E\u6027\uFF0C\u53EF\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875`,components:[{page:1,total:100,showTotal:!0,prevText:"prev",nextText:"next"},{page:1,total:100,showTotal:!0,prevSlot:!0,nextSlot:!0}],template:`    <template>
      <div class="pagination-demo">
        <w-pagination :total="100" show-total prev-text="prev" next-text="next" />
        <w-pagination :total="100" show-total>
          <template #prev>
            <w-icon name="location" :rotate="-90" />
          </template>
          <template #next>
            <w-icon name="location" :rotate="90" />
          </template>
        </w-pagination>
      </div>
    </template>`},{title:"\u5C3A\u5BF8",desc:"\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u5206\u9875\u5668\u7684\u5C3A\u5BF8 (\u5305\u62EC\u8DF3\u8F6C\u9875\u7801\u6587\u672C\u6846\u548C\u6761\u6570\u9009\u62E9\u5668)\u3002",components:[{page:1,total:100,showTotal:!0,showJumper:!0,showPageSizes:!0,size:"medium"}],template:`    <template>
      <div class="pagination-demo">
        <div class="option">
          <w-radio-group v-model:checked="size">
            <w-radio value="mini">mini</w-radio>
            <w-radio value="small">small</w-radio>
            <w-radio value="medium">medium</w-radio>
            <w-radio value="large">large</w-radio>
          </w-radio-group>
        </div>
        <w-pagination :total="100" show-total show-jumper show-page-sizes 
          :size="size" />
      </div>
    </template>
    <script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const size = ref("medium");
          return { size };
        }
      })
    <\/script>`}]),O={attribute:[{name:"total",desc:"\u6570\u636E\u603B\u6570",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"current-page",desc:"\u5F53\u524D\u7684\u9875\u6570",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"page-size",desc:"\u6BCF\u9875\u5C55\u793A\u7684\u6570\u636E\u6761\u6570",type:"number",optional:"\u2014\u2014",default:10},{name:"page-sizes",desc:"\u6570\u636E\u6761\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u5217\u8868",type:"arrray",optional:"\u2014\u2014",default:[10,20,30,40,50]},{name:"pager-count",desc:"\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6570\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0",type:"number",optional:"\u2014\u2014",default:5},{name:"size",desc:"\u5206\u9875\u9009\u62E9\u5668\u7684\u5927\u5C0F",type:"string",optional:"mini\u3001small\u3001medium\u3001large",default:"medium"},{name:"hide-on-single-page",desc:"\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u5206\u9875",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"background",desc:"\u662F\u5426\u4E3A\u5206\u9875\u6309\u94AE\u6DFB\u52A0\u80CC\u666F\u8272",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"simple",desc:"\u662F\u5426\u4E3A\u7B80\u7EA6\u6A21\u5F0F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-total",desc:"\u662F\u5426\u663E\u793A\u603B\u6570",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-jumper",desc:"\u662F\u5426\u663E\u793A\u8DF3\u8F6C",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-page-sizes",desc:"\u662F\u5426\u663E\u793A\u6570\u636E\u6761\u6570\u9009\u62E9\u5668",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"prev-text",desc:"\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"next-text",desc:"\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u5206\u9875",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"total",desc:"\u603B\u6570"},{name:"page-size-option",desc:"\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879"},{name:"prev",desc:"\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875"},{name:"next",desc:"\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875"}],event:[{name:"change",desc:"\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1",callbackParams:"page, oldPage"},{name:"change-page-size",desc:"\u6BCF\u9875\u6570\u636E\u6761\u6570\u6539\u53D8\u65F6\u89E6\u53D1",callbackParams:"pageSize, oldPageSize"},{name:"prev",desc:"\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1",callbackParams:"page, oldPage"},{name:"next",desc:"\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u65F6\u89E6\u53D1",callbackParams:"page, oldPage"}]};const D={class:"pagination-demo-list"},J={key:0,class:"option"},L=l(" \u9690\u85CF "),A={key:1},B=l("mini"),H=l("small"),I=l("medium"),N=l("large"),V={key:0},E={key:1},K=y({setup(F){let _=(p,d)=>{console.log("change page ....",p,d)},f=(p,d)=>{console.log("changePageSize.....",p,d)};return(p,d)=>{const z=i("w-checkbox"),r=i("w-radio"),b=i("w-radio-group"),g=i("w-icon"),k=i("w-pagination"),x=i("DemoItem"),P=i("TableList");return n(),s("div",D,[(n(!0),s(u,null,w(m(j),(c,R)=>(n(),T(x,{item:c,key:c.title},{default:a(()=>[(n(!0),s(u,null,w(c.components,e=>(n(),s("div",{key:e},[e.isHide?(n(),s("div",J,[o(z,{checked:e.hideOnSinglePage,"onUpdate:checked":t=>e.hideOnSinglePage=t,border:""},{default:a(()=>[L]),_:2},1032,["checked","onUpdate:checked"])])):h("",!0),e.size?(n(),s("div",A,[o(b,{checked:e.size,"onUpdate:checked":t=>e.size=t},{default:a(()=>[o(r,{value:"mini"},{default:a(()=>[B]),_:1}),o(r,{value:"small"},{default:a(()=>[H]),_:1}),o(r,{value:"medium"},{default:a(()=>[I]),_:1}),o(r,{value:"large"},{default:a(()=>[N]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])):h("",!0),o(k,U({"current-page":e.page,"onUpdate:current-page":t=>e.page=t,"page-size":e.pageSize,"onUpdate:page-size":t=>e.pageSize=t},e,{onChange:m(_),onChangePageSize:m(f)}),C({_:2},[e.slotTotal?{name:"total",fn:a(({total:t,cc:q})=>[l(v(t+" "+e.slotTotal),1)])}:void 0,e.slotPageSizes?{name:"page-size-option",fn:a(({data:t})=>[t!==100?(n(),s("span",V,v(t)+" / page",1)):(n(),s("span",E," \u5168\u90E8 "))])}:void 0,e.prevSlot?{name:"prev",fn:a(()=>[o(g,{name:"location",rotate:-90})])}:void 0,e.prevSlot?{name:"next",fn:a(()=>[o(g,{name:"location",rotate:90})])}:void 0]),1040,["current-page","onUpdate:current-page","page-size","onUpdate:page-size","onChange","onChangePageSize"])]))),128))]),_:2},1032,["item"]))),128)),o(P,{data:m(O)},null,8,["data"])])}}});export{K as default};
