import{r as V,d as X,G as Y,a as p,o as c,g as b,H as O,I as z,c as M,w as i,b as s,y as n,z as x,P as Z,h as t,t as N,N as I,R as v,a4 as w,k as P,B as ee}from"./vendor.c0366ad2.js";import{o as te}from"./index.c63351a7.js";const oe=V([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E visible \u5C5E\u6027\uFF0C\u63A7\u5236 Dialog \u663E\u793A\u6216\u9690\u85CF\u3002\u8BBE\u7F6E modal \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42\u3002\u8BBE\u7F6E closeOnModal \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EF\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u3002",components:[{visible:!1,title:"\u57FA\u7840\u7528\u6CD5",content:"<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>"},{visible:!1,title:"\u6CA1\u6709\u906E\u7F69",content:"<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",modal:!1},{visible:!1,title:"\u70B9\u906E\u7F69\u4E0D\u5173\u95ED",content:"<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",closeOnModal:!1}],template:`    <template>
      <div class='dialog-demo'>
        <template v-for='item in dialogList' :key='item.animate'>
          <w-button @click='item.visible=true'>{{ item.title }}</w-button>
          <w-dialog v-model:visible='item.visible' :title='item.title'
            :modal='item.modal' :close-on-modal='item.closeOnModal'>
            <p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>
          </w-dialog>
        </template>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            dialogList: [
              { visible: false, title: '\u57FA\u7840\u7528\u6CD5', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>' },
              { visible: false, title: '\u6CA1\u6709\u906E\u7F69', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', modal: false },
              { visible: false, title: '\u70B9\u906E\u7F69\u4E0D\u5173\u95ED', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', closeOnModal: false }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const dialogList = ref([
            { visible: false, title: '\u57FA\u7840\u7528\u6CD5', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>' },
            { visible: false, title: '\u6CA1\u6709\u906E\u7F69', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', modal: false },
            { visible: false, title: '\u70B9\u906E\u7F69\u4E0D\u5173\u95ED', content: '<p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', closeOnModal: false }
          ]);
          return { dialogList };
        }
      })
    <\/script>`,style:`
    <style>
      .dialog-demo {
        display: flex;
      }
      .dialog-demo > .w-button {
        margin: 1em;
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",desc:"Dialog \u7684\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u90FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5C06\u5185\u5BB9\u533A\u5C45\u4E2D\u4EE5\u53CA\u5BF9 Dialog \u7684\u4F4D\u7F6E\u4EE5\u53CA\u5BBD\u5EA6\u8FDB\u884C\u4FEE\u6539\u3002",components:[{visible:!1,title:"\u81EA\u5B9A\u4E49\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8",content:"<p>Dialog \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F API \u548C Slot\uFF0C<br />\u53EF\u4EE5\u81EA\u7531\u63A7\u5236\u6574\u4E2A Dialog \u7684\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C<br />\u6BD4\u5982\u6807\u9898\u533A\u3001\u5185\u5BB9\u533A\u3001\u5E95\u90E8\u3001\u5173\u95ED\u6309\u94AE\u3002</p>",footer:"<w-button>\u786E\u5B9A</w-button>"},{visible:!1,title:"\u6CA1\u6709\u6807\u9898\u680F",content:"<p>\u6CA1\u6709\u6807\u9898\u680F\u3002\u3002\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",noTitle:!0},{visible:!1,title:"\u6CA1\u6709\u5E95\u90E8\u533A",content:"<p>\u6709\u65F6\u5019\u5E95\u90E8\u533A\u4F1A\u663E\u5F97\u591A\u4F59\uFF0C\u53EF\u4EE5\u4E0D\u9700\u8981\u663E\u793A\u5E95\u90E8\u533A</p>",haveFooter:!1},{visible:!1,title:"\u81EA\u5B9A\u4E49\u7C7B\u540D",content:"<p>\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5C5E\u6027width\u548Ctop\uFF0C\u5982\u679C\u60F3\u8BBE\u7F6EDialog\u7EC4\u4EF6\u7684\u5176\u4ED6\u6837\u5F0F\u53EF\u4EE5\u52A0\u4E2A\u5C5E\u6027custom-class\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u540D\uFF0C\u7C7B\u91CC\u5199\u4E0A\u5BF9\u5E94\u7684\u6837\u5F0F\u5373\u53EF\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",width:"80vw",customClass:"add-color"},{visible:!1,title:"Top\u503C\u4E3A39vw",top:"39vh",content:"<p>Dialog \u7684Top\u503C\u4E3A39vh\u3002</p>"},{visible:!1,title:"\u9690\u85CF\u5173\u95ED\u56FE\u6807",content:"<p>\u4F7F\u7528\u5C5E\u6027:show-close=false\uFF0C\u5373\u53EF\u9690\u85CF\u5173\u95ED\u56FE\u6807\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",showClose:!1},{visible:!1,title:"\u5168\u5C4F\u663E\u793A",content:"<p>\u4F7F\u7528\u5C5E\u6027:full-screen=true\uFF0C\u5373\u53EF\u5168\u5C4F\u5C55\u73B0Dialog\u7EC4\u4EF6\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",fullScreen:!0},{visible:!1,title:"\u5C45\u4E2D\u663E\u793A",content:"<p>\u5185\u5BB9\u533A\u3001\u5E95\u90E8\u533A\u5C06\u5C45\u4E2D\u663E\u793A</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>",center:!0},{visible:!1,title:"\u5C06Dialog\u6DFB\u52A0\u5230<body>\u4E0B",destroyOnClose:!0,content:"<p>\u5728PC\u4E0A\uFF0C\u6D4F\u89C8\u5668\u5185\u6309F12\u6216\u8005\u53F3\u51FB\u9875\u9762\u7A7A\u767D\u5904\u6309N\u6216\u8005\u70B9\u51FB\u5BA1\u67E5\u5143\u7D20\uFF0C<br />\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\uFF0C\u6253\u5F00Dialog\u7EC4\u4EF6\uFF0C\u67E5\u770BDialog\u7EC4\u4EF6\u6E32\u67D3\u7684\u4F4D\u7F6E\u3002</p>",appendToBody:!0}],template:`    <template>
      <div class='dialog-demo'>
        <template v-for='item in dialogList' :key='item.title'>
          <w-button @click='item.visible=true'>
            {{ item.btnLabel }}
          </w-button>
          <w-dialog v-model:visible='item.visible' v-bind='item'>
          <div v-html='item.content'></div>
          <template #footer v-if='item.footer'>
            <w-button type='success' @click='child.visible=false'>OK</w-button>
            <w-button type='warning' @click='child.visible=false'>Cancel</w-button>
          </template>
        </w-dialog>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            dialogList: [
              {
                visible: false, title: '\u81EA\u5B9A\u4E49\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8', content: '<p>Dialog \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F API \u548C Slot\uFF0C<br />\u53EF\u4EE5\u81EA\u7531\u63A7\u5236\u6574\u4E2A Dialog \u7684\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C<br />\u6BD4\u5982\u6807\u9898\u533A\u3001\u5185\u5BB9\u533A\u3001\u5E95\u90E8\u3001\u5173\u95ED\u6309\u94AE\u3002</p>', footer: '<w-button>\u786E\u5B9A</w-button>'
              },
              {
                visible: false, title: '\u6CA1\u6709\u6807\u9898\u680F', content: '<p>\u6CA1\u6709\u6807\u9898\u680F\u3002\u3002\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', noTitle: true
              },
              {
                visible: false, title: '\u6CA1\u6709\u5E95\u90E8\u533A', content: '<p>\u6709\u65F6\u5019\u5E95\u90E8\u533A\u4F1A\u663E\u5F97\u591A\u4F59\uFF0C\u53EF\u4EE5\u4E0D\u9700\u8981\u663E\u793A\u5E95\u90E8\u533A</p>', haveFooter: false
              },
              {
                visible: false, title: '\u81EA\u5B9A\u4E49\u7C7B\u540D', content: '<p>\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5C5E\u6027width\u548Ctop\uFF0C\u5982\u679C\u60F3\u8BBE\u7F6EDialog\u7EC4\u4EF6\u7684\u5176\u4ED6\u6837\u5F0F\u53EF\u4EE5\u52A0\u4E2A\u5C5E\u6027custom-class\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u540D\uFF0C\u7C7B\u91CC\u5199\u4E0A\u5BF9\u5E94\u7684\u6837\u5F0F\u5373\u53EF\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>',
                width: '80vw', customClass: 'add-color'
              },
              {
                visible: false, title: 'Top\u503C\u4E3A39vw', top: '39vh', content: '<p>Dialog \u7684Top\u503C\u4E3A39vh\u3002</p>'
              },
              {
                visible: false, title: '\u9690\u85CF\u5173\u95ED\u56FE\u6807', content: '<p>\u4F7F\u7528\u5C5E\u6027:show-close=false\uFF0C\u5373\u53EF\u9690\u85CF\u5173\u95ED\u56FE\u6807\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', showClose: false
              },
              {
                visible: false, title: '\u5168\u5C4F\u663E\u793A', content: '<p>\u4F7F\u7528\u5C5E\u6027:full-screen=true\uFF0C\u5373\u53EF\u5168\u5C4F\u5C55\u73B0Dialog\u7EC4\u4EF6\u3002</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', fullScreen: true
              },
              {
                visible: false, title: '\u5C45\u4E2D\u663E\u793A', content: '<p>\u5185\u5BB9\u533A\u3001\u5E95\u90E8\u533A\u5C06\u5C45\u4E2D\u663E\u793A</p><p>\u8FD9\u662F\u4E00\u6BB5\u8BDD</p>', center: true
              },
              {
                visible: false, title: '\u5C06Dialog\u6DFB\u52A0\u5230<body>\u4E0B', destroyOnClose: true, content: '<p>\u5728PC\u4E0A\uFF0C\u6D4F\u89C8\u5668\u5185\u6309F12\u6216\u8005\u53F3\u51FB\u9875\u9762\u7A7A\u767D\u5904\u6309N\u6216\u8005\u70B9\u51FB\u5BA1\u67E5\u5143\u7D20\uFF0C<br />\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\uFF0C\u6253\u5F00Dialog\u7EC4\u4EF6\uFF0C\u67E5\u770BDialog\u7EC4\u4EF6\u6E32\u67D3\u7684\u4F4D\u7F6E\u3002</p>', appendToBody: true
              }
            ]
          }
        }
      }
    <\/script>`,style:`
    <style>
      .dialog-demo {
        display: flex;
      }
      .dialog-demo > .w-button {
        margin: 1em;
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"Dialog \u7EC4\u4EF6\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u610F\u7684\uFF0C\u751A\u81F3\u53EF\u4EE5\u662F\u8868\u683C\u6216\u8868\u5355\uFF0C\u4E0B\u9762\u662F\u5E94\u7528\u4E86 Table \u548C Form \u7EC4\u4EF6\u7684\u4E24\u4E2A\u6837\u4F8B\u3002",components:[{visible:!1,title:"\u7528\u6237\u4FE1\u606F (\u8868\u683C)",table:!0},{visible:!1,title:"\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)",form:!0,ok:!0,beforeClose:!0,width:"533px",top:"13vh"}],template:`    <template>
      <w-button @click='visible1=true'>\u7528\u6237\u4FE1\u606F (\u8868\u683C)</w-button>
      <w-button @click='visible2=true'>\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)</w-button>
      <w-dialog v-model:visible='visible1' title='\u7528\u6237\u4FE1\u606F (\u8868\u683C)' size='60%'>
        <div class='table'>
          <table>
            <thead>
              <th>\u59D3\u540D</th>
              <th>\u6027\u522B</th>
              <th>\u8054\u7CFB\u65B9\u5F0F</th>
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
            <w-button @click='visible1=false'>\u53D6\u6D88</w-button>
            <w-button @click='visible1=false' type='primary'>\u786E\u5B9A</w-button>
          </div>
        </div>
      </w-dialog>
      <w-dialog v-model:visible='visible2' title='\u6DFB\u52A0\u7528\u6237 (\u8868\u5355)' size='60%'
        :before-close='beforeClose' top='13vh'>
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
            <input v-model='address' placeholder='\u8BF7\u8F93\u5165\u4F4F\u5740' />
          </div>
          <div class='btn'>
            <w-button @click='beforeClose'>\u53D6\u6D88</w-button>
            <w-button @click='submit' type='primary'>\u786E\u5B9A</w-button>
          </div>
        </div>
      </w-dialog>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            visible1: false,
            visible2: false,
            user: {
              name: '', phone: '', sex: '', hobby:[], address:''
            },
            userList = [
              { name: '\u5F20\u4E09', sex:'\u7537', phone: '13565521012' },
              { name: '\u674E\u56DB', sex:'\u7537', phone: '13343763257' },
              { name: '\u9648\u91D1\u6765', sex:'\u7537', phone: '13565521012' },
              { name: '\u8D75\u516D', sex:'\u5973', phone: '15668120101' },
              { name: '\u65B9\u7965', sex:'\u7537', phone: '13906652456' },
              { name: '\u738B\u4E3D\u4E3D', sex:'\u5973', phone: '13567784100' }
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
            if (name || phone || sex || hobby.length > 0 || address) {
              const bool = confirm('\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?');
              if (!bool) return false;
            }
            clearFormData(item);
          },
          submit(item) {
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
          const visible1 = ref(false);
                visible2 = ref(false);
                user = reactive({
                  name: '', phone: '', sex: '', hobby: [], address: ''
                });
                clearFormData = () => {
                  user.name = user.phone = user.address = user.sex = '';
                  user.hobby = [];
                },
                beforeClose = () => {
                  const { name, phone, sex, hobby, address } = user;
                  if (name || phone || sex || hobby.length>0 || address) {
                    const bool = confirm('\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?');
                    if (!bool)return false;
                  }
                  clearFormData();
                },
                submit = () => {
                  const { name, phone } = user;
                  if (!name || !phone) return alert('\u59D3\u540D\u548C\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879');
                  if (phone.length !== 11) return alert('\u624B\u673A\u53F7\u662F11\u4F4D\u7EAF\u6570\u5B57\u7684');
                  const bool = confirm('\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417?');
                  if (bool) clearFormData();
                  else return false;
                },
                userList = [
                  { name: '\u5F20\u4E09', sex:'\u7537', phone: '13565521012' },
                  { name: '\u674E\u56DB', sex:'\u7537', phone: '13343763257' },
                  { name: '\u9648\u91D1\u6765', sex:'\u7537', phone: '13565521012' },
                  { name: '\u8D75\u516D', sex:'\u5973', phone: '15668120101' },
                  { name: '\u65B9\u7965', sex:'\u7537', phone: '13906652456' },
                  { name: '\u738B\u4E3D\u4E3D', sex:'\u5973', phone: '13567784100' }
                ];
          return { visible1, visible2, ...toRefs(user), beforeClose, submit,userList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .table {
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
      .form {
        >.input {
          display: flex;
          align-items: center;
          margin: 1.3em 0;
          > span {
            white-space: nowrap;
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
            width: 270px;
            min-width: 173px;
            &:focus{
              border-color: #007fff;
            }
          }
          >.w-checkbox-group {
            .w-checkbox {
              margin-right: 14px;
              @media(max-width: 500px) {
                margin-bottom: .8em;
              }
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
    </style>`},{title:"\u52A8\u753B\u6548\u679C",desc:"\u8BBE\u7F6E animate \u5C5E\u6027\uFF0C\u4FEE\u6539\u663E\u793A\u9690\u85CF\u65F6\u7684\u52A8\u753B\u6548\u679C\uFF0C\u9ED8\u8BA4\u662F zoom (\u7F29\u653E)\u3002",components:[{visible:!1,animate:"zoom",title:"zoom (\u7F29\u653E)",content:"<p>\u9ED8\u8BA4\u7684\u52A8\u753B\uFF0C\u4F1A\u6839\u636E\u9F20\u6807\u70B9\u51FB\u7684\u4F4D\u7F6E\u9010\u6E10\u5C55\u793A\u5230\u9875\u9762\u4E2D\u5FC3\u4F4D\u7F6E</p>"},{visible:!1,animate:"fade",title:"fade (\u6DE1\u5165\u6DE1\u51FA)",content:"<p>fade (\u6DE1\u5165\u6DE1\u51FA)</p>"},{visible:!1,animate:"slide-up",title:"slide-up (\u4E0A\u5F80\u4E0B\u5E73\u79FB)",content:"<p>slide-up (\u4E0A\u5F80\u4E0B\u5E73\u79FB)</p>"},{visible:!1,animate:"slide-down",title:"slide-down (\u4E0B\u5F80\u4E0A\u5E73\u79FB)",content:"<p>slide-down (\u4E0B\u5F80\u4E0A\u5E73\u79FB)</p>"},{visible:!1,animate:"fold-up",title:"fold-up (\u4E0A\u5F80\u4E0B\u6298\u53E0)",content:"<p>fold-up (\u4E0A\u5F80\u4E0B)</p>"},{visible:!1,animate:"fold-down",title:"fold-down (\u4E0B\u5F80\u4E0A\u6298\u53E0)",content:"<p>fold-down (\u4E0B\u5F80\u4E0A\u6298\u53E0)</p>"}],template:`    <template>
      <div class='dialog-demo'>
        <template v-for='item in dialogList' :key='item.animate'>
          <w-button @click='item.visible=true'>{{ item.title }}</w-button>
          <w-dialog v-model:visible='item.visible' :title='item.title'>
            <p>{{ item.content || item.title }}</p>
          </w-dialog>
        </template>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            dialogList: [
              { visible: false, animate: "zoom", title: 'zoom (\u7F29\u653E)', content: '<p>\u9ED8\u8BA4\u7684\u52A8\u753B\uFF0C\u4F1A\u6839\u636E\u9F20\u6807\u70B9\u51FB\u7684\u4F4D\u7F6E\u9010\u6E10\u5C55\u793A\u5230\u9875\u9762\u4E2D\u5FC3\u4F4D\u7F6E</p>' },
              { visible: false, animate: "fade", title: 'fade (\u6DE1\u5165\u6DE1\u51FA)' },
              { visible: false, animate: "slide-up", title: 'slide-up (\u4E0A\u5F80\u4E0B\u5E73\u79FB)' },
              { visible: false, animate: "slide-down", title: 'slide-down (\u4E0B\u5F80\u4E0A\u5E73\u79FB)' },
              { visible: false, animate: "fold-up", title: 'fold-up (\u4E0A\u5F80\u4E0B\u6298\u53E0)' },
              { visible: false, animate: "fold-down", title: 'fold-down (\u4E0B\u5F80\u4E0A\u6298\u53E0)' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import {ref,defineComponent} from 'vue';
      export default defineComponent({
        setup(){
          const dialogList = ref([
            { visible: false, animate: "zoom", title: 'zoom (\u7F29\u653E)', content: '<p>\u9ED8\u8BA4\u7684\u52A8\u753B\uFF0C\u4F1A\u6839\u636E\u9F20\u6807\u70B9\u51FB\u7684\u4F4D\u7F6E\u9010\u6E10\u5C55\u793A\u5230\u9875\u9762\u4E2D\u5FC3\u4F4D\u7F6E</p>' },
            { visible: false, animate: "fade", title: 'fade (\u6DE1\u5165\u6DE1\u51FA)' },
            { visible: false, animate: "slide-up", title: 'slide-up (\u4E0A\u5F80\u4E0B\u5E73\u79FB)' },
            { visible: false, animate: "slide-down", title: 'slide-down (\u4E0B\u5F80\u4E0A\u5E73\u79FB)' },
            { visible: false, animate: "fold-up", title: 'fold-up (\u4E0A\u5F80\u4E0B\u6298\u53E0)' },
            { visible: false, animate: "fold-down", title: 'fold-down (\u4E0B\u5F80\u4E0A\u6298\u53E0)' }
          ]);
          return { dialogList };
        }
      })
    <\/script>`,style:`
    <style>
      .dialog-demo {
        display: flex;
      }
      .dialog-demo > .w-button {
        margin: 1em;
      }
    </style>`},{title:"\u5C01\u88C5\u7EC4\u4EF6",desc:"\u9664\u4E86\u4E0A\u8FF0\u901A\u8FC7\u6807\u51C6\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u54B1\u8FD8\u7CBE\u5FC3\u5C01\u88C5\u4E86\u4E00\u4E9B\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7528\u6765\u521B\u5EFA\u4E00\u6B21\u6027\u7684\u8F7B\u91CF\u7EA7\u5BF9\u8BDD\u6846\u3002",package:!0,components:[{title:"\u5B9E\u4F8B\u53161",content:"\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u53EF\u4EE5\u662F\u6587\u672C\uFF0C\u4E5F\u53EF\u662FVNode\u3002",close:()=>console.log("close")},{title:"\u5B9E\u4F8B\u53162",content:`\u5C01\u88C5\u4E86 Dialog \u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7528\u6765\u521B\u5EFA\u4E00\u6B21\u6027\u7684\u8F7B\u91CF\u7EA7\u5BF9\u8BDD\u6846\u3002
        \u5B9E\u4F8B\u3002 (\u5BF9\u5E94\u53C2\u6570\u53C2\u8003 Dialog \u5C5E\u6027)`,width:"60%",okText:"Ok",cancelText:"Cancel",beforeClose:()=>confirm("\u4F60\u786E\u5B9A\u8981\u5173\u95ED\u5BF9\u8BDD\u6846\u5417\uFF1F")}],template:`    <template>
      <div>
        <w-button @click='showDialog(dialog1)'>
          \u5B9E\u4F8B\u53161
        </w-button>
        <w-button @click='showDialog(dialog2)'>
          \u5B9E\u4F8B\u53162
        </w-button>
      </div>
    <template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            dialog1: {
              title: '\u5B9E\u4F8B\u53161',
              content: '\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u53EF\u4EE5\u662F\u6587\u672C\uFF0C\u4E5F\u53EF\u662FVNode\u3002',
              close: ()=> console.log('close')
            },
            dialog2: {
              title: '\u5B9E\u4F8B\u53162',
              content: '\u5C01\u88C5\u4E86 Dialog \u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7528\u6765\u521B\u5EFA\u4E00\u6B21\u6027\u7684\u8F7B\u91CF\u7EA7\u5BF9\u8BDD\u6846\u5B9E\u4F8B\u3002 (\u5BF9\u5E94\u53C2\u6570\u53C2\u8003 Dialog \u5C5E\u6027)',
              width: '60%',
              okText: 'Ok',
              cancelText: 'Cancel',
              beforeClose: ()=> confirm('\u4F60\u786E\u5B9A\u8981\u5173\u95ED\u5BF9\u8BDD\u6846\u5417\uFF1F')
            }
          }
        },
        methods: {
          showDialog(obj) {
            const { title, content, beforeClose, modal, okText, cancelText, width, ok, close } = obj;
            getCurrentInstance().proxy.$openDialog({
              title, content, beforeClose, modal, okText, cancelText, width, close,
              ok() {
                console.log('ok');
              }
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const dialog1 = {
            title: '\u5B9E\u4F8B\u53161',
            content: '\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u53EF\u4EE5\u662F\u6587\u672C\uFF0C\u4E5F\u53EF\u662FVNode\u3002',
            close: () => console.log('close')
          };
          const dialog2 = {
            title: '\u5B9E\u4F8B\u53162',
            content: '\u5C01\u88C5\u4E86 Dialog \u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7528\u6765\u521B\u5EFA\u4E00\u6B21\u6027\u7684\u8F7B\u91CF\u7EA7\u5BF9\u8BDD\u6846\u5B9E\u4F8B\u3002 (\u5BF9\u5E94\u53C2\u6570\u53C2\u8003 Dialog \u5C5E\u6027)',
            width: '60%',
            okText: 'Ok',
            cancelText: 'Cancel',
            beforeClose: () => confirm('\u4F60\u786E\u5B9A\u8981\u5173\u95ED\u5BF9\u8BDD\u6846\u5417\uFF1F')
          };
          const showDialog = (obj) => {
            const { title, content, beforeClose, modal, okText, cancelText, width, ok, close } = obj;
            getCurrentInstance().proxy.$openDialog({
              title, content, beforeClose, modal, okText, cancelText, width, close,
              ok(){
                console.log('ok');
              }
            })
          };
          return { dialog1, dialog2, showDialog };
        }
      })
    <\/script>`}]),le={attribute:[{name:"visible",desc:"\u662F\u5426\u663E\u793ADialog",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"title",desc:"Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"width",desc:"Dialog\u7684\u5BBD\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:"500px"},{name:"animate",desc:"Dialog \u663E\u9690\u7684\u52A8\u753B\u6548\u679C",type:"string",optional:"zoom\u3001fade\u3001slide-up\u3001slide-down\u3001fold-up\u3001fold-down",default:"zoom"},{name:"fullscreen",desc:"\u662F\u5426\u5168\u5C4F\u663E\u793A Dialog",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"top",desc:"Dialog CSS \u4E2D\u7684 margin-top \u503C",type:"string\u3001number",optional:"\u2014\u2014",default:"20vh"},{name:"modal",desc:"\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"append-to-body",desc:"\u6307\u5B9A Dialog \u662F\u5426\u5728 body \u5143\u7D20\u4E0B (\u513F\u5B50\u8F88)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"lock-scroll",desc:"\u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"custom-class",desc:"Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"close-on-modal",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"close-on-esc",desc:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"show-close",desc:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"before-close",desc:"\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED\uFF0C\u8FD4\u56DEtrue\u5173\u95ED\uFF0C\u8FD4\u56DEfalse\u4E0D\u5173\u95ED",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"center",desc:"\u662F\u5426\u5BF9\u5185\u5BB9\u533A\u548C\u5E95\u90E8\u91C7\u7528\u5C45\u4E2D\u5E03\u5C40",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"destroy-on-close",desc:"\u5173\u95ED\u65F6\u9500\u6BC1 Dialog \u4E2D\u7684\u5143\u7D20",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"have-footer",desc:"\u662F\u5426\u663E\u793A\u5E95\u90E8",type:"boolean",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"ok",desc:"\u70B9\u51FB\u5E95\u90E8\u9ED8\u8BA4\u7684\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"ok-text",desc:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u786E\u5B9A"},{name:"cancel-text",desc:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u53D6\u6D88"}],slot:[{name:"title",desc:"Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9"},{name:"\u2014\u2014",desc:"Dialog \u5185\u5BB9\u533A\u7684\u5185\u5BB9"},{name:"footer",desc:"Dialog \u5E95\u90E8\u6309\u94AE\u533A\u7684\u5185\u5BB9"}],event:[{name:"open",desc:"Dialog \u6253\u5F00\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"opend",desc:"Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"close",desc:"Dialog \u5173\u95ED\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"},{name:"closed",desc:"Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03",callbackParams:"\u2014\u2014"}]};const ne={class:"dialog-demo-list"},ie=["innerHTML"],se=n(" OK "),ae=n(" Cancel "),de={key:0,class:"table"},pe=t("thead",null,[t("th",null,"\u59D3\u540D"),t("th",null,"\u6027\u522B"),t("th",null,"\u8054\u7CFB\u65B9\u5F0F")],-1),ue={key:1,class:"form"},ce={class:"input"},re=t("span",null,[n(" *\u59D3"),t("i",{style:{"margin-left":"1em"}}),n("\u540D\uFF1A ")],-1),me={class:"input"},fe=t("span",null," *\u624B\u673A\u53F7\uFF1A ",-1),be={class:"input"},ve=t("span",null,[n(" \xA0\u6027"),t("i",{style:{"margin-left":"1em"}}),n("\u522B\uFF1A ")],-1),ge=n("\u7537"),he=n("\u5973"),we={class:"input"},xe=t("span",null,[n(" \xA0\u7231"),t("i",{style:{"margin-left":"1em"}}),n("\u597D\uFF1A ")],-1),ye=n("\u6253\u7BEE\u7403"),ke=n("\u770B\u7535\u5F71"),_e=n("\u73A9\u6E38\u620F"),De=n("\u8E22\u8DB3\u7403"),Ce={class:"input"},Fe=t("span",null,[n(" \xA0\u4F4F"),t("i",{style:{"margin-left":"1em"}}),n("\u5740\uFF1A ")],-1),Ee=X({setup(Be){const r=V({name:"",phone:"",sex:"",hobby:[],address:""}),U=(a,l)=>{a.package?K(l):l.visible=!0},j=()=>{console.log("open......")},R=()=>{console.log("Dialog closed......")},S=a=>{a&&(a.visible=!1),r.name=r.phone=r.address=r.sex="",r.hobby=[]},$=a=>{let{name:l,phone:d,sex:m,hobby:g,address:h}=r;if(l||d||m||g.length>0||h){let u=confirm("\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u5173\u95ED\u5417?");return u&&S(a),u}},H=a=>{let{name:l,phone:d}=r;if(!l)return alert("\u59D3\u540D\u662F\u5FC5\u586B\u9879"),!1;if(!d)return alert("\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879"),!1;if(d.length!==11)return alert("\u624B\u673A\u53F7\u662F11\u4F4D\u7EAF\u6570\u5B57\u7684"),!1;let m=confirm("\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417?");return m&&S(a),m},{name:y,phone:k,sex:_,hobby:D,address:C}=Y(r),K=a=>{let{title:l,content:d,footer:m,width:g,fullScreen:h,top:u,modal:F,closeOnModal:B,closeOnEsc:T,customClass:A,showClose:E,beforeClose:f,center:L,haveFooter:e,okText:o,cancelText:q,lockScroll:J,closeOnEse:Q,close:W}=a;te({title:ee("strong",{},l),content:d,footer:m,width:g,fullScreen:h,top:u,modal:F,closeOnModal:B,closeOnEsc:T,customClass:A,showClose:E,beforeClose:f,center:L,haveFooter:e,okText:o,cancelText:q,lockScroll:J,closeOnEse:Q,close:W,ok(){console.log("ok")}})},G=[{name:"\u5F20\u4E09",sex:"\u7537",phone:"13565521012"},{name:"\u674E\u56DB",sex:"\u7537",phone:"13343763257"},{name:"\u9648\u91D1\u6765",sex:"\u7537",phone:"13565521012"},{name:"\u8D75\u516D",sex:"\u5973",phone:"15668120101"},{name:"\u65B9\u7965",sex:"\u7537",phone:"13906652456"},{name:"\u738B\u4E3D\u4E3D",sex:"\u5973",phone:"13567784100"}];return(a,l)=>{const d=p("w-button"),m=p("w-icon"),g=p("w-radio"),h=p("w-radio-group"),u=p("w-checkbox"),F=p("w-checkbox-group"),B=p("w-input"),T=p("w-dialog"),A=p("DemoItem"),E=p("TableList");return c(),b("div",ne,[(c(!0),b(O,null,z(v(oe),(f,L)=>(c(),M(A,{item:f,key:f.title},{default:i(()=>[(c(!0),b(O,null,z(f.components,e=>(c(),b("div",{key:e},[s(d,{onClick:o=>U(f,e)},{default:i(()=>[n(x(e.title),1)]),_:2},1032,["onClick"]),f.package?P("",!0):(c(),M(T,{key:0,visible:e.visible,"onUpdate:visible":o=>e.visible=o,title:e.noTitle?"":e.title,width:e.width,top:e.top,modal:e.modal,"close-on-modal":e.closeOnModal,ok:e.ok?H:()=>{},"destroy-on-close":e.destroyOnClose,"full-screen":e.fullScreen,"before-close":e.beforeClose?$:()=>{},animate:e.animate,"have-footer":e.haveFooter,"show-close":e.showClose,"custom-class":e.customClass,"lock-scroll":!0,"append-to-body":e.appendToBody,center:e.center,onClosed:R,onOpen:j},Z({default:i(()=>[t("div",{innerHTML:e.content},null,8,ie),e.table?(c(),b("table",de,[pe,t("tbody",null,[(c(),b(O,null,z(G,o=>t("tr",{key:o.name},[t("td",null,x(o.name),1),t("td",null,x(o.sex),1),t("td",null,x(o.phone),1)])),64))])])):e.form?(c(),b("div",ue,[t("div",ce,[re,N(t("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>w(y)?y.value=o:null),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,512),[[I,v(y)]])]),t("div",me,[fe,N(t("input",{"onUpdate:modelValue":l[1]||(l[1]=o=>w(k)?k.value=o:null),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,512),[[I,v(k)]])]),t("div",be,[ve,s(h,{checked:v(_),"onUpdate:checked":l[2]||(l[2]=o=>w(_)?_.value=o:null)},{default:i(()=>[s(g,{value:"\u7537"},{default:i(()=>[ge]),_:1}),s(g,{value:"\u5973"},{default:i(()=>[he]),_:1})]),_:1},8,["checked"])]),t("div",we,[xe,s(F,{checked:v(D),"onUpdate:checked":l[3]||(l[3]=o=>w(D)?D.value=o:null),border:"",max:3},{default:i(()=>[s(u,{value:"\u6253\u7BEE\u7403"},{default:i(()=>[ye]),_:1}),s(u,{value:"\u770B\u7535\u5F71"},{default:i(()=>[ke]),_:1}),s(u,{value:"\u73A9\u6E38\u620F"},{default:i(()=>[_e]),_:1}),s(u,{value:"\u8E22\u8DB3\u7403"},{default:i(()=>[De]),_:1})]),_:1},8,["checked"])]),t("div",Ce,[Fe,s(B,{modelValue:v(C),"onUpdate:modelValue":l[4]||(l[4]=o=>w(C)?C.value=o:null),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u4F4F\u5740"},null,8,["modelValue"])])])):P("",!0)]),_:2},[e.footer?{name:"footer",fn:i(()=>[s(d,{type:"success",onClick:o=>e.visible=!1},{default:i(()=>[se]),_:2},1032,["onClick"]),s(d,{type:"warning",onClick:o=>e.visible=!1},{default:i(()=>[ae]),_:2},1032,["onClick"])])}:void 0,L===0?{name:"close",fn:i(()=>[s(m,{name:"close-circle",size:"20px"})])}:void 0]),1032,["visible","onUpdate:visible","title","width","top","modal","close-on-modal","ok","destroy-on-close","full-screen","before-close","animate","have-footer","show-close","custom-class","append-to-body","center"]))]))),128))]),_:2},1032,["item"]))),128)),s(E,{data:v(le)},null,8,["data"])])}}});export{Ee as default};
