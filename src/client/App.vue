<script setup lang="ts">
import LogoWall from "@/components/LogoWall.vue";
import UsersList from "@/components/UsersList.vue";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div class="app-container">
    <LogoWall />
    <HelloWorld>
      <template #default>
        <p class="flex items-end gap-2">
          <span class="text-[var(--vite-color)]">Vite</span>+<span class="text-[var(--vue-color)]">Vue</span>+<span class="text-[var(--hono-color)]">Hono</span> 
          <span class="text-3xl">For</span>
          <span class="text-[var(--pages-color)]">Cloudflare Pages</span>
        </p>
        <span class="text-xl flex items-center gap-2">And 
          <iconify-icon icon="devicon:tailwindcss" width="1.2em" height="1.2em"></iconify-icon>tailwindcss,
          <iconify-icon icon="logos:daisyui-icon" width="0.77em" height="1.2em"></iconify-icon>daisyui,
          <iconify-icon icon="simple-icons:iconify" width="1.2em" height="1.2em"></iconify-icon>iconify,
          <iconify-icon icon="simple-icons:motion-v" width="1.2em" height="1.2em"></iconify-icon>motion-v!</span>
      </template>
    </HelloWorld>
    <UsersList />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
