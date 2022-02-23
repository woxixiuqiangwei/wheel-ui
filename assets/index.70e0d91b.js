import{r as w,d as A,a as s,o as e,g as i,H as l,I as n,c as v,w as u,t as b,N as z,h as c,y as d,z as r,k as p,b as f,R as g}from"./vendor.c0366ad2.js";import{_ as q}from"./index.c63351a7.js";const L=w([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E shape \u3001 size \uFF0C\u4FEE\u6539\u5934\u50CF\u7684\u5F62\u72B6\u548C\u5927\u5C0F\u3002",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",list:[{size:75},{size:55},{},{size:"medium"},{size:"small"}],components:[{title:"circle"},{title:"square"}],template:`    <template>
      <div class='avator-list-demo'>
        <div v-for='(item, index) in avatorList'>
          <h3>{{ item.title }}</h3>
          <div class='avator-list'>
            <w-avator v-for='avator in list' :size='avator.size' 
              src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' 
              :shape="index!=1?'circle':'square'" />
          </div>
        </div>
      </div>
    </template>
    <script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const avatorList = [
            { title: 'circle' },
            { title: 'square' }
          ];
          const list = [
            { size: 75 },
            { size: 55 },
            {},
            { size:'medium' },
            { size: 'small' }
          ];
          return { avatorList, list };
        }
      })
    <\/script>`,style:`
    <style> 
      .avator-list-demo {
        display: flex;
      }
      .avator-list-demo > div {
        margin-right: 4em;
        text-align: center;
      }
      .avator-list-demo > div > h3{
        margin-bottom: 1em;
      }
      .avator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .avator-list .w-avator {
        margin-right: 2em;
      }
      .avator-list .w-avator:last-child {
        margin-right: 0;
      }
    </style>`},{title:"\u5C55\u793A\u7C7B\u578B",desc:"\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A\u56FE\u6807 (icon \u5C5E\u6027)\u3001\u56FE\u7247 (src \u5C5E\u6027)\u548C\u5B57\u7B26 (\u9ED8\u8BA4\u63D2\u69FD)\u3002",list:[{icon:"user"},{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1416799284,860429581&fm=26&gp=0.jpg"},{string:"user"}],components:[{title:"circle"},{title:"square"}],template:`    <template>
      <div class='avator-list-demo'>
        <div v-for='(item, index) in avatorList'>
          <h3>{{ item.title }}</h3>
          <div class='avator-list'>
            <w-avator v-for='avator in list' 
              :src='avator.src' 
              :icon='avator.icon' 
              :shape="index != 1 ? 'circle' : 'square'">
              {{ avator.string }}
            </w-avator>
          </div>
        </div>
      </div>
    </template>
    <script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const avatorList = [
            { title: 'circle' },
            { title: 'square' }
          ];
          const list = [
            { icon: 'user' },
            { src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1416799284,860429581&fm=26&gp=0.jpg' },
            { string: 'user' }
          ]
          return { avatorList, list };
        }
      })
    <\/script>`,style:`
    <style> 
      .avator-list-demo {
        display: flex;
      }
      .avator-list-demo > div {
        margin-right: 4em;
        text-align: center;
      }
      .avator-list-demo > div > h3 {
        margin-bottom: 1em;
      }
      .avator-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .avator-list .w-avator {
        margin-right: 2em;
      }
      .avator-list .w-avator:last-child {
        margin-right: 0;
      }
    </style>`},{title:"\u80CC\u666F\u8272",desc:"\u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u5934\u50CF\u7684\u80CC\u666F\u8272\u3002",size:60,color:"#a3a3ea",list:[{src:"http://cdn.u1.huluxia.com/g4/M02/11/71/rBAAdl-rcqeAMSteAAAfw0mA8nI234.png"},{string:"\u738B"}],components:[{title:"circle"},{title:"square"}],template:`    <template>
      <div class='avatar-color-demo'>
        <div class='options'>
          \u80CC\u666F\u989C\u8272\uFF1A
          <input type='color' v-model='color'>&nbsp;&nbsp;
          {{ color }}
        </div>
        <div class='avator-list-demo'>
          <div v-for='(item, index) in avatorList'>
            <h3>{{ item.title }}</h3>
            <div class='avator-list'>
              <w-avator v-for='(avator, avatorIndex) in list' 
                :src='avatorIndex===0?url:null' :size='60' 
                :color='color' :shape="index!=1?'circle':'square'">
                {{ avator.string }}
              </w-avator>
            </div>
          </div>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            url: 'http://cdn.u1.huluxia.com/g4/M02/11/71/rBAAdl-rcqeAMSteAAAfw0mA8nI234.png',
            avatorList: [
              { title: 'circle' },
              { title: 'square' }
            ],
            list: [
              { src: 'http://cdn.u1.huluxia.com/g4/M02/11/71/rBAAdl-rcqeAMSteAAAfw0mA8nI234.png' },
              { string: '\u738B' }
            ],
            color: '#a3a3ea'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const url = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
          const avatorList = [
            { title: 'circle' },
            { title: 'square' }
          ];
          const list = [
            { src: 'http://cdn.u1.huluxia.com/g4/M02/11/71/rBAAdl-rcqeAMSteAAAfw0mA8nI234.png' },
            { string: '\u738B' }
          ];
          const color = ref('#a3a3ea');
          return { url, avatorList, list, color };
        }
      })
    <\/script>`,style:`
    <style> 
      .avatar-color-demo {
        padding: 1em;
      }
      .avatar-color-demo .options {
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: row;
        margin-bottom: 1.5em;
      }
      .avator-list-demo {
        display: flex;
      }
      .avator-list-demo > div {
        margin-right: 4em;
        text-align: center;
      }
      .avator-list-demo > div > h3 {
        margin-bottom: 1em;
      }
      .avator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .avator-list .w-avator {
        margin-right: 2em;
      }
      .avator-list .w-avator:last-child {
        margin-right: 0;
      }
    </style>`},{title:"\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846",desc:"\u5F53\u5934\u50CF\u5185\u5BB9\u4E3A\u56FE\u7247\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 fit \u5C5E\u6027\u5B9A\u4E49\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F object-fit\u3002",src:"https://images.pexels.com/photos/1166869/pexels-photo-1166869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",size:130,list:[{fit:"fill"},{fit:"contain"},{fit:"cover"},{fit:"none"},{fit:"scale-down"}],components:[{title:"circle"},{title:"square"}],template:`   <template>
      <div class='avator-list-demo'>
        <div v-for='(item, index) in avatorList'>
          <h3>{{ item.title }}</h3>
          <div class='avator-list'>
            <div v-for='(avator, avatorIndex) in list'>
              <h3>{{ avator.fit }}</h3>
              <w-avator src='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/69bcc52a74406ee4d75316dec19e81e469b5f928.jpg' shape='square' :size='130' />
            </div>
          </div>
          <w-divider />
        </div>
      </div>
    </template>
    <script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const avatorList = [
            { title: 'circle' },
            { title: 'square' }
          ];
          const list = [
            { fit: 'fill' },
            { fit: 'contain' },
            { fit: 'cover' },
            { fit: 'none' },
            { fit: 'scale-down' }
          ];
          return { avatorList, list };
        }
      })
    <\/script>`,style:`
    <style>
      .avator-list-demo {
        display: flex;
        flex-wrap: wrap;
        margin: 1em;
      }
      .avator-list-demo div {
        margin-bottom: 1em;
        text-align: center;
      }
      .avator-list-demo h3 {
        margin-bottom: 1em;
      }
      .avator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .avator-list > div {
        margin-right: 2em;
      }
    </style>`}]),C={attribute:[{name:"src",desc:"\u56FE\u7247\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u8BBE\u7F6E\u5934\u50CF\u7684\u56FE\u6807\u7C7B\u578B\uFF0C\u53C2\u8003 Icon \u7EC4\u4EF6",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"size",desc:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F",type:"string\u3001number",optional:"large\u3001medium\u3001small",default:"40px"},{name:"shape",desc:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6",type:"string",optional:"\u2014\u2014",default:"circle"},{name:"fit",desc:"\u5F53\u5C55\u793A\u7C7B\u578B\u4E3A\u56FE\u7247\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846",type:"string",optional:"fill \u3001 contain\u3001cover\u3001none\u3001scale-down",default:"fill"},{name:"color",desc:"\u5934\u50CF\u7684\u80CC\u666F\u8272",type:"string",optional:"\u2014\u2014",default:"#c0c4cc"}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9"}]};const k={class:"avator-demo-list"},I={key:0,class:"options"},j=d(" \u80CC\u666F\u989C\u8272\uFF1A "),M=["onUpdate:modelValue"],B={class:"avator-list"},F={key:0},S=A({setup(V){return(D,N)=>{const h=s("w-avator"),x=s("w-divider"),y=s("DemoItem"),_=s("TableList");return e(),i("div",k,[(e(!0),i(l,null,n(g(L),(t,m)=>(e(),v(y,{item:t,key:t.title},{default:u(()=>[t.color?(e(),i("div",I,[j,b(c("input",{"onUpdate:modelValue":o=>t.color=o,type:"color"},null,8,M),[[z,t.color]]),d("\xA0\xA0 "+r(t.color),1)])):p("",!0),(e(!0),i(l,null,n(t.components,o=>(e(),i("div",{key:o},[c("h3",null,r(o.title),1),c("div",B,[(e(!0),i(l,null,n(t.list,a=>(e(),i("div",{key:a},[m===3?(e(),i("h3",F,r(a.fit),1)):p("",!0),f(h,{color:t.color,src:t.src||a.src,size:a.size||o.size||t.size,shape:o.title,icon:a.icon,fit:a.fit},{default:u(()=>[d(r(a.string),1)]),_:2},1032,["color","src","size","shape","icon","fit"])]))),128))]),m===3?(e(),v(x,{key:0})):p("",!0)]))),128))]),_:2},1032,["item"]))),128)),f(_,{data:g(C)},null,8,["data"])])}}});var G=q(S,[["__scopeId","data-v-5edb24b0"]]);export{G as default};
