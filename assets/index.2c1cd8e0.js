import{r as v,d as E,a as s,o as t,g as l,H as n,I as w,c,w as i,h as y,y as p,z as A,k as m,i as B,n as M,P as _,b as o,u as F,R as d}from"./vendor.c0366ad2.js";const q=v([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E fit \u5C5E\u6027\uFF0C\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5230\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F\u5C5E\u6027 object-fit\u3002",src:"https://cdn.pixabay.com/photo/2015/06/03/15/08/flowers-in-pitcher-796516_960_720.jpg",components:[{type:"fill"},{type:"contain"},{type:"cover"},{type:"none"},{type:"scale-down"}],template:`    <template>
      <div class='image-test'>
        <div v-for='type in imgs' :key='type' class='block'>
          <span class='title'>{{ type }}</span>
          <w-image src='https://cdn.pixabay.com/photo/2015/06/03/15/08/flowers-in-pitcher-796516_960_720.jpg' :fit='type' />
        </div>
      </div>               
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            imgs: ['fill', 'contain', 'cover', 'none', 'scale-down']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const imgs= ['fill', 'contain', 'cover', 'none', 'scale-down' ];
          return { imgs };
        }
      })
    <\/script>`,style:`
    <style>
      .image-test .block {
        margin: 1em;
        padding: 1em;
        border: 1px solid rgb(221, 221, 221);
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }
      .image-test .block .title {
        margin-bottom: 1em;
      }
      .image-test .block > .w-image {
        width:120px;
        height:120px;
      }
    </style>`},{title:"\u5360\u4F4D\u5185\u5BB9",desc:"\u8BBE\u7F6E placeholder \u5C5E\u6027\uFF0C\u4FEE\u6539\u5360\u4F4D\u5185\u5BB9\uFF0C\u901A\u8FC7slot = placeholder \u53EF\u81EA\u5B9A\u4E49\u5360\u4F4D\u5185\u5BB9",placeholder:!0,components:[{type:"\u9ED8\u8BA4",placeholder:!0,src:"https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg"},{type:"\u81EA\u5B9A\u4E49",placeholder:!0,customPlaceholder:!0,src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3110676065,3736909825&fm=15&gp=0.jpg"}],template:`    <template>
      <div class='image-test'>
        <div v-for='(img, index) in imgs' class='block'>
          <w-button @click='img.placeholder=!img.placeholder'>
            {{img.placeholder?'\u663E\u793A':'\u9690\u85CF'}}\u56FE\u7247
          </w-button>
          <span class='title'>{{ img.type }}</span>
          <w-image :src='img.src' :placeholder='img.placeholder'>
            <template v-if='index==1' #placeholder>
              <img src='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/2292f15e399ccb038e4c8f0139da6fccd4256d27.png' />
            </template>
          </w-image>
        </div>
      </div>               
    </template>
    <script>
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const imgs = [
            { 
              type:'\u9ED8\u8BA4', 
              placeholder:true,
              src:'https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg'
            },
            { 
              type:'\u81EA\u5B9A\u4E49',
              placeholder:true,
              src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3110676065,3736909825&fm=15&gp=0.jpg'
            }
          ];
          return { imgs };
        }
      }
    <\/script>
    <style>
      .image-test .block {
        margin: 1em;
        padding: 1em;
        border: 1px solid rgb(221, 221, 221);
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }
      .image-test .block .w-button,
      .image-test .block .title{
        margin-bottom: 1em;
      }
      .image-test .block>  .w-image{
        width: 220px;
        height: 220px;
      }
    </style>`},{title:"\u52A0\u8F7D\u5931\u8D25",desc:"\u5F53 src \u4E3A\u7A7A\u6216\u8005\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\uFF0C\u901A\u8FC7 slot = error \u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u5360\u4F4D",error:!0,components:[{type:"\u9ED8\u8BA4",src:"1234"},{type:"\u81EA\u5B9A\u4E49",customError:!0}],template:`    <template>
      <div class='image-test'>
        <div v-for='(img,index) in imgs' :key='img' class='block'>
          <span class='title'>{{ img.type }}</span>
          <w-image :src='img.url'>
            <template v-if='index===1' #error>
              <w-icon name='img-error' size='32px' />
            </template>
          </w-image>
        </div>
      </div>             
    </template>
    <script>
      import { defineComponent} from 'vue';
      export default defineComponent({
        setup(){
          const imgs = [
            { type:'\u9ED8\u8BA4', url:'../1.png' }, { type: '\u81EA\u5B9A\u4E49' }
          ]);
          return { imgs };
        }
      })
    <\/script>
    <style>
      .image-test .block{
        margin: 1em;
        padding: 1em;
        border: 1px solid rgb(221, 221, 221);
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }
      .image-test .block .title{
        margin-bottom: 1em;
      }
      .image-test .block > .w-image{
        width: 220px;
        height: 220px;
      }
    </style>`},{title:"\u5927\u56FE\u9884\u89C8",desc:`\u8BBE\u7F6E preview-list \u5C5E\u6027\uFF0C\u6DFB\u52A0\u53EF\u9884\u89C8\u5927\u56FE\u7684\u529F\u80FD\uFF0C\u503C\u4E3A\u4E00\u4E2A\u56FE\u7247\u5217\u8868\uFF0C\u5F53\u5C0F\u56FE\u53EA\u6709\u5355\u5F20\u56FE\u7247\u65F6\u53EF\u4EE5\u8BBE\u7F6E src \u5C5E\u6027\uFF0C\u5145\u5F53\u5C01\u9762\u3002<br>
      \u8BBE\u7F6E draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u62D6\u62FD\u5C0F\u56FE\uFF0C\u4FEE\u6539\u56FE\u7247\u7684\u4F4D\u7F6E\u3002`,components:[{type:"\u5355\u56FE\u663E\u793A",src:"http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-ECeuAaCqdABH6eqeWfPQ086.jpg",previewList:["http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-ECeuAaCqdABH6eqeWfPQ086.jpg","http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-EChWAdcdTAAg6bumqD9c949.jpg","https://imgm.gmw.cn/attachement/jpg/site215/20201011/7750101753458179586.jpg"]},{type:"\u5217\u8868\u663E\u793A",customPreview:!0,previewList:["http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-EChWAdcdTAAg6bumqD9c949.jpg","http://cdn.mc.huluxia.net/g4/M03/8D/26/rBAAdl-EC0-AMcpZAAjNIoCUvG4458.jpg","http://cdn.mc.huluxia.net/g4/M03/8D/26/rBAAdl-EC2qAWgUHAAtUl-lrEjc357.jpg","http://cdn.mc.huluxia.net/g4/M00/8D/28/rBAAdl-EDVmACKqHAAxi_fzoiaY005.jpg","http://cdn.mc.huluxia.net/g4/M01/8D/29/rBAAdl-EDlqAKt5TAAd6CXdu3PY976.jpg","http://cdn.mc.huluxia.net/g4/M02/8D/28/rBAAdl-EDcCATJ8cAAHW-EtKpVs779.jpg"]},{type:"\u53EF\u62D6\u62FD\u56FE\u7247",draggable:!0,customPreview:!0,alert:!0,previewList:["https://bpic.51yuansu.com/backgd/cover/00/38/95/5be369e4727a3.jpg?x-oss-process=image/resize,w_780","https://bpic.51yuansu.com/backgd/cover/00/35/57/5bd7df3bcc306.jpg?x-oss-process=image/resize,w_780","https://bpic.51yuansu.com/backgd/cover/00/02/01/5b52976e055fb.jpg?x-oss-process=image/resize,w_780"]},{type:"\u53EF\u5220\u9664\u56FE\u7247",draggable:!0,customPreview:!0,alert:!0,delete:!0,previewList:["https://cdn.pixabay.com/photo/2021/11/09/15/32/christmas-6781762_960_720.jpg","https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg","https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_960_720.jpg"]}],template:`    <template>
      <div class="image-preview-demo">
        <div v-for="(item,index) in imgs" :key="item.title" class="block">
          <span class="title">{{ item.title }}</span>
          <w-alert v-if="child.draggable" type="warning" show-icon
            :visible="child.alert" 
            @close="child.alert=false">
            \u76EE\u524D\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u62D6\u62FD
          </w-alert>
          <div>
            <w-image :previewList="item.list" :draggable="item.draggable" 
              :class="index===0?'':'list-image'" :src="item.src"
              :title="item.draggable?'\u957F\u6309\u56FE\u7247\u53EF\u62D6\u62FD\u56FE\u7247\u4EA4\u6362\u4F4D\u7F6E':''">
              <template v-if="item.delete" #delete="{index}">
                <w-icon name="close-circle" size="20px" @click.stop="deleteImg(item,index)" />
              </template>
            </w-image>
          </div>
        </div>
      </div>   
    </template>
    <script>
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const imgs = [
            {
              title:'\u5355\u56FE\u663E\u793A',
              src:'https://t7.baidu.com/it/u=3569419905,626536365&fm=193&f=GIF',
              list:[
                'http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-ECeuAaCqdABH6eqeWfPQ086.jpg',
                'http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-EChWAdcdTAAg6bumqD9c949.jpg',
                'https://imgm.gmw.cn/attachement/jpg/site215/20201011/7750101753458179586.jpg'
              ]
            },
            {
              title:'\u5217\u8868\u663E\u793A',
              list:[
                'http://cdn.mc.huluxia.net/g4/M02/8D/25/rBAAdl-EChWAdcdTAAg6bumqD9c949.jpg',
                'http://cdn.mc.huluxia.net/g4/M03/8D/26/rBAAdl-EC0-AMcpZAAjNIoCUvG4458.jpg',
                'http://cdn.mc.huluxia.net/g4/M03/8D/26/rBAAdl-EC2qAWgUHAAtUl-lrEjc357.jpg',
                'http://cdn.mc.huluxia.net/g4/M00/8D/28/rBAAdl-EDVmACKqHAAxi_fzoiaY005.jpg',
                'http://cdn.mc.huluxia.net/g4/M01/8D/29/rBAAdl-EDlqAKt5TAAd6CXdu3PY976.jpg',
                'http://cdn.mc.huluxia.net/g4/M02/8D/28/rBAAdl-EDcCATJ8cAAHW-EtKpVs779.jpg'
              ]
            },
            {
              title: '\u53EF\u62D6\u62FD\u56FE\u7247',
              draggable:true,
              alert:true,
              list: [
                'https://bpic.51yuansu.com/backgd/cover/00/38/95/5be369e4727a3.jpg?x-oss-process=image/resize,w_780',
                'https://bpic.51yuansu.com/backgd/cover/00/35/57/5bd7df3bcc306.jpg?x-oss-process=image/resize,w_780',
                'https://bpic.51yuansu.com/backgd/cover/00/02/01/5b52976e055fb.jpg?x-oss-process=image/resize,w_780'
              ]
            },
            {
              title: '\u53EF\u5220\u9664\u56FE\u7247',
              draggable:true,
              delete:true,
              alert:true,
              list: [
                'https://cdn.pixabay.com/photo/2021/11/09/15/32/christmas-6781762_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_960_720.jpg'
              ]
            }
          ];
          const deleteImg = (item, index) => {
            item.previewList.splice(index, 1);
          };
          return { imgs, deleteImg };
        }
      })
    <\/script>
    <style lang='scss'>
      .image-preview-demo { 
        .block {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin: 1em;
          padding: 1em;
          border: 1px solid rgb(221, 221, 221);
          border-radius: 4px;
          .list-image {
            max-width: 400px;
            text-align: center;
            width: 480px;
            flex-wrap: wrap;
            > div {
              position: relative;
              margin: 0 .3em .3em;
              overflow: hidden;
              .w-icon-close-circle {
                position: absolute;
                top:6px;
                right:6px;
                cursor: pointer;
                &:hover {
                  color: #007fff !important;
                }
              }
              &:hover {
                img {
                  filter:brightness(.8);
                }
              }
            }
            img {
              width: 120px;
              height: 120px;
              position: relative;
              transition: .16s;
            }
          }
          .w-image:not(.list-image) {
            > div {
              height: 100%;
            }
          }
          @media (max-width: 550px) {
            padding: 0.5em;
            margin:1em 0;
            .list-image {
              max-width: 100%;
              width: auto;
              img{
                width: 80px !important;
                height: 80px !important;
                margin: 0;
              }
            }
          }
        }
      }
    </style>`}]),z={attribute:[{name:"src",desc:"\u56FE\u7247\u8DEF\u5F84",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"fit",desc:"\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F\u5C5E\u6027 object-fit",type:"string",optional:"\u2014\u2014",default:"fill"},{name:"alt",desc:"\u539F\u751F\u5C5E\u6027 title",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"alt",desc:"\u539F\u751F\u5C5E\u6027 alt",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"preview-list",desc:"\u56FE\u7247\u5217\u8868\uFF0C\u8BBE\u7F6E\u4EE3\u8868\u5F00\u542F\u56FE\u7247\u9884\u89C8\u529F\u80FD",type:"array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"draggable",desc:"\u56FE\u7247\u53EF\u9884\u89C8\u65F6\u662F\u5426\u53EF\u4EE5\u62D6\u62FD\u5C0F\u56FE\u6539\u53D8\u56FE\u7247\u7684\u987A\u5E8F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"z-index",desc:"\u662F\u8BBE\u7F6E\u56FE\u7247\u9884\u89C8\u7684 z-index",type:"number",optional:"\u2014\u2014",default:3e3},{name:"placeholder",desc:"\u662F\u5426\u663E\u793A\u56FE\u7247\u5360\u4F4D\u5185\u5BB9",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"close-on-modal",desc:"\u5F53\u5F00\u542F \u56FE\u7247\u9884\u89C8 \u529F\u80FD\u65F6\uFF0C\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED image",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"load",desc:"\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1",callbackParams:"(e: Event)"},{name:"error",desc:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1",callbackParams:"(e: Event)"}],slot:[{name:"placeholder",desc:"\u56FE\u7247\u672A\u52A0\u8F7D\u7684\u5360\u4F4D\u5185\u5BB9"},{name:"error",desc:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u5185\u5BB9"}]},P={event:[{name:"close",desc:"\u5F53\u70B9\u51FB X \u6309\u94AE\u6216\u8005\u5728 close-on-modal \u4E3A true \u65F6\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"},{name:"switch",desc:"\u5F53\u56FE\u7247\u5207\u6362\u65F6\u89E6\u53D1",callbackParams:"(val: number) \u65B0\u56FE\u7247\u7684\u4E0B\u6807"}],slot:[{name:"custom",desc:"\u56FE\u7247\u672A\u52A0\u8F7D\u7684\u5360\u4F4D\u5185\u5BB9"},{name:"delete",desc:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u5185\u5BB9"}]};const L={class:"image-demo-list"},W={class:"block"},H={key:1,class:"title"},I=y("img",{src:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/2292f15e399ccb038e4c8f0139da6fccd4256d27.png"},null,-1),T=p(" \u76EE\u524D\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u62D6\u62FD "),K=p("Image List"),Y=E({setup(V){v([{src:"http://ww1.sinaimg.cn/large/0071jwEqly1gjk63j7ctcj31g80v4tj8.jpg",index:0},{src:"http://ww1.sinaimg.cn/large/0071jwEqly1gjk79jmet1j30u01hcwgg.jpg",index:1},{src:"https://imgm.gmw.cn/attachement/jpg/site215/20201011/7750101753458179586.jpg",index:2}]);const j=(g,u)=>{g.previewList.splice(u,1)};return(g,u)=>{const k=s("w-button"),h=s("w-icon"),b=s("w-image"),C=s("w-alert"),D=s("DemoItem"),f=s("TableList");return t(),l("div",L,[(t(!0),l(n,null,w(d(q),(a,x)=>(t(),c(D,{item:a,key:a.title},{default:i(()=>[(t(!0),l(n,null,w(a.components,e=>(t(),l("div",{key:e},[y("div",W,[a.placeholder?(t(),c(k,{key:0,onClick:r=>e.placeholder=!e.placeholder},{default:i(()=>[p(A(e.placeholder?"\u663E\u793A":"\u9690\u85CF")+"\u56FE\u7247 ",1)]),_:2},1032,["onClick"])):m("",!0),e.type?(t(),l("span",H,A(e.type),1)):m("",!0),e.customPreview?(t(),l(n,{key:3},[e.draggable?(t(),c(C,{key:0,type:"warning","show-icon":"",visible:e.alert,onClose:r=>e.alert=!1},{default:i(()=>[T]),_:2},1032,["visible","onClose"])):m("",!0),o(b,{class:"list-image","preview-list":e.previewList,draggable:e.draggable,"close-on-modal":!1,title:e.customPreview?"\u957F\u6309\u56FE\u7247\u53EF\u62D6\u62FD\u56FE\u7247\u4EA4\u6362\u4F4D\u7F6E":""},_({_:2},[e.delete?{name:"delete",fn:i(({index:r})=>[o(h,{name:"close-circle",size:"20px",onClick:F(N=>j(e,r),["stop"])},null,8,["onClick"])])}:void 0]),1032,["preview-list","draggable","title"])],64)):(t(),c(b,{key:2,style:B({width:x===0?"120px":"220px",height:x===0?"120px":"220px"}),src:e.src||a.src,fit:e.type,class:M(a.placeholder?"custom-image-style":""),placeholder:e.placeholder,previewList:e.previewList},_({_:2},[e.customPlaceholder?{name:"placeholder",fn:i(()=>[I])}:void 0,e.customError?{name:"error",fn:i(()=>[o(h,{name:"img-error",size:"35px"})])}:void 0]),1032,["style","src","fit","class","placeholder","previewList"]))])]))),128))]),_:2},1032,["item"]))),128)),o(f,{data:d(z)},null,8,["data"]),o(f,{data:d(P)},{default:i(()=>[K]),_:1},8,["data"])])}}});export{Y as default};
