<script lang="ts" setup>
import {
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
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
  <ion-page data-pageid="tab2">
    <TheHeader title="Tab 2" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <PagePlaceholder
        title="Tab2 placeholder title"
        description="A descriptive message goes here."
      />
    </ion-content>
  </ion-page>
</template>
