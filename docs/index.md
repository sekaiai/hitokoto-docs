---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import { ref,onMounted,onUnmounted  } from 'vue'

const loading = ref(false)
const hitokoto = ref('一路走一路失去，也一路拥有。')
const from_who = ref('')

let timer
function startInterval() {
  timer = setTimeout(fetchHitokoto, 30 * 1000)
}
async function fetchHitokoto() {
  if(loading.value) return
  loading.value = true

  if (timer) clearTimeout(timer)
  const data = await fetch('https://hi.logacg.com').then(res => res.json())
  if (data && data.hitokoto) {
    let str = ''
    if (data.from_who) {
      str += (`—— ${data.from_who}`)
    }

    if (data.from && data.from !== '原创') {
      str += (`「${data.from}」`)
    }
    from_who.value = str
    hitokoto.value = data.hitokoto
  }

  startInterval()
  loading.value = false
}

onMounted(() => {
  fetchHitokoto()
  document.body.style.backgroundImage = "url('./73575222_p0.webp')"
})

onUnmounted(() => {
  clearTimeout(timer)
  document.body.style.backgroundImage = 'none'
})
</script>

<div :class='$style.body'>
  <h1 :class='$style.h1'>雪阳哦</h1>
  <div :class="[$style.hitokoto]">
    {{hitokoto}}
  </div>
  <div :class="[$style.from_who]">{{from_who}}
  <div :class="[$style.more]" @click="fetchHitokoto" title="再来一句">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="[loading ? $style.loading: '']">
      <path fill="currentColor"
        d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z">
      </path>
    </svg>
  </div>
  </div>
</div>

<div :class='$style.copyright'>
    <a href="https://www.pixiv.net/artworks/73575222" rel="noopener noreferrer" target="_blank">背景图PIXIV</a>
  <span></span>
  <a href="https://logacg.com">记录境界线上的地平线</a>
  <span></span>
  <a href="https://github.com/sekaiai" rel="noopener noreferrer" target="_blank">GITHUB</a>
  <span></span>
  <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn">蜀ICP备2022012373号-1</a>
  <span></span>
  <a rel="noopener noreferrer" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51015602000388">川公网安备51015602000388号</a>
</div>

<style module>
:root {
  --main-color: #fff;
  --font-size-hitokoto: 40px;
  --font-size-from-who: 28px;
}
/* 布局组件 */
.h1 {
  height: 12vh;
  opacity: 0;
}

.body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  /* color: var(--main-color); */
}

.copyright {
  position: fixed;
  text-align: center;
  font-size: 14px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left :0;
  right: 0;
  bottom: 2px;
}
/* 版权信息样式 */
.copyright img {
  width: 14px;
  display: block;
}

.copyright span {
  display: inline-block;
  border-right: 1px solid #333;
  height: 14px;
}

/* 文本样式 */
.hitokoto {
  font-family: serif;
  text-align: center;
  font-size: var(--font-size-hitokoto);
  max-width: 824px;
  padding: 0 12px;
  line-height: initial;
  /* border-radius: 4px; */
  /* background-color: var(--vp-nav-bg-color); */
  /* background: color-mix(in srgb, var(--vp-nav-bg-color) 60%, transparent); */
}

.from_who {
  font-family: serif;
  text-align: center;
  font-size: var(--font-size-from-who);
  padding: 0 10px;
  line-height: initial;
  display: flex;
  align-items: flex-end;
}

.more {
  width: 16px;
  height: 16px;
  padding: 6px 3px;
  cursor: pointer;
  line-height: 1;
  box-sizing: content-box;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 状态样式 */
.loading {
  animation: spin .3s ease infinite;
}
</style>
