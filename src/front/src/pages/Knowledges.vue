<template>
  <div>
    {{ items }}
  </div>
</template>

<script>

export default {
  name: 'Knowledges',
  computed: {
    items() {
      return this.$store.state.knowledges;
    },
  },
};
</script>
