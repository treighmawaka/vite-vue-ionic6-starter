<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { computed } from 'vue';
import { home } from 'ionicons/icons';
import { useNavigation } from '@/composables/navigation';

const { isNested } = useNavigation();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Home</ion-title>
    </ion-toolbar>
  </ion-header> -->
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button
          :v-show="isNested"
          slot="primary"
          default-href="/"
        ></ion-back-button>
      </ion-buttons>
      <ion-title>{{ title ?? $route.meta.title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped></style>
