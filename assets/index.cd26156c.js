import{r as C,d as A,m as d,a as o,L as p,o as i,g as t,H as c,I as m,c as f,w as b,k as u,z as x,t as D,R as v,b as V,y as T}from"./vendor.c0366ad2.js";const j=C([{title:"\u57FA\u7840\u7528\u6CD5",desc:`\u5728\u9700\u8981\u6EDA\u52A8\u52A0\u8F7D\u7684\u5BB9\u5668\u4E0A\u6DFB\u52A0 v-infinite-scroll \u6307\u4EE4\uFF0C\u5E76\u9700\u8981\u8D4B\u503C\u5BF9\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002<br>
      \u8BBE\u7F6E infinite-scroll-disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528\u52A0\u8F7D\u3002`,components:[{count:8,disabled:!1}],template:`    <template>
      <div class='infinite-demo'>
        <div class='options'>
          <w-checkbox v-if='index === 0' v-model:checked='child.disabled' 
            @click='child.disabled=!child.disabled' border>
            \u7981\u7528
          </w-checkbox>
        </div>
        <div class='infinite-box' v-infinite-scroll='scroll'
          :infinite-scroll-disabled='disabled'>
          <p v-for='i in count' :key='i' class='infinite-box-item'>
            {{i}}
            </p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            count: 8,
            disabled: false
          }
        },
        methods: {
          scroll() {
            this.count += 3;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const count = ref(8),
                disabled = ref(false),
                scroll = ()=> count.value += 3;
          return { count, scroll, disabled };
        }
      })
    <\/script>`,style:`
    <style>
      .infinite-demo {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em;
      }
      .infinite-demo .options > .w-button{
        margin-bottom: 1.5em;
      }
      .infinite-demo .infinite-box {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
        overflow: auto;
      }
      .infinite-demo .infinite-box > p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #409eff;
        margin: 10px;
        color: rgb(125, 188, 252);
      } 
    </style>`},{title:"\u5EF6\u8FDF\u52A0\u8F7D",desc:"\u8BBE\u7F6E infinite-scroll-delay \u5C5E\u6027\uFF0C\u53EF\u5EF6\u8FDF\u52A0\u8F7D\u3002 (\u5355\u4F4Dms\uFF0C\u9ED8\u8BA4100)\u3002",components:[{count:8,delay:800}],template:`    <template>
      <div class='infinite-demo'>
        <div class='options'>
          <w-input-number v-model='delay' :step='100' :min='0' :max='3000' />
        </div>
        <div class='infinite-box' v-infinite-scroll='scroll'
          :infinite-scroll-delay='delay'>
          <p v-for='i in count' :key='i' class='infinite-box-item'>
            {{ i }}
          </p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            count: 8,
            delay: 800
          }
        },
        methods: {
          scroll() {
            this.count += 3;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const count = ref(8);
                delay = ref(800);
                scroll = () => count.value += 3;
          return { count, delay, scroll };
        }
      })
    <\/script>`,style:`
    <style>
      .infinite-demo {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em;
      }
      .infinite-demo .options > .w-input-number{
        margin-bottom: 1.5em;
      }
      .infinite-demo .infinite-box {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
        overflow: auto;
      }
      .infinite-demo .infinite-box > p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: rgb(131, 131, 178);
        margin: 10px;
        color: rgb(125, 188, 252);
      } 
    </style>`},{title:"\u7ACB\u5373\u52A0\u8F7D",desc:"\u8BBE\u7F6E infinite-scroll-immediate \u5C5E\u6027\uFF0C\u53EF\u5728\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u51FD\u6570\u3002",components:[{title:"\u7ACB\u5373",count:2,immediate:!0},{title:"\u4E0D",count:2}],template:`    <template>
      <div class='infinite-demo'>
        <div class='item' v-for='item in infiniteList'>
          <div class='title'>
            \u521D\u59CB\u5316\u65F6 {{ item.title }} \u6267\u884C\u52A0\u8F7D\u51FD\u6570
          </div>
          <div v-infinite-scroll='scroll(item)' class='infinite-box'
            :infinite-scroll-immediate='item.immediate'>
            <p v-for='i in item.count' :key='i' class='infinite-box-item'>
              {{ i }}
            </p>
          </div>
          </div>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            infiniteList: [
              { title: '\u7ACB\u5373', count: 2, immediate: true },
              { title: '\u4E0D', count: 2}
            ]
          }
        },
        methods: {
          scroll(item) {
            return () => item.count += 3;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const infiniteList = ref([
            { title: '\u7ACB\u5373', count: 2, immediate: true },
            { title: '\u4E0D', count: 2 }
          ]);
          scroll = (item) => {
            return () => item.count += 3; 
          };
          return { infiniteList, scroll};
        }
      })
    <\/script>`,style:`
    <style>
      .infinite-demo {
        max-width: 900px;
        display: flex;
        align-items: center;
        margin: 1em;
      }
      .infinite-demo .item {
        flex: 1;
      }
      .infinite-demo .item .title {
        text-align: center;
        margin-bottom: 1em;
      }
      .infinite-demo .infinite-box {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
        overflow: auto;
      }
      .infinite-demo .infinite-box > p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: rgb(147, 137, 83);
        margin: 10px;
        color: rgb(125, 188, 252);
      } 
    </style>`},{title:"\u7ED3\u5408Loading",desc:"\u642D\u914D Loading \u6307\u4EE4\uFF0C\u53EF\u5728\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u5C55\u793A Loading \u6548\u679C\u3002",components:[{count:8,haveLoading:!0}],template:`    <template>
      <div class='infinite-demo'>
        <div class='infinite-box' v-loading='isLoading' v-infinite-scroll='scroll'>
          <p v-for='i in count' :key='i' class='infinite-box-item'>{{i}}</p>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            count: 8,
            isLoading: false
          }
        },
        methods: {
          scroll() {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.count += 3;
            }, 1000);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const count = ref(8),
                isLoading = ref(false),
                scroll = () => {
                  isLoading.value = true;
                  setTimeout(() => {
                    isLoading.value = false;
                    count.value += 3;
                  },1000);
                };
          return { count, isLoading, scroll };
        }
      })
    <\/script>`,style:`
    <style>
      .infinite-demo {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em;
      }
      .infinite-demo .infinite-box {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
        overflow: auto;
      }
      .infinite-demo .infinite-box > p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: rgb(232, 243, 254);
        margin: 10px;
        color: rgb(125, 188, 252);
      } 
    </style>`}]),B={attribute:[{name:"v-infinite-scroll",desc:"InfiniteScroll  \u6307\u4EE4\uFF0C\u503C\u4E3A\u51FD\u6570\uFF0C\u5F53\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20\u7684\u5E95\u90E8\u65F6\u6267\u884C\u5BF9\u5E94\u51FD\u6570\u3002\u5982\u679C\u51FD\u6570\u9700\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u90A3\u4E48\u51FD\u6570\u4F53\u5185\u9700\u8981return\u4E00\u4E2A\u51FD\u6570",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"infinite-scroll-disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"infinite-scroll-delay",desc:"\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u5355\u4F4D\u4E3Ams",type:"number",optional:"\u2014\u2014",default:100},{name:"infinite-scroll-distance",desc:"\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3Apx",type:"number",optional:"\u2014\u2014",default:0},{name:"infinite-scroll-immediate",desc:"\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002",type:"boolean",optional:"\u2014\u2014",default:!1}]};const F={class:"infiniteScroll-demo-list"},I=T(" \u7981\u7528 "),U={key:2,style:{"margin-bottom":"1em"}},N=["infinite-scroll-distance","infinite-scroll-disabled","infinite-scroll-delay","infinite-scroll-immediate"],H=A({setup(S){d(5),d(5);const l=d(!1),g=s=>()=>{s.count+=3,s.haveLoading&&(l.value=!0,setTimeout(()=>{l.value=!1},1e3))};return(s,z)=>{const y=o("w-checkbox"),h=o("w-input-number"),_=o("DemoItem"),k=o("TableList"),w=p("loading"),L=p("infinite-scroll");return i(),t("div",F,[(i(!0),t(c,null,m(v(j),(a,r)=>(i(),f(_,{item:a,key:a.title},{default:b(()=>[(i(!0),t(c,null,m(a.components,e=>(i(),t("div",{key:e},[r===0?(i(),f(y,{key:0,checked:e.disabled,"onUpdate:checked":n=>e.disabled=n,onClick:n=>e.disabled=!e.disabled,border:""},{default:b(()=>[I]),_:2},1032,["checked","onUpdate:checked","onClick"])):u("",!0),r===1?(i(),f(h,{key:1,modelValue:e.delay,"onUpdate:modelValue":n=>e.delay=n,step:100,min:0,max:3e3},null,8,["modelValue","onUpdate:modelValue"])):u("",!0),r===2?(i(),t("div",U," \u521D\u59CB\u5316\u65F6"+x(e.title)+"\u6267\u884C\u52A0\u8F7D\u51FD\u6570 ",1)):u("",!0),D((i(),t("div",{class:"infinite-demo","infinite-scroll-distance":e.distance,"infinite-scroll-disabled":e.disabled,"infinite-scroll-delay":e.delay,"infinite-scroll-immediate":e.immediate},[(i(!0),t(c,null,m(e.count,n=>(i(),t("p",{key:n,class:"infinite-list-item"},x(n),1))),128))],8,N)),[[w,e.haveLoading&&l.value],[L,g(e)]])]))),128))]),_:2},1032,["item"]))),128)),V(k,{data:v(B)},null,8,["data"])])}}});export{H as default};
