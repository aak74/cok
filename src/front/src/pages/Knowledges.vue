<template>
  <div class="kn-radar">
    <h1>Knowledges</h1>
    <chart-radar
      legend="Knowledges"
      :values="values"
      :labels="labels"
    />
  </div>
</template>

<script>
import ChartRadar from '../components/ChartRadar'

export default {
  name: 'Knowledges',
  components: {
    ChartRadar,
  },
  computed: {
    items() {
      return this.$store.state.knowledges;
    },
    values() {
      return [
        {
          label: this.$store.getters.project.name,
          data: this.$store.getters.areas.map(item => item.weight),
        },
        {
          label: 'Team',
          data: this.$store.getters.team,
        },
      ];
    },
    labels() {
      return this.$store.getters.project.areas.map(item => item.name)
    },
  },
};
</script>


<style lang="sass">
.kn-radar
  width: 600px
  padding-top: 60px
</style>
