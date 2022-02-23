import{r as z,d as O,a as p,o,g as l,H as c,I as b,c as s,w as d,h as m,b as n,k as h,y as a,z as u,R as k}from"./vendor.c0366ad2.js";const P=z([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E placement \u5C5E\u6027\uFF0C\u4FEE\u6539 Dropdown \u5C55\u793A\u7684\u4F4D\u7F6E\u3002",hideDelay:50,openDelay:50,placement:"bottom",dropdown:[{label:"\u4E2A\u4EBA\u4E2D\u5FC3\u9875"},{label:" \u6D88\u606F\u9875"},{label:"\u8D26\u53F7\u8BBE\u7F6E\u9875 - \u4E2A\u4EBA"},{label:"\u6D3B\u52A8\u9875"},{label:"\u98DF\u54C1\u5217\u8868"},{label:"\u6E38\u620F\u5217\u8868",disabled:!0}],placementList:["bottom","bottom-start","bottom-end","top","top-start","top-end"],components:[{},{label:"\u89E6\u53D1\u7684\u5143\u7D20\u6BD4\u83DC\u5355\u8FD8\u8981\u5BBD\u3002"}],template:`    <template>
      <div class='dropdown-placement-demo'>
        <div class='options'>
          <div>
            <span>\u65B9\u5411\uFF1A</span>
            <w-radio-group v-model:checked='placement'>
              <w-radio v-for='i in placementList' :value='i' />
            </w-radio-group>
          </div>
        </div>  
        <div v-for='dropdown in dropdownList'>
          <w-dropdown :placement='placement' :trigger='dropdown.trigger'>
            <span class='w-dropdown-link'>
              \u4E0B\u62C9\u83DC\u5355 {{ dropdown.label }} <w-icon name='down' />
            </span>
            <template #dropdown>
              <w-dropdown-menu>
                <w-dropdown-item v-for='item in dropdownItems' :disabled='item.disabled'>
                  {{ item.label }}
                </w-dropdown-item>
              </w-dropdown-menu>
            </template>
          </w-dropdown>  
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            dropdownList: [
              {},
              { trigger: 'click', label: '\u70B9\u51FB \u89E6\u53D1\uFF0C\u5143\u7D20\u6BD4\u83DC\u5355\u8FD8\u8981\u5BBD' }
            ],
            dropdownItems: [
              { label: '\u4E2A\u4EBA\u4E2D\u5FC3\u9875' },
              { label: ' \u6D88\u606F\u9875' },
              { label: '\u8D26\u53F7\u8BBE\u7F6E\u9875 - \u4E2A\u4EBA' },
              { label: '\u6D3B\u52A8\u9875' },
              { label:'\u98DF\u54C1\u5217\u8868' },
              { label: '\u6E38\u620F\u5217\u8868', disabled: true }
            ],
            placementList: [
              'bottom',
              'bottom-start',
              'bottom-end',
              'top',
              'top-start',
              'top-end'
            ],
            placement: 'bottom'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const dropdownList = reactive([
            {},
            { trigger: 'click', label: '\u70B9\u51FB \u89E6\u53D1\uFF0C\u5143\u7D20\u6BD4\u83DC\u5355\u8FD8\u8981\u5BBD' }
          ]);
          dropdownItems = reactive([
            { label: '\u4E2A\u4EBA\u4E2D\u5FC3\u9875' },
            { label: ' \u6D88\u606F\u9875' },
            { label: '\u8D26\u53F7\u8BBE\u7F6E\u9875 - \u4E2A\u4EBA' },
            { label: '\u6D3B\u52A8\u9875' },
            { label:'\u98DF\u54C1\u5217\u8868' },
            { label: '\u6E38\u620F\u5217\u8868', disabled: true }
          ])
          placementList = [
            'bottom',
            'bottom-start',
            'bottom-end',
            'top',
            'top-start',
            'top-end'
          ]
          placement = ref('bottom');
          return { dropdownList, dropdownItems, placementList, placement };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .dropdown-placement-demo {
        display: flex;
        max-width: 700px;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .options {
          width: 100%;
        }
        > div {
          margin: 1em;
        }
      }
    </style>`},{title:"\u89E6\u53D1\u65B9\u5F0F",desc:"\u53EF\u4EE5\u914D\u7F6E\u5C5E\u6027 trigger \u4E3A click \u6FC0\u6D3B\u6216\u8005 hover \u6FC0\u6D3B\uFF0C\u9ED8\u8BA4hover\u6FC0\u6D3B\u3002",dropdown:[{label:"\u67E5\u770B\u79C1\u4FE1"},{label:"\u67E5\u770B\u56DE\u590D"},{label:"\u67E5\u770B\u65B0\u7C89\u4E1D"}],visibleArrow:!0,components:[{label:"hover"},{trigger:"click",label:"click"},{trigger:"contextmenu",label:"\u53F3\u952E"},{trigger:"custom",label:"\u624B\u52A8\u63A7\u5236",visible:!1}],template:`    <template>
      <div class='dropdown-trigger-demo'>
        <div class='options'>
          <div>
            <span>\u83DC\u5355\u7BAD\u5934\uFF1A</span>
            <w-switch v-model='visibleArrow' open-text='\u663E\u793A' off-text='\u9690\u85CF'
              text-inline />
          </div>
        </div>
        <div v-for='dropdown in dropdownList'>
          <div style="margin-bottom:1em;">
            <w-tag v-if="dropdown.trigger==='custom'" type='success' @click='dropdown.visible=!dropdown.visible'>
              \u70B9\u51FB - {{ dropdown.visible ? '\u9690\u85CF' : '\u663E\u793A' }}
            </w-tag>
          </div>
          <w-dropdown :trigger='dropdown.trigger' :visible='dropdown.visible' :visible-arrow='visibleArrow'>
            <span class="w-dropdown-link">
              \u4E0B\u62C9\u83DC\u5355 {{ dropdown.label }} <w-icon name='down' />
            </span>
            <template #dropdown>
              <w-dropdown-menu>
                <w-dropdown-item v-for='item in dropdownItems'>
                  {{ item.label }}
                </w-dropdown-item>
              </w-dropdown-menu>
            </template>
          </w-dropdown>  
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            dropdownList: [
              { label: 'hover' },
              { trigger: 'click', label: 'click' },
              { trigger: 'contextmenu', label: '\u53F3\u952E' },
              { trigger: 'custom', label: '\u624B\u52A8\u63A7\u5236', visible: false }
            ],
            dropdownItems: [
              { label: '\u67E5\u770B\u79C1\u4FE1' },
              { label: '\u67E5\u770B\u56DE\u590D' },
              { label: '\u67E5\u770B\u65B0\u7C89\u4E1D' }
            ],
            visibleArrow: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const dropdownList = reactive([
            { label: 'hover' },
            { trigger: 'click', label: 'click' },
            { trigger: 'contextmenu', label: '\u53F3\u952E' },
            { trigger: 'custom', label: '\u624B\u52A8\u63A7\u5236', visible: false }
          ]),
          dropdownItems = eactive([
            { label: '\u67E5\u770B\u79C1\u4FE1' },
            { label: '\u67E5\u770B\u56DE\u590D' },
            { label: '\u67E5\u770B\u65B0\u7C89\u4E1D' }
          ]),
          visibleArrow = ref(true);
          return { dropdownList, dropdownItems, visibleArrow };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .dropdown-trigger-demo {
        display: flex;
        max-width: 700px;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .options {
          width: 100%;
          > div {
            display: flex;
          }
        }
        > div {
          margin: 1em;
        }
      }
    </style>`},{title:"\u89E6\u53D1\u5BF9\u8C61",desc:"\u53EF\u4F7F\u7528\u6587\u5B57\u3001\u6309\u94AE\u3001\u56FE\u6807\u3001\u56FE\u7247\u7B49\u89E6\u53D1\u4E0B\u62C9\u83DC\u5355\u3002 \u8BBE\u7F6E disabled \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u7981\u7528 Dropdown (\u7981\u7528\u65F6 Item \u4E0D\u4F1A\u6E32\u67D3\u51FA\u6765)\u3002",dropdown:[{label:"\u4E2D \u6587"},{label:"\u82F1 \u8BED"},{label:"\u610F\u5927\u5229\u8BED"},{label:"\u6CD5 \u8BED",disabled:!0,divided:!0}],disabled:!0,components:[{el:"span"},{el:"button",trigger:"click"},{el:"icon",trigger:"contextmenu"},{el:"img"}],template:`    <template>
      <div class='dropdown-demo'>
        <div class='options'>
          <div>
            <span>\u662F\u5426\u7981\u7528\uFF1A</span>
            <w-switch v-model='disabled' open-text='\u662F' off-text='\u5426' text-inline />
          </div>
        </div>  
        <div v-for='dropdown in dropdownList'>
          <w-dropdown :trigger='dropdown.trigger' :disabled='disabled'>
            <span class='w-dropdown-link' v-if="dropdown.el==='span' || !dropdown.el">
              \u8BED\u8A00 <w-icon name='down' />
            </span>
            <w-button type='primary' class='w-dropdown-link' v-else-if="dropdown.el==='button'">
              \u8BED\u8A00 <w-icon name='down' />
            </w-button>
            <w-avator v-else-if="dropdown.el==='img'" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.3lian.com%2Fgif%2Fmore%2F11%2F201210%2Ff119007d442b44bafd76059ede185e72.jpg&refer=http%3A%2F%2Fimg1.3lian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621579563&t=ec43d94c35f1463c73bf049b8faee569' />
            <w-icon v-else name='home-s' size='40px' />
            <template #dropdown>
              <w-dropdown-menu>
                <w-dropdown-item v-for='item in dropdownItems'>
                  {{ item.label }}
                </w-dropdown-item>
              </w-dropdown-menu>
            </template>
          </w-dropdown>  
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return { 
            dropdownList: [
              { el: 'span' },
              { el: 'button', trigger: 'click' },
              { el: 'icon', trigger: 'contextmenu' },
              { el: 'img' }
            ],
            dropdownItems:[
              { label: '\u4E2D \u6587' },
              { label: '\u82F1 \u8BED' },
              { label: '\u610F\u5927\u5229\u8BED' },
              { label: '\u6CD5 \u8BED', disabled: true, divided: true }
            ],
            disabled: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const dropdownList = reactive([
            { el: 'span' },
            { el: 'button', trigger: 'click' },
            { el: 'icon', trigger: 'contextmenu' },
            { el: 'img' }
          ]),
          dropdownItems = reactive([
            { label: '\u4E2D \u6587' },
            { label: '\u82F1 \u8BED' },
            { label: '\u610F\u5927\u5229\u8BED' },
            { label: '\u6CD5 \u8BED', disabled: true, divided: true }
          ]),
         disabled = ref(false);
          return { dropdownList, dropdownItems, disabled };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .dropdown-demo {
        display: flex;
        max-width: 700px;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .options {
          width: 100%;
          > div {
            display: flex;
          }
        }
        > div {
          margin: 1em;
        }
      }
    </style>`},{title:"\u83DC\u5355\u9690\u85CF",desc:"Dropdown \u9ED8\u8BA4\u5728\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u88AB\u9690\u85CF\uFF0C\u8BBE\u7F6E hide-on-click \u5C5E\u6027\u4E3Afalse\u53EF\u4EE5\u53D6\u6D88\u9690\u85CF\u3002",dropdown:[{label:"\u624B\u673AAPP"},{label:"\u5E94\u7528\u4E2D\u5FC3"},{label:"\u8D26\u53F7\u8BBE\u7F6E"},{label:"\u9000\u51FA"}],hideOnClick:!1,components:[{},{trigger:"click",label:"\u70B9\u51FB",placement:"bottom-start"},{trigger:"contextmenu",label:"\u53F3\u51FB",placement:"bottom"},{trigger:"custom",label:"\u624B\u52A8\u63A7\u5236",placement:"bottom-end"}],template:`    <template>
      <div class='dropdown-demo'>
        <div class='options'>
          <div>
            <span>\u70B9\u51FB\u83DC\u5355\u540E\u9690\u85CF\uFF1A</span>
            <w-switch v-model='hideOnClick' open-text='\u662F' off-text='\u5426'
              text-inline />
          </div>
        </div>
        <div v-for='dropdown in dropdownList'>
          <div style='margin-bottom:1em;'>
            <w-tag v-if="dropdown.trigger==='custom'" type='success' @click='dropdown.visible=!dropdown.visible'>
              \u70B9\u51FB - {{dropdown.visible?'\u9690\u85CF':'\u663E\u793A'}}
            </w-tag>
          </div>
          <w-dropdown :trigger='dropdown.trigger' :visible='dropdown.visible' :hide-on-click='false'
            :hide-on-click='hideOnClick'>
            <span class="w-dropdown-link">
              \u4E0B\u62C9\u83DC\u5355 {{ dropdown.label }} <w-icon name='down' />
            </span>
            <template #dropdown>
              <w-dropdown-menu>
                <w-dropdown-item v-for='item in dropdownItems'>
                  {{ item.label }}
                </w-dropdown-item>
              </w-dropdown-menu>
            </template>
          </w-dropdown>  
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            dropdownList:[
              {},
              { trigger: 'click', label: '\u70B9\u51FB' },
              { trigger: 'contextmenu', label: '\u53F3\u51FB' },
              { trigger: 'custom', label: '\u624B\u52A8\u63A7\u5236' }
            ],
            dropdownItems: [
              { label: '\u624B\u673AAPP' },
              { label: '\u5E94\u7528\u4E2D\u5FC3' },
              { label: '\u8D26\u53F7\u8BBE\u7F6E' },
              { label: '\u9000\u51FA' }
            ],
            hideOnClick: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const dropdownList = reactive([
            {},
            { trigger: 'click', label: '\u70B9\u51FB' },
            { trigger: 'contextmenu', label: '\u53F3\u51FB' },
            { trigger: 'custom', label: '\u624B\u52A8\u63A7\u5236' }
          ]);
          const dropdownItems=reactive([
            { label: '\u624B\u673AAPP' },
            { label: '\u5E94\u7528\u4E2D\u5FC3' },
            { label: '\u8D26\u53F7\u8BBE\u7F6E' },
            { label: '\u9000\u51FA' }
          ]);
          const hideOnClick = ref(false);
          return { dropdownList, dropdownItems, hideOnClick };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .dropdown-demo {
        display: flex;
        max-width: 700px;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .options {
          width: 100%;
          > div {
            display: flex;
          }
        }
        > div {
          margin: 1em;
        }
      }
    </style>`},{title:"\u6307\u4EE4\u4E8B\u4EF6",desc:"\u7ED9 DropdownItem \u6DFB\u52A0 command \u5C5E\u6027\uFF0C\u7ED9 Dropdown \u6DFB\u52A0 clickItem \u4E8B\u4EF6(\u53C2\u6570\u4E3A DropdownItem \u7684command \u5C5E\u6027)\u3002\u7528\u6237\u70B9\u51FB\u83DC\u5355\u540E\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879\uFF0C\u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002",dropdown:[{label:"\u4E2A\u4EBA\u4E3B\u9875",command:"my-page"},{label:"\u8BBE\u7F6E",command:"set"},{label:"\u5E2E\u52A9",command:"help"}],components:[{placement:"bottom"}],template:`    <template>
      <w-dropdown @clickItem='clickItem'>
        <span class='w-dropdown-link'>
          \u4E0B\u62C9\u83DC\u5355 <w-icon name='down' />
        </span>
        <template #dropdown>
          <w-dropdown-menu>
            <w-dropdown-item v-for='item in dropdownItems' :command='item.command'>
              {{ item.label }}
            </w-dropdown-item>
          </w-dropdown-menu>
        </template>
      </w-dropdown>  
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            dropdownItems: [
              { label:'\u4E2A\u4EBA\u4E3B\u9875', command: 'my-page'},
              { label:'\u8BBE\u7F6E', command: 'set'},
              { label:'\u5E2E\u52A9', command: 'help'}
            ]
          }
        },
        methods: {
          clickItem(command) {
            command && alert('\u5F53\u524D\u9879\u7684\u6307\u4EE4\u4E3A\uFF1A' + command)
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const dropdownItems = [
            { label:'\u4E2A\u4EBA\u4E3B\u9875', command: 'my-page'},
            { label:'\u8BBE\u7F6E', command: 'set'},
            { label:'\u5E2E\u52A9', command: 'help'}
          ];
          const clickItem = command => command && alert('\u5F53\u524D\u9879\u7684\u6307\u4EE4\u4E3A\uFF1A' + command);
          return { dropdownItems, clickItem };
        }
      })
    <\/script>`},{title:"\u663E\u9690\u52A8\u753B",desc:"\u8BBE\u7F6E animate \u5C5E\u6027\uFF0C\u9009\u62E9 Dropdown \u663E\u9690\u7684\u52A8\u753B\u3002\u9ED8\u8BA4\u662Ffold (\u6298\u53E0\u6548\u679C)",dropdown:[{label:"\u9EC4\u91D1\u7CD5"},{label:"\u7345\u5B50\u982D"},{label:"\u87BA\u8784\u7C89"}],animateList:["fold","slide","fade","zoom"],animate:"fold",openDelay:100,hideDelay:100,components:[{}],template:`    <template>
      <div class='dropdown-animate-demo'>
        <div class='options'>
          <div>
            <span>\u663E\u793A\u5EF6\u8FDF\uFF1A</span>
            <w-input-number v-model='openDelay' size='medium' 
              :max='5000' :min='0' :step='100' />
          </div>
          <div>
            <span>\u9690\u85CF\u5EF6\u8FDF\uFF1A</span>
            <w-input-number v-model='hideDelay' size='medium'
              :max='5000' :min='0' :step='100' />
          </div>
          <div>
            <span>\u52A8\u753B\uFF1A</span>
            <w-radio-group v-model:checked='animate'>
              <w-radio v-for='i in animateList' :value='i' />
            </w-radio-group>
          </div>
        </div>  
        <w-dropdown>
          <span class='w-dropdown-link'>
            \u4E0B\u62C9\u83DC\u5355 <w-icon name='down' />
          </span>
          <template #dropdown>
            <w-dropdown-menu>
              <w-dropdown-item v-for='item in dropdownItems'>
                {{ item.label }}
              </w-dropdown-item>
            </w-dropdown-menu>
          </template>
        </w-dropdown>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            dropdownItems: [
              { label: '\u9EC4\u91D1\u7CD5' },
              { label: '\u7345\u5B50\u982D' },
              { label: '\u87BA\u8784\u7C89' }
            ],
            animateList: ['fold', 'slide', 'fade', 'zoom'],
            animate: 'fold',
            openDelay: 100,
            hideDelay: 100
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const dropdownItems = [
                  { label: '\u9EC4\u91D1\u7CD5' },
                  { label: '\u7345\u5B50\u982D' },
                  { label: '\u87BA\u8784\u7C89' }
                ],
                animateList = ['fold', 'slide', 'fade', 'zoom'],
                animate = ref('fold'),
                openDelay = ref(100),
                hideDelay = ref(100);
          return { dropdownItems, animateList, animate, openDelay, hideDelay };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .dropdown-animate-demo {
        display: flex;
        max-width: 700px;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .options {
          width: 100%;
          > div {
            margin-bottom: 1em;
          }
        }
        > div {
          margin: 1em;
        }
      }
    </style>`},{title:"\u5D4C\u5957\u7528\u6CD5",desc:"Dropdown \u53EF\u4EE5\u5D4C\u5957\uFF0C\u4E8C\u7EA7\u4EE5\u53CA\u4E8C\u7EA7\u4EE5\u4E0B\u7684 Dropdown \u9700\u8981\u8BBE\u7F6E placement \u5C5E\u6027\u4E3A left / right\uFF0C\u4E14\u4E0D\u652F\u6301 append-to-body \u5C5E\u6027\u3002",dropdown:[{label:"1-\u83DC\u5355A"},{label:"1-\u83DC\u5355B"},{label:"1-\u83DC\u5355C"},{label:"1-\u83DC\u5355\u56DB",divided:!0}],components:[{placement:"bottom",trigger:"click"}],template:`    <template>
      <w-dropdown style='margin:1em'>
        <span class='w-dropdown-link'>
          \u4E0B\u62C9\u83DC\u5355 <w-icon name='down' />
        </span>
        <template #dropdown>
          <w-dropdown-menu>
            <w-dropdown-item>1-\u83DC\u5355A</w-dropdown-item>
            <w-dropdown-item>1-\u83DC\u5355B</w-dropdown-item>
            <w-dropdown-item>1-\u83DC\u5355C</w-dropdown-item>
            <w-dropdown-item divided>
              <w-dropdown animate='fade' placement='right'>
                <w-dropdown-item >
                  1. \u83DC\u5355D <w-icon name='right' />
                </w-dropdown-item>
                <template #dropdown>
                  <w-dropdown-menu>
                    <w-dropdown-item>2. \u83DC\u5355A</w-dropdown-item>
                    <w-dropdown-item @click="clickItem('bb')">
                      2. \u83DC\u5355B (\u6709\u70B9\u51FB\u4E8B\u4EF6)  
                    </w-dropdown-item>
                    <w-dropdown-item>
                      <w-dropdown animate='fade' placement='right'>
                        <w-dropdown-item divided>
                          2. \u83DC\u5355C
                          <w-icon name='right' />
                        </w-dropdown-item>
                        <template #dropdown>
                          <w-dropdown-menu>
                            <w-dropdown-item>3. \u83DC\u5355A</w-dropdown-item>
                            <w-dropdown-item>3. \u83DC\u5355B</w-dropdown-item>
                            <w-dropdown-item divided>3. \u83DC\u5355C</w-dropdown-item>
                          </w-dropdown-menu>
                        </template>
                      </w-dropdown>
                    </w-dropdown-item>
                    <w-dropdown-item divided>2. \u83DC\u5355D</w-dropdown-item>
                    <w-dropdown-item divided>2. \u83DC\u5355E</w-dropdown-item>
                    <w-dropdown-item divided>2. \u83DC\u5355F</w-dropdown-item>
                  </w-dropdown-menu>
                </template> 
              </w-dropdown>
            </w-dropdown-item>
          </w-dropdown-menu>
        </template>
      </w-dropdown>
    </template>`}]),j={attribute:[{name:"placement",desc:"\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E (\u4E8C\u7EA7\u53CA\u4EE5\u4E0A\u7684\u83DC\u5355\u9009\u62E9right \u6216\u8005 left)",type:"string",optional:"top\u3001top-start\u3001top-end\u3001bottom\u3001bottom-start\u3001bottom-end\u3001right\u3001left",default:"bottom"},{name:"trigger",desc:"\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A",type:"string",optional:"hover\u3001click\u3001contextmenu\u3001custom",default:"hover"},{name:"append-to-body",desc:"\u6307\u5B9A\u4E0B\u62C9\u5217\u8868\u662F\u5426\u5728 body \u5143\u7D20\u4E0B (\u513F\u5B50\u8F88)\uFF0C\u53EA\u5BF9\u7B2C\u4E00\u7EA7\u83DC\u5355\u6709\u6548",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"fixed",desc:"\u5F53 appendToBody \u4E3Atrue\uFF0C\u5E76\u4E14\u89E6\u53D1\u5143\u7D20\u5904\u4E8E\u56FA\u5B9A\u5B9A\u4F4D\u65F6\uFF0C\u9700\u8981\u52A0\u6B64\u5C5E\u6027\u3002(\u5426\u5219\u5F53\u5C55\u793A\u4E0B\u62C9\u5217\u8868\u65F6\uFF0C\u6D4F\u89C8\u5668\u6EDA\u52A8\u6761\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0B\u62C9\u5217\u8868\u4E5F\u4F1A\u8DDF\u7740\u53D8)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"hide-on-click",desc:"\u662F\u5426\u5728\u70B9\u51FB\u83DC\u5355\u9879\u540E\u9690\u85CF\u83DC\u5355",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"visible-arrow",desc:"\u662F\u5426\u663E\u793A\u83DC\u5355\u8FB9\u7F18\u7684\u7BAD\u5934",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"open-delay",desc:"\u663E\u793A\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6 (\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548)",type:"number",optional:"\u2014\u2014\u2014",default:100},{name:"hide-delay",desc:"\u9690\u85CF\u4E0B\u62C9\u83DC\u5355\u7684\u5EF6\u65F6 (\u4EC5\u5728 trigger \u4E3A hover \u65F6\u6709\u6548)",type:"number",optional:"\u2014\u2014",default:100},{name:"animate",desc:"\u83DC\u5355\u52A8\u753B\u6548\u679C",type:"string",optional:"fold\u3001slide\u3001fade\u3001zoom",default:"fold"},{name:"visible",desc:"\u624B\u52A8\u63A7\u5236\u4E0B\u62C9\u83DC\u5355\u7684\u663E\u793A\uFF0C\u5728 trigger = custom \u65F6\u4F7F\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"menu-class",desc:"\u81EA\u5B9A\u4E49\u83DC\u5355\u7684 class",type:"string\u3001array",optional:"\u2014\u2014",default:!1},{name:"max-height",desc:"\u4E0B\u62C9\u83DC\u5355\u7684\u6700\u5927\u9AD8\u5EA6 (\u5F53\u6709\u5B50\u83DC\u5355\u65F6,\u5B50\u83DC\u5355\u7684 append-to-body \u5FC5\u987B\u4E3Atrue)",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"menu-match-select-width",desc:"\u4E0B\u62C9\u83DC\u5355\u548C\u89E6\u53D1\u5143\u7D20\u540C\u5BBD",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"visible-change",desc:"\u4E0B\u62C9\u83DC\u5355 \u663E\u9690\u7684\u56DE\u8C03",callbackParams:"\u663E\u793A\u4E3A true\uFF0C\u9690\u85CF\u4E3A false"},{name:"click-item",desc:"\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03",callbackParams:"(dropdown-item \u7684\u6307\u4EE4)"}],slot:[{name:"\u2014\u2014",desc:"\u89E6\u53D1\u4E0B\u62C9\u5217\u8868\u663E\u793A\u7684\u5143\u7D20\u3002 \u5FC5\u987B\u662F\u4E00\u4E2A\u5143\u7D20\u6216\u8005\u7EC4\u4EF6"},{name:"dropdown",desc:"\u4E0B\u62C9\u5217\u8868\uFF0C\u5FC5\u987B\u662F el-dropdown-menu \u7EC4\u4EF6"}]},N={attribute:[{name:"command",desc:"\u6307\u4EE4",type:"string\u3001number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon",desc:"\u56FE\u6807\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"divided",desc:"\u663E\u793A\u5206\u5272\u7EBF",type:"boolean",optional:"\u2014\u2014",default:!1}]};const T={class:"dropdownMenu-demo-list"},q={class:"options"},H={key:0},M=m("span",null,"\u65B9\u5411\uFF1A",-1),$={key:1},R=m("span",null,"\u83DC\u5355\u7BAD\u5934\uFF1A",-1),S={key:2},G=m("span",null,"\u662F\u5426\u7981\u7528\uFF1A",-1),J={key:3},K=m("span",null,"\u70B9\u51FB\u83DC\u5355\u540E\u9690\u85CF\uFF1A",-1),Q=m("span",null,"\u663E\u793A\u5EF6\u8FDF\uFF1A",-1),W=m("span",null,"\u9690\u85CF\u5EF6\u8FDF\uFF1A",-1),X=m("span",null,"\u52A8\u753B\uFF1A",-1),Y={key:0,style:{"margin-bottom":"1em"}},Z={key:0,class:"w-dropdown-link"},ee=a(" \u8BED\u8A00 \xA0 "),oe=a(" 2. \u83DC\u5355A "),te=a(" 2. \u83DC\u5355B (\u6709\u70B9\u51FB\u4E8B\u4EF6) "),de=a(" 2. \u83DC\u5355C "),ne=a(" 3. \u83DC\u5355A "),le=a(" 3. \u83DC\u5355B "),ae=a(" 3. \u83DC\u5355C "),ie=a(" 2. \u83DC\u5355D "),re=a(" 2. \u83DC\u5355E "),pe=a(" 2. \u83DC\u5355F "),se=a("Dropdown Menu Item"),be=O({setup(me){const x=f=>{f&&alert("\u5F53\u524D\u9879\u7684\u6307\u4EE4\u4E3A\uFF1A"+f)};return(f,F)=>{const D=p("w-radio"),A=p("w-radio-group"),_=p("w-switch"),C=p("w-input-number"),B=p("w-tag"),g=p("w-icon"),V=p("w-button"),E=p("w-avator"),r=p("w-dropdown-item"),v=p("w-dropdown-menu"),y=p("w-dropdown"),U=p("DemoItem"),I=p("TableList");return o(),l("div",T,[(o(!0),l(c,null,b(k(P),(t,w)=>(o(),s(U,{item:t,key:t.title},{default:d(()=>[m("div",q,[w===0?(o(),l("div",H,[M,n(A,{checked:t.placement,"onUpdate:checked":e=>t.placement=e},{default:d(()=>[(o(!0),l(c,null,b(t.placementList,e=>(o(),s(D,{key:e,value:e},null,8,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"])])):w===1?(o(),l("div",$,[R,n(_,{modelValue:t.visibleArrow,"onUpdate:modelValue":e=>t.visibleArrow=e,"open-text":"\u663E\u793A","off-text":"\u9690\u85CF","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):w===2?(o(),l("div",S,[G,n(_,{modelValue:t.disabled,"onUpdate:modelValue":e=>t.disabled=e,"open-text":"\u662F","off-text":"\u5426","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):w===3?(o(),l("div",J,[K,n(_,{modelValue:t.hideOnClick,"onUpdate:modelValue":e=>t.hideOnClick=e,"open-text":"\u662F","off-text":"\u5426","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):w===5?(o(),l(c,{key:4},[m("div",null,[Q,n(C,{modelValue:t.openDelay,"onUpdate:modelValue":e=>t.openDelay=e,size:"medium",max:5e3,min:0,step:100},null,8,["modelValue","onUpdate:modelValue"])]),m("div",null,[W,n(C,{modelValue:t.hideDelay,"onUpdate:modelValue":e=>t.hideDelay=e,size:"medium",max:5e3,min:0,step:100},null,8,["modelValue","onUpdate:modelValue"])]),m("div",null,[X,n(A,{checked:t.animate,"onUpdate:checked":e=>t.animate=e},{default:d(()=>[(o(!0),l(c,null,b(t.animateList,e=>(o(),s(D,{key:e,value:e},null,8,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"])])],64)):h("",!0)]),(o(!0),l(c,null,b(t.components,(e,ce)=>(o(),l("div",{key:e},[w===1||w===3?(o(),l("div",Y,[e.trigger==="custom"?(o(),s(B,{key:0,type:"success",onClick:i=>e.visible=!e.visible},{default:d(()=>[a(" \u70B9\u51FB - "+u(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)]),_:2},1032,["onClick"])):h("",!0)])):h("",!0),n(y,{visible:e.visible,"onUpdate:visible":i=>e.visible=i,placement:e.placement||t.placement,trigger:e.trigger,"visible-arrow":t.visibleArrow,"hide-on-click":t.hideOnClick,"open-delay":t.openDelay,animate:e.animate||t.animate,"hide-delay":t.hideDelay,"max-height":t.maxHeight,disabled:t.disabled,"item-center":!1,onClickItem:x},{dropdown:d(()=>[w!==6?(o(),s(v,{key:0},{default:d(()=>[(o(!0),l(c,null,b(t.dropdown,(i,L)=>(o(),s(r,{key:i,command:i.command,disabled:i.disabled,divided:i.divided},{default:d(()=>[i.command?(o(),l(c,{key:0},[a(u(" \u6307\u4EE4\uFF1A"+i.command),1)],64)):(o(),l(c,{key:1},[a(u(i.label),1)],64))]),_:2},1032,["command","disabled","divided"]))),128))]),_:2},1024)):(o(),s(v,{key:1},{default:d(()=>[(o(!0),l(c,null,b(t.dropdown,(i,L)=>(o(),s(r,{key:i,disabled:i.disabled,divided:i.divided},{default:d(()=>[L!==3?(o(),l(c,{key:0},[a(u(i.label),1)],64)):(o(),s(y,{key:1,"append-to-body":!0,animate:"zoom",trigger:e.trigger,"menu-class":"acaacac",placement:"right"},{dropdown:d(()=>[n(v,null,{default:d(()=>[n(r,{command:"aa"},{default:d(()=>[oe]),_:1}),n(r,{command:"bb",onClick:F[0]||(F[0]=we=>x("bb"))},{default:d(()=>[te]),_:1}),n(r,{divided:""},{default:d(()=>[n(y,{animate:"zoom",trigger:e.trigger,placement:"right"},{dropdown:d(()=>[n(v,null,{default:d(()=>[n(r,null,{default:d(()=>[ne]),_:1}),n(r,null,{default:d(()=>[le]),_:1}),n(r,{divided:""},{default:d(()=>[ae]),_:1})]),_:1})]),default:d(()=>[n(r,{command:"cc"},{default:d(()=>[de,n(g,{name:"right"})]),_:1})]),_:2},1032,["trigger"])]),_:2},1024),n(r,{command:"dd",disabled:"",divided:""},{default:d(()=>[ie]),_:1}),n(r,{command:"ee",divided:""},{default:d(()=>[re]),_:1}),n(r,{command:"ff",divided:""},{default:d(()=>[pe]),_:1})]),_:2},1024)]),default:d(()=>[n(r,null,{default:d(()=>[a(u(i.label)+" ",1),n(g,{name:"right"})]),_:2},1024)]),_:2},1032,["trigger"]))]),_:2},1032,["disabled","divided"]))),128))]),_:2},1024))]),default:d(()=>[e.el==="span"||!e.el?(o(),l("span",Z,[a(u(e.el!=="span"?"\u4E0B\u62C9\u83DC\u5355":"\u8BED\u8A00")+" "+u(e.label?e.label:"")+" ",1),n(g,{name:"down"})])):e.el==="button"?(o(),s(V,{key:1,type:"primary",class:"w-dropdown-link"},{default:d(()=>[ee,n(g,{name:"down"})]),_:1})):e.el==="img"?(o(),s(E,{key:2,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.3lian.com%2Fgif%2Fmore%2F11%2F201210%2Ff119007d442b44bafd76059ede185e72.jpg&refer=http%3A%2F%2Fimg1.3lian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621579563&t=ec43d94c35f1463c73bf049b8faee569"})):(o(),s(g,{key:3,name:"home-s",size:"40px",color:"#007fff"}))]),_:2},1032,["visible","onUpdate:visible","placement","trigger","visible-arrow","hide-on-click","open-delay","animate","hide-delay","max-height","disabled"])]))),128))]),_:2},1032,["item"]))),128)),n(I,{data:k(j)},null,8,["data"]),n(I,{data:k(N)},{default:d(()=>[se]),_:1},8,["data"])])}}});export{be as default};
