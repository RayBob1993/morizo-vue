<template>
  <div class="v-placeholder">
    <slot/>
  </div>
</template>

<style lang="scss">
  .v-placeholder {
    @keyframes v-placeholder {
      0% {
        opacity: .4;
      }

      100% {
        opacity: .95;
      }
    }

    background-color: #ddd;

    cursor: wait;

    animation: v-placeholder 1s linear infinite alternate;
  }
</style>
