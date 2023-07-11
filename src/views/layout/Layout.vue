<template>
  <div class="page-content" :class="{ 'vh-100': addClass }">
    <div class="content-wrapper">
      <div class="content-inner">
        <div
          class="content"
          :class="{
            'd-flex justify-content-center align-items-center': addClass,
          }"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',

  data() {
    return {
      routesName: ['Auth', 'Unauthorized', 'NotFound'],
    }
  },
  computed: {
    addClass() {
      return this.routesName.includes(this.$route.name)
    },

    showComponent() {
      return !this.routesName.includes(this.$route.name)
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {},
}
</script>
