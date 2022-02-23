import{r as C,d as k,m as d,a as n,o as t,g as o,H as c,I as v,c as l,w as p,b as u,k as f,z as m,P as A,y as x,R as w,h as I}from"./vendor.c0366ad2.js";const R=C([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A Input \u7684\u503C\u3002",components:[{value:""}],template:`    <template>
      <w-input v-model="value" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value: ""
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value = ref("");
          return { value };
        }
      })
    <\/script>`},{title:"\u6587\u672C\u57DF",desc:"\u8BBE\u7F6E type \u5C5E\u6027\u7684\u503C\u4E3A textarea\uFF0C\u5373\u4E3A\u6587\u672C\u57DF\u3002\u8BBE\u7F6E rows \u5C5E\u6027\u4FEE\u6539\u6587\u672C\u57DF\u5C55\u793A\u7684\u884C\u6570\u3002",rows:2,components:[{value:"",type:"textarea",title:"\u9ED8\u8BA4\u4E0D\u80FD\u6539\u53D8\u5C3A\u5BF8"},{value:"",type:"textarea",resize:"horizontal",title:"\u53EA\u80FD\u6539\u53D8\u5BBD\u5EA6"},{value:"",type:"textarea",resize:"vertical",title:"\u53EA\u80FD\u6539\u53D8\u9AD8\u5EA6"},{value:"",type:"textarea",resize:"both",title:"\u5BBD\u5EA6\u9AD8\u5EA6\u90FD\u53EF\u4EE5\u6539\u53D8"}],template:`    <template>
      <w-input v-for="item in inputs" v-model="item.value" :key="item" 
        type="textarea" :resize="item.resize" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            inputs: [
              { value: '' },
              { value: '', resize: 'horizontal' },
              { value: '', resize: 'vertical' },
              { value: '', resize: 'both' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const inputs = reactive([
            { value:'', type: 'textarea' },
            { value:'', type: 'textarea', resize: 'vertical' },
            { value:'', type: 'textarea', resize: 'both' }
          ]);
          return { inputs };
        }
      })
    <\/script>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528 Input\u3002",disabled:!0,components:[{value:"\u7981\u7528\u5355\u884C\u6587\u672C\u6846"},{value:"\u7981\u7528\u591A\u884C\u6587\u672C\u6846",type:"textarea"}],template:`    <template>
      <div>
        <w-input v-model="value1" disabled />
        <w-input v-model="value2" disabled type="textarea" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: '\u7981\u7528\u5355\u884C\u6587\u672C\u6846',
            value2: '\u7981\u7528\u591A\u884C\u6587\u672C\u6846'
          }
        }
      }
    <\/script>`,compositionApi:`
      import {ref,defineComponent} from 'vue';
      export default defineComponent({
        setup(){
          const value1=ref('\u7981\u7528\u5355\u884C\u6587\u672C\u6846');
          const value2=ref('\u7981\u7528\u591A\u884C\u6587\u672C\u6846');
          return{value1,value2};
        }
      })
    <\/script>`},{title:"\u53EF\u6E05\u7A7A",desc:"\u8BBE\u7F6E clearable \u5C5E\u6027\uFF0C\u4FEE\u6539\u5373\u662F\u5426\u53EF\u6E05\u7A7A\u503C\u3002 (\u9ED8\u8BA4\u4E0D\u53EF\u6E05\u7A7A)",clearable:!0,components:[{value:"\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807"},{value:"\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807",type:"textarea"}],template:`   <template>
      <div>
        <w-input v-model="value1" clearable />
        <w-input v-model="value2" clearable type="textarea" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: '\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807',
            value2: '\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref('\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807');
          const value2 = ref('\u9F20\u6807\u60AC\u6D6E\u5728\u6587\u672C\u6846\u5185\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6E05\u7A7A\u56FE\u6807');
          return { value1, value2 };
        }
      })
    <\/script>`},{title:"\u5BC6\u7801\u6846",desc:"\u8BBE\u7F6E show-password \u5C5E\u6027\uFF0C\u5F97\u5230\u4E00\u4E2A\u53EF\u5207\u6362\u663E\u793A\u9690\u85CF\u503C\u7684\u5BC6\u7801\u6846\uFF0C\u53EA\u9002\u7528\u4E8E type \u4E3A text \u7684 Input\u3002",showPassword:!0,components:[{value:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],template:`    <template>
      <w-input v-model="value" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" show-password />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value: ''
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const value = ref('');
          return { value };
        }
      })
    <\/script>`},{title:"\u53EF\u81EA\u9002\u5E94\u9AD8\u5EA6",desc:"\u8BBE\u7F6E autosize \u5C5E\u6027\uFF0C\u8BA9\u591A\u884C\u6587\u672C\u57DF\u7684\u9AD8\u5EA6\u80FD\u591F\u6839\u636E\u6587\u672C\u5185\u5BB9\u81EA\u52A8\u8FDB\u884C\u8C03\u6574\uFF0C\u5E76\u4E14 autosize \u8FD8\u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002",clearable:!0,components:[{value:"",type:"textarea",autosize:!0,placeholder:"\u6CA1\u6709\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u9650\u5236\u7684"},{value:"",type:"textarea",autosize:{minRows:3},placeholder:"\u53EA\u8BBE\u7F6E\u4E86\u6700\u5C0F\u884C\u6570\uFF0C\u4E3A3\u884C"},{value:"",type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"\u6700\u5C0F\u884C\u6570\u4E3A4\u884C\uFF0C\u6700\u5927\u884C\u6570\u4E3A6\u884C"}],template:`    <template>
      <w-input v-for="item in inputs" v-model="item.value" :key="item" :autosize="item.autosize" 
        type="textarea" placeholder="item.value" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            inputs: [
              {
                value: '',
                type: 'textarea',
                autosize: true,
                placeholder: '\u6CA1\u6709\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u9650\u5236\u7684'
              },
              {
                value: '',
                type: 'textarea',
                autosize: { minRows: 3 },
                placeholder: '\u53EA\u8BBE\u7F6E\u4E86\u6700\u5C0F\u884C\u6570\uFF0C\u4E3A3\u884C'
              },
              {
                value: '',
                type: 'textarea',
                autosize: { minRows: 4, maxRows: 6},
                placeholder: '\u6700\u5C0F\u884C\u6570\u4E3A4\u884C\uFF0C\u6700\u5927\u884C\u6570\u4E3A6\u884C'
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const inputs = reactive([
            {
              value: '',
              type: 'textarea',
              autosize: true,
              placeholder: '\u6CA1\u6709\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u9650\u5236\u7684'
            },
            {
              value: '',
              type: 'textarea',
              autosize: { minRows: 3 },
              placeholder: '\u53EA\u8BBE\u7F6E\u4E86\u6700\u5C0F\u884C\u6570\uFF0C\u4E3A3\u884C'
            },
            {
              value: '',
              type: 'textarea',
              autosize: { minRows: 4, maxRows: 6 },
              placeholder: '\u6700\u5C0F\u884C\u6570\u4E3A4\u884C\uFF0C\u6700\u5927\u884C\u6570\u4E3A6\u884C'
            }
          ]);
          return { inputs };
        }
      })
    <\/script>`},{title:"\u663E\u793A\u6570\u91CF\u548C\u957F\u5EA6\u9650\u5236",desc:"\u8BBE\u7F6E show-limit \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u5C55\u793A\u5B57\u6570\u7EDF\u8BA1\u3002 maxlength \u548C minlength \u662F\u539F\u751F\u5C5E\u6027\uFF0C\u7528\u6765\u9650\u5236\u8F93\u5165\u6846\u7684\u5B57\u7B26\u957F\u5EA6\u3002",showLimit:!0,components:[{value:"",maxlength:10,showPassword:!0,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{value:"",type:"textarea",autosize:!0,placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00"},{value:"",type:"textarea",autosize:{minRows:3,maxRows:4},maxlength:40,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"}],template:`    <template>
      <w-input v-for="item in inputs" v-model="item.value" :key="item" show-limit :type="item.textarea" 
        :placeholder="item.placeholder" :autosize="item.autosize" :show-password="item.showPassword"  
        :max-length="item.maxlength" />
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            inputs: [
              { 
                value: '',
                maxlength: 10,
                showPassword: true,
                placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801'
              },
              {
                value: '',
                type: 'textarea',
                autosize: true,
                placeholder: '\u8BF7\u8F93\u5165\u7559\u8A00'
              },
              {
                value: '',
                type: 'textarea',
                autosize: { minRows: 3, maxRows: 4 },
                maxlength: 40,
                placeholder: '\u8BF7\u8F93\u5165\u5907\u6CE8'
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const inputs = reactive([
            { 
              value: '',
              maxlength: 10,
              showPassword: true,
              placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801'
            },
            {
              value: '',
              type: 'textarea',
              autosize: true,
              placeholder: '\u8BF7\u8F93\u5165\u7559\u8A00'
            },
            {
              value: '',
              type: 'textarea',
              autosize: { minRows: 3, maxRows: 4 },
              maxlength: 40,
              placeholder: '\u8BF7\u8F93\u5165\u5907\u6CE8'
            }
          ]);
          return { inputs };
        }
      })
    <\/script>`},{title:"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846",desc:"\u8BBE\u7F6E prefix-icon \u5C5E\u6027\uFF0C\u4FEE\u6539 Input \u7684\u524D\u7F6E\u56FE\u6807 (\u53EF\u7528\u63D2\u69FD #prefix \u81EA\u5B9A\u4E49\u524D\u7F6E\u56FE\u6807)\u3002\u8BBE\u7F6E suffix-icon \u5C5E\u6027\uFF0C\u4FEE\u6539 Input \u7684\u540E\u7F6E\u56FE\u6807 (\u53EF\u7528\u63D2\u69FD #suffix \u81EA\u5B9A\u4E49\u524D\u7F6E\u56FE\u6807)\u3002",components:[{value:"",prefixIcon:"user"},{value:"",suffixIcon:"search"},{value:"",prefixSlot:!0},{value:"",suffixSlot:!0},{value:"",suffixSlot:!0,button:!0}],template:`    <template>
      <div>
        <w-input v-model='value1' prefix-icon='user' />
        <w-input v-model='value2' suffix-icon='search' />
        <w-input v-model='value3'>
          <template #prefix>
            <w-icon name='user' />
          </template>
        </w-input>
        <w-input v-model='value4'>
          <template #suffix>
            <w-icon name='search' />
          </template>
        </w-input>
        <w-input v-model='value5'>
          <template #suffix>
            <w-button type='primary'>\u641C\u7D22</w-button>
          </template>
        </w-input>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref('');
                value2 = ref('');
                value3 = ref('');
                value4 = ref('');
                value5 = ref('');
          return { value1, value2, value3, value4, value5 };
        }
      })
    <\/script>`},{title:"\u590D\u5408\u578B\u8F93\u5165\u6846",desc:"\u8BBE\u7F6E prepend \u5C5E\u6027\uFF0C\u4FEE\u6539 Input \u7684\u524D\u7F6E\u5143\u7D20 (\u53EF\u7528\u63D2\u69FD #prepend \u81EA\u5B9A\u4E49\u524D\u7F6E\u5143\u7D20)\u3002\u8BBE\u7F6E append \u5C5E\u6027\uFF0C\u4FEE\u6539 Input \u7684\u540E\u7F6E\u5143\u7D20 (\u53EF\u7528\u63D2\u69FD #suffix \u81EA\u5B9A\u4E49\u524D\u7F6E\u5143\u7D20)\u3002",components:[{value:"",prepend:"http://"},{value:"",append:".com"},{value:"",prepend:"http://",append:".com"},{value:"",append:"search",icon:!0}],template:`    <template>
      <div>
        <w-input v-model='value1'>
          <template #prepend>http://</template>
        </w-input>
        <w-input v-model='value2'>
          <template #append>.com</template>
        </w-input>
        <w-input v-model='value3'>
          <template #prepend>http://</template>
          <template #append>.com</template>
        </w-input>
        <w-input v-model='value4'>
          <template #append>
            <w-icon name='search' />
          </template>
        </w-input>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
          }
        }
      }
    <\/script>`,compositionApi:`
      import {ref,defineComponent} from 'vue';
      export default defineComponent({
        setup() {
          const value1 = ref('');
                value2 = ref('');
                value3 = ref('');
                value4 = ref('');
          return { value1, value2, value3, value4 };
        }
      })
    <\/script>`}]),P={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"text\u3001textarea",default:"text"},{name:"maxlength",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5927\u8F93\u5165\u957F\u5EA6",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"minlength",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-limit",desc:"\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"placeholder",desc:"\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",type:"string",optional:"\u2014\u2014",default:"\u8BF7\u8F93\u5165\u5185\u5BB9"},{name:"clearable",desc:"\u662F\u5426\u53EF\u6E05\u7A7A",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-password",desc:"\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"size",desc:"\u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u53EA\u9002\u7528\u4E8E type='input'",type:"string",optional:"medium\u3001small",default:"\u2014\u2014"},{name:"prefix-icon",desc:"\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"suffix-icon",desc:"\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"prepend",desc:"\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u53EA\u9002\u7528\u4E8E type='input'",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"append",desc:"\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u53EA\u9002\u7528\u4E8E type='input'",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"rows",desc:"\u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u9002\u7528\u4E8E type='textarea'",type:"number",optional:"\u2014\u2014",default:2},{name:"autosize",desc:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u9002\u7528\u4E8E type='textarea'\uFF0C\u53EF\u4F20\u5165\u5BF9\u8C61\uFF0C\u5982 { minRows: 2, maxRows: 6 }",type:"object\u3001boolean",optional:"\u2014\u2014",default:!1},{name:"name",desc:"\u539F\u751F\u5C5E\u6027",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"readonly",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"resize",desc:"\u63A7\u5236\u5BBD\u9AD8\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",type:"string",optional:"none\u3001both\u3001horizontal\u3001vertical",default:"none"},{name:"autofocus",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"max",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5927\u503C\uFF0C\u53EA\u9002\u7528\u4E8E type=number",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"min",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u503C\uFF0C\u53EA\u9002\u7528\u4E8Etype=number",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"step",desc:"\u539F\u751F\u5C5E\u6027\uFF0C\u6B65\u957F\uFF0C\u53EA\u9002\u7528\u4E8Etype=number",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"prefix",desc:"\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807"},{name:"suffix",desc:"\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807"},{name:"prepend",desc:"\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u53EA\u9002\u7528\u4E8E type='input'"},{name:"append",desc:"\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u53EA\u9002\u7528\u4E8E type='input'"}],event:[{name:"focus",desc:"\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"(event: Event)"},{name:"blur",desc:"\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",callbackParams:"(event: Event)"},{name:"change",desc:"\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",callbackParams:"(value: string | 	number)"},{name:"input",desc:"\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1",callbackParams:"(value: string | number)"},{name:"clear",desc:"\u70B9\u51FB \u6E05\u7A7A \u56FE\u6807\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}],method:[{name:"focus",desc:"\u4F7F input \u83B7\u5F97\u7126\u70B9",params:"\u2014\u2014"},{name:"blur",desc:"\u4F7F input \u5931\u53BB\u7126\u70B9",params:"\u2014\u2014"}]};const V={class:"input-demo-list"},S={key:0,class:"options"},L=I("span",null,"\u663E\u793A\u884C\u6570\uFF1A",-1),D={key:0,class:"title"},B=x("\u641C\u7D22"),E={key:1},j=k({setup(N){const y=d(null);return d(!1),(U,F)=>{const h=n("w-input-number"),r=n("w-icon"),b=n("w-button"),_=n("w-input"),z=n("DemoItem"),g=n("TableList");return t(),o("div",V,[(t(!0),o(c,null,v(w(R),(a,s)=>(t(),l(z,{item:a,key:a.title},{default:p(()=>[s===1?(t(),o("div",S,[L,u(h,{modelValue:a.rows,"onUpdate:modelValue":e=>a.rows=e,size:"small"},null,8,["modelValue","onUpdate:modelValue"])])):f("",!0),(t(!0),o(c,null,v(a.components,e=>(t(),o("div",{key:e},[s===1?(t(),o("div",D,m(e.title),1)):f("",!0),u(_,{modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,ref_for:!0,ref:s===0?i=>y.value=i:"",type:e.type,disabled:a.disabled,clearable:a.clearable,"show-password":a.showPassword||e.showPassword,placeholder:e.placeholder,resize:e.resize,autosize:e.autosize,"show-limit":a.showLimit,minlength:e.minlength,maxlength:e.maxlength,rows:e.rows||a.rows,"prefix-icon":e.prefixIcon,"suffix-icon":e.suffixIcon},A({_:2},[e.prefixSlot?{name:"prefix",fn:p(()=>[u(r,{name:"user"})])}:void 0,e.suffixSlot?{name:"suffix",fn:p(()=>[e.button?(t(),l(b,{key:1,type:"primary"},{default:p(()=>[B]),_:1})):(t(),l(r,{key:0,name:"search"}))])}:void 0,e.prepend?{name:"prepend",fn:p(()=>[x(m(e.prepend),1)])}:void 0,e.append?{name:"append",fn:p(()=>[e.icon?(t(),l(r,{key:0,name:"search"})):(t(),o("span",E,m(e.append),1))])}:void 0]),1032,["modelValue","onUpdate:modelValue","type","disabled","clearable","show-password","placeholder","resize","autosize","show-limit","minlength","maxlength","rows","prefix-icon","suffix-icon"])]))),128))]),_:2},1032,["item"]))),128)),u(g,{data:w(P)},null,8,["data"])])}}});export{j as default};
