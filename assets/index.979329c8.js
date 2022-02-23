import{r as V,d as H,G as I,a as r,o as u,g as i,H as B,I as A,c as O,w as n,b as l,k as S,y as a,z as w,h as e,R as m,a4 as v}from"./vendor.c0366ad2.js";const G=L=>confirm("\u786E\u5B9A\u8981\u5173\u95ED\u62BD\u5C49 ?"),q=V([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E visible \u5C5E\u6027\uFF0C\u4FEE\u6539\u62BD\u5C49\u662F\u5426\u663E\u793A (\u9ED8\u8BA4\u4E0D\u663E\u793A)\u3002 <br>\u8BBE\u7F6E direction \u5C5E\u6027\uFF0C\u4FEE\u6539\u62BD\u5C49\u6253\u5F00\u7684\u65B9\u5411\u3002(\u9ED8\u8BA4\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00)",components:[{label:"\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00",direction:"ltr"},{label:"\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00",direction:"rtl"},{label:"\u4ECE\u4E0A\u5F80\u4E0B\u6253\u5F00",direction:"ttb"},{label:"\u4ECE\u4E0B\u5F80\u4E0A\u6253\u5F00",direction:"btt"}],template:`    <template>
      <w-button @click='bool1=true'>\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00</w-button>
      <w-button @click='bool2=true'>\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00</w-button>
      <w-drawer v-model:visible='bool1' title='\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00'>
        <div>\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00 \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
      <w-drawer v-model:visible='bool2' title='\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00' direction='rtl'>
        <div>\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00 \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            bool1: false,
            bool2: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const bool1 = ref(false);
          const bool2 = ref(false);
          return { bool1, bool2 };
        }
      })
    <\/script>`},{title:"\u4E0D\u6DFB\u52A0 Title",desc:"\u8BBE\u7F6E have-header \uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A header \u90E8\u5206\uFF0C\u5305\u62EC\u5173\u95ED\u6309\u94AE\u3002<br>\u8BBE\u7F6E draggable \u5C5E\u6027\uFF0C\u4FEE\u6539\u62BD\u5C49\u662F\u5426\u53EF\u62D6\u62FD\u3002(\u9ED8\u8BA4\u4E0D\u53EF\u62D6\u62FD)",draggable:!1,noHeader:!0,components:[{label:"\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00",direction:"ltr"},{label:"\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00",direction:"rtl"},{label:"\u4ECE\u4E0A\u5F80\u4E0B\u6253\u5F00",direction:"ttb"},{label:"\u4ECE\u4E0B\u5F80\u4E0A\u6253\u5F00",direction:"btt"}],template:`    <template>
      <div class='options'>
        <span>\u662F\u5426\u53EF\u62D6\u62FD\uFF1A</span>
        <w-switch v-model='draggable' open-text='\u662F' off-text='\u5426' text-inline />
      </div>
      <w-button @click='bool1=true'>\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00</w-button>
      <w-drawer v-model:visible='bool1' :draggable='draggable'>
        <div>\u4ECE\u5DE6\u5F80\u53F3\u6253\u5F00 \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
      <w-button @click='bool2=true'>\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00</w-button>
      <w-drawer v-model:visible='bool2' :draggable='draggable' direction='rtl'>
        <div>\u4ECE\u53F3\u5F80\u5DE6\u6253\u5F00 \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            bool1: false,
            bool2: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const bool1 = ref(false);
                bool2 = ref(false);
          return { bool1, bool2 };
        }
      })
    <\/script>`},{title:"\u591A\u79CD\u5C5E\u6027",desc:`\u8BBE\u7F6E modal \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42\u3002\u8BBE\u7F6E model-close \u5C5E\u6027\uFF0C\u4FEE\u6539\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED\u62BD\u5C49\u3002<br>
      \u8BBE\u7F6E show-close \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\u3002\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u62BD\u5C49\u7684\u5BBD\u5EA6\u6216\u8005\u9AD8\u5EA6\u3002`,components:[{label:"\u6CA1\u6709\u906E\u7F69\u5C42,\u5173\u95ED\u524D\u6709\u56DE\u8C03",modal:!1,beforeClose:G,destroyOnClose:!0},{label:"\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u5173\u95EDDrawer",modelClose:!1},{label:"\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE",showClose:!1},{label:"\u8BBE\u7F6Esize\u8C03\u6574\u5BBD\u3001\u9AD8",size:"60%"}],template:`    <template>
      <w-button @click='bool1=true'>\u6CA1\u6709\u906E\u7F69\u5C42,\u5173\u95ED\u524D\u6709\u56DE\u8C03</w-button>
      <w-drawer v-model:visible='bool1' :modal='false' :before-close='handleClose' title='\u6CA1\u6709\u906E\u7F69\u5C42,\u5173\u95ED\u524D\u6709\u56DE\u8C03\u2014\u2014\u6807\u9898\u90E8\u5206'>
        <div>\u6CA1\u6709\u906E\u7F69\u5C42,\u5173\u95ED\u524D\u6709\u56DE\u8C03 \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
      <w-button @click='bool2=true'>\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u5173\u95ED</w-button>
      <w-drawer v-model:visible='bool2' :model-close='false' title='\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u5173\u95ED\u2014\u2014\u6807\u9898\u90E8\u5206'>
        <div>\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u5173\u95ED \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
      <w-button @click='bool3=true'>\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE</w-button>
      <w-drawer v-model:visible='bool3' :show-close='false' title='\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE\u2014\u2014\u6807\u9898\u90E8\u5206'>
        <div>\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
      <w-button @click='bool4=true'>\u8BBE\u7F6Esize\u8C03\u6574\u5927\u5C0F</w-button>
      <w-drawer v-model:visible='bool4' size='60%' title='\u8BBE\u7F6Esize\u8C03\u6574\u5927\u5C0F\u2014\u2014\u6807\u9898\u90E8\u5206'>
        <div>\u8BBE\u7F6Esize\u8C03\u6574\u5927\u5C0F \u2014\u2014 \u5185\u5BB9</div>
      </w-drawer>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            bool1: false,
            bool2: false,
            bool3: false,
            bool4: false
          }
        },
        method: {
          handleClose(done) {
            const bool = confirm('\u786E\u5B9A\u8981\u5173\u95ED\u62BD\u5C49 ?');
            done(bool);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const bool1 = ref(false),
                bool2 = ref(false),
                bool3 = ref(false),
                bool4 = ref(false),
                handleClose = (done) => {
                  const bool = confirm('\u786E\u8BA4\u5173\u95ED \u4ECE\u4E0A\u5F80\u4E0B\u7684\u62BD\u5C49 ?');
                  done(bool);
                };
          return { bool1, bool2, bool3, bool4, handleClose };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u548C Dialog \u7EC4\u4EF6\u4E00\u6837, Drawer \u540C\u6837\u53EF\u4EE5\u5728\u5176\u5185\u90E8\u5D4C\u5957\u5404\u79CD\u4E30\u5BCC\u7684\u64CD\u4F5C",components:[{label:"\u7528\u6237\u4FE1\u606F (\u8868\u683C)",size:"60%",haveTable:!0},{label:"\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)",size:"60%",haveForm:!0}],template:`    <template>
      <w-button @click='bool1=true'>\u7528\u6237\u4FE1\u606F (\u8868\u683C)</w-button>
      <w-button @click='bool2=true'>\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)</w-button>
      <w-drawer v-model:visible='bool1' title='\u7528\u6237\u4FE1\u606F (\u8868\u683C)' size='60%' 
        custom-class='custom-content'>
        <div class='table'>
          <table>
            <thead>
              <th>\u59D3\u540D</th><th>\u6027\u522B</th><th>\u8054\u7CFB\u65B9\u5F0F</th>
            </thead>
            <tbody>
              <tr v-for='item in userList' :key='item'>
                <td>{{ item.name }}</td>
                <td>{{ item.sex }}</td>
                <td>{{ item.phone }}</td>
              </tr>
            </tbody>
          </table>
          <div class='btn'>
            <w-button @click='bool1=false'>\u53D6\u6D88</w-button>
            <w-button type='primary' @click='bool2=false'>\u786E\u5B9A</w-button>
          </div>
        </div>
      </w-drawer>
      <w-drawer v-model:visible='bool2' title='\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)' size='60%' 
        :before-close='beforeClose' custom-class='custom-content'>
        <div class='form'>
          <div class='input'>
            <span>
              *\u59D3<i style='margin-left: 1em' />\u540D\uFF1A
            </span>
            <input v-model='name' placeholder='\u8BF7\u8F93\u5165\u59D3\u540D' />
          </div>
          <div class='input'>
            <span>
              *\u624B\u673A\u53F7\uFF1A
            </span>
            <input v-model='phone' placeholder='\u8BF7\u8F93\u5165\u624B\u673A\u53F7' />
          </div>
          <div class='input'>
            <span>
              &nbsp;\u6027<i style='margin-left: 1em' />\u522B\uFF1A
            </span>
            <w-radio-group v-model:checked='sex' border>
              <w-radio value='\u7537'>\u7537</w-radio>
              <w-radio value='\u5973'>\u5973</w-radio>
            </w-radio-group>
          </div>
          <div class='input'>
            <span>
              &nbsp;\u7231<i style='margin-left: 1em' />\u597D\uFF1A
            </span>
            <w-checkbox-group v-model:checked='hobby' border>
              <w-checkbox value='\u6253\u7BEE\u7403'>\u6253\u7BEE\u7403</w-checkbox>
              <w-checkbox value='\u770B\u7535\u5F71'>\u770B\u7535\u5F71</w-checkbox>
              <w-checkbox value='\u73A9\u6E38\u620F'>\u73A9\u6E38\u620F</w-checkbox>
              <w-checkbox value='\u8E22\u8DB3\u7403'>\u8E22\u8DB3\u7403</w-checkbox>
            </w-checkbox-group>
          </div>
          <div class='input'>
            <span>
              &nbsp;\u4F4F<i style='margin-left: 1em' />\u5740\uFF1A
            </span>
            <w-input v-model='address' type='textarea' placeholder='\u8BF7\u8F93\u5165\u4F4F\u5740' />
          </div>
          <div class='btn'>
            <w-button @click='beforeClose'>\u53D6\u6D88</w-button>
            <w-button type='primary' @click='submit'>\u786E\u5B9A</w-button>
          </div>
        </div>
      </w-drawer>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            bool1: false,
            bool2: false,
            user: {
              name: '', phone: '', sex: '', hobby: [], address: ''
            },
            userList = [
              { name: '\u5F20\u4E09', sex: '\u7537', phone: '13565521012' },
              { name: '\u674E\u56DB', sex: '\u7537', phone: '13343763257' },
              { name: '\u9648\u91D1\u6765', sex: '\u7537', phone: '13565521012' },
              { name: '\u8D75\u516D', sex: '\u5973', phone: '15668120101' },
              { name: '\u65B9\u7965', sex: '\u7537', phone: '13906652456' },
              { name: '\u738B\u4E3D\u4E3D', sex: '\u5973', phone: '13567784100' }
            ],
          }
        },
        method: {
          clearFormData(item) {
            item = false;
            this.user = { name: '', phone: '', sex: '', hobby: [], address: '' };
          },
          beforeClose() {
            const { name, phone, sex, hobby, address } = this.user;
            if (name || phone || sex || hobby.length>0 || address) {
              const bool = confirm('\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?');
              if(!bool) return false;
            }
            clearFormData(item);
          },
          submit = (item) {
            const { name, phone } = this.user;
            if (!name || !phone) return alert('\u59D3\u540D\u548C\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879');
            if (phone.length !== 11) return alert('\u624B\u673A\u53F7\u662F11\u4F4D\u7EAF\u6570\u5B57\u7684');
            const bool = confirm('\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417?');
            if (bool) clearFormData(item);
            else return false;
          }
        }
      }
    <\/script>`,compositionApi:`
      imoprt { ref, reactive, toRefs } from 'vue';
      export default defineComponent({
        setup() {
          const bool1 = ref(false);
                bool2 = ref(false);
                user = reactive({
                  name: '', phone: '', sex: '', hobby: [], address: ''
                }),
                clearFormData = () => {
                  user.name = user.phone = user.address = user.sex = '';
                  user.hobby = [];
                },
                beforeClose = () => {
                  const { name, phone, sex, hobby, address } = user;
                  if (name || phone || sex || hobby.length > 0 || address) {
                    const bool = confirm('\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?');
                    if (!bool) return false;
                  }
                  clearFormData();
                };
                submit = () => {
                  const { name, phone } = user;
                  if (!name || !phone) return alert('\u59D3\u540D\u548C\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879');
                  if (phone.length!==11) return alert('\u624B\u673A\u53F7\u662F11\u4F4D\u7EAF\u6570\u5B57\u7684');
                  const bool = confirm('\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417?');
                  if (bool) clearFormData();
                  else return false;
                };
                userList = [
                  { name: '\u5F20\u4E09', sex: '\u7537', phone: '13565521012' },
                  { name: '\u674E\u56DB', sex: '\u7537', phone: '13343763257' },
                  { name: '\u9648\u91D1\u6765', sex: '\u7537', phone: '13565521012' },
                  { name: '\u8D75\u516D', sex: '\u5973', phone: '15668120101' },
                  { name: '\u65B9\u7965', sex: '\u7537', phone: '13906652456' },
                  { name: '\u738B\u4E3D\u4E3D', sex: '\u5973', phone: '13567784100' }
                ];
          return {
            bool1, bool2, ...toRefs(user),
            beforeClose, submit, userList
          };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .custom-content {
        .table {
          table {
            width: 100%;
            border: 1px solid #ddd;
            border-collapse: collapse;
            tr {
              transition: .2s;
              &:hover {
                background: #f5f7fa;
              }
            }
            th {
              background: #f1e9e9;
            }
            th,
            td {
              text-align: center;
              border: 1px solid #ddd;
              padding: 8px;
            }
          }
        }
        .form {
          .input {
            display: flex;
            align-items: center;
            margin: 1.3em 0;
            @media(min-width: 500px) {
              margin-left: 8em;  
            }
            > input {
              background-color: #fff;
              border-radius: 4px;
              border: 1px solid #ddd;
              color: #606266;
              display: inline-block;
              font-size: 15px;
              height: 36px;
              line-height: 36px;
              outline: none;
              padding: 0 12px;
              width: 350px;
              &:focus {
                border-color: #007fff;
              }
            }
            @media(max-width: 500px) {
              .w-checkbox {
                margin-bottom: .8em;
              }
              >input {
                width: auto;
              }
            }
          }
        }
        .table,
        .form {
          .btn {
            text-align: center;
            margin-top: 2em;
            .w-button {
              min-width: 100px;
              &+.w-button {
                margin-left: 2em;
              }
            }
          }
        }
      }
    </style>`}]),J={attribute:[{name:"visible",desc:"\u662F\u5426\u663E\u793A Drawer\uFF0C\u652F\u6301 v-model\u53CC\u5411\u7ED1\u5B9A",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"title",desc:"Drawer \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7title slot \u4F20\u5165",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"size",desc:"Drawer \u7684\u5BBD\u5EA6\u6216\u8005\u9AD8\u5EA6\uFF0C\u5F53\u4F7F\u7528 number \u7C7B\u578B\u65F6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF0C\u5F53\u4F7F\u7528 string \u7C7B\u578B\u65F6\uFF0C\u8BF7\u4F20\u5165 x%\uFF0C\u5426\u5219\u4FBF\u4F1A\u4EE5 number \u7C7B\u578B\u89E3\u91CA",type:"string\u3001number",optional:"\u2014\u2014",default:"40%"},{name:"direction",desc:"Drawer \u6253\u5F00\u7684\u65B9\u5411",type:"string",optional:"rtl\u3001ltr\u3001ttb\u3001btt",default:"ltr"},{name:"modal",desc:"\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"modal-closable",desc:"\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED Drawer",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"have-header",desc:"\u63A7\u5236\u662F\u5426\u663E\u793A header\uFF0C\u5F53\u6B64\u9879\u4E3A false \u65F6\uFF0Ctitle attribute \u548C title slot \u5747\u4E0D\u751F\u6548",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"show-close",desc:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"custom-class",desc:"Drawer \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"destroy-on-close",desc:"\u63A7\u5236\u662F\u5426\u5728\u5173\u95ED Drawer \u4E4B\u540E\u5C06\u5B50\u5143\u7D20\u5168\u90E8\u9500\u6BC1",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"before-close",desc:"\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Drawer \u7684\u5173\u95ED\uFF0Cfunction(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Drawer",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"close-on-escape",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Drawer",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"append-to-body",desc:"\u6307\u5B9A Drawer \u662F\u5426\u5728 body \u5143\u7D20\u4E0B (\u513F\u5B50\u8F88)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"mask-style",desc:"\u906E\u7F69\u5C42\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"header-style",desc:"\u7528\u4E8E\u8BBE\u7F6EDrawer\u5934\u90E8\u7684\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"body-style",desc:"\u7528\u4E8E\u8BBE\u7F6EDrawer\u5185\u5BB9\u90E8\u5206\u7684\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"lock-scroll",desc:"\u662F\u5426\u5728 Drawer \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"draggable",desc:"\u662F\u5426\u5F00\u542F\u62D6\u62FD\u8C03\u6574\u5BBD\u5EA6\u6216\u8005\u9AD8\u5EA6",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"title",desc:"Drawer \u6807\u9898\u533A\u7684\u5185\u5BB9"},{name:"\u2014\u2014",desc:"Drawer \u5185\u5BB9\u533A\u7684\u5185\u5BB9"}],event:[{name:"open",desc:"Drawer \u6253\u5F00\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"opend",desc:"Drawer \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"close",desc:"Drawer \u5173\u95ED\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"closed",desc:"Drawer \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"}]};const K={class:"drawer-demo-list"},M={key:0,style:{width:"100%"}},Q=e("span",null,"\u662F\u5426\u53EF\u62D6\u62FD\uFF1A",-1),W={key:0,class:"table"},X=e("thead",null,[e("th",null,"\u59D3\u540D"),e("th",null,"\u6027\u522B"),e("th",null,"\u8054\u7CFB\u65B9\u5F0F")],-1),Y={class:"btn"},Z=a("\u53D6\u6D88"),ee=a(" \u786E\u5B9A "),oe={key:1,class:"form"},te={class:"input"},le=e("span",null,[a(" *\u59D3"),e("i",{style:{"margin-left":"1em"}}),a("\u540D\uFF1A ")],-1),ae={class:"input"},ne=e("span",null," *\u624B\u673A\u53F7\uFF1A ",-1),se={class:"input"},re=e("span",null,[a(" \xA0\u6027"),e("i",{style:{"margin-left":"1em"}}),a("\u522B\uFF1A ")],-1),ue=a("\u7537"),ie=a("\u5973"),de={class:"input"},ce=e("span",null,[a(" \xA0\u7231"),e("i",{style:{"margin-left":"1em"}}),a("\u597D\uFF1A ")],-1),be=a("\u6253\u7BEE\u7403"),pe=a("\u770B\u7535\u5F71"),me=a("\u73A9\u6E38\u620F"),fe=a("\u8E22\u8DB3\u7403"),he={class:"input"},we=e("span",null,[a(" \xA0\u4F4F"),e("i",{style:{"margin-left":"1em"}}),a("\u5740\uFF1A ")],-1),ve={class:"btn"},_e=a("\u53D6\u6D88"),xe=a(" \u786E\u5B9A "),ye={key:2},ke=H({setup(L){const U=[{name:"\u5F20\u4E09",sex:"\u7537",phone:"13565521012"},{name:"\u674E\u56DB",sex:"\u7537",phone:"13343763257"},{name:"\u9648\u91D1\u6765",sex:"\u7537",phone:"13565521012"},{name:"\u8D75\u516D",sex:"\u5973",phone:"15668120101"},{name:"\u65B9\u7965",sex:"\u7537",phone:"13906652456"},{name:"\u738B\u4E3D\u4E3D",sex:"\u5973",phone:"13567784100"}],d=V({name:"",phone:"",sex:"",hobby:[],address:""}),E=c=>{c&&(c.visible=!1),d.name=d.phone=d.address=d.sex="",d.hobby=[]},z=c=>{const{name:s,phone:f,sex:b,hobby:h,address:_}=d;if(s||f||b||h.length>0||_){const x=confirm("\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?");return x&&E(c),x}},T=c=>{const{name:s,phone:f}=d;if(!s)return alert("\u59D3\u540D\u662F\u5FC5\u586B\u9879");if(!f)return alert("\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879");if(f.length!==11)return alert("\u624B\u673A\u53F7\u662F11\u4F4D\u7EAF\u6570\u5B57\u7684");if(confirm("\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417?"))E(c);else return!1},{name:g,phone:k,sex:D,hobby:F,address:C}=I(d);return(c,s)=>{const f=r("w-switch"),b=r("w-button"),h=r("w-input"),_=r("w-radio"),x=r("w-radio-group"),y=r("w-checkbox"),R=r("w-checkbox-group"),$=r("w-drawer"),j=r("DemoItem"),N=r("TableList");return u(),i("div",K,[(u(!0),i(B,null,A(m(q),(p,P)=>(u(),O(j,{item:p,key:p.title},{default:n(()=>[P===1?(u(),i("div",M,[Q,l(f,{modelValue:p.draggable,"onUpdate:modelValue":o=>p.draggable=o,"open-text":"\u662F","off-text":"\u5426","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):S("",!0),(u(!0),i(B,null,A(p.components,o=>(u(),i("div",{key:o},[l(b,{onClick:t=>o.visible=!0},{default:n(()=>[a(w(o.label),1)]),_:2},1032,["onClick"]),l($,{visible:o.visible,"onUpdate:visible":t=>o.visible=t,direction:o.direction,modal:o.modal,"show-close":o.showClose,"model-close":o.modelClose,size:o.size,"before-close":o.beforeClose||z,title:p.noHeader?null:o.label,"destroy-on-close":o.destroyOnClose,draggable:p.draggable,"append-to-body":!1,"custom-class":!o.haveForm&&!o.haveTable?"":"custom-content"},{default:n(()=>[o.haveTable?(u(),i("div",W,[e("table",null,[X,e("tbody",null,[(u(),i(B,null,A(U,t=>e("tr",{key:t.name},[e("td",null,w(t.name),1),e("td",null,w(t.sex),1),e("td",null,w(t.phone),1)])),64))])]),e("div",Y,[l(b,{onClick:t=>o.visible=!1},{default:n(()=>[Z]),_:2},1032,["onClick"]),l(b,{onClick:t=>o.visible=!1,type:"primary"},{default:n(()=>[ee]),_:2},1032,["onClick"])])])):o.haveForm?(u(),i("div",oe,[e("div",te,[le,l(h,{modelValue:m(g),"onUpdate:modelValue":s[0]||(s[0]=t=>v(g)?g.value=t:null),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),e("div",ae,[ne,l(h,{modelValue:m(k),"onUpdate:modelValue":s[1]||(s[1]=t=>v(k)?k.value=t:null),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),e("div",se,[re,l(x,{checked:m(D),"onUpdate:checked":s[2]||(s[2]=t=>v(D)?D.value=t:null),border:""},{default:n(()=>[l(_,{value:"\u7537"},{default:n(()=>[ue]),_:1}),l(_,{value:"\u5973"},{default:n(()=>[ie]),_:1})]),_:1},8,["checked"])]),e("div",de,[ce,l(R,{checked:m(F),"onUpdate:checked":s[3]||(s[3]=t=>v(F)?F.value=t:null),border:""},{default:n(()=>[l(y,{value:"\u6253\u7BEE\u7403"},{default:n(()=>[be]),_:1}),l(y,{value:"\u770B\u7535\u5F71"},{default:n(()=>[pe]),_:1}),l(y,{value:"\u73A9\u6E38\u620F"},{default:n(()=>[me]),_:1}),l(y,{value:"\u8E22\u8DB3\u7403"},{default:n(()=>[fe]),_:1})]),_:1},8,["checked"])]),e("div",he,[we,l(h,{modelValue:m(C),"onUpdate:modelValue":s[4]||(s[4]=t=>v(C)?C.value=t:null),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u4F4F\u5740"},null,8,["modelValue"])]),e("div",ve,[l(b,{onClick:t=>z(o)},{default:n(()=>[_e]),_:2},1032,["onClick"]),l(b,{type:"primary",onClick:t=>T(o)},{default:n(()=>[xe]),_:2},1032,["onClick"])])])):(u(),i("div",ye,[e("p",null,w(o.label)+" \u2014\u2014 \u5185\u5BB9",1)]))]),_:2},1032,["visible","onUpdate:visible","direction","modal","show-close","model-close","size","before-close","title","destroy-on-close","draggable","custom-class"])]))),128))]),_:2},1032,["item"]))),128)),l(N,{data:m(J)},null,8,["data"])])}}});export{ke as default};
