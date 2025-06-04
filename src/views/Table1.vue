<template>
  <v-container>
    <h1>Table 1</h1>

    <!-- Employee Table + Timeline -->
    <v-row>
      <v-col cols="12" md="8">
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col cols="12" md="4">
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import EmployeesTable from "../components/EmployeesTable.vue";
import EventTimeline from "../components/EventTimeline.vue";
import SalesGraph from "../components/SalesGraph.vue";
import StatisticCard from "../components/StatisticCard.vue";

import employeesData from "../data/employees.json";
import timelineData from "../data/timeline.json";
import salesData from "../data/sales.json";
import statisticsData from "../data/statistics.json";

export default {
  name: "DashboardPage",
  components: {
    EmployeesTable,
    EventTimeline,
    SalesGraph,
    StatisticCard,
  },
  data() {
    return {
      employees: employeesData,
      sales: salesData,
      statistics: statisticsData,
      timeline: timelineData,
      selectedEmployee: {
        name: "",
        title: "",
      },
      snackbar: false,
    };
  },
  computed: {
    snackbarLocation() {
      const display = useDisplay();
      return display.lgAndUp.value ? "left" : "bottom";
    },
  },
  methods: {
    setEmployee(employee) {
      this.selectedEmployee = employee;
      this.snackbar = true;
    },
  },
};
</script>
