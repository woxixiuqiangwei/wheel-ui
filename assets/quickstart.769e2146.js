const n={},i=`<!-- \u5FEB\u901F\u4E0A\u624B -->
<!-- ### \u521B\u5EFA\u9879\u76EE -->
<h3 class='w-component-demo-item'>\u521B\u5EFA\u9879\u76EE</h3>
<p>\u4F7F\u7528\u672C\u7EC4\u4EF6\u5E93\u9700\u8981 <a href="https://cli.vuejs.org/zh/guide/installation.html">Vue CLI 4.5.0\u53CA\u4EE5\u4E0A</a>  \u6216\u8005 <a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project">Vite</a> \u6784\u5EFA\u5DE5\u5177</p>
<p>1.\u5B89\u88C5\u811A\u624B\u67B6\u5DE5\u5177<br>
\xA0\xA0vue-cli</p>
<pre><code class="language-bash">$ npm install -g @vue/cli
# \u6216\u8005
$ yarn global add @vue/cli
</code></pre>
<p>2.\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE<br>
\xA0\xA0vue-cli</p>
<pre><code class="language-bash">$ vue create wheel-ui-demo
</code></pre>
<p>\xA0\xA0vite</p>
<pre><code class="language-bash">$ npm init vite@latest
# \u6216\u8005
$ yarn create vite
</code></pre>
<p>\u7136\u540E\u914D\u7F6E\u9879\u76EE</p>
<blockquote>
<p>\u82E5\u5B89\u88C5\u4F9D\u8D56\u7F13\u6162\u6216\u8005\u62A5\u9519\uFF0C\u53EF\u5C1D\u8BD5\u7528 cnpm \u5B89\u88C5 \uFF1Arm -rf node_modules &amp;&amp; cnpm install\u3002</p>
</blockquote>
<p>3.\u4F7F\u7528\u7EC4\u4EF6
\xA0\xA0</p>
<pre><code class="language-bash">$ npm i gulu-for-ui
</code></pre>
<style>
  .now-component-list > summary:hover {
    color: #007fff !important;
  }
  .now-component-list > div {
    display: flex;
    background-color: #f6f8fa;
    margin-top: 1em;
    padding: 1em 1em 0;
    border-right: 4px;
    overflow: auto;
    white-space: nowrap;
  }
  .now-component-list > div > .item {
    margin: 0 .8em;
  }
  @media(max-width: 500px) {
    .now-component-list > div > .item {
      margin: 0 .5em;
    }
  }
</style>
<details class='now-component-list'>
  <summary>\u76EE\u524D\u7684\u7EC4\u4EF6\u5217\u8868 (46\u4E2A)</summary>
  <div>
    <div class='item'>
      <p>Basic \u57FA\u7840\u7EC4\u4EF6</p>
      <ul> 
        <li>Icon</li>
        <li>Button</li>
        <li>Layout</li>
        <li>Grid</li>
      </ul>
    </div>
    <div class='item'>
      <p>Form \u8868\u5355\u7EC4\u4EF6</p>
      <ul> 
        <li>Radio</li>
        <li>Checkbox</li>
        <li>Switch</li>
        <li>Input</li>
        <li>InputNumber</li>
        <li>Rate</li>
        <li>Slider</li>
        <li>Select</li>
        <li>TimeSelect</li>
      </ul>
    </div>
    <div class='item'>
        <p>Data \u6570\u636E\u5C55\u793A</p>
        <ul> 
          <li>Avatar</li>
          <li>Badge</li>
          <li>Carousel</li>
          <li>Card</li>
          <li>Collapse</li>
          <li>Tag</li>
          <li>Timeline</li>
          <li>Progress</li>
          <li>Image</li>
          <li>InfiniteScroll</li>
          <li>Empty</li>
          <li>Result</li>
          <li>Descriptions</li>
          <li>Pagination</li>
          <li>Statistic</li>
        </ul>
    </div>
    <div class='item'>
        <p>Navigation \u5BFC\u822A</p>
        <ul> 
          <li>Affix</li>
          <li>Dropdown</li>
          <li>Breadcrumb</li>
          <li>PageHeader</li>
          <li>Tabs</li>
          <li>Steps</li>
          <li>Skeleton</li>
        </ul>
    </div>
    <div class='item'>
        <p>Feedback \u53CD\u9988\u7EC4\u4EF6</p>
        <ul> 
          <li>Alert</li>
          <li>Dialog</li>
          <li>Drawer</li>
          <li>Tooltip</li>
          <li>Loading</li>
          <li>Message</li>
        </ul>
    </div>
    <div class='item'>
        <p>Others \u5176\u4ED6</p>
        <ul> 
          <li>BackTop</li>
          <li>Divider</li>
          <li>GitHubCorner</li>
          <li>Transition</li>
          <li>Split</li>
        </ul>
    </div>
  </div>
</details>
<br>
<!-- ### \u5B8C\u6574\u5F15\u5165 -->
<h3 class='w-component-demo-item'>\u5B8C\u6574\u5F15\u5165</h3>
<p>\u5728 <code>main.js</code> \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5C31\u53EF\u4EE5\u5C06 Wheel UI \u5B8C\u6574\u5F15\u5165\u4F7F\u7528</p>
<pre><code class="language-javascript">import { createApp } from 'vue';
import WheelUI from 'gulu-for-ui';
import 'gulu-for-ui/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(WheelUI);
app.mount('#app');
</code></pre>
<br>
<!-- ### \u6309\u9700\u5F15\u5165 -->
<h3 class='w-component-demo-item'>\u6309\u9700\u5F15\u5165</h3>
<p>\u5982\u679C\u4F60\u53EA\u5E0C\u671B\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\u548C\u6307\u4EE4\uFF0C\u6BD4\u5982 Button\u3001Icon \u7EC4\u4EF6\u548C Loading \u6307\u4EE4\uFF0C\u90A3\u4E48\u9700\u8981\u5728 <code>main.js</code> \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9</p>
<pre><code class="language-javascript">import { createApp } from 'vue';
import { Button, Icon, vLoading } from 'gulu-for-ui';
import 'gulu-for-ui/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(Button).use(Icon).use(vLoading);

/* \u6216\u8005\u91C7\u7528\u4EE5\u4E0B\u5199\u6CD5 (\u53EF\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\u548C\u6307\u4EE4\u540D)
*  app.component('custom-button', Button);
*  app.component('shy-icon', Icon);
*  app.directive('d-loading', vLoading);
*/

app.mount('#app')
</code></pre>
<!-- ### Vue \u5355\u6587\u4EF6\u7EC4\u4EF6 -->
<p>.vue\u6587\u4EF6\u4EE3\u7801\u793A\u4F8B</p>
<pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    &lt;w-button icon='zan' type='primary'&gt;Hello Whell UI&lt;/w-button&gt;
    &lt;w-switch v-model='value' open-text='\u53D6\u6D88\u52A0\u8F7D' off-text='\u52A0\u8F7D\u4E2D' text-inline @change='change' /&gt;
    &lt;div v-loading='loading' class='directive-loading' w-loading-text='\u52A0\u8F7D\u4E2D'
      w-loading-background='rgba(255,255,255,.95)'/&gt;
      &lt;p v-for='i in 10'&gt;
        \u6307\u4EE4\u65B9\u5F0F - \u52A0\u8F7D
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import { Button, Switch, vLoading } from 'gulu-for-ui';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components:{
      'w-button': Button,
      'w-switch': Switch
    },
    directives:{ 'loading': vLoading },
    setup() {
      const value =  ref(false);
      const loading = ref(true);
      return { value, loading };
    }
  })
&lt;/script&gt;
</code></pre>
<p>\u8FD0\u884C\u7ED3\u679C\u53EF\u70B9\u51FB\u4E0B\u65B9\u7A7A\u767D\u533A\u57DF\uFF0C\u4E5F\u53EF\u4EE5
<a href="https://codepen.io/woxixiuqiangwei/pen/qBPKRbd" target='_blank'> \u5728\u7EBF\u6D4B\u8BD5 </a></p>
<iframe id="codepen-iframe" height="380px" style="width: 100%;" scrolling="no" 
  title="Wheel UI - \u7B80\u5355\u6D4B\u8BD5" 
  src="https://codepen.io/woxixiuqiangwei/embed/qBPKRbd?default-tab=result&theme-id=light" loading="lazy" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen 
  <a href="https://codepen.io/woxixiuqiangwei/pen/qBPKRbd" target='_blank'>
  Wheel UI - \u7B80\u5355\u6D4B\u8BD5</a> by romank 
  (<a href="https://codepen.io/woxixiuqiangwei" target='_blank'>@woxixiuqiangwei</a>)
  on 
  <a href="https://codepen.io" target='_blank'>CodePen</a>.
</iframe>`;export{n as attributes,i as html};
