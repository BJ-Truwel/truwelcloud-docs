import{_ as e,c as t,o,a as c}from"./app-BdWdq4lw.js";const r={},d=c('<h2 id="converter" tabindex="-1">Converter</h2><p>前面的章节，都是介绍，在实体类上面配置转换逻辑，它们主要应用在编译阶段。在实际应用时，框架提供了 <code>Converter</code> 类，来执行具体的转换逻辑。</p><p>针对类型转换该类提供了如下方法：</p><ul><li><strong><code>&lt;S, T&gt; T convert(S source, Class&lt;T&gt; targetType)</code></strong></li></ul><p>传入需要转换的对象（<code>source</code>）与目标类型（<code>targetType</code>），最终返回目标类型的实例对象。</p><ul><li><strong><code>&lt;S, T&gt; T convert(S source, T target)</code></strong></li></ul><p>传入需要转换对象（<code>source</code>）与目标对象（<code>target</code>），最终将 <code>source</code> 中的属性，转换到 <code>target</code> 对象中，该方法与上面的区别在于，该方法返回的是传入的 <code>target</code> 对象，上面的方法返回的是一个新的对象。</p><ul><li><strong><code>&lt;S, T&gt; List&lt;T&gt; convert(List&lt;S&gt; source, Class&lt;T&gt; targetType)</code></strong></li></ul><p>该方法会将一个源类型（<code>source</code>）的集合转换为目标类型（<code>targetType</code>）的集合</p><ul><li><strong><code>&lt;T&gt; T convert(Map&lt;String, Object&gt; map, Class&lt;T&gt; target)</code></strong></li></ul><p>该方法会将一个 <code>Map&lt;String, Object&gt;</code> 转换为目标类型的实例对象。</p>',11),l=[d];function s(n,g){return o(),t("div",null,l)}const p=e(r,[["render",s],["__file","converter-api.html.vue"]]);export{p as default};
