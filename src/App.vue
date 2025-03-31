<template>
 

  <HeaderMain />

  <hr class="w-screen h-[3px] bg-black mt-4">

  <router-view class="mt-40"></router-view>

  
</template>

<script setup>
import HeaderMain from "./components/Header/HeaderMain.vue";
</script>