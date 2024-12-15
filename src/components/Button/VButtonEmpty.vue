<template>
  <button
    class="v-button-empty"
    type="button"
  >
    <slot/>
  </button>
</template>

<style lang="scss">
  .v-button-empty {
    @include utils-user-select(none);
    @include utils-appearance(none);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    outline: 0;
    border: 0;

    border-radius: 0;

    background: none;

    cursor: pointer;
    padding: 0;
  }
</style>
