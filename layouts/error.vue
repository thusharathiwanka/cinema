<template>
  <NotFound />
</template>

<script>
import NotFound from '@/components/NotFound/NotFound.vue'

export default {
  name: 'ErrorLayout',
  components: { NotFound },
  layout: 'empty',
}
</script>
