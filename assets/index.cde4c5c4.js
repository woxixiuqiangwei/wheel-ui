import{r as U,d as D,a as i,o as l,g as r,H as m,I as w,c as h,w as t,h as n,t as b,N as _,b as a,k as C,P as I,R as g,y as u}from"./vendor.c0366ad2.js";const B=U([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E value / v-model \u5C5E\u6027\u6765\u7ED1\u5B9A\u5F00\u5173\u7684\u503C (\u9ED8\u8BA4\u4E3A\u5E03\u5C14\u503C)\u3002 \u8BBE\u7F6E size \u5C5E\u6027\u4E3A large \u6216 small \uFF0C\u4FEE\u6539\u5F00\u5173\u7684\u5927\u5C0F\u3002",components:[{value:!1},{value:!1,size:"small"},{value:!1,size:"large"}],template:`    <template>
      <div class="switch-demo">
        <w-switch v-model="value1" />
        <w-switch v-model="value2" size="small" />
        <w-switch v-model="value3" size="large" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: false,
            value2: false,
            value3: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const value1 = ref(false);
                value2 = ref(false);
                value3 = ref(false);
          return { value1, value2, value3 };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        margin: 1em;
        .options {
          display: flex;
          margin-bottom: 1em;
          > div {
            margin-right: 1.5em;
          }
        }
      } 
    </style>`},{title:"\u989C\u8272",desc:"\u8BBE\u7F6E open-color / off-color \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F00\u5173 \u6253\u5F00 / \u5173\u95ED \u65F6\u7684\u80CC\u666F\u8272\u3002",openColor:"#8be825",offColor:"#655858",components:[{value:!1}],template:`    <template>
      <div class="switch-demo">
        <div class='options'>
          <div>
            <span>\u5173\u95ED\u65F6\uFF1A</span>
            <input v-model="offColor" type="color" />
          </div>
          <div>
            <span>\u6253\u5F00\u65F6\uFF1A</span>
            <input v-model="openColor" type="color" />
          </div>
        </div>
        <w-switch v-model="value" :open-color="openColor" :off-color="offColor" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value: false,
            openColor: '#8be825',
            offColor: '#655858'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value = ref(false);
          const openColor = ref('#8be825');
          const offColor = ref('#655858');
          return { value, openColor, offColor };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        margin: 1em;
        .options {
          display: flex;
          > div{
            margin-right: 1.5em;
          }
        }
      }
    </style>
    `},{title:"\u6587\u5B57\u63CF\u8FF0",desc:`\u8BBE\u7F6E open-text / off-text \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F00\u5173 \u6253\u5F00 / \u5173\u95ED \u65F6\u7684\u6587\u5B57\u63CF\u8FF0\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6587\u5B57\u63CF\u8FF0\u5185\u5BB9\u3002 
    <br>\u8BBE\u7F6E single-text \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EA\u663E\u793A\u5355\u4E2A\u72B6\u6001\u7684\u6587\u5B57\u63CF\u8FF0\u3002
    <br>\u8BBE\u7F6E text-inline \u5C5E\u6027\uFF0C\u4FEE\u6539\u6587\u5B57\u63CF\u8FF0\u662F\u5426\u5185\u5D4C\u3002`,size:"",components:[{value:!0,openText:"\u5F00",offText:"\u5173"},{value:!0,openColor:"#13ce66",offColor:"darkgrey"},{value:!0,openText:"1111111",offText:"000"},{value:!0,singleText:!0},{value:!0,singleText:!0,openText:"\u6309\u5E74\u4ED8\u8D39",offText:"\u6309\u6708\u4ED8\u8D39"}],template:`    <template>
      <div class="switch-demo">
        <div class="options">
          <div>
            <span>\u5F00\u5173\u5927\u5C0F\uFF1A</span>
            <w-radio-group v-model:checked="size">
              <w-radio value="large">\u5927</w-radio>
              <w-radio value="">\u9ED8\u8BA4</w-radio>
              <w-radio value="small">\u5C0F</w-radio>
            </w-radio-group>
          </div>
          <div>
            <span>\u6587\u5B57\u5185\u5D4C\uFF1A</span>
            <w-checkbox v-model:checked="textInline" :border="true">
              \u662F
            </w-checkbox>
          </div>
        </div>
        <div>
          <w-switch v-model="value1" open-text="\u5F00" off-text="\u5173" :size="size" 
            :text-inline="textInline" />
          <w-switch v-model="value2" :size="size" :text-inline="textInline" 
            open-color="#13ce66" off-color="darkgrey">
            <template #open>
              <w-icon name="check-circle" size="20px" />
            </template>
            <template #off>
              <w-icon name="close-circle" size="20px" />
            </template>
          </w-switch>
          <w-switch v-model="value3" open-text="\u6309\u5E74\u4ED8\u8D39" off-text="\u6309\u6708\u4ED8\u8D39" 
            :size="size" :single-text="true" :text-inline="textInline" />
        </div>
      </div>  
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: true,
            value2: true,
            value3: true,
            size: '',
            textInline: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref(true),
                value2 = ref(true),
                value3 = ref(true),
                size = ref(''),
                textInline = ref(false);
          return { value1, value2, value3, size, textInline };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        margin: 1em;
        > .options {
          > div {
            display: flex;
            align-items: center;
          }
        }
        > div{
          display: flex;
          margin: 2em;
          > .w-switch {
            margin-right: 2em;
          }
        }
      }
    </style>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528\u5F00\u5173\u3002",haveDisabled:!0,disabled:!0,components:[{value:!1},{value:!0,openText:"\u6309\u5E74\u4ED8\u8D39",offText:"\u6309\u6708\u4ED8\u8D39",openColor:"#13ce66",offColor:"darkgrey"}],template:`    <template>
      <div class='switch-demo'>
        <div>
          <w-checkbox v-model:checked='disabled' :border='true'>\u7981\u7528\u4E2D</w-checkbox>
        </div>
        <div>
          <w-switch v-model='value1' :disabled='disabled' />
          <w-switch v-model='value2' :disabled='disabled' open-text='\u6309\u5E74\u4ED8\u8D39' off-text='\u6309\u6708\u4ED8\u8D39' />
        </div>
      </div>  
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: false,
            value2: true,
            disabled: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref(false);
          const value2 = ref(true);
          const disabled = ref(true);
          return { value1, value2, disabled };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        margin: 1em;
        > div {
          display: flex;
          margin: 2em;
          > .w-switch {
            margin-right: 2em;
          }
        }
      }
    </style>`},{title:"\u52A0\u8F7D\u4E2D",desc:"\u8BBE\u7F6E loading \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F00\u5173\u662F\u5426\u5728\u52A0\u8F7D\u4E2D\u3002",haveLoading:!0,loading:!0,components:[{value:!1,openText:"\u5F00",offText:"\u5173"},{value:!1,openText:"\u6309\u5E74\u4ED8\u8D39",offText:"\u6309\u6708\u4ED8\u8D39",openColor:"blue",offColor:"brown",textInline:!0}],template:`    <template>
      <div class="switch-demo">
        <div>
          <w-checkbox v-model:checked="loading" :border="true">
            \u52A0\u8F7D\u4E2D
          </w-checkbox>
        </div>
        <div>
          <w-switch v-model="value1" :loading="loading" open-text="\u5F00" off-text="\u5173" />
          <w-switch v-model="value2" :loading="loading" 
            open-text="\u6309\u5E74\u4ED8\u8D39" off-text="\u6309\u6708\u4ED8\u8D39"
            open-color="blue" off-color="brown" text-inline />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: false,
            value2: true,
            loading: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref(false);
          const value2 = ref(true);
          const loading = ref(true);
          return { value1, value2, loading };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        margin: 1em;
        > div {
          display: flex;
          margin: 2em;
          > .w-switch {
            margin-right: 2em;
          }
        }
      }
    </style>`},{title:"\u5207\u6362\u524D\u6709\u56DE\u8C03",desc:"\u8BBE\u7F6E before-change \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F00\u5173\u662F\u5426\u5728\u5207\u6362\u4E4B\u524D\u6709\u56DE\u8C03\uFF0C\u8FD4\u56DE false \u53D6\u6D88\u5207\u6362\u3002",haveBeforeChange:!0,beforeChange:!0,components:[{value:!1,openText:"\u5F00",offText:"\u5173"}],template:`    <template>
      <div>
        <w-checkbox v-model:checked="value" :border="true">
          \u5F00\u542F\uFF01
        </w-checkbox>
        <w-switch v-model="value" open-text="\u5F00\u542F" off-text="\u5173\u95ED" :before-change="beforeChange" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value: false
          }
        },
        methods: {
          beforeChange() {
            return confirm('\u786E\u5B9A\u8981\u5207\u6362\u5F00\u5173\u5417');
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value = ref(false);
          const beforeChange = () => confirm('\u786E\u5B9A\u8981\u5207\u6362\u5F00\u5173\u5417');
          return { value, beforeChange };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .switch-demo {
        display: flex;
        margin: 1em;
        > .w-switch {
          margin-left: 2em;
        }
      }
    </style>`},{title:"\u6269\u5C55\u7684value\u7C7B\u578B",desc:"\u8BBE\u7F6E open-value / off-value \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F00\u5173 \u6253\u5F00 / \u5173\u95ED \u65F6\u7684\u503C\u3002 (\u9ED8\u8BA4\u4E3A true / false)",components:[{value:!1,openText:!0,offText:!1},{value:"\u6709",openText:"\u6709",offText:"\u65E0",openValue:"\u6709",offValue:"\u65E0"},{value:0,openText:10,offText:0,openValue:10,offValue:0}],template:`    <template>
      <w-switch v-model="value1" open-text="true" off-text="false" 
        @change="changeValue" />
      <w-switch v-model="value2" open-text="\u6709" off-text="\u65E0" open-value="\u6709" off-value="\u65E0" 
        @change="changeValue" />
      <w-switch v-model="value3" open-text="100" off-text="0" :open-value="100" :off-value="0"
        @change="changeValue" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: false,
            value2: '\u6709',
            value3: 0
          }
        },
        methods: {
          changeValue(val) {
            console.log('\u5207\u6362\u5F00\u5173\u4E86\uFF0C\u5F53\u524D\u7684\u503C\u4E3A',val);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref(false),
                value2 = ref('\u6709'),
                value3 = ref(0),
                changeValue=(val)=>console.log('\u5207\u6362\u5F00\u5173\u4E86\uFF0C\u5F53\u524D\u7684\u503C\u4E3A',val);
          return { value1, value2, value3, changeValue };
        }
      })
    <\/script>`}]),S={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8Eopen-value\u6216off-value\uFF0C\u9ED8\u8BA4\u4E3ABoolean\u7C7B\u578B",type:"boolean\u3001string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"size",desc:"Switch \u7684\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3Alarge\u3001small\u3002",type:"string",optional:"large\u3001small",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"loading",desc:"\u662F\u5426\u5728\u52A0\u8F7D\u4E2D",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"text-inline",desc:"\u63D0\u793A\u6587\u5B57\u662F\u5426\u5185\u5D4C\u5728 Switch \u91CC",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"single-text",desc:"\u662F\u5426\u663E\u793A\u5355\u4E2A\u72B6\u6001\u7684\u6587\u5B57\u63CF\u8FF0",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"open-color",desc:"Switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272",type:"string",optional:"\u2014\u2014",default:"#1890ff"},{name:"off-color",desc:"Switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272",type:"string",optional:"\u2014\u2014",default:"#bfbfbf"},{name:"open-text",desc:"Switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"off-text",desc:"Switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"open-value",desc:"Switch \u6253\u5F00\u65F6\u7684\u503C",type:"boolean / string / number",optional:"\u2014\u2014",default:!0},{name:"off-value",desc:"Switch \u5173\u95ED\u65F6\u7684\u503C",type:"boolean / string / number",optional:"\u2014\u2014",default:!1},{name:"before-change",desc:"Switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u5219\u505C\u6B62\u5207\u6362",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"}],event:[{name:"change",desc:"\u5F00\u5173\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",callbackParams:"\u65B0\u72B6\u6001\u7684\u503C"}],slot:[{name:"open",desc:"\u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0\u5185\u5BB9"},{name:"off",desc:"\u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0\u5185\u5BB9"}]};const E={class:"switch-demo-list"},L={key:0,class:"options"},N=n("span",null,"\u5173\u95ED\u65F6\uFF1A",-1),P=["onUpdate:modelValue"],H=n("span",null,"\u6253\u5F00\u65F6\uFF1A",-1),M=["onUpdate:modelValue"],R=n("span",null,"\u5F00\u5173\u5927\u5C0F\uFF1A",-1),$=u("\u5927"),q=u("\u9ED8\u8BA4"),G=u("\u5C0F"),J=n("span",null,"\u6587\u5B57\u5185\u5D4C\uFF1A",-1),K=u(" \u662F "),O=u(" \u7981\u7528\u4E2D "),Q=u(" \u52A0\u8F7D\u4E2D "),W=u(" \u6709\u56DE\u8C03 "),Z=D({setup(X){let y=d=>console.log("\u5207\u6362\u5F00\u5173\u4E86\uFF0C\u5F53\u524D\u7684\u503C\u4E3A",d),k=(d,c)=>{if(d)return()=>confirm(`\u786E\u5B9A\u8981 ${c.value?c.offText:c.openText} \u5417`)};return(d,c)=>{const x=i("w-radio"),T=i("w-radio-group"),f=i("w-checkbox"),p=i("w-icon"),z=i("w-switch"),V=i("DemoItem"),A=i("TableList");return l(),r("div",E,[(l(!0),r(m,null,w(g(B),(e,s)=>(l(),h(V,{item:e,key:e.title},{default:t(()=>[s===1||s===2||e.haveDisabled||e.haveLoading||e.haveBeforeChange?(l(),r("div",L,[s===1?(l(),r(m,{key:0},[n("div",null,[N,b(n("input",{type:"color","onUpdate:modelValue":o=>e.offColor=o},null,8,P),[[_,e.offColor]])]),n("div",null,[H,b(n("input",{type:"color","onUpdate:modelValue":o=>e.openColor=o},null,8,M),[[_,e.openColor]])])],64)):s===2?(l(),r(m,{key:1},[n("div",null,[R,a(T,{checked:e.size,"onUpdate:checked":o=>e.size=o},{default:t(()=>[a(x,{value:"large"},{default:t(()=>[$]),_:1}),a(x,{value:""},{default:t(()=>[q]),_:1}),a(x,{value:"small"},{default:t(()=>[G]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),n("div",null,[J,a(f,{checked:e.textInline,"onUpdate:checked":o=>e.textInline=o,border:!0},{default:t(()=>[K]),_:2},1032,["checked","onUpdate:checked"])])],64)):e.haveDisabled?(l(),h(f,{key:2,checked:e.disabled,"onUpdate:checked":o=>e.disabled=o,border:!0},{default:t(()=>[O]),_:2},1032,["checked","onUpdate:checked"])):e.haveLoading?(l(),h(f,{key:3,checked:e.loading,"onUpdate:checked":o=>e.loading=o,border:!0},{default:t(()=>[Q]),_:2},1032,["checked","onUpdate:checked"])):e.haveBeforeChange?(l(),h(f,{key:4,checked:e.beforeChange,"onUpdate:checked":o=>e.beforeChange=o,border:!0},{default:t(()=>[W]),_:2},1032,["checked","onUpdate:checked"])):C("",!0)])):C("",!0),(l(!0),r(m,null,w(e.components,(o,v)=>(l(),r("div",{key:o},[a(z,{modelValue:o.value,"onUpdate:modelValue":F=>o.value=F,size:o.size||e.size,"open-color":e.openColor||o.openColor,"off-color":e.offColor||o.offColor,"open-text":o.openText,"off-text":o.offText,disabled:e.disabled,"open-value":o.openValue,"off-value":o.offValue,"single-text":o.singleText,loading:e.loading,"text-inline":e.textInline||o.textInline,"before-change":g(k)(e.beforeChange,o),onChange:g(y)},I({_:2},[s===2&&v===1?{name:"open",fn:t(()=>[a(p,{name:"check-circle",size:"20px"})])}:void 0,s===2&&v===1?{name:"off",fn:t(()=>[a(p,{name:"close-circle",size:"20px"})])}:void 0,s===2&&v===3?{name:"open",fn:t(()=>[a(p,{name:"google",size:"20px"})])}:void 0,s===2&&v===3?{name:"off",fn:t(()=>[a(p,{name:"baidu",size:"20px"})])}:void 0]),1032,["modelValue","onUpdate:modelValue","size","open-color","off-color","open-text","off-text","disabled","open-value","off-value","single-text","loading","text-inline","before-change","onChange"])]))),128))]),_:2},1032,["item"]))),128)),a(A,{data:g(S)},null,8,["data"])])}}});export{Z as default};
