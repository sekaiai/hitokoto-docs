今天看仓库发现了这玩意儿，我有写过这个？

- 文档地址：https://sekaiai.github.io
- 接口地址：https://hi.logacg.com

USE
```js
<div id='hitokoto_text'></div>

const hitokoto = document.querySelector('#hitokoto_text')
fetch('https://hi.logacg.com')
  .then(response => response.json())
  .then(data => {
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
```
