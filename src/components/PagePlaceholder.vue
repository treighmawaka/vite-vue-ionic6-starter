<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: String,
});
</script>
<template>
  <div id="container" class="page-placeholder">
    <strong>{{ title }}</strong>
    <slot name="body">
      <p v-show="description">{{ description }}</p>
    </slot>
  </div>
</template>
<style lang="scss" scoped>
.page-placeholder {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.page-placeholder strong {
  font-size: 20px;
  line-height: 26px;
}

.page-placeholder p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

.page-placeholder a {
  text-decoration: none;
}
</style>
