<script setup lang="ts">
import { ref } from 'vue';
import {
  IonList,
  IonButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonModal,
  modalController,
} from '@ionic/vue';

import TheHeader from '@/components/TheHeader.vue';
import PagePlaceholder from '@/components/PagePlaceholder.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import Accordion from '@/components/Accordion.vue';
import dayjs, { Dayjs } from 'dayjs';

const date = ref('');
const datePicker = ref();

// set the date and dimiss the modal
const setDate = async (value: string) => {
  date.value = value;
  datePicker.value.$el.confirm();
  await modalController.dismiss();
};

// format date string
type FormatDateOptions = string | Dayjs | Date | null | undefined;
const formatDate = (value: FormatDateOptions, format = 'YYYY-MM-DD') => {
  const output = value ? dayjs(value) : dayjs();
  return output.format(format);
};
</script>

<template>
  <ion-page>
    <TheHeader />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <PagePlaceholder
        title="Empty state placeholder"
        description="A temporary message goes here."
      /> -->

      <LanguageSelector />

      <!-- base accordion -->
      <Accordion />

      <!-- Datetime in overlay -->
      <p>Selected date: {{ date }}</p>
      <p>Formatted date: {{ formatDate(date) }}</p>
      <ion-modal
        trigger="open-modal"
        :initial-breakpoint="0.75"
        :breakpoints="[0, 0.5, 0.75, 1]"
      >
        <ion-header>
          <ion-toolbar>
            <ion-title>Pick a date</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-datetime
            ref="datePicker"
            presentation="date"
            size="cover"
            :value="date"
            @ionChange="setDate($event.target.value)"
          ></ion-datetime>
        </ion-content>
      </ion-modal>

      <!-- lists -->
      <ion-list lines="full">
        <ion-item button router-link="/tabs" id="tabs">
          <ion-label>Show Tabs</ion-label>
        </ion-item>
        <ion-item button id="open-modal">
          <ion-label>Open Datetime Modal</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
