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
    width: 50px;
    justify-content: center;
}
.loader {
  display: flex;
  column-gap: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #121212;
  box-shadow: 22px 0 #121212, -22px 0 #121212;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #444444;
    box-shadow: 22px 0 #444444, -22px 0 #121212;
  }
  50% {
    background-color: #121212;
    box-shadow: 22px 0 #444444, -22px 0 #444444;
  }
  100% {
    background-color: #444444;
    box-shadow: 22px 0 #121212, -22px 0 #444444;
  }
}
      
</style>