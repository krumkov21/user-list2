<template>
  <v-card class="pa-4">
    <v-card-title class="text-h6 font-weight-medium">
      {{ statistic.title }}
    </v-card-title>
    <v-card-text class="text-h3 font-weight-bold">
      {{ statistic.value }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StatisticCard",
  props: {
    statistic: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
