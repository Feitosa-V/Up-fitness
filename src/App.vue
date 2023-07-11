<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import '@/assets/icons/phosphor/styles.min.css'
import '@/assets/css/style.css'

import Layout from '@/views/layout/Layout.vue'

export default {
  name: 'App',

  components: {
    Layout,
  },
}
</script>
