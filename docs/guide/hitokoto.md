---
outline: deep
---

# Hitokoto API Examples

就一个接口还要写个文档，真是离谱。
本项目所有句子依赖[sentences-bundle](https://github.com/hitokoto-osc/sentences-bundle)语句库库。

## 接口列表
* <https://hi.logacg.com>
* <https://hi.logacg.com?c=b> （获取漫画分类下的句子）



> [!TIP]
> 每次请求返回一条句子，每条句子缓存1秒。并开启了访问限制，每个IP 1秒最多访问5次、10秒30次、1分钟120次。
<!-- > a:动画 b:漫画 c:游戏 d:文学 e:原创 f:来自网络 g:其他 h:影视 i:诗词 j:网易云 k:哲学 l:抖机灵 其他:作为 动画 类型处理 -->

## 分类

| 分类 | 说明     | 条数 | 接口                      |
| ---- | -------- | ---- | ------------------------- |
| a    | 动画     | 1    | https://hi.logacg.com?c=a |
| b    | 漫画     | 1    | https://hi.logacg.com?c=b |
| c    | 游戏     | 1    | https://hi.logacg.com?c=c |
| d    | 文学     | 1    | https://hi.logacg.com?c=d |
| e    | 原创     | 1    | https://hi.logacg.com?c=e |
| f    | 来自网络 | 1    | https://hi.logacg.com?c=f |
| g    | 其他     | 1    | https://hi.logacg.com?c=g |
| h    | 影视     | 1    | https://hi.logacg.com?c=h |
| i    | 诗词     | 1    | https://hi.logacg.com?c=i |
| j    | 网易云   | 1    | https://hi.logacg.com?c=j |
| k    | 哲学     | 1    | https://hi.logacg.com?c=k |
| l    | 抖机灵   | 1    | https://hi.logacg.com?c=l |

其他:作为 动画 类型处理

## 使用方法

1. `html`中定义一个装句子的`div`
```html
<div id='hitokoto_text'></div>
```

2. 在`script`标签中请求接口
:::code-group
```js [Fetch API]
// 这是浏览器原生的，不需要第三方请求库
fetch('https://hi.logacg.com')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
```

```js [Axios]
axios.get('https://hi.logacg.com')
  .then(({ data }) => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
```

```js [jQuery]
$.ajax({
  type: 'GET',
  url: 'https://hi.logacg.com',
  success (data) {
    $('#hitokoto_text').text(data.hitokoto)
  },
  error (jqXHR, textStatus, errorThrown) {
    // 错误信息处理
    console.error(textStatus, errorThrown)
  }
})
```

```js [XMLHttpRequest]
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://hi.logacg.com');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    const hitokoto = document.querySelector('#hitokoto_text');
    hitokoto.innerText = data.hitokoto;
  }
}
xhr.send();
```

```js [小程序]
// 需要在小程序开发平台->开发管理中把接口地址添加白名单
wx.request({
  url: 'https://hi.logacg.com',
  success (res) {
    console.log(res.data)
  }
})
```
:::