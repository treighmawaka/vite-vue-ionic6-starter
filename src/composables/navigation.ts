import { computed, ComputedRef } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useNavigation() {
  const router = useRouter();
  const route = useRoute();

  const routeName: ComputedRef = computed(() => route.name);
  const isGuestPage = computed(() => route.meta.guest);

  // go back to previous page
  const goBack = () => router.go(-1);

  // check if the current route is nested
  const routeParts = computed(() => route.fullPath.split('/'));

  return {
    goBack,
    routeName,
    isGuestPage,
  };
}
