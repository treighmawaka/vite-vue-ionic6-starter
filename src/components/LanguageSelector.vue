<script setup lang="ts">
import { ref } from 'vue';
import { useTranslation } from '@/composables/lang';

const { t, locale } = useTranslation();
</script>

<template>
  <p>
    {{ t('messages.toggle_language') }}
  </p>

  <select v-model="locale">
    <option value="en">English</option>
    <option value="fr">Fran&ccedil;ais</option>
  </select>
</template>
