<script lang="ts" setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import PagePlaceholder from '@/components/PagePlaceholder.vue';
import { useNavigation } from '@/composables/navigation';
import TheHeader from '@/components/TheHeader.vue';

const { isNested } = useNavigation();
</script>
<template>
  <ion-page data-pageid="tab3">
    <TheHeader title="Tab 3" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <PagePlaceholder
        title="Tab3 placeholder title"
        description="A descriptive message goes here."
      />
    </ion-content>
  </ion-page>
</template>
