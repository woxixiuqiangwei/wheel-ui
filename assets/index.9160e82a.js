import{r as F,d as A,a as r,o as l,g as d,H as m,I as u,c as v,w as i,h as o,b as a,k as P,z as c,P as g,y as s,R as f}from"./vendor.c0366ad2.js";const k=F([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value / v-model \u5C5E\u6027\u6765\u7ED1\u5B9A\u9762\u677F\u7684\u503C\u3002 (\u9ED8\u8BA4\u4E3A\u6570\u7EC4\uFF0C\u53EF\u5C55\u793A\u591A\u4E2A\u9762\u677F\u9879)",value:["\u5361\u8010\u57FA"],components:[{title:"\u5361\u8010\u57FA",name:"\u5361\u8010\u57FA",content:"<div>\u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002</div>"},{title:"\u5357\u6000\u747E",name:"\u5357\u6000\u747E",content:"<div>\u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002</div>"},{title:"\u838E\u58EB\u6BD4\u4E9A",name:"\u838E\u58EB\u6BD4\u4E9A",content:"<div>\u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002</div>"},{title:"\u60E0\u7279\u66FC",name:"\u60E0\u7279\u66FC",content:"<div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>"}],template:`    <template>
      <div style='margin:1em 1em 2em 1em;'>\u5F53\u524Dvalue\u503C\uFF1A{{ arr }}</div>
      <w-collapse v-model='arr' style='margin:1em;'>
        <w-collapse-item title='\u5361\u8010\u57FA' name='\u5361\u8010\u57FA' >
          <div>
            \u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u5357\u6000\u747E' name='\u5357\u6000\u747E'>
          <div>
            \u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C
            \u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002
            \u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u838E\u58EB\u6BD4\u4E9A' name='\u838E\u58EB\u6BD4\u4E9A'>
          <div>
            \u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01
            \u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u60E0\u7279\u66FC' name='\u60E0\u7279\u66FC'>
          <div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>
        </w-collapse-item>
      </w-collapse>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            arr: ['1']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const arr = ref(['1']);
          return { arr };
        }
      })
    <\/script>`},{title:"\u624B\u98CE\u7434\u6548\u679C",desc:"\u8BBE\u7F6E accordion \u5C5E\u6027\uFF0C\u4FEE\u6539\u9762\u677F\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\u3002 (\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\u9879)",value:"",accordion:!0,components:[{title:"\u5361\u8010\u57FA",name:"\u5361\u8010\u57FA",content:"<div>\u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002</div>"},{title:"\u5357\u6000\u747E",name:"\u5357\u6000\u747E",content:"<div>\u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002</div>"},{title:"\u838E\u58EB\u6BD4\u4E9A",name:"\u838E\u58EB\u6BD4\u4E9A",content:"<div>\u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002</div>"},{title:"\u60E0\u7279\u66FC",name:"\u60E0\u7279\u66FC",content:"<div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>"}],template:`    <template>
      <div style='margin:1em 1em 2em 1em;'>\u5F53\u524Dvalue\u503C\uFF1A{{ value }}</div>
      <w-collapse v-model='arr' style='margin:1em;'>
        <w-collapse-item title='\u5361\u8010\u57FA' name='\u5361\u8010\u57FA' >
          <div>
            \u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u5357\u6000\u747E' name='\u5357\u6000\u747E'>
          <div>
            \u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C
            \u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002
            \u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u838E\u58EB\u6BD4\u4E9A' name='\u838E\u58EB\u6BD4\u4E9A'>
          <div>
            \u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01
            \u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u60E0\u7279\u66FC' name='\u60E0\u7279\u66FC'>
          <div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>
        </w-collapse-item>
      </w-collapse>
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
        setup() {
          const value = ref('');
          return { value };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898",desc:"\u8BBE\u7F6E title \u5C5E\u6027\uFF0C\u4FEE\u6539\u9762\u677F\u9879\u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u9762\u677F\u9879\u7684\u6807\u9898\u5185\u5BB9\u3002",value:["\u5361\u8010\u57FA"],titleSlot:!0,components:[{icon:"zan",title:"\u5361\u8010\u57FA",name:"\u5361\u8010\u57FA",content:"<div>\u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002</div>"},{icon:"star-s",title:"\u5357\u6000\u747E",name:"\u5357\u6000\u747E",content:"<div>\u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002</div>"},{icon:"error1",disabled:!0,title:"\u838E\u58EB\u6BD4\u4E9A",name:"\u838E\u58EB\u6BD4\u4E9A",content:"<div>\u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002</div>"},{icon:"love",title:"\u60E0\u7279\u66FC",name:"\u60E0\u7279\u66FC",content:"<div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>"}],template:`    <template>
      <div style='margin:1em 1em 2em 1em;'>\u5F53\u524Dvalue\u503C\uFF1A{{ arr }}</div>
      <w-collapse v-model='arr' style='margin:1em;'>
        <w-collapse-item title='\u5361\u8010\u57FA' name='\u5361\u8010\u57FA' >
          <template #title>
            <w-icon name='zan' size='19px' /> \u5361\u8010\u57FA 
          </template>
          <div>
            \u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u5357\u6000\u747E' name='\u5357\u6000\u747E'>
          <template #title>
            <w-icon name='star-s' size='19px' /> \u5357\u6000\u747E
          </template>
          <div>
            \u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002
            \u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u838E\u58EB\u6BD4\u4E9A' name='\u838E\u58EB\u6BD4\u4E9A' disabled>
          <template #title>
            <w-icon name='error1' size='19px' /> \u838E\u58EB\u6BD4\u4E9A
          </template>
          <div>
            \u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002
          </div>
        </w-collapse-item>
        <w-collapse-item title='\u60E0\u7279\u66FC' name='\u60E0\u7279\u66FC'>
          <template #title>
            <w-icon name='love' size='19px' /> \u60E0\u7279\u66FC
          </template>
          <div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>
        </w-collapse-item>
      </w-collapse>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            arr: ['\u5361\u8010\u57FA']
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const arr = ref(['\u5361\u8010\u57FA']);
          return { arr };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u7BAD\u5934",desc:`\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u5207\u6362\u7BAD\u5934\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7BAD\u5934\u3002<br>
      \u8BBE\u7F6E icon-position \u5C5E\u6027 left / right\uFF0C\u4FEE\u6539\u7BAD\u5934\u7684\u4F4D\u7F6E\u3002<br>
      \u8BBE\u7F6E icon-rotate \u5C5E\u6027\uFF0C\u4FEE\u6539\u9762\u677F\u5207\u6362\u65F6\u7BAD\u5934\u7684\u65CB\u8F6C\u89D2\u5EA6\u3002`,value:["\u5361\u8010\u57FA"],iconSlot:!0,icon:"love",accordion:!1,bordered:!1,iconPosition:"left",iconRotate:{close:0,open:90},components:[{title:"\u5361\u8010\u57FA",name:"\u5361\u8010\u57FA",content:"<div>\u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002</div>"},{title:"\u5357\u6000\u747E",name:"\u5357\u6000\u747E",content:"<div>\u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002</div>"},{disabled:!0,title:"\u838E\u58EB\u6BD4\u4E9A",name:"\u838E\u58EB\u6BD4\u4E9A",content:"<div>\u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002</div>"},{title:"\u60E0\u7279\u66FC",name:"\u60E0\u7279\u66FC",content:"<div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>"}],template:`    <template>
      <div class="options">
        <div>
          \u9762\u677F\u6A21\u5F0F\uFF1A
          <w-switch v-model='accordion' :border='true' open-text='\u624B\u98CE\u7434' off-text='\u591A\u9009' @change="(e)=>value=e?'':[]" />
        </div>
        <div>
          \u9762\u677F\u7C7B\u578B\uFF1A
          <w-switch v-model='bordered' :border='true' open-text='\u8FB9\u6846' off-text='\u7B80\u7EA6' />
        </div>
        <div>
          \u7BAD\u5934\u4F4D\u7F6E\uFF1A
          <w-switch v-model='iconPosition' :border='true' open-text='\u53F3\u8FB9' off-text='\u5DE6\u8FB9' open-value='right' off-value='left' />
        </div>
      </div>
      <div class='now-value'>\u5F53\u524Dvalue\u503C\uFF1A{{ arr }}</div>
      <w-collapse v-model='arr' :accordion='accordion' :bordered='bordered' :icon-position='iconPosition'
        :icon-rotate="item.iconPosition==='left'?{close:0,open:90}:{close:180,open:90}"
        style='margin:1em;'>
        <w-collapse-item title='\u5361\u8010\u57FA' name='\u5361\u8010\u57FA'>
          <div>\u8981\u4F7F\u522B\u4EBA\u559C\u6B22\u4F60\uFF0C\u9996\u5148\u4F60\u5F97\u6539\u53D8\u5BF9\u4EBA\u7684\u6001\u5EA6\uFF0C\u628A\u7CBE\u795E\u653E\u5F97\u8F7B\u677E\u4E00\u70B9\uFF0C\u8868\u60C5\u81EA\u7136\uFF0C\u7B11\u5BB9\u53EF\u63AC\uFF0C\u8FD9\u6837\u522B\u4EBA\u5C31\u4F1A\u5BF9\u4F60\u4EA7\u751F\u559C\u7231\u7684\u611F\u89C9\u4E86\u3002</div>
        </w-collapse-item>
        <w-collapse-item title='\u5357\u6000\u747E' name='\u5357\u6000\u747E'>
          <div>\u5728\u8270\u82E6\u4E2D\u6210\u957F\u6210\u529F\u4E4B\u4EBA\uFF0C\u5F80\u5F80\u7531\u4E8E\u5FC3\u7406\u7684\u9634\u5F71\uFF0C\u4F1A\u5BFC\u81F4\u53D8\u6001\u7684\u504F\u5DEE\u3002\u8FD9\u79CD\u504F\u5DEE\uFF0C\u4FBF\u662F\u5BF9\u793E\u4F1A\u3001\u5BF9\u4EBA\u4EEC\u59CB\u7EC8\u6709\u4E00\u79CD\u4EC7\u89C6\u7684\u654C\u610F\uFF0C\u4E0D\u76F8\u4FE1\u4EFB\u4F55\u4E00\u4E2A\u4EBA\uFF0C\u66F4\u4E0D\u540C\u60C5\u4EFB\u4F55\u4E00\u4E2A\u4EBA\u3002\u7231\u94B1\u5982\u547D\u7684\u60AD\u541D\uFF0C\u8FD8\u662F\u5FC3\u7406\u53D8\u6001\u4E0A\u7684\u6B21\u8981\u73B0\u8C61\u3002\u76F8\u53CD\u7684\uFF0C\u6709\u5668\u5EA6\u3001\u6709\u89C1\u8BC6\u7684\u4EBA\uFF0C\u4ED6\u867D\u7136\u4ECE\u8270\u82E6\u56F0\u96BE\u4E2D\u6210\u957F\uFF0C\u53CD\u800C\u66F4\u5177\u6709\u540C\u60C5\u5FC3\u548C\u6177\u6168\u597D\u4E49\u7684\u80F8\u895F\u6000\u62B1\u3002\u56E0\u4E3A\u4ED6\u61C2\u5F97\u4EBA\u751F\uFF0C\u77E5\u9053\u4E16\u60C5\u7684\u7518\u82E6\u3002</div>
        </w-collapse-item>
        <w-collapse-item title='\u838E\u58EB\u6BD4\u4E9A' name='\u838E\u58EB\u6BD4\u4E9A' disabled>
          <div>\u65F6\u95F4\u4F1A\u523A\u7834\u9752\u6625\u8868\u9762\u7684\u5F69\u9970\uFF0C\u4F1A\u5728\u7F8E\u4EBA\u7684\u989D\u4E0A\u6398\u6DF1\u6C9F\u6D45\u69FD\uFF1B\u4F1A\u5403\u6389\u7A00\u4E16\u4E4B\u73CD\uFF01\u5929\u751F\u4E3D\u8D28\uFF0C\u4EC0\u4E48\u90FD\u9003\u4E0D\u8FC7\u4ED6\u90A3\u6A2A\u626B\u7684\u9570\u5200\u3002</div>
        </w-collapse-item>
        <w-collapse-item title='\u60E0\u7279\u66FC' name='\u60E0\u7279\u66FC'>
          <div>\u5BF9\u4EBA\u4E0D\u5C0A\u656C\uFF0C\u9996\u5148\u5C31\u662F\u5BF9\u81EA\u5DF1\u7684\u4E0D\u5C0A\u656C\u3002</div>
        </w-collapse-item>
        <template #icon>
          <img style='width:35px' src='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/0f0e41fa87097ee7be1340245cda874fb36ae6c3.png' />
        </template>
      </w-collapse>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            arr: ['\u5361\u8010\u57FA'],
            iconPosition: 'left',
            bordered: false,
            accordion: false
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const arr = ref(['\u5361\u8010\u57FA']),
                iconPosition = ref('left'),
                bordered = ref(false),
                accordion = ref(false);
          return { arr, iconPosition, bordered, accordion };
        }
      })
    <\/script>`,style:`
    <style>
      .options {
        display: flex;
        margin: 1em;
      }
      .options > div{
        margin-right: 1em;
      }
      .now-value {
        margin: 1em 1em 2em 1em;
      }
    </style>`},{title:"\u9762\u677F\u5D4C\u5957",desc:"\u5728 Collapse \u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6 CollapseItem \u5185\uFF0C\u53EF\u4EE5\u518D\u6B21\u4F7F\u7528 Collapse \u7EC4\u4EF6\u6765\u5D4C\u5957\u4F7F\u7528\u9762\u677F\u3002",value:[],haveChild:!0,components:[{title:"\u7537\u978B",name:"\u7537\u978B",value:[],children:[{title:"\u4EBA\u5B57\u62D6"},{title:"\u7F57\u9A6C\u978B"},{title:"\u6D1E\u6D1E\u978B"},{title:"\u96E8\u978B"},{title:"\u9A6C\u4E01\u9774"}]},{title:"\u53A8\u5177",name:"\u53A8\u5177",value:[],children:[{title:"\u5BB6\u7528\u6E05\u6D01"},{title:"\u6BDB\u53D1\u62A4\u7406"},{title:"\u9910\u996E\u7528\u5177"},{title:"\u5BB6\u653F\u670D\u52A1"}]},{title:"\u73A9\u5177",name:"\u73A9\u5177",value:[],children:[{title:"\u62FC\u88C5\u79EF\u6728"},{title:"\u9065\u63A7\u73A9\u5177"},{title:"\u76CA\u667A\u73A9\u5177"},{title:"\u8FC7\u5BB6\u5BB6\u73A9\u5177"},{title:"\u6237\u5916\u73A9\u5177"}]}],template:`   <template>
      <div class='now-value'>\u5F53\u524Dvalue\u503C\uFF1A{{ arr }}</div>
      <w-collapse style='margin:1em;' v-model='value' :accordion='accordion' 
        :bordered='bordered' :icon-position='iconPosition' style='margin:1em;'>
        <w-collapse-item v-for='item in list' :name='item.title' :title='item.title'>
          <w-collapse v-model="item.value">
            <w-collapse-item v-for='children in item.children' :key='children.title' 
              :title='children.title' :name='children.title'>
              <div>{{ children.title }} \u3002\u3002\u3002</div>
              <div>{{ children.title }} \u3002\u3002\u3002</div>
            </w-collapse-item>
          </w-collapse>
        </w-collapse-item>
      </w-collapse>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            value: [],
            list: [
              {
                title: '\u7537\u978B',
                name: '\u7537\u978B',
                value: [],
                children: [
                  { title: '\u4EBA\u5B57\u62D6' }, { title: '\u7F57\u9A6C\u978B' },
                  { title: '\u6D1E\u6D1E\u978B' }, { title: '\u96E8\u978B' },
                  { title: '\u9A6C\u4E01\u9774' }
                ]
              },
              {
                title: '\u53A8\u5177',
                name: '\u53A8\u5177',
                value: [],
                children: [
                  { title: '\u5BB6\u7528\u6E05\u6D01' }, { title: '\u6BDB\u53D1\u62A4\u7406' },
                  { title: '\u9910\u996E\u7528\u5177' }, { title: '\u5BB6\u653F\u670D\u52A1' }
                ]
              },
              {
                title: '\u73A9\u5177',
                name: '\u73A9\u5177',
                value: [],
                children: [
                  { title: '\u62FC\u88C5\u79EF\u6728' }, { title: '\u9065\u63A7\u73A9\u5177' },
                  { title: '\u76CA\u667A\u73A9\u5177' }, { title: '\u8FC7\u5BB6\u5BB6\u73A9\u5177' },
                  { title: '\u6237\u5916\u73A9\u5177' }
                ]
              }
            ]
          } 
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const value = ref([]),
                list = reactive([
                  {
                    title: '\u7537\u978B',
                    value: [],
                    children: [
                      { title: '\u4EBA\u5B57\u62D6' }, { title: '\u7F57\u9A6C\u978B' },
                      { title: '\u6D1E\u6D1E\u978B' }, { title: '\u96E8\u978B' }, { title: '\u9A6C\u4E01\u9774' }
                    ]
                  },
                  {
                    title: '\u53A8\u5177',
                    value: [],
                    children: [
                      { title: '\u5BB6\u7528\u6E05\u6D01' }, { title: '\u6BDB\u53D1\u62A4\u7406' },
                      { title: '\u9910\u996E\u7528\u5177' }, { title: '\u5BB6\u653F\u670D\u52A1' }
                    ]
                  },
                  {
                    title: '\u73A9\u5177',
                    value: [],
                    children: [
                      { title: '\u62FC\u88C5\u79EF\u6728' }, { title: '\u9065\u63A7\u73A9\u5177' },
                      { title: '\u76CA\u667A\u73A9\u5177' }, { title: '\u8FC7\u5BB6\u5BB6\u73A9\u5177' },
                      { title: '\u6237\u5916\u73A9\u5177' }
                    ]
                  }
                ]);
          return{value,list};
        }
      })
    <\/script>`,style:`
    <style>
      .now-value {
        margin: 1em 1em 2em 1em;
      }
    </style>`}]),B={attribute:[{name:"value / v-model",desc:"\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677Fname(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u4E3Astring\u6216number\uFF0C\u5426\u5219\u7ED1\u5B9A\u503C\u7C7B\u578B\u4E3Aarray)",type:"string\u3001number\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"accordion",desc:"\u662F\u5426\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"bordered",desc:"\u5E26\u80CC\u666F\u3001\u8FB9\u6846\u98CE\u683C\u7684\u6298\u53E0\u9762\u677F (\u6709\u5D4C\u5957\u9762\u677F\u65F6\uFF0C\u5B50\u9762\u677F\u4F1A\u7EE7\u627F\u5C5E\u6027)",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon",desc:"\u7BAD\u5934\u56FE\u6807\u7684 name",type:"string",optional:"\u2014\u2014",default:"right"},{name:"icon-rotate",desc:"\u5F53\u9762\u677F\u5207\u6362\u65F6\u7BAD\u5934\u7684\u65CB\u8F6C\u89D2\u5EA6",type:"object",optional:"\u2014\u2014",default:"{close:0,open:90}"},{name:"icon-position",desc:"\u8BBE\u7F6E\u7BAD\u5934\u56FE\u6807\u4F4D\u7F6E (\u6709\u5D4C\u5957\u9762\u677F\u65F6\uFF0C\u5B50\u9762\u677F\u4E0D\u4F1A\u7EE7\u627F\u5C5E\u6027)",type:"string",optional:"left\u3001right",default:"left"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u6240\u6709\u7684\u9762\u677F\u9879",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"destroy-inactive-item",desc:"\u9690\u85CF\u9762\u677F\u9879\u65F6\u662F\u5426\u9500\u6BC1\u5185\u5BB9",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"change",desc:"\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1\uFF0C(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570\u7C7B\u578B\u4E3Astring || number\uFF0C\u5426\u5219\u4E3Aarray)",callbackParams:"string\u3001number\u3001array"}],slot:[{name:"icon",desc:"\u81EA\u5B9A\u4E49\u5207\u6362\u7BAD\u5934"},{name:"\u2014\u2014",desc:"\u5FC5\u987B\u662F CollapseItem \u7EC4\u4EF6"}]},D={attribute:[{name:"name",desc:"\u9762\u677F\u9879\u7684\u552F\u4E00\u6807\u5FD7\u7B26",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"title",desc:"\u9762\u677F\u9879\u7684\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"hide-arrow",desc:"\u662F\u5426\u9690\u85CF\u7BAD\u5934",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"title",desc:"\u9762\u677F\u9879\u7684\u6807\u9898"},{name:"\u2014\u2014",desc:"\u9762\u677F\u9879\u7684\u5185\u5BB9"}]};const U={class:"collapse-demo-list"},z={key:0,class:"options"},S=s(" \u9762\u677F\u6A21\u5F0F\uFF1A "),E=s(" \u9762\u677F\u7C7B\u578B\uFF1A "),I=s(" \u7BAD\u5934\u4F4D\u7F6E\uFF1A "),L=["innerHTML"],T=o("br",null,null,-1),N=o("img",{style:{width:"35px"},src:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/0f0e41fa87097ee7be1340245cda874fb36ae6c3.png"},null,-1),H=s("Collapse Item"),q=A({setup(R){const w=b=>{console.log("\u6539\u53D8\u503C\u4E86\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002",b)};return(b,j)=>{const p=r("w-switch"),x=r("w-icon"),_=r("w-collapse-item"),h=r("w-collapse"),C=r("DemoItem"),y=r("TableList");return l(),d("div",U,[(l(!0),d(m,null,u(f(k),(e,V)=>(l(),v(C,{item:e,key:e.title},{default:i(()=>[V===3?(l(),d("div",z,[o("div",null,[S,a(p,{modelValue:e.accordion,"onUpdate:modelValue":t=>e.accordion=t,border:!0,"open-text":"\u624B\u98CE\u7434","off-text":"\u591A\u9009",onChange:t=>e.value=t?"":[]},null,8,["modelValue","onUpdate:modelValue","onChange"])]),o("div",null,[E,a(p,{modelValue:e.bordered,"onUpdate:modelValue":t=>e.bordered=t,border:!0,"open-text":"\u8FB9\u6846\u80CC\u666F","off-text":"\u7B80\u7EA6"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",null,[I,a(p,{modelValue:e.iconPosition,"onUpdate:modelValue":t=>e.iconPosition=t,border:!0,"open-text":"\u53F3\u8FB9","off-text":"\u5DE6\u8FB9","open-value":"right","off-value":"left"},null,8,["modelValue","onUpdate:modelValue"])])])):P("",!0),o("div",null,"\u5F53\u524Dvalue\uFF1A"+c(e.value),1),a(h,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,accordion:e.accordion,bordered:e.bordered,"icon-position":e.iconPosition,"icon-rotate":e.iconSlot?e.iconPosition==="left"?e.iconRotate:{close:180,open:90}:void 0,icon:e.icon,onChange:w},g({default:i(()=>[(l(!0),d(m,null,u(e.components,t=>(l(),v(_,{key:t,name:t.name,title:t.title,disabled:t.disabled,"hide-arrow":t.hideArrow},g({default:i(()=>[e.haveChild?(l(),d(m,{key:1},[s(c(t.value),1),T,a(h,{modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,onChange:w},{default:i(()=>[(l(!0),d(m,null,u(t.children,n=>(l(),v(_,{key:n.title,title:n.title,name:n.title},{default:i(()=>[o("div",null,c(n.title)+" \u3002\u3002\u3002",1),o("div",null,c(n.title)+" \u3002\u3002\u3002",1)]),_:2},1032,["title","name"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):(l(),d("div",{key:0,innerHTML:t.content},null,8,L))]),_:2},[e.titleSlot?{name:"title",fn:i(()=>[a(x,{name:t.icon,size:"19px"},null,8,["name"]),s(" "+c(t.title),1)])}:void 0]),1032,["name","title","disabled","hide-arrow"]))),128))]),_:2},[e.iconSlot?{name:"icon",fn:i(()=>[N])}:void 0]),1032,["modelValue","onUpdate:modelValue","accordion","bordered","icon-position","icon-rotate","icon"])]),_:2},1032,["item"]))),128)),a(y,{data:f(B)},null,8,["data"]),a(y,{data:f(D)},{default:i(()=>[H]),_:1},8,["data"])])}}});export{q as default};
