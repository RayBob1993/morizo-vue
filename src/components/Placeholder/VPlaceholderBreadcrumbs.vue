<template>
  <v-row :gutters-x="false">
    <v-col
      v-for="breadcrumb in 4"
      :key="`breadcrumb-${breadcrumb}`"
      size="auto"
    >
      <v-placeholder-text
        size="small"
        style="width: 100px"
        :class="{
          'm-l-6': breadcrumb > 1
        }"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import VPlaceholderText from './VPlaceholderText.vue';
</script>
