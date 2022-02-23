import{r as V,d as D,m as I,a as r,o as c,g as n,H as h,I as k,c as w,w as o,b as a,y as l,z as x,h as u,t as B,N as E,k as z,R as y}from"./vendor.c0366ad2.js";const G=V([{title:"\u5355\u72EC\u4F7F\u7528",desc:"\u5355\u72EC\u4F7F\u7528 checkbox \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0Cchecked \u5C5E\u6027\u4E3A\u5E03\u5C14\u503C\u3002 (\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u65F6\u6709\u6548\uFF0C\u9ED8\u8BA4\u4E3Afalse)",onlyOne:!0,components:[{label:"\u8BB0\u4F4F\u5BC6\u7801",value:!1}],template:`    <template>
      <w-checkbox v-model:checked="rememberPassword">
        \u8BB0\u4F4F\u5BC6\u7801
      </w-checkbox>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rememberPassword: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rememberPassword = ref(false);
          return { rememberPassword };
        }
      })
    <\/script>`},{title:"\u7EC4\u5408\u4F7F\u7528",desc:"\u4F7F\u7528 CheckboxGroup \u5B9E\u73B0\u4E00\u7EC4\u591A\u9009\u6846\u3002\u5728\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u53EA\u9700\u8981\u7ED9 CheckboxGroup \u8BBE\u7F6E v-model:checked \u5B9E\u73B0\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\u3002",components:[{demo:[{label:"\u624B\u6252\u9E21",value:"\u624B\u6252\u9E21"},{label:"\u9E21\u817F\u5821",value:"\u9E21\u817F\u5821"},{label:"\u5927\u9E21\u6392",value:"\u5927\u9E21\u6392"},{label:"\u86CB\u631E",value:"\u86CB\u631E"}],active:[]}],template:`    <template>
      <div>
        <w-button @click="food=[]">\u6E05\u7A7A</w-button>
      </div>
      <w-checkbox-group v-model:checked="food">
        <w-checkbox value="\u624B\u6252\u9E21">\u624B\u6252\u9E21</w-checkbox>
        <w-checkbox value="\u9E21\u817F\u5821">\u9E21\u817F\u5821</w-checkbox>
        <w-checkbox value="\u5927\u9E21\u6392">\u5927\u9E21\u6392</w-checkbox>
        <w-checkbox value="\u86CB\u631E">\u86CB\u631E</w-checkbox>
      </w-checkbox-group>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            food: []
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const food = ref([]);
          return { food };
        }
      })
    <\/script>`},{title:"\u5E26\u6709\u8FB9\u6846",desc:"\u8BBE\u7F6E border \u5C5E\u6027\uFF0C\u662F\u5426\u663E\u793A\u8FB9\u6846\u3002(\u53EA\u5728type!=button\u65F6\u6709\u6548)",border:!0,components:[{demo:[{label:"\u8BED\u6587",value:"chinese"},{label:"\u6570\u5B66",value:"math"},{label:"\u82F1\u8BED",value:"english"},{label:"\u79D1\u5B66",value:"science"}],active:["chinese"]}],template:`    <template>
      <div>
        <w-checkbox-group v-model:checked="course" :border="true">
          <w-checkbox value="chinese">\u8BED\u6587</w-checkbox>
          <w-checkbox value="math">\u6570\u5B66</w-checkbox>
          <w-checkbox value="english">\u82F1\u8BED</w-checkbox>
          <w-checkbox value="science">\u79D1\u5B66</w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            course: ["chinese"]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const course = ref(["chinese"]);
          return { course };
        }
      })
    <\/script>`},{title:"\u8282\u70B9\u5F62\u72B6",desc:"\u8BBE\u7F6E circle \u5C5E\u6027\uFF0C\u8282\u70B9\u5F62\u72B6\u662F\u5426\u4E3A\u5706\u5F62\u3002(\u53EA\u5728type!=button\u65F6\u6709\u6548)",circle:!1,demo:[{label:"\u8BED\u6587",value:"chinese"},{label:"\u6570\u5B66",value:"math"},{label:"\u82F1\u8BED",value:"english"}],components:[{active:["chinese"]},{active:["chinese"],border:!0}],template:`    <template>
      <div>
        <div class='options'>
          \u5F62\u72B6\uFF1A
          <w-switch v-model="circle" text-inline 
            open-text="\u5706\u5F62" off-text="\u65B9\u5F62" :open-value="true" :off-value="false" />
        </div>
        <div>
          <w-checkbox-group v-for="group in list" :key="group"
            v-model:checked="group.checked" :circle="circle">
            <w-checkbox v-for="item in courseList" :key="item.value" :value="item.value">
              {{ item.label }}
            </w-checkbox>
          </w-checkbox-group>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { checked: 'chinese' },
              { checked: 'chinese' }
            ]
            courseList: [
              { label: '\u8BED\u6587', value: 'chinese' },
              { label: '\u6570\u5B66', value: 'math' },
              { label: '\u82F1\u8BED', value: 'english' }
            ],
            circle: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const list = ref([
                  { checked: 'chinese' },
                  { checked: 'chinese' }
                ]),
                courseList = ref([
                  { label: '\u8BED\u6587', value: 'chinese' },
                  { label: '\u6570\u5B66', value: 'math' },
                  { label: '\u82F1\u8BED', value: 'english' }
                ]),
                circle = ref(false);
          return { list, courseList, circle };
        }
      })
    <\/script>`},{title:"\u6309\u94AE\u6837\u5F0F",desc:"\u8BBE\u7F6E type='button'\uFF0C\u4E3A\u6309\u94AE\u6837\u5F0F\u7684\u591A\u9009\u6846\u7EC4\u3002",isStyle:!0,demo:[{label:"\u7F8E\u98DF",value:"\u7F8E\u98DF"},{label:"\u4E09\u519C",value:"\u4E09\u519C"},{label:"\u519B\u4E8B",value:"\u519B\u4E8B"},{label:"\u7EFC\u827A",value:"\u7EFC\u827A"},{label:"\u52A8\u6F2B",value:"\u52A8\u6F2B"}],components:[{active:["\u7F8E\u98DF"],type:"button"},{active:["\u7F8E\u98DF"],type:"button",border:!0}],template:`    <template>
      <div>
        <w-checkbox-group v-for="group in list" :key="group"
          v-model:checked="group.checked" type="button" :border="group.border">
          <w-checkbox v-for="item in typeList" :value="item.value">
            {{ item.label }}
          </w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { checked: ['\u7F8E\u98DF'] },
              { checked: ['\u7F8E\u98DF'], border: true }
            ],
            typeList: [
              { value: '\u7F8E\u98DF', label: '\u7F8E\u98DF' },
              { value: '\u4E09\u519C', label: '\u4E09\u519C' },
              { value: '\u519B\u4E8B', label: '\u519B\u4E8B' },
              { value: '\u7EFC\u827A', label: '\u7EFC\u827A' },
              { value: '\u52A8\u6F2B', label: '\u52A8\u6F2B' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            { checked: ['\u7F8E\u98DF'] },
            { checked: ['\u7F8E\u98DF'], border: true }
          ]);
          const typeList = [
            { value: '\u7F8E\u98DF', label: '\u7F8E\u98DF' },
            { value: '\u4E09\u519C', label: '\u4E09\u519C' },
            { value: '\u519B\u4E8B', label: '\u519B\u4E8B' },
            { value: '\u7EFC\u827A', label: '\u7EFC\u827A' },
            { value: '\u52A8\u6F2B', label: '\u52A8\u6F2B' }
          ];
          return{videoType1,videoType2,list};
        }
      })
    <\/script>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528\u591A\u9009\u6846\u3002",isDisabled:!0,disabled:!0,demo:[{label:"\u7BEE\u7403",value:"\u7BEE\u7403"},{label:"\u6392\u7403",value:"\u6392\u7403"},{label:"\u8DB3\u7403",value:"\u8DB3\u7403"}],components:[{type:"button",active:["\u7BEE\u7403"]},{type:"button",border:!0,active:["\u7BEE\u7403"]},{active:["\u7BEE\u7403"],border:!0},{active:["\u7BEE\u7403"]}],template:`    <template>
      <div class='options'>
        <span>\u662F\u5426\u7981\u7528\uFF1A</span>
        <w-switch v-model="disabled" text-inline open-text="\u662F" off-text="\u5426" />
      </div>
      <div> 
        <w-checkbox-group v-for="group in list" :key="group"
          v-model:checked="group.checked" :disabled="disabled"
          :type="group.type" :border="group.border">
          <w-checkbox v-for="item in sportList" :key="item.value"
            :value="item.value">
            {{ item.label }}
          </w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            list: [
              { checked: '\u7BEE\u7403', type: 'button' },
              { checked: '\u7BEE\u7403', type: 'button', border: true },
              { checked: '\u7BEE\u7403', border: true  },
              { checked: '\u7BEE\u7403'}
            ]
            sportList: [
              { value:'basketball', label: '\u7BEE\u7403' },
              { value:'volleyball', label: '\u6392\u7403' },
              { value:'football', label: '\u8DB3\u7403' }
            ],
            disabled: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list=ref([
                  { checked: '\u7BEE\u7403', type: 'button' },
                  { checked: '\u7BEE\u7403', type: 'button', border: true },
                  { checked: '\u7BEE\u7403', border: true  },
                  { checked: '\u7BEE\u7403'}
                ]),
                sportList = [
                  { value:'basketball', label: '\u7BEE\u7403' },
                  { value:'volleyball', label: '\u6392\u7403' },
                  { value:'football', label: '\u8DB3\u7403' }
                ],
                disabled = ref(true);
          return { list, sportList, disabled };
        }
      })
    <\/script>`},{title:"\u4FEE\u6539\u56FE\u6807",desc:"\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u591A\u9009\u6846\u7684\u56FE\u6807\u3002(type!='button'\u65F6\u6709\u6548)  \u8BBE\u7F6E simple \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7B80\u7EA6\u6A21\u5F0F\u3002",setIcon:!0,simple:!1,icon:"",demo:[{label:"\u676D\u5DDE",value:"\u676D\u5DDE"},{label:"\u4E0A\u6D77",value:"\u4E0A\u6D77"},{label:"\u6DEE\u5357",value:"\u6DEE\u5357"}],components:[{active:["\u676D\u5DDE"],border:!0},{active:["\u676D\u5DDE"]}],template:`   <template>
      <div class='options'>
        <div>
          <span>\u591A\u9009\u6846\u6A21\u5F0F\uFF1A</span>
          <w-switch style='margin-right:2em' v-model='simple' 
            text-inline open-text='\u7B80\u7EA6' off-text='\u9ED8\u8BA4' />
        </div>
        <div>
          <span>\u8282\u70B9\u56FE\u6807\uFF1A</span>
          <w-radio-group v-model:checked='icon' border type='button'>
            <w-radio value=''>\u221A</w-radio>
            <w-radio value='love-s'>\u2764</w-radio>
            <w-radio value='zan-s'>\u{1F44D}</w-radio>
            <w-radio value='star-s'>\u2B50</w-radio>
            <w-radio value='loading'>\u26AA</w-radio>  
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-checkbox-group v-for="group in list" :key="group"
          v-model:checked="group.checked" :border="group.border" 
          :icon="icon" :simple="simple">
          <w-checkbox v-for="item in list" :key="item.value" :value="item.value">
            {{ item.label }}
          </w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { checked:[] },
              { checked:[] }
            ]
            placeList: [
              {value:'\u676D\u5DDE',label:'\u676D\u5DDE'},
              {value:'\u4E0A\u6D77',label:'\u4E0A\u6D77'},
              {value:'\u6DEE\u5357',label:'\u6DEE\u5357'}
            ],
            simple: false,
            icon: ''
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
                  { checked:[] },
                  { checked:[] }
                ]),
                placeList = [
                  { value:'\u676D\u5DDE', label:'\u676D\u5DDE' },
                  { value:'\u4E0A\u6D77', label:'\u4E0A\u6D77' },
                  { value:'\u6DEE\u5357', label:'\u6DEE\u5357' }
                ],
                simple: false,
                icon: ''
          return { list, placeList, simple, icon };
        }
      })
    <\/script>`},{title:"\u5C3A\u5BF8\u548C\u989C\u8272",desc:"\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u591A\u9009\u6846\u7684\u5C3A\u5BF8\u3002(large\u3001small)  \u8BBE\u7F6E fill \u5C5E\u6027\uFF0C\u4FEE\u6539\u5355\u9009\u6309\u94AE\u7684\u80CC\u666F\u8272 / \u8FB9\u6846\u8272 / \u6587\u672C\u8272\u3002",isSize:!0,fill:"#007fff",size:"",demo:[{label:"\u7F8A\u8089",value:"sheep"},{label:"\u725B\u8089",value:"beef"},{label:"\u732A\u8089",value:"pig"},{label:"\u9E21\u8089",value:"chicken"}],components:[{type:"button",active:["sheep"]},{type:"button",border:!0,active:["sheep"]},{border:!0,active:["sheep"]},{active:["sheep"]}],template:`    <template>
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
      </div> 
      <div>
        <w-checkbox-group v-for="group in list" :key="group"
          v-model:checked="group.checked"  :type="group.type" 
          :border="group.border" :size="size" :fill="fill">
          <w-checkbox v-for="item in menuList" :key="item.value" :value="item.value">
            {{ item.labe l}}
          </w-checkbox>
        </w-checkbox-group>
      </div>
    <template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            size:'',
            fill: '#007fff',
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
          return { size, fill, list, menuList };
        }
      })
    <\/script>`},{title:"\u5782\u76F4\u6392\u5217",desc:"\u591A\u9009\u6846\u7EC4\u8BBE\u7F6E vertical \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u5782\u76F4\u6392\u5217\u3002(\u9ED8\u8BA4\u4E0D\u5782\u76F4\u6392\u5217)",vertical:!0,size:"",isSize:!0,demo:[{label:"\u5FAE\u4FE1",value:"wechat"},{label:"\u652F\u4ED8\u5B9D",value:"alipay"},{label:"QQ",value:"qq"}],components:[{type:"button",active:["wechat"]},{type:"button",border:!0,active:["wechat"]},{border:!0,active:["wechat"]},{active:["wechat"]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u5C3A\u5BF8\uFF1A</span>
          <w-radio-group v-model:checked="size">
            <w-radio v-for="item in sizeList" :key="item.value" :value="item.value">
              {{ item.label }}
            </w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-checkbox-group v-for="group in list" :key="group"
          v-model:checked="group.checked" :type="group.type" 
          :border="group.border" :size="size" :fill="fill">
          <w-checkbox v-for="item in payList" :key="item.value" :value="item.value">
            {{ item.label }}
          </w-radicheckboxo>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { checked: ['wechat'] },
              { checked: ['wechat'] }
            ]
            payList: [
              { value: 'wechat', label: '\u5FAE\u4FE1' },
              { value: 'alipay', label: '\u652F\u4ED8\u5B9D' },
              { value: 'qq', label: 'QQ' }
            ],
            size: '',
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
          const list = ref([
                  { checked:['wechat'] },
                  { checked:['wechat'] }
                ]),
                payList = [
                  { value: 'wechat', label: '\u5FAE\u4FE1' },
                  { value: 'alipay', label: '\u652F\u4ED8\u5B9D' },
                  { value: 'qq', label: 'QQ' }
                ],
                size = ref('');
                sizeList = [
                  { label:'\u5927', value: 'large' },
                  { label:'\u9ED8\u8BA4', value: '' },
                  { label:'\u5C0F', value: 'small' },
                  { label:'24px', value: '24px' },
                  { label:'30px', value: 30 }
                ];
          return { list, payList, size, sizeList };
        }
      })
    <\/script>`},{title:"\u53EF\u9009\u6570\u91CF\u7684\u9650\u5236",desc:"\u8BBE\u7F6E max \u5C5E\u6027\uFF0C\u4FEE\u6539\u6700\u591A\u53EF\u9009\u4E2D checkbox \u7684\u6570\u91CF\u3002 \u8BBE\u7F6E min \u5C5E\u6027\uFF0C\u4FEE\u6539\u6700\u5C11\u53EF\u9009\u4E2D checkbox \u7684\u6570\u91CF (\u9ED8\u8BA4\u90FD\u4E0D\u9650\u5236)\u3002",max:2,min:1,components:[{demo:[{label:"\u8BED\u6587",value:"chinese"},{label:"\u6570\u5B66",value:"math"},{label:"\u82F1\u8BED",value:"english"},{label:"\u79D1\u5B66",value:"science"}],active:[],border:!0}],template:`    <template>
      <div class='options'>
        <div>
          \u6700\u591A\u53EF\u9009\uFF1A
          <w-radio-group v-model:checked="max" border type="button">
            <w-radio :value="2">2</w-radio>
            <w-radio :value="3">3</w-radio>
          </w-radio-group>
        </div>
        <div>
          \u6700\u5C11\u53EF\u9009\uFF1A
          <w-radio-group v-model:checked="min" border type="button">
            <w-radio :value="1">1</w-radio>
            <w-radio :value="2">2</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-checkbox-group v-model:checked="course" border :max="max" :min="min">
          <w-checkbox v-for="item in courseList" :key="item.value" value="item.value">
            {{ item.label }}
          </w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            course: [],
            max: 2,
            min: 1
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const course = ref(['chinese','science']),
                max = ref(2),
                min = ref(1);
          return { course, max, min };
        }
      })
    <\/script>`},{title:"\u5168\u9009",desc:"indeterminate \u5C5E\u6027\u7528\u4E8E\u5168\u9009\u65F6\u663E\u793A\u7684\u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236\u3002",isIndeterminate:!0,components:[{demo:[{label:"\u5DF4\u4E1C\u725B\u8089",value:"spiced-beef"},{label:"\u9738\u738B\u80A5\u9E21",value:"bawang-chicken"},{label:"\u767D\u70E9\u87F9\u8089",value:"crab-meat-in-white-sauce"},{label:"\u84B8\u767D\u9E3D",value:"steamed-pigeon"},{label:"\u9999\u83C7\u6252\u65F6\u852C",value:"gilled-vegetables-with-mushrooms"},{label:"\u8FDE\u5B50\u767E\u5408\u6C64",value:"lianzi-baihe-decoction"}],active:["spiced-beef"],border:!0,indeterminate:!0}],template:`    <template>
      <div class='options'>
        <w-checkbox v-model:checked='isCheckAll' :indeterminate='indeterminate' @change='changeIsCheckAll'>
          \u5168\u9009
        </w-checkbox>
        {{checkbox}}
      </div>
      <div>
        <w-checkbox-group v-model:checked='checkbox' border @change='change'>
          <w-checkbox v-for='item in list' :value='item.value'>{{item.label}}</w-checkbox>
        </w-checkbox-group>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            checkbox: ['spiced-beef'],
            isCheckAll: false,
            indeterminate: true,
            list: [
              { label: '\u5DF4\u4E1C\u725B\u8089', value: 'spiced-beef' },
              { label: '\u9738\u738B\u80A5\u9E21', value: 'bawang-chicken' },
              { label: '\u767D\u70E9\u87F9\u8089', value: 'crab-meat-in-white-sauce' },
              { label: '\u84B8\u767D\u9E3D', value: 'steamed-pigeon' },
              { label: '\u9999\u83C7\u6252\u65F6\u852C', value: 'gilled-vegetables-with-mushrooms' },
              { label: '\u8FDE\u5B50\u767E\u5408\u6C64', value: 'lianzi-baihe-decoction' }
            ]
          }
        },
        methods: {
          changeIsCheckAll() {
            this.checkbox = this.checkAll ? this.list.map(item => item.value) : [];
            this.indeterminate = false;
          },
          change() {
            const checkedLength = this.checkbox.length;
            this.isCheckAll = checkedLength === this.list.length;
            this.indeterminate = checkedLength > 0 && checkedLength < this.list.length;
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const checkbox = ref(['spiced-beef']),
              isCheckAll = ref(false),
              indeterminate = ref(true),
              list = [
                { label: '\u5DF4\u4E1C\u725B\u8089', value: 'spiced-beef' },
                { label: '\u9738\u738B\u80A5\u9E21', value: 'bawang-chicken' },
                { label: '\u767D\u70E9\u87F9\u8089', value: 'crab-meat-in-white-sauce' },
                { label: '\u84B8\u767D\u9E3D', value: 'steamed-pigeon' },
                { label: '\u9999\u83C7\u6252\u65F6\u852C', value: 'gilled-vegetables-with-mushrooms' },
                { label: '\u8FDE\u5B50\u767E\u5408\u6C64', value: 'lianzi-baihe-decoction' }
              ],
              changeIsCheckAll = () => {
                checkbox.value = checkAll.value ? list.map(item => item.value) : [];
                indeterminate.value = false;
              },
              change = () => {
                const checkedLength = checkbox.value.length;
                isCheckAll.value = checkedLength === list.length;
                indeterminate.value = checkedLength > 0 && checkedLength < list.length;
              };
          return { 
            checkbox, isCheckAll, indeterminate,
            list, changeIsCheckAll, change
          };
        }
      })
    <\/script>`}]),q={attribute:[{name:"checked",desc:"\u7ED1\u5B9A\u503C (\u53EA\u5728\u5355\u72EC\u4F7F\u7528 Checkbox \u65F6\u6709\u6548)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"value",desc:"\u6307\u5B9A\u5F53\u524D\u9009\u9879\u7684\u503C (\u53EA\u6709\u5728 CheckboxGroup \u65F6\u6709\u6548)",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u5F53\u524D\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"Checkbox \u7684\u5C3A\u5BF8\u3002\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u65F6 large\u3001small\u300120px\u30011.5rem\u30012em \u7B49\uFF0C\u4E3A\u6570\u5B57\u7C7B\u578B\u65F6\u5355\u4F4D\u9ED8\u8BA4\u662Fpx",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u81EA\u5B9A\u4E49Checkbox\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"circle",desc:"\u662F\u5426\u4E3A\u5706\u5F62",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"border",desc:"\u662F\u5426\u663E\u793A\u8FB9\u6846",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"simple",desc:"\u662F\u5426\u7B80\u7EA6\u6A21\u5F0F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"indeterminate",desc:"\u5168\u9009",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"change",desc:"\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",callbackParams:"\u9009\u4E2D\u7684 CheckBox \u7684 value \u503C"}]},Q={attribute:[{name:"checked",desc:"\u7ED1\u5B9A\u503C\uFF0C\u9700\u8981\u4F7F\u7528 v-model: \u53CC\u5411\u7ED1\u5B9A\uFF0C\u5426\u5219\u6539\u53D8\u72B6\u6001\u65F6\u5E76\u4E0D\u80FD\u6539\u53D8\u4F7F\u7528\u8005\u7684\u6570\u636E",type:"array",optional:"\u2014\u2014",default:[]},{name:"type",desc:"\u5BF9 CheckboxGroup \u6DFB\u52A0\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A button \u6216\u4E0D\u586B\uFF0C\u4E3A button \u65F6\u4F7F\u7528\u6309\u94AE\u6837\u5F0F",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"vertical",desc:"\u7EC4\u5408\u6A21\u5F0F\u5782\u76F4\u6392\u5217",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u662F\u5426\u7981\u7528 CheckboxGroup \u4E0B\u7684\u6240\u6709 CheckBox",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"CheckboxGroup \u5185\u6240\u6709 Checkbox \u7684\u5C3A\u5BF8\u3002\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u65F6 large\u3001small\u300120px\u30011.5rem\u30012em \u7B49\uFF0C\u4E3A\u6570\u5B57\u7C7B\u578B\u65F6\u5355\u4F4D\u9ED8\u8BA4\u662Fpx",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"circle",desc:"\u662F\u5426\u4E3A\u5706\u5F62",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"border",desc:"\u662F\u5426\u663E\u793A\u8FB9\u6846",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"fill",desc:"Checkbox \u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#007fff"},{name:"icon",desc:"\u81EA\u5B9A\u4E49 Checkbox \u56FE\u6807 (type!=button\u65F6\u6709\u6548)",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"simple",desc:"\u662F\u5426\u7B80\u7EA6\u6A21\u5F0F (type!=button\u65F6\u6709\u6548)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"max",desc:"\u53EF\u9009\u4E2D Checkbox \u7684\u6700\u591A\u6570\u91CF",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"min",desc:"\u53EF\u9009\u4E2D Checkbox \u7684\u6700\u5C11\u6570\u91CF",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"}]};const T={class:"checkbox-demo-list"},N={key:0,class:"btns"},P=l("\u6E05\u7A7A"),S={key:1,class:"btns"},O=l(" \u5F62\u72B6\uFF1A "),$={key:2,class:"btns"},H=l(" \u662F\u5426\u7981\u7528\uFF1A "),M={key:3,class:"btns"},R=l(" \u591A\u9009\u6846\u6A21\u5F0F\uFF1A "),J=l(" \u8282\u70B9\u56FE\u6807\uFF1A "),K=l("\u221A"),W=l("\u2764"),X=l("\u{1F44D}"),Y=l("\u2B50"),Z=l("\u26AA"),j={key:4,class:"btns"},ee=l(" \u5C3A\u5BF8\uFF1A "),te=l("\u5927"),le=l("\u9ED8\u8BA4"),ae=l("\u5C0F"),oe=l("24px"),ce=l("30px"),ie={key:0},ne=l(" \u989C\u8272\uFF1A "),se=["onUpdate:modelValue"],ue={key:5,class:"btns"},de=l(" \u6700\u591A\u53EF\u9009\uFF1A "),re=l("\u4E0D\u9650"),pe=l("2"),be=l("3"),ve=l(" \u6700\u5C11\u53EF\u9009\uFF1A "),he=l("\u4E0D\u9650"),me=l("1"),fe=l("2"),ke=u("br",null,null,-1),xe={key:6,class:"btns"},ge=l(" \u5168\u9009 "),_e=l("CheckboxGroup"),Ce=D({setup(we){const m=I(!1),L=p=>{p.active=m.value?p.demo.map(b=>b.value):[],p.indeterminate=!1},C=(p,b,d)=>{if(b){const v=d.active.length;m.value=v===d.demo.length,d.indeterminate=v>0&&v<d.demo.length}else console.log("change..............",p)};return(p,b)=>{const d=r("w-checkbox"),v=r("w-button"),g=r("w-switch"),i=r("w-radio"),f=r("w-radio-group"),F=r("w-checkbox-group"),U=r("DemoItem"),A=r("TableList");return c(),n("div",T,[(c(!0),n(h,null,k(y(G),(e,_)=>(c(),w(U,{item:e,key:e.title},{default:o(()=>[e.onlyOne?(c(!0),n(h,{key:0},k(e.components,t=>(c(),n("div",{key:t},[a(d,{checked:t.value,"onUpdate:checked":s=>t.value=s,border:t.border,simple:t.simple,fill:"gold",icon:t.icon,size:e.size,onChange:C},{default:o(()=>[l(x(t.label),1)]),_:2},1032,["checked","onUpdate:checked","border","simple","icon","size"])]))),128)):(c(),n(h,{key:1},[_===1?(c(),n("div",N,[a(v,{onClick:t=>e.components[0].active=[]},{default:o(()=>[P]),_:2},1032,["onClick"])])):_===3?(c(),n("div",S,[u("div",null,[O,a(g,{modelValue:e.circle,"onUpdate:modelValue":t=>e.circle=t,"text-inline":"","open-text":"\u5706\u5F62","off-text":"\u65B9\u5F62","open-value":!0,"off-value":!1},null,8,["modelValue","onUpdate:modelValue"])])])):e.isDisabled?(c(),n("div",$,[u("div",null,[H,a(g,{modelValue:e.disabled,"onUpdate:modelValue":t=>e.disabled=t,"text-inline":"","open-text":"\u662F","off-text":"\u5426"},null,8,["modelValue","onUpdate:modelValue"])])])):e.setIcon?(c(),n("div",M,[u("div",null,[R,a(g,{modelValue:e.simple,"onUpdate:modelValue":t=>e.simple=t,style:{"margin-right":"2em"},"text-inline":"","open-text":"\u7B80\u7EA6","off-text":"\u9ED8\u8BA4"},null,8,["modelValue","onUpdate:modelValue"])]),u("div",null,[J,a(f,{checked:e.icon,"onUpdate:checked":t=>e.icon=t,border:"",type:"button"},{default:o(()=>[a(i,{value:""},{default:o(()=>[K]),_:1}),a(i,{value:"love-s"},{default:o(()=>[W]),_:1}),a(i,{value:"zan-s"},{default:o(()=>[X]),_:1}),a(i,{value:"star-s"},{default:o(()=>[Y]),_:1}),a(i,{value:"loading"},{default:o(()=>[Z]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])])):e.isSize?(c(),n("div",j,[u("div",null,[ee,a(f,{checked:e.size,"onUpdate:checked":t=>e.size=t,class:"group-size"},{default:o(()=>[a(i,{value:"large"},{default:o(()=>[te]),_:1}),a(i,{value:""},{default:o(()=>[le]),_:1}),a(i,{value:"small"},{default:o(()=>[ae]),_:1}),a(i,{value:"24px"},{default:o(()=>[oe]),_:1}),a(i,{value:30},{default:o(()=>[ce]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),_===7?(c(),n("div",ie,[ne,B(u("input",{"onUpdate:modelValue":t=>e.fill=t,type:"color"},null,8,se),[[E,e.fill]])])):z("",!0)])):e.max||e.max===0?(c(),n("div",ue,[u("div",null,[de,a(f,{checked:e.max,"onUpdate:checked":t=>e.max=t,border:"",type:"button"},{default:o(()=>[a(i,{value:0},{default:o(()=>[re]),_:1}),a(i,{value:2},{default:o(()=>[pe]),_:1}),a(i,{value:3},{default:o(()=>[be]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),u("div",null,[ve,a(f,{checked:e.min,"onUpdate:checked":t=>e.min=t,border:"",type:"button"},{default:o(()=>[a(i,{value:0},{default:o(()=>[he]),_:1}),a(i,{value:1},{default:o(()=>[me]),_:1}),a(i,{value:2},{default:o(()=>[fe]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),l(" "+x(e.components[0].active)+" ",1),ke])):e.isIndeterminate?(c(),n("div",xe,[a(d,{checked:m.value,"onUpdate:checked":b[0]||(b[0]=t=>m.value=t),indeterminate:e.components[0].indeterminate,onChange:t=>L(e.components[0])},{default:o(()=>[ge]),_:2},1032,["checked","indeterminate","onChange"]),u("span",null,x(e.components[0].active),1)])):z("",!0),(c(!0),n(h,null,k(e.components,t=>(c(),w(F,{key:t,checked:t.active,"onUpdate:checked":s=>t.active=s,disabled:e.disabled,type:t.type,icon:t.icon||e.icon,border:t.border||e.border,size:e.size||t.size,vertical:e.vertical,fill:e.fill,max:e.max,min:e.min,simple:t.simple||e.simple,circle:e.circle,onChange:s=>C(s,e.isIndeterminate,e.components[0])},{default:o(()=>[(c(!0),n(h,null,k(t.demo||e.demo,s=>(c(),w(d,{key:s,value:s.value,disabled:s.disabled},{default:o(()=>[l(x(s.label),1)]),_:2},1032,["value","disabled"]))),128))]),_:2},1032,["checked","onUpdate:checked","disabled","type","icon","border","size","vertical","fill","max","min","simple","circle","onChange"]))),128))],64))]),_:2},1032,["item"]))),128)),a(A,{data:y(q)},null,8,["data"]),a(A,{data:y(Q)},{default:o(()=>[_e]),_:1},8,["data"])])}}});export{Ce as default};
