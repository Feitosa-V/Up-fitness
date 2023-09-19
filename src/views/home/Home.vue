<template>
  <InitialBanner />
  <TrainingProgram />
  <Plans />
  <Contact />
</template>
<script>
import InitialBanner from '@/components/landingPage/InitialBanner.vue'
import TrainingProgram from '@/components/landingPage/TrainingProgram.vue'
import Plans from '@/components/landingPage/Plans.vue'
import Contact from '@/components/landingPage/Contact.vue'

export default {
  name: 'Home',
  components: {
    InitialBanner,
    TrainingProgram,
    Contact,
    Plans,
  },
}
</script>
