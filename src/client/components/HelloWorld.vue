<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";

const count = ref(0);

const hello = ref<string | undefined>(undefined);
const fetchHello = async () => {
  hello.value = undefined;
  const response = await fetch("/api/hello");
  hello.value = await response.text();
};
</script>

<template>
  <h1 class="flex flex-col items-center" >
    <slot/>
  </h1>

  <div class="my-card">
    <button class="" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test Client HMR
    </p>
    <p>
      Edit
      <code>index.ts</code> to test Server<iconify-icon icon="simple-icons:cloudflarepages" width="24" height="24"></iconify-icon>
      HMR
    </p>
    <button class="btn-info" type="button" @click="fetchHello">
      <iconify-icon icon="material-symbols:refresh-rounded" width="24" height="24"></iconify-icon>fetch hello
    </button>
    <motion.p
      :key="hello"
      :class="{ underline: hello == undefined }"
      :initial="{ opacity: 0,scale:0.8 }"
      :animate="{ opacity: 1,scale:1 }"
      :transition="{ duration: 0.6,type:'spring',damping:10 }"
      :exit="{ opacity: 0,scale:0 }"
    >
      {{ hello ?? "Please fetch hello!" }}
    </motion.p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>

  <p>
    Check out
    <a href="https://github.com/honojs/starter" target="_blank"
      >honojs/starter</a
    >, the official Hono starter
  </p>

  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
@reference '@/style.css';
h1{
  @apply text-6xl font-bold
}
.read-the-docs {
  color: #888;
}
</style>
