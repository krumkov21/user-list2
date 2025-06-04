<template>
  <v-timeline density="compact" side="start">
    <v-timeline-item
      v-for="(item, i) in timeline"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" class="text-white">
        <v-card-title class="py-3">
          <h3 class="text-h6 font-weight-bold">{{ item.title }}</h3>
        </v-card-title>
        <v-card-text class="text-white text-body-2">
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "EventTimeline",
  props: {
    timeline: {
      type: Array,
      required: true,
    },
  },
};
</script>
