<template>
  <section class="v-page-layout">
    <template v-if="slots?.custom">
      <slot name="custom"/>
    </template>

    <template v-else>
      <header
        v-if="isHeaderVisible"
        class="v-page-layout__header"
      >
        <v-container>
          <template v-if="!loading">
            <v-breadcrumbs
              v-if="breadcrumbs?.length"
              class="v-page-layout__breadcrumbs"
              :breadcrumbs="breadcrumbs"
            />

            <h1
              v-if="title"
              class="v-page-layout__title"
            >
              {{ title }}
            </h1>
          </template>

          <template v-else>
            <v-placeholder-breadcrumbs v-if="breadcrumbs?.length"/>

            <v-placeholder-h
              v-if="title"
              level="1"
              style="max-width: 300px"
            />
          </template>
        </v-container>
      </header>

      <div class="v-page-layout__body">
        <template v-if="slots?.body">
          <slot name="body"/>
        </template>

        <v-container v-else>
          <slot/>
        </v-container>
      </div>
    </template>
  </section>
</template>

<script lang="ts" setup>
  import type { IVPageLayoutProps, IVPageLayoutSlots } from './types';
  import { VContainer } from '../Grid';
  import { VBreadcrumbs } from '../../Breadcrumbs';
  import { VPlaceholderH, VPlaceholderBreadcrumbs } from '../../Placeholder';
  import { computed } from 'vue';

  const props = defineProps<IVPageLayoutProps>();

  const slots = defineSlots<IVPageLayoutSlots>();

  const isHeaderVisible = computed<boolean>(() => !!props?.title || !!props?.breadcrumbs?.length);
</script>
