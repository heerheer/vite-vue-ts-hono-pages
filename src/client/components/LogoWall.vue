<script setup lang="ts">
import { motion, type MotionProps, stagger } from "motion-v";

const container: MotionProps["variants"] = {
  show: {
    transition: {
      delayChildren: stagger(0.1),
      duration: 0.4,
    },
  },
};

const item: MotionProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
</script>

<template>
  <motion.div :variants="container" initial="hidden" animate="show" class="logo-wall">
    <motion.a href="https://vite.dev" target="_blank" :variants="item">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </motion.a>
    <motion.a href="https://vuejs.org/" target="_blank" :variants="item">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </motion.a>
    <motion.a href="https://hono.dev/" target="_blank" :variants="item">
      <img
        src="https://hono.dev/images/logo.svg"
        class="logo hono"
        alt="Hono logo"
      />
    </motion.a>
    <motion.a
      href="https://pages.cloudflare.com/"
      target="_blank"
      :variants="item"
    >
      <img
        src="https://pages.cloudflare.com/resources/logo/logo.svg"
        class="logo pages"
        alt="Cloudflare Pages logo"
      />
    </motion.a>
  </motion.div>
</template>

<style scoped>
@reference '@/style.css';

a{
  @apply text-4xl
}

.logo-wall {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em var(--vite-color));
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em var(--vue-color));
}

.logo.hono:hover {
  filter: drop-shadow(0 0 2em var(--hono-color));
}
.logo.pages:hover {
  filter: drop-shadow(0 0 2em var(--pages-color));
}
</style>
