<template>
  <main class="flex justify-center items-center h-full w-full">
    <div class="border border-slate-400 p-9 flex flex-col">
      <div class="text-center">{{ contador }}</div>
      <div class="flex gap-3">
        <button @click="restar">RESTAR</button>
        <button @click="sumar">SUMAR</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

let contador = ref<number>(0);

function sumar() {
  contador.value++;
}
function restar() {
  contador.value--;
}
</script>
