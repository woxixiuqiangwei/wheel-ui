const n={},t=`<!-- \u98CE\u683C\u6307\u5357.md -->
<!-- ### \u7B80\u4ECB -->
<h3 class='w-component-demo-item'>\u7B80\u4ECB</h3>
<p>\u5728\u5F00\u53D1 Wheel UI \u7EC4\u4EF6\u5E93\u65F6\uFF0C\u9075\u5B88\u7EA6\u5B9A\u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\u98CE\u683C\u6307\u5357\uFF0C\u6307\u5357\u5185\u5BB9\u8282\u9009\u81EA <a href="https://cn.vuejs.org/v2/style-guide/">Vue \u5B98\u65B9\u98CE\u683C\u6307\u5357</a> \u3002</p>
<!-- ### \u7EC4\u4EF6\u6570\u636E -->
<h3 class='w-component-demo-item'>\u7EC4\u4EF6\u6570\u636E</h3>
<p>\u7EC4\u4EF6\u7684 data \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p>
<pre><code class="language-javascript">// \u9519\u8BEF\u5199\u6CD5
export default {
  data: {
    name: 'zhangsan'
  }
};

// \u6B63\u786E\u5199\u6CD5
export default {
  data() {
    return {
      name: 'zhangsan'
    };
  }
};
</code></pre>
<!-- ### Prop\u5B9A\u4E49  -->
<h3 class='w-component-demo-item'>Prop\u5B9A\u4E49</h3>
<p>Prop \u7684\u5B9A\u4E49\u5E94\u8BE5\u5C3D\u91CF\u8BE6\u7EC6\uFF0C\u81F3\u5C11\u9700\u8981\u6307\u5B9A\u5176\u7C7B\u578B\u3002</p>
<pre><code class="language-javascript">// \u4E0D\u5EFA\u8BAE\u5199\u6CD5
props: ['status']

// \u5EFA\u8BAE\u5199\u6CD5
props: {
  status: String
}

//\u66F4\u597D\u7684\u5199\u6CD5
props: {
  status: {
    type: String,
    required: true,
    validator(value) {
      return [
        'success',
        'fail',
        'warning',
        'error',
      ].includes(value)
    }
  }
}
</code></pre>
<!-- ### Prop\u540D\u5927\u5C0F\u5199 -->
<h3 class='w-component-demo-item'>Prop\u540D\u5927\u5C0F\u5199</h3>
<p>\u5728\u58F0\u660E Prop \u7684\u65F6\u5019\uFF0C\u5176\u547D\u540D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 camelCase\uFF0C\u800C\u5728\u6A21\u677F\u4E2D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 kebab-case\u3002</p>
<pre><code class="language-javascript">// \u4E0D\u5EFA\u8BAE\u5199\u6CD5
export default {
  props: {
    'open-value': String
  },
};

// \u5EFA\u8BAE\u5199\u6CD5
export default {
  props: {
    openValue: String
  },
};

&lt;!-- \u4E0D\u5EFA\u8BAE\u5199\u6CD5 --&gt;
&lt;w-switch openValue='\u662F' /&gt;

&lt;!-- \u5EFA\u8BAE\u5199\u6CD5 --&gt;
&lt;w-switch open-value='\u662F' /&gt;
</code></pre>
<!-- ### Props\u987A\u5E8F -->
<h3 class='w-component-demo-item'>Props\u987A\u5E8F</h3>
<p>\u6807\u7B7E\u7684 Props \u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\uFF0C\u4F9D\u6B21\u4E3A\u6307\u4EE4\u3001\u5C5E\u6027\u548C\u4E8B\u4EF6\u3002</p>
<pre><code class="language-html">&lt;w-input
  v-if='if'
  v-show='show'
  v-model='value'
  ref='input'
  :maxlength='10'
  placeholder='\u8BF7\u8F93\u5165\u4FE1\u606F'
  clearable
  @input=&quot;onInput&quot;
  @change=&quot;onChange&quot;
/&gt;
</code></pre>
<!-- ### \u7EC4\u4EF6\u6587\u4EF6\u540D\u7684\u5927\u5C0F\u5199 -->
<h3 class='w-component-demo-item'>\u7EC4\u4EF6\u6587\u4EF6\u540D\u7684\u5927\u5C0F\u5199</h3>
<p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u6587\u4EF6\u540D\u5EFA\u8BAE\u8981\u4E48\u59CB\u7EC8\u662F\u5355\u8BCD\u5927\u5199\u5F00\u5934 (PascalCase)\uFF0C
\u8981\u4E48\u59CB\u7EC8\u662F\u6A2A\u7EBF\u8FDE\u63A5 (kebab-case)\u3002</p>
<pre><code class="language-javascript">// \u4E0D\u5EFA\u8BAE\u793A\u4F8B
components/
    |- customSwitch.vue
    |- custom-alert.vue

// \u5EFA\u8BAE\u793A\u4F8B
components/
    |- CustomSwitch.vue
    |- CustomAlert.vue

// \u6216\u8005
components/
    |- custom-switch.vue
    |- custom-alert.vue
</code></pre>
<!-- ### \u7D27\u5BC6\u8026\u5408\u7684\u7EC4\u4EF6\u540D -->
<h3 class='w-component-demo-item'>\u7D27\u5BC6\u8026\u5408\u7684\u7EC4\u4EF6\u540D</h3>
<p>\u7236\u7EC4\u4EF6\u7D27\u5BC6\u8026\u5408\u7684\u5B50\u7EC4\u4EF6\u5E94\u8BE5\u4EE5\u7236\u7EC4\u4EF6\u540D\u4F5C\u4E3A\u524D\u7F00\u547D\u540D\u3002</p>
<pre><code class="language-javascript">// \u4E0D\u5EFA\u8BAE\u793A\u4F8B
components/
    |- TabList.vue
    |- TabItem.vue
    \u2514\u2500 TabButton.vue

// \u5EFA\u8BAE\u793A\u4F8B
components/
    |- TabList.vue
    |- TabListItem.vue
    \u2514\u2500 TabListItemButton.vue
</code></pre>
<!-- ### \u81EA\u95ED\u5408\u7EC4\u4EF6 -->
<h3 class='w-component-demo-item'>\u81EA\u95ED\u5408\u7EC4\u4EF6</h3>
<p>\u82E5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6216\u8005\u6807\u7B7E\u4E2D\u6CA1\u6709\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u5E94\u8BE5\u5199\u6210\u81EA\u95ED\u5408\u3002</p>
<pre><code class="language-html">// \u4E0D\u5EFA\u8BAE\u5199\u6CD5
&lt;my-custom-component&gt;&lt;/my-custom-component&gt;
&lt;div id='test'&gt;&lt;/div&gt;

// \u5EFA\u8BAE\u5199\u6CD5
&lt;my-custom-component /&gt;
&lt;div id='test' /&gt;
</code></pre>
<!-- ### \u6307\u4EE4\u7F29\u5199 -->
<h3 class='w-component-demo-item'>\u6307\u4EE4\u7F29\u5199</h3>
<p>\u6307\u4EE4\u7F29\u5199\uFF0C\u7528 : \u8868\u793A v-bind: \uFF0C\u7528 @ \u8868\u793A v-on:</p>
<pre><code class="language-html">// \u4E0D\u5EFA\u8BAE\u5199\u6CD5
&lt;input v-bind:value='value' v-on:input='onInput' /&gt;

// \u5EFA\u8BAE\u5199\u6CD5
&lt;input :value='value' @input='onInput' /&gt;
</code></pre>
<!-- ### \u9876\u7EA7\u5143\u7D20\u7684\u987A\u5E8F -->
<h3 class='w-component-demo-item'>\u9876\u7EA7\u5143\u7D20\u7684\u987A\u5E8F</h3>
<p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u91CC\u5E94\u8BE5\u8BA9 &lt;script&gt;\u3001&lt;template&gt; \u548C &lt;style&gt; \u6807\u7B7E\u7684\u987A\u5E8F\u4FDD\u6301\u4E00\u81F4\u3002
\u4E14 &lt;style&gt; \u8981\u653E\u5728\u6700\u540E\uFF0C\u56E0\u4E3A\u53E6\u5916\u4E24\u4E2A\u6807\u7B7E\u81F3\u5C11\u8981\u6709\u4E00\u4E2A\u3002</p>
<pre><code class="language-html">//\u4E0D\u5EFA\u8BAE\u5199\u6CD5

&lt;!-- ComponentA.vue --&gt;
&lt;script&gt;/* ... */&lt;/script&gt;
&lt;template&gt;...&lt;/template&gt;
&lt;style&gt;/* ... */&lt;/style&gt;

&lt;!-- ComponentB.vue --&gt;
&lt;template&gt;...&lt;/template&gt;
&lt;script&gt;/* ... */&lt;/script&gt;
&lt;style&gt;/* ... */&lt;/style&gt;

//\u5EFA\u8BAE\u5199\u6CD5

&lt;!-- ComponentA.vue --&gt;
&lt;template&gt;...&lt;/template&gt;
&lt;script&gt;/* ... */&lt;/script&gt;
&lt;style&gt;/* ... */&lt;/style&gt;

&lt;!-- ComponentB.vue --&gt;
&lt;template&gt;...&lt;/template&gt;
&lt;script&gt;/* ... */&lt;/script&gt;
&lt;style&gt;/* ... */&lt;/style&gt;
</code></pre>
`;export{n as attributes,t as html};
