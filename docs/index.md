---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---


<script setup>
import { ref,onMounted,onUnmounted  } from 'vue'

const loading = ref(false)
const hitokoto = ref('ni, sekai')
const from_who = ref('')

let url = []
function changeBackgroundImage() {
  url.unshift(`url(https://www.dmoe.cc/random.php?t=${Math.random()})`)
  url = url.slice(0, 2)
  document.body.style.backgroundImage = url.join(',')
}


let timer
function startInterval() {
  timer = setTimeout(fetchHitokoto, 10 * 1000)
}
async function fetchHitokoto() {
  if(loading.value) return
  loading.value = true

  if (timer) clearTimeout(timer)
  changeBackgroundImage()
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
})

onUnmounted(() => {
  clearTimeout(timer)
  document.body.style.backgroundImage = 'none'
})
</script>

<div :class='$style.body'>
  <h1 :class='$style.h1'>一言</h1>
  <div :class="[$style.text_cover, $style.hitokoto]">
    {{hitokoto}}
  </div>
  <div :class="[$style.text_cover, $style.from_who]">{{from_who}}</div>
  <div :class="[$style.text_cover, $style.more]" @click="fetchHitokoto" title="再来一句">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="[loading ? $style.loading: '']">
      <path fill="currentColor"
        d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z">
      </path>
    </svg>
  </div>


</div>

<style module>
:root {
  --main-color: #fff;
  --font-size-hitokoto: 40px;
  --font-size-from-who: 28px;
}

.body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  /* color: var(--main-color); */
}

.h1 {
  height: 20vh;
  opacity: 0;
}

.hitokoto {
  font-family: serif;
  text-align: center;
  font-size: var(--font-size-hitokoto);
  max-width: 800px;
  padding: 0 12px;
  line-height: initial;
}

.text_cover {
  background-color: var(--vp-nav-bg-color);
  background: color-mix(in srgb, var(--vp-nav-bg-color) 90%, transparent);
  border-radius: 2px;
}

.from_who {
  font-family: serif;
  text-align: center;
  font-size: var(--font-size-from-who);
  padding: 0 10px;
  line-height: initial;
}

.more {
  width: 1em;
  height: 1em;
  padding: 3px;
  cursor: pointer;
  line-height: 1;
  box-sizing: content-box;
}

.loading {
  animation: spin .3s ease-in-out infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>