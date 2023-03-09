<template>
  <div
    class="calculator max-w-xl flex flex-col justify-center items-center mx-auto gap-8"
  >
    <section class="w-full relative flex flex-col">
      <button class="absolute top-2 left-2">
        <img src="/history.svg" class="w-8 h-8 opacity-40" alt="" />
      </button>
      <input
        type="text"
        placeholder="0"
        v-model="current"
        class="w-full mx-auto text-3xl px-10 pt-8 pb-4 border rounded-md text-right active:border-transparent focus:outline-gray-500/20"
      />
      <h3 v-if="error != null">{{ error }}</h3>
    </section>
    <section class="grid grid-cols-7 w-full gap-2">
      <button
        v-for="(operation, index) in operations"
        :key="index"
        @click="handleKeyPress"
        class="border px-6 py-4 flex items-center justify-center text-gray-700 font-light border-none bg-[#f1f3f4] hover:bg-[#e4e3e1] rounded-md"
        :class="{
          'bg-blue-500 text-white hover:bg-blue-400':
            operation.toString() === '=',
        }"
      >
        {{ operation }}
      </button>
    </section>
  </div>
</template>

<script lang="ts" src="./index.ts" />
