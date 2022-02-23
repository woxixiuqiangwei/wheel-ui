import{r as A,d as I,m as R,a as o,o as e,g as i,H as c,I as d,c as p,w as l,b as a,k as z,P as F,z as w,h as _,R as b,y as u}from"./vendor.c0366ad2.js";const L=A([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E reverse \u5C5E\u6027\uFF0C\u4FEE\u6539\u6309\u65F6\u95F4\u6233\u6B63\u5E8F\u6216\u5012\u5E8F\u6392\u5217\u3002",components:[{reverse:!1,list:[{label:"\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939",time:"2019-01-22 15:00"},{label:"\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875",time:"2019-01-22 16:01"},{label:"\u5B8C\u6210\u9996\u9875",time:"2019-01-24 14:20"},{label:"\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757",time:"2019-01-25 15:30"}]}],template:`    <template>
      <div>
        <div style='display:inline-flex;align-items: center;margin-bottom:2em;'>
          <span>\u6392\u5E8F\uFF1A</span>
          <w-radio style='margin-bottom:0;' :value='false' v-model:checked='isReverse'>
            \u6B63\u5E8F
          </w-radio>
          <w-radio style='margin-bottom:0;' :value='true' v-model:checked='isReverse'>
            \u5012\u5E8F
          </w-radio>   
        </div>
        <w-timeline :reverse='isReverse'>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time'>
            {{ item.label }}
          </w-timeline-item>
        </w-timeline>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { label: '\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939', time:'2019-01-22 15:00' },
              { label: '\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875', time:'2019-01-22 16:01' },
              { label: '\u5B8C\u6210\u9996\u9875', time:'2019-01-24 14:20' },
              { label: '\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757', time:'2019-01-25 15:30' }
            ],
            isReverse: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
              { label: '\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939', time:'2019-01-22 15:00' },
              { label: '\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875', time:'2019-01-22 16:01' },
              { label: '\u5B8C\u6210\u9996\u9875', time:'2019-01-24 14:20' },
              { label: '\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757', time:'2019-01-25 15:30' }
            ]),
            isReverse = ref(false);
          return { list, isReverse };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u8282\u70B9",desc:"\u7ED9 Item \u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539\u8282\u70B9\u7684\u989C\u8272\u3002 \u4E5F\u53EF\u7ED9 Item \u8BBE\u7F6E \u9ED8\u8BA4\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9\u3002",components:[{reverse:!1,list:[{label:"\u53D1\u5E031.0\u7248\u672C",time:"2019-01-22 15:00",color:"black"},{label:"\u53D1\u5E032.0\u7248\u672C",time:"2019-01-22 16:01",color:"gold"},{label:"\u51FA\u73B0Bug",time:"2019-01-24 14:20",color:"red"},{label:"\u53D1\u5E033.0\u7248\u672C",time:"2019-01-25 15:30",color:"blue"}]},{reverse:!1,icon:!0,list:[{label:"\u53D1\u5E031.0\u7248\u672C",time:"2019-01-22 15:00",icon:"zan"},{label:"\u53D1\u5E032.0\u7248\u672C",time:"2019-01-22 16:01",icon:"star"},{label:"\u51FA\u73B0Bug",time:"2019-01-24 14:20",icon:"setting"},{label:"\u53D1\u5E033.0\u7248\u672C",time:"2019-01-25 15:30",icon:"success"}]}],template:`    <template>
      <div>
        <w-timeline>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time' :color='item.color'>
            {{ item.label }}
          </w-timeline-item>
        </w-timeline>
        <w-timeline>
          <w-timeline-item v-for='item in list2' :key='item' :time='item.time'>
            <template #dot>
              <w-icon :name='item.icon' />
            </template>
            {{ item.label }}
          </w-timeline-item>
        </w-timeline>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', color: 'black' },
              { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', color: 'gold' },
              { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', color: 'red' },
              { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', color: 'blue' }
            ],
            list2: [
              { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', icon: 'zan' },
              { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', icon: 'star' },
              { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', icon: 'setting' },
              { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', icon: 'success' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', color: 'black' },
            { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', color: 'gold' },
            { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', color: 'red' },
            { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', color: 'blue' }
          ]);
          const list2 = ref([
            { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', icon: 'zan' },
            { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', icon: 'star' },
            { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', icon: 'setting' },
            { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', icon: 'success' }
          ]);
          return { list, list2 };
        }
      })
    <\/script>`},{title:"\u65F6\u95F4\u4F4D\u7F6E",desc:"\u8BBE\u7F6E time-position \u5C5E\u6027\uFF0C\u4FEE\u6539\u65F6\u95F4\u5C55\u793A\u4F4D\u7F6E\u3002 (\u9ED8\u8BA4\u5728\u5185\u5BB9\u7684\u4E0B\u65B9)",timePosition:"top",components:[{reverse:!1,list:[{label:"\u53D1\u5E031.0\u7248\u672C",time:"2020/01/22",color:"black"},{label:"\u53D1\u5E032.0\u7248\u672C",time:"2020/02/12",color:"gold"},{label:"\u51FA\u73B0Bug",time:"2020/02/14",color:"red"},{label:"\u53D1\u5E033.0\u7248\u672C",time:"2020/03/05",color:"blue"}]},{reverse:!1,icon:!0,list:[{label:"\u53D1\u5E031.0\u7248\u672C",time:"2020/01/22",icon:"zan"},{label:"\u53D1\u5E032.0\u7248\u672C",time:"2020/02/12",icon:"star"},{label:"\u51FA\u73B0Bug",time:"2020/02/14",icon:"setting"},{label:"\u53D1\u5E033.0\u7248\u672C",time:"2020/03/05",icon:"success"}]}],template:`    <template>
      <div>
        <w-timeline time-position='top'>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time' :color='item.color'>
            {{ item.label }}
          </w-timeline-item>
        </w-timeline>
        <w-timeline time-position='top'>
          <w-timeline-item v-for='item in list2' :key='item' :time='item.time'>
            <template #dot>
              <w-icon :name='item.icon' />
            </template>
            {{ item.label }}
          </w-timeline-item>
        </w-timeline>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { label: '\u53D1\u5E031.0\u7248\u672C', time: '2020/01/22', color: 'black' },
              { label: '\u53D1\u5E032.0\u7248\u672C', time: '2020/02/12', color: 'gold' },
              { label: '\u51FA\u73B0Bug', time: '2020/02/14', color: 'red' },
              { label: '\u53D1\u5E033.0\u7248\u672C', time: '2020/03/05', color: 'blue' }
            ],
            list2: [
              { label: '\u53D1\u5E031.0\u7248\u672C', time: '2020/01/22', icon: 'zan' },
              { label: '\u53D1\u5E032.0\u7248\u672C', time: '2020/02/12', icon: 'star' },
              { label: '\u51FA\u73B0Bug', time: '2020/02/14', icon: 'setting' },
              { label: '\u53D1\u5E033.0\u7248\u672C', time: '2020/03/05', icon: 'success' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import {ref,defineComponent} from 'vue';
      export default defineComponent({
        setup(){
          const list = ref([
            { label: '\u53D1\u5E031.0\u7248\u672C', time: '2020/01/22', color: 'black' },
            { label: '\u53D1\u5E032.0\u7248\u672C', time: '2020/02/12', color: 'gold' },
            { label: '\u51FA\u73B0Bug', time: '2020/02/14', color: 'red' },
            { label: '\u53D1\u5E033.0\u7248\u672C', time: '2020/03/05', color: 'blue' }
          ]);
          const list2 = ref([
            { label: '\u53D1\u5E031.0\u7248\u672C', time: '2020/01/22', icon: 'zan' },
            { label: '\u53D1\u5E032.0\u7248\u672C', time: '2020/02/12', icon: 'star' },
            { label: '\u51FA\u73B0Bug', time: '2020/02/14', icon: 'setting' },
            { label: '\u53D1\u5E033.0\u7248\u672C', time: '2020/03/05', icon: 'success' }
          ]);
          return { list, list2 };
        }
      })
    <\/script>`},{title:"\u5185\u5BB9\u4F4D\u7F6E",desc:"\u8BBE\u7F6E mode \u5C5E\u6027\uFF0C\u4FEE\u6539\u5185\u5BB9\u533A\u5728\u8282\u70B9\u7684\u4F4D\u7F6E\u3002 (\u9ED8\u8BA4\u5728\u8282\u70B9\u53F3\u4FA7)",list:[{label:"\u53D1\u5E031.0\u7248\u672C",time:"2019-01-22 15:00",color:"black"},{label:"\u53D1\u5E032.0\u7248\u672C",time:"2019-01-22 16:01",color:"gold"},{label:"\u51FA\u73B0Bug",time:"2019-01-24 14:20",color:"red"},{label:"\u53D1\u5E033.0\u7248\u672C",time:"2019-01-25 15:30",color:"blue"}],components:[{},{mode:"left"},{mode:"alternate"}],template:`    <template>
      <div>
        <w-timeline>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time'>
            {{item.label}}
          </w-timeline-item>
        </w-timeline>
        <w-timeline mode='left'>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time'>
            {{item.label}}
          </w-timeline-item>
        </w-timeline>
        <w-timeline mode='alternate'>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time'>
            {{item.label}}
          </w-timeline-item>
        </w-timeline>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            list:[
              { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', color: 'black' },
              { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', color: 'gold' },
              { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', color: 'red' },
              { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', color: 'blue' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const list = ref([
            { label: '\u53D1\u5E031.0\u7248\u672C', time: '2019-01-22 15:00', color: 'black' },
            { label: '\u53D1\u5E032.0\u7248\u672C', time: '2019-01-22 16:01', color: 'gold' },
            { label: '\u51FA\u73B0Bug', time: '2019-01-24 14:20', color: 'red' },
            { label: '\u53D1\u5E033.0\u7248\u672C', time: '2019-01-25 15:30', color: 'blue' }
          ]);
          return { list };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A",desc:"\u53EF\u4EE5\u7ED9 Item \u6DFB\u52A0\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u3002",timePosition:"top",components:[{card:!0,list:[{label:"\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939",time:"2019-01-22 15:00"},{label:"\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875",time:"2019-01-22 16:01"},{label:"\u5B8C\u6210\u9996\u9875",time:"2019-01-24 14:20"},{label:"\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757",time:"2019-01-25 15:30"}]}],template:`   <template>
      <div class='timeline-demo'>
        <w-timeline>
          <w-timeline-item v-for='item in list' :key='item' :time='item.time' time-position='top'>
            <w-card>
              <div v-for='i in 2' :key='i' class='text'>
                {{ item.label }}
              </div>
            </w-card>
          </w-timeline-item>
        </w-timeline>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { label: '\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939', time: '2019-01-22 15:00' },
              { label: '\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875', time: '2019-01-22 16:01' },
              { label: '\u5B8C\u6210\u9996\u9875', time: '2019-01-24 14:20' },
              { label: '\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757', time: '2019-01-25 15:30' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { label: '\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939', time: '2019-01-22 15:00' },
            { label: '\u5B8C\u6210\u767B\u5F55\u9875\u3001\u6CE8\u518C\u9875', time: '2019-01-22 16:01' },
            { label: '\u5B8C\u6210\u9996\u9875', time: '2019-01-24 14:20' },
            { label: '\u6D4B\u8BD5\u5DF2\u5199\u597D\u7684\u6A21\u5757', time: '2019-01-25 15:30' }
          ]);
          return { list };
        }
      })
    <\/script>`,style:`
    <style>
      .timeline-demo {
        display: flex;
        max-width: 700px;
        margin: 1em;
      }
    </style>`}]),D={attribute:[{name:"reverse",desc:"\u6307\u5B9A\u8282\u70B9\u6392\u5E8F\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u6B63\u5E8F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"mode",desc:"\u901A\u8FC7\u8BBE\u7F6E mode \u53EF\u4EE5\u6539\u53D8\u5185\u5BB9\u5728\u8282\u70B9\u7684\u4F4D\u7F6E",type:"string",optional:"left\u3001alternate\u3001right",default:"right"}]},P={attribute:[{name:"color",desc:"\u6307\u5B9A\u8282\u70B9\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"time",desc:"\u8282\u70B9\u5BF9\u5E94\u7684\u65F6\u95F4",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"time-position",desc:"\u65F6\u95F4\u7684\u4F4D\u7F6E",type:"string",optional:"top\u3001bottom",default:"bottom"}],slot:[{name:"\u2014\u2014",desc:"TimeLine-Item\u7684\u5185\u5BB9"},{name:"dot",desc:"\u81EA\u5B9A\u4E49\u8282\u70B9"}]};const T={class:"timeline-demo-list"},E={key:0,class:"options"},N=_("span",null,"\u6392\u5E8F\uFF1A",-1),V=u(" \u6B63\u5E8F "),S=u(" \u5012\u5E8F "),U={key:0},j=u("TimeLine-Item"),J=I({setup(H){const n=R(!1);return(q,r)=>{const f=o("w-radio"),g=o("w-icon"),k=o("w-card"),y=o("w-timeline-item"),x=o("w-timeline"),B=o("DemoItem"),v=o("TableList");return e(),i("div",T,[(e(!0),i(c,null,d(b(L),(m,C)=>(e(),p(B,{item:m,key:m.title},{default:l(()=>[(e(!0),i(c,null,d(m.components,s=>(e(),i("div",{key:s},[C===0?(e(),i("div",E,[N,a(f,{checked:n.value,"onUpdate:checked":r[0]||(r[0]=t=>n.value=t),value:!1,style:{"margin-bottom":"0"}},{default:l(()=>[V]),_:1},8,["checked"]),a(f,{checked:n.value,"onUpdate:checked":r[1]||(r[1]=t=>n.value=t),value:!0,style:{"margin-bottom":"0"}},{default:l(()=>[S]),_:1},8,["checked"])])):z("",!0),a(x,{reverse:n.value,mode:s.mode,"time-position":m.timePosition},{default:l(()=>[(e(!0),i(c,null,d(s.list||m.list,t=>(e(),p(y,{key:t,color:t.color,time:t.time,"time-position":m.timePosition},F({default:l(()=>[s.card?(e(),p(k,{key:1},{default:l(()=>[(e(),i(c,null,d(2,h=>_("div",{class:"text",key:h},w(t.label),1)),64))]),_:2},1024)):(e(),i("span",U,w(t.label),1))]),_:2},[s.icon?{name:"dot",fn:l(()=>[a(g,{name:t.icon},null,8,["name"])])}:void 0]),1032,["color","time","time-position"]))),128))]),_:2},1032,["reverse","mode","time-position"])]))),128))]),_:2},1032,["item"]))),128)),a(v,{data:b(D)},null,8,["data"]),a(v,{data:b(P)},{default:l(()=>[j]),_:1},8,["data"])])}}});export{J as default};
