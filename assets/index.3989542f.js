import{r as f,d as v,a as n,o as e,g as i,H as a,I as l,c as w,w as s,h as p,b as r,y as x,z as d,t as g,v as h,T as _,R as y}from"./vendor.c0366ad2.js";const k=f([{title:"fade \u6DE1\u5165\u6DE1\u51FA",components:[{show:!0,label:"w-fade",btn:"fade \u9ED8\u8BA4"},{show:!0,label:"w-fade-linear",btn:"fade \u5300\u901F"}],template:`    <template>  
      <div class='transition-item'>
        <w-button @click="visible=!visible">fade</w-button>
        <transition name='w-fade'>
          <div v-show='visible' class='transition-box'>w-fade</div>
        </transition>
      </div>
      <div class='transition-item'>
        <w-button @click='visible2=!visible2'>fade \u5300\u901F</w-button>
        <transition name='w-fade-linear'>
          <div v-show='visible2' class='transition-box'>w-fade-linear</div>
        </transition>
      </div>
    </template> 
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            visible: true,
            visible2: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const visible = ref(true),
                visible2 = ref(true);
          return { visible, visible2 };
        }
      }) 
    <\/script>`,style:`
    <style lang='scss'>
      .transition-item {
        width: 160px;
        height: 160px;
        text-align: center;
        > div {
          margin-top: 2em;
          margin-bottom: 10px;
          width: 160px;
          height: 100px;
          border-radius: 4px;
          background-color: #409eff;
          text-align: center;
          color: #fff;
          padding: 40px 0;
          box-sizing: border-box;
        }
      }
    </style>`},{title:"zoom \u7F29\u653E",components:[{show:!0,label:"w-zoom",btn:"\u7F29\u653E"}],template:`    <template>  
      <div class='transition-item'>
        <w-button @click='visible=!visible'>\u7F29\u653E</w-button>
        <transition name='w-zoom'>
          <div v-show='visible' class='transition-box'>w-zoom</div>
        </transition>
     </div>
   </template> 
   <script>`,optionsApi:`
      export default {
        data() {
          return {
            visible: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const visible = ref(true);
          return { visible };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .transition-item {
        width: 160px;
        height: 160px;
        text-align: center;
        > div {
          margin-top: 2em;
          margin-bottom: 10px;
          width: 160px;
          height: 100px;
          border-radius: 4px;
          background-color: #409eff;
          text-align: center;
          color: #fff;
          padding: 40px 0;
          box-sizing: border-box;
        }
      }
    </style>`},{title:"slide \u6ED1\u5165\u6ED1\u51FA",components:[{show:!0,label:"w-slide-up",btn:"\u5411\u4E0A\u6ED1\u52A8"},{show:!0,label:"w-slide-down",btn:"\u5411\u4E0B\u6ED1\u52A8"},{show:!0,label:"w-slide-left",btn:"\u5411\u5DE6\u6ED1\u52A8"},{show:!0,label:"w-slide-right",btn:"\u5411\u53F3\u6ED1\u52A8"}],template:`    <template>  
      <div class='transition-item'>
        <w-button @click='visible=!visible'>\u5411\u4E0A\u6ED1\u52A8</w-button>
        <transition name='w-slide-up'>
          <div v-show='visible' class="transition-box'>w-slide-up</div>
        </transition>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            visible: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const visible = ref(true);
          return { visible };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .transition-item {
        width: 160px;
        height: 160px;
        text-align: center;
        > div {
          margin-top: 2em;
          margin-bottom: 10px;
          width: 160px;
          height: 100px;
          border-radius: 4px;
          background-color: #409eff;
          text-align: center;
          color: #fff;
          padding: 40px 0;
          box-sizing: border-box;
        }
      }
    </style>`},{title:"fold \u6298\u53E0",components:[{show:!0,label:"w-fold",btn:"\u5C45\u4E2D\u6298\u53E0"},{show:!0,label:"w-fold-up",btn:"\u5411\u4E0A\u6298\u53E0"},{show:!0,label:"w-fold-down",btn:"\u5411\u4E0B\u6298\u53E0"},{show:!0,label:"w-fold-left",btn:"\u5411\u5DE6\u6298\u53E0"},{show:!0,label:"w-fold-right",btn:"\u5411\u53F3\u6298\u53E0"}],template:`    <template>  
      <div class='transition-item'>
        <w-button @click='visible=!visible'>\u5C45\u4E2D\u6298\u53E0</w-button>
        <transition name='w-fold'>
          <div v-show='visible' class='transition-box'>w-fold</div>
        </transition>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            visible: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const visible = ref(true);
          return { visible };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .transition-item {
        width: 160px;
        height: 160px;
        text-align: center;
        > div {
          margin-top: 2em;
          margin-bottom: 10px;
          width: 160px;
          height: 100px;
          border-radius: 4px;
          background-color: #409eff;
          text-align: center;
          color: #fff;
          padding: 40px 0;
          box-sizing: border-box;
        }
      }
    </style>`}]);const C={class:"transition-demo-list"},z={class:"transition-item"},L=v({setup(A){const b={attribute:[{name:"name",desc:"<transition> \u6216\u8005 <transition-group> \u7EC4\u4EF6\u5C5E\u6027",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"}]};return(D,T)=>{const u=n("w-button"),c=n("DemoItem"),m=n("TableList");return e(),i("div",C,[(e(!0),i(a,null,l(y(k),o=>(e(),w(c,{item:o,key:o.title},{default:s(()=>[(e(!0),i(a,null,l(o.components,t=>(e(),i("div",{key:t},[p("div",z,[r(u,{onClick:B=>t.show=!t.show},{default:s(()=>[x(d(t.btn),1)]),_:2},1032,["onClick"]),r(_,{name:t.label},{default:s(()=>[g(p("div",null,d(t.label),513),[[h,t.show]])]),_:2},1032,["name"])])]))),128))]),_:2},1032,["item"]))),128)),r(m,{data:b})])}}});export{L as default};
