<script lang="ts" setup>

</script>

<template>
  <div class="load-icon">
    <span class="loader"></span>
  </div>
</template>

<style lang="scss" scoped>
.load-icon {
    display: flex;
}
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #121212;
  box-shadow: 32px 0 #121212, -32px 0 #121212;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #444444;
    box-shadow: 32px 0 #444444, -32px 0 #121212;
  }
  50% {
    background-color: #121212;
    box-shadow: 32px 0 #444444, -32px 0 #444444;
  }
  100% {
    background-color: #444444;
    box-shadow: 32px 0 #121212, -32px 0 #444444;
  }
}
      
</style>