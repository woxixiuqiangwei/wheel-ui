import{r as L,d as A,a as u,o as a,g as r,H as p,I as c,c as b,w as l,b as o,y as i,z as k,h as n,t as z,N as C,k as X,R as v}from"./vendor.c0366ad2.js";const q=L([{title:"\u5355\u72EC\u4F7F\u7528",desc:"\u7ED9\u6BCF\u4E2A radio \u8BBE\u7F6E checked \u5C5E\u6027\u6765\u7ED1\u5B9A\u503C\uFF0C\u8BBE\u7F6E value \u5C5E\u6027\u6307\u5B9A radio \u7684\u503C\u3002\u9002\u5408\u9009\u9879\u8F83\u5C11\u7684\u65F6\u5019",active:"",onlyRadio:!0,components:[{label:"\u7537",value:"man"},{label:"\u5973",value:"women"}],template:`    <template>
      <div>
        <w-radio v-model:checked='gender' value='man'>
          \u7537
        </w-radio>
        <w-radio v-model:checked='gender' value='women'>
          \u5973
        </w-radio>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            gender: ""
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const gender = ref("");
          return { gender };
        }
      })
    <\/script>`},{title:"\u7EC4\u5408\u4F7F\u7528",desc:`\u4F7F\u7528 RadioGroup \u5B9E\u73B0\u4E00\u7EC4\u5355\u9009\u6309\u94AE\u3002\u5728\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u53EA\u9700\u8981\u7ED9 RadioGroup \u8BBE\u7F6E v-model:checked \u5B9E\u73B0\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\u3002<br>
      \u8BBE\u7F6E closable \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EF\u70B9\u51FB\u5DF2\u9009\u4E2D\u7684\u5355\u9009\u6309\u94AE\u6E05\u9664\u5DF2\u9009\u503C\u3002(\u9ED8\u8BA4\u4E0D\u53EF\u4EE5)`,closable:!1,components:[{demo:[{label:"\u4E0D\u8FA3",value:"no-spicy"},{label:"\u5FAE\u8FA3",value:"small-spicy"},{label:"\u4E2D\u8FA3",value:"middle-spicy"},{label:"\u91CD\u8FA3",value:"big-spicy"}]}],template:`    <template>
      <div>
        <w-button @click="spicy=''">\u6E05\u9664\u503C</w-button>
      </div>
      <div>
        <w-radio-group v-model:checked="spicy">
          <w-radio value="no-spicy">\u4E0D\u8FA3</w-radio>
          <w-radio value="small-spicy">\u5FAE\u8FA3</w-radio>
          <w-radio value="middle-spicy">\u4E2D\u8FA3</w-radio>
          <w-radio value="big-spicy">\u91CD\u8FA3</w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            spicy: ""
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const spicy = ref("");
          return { spicy };
        }
      })
    <\/script>`},{title:"\u5E26\u6709\u8FB9\u6846",desc:"\u8BBE\u7F6E border \u5C5E\u6027\uFF0C\u662F\u5426\u663E\u793A\u8FB9\u6846\u3002(\u53EA\u5728type!=button\u65F6\u6709\u6548)",active:"chinese",onlyRadio:!0,border:!0,components:[{label:"\u8BED\u6587",value:"chinese"},{label:"\u6570\u5B66",value:"math"},{label:"\u82F1\u8BED",value:"english"}],template:`    <template>
      <w-radio-group v-model:checked="subject" border>
        <w-radio value="chinese">\u8BED\u6587</w-radio>
        <w-radio value="math">\u6570\u5B66</w-radio>
        <w-radio value="english">\u82F1\u8BED</w-radio>
      </w-radio-group>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            subject: "chinese"
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const subject = ref("chinese");
          return { subject };
        }
      })
    <\/script>`},{title:"\u8282\u70B9\u5F62\u72B6",desc:"\u8BBE\u7F6E square \u5C5E\u6027\uFF0C\u4FEE\u6539\u5355\u9009\u6309\u94AE\u7684\u8282\u70B9\u662F\u5426\u4E3A\u65B9\u5F62\u3002(\u9ED8\u8BA4\u662F\u5706\u5F62\uFF0C\u53EA\u5728type!=button\u65F6\u6709\u6548)",demo:[{label:"\u5927\u4EFD",value:"big-weight"},{label:"\u4E2D\u4EFD",value:"middle-weight"},{label:"\u5C0F\u4EFD",value:"small-weight"}],components:[{active:"big-weight"},{active:"big-weight",border:!0}],template:`    <template>
      <div class='options'>
        <span>\u5F62\u72B6\uFF1A</span>
        <w-switch v-model="square" />
      </div>
      <div>
        <w-radio-group v-for="group in list" v-model:checked="group.checked"
          :border="group.border" :square="square">
          <w-radio v-for="item in weightList" :value="item.weight">
            {{ item.label }}
          </w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            square: false, 
            list: [
              { checked: 'big-weight' },
              { checked: 'big-weight', border: true }
            ],
            weightList: [
              { label: '\u5927\u4EFD', value: 'big-weight' },
              { label: '\u4E2D\u4EFD', value: 'middle-weight' },
              { label: '\u5C0F\u4EFD', value: 'small-weight' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const square = ref(false),
                list = ref([
                  { checked: 'big-weight' },
                  { checked: 'big-weight', border: true }
                ]),
                weightList = [
                  { label: '\u5927\u4EFD', value: 'big-weight' },
                  { label: '\u4E2D\u4EFD', value: 'middle-weight' },
                  { label: '\u5C0F\u4EFD', value: 'small-weight' }
                ];
          return { weight };
        }
      })
    <\/script>`},{title:"\u6309\u94AE\u6837\u5F0F",desc:"\u8BBE\u7F6E type='button'\uFF0C\u4E3A\u6309\u94AE\u6837\u5F0F\u7684\u5355\u9009\u6309\u94AE\u7EC4\u5408\u3002",demo:[{label:"XS",value:"XS"},{label:"S",value:"S"},{label:"M",value:"M"},{label:"L",value:"L"},{label:"XL",value:"XL"},{label:"XXL",value:"XXL"}],components:[{active:"XS",type:"button"},{active:"XS",type:"button",border:!0}],template:`    <template>
      <div>
        <w-radio-group v-for="group in list" 
          v-model:checked="group.checked" 
          type="button" :border="group.border">
          <w-radio v-for='item in sizeList' :key="item.value" :value="item.value">
            {{ item.label }}
          </w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            list: [
              { checked: 'XS' },
              { checked: 'XS', border: true }
            ]
            sizeList: [
              { value:'XS', label:'XS' },
              { value:'S', label:'S' },
              { value:'M', label:'M' },
              { value:'L', label:'L' },
              { value:'XL', label:'XL' },
              { value:'XXL',label:'XXL' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const list = ref([
            { checked: 'XS' },
            { checked: 'XS', border: true }
          ]);
          const sizeList = [
            { value: 'XS', label: 'XS' },
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' },
            { value: 'XL', label: 'XL' },
            { value: 'XXL', label: 'XXL' }
          ];
          return { list, sizeList };
        }
      })
    <\/script>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528\u5355\u9009\u6309\u94AE\u3002",isDisabled:!0,disabled:!0,demo:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"}],components:[{type:"button",active:"A"},{type:"button",border:!0,active:"A"},{active:"A",border:!0},{active:"A"}],template:`    <template>
      <div class="options">
        <span>\u662F\u5426\u7981\u7528\uFF1A</span>
        <w-switch v-model="disabled" text-inline open-text="\u662F" off-text="\u5426" />
      </div> 
      <div>
        <w-radio-group v-for="group in list" v-model:checked="group.checked" 
          :type="group.type" :border="group.border" :disabled="disabled">
          <w-radio v-for="item in optionList" :key="item.value" :value="item.value">
            {{ item.label }}
          </w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            disabled: true,
            list: [
              { checked: 'A', type: 'button' },
              { checked: 'A', type: 'button', border: true },
              { checked: 'A', border: true  },
              { checked: 'A'}
            ],
            optionList: [
              { value:'A', label:'A' },
              { value:'B', label:'B' },
              { value:'C', label:'C' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const disabled = ref(true);
                list = ref([
                  { checked: 'A', type: 'button' },
                  { checked: 'A', type: 'button', border: true },
                  { checked: 'A', border: true  },
                  { checked: 'A'}
                ]),
                optionList = [
                  { value: 'A', label: 'A' },
                  { value: 'B', label: 'B' },
                  { value: 'C', label: 'C' }
                ];
          return { disabled, list, optionList };
        }
      })
    <\/script>`},{title:"\u5C3A\u5BF8\u548C\u989C\u8272",desc:`\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u5355\u9009\u6309\u94AE\u7684\u5C3A\u5BF8\u3002 (large\u3001small) <br>
      \u8BBE\u7F6E fill \u5C5E\u6027\uFF0C\u4FEE\u6539\u5355\u9009\u6309\u94AE\u7684\u80CC\u666F\u8272 / \u8FB9\u6846\u8272 / \u6587\u672C\u8272\u3002<br>
      \u8BBE\u7F6E square \u5C5E\u6027\uFF0C\u4FEE\u6539\u5355\u9009\u6309\u94AE\u7684\u8282\u70B9\u662F\u5426\u4E3A\u65B9\u5F62\u3002(\u9ED8\u8BA4\u4E0D\u662F\u65B9\u5F62)`,fill:"#007fff",square:!1,isSize:!0,size:"",demo:[{label:"\u7F8A\u8089",value:"sheep"},{label:"\u725B\u8089",value:"beef"},{label:"\u732A\u8089",value:"pig"}],components:[{type:"button",active:"sheep"},{type:"button",border:!0,active:"sheep"},{border:!0,active:"sheep"},{active:"sheep"}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u5C3A\u5BF8\uFF1A</span>
          <w-radio-group v-model:checked="size">
            <w-radio v-for="item in sizeList" :key="item.value" :value="item.value">
              {{ item.label }}
            </w-radio>
          </w-radio-group>
        </div>
        <div>
          <span>\u989C\u8272\uFF1A</span>
          <input v-model="fill" type="color" />
        </div>
        <div>
          <span>\u8282\u70B9\u5F62\u72B6\uFF1A</span>
          <w-switch v-model="square" open-text="\u65B9\u5F62" off-text="\u5706\u5F62" text-inline />
        </div>
      </div> 
      <div>
        <w-radio-group v-for="group in list" v-model:checked="group.checked" 
          :type="group.type" :border="group.border" :size="size" :fill="fill">
          <w-radio v-for="item in menuList" :key="item.value" :value="item.value">
            {{item.label}}
          </w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            size:'',
            fill: '#007fff',
            square: false,
            list: [
              { checked: 'sheep', type: 'button' },
              { checked: 'sheep', type: 'button', border: true },
              { checked: 'sheep', border: true },
              { checked: 'sheep' }
            ],
            menuList: [
              { label: '\u7F8A\u8089', value: 'sheep' },
              { label: '\u725B\u8089', value: 'beef' },
              { label: '\u732A\u8089', value: 'pig' }
            ],
            sizeList: [
              { label:'\u5927', value: 'large' },
              { label:'\u9ED8\u8BA4', value: '' },
              { label:'\u5C0F', value: 'small' },
              { label:'24px', value: '24px' },
              { label:'30px', value: 30 }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const size = ref(''),
                fill = ref('#007fff'),
                square = ref(false),
                list = ref([
                  { checked: 'sheep', type: 'button' },
                  { checked: 'sheep', type: 'button', border: true },
                  { checked: 'sheep', border: true },
                  { checked: 'sheep' }
                ]),
                menuList = [
                  { label:'\u7F8A\u8089', value:'sheep' },
                  { label:'\u725B\u8089', value:'beef' },
                  { label:'\u732A\u8089', value:'pig' }
                ],
                sizeList = [
                  { label:'\u5927', value: 'large' },
                  { label:'\u9ED8\u8BA4', value: '' },
                  { label:'\u5C0F', value: 'small' },
                  { label:'24px', value: '24px' },
                  { label:'30px', value: 30 }
                ];
          return { size, fill, square, list, menuList, sizeList };
        }
      })
    <\/script>`},{title:"\u5782\u76F4\u6392\u5217",desc:"\u7ED9\u5355\u9009\u6309\u94AE\u7EC4\u8BBE\u7F6E vertical \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u5782\u76F4\u6392\u5217\u3002(\u9ED8\u8BA4\u4E0D\u5782\u76F4\u6392\u5217)",vertical:!0,size:"",demo:[{label:"\u5FAE\u4FE1",value:"wechat"},{label:"\u652F\u4ED8\u5B9D",value:"alipay"},{label:"QQ",value:"qq"}],components:[{type:"button",active:"wechat"},{type:"button",border:!0,active:"wechat"},{border:!0,active:"wechat"},{active:"wechat"}],template:`    <template>
      <div>
        <w-radio-group v-for="group in list" :key="group"
          v-model:checked="group.checked" :type="group.type" 
          :border="group.border" :size="size" :fill="fill">
          <w-radio v-for="item in payList" :key="item.value" :value="item.value">
            {{item.label}}
          </w-radio>
        </w-radio-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { checked: 'wechat', type: 'button' },
              { checked: 'wechat', type: 'button', border: true },
              { checked: 'wechat', border: true },
              { checked: 'wechat' }
            ],
            payList: [
              { label: '\u5FAE\u4FE1', value:'wechat' },
              { label: '\u652F\u4ED8\u5B9D', value:'alipay' },
              { label: 'QQ', value:'qq' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { checked: 'wechat', type: 'button' },
            { checked: 'wechat', type: 'button', border: true },
            { checked: 'wechat', border: true },
            { checked: 'wechat' }
          ]);
          const payList = [
            {label:'\u5FAE\u4FE1',value:'wechat'},
            {label:'\u652F\u4ED8\u5B9D',value:'alipay'},
            {label:'QQ',value:'qq'}
          ];  
          return { list, payList };
        }
      })
    <\/script>`}]),S={attribute:[{name:"checked",desc:"\u7ED1\u5B9A\u503C (\u53EA\u5728\u5355\u72EC\u4F7F\u7528 Radio \u65F6\u6709\u6548)",type:"string\u3001number\u3001boolean",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"value",desc:"\u6307\u5B9A\u5F53\u524D\u9009\u9879\u7684 value \u503C (\u53EA\u6709\u5728 RadioGroup \u65F6\u6709\u6548)",type:"string\u3001number\u3001boolean",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u5F53\u524D\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"Radio \u7684\u5C3A\u5BF8\u3002\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u65F6 large\u3001small\u300120px\u30011.5rem\u30012em \u7B49\uFF0C\u4E3A\u6570\u5B57\u7C7B\u578B\u65F6\u5355\u4F4D\u9ED8\u8BA4\u662Fpx",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"border",desc:"\u662F\u5426\u663E\u793A\u8FB9\u6846",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"square",desc:"\u8282\u70B9\u662F\u5426\u4E3A\u65B9\u5F62",type:"boolean",optional:"\u2014\u2014",default:!1}]},F={attribute:[{name:"checked",desc:"\u7ED1\u5B9A\u503C\uFF0C\u9700\u8981\u4F7F\u7528v-model:\u53CC\u5411\u7ED1\u5B9A\uFF0C\u5426\u5219\u6539\u53D8\u72B6\u6001\u65F6\u5E76\u4E0D\u80FD\u6539\u53D8\u4F7F\u7528\u8005\u7684\u6570\u636E",type:"string\u3001number\u3001boolean",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"type",desc:"\u5BF9 RadioGroup \u6DFB\u52A0\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A button \u6216\u4E0D\u586B\uFF0C\u4E3A button \u65F6\u4F7F\u7528\u6309\u94AE\u6837\u5F0F",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"vertical",desc:"\u7EC4\u5408\u6A21\u5F0F\u5782\u76F4\u6392\u5217",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"closable",desc:"\u70B9\u51FB\u5DF2\u9009\u4E2D\u7684\u9009\u9879\u662F\u5426\u53EF\u6E05\u9664\u5DF2\u9009\u503C",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u6240\u6709\u5B50\u5355\u9009\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"RadioGroup \u5185\u6240\u6709 Radio \u7684\u5C3A\u5BF8\u3002\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u65F6 large\u3001small\u300120px\u30011.5rem\u30012em \u7B49\uFF0C\u4E3A\u6570\u5B57\u7C7B\u578B\u65F6\u5355\u4F4D\u9ED8\u8BA4\u662Fpx",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"fill",desc:"Radio \u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#007fff"},{name:"border",desc:"\u662F\u5426\u663E\u793A\u8FB9\u6846 (\u53EA\u5728type!=button\u65F6\u6709\u6548)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"square",desc:"\u8282\u70B9\u662F\u5426\u4E3A\u65B9\u5F62 (\u53EA\u5728type!=button\u65F6\u6709\u6548)",type:"boolean",optional:"\u2014\u2014",default:!0}],event:[{name:"change",desc:"\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",callbackParams:"\u9009\u4E2D\u7684 Radio \u7684 value \u503C"}]};const R={class:"radio-demo-list"},B={key:0,class:"btns"},V=i(" \u6E05\u9664\u503C "),U={key:1,class:"btns"},D=i(" \u5F62\u72B6\uFF1A "),M={key:2,class:"btns"},G=n("span",null,"\u662F\u5426\u7981\u7528\uFF1A",-1),Q={key:3,class:"btns"},j=i(" \u5C3A\u5BF8\uFF1A "),N=i("\u5927"),T=i("\u9ED8\u8BA4"),E=i("\u5C0F"),I=i("24px"),H=i("30px"),P=i(" \u989C\u8272\uFF1A "),$=["onUpdate:modelValue"],J=i("RadioGroup"),Y=A({setup(K){const m=f=>{console.log("radio value change ..",f)};return(f,O)=>{const s=u("w-radio"),_=u("w-button"),h=u("w-switch"),w=u("w-radio-group"),x=u("DemoItem"),g=u("TableList");return a(),r("div",R,[(a(!0),r(p,null,c(v(q),(e,y)=>(a(),b(x,{item:e,key:e.title},{default:l(()=>[e.onlyRadio?(a(!0),r(p,{key:0},c(e.components,t=>(a(),r("div",{key:t},[o(s,{checked:e.active,"onUpdate:checked":d=>e.active=d,value:t.value,closable:e.closable,border:e.border,size:e.size,onChange:m},{default:l(()=>[i(k(t.label),1)]),_:2},1032,["checked","onUpdate:checked","value","closable","border","size"])]))),128)):(a(),r(p,{key:1},[y===1?(a(),r("div",B,[o(_,{onClick:t=>e.components[0].active=""},{default:l(()=>[V]),_:2},1032,["onClick"])])):y===3?(a(),r("div",U,[n("div",null,[D,o(h,{modelValue:e.square,"onUpdate:modelValue":t=>e.square=t,"text-inline":"","open-text":"\u5706\u5F62","off-text":"\u65B9\u5F62","open-value":!0,"off-value":!1},null,8,["modelValue","onUpdate:modelValue"])])])):e.isDisabled?(a(),r("div",M,[n("div",null,[G,o(h,{modelValue:e.disabled,"onUpdate:modelValue":t=>e.disabled=t,"open-text":"\u662F","off-text":"\u5426","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])])):e.isSize?(a(),r("div",Q,[n("div",null,[j,o(w,{checked:e.size,"onUpdate:checked":t=>e.size=t,class:"group-size"},{default:l(()=>[o(s,{value:"large"},{default:l(()=>[N]),_:1}),o(s,{value:""},{default:l(()=>[T]),_:1}),o(s,{value:"small"},{default:l(()=>[E]),_:1}),o(s,{value:"24px"},{default:l(()=>[I]),_:1}),o(s,{value:30},{default:l(()=>[H]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),n("div",null,[P,z(n("input",{type:"color","onUpdate:modelValue":t=>e.fill=t},null,8,$),[[C,e.fill]])])])):X("",!0),(a(!0),r(p,null,c(e.components,t=>(a(),b(w,{checked:t.active,"onUpdate:checked":d=>t.active=d,key:t,disabled:e.disabled,square:e.square,border:t.border,type:t.type,size:e.size||t.size,vertical:e.vertical,fill:e.fill,closable:e.closable,onChange:m},{default:l(()=>[(a(!0),r(p,null,c(t.demo||e.demo,d=>(a(),b(s,{key:d,value:d.value,disabled:d.disabled},{default:l(()=>[i(k(d.label),1)]),_:2},1032,["value","disabled"]))),128))]),_:2},1032,["checked","onUpdate:checked","disabled","square","border","type","size","vertical","fill","closable"]))),128))],64))]),_:2},1032,["item"]))),128)),o(g,{data:v(S)},null,8,["data"]),o(g,{data:v(F)},{default:l(()=>[J]),_:1},8,["data"])])}}});export{Y as default};
