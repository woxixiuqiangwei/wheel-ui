import{r as V,d as N,m as d,a as c,o as a,g as n,H as v,I as b,c as f,w as o,b as m,k as w,y as u,z as y,t as _,N as C,O as z,v as P,R as I}from"./vendor.c0366ad2.js";const U=V([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E type \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u7684\u7C7B\u578B\u3002",components:[{label:"\u6807\u7B7E\u4E00"},{label:"\u6807\u7B7E\u4E8C",type:"success"},{label:"\u6807\u7B7E\u4E09",type:"warning"},{label:"\u6807\u7B7E\u56DB",type:"danger"}],template:`    <template>
      <div class='test'>
        <w-tag>\u6807\u7B7E\u4E00</w-tag>
        <w-tag type='success'>\u6807\u7B7E\u4E8C</w-tag>
        <w-tag type='warning'>\u6807\u7B7E\u4E09</w-tag>
        <w-tag type='danger'>\u6807\u7B7E\u56DB</w-tag>
      </div>
    </template>
    <style>
      .test .w-tag {
        margin: 1em;
      }
    </style>`},{title:"\u53EF\u5220\u9664\u6807\u7B7E",desc:"\u8BBE\u7F6E closable \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u662F\u5426\u53EF\u5220\u9664\u3002(\u9ED8\u8BA4\u4E0D\u53EF\u5220\u9664) \u8BBE\u7F6E transition \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u5220\u9664\u65F6\u7684\u6709\u52A8\u753B\u3002(\u9ED8\u8BA4\u65E0\u52A8\u753B)",closable:!0,transition:"zoom",components:[{label:"\u6807\u7B7E\u4E00",value:!0},{label:"\u6807\u7B7E\u4E8C",type:"success",value:!0},{label:"\u6807\u7B7E\u4E09",type:"warning",value:!0},{label:"\u6807\u7B7E\u56DB",type:"danger",value:!0}],template:`    <template>
      <div class='test'>
        <w-tag v-for='item in list' v-show='item.value' :key='item' :type='item.type' 
          closable transition @close='item.value=false'>
          {{item.label}}
        </w-tag>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { label: '\u6807\u7B7E\u4E00', value: true },
              { label: '\u6807\u7B7E\u4E8C', type: 'success', value: true },
              { label: '\u6807\u7B7E\u4E09', type: 'warning', value: true },
              { label: '\u6807\u7B7E\u56DB', type: 'danger', value: true }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
            { label: '\u6807\u7B7E\u4E00', value: true },
            { label: '\u6807\u7B7E\u4E8C', type: 'success', value: true },
            { label: '\u6807\u7B7E\u4E09', type: 'warning', value: true },
            { label: '\u6807\u7B7E\u56DB', type: 'danger', value: true }
          ]);
          return { list };
        }
      })
    <\/script>`,style:`
    <style>
      .test .w-tag {
        margin: 1em;
      }
    </style>`},{title:"\u4E0D\u540C\u5C3A\u5BF8",desc:"\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u7684\u5C3A\u5BF8\u3002",components:[{label:"\u5927\u53F7\u6807\u7B7E",size:"big"},{label:"\u9ED8\u8BA4\u6807\u7B7E"},{label:"\u5C0F\u53F7\u6807\u7B7E",size:"small"},{label:"\u8D85\u5C0F\u6807\u7B7E",size:"mini"}],template:`    <template>
      <div class='test'>
        <w-tag size='big'>\u5927\u53F7\u6807\u7B7E</w-tag>
        <w-tag>\u9ED8\u8BA4\u6807\u7B7E</w-tag>
        <w-tag size='small'>\u5C0F\u53F7\u6807\u7B7E</w-tag>
        <w-tag size='mini'>\u8D85\u5C0F\u6807\u7B7E</w-tag>
      </div>
    </template>
    <style>
      .test .w-tag {
        margin: 1em;
      }
    </style>`},{title:"\u4E0D\u540C\u4E3B\u9898",desc:"\u8BBE\u7F6E effect \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u7684\u4E3B\u9898\u3002",effect:!0,components:[{list:[{label:"\u6807\u7B7E\u4E00",effect:"dark"},{label:"\u6807\u7B7E\u4E8C",type:"success",effect:"dark"},{label:"\u6807\u7B7E\u4E09",type:"warning",effect:"dark"},{label:"\u6807\u7B7E\u56DB",type:"danger",effect:"dark"}]},{list:[{label:"\u6807\u7B7E\u4E00",effect:"plain"},{label:"\u6807\u7B7E\u4E8C",type:"success",effect:"plain"},{label:"\u6807\u7B7E\u4E09",type:"warning",effect:"plain"},{label:"\u6807\u7B7E\u56DB",type:"danger",effect:"plain"}]},{list:[{label:"\u6807\u7B7E\u4E00",effect:"dot"},{label:"\u6807\u7B7E\u4E8C",type:"success",effect:"dot"},{label:"\u6807\u7B7E\u4E09",type:"warning",effect:"dot"},{label:"\u6807\u7B7E\u56DB",type:"danger",effect:"dot"}]}],template:`    <template>
      <div class='group'>
        <w-tag effect='dark'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag type='success' effect='dark'>\u6807\u7B7E\u4E8C</w-tag>
        <w-tag type='warning' effect='dark'>\u6807\u7B7E\u4E09</w-tag>
        <w-tag type='danger' effect='dark'>\u6807\u7B7E\u56DB</w-tag>
      </div>
      <div class='group'>
        <w-tag effect='plain'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag type='success' effect='plain'>\u6807\u7B7E\u4E8C</w-tag>
        <w-tag type='warning' effect='plain'>\u6807\u7B7E\u4E09</w-tag>
        <w-tag type='danger' effect='plain'>\u6807\u7B7E\u56DB</w-tag>
      </div>
      <div class='group'>
        <w-tag effect='dot'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag type='success' effect='dot'>\u6807\u7B7E\u4E8C</w-tag>
        <w-tag type='warning' effect='dot'>\u6807\u7B7E\u4E09</w-tag>
        <w-tag type='danger' effect='dot'>\u6807\u7B7E\u56DB</w-tag>
      </div>
    </template>
    <style>
      .group .w-tag {
        margin: 1em;
      }
    </style>`},{title:"\u589E\u52A0\u56FE\u6807",desc:"\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u7684\u56FE\u6807\u3002(effect='dot'\u65F6 \u4E0D\u80FD\u6DFB\u52A0\u6807\u7B7E) \u8BBE\u7F6E icon-position \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u7684\u56FE\u6807\u3002",effect:!0,iconPosition:"left",components:[{list:[{label:"\u6807\u7B7E\u4E00",icon:"zan"},{label:"\u6807\u7B7E\u4E8C",type:"success",icon:"love"}]},{list:[{label:"\u6807\u7B7E\u4E00",effect:"dark",icon:"zan"},{label:"\u6807\u7B7E\u4E8C",effect:"dark",type:"success",icon:"love",color:"gold"}]},{list:[{label:"\u6807\u7B7E\u4E00",effect:"plain",icon:"zan"},{label:"\u6807\u7B7E\u4E8C",effect:"plain",type:"success",icon:"love",color:"gold"}]}],template:`    <template>
      <div class='group'>
        <w-tag effect='dark' icon='zan'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag effect='dark' icon='love' type='success' >\u6807\u7B7E\u4E8C</w-tag>
      </div>
      <div class='group'>
        <w-tag effect='plain' icon='zan'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag effect='plain' icon='love' type='success' color='gold'>\u6807\u7B7E\u4E8C</w-tag>
      </div>
      <div class='group'>
        <w-tag effect='dot' icon='zan'>\u6807\u7B7E\u4E00</w-tag>
        <w-tag effect='dot icon='love' type='success' color='gold'>\u6807\u7B7E\u4E8C</w-tag>
      </div>
    </template>
    <style>
      .group .w-tag {
        margin: 1em;
      }
    </style>`},{title:"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E",desc:"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 close \u4E8B\u4EF6\u6765\u5B9E\u73B0",dynamicTags:!0,transition:"zoom",components:[{label:"\u6807\u7B7E\u4E00",tag:!0},{label:"\u6807\u7B7E\u4E8C",tag:!0},{label:"\u6807\u7B7E\u4E09",tag:!0},{label:"\u6807\u7B7E\u56DB",tag:!0}],template:`    <template>
      <div class='test'>
        <div v-for='(item,index) in dynamicTags' :key='item' class='dynamic-tags'>
          <w-tag closable v-if='item.tag' @click='updateTag(item,index)'
            @close='handleClose(item)'>{{ item.label }}</w-tag>
          <input v-else ref='tag' v-model='item.label' class='input-tag'
            @blur='item.tag=true' @keyup.enter.native='item.tag=true' />
        </div>
        <input v-if='inputVisible' class='input-tag' v-model='inputValue'
          placeholder='\u8F93\u5165\u6807\u7B7E' ref="tagInput"
          @keyup.enter.native='handleInputConfirm' @blur='handleInputConfirm' />
        <w-button v-else class='button-new-tag' @click='showInput'>
          + New Tag
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            dynamicTags: [
              { label: '\u6807\u7B7E\u4E00', tag: true },
              { label: '\u6807\u7B7E\u4E8C', tag: true },
              { label: '\u6807\u7B7E\u4E09', tag: true }
            ],
            inputValue: '',
            inputVisible: false
          }
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(dynamicTags.indexOf(tag), 1);
          },
          handleInputConfirm = () => {
            const val = this.inputValue;
            if (val) this.dynamicTags.push({ label: val, tag:true });
            this.inputVisible = false;
            this.inputValue = '';
          },
          showInput() {
            this.inputVisible = true;
            setTimeout(() => this.$refs.tagInput.focus());
          },
          updateTag(item, index){
            item.tag = false;
            setTimeout(() => this.$refs.tag.focus());
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const tagInput = ref(null),
                tag = ref(null),
                dynamicTags = reactive([
                    { label: '\u6807\u7B7E\u4E00', tag: true },
                    { label: '\u6807\u7B7E\u4E8C', tag: true },
                    { label: '\u6807\u7B7E\u4E09', tag: true }
                ]),
                inputValue=ref(''),
                inputVisible=ref(false),
                handleClose = (tag) => dynamicTags.splice(dynamicTags.indexOf(tag), 1);
                handleInputConfirm = () => {
                  const val = inputValue.value;
                  if (val) dynamicTags.push({ label: val, tag: true });
                  inputVisible.value = false;
                  inputValue.value = '';
                };
                showInput = () => {
                  inputVisible.value = true;
                  setTimeout(() => tagInput.value.focus());
                };
                updateTag = (item, index) => {
                  item.tag = false;
                  setTimeout(() => tag.value.focus());
                };
          return {
            tagInput, dynamicTags, tag, inputValue, inputVisible,
            handleClose, handleInputConfirm, showInput, updateTag
          }
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .test {
        .dynamic-tags {
          display: inline-flex;
          .w-tag {
            margin: 1em;
          }
        }
        .button-new-tag,
        .input-new-tag {
          margin-left: 1em;
        }
        .input-tag {
          background-color: #fff;
          border-radius: 4px;
          border: 1px solid #007fff;
          color: #606266;
          display: inline-block;
          font-size: 15px;
          height: 36px;
          line-height: 36px;
          outline: none;
          padding: 0 12px;
          transition: border-color .2s cubic-bezier(.645,.045,.355,1);
          max-width: 150px;
        }
      }
    </style>`}]),L={attribute:[{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"success\u3001warning\u3001danger",default:"\u2014\u2014"},{name:"size",desc:"\u5C3A\u5BF8",type:"string",optional:"big\u3001small\u3001mini",default:"\u2014\u2014"},{name:"closable",desc:"\u662F\u5426\u53EF\u5173\u95ED",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"effect",desc:"\u4E3B\u9898",type:"string",optional:"dark\u3001plain\u3001dot",default:"\u2014\u2014"},{name:"color",desc:"\u6807\u7B7E\u7684\u80CC\u666F\u989C\u8272\u3002 (\u4F1A\u8986\u76D6 type\u3001effect \u81EA\u5E26\u7684\u989C\u8272)",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"transition",desc:"\u5173\u95ED\u65F6\u662F\u5426\u6709\u52A8\u753B",type:"string",optional:"fade\u3001zoom\u3001fold\u3001slide-up\u3001slide-down\u3001slide-left\u3001slide-right",default:"\u2014\u2014"},{name:"icon",desc:"\u8BBE\u7F6E\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon-position",desc:"\u8BBE\u7F6E\u56FE\u6807\u4F4D\u7F6E",type:"string",optional:"left\u3001right",default:"left"}],event:[{name:"close",desc:"\u5355\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1\u7684\u51FD\u6570",callbackParams:"\u2014\u2014"}]};const O={class:"tag-demo-list"},S={key:0,style:{width:"100%","margin-bottom":"1em"}},j=u(" \u56FE\u6807\u4F4D\u7F6E\uFF1A "),H={key:1},M=["onUpdate:modelValue","onBlur","onKeyup"],R={key:2},q=["onKeyup","onBlur"],G=u(" + \u6807\u7B7E "),X=N({setup(J){const k=d(null);V([{label:"\u6807\u7B7E\u4E00",tag:!0},{label:"\u6807\u7B7E\u4E8C",tag:!0},{label:"\u6807\u7B7E\u4E09",tag:!0}]);const h=d(null),p=d(""),r=d(!1),x=(i,s)=>{s?i.splice(i.indexOf(s),1):i.value=!1},T=i=>{let s=p.value;s&&i.push({label:s,tag:!0}),r.value=!1,p.value=""},B=()=>{r.value=!0,setTimeout(()=>k.value.focus())},E=(i,s)=>{i.tag=!1,setTimeout(()=>{h.value.focus()},10)};return(i,s)=>{const F=c("w-switch"),g=c("w-tag"),$=c("w-button"),D=c("DemoItem"),A=c("TableList");return a(),n("div",O,[(a(!0),n(v,null,b(I(U),(t,K)=>(a(),f(D,{item:t,key:t.title},{default:o(()=>[K===4?(a(),n("div",S,[j,m(F,{modelValue:t.iconPosition,"onUpdate:modelValue":e=>t.iconPosition=e,"text-inline":"","open-text":"\u53F3\u8FB9","off-text":"\u5DE6\u8FB9","open-value":"right","off-value":"left"},null,8,["modelValue","onUpdate:modelValue"])])):w("",!0),(a(!0),n(v,null,b(t.components,(e,Q)=>(a(),n("div",{key:e},[t.effect?(a(!0),n(v,{key:0},b(e.list,l=>(a(),n("div",{key:l},[m(g,{type:l.type,transition:t.transition,icon:l.icon,effect:l.effect,"icon-position":t.iconPosition,color:l.color},{default:o(()=>[u(y(l.label),1)]),_:2},1032,["type","transition","icon","effect","icon-position","color"])]))),128)):t.dynamicTags?(a(),n("div",H,[e.tag?(a(),f(g,{key:0,transition:t.transition,closable:!0,onClick:l=>E(e),onClose:l=>x(t.components,e,t.dynamicTags)},{default:o(()=>[u(y(e.label),1)]),_:2},1032,["transition","onClick","onClose"])):_((a(),n("input",{key:1,ref_for:!0,ref_key:"tag",ref:h,"onUpdate:modelValue":l=>e.label=l,class:"input-tag",onBlur:l=>{e.tag=!0,e.close=!1},onKeyup:z(l=>e.tag=!0,["enter","native"])},null,40,M)),[[C,e.label]])])):t.closable?(a(),n("div",R,[_(m(g,{transition:t.transition,type:e.type,closable:t.closable,onClose:l=>x(e)},{default:o(()=>[u(y(e.label),1)]),_:2},1032,["transition","type","closable","onClose"]),[[P,e.value]])])):(a(),f(g,{key:3,size:e.size,type:e.type},{default:o(()=>[u(y(e.label),1)]),_:2},1032,["size","type"]))]))),128)),r.value&&t.dynamicTags?_((a(),n("input",{key:1,"onUpdate:modelValue":s[0]||(s[0]=e=>p.value=e),placeholder:"\u8F93\u5165\u6807\u7B7E",class:"input-tag",ref_for:!0,ref_key:"tagInput",ref:k,onKeyup:z(e=>T(t.components),["enter","native"]),onBlur:e=>T(t.components)},null,40,q)),[[C,p.value]]):w("",!0),!r.value&&t.dynamicTags?(a(),f($,{key:2,class:"button-new-tag",onClick:B},{default:o(()=>[G]),_:1})):w("",!0)]),_:2},1032,["item"]))),128)),m(A,{data:I(L)},null,8,["data"])])}}});export{X as default};
